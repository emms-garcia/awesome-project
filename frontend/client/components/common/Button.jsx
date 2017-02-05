import React from 'react';

const Button = ({ className, children, onClick }) => {
    return (
        <button
            className={className}
            onClick={onClick}
            type='button'
        >
            { children }
        </button>
    );
};

Button.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
};

export default Button;
