import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Card username="Sharma" btnText="heat me"/>
  <Card username="Biswajit" btnText="click me"/>
  </>
    
  
)
