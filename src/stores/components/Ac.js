import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";
import FooterComponent from "./Footer";

const AC = () => {
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
      <div className="proTitle">
        <h2 style={{fontFamily:"Aharoni"}} >Air Condition</h2>
      </div>
      <div className="proSection">
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              <Link to='/ac'>
              <img style={{ boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2)"}} className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
        {/* <FooterComponent/> */}
      </div>
     
    </>
  );
};

export default AC;