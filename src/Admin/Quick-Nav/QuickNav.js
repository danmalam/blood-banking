import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuickNav extends Component {
  render() {
    return (
      <ul className="m-nav-sticky">
        <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Settings" data-placement="left">
          <Link to=""><i className="la la-cog"></i></Link>
        </li>
        <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Social Media" data-placement="left">
          <Link to="" ><i className="la la-comments-o"></i></Link>
        </li>
       
        <li className="m-nav-sticky__item" data-toggle="m-tooltip" title="Support" data-placement="left">
          <Link to="" target="_blank"><i className="la la-life-ring"></i></Link>
        </li>
      </ul>
    )
  }
}

export default QuickNav;