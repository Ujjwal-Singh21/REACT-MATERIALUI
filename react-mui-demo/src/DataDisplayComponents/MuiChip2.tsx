import { Stack, Chip } from '@mui/material'
import { useState } from 'react'

export const MuiChip2 = () => {
    
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip3', 'Chip 4'])

  const handleDelete = (chipToDelete: string) => {
    setChips(chips => chips.filter(chip => chip !== chipToDelete))
  }

  return (
    <Stack spacing={2} direction='row'>
    {
      chips.map(chip => (
        <Chip
          key={chip}
          label={chip}
          color='error'
          onDelete={() => handleDelete(chip)}
        />
      ))
    }
    </Stack>
  )
}
