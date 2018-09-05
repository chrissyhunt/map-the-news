import React from 'react';
import { Loader } from 'semantic-ui-react';

const LoadingSpinner = (props) => {
  return (
    <div className="loading-container">
      <Loader size='massive'>{props.message}</Loader>
    </div>
  )
}

export default LoadingSpinner;
