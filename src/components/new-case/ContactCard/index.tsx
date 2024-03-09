import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import MobileContactCard from "./MobileContectCard";
interface Iprops {
   card: {
      icon: ReactNode;
      title: string;
      textOne: string;
      textTwo?: string;
   };
   className?: string;
   dataAos: string;
   dataAosDelay: number;
   href: string;
}

const ContactCard = ({
   card: { icon, title, textOne, textTwo },
   className,
   dataAos,
   dataAosDelay,
   href,
}: Iprops) => {
   return (
      <Link
         href={href}
         className={clsx(
            "flex items-center md:justify-center border border-neutral-250 px-[10px] md:px-[10px] py-[10px] md:py-[20px] rounded-[8px] w-full greenlink",
            className
         )}
         data-aos={dataAos}
         data-aos-delay={dataAosDelay}
      >
         <div className="flex gap-[15px] items-center">
            {/* <div className="bg-neutral-200 rounded-full flex items-center justify-center w-[60px] h-[60px]">
               {icon}
            </div> */}

            <div>
               <h3 className="text-[20px] md:text-[25px] font-bold text-start">
                  {title}
               </h3>
               <p className="text-stone-700 md:text-[13px] text-[13px] text-start">
                  {textOne}
               </p>
            </div>
         </div>
      </Link>
   );
};

export default ContactCard;
