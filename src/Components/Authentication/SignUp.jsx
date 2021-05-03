import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  
  return (
    <div className="maindiv">
      <form className="signin">
        <h3 className="heading">Sign Up</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">
            I agree to all <span style={{ color: "#F97356" }}>Terms</span>
          </label>
        </div>

        <div>
          <NavLink to='/home'>
            <button type="submit" className="btn btn-primary loginbtn">
              Sign Up
            </button>
          </NavLink>
        </div>
        

        <div className="signinFooter">
          Already have an account?&nbsp;&nbsp;&nbsp;
          <NavLink to="/" className="footerLink">
            Sign In
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
