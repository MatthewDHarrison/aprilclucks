import React from 'react'
import { HomePage } from './pages/HomePage'
import { theme } from './Theme'
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { CssBaseline } from '@mui/material'
import ReactGA from 'react-ga'

ReactGA.initialize("GTM-KDTKH5CL");

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </div>
  )
}

export default App
