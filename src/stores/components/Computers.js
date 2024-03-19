import React from "react";

import { computerData } from "../data/computers";
import { Link } from "react-router-dom";

const  Computers= () => {
  const firstFiveImages = computerData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
        <h2 style={{fontFamily:"Aharoni"}} >Computers</h2>
      </div>
      <div className="proSection">
      {
        firstFiveImages.map((item) => {
        return (
          <div className="imgBox">
            <Link to='/computers'>
            <img style={{ boxShadow:"5px 5px 10px 5px rgb(0 0 0 / 0.2)"}} className="proImage" src={item.image} alt="" />
            </Link>
            
     
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Computers;