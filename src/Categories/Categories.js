import React, { useEffect, useState } from "react";
import "./Categories.css";
import play from "../Assets/play.png";

const Categories = () => {
  const [AllData, setAllData] = useState([]);
  let val = 120;

  useEffect(() => {
    async function fetchData() {
      let res = await window.fetch("https://www.fishwatch.gov/api/species");
      let json = await res.json();
      setAllData(json);
    }
    fetchData();
  }, []);

  console.log(AllData);

  // console.log(AllData[0]['Species Illustration Photo'].src);
  // console.log(AllData[0]['Species Name']);
  return (
    <div style={{ width: "100%" }}>
      <span className="text1">How it works</span>
      <span className="text2">
        Sea Basket delivers fresh sourced seafood in a few easy clicks
      </span>
      <span className="text3">CATEGORIES</span>

      <div>
        {AllData  &&
          AllData.map((ele,index) => {
            if(index >= 3){
              return null;
            } 

            return (
              <div className="box" key={index} style={{left:`${(index * 3.5) * val + 135}px`}}> 
                <img src={ele["Species Illustration Photo"].src} alt="fish species"/>
                <span>{ele["Species Name"]}</span>
              </div>
            );
          })}
      </div>

      <div>
        <span className="glance">A GLANCE AT OUR PRODUCT</span>
        <div className="video">
          <div>
            <span>
              <img src={play} alt="play button"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
