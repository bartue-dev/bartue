import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CommandProvider } from './context/CommandProvider.jsx';
import App from './App.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommandProvider>
      <App/>
    </CommandProvider>
  </StrictMode>,
)
