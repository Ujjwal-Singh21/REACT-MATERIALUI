import { Box, Stack, Divider } from '@mui/material'

function MuiLayoutStack () {
  return (
    <Stack
      sx={{ border: '1px solid' }}
      direction='row'
    //   direction='row-reverse'
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
        p={2} // p means padding where by default its multiplied by 2
      ></Box>
      
    </Stack>
  )
}

export default MuiLayoutStack
