import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React, { useState } from 'react'

export const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.currentTarget); // -> the whole button comes here
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClick}
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button color='inherit'> LogIn </Button>
        </Stack>

        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'resources-button'
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem onClick={handleClose}> Blog </MenuItem>
          <MenuItem onClick={handleClose}> Podcast </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
