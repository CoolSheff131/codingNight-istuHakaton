import { Box, Typography } from '@mui/material';

const Break = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        marginLeft: '10px',
        marginRight: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '8px',
        paddingBottom: '8px',
        justifyContent: 'space-between',
        backgroundColor: '#E5FFEF',
        borderRadius: '10px',
      }}
    >
      <Typography sx={{ color: '#1BA44E' }}>Перерыв</Typography>
      <Typography sx={{ color: '#1BA44E' }}>30 минут</Typography>
    </Box>
  );
};

export default Break;
