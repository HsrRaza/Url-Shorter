const Footer = () => {
  const name = "TinyTrek";

  return (
    <footer className="w-full bg-black border-t border-white/10 ">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">TinyTrek</h3>
          <p className="text-white/50 text-sm mt-1">
            Simple. Fast. Reliable link shortening.
          </p>
        </div>

        {/* Minimal Links */}
        <div className="flex gap-6 text-sm text-white/60">
          <a href="#" className="hover:text-red-400 transition">Privacy</a>
          <a href="#" className="hover:text-red-400 transition">Terms</a>
          <a href="#" className="hover:text-red-400 transition">Contact</a>
        </div>

      </div>

      {/* Bottom Hover Text */}
      <div className="w-full border-t border-white/5 py-6 flex justify-center overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-bold tracking-widest text-white/10 select-none group cursor-default">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(185,28,28,0.8)]"
              style={{
                transitionDelay: `${index * 40}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </h2>
      </div>

    </footer>
  );
};

export default Footer;