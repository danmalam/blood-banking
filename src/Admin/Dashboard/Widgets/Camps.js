import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Camps extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xl-8">
                    {/* <!--begin:: Widgets/Best Sellers--> */}
                    <div className="m-portlet m-portlet--full-height ">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">Latest Camps</h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            {/* <!--begin::Content--> */}
                            <div className="tab-content">
                                <div className="tab-pane active" id="m_widget5_tab1_content" aria-expanded="true">
                                    {/* <!--begin::m-widget5--> */}
                                    <div className="m-widget5">
                                        <div className="m-widget5__item">
                                            <div className="m-widget5__pic">
                                                <img className="m-widget7__img" src="assets/app/media/img/products/product6.jpg" alt="" />
                                            </div>
                                            <div className="m-widget5__content">
                                                <h4 className="m-widget5__title">Camps Group A</h4>
                                                <span className="m-widget5__desc">Make Metronic Great  Again.Lorem Ipsum Amet</span>
                                                <div className="m-widget5__info">
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="m-widget5__stats2">
                                                <span className="m-widget5__number">1046</span><br />
                                                <span className="m-widget5__votes">Members</span>
                                            </div>
                                        </div>
                                        <div className="m-widget5__item">
                                            <div className="m-widget5__pic">
                                                <img className="m-widget7__img" src="assets/app/media/img/products/product10.jpg" alt="" />
                                            </div>
                                            <div className="m-widget5__content">
                                                <h4 className="m-widget5__title">Camps Group B</h4>
                                                <span className="m-widget5__desc">Make Metronic Great  Again.Lorem Ipsum Amet</span>
                                                <div className="m-widget5__info">
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="m-widget5__stats2">
                                                <span className="m-widget5__number">230</span><br />
                                                <span className="m-widget5__votes">Members</span>
                                            </div>
                                        </div>
                                        <div className="m-widget5__item">
                                            <div className="m-widget5__pic">
                                                <img className="m-widget7__img" src="assets/app/media/img/products/product11.jpg" alt="" />
                                            </div>
                                            <div className="m-widget5__content">
                                                <h4 className="m-widget5__title">Camps Group C</h4>
                                                <span className="m-widget5__desc">Make Metronic Great  Again.Lorem Ipsum Amet</span>
                                                <div className="m-widget5__info">
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div className="m-widget5__stats2">
                                                <span className="m-widget5__number">164</span><br />
                                                <span className="m-widget5__votes">Members</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end::m-widget5--> */}
                                </div>
                            </div>
                            {/* <!--end::Content--> */}
                        </div>
                    </div>
                    {/* <!--end:: Widgets/Best Sellers-->   */}
                </div>
                <div className="col-xl-4">
                    {/* <!--begin:: Widgets/Authors Profit--> */}
                    <div className="m-portlet m-portlet--bordered-semi m-portlet--full-height ">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">Available Blood in Bank</h3>
                                </div>
                            </div>
                            <div className="m-portlet__head-tools">
                                <ul className="m-portlet__nav">
                                    <li className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover">
                                        <Link to="" className="m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand">All</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            <div className="m-widget4">
                                <div className="m-widget4__item">
                                    <div className="m-widget4__img m-widget4__img--logo">
                                        <img src="/assets/app/media/img/client-logos/bloodbag.png" alt="" />
                                    </div>
                                    <div className="m-widget4__info">
                                        <span className="m-widget4__title">Blood Type <strong>O+</strong></span><br />
                                        <span className="m-widget4__sub">Western East Blood Bank</span>
                                    </div>
                                    <span className="m-widget4__ext">
                                        <span className="m-widget4__number m--font-brand">102</span>
                                    </span>
                                </div>
                                <div className="m-widget4__item">
                                    <div className="m-widget4__img m-widget4__img--logo">
                                        <img src="/assets/app/media/img/client-logos/bloodbag.png" alt="" />
                                    </div>
                                    <div className="m-widget4__info">
                                        <span className="m-widget4__title">Blood Type <strong>O-</strong></span><br />
                                        <span className="m-widget4__sub">Western East Blood Bank</span>
                                    </div>
                                    <span className="m-widget4__ext">
                                        <span className="m-widget4__number m--font-brand">90</span>
                                    </span>
                                </div>
                                <div className="m-widget4__item">
                                    <div className="m-widget4__img m-widget4__img--logo">
                                        <img src="/assets/app/media/img/client-logos/bloodbag.png" alt="" />
                                    </div>
                                    <div className="m-widget4__info">
                                        <span className="m-widget4__title">Blood Type <strong>A+</strong></span><br />
                                        <span className="m-widget4__sub">Western East Blood Bank</span>
                                    </div>
                                    <span className="m-widget4__ext">
                                        <span className="m-widget4__number m--font-brand">17</span>
                                    </span>
                                </div>
                                <div className="m-widget4__item">
                                    <div className="m-widget4__img m-widget4__img--logo">
                                        <img src="/assets/app/media/img/client-logos/bloodbag.png" alt="" />
                                    </div>
                                    <div className="m-widget4__info">
                                        <span className="m-widget4__title">Blood Type <strong>A-</strong></span><br />
                                        <span className="m-widget4__sub">Western East Blood Bank</span>
                                    </div>
                                    <span className="m-widget4__ext">
                                        <span className="m-widget4__number m--font-brand">50</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end:: Widgets/Authors Profit-->   */}
                </div>
            </div>
        )
    }
}

export default Camps;