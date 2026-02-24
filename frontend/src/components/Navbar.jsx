import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';
const Navbar = () => {

  const navigate = useNavigate()
  const isLocation = useLocation()
  const isAuth = isLocation.pathname === "/auth"
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (


    <nav className={`fixed top-0  w-full z-50 text-white/80 transition-all duration-300 px-6 py-4 border-b border-white/10  ${scrolled ? 'bg-black/90 backdrop-blur-md ' : 'bg-transparent'}`}>
      <div className='max-w-[90%] mx-auto flex  items-center justify-between'>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate({ to: "/" })}>
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center relative "  >
            <span className="text-black font-bold text-xl">T</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-black"></div>
          </div>
          <span className="font-bold text-xl">TinyTrek</span>
        </div>

        {
          !isAuth && (
            <div className="flex items-center gap-4 text-sm font-medium">
              <button className="text-white hover:text-red-400 transition-colors md:text-lg text-sm cursor-pointer">Sign In</button>
              <button className="md:text-lg text-md bg-red-700/80 hover:bg-red-600 text-white ml-2 px-6 py-2 rounded-lg backdrop-blur-sm border text-center border-red-500/30 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(185,28,28,0.4)] cursor-pointer"
                onClick={() => navigate({ to: "/auth" })}>
                Get Started
              </button>
            </div>
          )
        }
        </div>
      </nav>


  );
};

export default Navbar;