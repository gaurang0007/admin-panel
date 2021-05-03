import React from "react";
import SingleComments from "./SingleComments";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
const Comments = () => {
  return (
    <div className="col-lg-6">
      <div className="card " style={{ borderRadius: "0px", border : 'none' }}>
        <div class="card-body">
          <h5 class="card-title">Recent Comments</h5>
        </div>
        <div
          class="card-body"
          id="comment"
          style={{ position: "relative", height: "565px", overflowY: "scroll" }}
        >
          <SingleComments profile={img1} badge="badge badge-pill badge-info" />
          <hr />
          <SingleComments
            profile={img2}
            badge="badge badge-success badge-pill"
          />
          <hr />
          <SingleComments
            profile={img3}
            badge="badge badge-danger badge-pill"
          />
          <hr />
          <SingleComments
            profile={img1}
            badge="badge badge-success badge-pill"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
