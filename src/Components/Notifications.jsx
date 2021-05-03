import React from "react";
// animated  bounceInDown
const Notifications = () => {
  return (
      <div
        className=" dropdown-menu-right  dropdown-menu"
        // id="animated-example"
      >
        <ul
          className=" "
          style={{
            listStyleType: "none",
            padding: "13px",
            margin: "0px",
            width: "300px",
          }}
        >
          <li>
            <div class="drop-title" style={{ fontWeight: "500" }}>
              Notifications
            </div>
          </li>
          <hr />
          <li>
            <div
              class="message-center ps ps--theme_default"
              style={{
                position: "relative",
                height: "385px",
                overflowY: "scroll",
              }}
            >
              <div className="d-flex">
                <div
                  class="btn btn-danger btn-circle "
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#DE4B59",
                    border: "none",
                    marginTop: "15px",
                  }}
                >
                  <i class="fa fa-link"></i>
                </div>
                <div
                  class="mail-contnet"
                  style={{
                    width: "100%",
                    paddingLeft: "15px",
                    verticalAlign: "middle",
                  }}
                >
                  <p style={{ margin: "0px 0px" }}>Luanch Admin</p>
                  <span
                    class="mail-desc"
                    style={{ fontSize: "14px", color: "#212529" }}
                  >
                    Just see the my new admin!
                  </span>
                  <p
                    class="time"
                    style={{ fontSize: "12px", color: "#212529" }}
                  >
                    9:30 AM
                  </p>
                </div>
              </div>
              <hr className="mt-0" />

              <div className="d-flex">
                <div
                  class="btn btn-danger btn-circle "
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#01C292",
                    border: "none",
                    marginTop: "15px",
                  }}
                >
                  <i class="fa fa-calendar"></i>
                </div>
                <div
                  class="mail-contnet"
                  style={{
                    width: "75%",
                    paddingLeft: "15px",
                    verticalAlign: "middle",
                  }}
                >
                  <p style={{ margin: "0px 0px" }}>Event today</p>
                  <span
                    class="mail-desc"
                    style={{
                      fontSize: "14px",
                      color: "#212529",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Just a remainder you have event
                  </span>
                  <p
                    class="time"
                    style={{ fontSize: "12px", color: "#212529" }}
                  >
                    9:10 AM
                  </p>
                </div>
              </div>
              <hr className="mt-0" />
              <div className="d-flex">
                <div
                  class="btn btn-danger btn-circle "
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#04A9F3",
                    border: "none",
                    marginTop: "15px",
                  }}
                >
                  <i class="fa fa-cog"></i>
                </div>
                <div
                  class="mail-contnet"
                  style={{
                    width: "75%",
                    paddingLeft: "15px",
                    verticalAlign: "middle",
                  }}
                >
                  <p style={{ margin: "0px 0px" }}>Settings</p>
                  <span
                    class="mail-desc"
                    style={{
                      fontSize: "14px",
                      color: "#212529",
                    }}
                  >
                    You can custamize tamplate
                  </span>
                  <p
                    class="time"
                    style={{ fontSize: "12px", color: "#212529" }}
                  >
                    9:08 AM
                  </p>
                </div>
              </div>
              <hr className="mt-0" />

              <div className="d-flex">
                <div
                  class="btn btn-danger btn-circle "
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#FB9679",
                    border: "none",
                    marginTop: "15px",
                  }}
                >
                  <i class="fa fa-user"></i>{" "}
                </div>
                <div
                  class="mail-contnet"
                  style={{
                    width: "75%",
                    paddingLeft: "15px",
                    verticalAlign: "middle",
                  }}
                >
                  <p style={{ margin: "0px 0px" }}>Pavan Kumar</p>
                  <span
                    class="mail-desc"
                    style={{ fontSize: "14px", color: "#212529" }}
                  >
                    Just see the my admin!
                  </span>
                  <p
                    class="time"
                    style={{ fontSize: "12px", color: "#212529" }}
                  >
                    9:02 AM
                  </p>
                </div>
              </div>
              <hr className="mt-0" />
            </div>
          </li>
          <li>
            <div class=" text-center ">
              {" "}
              <strong style={{ fontWeight: "450" }}>
                Check all notifications
              </strong>{" "}
              <i class="fa fa-angle-right"></i>{" "}
            </div>
          </li>
        </ul>
      </div>
  );
};

export default Notifications;
