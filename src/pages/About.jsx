import ericImg from "../assets/eric-callagher.png";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-extrabold text-green-800 mb-10">
        About the Mason Bee Club
      </h1>

      {/* Intro section with image */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        {/* Image */}
        <img
          src={ericImg}
          alt="Eric, founder of the Mason Bee Club"
          className="w-64 h-64 object-cover rounded-2xl shadow-lg flex-shrink-0 mx-auto md:mx-0"
        />

        {/* Text */}
        <div>
          <p className="text-lg mb-4">
            Hi! I’m Eric — and this whole project started with a small box of mason
            bees. A friend gave me a bee fostering kit one spring. I set it up outside,
            watched over it, and waited excitedly for the tubes to fill…
          </p>

          <p className="text-lg mb-4">
            But they never did.
            At first I thought nothing had happened — until I noticed something subtle:
            the cocoons <em>had</em> hatched. The bees <em>did</em> emerge — they just flew
            off and lived their own little adventures somewhere nearby.
          </p>
        </div>
      </div>

      {/* Everything below stays the same */}


      {/* Everything below here is unchanged */}
      <p className="text-lg mb-6">
        That fascinated me. I’ve always loved watching wildlife — especially birds —
        and after seeing how tools like <strong>Birdfy</strong> let people observe and
        learn from nature in real time, a thought clicked into place:
      </p>

      <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700 mb-6">
        “What if we could do the same thing for mason bees? What if every bee box
        could tell its own story?”
      </blockquote>

      <p className="text-lg mb-6">
        So the Mason Bee Club was born — a connected network of bee stations with
        optional cameras and sensors, all sending simple activity data to a shared
        website where anyone can watch, learn, and enjoy the tiny miracles happening
        inside these boxes.
      </p>

      <h2 className="text-2xl font-bold text-green-700 mt-10 mb-4">The Vision</h2>

      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>A community of backyard bee stations, each contributing data</li>
        <li>Live camera feeds for bee tenders who want to share</li>
        <li>Activity charts, hatch tracking, environmental insights</li>
        <li>A place for new bee stewards to learn and get involved</li>
      </ul>

      <h2 className="text-2xl font-bold text-green-700 mt-10 mb-4">
        Why This Matters
      </h2>

      <p className="text-lg mb-6">
        Mason bees are gentle, incredibly efficient pollinators. They’re easy to
        raise, fun to watch, and genuinely helpful to local ecosystems. By connecting
        stations together, we celebrate these tiny environmental heroes and help them
        thrive.
      </p>

      <h2 className="text-3xl font-extrabold text-green-800 text-center mt-8 mb-4">
        Welcome to the Mason Bee Club.
      </h2>

      <p className="text-lg text-center mb-12">
        Let’s grow something amazing together. 🌱🐝
      </p>

      {/* -----------------------------------------------------
          CONTACT FORM SECTION
      ------------------------------------------------------ */}
      <div className="bg-white p-8 rounded-2xl shadow-md border border-green-200">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Want more information?</h2>
        <p className="text-lg mb-4">
          If you'd like updates, want to participate, or just have questions about
          the project, you can send me a direct message:
        </p>

        <form
          action="mailto:fcleffer@gmail.com"
          method="POST"
          encType="text/plain"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="border p-3 rounded-lg"
          />

          <textarea
            name="message"
            required
            placeholder="Your message or questions"
            className="border p-3 rounded-lg h-32"
          />

          <button
            type="submit"
            className="bg-green-700 text-white p-3 rounded-lg hover:bg-green-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
