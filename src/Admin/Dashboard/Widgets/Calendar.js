import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Calendar extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-xl-12">
                    {/* <!--begin::Portlet--> */}
                    <div className="m-portlet " id="m_portlet">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <span className="m-portlet__head-icon">
                                        <i className="flaticon-map-location"></i>
                                    </span>
                                    <h3 className="m-portlet__head-text">
                                        Calendar
				                            </h3>
                                </div>
                            </div>
                            <div className="m-portlet__head-tools">
                                <ul className="m-portlet__nav">
                                    <li className="m-portlet__nav-item">
                                        <Link to="" className="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--pill m-btn--air">
                                            <span>
                                                <i className="la la-plus"></i>
                                                <span>Add Event</span>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            <div id="m_calendar"></div>
                        </div>
                    </div>
                    {/* <!--end::Portlet--> */}
                </div>
            </div>
        )
    }
}

export default Calendar;