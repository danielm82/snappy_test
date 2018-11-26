import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserForm from './UserForm';
import AdminView from './AdminView';

const INPUTS = [
    {
        name: 'fname',
        label: 'First Name',
        type: 'text'
    },
    {
        name: 'lname',
        label: 'Last Name',
        type: 'text'
    },
    {
        name: 'address',
        label: 'Address',
        type: 'text'
    },
    {
        name: 'zipcode',
        label: 'Zipcode',
        type: 'text'
    },
    {
        name: 'city',
        label: 'City',
        type: 'text'
    },
    {
        name: 'state',
        label: 'State',
        type: 'text'
    },
    {
        name: 'email',
        label: 'Mail Address',
        type: 'email'
    },
    {
        name: 'phone',
        label: 'Phone Number',
        type: 'phone'
    }
];

const TITLE = "Shipping Address";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>

      <Route path="/form" render={() => <UserForm inputs={INPUTS} title={TITLE} />}/>
      <Route path="/admin" render={() => <AdminView columns={INPUTS}/>}/>
    </div>
  </Router>
);

export default AppRouter;