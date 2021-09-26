import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import './Singer.css'
const Singer = () => {
  const [singer, setSinger] = useState([])
  useEffect(() => {
      fetch('./generated.JSON')
      .then(res => res.json())
      .then(data=>setSinger(data))
  },[])
  return (
    <div className="singer-container">
      <div className="left-part">
        {
          singer.map(element => <Info data={element}></Info> )
          
        }
        
      </div>
      <div className="right-part">
        <h2>this is right</h2>
      </div>
    </div>
  );
};

export default Singer;