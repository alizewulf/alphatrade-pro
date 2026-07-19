import Container from "@/shared/ui/container";
import React from "react";
import EmployeeInfo, { CompanyNews } from "./components";
import type { CompanyData } from "@/pages/MarketsPage/data/interfaces.types";
import { companyNews } from "@/pages/MarketsPage/data/objects";

function CompanyInfo({ data }: { data: CompanyData }): React.JSX.Element {
  return (
    <Container className="flex w-4/5">
      <button className="py-4 px-6 w-fit cursor-pointer font-semibold text-sm leading-3 text-[#ADC6FF] border-b border-[#ADC6FF]">
        About
      </button>
      <div className="p-6 flex flex-col gap-2">
        <h3 className="font-semibold text-xl leading-7 text-[#DAE2FD]">
          Company Profile
        </h3>
        <p className="text-base leading-6.5 text-paragraph">
          Apple Inc. designs, manufactures, and markets smartphones, personal
          computers, tablets, wearables, and accessories worldwide. The company
          offers iPhone, Mac, iPad, and Wearables, Home, and Accessories. It
          also provides AppleCare support and cloud services; and operates
          various platforms, including the App Store, that allow customers to
          discover and download applications and digital content.
        </p>
        <div className="flex w-full gap-10 items-center justify-between">
        <EmployeeInfo data={data} />
        <div className="flex flex-col justify-between gap-3">
        <CompanyNews news={companyNews} />
        </div>
        </div>
      </div>
    </Container>
  );
}

export default CompanyInfo;
