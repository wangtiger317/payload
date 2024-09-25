import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true, // Adjust these as needed
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users
