import pageTitle from "@/common/utils/page-title";
import PageHeading from "@/components/pageHeading";
import Work from "@/components/work";
import Notice from "@/components/work/Notice";
import { Metadata } from "next";

export const metadata: Metadata = pageTitle.work;

const WorkPage = () => {
   return (
      <div>
         <PageHeading>Process</PageHeading>
         <Work />
      </div>
   );
};

export default WorkPage;
