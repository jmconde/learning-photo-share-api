module.exports = {
  me: (parent, args, { currentUser }) => currentUser,
  totalPhotos: (parent, args, { db }) => db.collection('photos').estimatedDocumentCount(),
  totalUsers: (parent, args, { db }) => db.collection('users').estimatedDocumentCount(),
  allPhotos: (parent, args, { db }) => db.collection('photos').find().toArray(),
  allUsers: (parent, args, { db }) => db.collection('users').find().toArray()
}