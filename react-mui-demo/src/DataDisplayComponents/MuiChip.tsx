import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

export const MuiChip = () => {
  return (
    <Stack spacing={4} direction='row'>
      <Chip label='Small Chip' color='primary' size='small' />
      <Chip label='Medium Chip' color='secondary' size='medium' />

      <Chip label='Icon Chip' color='info' icon={<FaceIcon />} />
      <Chip label='Outlined Chip' variant='outlined' color='info' />

      <Chip
        label='Avatar Chip'
        variant='outlined'
        color='warning'
        avatar={<Avatar> V </Avatar>}
      />

      <Chip label='Click' color='success' onClick={() => alert(`Clicked`)} />
      <Chip
        label='Delete'
        color='error'
        onClick={() => alert(`Clicked`)}
        onDelete={() => alert(`Delete handler called`)}
      />
    </Stack>
  )
}
