import React, {useContext, useState} from 'react'
import Img from '../img/add-image_light.png'
import Attach from '../img/attach-light.png'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import {db} from "../../firebase";
import {v4 as uuid} from "uuid";

const Input = () => {

  const [ test, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async () =>{
    if(img){
      const storageRef = ref(storage, uuid);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //setErr(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId),{
              messages: arrayUnion({
                id: uuid,
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              }),
            });

          });
        }
      );
    }else{
      await updateDoc(doc(db, "chats", data.chatId),{
        messages: arrayUnion({
          id: uuid,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
  };
  return (
    <div className="input">
      <input type="text" placeholder='Type Something...' onChange={e=setText(e.target.value)}/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:"none"}} id='file' onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input