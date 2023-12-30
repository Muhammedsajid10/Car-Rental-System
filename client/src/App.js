import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singup from './Components/Singup';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import ReservationForm from './Components/ReservationForm';
import Home from './Components/Home';
import HomeCarosal from './Components/HomeCarosal';
import AboutUs from './Components/AboutUs';
import AddVehicleAdm from './Components/AddVehicleAdm';
import Vehicle from './Components/Vehicle';
import GetCarById from './Components/GetCarById'

function App() {

  const [userInfo, setUserInfo] = useState(() => {
    return JSON.parse(localStorage.getItem("userInfo"))
  })

  useEffect(() => {
    localStorage.setItem("userInfo",JSON.stringify(userInfo))
  },[userInfo])


  const [reservationStatus, setReservationStatus] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<><Home/><HomeCarosal/><AboutUs/><Vehicle/></>} />
          <Route path='/singup' element={<Singup/>} />
          <Route path='/login' element={<Login setUserInfo={setUserInfo} />} />
          <Route path='/creatingVeh' element={<AddVehicleAdm/>} />
          <Route path='/CarDetails/:carId' element={<><GetCarById/><ReservationForm/></>} />
         
        </Routes>
      </BrowserRouter>
      <div>{reservationStatus}</div>
    </div>
  );
}

export default App;
