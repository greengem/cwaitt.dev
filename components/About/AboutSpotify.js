import React, { useEffect, useRef } from 'react';

function AppAboutSpotify() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Check if the iframe has already loaded when component mounts
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.classList.add('loaded');
    }
    
    const handleLoad = () => {
      iframeRef.current.classList.add('loaded');
    };

    // Attach the load event
    iframeRef.current.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      // Check if iframeRef.current exists before removing event listener
      if (iframeRef.current) {
        iframeRef.current.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  return (
    <div className="spotify-embed-container">
        <iframe 
            ref={iframeRef}
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
