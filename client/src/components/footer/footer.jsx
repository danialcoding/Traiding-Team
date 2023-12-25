import { MdEmail } from 'react-icons/md';
import {useState,useEffect} from 'react';

import './footer.css'


function Footer() {
    const [email,setEmail] = useState('');

    //DB
    const[users,setUsers] = useState([]);

    const fetchUsersData = async () => {
        const resault = await fetch('http://localhost:8080/users');
        const jsonResault = await resault.json();

        setUsers(jsonResault);
    }

    useEffect(()=>{
        fetchUsersData();
    },[]);
    //

    const [errorMessages, setErrorMessages] = useState({});

    const errors = {
        email_i: "Invalid email",
        email_ex: "This email address is already exist",
    };

    const errors_type = {
        email: "email",
    } 

    const isValidEmail = (email) => {
        if(email === "") {
            setErrorMessages({name: errors_type.email, message: errors.email_e});
            return false;
        }

        const checkMail =  /\S+@\S+\.\S+/.test(email);

        if(!checkMail) {
            setErrorMessages({name: errors_type.email, message: errors.email_i});
            return false;
        }
    
        if(users.find((user) => user.email === email)) {
            setErrorMessages({name: errors_type.email, message: errors.email_ex});
            return false;
        }
        else {
            return true;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(isValidEmail(email)) {
            setErrorMessages({});
            //change this
        }
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    return (
        <footer className='footer'>
            <div className="left">
                <div className="footerLogo">
                    <img src='/' alt=''></img>
                    <span>Traiding Team</span>
                </div>
                <div className="footerMenu">
                    <ul>
                        <span>Menu</span>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                    </ul>
                </div>
                <div className="teamMenu">
                    <ul>
                        <span>Team</span>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                    </ul>
                </div>
                <div className="exchangeMenu">
                    <ul>
                        <span>Exchange Menu</span>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                        <li><a href='/'>test</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="right">
                <form onSubmit={handleSubmit} className="form">
                    <div className='email_div'>
                        <label><b>Email</b></label>
                        <p>Join our newsletter to get last news</p>
                        <div className='email-inp'>
                            <div className="icon"><MdEmail/></div>
                            <input type={"text"} placeholder="Enter Email" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
                        </div>
                        <button className='submit' type="submit">Submit</button>
                    </div>
                    {renderErrorMessage(errors_type.email)}

                </form>
            </div>
        </footer>
    );
}
 
export default Footer;