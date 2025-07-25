// Profile Page

import React from "react";
import { useAuthStore } from "../../store/useAuthStore";

function HomePage() {
  const { authUser } = useAuthStore();

  const createdAtDate = new Date(authUser.created_at);

  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  console.log(authUser);

  return (
    <div className="container max-w-lg w-full h-full mx-auto flex justify-center items-center pt-20">
      <div className="w-full bg-violet-600 h-fit flex flex-col gap-2 items-center">
        <img src="/avatar.png" className="size-30" alt="user default image" />
        <div className=" flex gap-4">
          <h1>Name</h1>
          <h1>{authUser.name}</h1>
        </div>
        <div className=" flex gap-4">
          <h1>Email</h1>
          <h1>{authUser.email}</h1>
        </div>
        <div className="">
          <h1>Joined {formattedDate}</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
