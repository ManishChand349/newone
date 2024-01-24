import React from 'react'

function Footer() {
  return (
    <div className='#1C1C1C'>
{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<footer className="bg-[#1C1C1C]">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
       

        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
        Powering growth in digital 
industry
        </p>
        <div className='mt-[7rem]'>
        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

        

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

         

         
        </ul>
        </div>
       
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white">Company</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
               Home
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
               About Us
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
              Services
              </a>
            </li>

            
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white">Contact</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
               Contact Us
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Location </a>
            </li>

            
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-white">Want to know more about us!!!! Let’s connect</p>
         <div className='flex mt-2 items-center'>
        <input type="text" name="" id="" placeholder='Email address' className='w-full text-[12px]' />
        <button className=' bg-blue-600 py-1 px-3 rounded ml-1'><img src="Vector.svg" alt="" /></button>
         </div>
        </div>

       
        
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
        Partner & Contribute
        </p>

        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; @2023 Ibizo Technologies. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer