import Link from 'next/link';
import React from 'react';
import SimpleNavbar from '../components/SimpleNavbar';

const GalleryPage = () => {
  return (
    <div className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex flex-col justify-between">
      <SimpleNavbar />

      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-white">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg text-center">Gallery</h1>
        <p className="text-lg mb-8 opacity-90 text-center max-w-2xl">
          Explore moments from our vibrant school community. Our gallery showcases events, achievements, and the spirit of our students and staff.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {/* Example images, replace src with your own images in /public */}
          <img src="/globe.svg" alt="Gallery 1" className="rounded-lg shadow-lg bg-white/80 p-4" />
          <img src="/vercel.svg" alt="Gallery 2" className="rounded-lg shadow-lg bg-white/80 p-4" />
          <img src="/window.svg" alt="Gallery 3" className="rounded-lg shadow-lg bg-white/80 p-4" />
          <img src="/file.svg" alt="Gallery 4" className="rounded-lg shadow-lg bg-white/80 p-4" />
          <img src="/next.svg" alt="Gallery 5" className="rounded-lg shadow-lg bg-white/80 p-4" />
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

export default GalleryPage;
