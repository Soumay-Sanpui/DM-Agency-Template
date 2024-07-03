import React, { useState } from 'react'

const ClientSection = () => {
  const [client, setClients] = useState(5);
  return (
    <div id="client-section-wrapper" className='text-center p-4 my-5'>
        <p className='text-[1.1vw]'>Trusted by 1000+ companies in the world including:</p>

        <div className='flex gap-4 p-3 items-center justify-center my-2'>
            {
                Array.from({length: client}).map((idx)=>(
                    <div key={idx} className='bg-[#C4C4C4] w-[10vw] h-[3vw]'>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ClientSection;