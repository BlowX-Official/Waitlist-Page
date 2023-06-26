import React from 'react'
import apple from "../../assets/svgs/apple.svg";
import google from "../../assets/svgs/google.svg";
import logo from "../../assets/svgs/logo-svg.svg";
import { BsDiscord, BsTelegram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";
import anim from "../../assets/png/chat-giff.gif";
import  Image from "next/image"
const Footer = () => {
  return (
    <div className="bg-customBlack p-4 md:p-8 ">
      <div className="">
        <div className="w-full   grid grid-cols-1  gap-8 md:grid-cols-2 ">
          <div className="w-full  bg-customBlue flex flex-col items-center justify-center py-[42px] md:py-0 ">
            <p className="text-white text-xl w-9/12 md:w-auto md:text-2xl font-bold text-center mx-auto hidden md:flex  ">
              ChatEarn will be available on
            </p>
            <p className="text-white text-xl w-9/12 md:w-auto md:text-2xl font-bold text-center mx-auto md:hidden ">
                          ChatEarn will be
                          <br />
                          available on
            </p>
            <div className="flex items-center md:w-full justify-center  space-x-4 md:space-x-8 mt-6 mx-auto">
              <Image src={google} alt="google" className="w-[123px] md:w-[205px] h-auto " />
              <Image src={apple} alt="google" className="w-[123px] md:w-[205px] h-auto " />
            </div>
          </div>
          <div className="w-full  h-full py-8 md:py-16 bg-customBlue">
            <div className="w-full h-[120px] flex justify-center items-center overflow-y-hidden">
              <Image
                className="w-fit h-auto mx-auto object-cover"
                src={anim}
                alt="logo"
              />
            </div>
            <div className="mt-6 justify-center items-center flex space-x-4 text-white text-3xl cursor-pointer">
              <Link href="http://" target="_blank" rel="noopener noreferrer">
                <BsDiscord className="text-white" />
              </Link>
              <Link href="http://" target="_blank" rel="noopener noreferrer">
                <BsTelegram className="text-white" />
              </Link>
              <Link href="http://" target="_blank" rel="noopener noreferrer">
                <BsTwitter className="text-white" />
              </Link>
              <Link href="http://" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="text-white" />
              </Link>
            </div>
            <div className="justify-center items-center flex mt-7">
              <AiOutlineCopyright className="text-white text-base" />
              <p className=" text-white text-[10px] md:text-sm font-[300]">
                2023 ChatEarn Inc. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer