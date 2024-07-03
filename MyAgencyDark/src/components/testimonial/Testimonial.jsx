import React from "react";

const Testimonial = ({  author, position, imageSrc }) => {
  return (
    <div className="flex gap-5 justify-between items-start self-end mt-14 mr-10 max-w-full w-[620px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
      <div className="shrink-0 mt-7 rounded-full bg-stone-300 h-[50px] w-[50px]" />
      <div className="flex flex-col self-stretch">
        <div className="flex gap-5 justify-between items-center px-0.5">
          <div className="shrink-0 self-stretch my-auto rounded-full bg-stone-300 h-[67px] w-[67px]" />
          <img
            src={imageSrc}
            className="shrink-0 self-stretch max-w-full aspect-[1.01] w-[104px]"
          />
          <div className="shrink-0 self-stretch my-auto rounded-full bg-stone-300 h-[67px] w-[67px]" />
        </div>
        <div className="self-center mt-8 text-2xl font-bold text-center text-indigo-950">
          {author}
        </div>
        <div className="mt-8 text-xl font-medium text-center text-slate-700">
          {position}
        </div>
      </div>
      <div className="shrink-0 mt-7 rounded-full bg-stone-300 h-[50px] w-[50px]" />
    </div>
  );
}

export default Testimonial;
