import { ReactNode } from "react";
import Container from "./container";
import clsx from "clsx";

const PageHeading = ({
   children,
   className,
}: {
   children: ReactNode;
   className?: string;
}) => {
   return (
      <Container
         background="bg-[#fff]"
         className=" py-[50px] animate__animated animate__fadeIn"
      >
         <h1
            className={clsx(
               "text-[3rem] mt-[65px] md:mt-[90px] md:text-[3.438rem] font-bold font-roboto animate__fadeInUp animate__animated animate__delay-500ms inline-block ",
               className
            )}
         >
            {children}
            <span className="block h-[5px] mt-[-8px] bg-orange-600"></span>
         </h1>
      </Container>
   );
};

export default PageHeading;
