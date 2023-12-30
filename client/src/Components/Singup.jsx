import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const role = "user";
    const navigate = useNavigate()

    const postData = async (e) => {
        e.preventDefault();

        try {
            if (name && email && mobile && password) {
                const response = await axios.post("http://localhost:5000/user", { name, email, mobile, password, role });
                console.log(response.data);
                if (response.data.message === "successfully-Registered") {
                    Swal.fire({
                        title: "Success",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                    navigate('/login')
                } else if (response.data.message === "User already exists.") {
                    Swal.fire({
                        title: "Error",
                        text: "User already exists...",
                        icon: "error",
                    });
                }
            }else{
                Swal.fire({
                    title: "Error",
                    text: "please fill all requiremnts...",
                    icon: "error",
                });
            }

        } catch (error) {
            console.log("Error on posting data", error);
        }
    };

    return (
        <div>
            <Form onSubmit={postData}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="number" placeholder="Enter number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Signup;
