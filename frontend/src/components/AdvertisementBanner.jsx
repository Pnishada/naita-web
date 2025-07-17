import React from 'react';
import '../AdvertisementBanner.css';
import adImage from '../assets/AL-Web-Banner.jpg';

const AdvertisementBanner = () => {
  // Optional: Add click functionality
  const handleClick = () => {
    // window.location.href = "/your-target-url"; // Uncomment and add your URL
    // or use react-router: history.push("/your-target-url");
  };

  return (
    <div className="ad-container" onClick={handleClick}>
      <img 
        src={adImage} 
        alt="Advertisement" 
        className="ad-image-full"
      />
    </div>
  );
};

export default AdvertisementBanner;