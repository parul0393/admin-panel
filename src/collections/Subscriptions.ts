import { CollectionConfig } from 'payload';

const Subscriptions: CollectionConfig = {
  slug: 'subscriptions',
  admin: {
    useAsTitle: 'planName',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'planName',
      type: 'select',
      options: [
        { label: 'Web App - Monthly', value: 'web_monthly' },
        { label: 'API - 100 Credits', value: 'api_100' },
        { label: 'API - 500 Credits', value: 'api_500' },
        { label: 'API - 1000 Credits', value: 'api_1000' },
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
  ],
};

export default Subscriptions;