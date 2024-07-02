'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Button from '@mui/material/Button';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';

const pages = [
  { path: '/', name: 'Home' },
  { path: '/category/Beauty', name: 'Beauty' },
  { path: '/category/Fashion', name: 'Fashion' },
  { path: '/category/Health', name: 'Health' },
  { path: '/category/Entertainment', name: 'Entertainment' },
  { path: '/category/Lifestyle', name: 'Lifestyle' },
  { path: '/category/Relationship', name: 'Relationship' },
  { path: '/category/Travel', name: 'Travel' },
  { path: '/category/Homestyle', name: 'Homestyle' },
  { path: '/category/Automobiles', name: 'Automobiles' },
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1.5px solid #eee',
        height: '60px', // Adjust height as needed,
        border: '1.5px solid #eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
              sx={{ marginRight: '16px' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link href={page.path} passHref>
                    <Typography variant="body2" color="textPrimary">
                      {page.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, mx: 1.5, color: 'black' }}
              >
                <Link href={page.path} passHref>
                  <Typography variant="body2" color="textPrimary">
                    {page.name}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>

          {/* Social Icons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto',
            }}
          >
            <FacebookIcon sx={{ fontSize: 24, color: '#3b5998', mx: 1 }} />
            <InstagramIcon sx={{ fontSize: 24, color: '#c32aa3', mx: 1 }} />
            <PinterestIcon sx={{ fontSize: 24, color: '#bd081c', mx: 1 }} />

            {/* Search Icon */}
            <Tooltip sx={{height:'100%'}} title="Search">
              <Box
                sx={{
                  bgcolor: '#00b0ff',
                  // borderRadius: '50%',
                  p: 1,
                  ml: 1,
                  cursor: 'pointer',
                }}
              >
                <SearchIcon sx={{ fontSize: 24, color: 'white' }} />
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
