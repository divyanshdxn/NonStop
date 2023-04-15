"use client"

import { useState } from "react"
import { FaBook, FaLocationArrow } from "react-icons/fa"

export default function Mentorship() {

  const [sports, setSports] = useState("All")
  const [locations, setLocation] = useState("Raipur")

  return <div>
    <section id = "coaches_hero" className="w-full flex md:flex-row p-16">
      <div className="md:p-32 md:w-2/3"> 
        <h3 className="text-4xl font-bold">Sports coaches near me in India</h3>
        <p className="mt-12">Sports coaches near you</p>
        <p>3884 coaches</p>
        <p>Sports coaches near you</p>
        <p>No Commission</p>

        <div className="rounded-lg bg-black p-4 mt-12 flex flex-row items-center gap-4">
          <FaBook/>
          <input className="bg-gray-900 p-2 outline-none text-gray-400 rounded-lg" value={sports} onChange={e => setSports(e.target.value)}/>
          <span>|</span>
          <FaLocationArrow/>
          <input className="bg-gray-900 p-2 outline-none text-gray-400 rounded-lg" value={sports} onChange={e => setSports(e.target.value)}/>
          <a href=""><button className="bg-green-600 px-4 py-2 rounded-lg">Search</button></a>
        </div>
      </div>

      <img className=" hidden md:inline rounded-xl" src="https://i.pinimg.com/564x/97/5d/00/975d00076330b10dd69f0312136e5b81.jpg" alt="" />
    </section>
  </div>
}
