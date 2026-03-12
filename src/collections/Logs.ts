import { CollectionConfig } from 'payload/types';

export const Logs: CollectionConfig = {
  slug: 'logs',
  admin: {
    useAsTitle: 'event',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: false,
    },
    {
      name: 'event',
      type: 'text',
      required: true,
    },
    {
      name: 'details',
      type: 'text',
    },
    {
      name: 'createdAt',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
};