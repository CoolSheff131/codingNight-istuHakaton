import { Box, Container } from '@mui/material';

import SwipeableViews from 'react-swipeable-views';
import React from 'react';
import Calendar from '../components/Calendar';
import SearchBar from '../components/SearchBar';
import ScheduleItem, { Type } from '../components/ScheduleItem';
import Break from '../components/Break';

const ScheduleTeacherPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <SearchBar />
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
          <Box sx={{ marginTop: '15px' }}>
            <SwipeableViews enableMouseEvents resistance>
              <ScheduleItem type={Type.type1} />
              <ScheduleItem type={Type.type1} />
            </SwipeableViews>
          </Box>
          <Box sx={{ marginTop: '15px' }}>
            <Break />
          </Box>
          <Box sx={{ marginTop: '15px' }}>
            <ScheduleItem type={Type.type2} />
          </Box>
          <Box sx={{ marginTop: '15px' }}>
            <SwipeableViews enableMouseEvents resistance>
              <ScheduleItem type={Type.type1} />
              <ScheduleItem type={Type.type1} />
            </SwipeableViews>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ScheduleTeacherPage;
