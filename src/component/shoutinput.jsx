import React from "react";

const ShoutInput = (props) => {
    const inputStyle = {
        textAlign: 'center',
        
        margin: '50px',
        padding: '20px',
    }

    return (
        <div>
            <h2>shout something</h2>
            <input type="text" style={inputStyle} 
            onChange={props.changed}/>
        </div>
    )
}


export default ShoutInput;