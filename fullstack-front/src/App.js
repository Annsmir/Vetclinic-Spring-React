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
import Auth from './auth/Auth';
import Patients from './pages/Patients';
import AddPatient from './patients/AddPatient';
import EditPatient from './patients/EditPatient';
import ViewPatient from './patients/ViewPatient';

function App() {
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

          <Route exact path="/doctors" element={<Doctors />} />

          <Route exact path="/patients" element={<Patients />} />
          <Route exact path="add_patient" element={<AddPatient />} />
          <Route exact path='/editpatient/:id' element={<EditPatient/>} />
          <Route exact path="/view_patient/:id" element={<ViewPatient />} />

          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
