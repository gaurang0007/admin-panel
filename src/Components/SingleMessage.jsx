import React from "react";

const SingleMessage = (props) => {
  return (
    <div className='sMessage'>
      <p className="d-flex mt-4">
        <div class="user-img">
          <img
            src={props.profile}
            alt="user"
            class="img-circle"
            style={{ borderRadius: "50%", height: "49px" }}
          />
          <span class={props.class}></span>
        </div>
        <div class="mail-contnet ml-3">
          <h5
            style={{ marginBottom: "0px", fontSize: "17px", fontWeight: "400" }}
          >
            {props.name}
          </h5>{" "}
          <span
            class="mail-desc"
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
          <p class="time" style={{ fontSize: "15px", fontWeight: "300" }}>
            {props.time}
          </p>
        </div>
      </p>
    </div>
  );
};

export default SingleMessage;
