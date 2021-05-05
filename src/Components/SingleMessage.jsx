import React from "react";

const SingleMessage = (props) => {
  return (
    <div className='sMessage'>
      <p className="d-flex mt-4">
        <div className="user-img">
          <img
            src={props.profile}
            alt="user"
            className="img-circle"
            style={{ borderRadius: "50%", height: "49px" }}
          />
          <span className={props.class}></span>
        </div>
        <div className="mail-contnet ml-3">
          <h5
            style={{ marginBottom: "0px", fontSize: "17px", fontWeight: "400" }}
          >
            {props.name}
          </h5>{" "}
          <span
            className="mail-desc"
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              fontSize: "15px",
              fontWeight: "300",
              //   border : '1px solid black'
            }}
          >
            {props.message}
          </span>{" "}
          <p className="time" style={{ fontSize: "15px", fontWeight: "300" }}>
            {props.time}
          </p>
        </div>
      </p>
    </div>
  );
};

export default SingleMessage;
