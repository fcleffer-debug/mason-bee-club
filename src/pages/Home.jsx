import React from "react";
import meadowImg from "../assets/bee-meadow.png";
import gardenImg from "../assets/bee-garden.png";
import stationImg from "../assets/mason-bee-station.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* -------------------- HERO -------------------- */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={meadowImg}
          alt="Bee Meadow"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to the Mason Bee Club 🐝
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow">
            Tracking the gentle, essential pollinators that keep our gardens healthy.
          </p>
        </div>
      </section>

      {/* -------------------- ABOUT MASON BEES -------------------- */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-green-800">What Are Mason Bees?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Mason bees are small, solitary pollinators known for their incredible efficiency—
          one mason bee can pollinate as much as <strong>100 honeybees</strong>. They are gentle,
          non-aggressive, and perfect for backyard gardens and orchards.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          This project aims to build a distributed network of Mason Bee stations that monitor
          hatch rates, visitors, environmental conditions, and overall colony health. The more we
          understand these valuable pollinators, the better we can protect them.
        </p>
      </section>

      {/* -------------------- IMAGE GALLERY -------------------- */}
      <section className="bg-green-50 py-16">
        <h2 className="text-center text-3xl font-bold text-green-800 mb-10">
          Mason Bee Stations & Gardens
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {/* Image 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src={stationImg}
              alt="Mason Bee Station Render"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Mason Bee Station Concept</h3>
              <p className="text-gray-600 text-sm mt-1">
                The monitoring station where cocoons hatch and bees are tracked.
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src={gardenImg}
              alt="Bee Garden"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Raised Bed Garden Habitat</h3>
              <p className="text-gray-600 text-sm mt-1">
                A natural environment full of pollinator-friendly plants.
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white md:col-span-2 lg:col-span-1">
            <img
              src={meadowImg}
              alt="Bee Meadow"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Open Meadow Ecosystem</h3>
              <p className="text-gray-600 text-sm mt-1">
                A glimpse of the type of rich environment Mason Bees thrive in.
              </p>
            </div>
          </div>
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
