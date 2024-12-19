import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/**
 * React.JS is a library which supports client side rendering
 * Benefits include:
 * - Component usability
 * - Single page
 * - Real-time features
 *
 * Note: Vite.JS announce the bugs in the console
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
