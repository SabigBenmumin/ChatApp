import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import Chat from "../component/Chat";
import { ChatContext } from "../context/ChatContext";

const Home = () => {
  const { data } = useContext(ChatContext);

  useEffect(() => {
    console.log(data.user.displayName);
  },[data.chatId])

  return (
    <div className="home">
      <div className="container">
        {data.chatId === "null" ? <Sidebar /> : <Chat />}
        {/* <Sidebar />
        <Chat /> */}
      </div>
    </div>
  );
};

export default Home;
