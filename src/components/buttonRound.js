import React from 'react';
import Button from 'reactstrap/lib/Button';

const ButtonRound = ({
    label, ...rest
}) => {

    return (
        <div className="mb-3" style={{ display: 'inline-block' }}>
            <button className="btn btn-primary" style={{ boxShadow: '5px 5px lightgrey', borderRadius: '999px', paddingRight: '3rem', paddingLeft: '3rem' }} {...rest}>
                {label}
            </button>
        </div>

    )
}
export default ButtonRound