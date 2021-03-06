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
import { ApiInstance } from '../api/Api';
import { deleteStudent, getStudent, saveStudent } from '../helpers/student';
import { Student } from '../models/Student';
import NoteIcon from '@mui/icons-material/Note';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
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
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLogining, setIsLogining] = React.useState(false)
  const [me, setMe] = React.useState<Student | null>()
  React.useEffect(() => {
    const student = getStudent()
    if (!student) {
      return
    }
    setMe(student)
  }, [])


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };
  const authHandle = () => {
    setIsLogining(true)
    ApiInstance.login(email, password).then(data => {
      console.log(data);
      saveStudent(data)
      setMe(data)
      setIsLogining(false)
      setDrawerSlide(0)
    })
  }
  const handleLogout = () => {
    deleteStudent()
    setMe(null)
  }

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
          <Typography sx={{ color: 'white', fontFamily: 'Mont', }}>MommyDoll Schedule</Typography>
          <IconButton sx={{ color: 'white' }} onClick={handleClose}>
            <CloseIcon sx={{ width: '32px', height: '32px' }} />
          </IconButton>
        </Box>
        {
          me && (
            <Typography sx={{ fontSize: 34, textAlign: 'center', color: 'white', fontFamily: 'Mont' }}>
              {me.firstName}
            </Typography>
          )
        }
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
                    textTransform: 'none'
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
                  ????????????
                </Button>
                <Button
                  sx={{
                    color: 'white',
                    fontSize: '24px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingLeft: '24px',
                    width: '100%',
                    fontFamily: 'Mont',
                    textTransform: 'none'
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
                  ??????????????????????????
                </Button>
                <Button
                  sx={{
                    color: 'white',
                    fontSize: '24px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingLeft: '24px',
                    fontFamily: 'Mont',
                    width: '100%',
                    textTransform: 'none'
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
                  ??????????????????
                </Button>
                <Button
                  sx={{
                    color: 'white',
                    fontSize: '24px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    paddingLeft: '24px',
                    width: '100%',
                    fontFamily: 'Mont',
                    textTransform: 'none'
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
                  ??????????????????????
                </Button>
                {
                  me && (
                    <>
                      <Button
                        sx={{
                          color: 'white',
                          fontSize: '24px',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          paddingLeft: '24px',
                          width: '100%',
                          fontFamily: 'Mont',
                          textTransform: 'none'
                        }}
                        startIcon={
                          <NoteIcon
                            sx={{
                              marginRight: '8px',
                              width: '32px',
                              height: '32px',
                            }}
                          />
                        }
                        onClick={() => {
                          handleNavigate('notes');
                        }}
                      >
                        ??????????????
                      </Button>
                      <Button
                        sx={{
                          color: 'white',
                          fontSize: '24px',
                          display: 'flex',
                          justifyContent: 'flex-start',
                          paddingLeft: '24px',
                          width: '100%',
                          fontFamily: 'Mont',
                          textTransform: 'none'
                        }}
                        startIcon={
                          <ChatBubbleIcon
                            sx={{
                              marginRight: '8px',
                              width: '32px',
                              height: '32px',
                            }}
                          />
                        }
                        onClick={() => {
                          handleNavigate('notes');
                        }}
                      >
                        ????????????????????
                      </Button>
                    </>
                  )
                }

              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                {
                  me ? (
                    <Button
                      onClick={handleLogout}
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
                        marginBottom: '20px',
                        fontFamily: 'Mont',
                        border: '2px solid white',
                        textTransform: 'none',
                      }}
                    >
                      ??????????
                    </Button>
                  ) : (
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
                        fontFamily: 'Mont',
                        textTransform: 'none'
                      }}
                    >
                      ????????
                    </Button>
                  )
                }

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
                    fontFamily: 'Mont',

                  }}
                >
                  ????????
                </Typography>
                <input
                  value={email}
                  onChange={handleEmailChange}
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
                    fontFamily: 'Mont'
                  }}
                  disabled={isLogining}
                  placeholder="??????????"
                  type="email"
                />
                <input
                  value={password}
                  onChange={handlePasswordChange}
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
                    fontFamily: 'Mont'
                  }}
                  disabled={isLogining}
                  placeholder="????????????"
                  type="password"
                />
                <Button
                  sx={{
                    '&:hover': { backgroundColor: '#ECD92F' },
                    marginTop: '40px',
                    fontSize: '24px',
                    backgroundColor: '#ECD92F',
                    color: '#313131',
                    textTransform: 'none',
                    fontFamily: 'Mont',
                  }}
                  disabled={isLogining}
                  onClick={authHandle}
                >
                  ??????????
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
                    fontFamily: 'Mont'
                  }}
                >
                  ??????????
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
