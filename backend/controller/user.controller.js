import bcrypt from "bcrypt";
import { generateToken } from "../lib/utils.js";
import { sql } from "../lib/db.js";

export const createUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields must be filled in" });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be 6 characters long" });
    }

    const existingUser = await sql`
      SELECT * FROM users WHERE email=${email}
    `;

    if (existingUser.length !== 0) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await sql`
      INSERT INTO users (email, password, name)
      VALUES (${email}, ${hashedPassword}, ${name})
      RETURNING *
    `;

    if (newUser.length === 0) {
      return res.status(400).json({ message: "Invalid user" });
    }

    generateToken(res, newUser[0].id);

    res.status(200).json({ success: true, data: newUser });
  } catch (error) {
    console.log("error in createUser controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields must be filled in" });
    }

    const user = await sql`
      SELECT * FROM users WHERE email=${email}
    `;

    if (!user.length === 0) {
      return res.status(400).json({ message: "User does not exists!" });
    }

    const passwordIsCorrect = bcrypt.compare(password, user[0].password);

    if (!passwordIsCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(res, user[0].id);

    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log("error in login controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("error in logout controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
