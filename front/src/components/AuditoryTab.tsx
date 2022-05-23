import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ColorButton from './ColorButton';

const AuditoryTab = () => {
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}>
        Корпус
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      >
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          A
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Б
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          В
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Г
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Д
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Е
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Ж
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          К
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          И
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Иные
        </ColorButton>
      </Box>

      <Typography
        sx={{
          fontWeight: 500,
          color: '#000',
          fontSize: 18,
          marginTop: '32px',
        }}
      >
        Первый этаж
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
                Г-101
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
        Второй этаж
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
                Г-101
              </Button>
            </NavLink>
          );
        })}
      </Box>
    </Box>
  );
};

export default AuditoryTab;
