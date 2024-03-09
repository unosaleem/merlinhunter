"use client";
import { CallIcon, Logo } from "../icons";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import { TNavlink } from "@/common/types/common";
import Link from "next/link";
import { useState } from "react";

const Desktop = ({ navlinks }: { navlinks: TNavlink[] }) => {
   const pathname = usePathname();
   const [callText, setCallText] = useState<string>("Call Now");
   const changeCallText = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
         setCallText("Call Now");
      } else {
        
         setCallText("+44 020 3340 6070");
      }
   };

   return (
      <nav className="border-neutral-300 fixed w-full z-20 bg-white ">
         <div className="hidden md:flex justify-between  items-center px-4 py-[20px] md:px-[50px] lg:px-[100px] font-lato drop-shadow-sm sticky max-w-[1440px] mx-auto ">
            <Link href="/">
               <Logo />
            </Link>
            <div className="md:block hidden ">
               <ul className="flex gap-[30px] text-[16px]  text-stone-700  w-full">
                  {navlinks.map((navlink) => (
                     <NavItem
                        navlink={navlink}
                        key={navlink.href}
                        active={navlink.href === pathname}
                     />
                  ))}
               </ul>
            </div>

            <div className="lg:block hidden">
               <a
                  href="tel:+44 020 3340 6070"
                  className="border border-orange-600 hover:bg-orange-600 rounded-full px-[20px] text-orange-600 hover:text-white py-[8px] flex items-center justify-center gap-[5px] cursor-[url(/assets/images/greenCircle.svg),_pointer] orangelink stroke-orange-600 hover:stroke-white"
                  onClick={changeCallText}
               >
                  <CallIcon />
                  <i>{callText}</i>
               </a>
            </div>

            {/* <div onClick={handleMenuIcon} className="lg:hidden">
            {!isOpen ? <MenuIcon /> : <CloseIcon />}
         </div> */}
         </div>
      </nav>
   );
};

export default Desktop;
