import { useEffect,useState } from "react";
import { BiShow,BiHide } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { IoFingerPrintOutline } from 'react-icons/io5';
import './login.css'
export default Login

function Login(props) {
    const {signUpMode , forgetPswMode} = props;

    //state
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [stayLogin,setStayLogin] = useState(false);

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };


    // error States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    //Backend
    const[users,setUsers] = useState([]);

    const fetchUsersData = async () => {
        const resault = await fetch('http://localhost:8080/users');
        const jsonResault = await resault.json();

        setUsers(jsonResault);
    }
    
    useEffect(()=>{
        fetchUsersData();
    },[]);

    // User Login info
    const errors = {
        email: "invalid email",
        pass: "invalid password"
    };
    const errors_type = {
        email: "email",
        uname: "uname",
        pass: "pass",
    } 

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = users.find((user) => user.email === email);

        if (userData) {
            if (userData.password !== password) {
                setErrorMessages({name: "pass", message: errors.pass});
            } else {
                setErrorMessages({});
                setIsSubmitted(true);
                //change this
            }
        } else {
            setErrorMessages({ name: "email", message: errors.email});
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );


    return(
        <>
        <div className="login-container login">
            <form className="form" onSubmit={handleSubmit}>
                <div className="top">
                    <h2 className='logo_name'>Traiding Team</h2>
                    <span className='pageName'>Sing In</span>
                    <div className="img"><IoFingerPrintOutline/></div>
                    
                    <p className='link-text'>Not registered yet?{" "}</p>
                    <span className="link-primary" onClick={signUpMode}>Sign Up</span>
                </div>
                <div className='email_div'>
                    <div className="icon"><MdEmail/></div>
                    <label ><b>Email</b></label>
                    <input type={"text"} placeholder="Enter Email" name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
                </div>
                {renderErrorMessage(errors_type.email)}

                <div className='pass_div'>
                    <label><b>Password</b></label>
                    <div className="icon"><RiLockPasswordFill/></div>
                    <input  type={passwordShown ? "text" : "password"} placeholder="Enter Password" name="psw" onChange={(event)=>{setPassword(event.target.value)}}/>
                    <div className="pass_icon" onClick={togglePassword}>{passwordShown ? <BiShow/> : <BiHide/>}</div>
                </div>
                {renderErrorMessage(errors_type.pass)}

                <div className="stay-login">
                    <input type="checkbox" name="stay_login" checked={stayLogin} onChange={() => {setStayLogin(!stayLogin)}}/>   
                    <label>Keep me signed in</label>
                </div>
                <button className='submit' type="submit">Submit</button>
                <p className="forget_psw">Forgot <span onClick={forgetPswMode}>password?</span></p>
            </form>
        </div>
    </>
    )
     
  
}