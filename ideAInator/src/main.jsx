import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import PDFUpload from './pages/PDFUpload/PDFUpload';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Chat",
    element: <Chat />,
  },
  {
    path: "/PDFUpload",
    element: <PDFUpload />,
  },
]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);