import { Box, Button, IconButton, Typography } from '@mui/material';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SwipeableViews from 'react-swipeable-views';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ open, onClose, onOpen }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    setDrawerSlide(0);
    onClose();
  };
  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };

  const [drawerSlide, setDrawerSlide] = React.useState(0);
  return (
    <SwipeableDrawer
      anchor={'right'}
      open={open}
      onClose={handleClose}
      onOpen={onOpen}
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
          <Typography sx={{ color: 'white' }}>MommyDoll Schedule</Typography>
          <IconButton sx={{ color: 'white' }} onClick={handleClose}>
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
                  onClick={() => {
                    handleNavigate('group');
                  }}
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
                  onClick={() => {
                    handleNavigate('teacher');
                  }}
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
                  onClick={() => {
                    handleNavigate('auditory');
                  }}
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
                  onClick={() => {
                    handleNavigate('event');
                  }}
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
  );
};

export default SideMenu;
