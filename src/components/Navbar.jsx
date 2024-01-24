import React from 'react'

function Navbar() {
  return (
    <div>
    <header className="bg-white">
  <div className="max-w-[80%] mx-auto  px-4 ">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          
          <img src="mainLogo.jpg" alt="" className='w-[50%]' />
        </a>
      </div>

      <div className=" ml-[3rem]  md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex  items-center gap-6 text-sm">
            <li>
              <a className="text-[#272742] font-semibold text-[1rem] transition hover:text-gray-500/75" href="/"> Home </a>
            </li>

            <li>
              <a className="text-[#272742] font-semibold transition  text-[1rem] hover:text-gray-500/75" href="/"> About us </a>
            </li>

           

            <li>
              <a className="text-[#272742] font-semibold transition text-[1rem] hover:text-gray-500/75" href="/"> Services </a>
            </li>
            <li>
              <a className="text-[#272742] font-semibold transition text-[1rem] hover:text-gray-500/75" href="/"> Contact Us </a>
            </li>

          
          </ul>
        </nav>

        <div className=" items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-[#1A7BFF] px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/"
            >
             Talk to an expert
            </a>

           
          </div>

          
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}

export default Navbar