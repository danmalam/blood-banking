import React, { Component } from 'react';
import Scripts from '../Script';

class UserActivity extends Component {
    constructor() {
        super()
        Scripts('/assets/app/js/user-activity.js')
    }
    render() {
        return (
            <div>
                <div class="m-content">
                    <div class="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible m--margin-bottom-30" role="alert">
                        <div class="m-alert__icon">
                            <i class="flaticon-exclamation m--font-primary"></i>
                        </div>
                        <div class="m-alert__text">
                            The Metronic Datatable component supports local or remote data source. For remote data you can specify a remote data source
                            that returns data in JSON/JSONP format. In this example the grid fetches its data from a remote JSON file. It
                            also defines the schema model of the data source received from the remote data source. In addition to the visualization,
                            the Datatable provides built-in support for operations over data such as sorting, filtering and paging performed
                            in user browser(frontend).
                        </div>
                    </div>

                    <div class="m-portlet m-portlet--mobile">
                        <div class="m-portlet__head">
                            <div class="m-portlet__head-caption">
                                <div class="m-portlet__head-title">
                                    <h3 class="m-portlet__head-text">
                                        Users Activity <small>show all users activities</small>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="m-portlet__body">

                            <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
                                <div class="row align-items-center">
                                    <div class="col-xl-8 order-2 order-xl-1">
                                        <div class="form-group m-form__group row align-items-center">
                                            <div class="col-md-4">
                                                <div class="m-form__group m-form__group--inline">
                                                    <div class="m-form__label">
                                                        <label>Role:</label>
                                                    </div>
                                                    <div class="m-form__control">
                                                        <select class="form-control m-bootstrap-select" id="m_form_status">
                                                            <option value="">All</option>
                                                            <option value="1">Admin</option>
                                                            <option value="2">Others</option>
                                                            <option value="3">Canceled</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="d-md-none m--margin-bottom-10"></div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="m-input-icon m-input-icon--left">
                                                    <input type="text" class="form-control m-input" placeholder="Search..." id="generalSearch" />
                                                    <span class="m-input-icon__icon m-input-icon__icon--left">
                                                        <span>
                                                            <i class="la la-search"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 order-1 order-xl-2 m--align-right">
                                        <a href="" class="btn btn-primary m-btn m-btn--custom m-btn--icon m-btn--air m-btn--pill">
                                            <span>
                                                <i class="la la-print"></i>
                                                <span>Print</span>
                                            </span>
                                        </a>
                                        <div class="m-separator m-separator--dashed d-xl-none"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="m_datatable" id="ajax_data"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserActivity;