import { Stack, CircularProgress, LinearProgress } from '@mui/material'

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color='error' />
      <CircularProgress color='warning' variant='determinate' value={60} />

      <LinearProgress />
      <LinearProgress color='error' />
      <LinearProgress color='warning' variant='determinate' value={60} />
    </Stack>
  )
}
