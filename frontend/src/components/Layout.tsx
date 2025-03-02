import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div style={{ backgroundColor: "#0A0A0F" }} className="min-h-screen text-white relative overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#222_2px,transparent_0)] bg-[size:40px_40px]">
      {/*
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>*/}

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;