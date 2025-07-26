// Profile Page

import React from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Facebook, Instagram } from "lucide-react";

function HomePage() {
  const { authUser, logout } = useAuthStore();

  const createdAtDate = new Date(authUser.created_at);

  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  console.log(authUser);

  return (
    <div className="container max-w-md w-full h-full mx-auto flex flex-col gap-8 items-center pt-20 ">
      <h1 className="font-bold text-3xl">My Profile</h1>
      <div className="w-full h-fit flex flex-col gap-2 items-center rounded-xl border-1 bg-gray-900 border-gray-800 p-8">
        <div className="w-full flex justify-center border-b-1 border-gray-700 pb-8">
          <img src="/avatar.png" className="size-30" alt="user default image" />
        </div>
        <div className="pt-8 flex gap-2">
          <h1>Name: </h1>
          <h1>{authUser.name}</h1>
        </div>
        <div className=" flex gap-2">
          <h1>Email: </h1>
          <h1>{authUser.email}</h1>
        </div>
        <div className="flex gap-2">
          <h1>Joined: </h1>
          <h1>{formattedDate}</h1>
        </div>
        <div className="flex gap-4 pt-4">
          <img
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png"
            className="size-7 hover:cursor-pointer"
            alt="facebook"
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/instagram_icon-instagram_buttoninstegram-256.png"
            className="size-7 hover:cursor-pointer"
            alt="instagram"
          />
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-256.png"
            className="size-7 hover:cursor-pointer"
            alt="linkedin"
          />
          <img
            src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
            className="size-7 hover:cursor-pointer"
            alt="gmail"
          />
        </div>
        <div className="w-full flex justify-around pt-8">
          <button className="bg-blue-950 rounded-md px-4 py-2 hover:cursor-pointer" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
