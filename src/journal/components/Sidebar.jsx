import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SideBarItem } from './'
import { setActiveNote } from '../../store/journal/journalSlice'

export const Sidebar = ({drawerWidth}) => {

    const {displayName} = useSelector(state => state.auth)
    const {notes} = useSelector(state => state.journal)
    const dispatch = useDispatch()

 


  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box'}
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider/>
            
            <List>
                {
                    notes.map(note => (
                       <SideBarItem key={note.id} {...note}/>
                    ))
                }
            </List>



        </Drawer>
    </Box>
  )
}
