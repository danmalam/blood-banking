import React, { Component } from 'react';

class HHMenu extends Component {
    render() {
        return (
            <div>
                <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn">
                    <i className="la la-close"></i>
                </button>
                <div id="m_header_menu" className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
                <ul className="m-menu__nav  m-menu__nav--submenu-arrow ">
                {/* Empty */}
                </ul>
                </div>
            </div>
        )
    }
}

export default HHMenu;