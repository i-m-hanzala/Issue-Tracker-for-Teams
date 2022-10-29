import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/"/>
        <Route element={<Login />} path="login"/>
        <Route element={<Header />} path="header"/>
        <Route element={<Signup />} path="signup"/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
