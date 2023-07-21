let playlist = [
    {
      id: 1,
      title: "SNAP",
      artists: ["Rosa Linn"],
      songUrl:
        "https://open.spotify.com/track/76OGwb5RA9h4FxQPT33ekc?si=9ead07976d0a4478",
      playedCount: 1,
    },
    {
      id: 2,
      title: "Cheating On You",
      artists: ["Charlie Puth"],
      songUrl:
        "https://open.spotify.com/track/0ClPIeT6MSgfSgQ9ZrJbAq?si=998b6b9f528d4dc3",
      playedCount: 1,
    },
  ];
  
  const getPlaylist = () => {
    return playlist;
  };
  
  const sortPlaylistByPlayedCount = () => {
    return playlist.sort((a, b) => {
      if (a.playedCount > b.playedCount) {
        return -1;
      } else if (a.playedCount < b.playedCount) {
        return 1;
      }
      return 0;
    });
  };
  
  const findSongById = (songId) => {
    return playlist.find((song) => song.id === parseInt(songId));
  };
  
  const addPlayedCount = (songId) => {
    const song = findSongById(songId);
    song.playedCount++;
  };
  
  const addNewSong = (songTitle, songArtists, songUrl) => {
    playlist.push({
      id: playlist.length + 1,
      songTitle,
      songArtists,
      songUrl,
      playedCount: 0,
    });
    return playlist[playlist.length - 1];
  };
  
  module.exports = {
    getPlaylist,
    sortPlaylistByPlayedCount,
    findSongById,
    addPlayedCount,
    addNewSong,
  };
  