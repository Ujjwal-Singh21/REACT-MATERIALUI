import { Box } from '@mui/material'

function MuiLayoutBox () {
  return (
    <>
      {/* <Box> CodeEvolution (internally as div) </Box>
      <Box component='span'> CodeEvolution (internally as span) </Box> */}

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
    </>
  )
}

export default MuiLayoutBox
