import { CollectionConfig } from 'payload/types';

export const Plans: CollectionConfig = {
  slug: 'plans',

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
      name: 'planName',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
    },

    // ✅ NEW FIELD
    {
      name: 'planCategory',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Web Plan',
          value: 'web',
        },
        {
          label: 'API Credit Plan',
          value: 'api',
        },
      ],
    },

    {
      name: 'usageLimit',
      type: 'number',
    },
    {
      name: 'durationDays',
      type: 'number',
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
  ],
};