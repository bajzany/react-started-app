import React, { useEffect, useState } from 'react'
import { Button, Checkbox, TableCell, TableRow } from '@mui/material'
import { Edit } from '@mui/icons-material'


export type KeyType = 'name' | 'description'

export type RowData = Record<KeyType, string>

interface IRow {
  row: RowData
  onSelected: (row: RowData, selected: boolean) => void
}

export const Row = (props: IRow) => {

  const [isSelected, setIsSelected] = useState<boolean>(false)

  useEffect(() => {
    props.onSelected(props.row, isSelected)
  }, [isSelected])

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" >
        <Checkbox
          checked={isSelected}
          onClick={() => setIsSelected(!isSelected)}
        />
      </TableCell>
      <TableCell component="th" scope="row" >
        {props.row.name}
      </TableCell>
      <TableCell component="th" scope="row" >
        {props.row.description}
      </TableCell>
      <TableCell component="th" scope="row" >
        <Button
          onClick={() => setIsSelected(!isSelected)}
          variant={'contained'}
          color={'error'}
          size={'small'}
          startIcon={<Edit/>}
        >
            Vybrat
        </Button>
      </TableCell>
    </TableRow>
  )
}
