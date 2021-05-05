import React, { useState } from "react";
import Emails from "./Emails";
import NavbarDropdown from "./NavbarDropdown";
import Notifications from "./Notifications";

const Navbar = () => {
  const [Toggle, setToggle] = useState(true);

  const toggleBtn = () => {
    if (Toggle) {
      document.getElementById("mySidebar").style.width = "250px";
      if (window.innerWidth > 1000) {
        document.getElementById("minimal").style.marginLeft = "250px";
      }
       if (window.innerWidth > 500) {
         document.getElementById("main").style.marginLeft = "250px";
       }
      setToggle(false);
    } else {
      setToggle(true);
      document.getElementById("mySidebar").style.width = "0";
 if (window.innerWidth > 1000) {
   document.getElementById("minimal").style.marginLeft = "0";
      }
       if (window.innerWidth > 500) {
         document.getElementById("main").style.marginLeft = "0";
       }
    }
  };
  return (
    <div className="mainnav">
      <div id="main">
        <div onClick={toggleBtn} className="toggleBtn">
          <i className="fa fa-bars"></i>
        </div>
        <input type="text" placeholder="Search & enter" className="search" />
        <div className="rightIcon d-flex">
          <div >
            <Notifications />
            <i className="fa fa-envelope select" data-toggle="dropdown"></i>

            <span className="point"></span>
            <span className="heartbit"></span>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            {" "}
            <i className="fa fa-edit select " data-toggle="dropdown"></i>
            <span className="point2"></span>
            <div
              class="dropdown-menu dropdown-menu-right  mt-4"
              id="animated-example"
            >
              <Emails />
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            {" "}
            <i className="fa fa-file select " data-toggle="dropdown"></i>
            <div
              class="dropdown-menu dropdown-menu-right  mt-4"
              id="animated-example"
            >
              <NavbarDropdown />
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div>
            <i className="fa fa-cog select"></i>&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
