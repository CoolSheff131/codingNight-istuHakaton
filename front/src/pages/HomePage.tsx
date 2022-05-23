import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { styled } from '@mui/material/styles';
import Calendar from '../components/Calendar';

interface StyledTabProps {
  label: string;
}
const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',

  fontSize: 16,
  padding: 0,
  marginRight: theme.spacing(1),
  color: '#fff',
  transition: '.1s',
  '&.Mui-selected': {
    fontSize: 18,
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

const ColorButton = styled(Button)(({ theme }) => ({
  marginTop: 14,
  fontSize: 18,
  paddingLeft: 13,
  paddingRight: 13,
  paddingTop: 8,
  paddingBottom: 8,
  color: '#7165E3',
  textTransform: 'none',
  backgroundColor: '#E8E6FF',
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: '#7165E3',
  },
}));
const FavoriteButton = styled(Button)(({ theme }) => ({
  fontSize: 10,
  fontWeight: 500,
  paddingLeft: 13,
  paddingRight: 13,
  paddingTop: 8,
  paddingBottom: 8,
  color: '#7165E3',
  textTransform: 'none',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: '#7165E3',
  },
}));

const CssTextField = styled(TextField)({
  '&': {
    backgroundColor: 'white',
    borderRadius: '10px',
    outline: 'none',
    width: '100%',
    marginTop: '18px',
  },

  '& label.Mui-focused': {
    color: 'transparent',
  },
  '& .MuiInput-underline:after': {},
  '& .MuiOutlinedInput-root': {
    '&::placeholder': {
      color: 'blue',
      fontSize: '1.5em',
    },
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
});

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#8B80F8',
        height: '100vh',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '21px' }}>
          <IconButton sx={{ padding: 0, marginRight: '30px' }}>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
          <Typography
            variant="h1"
            component="h2"
            sx={{ fontSize: 22, color: 'white' }}
          >
            Расписание групп
          </Typography>
        </Box>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: 16, color: 'white', marginTop: '12px' }}
        >
          Расписание / Группы
        </Typography>

        <CssTextField
          placeholder="Поиск"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#A3A2BA' }} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <Box sx={{ display: 'flex', marginTop: '15px' }}>
          <FavoriteButton sx={{ marginRight: '9px' }} variant="contained">
            ИСТб-19-1
          </FavoriteButton>
          <FavoriteButton sx={{ marginRight: '9px' }} variant="contained">
            ЭВМб-19-1
          </FavoriteButton>
        </Box>

        <Calendar />
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Группы" />
          <StyledTab label="Преподаватели" />
          <StyledTab label="Аудитории" />
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
        <Container maxWidth="sm">
          {value === 0 && (
            <Box>
              <Typography
                sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}
              >
                Институт
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
              >
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
                <ColorButton variant="contained">ИИТиАД</ColorButton>
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
              </Box>
            </Box>
          )}
          {value === 1 && (
            <Box>
              <Typography
                sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}
              >
                Фамилия
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
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
          )}
          {value === 2 && (
            <Box>
              <Typography
                sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}
              >
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
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
