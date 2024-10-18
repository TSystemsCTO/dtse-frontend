import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OrderInfo {
  invoiceName: string;
  date: string;
  orderType: string;
  quantity: number;
  weight: string;
  cost: string;
  amount: string;
}

export interface ShippingInfo {
  address: string;
  deliveryDate: string;
  customerName: string;
  contact: string;
  mailId: string;
  paymentStatus: string;
  paymentStatusColor: string;
}
export interface OrderHistoryInfo {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  step6: string;
  orderStatus: string;
  orderStatusColor: string;
}

export interface Order {
  orderInfo: OrderInfo;
  shippingInfo: ShippingInfo;
  orderHistoryInfo: OrderHistoryInfo; 
  labels: {
    order: string[];
    shipping: string[];
    history: string[];
  };
}

interface OrderState {
  orders: Order[];
  orderDetailsVisible: boolean;
  selectedOrder: Order | null;
}

const initialState: OrderState = {
  orders: [],
  selectedOrder: null,
  orderDetailsVisible: false,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
    showOrderDetailsScreen: (state, action: PayloadAction<boolean>) => {
      state.orderDetailsVisible = action.payload;
    },
    setSelectedOrder: (state, action: PayloadAction<Order>) => {
      state.selectedOrder = action.payload;
    },
  },
});

export const { addOrder, showOrderDetailsScreen, setSelectedOrder } =
  orderSlice.actions;
export default orderSlice.reducer;
