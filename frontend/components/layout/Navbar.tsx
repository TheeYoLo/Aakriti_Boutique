"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from "react";


const Navbar = () => {

    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsSearchOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

    return (
        <>
            <nav className="flex justify-between px-20  items-center bg-white" >
                <div id='left' className="flex items-center gap-2">
                    <Image src="/logo.png" width={200} height={200} alt="logo" />

                </div>
                <div id='middle'>
                    <ul className="flex gap-4 text-xl" >
                        <Link href="/"><li>Home</li></Link>
                        <Link href="/about"><li>Collection</li></Link>
                        <Link href="/about"><li>Stories</li></Link>
                        <Link href="/about"><li>About</li></Link>



                    </ul>
                </div>
                <div id='right' className="flex  gap-4">
                    {/* Search button */}
                 <div
  ref={searchRef}
  className="flex items-center"
>
  <div
    className={`overflow-hidden transition-all duration-300 ease-in-out ${
      isSearchOpen ? "w-72 mr-3" : "w-0"
    }`}
  >
    <div className="flex items-center rounded-full border border-gray-300 bg-white px-4 py-2">
      <Image
        src="/search.svg"
        width={18}
        height={18}
        alt="Search"
      />

      <input
        type="text"
        placeholder="Search products..."
        autoFocus={isSearchOpen}
        className="ml-3 w-full bg-transparent outline-none"
      />

      <button
        onClick={() => setIsSearchOpen(false)}
        className="ml-2 text-gray-500 hover:text-black"
      >
        ✕
      </button>
    </div>
  </div>

  {!isSearchOpen && (
    <button
      onClick={() => setIsSearchOpen(true)}
    >
      <Image
        src="/search.svg"
        width={28}
        height={28}
        alt="search"
      />
    </button>
  )}
</div>
                    {/*Cart button  */}
                    <button
                    className='cursor-pointer'
                    >
                        <Image src="/cart.svg" width={28}
                            height={28} alt="cart" />
                    </button>
                    {/* Profile button */}
                    <button
                    
                    className='cursor-pointer'
                    >
                        <Image src="/profile.svg" width={28}
                            height={28} alt="profile" />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
