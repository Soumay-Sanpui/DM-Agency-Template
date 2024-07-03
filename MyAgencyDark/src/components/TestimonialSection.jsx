import React from "react";
import Testimonial from "./testimonial/Testimonial";

const TestimonialSection = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 mt-20 w-full bg-bkg bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-2.5 max-w-full w-[763px]">
        <div className="self-center text-xl font-semibold leading-9 text-center text-primary">
          Testimonials
        </div>
        <div className="self-center mt-9 text-5xl font-bold text-center leading-[72px] text-indigo-950 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
          What our customers say
          <br />
          about us!
        </div>
        <div className="flex justify-between gap-[4vw] my-[4vw]">
          <div>
            <img src="/lq.png" className="w-[10vw]" />
          </div>  
          <p className="text-[1.5vw] leading-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis nam minima aspernatur aut cum vel ipsum? Excepturi ipsum odio culpa quo consequatur deserunt harum quas soluta voluptate, dignissimos minus sunt!</p>
          <div>
            <img src="/rq.png" className="w-[10vw]"/>
          </div>
        </div>
        <div className="text-center w-full flex flex-col items-center justify-center">
          <img src="/ts.PNG"/>
          <h3 className="font-bold text-[2vw] leading-6 my-[2vw]">Vinni Tender</h3>
          <p className="text-txt">Founder of Varibo Technologies Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
