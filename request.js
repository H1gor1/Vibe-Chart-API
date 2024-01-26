const axios = require('axios');

async function getMusicas() {
  const response = await axios.get('https://apis.naver.com/vibeWeb/musicapiweb/vibe/v1/chart/track/total.json');

  return response.data.response.result.chart.items.tracks.map(track => {
    return {
      rank: track.rank.currentRank,
      title: track.trackTitle,
      artist: track.artists[0].artistName,
      album: track.album.albumTitle,
      imageUrl: track.album.imageUrl
    };
  });
}

module.exports = { getMusicas };