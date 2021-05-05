import React, { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
const ToDoList = () => {
  const [check, setcheck] = useState(false);
  const [check2, setcheck2] = useState(false);
  const [check3, setcheck3] = useState(false);
  const [check4, setcheck4] = useState(false);
  const [check5, setcheck5] = useState(false);

  const clickCheckbox = () => {
    if (check) {
      document.getElementById("check").style.textDecoration = "none";
      document.getElementById("checkBadge").style.textDecoration = "none";
      setcheck(false);
    } else {
      document.getElementById("check").style.textDecoration = "line-through";
      document.getElementById("checkBadge").style.textDecoration =
        "line-through";

      setcheck(true);
    }
  };
   const clickCheckbox2 = () => {
     if (check2) {
       document.getElementById("check2").style.textDecoration = "none";
       document.getElementById("checkBadge2").style.textDecoration = "none";
       setcheck2(false);
     } else {
       document.getElementById("check2").style.textDecoration = "line-through";
       document.getElementById("checkBadge2").style.textDecoration =
         "line-through";

       setcheck2(true);
     }
  };
   const clickCheckbox3 = () => {
     if (check3) {
       document.getElementById("check3").style.textDecoration = "none";
       document.getElementById("checkBadge3").style.textDecoration = "none";
       setcheck3(false);
     } else {
       document.getElementById("check3").style.textDecoration = "line-through";
       document.getElementById("checkBadge3").style.textDecoration =
         "line-through";

       setcheck3(true);
     }
  };
   const clickCheckbox4 = () => {
     if (check4) {
       document.getElementById("check4").style.textDecoration = "none";
       document.getElementById("checkBadge4").style.textDecoration = "none";
       setcheck4(false);
     } else {
       document.getElementById("check4").style.textDecoration = "line-through";
       document.getElementById("checkBadge4").style.textDecoration =
         "line-through";

       setcheck4(true);
     }
  };
   const clickCheckbox5 = () => {
     if (check5) {
       document.getElementById("check5").style.textDecoration = "none";
       document.getElementById("checkBadge5").style.textDecoration = "none";
       setcheck5(false);
     } else {
       document.getElementById("check5").style.textDecoration = "line-through";
       document.getElementById("checkBadge5").style.textDecoration =
         "line-through";

       setcheck5(true);
     }
   };
  return (
    <div className="col-md-4">
      <div className="card" style={{ borderRadius: "0px", border: "none" }}>
        <div className="card-body">
          <div className="d-flex no-block align-items-center">
            <div>
              <h5
                className="card-title"
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                TO DO LIST
              </h5>
            </div>
            <div className="ml-auto">
              <button
                className="pull-right listbtn"
                data-toggle="modal"
                data-target="#myModal"
              >
                <span
                  style={{ position: "absolute", top: "19px", right: "32px" }}
                >
                  +
                </span>
              </button>
            </div>
          </div>
          <ul
            className="list-group mt-3 d-flex "
            style={{
              height: "420px",
              position: "relative",
              overflowY: "scroll",
              border: "none",
            }}
          >
            <li className="ml-1" data-role="task ">
              <div className="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck"
                  id="check"
                  onClick={clickCheckbox}
                  style={{ fontSize: "14px", width: "71%" }}
                >
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                  </span>{" "}
                </label>
                <span className="badge1" id="checkBadge">
                  Today
                </span>
              </div>
              <ul
                className="assignedto d-flex mt-2"
                style={{ listStyleType: "none", paddingLeft: "25px" }}
              >
                <li>
                  <img
                    src={img2}
                    alt="user"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Steave"
                    style={{ borderRadius: "50%", width: "30px" }}
                  />
                </li>
                &nbsp;&nbsp;
                <li>
                  <img
                    src={img1}
                    alt="user"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Jessica"
                    style={{ borderRadius: "50%", width: "30px" }}
                  />
                </li>
                &nbsp;&nbsp;
                <li>
                  <img
                    src={img3}
                    alt="user"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Priyanka"
                    style={{ borderRadius: "50%", width: "30px" }}
                  />
                </li>
              </ul>
            </li>
            <br />
            <li className="ml-1" data-role="task">
              <div className="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck1"
                  style={{ fontSize: "14px", width: "71%" }}
                  id="check2"
                  onClick={clickCheckbox2}
                >
                  <span>Lorem Ipsum is simply dummy text of the printing</span>
                </label>
                <span className="badge2" id="checkBadge2">
                  1 week
                </span>
              </div>
              <div
                className="item-date"
                style={{
                  paddingLeft: "30px",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {" "}
                26 jun 2017
              </div>
            </li>
            <br />
            <li className="ml-1" data-role="task">
              <div className="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck2"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck2"
                  style={{ fontSize: "14px", width: "71%" }}
                  id="check3"
                  onClick={clickCheckbox3}
                >
                  <span>Give Purchase report to</span>{" "}
                </label>
                <span className="badge3" id="checkBadge3">
                  Yesterday
                </span>
              </div>
              <ul
                className="assignedto d-flex mt-2"
                style={{ listStyleType: "none", paddingLeft: "25px" }}
              >
                <li>
                  <img
                    src={img3}
                    alt="user"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Steave"
                    style={{ borderRadius: "50%", width: "30px" }}
                  />
                </li>
                &nbsp;&nbsp;
                <li>
                  <img
                    src={img1}
                    alt="user"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Steave"
                    style={{ borderRadius: "50%", width: "30px" }}
                  />
                </li>
              </ul>
            </li>
            <br />
            <li className="ml-1" data-role="task">
              <div className="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck3"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck3"
                  style={{ fontSize: "14px", width: "71%" }}
                  id="check4"
                  onClick={clickCheckbox4}
                >
                  <span>Lorem Ipsum is simply dummy text of the printing </span>{" "}
                </label>{" "}
                <span className="badge4" id="checkBadge4">
                  2 weeks
                </span>
              </div>
              <div
                className="item-date"
                style={{
                  paddingLeft: "30px",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {" "}
                26 jun 2017
              </div>
            </li>
            <br />
            <li className="ml-1" data-role="task">
              <div className="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck4"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck4"
                  style={{ fontSize: "14px", width: "71%" }}
                  id="check5"
                  onClick={clickCheckbox5}
                >
                  <span>Give Purchase report to</span>{" "}
                </label>
                <span className="badge5" id="checkBadge5">
                  Yesterday
                </span>
              </div>
              <ul
                className="assignedto d-flex mt-2"
                style={{ listStyleType: "none", paddingLeft: "25px" }}
              >
                <li>
                  <img
                    src={img3}
                    alt="user"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Steave"
                    style={{ borderRadius: "50%", width: "30px" }}
                  />
                </li>
                &nbsp;&nbsp;
                <li>
                  <img
                    src={img2}
                    alt="user"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Steave"
                    style={{ borderRadius: "50%", width: "30px" }}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4
                className="modal-title"
                style={{ fontSize: "19px", fontWeight: "350" }}
              >
                Add Task
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Task name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Task Name"
                  />{" "}
                </div>
                <div className="form-group">
                  <label>Assign to</label>
                  <select className="custom-select form-control pull-right">
                    <option selected="">Gaurang</option>
                    <option value="1">Abhishek</option>
                    <option value="2">Jaynesh</option>
                    <option value="3">Keyur</option>
                    <option value="4">Rutvik</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
