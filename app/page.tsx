import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowRight, EyeOff, Menu, MenuIcon, X } from "lucide-react";
import Image from "next/image";

const backgroundImageStyle = {

  transform: 'scaleX(-1)',

};

const contentStyles = {
  direction: 'ltr', // Set text direction to left-to-right
  /* Other styles for content elements */
};

export default function Home() {
  return (
    <div className="">
      <div className=" flex items-center justify-between pl-1 pr-3  bg-black opacity-75">
        <Image alt="dd" src="/Revolt2Earn.png" width={150} height={150} className="" />
        <div className=" flex flex-col items-center justify-center">
          <p className=" text-red-600 text-lg">Connect</p>
          <MenuIcon className=" text-white w-6 h-6" />
        </div>
      </div>
      <div className=" mt-20  flex items-center justify-center relative w-[420px] h-[350px]">
        <Image alt="" src='/card.png' fill style={backgroundImageStyle} />
        <div className=" absolute flex flex-col items-center justify-start top-5">
          <p className=" font-semibold  text-2xl sm:text-2xl lg:text-2xl  1xl:text-4xl 3xl:text-5xl text-[#c4c4c4]">Opt-In pool</p>
          <p className=" text-center px-14 mt-3 text-[#a09696]">Submit the transaction below to opt-in to the CULTmander pool.Note: it is required to have $250 RVLT staked at the time of opting in. Unstaking any amount will remove you from the pool.</p>
          <button className="relative gap-2 px-2 flex items-center justify-center 3xl:h-14 3xl:w-64 3xl:text-4xl 3xl:mt-3 1xl:h-12 1xl:w-56 1xl:text-3xl 1xl:mt-3  border w-32 lg:h-9 h-7 m-auto rounded-xl mt-5 lg:text-xl text-lg font-Nixie bg-buttonBg border-gray-600 font-medium  bg-[#c4c4c4]">Submit</button>

        </div>

      </div>
      <div className=" flex items-center justify-center mt-0 relative">
        <Image alt="dd" src="/smallPaperCover.svg" width={150} height={150} className="" />
        <div className="  -top-5  text-[#a09696] font-serif flex flex-col 3xl:w-108 2xl:w-80 xl:w-60 3xl:h-36 2xl:h-28 xl:h-20 sm:w-56 w-36 absolute items-center justify-evenly sm:h-16 h:10 sm:mt-8 mt-9"><p className="3xl:text-4xl 2xl:text-3xl  text-md sm:text-xl font-Nixie font-semibold">OPTmander</p><p className="3xl:text-4xl 2xl:text-3xl  text-md sm:text-xl font-Nixie font-semibold">No</p></div>
      </div>

      <div className=" sm:w-2/5 lg:w-1/5 w-full m-auto flex justify-evenly "><a href="https://twitter.com/wearecultdao" target="_blank" className="hover:animate-bounce" rel="noreferrer">
        <img className=" w-9 h-9 3xl:w-20 2xl:w-14 3xl:h-20 2xl:h-14" src="/twitter.png" alt="not found" /></a><a href="https://discord.com/invite/K6VCDYphSA" target="_blank" className="hover:animate-bounce" rel="noreferrer">

          <img className=" w-9 h-9 3xl:w-20 2xl:w-14 3xl:h-20 2xl:h-14 " src="/Discord.png" alt="not found" /></a><a href="https://t.me/revolt2earn" target="_blank" className="hover:animate-bounce" rel="noreferrer">

          <img className=" w-9 h-9 3xl:w-20 2xl:w-14 3xl:h-20 2xl:h-14" src="/telegram.png" alt="not found" />

        </a><a href="http://doc.cultdao.io/" target="_blank" className="hover:animate-bounce" rel="noreferrer">
          <img className=" w-9 h-9 3xl:w-20 2xl:w-14 3xl:h-20 2xl:h-14" src="/book.png" alt="not found" />

        </a>

        <a href="https://wearecultdao.medium.com/emancipate-the-many-from-wage-slavery-rvlt-b43e6431d51e" target="_blank" className="hover:animate-bounce" rel="noreferrer">
          <img className=" w-9 h-9 3xl:w-20 2xl:w-14 3xl:h-20 2xl:h-14" src="/Medium.png" alt="not found" /></a></div>

    </div>

  );
}
