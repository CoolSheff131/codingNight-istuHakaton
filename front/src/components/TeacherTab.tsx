import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ColorButton from './ColorButton';

const TeacherTab = () => {
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}>
        Фамилия
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
              A
            </ColorButton>
          );
        })}
      </Box>

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
              Асанов И.И.
            </Button>
          </NavLink>
        );
      })}
    </Box>
  );
};

export default TeacherTab;
