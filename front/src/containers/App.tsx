import Router from '../router/Router';

import {
  CssBaseline,
  Box,
  Container,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import SideMenu from '../components/SideMenu';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { useLocation } from 'react-router-dom';

const App = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div>
      <CssBaseline />
      <Scrollbars
        //renderView={() => <Box sx={{ height: '100vh' }} />}
        style={{ minHeight: '100vh', backgroundColor: '#7165E3' }}
      >
        {/* <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#8B80F8',
        minHeight: '100vh',
      }} /> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Container maxWidth="sm">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '21px',
                justifyContent: 'space-between',
              }}
            >
              <NavLink
                to={`/group`}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{ fontSize: 22, color: 'white', fontFamily: 'Mont', fontWeight: 600 }}
                >
                  Расписание
                </Typography>
              </NavLink>
              <IconButton onClick={() => setIsSideMenuOpen(true)} sx={{ padding: 0 }}>
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>
              <SideMenu
                open={isSideMenuOpen}
                onClose={() => setIsSideMenuOpen(false)}
                onOpen={() => setIsSideMenuOpen(true)}
              />
            </Box>
            {/* <NavLink
              to={`/group`}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h2"
                component="h2"

                sx={{ cursor: 'pointer', fontSize: 16, fontFamily: 'Mont', color: 'white', marginTop: '12px' }}
              >
                {
                  location.pathname
                }

              </Typography>
            </NavLink> */}

          </Container>
          <Router />
        </Box>
      </Scrollbars>
    </div>
  );
};
export default App;
