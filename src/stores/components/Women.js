import React from "react";
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";

const Woman = () => {
  const firstFiveImages = womanData.slice(0, 5);
  console.log(firstFiveImages)
  return (
    <>
      <div className="proTitle">
        <h2 style={{fontFamily:"Aharoni"}} >Woman Dressing</h2>
      </div>
      <div className="proSection">
        {
        firstFiveImages.map((item) =><div className="imgBox">
        <Link to='/women'>
        <img style={{ boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2)"}} className="proImage" src={item.image} alt="" />
        </Link>
      </div>
        )
        }
      </div>
    </>
  );
};

export default Woman