import React from "react";
import FilledBtn from "./FilledBtn";

const About = () => {
  return (
    <div className="flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full bg-bkg">
      <div className="mt-2.5 w-full max-w-[1170px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full bg-txt">
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-lg font-semibold max-md:mt-10 max-md:max-w-full">
              <div className="text-xl leading-9 text-indigo-400 max-md:max-w-full">
                About Us
              </div>
              <div className="mt-9 text-5xl leading-[72px] text-indigo-950 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                <span className="font-bold text-indigo-950">We Develop </span>
                <span className="font-bold text-indigo-950">Impactful</span>
                <br />
                <span className="font-bold text-indigo-950">
                  Digital Product
                </span>
              </div>
              <div className="mt-8 leading-8 max-md:max-w-full font-thin">
                MyAgency isn't your average digital marketing agency. We create
                unconventional ideas that grow brands - and yours could be next.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus eget dui pulvinar, eleifend tellus eu, viverra tortor.
                Cras viverra ut velit vel porta. Cras vehicula, neque sed
                posuere pharetra, lacus lacus iaculis ante, vitae rutrum diam
                diam nec enim. In mollis justo sed ipsum mollis maximus. Etiam
                tincidunt nec tortor ac maximus.
              </div>
              <div className="mt-[1vw]">
               <FilledBtn text={"Read More"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
