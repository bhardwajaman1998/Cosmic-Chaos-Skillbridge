import React from 'react';
import '../../styles.scss'

const LoadingSpinner = ({message='Great things take time..........'}) => {
  return (
    <div className="loading-spinner">
      <div className="loading-spinner__inner"></div>
      <p className="loading-spinner__text">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
