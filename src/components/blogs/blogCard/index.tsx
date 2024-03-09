"use client";
import { TPostRepository } from "@/common/types/post";
import Image from "next/image";
import * as DateFns from "date-fns";
import { urlFor } from "@/common/utils/sanity";

export interface IProps {
   post: TPostRepository;
   dataAos?: string;
   dataAosDelay?: number;
   minDescriptionLength?: number; // Add a prop to specify the minimum length

}

export const BlogCard = ({ post, dataAos, dataAosDelay, minDescriptionLength = 120 }: IProps) => {
   const truncateDescription = (description: any) => {
     
      if (description?.length <= minDescriptionLength) {
         return description;
      }
      return `${description && description ? description?.slice(0, minDescriptionLength):"no -description found"} [...]`;
   };
   return (
      <div
         data-aos={dataAos}
         data-aos-delay={dataAosDelay}
         className="h-full pb-[50px]  p-1  overflow-hidden rounded-[4px] flex flex-1 flex-col justify-between  transform transition duration-500 hover:scale-105"
      >
         <Image
            src={urlFor(post?.mainImage).url() || "/assets/images/divorce.png"}
            alt={post.title}
            width={453}
            height={296}
            className="w-full aspect-[4/3] opacity-100 transition duration-300 ease-in-out hover:opacity-80"
         />
         <h3 className=" text-zinc-850 text-wrap  justify-start  font-roboto text-[30px] font-bold leading-normal">
            {post.title}
         </h3>
         <p className="py-[10px] text-[14px] justify-items-start not-italic font-lato leading-normal text-stone-700">
            {truncateDescription(post.description)}
         </p>

         <div className="flex">
            <p className="text-[14px] justify-start text-gray-400 font-lato ">
               {/* {JSON.stringify(post && post?.publishedAt)} */}
               {post && post?.publishedAt ? DateFns.format(post?.publishedAt, "dd MMM yyyy") : ""}
              
               {/* {DateFns.format(post?.publishedAt, "dd MMM yyyy")} */}
            </p>
         </div>
      </div>
   );
};
export default BlogCard;
