export default function EditProfile() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        Edit Profile
      </h1>

      <p className="text-gray-700 mb-6">
        Update your contact information, station ownership, and notification settings.
      </p>

      <form className="bg-white p-6 rounded-xl shadow border border-green-200 space-y-4 max-w-lg">
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="tel"
            className="w-full p-2 border rounded"
            placeholder="(555) 555-5555"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

