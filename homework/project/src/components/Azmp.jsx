import React from 'react';
import { Image } from 'react-bootstrap';

function Azmp() {
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '50%' }}>
      <Image 
        src="https://i.etsystatic.com/42876221/r/il/640f70/5566970772/il_570xN.5566970772_dg17.jpg" 
        fluid 
        style={{ width: '100%' }} 
      />
      <h2 
        style={{
          position: 'absolute',
          bottom: '10px',  
          left: '10px',   
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          padding: '5px',
          margin: 0,
        }}
      >
        AzMP102
      </h2>
    </div>
  );
}

export default Azmp;
