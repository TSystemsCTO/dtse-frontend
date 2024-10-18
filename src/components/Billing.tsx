"use client";
import React, { useEffect, useState } from "react";

interface BillingInfo {
  title: string;
  percentageChange: string;
  amount: string;
  icon: string | null;
  bgColor: string;
}

const Billing: React.FC = () => {
  const [billingData, setBillingData] = useState<BillingInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/billingDetails.json');
        const data = await response.json();
        setBillingData(data.billingData);
      } catch (error) {
        console.error('Error fetching billing data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-7">
      {billingData.map((item, index) => (
        <div key={index} className="flex flex-row justify-between bg-white rounded-lg h-[89.82px]">
          <div className="flex flex-col p-4 gap-2">
            <div className="flex px-2 items-center rounded-2xl gap-1" style={{ backgroundColor: item.bgColor, width: '63.58px', height: '28.74px' }}>
              {item.icon && (
                <img className="w-[12px] h-[12px]" src={item.icon} alt="" />
              )}
              <h1 className="font-medium text-[12px] leading-5 text-white">
                {item.percentageChange}
              </h1>
            </div>
            <h1 className="font-medium text-[14px] leading-5 text-[#475467]">
              {item.title}
            </h1>
          </div>
          <div className="py-8 px-4 text-[30px] font-normal leading-[38px]">
            {item.amount}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Billing;
