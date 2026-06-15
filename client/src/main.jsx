import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if(!PUBLISHABLE_KEY){
  throw new Error("Add the publishable key in .env file");
}
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}
  afterSignOutUrl="/">
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ClerkProvider>
)