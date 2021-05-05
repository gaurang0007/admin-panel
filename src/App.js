import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignUp from "./Components/Authentication/SignUp";
import { Route, Switch } from "react-router";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import SignInContainer from "./Container/Authentication/SignInContainer";
import HomeContainer from "./Container/HomeContainer";
import AddUser from "./Components/AddUser";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Minimal from "./Components/Minimal";
import { connect } from "react-redux";
import AllUsers from "./Components/AllUsers";
import UpdateData from "./Components/UpdateData";
import React from "react";
import Protected from "./Components/Protected";


function App(props) {
    
  console.log(props.data.userData);
  return (
    <div className="App">
      {props.data.userData.length > 0 && <Sidebar data={props.data.userData} />}
      {props.data.userData.length > 0 && <Navbar />}

      <Switch>
        <Route exact path="/" component={SignInContainer} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/home">
          <Protected cmp={HomeContainer} />
        </Route>
        <Route exact path="/users/add-user" component={AddUser} />
        <Route path="/dashboard"> <Protected cmp={Minimal} />
        </Route>
        <Route exact path="/users" component={AllUsers} />
        <Route exact path="/users/update-user" component={UpdateData} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  data: state,
});
export default connect(mapStateToProps)(App);
