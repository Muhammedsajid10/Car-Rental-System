import React, { useState } from 'react';
import axios from 'axios';
import './ReservationForm.css';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';

const ReservationForm = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState({
    vehicleId: carId,
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleReservationSubmit = async (e) => {
    e.preventDefault();

    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const token = userInfo.token;

      const response = await axios.post('http://localhost:5000/make-reservation', reservationData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Reservation Response:', response.data);

      Swal.fire({
        title: 'Success',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });


      navigate('/');
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Vehicle is not available for the specified period.',
        icon: 'error',
      });

      console.error('Reservation Error:', error);
    }
  };

  return (
    <form onSubmit={handleReservationSubmit}>
      <label>
        Vehicle ID:
        <input
          type="text"
          name="vehicleId"
          value={reservationData.vehicleId}
          onChange={handleInputChange}
          readOnly
        />
      </label>
      <br />
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={reservationData.startDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={reservationData.endDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;
