import React, { Component } from 'react';
import Scripts from '../Script';

class PatientRegister extends Component {
    constructor() {
		super()
		Scripts('/assets/app/js/form-controls.js')
		Scripts('/assets/app/js/bootstrap-select.js')
	}
    render() {
        return (
            <div>
                <div className="m-content">
                    <div className="m-portlet">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <span className="m-portlet__head-icon m--hide">
                                        <i className="la la-gear"></i>
                                    </span>
                                    <h3 className="m-portlet__head-text">Patient Register</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--begin::Form--> */}
                        <form className="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed" id="user_form">
                            <div className="m-portlet__body">
                                <div class="m-form__content">
                                    <div class="m-alert m-alert--icon alert alert-danger m--hide" role="alert" id="m_form_1_msg">
                                        <div class="m-alert__icon">
                                            <i class="la la-warning"></i>
                                        </div>
                                        <div class="m-alert__text">
                                            Oh snap! Change a few things up and try submitting again.
                                        </div>
                                        <div class="m-alert__close">
                                            <button type="button" class="close" data-close="alert" aria-label="Close">
                                            </button>	
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Patient's Name *</label>
                                        <input type="text" name="pname" className="form-control m-input" placeholder="Enter patient name" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Patient's Age's *</label>
                                        <input type="text" name="page" className="form-control m-input" placeholder="Enter patient age" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Patient's Sex *</label>
                                        <select name="sex" className="form-control m-bootstrap-select m_selectpicker">
                                            <option selected className="m--hide">select sex</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>                                
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Department *</label>
                                        <input type="text" name="department" className="form-control m-input" placeholder="Enter department" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Mobile no </label>
                                        <input type="text" name="mobile" className="form-control m-input" placeholder="Enter contact mobile no" />
                                    </div> 
                                    <div className="col-lg-4">
                                        <label>Condition </label>
                                        <input type="text" name="condition" className="form-control m-input" placeholder="Enter patient condition" />
                                    </div>                           
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="row">
                                    <div className="col-lg-8">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <!--end::Form--> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default PatientRegister;