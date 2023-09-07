import React from 'react';

/**
 * AppAboutSpotify component.
 * 
 * This component embeds a Spotify player to showcase a playlist.
 * It uses an iframe to load the player and the playlist is specified
 * by the src attribute of the iframe.
 * 
 * The Spotify embed is wrapped in a div with the class "spotify-embed-container"
 * for potential styling purposes.
 */
function AppAboutSpotify() {
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
}

export default AppAboutSpotify;
