import React from 'react'
import Link from 'next/link'

export default function buttononclick() {
    return (
        <div className='onSubmission'>
            <h1>THANK YOU FOR CONTACTING US.</h1>
            <h2>WE WILL EMAIL YOU SHORTLY</h2>
            <br />
            <button className="flex mx-auto text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <Link href='/' passHref>BACK TO HOME</Link>
            </button>
        </div>
    )
}
