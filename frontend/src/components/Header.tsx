import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-4xl font-bold">
        <Link to="/">
          <span className="bg-gradient-to-r from-[#4318D1] to-[#A78BFA] bg-clip-text text-transparent gradient-animation">ResQ</span>
        </Link>
      </div>
      <nav className="flex gap-4">
        <a href="#about" className="px-5 py-2 rounded-full hover:bg-white/10 transition-all">About</a>
        <a href="#privacy" className="px-5 py-2 rounded-full hover:bg-white/10 transition-all">Privacy</a>
        <a href="#contact" className="px-5 py-2 rounded-full hover:bg-white/10 transition-all">Contact</a>
      </nav>
    </header>
  );
}

export default Header;