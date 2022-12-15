import React, { memo, useEffect, useState } from 'react'
import { Box, Checkbox, Grid, Typography } from '@mui/material'
import { FilterBookResponse, FilterBooks, IBook } from '@wrapped/api/FilterBooks'


export const BookPage = () => {

  const [books, setBooks] = useState<FilterBookResponse>({
    books: [],
    page: '0',
    total: '0',
  })

  const [selected, setSelected] = useState<string[]>([])
  const isSelected = (book: IBook): boolean => {
    return !!selected.find((value) => value === book.isbn13)
  }

  useEffect(() => {
    loadBooks()
  }, [])

  const loadBooks = async () => {
    const response = await FilterBooks('test')
    setBooks(response)
  }

  const onChangeSelected = (select: boolean, value: IBook) => {
    if (select) {
      setSelected((prevState) => (
        [
          ...prevState,
          value.isbn13,
        ]
      ))
    } else {
      setSelected((prevState) => (
        [
          ...prevState.filter((item) => item !== value.isbn13),
        ]
      ))
    }
  }

  return (
    <Box>
      <Typography variant={'subtitle1'}>
          Books
      </Typography>

      <Grid container direction={'column'}>
        {books.books.map((value, index) => (
          <Grid item key={index}>
            <ItemMemo
              onChangeSelected={(select) => {
                onChangeSelected(select, value)
              }}
              checked={isSelected(value)}
              {...value}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

interface IItem extends IBook {
  checked: boolean
  onChangeSelected: (selected: boolean) => void
}

const ItemMemo = memo<IItem>((props) => (
  <Item {...props}/>
), (prevProps, nextProps) => {
  return (prevProps.checked === nextProps.checked)
})

const Item = (props: IItem) => {
  return (
    <Grid container alignItems={'center'}>
      <Grid item>
        <Checkbox checked={props.checked} onClick={() => props.onChangeSelected(!props.checked)}/>
      </Grid>
      <Grid item>
        <Typography>
          {props.title}
        </Typography>
      </Grid>
    </Grid>
  )
}
