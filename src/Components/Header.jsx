import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Menu, MenuItem, Badge, Avatar, Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header() {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const [cartCount] = useState(0); // Dynamic count for items in cart

  const handleProfileMenu = (event) => setProfileAnchorEl(event.currentTarget);
  const handleCategoryMenu = (event) => setCategoryAnchorEl(event.currentTarget);
  const closeMenu = () => {
    setProfileAnchorEl(null);
    setCategoryAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#262626' }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'row', md: 'row' },
          padding: { xs: '0 8px', md: '0 24px' }
        }}>
          <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
            e-commerce
          </Typography>

          {/* Category Button */}
          <Box sx={{ display: 'flex' }}>
            <Button color="inherit" onClick={handleCategoryMenu}>
              Category
            </Button>
            <Menu anchorEl={categoryAnchorEl} open={Boolean(categoryAnchorEl)} onClose={closeMenu}>
              <MenuItem component={Link} to="/mobile" onClick={closeMenu}>Mobile</MenuItem>
              <MenuItem component={Link} to="/laptop" onClick={closeMenu}>Laptop</MenuItem>
              <MenuItem component={Link} to="/earbuds" onClick={closeMenu}>Earbuds</MenuItem>
              <MenuItem component={Link} to="/tv" onClick={closeMenu}>TV</MenuItem>
              <MenuItem component={Link} to="/ref" onClick={closeMenu}>Refrigerator</MenuItem>
            </Menu>
          </Box>

          {/* Search bar */}
          <Box sx={{
            display: 'flex',
            backgroundColor: '#ccc',
            borderRadius: 4,
            alignItems: 'center',
            padding: '0 8px',
            width: { xs: 'auto', md: '400px' },
            flexGrow: { xs: 1, md: 0 },
            mx: { xs: 1, md: 2 }
          }}>
            <SearchIcon sx={{ color: 'black', mr: 1 }} />
            <InputBase placeholder="Search…" sx={{ width: '100%' }} />
          </Box>

          {/* Cart and profile icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to='/Add'>
              <IconButton color="inherit">
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            <IconButton color="inherit" onClick={handleProfileMenu}>
              <Avatar src="https://i.pinimg.com/736x/30/57/b9/3057b93a8c8b26f0dacfafa3759b1981.jpg" />
            </IconButton>
            <Menu anchorEl={profileAnchorEl} open={Boolean(profileAnchorEl)} onClose={closeMenu}>
              <Link to='/profile'>
                <MenuItem onClick={closeMenu}>Profile</MenuItem>
              </Link>
              <Link to='/'>
                <MenuItem onClick={closeMenu}>Logout</MenuItem>
              </Link>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ paddingTop: '64px' }}>
        {/* Main content */}
      </Box>
    </>
  );
}

export default Header;
