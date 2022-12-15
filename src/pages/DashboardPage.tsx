import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { BaseContextModal } from '@wrapped/components/Modal/BaseContextModal'


export const DashboardPage = () => {
  console.log('render')
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Typography variant={'subtitle1'}>
        Dashboard
      </Typography>

      <Button
        onClick={() => setOpen(true)}
      >
        OPEN MODAL
      </Button>

      <BaseContextModal
        driver={{
          open, setOpen,
        }}
      >
        AHOJ
      </BaseContextModal>
    </Box>
  )
}
