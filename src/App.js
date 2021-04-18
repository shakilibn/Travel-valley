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
import Services from './components/Home/Services/Services';
import Guide from './components/Home/Guide/Guide';
import FeaturedService from './components/Home/FeaturedService/FeaturedService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    image: '',
    isAdmin: false
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

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/book">
            <MakeBooking />
          </PrivateRoute>

          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>

          <PrivateRoute path="/review">
            <MakeReview />
          </PrivateRoute>

          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>

          <PrivateRoute path="/addGuide">
            <AddGuide />
          </PrivateRoute>

          <PrivateRoute path="/addDestination">
            <AddDestination />
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>

          <PrivateRoute path="/manageServices">
            <ManageServices />
          </PrivateRoute>

          <PrivateRoute path="/service/:serviceId">
            <MakeBooking />
          </PrivateRoute>

          <Route path="/services">
            <Services />
          </Route>

          <Route path="/travel-guide">
            <Guide />
          </Route>

          <Route path="/feature">
            <FeaturedService />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
