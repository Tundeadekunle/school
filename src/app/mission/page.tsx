import Link from 'next/link';
import React from 'react';
import SimpleNavbar from '../components/SimpleNavbar';

const MissionPage = () => {
  return (
    <div className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex flex-col justify-between">
      <SimpleNavbar />

      <main className="relative z-10 w-full max-w-3xl mx-auto px-4 py-16 flex flex-col items-center text-white">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg text-center">Our Mission</h1>
        <p className="text-lg mb-8 opacity-90 text-center max-w-2xl">
          Our mission is to provide a transformative education that empowers students to become innovative thinkers, compassionate leaders, and responsible global citizens. We are committed to fostering a culture of excellence, inclusivity, and lifelong learning.
        </p>
        <div className="bg-white/80 rounded-lg shadow-lg p-8 text-blue-900 text-center w-full">
          <h2 className="text-2xl font-bold mb-4">How We Achieve Our Mission</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-md opacity-90">
            <li>Delivering a challenging and relevant curriculum</li>
            <li>Encouraging creativity, curiosity, and critical thinking</li>
            <li>Promoting respect, empathy, and collaboration</li>
            <li>Supporting personal growth and well-being</li>
            <li>Engaging with families and the wider community</li>
          </ul>
        </div>
      </main>
      {/* Footer Section */}
      <footer className="bg-blue-900/90 text-white py-8 px-4 text-center rounded-t-xl shadow-inner">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">&copy; {new Date().getFullYear()} School Name. All rights reserved.</div>
          <div className="flex gap-6 justify-center">
            <Link href="/" className="hover:text-blue-300 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-300 transition">About</Link>
            <Link href="/mission" className="hover:text-blue-300 transition">Mission</Link>
            <Link href="/gallery" className="hover:text-blue-300 transition">Gallery</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MissionPage;
