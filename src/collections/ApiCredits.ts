import type { CollectionConfig } from 'payload'

const ApiCredits: CollectionConfig = {
  slug: 'api-credits',
  admin: {
    useAsTitle: 'user_id',
  },
  fields: [
    {
      name: 'user_id',
      type: 'text',
      required: true,
    },
    {
      name: 'credits_remaining',
      type: 'number',
      required: true,
      defaultValue: 0,
    }
  ],
}

export default ApiCredits