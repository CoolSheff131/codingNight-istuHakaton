import { Box, Container, Tab, Tabs } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import SearchBar from '../components/SearchBar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';



interface StyledTabProps {
  label: string;
  onClick: () => void;
}
const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontFamily: 'Mont',
  fontSize: 16,
  padding: 0,
  marginRight: theme.spacing(1),
  color: '#fff',
  transition: '.1s',
  '&.Mui-selected': {
    //fontSize: 18,
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    variant="scrollable"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#fff',
  },
});

const HomePage = () => {
  const location = useLocation();

  const [value, setValue] = React.useState(
    location.pathname === '/group'
      ? 0
      : location.pathname === '/teacher'
        ? 1
        : location.pathname === '/auditory'
          ? 2
          : 3,
  );
  React.useEffect(() => {
    setValue(
      location.pathname === '/group'
        ? 0
        : location.pathname === '/teacher'
          ? 1
          : location.pathname === '/auditory'
            ? 2
            : 3,
    );
  }, [location]);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  return (
    <>
      <Container maxWidth="sm">
        <SearchBar />

        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="????????????" onClick={() => navigate('group')} />

          <StyledTab
            label="??????????????????????????"
            onClick={() => navigate('teacher')}
          />

          <StyledTab label="??????????????????" onClick={() => navigate('auditory')} />

          <StyledTab label="??????????????????????" onClick={() => navigate('event')} />
        </StyledTabs>
      </Container>
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#F4F5FA',
          marginTop: '21px',
          borderRadius: '20px 20px 0 0',
        }}
      >
        <Container maxWidth="sm" sx={{ paddingTop: '20px' }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
