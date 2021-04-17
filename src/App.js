import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AddReview from "./components/Admin/AddReview/AddReview";
import AddServices from "./components/Admin/Admin/AddServices/AddServices";
import Admin from "./components/Admin/Admin/Admin";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
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
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/addServices">
              <AddServices/>
            </Route>
            <Route path="/addReview">
              <AddReview/>
            </Route>
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
