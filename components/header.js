import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function header() {
  function HandleToggle(){
    document.body.classList.toggle('dark')
  }

    return (
        <div className='headerelements'>
            <header className="text-gray-600 body-font" data-aos="slide-up" data-aos-duration="1000">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-700 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">R2D2</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <span className='mr-5 hover:text-gray-900'>
      <Link className="mr-5 hover:text-gray-900" href='/'>HOME</Link>
    </span>
    <span className='mr-5 hover:text-gray-900'>
      <Link className="mr-5 hover:text-gray-900" href="/about">ABOUT US</Link>
    </span>
    <span className='mr-5 hover:text-gray-900'>
      <Link className='mr-5 hover:text-gray-900' href='/pricing'>PRICING</Link>
    </span>
    <span className='mr-5 hover:text-gray-900'>
      <Link className='mr-5 hover:text-gray-900' href='/gallery'>GALLERY</Link>
    </span>
    <span className='mr-5 hover:text-gray-900'>
      <Link className='mr-5 hover:text-gray-900' href='/contact'>CONTACT US</Link>
    </span>
    </nav>
    <div className="toggleButton">
            <input onClick = {HandleToggle} type="checkbox" className="checkbox" id="checkbox"/>
            <label htmlFor="checkbox" className='label' id='label'>
                <FontAwesomeIcon class='fa-moon' icon={faMoon} />
                <FontAwesomeIcon class='fa-sun' icon={faSun} />
                <div className='ball' id='ball'></div>
            </label>
          </div>
  </div>
</header>
        </div>
    )
  }

export default header
