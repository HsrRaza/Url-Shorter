const FeatureStats = () => {
  const stats = [
    { value: "10M+", label: "Links Created" },
    { value: "5B+", label: "Total Clicks" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 
              hover:scale-105 transition-transform"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-red-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;