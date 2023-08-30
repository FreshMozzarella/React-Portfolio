import React, { useState } from 'react';

function EmailForm() {
    const [emailData, setEmailData] = useState({
        to: '',
        subject: '',
        text: ''
    });

    const handleChange = (e) => {
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData)
            });
            const data = await response.text();
            console.log('the data: ',data); // "Email sent" or error message
        } catch (error) {
            console.error('There was an error sending the email', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="to" value={emailData.to} onChange={handleChange} placeholder="Recipient Email" />
            <input name="subject" value={emailData.subject} onChange={handleChange} placeholder="Subject" />
            <textarea name="text" value={emailData.text} onChange={handleChange} placeholder="Message" />
            <button type="submit">Send Email</button>
        </form>
    );
}

export default EmailForm;