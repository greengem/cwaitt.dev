import React from 'react';

const SpotifyPlaylist = () => {
  return (
    <div className="spotify-embed-container">
      <iframe 
        title='my-spotify-player'
        className="spotify-embed"
        src="https://open.spotify.com/embed/playlist/2Al9G2jrWkwDlRFMZaw1GX?utm_source=generator&theme=0" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
