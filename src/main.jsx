import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Router>
  </StrictMode>,
)
