import { useEffect,useState } from 'react';


import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { AiFillMessage } from 'react-icons/ai';
import { HiPlus } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';

import GroupIcon from '../../components/group-icon/group-icon';
import PrivateChatIcon from '../../components/privatechat-icon/privatechat-icon';

import './chatRoom.css'

function ChatRoom() {
    const[userGroups,setUserGroups] = useState([]);
    const[userPrivateChat,setUserPrivateChats] = useState([]);

    //backend
    const fetchUserGroups = async () => {
        const resault = await fetch('http://localhost:8080/group');
        const jsonResault = await resault.json();

        setUserGroups(jsonResault);
    }

    const fetchUserPrivateChats = async () => {
        const resault = await fetch('http://localhost:8080/privateChat');
        const jsonResault = await resault.json();

        setUserPrivateChats(jsonResault);
    }

        
    useEffect(()=>{
        fetchUserGroups();
        fetchUserPrivateChats();
    },[]);

    const addFriend = () => {
        alert("hello");
    }

    return (
        <>
            <div className='chat-container'>
                <div className='leftSide'>
                    <div className="groups-side">
                        <Tippy content="Direct messages" delay={200} duration={500} theme='material' placement='right'>
                            <div className="directMessages">
                                <AiFillMessage className='dir-msg-button'/>
                                
                            </div>
                        </Tippy>
                        

                        <hr id='divider' style={{
                        display: "block",
                        width: "40%",
                        background: "#0260ed",
                        height: "4px",
                        border: "none",
                        margin: "5px 0 7px",
                        }}/>


                        <div className="groups">
                            {
                                userGroups.map((item,index) => (
                                    <GroupIcon key={index} name = {item.name} image = {item.img} />
                                ))
                            }   
                        </div>
                    </div>
                    <div className="group-info-side">
                        <div className="friends">
                            <FaUserAlt className="friendsavatar"/>
                            <span className="friendstitle">Friends</span>
                        </div>
                    
                        <div className="top">
                            <span className="directMessageTitle">Direct Messages</span>
                            <Tippy content="Add DM" delay={200} duration={500} theme='material' placement='right'>
                                <div>
                                    <HiPlus className='addFriendsIcon' onClick={()=> {addFriend()}}/>
                                </div>
                            </Tippy>
                        </div>
                        <div className="bottom">
                            {
                                userPrivateChat.map((item,index)=>(
                                    <PrivateChatIcon key={index} username={item.username} image={item.img} status={item.status}/>
                                ))
                            }
                        </div>
                    </div>
                </div>


                <div className='rightSide'>
                    
                </div>
            </div>
        </>
    );
}

export default ChatRoom;