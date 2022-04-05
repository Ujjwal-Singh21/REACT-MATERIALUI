import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>
      <LoadingButton variant='outlined'> Submit </LoadingButton>
      <LoadingButton variant='outlined' loading> Submit </LoadingButton>

      <LoadingButton variant='outlined' loadingIndicator='loading...'>
        Fetch Data
      </LoadingButton>
      <LoadingButton variant='outlined' loading loadingIndicator='loading...'>
        Fetch Data
      </LoadingButton>

      <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon />}>
        Fetch Data
      </LoadingButton>
      <LoadingButton variant='outlined' loading loadingPosition='start' startIcon={<SaveIcon />}>
        Fetch Data
      </LoadingButton>
    </Stack>
  )
}
