import React from 'react'

export default function Content() {
  return (
    <div className='absolute bg-[#000000]  py-12 px-12 h-full w-full flex flex-col justify-between overflow-hidden'>
      <img src="/logo.svg" alt="Skarion" className='absolute right-24 top-[-1rem] w-70 h-64 opacity-40 rotate-15' />
      <img src="/logo.svg" alt="Skarion" className='absolute right-1 bottom-38 w-70 h-64 opacity-40 rotate-15' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start'>
        <div className='max-w-md text-white'>
          <div className='flex items-center gap-3 mb-4'>
            <img src="/skarion.png" alt="Skarion" className='w-8 h-8' />
            <span className='text-white font-semibold tracking-wide'>Skarion</span>
          </div>
          <p className='text-white/80 leading-relaxed'>
            Skarion is in early Beta; please note there may be some imperfections as we continue improving it.
          </p>
          <div className='mt-6 flex flex-wrap gap-3'>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.528 2.528 0 0 1 2.522-2.521h2.52v2.521zM6.313 15.165a2.528 2.528 0 0 1 2.521-2.521 2.528 2.528 0 0 1 2.521 2.521v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.528 2.528 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.523-2.522v-2.522h2.523zM15.165 17.688a2.528 2.528 0 0 1-2.523-2.523 2.528 2.528 0 0 1 2.523-2.52h6.312A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.5 8.5c-1.2 0-2.2.6-2.8 1.5h-3.4c-.3-1.2-1.4-2-2.6-2s-2.3.8-2.6 2H6.3c-.6-.9-1.6-1.5-2.8-1.5-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1.2 0 2.2-.6 2.8-1.5h3.4c.3 1.2 1.4 2 2.6 2s2.3-.8 2.6-2h3.4c.6.9 1.6 1.5 2.8 1.5 1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2zM4.5 13.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM12 13.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM19.5 13.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </span>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md border border-white/40 text-white/80 hover:bg-white/10 transition-colors'>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </span>
            <p className="text-white/80 leading-relaxed mt-8">Copyright 2025© Skarion, All Rights Reserved</p>
          </div>
        </div>

        <div className='text-gray-500 text-sm sm:text-base space-y-6 ml-auto grid grid-cols-4 gap-16'>
            <div className='text-gray-500 text-sm sm:text-base space-y-2 '>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Install
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Watch Demo
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Features
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Pricing
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Learn
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

            <div className='text-gray-500 text-sm sm:text-base space-y-2 '>
                 <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Feedback
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Contact
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  About
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Slack
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

             <div className='text-gray-500 text-sm sm:text-base space-y-2 '>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Install
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Watch Demo
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Features
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Pricing
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Learn
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

            <div className='text-gray-500 text-sm sm:text-base space-y-2 '>
                 <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Feedback
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Contact
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  About
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href='#' className='block hover:text-[#c3ddf5] transition-colors relative group'>
                  Slack
                  <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#c3ddf5] transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>
        </div>
      </div>

      <div className='mt-20 border-t border-white/20' />

      <div className='mt-6 flex flex-col items-center text-white/70 text-sm'>
        <b><i><h1 className='text-[22vw] opacity-[30%] leading-[0.3] mt-15 text-white'>Skarion</h1></i></b>
        <div className='flex justify-between w-full'>
          <a href="#" className='relative hover:text-white group bottom-20'>
            Privacy Policy
            <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a href="#" className='relative hover:text-white group bottom-20'>
            Terms & Conditions
            <span className='absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>
      </div>
    </div>
  )
}
