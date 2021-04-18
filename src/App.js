import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddReview from "./components/Admin/AddReview/AddReview";
import AddServices from "./components/Admin/AddServices/AddServices";
import Admin from "./components/Admin/Admin/Admin";
import Book from "./components/Admin/Book/Book";
import BookingList from "./components/Admin/BookingList/BookingList";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./components/Admin/ManageService/ManageService";
import OrderLists from "./components/Admin/OrderLists/OrderLists";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
             <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/addServices">
              <AddServices/>
            </PrivateRoute>
            <PrivateRoute path="/addReview">
              <AddReview/>
            </PrivateRoute>
            <PrivateRoute path="/bookingList">
              <BookingList/>
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <OrderLists/>
            </PrivateRoute>
            <PrivateRoute path="/manageService">
              <ManageService/>
            </PrivateRoute>
            <Route path="/book">
              <Home/>
            </Route>
            <PrivateRoute path="/book/:id">
              <Book></Book>
            </PrivateRoute>
            {/* <Route path="/appointment">
              <Appointment />
            </Route>
            <PrivateRoute path="/dashboard/appointment">
              <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
            <PrivateRoute path="/dashboard/prescriptions">
            <Prescriptions/>
          </PrivateRoute>
            <PrivateRoute path="/dashboard/addDoctor">
            <AddDoctor/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <OverAllAppointmentDashboard/>
          </PrivateRoute> */}
            <Route path="/login">
            <Login></Login>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
