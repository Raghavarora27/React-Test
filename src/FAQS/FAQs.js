import React from "react";
import "./FAQs.css";
import arrow from "../Assets/arrow.png";

const FAQs = () => {
  return (
    <div>
      <span className="Heading">FAQs</span>
      <div className="box1">
        <span>
          Velit venenatis pretium mattis consectetur massa pretium mattis ?
        </span>
        <img src={arrow} alt="arrow"/>
      </div>
      <div className="box2">
        <span>
          Velit venenatis pretium mattis consectetur massa pretium mattis ?
        </span>
        <img src={arrow} alt="arrow"/>
        <div className="info">
          Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
          nisl adipiscing posuere et a. Tincidunt consectetur sapien
          pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
          massa felis, et. Cursus tortor ut fames sapien a vulputate amet
          malesuada.
        </div>
      </div>
      <div className="box3">
        <span>
          Velit venenatis pretium mattis consectetur massa pretium mattis ?
        </span>
        <img src={arrow} alt="arrow"/>
      </div>
    </div>
  );
};

export default FAQs;
