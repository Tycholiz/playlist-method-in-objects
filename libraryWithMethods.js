var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"},
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"}
          },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
          },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"],
          }
  },
  printPlaylists: function() {
    for (var playlist in this.playlists) {
      var playListID = this.playlists[playlist];
      console.log(`${playlist}: ${playListID.name} - ${playListID.tracks.length} tracks`);
    }
  },
  printTracks: function() {
    for (var track in this.tracks) {
      var trackID = this.tracks[track];
      console.log(`${track}: ${trackID.name} by ${trackID.artist} (${trackID.album})`)
    }
  },
  printPlaylist: function(playlistId) {
    var playlist = this.playlists[playlistId];
    console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (var track in playlist.tracks) {
      var trackNum = playlist.tracks[track];
      var tracksOfPlaylist = this.tracks[trackNum];
      console.log(`${trackNum}: ${tracksOfPlaylist.name} by ${tracksOfPlaylist.artist} (${tracksOfPlaylist.album})`);
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    var tracksInPlaylist = this.playlists[playlistId].tracks;
    tracksInPlaylist.push(trackId);
    console.log(tracksInPlaylist);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    var newTrackID = this.uid();
    this.tracks[newTrackID] = {id: newTrackID, name: name, artist: artist, album, album};
  },
  addPlaylist: function(name) {
    var newPlaylistID = this.uid();
    this.playlists[newPlaylistID] = {id: newPlaylistID, name: name, tracks: []};
    return this.playlists;
  }
}


// FUNCTIONS TO IMPLEMENT:



// STRETCH:
// given a query string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


var printSearchResults = function(query) {

}

// library.printPlaylists();
// library.printTracks();
// library.printPlaylist("p01");
// library.addTrackToPlaylist("t03", "p01");
// console.log(library.uid());
// library.addTrack("Chimera", "Kyle Tycholiz", "Armistice");
// library.addPlaylist("Kyle");