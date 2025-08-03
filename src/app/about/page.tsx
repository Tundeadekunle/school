import Link from 'next/link';
import React from 'react';
import SimpleNavbar from '../components/SimpleNavbar';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-[url('/bg.jpg')] bg-contain bg-no-repeat bg-center flex flex-col justify-between scroll-smooth">
      <SimpleNavbar />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">About Our School</h1>
          <p className="text-lg mb-6 opacity-90">
            Our school is dedicated to providing a nurturing environment where students can grow, learn, and thrive. We believe in empowering every student to reach their full potential through innovative teaching, a supportive community, and a commitment to excellence.
          </p>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="opacity-90">To inspire and prepare students to be lifelong learners, responsible citizens, and leaders in a global society.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Our Values</h2>
            <ul className="list-disc list-inside opacity-90">
              <li>Respect & Integrity</li>
              <li>Innovation & Excellence</li>
              <li>Community & Collaboration</li>
              <li>Growth & Opportunity</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          {/* <img src="/globe.svg" alt="School Globe" className="w-64 h-64 mb-6 drop-shadow-2xl" /> */}
          <div className="bg-white/80 rounded-lg shadow-lg p-6 text-blue-900 text-center">
            <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
            <p className="text-base">We foster creativity, critical thinking, and a passion for lifelong learning. Join our vibrant community and start your journey today!</p>
          </div>
        </div>
      </div>
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

export default AboutPage;