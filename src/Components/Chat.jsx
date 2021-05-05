import React from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
const Chat = () => {
    return (
      <div className="col-md-4">
        <div className="card" style={{ borderRadius: "0px", border: "none" }}>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              CHAT
            </h5>
            <div
              className="chat-box ps ps--theme_default ps--active-y mt-4"
              id="chat"
              style={{
                height: "327px",
                position: "relative",
                overflowY: "scroll",
              }}
            >
              <ul
                className="chat-list"
                style={{ listStyleType: "none", paddingLeft: "0px" }}
              >
                <li className="d-flex">
                  <div className="chat-img">
                    <img
                      src={img1}
                      alt="user"
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </div>
                  <div className="chat-content ml-3">
                    <h5
                      style={{
                        color: "#6c757d",
                        fontWeight: "350",
                        fontSize: "17px",
                      }}
                    >
                      James Anderson
                    </h5>
                    <div
                      style={{
                        color: "#343a40",
                        background: "#f8f9fa",
                        padding: "10px",
                        borderRadius: "0.25rem",
                        fontWeight: "350",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing &amp;
                      type setting industry.
                    </div>
                    <div
                      className="chat-time"
                      style={{
                        fontSize: "11px",
                        color: "#6c757d",
                        margin: "5px 0 15px 5px",
                      }}
                    >
                      10:56 am
                    </div>
                  </div>
                </li>
                <li className="d-flex mt-4">
                  <div className="chat-img">
                    <img
                      src={img2}
                      alt="user"
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </div>
                  <div className="chat-content ml-3">
                    <h5
                      style={{
                        color: "#6c757d",
                        fontWeight: "350",
                        fontSize: "17px",
                      }}
                    >
                      Bianca Doe
                    </h5>
                    <div
                      className="box bg-light-info"
                      style={{
                        color: "#343a40",
                        background: "#f8f9fa",
                        padding: "10px",
                        borderRadius: "0.25rem",
                        fontWeight: "350",
                      }}
                    >
                      It’s Great opportunity to work.
                    </div>
                    <div
                      className="chat-time"
                      style={{
                        fontSize: "11px",
                        color: "#6c757d",
                        margin: "5px 0 15px 5px",
                      }}
                    >
                      10:57 am
                    </div>
                  </div>
                </li>
                <li className="odd mt-4">
                  <div
                    className="chat-content"
                    style={{ marginLeft: "auto", width: "230px" }}
                  >
                    <div
                      className="box bg-light-inverse"
                      style={{
                        padding: "10px",
                        borderRadius: "0.25rem",
                        color: "#fff",
                        background: "#fb9678",
                      }}
                    >
                      I would love to join the team.
                    </div>
                    <br />
                    <div
                      className="chat-time"
                      style={{
                        fontSize: "11px",
                        color: "#6c757d",
                        margin: "-17px 0 15px 180px",
                      }}
                    >
                      10:58 am
                    </div>
                  </div>
                </li>
                <li className="odd mt-4">
                  <div
                    className="chat-content"
                    style={{ marginLeft: "auto", width: "270px" }}
                  >
                    <div
                      className="box bg-light-inverse"
                      style={{
                        padding: "10px",
                        borderRadius: "0.25rem",
                        color: "#fff",
                        background: "#fb9678",
                      }}
                    >
                      Whats budget of the new project.
                    </div>
                    <br />
                    <div
                      className="chat-time"
                      style={{
                        fontSize: "11px",
                        color: "#6c757d",
                        margin: "-17px 0 15px 220px",
                      }}
                    >
                      10:59 am
                    </div>
                  </div>
                </li>
                <li className="d-flex mt-4" style={{ marginBottom: "-50px" }}>
                  <div className="chat-img">
                    <img
                      src={img3}
                      alt="user"
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </div>
                  <div className="chat-content ml-3">
                    <h5
                      style={{
                        color: "#6c757d",
                        fontWeight: "350",
                        fontSize: "17px",
                      }}
                    >
                      Angelina Rhodes
                    </h5>
                    <div
                      className="box bg-light-info"
                      style={{
                        color: "#343a40",
                        background: "#f8f9fa",
                        padding: "10px",
                        borderRadius: "0.25rem",
                        fontWeight: "350",
                      }}
                    >
                      Well we have good budget for the project
                    </div>
                    <div
                      className="chat-time"
                      style={{
                        fontSize: "11px",
                        color: "#6c757d",
                        margin: "5px 0 15px 5px",
                      }}
                    >
                      11:00 am
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body border-top">
            <div className="row">
              <div className="col-9">
                <textarea
                  placeholder="Type your message here"
                  className="form-control border-0"
                ></textarea>
              </div>
              <div className="col-3 text-right">
                <button
                  type="button"
                  className="btn btn-info btn-lg sendbtn"
                  style={{ borderRadius: "50%", height: "55px", width: "55px" }}
                >
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Chat
