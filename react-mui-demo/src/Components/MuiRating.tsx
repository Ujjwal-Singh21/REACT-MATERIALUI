import React, { useState } from 'react'
import { Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

function MuiRating () {
  const [value1, setValue1] = useState<number | null>(null)
  const [value2, setValue2] = useState<number | null>(3)
  const [value3, setValue3] = useState<number | null>(null)

  console.log({
    value1
  })

  console.log({
    value2
  })

  console.log({
    value3
  })

  const handleRatingChange1 = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue1(newValue)
  }

  const handleRatingChange2 = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue2(newValue)
  }

  const handleRatingChange3 = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue3(newValue)
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Rating value={value1} onChange={handleRatingChange1} />
        <Rating
          value={value1}
          onChange={handleRatingChange1}
          highlightSelectedOnly
        />
      </Stack>

      <Stack spacing={2}>
        <Rating value={value2} onChange={handleRatingChange2} readOnly />
      </Stack>

      <Stack spacing={2}>
        <Rating
          value={value3}
          onChange={handleRatingChange3}
          precision={0.5}
          size='large'
          icon={<FavoriteIcon fontSize='inherit' color='error' />}
          emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        />
      </Stack>
    </Stack>
  )
}

export default MuiRating
