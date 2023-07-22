import React from 'react';
import '../../styles.scss'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__inner"></div>
      <p className="loading-spinner__text">Great things take time..........</p>
    </div>
  );
};

export default LoadingSpinner;
