import React from 'react'
import './App.css'
import { Box, Container, Paper, ThemeProvider } from '@mui/material'
import { Theme } from '@wrapped/themeOveride/Theme'
import { TopBar } from '@wrapped/components/TopBar/TopBar'
import { Router } from '@wrapped/components/Router/Router'


export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box className={'body'} sx={{ flexGrow: 1 }}>
        <Container
          maxWidth={'md'}
        >
          <TopBar/>
          <Paper
            elevation={1}
            square
            sx={{
              minHeight: 800,
              padding: 3,
            }}
          >
            <Router/>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
