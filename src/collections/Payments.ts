import { CollectionConfig } from 'payload/types';

export const Payments: CollectionConfig = {
  slug: 'payments',
  admin: {
    useAsTitle: 'transactionId',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'user_id',  // 👈 change from relationship to text
      type: 'text',
    },
    {
      name: 'amount',
      type: 'number',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Success', value: 'success' },
        { label: 'Failed', value: 'failed' },
      ],
    },
    {
      name: 'transactionId',
      type: 'text',
    },
    {
      name: 'plan_category',
      type: 'text',
    },
    {
      name: 'plan_name',
      type: 'text',
    },
    {
      name: 'plan_id',
      type: 'text',
    },
    {
      name: 'razorpay_order_id',
      type: 'text',
    },
    {
      name: 'razorpay_payment_id',
      type: 'text',
    },
    {
      name: 'razorpay_signature',
      type: 'text',
    },
  ],
};


// import { CollectionConfig } from 'payload/types';

// export const Payments: CollectionConfig = {
//   slug: 'payments',
//   admin: {
//     useAsTitle: 'transactionId',
//   },
//   access: {
//     read: () => true,
//     create: () => true,
//     update: () => true,
//     delete: () => true,
//   },
//   fields: [
//     {
//       name: 'user',
//       type: 'relationship',
//       relationTo: 'users',
//     },
//     {
//       name: 'amount',
//       type: 'number',
//     },
//     {
//       name: 'status',
//       type: 'select',
//       options: [
//         { label: 'Success', value: 'success' },
//         { label: 'Failed', value: 'failed' },
//       ],
//     },
//     {
//       name: 'transactionId',
//       type: 'text',
//     },
//   ],
// };





// export const Payments = {
//   slug: 'payments',
//   fields: [
//     {
//       name: 'user',
//       type: 'relationship',
//       relationTo: 'users',
//     },
//     {
//       name: 'amount',
//       type: 'number',
//     },
//     {
//       name: 'paymentMethod',
//       type: 'select',
//       options: [
//         { label: 'Credit Card', value: 'card' },
//         { label: 'UPI', value: 'upi' },
//       ],
//     },
//     {
//       name: 'status',
//       type: 'select',
//       options: [
//         { label: 'Success', value: 'success' },
//         { label: 'Failed', value: 'failed' },
//       ],
//     },
//     {
//       name: 'transactionId',
//       type: 'text',
//     },
//   ],
// };
