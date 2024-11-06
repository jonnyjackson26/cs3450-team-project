import React, { useState } from 'react';
import "./Chat.css";

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);

  // Handler to send a message
  const sendMessage = async (event) => {
    event.preventDefault();
    
    if (input.trim()) {
      // Add user message to messages array
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: input },
      ]);

      // Clear the input field
      setInput('');

      // Call the getChatBotResponse function to get the bot's response
      const botResponse = await getChatBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botResponse },
      ]);
    }
  };

  // Function to make the API call to Django
  const getChatBotResponse = async (input) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/chatgpt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.response; // Assuming `data.response` holds the bot's reply
      } else {
        console.error('Error response:', response);
        return "Sorry, I couldn't get a response.";
      }
    } catch (error) {
      console.error('Error fetching response:', error);
      return 'Error: Could not connect to the server.';
    }
  };
  

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
          >
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form className="input-form" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
