import React from 'react';
import { Loader } from 'semantic-ui-react';

const LoadingSpinner = (props) => {
  return (
    <div className="loading-container">
      <div className="loading-message">
        <Loader size='massive' active>{props.message}</Loader>
      </div>
    </div>
  )
}

export default LoadingSpinner;
