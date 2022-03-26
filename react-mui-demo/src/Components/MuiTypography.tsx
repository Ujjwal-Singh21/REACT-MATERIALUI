import { Typography } from '@mui/material'

function MuiTypography () {
  return (
    <div>
      <Typography variant='h1'> h1 Heading </Typography>
      <Typography variant='h2'> h2 Heading </Typography>
      <Typography variant='h3'> h3 Heading </Typography>
      <Typography variant='h4' component='h1' gutterBottom> h4 Heading </Typography>
      <Typography variant='h5'> h5 Heading </Typography>
      <Typography variant='h6'> h6 Heading </Typography>

      <Typography variant='subtitle1'> Sub Title1 </Typography>
      <Typography variant='subtitle2'> Sub Title2 </Typography>
      
      <Typography variant='body1'>
        Nadeem–Shravan were the most successful Bollywood music directors of the
        1990s until the early 2000s. They displayed a strong influence of
        Hindustani (classical / semi-classical) music in their compositions, and
        were the only composers during the 1990s and 2000s who relied heavily on
        three particular instruments: the bansuri, the sitar and the shehnai in
        almost all of their songs. By using these instruments in a modern way
        without disconnecting them from their original value, their contribution
        is unique compared to some rising music directors evolving a new music
        style beginning in the mid-1990s. They are considered one of the most
        successful and greatest music composers in Hindi cinema history. Their
        breakthrough soundtrack album was Aashiqui (1990), which sold 20 million
        units in India,[3] and became the best-selling Bollywood soundtrack
        album of all time.
      </Typography> <br />
      <Typography variant='body2'>
        [4] Nadeem–Shravan were also behind many of the other best-selling
        Bollywood soundtrack albums of the 1990s.[4] Their success helped
        establish the music label T-Series.[5] The duo's career temporarily came
        to a halt with the murder of T-Series founder Gulshan Kumar by Mumbai
        underworld syndicate D-Company, with Nadeem Akhtar Saifi initially
        accused of involvement, before later being exonerated. The duo
        eventually made a comeback in the 2000s.
      </Typography>
    </div>
  )
}

export default MuiTypography
