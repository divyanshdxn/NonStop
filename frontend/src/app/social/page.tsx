"use client";

import { User } from "@/components/NavBar";
import Link from "next/link";
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
      <Link href="post" className="w-full">
      <img src="social.png" alt="" className="w-full" />
      
      </Link>
    </div>
  );
}
