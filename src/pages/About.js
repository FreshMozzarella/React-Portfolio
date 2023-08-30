import { useState, useEffect } from "react";
import EmailForm from '../components/EmailForm'
function About(props) {
    const [about, setAbout] = useState(null);
    const getAboutData = async () => {
        const response = await fetch('./about.json')
        const data = await response.json();
        setAbout(data)
    }
    useEffect(() => { getAboutData() } , []);
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <h3>{about.bio}</h3>
            <img  className='headshot' src={about.headshot} alt="me"/>
            <EmailForm />
        </div>
    );

    return ( 
        about ? loaded() : <h1>Loading...</h1>
     );
}

export default About;