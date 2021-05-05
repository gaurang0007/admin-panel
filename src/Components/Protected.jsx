import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import Minimal from './Minimal'

const Protected = (props) => {
    const history = useHistory()
    useEffect(() => {
        if (props.data.userData.length === 0) {
           history.push('/')
       }
    })
    return (
      <div>
        <Minimal />
      </div>
    );
}

const mapStateToProps = (state) => ({
  data: state,
});
export default connect(mapStateToProps)(Protected);


