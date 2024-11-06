import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {

  return (
    <>
    <h1>home page</h1>
    <Link to="/chat">Chat</Link>
    <Link to="/PDFUpload">PDFUpload</Link>
    </>
  );
};

export default Home;
