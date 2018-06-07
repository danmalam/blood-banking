import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn"><i className="la la-close"></i></button>
                <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
                    <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="0" m-menu-dropdown-timeout="500">
                        <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
                            <li className="m-menu__item  m-menu__item--active" aria-haspopup="true">
                                <Link to="/" className="m-menu__link ">
                                    <i className="m-menu__link-icon flaticon-line-graph"></i>
                                    <span className="m-menu__link-title">
                                        <span className="m-menu__link-wrap">
                                            <span className="m-menu__link-text">Dashboard</span>
                                            <span className="m-menu__link-badge">
                                                {/* <span className="m-badge m-badge--danger"></span> */}
                                            </span>
                                        </span>
                                    </span>
                                </Link>
                            </li>

                            <li className="m-menu__section ">
                                <h4 className="m-menu__section-text">Menu List</h4>
                                <i className="m-menu__section-icon flaticon-more-v3"></i>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon flaticon-avatar"></i>
                                    <span className="m-menu__link-text">User Management</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/users/register" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Create New User</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/users/list" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Users List</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/users/activity" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Users Activity</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon socicon-envato"></i>
                                    <span className="m-menu__link-text">Blood Donation</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/donation/register" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Donation Register</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/donation/camps" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Camps Donation</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/donation/list" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Donation List</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon socicon-buffer"></i>
                                    <span className="m-menu__link-text">Blood Banking</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/bank/store" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Stored Blood</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/bank/available" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Available Blood</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/bank/reject" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Rejected Blood</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon socicon-pocket"></i>
                                    <span className="m-menu__link-text">Blood Request</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/request/blood" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Blood Request</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/request/list" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Blood Request List</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon socicon-pinterest"></i>
                                    <span className="m-menu__link-text">Patients</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/patient/register" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">New Patients</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/patient/list" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Patients List</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon socicon-draugiem"></i>
                                    <span className="m-menu__link-text">Camps</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/camp/register" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Camp Register</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="/dashboard/camp/list" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Camps List</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="m-menu__section ">
                                <h4 className="m-menu__section-text">Tools</h4>
                                <i className="m-menu__section-icon flaticon-more-v3"></i>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon flaticon-settings"></i>
                                    <span className="m-menu__link-text">Settings</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Language</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Employees</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon socicon-disqus"></i>
                                    <span className="m-menu__link-text">Database</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                                <div className="m-menu__submenu ">
                                    <span className="m-menu__arrow"></span>
                                    <ul className="m-menu__subnav">
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Backup</span>
                                            </Link>
                                        </li>
                                        <li className="m-menu__item " aria-haspopup="true">
                                            <Link to="" className="m-menu__link ">
                                                <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                                    <span></span>
                                                </i>
                                                <span className="m-menu__link-text">Restore</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="m-menu__section ">
                                <h4 className="m-menu__section-text">Contact Support</h4>
                                <i className="m-menu__section-icon flaticon-more-v3"></i>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="/about" target="_BLANK" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon socicon-periscope"></i>
                                    <span className="m-menu__link-text">About</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                            </li>

                            <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                                <Link to="/social-networks" target="_BLANK" className="m-menu__link m-menu__toggle">
                                    <i className="m-menu__link-icon socicon-draugiem"></i>
                                    <span className="m-menu__link-text">Connect me</span>
                                    <i className="m-menu__ver-arrow la la-angle-right"></i>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;