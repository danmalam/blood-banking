import React, { Component } from 'react';
import Scripts from '../Script';

class Donation extends Component {
    constructor() {
		super()
		Scripts('/assets/app/js/form-controls.js')
        Scripts('/assets/app/js/bootstrap-select.js')
        Scripts('/assets/app/js/bootstrap-datepicker.js')
    }
    onSubmit(e){
        const user = {
            "donation_type": this.refs.donation_type.value,
            "firstname": this.refs.fname.value,
            "lastname": this.refs.lname.value,
            "mobile": this.refs.mobile.value,
            "home": this.refs.home.value,
            "age": this.refs.age.value,
            "sex": this.refs.sex.value
        }
        console.log(user)
        this.createUser(user)/
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <div className="m-content">
                    <div className="m-portlet">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <span className="m-portlet__head-icon">
                                        <i className="la la-registered"></i>
                                    </span>
                                    <h3 className="m-portlet__head-text">Donation Register</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--begin::Form--> */}
                        <form onSubmit={this.onSubmit.bind(this)} className="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed" id="user_form">
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
                                        <label>Donation Type *</label>
                                        <select ref="donation_type" name="type" className="form-control m-bootstrap-select m_selectpicker">
                                            <option selected className="m--hide">select donotion type</option>
                                            <option value="Family">Family</option>
                                            <option value="Valuntary">Voluntary</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>First Name *</label>
                                        <input ref="fname" type="text" name="fname" className="form-control m-input" placeholder="Enter first name" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Last Name *</label>
                                        <input ref="lname" type="text" class="form-control m-input" name="lname" placeholder="Enter last name"/>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label className="">Age *</label>
                                        <input ref="age" type="text" class="form-control m-input" name="age" placeholder="Enter age"/>
                                    </div>
                                    <div className="col-lg-4 date">
                                        <label>Date of Birth</label>
                                        <input ref="dob" type="text" name="dob" class="form-control" id="m_datepicker_1_modal" readonly placeholder="Select date"/>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Sex *</label>
                                        <select ref="sex" name="sex" className="form-control m-bootstrap-select m_selectpicker">
                                            <option selected className="m--hide">select sex</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Address *</label>
                                        <input ref="address" type="text" name="address" className="form-control m-input" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Mobile no *</label>
                                        <input ref="mobile" type="text" name="mobile" className="form-control m-input" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Home no *</label>
                                        <input ref="home" type="text" name="home" className="form-control m-input" />
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon">
                                                        <i className="la la-registered"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">Approprite answer Checked(Yes/No)</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* questions */}
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-6">
                                        <div class="m-form__group form-group">
                                            <label>Have you donated blood earlier?</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="m-form__group form-group">
                                            <label class="">If yes, date of last donation</label>
                                            <input ref="last-donation" type="text" name="last_donation" class="form-control" id="m_datepicker_2_modal" readonly placeholder="Select date"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-9">
                                        <div class="m-form__group form-group">
                                            <label>Do you feel well today *</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="m-form__group form-group">
                                            <div class="m-radio-inline">
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q1" type="radio" name="q1" value="yes"/> Yes
                                                <span></span>
                                                </label>
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q1" type="radio" name="q1" value="no"/> No
                                                <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-9">
                                        <div class="m-form__group form-group">
                                            <label>Do you have something to eat in the last 4 hours ? *</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="m-form__group form-group">
                                            <div class="m-radio-inline">
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q2" type="radio" name="q2" value="yes"/> Yes
                                                <span></span>
                                                </label>
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q2" type="radio" name="q2" value="no"/> No
                                                <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-9">
                                        <div class="m-form__group form-group">
                                            <label>Do you sleep well last night? *</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="m-form__group form-group">
                                            <div class="m-radio-inline">
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q3" type="radio" name="q3" value="yes"/> Yes
                                                <span></span>
                                                </label>
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q3" type="radio" name="q3" value="no"/> No
                                                <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-9">
                                        <div class="m-form__group form-group">
                                            <label>Have you any reason to believe that you may be infected by either <strong>Hepatitis, </strong> <strong>Malaria, </strong> <strong>HIV/AIDS, </strong> and/or <strong>Veneral disease? </strong> *</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="m-form__group form-group">
                                            <div class="m-radio-inline">
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q4" type="radio" name="q4" value="yes"/> Yes
                                                <span></span>
                                                </label>
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q4" type="radio" name="q4" value="no"/> No
                                                <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-9">
                                        <div class="m-form__group form-group">
                                            <label>If any others</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="m-form__group form-group">
                                            <div class="m-radio-inline">
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q5" type="radio" name="q5" value="yes"/> Yes
                                                <span></span>
                                                </label>
                                                <label class="m-radio m-radio--check-bold m-radio--state-brand">
                                                <input ref="q5" type="radio" name="q5" value="no"/> No
                                                <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon">
                                                        <i className="la la-registered"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">Genaral Physical Examination</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label className="">Weight</label>
                                        <input ref="weight" type="text" class="form-control m-input" name="weight" placeholder="Weight"/>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Pulse</label>
                                        <input ref="pulse" type="text" class="form-control m-input" name="pulse" placeholder="Pulse"/>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">BP (mm of Hg)</label>
                                        <input ref="bp" type="text" class="form-control m-input" name="bp" placeholder="BP"/>
                                    </div>
                                </div>

                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label className="">Temperature</label>
                                        <input ref="temperature" type="text" class="form-control m-input" name="temperature" placeholder="Temperature"/>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Hb (gm/dl)</label>
                                        <input ref="hb" type="text" class="form-control m-input" name="hb" placeholder="HB"/>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Technique</label>
                                        <input ref="technique" type="text" class="form-control m-input" name="technique" placeholder="Technique"/>
                                    </div>
                                </div>
                                {/* button */}
                                <div className="form-group m-form__group row">
                                    <div className="row">
                                    <div className="col-lg-8">
                                        <input type="submit" className="btn btn-primary" value="Submit"/>
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

export default Donation;