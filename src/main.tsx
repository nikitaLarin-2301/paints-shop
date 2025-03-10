import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App.tsx'
import './main.scss'
import 'macro-css'

const root = createRoot( document.getElementById( 'root' )! )
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)