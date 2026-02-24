const DashboardHeader = () => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-white/60 text-sm">
        Manage and track your shortened links
      </p>
    </div>

    <button className="bg-red-700 hover:bg-red-600 px-5 py-2 rounded-xl transition">
      + Create Link
    </button>
  </div>
);

export default DashboardHeader