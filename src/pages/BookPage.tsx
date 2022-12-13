import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { FilterBooks } from '@wrapped/api/FilterBooks'


export const BookPage = () => {

  const [books, setBook] = useState()
  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    const response = await FilterBooks('test')
  }

  return (
    <Box>
      <Typography variant={'subtitle1'}>
          Books
      </Typography>
    </Box>
  )
}
