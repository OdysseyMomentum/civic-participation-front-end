import React from "react";

const ProgressBar = (props) => {
    
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 27,
        backgroundColor: "#e0e0de",
        margin: 10,
        position: 'relative',
        border: '1px solid'
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 3,
        color: '#000000',
        fontWeight: 'normal',
        position: 'absolute',
        left: '50%',
        fontFamily: 'Roboto',
        fontSize: 18,
        transform: 'translateX(-50%)',
        fontFamily: 'Roboto'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${props.selectedValue} selected`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;