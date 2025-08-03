import React from 'react';

const TopInfoBar = () => (
  <div className="w-full bg-blue-900/90 text-white py-2 px-4 flex flex-col md:flex-row items-center justify-between text-sm">
    <div className="flex items-center gap-4">
      <span className="font-semibold">Phone:</span> <a href="tel:+1234567890" className="hover:underline">+234 803 456-7890</a>
      <span className="font-semibold ml-6">Email:</span> <a href="mailto:info@school.edu" className="hover:underline">info@school.edu</a>
    </div>
    <div className="mt-2 md:mt-0">
      <span className="font-semibold">Opening Hours:</span> Mon - Fri: 8:00am - 4:00pm
    </div>
  </div>
);

export default TopInfoBar;
