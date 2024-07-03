import React, { useState } from "react";

const ProcessStep = ({ title, description, icn }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className="flex flex-col px-6 py-5 mt-8 border border-b border-zinc-400 max-md:px-5 max-md:max-w-full">
      <div
        className="flex gap-5 justify-between self-start text-lg font-bold leading-7 text-white cursor-pointer"
        onClick={toggleDescription}
      >
       {icn} 
        <div className="my-auto">{title}</div>
      </div>
      {showDescription && (
        <div className="self-end mt-3 text-sm leading-6 text-zinc-400 max-md:max-w-full">
          {description}
        </div>
      )}
    </div>
  );
};

export default ProcessStep;
