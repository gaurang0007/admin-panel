import React from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import { NavLink } from "react-router-dom";
import { GoogleLogout } from "react-google-login";



const OpenProfile = () => {

    const logout = () => {
      // alert("logout");
      console.log("logout sucessfull");
    };
  return (
    <div>
      <p class="dropdown-item" style={{ fontSize: "16px" }}>
        <PersonOutlineOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" }}
        />
        My Profile
      </p>
      <p class="dropdown-item" style={{ fontSize: "16px" }}>
        <AccountBalanceWalletOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" }}
        />
        My Balance
      </p>
      <p class="dropdown-item" style={{ fontSize: "16px" }}>
        <MailOutlineOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" }}
        />{" "}
        Inbox
      </p>
      <div class="dropdown-divider"></div>
      <p class="dropdown-item" style={{ fontSize: "16px" }}>
        <SettingsOutlinedIcon style={{ fontSize: "20px", fontWeight: "100" }} />
        Account Setting
      </p>{" "}
      <div class="dropdown-divider"></div>
      {/* <NavLink to="/" class="dropdown-item" style={{ fontSize: "16px" }}> */}
        {/* <PowerSettingsNewOutlinedIcon
          style={{ fontSize: "20px", fontWeight: "100" }}
        />{" "}
        Logout */}
        <GoogleLogout
          clientId="912181169645-0j1hu8pciqsabkh8n702r10pfojop9s2.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      {/* </NavLink> */}
    </div>
  );
};

export default OpenProfile;
