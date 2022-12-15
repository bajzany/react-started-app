import React, { useContext, useState } from 'react'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'
import { DialogProps } from '@mui/material/Dialog/Dialog'
import { Close } from '@mui/icons-material'


interface ContextModal {
  open: boolean
  setOpen: (val: boolean) => void
}

export const ModalContext = React.createContext<ContextModal>(undefined)


export const useModalContext = (): ContextModal => {
  return useContext(ModalContext)
}

interface IBaseModal {
  driver?: ContextModal
  dialogProps?: Omit<DialogProps, 'open'>
  children: React.ReactNode
}

export const BaseContextModal = (props: IBaseModal) => {
  const [open, setOpen] = useState(false)
  return (
    <ModalContext.Provider value={props.driver ? props.driver : { open, setOpen }}>
      <Dialog
        open={props.driver ? props.driver.open : open}
        fullWidth
        maxWidth={'xs'}
        {...props.dialogProps}
        onClose={() => {
          props.driver ? props.driver.setOpen(false) : setOpen(false)
        }}
      >
        <ModalContent children={props.children}/>
      </Dialog>
    </ModalContext.Provider>
  )
}

const ModalContent = (props: Pick<IBaseModal, 'children'>) => {

  const modal = useModalContext()

  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        TITLE
        <IconButton
          aria-label="close"
          onClick={() => {
            modal.setOpen(false)
          }}
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
        {props.children}
      </DialogContent>
    </>
  )
}
