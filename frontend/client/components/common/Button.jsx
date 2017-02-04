import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button
            className='waves-effect waves-light btn btn-large'
            onClick={onClick}
            type='button'
        >
            { children }
        </button>
    );
};

Button.propTypes = {
    onClick: React.PropTypes.func,
};

export default Button;
