import { CollectionConfig } from 'payload'

const ApiKeys: CollectionConfig = {
  slug: 'api-keys',

  admin: {
    useAsTitle: 'api_key',
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: 'api_key',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'user_email',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'created_at',
      type: 'date',
      required: true,
    },
  ],
}

export default ApiKeys