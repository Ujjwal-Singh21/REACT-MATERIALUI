import { Stack, Link, Typography } from '@mui/material'

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>

      <Link href='#'> Link1 </Link>
      <Link href='#' underline='hover'> Link2 </Link>
      <Link href='#' underline='none'> Link3 </Link>
      <Link href='#' variant='h6'> Link4 </Link>

      <Typography variant='h6'>
        <Link href='#'> Typography </Link>
      </Typography>

      <Typography variant='h6'>
        <Link href='#' color='secondary' underline='hover'> Secondary </Link>
      </Typography>
      
    </Stack>
  )
}
