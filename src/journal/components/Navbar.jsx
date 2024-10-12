import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { logoutFirebase } from '../../firebase/providers'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth'

export const Navbar = ({drawerWidth}) => {

    const dispatch = useDispatch()


    const onLogout = () => {
        dispatch(startLogout())
    }

  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`}
        }}    
    >
        <Toolbar>
            <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                sx={{mr: 2, display: {sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>JournalApp</Typography>

                <IconButton sx={{color: 'white'}}
                    onClick={onLogout}
                >
                    <LogoutOutlined/>
                </IconButton>

            </Grid>
        </Toolbar>
    </AppBar>
  )
}
