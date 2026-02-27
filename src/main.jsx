import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Todo from './Todo_app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)
