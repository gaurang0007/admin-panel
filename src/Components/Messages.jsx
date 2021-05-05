import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import SingleMessage from "./SingleMessage";
const Messages = () => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ borderRadius: "0px", border: "none" }}>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            YOU HAVE 5 NEW MESSAGES
          </h5>
          <div
            className="message-box ps ps--theme_default ps--active-y"
            id="msg"
            style={{
              height: "440px",
              position: "relative",
              overflowY: "scroll",
            }}
            data-ps-id="76bfa3b8-0012-f94c-dd64-2ac2703c23da"
          >
            <div className="message-widget message-scroll ">
              <SingleMessage
                profile={img1}
                name="Pavan Kumar"
                time="9:30 AM"
                class="profile-status1"
                message="Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been."
              />
              <hr />
              <SingleMessage
                profile={img2}
                name="Sonu Nigam"
                time="9:10 AM"
                class="profile-status2"
                message="I've sung a song! See you at"
              />
              <hr />
              <SingleMessage
                profile={img3}
                name="Arijit sinh"
                time="9:08 AM"
                class="profile-status3"
                message="Simply dummy text of the printing and typesetting industry."
              />
              <hr />
              <SingleMessage
                profile={img1}
                name="Pavan Kumar"
                time="9:02 AM"
                class="profile-status3"
                message="Just see the my admin!"
              />
              <hr />
              <SingleMessage
                profile={img2}
                name="Sonu Nigamr"
                time="9:30 AM"
                class="profile-status1"
                message="Welcome to the Admin Panal."
              />
              <hr />
              <SingleMessage
                profile={img3}
                name="Arijit sinh"
                time="9:10 AM"
                class="profile-status2"
                message="I've sung a song! See you at"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
