import { Box, Typography } from '@mui/material';

const EventTab = () => {
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}>
        События
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      ></Box>
    </Box>
  );
};

export default EventTab;
