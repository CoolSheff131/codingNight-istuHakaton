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
import GroupTab from '../components/GroupTab';
import TeacherTab from '../components/TeacherTab';
import AuditoryTab from '../components/AuditoryTab';
import EventTab from '../components/EventTab';

interface StyledTabProps {
  label: string;
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

const FavoriteButton = styled(Button)(({ theme }) => ({
  fontSize: 10,
  fontWeight: 500,
  paddingLeft: 13,
  paddingRight: 13,
  paddingTop: 8,
  paddingBottom: 8,
  color: '#7165E3',
  textTransform: 'none',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: '#7165E3',
  },
}));

const HomePage = () => {
  const [value, setValue] = React.useState(0);

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
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Button>Группы</Button>
              <Button>Преподаватели</Button>
              <Button>Аудитории</Button>
              <Button>Мероприятия</Button>
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
          <FavoriteButton sx={{ marginRight: '9px' }} variant="contained">
            ИСТб-19-1
          </FavoriteButton>
          <FavoriteButton sx={{ marginRight: '9px' }} variant="contained">
            ЭВМб-19-1
          </FavoriteButton>
        </Box>

        <Calendar />
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Группы" />
          <StyledTab label="Преподаватели" />
          <StyledTab label="Аудитории" />
          <StyledTab label="Мероприятия" />
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
          {value === 0 && <GroupTab />}
          {value === 1 && <TeacherTab />}
          {value === 2 && <AuditoryTab />}
          {value === 3 && <EventTab />}
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
