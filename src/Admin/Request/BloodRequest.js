import React, { Component } from 'react';
import Scripts from '../Script';

class BloodRequest extends Component {
    constructor() {
		super()
		Scripts('/assets/app/js/form-controls.js')
        Scripts('/assets/app/js/bootstrap-select.js')
        Scripts('/assets/app/js/app.js')
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
                                    <h3 className="m-portlet__head-text">Blood Request</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--begin::Form--> */}
                        <form className="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed" id="user_form">
                            <div className="m-portlet__body">
                                <div className="m-form__content">
                                    <div className="m-alert m-alert--icon alert alert-danger m--hide" role="alert" id="m_form_1_msg">
                                        <div className="m-alert__icon">
                                            <i className="la la-warning"></i>
                                        </div>
                                        <div className="m-alert__text">
                                            Oh snap! Change a few things up and try submitting again.
                                        </div>
                                        <div className="m-alert__close">
                                            <button type="button" className="close" data-close="alert" aria-label="Close">
                                            </button>	
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label className="m-checkbox m-checkbox--bold m-checkbox--state-success">
                                        <input type="checkbox" id="exist_parent"/> Check this box if patient already register
                                        <span></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row" id="exist_patient_hide">
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
                                        <input type="text" name="psex" className="form-control m-input" placeholder="Enter patient sex" />
                                    </div>                                
                                </div>
                                <div className="form-group m-form__group row m--hide" id="exist_patient_show">
                                    <div className="col-lg-4">
                                        <label>Select Patient *</label>
                                        <select data-live-search="true" name="patient" className="form-control m-bootstrap-select m_selectpicker">
                                            <option className="m--hide">select patient</option>
                                            <option>Patient A</option>
                                            <option>Patient B</option>
                                        </select>
                                    </div>                     
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Service *</label>
                                        <input type="text" name="ward" className="form-control m-input" placeholder="Enter ward" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Hospital Name *</label>
                                        <input type="text" name="hname" className="form-control m-input" placeholder="Enter hospital name" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Consultant Name *</label>
                                        <input type="text" name="cname" className="form-control m-input" placeholder="Enter consultant's name" />
                                    </div>                                
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Reason for transfusion *</label>
                                        <input type="text" name="reason" className="form-control m-input" placeholder="Enter reason" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Blood group *</label>
                                        <select name="bgroup" data-size="4" className="form-control m-bootstrap-select m_selectpicker">
                                            <option className="m--hide">select patient blood group</option>
                                            <option>O+</option>
                                            <option>O-</option>
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Blood Component</label>
                                        <select multiple name="component" id="component" className="form-control m-bootstrap-select m_selectpicker">
                                            <option className="m--hide">select component</option>
                                            <option>Whote Blood</option>
                                            <option>Packed RBC</option>
                                            <option>Plasma</option>
                                            <option>Platelet</option>
                                        </select>
                                    </div>                              
                                </div>
                                <div id="component_parent"></div>
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

export default BloodRequest;