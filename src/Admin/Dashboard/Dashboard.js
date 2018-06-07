import React, { Component } from 'react';
import SubHeader from './SubHeader';
import Statistics from './Widgets/Statistics';
import Camps from './Widgets/Camps';
import Calendar from './Widgets/Calendar';
import Scripts from '../Script';
import Styles from '../Style';

class Dashboard extends Component {
	constructor() {
		super()
		Styles('/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css');
		Scripts('/assets/vendors/custom/fullcalendar/fullcalendar.bundle.js')
		Scripts('/assets/app/js/dashboard.js')
	}
	render() {
		return (
			<div>
				{/* // BEGIN: Subheader */}
				<SubHeader />
				{/* // END: Subheader */}
				<div className="m-content">
					<Statistics />
					<Camps />
					<Calendar />
				</div>
			</div>
		)
	}
}

export default Dashboard;