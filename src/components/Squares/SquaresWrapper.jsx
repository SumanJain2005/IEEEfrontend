import React from 'react';
import Squares from './Squares';

const SquaresWrapper = () => {
  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <Squares 
        speed={0.5} 
        direction="diagonal" 
        borderColor="#fff" 
        hoverFillColor="#222" 
      />
    </div>
  );
};

export default SquaresWrapper;
