import SearchBar from '@/components/SearchBar';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showOrderDetailsScreen } from '@/store/orderSlice';
import { RootState } from '@/store';

const OrderDetails = () => {
    const dispatch = useDispatch();
    const selectedOrder = useSelector((state: RootState) => state.orders.selectedOrder);

    const handleCloseOrderDetails = () => {
        dispatch(showOrderDetailsScreen(false));
    };

    const {
        orderInfo = {
            invoiceName: "",
            date: "",
            orderType: "",
            quantity: 0,
            weight: "",
            cost: "",
        },
        shippingInfo = {
            address: "",
            deliveryDate: "",
            customerName: "",
            contact: "",
            mailId: "",
            paymentStatus: "",
            paymentStatusColor: "",
        },
        orderHistoryInfo = { 
            step1: "",
            step2: "",
            step3: "",
            step4: "",
            step5: "",
            step6: "",
            orderStatus: "",
            orderStatusColor: "",
        },
        labels = {
            order: ["Order ID", "Order Type", "Quantity", "Weight", "Cost"],
            shipping: ["Ship To", "Customer Name", "Contact", "Mail ID", "Payment Status"],
            history: ["Order Status"],
        },
    } = selectedOrder || {};

    return (
        <div className="flex min-h-screen">
            <div className="flex-1 p-8 bg-gray-100">
                <div className="mb-8 flex justify-between">
                    <SearchBar />
                    <button onClick={handleCloseOrderDetails} className="text-gray-500 hover:text-red-500 bg-white w-6 h-6 p-1 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h2 className="text-xl font-bold mb-4">Order Details -</h2>
                <div className="p-4 bg-white rounded-lg">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <p className="font-bold text-lg">
                                {labels.order[0]} - <span className="font-semibold text-gray-600">{orderInfo.invoiceName}</span>
                            </p>
                            <p className="text-sm text-gray-500 mb-8">{orderInfo.date}</p>
                            <p><strong>{labels.order[1]}</strong></p>
                            <p><strong>{labels.order[2]}</strong></p>
                            <p><strong>{labels.order[3]}</strong></p>
                            <p><strong>{labels.order[4]}</strong></p>
                        </div>
                        <div>
                            <div className="h-8"></div>
                            <div className="h-8 mb-8"></div>
                            <p className='text-[#909090]'>{orderInfo.orderType}</p>
                            <p className='text-[#909090]'>{orderInfo.quantity}</p>
                            <p className='text-[#909090]'>{orderInfo.weight}</p>
                            <p className='text-[#909090]'>{orderInfo.cost}</p>
                        </div>
                        <div>
                            <p><strong>{labels.shipping[0]}</strong></p>
                            <div className="h-8 mb-8"></div>
                            <div className="border-l-2 border-gray-400 pl-10">
                                <p><strong>{labels.shipping[1]}</strong></p>
                                <p><strong>{labels.shipping[2]}</strong></p>
                                <p><strong>{labels.shipping[3]}</strong></p>
                                <p><strong>{labels.shipping[4]}</strong></p>
                            </div>
                        </div>
                        <div>
                            <p className="text-gray-600">{shippingInfo.address}</p>
                            <p className="text-sm text-gray-500 mb-8">{shippingInfo.deliveryDate}</p>
                            <p className='text-[#909090]'>{shippingInfo.customerName}</p>
                            <p className='text-[#909090]'>{shippingInfo.contact}</p>
                            <p className='text-[#909090]'>{shippingInfo.mailId}</p>
                            <p className={`font-bold ${shippingInfo.paymentStatusColor === 'green' ? 'text-green-500' : 'text-orange-500'}`}>
                            {shippingInfo.paymentStatus}</p>
                        </div>
                    </div>
                </div>
                <p><strong>{labels.history[0]}:</strong> 
                <span className={`font-bold ${orderHistoryInfo.orderStatusColor === 'green' ? 'text-green-500' : 'text-red-500'}`}>
                {orderHistoryInfo.orderStatus}
                </span></p>

               
            </div>
        </div>
    );
};

export default OrderDetails;
