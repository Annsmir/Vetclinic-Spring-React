import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Visits from './pages/Visits';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddVisit from './visits/AddVisit';
import EditVisit from './visits/EditVisit';
import ViewVisit from './visits/ViewVisit';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import Patients from './pages/Patients';
import AddPatient from './patients/AddPatient';
import EditPatient from './patients/EditPatient';
import ViewPatient from './patients/ViewPatient';
import Owners from './pages/Owners';
import AddOwner from './owners/AddOwner';
import EditOwner from './owners/EditOwner';
import ViewOwner from './owners/ViewOwner';
import React, {useEffect, useState} from "react";
import Login from './auth/login';
import Register from './auth/register';
import Profile from './auth/profile';
import MyPatients from './pages/MyPatients';
import MyVisits from './pages/MyVisits';
import Contacts from './pages/Contacts';
import ViewVisitUser from './visits/ViewVisit_user';
import ViewPatientUser from './patients/ViewPatient_user';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />

          <Route exact path="/visits" element={<Visits />} />
          <Route exact path="add_visit" element={<AddVisit />} />
          <Route exact path='/editvisit/:id' element={<EditVisit />} />
          <Route exact path="/view_visit/:id" element={<ViewVisit />} />
          <Route exact path="/view_visit_user/:id" element={<ViewVisitUser />} />

          <Route exact path="/doctors" element={<Doctors />} />
          <Route exact path="/contacts" element={<Contacts />} />

          <Route exact path="/patients" element={<Patients />} />
          <Route exact path="add_patient" element={<AddPatient />} />
          <Route exact path='/editpatient/:id' element={<EditPatient/>} />
          <Route exact path="/view_patient/:id" element={<ViewPatient />} />
          <Route exact path="/view_patient_user/:id" element={<ViewPatientUser />} />

          <Route exact path="/owners" element={<Owners/>} />
          <Route exact path="add_owner" element={<AddOwner/>} />
          <Route exact path='/editowner/:id' element={<EditOwner/>} />
          <Route exact path="/view_owner/:id" element={<ViewOwner />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path='/profile' element={<Profile/>}/>

          <Route exact path='/my_patients' element={< MyPatients />}/>
          <Route exact path='/my_visits' element={< MyVisits />}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
