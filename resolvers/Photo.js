module.exports = {
  id: parent => parent.id || parent._id,
  url: parent => `/img/photos/${parent.id}.jpg`,
  postedBy: (parent, args, { db }) => db.collection('users').findOne({githubLogin: parent.userID})
  /* ,
  taggedUsers: parent => tags.filter(t => t.photoID === parent.id)
    .map(t => t.userID)
    .map(userID => users.find(u => u.githubLogin === userID)),
  created: () => new Date() */
}