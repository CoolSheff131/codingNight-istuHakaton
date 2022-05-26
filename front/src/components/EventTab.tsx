import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
const EventTab = () => {
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px', fontFamily: 'Mont' }}>
        События
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>


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
