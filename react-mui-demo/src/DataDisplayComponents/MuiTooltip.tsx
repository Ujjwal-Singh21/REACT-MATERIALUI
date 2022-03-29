import { Stack, Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const MuiTooltip = () => {
  return (
    <Stack spacing={2} direction='row'>
      <Tooltip title='Delete'>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title='Delete' placement='right' arrow>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title='Delete' placement='right' arrow enterDelay={1000} leaveDelay={500}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  )
}
