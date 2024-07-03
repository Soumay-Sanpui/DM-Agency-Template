import React from 'react'
import ServiceCard from './services/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
        name: "Mobile Application",
        icn: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#095CFC"/>
                <path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#095CFC"/>
            <path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#B5CEFD"/>
            </svg>
    },
    {
        name: "Web Application",
        icn: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.9999 7.27272V1.45454C31.9999 1.06877 31.8467 0.698805 31.5739 0.426025C31.3011 0.153245 30.9311 0 30.5454 0H1.45454C1.06877 0 0.698804 0.153245 0.426024 0.426025C0.153245 0.698805 0 1.06877 0 1.45454V7.27272H31.9999Z" fill="#095CFC"/>
                <path d="M0 10.1818V30.5454C0 30.9312 0.153245 31.3012 0.426024 31.574C0.698804 31.8467 1.06877 32 1.45454 32H8.72725V10.1818H0Z" fill="#B5CEFD"/>
                <path d="M11.6364 32H30.5455C30.9312 32 31.3012 31.8467 31.574 31.574C31.8467 31.3012 32 30.9312 32 30.5454V10.1818H11.6364V32Z" fill="#095CFC"/>
            </svg>
    },
    {
        name: "User Interface Design",
        icn: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3636 32H15.6364C15.2024 32 14.7862 31.8683 14.4793 31.6339C14.1724 31.3995 14 31.0815 14 30.75V28.25C14 27.9185 14.1724 27.6005 14.4793 27.3661C14.7862 27.1317 15.2024 27 15.6364 27H30.3636C30.7976 27 31.2138 27.1317 31.5207 27.3661C31.8276 27.6005 32 27.9185 32 28.25V30.75C32 31.0815 31.8276 31.3995 31.5207 31.6339C31.2138 31.8683 30.7976 32 30.3636 32Z" fill="#095CFC"/>
                <path d="M30.4 0H1.6C1.17565 0 0.768686 0.131695 0.468628 0.366116C0.16857 0.600536 0 0.918479 0 1.25V3.75C0 4.08152 0.16857 4.39946 0.468628 4.63388C0.768686 4.8683 1.17565 5 1.6 5H30.4C30.8243 5 31.2313 4.8683 31.5314 4.63388C31.8314 4.39946 32 4.08152 32 3.75V1.25C32 0.918479 31.8314 0.600536 31.5314 0.366116C31.2313 0.131695 30.8243 0 30.4 0Z" fill="#095CFC"/>
                <path d="M30.4 8H1.6C1.17565 8 0.768686 8.14047 0.468628 8.39052C0.16857 8.64057 0 8.97971 0 9.33333V22.6667C0 23.0203 0.16857 23.3594 0.468628 23.6095C0.768686 23.8595 1.17565 24 1.6 24H30.4C30.8243 24 31.2313 23.8595 31.5314 23.6095C31.8314 23.3594 32 23.0203 32 22.6667V9.33333C32 8.97971 31.8314 8.64057 31.5314 8.39052C31.2313 8.14047 30.8243 8 30.4 8Z" fill="#B5CEFD"/>
            </svg>
    },
    {
        name: "Strategy and Branding",
        icn: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0H1.5C1.10218 0 0.720643 0.153245 0.439339 0.426025C0.158034 0.698806 0 1.06878 0 1.45455V30.5455C0 30.9312 0.158034 31.3012 0.439339 31.574C0.720643 31.8468 1.10218 32 1.5 32H6V0Z" fill="#095CFC"/>
                <path d="M9 32H23V0H9V32ZM16 26.1818C15.6287 26.1818 15.2726 26.0286 15.01 25.7558C14.7475 25.483 14.6 25.113 14.6 24.7273C14.6 24.3415 14.7475 23.9715 15.01 23.6988C15.2726 23.426 15.6287 23.2727 16 23.2727C16.3713 23.2727 16.7274 23.426 16.99 23.6988C17.2525 23.9715 17.4 24.3415 17.4 24.7273C17.4 25.113 17.2525 25.483 16.99 25.7558C16.7274 26.0286 16.3713 26.1818 16 26.1818ZM16 5.81818C16.3713 5.81818 16.7274 5.97143 16.99 6.24421C17.2525 6.51699 17.4 6.88696 17.4 7.27273C17.4 7.6585 17.2525 8.02847 16.99 8.30125C16.7274 8.57403 16.3713 8.72727 16 8.72727C15.6287 8.72727 15.2726 8.57403 15.01 8.30125C14.7475 8.02847 14.6 7.6585 14.6 7.27273C14.6 6.88696 14.7475 6.51699 15.01 6.24421C15.2726 5.97143 15.6287 5.81818 16 5.81818ZM16 14.5455C16.3713 14.5455 16.7274 14.6987 16.99 14.9715C17.2525 15.2443 17.4 15.6142 17.4 16C17.4 16.3858 17.2525 16.7557 16.99 17.0285C16.7274 17.3013 16.3713 17.4545 16 17.4545C15.6287 17.4545 15.2726 17.3013 15.01 17.0285C14.7475 16.7557 14.6 16.3858 14.6 16C14.6 15.6142 14.7475 15.2443 15.01 14.9715C15.2726 14.6987 15.6287 14.5455 16 14.5455Z" fill="#095CFC"/>
                <path d="M30.5 0H26V32H30.5C30.8978 32 31.2794 31.8468 31.5607 31.574C31.842 31.3012 32 30.9312 32 30.5455V1.45455C32 1.06878 31.842 0.698806 31.5607 0.426025C31.2794 0.153245 30.8978 0 30.5 0Z" fill="#B5CEFD"/>
            </svg>
    },
    {
        name: "Performance Marketing",
        icn: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.4857 0.293579C31.2286 1.11554e-06 30.7143 0 30.3286 0L23 2.49541V32L31.1 29.3578C31.6143 29.211 32 28.6239 32 27.8899V1.46789C32 1.02752 31.8714 0.587157 31.4857 0.293579Z" fill="#095CFC"/>
                <path d="M20 2.22222L12 0V29.7778L20 32V2.22222Z" fill="#B5CEFD"/>
                <path d="M9 0L0.900001 2.6422C0.385715 2.93578 0 3.52293 0 4.11009V30.5321C0 30.9725 0.128571 31.4128 0.514285 31.7064C0.771428 31.8532 1.02857 32 1.28571 32H1.67143L9 29.5046V0Z" fill="#095CFC"/>
            </svg>
    },
    {
        name: "Project Management",
        icn: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5556 13H1.44444C1.06135 13 0.693953 12.8478 0.423067 12.5769C0.152181 12.306 0 11.9386 0 11.5556V1.44444C0 1.06135 0.152181 0.693953 0.423067 0.423067C0.693953 0.152181 1.06135 0 1.44444 0H11.5556C11.9386 0 12.306 0.152181 12.5769 0.423067C12.8478 0.693953 13 1.06135 13 1.44444V11.5556C13 11.9386 12.8478 12.306 12.5769 12.5769C12.306 12.8478 11.9386 13 11.5556 13Z" fill="#095CFC"/>
                <path d="M11.5556 32H1.44444C1.06135 32 0.693953 31.8478 0.423067 31.5769C0.152181 31.306 0 30.9386 0 30.5556V20.4444C0 20.0614 0.152181 19.694 0.423067 19.4231C0.693953 19.1522 1.06135 19 1.44444 19H11.5556C11.9386 19 12.306 19.1522 12.5769 19.4231C12.8478 19.694 13 20.0614 13 20.4444V30.5556C13 30.9386 12.8478 31.306 12.5769 31.5769C12.306 31.8478 11.9386 32 11.5556 32Z" fill="#095CFC"/>
                <path d="M17 1H32V4H17V1Z" fill="#095CFC"/>
                <path d="M32 20H17V23H32V20Z" fill="#095CFC"/>
                <path d="M32 28H17V31H32V28Z" fill="#B5CEFD"/>
                <path d="M32 9H17V12H32V9Z" fill="#B5CEFD"/>
            </svg>
    },
  ];

  return (
    <div id='services-wrapper' className='w-full bg-bkg py-5'>
        {/* Announcer */}
        <div id="announcer-wrapper" className='text-center my-3'>
            <div id='title-wrapper' className='my-4'>
              <p className='text-primary text-[1.1vw]'>Our Services</p>
            </div>
            <h1 className='text-[4vw] font-semibold'>Services that Connet you<br /> to your users</h1>
        </div>
        {/* Service Card Wrapper */}
        <div className='w-full p-10 flex flex-wrap items-center justify-center gap-8'>
            {
                services.map((service,idx)=>(
                    <ServiceCard icn={service.icn} ttl={service.name} key={idx} />
                ))
            }
        </div>
    </div>
  )
}
export default ServicesSection;