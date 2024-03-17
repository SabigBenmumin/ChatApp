import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/20225390/pexels-photo-20225390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>kuyrai</p>
        <img src="https://images.pexels.com/photos/20225390/pexels-photo-20225390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Message