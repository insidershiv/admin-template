import React from 'react';
import Button from 'reactstrap/lib/Button';

const ButtonComponent = ({
    label, ...rest
}) => {

    return (
        <div className="mb-3" style={{ display: 'inline-block' }}>
            <button className="btn btn-primary" style={{ boxShadow: '5px 5px lightgrey' }} {...rest}>
                {label}
            </button>
        </div>

    )
}
export default ButtonComponent