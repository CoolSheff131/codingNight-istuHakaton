import { Box, CssBaseline } from '@mui/material';
import Router from '../router/Router';

const App = () => (
  <>
    <CssBaseline />
    <Box sx={{ backgroundColor: '#8B80F8', marginLeft: 'calc(100vw - 100%)' }}>
      <Router />
    </Box>
  </>
);

export default App;
