import React from 'react'
import './App.css'
import { BaseTable } from '@wrapped/components/BaseTable/BaseTable'
import { Container } from '@mui/material'
import { RowData } from '@wrapped/components/BaseTable/Row'


const data: RowData[] = [
  {
    name: 'Vasa',
    description: 'Typek',
  },
  {
    name: 'Radek',
    description: 'Vasa je vetsi typek',
  },
  {
    name: 'Franta',
    description: 'Vasa je vetsi typek',
  },
]


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="sm">
          <BaseTable
            data={data}
          />
        </Container>
      </header>
    </div>
  )
}

export default App
