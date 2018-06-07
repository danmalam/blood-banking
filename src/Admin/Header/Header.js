import React, { Component } from 'react';
import Brand from './Brand-Header/Brand';
import HHMenu from './Header-Horizontal-Menu/HHMenu';
import Topbar from './Topbar/Topbar';

class Header extends Component {
    render() {
        return (
            <header id="m_header" className="m-grid__item    m-header " m-minimize-offset="200" m-minimize-mobile-offset="200" >
                <div className="m-container m-container--fluid m-container--full-height">
                    <div className="m-stack m-stack--ver m-stack--desktop">
                        <Brand />
                        <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
                        <HHMenu />
                        <Topbar />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;