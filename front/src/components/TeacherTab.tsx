import { Box, Button, Typography } from '@mui/material';
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
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
        <ColorButton variant="contained">A</ColorButton>
      </Box>

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
    </Box>
  );
};

export default TeacherTab;
