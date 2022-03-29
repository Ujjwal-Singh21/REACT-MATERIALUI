import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={4} direction='row'>

      <Badge color='primary' badgeContent={5}>
        <MailIcon />
      </Badge>

      <Badge color='secondary' badgeContent={0}>
        <MailIcon />
      </Badge>

      <Badge color='secondary' badgeContent={0} showZero>
        <MailIcon />
      </Badge>

      <Badge color='secondary' badgeContent={101}>
        <MailIcon />
      </Badge>

      <Badge color='secondary' badgeContent={101} max={1000}>
        <MailIcon />
      </Badge>

      <Badge variant='dot' color='warning'>
        <MailIcon />
      </Badge>

      <Badge variant='dot' color='warning' invisible={true}>
        <MailIcon />
      </Badge>
      
    </Stack>
  )
}
