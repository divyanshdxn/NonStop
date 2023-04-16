"use client";

import { User } from "@/components/NavBar";
import { useEffect, useState } from "react";
import {
  FaCoins,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const b = {
  name: "",
  username: "",
  mail: "",
  imageUrl: "",
  FacebookUrl: "",
  InstagramUrl: "",
  TwitterUrl: "",
  LinkedInUrl: "",
};

const fakeUser: User = {
  name: "I am a fake",
  img: "",
  id: "fake",
  createdAt: "just now",
  updatedAt: "never",
  email: "fake@fakemail.com",
};

export default function Profile() {
  const [state, setState] = useState(fakeUser);
  const { id, img, name, email } = state; //TODO: get all data from people.

  useEffect(() => {
    // load data from localstorage
    const user = window.localStorage.getItem("user");
    if (user != null) {
      const u = JSON.parse(user);
      setState(u);
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="md:m-16 p-8 rounded-lg max-w-min">
        <img src={img} alt="" className="rounded-full" />
        <p className="text-3xl font-semibold mt-4">{name}</p>
        <p>Id: {id}</p>
        <div className="flex flex-row mt-2 gap-4">
          <span className="p-2 bg-neutral-900 rounded-full">
            <FaInstagram />
          </span>
          <span className="p-2 bg-neutral-900 rounded-full">
            <FaTwitter />
          </span>
          <span className="p-2 bg-neutral-900 rounded-full">
            <FaFacebook />
          </span>
          <span className="p-2 bg-neutral-900 rounded-full">
            <FaLinkedinIn />
          </span>
        </div>
        <div className="w-full flex flex-row mt-4 gap-4">
          <a href="">
            <button className="w-96 bg-neutral-700 rounded-full py-2">
              Share Profile
            </button>
          </a>
          <a href="">
            <button className="w-96 border border-gray-700 hover:bg-gray-700 rounded-full py-2 ">
              Edit Profile
            </button>
          </a>
        </div>

        <div className="w-full flex flex-row flex-wrap mt-4 gap-4">
          <div className="w-96 flex flex-row justify-between p-2 rounded-lg bg-neutral-900">
            <div className="flex gap-2">
              <div className="p-1 rounded-lg bg-gray-950">
                {" "}
                <FaStar className="text-yellow-400" />
              </div>
              Points
            </div>
            <div> 0</div>
          </div>
          <div className="w-96 flex flex-row justify-between p-2 rounded-lg bg-neutral-900">
            <div className="flex gap-2">
              <div className="p-1 rounded-lg bg-gray-950">
                {" "}
                <FaCoins className="text-purple-400" />
              </div>
              Coins
            </div>
            <div>
              {" "}
              234{" "}
              <a href="">
                <button className="text-sm ml-4 text-purple-200">Redeem</button>
              </a>
            </div>
          </div>
        </div>

        <div className="p-4 bg-neutral-900 mt-4 rounded-lg">
          <p className="text-xl text-gray-400 font-semibold">Rank</p>
          <div className="flex flex-row flex-wrap gap-2">
            <div className=" mt-4 p-2 w-48 bg-yellow-950 rounded-lg">
              <img
                src="https://static.vecteezy.com/system/resources/previews/009/314/440/original/earth-globe-clip-art-vector-illustration-isolated-free-png.png"
                alt=""
                width={24}
              />
              <p className="text-sm text-gray-300 font-light mt-1">Global</p>
              <p className="font-semibold mt-2">#N/A</p>
            </div>
            <div className=" mt-4 p-2 w-48 bg-green-950 rounded-lg">
              <img
                src="https://png.pngtree.com/png-vector/20210129/ourmid/pngtree-the-national-flag-of-india-png-image_2845292.jpg"
                width={24}
              />
              <p className="text-sm text-gray-300 font-light mt-2">India</p>
              <p className="font-semibold mt-2">#2773</p>
            </div>
            <div className=" mt-4 p-2 w-48 bg-blue-950 rounded-lg">
              <img
                src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-graduation-cap-flat-multi-color-icon-png-image_315724.jpg"
                width={24}
              />
              <p className="text-sm text-gray-300 font-light mt-2">Regional</p>
              <p className="font-semibold mt-2">#45</p>
            </div>
            <div className=" mt-4 p-2 w-48 ">
              <img src="" alt="" />
              <p className="text-sm text-gray-300 font-light">Leaderboards</p>
              <p className="font-semibold mt-2">#N/A</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-neutral-900 mt-4 rounded-lg">
          <p className="text-xl text-gray-400 font-semibold">Badges</p>
        </div>

        <div className="p-4 bg-neutral-900 mt-4 rounded-lg">
          
          <p className="text-xl text-gray-400 font-semibold">Certificates</p>

          <div className="flex flex-row mt-4  items-center">
            <div className="h-7 w-32">
            <img className="h-7" src="https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5e69eaee8a0a1_Flipkart_logo.png" alt="" />
            </div>
            <div>
              <p className="text-blue-200 font-semibold text-sm">Certificate of Participation</p>
              <p className="text-sm font-light text-blue-200">Level 1: E-Commerse & Tech Quiz</p>
              <p className="text-sm font-light text-blue-200">31 Jul 2022, 12:22 PM IST</p>
            </div>
          </div>

          <div className="flex flex-row mt-4 items-center">
            <div className="h-7 w-32">
            <img className="h-7" src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/612cccd3bc368_Quizathon_certy_logo1.png" alt="" />
            </div>
            <div>
              <p className="text-blue-200 font-semibold text-sm">Certificate of excellence</p>
              <p className="text-sm font-light text-blue-200">Reliance Quiz-a-thon 6.0</p>
              <p className="text-sm font-light text-blue-200">30 Nov 21, 01:02 PM IST</p>
            </div>
          </div>

          <div className="flex flex-row mt-4 items-center">
            <div className="h-7 w-32">
            <img className="h-7" src="https://d8it4huxumps7.cloudfront.net/images/partners/partners125/5e97c9b138753_60res.png" alt="" />
            </div>
            <div>
              <p className="text-blue-200 font-semibold text-sm">Certificate of excellence</p>
              <p className="text-sm font-light text-blue-200">Green Mantra</p>
              <p className="text-sm font-light text-blue-200">16 Sep 21, 02:11 AM IST</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
