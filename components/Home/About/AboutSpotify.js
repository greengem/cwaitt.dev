import React, { useEffect, useRef } from 'react';

export default function AppAboutSpotify() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const currentIframe = iframeRef.current;

    // Null check
    if (!currentIframe) return;

    // Check if the iframe has already loaded when component mounts
    if (currentIframe.contentWindow) {
      currentIframe.classList.add('loaded');
    }
    
    const handleLoad = () => {
      currentIframe.classList.add('loaded');
    };

    // Attach the load event
    currentIframe.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      currentIframe.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="spotify-embed-container">
      <div>
      <iframe 
        ref={iframeRef}  // Add this ref attribute
        className="spotify-embed"
        src="https://open.spotify.com/embed/playlist/1rSXPXetBMq0J2fkR7Wk9k?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    </div>
    </div>
  );
}
