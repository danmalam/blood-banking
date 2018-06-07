import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
// import users components
import CreateUser from './Users/CreateUser';
import UserList from './Users/UserLIst';
import UserActivity from './Users/UserActivity';
// import donation components
import Donation from './Donation/Donation';
import DonationList from './Donation/List';
import CampsDonation from './Camps/Donor';
// import blood bank components
import AvailableBlood from './Banks/Available';
import StoredBlood from './Banks/StoredBlood';
import RejectedBlood from './Banks/Reject';
// import blood request components
import BloodRequest from './Request/BloodRequest';
import RequestList from './Request/RequestList';
// import patient components
import PatientRegister from './Patients/Register';
import PatientList from './Patients/List';
// import camps components
import CampsRegister from './Camps/Register';
import CampsList from './Camps/CampsList';



const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            {/* user route */}
            <Route exact path="/dashboard/users/register" component={CreateUser} />
            <Route exact path="/dashboard/users/list" component={UserList} />
            <Route exact path="/dashboard/users/activity" component={UserActivity} />
            {/* donation route */}
            <Route exact path="/dashboard/donation/register" component={Donation} />
            <Route exact path="/dashboard/donation/camps" component={CampsDonation} />
            <Route exact path="/dashboard/donation/list" component={DonationList} />
            {/* blood bank route */}
            <Route exact path="/dashboard/bank/available" component={AvailableBlood} />
            <Route exact path="/dashboard/bank/store" component={StoredBlood} />
            <Route exact path="/dashboard/bank/reject" component={RejectedBlood} />
            {/* blood request route */}
            <Route exact path="/dashboard/request/blood" component={BloodRequest} />
            <Route exact path="/dashboard/request/list" component={RequestList} />
            {/* patient route */}
            <Route exact path="/dashboard/patient/register" component={PatientRegister} />
            <Route exact path="/dashboard/patient/list" component={PatientList} />
            {/* camps route */}
            <Route exact path="/dashboard/camp/register" component={CampsRegister} />
            <Route exact path="/dashboard/camp/list" component={CampsList} />
            
        </Switch>
    </main>
)

export default Main;