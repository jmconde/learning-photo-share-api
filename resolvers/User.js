module.exports = {
  id: parent => parent.id || parent._id,
  postedPhotos: parent => photos.filter(p => p.githubUser === parent.githubLogin),
  inPhotos: parent => tags.filter(t => t.userID === parent.githubLogin)
    .map(t => t.photoID)
    .map(photoID => photos.find(p => p.id === photoID))
}