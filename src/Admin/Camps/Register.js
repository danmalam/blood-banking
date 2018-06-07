import React, { Component } from 'react';
import Scripts from '../Script';

class CampsRegister extends Component {
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
                                    <span className="m-portlet__head-icon">
                                        <i className="la la-users"></i>
                                    </span>
                                    <h3 className="m-portlet__head-text">Camp Register</h3>
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
                                        <label>Camp Name *</label>
                                        <input type="text" name="cname" className="form-control m-input" placeholder="Enter camp name" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Camp Current President *</label>
                                        <input type="text" name="president" className="form-control m-input" placeholder="Enter president name" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Contact's no *</label>
                                        <input type="text" name="contact" className="form-control m-input" placeholder="Enter contact no" />
                                    </div>                                
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Address </label>
                                        <input type="text" name="address" className="form-control m-input" placeholder="Enter camp address" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Camp Motto's</label>
                                        <input type="text" name="motto" className="form-control m-input" placeholder="Enter camp motto" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Upload logo</label>
                                        <input type="file" name="logo" className="form-control m-input" />
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

export default CampsRegister;