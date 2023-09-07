import React, { useEffect, useRef } from 'react';

function AppAboutSpotify() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const currentIframe = iframeRef.current;

    // Check if the iframe has already loaded when component mounts
    if (currentIframe && currentIframe.contentWindow) {
      currentIframe.classList.add('loaded');
    }
    
    const handleLoad = () => {
      currentIframe.classList.add('loaded');
    };

    // Attach the load event
    currentIframe.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      // Check if currentIframe exists before removing event listener
      if (currentIframe) {
        currentIframe.removeEventListener('load', handleLoad);
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
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>
    </div>
  );
}

export default AppAboutSpotify;
