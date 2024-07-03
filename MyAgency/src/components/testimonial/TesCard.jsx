import React from 'react'

const TesCard = ({desc, username, designation}) => {
  return (
    <div className='w-[25vw] border rounded-md p-6 text-center flex flex-col items-center justify-between'>
        {/* description */}
        <div>
            <p>{desc}</p>
        </div>
        {/* username - designation */}
        <div className='my-[2vw]'>
            <p className='font-semibold'>{username}</p>
            <p>{designation}</p>
        </div>

    </div>
  )
}

export default TesCard