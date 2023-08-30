const sgMail = require('@sendgrid/mail');

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { to, subject, text } = JSON.parse(event.body);
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

    const msg = {
        to,
        from: 'your-email@example.com', // Your SendGrid email
        subject,
        text
    };

    try {
        await sgMail.send(msg);
        return { statusCode: 200, body: 'Email sent' };
    } catch (error) {
        return { statusCode: 500, body: 'Error sending email' };
    }
};