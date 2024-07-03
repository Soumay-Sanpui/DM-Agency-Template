import React from 'react'

const SrCard = ({icn, ttl}) => {
  return (
    <div className='px-7 py-10 rounded-md bg-white w-[29vw] space-y-[2vw]'>
        <div id='icon-wrapper'>
            {icn}
       </div>
        <h4 className='font-semibold text-[2vw]'>{ttl}</h4>
        <p className='text-[1.1vw]'>Lorem ipsum dolor,<br />sit amet consectetur adipisicing<br />elit. Quos, praesentium </p>
        <div id='link-wrapper' className='flex items-center gap-3 cursor-pointer'>
            <a href='/' className='text-primary text-[1vw]'>Explore</a>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.09553 1.09743C8.84702 0.846375 8.84702 0.43934 9.09553 0.188289C9.34405 -0.0627628 9.74696 -0.0627628 9.99548 0.188289L13.8136 4.04543C14.0621 4.29648 14.0621 4.70352 13.8136 4.95457L9.99548 8.81171C9.74696 9.06276 9.34405 9.06276 9.09553 8.81171C8.84702 8.56066 8.84702 8.15363 9.09553 7.90257L11.8274 5.14285H0.643375C0.288049 5.14285 0 4.85503 0 4.49999C0 4.14495 0.288049 3.85713 0.643375 3.85713H11.8273L9.09553 1.09743Z" fill="#095CFC"/>
            </svg>
        </div>
    </div>
  )
}

export default SrCard