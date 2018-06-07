import React, { Component } from 'react';
import Scripts from '../Script';

class RequestList extends Component {
    constructor() {
        super()
        Scripts('/assets/app/js/app.js');
    }
    render() {
        return (
            <div>
                <div className="m-content">
                    <div className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible m--margin-bottom-30" role="alert">
                        <div className="m-alert__icon">
                            <i className="flaticon-exclamation m--font-primary"></i>
                        </div>
                        <div className="m-alert__text">
                            The Metronic Datatable component supports local or remote data source. For remote data you can specify a remote data source
                            that returns data in JSON/JSONP format.
                        </div>
                    </div>

                    <div className="m-portlet m-portlet--mobile">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">
                                        Blood Request List <small>show all list of request</small>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-portlet__body">

                            <div className="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
                                <div className="row align-items-center">
                                    <div className="col-xl-8 order-2 order-xl-1">
                                        <div className="form-group m-form__group row align-items-center">
                                            <div className="col-md-4">
                                                <div className="m-input-icon m-input-icon--left">
                                                    <input type="text" className="form-control m-input" placeholder="Search..." id="generalSearch" />
                                                    <span className="m-input-icon__icon m-input-icon__icon--left">
                                                        <span>
                                                            <i className="la la-search"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 order-1 order-xl-2 m--align-right">
                                        <a href="" className="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill">
                                            <span>
                                                <i className="la la-print"></i>
                                                <span>Print</span>
                                            </span>
                                        </a>
                                        <div className="m-separator m-separator--dashed d-xl-none"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="m_datatable" id="request_data"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestList;