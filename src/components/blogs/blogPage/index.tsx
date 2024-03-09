      "use client";
      import { useEffect, useState } from "react";
      import { getAllPosts } from "@/common/apis/post.api";
      import { TPostRepository } from "@/common/types/post";
      import BlogCard from "@/components/blogs/blogCard";
      import Link from "next/link";

      type Props = {
         posts: TPostRepository[] | [];
         totalCount: number;
      };

      const BlogsPages = ({ posts: initialPosts, totalCount: initialTotalCount }: Props) => {
         const [currentPage, setCurrentPage] = useState(1);
         const [allPosts, setAllPosts] = useState<TPostRepository[]>(initialPosts || []);
         const pageSize = 12;

         useEffect(() => {
            const fetchPosts = async () => {
               const { posts } = await getAllPosts(currentPage, pageSize);
               setAllPosts(posts || []);
            };
            fetchPosts();
         }, [currentPage, pageSize]);

         const totalPages = Math.ceil(initialTotalCount / pageSize);

         const handlePageChange = (pageNumber: number) => {
            setCurrentPage(pageNumber);
         };

         // Function to calculate currentBlogs
         const getCurrentBlogs = () => {
            const indexOfLastBlog = currentPage * pageSize;
            const indexOfFirstBlog = indexOfLastBlog - pageSize;
            // console.log(indexOfFirstBlog, indexOfLastBlog , "navneet");
            return allPosts
         };

         // Get currentBlogs whenever allPosts or currentPage changes
         // console.log(getCurrentBlogs(),"blogCardDetails");
         const currentBlogs = getCurrentBlogs();

         return (
            <div className="">
               <div className="md:px-[80px] grid md:grid-cols-2 xl:grid-cols-3 gap-[20px] justify-between md:py-[50px] rounded-[10px]">
                  {currentBlogs.map((post, index: number) => (
                     <Link key={post._id} href={{ pathname: `/blogs/${post.slug.current}` }}>
                        <BlogCard
                           key={post._id}
                           post={post}
                           dataAos="fade-up"
                           dataAosDelay={100 * index}
                        />
                     </Link>
                  ))}
               </div>
               <div className="flex justify-center pb-[50px]">
                  {Array.from({ length: totalPages }, (_, index) => (
                     <button
                        key={index + 1}
                        className={`mx-2 w-[40px] h-[40px] ${currentPage === index + 1
                              ? "bg-teal-900 text-white"
                              : "border border-gray-300 rounded-[68px]"
                           } rounded-full focus:outline-none`}
                        onClick={() => handlePageChange(index + 1)}
                     >
                        {index + 1}
                     </button>
                  ))}
               </div>
            </div>
         );
      };

      export default BlogsPages;
