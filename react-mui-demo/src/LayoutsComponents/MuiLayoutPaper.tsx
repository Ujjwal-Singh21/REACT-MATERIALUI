import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

function MuiLayoutPaper () {
  return (
    <Paper sx={{ padding: '32px' }} elevation={6}>
      <Stack
        sx={{ border: '1px solid' }}
        direction='row'
        spacing={2}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Box
          sx={{
            backgroundColor: 'error.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'error.light'
            }
          }}
        >
          CodeEvolution
        </Box>

        <Box
          display='flex'
          height='100px'
          width='100px'
          bgcolor='info.light'
          p={2}
        ></Box>
      </Stack>

      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor='primary.light' p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MuiLayoutPaper
