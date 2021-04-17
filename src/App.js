import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MakeBooking from './components/Dashboard/MakeBooking/MakeBooking';
import Menubar from './components/shared/Menubar/Menubar';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import BookingList from './components/Dashboard/BookingList/BookingList';
import MakeReview from './components/Dashboard/MakeReview/MakeReview';
import OrderList from './components/Dashboard/OrderList/OrderList';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import AddGuide from './components/Dashboard/AddGuide/AddGuide';
import AddDestination from './components/Dashboard/AddDestination/AddDestination';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    image: ''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Menubar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/book">
            <MakeBooking />
          </Route>

          <Route path="/bookingList">
            <BookingList />
          </Route>

          <Route path="/review">
            <MakeReview />
          </Route>

          <Route path="/orderList">
            <OrderList />
          </Route>

          <Route path="/addService">
            <AddService />
          </Route>

          <Route path="/addGuide">
            <AddGuide />
          </Route>

          <Route path="/addDestination">
            <AddDestination />
          </Route>

          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>

          <Route path="/manageServices">
            <ManageServices />
          </Route>

          <PrivateRoute path="/service/:serviceId">
            <MakeBooking />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
