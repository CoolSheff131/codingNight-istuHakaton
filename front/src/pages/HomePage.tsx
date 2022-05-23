import {
  Box,
  Button,
  Container,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import React from 'react';
import { styled } from '@mui/material/styles';
import Calendar from '../components/Calendar';
import SearchBar from '../components/SearchBar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteButton from '../components/FavoriteButton';
interface StyledTabProps {
  label: string;
  onClick: () => void;
}
const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',

  fontSize: 16,
  padding: 0,
  marginRight: theme.spacing(1),
  color: '#fff',
  transition: '.1s',
  '&.Mui-selected': {
    //fontSize: 18,
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    scrollButtons
    allowScrollButtonsMobile
    variant="scrollable"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#fff',
  },
});

const HomePage = () => {
  const location = useLocation();

  const [value, setValue] = React.useState(
    location.pathname === '/group'
      ? 0
      : location.pathname === '/teacher'
      ? 1
      : location.pathname === '/auditory'
      ? 2
      : 3,
  );
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#8B80F8',
        height: '100vh',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '21px' }}>
          <IconButton
            onClick={() => setState(true)}
            sx={{ padding: 0, marginRight: '30px' }}
          >
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <SwipeableDrawer
            anchor={'left'}
            open={state}
            onClose={() => setState(false)}
            onOpen={() => setState(true)}
            PaperProps={{ sx: { width: '100%', backgroundColor: '#7165E3' } }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ color: 'white' }}>
                  MommyDoll Schedule
                </Typography>
                <IconButton
                  sx={{ color: 'white' }}
                  onClick={() => setState(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Button sx={{ color: 'white' }}>Группы</Button>
              <Button sx={{ color: 'white' }}>Преподаватели</Button>
              <Button sx={{ color: 'white' }}>Аудитории</Button>
              <Button sx={{ color: 'white' }}>Мероприятия</Button>
            </Box>
          </SwipeableDrawer>
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: 22, color: 'white' }}
          >
            Расписание групп
          </Typography>
        </Box>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: 16, color: 'white', marginTop: '12px' }}
        >
          Расписание / Группы
        </Typography>

        <SearchBar />

        <Box sx={{ display: 'flex', marginTop: '15px' }}>
          <FavoriteButton
            onClick={() => navigate('/schedule')}
            sx={{ marginRight: '9px' }}
            variant="contained"
          >
            ИСТб-19-1
          </FavoriteButton>
          <FavoriteButton
            onClick={() => navigate('/schedule')}
            sx={{ marginRight: '9px' }}
            variant="contained"
          >
            ЭВМб-19-1
          </FavoriteButton>
        </Box>

        <Calendar />
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Группы" onClick={() => navigate('group')} />

          <StyledTab
            label="Преподаватели"
            onClick={() => navigate('teacher')}
          />

          <StyledTab label="Аудитории" onClick={() => navigate('auditory')} />

          <StyledTab label="Мероприятия" onClick={() => navigate('event')} />
        </StyledTabs>
      </Container>
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#F4F5FA',
          marginTop: '21px',
          borderRadius: '20px 20px 0 0',
        }}
      >
        <Container maxWidth="sm">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
