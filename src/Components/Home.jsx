import React from 'react'
import Minimal from './Minimal';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Home = (props) => {
    return (
        <div>
            {/* <Sidebar data={ props.data.userData}/> */}
            {/* <Navbar /> */}
            <Minimal />
        </div>
    )
}

export default Home
