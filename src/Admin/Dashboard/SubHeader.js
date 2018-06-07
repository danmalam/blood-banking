import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubHeader extends Component {
    render() {
        return (
            <div className="m-subheader ">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h3 className="m-subheader__title ">Dashboard</h3>
                    </div>
                    <div>
                        <span className="m-subheader__daterange" id="m_dashboard_daterangepicker">
                            <span className="m-subheader__daterange-label">
                                <span className="m-subheader__daterange-title"></span>
                                <span className="m-subheader__daterange-date m--font-brand"></span>
                            </span>
                            <Link to="" className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill">
                                <i className="la la-angle-down"></i>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubHeader;