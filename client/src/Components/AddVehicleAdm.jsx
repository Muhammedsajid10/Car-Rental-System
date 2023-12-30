import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddVehicleAdm = () => {
    const [model, setModel] = useState("")
    const [year, setYear] = useState("")
    const [rentalCost, setRentalCost] = useState("")
    const [currentStatus, setCurrentStatus] = useState('available');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };


    const postData = async (e) => {
        e.preventDefault()
        try {
            // const data = { model, year, rentalCost, currentStatus,image }
            console.log(model, year, rentalCost, image);
            const formData = new FormData();
            formData.append('model', model);
            formData.append('year', year);
            formData.append('rentalCost', rentalCost);
            formData.append('currentStatus', currentStatus);
            formData.append('image', image);
            const response = await axios.post('http://localhost:5000/vehicle-create', formData)
            console.log('postedData : ', response.data);
        } catch (error) {
            console.log('error on while posting data : ', error)
        }

    }

    return (
        <div>
            <Form onSubmit={postData} encType="multipart/form-data">
                <Form.Group className="mb-3" controlId="formBasicModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" placeholder="Enter model" value={model} onChange={(e) => setModel(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="number" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCost">
                    <Form.Label>RentalCost</Form.Label>
                    <Form.Control type="number" placeholder="cost" value={rentalCost} onChange={(e) => setRentalCost(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicStatus">
                    <Form.Label>Current Status</Form.Label>
                    <Form.Control as="select" value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)}>
                        <option value="available">Available</option>
                        <option value="reserved">Reserved</option>
                    </Form.Control>
                </Form.Group>



                {/* <Form.Group className="mb-3" controlId="formBasicStatus">
                    <Form.Label>Current-Status</Form.Label>
                    <Form.Control type="text" placeholder="status" value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)} />
                </Form.Group> */}


                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddVehicleAdm
