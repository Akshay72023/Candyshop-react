import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap";

const CandyForm = ({ onAddCandy }) => {
    const nameRef = useRef('');
    const descRef = useRef('');
    const priceRef = useRef('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            candyname: nameRef.current.value,
            candydesc: descRef.current.value,
            candyprice: priceRef.current.value,
            candyId: Math.random()
        };

        try {
            const response = await fetch('https://candyshop-c3e78-default-rtdb.firebaseio.com/candydetails.json', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to add candy details');
            }

            nameRef.current.value = "";
            descRef.current.value = "";
            priceRef.current.value = "";
            onAddCandy();
        } catch (error) {
            console.error('Error adding candy details:', error.message);
        }
    };

    return (
        <div style={formContainerStyle}>
            <Form style={formStyle} onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="candyname">
                    <Form.Label>Candy Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="candydesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" ref={descRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="candyprice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" ref={priceRef} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Candy
                </Button>
            </Form>
        </div>
    );
};

const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '62vh',
};

const formStyle = {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#dfdf7f'
};

export default CandyForm;
