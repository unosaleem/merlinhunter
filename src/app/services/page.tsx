import pageTitle from "@/common/utils/page-title";
import Container from "@/components/container";
import { PlusIcon } from "@/components/icons";
import PageHeading from "@/components/pageHeading";
import ServiceChip from "@/components/services/ServiceChip";
import Stats from "@/components/services/Stats";
import clsx from "clsx";
import { Metadata } from "next";
import CountUp from "react-countup";

// const services = [
//    {
//       _id: "Digital Intelligence Services",
//       title: "Digital Intelligence Services",
//       list: [
//          [
//             {
//                title: "Address Trace",
//                _id: "Address Trace",
//                para: "An address trace investigation is a type of investigation that aims to locate the current address of an individual or entity. This can be done for a variety of reasons, such as to serve legal documents, to collect a debt, or to find a missing person. There are a number of ways to conduct an address trace investigation.",
//             },

//             {
//                title: "Background Check",
//                _id: "Background Check",
//                para: "A background check is a process that verifies an individual's personal and professional information. ",
//             },
//          ],

//          [
//             {
//                title: "Hidden Asset",
//                _id: "Hidden Asset",
//                para: "A hidden asset search is an investigation conducted to uncover assets that an individual or company has intentionally concealed. These assets may be hidden for various reasons, such as to avoid paying taxes, debts, or child support, or to protect them from creditors or legal claims. Methods used in hidden asset searches:",
//             },

//             {
//                title: "Social Media Investigation",
//                _id: "Social Media Investigation",
//                para: "A social media investigation is a type of investigation that aims to gather information from social media platforms to support a legal case or other investigation. Social media platforms contain a wealth of information about individuals and organisations, including their personal information, interests, activities, and relationships",
//             },
//          ],
//          [
//             {
//                title: "Fact Finding Investigation",
//                _id: "Fact Finding Investigation",
//                para: "A false allegation investigation is the process of gathering evidence to determine whether an allegation is false. This can be a complex and challenging process, as it often involves conflicting testimony and limited evidence. False allegations can be made for a variety of reasons, such as retaliation, revenge, or personal gain.",
//             },
//          ],
//          [
//             {
//                title: "Revenge Porn Investigation",
//                _id: "Revenge Porn Investigation",
//                para: "Revenge porn is the act of sharing explicit images or videos of someone without their consent, often with the intent to humiliate or embarrass them. It is a serious crime that can have a devastating impact on the victim.",
//             },
//          ],
//       ],
//    },
//    {
//       _id: "Investigations Services",
//       title: "Investigations Services",
//       list: [
//          [
//             {
//                title: "Infidelity Investigation",
//                _id: "Infidelity Investigation",
//                para: "Infidelity investigation is the process of gathering evidence to prove that a person is cheating on their partner. It can be conducted by a private investigator, or by the person themselves if they have the time and resources.",
//             },

//             {
//                title: "Financial Investigation",
//                _id: "Financial Investigation",
//                para: "An embezzlement investigation is the process of gathering evidence to determine whether an individual has embezzled funds or assets from an organisation. Embezzlement is a type of white-collar crime that involves the fraudulent misappropriation of property or entrusted funds. ",
//             },
//          ],

//          [
//             {
//                title: "Cyberstalking Investigation",
//                _id: "Cyberstalking Investigation",
//                para: "Cyber stalking can have a devastating impact on victims, causing them emotional distress, fear, and anxiety. It can also damage their reputation and make it difficult for them to live their lives normally.",
//             },

//             {
//                title: "Stolen Vehicle Investigation",
//                _id: "Stolen Vehicle Investigation",
//                para: "The goal in a stolen vehicle investigation is to locate and recover the vehicle and identify and apprehend the perpetrators.",
//             },
//          ],

//          [
//             {
//                title: "Catfish Investigation",
//                _id: "Catfish Investigation",
//                para: "A catfish investigation is a type of investigation that aims to identify and expose individuals who are using the internet to create fake online personas.",
//             },
//          ],

//          [
//             {
//                title: "Child Custody Investigation",
//                _id: "Child Custody Investigation",
//                para: "A child custody investigation is a type of investigation that aims to gather information about the ability of a parent or other adult to provide a child with safe, adequate, and appropriate care.",
//             },
//          ],
//       ],
//    },
// ];
interface ServiceItem {
   _id: string;
   title: string;
   list_one: {
      title: string;
      _id: string;
      para: string;
   }[];
   // list_two: {
   //    title: string;
   //    _id: string;
   //    para: string;
   // }[];
}
const digitalServices: ServiceItem[] = [
   {
      _id: "1",
      title: "Digital Intelligence Services",
      list_one: [
         {
            title: "Address Trace",
            _id: "Address Trace",
            para: "An address trace investigation is a type of investigation that aims to locate the current address of an individual or entity. This can be done for a variety of reasons, such as to serve legal documents, to collect a debt, or to find a missing person. There are a number of ways to conduct an address trace investigation.",
         },

         {
            title: "Background Check",
            _id: "Background Check",
            para: "A background check is a process that verifies an individual's personal and professional information. ",
         },

         {
            title: "Hidden Asset",
            _id: "Hidden Asset",
            para: "A hidden asset search is an investigation conducted to uncover assets that an individual or company has intentionally concealed. These assets may be hidden for various reasons, such as to avoid paying taxes, debts, or child support, or to protect them from creditors or legal claims. Methods used in hidden asset searches:",
         },
         {
            title: "Social Media Investigation",
            _id: "Social Media Investigation",
            para: "A social media investigation is a type of investigation that aims to gather information from social media platforms to support a legal case or other investigation. Social media platforms contain a wealth of information about individuals and organisations, including their personal information, interests, activities, and relationships",
         },

         {
            title: "Fact Finding Investigation",
            _id: "Fact Finding Investigation",
            para: "A false allegation investigation is the process of gathering evidence to determine whether an allegation is false. This can be a complex and challenging process, as it often involves conflicting testimony and limited evidence. False allegations can be made for a variety of reasons, such as retaliation, revenge, or personal gain.",
         },

         {
            title: "Revenge Porn Investigation",
            _id: "Revenge Porn Investigation",
            para: "Revenge porn is the act of sharing explicit images or videos of someone without their consent, often with the intent to humiliate or embarrass them. It is a serious crime that can have a devastating impact on the victim.",
         },
      ],
   },
];

const investigationsServices: ServiceItem[] = [
   {
      _id: "2",
      title: "Investigations Services",
      list_one: [
         {
            title: "Infidelity Investigation",
            _id: "Infidelity Investigation",
            para: "Infidelity investigation is the process of gathering evidence to prove that a person is cheating on their partner. It can be conducted by a private investigator, or by the person themselves if they have the time and resources.",
         },

         {
            title: "Financial Investigation",
            _id: "Financial Investigation",
            para: "An embezzlement investigation is the process of gathering evidence to determine whether an individual has embezzled funds or assets from an organisation. Embezzlement is a type of white-collar crime that involves the fraudulent misappropriation of property or entrusted funds. ",
         },

         {
            title: "Cyberstalking Investigation",
            _id: "Cyberstalking Investigation",
            para: "Cyber stalking can have a devastating impact on victims, causing them emotional distress, fear, and anxiety. It can also damage their reputation and make it difficult for them to live their lives normally.",
         },

         {
            title: "Stolen Vehicle Investigation",
            _id: "Stolen Vehicle Investigation",
            para: "The goal in a stolen vehicle investigation is to locate and recover the vehicle and identify and apprehend the perpetrators.",
         },

         {
            title: "Catfish Investigation",
            _id: "Catfish Investigation",
            para: "A catfish investigation is a type of investigation that aims to identify and expose individuals who are using the internet to create fake online personas.",
         },

         {
            title: "Child Custody Investigation",
            _id: "Child Custody Investigation",
            para: "A child custody investigation is a type of investigation that aims to gather information about the ability of a parent or other adult to provide a child with safe, adequate, and appropriate care.",
         },
      ],
   },
];

export const metadata: Metadata = pageTitle.services;

const ServicesPage = () => {
   return (
      <section>
         <PageHeading>Services</PageHeading>

         <Container background=" bg-[#F6F6F6]" className="py-[20px]">
            {/* <h1 className="text-[2.875rem] text-teal-950 font-roboto font-bold ">
               <span className="mb-[-10px] border-b-[5px] border-orange-600">
                  Services
               </span>
            </h1> */}
            <div className="grid md:grid-cols-2 gap-12">
               <div className="md:px-4 py-8 rounded-lg md:rounded-2xl">
                  {digitalServices.map((mainItems, index) => (
                     <div className="space-y-10" key={mainItems._id}>
                        {/* <h1
                           className={clsx(
                              "text-[1.5rem]  :text-[1.875] font-bold font-roboto animate__fadeInUp animate__animated animate__delay"
                           )}
                        >
                           {mainItems.title}
                        </h1> */}
                        <div className="grid  gap-[10px]">
                           <div className="space-y-2">
                              {mainItems.list_one.map((items: any) => (
                                 <ServiceChip
                                    service={items}
                                    key={items._id}
                                    className={` border-r-4 border-teal-600 animate__fadeIn animate__animated animate__slow`}
                                    index={index}
                                    iconColor="#226C6D"
                                 />
                              ))}
                           </div>
                           {/* <div className="space-y-2">
                              {mainItems.list_two.map((items: any) => (
                                 <ServiceChip
                                    service={items}
                                    key={items._id}
                                    className={` border border-teal-600 animate__fadeIn animate__animated animate__slow`}
                                    index={index}
                                    iconColor="#226C6D"
                                 />
                              ))}
                           </div> */}
                        </div>
                     </div>
                  ))}
               </div>
               <div className="md:px-4 py-8 rounded-2xl">
                  {investigationsServices.map((mainItems, index) => (
                     <div className="space-y-10" key={mainItems._id}>
                        {/* <h1
                           className={clsx(
                              "text-[1.5rem]  md:text-[1.875] font-bold font-roboto animate__fadeInUp animate__animated animate__delay"
                           )}
                        >
                           {mainItems.title}
                        </h1> */}
                        <div className="grid gap-[10px]">
                           <div className="space-y-2">
                              {mainItems.list_one.map((items: any) => (
                                 <ServiceChip
                                    service={items}
                                    key={items._id}
                                    className={` border-r-4 border-orange-600 animate__fadeIn animate__animated animate__slow`}
                                    index={index}
                                    iconColor="#FF6633"
                                 />
                              ))}
                           </div>
                           {/* <div className="space-y-2">
                              {mainItems.list_two.map((items: any) => (
                                 <ServiceChip
                                    service={items}
                                    key={items._id}
                                    className={` border border-orange-600 animate__fadeIn animate__animated animate__slow`}
                                    index={index}
                                    iconColor="#FF6633"
                                 />
                              ))}
                           </div> */}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <Stats />
         </Container>
      </section>
   );
};

export default ServicesPage;

const getAnimationDelay = (index: number) => {
   switch (index) {
      case 0:
         return "animate__delay-500ms";

      case 1:
         return "animate__delay-1s";

      default:
         return "animate__delay-500ms";
   }
};
