import React, { useEffect, useState } from 'react';

interface VendorInfo {
  name: string;
  city: string;
  rating: number;
}

export default function VendorPerformance() {
  const [vendors, setVendors] = useState<VendorInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/vendorDetails.json');
        const data = await response.json();
        setVendors(data.vendors);
      } catch (error) {
        console.error('Error fetching vendor data:', error);
      }
    };

    fetchData();
  }, []);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src={`/images/icons/${i < rating ? 'YellowStar' : 'GrayStar'}.png`}
          alt={`${i < rating ? 'Yellow' : 'Gray'} Star`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="py-6 w-full">
      <div className="bg-white p-4 rounded-lg shadow-md h-[331px] mt-12">
        <div className="flex justify-between items-center">
          <h1 className="text-[19.06px] leading-[26.68px] font-bold mb-4">
            Vendor Performance
          </h1>
          <img src="/images/icons/ThreeDots.png" alt="Options" />
        </div>
        <div>
          <table className="table-fixed w-full">
            <thead>
              <tr className="flex flex-row">
                <th className="w-[217.24px] flex justify-start font-bold text-[11.43px] leading-[19.06px] p-4">
                  Name
                </th>
                <th className="w-[217.24px] flex justify-center font-bold text-[11.43px] leading-[19.06px] p-4">
                  City
                </th>
                <th className="w-[217.24px] flex justify-end font-bold text-[11.43px] leading-[19.06px] p-4">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, index) => (
                <tr
                  key={index}
                  className="flex flex-row items-center justify-center w-full h-[53.36px]"
                >
                  <td className="w-1/3 flex justify-start p-4 text-[14px] leading-[19.06px]">
                    {vendor.name}
                  </td>
                  <td className="w-1/3 flex justify-center p-4 text-[13.34px] leading-[20.96px]">
                    {vendor.city}
                  </td>
                  <td className="w-1/3 flex justify-end">
                    <div className="flex flex-row px-4">
                      {renderStars(vendor.rating)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
