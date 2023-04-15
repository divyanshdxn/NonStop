"use client";

import { useState } from "react";
import { FaBook, FaLocationArrow } from "react-icons/fa";
import { CoachCard, CoachDetails, coaches } from "./CoachCard";

export default function Mentorship() {
  const [sports, setSports] = useState("All");
  const [locations, setLocation] = useState("Raipur");

  return (
    <div>
      <section id="coaches_hero" className="flex md:flex-row md:my-32">
        <div className="md:p-32 md:w-1/2 ">
          <h3 className="text-4xl font-bold">
            Sports coaches near me in India
          </h3>
          <p className="mt-12">Sports coaches near you</p>
          <p>3884 coaches</p>
          <p>Sports coaches near you</p>
          <p>No Commission</p>

          <div className="rounded-lg bg-black p-4 mt-12 flex flex-row items-center gap-4 min-w-min max-w-min">
            <FaBook />
            <input
              className="bg-gray-900 p-2 outline-none text-gray-400 rounded-lg"
              value={sports}
              onChange={(e) => setSports(e.target.value)}
            />
            <span>|</span>
            <FaLocationArrow />
            <input
              className="bg-gray-900 p-2 outline-none text-gray-400 rounded-lg"
              value={sports}
              onChange={(e) => setSports(e.target.value)}
            />
            <a href="">
              <button className="bg-green-600 px-4 py-2 rounded-lg">
                Search
              </button>
            </a>
          </div>
        </div>

        <div className="p-16 w-1/2">
          <img
          className=" hidden md:inline rounded-xl"
          src="https://i.pinimg.com/564x/97/5d/00/975d00076330b10dd69f0312136e5b81.jpg"
          alt=""
        />
        </div>
      </section>

      <h1 className="text-3xl p-16">Choose from 3,988 Football teachers</h1>

      <section className="flex flex-row flex-wrap gap-y-12 gap-x-4 justify-evenly ">
        {coaches.map(coach => <CoachCard coachDetails={coach} />)}
      </section>
    </div>
  );
}
