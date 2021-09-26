import React from 'react';
import './Info.css'

const Info = (props) => {
  const {img,name,role,country,age,salary}=(props.data);
  // const allSinger = props.data.map(singer=>singer) 
 
  return (
    <div className='parent'>
      <div className="info">
        <div className='person'>
        <img src={img} className='img-fluid' alt="" />
          <p>{name} </p>
          <p>Role : {role} </p>
          <p>Country : {country}</p>
          <p>Age : {age}</p>
          <p>Salary : ${salary} </p>

          <button className="btn-singer">Vote Singer</button>
        </div>
      
        </div>
    </div >
  );
};

export default Info;


