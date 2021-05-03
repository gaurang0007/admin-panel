import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Emails from "./Emails";
import OpenProfile from "./OpenProfile";

const Sidebar = (props) => {
  console.log(props)
  const [deshboardDropdown, setdeshboardDropdown] = useState(false);
  const [appsDropdown, setappsDropdown] = useState(false);
  const [inboxDropdown, setinboxDropdown] = useState(false);
  const [UiDropdown, setUiDropdown] = useState(false);

  const openUiDropdown = () => {
    UiDropdown ? setUiDropdown(false) : setUiDropdown(true);
  };

  const openInboxDropdown = () => {
    inboxDropdown ? setinboxDropdown(false) : setinboxDropdown(true);
  };

  const openAppsDropdown = () => {
    appsDropdown ? setappsDropdown(false) : setappsDropdown(true);
  };

  const openDropdown = () => {
    deshboardDropdown
      ? setdeshboardDropdown(false)
      : setdeshboardDropdown(true);
  };
 
  return (
    <div>
      <div id="mySidebar" className="sidebar">
        <div className="staticPosition">
          <h1 className="closebtn">Admin Panel</h1>
        </div>
        <div className="partetion">
          <img
            // src={props.data.userData[0].profile}
            alt="profile"
            className="profileImg"
          />
          <div className="profilediv ">
            <p className="profileName" data-toggle="dropdown">
              {/* {props.data.userData[0].name}&nbsp; */}
              <i className="fa fa-caret-down dropdown"></i>
            </p>
            <div
              class="dropdown-menu dropdown-menu-right mt-2 flipInY animated1"
              style={{ marginRight: "40px" }}
              id="animated-example"
            >
              <OpenProfile />
            </div>
          </div>
          <p className="heading">--- PERSONAL</p>
          <li>
            <NavLink
              to="/home"
              activeStyle={{
                color: "#fb9678",
              }}
            >
              <div className="" onClick={openDropdown}>
                <i class="fa fa-home icon"></i>
                <span className="menu">Dashboard</span>
                <span className="number">4</span>
                <i className="fa fa-caret-down dropdown"></i>
              </div>
            </NavLink>
            {deshboardDropdown && (
              <ul className="dropdownList" area-aria-expanded='false' className='collapse in'>
                <li>
                  <NavLink to="/dashboard">Minimal</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Analytical</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Demographical</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Morden</NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/apps"
              activeStyle={{
                color: "#fb9678",
              }}
            >
              <div
                onClick={openAppsDropdown}
              >
                <i className="fa fa-th-large icon"></i>{" "}
                <span className="menu">Apps</span>
                <i className="fa fa-caret-down dropdown"></i>
              </div>
            </NavLink>
            {appsDropdown && (
              <ul className="dropdownList">
                <li>
                  <NavLink to="/home">Calander</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Chat app</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Support Ticket</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Contact / Emoployee</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Contact Grid</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Contact Detail</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/inbox"
              // style={{ color: "#8d97ad", textDecoration: "none" }}
              activeStyle={{
                color: "#fb9678",
                borderLeft: "5px solid #fb9698",
              }}
            >
              <div onClick={openInboxDropdown}>
                <i className="fa fa-envelope icon"></i>{" "}
                <span className="menu">Inbox</span>
                <i className="fa fa-caret-down dropdown"></i>
              </div>
            </NavLink>
            {inboxDropdown && (
              <ul className="dropdownList">
                <li>
                  <NavLink to="/home">Mailbox</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Mailbox Detail</NavLink>
                </li>
                <li>
                  <NavLink to="/home">Compose Mail</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/ui-element"
              // style={{ color: "#8d97ad", textDecoration: "none" }}
              activeStyle={{ color: "#fb9678" }}
            >
              <div onClick={openUiDropdown}>
                <i className="fa fa-paint-brush icon"></i>
                <span className="menu">Ui Elements</span>
                <span className="number">25</span>
                <i className="fa fa-caret-down dropdown"></i>
              </div>
              {UiDropdown && (
                <ul className="dropdownList">
                  <li>
                    <NavLink to="/home">Cards</NavLink>
                  </li>
                  <li>
                    <NavLink to="/home">User Cards</NavLink>
                  </li>
                  <li>
                    <NavLink to="/home">Buttons</NavLink>
                  </li>
                  <li>
                    <NavLink to="/home">Modals</NavLink>
                  </li>
                  <li>
                    <NavLink to="/home">Tab</NavLink>
                  </li>
                  <li>
                    <NavLink to="/home">Tooltips</NavLink>
                  </li>
                </ul>
              )}
            </NavLink>
          </li>
          <p className="heading">--- FORMS, TABLE & WIDGETS</p>
          <li>
            <NavLink exact
              to="/users/add-user"
              activeStyle={{ color: "#fb9678" }}
            >
              <i className="fa fa-file icon"></i>
              <span className="menu">Forms</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/users" activeStyle={{ color: "#fb9678" }}>
              <i className="fa fa-table icon"></i>{" "}
              <span className="menu">Tables</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/widgets" activeStyle={{ color: "#fb9678" }}>
              <i className="fa fa-cog icon"></i>{" "}
              <span className="menu">Widgets</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <p className="heading">--- EXTRA COMPONENTS</p>
          <li>
            <NavLink to="/home">
              <i className="fa fa-image icon"></i>
              <span className="menu">Page Layout</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <i className="fa fa-copy icon"></i>{" "}
              <span className="menu">Sample Pages</span>
              <span className="number">25</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <i className="fa fa-home icon"></i>
              <span className="menu">Charts</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <i className="fa fa-compass icon"></i>{" "}
              <span className="menu">Icons</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <i className="fa fa-map-marker icon"></i>{" "}
              <span className="menu">Maps</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <i className="fa fa-list icon"></i>
              <span className="menu">Multi Level dd</span>
              <i className="fa fa-caret-down dropdown"></i>
            </NavLink>
          </li>
          <p className="heading">--- SUPPORT</p>
          <li>
            <NavLink to="/home">
              <i className="fa fa-book icon"></i>
              <span className="menu">Documentation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <i className="fa fa-lock icon"></i>{" "}
              <span className="menu">Log Out</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home">
              <i className="fa fa-question icon"></i>{" "}
              <span className="menu">FAQs</span>
            </NavLink>
          </li>
          <br />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state,
});

export default connect(mapStateToProps)(Sidebar);
