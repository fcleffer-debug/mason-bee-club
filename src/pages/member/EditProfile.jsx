export default function EditProfile() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        Edit Profile
      </h1>

      <form className="space-y-4 bg-white p-6 rounded-xl shadow max-w-lg">
        <input type="text" placeholder="Name"
          className="w-full p-2 border rounded" />

        <input type="email" placeholder="Email"
          className="w-full p-2 border rounded" />

        <input type="text" placeholder="Phone Number"
          className="w-full p-2 border rounded" />

        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
          Save Changes
        </button>
      </form>
    </div>
  );
}

