import React, { useContext } from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add-user.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'
import { BiLeftArrowAlt } from "react-icons/bi";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const handleClick = () => {
    window.location.reload()
  }

  return (
    <div className='chat'>
      <div className="chatInfo">
        <BiLeftArrowAlt onClick={() => handleClick()}/>
        <div className='interlocutor'>
          <img src={data.user?.photoURL} alt='' />
          <span>{data.user?.displayName}</span>
        </div>
        {/*
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
        */}
      </div>
      <Messages />
      <Input/>
    </div>
  )
}

export default Chat