import {
  Box,
  Button,
  Container,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import React from 'react';
import { styled } from '@mui/material/styles';
import Calendar from '../components/Calendar';
import SearchBar from '../components/SearchBar';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteButton from '../components/FavoriteButton';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SwipeableViews from 'react-swipeable-views';
import { Scrollbars } from 'react-custom-scrollbars';

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
  const [drawerSlide, setDrawerSlide] = React.useState(0);

  return (
    <Scrollbars
      //renderView={() => <Box sx={{ height: '100vh' }} />}
      style={{ minHeight: '100vh', backgroundColor: '#8B80F8' }}
    >
      {/* <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#8B80F8',
        minHeight: '100vh',
      }} /> */}

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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                paddingBottom: '30px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingRight: '25px',
                  paddingLeft: '25px',
                }}
              >
                <Typography sx={{ color: 'white' }}>
                  MommyDoll Schedule
                </Typography>
                <IconButton
                  sx={{ color: 'white' }}
                  onClick={() => setState(false)}
                >
                  <CloseIcon sx={{ width: '32px', height: '32px' }} />
                </IconButton>
              </Box>
              <Box sx={{ height: '100%' }}>
                <SwipeableViews
                  containerStyle={{ height: '100%' }}
                  slideStyle={{ height: '100%' }}
                  style={{ height: '100%' }}
                  disabled
                  index={drawerSlide}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Box>
                      <Button
                        sx={{
                          color: 'white',
                          fontSize: '24px',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          paddingLeft: '24px',
                          width: '100%',
                        }}
                        startIcon={
                          <SchoolIcon
                            sx={{
                              marginRight: '8px',
                              width: '32px',
                              height: '32px',
                            }}
                          />
                        }
                      >
                        Группы
                      </Button>
                      <Button
                        sx={{
                          color: 'white',
                          fontSize: '24px',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          paddingLeft: '24px',
                          width: '100%',
                        }}
                        startIcon={
                          <GroupsIcon
                            sx={{
                              marginRight: '8px',
                              width: '32px',
                              height: '32px',
                            }}
                          />
                        }
                      >
                        Преподаватели
                      </Button>
                      <Button
                        sx={{
                          color: 'white',
                          fontSize: '24px',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          paddingLeft: '24px',
                          width: '100%',
                        }}
                        startIcon={
                          <MeetingRoomIcon
                            sx={{
                              marginRight: '8px',
                              width: '32px',
                              height: '32px',
                            }}
                          />
                        }
                      >
                        Аудитории
                      </Button>
                      <Button
                        sx={{
                          color: 'white',
                          fontSize: '24px',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          paddingLeft: '24px',
                          width: '100%',
                        }}
                        startIcon={
                          <CalendarTodayIcon
                            sx={{
                              marginRight: '8px',
                              width: '32px',
                              height: '32px',
                            }}
                          />
                        }
                      >
                        Мероприятия
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Button
                        onClick={() => setDrawerSlide(1)}
                        style={{
                          color: '#7165E3',
                          fontSize: '24px',
                          backgroundColor: 'white',
                          display: 'flex',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          marginLeft: '25px',
                          marginRight: '25px',
                          marginBottom: '20px',
                        }}
                      >
                        Вход
                      </Button>
                      <NavLink
                        to={'register'}
                        style={{
                          color: 'white',
                          fontSize: '24px',
                          display: 'flex',
                          justifyContent: 'center',
                          textDecoration: 'undeline',
                          width: '100%',
                        }}
                      >
                        Регистрация
                      </NavLink>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      height: '100%',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <Box
                      sx={{
                        marginLeft: '25px',
                        marginRight: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: 'center',
                          color: 'white',
                          fontSize: '32px',
                        }}
                      >
                        Вход
                      </Typography>
                      <input
                        style={{
                          backgroundColor: 'white',
                          borderRadius: '6px',
                          border: 'none',
                          outline: 'none',
                          marginTop: '30px',
                          fontSize: '24px',
                          paddingLeft: '20px',
                          paddingTop: '14px',
                          paddingBottom: '14px',
                        }}
                        placeholder="Логин"
                        type="text"
                      />
                      <input
                        style={{
                          backgroundColor: 'white',
                          borderRadius: '6px',
                          border: 'none',
                          outline: 'none',
                          marginTop: '30px',
                          fontSize: '24px',
                          paddingLeft: '20px',
                          paddingTop: '14px',
                          paddingBottom: '14px',
                        }}
                        placeholder="Пароль"
                        type="password"
                      />
                      <Button
                        sx={{
                          '&:hover': { backgroundColor: '#ECD92F' },
                          marginTop: '40px',
                          fontSize: '24px',
                          backgroundColor: '#ECD92F',
                          color: '#313131',
                        }}
                      >
                        Вход
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Button
                        onClick={() => setDrawerSlide(0)}
                        style={{
                          color: 'white',
                          fontSize: '24px',
                          backgroundColor: 'transparent',
                          display: 'flex',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          marginLeft: '25px',
                          marginRight: '25px',
                        }}
                      >
                        Назад
                      </Button>
                    </Box>
                  </Box>
                </SwipeableViews>
              </Box>
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
    </Scrollbars>
  );
};

export default HomePage;
