import React from 'react'
import WbCloudyOutlinedIcon from "@material-ui/icons/WbCloudyOutlined";


const Temperature = () => {
    return (
      <div className="col-md-12">
        <div className="card wether">
          <div className="card-body">
            <div className="row weather">
              <div className="col-6 m-t-40">
                <h1>&nbsp;</h1>
                <br />
                <div className="display-4">
                  <b>
                    73
                    <sup>°F</sup>
                  </b>
                </div>
                <p
                  className="text-white"
                  style={{
                    fontSize: "14px",
                    marginBottom: "0px",
                    marginTop: "5px",
                  }}
                >
                  AHMEDABAD, INDIA
                </p>
              </div>
              <div className="col-6 text-right">
                <div>
                  <h1
                    className="m-b-"
                    style={{
                      transform: "scale(2)",
                      margin: "-20px 35% 17px 0px",
                    }}
                  >
                    <WbCloudyOutlinedIcon />
                  </h1>
                </div>
                <p
                  className="text-white"
                  style={{ fontSize: "14px", marginBottom: "0px" }}
                >
                  SUNNEY DAY
                </p>
                <p style={{ opacity: "0.5", fontSize: "14px" }}>April 14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Temperature
