import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Portfolio.tsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

// AOS
AOS.init({
  duration: 1000, 
  easing: 'ease-in-out', 
  once: true,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
