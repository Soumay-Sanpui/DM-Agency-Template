import React from 'react'
import BlgCard from './blog/BlogCard'
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
        <div className='w-full px-[4.4vw]'>
            <p className='text-primary text-[1.2vw] font-semibold'>Blog</p>
            <h1 className='text-[3vw] font-semibold'>Latest News for <span className='text-primary'>Digital</span> Product</h1>
        </div>
        {/* blogs card wrapper */}
        <div className='flex flex-wrap items-center justify-center gap-[1.5vw] my-[2vw]'>
            {
                blogs.map((blog,index)=>(
                    <BlgCard ttl={blog.name} tag={blog.tag} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default BlogSection
