 import { Link } from "react-router-dom";
 import BeeLogo from "../assets/mason-bee-circle.png";

export default function MemberPortal() {
  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">

      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-800 mb-4">
          Mason Bee Club Members
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Join the community, order your official bee house, and manage your
          member profile — all in one place.
        </p>
      </header>

      {/* JOIN SECTION */}
      <section className="bg-white p-8 rounded-2xl shadow-md border border-green-200 mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Join the Club</h2>
        <p className="text-gray-700 mb-4">
          Become part of a growing network of backyard pollinator supporters.
          Members get access to tracking tools, guidance, and an official bee
          house with a QR identification tag.
        </p>

        <Link
          to="#"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 font-semibold"
        >
          Sign Up Now
        </Link>
      </section>

      {/* ORDER BEE HOUSE */}
      <section className="bg-green-50 p-8 rounded-2xl border border-green-300 shadow-sm mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Order Your Official Bee House
        </h2>

        <p className="text-gray-700 mb-4">
          Each bee house is handmade by club volunteers. Houses come with:
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>CNC-cut wooden housing</li>
          <li>Reusable paper tubes</li>
          <li>Camera mount inside</li>
          <li>Pre-linked QR Code for easy station registration</li>
        </ul>

        <p className="text-gray-700 mt-4 mb-6">
          When scanned, the QR code connects directly to your bee station’s
          profile — allowing your bees to join the network instantly.
        </p>

        <Link
          to="#"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 font-semibold"
        >
          Order a Bee House
        </Link>
      </section>

      {/* UPDATE PROFILE */}
      <section className="bg-white p-8 rounded-2xl shadow-md border border-green-200 mb-10">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Update Your Profile
        </h2>
        <p className="text-gray-700 mb-4">
          Change your contact information, update your bee station location,
          and manage your member settings.
        </p>

        <Link
          to="#"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 font-semibold"
        >
          Edit Profile
        </Link>
      </section>

      {/* QR CODE INFO */}
      <section className="bg-green-50 p-8 rounded-2xl border border-green-300 shadow-sm">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          How QR Bee House Linking Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-gray-700 mb-3">
              Every official bee house ships with a weatherproof QR label.
            </p>

            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Scan the QR code with your phone</li>
              <li>You'll be taken to your station’s setup page</li>
              <li>The station is automatically registered</li>
              <li>Camera feed + stats link to your member profile</li>
            </ul>

            <p className="text-gray-700 mt-4">
              This makes it incredibly easy for new members — just scan and go.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={BeeLogo}
              alt="Mason Bee Logo"
              className="w-28 h-28 opacity-90"
            />

          </div>
        </div>
      </section>
    </div>
  );
}

