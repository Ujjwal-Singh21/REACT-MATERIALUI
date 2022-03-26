import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

function MuiSelect () {
  const [country, setCountry] = useState('')

  console.log({
    country
  })

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }

  return (
    <Box width='250px'>
      <TextField
        label='Select a Country'
        select
        fullWidth
        value={country}
        onChange={handleSelectChange}
      >
        <MenuItem value='india'> India </MenuItem>
        <MenuItem value='us'> USA </MenuItem>
        <MenuItem value='aus'> Australia </MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect
