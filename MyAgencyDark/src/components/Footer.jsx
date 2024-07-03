import React from "react";
import FilledBtn from "./FilledBtn"

const Footer = () => {
  // Arrays for navigation items and services
  const navigationItems = ["About Us", "Portfolio", "Services", "Blog"];
  const services = [
    "Mobile Application",
    "Web Application",
    "Performance Marketing",
    "Project Management",
  ];

  return (
    <div className="w-full h-[3vw]">

    <div className='w-full px-[4vw] flex gap-5 justify-around my-[7vw]'>
            <div className='space-y-3'>
                <img src='/logo.png'/>
                <p className='text-slate-400'>MyAgency isn't your average digital marketing agency. We create unconventional ideas that grow brands - and yours could be next.</p>
            </div>
            {/* navigation */}
            <div>
                <h5 className='font-semibold my-2'>Navigation</h5>
                <div>
                    <ul className='flex flex-col gap-3 text-sm text-slate-400'>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Portfolio</a></li>
                        <li><a href='/'>Services</a></li>
                        <li><a href='/'>Blog</a></li>
                    </ul>
                </div>
            </div>
            {/* services */}
            <div className='min-w-max'>
                <h5 className='font-semibold my-2'>services</h5>
                <div>
                    <ul className='flex flex-col gap-3 text-sm text-slate-400'>
                        <li><a href='/'>Mobile Application</a></li>
                        <li><a href='/'>web Application</a></li>
                        <li><a href='/'>Performance Marketing</a></li>
                        <li><a href='/'>Project Management</a></li>
                    </ul>
                </div>
            </div>
            {/* newsletter */}
            <div className='gap-2 w-full h-full flex flex-col items-center'>
                <p className='font-semibold'>Subscribe Our Newsletter!</p>
                <div className='flex border'>
                    <input className='outline-none border-none px-2'  placeholder='Your Email'/>
                    <FilledBtn text={"subscribe"}/>
                </div>
            </div>

        </div>
        {/* footer end */}
        <div className='border border-t flex items-center justify-around p-[1.5vw]'>
            <div>
                <p>&#169; 2023. My Agency. All rights reserved</p>
            </div>
            <div className='flex gap-[1vw] text-primary'>
                <a href='/'>Privacy Policy</a>
                <a href='/'>Terms & Conditions</a>
            </div>
        </div>
    </div>
  );
}

export default Footer;
