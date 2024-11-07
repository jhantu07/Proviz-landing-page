
// client/src/components/ApplicationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function ApplicationForm() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', statement: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/apply', formData);
            alert('Application submitted successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to submit application.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="application-form">
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
            <textarea name="statement" placeholder="Why do you want to join?" onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ApplicationForm;
