import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/authPages/LoginPage/LoginPage';
import RegisterPage from './components/authPages/RegisterPage/RegisterPage';
import Dashboard from './components/Dashboard/Dashboard';
import AlertNotification from './components/shared/AlertNotification';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/*' element={<Navigate to='/dashboard' />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  );
};

export default App;
