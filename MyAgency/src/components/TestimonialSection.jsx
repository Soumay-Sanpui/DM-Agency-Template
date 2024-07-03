import React from 'react';
import SectionHeading from './SectionHeading';
import TesCard from "./testimonial/TesCard";

const TestimonialSection = () => {
  const testimonials = [
    {
        desc: "Our Process to Develop dashboard for server host...“I often see old funeral processes. But this Company is absolutely amazing and is behind the product 100%. Making funerals simpler and easier! We've seen great results.”",
        username: "Albina Incog",
        designation: "CEO Danish App Inc"
    },
    {
        desc: "I just can't get enough of funeral. I want to get a T-Shirt with funeral on it so I can show it off to everyone. It's incredible. Thank you for making it painless, pleasant and most of all hassle free! Funeral is worth much more than I paid.",
        username: "Trixie Winter",
        designation: "COO Winter Corp",
    },
    {
        desc: "We've used funeral for the last five years. I would also like to say thank you to all your staff. I can't say enough about funeral. Funeral has got everything I need.",
        username: "Vinni Tender",
        designation: "Director Ren Tinder Inc"
    },
  ];
  return (
    <div className='w-full p-10 my-[2vw]'>
        {/* annoncer */}
        <div className='flex flex-col items-center justify-center'>
            <SectionHeading heading={"Testimonial"}/>
            <h1 className='font-semibold text-[3vw] my-[1vw]'>What our <span className='text-primary'>customers say</span> about us</h1>
        </div>

        {/* testimonial wrapper */}
        <div className='w-full justify-center flex flex-wrap gap-[2vw] my-[2vw]'>
          {
            testimonials.map((testimonial,idx)=>(
              <TesCard desc={testimonial.desc} designation={testimonial.designation} username={testimonial.username}/>
            ))
          }
        </div>
    </div>
  )
}

export default TestimonialSection