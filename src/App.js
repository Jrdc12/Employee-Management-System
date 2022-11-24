import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewEmployee from './pages/NewEmployee';
import PrivateRoute from './components/PrivateRoute';
import Employees from './pages/Employees';
import Employee from './pages/Employee';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/new-employee' element={<PrivateRoute />}>
              <Route path='/new-employee' element={<NewEmployee />} />
            </Route>
            <Route path='/employees' element={<PrivateRoute />}>
              <Route path='/employees' element={<Employees />} />
            </Route>
            <Route path='/employee/:employeeId' element={<PrivateRoute />}>
              <Route path='/employee/:employeeId' element={<Employee />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
