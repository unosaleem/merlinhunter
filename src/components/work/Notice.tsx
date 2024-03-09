"use client";
import Container from "@/components/container";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/common/assets/notice.json";
import { ReactNode, useRef } from "react";
import Link from "next/link";
import { CallIcon } from "../icons";
import clsx from "clsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";

const Notice = () => {
   return (
      <div
         className="pt-[60px] grid sm:grid-cols-2 xl:grid-cols-3 gap-[20px]"
         data-aos="fade-left"
         data-aos-delay={400}
      >
         <Card>
            <div className="flex flex-col gap-[20px] ">
               <h3 className="font-bold font-roboto text-[20px]">
                  {" "}
                  For family and friend tracing
               </h3>
               <div>
                  <p>
                     We require the permission of both the subject and the
                     requester to share contact information.
                     {/* We obtain your
                     consent on this order form. We give the subject of the
                     trace three options: */}
                  </p>

                  {/* <ul className="ps-[20px] text-start pt-[5px] font-medium list-decimal">
                     <li>Consent to release their contact information</li>
                     <li> Consent to receive a letter from you</li>
                     <li>Decline.</li>
                  </ul> */}
               </div>
            </div>
         </Card>
         <Card>
            <div className="flex flex-col gap-[20px] ">
               <h3 className="font-bold font-roboto text-[20px]">
                  {" "}
                  For tenant tracing
               </h3>

               <p>
                  If an enquirer describes themselves as a landlord, we will
                  check the ownership details of the tenanted property and will
                  decline the requests unless the title documents reflect the
                  enquirers name.
               </p>
               {/* 
               <p>
                  In the case of Asset Reunification or Estate Distribution
                  trace requests, the requestor may be required to show some
                  evidence to support their request.
               </p> */}
            </div>
         </Card>
         <Card>
            <div className="flex flex-col gap-[20px] ">
               <h3 className="font-bold font-roboto text-[20px]">
                  {" "}
                  Asset reunification
               </h3>

               <p>
                  In the case of Asset Reunification or Estate Distribution
                  trace requests, the requestor may be required to show some
                  evidence to support their request.
               </p>
            </div>
         </Card>
      </div>
   );
};

export default Notice;
interface IProps {
   children: ReactNode;
   className?: string;
}

const Card = ({ children, className }: IProps) => {
   const noticeRef = useRef<LottieRefCurrentProps>(null);
   return (
      <div className=" bg-white px-[20px] py-[30px] rounded-sm md:rounded-lg ">
         <div className=" w-[100px] mx-auto relative  z-0 ">
            <Lottie
               onComplete={() => {
                  noticeRef.current?.goToAndPlay(5, true);
               }}
               animationData={animationData}
               lottieRef={noticeRef}
               loop={false}
            />
         </div>
         <div
            className={twMerge(
               clsx(
                  "text-[14px] pt-[10px] min-h-[175px] text-center ",
                  className
               )
            )}
         >
            {children}
         </div>
         <div className="grid grid-cols-2 mt-8">
            <Link
               href="mailto:charles@merlinhunter.com"
               className={twMerge(
                  clsx(
                     "text-[14px] m-auto px-5 font-lato greenlink border border-teal-600  bg-teal-600 hover:bg-white text-white hover:text-teal-600  py-[6px] rounded-full  min-w-fit "
                  )
               )}
            >
               <div className="flex items-center justify-center">
                  <span>E-mail agent</span>
                  <span className="mt-[3px]">
                     {/* <Icon
                        icon="basil:arrow-down-outline"
                        className="rotate-[-135deg] text-[24px]"
                     /> */}
                  </span>
               </div>
            </Link>
            <Link
               href="tel:+44 020 3340 6070"
               className={clsx(
                  "border border-orange-600 m-auto px-5 text-[14px] text-white hover:text-orange-600 hover:bg-transparent    rounded-full  py-[6px] flex items-center justify-center gap-[5px] cursor-[url(/assets/images/greenCircle.svg),_pointer] min-w-fit bg-orange-600 stroke-white hover:stroke-orange-600 greenlink "
               )}
            >
               <CallIcon /> Call Now
            </Link>
         </div>
      </div>
   );
};
