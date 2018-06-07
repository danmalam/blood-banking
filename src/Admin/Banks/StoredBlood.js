import React, { Component } from 'react';
import Scripts from '../Script';

class BloodGroup extends Component {
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
                                    <h3 className="m-portlet__head-text">Blood Stored Register</h3>
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
                                        <label>Blood Group</label>
                                        <select name="type" data-size="4" className="form-control m-bootstrap-select m_selectpicker">
                                            <option className="m--hide" defaultValue>select blood group</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Blood Component</label>
                                        <select multiple name="component" className="form-control m-bootstrap-select m_selectpicker" id="component">
                                            <option className="m--hide placeholder">select blood components</option>
                                            <option value="Whole Blood">Whote Blood</option>
                                            <option value="Packed RBC">Packed RBC</option>
                                            <option value="Plasma">Plasma</option>
                                            <option value="Platelet">Platelet</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Donor Name</label>
                                        <select name="donor" data-live-search="true" className="form-control m-bootstrap-select m_selectpicker">
                                            <option className="m--hide" defaultValue value="">select donor name</option>
                                            <option value="">Donor name A</option>
                                            <option value="">Donor name B</option>
                                            <option value="">Donor name C</option>
                                            <option value="">Donor name D</option>
                                            <option value="">Donor name E</option>
                                            <option value="">Donor name F</option>
                                            <option value="">Donor name G</option>
                                            <option value="">Donor name H</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="component_parent">
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Bag Weight</label>
                                        <select name="bag_weight" className="form-control m-bootstrap-select m_selectpicker">
                                            <option className="m--hide" defaultValue value="">select weight</option>
                                            <option value="250">250 (ml)</option>
                                            <option value="350">350 (ml)</option>
                                            <option value="450">450 (ml)</option>
                                            <option value="500">500 (ml)</option>
                                        </select>
                                    </div>
                                </div>
                                 
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <div className="m-radio-inline">
                                            <label className="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input type="radio" name="status" value="accepted"/> Accept
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="m-radio-inline">
                                            <label className="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input type="radio" name="status" value="defered"/> Defer
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Reason</label>
                                        <input type="text" className="form-control m-input" name="reason" placeholder="Reason"/>
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

export default BloodGroup;