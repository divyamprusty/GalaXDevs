import React from 'react';
import Link from 'next/link'
import R2D2 from '../public/R2D2.png'
import Image from 'next/image';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from 'react-scroll'

export default function layout() {
    return (
        <div>
        <section className="text-gray-600 body-font" data-aos="zoom-in" data-aos-duration='1000'>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The Artoo-Detoo
                </h1>
                <p className="mb-8 leading-relaxed">R2D2 is your go to companion. Ranging from the plug of your
              television to the engine of your car, it can fix anything in just
              a span of few minutes.</p>
                <div className="flex justify-center">
                <span className='inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                    <Link className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" href='/features'>READ MORE</Link>
                </span>
                </div>
            </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className='object-cover object-cover rounded' alt='R2D2' src={R2D2} />
            </div>
        </div>
        </section>

      <ScrollLink to='layout1' spy={true} smooth={true} duration={100} className='icon-container'>
        <FontAwesomeIcon icon={faAngleDown} className="icon animate-bounce" />
      </ScrollLink>
      </div>
    )
}
