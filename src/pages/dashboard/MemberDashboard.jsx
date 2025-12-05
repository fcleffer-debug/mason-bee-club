export default function MemberDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        Member Dashboard
      </h1>

      <p className="text-gray-700 mb-4">
        Welcome back! From here you can manage your bee station, track stats,
        and access your club info.
      </p>

      <div className="space-y-4">
        <a
          href="/dashboard/mystation"
          className="block p-4 bg-white rounded-xl shadow hover:bg-green-50 border border-green-200"
        >
          🐝 Manage My Station
        </a>

        <a
          href="/dashboard/mystats"
          className="block p-4 bg-white rounded-xl shadow hover:bg-green-50 border border-green-200"
        >
          📊 View My Stats
        </a>
      </div>
    </div>
  );
}

