import React from 'react'

const CustomRoundInput = ({ label, name, type, ...rest

}) => {
    return (
        <>
            <div className="col-sm-3">

                <label htmlFor={name} className="mt-2">{label}</label>
            </div>
            <div className="col-sm-9">

                <input type={type} id={name} name={name} className="form-control" style={{ borderRadius: '999px' }} />
            </div>
        </>
    )
}
export default CustomRoundInput