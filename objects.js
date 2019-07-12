var playlist = {"Freddie Gibbs": "Giannis"}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.update({}, playlist, {[artistName]: [songTitle]})
}