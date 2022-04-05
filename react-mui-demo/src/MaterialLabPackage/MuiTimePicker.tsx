import { Stack, TextField } from '@mui/material'
import { TimePicker } from '@mui/lab'
import { useState } from 'react'

export const MuiTimePicker = () => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)

  //   console.log({ selectedTime })

  console.log({
    selectedTime: selectedTime && selectedTime.toLocaleTimeString()
  })

  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <TimePicker
        label='Time Picker'
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue)
        }}
      />
    </Stack>
  )
}
