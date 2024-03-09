import React from "react";

const TermServicesData = [
  {
    heading: "Introduction",
    para: `The General Data Protection Regulation (GDPR) is a new legal framework set up by the 
        European Union in April 2016 to build upon existing data protection legislation. GDPR came 
        into effect on 25th May 2018, and has introduced a range of fresh guidelines spelling out the 
        rights of consumers and dictating how companies can store and share information.`,
    paraOne: `As a hugely significant change to the global business landscape, it is critical that Merlin,
        Hunter & Associates embraces all aspects of GDPR to maintain full compliance.`,
  },
  {
    heading: "Our obligations for GDPR compliance",
    para: `Here at Merlin, Hunter & Associates, we fully appreciate and support the European Union’s
      focus on expanding upon digital rights. As a company, we strongly believe in the need for
      greater business transparency and accountability concerning the collection and handling of
      personal data.`,
    paraone: `That is why Merlin, Hunter & Associates is a firm advocate of GDPR and its many
         implications. These include among many other aspects:`,
    paraSecond: "▪ The Right to Object to Processing         ",
    paraThree: " ▪ The Right to Be Forgotten",
    paraFour: "▪ The Right to Data Portability         ",
    paraFive: "▪ The Right to Withdraw Consent         ",
    paraSix: `As part of our commitment to GDPR and the rights of our customers and clients, Merlin,
         Hunter & Associates vows to ensure our organisation considers and acts on all necessary
         changes surrounding data processing, data storage and the disposal of personal data.
         `,
    paraSeven: ` This includes a commitment to fully fulfil Breach Disclosure Requirements by notifying
         authorities and concerned individuals of any compromise within 72 hours. Moreover, as
         part of our GDPR strategy, Merlin, Hunter & Associates will complete impact assessments
         wherever possible, to identify and deliver the best service possible, as well as to extend our
         customers a guarantee that data is being kept secure.
         Furthermore, we pledge to uphold the following key values and responsibilities:`,
  },
  {
    heading: `Merlin, Hunter & Associates’s strategic values and
   responsibilities`,
    para: `The General Data Protection Regulation (GDPR) is a new legal framework set up by the 
       European Union in April 2016 to build upon existing data protection legislation. GDPR came 
       into effect on 25th May 2018, and has introduced a range of fresh guidelines spelling out the 
       rights of consumers and dictating how companies can store and share information.`,
    paraOne: `As a hugely significant change to the global business landscape, it is critical that Merlin,
       Hunter & Associates embraces all aspects of GDPR to maintain full compliance.`,
  },
];

const TermOfServices = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start my-[100px] gap-[100px]">
      <div className="w-full">
        <div className="flex items-start flex-col gap-[15px]">
          <h3 className="font-roboto text-[#1A1A1A] text-[16px] font-bold">
            {TermServicesData[0].heading}
          </h3>
          <p className="text-[14px] font-lato ">{TermServicesData[0].para}</p>
          <p className="text-[14px] font-lato">{TermServicesData[0].paraOne}</p>
        </div>
        <div className="flex items-start flex-col gap-[15px] py-[30px]">
          {/* <div className="my-[5px]"> */}
          <h3 className="font-roboto text-[#1A1A1A] text-[16px] font-bold">
            {TermServicesData[1].heading}
          </h3>
          <p className="text-[14px] font-lato">{TermServicesData[1].para}</p>

          <p className="text-[14px] font-lato">{TermServicesData[1].paraone}</p>

          <p className="text-[16px] font-lato">
            {TermServicesData[1].paraSecond}
          </p>

          <p className="text-[16px] font-lato">
            {TermServicesData[1].paraThree}
          </p>
          <p className="text-[16px] font-lato">
            {TermServicesData[1].paraFour}
          </p>
          <p className="text-[16px] font-lato">
            {TermServicesData[1].paraFive}
          </p>
          <div>
            <p className="font-lato text-[14px] pt-5">
              {TermServicesData[1].paraSix}
            </p>
            <p className="font-lato text-[14px] pt-5">
              {TermServicesData[1].paraSeven}
            </p>
            <p className="font-lato text-[14px] pt-5">
              Furthermore, we pledge to uphold the following key values and
              responsibilities:
            </p>
          </div>
          <h3 className="font-roboto text-[#1A1A1A] text-[16px] font-bold">
            {TermServicesData[2].heading}
          </h3>
          <div className="px-[20px]">
            <p className="font-lato text-[14px]">
              1. We vow to demonstrate full responsibility and dutiful respect
              as a keeper of customer, client and employee data.
            </p>
            <p className="font-lato text-[14px]">
              2. We totally support GDPR and its requirements, and will do
              everything within our power to appropriately resource and fund any
              changes we must enforce to ensure Merlin, Hunter & Associates can
              meet its obligations.
            </p>
            <p className="font-lato text-[14px]">
              3. We promise to maintain ownership and transparency concerning
              data protection and privacy across all elements of our company.
            </p>
            <p className="font-lato text-[14px]">
              4. We pledge to create and maintain a purposeful data processing
              inventory documenting all data operations, including collection,
              processing and storage.
            </p>
            <p className="font-lato text-[14px]">
              5. We guarantee to extend every possible show of support to
              individuals intent on exercising their rights as outlined under
              GDPR legislation.
            </p>
            <p className="font-lato text-[14px]">
              6. We will conduct a regular review to assess the legality and
              purpose for the collection, processing and storage of personal
              data.
            </p>
            <p className="font-lato text-[14px]">
              7. We vow to act upon identified gaps and develop robust processes
              to maintain full GDPR compliance.
            </p>
            <p className="font-lato text-[14px]">
              8. We promise to clearly communicate the business purpose and
              legal grounds for any transfer of data – including transfer
              outside of the European Union.
            </p>
            <p className="font-lato text-[14px]">
              9. We will contact all partner organisations, contractors or other
              third parties to identify their own GDPR commitments, establish
              relevant contract terms and solidify GDPR compliance controls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermOfServices;
