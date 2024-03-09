"use client";
import Container from "@/components/container";
import CountUp from "react-countup";

const Stats = () => {
   return (
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-[15px] md:gap-[40px] py-[50px]">
         <div className=" bg-teal-600 text-white w-full px-[15px] md:px-[25px] py-[20px] rounded-xl shadow-2xl">
            <p className="text-[62px] font-bold font-roboto text-center">
               <CountUp
                  duration={2.5}
                  end={100}
                  useEasing={false}
                  enableScrollSpy={true}
                  scrollSpyOnce={false}
               />
               <span
                  className="text-[42px]"
                  data-aos="zoom-in"
                  data-aos-delay="2700"
               >
                  %
               </span>
            </p>
            <p className="text-[18px] font-lato text-md font-medium text-center ">
               Success rate in hidden asset investigations finding new evidence
               for fair settlement.
            </p>
         </div>
         <div className=" bg-white text-teal-600  w-full px-[15px] md:px-[25px] py-[20px] rounded-xl shadow-2xl">
            <p className="text-[62px]  font-bold font-roboto text-center  ">
               <CountUp
                  duration={4}
                  end={149}
                  useEasing={false}
                  enableScrollSpy={true}
                  scrollSpyOnce={false}
               />
               <span
                  className="text-[42px] text-white"
                  data-aos="zoom-in"
                  data-aos-delay="2700"
               >
                  %
               </span>
            </p>
            <p className="font-lato text-md text-[18px] font-medium text-center ">
               Missing people cases solved.
            </p>
         </div>

         <div className=" bg-orange-600 text-white  w-full px-[15px] md:px-[25px] py-[20px] rounded-xl shadow-2xl">
            <p className="text-[62px]  font-bold font-roboto text-center ">
               <CountUp
                  duration={2.5}
                  end={100}
                  useEasing={false}
                  enableScrollSpy={true}
                  scrollSpyOnce={false}
               />
               <span
                  className="text-[42px]"
                  data-aos="zoom-in"
                  data-aos-delay="2700"
               >
                  +
               </span>
            </p>
            <p className="text-[18px] text-md font-medium font-lato text-center ">
               Civil litigation and arbitration investigations completed across
               the UK, US, Kenya and Eastern Europe.
            </p>
         </div>
      </div>
   );
};

export default Stats;
