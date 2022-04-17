import './App.css';
// store
import { Provider } from 'react-redux';
import store from './redux/store';
// components
import About from './components/About';
import Home from './components/Home';
import Employees from './components/Employees';
import Header from './components/Header';
import Login from './components/Login';
import EmployeeDetails from './components/EmployeeDetails';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employedetails" element={<EmployeeDetails />} />
      </Routes>
    </Provider>

  );
}

export default App;
