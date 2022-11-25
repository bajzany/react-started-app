import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import { DialogProps } from '@mui/material/Dialog/Dialog'
import { Close } from '@mui/icons-material'


interface IPopup extends DialogProps {
  closeModal: () => void
}

export const Popup = (props: IPopup) => {

  return (
    <Dialog
      maxWidth={'md'}
      {...props}
      open={props.open}
      onClose={() => props.closeModal()}
    >
      <DialogTitle>
                MUJ MODAL
        <IconButton
          aria-label="close"
          onClick={() => props.closeModal()}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant={'h1'}>
                    AHOJ
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.closeModal()} variant={'contained'} color={'error'}>
                    Close Modal
        </Button>
      </DialogActions>
    </Dialog>
  )
}
