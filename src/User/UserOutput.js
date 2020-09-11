import React from 'react';
import './User.css';

const UserOutput = (props) => {
    return <div className='User'>
        <p>Hi, My name is {props.userName}</p>
        <p>I am a React enthsiast and Professional</p>
    </div>
}

export default UserOutput;