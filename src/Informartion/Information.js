import React from "react";
import "./Information.css";
import arrow from "../Assets/arrow.png";

const Information = () => {
  return (
    <div>
      <span className="heading">HAVE A READ</span>
      <div className="b1">
        <span>The right quality</span>
        <div>
          <span>
            Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
            nisl adipiscing posuere et a. Tincidunt consectetur sapien
            pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
            massa felis, et. Cursus tortor ut fames sapien a vulputate amet
            malesuada.
          </span>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              READ MORE
              <img src={arrow} alt="arrow"/>
            </span>
          </div>
        </div>
      </div>

      <div className="b2">
        <span>The right time</span>
        <div>
          <span>
            Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
            nisl adipiscing posuere et a. Tincidunt consectetur sapien
            pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
            massa felis, et. Cursus tortor ut fames sapien a vulputate amet
            malesuada.
          </span>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              READ MORE
              <img src={arrow} alt="arrow"/>
            </span>
          </div>
        </div>
      </div>

      <div className="b3">
        <span>The basis of a balanced diet</span>
        <div>
          <span>
            Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
            nisl adipiscing posuere et a. Tincidunt consectetur sapien
            pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
            massa felis, et. Cursus tortor ut fames sapien a vulputate amet
            malesuada.
          </span>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>
              READ MORE
              <img src={arrow} alt="arrow"/>
            </span>
          </div>
        </div>
      </div>

      <div>
        <span className="topics">topics you can’t miss</span>

        <div className="topic1">
          <span>topics you can’t miss</span>
          <div>
            <span>
              Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
              nisl adipiscing posuere et a. Tincidunt consectetur sapien
              pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
              massa felis, et. Cursus tortor ut fames sapien a vulputate amet
              malesuada.
            </span>
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>
                READ MORE
                <img src={arrow} alt="arrow"/>
              </span>
            </div>
          </div>
        </div>
        <div className="topic2">
          <span>how to clean/cut your seafood</span>
          <div>
            <span>
              Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus
              nisl adipiscing posuere et a. Tincidunt consectetur sapien
              pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit
              massa felis, et. Cursus tortor ut fames sapien a vulputate amet
              malesuada.
            </span>
          </div>

          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>
                READ MORE
                <img src={arrow} alt="arrow"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
