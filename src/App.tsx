import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Popup } from './components/Popup'
import { Button } from '@mui/material'


function App () {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Button variant={'outlined'} onClick={() => setOpen(true)}>
                  Open Modal
        </Button>
        <Popup
          open={open}
          closeModal={() => setOpen(false)}
          maxWidth={'lg'}
          fullWidth
        />
      </header>
    </div>
  )
}

export default App
