import React, { useMemo } from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { IconButton, Typography } from '@mui/material'
import { NoteView, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'


export const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }





  return (
    <JournalLayout>
      
      {
        !!active ? <NoteView/> : <NothingSelectedView/>
      }
      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: isSaving ? '#10547b' : 'error.main',
          ':hover': {
            backgroundColor: 'error.dark', opacity: 0.8
          },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
