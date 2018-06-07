import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="m-grid__item	m-footer ">
                <div className="m-container m-container--fluid m-container--full-height m-page__container">
                    <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
                        <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
                            <span className="m-footer__copyright">
                                2018 &copy; DMAN TECH  <Link to="" className="m-link">Adamu Mallam Haruna</Link>
                            </span>
                        </div>
                        <div className="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
                            <ul className="m-footer__nav m-nav m-nav--inline m--pull-right">
                                <li className="m-nav__item">
                                    <Link to="" className="m-nav__link">
                                        <span className="m-nav__link-text">About</span>
                                    </Link>
                                </li>
                                <li className="m-nav__item">
                                    <Link to="" className="m-nav__link">
                                        <span className="m-nav__link-text">Privacy</span>
                                    </Link>
                                </li>
                                <li className="m-nav__item m-nav__item">
                                    <Link to="" className="m-nav__link" data-toggle="m-tooltip" title="Support Center" data-placement="left">
                                        <i className="m-nav__link-icon flaticon-info m--icon-font-size-lg3"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;