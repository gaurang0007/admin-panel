import React from 'react'
import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="maindiv">
      <div className="maindiv2">
        <div className="contant">
          <h3>Recover Password</h3>
          <p>Enter your Email and instructions will be sent to you!</p>
          <div className="forgotInput">
            <input type="email" required placeholder="Email" />
          </div>
          <div>
            <NavLink to="/home">
              <button type="submit" className="resetBtn">
                RESET
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword
