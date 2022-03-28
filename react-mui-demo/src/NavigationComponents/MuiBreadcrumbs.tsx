import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label='breadcrumb'
        separator={<NavigateNextIcon fontSize='small' />}
        maxItems={3}
        // itemsBeforeCollapse={2}
        itemsAfterCollapse={2}
      >
        <Link href='#' underline='hover'> Home </Link>
        <Link href='#' underline='hover'> Cataloge </Link>
        <Link href='#' underline='hover'> Accessories </Link>

        <Typography color='text.primary'> Shoes </Typography>
      </Breadcrumbs>
    </Box>
  )
}
