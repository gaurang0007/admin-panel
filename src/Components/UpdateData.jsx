import React,{useState} from 'react'
import { connect } from 'react-redux';
import { saveUpdate, update } from '../Redux/Actions/UserAction';
import { NavLink } from "react-router-dom";


const UpdateData = (props) => {
  // console.log(props.data);
    const [name, setname] = useState(props.data.updateData[0].name);
    const [email, setemail] = useState(props.data.updateData[0].email);
    const [salary, setsalary] = useState(props.data.updateData[0].salary);
    const [technology, settechnology] = useState(
      props.data.updateData[0].technology
    );
    const [exprience, setexprience] = useState(props.data.updateData[0].exprience);

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
          <h3>Update User</h3>
          <br />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">salary :</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Salary"
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Technology :</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={technology}
              onChange={(e) => settechnology(e.target.value)}
            >
              <option value='React Js'>React Js</option>
              <option value='Flutter'>Flutter</option>
              <option value='Android'>Android</option>
              <option value='IOS'>IOS</option>
              <option value='Php'>Php</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Exprience :</label>
            <select
              className="form-control"
              id="exampleFormControlSelect2"
              value={exprience}
              onChange={(e) => setexprience(e.target.value)}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>

          <NavLink to='/users'>
            {" "}
            <button
              type="reset"
              className="btn btn-primary"
              onClick={() =>
                props.saveUpdate({
                  id: props.data.updateData[0].id,
                  name: name,
                  email: email,
                  salary: salary,
                  technology: technology,
                  exprience: exprience,
                })
              }
            >
              Update
            </button>
          </NavLink>
        </form>
      </div>
    );
}

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  saveUpdate: (index, data) => dispatch(saveUpdate(index, data)),
  updade: (id) => dispatch(update(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateData);

