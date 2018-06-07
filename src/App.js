import React from 'react';
import Main from './Admin/Main';
import Header from './Admin/Header/Header';
import Sidebar from './Admin/Sidebar/Sidebar';
import QuickNav from './Admin/Quick-Nav/QuickNav';
import Footer from './Admin/Footer/Footer';

const App = () => (

  <div className="m-grid m-grid--hor m-grid--root m-page">
    <Header/>
    <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
      {/* <!-- BEGIN: Left Aside --> */}
        <Sidebar/>
      {/* <!-- END: Left Aside -->							 */}
      <div className="m-grid__item m-grid__item--fluid m-wrapper">
        <Main/>
      </div>
    </div>
    <Footer/>

    <div id="m_scroll_top" className="m-scroll-top">
      <i className="la la-arrow-up"></i>
    </div>
    <QuickNav/>
  </div>

)

export default App;
