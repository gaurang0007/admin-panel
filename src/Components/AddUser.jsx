import React,{useState} from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { addUser } from "../Redux/Actions/UserAction";


const AddUser = (props) => {
  const [name, setname] = useState()
  const [email, setemail] = useState();
  const [salary, setsalary] = useState();
  const [technology, settechnology] = useState('React Js');
  const [exprience, setexprience] = useState('1');

  return (
    <div
      id="minimal"
      className="d-flex"
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <form
        style={{ width: "500px", backgroundColor: "white", padding: "20px" }}
      >
        <h3>Add User</h3>
        <br />
        <div class="form-group">
          <label for="exampleInputEmail1">Name :</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email :</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">salary :</label>
          <input
            type="number"
            class="form-control"
            placeholder="Enter Salary"
            value={salary}
            onChange={(e) => setsalary(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Technology :</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            value={technology}
            onChange={(e) => settechnology(e.target.value)}
          >
            <option>React Js</option>
            <option>Flutter</option>
            <option>Android</option>
            <option>IOS</option>
            <option>Php</option>
          </select>
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect2">Exprience :</label>
          <select
            class="form-control"
            id="exampleFormControlSelect2"
            value={exprience}
            onChange={(e) => setexprience(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <NavLink to='/users'>
          <button
            type="reset"
            class="btn btn-primary"
            onClick={() =>
              props.addUser({
                id: Math.random(),
                name: name,
                email: email,
                salary: salary,
                technology: technology,
                exprience: exprience,
              })
            }
          >
            Submit
          </button>
        </NavLink>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (data) => dispatch(addUser(data)),
});

export default connect(null, mapDispatchToProps)(AddUser);
