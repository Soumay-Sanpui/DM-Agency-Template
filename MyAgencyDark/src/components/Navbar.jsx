import React from 'react';

const Navbar = () => {
  const menuItems = ["Home", "About", "Services", "Portfolio", "Blog"];

  return (
    <div className="flex justify-center items-center px-16 py-5 w-full text-base bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1170px] max-md:flex-wrap max-md:max-w-full">
        <img
          src="/logo.png"
          className="shrink-0 self-start max-w-full aspect-[4.35] w-[165px]"
          alt="Logo"
        />
        <div className="flex gap-5 justify-between whitespace-nowrap text-stone-300">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`${item === "Home" ? "font-medium text-white" : "hover:text-white"} cursor-pointer`}>
              {item}
            </div>
          ))}
        </div>
        <button className="cursor-pointer hover:bg-white justify-center px-7 py-3.5 font-semibold text-black bg-zinc-300 max-md:px-5">
          Let's Talk
        </button>
      </div>
    </div>
  );
}

export default Navbar;

