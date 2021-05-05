import React from "react";
import { GoogleLogin } from "react-google-login";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const SignIn = (props) => {
  // console.log(props.data.logIn);
    const history = useHistory();

  const responseGoogle = (response) => {
    props.userData({
      name: response.profileObj.name,
      profile: response.profileObj.imageUrl,
      accessToken: response.accessToken,
    });
           history.push("/home");
  };

  return (
    <div className="maindiv">
      <form className="signin">
        <h3 className="heading">Sign In</h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Username"
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
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Remember me</label>
        </div>
        <div className="forgotPwd">
          <i className="fa fa-lock"></i>
          <NavLink to="forgot-password" className="forgottext">
            Forgot pwd?
          </NavLink>
        </div>
        <div>
          <NavLink to="/home">
            <button type="submit" className="btn btn-primary loginbtn">
              Log In
            </button>
          </NavLink>
        </div>

        <div className="GoogleLogin">
          <GoogleLogin
            clientId="912181169645-0j1hu8pciqsabkh8n702r10pfojop9s2.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            responseType="code,token"
          />
        </div>
        <div className="signinFooter">
          Don't have an account?{" "}
          <NavLink to="/signup" className="footerLink">
            Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
