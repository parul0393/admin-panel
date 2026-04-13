import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Plans } from './collections/Plans'
import { Payments } from './collections/Payments'
import { Waitlist } from './collections/Waitlist'
import { Logs } from './collections/Logs'
import Subscriptions from './collections/Subscriptions'
import ApiKeys from './collections/ApiKeys'
import ApiCredits from './collections/ApiCredits'
import CreditTransactions from './collections/CreditTransactions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  cors: ["https://new-code-png-to-svg-final.vercel.app"],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Plans,
    Payments,
    Waitlist,
    Logs,
    ApiKeys,
    ApiCredits,
    CreditTransactions,
  ],
  // globals: [SMTP],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: false,
  }),
  sharp,
  plugins: [],
})
