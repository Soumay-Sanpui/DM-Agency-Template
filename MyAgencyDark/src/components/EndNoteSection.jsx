import React from "react";

const EndNoteSection = () => {
  return (
    <div className="w-full bg-black max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="/fN.PNG"
            className="grow w-full aspect-[1.27] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
              You Have Professional Designer & Developer Under One Roof.
            </div>
            <button className="justify-center self-start px-10 py-5 mt-14 text-lg font-semibold bg-indigo-400 max-md:px-5 max-md:mt-10">
              Talk with Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndNoteSection;
