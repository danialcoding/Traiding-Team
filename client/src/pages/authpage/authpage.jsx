import React , { useState } from 'react';
// import io from 'socket.io-client'
import Login from '../login/login'
import SignUp from '../signup/signup'
import ForgetPsw from '../forgetpsw/forgetpsw'
export default Auth

// const socket = io.connect('http://localhost:8080');

function Auth(props) {
    const [authMode, setAuthMode] = useState(props.mode);

    // const sendMessage = () => {
    //     socket.emit("send_msg",{message: "hello"})
    // }

    // useEffect(()=>{
    //     socket.on("receive_msg",(data) => {
    //         alert(data.message)
    //     });
    // },[socket]);

    const signInMode = () => {
        setAuthMode("signin");
    }
    const signUpMode = () => {
        setAuthMode("signup");
    }
    const forgetPswMode = () => {
        setAuthMode("forgetpsw");
    }

    if (authMode === "signin") {
        return(
            <Login signUpMode = {signUpMode} forgetPswMode = {forgetPswMode}/>
        )
    }
    else if (authMode === "signup") {
        return(
            <SignUp signInMode= {signInMode}/>
        )
    }
    else if (authMode === "forgetpsw") {
        return(
            <ForgetPsw signUpMode = {signUpMode} signInMode= {signInMode}/>
        )
    }
}