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
          <div class="d-flex no-block align-items-center">
            <div>
              <h5
                class="card-title"
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                TO DO LIST
              </h5>
            </div>
            <div class="ml-auto">
              <button
                class="pull-right listbtn"
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
            class="list-group mt-3 d-flex "
            style={{
              height: "420px",
              position: "relative",
              overflowY: "scroll",
              border: "none",
            }}
          >
            <li class="ml-1" data-role="task ">
              <div class="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck"
                />
                <label
                  class="custom-control-label"
                  for="customCheck"
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
                class="assignedto d-flex mt-2"
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
            <li class="ml-1" data-role="task">
              <div class="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                />
                <label
                  class="custom-control-label"
                  for="customCheck1"
                  style={{ fontSize: "14px", width: "71%" }}
                  id="check2"
                  onClick={clickCheckbox2}
                >
                  <span>Lorem Ipsum is simply dummy text of the printing</span>
                </label>
                <span class="badge2" id="checkBadge2">
                  1 week
                </span>
              </div>
              <div
                class="item-date"
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
            <li class="ml-1" data-role="task">
              <div class="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck2"
                />
                <label
                  class="custom-control-label"
                  for="customCheck2"
                  style={{ fontSize: "14px", width: "71%" }}
                  id="check3"
                  onClick={clickCheckbox3}
                >
                  <span>Give Purchase report to</span>{" "}
                </label>
                <span class="badge3" id="checkBadge3">
                  Yesterday
                </span>
              </div>
              <ul
                class="assignedto d-flex mt-2"
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
            <li class="ml-1" data-role="task">
              <div class="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck3"
                />
                <label
                  class="custom-control-label"
                  for="customCheck3"
                  style={{ fontSize: "14px", width: "71%" }}
                  id="check4"
                  onClick={clickCheckbox4}
                >
                  <span>Lorem Ipsum is simply dummy text of the printing </span>{" "}
                </label>{" "}
                <span class="badge4" id="checkBadge4">
                  2 weeks
                </span>
              </div>
              <div
                class="item-date"
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
            <li class="ml-1" data-role="task">
              <div class="custom-control custom-checkbox d-flex">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck4"
                />
                <label
                  class="custom-control-label"
                  for="customCheck4"
                  style={{ fontSize: "14px", width: "71%" }}
                  id="check5"
                  onClick={clickCheckbox5}
                >
                  <span>Give Purchase report to</span>{" "}
                </label>
                <span class="badge5" id="checkBadge5">
                  Yesterday
                </span>
              </div>
              <ul
                class="assignedto d-flex mt-2"
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
        class="modal fade"
        id="myModal"
        role="dialog"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4
                class="modal-title"
                style={{ fontSize: "19px", fontWeight: "350" }}
              >
                Add Task
              </h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>Task name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Task Name"
                  />{" "}
                </div>
                <div class="form-group">
                  <label>Assign to</label>
                  <select class="custom-select form-control pull-right">
                    <option selected="">Gaurang</option>
                    <option value="1">Abhishek</option>
                    <option value="2">Jaynesh</option>
                    <option value="3">Keyur</option>
                    <option value="4">Rutvik</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-success"
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
