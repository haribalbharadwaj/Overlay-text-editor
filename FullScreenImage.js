import React, { useEffect, useState } from 'react';

function FullScreenImage({ imageUrl }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Request full screen
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full screen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      setIsFullScreen(!!document.fullscreenElement);
    });
    document.addEventListener('mozfullscreenchange', () => {
      setIsFullScreen(!!document.mozFullScreenElement);
    });
    document.addEventListener('webkitfullscreenchange', () => {
      setIsFullScreen(!!document.webkitFullscreenElement);
    });
    document.addEventListener('msfullscreenchange', () => {
      setIsFullScreen(!!document.msFullscreenElement);
    });
    return () => {
      document.removeEventListener('fullscreenchange', () => {});
      document.removeEventListener('mozfullscreenchange', () => {});
      document.removeEventListener('webkitfullscreenchange', () => {});
      document.removeEventListener('msfullscreenchange', () => {});
    };
  }, []);

  return (
    <div className={`full-screen-image ${isFullScreen ? 'full-screen' : ''}`}>
      <img src={imageUrl} alt="Full Screen" onClick={toggleFullScreen} />
    </div>
  );
}

export default FullScreenImage;
