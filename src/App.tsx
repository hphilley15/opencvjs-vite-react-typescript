import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BlobDetector from './BlobDetector';
function App() {
  return (
    <>
      <h1>OpenCV + Vite + React + Typescript</h1>
      <BlobDetector />
    </>
  );
}

export default App;
