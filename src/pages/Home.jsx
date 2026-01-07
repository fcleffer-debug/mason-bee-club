import SubscribeButton from "../components/SubscribeButton";

import React from "react";
import meadowImg from "../assets/bee-meadow.png";
import gardenImg from "../assets/bee-garden.png";
import stationImg from "../assets/mason-bee-station.png";
import masonBeeTubesImg from "../assets/mason-bee-tubes.png";

import { useState } from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const [activeCard, setActiveCard] = useState(null);
  const stationIdeas = [
  {
    id: "station",
    title: "Bee Station Concept",
    image: stationImg,
    text: (
      <>
        <p className="mb-3">
          The Bee Station concept was born from late-night Amazon searches and my
          desire to design and invent something meaningful and technical.
        </p>
        <p className="mb-3">
          I wanted a station that could observe, measure, and tell a story —
          not just house bees.
        </p>
        <p>
          Follow the build, plans, and evolution of the Bee Station.
        </p>

      <div style={{ marginTop: "1rem" }}>
        <SubscribeButton label="Subscribe for Updates" />
      </div>

      </>
    ),
  },
  {
    id: "garden",
    title: "Backyard Gardens",
    image: gardenImg,
    text: (
      <>
        <p className="mb-3">
          Mason bees thrive in rich, diverse garden habitats where flowers bloom
          throughout the season.
        </p>
        <p>
          Backyard gardens are perfect places to keep your bees active, healthy,
          and close enough to observe daily.
        </p>

        {/* CTA */}
        <p className="mt-3 text-sm text-gray-700">
          Want to set up your own backyard bee space?
        </p>

        <Link
          to="/bee-supplies"
          onClick={(e) => e.stopPropagation()}
          className="inline-block mt-1 text-green-700 font-semibold underline hover:text-green-900"
        >
          Explore recommended supplies →
        </Link>


      </>
    ),
  },
  {
  id: "meadow",
  title: "Open Meadows & Research",
  image: meadowImg,
  text: (
    <>
      <p className="mb-3">
        With additional equipment like solar panels, batteries, and cellular
        connectivity, stations can thrive far beyond backyards.
      </p>

      <p>
        These setups open doors for research and long-term observation.
        <strong> Interested in this kind of deployment?</strong>{" "}
        Explore real-world examples on the{" "}
        <Link
          to="/stations"
          onClick={(e) => e.stopPropagation()}
          className="text-green-700 underline font-medium"
        >
          Stations page
        </Link>
        .
      </p>
    </>
  ),
},

];

  return (
    <div className="w-full">
      {/* -------------------- HERO -------------------- */}
      <section className="relative h-[60vh] max-h-[520px] w-full overflow-hidden">

       <img
          src={meadowImg}
          alt="Bee Meadow"
          className="absolute inset-0 h-full w-full object-cover object-top"
       />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to the Mason Bee Club
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow">
            Tracking the gentle, essential pollinators that keep our gardens healthy.
          </p>
        </div>
      </section>

<section className="py-6 flex justify-center">
  <SubscribeButton label="Subscribe for Updates" />
</section>

      {/* -------------------- WHAT ARE MASON BEES -------------------- */}
<section className="max-w-6xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Image */}
    <div className="w-full h-[340px] overflow-hidden rounded-xl">
      <img
        src={masonBeeTubesImg}
        alt="Mason bee nesting tubes"
        className="w-full max-w-sm rounded-lg shadow"
      />
    </div>

    {/* Text */}
    <div>
      <h2 className="text-3xl font-bold text-green-800 mb-4">
        What Are Mason Bees?
      </h2>

      <p className="text-gray-800 leading-relaxed mb-4">
        Mason bees are small, solitary pollinators known for their incredible
        efficiency—one mason bee can pollinate as much as{" "}
        <strong>100 honeybees</strong>. They are gentle, non-aggressive, and
        perfect for backyard gardens and orchards.
      </p>

      <p className="text-gray-700 leading-relaxed">
        This project aims to build a distributed network of Mason Bee stations
        that monitor hatch rates, visitors, environmental conditions, and
        overall colony health. The more we understand these valuable
        pollinators, the better we can protect them.
      </p>
    </div>

  </div>
</section>


      {/* -------------------- IMAGE GALLERY -------------------- */}
      <section className="bg-green-50 py-16">
        <h2 className="text-center text-3xl font-bold text-green-800 mb-10">
          Mason Bee Stations & Gardens
        </h2>
        {/* NEW interactive gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {stationIdeas.map((item) => {
              const isActive = activeCard === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() =>
                    setActiveCard(isActive ? null : item.id)
                  }
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-1"

                >
                <div className="w-full h-[340px] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover rounded-xl shadow-md transition-all duration-300 ${
                      isActive
                        ? "scale-105 shadow-xl"
                        : "hover:scale-[1.03] hover:shadow-lg"
                    }`}

                  />

                 </div>

                  <h3 className="mt-4 text-xl font-semibold text-green-800 text-center">
                    {item.title}
                  </h3>

                  {isActive && (
                    <div className="mt-4 bg-white p-5 rounded-xl shadow border border-green-200 text-gray-700">
                      {item.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
      </section>

      {/* -------------------- CTA -------------------- */}
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800">Want to Learn More?</h2>
        <p className="text-gray-700 text-lg mt-4">
          Visit the <strong>About</strong> page to get in touch or learn how you can participate
          in this project.
        </p>

        <a
          href="/about"
          className="inline-block mt-6 px-8 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition"
        >
          About the Project
        </a>
      </section>
    </div>
  );
}
