import React from "react";

const Card = (props) => { 
  return (
    <div className="card" style={{ borderRadius: "0px", border: 'none' }}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex no-block align-items-center">
              <div>
                <p style={{ transform: "scale(1.3)", margin: "10px" }}>
                  {props.icon}
                </p>
                <p className="text-muted">{props.title}</p>
              </div>
              <div className="ml-auto" style={{ color: props.fontColor }}>
                <h2 className="counter">{props.count}</h2>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="progress" style={{ height: "7px" }}>
              <div
                className="progress-bar"
                style={{
                  width: "85%",
                  height: "7px",
                  backgroundColor: props.fontColor,
                }}
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
