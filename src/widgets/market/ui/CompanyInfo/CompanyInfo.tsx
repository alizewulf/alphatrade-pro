import Container from "@/shared/ui/container";
import React from "react";
import EmployeeInfo from "./components";
import type { CompanyData } from "@/pages/MarketsPage/ui/data/interfaces.types";

function CompanyInfo({object}:{object:CompanyData}): React.JSX.Element {
  return (
    <Container className="max-w-172">
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
        <EmployeeInfo object={object}/>
      </div>
    </Container>
  );
}

export default CompanyInfo;
