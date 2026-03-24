import type { CollectionConfig } from 'payload'

export const Waitlist: CollectionConfig = {
  slug: 'waitlist',
  fields: [
    { name: 'email', type: 'email' },
    { name: 'signupDate', type: 'date' },
  ],
};