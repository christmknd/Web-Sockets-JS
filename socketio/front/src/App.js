import './App.css';

import { useEffect, useState } from "react";
import {io } from "socket.io-client"
function App() {
  
  const socket= io("http://localhost:9000")

  socket.on("connect", () => {
    console.log('Connected to the socket')
  })

  //Message 

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);


  return (
    <div className="App">
      <input 
      type="text"
      autoComplete='off'
      placeholder='message...'
      onChange={(event) => {
        setMessage(event.target.value);
      } } />
      <button onClick={sendMessage}>Send</button>
      <h3>Message</h3>
      {messageReceived}
    </div>
  );
}

export default App;
