import React from "react";

interface IProps {
   title: string;
   onClick?: (title: string) => void;
   isSelected?: boolean; // New prop to determine if the chip is selected


}

const InvestigationChip = ({ title, onClick,isSelected }: IProps) => {
   const handleClick = () => {
      if (onClick) {
        onClick(title); // Pass the title to the onClick handler
      }
    };
   return (
      <p
      className={`border text-teal-950 ${
        isSelected ? "bg-teal-950 hover:bg-teal-950 text-white" : "hover:text-white hover:bg-teal-950"
      } px-[20px] py-[10px] md:px-[40px] md:py-[20px] rounded-full`}
      onClick={handleClick}
      id={title}
    >
         {title}
      </p>
   );
};

export default InvestigationChip;
