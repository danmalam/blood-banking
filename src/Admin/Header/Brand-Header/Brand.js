import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Brand extends Component {
    render() {
        return (
            <div className="m-stack__item m-brand  m-brand--skin-dark ">
                <div className="m-stack m-stack--ver m-stack--general">
                    <div className="m-stack__item m-stack__item--middle m-brand__logo">
                        <Link to="/" className="m-brand__logo-wrapper">
                        <img alt="" src="/assets/demo/default/media/img/logo/logo_default_dark.png"/>
                        </Link>  
                    </div>
                    <div className="m-stack__item m-stack__item--middle m-brand__tools">              
                            {/* <!-- BEGIN: Left Aside Minimize Toggle --> */}
                            <Link to="" id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block">
                                <span></span>
                            </Link>
                            {/* <!-- END --> */}
                        
                            {/* BEGIN: Responsive Aside Left Menu Toggler --> */}
                            <Link to="" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                                <span></span>
                            </Link>
                            {/* END */}
                            {/* BEGIN: Responsive Header Menu Toggler */}
                            <Link to="" id="m_aside_header_menu_mobile_toggle" className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block">
                                <span></span>
                            </Link>
                            {/* END */}
                                
                        {/* BEGIN: Topbar Toggler */}
                        <Link to="" id="m_aside_header_topbar_mobile_toggle" className="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                            <i className="flaticon-more"></i>
                        </Link>
                        {/* BEGIN: Topbar Toggler */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Brand;