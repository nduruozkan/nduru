import React, { useState } from 'react';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, firstName, lastName } = formData;

        // Basic validation (you can expand this as needed)
        if (!username || !email || !firstName || !lastName) {
            setErrorMessage('Please fill out all fields.');
            return;
        }

        try {
            // Here you would typically send the data to your backend server.
            // This example assumes you have an endpoint set up for sending emails.
            const response = await fetch('YOUR_BACKEND_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                throw new Error('Error sending registration data.');
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <h1>Register for the Hackathon</h1>
            {submitted ? (
                <p>Registration successful! Check your email for confirmation.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    <button type="submit">Register</button>
                </form>
            )}
        </div>
    );
};

export default RegistrationPage;
