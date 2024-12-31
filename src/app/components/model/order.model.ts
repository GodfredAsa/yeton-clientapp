export interface OrderModel {
  orderId: string;
  price: number;
  quantity: number;
  totalCost: number;
  item: string;
  user: string;
  profit: number;
  orderStatus: string;
  paymentStatus: string;
  orderDate: string;
  updatedDate: string;
  orderCode: string;
}
