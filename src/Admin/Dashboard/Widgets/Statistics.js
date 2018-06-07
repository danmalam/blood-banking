import React, { Component } from 'react';

class Statistics extends Component {
    render() {
        return (
            <div className="m-portlet">
                <div className="m-portlet__body  m-portlet__body--no-padding">
                    <div className="row m-row--no-padding m-row--col-separator-xl">
                        <div className="col-xl-6">
                            {/* {<!--begin:: Widgets/Stats2-1 -->} */}
                            <div className="m-widget1">
                                <div className="m-widget1__item">
                                    <div className="row m-row--no-padding align-items-center">
                                        <div className="col">
                                            <h4 className="m-widget1__title">Voluntery</h4>
                                            <span className="m-widget1__desc">Average Monthly Donation</span>
                                        </div>
                                        <div className="col m--align-right">
                                            <span className="m-widget1__number m--font-brand">+350</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-widget1__item">
                                    <div className="row m-row--no-padding align-items-center">
                                        <div className="col">
                                            <h3 className="m-widget1__title">Camps</h3>
                                            <span className="m-widget1__desc">Average Monthly Donation</span>
                                        </div>
                                        <div className="col m--align-right">
                                            <span className="m-widget1__number m--font-success">+1,800</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-widget1__item">
                                    <div className="row m-row--no-padding align-items-center">
                                        <div className="col">
                                            <h3 className="m-widget1__title">Familiar</h3>
                                            <span className="m-widget1__desc">Average Monthly Donation</span>
                                        </div>
                                        <div className="col m--align-right">
                                            <span className="m-widget1__number m--font-success">+200</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* {<!--end:: Widgets/Stats2-1 -->} */}
                        </div>

                        <div className="col-xl-6">
                            {/* <!--begin:: Widgets/Profit Share--> */}
                            <div className="m-widget14">
                                <div className="m-widget14__header">
                                    <h3 className="m-widget14__title">Blood Donation Statistics</h3>
                                    <span className="m-widget14__desc">This Year Donation Statistics</span>
                                </div>
                                <div className="row  align-items-center">
                                    <div className="col">
                                        <div id="m_chart_profit_share" className="m-widget14__chart" style={{ height: 160 }}>
                                            <div className="m-widget14__stat">6,560</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="m-widget14__legends">
                                            <div className="m-widget14__legend">
                                                <span className="m-widget14__legend-bullet m--bg-accent"></span>
                                                <span className="m-widget14__legend-text">37% Family</span>
                                            </div>
                                            <div className="m-widget14__legend">
                                                <span className="m-widget14__legend-bullet m--bg-warning"></span>
                                                <span className="m-widget14__legend-text">47% Camps</span>
                                            </div>
                                            <div className="m-widget14__legend">
                                                <span className="m-widget14__legend-bullet m--bg-brand"></span>
                                                <span className="m-widget14__legend-text">19% Voluntery</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end:: Widgets/Profit Share--> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Statistics;