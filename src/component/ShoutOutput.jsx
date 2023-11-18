import React from "react";

const ShoutOutput = ( props ) => {
    const outstyle = {
        textAlign: 'center',
        backgroundColor: 'yellow',
        margin: '50px',
        padding: '20px',
    };  

    return (
        <div>
            <h2>shout something</h2>
            <h1 style={outstyle}>{props.shout}</h1>
        </div>
    );
};


export default ShoutOutput;