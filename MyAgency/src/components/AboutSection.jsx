import React from 'react'
import SectionHeading from './SectionHeading'
import FilledBtn from "./FilledBtn"

const AboutSection = () => {
  return (
    <div className='px-10 w-screen flex my-[5vw]'>
        {/* left section */}
        <div className='w-1/2 flex items-center justify-center'>
            <div id="about-image-wrapper">
                <img src='/abtimg.png' />
            </div>
        </div>
        {/* right section */}
        <div className='w-1/2'>
            <SectionHeading heading={"About Us"}/> 
            <h1 className='font-semibold text-[3vw]'>We Develop <span className='text-primary'>Imapactful</span><br />Digital Product</h1>
            <p className='leading-[2.5vw] text-[1.2vw] my-[2vw]'>
                MyAgency isn't your average digital marketing agency. We create unconventional ideas that grow brands - and yours could be next. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget dui pulvinar, eleifend tellus eu, viverra tortor. Cras viverra ut velit vel porta. Cras vehicula, neque sed posuere pharetra, lacus lacus iaculis ante, vitae rutrum diam diam nec enim. In mollis justo sed ipsum mollis maximus. Etiam tincidunt nec tortor ac maximus.
            </p>
            <FilledBtn text={"Read More"}/>
        </div>
    </div>
  )
}

export default AboutSection