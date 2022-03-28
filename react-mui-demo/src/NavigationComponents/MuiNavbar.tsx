import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export const MuiNavbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemonIcon />
        </IconButton>

        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          PokemonApp
        </Typography>

        <Stack spacing={2} direction='row'>
          <Button color='inherit'> Features </Button>
          <Button color='inherit'> Pricing </Button>
          <Button color='inherit'> About </Button>
          <Button color='inherit'> LogIn </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
