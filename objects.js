var playlist = {};
playlist.song = 'Katyusha';

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

playlist.Kanye = "Gold Digger";

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}