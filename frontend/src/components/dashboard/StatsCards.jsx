const StatsCards = () => {
  const stats = [
    { label: "Total Links", value: 24 },
    { label: "Total Clicks", value: 1842 },
    { label: "Active Links", value: 18 },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition"
        >
          <p className="text-white/60 text-sm">{stat.label}</p>
          <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
};
export default StatsCards