import { CollectionConfig } from 'payload/types';

const Subscriptions: CollectionConfig = {
  slug: 'subscriptions',
  admin: {
    useAsTitle: 'planName',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'user_id',
      type: 'text',
    },

    {
      name: 'planName',
      type: 'select',
      options: [
        { label: 'Web App - Monthly', value: 'web_monthly' },
        { label: 'API - 100 Credits', value: 'api_100' },
        { label: 'API - 500 Credits', value: 'api_500' },
        { label: 'API - 1000 Credits', value: 'api_1000' },
        { label: 'API 100 Plan (Legacy)', value: 'API 100 plan' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Expired', value: 'expired' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
    },
    {
      name: 'expiryDate',
      type: 'date',
    },
    {
      name: 'creditsRemaining',
      type: 'number',
    },
    {
      name: 'paymentId',
      type: 'text',
    },
    {
      name: 'plan_category',
      type: 'text',
    },
    {
      name: 'plan_id',
      type: 'text',
    },
    {
      name: 'started_at',
      type: 'date',
    },
    {
      name: 'expires_at',
      type: 'date',
    },
    {
      name: 'credits_total',
      type: 'number',
    },
    {
      name: 'payment_id',
      type: 'text',
    },
  ],
};

export default Subscriptions;


// import { CollectionConfig } from 'payload/types';

// const Subscriptions: CollectionConfig = {
//   slug: 'subscriptions',
//   admin: {
//     useAsTitle: 'planName',
//   },
//   fields: [
//     {
//       name: 'user',
//       type: 'relationship',
//       relationTo: 'users',
//       required: true,
//     },
//     {
//       name: 'planName',
//       type: 'select',
//       options: [
//         { label: 'Web App - Monthly', value: 'web_monthly' },
//         { label: 'API - 100 Credits', value: 'api_100' },
//         { label: 'API - 500 Credits', value: 'api_500' },
//         { label: 'API - 1000 Credits', value: 'api_1000' },
//       ],
//     },
//     {
//       name: 'status',
//       type: 'select',
//       options: [
//         { label: 'Active', value: 'active' },
//         { label: 'Expired', value: 'expired' },
//         { label: 'Cancelled', value: 'cancelled' },
//       ],
//     },
//     {
//       name: 'startDate',
//       type: 'date',
//     },
//     {
//       name: 'expiryDate',
//       type: 'date',
//     },
//     {
//       name: 'creditsRemaining',
//       type: 'number',
//     },
//     {
//       name: 'paymentId',
//       type: 'text',
//     },
//   ],
// };

// export default Subscriptions;