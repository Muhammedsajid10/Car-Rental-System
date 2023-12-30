
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './GetCarById.css'
import { LiaRupeeSignSolid } from 'react-icons/lia';

const GetCarById = () => {
  const [car, setCar] = useState("");
  const { carId } = useParams();

  const fetchCarById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/vehicle-get/${carId}`);
      console.log('getIdcar : ', response.data);
      setCar(response.data);
    } catch (error) {
      console.log('error while fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchCarById();
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    if (!buffer || !buffer.data) {
      return "";
    }

    const binary = new Uint8Array(buffer.data).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binary);
  };


  return (
    <div className='getCarContainer'>
      <div className='getCarImage'>
        <img src={`data:image/jpeg;base64,${arrayBufferToBase64(car.image)}`} alt="Car" />
      </div>
      <div className='getCarDetails'>
        <h3>{car.model}</h3>
        <h6><LiaRupeeSignSolid />{car.rentalCost}/day</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ipsum tempora excepturi harum vitae voluptatibus,,<br /> ratione beatae incidunt quidem adipisci corrupti doloribus possimus exercitationem reprehenderit. Provident similique dolor explicabo facere?</p>
      </div>
    </div>
  );
};

export default GetCarById;
