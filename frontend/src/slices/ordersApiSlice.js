import { apiSlice } from './apiSlice';
import { ORDERS_URL, PAYPAL_URL } from '../constants';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: order,
      }),
    }),
    getOrderDetails: builder.query({
      queryFn: (id) => {
        return { 
          data: {
            _id: id,
            createdAt: new Date().toISOString(),
            totalPrice: 129.99,
            isPaid: false,
            isDelivered: false,
            user: { name: 'Mocked User', email: 'mocked@example.com' },
            orderItems: [
              { name: 'Mocked Product', image: '/images/phone.jpg', price: 129.99, qty: 1 }
            ],
            shippingAddress: { address: '123 Fake St', city: 'Anytown', postalCode: '12345', country: 'USA' },
            paymentMethod: 'PayPal',
            itemsPrice: 129.99,
            shippingPrice: 0,
            taxPrice: 10,
          } 
        };
      },
      keepUnusedDataFor: 5,
    }),
    payOrder: builder.mutation({
      queryFn: ({ orderId, details }) => {
        return { data: { message: 'Order paid successfully' } };
      },
    }),
    getPaypalClientId: builder.query({
      queryFn: () => {
        return { data: { clientId: 'mock-client-id' } };
      },
      keepUnusedDataFor: 5,
    }),
    getMyOrders: builder.query({
      queryFn: () => {
        const dummyOrder = {
          _id: 'ORDER12345',
          createdAt: new Date().toISOString(),
          totalPrice: 129.99,
          isPaid: true,
          paidAt: new Date().toISOString(),
          isDelivered: false,
        };
        return { data: [dummyOrder] };
      },
      keepUnusedDataFor: 5,
    }),
    getOrders: builder.query({
      queryFn: () => {
        return { data: [
          {
            _id: 'ORDER12345',
            createdAt: new Date().toISOString(),
            totalPrice: 129.99,
            isPaid: true,
            paidAt: new Date().toISOString(),
            isDelivered: false,
            user: { name: 'Admin User' }
          }
        ] };
      },
      keepUnusedDataFor: 5,
    }),
    deliverOrder: builder.mutation({
      queryFn: (orderId) => {
        return { data: { message: 'Order delivered successfully' } };
      },
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
} = orderApiSlice;
