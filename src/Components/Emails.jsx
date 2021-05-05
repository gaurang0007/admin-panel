import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
const Emails = () => {
  return (
    <ul
      style={{
        listStyleType: "none",
        padding: "13px 17px",
        margin: "0px",
        width: "300px",
      }}
    >
      <li>
        <div className="drop-title" style={{ fontWeight: "500" }}>
          You have 4 new messages
        </div>
      </li>
      <hr />
      <li>
        <div
          className="message-center ps ps--theme_default imges"
          style={{
            position: "relative",
            height: "385px",
            overflowY: "scroll",
          }}
        >
          <div className="d-flex ">
            <div>
              <img
                src={img1}
                alt="user"
                className="img-circle"
                style={{
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  backgroundColor: "#DE4B59",
                  border: "none",
                  marginTop: "15px",
                }}
              />
              <span className="profile-status1"></span>
            </div>
            <div
              className="mail-contnet"
              style={{
                width: "100%",
                paddingLeft: "15px",
                verticalAlign: "middle",
              }}
            >
              <p style={{ margin: "0px 0px" }}>Pavan kumar</p>
              <span
                className="mail-desc"
                style={{ fontSize: "14px", color: "#212529" }}
              >
                Just see the my admin!
              </span>
              <p className="time" style={{ fontSize: "12px", color: "#212529" }}>
                9:30 AM
              </p>
            </div>
          </div>
          <hr className="mt-0" />

          <div className="d-flex">
            <div>
              <img
                src={img2}
                alt="user"
                className="img-circle"
                style={{
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  backgroundColor: "#DE4B59",
                  border: "none",
                  marginTop: "15px",
                }}
              />
              <span className="profile-status2"></span>
            </div>
            <div
              className="mail-contnet"
              style={{
                width: "75%",
                paddingLeft: "15px",
                verticalAlign: "middle",
              }}
            >
              <p style={{ margin: "0px 0px" }}>Sonu Nigam</p>
              <span
                className="mail-desc"
                style={{
                  fontSize: "14px",
                  color: "#212529",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                I've sung a song!
              </span>
              <p className="time" style={{ fontSize: "12px", color: "#212529" }}>
                9:10 AM
              </p>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="d-flex">
            <div>
              <img
                src={img3}
                alt="user"
                className="img-circle"
                style={{
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  backgroundColor: "#DE4B59",
                  border: "none",
                  marginTop: "15px",
                }}
              />
              <span className="profile-status3"></span>
            </div>
            <div
              className="mail-contnet"
              style={{
                width: "75%",
                paddingLeft: "15px",
                verticalAlign: "middle",
              }}
            >
              <p style={{ margin: "0px 0px" }}>Arijit Sinh</p>
              <span
                className="mail-desc"
                style={{
                  fontSize: "14px",
                  color: "#212529",
                }}
              >
                I am a singer!
              </span>
              <p className="time" style={{ fontSize: "12px", color: "#212529" }}>
                9:08 AM
              </p>
            </div>
          </div>
          <hr className="mt-0" />

          <div className="d-flex">
            <div>
              <img
                src={img1}
                alt="user"
                className="img-circle"
                style={{
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  backgroundColor: "#DE4B59",
                  border: "none",
                  marginTop: "15px",
                }}
              />
              <span className="profile-status3"></span>
            </div>
            <div
              className="mail-contnet"
              style={{
                width: "75%",
                paddingLeft: "15px",
                verticalAlign: "middle",
              }}
            >
              <p style={{ margin: "0px 0px" }}>Pavan Kumar</p>
              <span
                className="mail-desc"
                style={{ fontSize: "14px", color: "#212529" }}
              >
                Just see the my admin!
              </span>
              <p className="time" style={{ fontSize: "12px", color: "#212529" }}>
                9:02 AM
              </p>
            </div>
          </div>
          <hr className="mt-0" />
        </div>
      </li>
      <li>
        <div className=" text-center ">
          {" "}
          <strong style={{ fontWeight: "450" }}>See all e-Mails</strong>{" "}
          <i className="fa fa-angle-right"></i>{" "}
        </div>
      </li>
    </ul>
  );
};

export default Emails;
