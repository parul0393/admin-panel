import { CollectionConfig } from 'payload/types'

const CreditTransactions: CollectionConfig = {
  slug: 'credit-transactions',
  admin: {
    useAsTitle: 'user_id',
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
    },
    {
      name: 'payment_id',
      type: 'text',
    },
  ],
}

export default CreditTransactions



// import { CollectionConfig } from 'payload/types'

// const CreditTransactions: CollectionConfig = {
//   slug: 'credit-transactions',
//   admin: {
//     useAsTitle: 'user_id',
//   },
//   access: {
//     read: () => true,
//     create: () => true,
//     update: () => true,
//     delete: () => true,
//   },
//   fields: [
//     {
//       name: 'user_id',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'credits_added',
//       type: 'number',
//       required: true,
//     },
//     {
//       name: 'price',
//       type: 'number',
//       required: true,
//     },
//     {
//       name: 'date',
//       type: 'date',
//       required: true,
//     }
//   ],
// }

// export default CreditTransactions