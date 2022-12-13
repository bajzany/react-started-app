import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Grid,
  IconButton, Link,
  List,
  ListItem,
  ListItemButton, ListItemIcon, ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material'
import { Inbox, Menu } from '@mui/icons-material'
import logo from '@wrapped/images/logo.svg'
import {Routes} from '@wrapped/components/Router/Router'
import {history} from "@wrapped/components/Router/History";


export const TopBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position={'static'} color={'primary'}>
      <Toolbar disableGutters>
        <Grid container alignItems={'center'}>
          <Grid item>
            <IconButton
              size={'large'}
              edge={'start'}
              color={'inherit'}
              sx={{ ml: 1 }}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant={'body2'}>
                            React started app
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            size={'large'}
            edge={'start'}
            color={'inherit'}
          >
            <img src={logo} alt={'logo'} className={'App-logo'}/>
          </IconButton>
        </Box>
      </Toolbar>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box
          sx={{ width: 250 }}
          role={'presentation'}
        >
          <List>
            {Routes.map((route, key) => (
              <ListItem
                key={key}
                disablePadding
                onClick={() => {
                  history.push(route.path)
                  setOpen(false)
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <Inbox />
                  </ListItemIcon>
                  <ListItemText primary={route.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  )

}
