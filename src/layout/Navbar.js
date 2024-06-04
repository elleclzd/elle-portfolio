import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import pageIcon from '../assets/elle-doodle.PNG'
import { Avatar } from '@mui/material';
import ThemeContext from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';


const pages = ['Home', 'Services', 'Contact Me!'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState('Home');
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    handleCloseNavMenu();
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <AppBar position="static" sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // More transparent
          backdropFilter: 'blur(10px)', // Blur effect
          WebkitBackdropFilter: 'blur(10px)', // For Safari support
          padding: '10px 0px',
          boxShadow: 'none'
        }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Avatar sx={{ width: 56, height: 56, }} src={pageIcon} alt="Elle Doodle Icon" href='/' style={{ display: { xs: 'none', md: 'flex' }, marginRight: 1 }} />

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
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
                    <MenuItem key={page} onClick={() => handlePageClick(page)} selected={activePage === page}>
                      <Typography textAlign="center" sx={{ color: theme.primaryColor }}>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { xs: 'none', md: 'right' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    sx={{
                      my: 2,
                      color: activePage === page ? 'white' : theme.primaryColor,
                      display: 'block',
                      textDecoration: 'none',
                      position: 'relative',
                    }}

                  >
                    {page}
                    {activePage === page && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: 2,
                          backgroundColor: 'white',
                          transition: 'width 0.3s',
                        }}
                      />
                    )}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </ThemeContext.Consumer>
  );
}
export default ResponsiveAppBar;
