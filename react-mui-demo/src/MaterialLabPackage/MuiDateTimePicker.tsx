import { Stack, TextField } from '@mui/material'
import { DateTimePicker } from '@mui/lab'
import { useState } from 'react'

export const MuiDateTimePicker = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

  console.log({ selectedDateTime })

  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DateTimePicker
        label='Time Picker'
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue)
        }}
      />
    </Stack>
  )
}
