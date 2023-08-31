import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function EmailForm() {


    const form = useRef()
    const   sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${process.env.YOUR_SERVICE_ID}`, `${process.env.YOUR_TEMPLATE_ID}`, form.current, `${process.env.YOUR_PUBLIC_KEY}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <form ref={form} onSubmit={sendEmail}>
            <input 
            name="user_name" 
            type='text' 
            placeholder="Full Name" 
            
            required 
            />
            <input 
            name="user_email" 
            type='email' 
            placeholder="email" 
            
            required 
            />
            <input 
            name="subject" 
            type='text' 
            placeholder="Subject" 
            
            required 
            />
            <textarea
            name='message'
            cols='30'
            rows='10'
            >

            </textarea>
            <button 
            type="submit">Send Email</button>
        </form>
    );
}

export default EmailForm;