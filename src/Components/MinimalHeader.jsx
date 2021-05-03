import React from 'react'
import { NavLink } from "react-router-dom";

const MinimalHeader = () => {
    return (
      <div className="dashboardHeader">
        <h4 className="headerHeading">Dashboard 1 </h4>
        <div className="rightHeader">
          <span className="underRightHeader">
            Home <i className="fa fa-caret-right pathIcon"></i>
            <span style={{ color: " #f14d1c" }}>Dashboard 1</span>
          </span>
          <NavLink to='/users/add-user'>
            <button className="addNew">
              <i className="fa fa-plus-circle"> &nbsp;</i>Create New
            </button>
          </NavLink>
        </div>
      </div>
    );
}

export default MinimalHeader
