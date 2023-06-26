import React from 'react'
import Image from 'next/image'
import logo from "../../assets/png/new-logo.png";
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className="w-full nav flex h-[80px] md:h-[90px] py-[25px] fixed top-0 left-0 right-0 z-10 ">
      <div className="w-full px-4 md:px-[100px] 2xl:px-4 2xl:max-w-7xl mx-auto flex items-center justify-between">
        <Image src={logo} alt="logo" className="w-[120px] md:w-[158px] h-auto" />
        <Link
          href="chatearn-whitepaper.pdf"
          target="_blank"
          download
          rel="noopener noreferrer"
          className="font-bold text-[12px] md:text-sm text-white bg-customBlack rounded-xl flex item-center justify-center py-[10px] px-3 md:py-[20px] md:px-6 "
        >
          Download Whitepaper
        </Link>
      </div>
    </div>
  );
}

export default Navbar