import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Order, setSelectedOrder, showOrderDetailsScreen } from '@/store/orderSlice';

export default function Procurement() {
  const dispatch = useDispatch();
  const [orderData, setOrderData] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await fetch('/data/orderDetails.json');
      const data = await response.json();
      setOrderData(data.orders);
    };

    fetchOrderData();
  }, []);

  const formatDate = (dateString: string) => {
    const [datePart] = dateString.split(' at ');
    const date = new Date(datePart);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).replace(/,/g, '');
  };

  const handleViewOrderDetails = (order: Order) => {
    dispatch(setSelectedOrder(order));
    dispatch(showOrderDetailsScreen(true));
  };

  return (
    <div className="py-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Procurement</h1>
      <div className="bg-white p-4 rounded-lg shadow-md h-[331px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[19.06px] leading-[26.68px] font-bold mb-4">
              Procurement
            </h1>
          </div>
          <div>
            <h1 className="text-[13px] leading-[26.68px] font-bold text-[#B9BBBD] mb-4">
              Show all
            </h1>
          </div>
        </div>
        <div className="overflow-y-auto no-scrollbar h-[213.44px]">
          <table className="table-fixed">
            <thead>
              <tr className="flex flex-row">
                <th className="w-[157px] text-left font-bold text-[11.43px] leading-[19.06px] p-4">
                  Invoice Name
                </th>
                <th className="w-[157px] text-right font-bold text-[11.43px] leading-[19.06px] p-4">
                  Date
                </th>
                <th className="w-[157px] text-right font-bold text-[11.43px] leading-[19.06px] p-4">
                  Amount
                </th>
                <th className="w-[110px] text-right font-bold text-[11.43px] leading-[19.06px] p-4"></th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((data, idx) => (
                <React.Fragment key={idx}>
                  <tr>
                    <td colSpan={4}>
                      <hr className="h-px border-[#FF4FA7] border-[0.95px]" />
                    </td>
                  </tr>
                  <tr
                    className="flex w-full h-[53.36px] hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleViewOrderDetails(data)} // Call function when clicked
                  >
                    <td className="w-[157px] text-left p-4 text-[15.24px] leading-[22.87px]">
                      {data.orderInfo.invoiceName}
                    </td>
                    <td className="w-[157px] text-right p-4 text-[13.34px] leading-[20.96px]">
                      {formatDate(data.orderInfo.date)}
                    </td>
                    <td className="w-[157px] text-right p-4 text-[13.34px] leading-[20.96px] font-bold">
                      {data.orderInfo.cost}
                    </td>
                    <td className="w-[110px] flex justify-center p-4">
                      <img src="/images/icons/CaretRight.png" alt="caret right" className="w-4 h-4" />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
