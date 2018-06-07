import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Topbar extends Component {
    render() {
        return (
            <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid">
                <div className="m-stack__item m-topbar__nav-wrapper">
                    <ul className="m-topbar__nav m-nav m-nav--inline">
                        <li className="m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light	m-list-search m-list-search--skin-light" m-dropdown-toggle="click" id="m_quicksearch" m-quicksearch-mode="dropdown" m-dropdown-persistent="1">
                            <Link to="/" className="m-nav__link m-dropdown__toggle">
                                <span className="m-nav__link-icon">
                                    <i className="flaticon-search-1"></i>
                                </span>
                            </Link>
                            <div className="m-dropdown__wrapper">
                                <span className="m-dropdown__arrow m-dropdown__arrow--center"></span>
                                <div className="m-dropdown__inner ">
                                    <div className="m-dropdown__header">
                                        <form className="m-list-search__form">
                                            <div className="m-list-search__form-wrapper">
                                                <span className="m-list-search__form-input-wrapper">
                                                    <input id="m_quicksearch_input" autoComplete="off" type="text" name="q" className="m-list-search__form-input" value="" placeholder="Search..." />
                                                </span>
                                                <span className="m-list-search__form-icon-close" id="m_quicksearch_close">
                                                    <i className="la la-remove"></i>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="m-dropdown__body">
                                        <div className="m-dropdown__scrollable m-scrollable" data-scrollable="true" data-max-height="300" data-mobile-max-height="200">
                                            <div className="m-dropdown__content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light"
                            m-dropdown-toggle="click">
                            <Link to="" className="m-nav__link m-dropdown__toggle">
                                <span className="m-topbar__userpic">
                                    <img src="/assets/app/media/img/users/user6.jpg" className="m--img-rounded m--marginless m--img-centered" alt="" />
                                </span>
                                <span className="m-topbar__username m--hide">Nick</span>
                            </Link>
                            <div className="m-dropdown__wrapper">
                                <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                                <div className="m-dropdown__inner">
                                    <div className="m-dropdown__header m--align-center" style={{backgroundImage: 'url("/assets/app/media/img/misc/user_profile_bg.jpg")', backgroundSize: 'cover'}}>
                                        <div className="m-card-user m-card-user--skin-dark">
                                            <div className="m-card-user__pic">
                                                <img src="/assets/app/media/img/users/user6.jpg" className="m--img-rounded m--marginless" alt="" />
                                            </div>
                                            <div className="m-card-user__details">
                                                <span className="m-card-user__name m--font-weight-500">Adamu Mallam Haruna</span>
                                                <Link to="" className="m-card-user__email m--font-weight-300 m-link">danmalam66@gmail.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-dropdown__body">
                                        <div className="m-dropdown__content">
                                            <ul className="m-nav m-nav--skin-light">
                                                <li className="m-nav__section m--hide">
                                                    <span className="m-nav__section-text">Section</span>
                                                </li>
                                                <li className="m-nav__item">
                                                    <Link to="" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-profile-1"></i>
                                                        <span className="m-nav__link-title">
                                                            <span className="m-nav__link-wrap">
                                                                <span className="m-nav__link-text">My Profile</span>
                                                            </span>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className="m-nav__item">
                                                    <Link to="" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-share"></i>
                                                        <span className="m-nav__link-text">Activity</span>
                                                    </Link>
                                                </li>
                                                <li className="m-nav__item">
                                                    <Link to="" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-chat-1"></i>
                                                        <span className="m-nav__link-text">Messages</span>
                                                    </Link>
                                                </li>
                                                <li className="m-nav__separator m-nav__separator--fit">
                                                </li>
                                                <li className="m-nav__separator m-nav__separator--fit">
                                                </li>
                                                <li className="m-nav__item">
                                                    <Link to="" className="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Topbar;