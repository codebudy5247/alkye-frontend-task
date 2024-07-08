import React from "react";
import FbImg from "@/public/icons/facebook.png";
import InstaImg from "@/public/icons/instagram.png";
import XImg from "@/public/icons/twitter.png";
import TwitchImg from "@/public/icons/twitch.png";
import YtImg from "@/public/icons/youtube.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="px-6 py-10 sm:px-20">
        <div className="flex justify-start gap-4 cursor-pointer">
          <Image src={FbImg} alt="Facebook" width={30} height={30} />
          <Image src={InstaImg} alt="Instagram" width={30} height={30} />
          <Image src={XImg} alt="Twitter" width={30} height={30} />
          <Image src={TwitchImg} alt="Twitch" width={30} height={30} />
          <Image src={YtImg} alt="YouTube" width={30} height={30} />
        </div>

        <div className="flex flex-col md:flex-wrap md:flex-row mt-10 gap-2 justify-start">
          <div className="flex flex-col md:flex-row md:w-1/2 sm:gap-x-10">
            <h6 className="text-md text-white text-nowrap">Privacy Policy</h6>
            <h6 className="text-md text-white text-nowrap">Contact Us</h6>
            <h6 className="text-md text-white text-nowrap">
              Cookie preferences
            </h6>
            <h6 className="text-md text-white text-nowrap">
              Corporate Information
            </h6>
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 sm:gap-x-10">
            <h6 className="text-md text-white text-nowrap	">Privacy Policy</h6>
            <h6 className="text-md text-white text-nowrap	">Contact Us</h6>
            <h6 className="text-md text-white text-nowrap	">
              Cookie preferences
            </h6>
            <h6 className="text-md text-white text-nowrap	">
              Corporate Information
            </h6>
          </div>
        </div>

        <div className="mt-20 flex justify-start">
          <h6 className="text-xs text-white">© Alkye Test</h6>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
