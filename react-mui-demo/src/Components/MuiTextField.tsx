import { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

function MuiTextField () {
  const [value, setValue] = useState('')

  return (
    <Stack spacing={4}>

      <Stack spacing={2} direction='row'>
        <TextField label='Default-outlined' variant='outlined' />
        <TextField label='filled' variant='filled' />
        <TextField label='standard' variant='standard' />
      </Stack>

      <Stack spacing={2} direction='row'>
        <TextField label='size color' size='small' color='warning' />
      </Stack>

      <Stack spacing={2} direction='row'>
        <TextField label='required' required />
        <TextField label='helperText' helperText='Write helperText here' />
        <TextField
          label='password'
          type='password'
          helperText='Never share your password'
        />
        <TextField label='disabled' disabled />
        <TextField label='read-only' InputProps={{ readOnly: true }} />
      </Stack>

      <Stack spacing={2} direction='row'>
        <TextField label='Amount' InputProps={{
            startAdornment: <InputAdornment position='start'> $ </InputAdornment>
        }} />
        <TextField label='Weight' InputProps={{
            endAdornment: <InputAdornment position='end'> Kg </InputAdornment>
        }} />
        <TextField label='password' type='password' InputProps={{
            endAdornment: <InputAdornment position='end'> <VisibilityOffIcon /> </InputAdornment>
        }} />
      </Stack>

      <Stack spacing={2} direction='row'>
        <TextField
          label='Username'
          value={value}
          onChange={e => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Never share your Username'}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField
