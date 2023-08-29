import React from 'react';

const SpotifyPlaylist = () => {
  return (
    <div className="spotify-embed-container">
      <iframe 
        className="spotify-embed"
        src="https://open.spotify.com/embed/playlist/2Al9G2jrWkwDlRFMZaw1GX?utm_source=generator" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
