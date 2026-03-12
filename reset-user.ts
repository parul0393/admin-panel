import * as dotenv from 'dotenv'
dotenv.config()

import { getPayload } from 'payload'
import config from './src/payload.config'

async function reset() {
  const payload = await getPayload({ config })
  
  const existing = await payload.find({ collection: 'users' })
  
  for (const user of existing.docs) {
    await payload.delete({ collection: 'users', id: user.id })
  }

  console.log('✅ All users deleted! Go to localhost:3000/admin to create first user')
  process.exit(0)
}

reset()