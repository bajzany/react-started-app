import React from 'react'
import { Avatar } from '@mui/material'
import fokuMe from '../images/fokume.jpeg'


export const AvatarComponent = () => {

  return (
    <Avatar
      sx={{ width: 500, height: 500 }}
      src={fokuMe}
    />
  )

}
