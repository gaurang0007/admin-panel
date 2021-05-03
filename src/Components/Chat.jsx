import React from 'react'
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
const Chat = () => {
    return (
      <div className="col-md-4">
        <div class="card" style={{ borderRadius: "0px", border: "none" }}>
          <div class="card-body">
            <h5
              class="card-title"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              CHAT
            </h5>
            <div
              class="chat-box ps ps--theme_default ps--active-y mt-4"
              id="chat"
              style={{
                height: "327px",
                position: "relative",
                overflowY: "scroll",
              }}
            >
              <ul
                class="chat-list"
                style={{ listStyleType: "none", paddingLeft: "0px" }}
              >
                <li className="d-flex">
                  <div class="chat-img">
                    <img
                      src={img1}
                      alt="user"
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </div>
                  <div class="chat-content ml-3">
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
                      class="chat-time"
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
                  <div class="chat-img">
                    <img
                      src={img2}
                      alt="user"
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </div>
                  <div class="chat-content ml-3">
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
                      class="box bg-light-info"
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
                      class="chat-time"
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
                <li class="odd mt-4">
                  <div
                    class="chat-content"
                    style={{ marginLeft: "auto", width: "230px" }}
                  >
                    <div
                      class="box bg-light-inverse"
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
                      class="chat-time"
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
                <li class="odd mt-4">
                  <div
                    class="chat-content"
                    style={{ marginLeft: "auto", width: "270px" }}
                  >
                    <div
                      class="box bg-light-inverse"
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
                      class="chat-time"
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
                  <div class="chat-img">
                    <img
                      src={img3}
                      alt="user"
                      style={{ width: "50px", borderRadius: "50%" }}
                    />
                  </div>
                  <div class="chat-content ml-3">
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
                      class="box bg-light-info"
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
                      class="chat-time"
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
          <div class="card-body border-top">
            <div class="row">
              <div class="col-9">
                <textarea
                  placeholder="Type your message here"
                  class="form-control border-0"
                ></textarea>
              </div>
              <div class="col-3 text-right">
                <button
                  type="button"
                  class="btn btn-info btn-lg sendbtn"
                  style={{ borderRadius: "50%", height: "55px", width: "55px" }}
                >
                  <i class="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Chat
