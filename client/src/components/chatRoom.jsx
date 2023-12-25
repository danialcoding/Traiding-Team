//import { Component } from 'react';
import { useState } from 'react';
import './chatRoom.css'

const io = require('socket.io');
//const socket = io.Socket();

const socket = new io.Socket();
socket.connect('http://localhost:8080');

export default ChatRoom;

function ChatRoom() {
    const getmessages = [['Danial', 'hello'],['Mohammad', 'how']];
    // getmessages.set('Danial', 'hello');
    // getmessages.set('Mohammad', 'how');

    //new map('username','msg')

    const [messages,setMessages] = useState(getmessages);
    const [newMsg,setNewMsg] = useState('');

    return(
        <>
            <div className='chat_header'>
                ho
            </div>
            <div className='chat_message_console'>
                {messages.map((item,index) => <div className='' key={index}><Message dataFromParent = {item}/></div>)}
            </div>
            <div className='chat_bar'>
                <form onSubmit={handleSubmit}>
                    <input id='test' autoComplete='off' placeholder='Type your message...' value={newMsg} onChange={handleMessageChange}/>
                    <input type='submit'/>
                </form>
            </div>
        </>
    );

    
    function handleMessageChange(event) {
        setNewMsg(event.target.value);
      };
    
    function handleSubmit(event) {
    if(newMsg != '') {
        socket.emit('chatMessage','Danial',newMsg);
        setNewMsg('');
    }

    socket.on('chatMessage',(user,msg) => {
        $('#chat_message_console').append('<div key={index}><Message dataFromParent = {item}/>' + newMsg + '</div>')
    }) 
        


        //event.preventDefault();
        //const updatedMessages =
        //messages.push(['Danial', newMsg]);

        //setMessages(updatedMessages);

        //console.log(newMsg);
      };
    
    function sendMessage() {
        //const updatedMessages = messages.set('Danial',newMsg);
        //setMessages(updatedMessages);
    }
}

const Message = (props) => {

    return(
        <>
            <span>{props.dataFromParent[0]}</span>
            <p>{props.dataFromParent[1]}</p>
        </>
    );
    
}