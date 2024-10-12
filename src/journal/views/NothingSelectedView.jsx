import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{minHeight: 'calc(100vh - 114px)', backgroundColor: 'primary.main',
            borderRadius: '10px'
        }}
    >
        <Grid item xs={12}>
            <StarOutline sx={{fontSize: 100, color: 'white'}}/>
        </Grid>
        <Grid>
            <Typography color="white" variant='h5'>
                Seleccione algo
            </Typography>
        </Grid>
    </Grid>
  )
}
