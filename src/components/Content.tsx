import React from 'react'
export default function Content() {
  return (
    <div className='absolute bg-[#122461] pt-12 px-6 md:px-12 h-full w-full flex flex-col overflow-auto justify-between'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-start'>
        <div className='text-white'>
          <div className='flex items-center gap-3 mb-4'>
            <img src="/skarion.png" alt="Skarion" className='w-8 h-8' />
            <span className='text-white font-semibold tracking-wide'>Skarion</span>
          </div>
          <p className='text-white/80 leading-relaxed'>
            Skarion is a career-focused bootcamp that equips you with job-ready skills and helps you get hired through expert training and personalized support
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802C9.042 3.965 8.71 3.977 7.433 4.032c-2.43.11-3.483 1.15-3.593 3.593-.056 1.277-.067 1.604-.067 4.375s.011 3.098.067 4.375c.11 2.443 1.163 3.483 3.593 3.593 1.277.056 1.604.067 4.567.067s3.29-.011 4.567-.067c2.43-.11 3.483-1.15 3.593-3.593.056-1.277.067-1.604.067-4.375s-.011-3.098-.067-4.375c-.11-2.443-1.163-3.483-3.593-3.593-1.277-.055-1.604-.067-4.567-.067zM12 6.837c-2.846 0-5.163 2.317-5.163 5.163s2.317 5.163 5.163 5.163 5.163-2.317 5.163-5.163-2.317-5.163-5.163-5.163zm0 8.482c-1.833 0-3.319-1.486-3.319-3.319s1.486-3.319 3.319-3.319 3.319 1.486 3.319 3.319-1.486 3.319-3.319 3.319zm4.332-6.605c-.624 0-1.13.506-1.13 1.13s.506 1.13 1.13 1.13 1.13-.506 1.13-1.13-.506-1.13-1.13-1.13z"/></svg>
            </span>
          </div>
          <p className="text-white/80 text-[14px] mt-8">Copyright 2025 © Skarion. All Rights Reserved</p>
        </div>
        <div className='text-white sm:ml-16 lg:ml-0'></div>
        <div className='text-white '>
            <div>
                <p className='block text-[20px] font-[500] relative group'>
                  Programs
                </p>
                <a href='/course/outside-plant-engineering' className='block text-[14px] hover:text-[#c3ddf5] transition-colors relative group mt-4'>
                  Outside Plant Engineering
                </a>
                <p className='block text-[20px] font-[500] relative group mt-6'>
                  Explore
                </p>
                <a href='/' className='block text-[14px] hover:text-[#c3ddf5] transition-colors relative group mt-4'>
                  Success Stories
                </a>
                <a href='/' className='block text-[14px] hover:text-[#c3ddf5] transition-colors relative group mt-2'>
                  Student Journey
                </a>
            </div>
        </div>
        <div className='text-white'>
            <div>
                <p className='block text-[20px] font-[500] relative group'>
                  Company
                </p>
                <a href='/' className='block text-[14px] hover:text-[#c3ddf5] transition-colors relative group mt-4'>
                  About Us
                </a>
                <a href='/' className='block text-[14px] hover:text-[#c3ddf5] transition-colors relative group mt-2'>
                  Contact Us
                </a>
                <a href='/' className='block text-[14px] hover:text-[#c3ddf5] transition-colors relative group mt-2'>
                  Career
                </a>
                <p className='block text-[20px] font-[500] relative group mt-6'>
                  Resources
                </p>
                <a href='/' className='block text-[14px] hover:text-[#c3ddf5] transition-colors relative group mt-4'>
                  Blogs
                </a>
                <a href='/' className='block text-[14px] hover:text-[#c3ddf5] transition-colors relative group mt-2'>
                  FAQ
                </a>
            </div>
        </div>
      </div>

    <div>
        <div className='border-t border-white/20 mt-10'/>
            <div className='flex flex-col items-center text-white/70 text-sm mt-10 mb-10'>
                <div className='flex justify-between w-full max-w-xs'>
                    <a href="#" className='relative hover:text-white group'>
                        Privacy Policy
                    </a>
                    <a href="#" className='relative hover:text-white group'>
                        Terms & Conditions
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}