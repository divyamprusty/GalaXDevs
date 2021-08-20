import React from "react";
import Link from "next/link";

export default function subscribed() {
  return (
    <div className="subscribed">
      <h1>THANKS FOR SUBSCRIBING TO OUR NEWSLETTER</h1>
      <h2>WE WILL KEEP YOU UPDATED</h2>
      <br />
      <button className="flex mx-auto text-white bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <Link href="/" passHref>
          BACK TO HOME
        </Link>
      </button>
    </div>
  );
}
