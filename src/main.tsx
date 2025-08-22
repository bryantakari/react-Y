import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from './mirage/server.ts'


if (import.meta.env.MODE === "development") {
  // @ts-expect-error: attach for debugging
  window.server = makeServer()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </StrictMode>,
)
