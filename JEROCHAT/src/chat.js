// ChatRoom.js
import React, { useState, useEffect } from "react";
import { auth, firestore } from "./firebase";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const unsubscribe = firestore.collection("messages")
      .orderBy("createdAt")
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(data);
      });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await firestore.collection("messages").add({
      text,
      createdAt: new Date(),
      uid,
      photoURL
    });

    setText("");
  };

  return (
    <div>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <img src={message.photoURL} alt="avatar" />
            <p>{message.text}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default chat;
