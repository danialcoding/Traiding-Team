import { message } from 'react-message-popup';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useState,useEffect } from 'react';

import { FaUserAlt } from 'react-icons/fa';
import { BsFillRecordCircleFill  } from 'react-icons/bs';
import { BsCircleFill } from   'react-icons/bs';
import { AiOutlineClose } from   'react-icons/ai';

import "./privatechat-icon.css";


const PrivateChatIcon = (props) => {
    const {username,image,status} = props;


    const handleRemoveFriend = () => {
        const username = document.getElementById("username");
    
        message.success('DM Successfully Removed', 3000);

        //////////
    }

    const handleUserImage = () => {
        if(image === '') {
            return (
                <>
                    <div className="pv-bg">
                            <div className="avatar-bg">
                                <FaUserAlt className='pv-avatar'/>
                            </div>
                            
                            {status === 'online' ? <BsCircleFill className='online-status'/> : 
                                <BsFillRecordCircleFill className='offline-status'/>
                            }
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="pv-icon-bg">
                            <img src={image} alt="" className="pv-image"/>
                            {status === 'online' ? <BsCircleFill className='online-status'/> : 
                                <BsFillRecordCircleFill className='offline-status'/>
                            }
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <div className="privatechaticon">
                {handleUserImage()}
                <span className="username" id='username'>{username}</span>

                <Tippy content="Remove DM" delay={200} duration={500} theme='material'>
                    <div className="removeicon">
                        <AiOutlineClose className='removefriend' onClick={()=> {handleRemoveFriend()}}/>
                    </div>
                    
                </Tippy>
            </div>
        </>
    )
}

export default PrivateChatIcon;