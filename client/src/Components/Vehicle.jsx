import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { LiaRupeeSignSolid } from 'react-icons/lia'
import './Vehicle.css';
import { useNavigate } from 'react-router-dom';

const Vehicle = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate()

    const fetchCars = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/vehicle-get`);
            console.log('cars : ', response.data);
            setCars(response.data);
        } catch (error) {
            console.log('error while fetching the data', error);
        }
    };

    useEffect(() => {
        fetchCars();
    }, []);

    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    };

    const getCarById = async (carId) => {
        alert(`COPY THIS VEHICLE ID FOR RESERVE THIS CAR: ${carId}`);
        navigate(`/CarDetails/${carId}`)
    }

    return (
        <div>
            <div className='head'>
                <h5>Come With</h5>
                <h2>Hot Offers</h2>
            </div>
            <div className='vehCont'>
                {cars.map((obj) => (
                    <Card key={obj._id} className='card' style={{ width: '18rem' }}>
                        <Card.Img className='img' variant="top" src={`data:image/jpeg;base64,${arrayBufferToBase64(obj.image.data)}`} />
                        <Card.Body>
                            <Card.Title>{obj.model}</Card.Title>
                            <Card.Text><LiaRupeeSignSolid />{obj.rentalCost}/day</Card.Text>
                            <Button variant="primary" onClick={() => getCarById(obj._id)}>Reserve</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Vehicle;
