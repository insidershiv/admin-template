import React from 'react'
import CustomRoundInput from '../components/formInput/customRoundInput';
import ButtonRound from '../components/buttonRound';

const AddSubadmin = () => {
    return (
        <div>
            <div className="row">
                <div className="row form-group col-md-6">
                    <CustomRoundInput name="name" label="Name" type="text" />
                </div>
                <div className="row form-group col-md-6">
                    <CustomRoundInput name="email" label="Email ID" type="text" />
                </div>



            </div>

            <div className="row">
                <div className="row form-group col-md-6">
                    <CustomRoundInput name="mobile" label="Mobile Number" type="text" />
                </div>
                <div className="row form-group col-md-6">
                    <CustomRoundInput name="module" label="Access Module" type="text" />
                </div>



            </div>
            <div className="row">
                <div className="row form-group col-md-6">
                    <CustomRoundInput name="area" label="Area" type="text" />
                </div>




            </div>

            <div className="row justify-content-end mt-5 pr-5">

                <ButtonRound label="Update" />
            </div>


        </div>
    )
}

export default AddSubadmin