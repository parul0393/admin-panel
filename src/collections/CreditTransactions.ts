import { CollectionConfig } from 'payload'

const CreditTransactions: CollectionConfig = {
  slug: 'credit-transactions',
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
      name: 'credits_added',
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    }
  ],
}

export default CreditTransactions