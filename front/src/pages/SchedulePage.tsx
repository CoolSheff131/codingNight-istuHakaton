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
import SwipeableViews from 'react-swipeable-views';
import React from 'react';
import { styled } from '@mui/material/styles';
import Calendar from '../components/Calendar';
import SearchBar from '../components/SearchBar';
import ScheduleItem from '../components/ScheduleItem';
import { useTheme } from '@mui/material/styles';

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

const SchedulePage = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
          <IconButton sx={{ padding: 0, marginRight: '30px' }}>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
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
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: 40, color: 'white', marginTop: '15px' }}
        >
          АД-211
        </Typography>
        <Calendar />
      </Container>
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#F4F5FA',
          marginTop: '21px',
          borderRadius: '20px 20px 0 0',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{ paddingTop: '25px', paddingBottom: '25px' }}
        >
          <SwipeableViews>
            <ScheduleItem />
            <ScheduleItem />
          </SwipeableViews>
        </Container>
      </Box>
    </Box>
  );
};

export default SchedulePage;
