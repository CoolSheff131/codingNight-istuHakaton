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

import { Scrollbars } from 'react-custom-scrollbars';
import SideMenu from '../components/SideMenu';

const App = () => {
  const [state, setState] = React.useState(false);

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
              <Typography
                variant="h1"
                component="h2"
                sx={{ fontSize: 22, color: 'white' }}
              >
                Расписание групп
              </Typography>
              <IconButton onClick={() => setState(true)} sx={{ padding: 0 }}>
                <MenuIcon sx={{ color: 'white' }} />
              </IconButton>
              <SideMenu
                open={state}
                onClose={() => setState(false)}
                onOpen={() => setState(true)}
              />
            </Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: 16, color: 'white', marginTop: '12px' }}
            >
              Расписание / Группы
            </Typography>
          </Container>
          <Router />
        </Box>
      </Scrollbars>
    </div>
  );
};
export default App;
