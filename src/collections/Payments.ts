import type { CollectionConfig } from 'payload'

export const Payments: CollectionConfig = {
  slug: 'payments',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'amount',
      type: 'number',
    },
    {
      name: 'paymentMethod',
      type: 'select',
      options: [
        { label: 'Credit Card', value: 'card' },
        { label: 'UPI', value: 'upi' },
      ],
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
  ],
};
