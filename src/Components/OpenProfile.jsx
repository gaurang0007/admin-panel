import React from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import { NavLink } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { logOut } from "../Redux/Actions/UserAction";
import { connect } from "react-redux";

const OpenProfile = (props) => {
  const logout = () => {
    console.log("logout sucessfull");
    props.logOut();
  };
  return (
    <div>
      <div className="dropdown-item" style={{ fontSize: "16px" }}>
        <PersonOutlineOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" }}
        />
        My Profile
      </div>
      <div className="dropdown-item" style={{ fontSize: "16px" }}>
        <AccountBalanceWalletOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" }}
        />
        My Balance
      </div>
      <div className="dropdown-item" style={{ fontSize: "16px" }}>
        <MailOutlineOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" }}
        />{" "}
        Inbox
      </div>
      <div className="dropdown-divider"></div>
      <div className="dropdown-item" style={{ fontSize: "16px" }}>
        <SettingsOutlinedIcon style={{ fontSize: "20px", fontWeight: "100" }} />
        Account Setting
      </div>{" "}
      <div className="dropdown-divider"></div>
      <NavLink to="/" className="dropdown-item" style={{ fontSize: "16px" }}>
        {/* <PowerSettingsNewOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" }}
        />{" "}
        Logout */}
        <GoogleLogout
          clientId="912181169645-0j1hu8pciqsabkh8n702r10pfojop9s2.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
          render={(renderProps) => (
            <button onClick={renderProps.onClick} style={{ border:'none', outline:'none', backgroundColor:'transparent' }}>
              <PowerSettingsNewOutlinedIcon
                style={{ fontSize: "20px", fontWeight: "100" }}
              />{" "}
              Logout
            </button>
          )}
        ></GoogleLogout>
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: (data) => dispatch(logOut(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenProfile);
