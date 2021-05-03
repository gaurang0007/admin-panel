import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined";

const SingleComments = (props) => {
  return (
    <div class="d-flex no-block comment-row mb-3 ">
      <div class="p-2">
        <span class="round">
          <img
            src={props.profile}
            alt="user"
            width="50"
            style={{ borderRadius: "50%" }}
          />
        </span>
      </div>{" "}
      <div class="comment-text w-100 ml-3">
        <h5 class="font-medium">James Anderson</h5>
        <p class="m-b-10 text-muted">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the
          printing and type setting industry.
        </p>
        <div class="comment-footer d-block">
          <span class="text-muted pull">April 14, 2016</span>&nbsp;&nbsp;
          <span class={props.badge}>Pending</span>
          <div class="action-icons text-muted ">
            <span style={{ marginLeft: "3px" }} className="commentIcon">
              <EditLocationOutlinedIcon style={{ fontSize: "1.1rem" }} />
            </span>
            <span style={{ marginLeft: "3px" }} className="commentIcon">
              <CheckOutlinedIcon style={{ fontSize: "1.1rem" }} />
            </span>
            <span style={{ marginLeft: "3px" }} className="commentIcon">
              <FavoriteBorderOutlinedIcon style={{ fontSize: "1.1rem" }} />
            </span>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default SingleComments;
