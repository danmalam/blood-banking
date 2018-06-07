import React, { Component } from 'react';
import Scripts from '../Script';
import axios from 'axios';

class CreateUser extends Component {
    constructor() {
		super()
        // Scripts('/assets/app/js/form-controls.js')
		Scripts('/assets/app/js/bootstrap-select.js')
    }

    createUser(addUser){
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/users',
            data: addUser
        }).then(response => {
            this.props.history.push('/')
        }).catch(err => console.log(err))
    }

    onSubmit(e){
        const user = {
            firstname: this.refs.fname.value,
            lastname: this.refs.lname.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            username: this.refs.username.value,
            sex: this.refs.sex.value
        }
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
                                        <i className="la la-user"></i>
                                    </span>
                                    <h3 className="m-portlet__head-text">Create New User</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!--begin::Form--> */}
                        <form onSubmit={this.onSubmit.bind(this)} className="m-form m-form--fit m-form--label-align-right m-form--group-seperator-dashed" id="user_form">
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
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input type="text" name="fname" ref="fname" className="form-control m-input" placeholder="Enter first name" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Last Name <span className="text-danger">*</span></label>
                                        <input type="text" name="lname" ref="lname" className="form-control m-input" placeholder="Enter last name" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Email <span className="text-danger">*</span></label>
                                        <input type="email" ref="email" className="form-control m-input" name="email" placeholder="Enter your email" data-toggle="m-tooltip" title="Email address require only"/>
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Username <span className="text-danger">*</span></label>
                                        <div className="input-group m-input-group m-input-group--square">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="la la-user"></i></span></div>
                                            <input type="text" name="username" ref="username" className="form-control m-input" placeholder="Enter username" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Password <span className="text-danger">*</span></label>
                                        <input type="password" name="password" ref="password" className="form-control m-input" placeholder="Enter password" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="">Confirm Password <span className="text-danger">*</span></label>
                                        <input type="password" name="cpassword" ref="cpassword" className="form-control m-input" placeholder="Re-type password" />
                                    </div>
                                </div>
                                <div className="form-group m-form__group row">
                                    <div className="col-lg-4">
                                        <label>Role <span className="text-danger">*</span></label>
                                        <select name="role" data-size="5" className="form-control m-bootstrap-select m_selectpicker">
                                            <option defaultValue className="m--hide">select role</option>
                                            <option>Admin</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Sex <span className="text-danger">*</span></label>
                                        <select name="sex" ref="sex" className="form-control m-bootstrap-select m_selectpicker">
                                            <option defaultValue className="m--hide">select sex</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Photo </label>
                                        <input type="file" name="photo" ref="photo" className="form-control m-input" />
                                    </div>
                                </div>
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

export default CreateUser;