import React, { useState } from 'react'
import {
  Box,
  Button, Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Toolbar,
  Typography,
} from '@mui/material'
import { Edit } from '@mui/icons-material'
import { Row, RowData } from '@wrapped/components/BaseTable/Row'


interface IBaseTable {
  data: RowData[]
  // events: {
  //   onSelected
  // }
}

export const BaseTable = (props: IBaseTable) => {

  const [selectedItems, setSelectedItems] = useState<Record<number, {
    selected: boolean,
    data: RowData,
  }>>({})

  const getCountSelected = (): number => {
    let countItems = 0
    for (const key in selectedItems) {
      const item = selectedItems[key]
      if (item.selected) {
        countItems++
      }
    }
    return countItems
  }

  console.log('selectedItems', selectedItems)

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >

          <Typography
            variant={'subtitle1'}
          >
            Uzivatelska tabulka - {getCountSelected()}
            {Object.values(selectedItems).map((value, index) => {

              console.log('value', value)
              if (!value.selected) {
                return null
              }
              return (
                <Chip key={index} label={value.data.name}/>
              )
            })}
          </Typography>
        </Toolbar>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead
              title={'Uzivatelska tabulka'}
            >
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Jmeno</TableCell>
                <TableCell>Popisek</TableCell>
                <TableCell>Akce</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((value, index) => {
                return (
                  <Row
                    key={index}
                    row={value}
                    onSelected={(data, selected) => {
                      setSelectedItems({
                        ...selectedItems,
                        [index]: {
                          selected: selected,
                          data: data,
                        },
                      })
                    }}
                  />
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>

  )
}
