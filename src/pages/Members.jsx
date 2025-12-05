import { Link } from "react-router-dom";
import BeeLogo from "../assets/mason-bee-circle.png";

export default function Members() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-900 p-10">

      {/* HEADER */}
      <div className="text-center mb-14">
        <img
          src={BeeLogo}
          alt="Bee Logo"
          className="w-24 mx-auto mb-4 drop-shadow-lg"
        />

        <h1 className="text-5xl font-bold text-green-900 mb-4">
          Join the Mason Bee Club
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-green-800">
          Whether you love observing bees, want to host your own bee station,
          or simply want to support the club, there’s a place for you here.
        </p>
      </div>



      {/* MEMBERSHIP TYPES */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* 1 — Subscriber */}
        <div className="bg-white p-8 rounded-xl shadow border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            1. 📰 Subscribers Only
          </h2>
          <p className="text-gray-700 mb-4">
            For those who just want updates, photos, hatch announcements,
            and access to our club-wide bee map.
          </p>
          <p className="text-green-800 font-semibold mb-3">$0 / Free</p>
          <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
            Sign Up
          </button>
        </div>

        {/* 2 — Paid Bee Fans */}
        <div className="bg-white p-8 rounded-xl shadow border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            2. 🌼 Paid Bee Fans
          </h2>
          <p className="text-gray-700 mb-4">
            Support the club, get early-access content, special bee reports,
            and discounts on bee supplies.
          </p>
          <p className="text-green-800 font-semibold mb-3">$5/mo or $50/yr</p>
          <button className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800">
            Become a Fan
          </button>
        </div>

        {/* 3 — Bee Tenders */}
        <div className="bg-white p-8 rounded-xl shadow border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            3. 🏠 Bee Tenders (With Cams)
          </h2>
          <p className="text-gray-700 mb-4">
            Host your own Mason Bee Station with camera+sensor kit.
            Connect to the Bee Network, stream live footage, and collect data.
          </p>
          <p className="text-green-800 font-semibold mb-3">
            Starter Kit: $99 — or Build Your Own (DIY)
          </p>
          <Link
            to="/members/dashboard"
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          >
            Go To My Dashboard
          </Link>
        </div>

        {/* 4 — Bee Supplies */}
        <div className="bg-white p-8 rounded-xl shadow border border-green-200">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            4. 🛒 Bee Supplies
          </h2>
          <p className="text-gray-700 mb-4">
            Bamboo tubes, blocks, sensors, cameras, replacement parts,
            and full Mason Bee starter kits.
          </p>
          <Link
            to="/supplies"
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 inline-block"
            >

             Browse Supplies
           </Link>

        </div>

      </section>



      {/* COMMENT BOX */}
      <section className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-xl shadow border border-green-200">
        <h2 className="text-2xl font-bold text-green-900 mb-4">
          Leave a Comment for the Club
        </h2>

        <textarea
          placeholder="Share your thoughts, questions, or bee experiences..."
          className="w-full h-32 p-4 border rounded-lg mb-4"
        ></textarea>

        <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-900">
          Submit Comment
        </button>
      </section>



      {/* DONATIONS */}
      <section className="max-w-3xl mx-auto text-center mt-16">
        <h2 className="text-3xl font-bold text-green-900 mb-4">
          Donate to Just Bee-Cause 🐝💛
        </h2>

        <p className="text-gray-700 mb-6">
          All donations go toward club equipment, bee conservation materials,
          and helping new tenders get started.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg shadow">
          Donate Now
        </button>
      </section>



      {/* BEE PUNS */}
      <section className="text-center mt-20">
        <h2 className="text-2xl font-bold text-green-900 mb-3">
          Want the Best Bee Puns? 🐝😄
        </h2>
        <Link
          to="/members/beepuns"
          className="text-green-800 underline hover:text-green-900 text-lg"
        >
          Click Here to Be-Amused →
        </Link>
      </section>


    </div>
  );
}
