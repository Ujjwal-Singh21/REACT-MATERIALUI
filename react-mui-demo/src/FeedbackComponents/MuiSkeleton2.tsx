import { Stack, Box, Skeleton, Avatar, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export const MuiSkeleton2 = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <Box sx={{ width: '250px' }}>

     {
      loading ? (
        <Skeleton variant='rectangular' width={256} height={144} animation='wave' />
      ) : (
        <img
          src='https://source.unsplash.com/random/256x144'
          alt='skeleton'
          width={256}
          height={144}
        />
      )
    }

      <Stack
        spacing={1}
        direction='row'
        sx={{ width: '100%', marginTop: '12px' }}
      >
      {
        loading ? (
          <Skeleton variant='circular' width={40} height={40} animation='wave' />
        ) : (
          <Avatar> V </Avatar>
        )
      }
      </Stack>

      <Stack sx={{ width: '80%' }}>
      {
        loading ? (
          <>
            <Typography variant='body1'>
              <Skeleton variant='text' width='100%' animation='wave' />
            </Typography>
            <Typography variant='body2'>
              <Skeleton variant='text' width='100%' animation='wave' />
            </Typography>
          </>
        ) : (
          <Typography variant='body1'> React MUI Tutorial </Typography>
        )
      }
      </Stack>

    </Box>
  )
}
