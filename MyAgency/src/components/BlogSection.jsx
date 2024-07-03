import React from 'react'
import SectionHeading from './SectionHeading'
import BlgCard from './blog/BlgCard'
import FilledBtn from './FilledBtn';

const BlogSection = () => {
  const blogs = [
    {
        tag: "Process",
        name: "Our Process to redesign dashboard for server host",
    },
    {
        tag: "Branding",
        name: "How we adding fun and playful ambiance on onli",
    },
    {
        tag: "Develop",
        name: "Our Process to Develop dashboard for server host",
    },
  ];
  return (
    <div className='p-10 flex flex-col items-center justify-center'>
        {/* Announcer */}
        <div id='announcer-wrapper' className='my-[1vw] text-center flex flex-col gap-5'>
            <SectionHeading heading={"Blog"}/>
            <h1 className='text-[3vw] font-semibold'>News for <span className='text-primary'>Digital</span> Product</h1>
        </div>
        {/* blogs card wrapper */}
        <div className='flex flex-wrap items-center justify-center gap-[1.5vw] my-[2vw]'>
            {
                blogs.map((blog,idx)=>(
                    <BlgCard ttl={blog.name} tag={blog.tag}/>
                ))
            }
        </div>
        <FilledBtn text={"View More"} />
    </div>
  )
}

export default BlogSection