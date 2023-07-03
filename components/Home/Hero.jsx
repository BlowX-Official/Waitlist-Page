import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import faces from "../../assets/svgs/faces.svg"
import Image from 'next/image'
import binance from "../../assets/svgs/binance.svg";
import eth from "../../assets/svgs/eth.svg";
import block from "../../assets/svgs/block.svg";
import { saveEmail } from '../../firebase'
import axios from 'axios'
import { toast } from "react-toastify";
import logo from "../../assets/svgs/Tbt-logo.svg";
import ReuseAbleModal from '../Modal/ReuseAbleModal';
import CustomSelect from './CustomSelect';
import twiiter from "../../assets/svgs/gold-twi.svg";
import gold from "../../assets/svgs/gold.svg";
import tele from "../../assets/svgs/gold-tele.svg";
import inst from "../../assets/svgs/inst.svg";
const url = "https://chat-earn.herokuapp.com/api/subscribe";
import Link from 'next/link';
import { SendEmail } from '../../pages/api/routes';

const Hero = () => {
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [wallet, setWallet] = useState("");
  const [walletAddress, setWalletAddresss] = useState("");
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [selected, setSelected] = useState({});
  const [openCookie, setOpenCookie] = useState(true);
  // coundown
  
   const [countdown, setCountdown] = useState({
     days: 0,
     hours: 0,
     minutes: 0,
     seconds: 0,
   });

   useEffect(() => {
     const interval = setInterval(() => {
       const targetDate = new Date("2023-08-02"); // Set your target date here
       const now = new Date();
       const timeDifference = targetDate - now;

       if (timeDifference <= 0) {
         clearInterval(interval);
       } else {
         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
         const hours = Math.floor(
           (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
         );
         const minutes = Math.floor(
           (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
         );
         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

         setCountdown({ days, hours, minutes, seconds });
       }
     }, 1000);

     return () => {
       clearInterval(interval);
     };
   }, []);
  
  
  
  
  
  
  
  
  
  // coundown
  
  // const handleSubmit = () => {
  //   saveEmail(email);
  // }

 
  
  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      email: email,
      telegram: telegram,
      twitter: twitter,
      wallet: selected.name ? selected.name : "No wallet",
      "wallet-address": walletAddress?walletAddress : "no wallet address",
    };
    // saveEmail(
    //  data
    // );
    let status = await saveEmail(data);
    console.log("I AM THE STATUS", status);
    let userEmail = {
      email:email
    }
    if (status) {
    try {
      const response = await axios.post(url, userEmail);
      
      setOpenForm(false)
      setOpenSuccess(true);
      // toast.success("Submitted Successfully");
     
      setLoading(false)
      setEmail("");
      setTelegram("");
      setTwitter("");
      setWalletAddresss("");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    }

  };
  return (
    <>
      <div className="w-full   major-bg min-h-screen flow-hide overflow-x-hidden relative">
        <div className="w-full md:w-6/12 xl:w-5/12 2xl:w-4/12 mx-auto flex flex-col   md:pb-10 pb-20 px-10 mt-[460px] md:mt-[420px] ">
          {/* I con session */}
          <div className="flex justify-center items-center space-x-8 mt-8 ">
            <Image src={eth} width={eth.width} height={eth.height} />
            <Image src={block} width={block.width} height={block.height} />
            <Image
              src={binance}
              width={binance.width}
              height={binance.height}
            />
          </div>
          <h1 className="text-white text-sm font-semibold  md:text-lg leading-5 text-center md:leading-[30px] mt-6">
            Sometimes, all you need is a perfect idea with dedicated community.
            Join us to explore the opportunity.
          </h1>
          <h1 className="text-white font-bold text-center text-xl md:text-[32px] md:leading-[25px] mt-8 md:mt-[50px]">
            <span>{`${countdown.days}D`}</span> :{" "}
            <span>{`${countdown.hours}H`}</span> :{" "}
            <span>{`${countdown.minutes}M`}</span> :{" "}
            <span>{`${countdown.seconds}S`}</span>
          </h1>
          <button
            onClick={() => setOpenForm(!openForm)}
            disabled={loading ? true : false}
            className={`btn btn-primary w-full mt-[60px] mx-auto ${
              loading
                ? "opacity-50 cursor-not-allowed mx-auto"
                : "cursor-pointer"
            }`}
          >
            {loading ? "Loading..." : "Join Waitlist & Airdrop"}
          </button>
        </div>
      </div>
      {/* FOR MODAL FORM */}
      <ReuseAbleModal open={openForm} setOpen={setOpenForm}>
        <div className="w-full flex flex-col items-center">
          <Image
            src={logo}
            className="mx-auto"
            width={logo.width}
            height={logo.height}
          />
          <div className="flex flex-col mt-[30px]">
            <h1 className="detacher text-center md:text-2xl text-[#FECF81] ">
              Join Waitlist & Airdrop
            </h1>
            <p className="text-sm md:text-base text-[#ababab] text-center mt-2 mb-[30px]">
              Kindly fill in the form and join our community to follow the
              development progress. You will be notified when TBT launch.
            </p>
            <div className="flex flex-col">
              <label htmlFor="" className="text-[#ababab] text-sm mb-[6px]">
                Choose Wallet
              </label>
              <CustomSelect
                selected={selected}
                setSelected={setSelected}
              ></CustomSelect>
            </div>
            {/* start */}
            <div className="flex flex-col mt-5">
              <label htmlFor="" className="text-[#ababab] text-sm mb-[6px]">
                Wallet Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Wallet Address"
                className="w-full px-4 h-[50px] rounded-[8px] placeholder:text-[#4b4b4b] placeholder:text-sm bg-[#1a1a1a] border border-white border-opacity-10 text-white"
                onChange={(e) => setWalletAddresss(e.target.value)}
                value={walletAddress}
                required
              />
            </div>
            {/* end  */}
            {/* start */}
            <div className="flex flex-col mt-5">
              <label htmlFor="" className="text-[#ababab] text-sm mb-[6px]">
                Email
                <span className="text-[#ababab] ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 h-[50px] rounded-[8px] placeholder:text-[#4b4b4b] placeholder:text-sm bg-[#1a1a1a] border border-white border-opacity-10 text-white"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            {/* end  */}
            {/* start */}
            <div className="flex flex-col mt-5">
              <label htmlFor="" className="text-[#ababab] text-sm mb-[6px]">
                Twitter Handle
                <span className="text-[#ababab] ml-1">*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Twitter username"
                className="w-full px-4 h-[50px] rounded-[8px] placeholder:text-[#4b4b4b] placeholder:text-sm bg-[#1a1a1a] border border-white border-opacity-10 text-white"
                required
                onChange={(e) => setTwitter(e.target.value)}
                value={twitter}
              />
            </div>
            {/* end  */}
            {/* start */}
            <div className="flex flex-col mt-5">
              <label htmlFor="" className="text-[#ababab] text-sm mb-[6px]">
                Telegram Handle
                <span className="text-[#ababab] ml-1">*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Telegram"
                className="w-full px-4 h-[50px] rounded-[8px] placeholder:text-[#4b4b4b] placeholder:text-sm bg-[#1a1a1a] border border-white border-opacity-10 text-white"
                onChange={(e) => setTelegram(e.target.value)}
                value={telegram}
                required
              />
            </div>
            {/* end  */}

            <button
              onClick={handleSubmit}
              className={`btn btn-primary w-full mt-[30px] mx-auto ${
                loading
                  ? "opacity-50 cursor-not-allowed mx-auto"
                  : "cursor-pointer"
              }`}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
            <div className="flex justify-center items-center space-x-[34px] mt-6 mb-6">
              <Link
                href="https://twitter.com/tbtofficial_eth?s=21&t=WsOunCWsNhdoyCG_aroRbQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twiiter} alt="twitter" />
              </Link>
              <Link
                href="https://t.me/TheBillionaireToken"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={tele} alt="twitter" />
              </Link>
              <Link
                href="https://coinmarketcap.com/community/post/328731400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={gold} alt="twitter" />
              </Link>
              <Link
                href="https://instagram.com/thebillionairestoken?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={inst} alt="twitter" />
              </Link>
            </div>
          </div>
        </div>
      </ReuseAbleModal>
      {/* END OF FIRST ############################################################################################3 */}
      <ReuseAbleModal open={openSuccess} setOpen={setOpenSuccess}>
        <div className="w-full flex flex-col items-center">
          <Image
            src={logo}
            className="mx-auto"
            width={logo.width}
            height={logo.height}
          />
          <div className="flex flex-col mt-[30px]">
            <h1 className="detacher text-sm text-center md:text-base grado mb-[30px] ">
              Congratulations!
            </h1>
            <h1 className="detacher text-center md:text-2xl text-[#FECF81] ">
              You are on the waitlist!
            </h1>
            <p className="text-sm md:text-base text-[#ababab] text-center mt-2 mb-[30px]">
              You have now successfully joined the waitlist, you will be
              notified when TBT launch. <br /> FORTUNE favors the BRAVE!!!
            </p>

            {/* end  */}
            {/* start */}

            <Link
              href="https://twitter.com/tbtofficial_eth?s=21&t=WsOunCWsNhdoyCG_aroRbQ"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-1 w-full mt-[30px] mx-auto`}
            >
              Follow on Twitter
            </Link>
            <Link
              href="https://t.me/thebillionairestoken"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary w-full mt-[20px] mx-auto ${
                loading
                  ? "opacity-50 cursor-not-allowed mx-auto"
                  : "cursor-pointer"
              }`}
            >
              Join Community
            </Link>
            <div className="flex justify-center items-center space-x-[34px] mt-6 mb-6">
              <Link
                href="https://twitter.com/tbtofficial_eth?s=21&t=WsOunCWsNhdoyCG_aroRbQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twiiter} alt="twitter" />
              </Link>
              <Link
                href="https://t.me/TheBillionaireToken"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={tele} alt="twitter" />
              </Link>
              <Link
                href="https://coinmarketcap.com/community/post/328731400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={gold} alt="twitter" />
              </Link>
              <Link
                href="https://instagram.com/thebillionairestoken?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={inst} alt="twitter" />
              </Link>
            </div>
          </div>
        </div>
      </ReuseAbleModal>
      {/* END OF FIRST ############################################################################################3 */}
      <ReuseAbleModal open={openCookie} setOpen={setOpenCookie}>
        <div className="w-full flex flex-col items-center">
          <Image
            src={logo}
            className="mx-auto"
            width={logo.width}
            height={logo.height}
          />
          <div className="flex flex-col mt-[30px]">
            <h1 className="detacher text-center md:text-2xl text-[#FECF81] ">
              Cookies Policy
            </h1>
            <p className="text-sm md:text-base text-[#ababab] text-center mt-2 mb-[30px]">
              We use cookies and other technologies to collect and process your
              data for various purposes, such as personalizing your experience,
              delivering relevant ads, and improving our services. By clicking
              “Accept”, you agree to our use of cookies and data processing as
              described in our Privacy Policy. You can change your preferences
              or opt out at any time by clicking “Reject” or visiting our
              Cookie Settings page.
            </p>

            {/* end  */}
            {/* start */}
            <div className="w-full flex space-x-4">
              <button
                className="btn-1 btn-primary"
                onClick={() => setOpenCookie(false)}
              >
                Reject
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setOpenCookie(false)}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </ReuseAbleModal>
    </>
  );
}

export default Hero