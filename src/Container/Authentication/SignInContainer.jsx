
import { connect } from "react-redux";
import { userData } from "../../Redux/Actions/UserAction";
import SignIn from "../../Components/Authentication/SignIn";

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  userData: (data) => dispatch(userData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
