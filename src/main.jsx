import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 👈 FALTA ISSO
import Navbar from "../src/components/Navbar";
import './index.css'
import App from './App.jsx'
import Social from '../src/components/Social.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Social />
      <App />
    </BrowserRouter>
  </StrictMode>,
)