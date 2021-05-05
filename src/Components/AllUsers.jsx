import React from 'react'
import { connect } from 'react-redux';
import { deleteUser, update } from '../Redux/Actions/UserAction';
import { NavLink } from "react-router-dom";


const AllUsers = (props) => {
  console.log(props.data);
    return (
      <div
        id="minimal"
        style={{
          height: "90vh",
          overflowX: "auto",
        }}
      >
        <div className="container mb-3">
          <NavLink to="/users/add-user">
            <button className="btn btn-success" style={{ textAlign: "center" }}>
              Add User
            </button>
          </NavLink>
          <NavLink to="/home">
            <button className="btn btn-success" style={{ textAlign: "center", float:'right' }}>
              Back to Dashboard
            </button>
          </NavLink>
        </div>
        <table className="table container" style={{ backgroundColor: "white" }}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Technology</th>
              <th>Exprience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {props.data.allData.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{"₹ " + val.salary}</td>
                  <td>{val.technology}</td>
                  <td>{val.exprience + " years"}</td>
                  <td>
                    <NavLink to="users/update-user">
                      <button
                        className="btn btn-info"
                        onClick={() =>
                          props.update({
                            id: val.id,
                            name: val.name,
                            email: val.email,
                            salary: val.salary,
                            exprience: val.exprience,
                            technology: val.technology,
                          })
                        }
                      >
                        Update
                      </button>
                    </NavLink>{" "}
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => props.deleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}
const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (index) => dispatch(deleteUser(index)),
  update: (id) => dispatch(update(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
