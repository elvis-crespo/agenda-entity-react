import React from 'react'
import ReactDOM from 'react-dom/client'
import { DiaryApp } from './DiaryApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./Styles/Index.css"//Instalar Path Intellisense

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <DiaryApp />
    </React.StrictMode>
  </BrowserRouter>
)
