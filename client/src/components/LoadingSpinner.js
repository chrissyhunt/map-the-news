import React from 'react';

const LoadingSpinner = (props) => {
  return (
    <div className="loading-container">
      <div className="loading-message">
        <div class="loader">{props.message}</div>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default LoadingSpinner;
