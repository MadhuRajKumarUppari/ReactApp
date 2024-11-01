import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cricket from './Cricket.jsx'
import Apples from './Apples.jsx'
import Discount from './Discount.jsx'
import CurrentDay from './CurrentDay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>

  
  </StrictMode>
)

