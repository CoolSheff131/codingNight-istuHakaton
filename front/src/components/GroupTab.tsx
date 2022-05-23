import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ColorButton from './ColorButton';

const GroupTab = () => {
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}>
        Институт
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {Array.from(Array(10).keys()).map((number) => {
          return (
            <ColorButton key={number} variant="contained">
              ИИТиАД
            </ColorButton>
          );
        })}
      </Box>

      <Typography
        sx={{
          fontWeight: 500,
          color: '#000',
          fontSize: 18,
          marginTop: '32px',
        }}
      >
        Первый курс
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      >
        {Array.from(Array(10).keys()).map((number) => {
          return (
            <NavLink
              key={number}
              to={`${number}`}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="text"
                sx={{
                  padding: 0,
                  textTransform: 'none',
                  fontWeight: 400,
                  color: '#3B3D48',
                  fontSize: 16,
                  marginTop: '7px',
                  marginRight: '10px',
                }}
              >
                ИСТб-19-1
              </Button>
            </NavLink>
          );
        })}
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          color: '#000',
          fontSize: 18,
          marginTop: '32px',
        }}
      >
        Второй курс
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      >
        {Array.from(Array(10).keys()).map((number) => {
          return (
            <NavLink
              key={number}
              to={`${number}`}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="text"
                sx={{
                  padding: 0,
                  textTransform: 'none',
                  fontWeight: 400,
                  color: '#3B3D48',
                  fontSize: 16,
                  marginTop: '7px',
                  marginRight: '10px',
                }}
              >
                ИСТб-19-1
              </Button>
            </NavLink>
          );
        })}
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          color: '#000',
          fontSize: 18,
          marginTop: '32px',
        }}
      >
        Третий курс
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      >
        {Array.from(Array(10).keys()).map((number) => {
          return (
            <NavLink
              key={number}
              to={`${number}`}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="text"
                sx={{
                  padding: 0,
                  textTransform: 'none',
                  fontWeight: 400,
                  color: '#3B3D48',
                  fontSize: 16,
                  marginTop: '7px',
                  marginRight: '10px',
                }}
              >
                ИСТб-19-1
              </Button>
            </NavLink>
          );
        })}
      </Box>
      <Typography
        sx={{
          fontWeight: 500,
          color: '#000',
          fontSize: 18,
          marginTop: '32px',
        }}
      >
        Четвертый курс
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      >
        {Array.from(Array(10).keys()).map((number) => {
          return (
            <NavLink
              key={number}
              to={`${number}`}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="text"
                sx={{
                  padding: 0,
                  textTransform: 'none',
                  fontWeight: 400,
                  color: '#3B3D48',
                  fontSize: 16,
                  marginTop: '7px',
                  marginRight: '10px',
                }}
              >
                ИСТб-19-1
              </Button>
            </NavLink>
          );
        })}
      </Box>
    </Box>
  );
};

export default GroupTab;
