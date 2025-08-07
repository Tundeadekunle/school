

"use client";
import { useRouter } from 'next/navigation'
import React, { useState, useRef, useEffect } from 'react'
// Helper hook for scroll-triggered animation
function useInViewAnimation(delay = 0): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);
  return [ref, inView];
}

const testimonialsData = [
  {
    img: "/globe.svg",
    alt: "Parent 1",
    text: '"This school has transformed my child\'s life. The teachers truly care and the environment is so positive!"',
    name: "- Parent A",
    delay: 100,
  },
  {
    img: "/window.svg",
    alt: "Student 1",
    text: '"I love coming to school every day. I\'ve made great friends and learned so much!"',
    name: "- Student B",
    delay: 300,
  },
  {
    img: "/vercel.svg",
    alt: "Parent 2",
    text: '"The staff are dedicated and the facilities are excellent. Highly recommended!"',
    name: "- Parent C",
    delay: 500,
  },
];


import Link from 'next/link'
import TopInfoBar from './components/TopInfoBar';


const Page = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleUpload = () => {
    router.push('/upload');
  };

  const handleMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[url('/bg.jpg')] bg-contain bg-no-repeat bg-[position:90%_5%] flex flex-col justify-between scroll-smooth">
      {/* Top Info Bar */}
      <TopInfoBar />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md shadow-md">
        <div className="text-2xl font-bold text-gray-800">Logo</div>
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link href="/mission" className="text-gray-700 hover:text-blue-600 font-medium">Mission</Link>
          <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium">Gallery</Link>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
          <a href="#staff" className="text-gray-700 hover:text-blue-600 font-medium">Staff</a>
        </div>
        <button
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={handleUpload}
        >
          Register
        </button>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
            onClick={handleMenuToggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu (hidden by default, can be toggled with JS if needed) */}
      <div
        className={`md:hidden px-6 py-2 bg-white/90 shadow transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">About</Link>
        <Link href="/mission" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Mission</Link>
        <Link href="/gallery" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Gallery</Link>
        <a href="#testimonials" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
        <a href="#staff" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Staff</a>
        <button
          className="w-full mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          onClick={handleUpload}
        >
          Register
        </button>
      </div>
      {/* Hero section placeholder */}
      <section className="flex flex-col items-center justify-center h-[80vh] text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl mt-[-14rem] md:mt-14 font-extrabold text-white drop-shadow-lg mb-4">Welcome to Our School</h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8">Empowering students for a brighter future.</p>
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          onClick={handleUpload}
        >
          Register Now
        </button>
      </section>

        {/* Principal's Speech Section */}
        <section className="py-16 px-4 bg-white/90 backdrop-blur-md mt-[-16rem] md:mt-10 rounded-xl max-w-3xl mx-auto shadow-lg animate-fade-in-up delay-200">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 text-center">Principal's Speech</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/vercel.svg" alt="Principal" className="w-32 h-32 rounded-full shadow-lg mx-auto md:mx-0" />
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to our school! As Principal, I am proud to lead a community of passionate educators and talented students. Our mission is to foster a love of learning, encourage curiosity, and empower every child to reach their full potential. Together, we create a nurturing environment where excellence, respect, and collaboration are at the heart of everything we do.
            </p>
            <p className="text-blue-800 font-semibold">- Jane Doe, Principal</p>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-[position:90%_5%] backdrop-blur-md mt-10 rounded-xl max-w-5xl mx-auto shadow-lg animate-fade-in-up delay-300">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((t, i) => {
              const [ref, inView] = useInViewAnimation(t.delay);
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`bg-white rounded-lg shadow p-6 flex flex-col items-center transition-all duration-700 ease-out ${inView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'}`}
                  style={{ transitionDelay: `${t.delay}ms` }}
                >
                  <img src={t.img} alt={t.alt} className="w-16 h-16 rounded-full mb-4" />
                  <p className="text-gray-700 mb-2">{t.text}</p>
                  <span className="text-blue-700 font-semibold">{t.name}</span>
                </div>
              );
            })}
        </div>
      </section>

        {/* Staff Section */}
        <section id="staff" className="py-20 px-4 bg-purple-100/80 backdrop-blur-md mt-10 rounded-xl max-w-6xl mx-auto shadow-lg animate-fade-in-up delay-400">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10 text-center">Meet Our Staff</h2>
  <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Example staff members, replace with real data as needed */}
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher1.jpg" alt="Staff 1" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">Jane Doe</h3>
      <p className="text-gray-600">Principal</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher2.jpg" alt="Staff 2" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">John Smith</h3>
      <p className="text-gray-600">Vice Principal</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher3.jpg" alt="Staff 3" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">Emily Johnson</h3>
      <p className="text-gray-600">Head of Science</p>
    </div>

    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher1.jpg" alt="Staff 1" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">Jane Doe</h3>
      <p className="text-gray-600">Principal</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher2.jpg" alt="Staff 2" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">John Smith</h3>
      <p className="text-gray-600">Vice Principal</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher3.jpg" alt="Staff 3" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">Emily Johnson</h3>
      <p className="text-gray-600">Head of Science</p>
    </div>

    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher1.jpg" alt="Staff 1" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">Jane Doe</h3>
      <p className="text-gray-600">Principal</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher2.jpg" alt="Staff 2" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">John Smith</h3>
      <p className="text-gray-600">Vice Principal</p>
    </div>
    <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
      <img src="/Teacher3.jpg" alt="Staff 3" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-semibold text-blue-700">Emily Johnson</h3>
      <p className="text-gray-600">Head of Science</p>
    </div>
      </div>
</section>
      {/* Footer Section */}
      <footer className="mt-16 bg-blue-900/90 text-white py-8 px-4 text-center rounded-t-xl shadow-inner">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold">&copy; {new Date().getFullYear()} School Name. All rights reserved.</div>
          <div className="flex gap-6 justify-center">
            <a href="/" className="hover:text-blue-300 transition">Home</a>
            <Link href="/about" className="hover:text-blue-300 transition">About</Link>
            <Link href="/mission" className="hover:text-blue-300 transition">Mission</Link>
            <Link href="/gallery" className="hover:text-blue-300 transition">Gallery</Link>
            <a href="#testimonials" className="hover:text-blue-300 transition">Testimonials</a>
            <a href="#staff" className="hover:text-blue-300 transition">Staff</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page