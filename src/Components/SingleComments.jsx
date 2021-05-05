import React from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import EditLocationOutlinedIcon from "@material-ui/icons/EditLocationOutlined";

const SingleComments = (props) => {
  return (
    <div className="d-flex no-block comment-row mb-3 ">
      <div className="p-2">
        <span className="round">
          <img
            src={props.profile}
            alt="user"
            width="50"
            style={{ borderRadius: "50%" }}
          />
        </span>
      </div>{" "}
      <div className="comment-text w-100 ml-3">
        <h5 className="font-medium">James Anderson</h5>
        <p className="m-b-10 text-muted">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the
          printing and type setting industry.
        </p>
        <div className="comment-footer d-block">
          <span className="text-muted pull">April 14, 2016</span>&nbsp;&nbsp;
          <span className={props.badge}>Pending</span>
          <div className="action-icons text-muted ">
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
