import React, { useState } from 'react';

const DrpDwnOpt = ({ icn, ttl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
        {/* Left section (icon and heading) */}
        <div className="flex items-center space-x-6">
          <div className="bg-gray-300 flex items-center justify-center">
            {icn}
          </div>
          <h2 className={`text-[1.3vw] font-semibold ${isOpen ? 'text-primary':''}`}>{ttl}</h2>
        </div>
      </div>
      {/* Dropdown */}
      {isOpen && (
        <div className="mt-2">
          <p className="text-sm text-gray-600 ml-[4vw]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi corrupti necessitatibus quae perspiciatis repellendus, vitae totam cupiditate nulla voluptatibus ut aut soluta ullam assumenda maxime dignissimos, temporibus at in! Minus?
          </p>
        </div>
      )}
    </div>
  );
};

export default DrpDwnOpt;

