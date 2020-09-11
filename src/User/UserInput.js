import React from 'react';

const style = {
    backgroundColor: 'black',
    fontWeight: '200',
    color: 'yellow'
};

const UserInput = (props) => {
    return <input style={style} type='text' onChange={props.eventHandler} value={props.userName}/>
}

export default UserInput;