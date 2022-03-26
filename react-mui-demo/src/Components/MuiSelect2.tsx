import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

function MuiSelect2 () {
  const [countries, setCountries] = useState<string[]>([])

  console.log({
    countries
  })

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box width='250px'>
      <TextField
        label='Select a Country'
        select
        fullWidth
        value={countries}
        onChange={handleSelectChange}
        SelectProps={{
          multiple: true
        }}
        size='medium'
        color='warning'
        // error
      >
        <MenuItem value='India'> India </MenuItem>
        <MenuItem value='America'> USA </MenuItem>
        <MenuItem value='Australia'> Australia </MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect2
