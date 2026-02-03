import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme.js"

// 1. Import the loader from the monaco-react library
import { loader } from '@monaco-editor/react'

// 2. Configure it to use a stable CDN version
// This replaces the need for the "vite-plugin-monaco-editor"
loader.config({ 
  paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs' } 
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)