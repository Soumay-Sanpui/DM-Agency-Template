import React from 'react'

const PfCard = ({ttl, tag}) => {
  return (
    <div className='w-[40vw] bg-white rounded-md'>
        {/* image wrapper */}
        <div id='image-wrapper' className='bg-[#C4C4C4] w-full h-[20vw]'></div>
        {/* description-wrapper */}
        <div id='desc-wrapper' className='p-6'>
            <h3 className='font-semibold text-[2vw] my-[1vw]'>{ttl}</h3>
            <p className='text-[1.2vw]'>{tag}</p>
        </div>
    </div>
  )
}

export default PfCard