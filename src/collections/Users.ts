// import { CollectionConfig } from 'payload/types';

// export const Users: CollectionConfig = {
//   slug: 'users',
//   auth: true,
//   fields: [
//     {
//       name: 'fullName',
//       type: 'text',
//     },
//     {
//       name: 'subscriptionPlan',
//       type: 'relationship',
//       relationTo: 'pricing',
//     },
//     {
//       name: 'usageCount',
//       type: 'number',
//       defaultValue: 0,
//     },
//     {
//       name: 'subscriptionStatus',
//       type: 'select',
//       options: [
//         { label: 'Active', value: 'active' },
//         { label: 'Expired', value: 'expired' },
//         { label: 'Cancelled', value: 'cancelled' },
//       ],
//     },
//   ],
// };

import { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
  useAsTitle: 'email',
  },
  auth: true,

  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    
    {
      name: 'fullName',
      type: 'text',
    },

    {
      name: 'subscriptionPlan',
      type: 'relationship',
      relationTo: 'plans',
    },

    {
      name: 'usageCount',
      type: 'number',
      defaultValue: 0,
    },

    {
      name: 'subscriptionStatus',
      type: 'select',
      defaultValue: 'trial',
      options: [
        { label: 'Trial', value: 'trial' },
        { label: 'Active', value: 'active' },
        { label: 'Expired', value: 'expired' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },

    {
      name: 'billingCycle',
      type: 'select',
      options: [
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
      ],
    },

    {
      name: 'subscriptionExpiry',
      type: 'date',
    },
  ],
};