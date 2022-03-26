import React, { useState } from 'react'
import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText
} from '@mui/material'

function MuiSwitch () {
  const [checked, setChecked] = useState(false)
  const [switchValue, setSwitchValue] = useState<string[]>([])

  console.log({
    checked
  })

  console.log({
    switchValue
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = switchValue.indexOf(event.target.value)
    console.log(index)

    if (index === -1) {
      setSwitchValue([...switchValue, event.target.value])
    } else {
      setSwitchValue(switchValue.filter(value => value !== event.target.value))
    }
  }

  return (
    <Box>
      <Box>
        <FormControlLabel
          label='Dark Mode'
          control={<Switch checked={checked} onChange={handleChange} />}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel> Select Boarding Details </FormLabel>

          <FormGroup row>
            <FormControlLabel
              label='Have Visa'
              control={
                <Switch
                  value='visa'
                  onChange={handleSwitchChange}
                  size='small'
                  color='success'
                />
              }
            />

            <FormControlLabel
              label='Have PassPort'
              control={
                <Switch
                  value='passport'
                  onChange={handleSwitchChange}
                  // size='small'
                  color='warning'
                />
              }
            />

            <FormControlLabel
              label='Have MasterCard'
              control={
                <Switch
                  value='masterCard'
                  onChange={handleSwitchChange}
                  size='small'
                  color='info'
                />
              }
            />
          </FormGroup>

          <FormHelperText> Write helperText here </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiSwitch
