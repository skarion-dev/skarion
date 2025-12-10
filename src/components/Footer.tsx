import React from 'react'
import Image from 'next/image';

export default function Footer() {
  return (
    <div 
        className='relative h-[600px]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+600px)] -top-[100vh]'>
            <div className='h-[600px] sticky top-[calc(100vh-600px)]'>
                <div className='absolute bg-[#122461] pt-12 px-12 h-full w-full flex flex-col overflow-hidden justify-between'>
                  <div className='grid grid-cols-4 gap-12 items-start'>
                    <div className='text-white'>
                      <div className='flex items-center gap-3 mb-4'>
                        <Image src="/skarion.png" width={32} height={32} alt="Skarion"/>
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
                      </div>
                      <p className="text-white/80 text-[14px] mt-8">Copyright 2025 © Skarion</p>
                    </div>

                    <div className='text-white ml-16'>
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
                            <div className='flex justify-between w-full'>
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
            </div>
        </div>
    </div>
  )
}
