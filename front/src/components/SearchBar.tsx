import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { InputAdornment, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

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

export default function SearchField() {
  return (
    <Autocomplete
      id="grouped-demo"
      options={searchOptions.sort((a, b) => -b.type.localeCompare(a.type))}
      groupBy={(option) => option.type}
      getOptionLabel={(option) => option.title}
      sx={{
        width: 300,
        '& 	.MuiAutocomplete-groupLabel': {
          backgroundColor: 'black',
        },
      }}
      noOptionsText={
        <Box sx={{ paddingLeft: '14px', display: 'flex', alignItes: 'center' }}>
          <SentimentVeryDissatisfiedIcon />
          <Typography
            sx={{
              fontSize: '18px',
              marginLeft: '11px',
              fontWeight: 500,
              color: '#000000',
              textAlign: 'center',
            }}
          >
            Не найдено
          </Typography>
        </Box>
      }
      renderGroup={(params) => {
        return (
          <div>
            <Box
              sx={{ paddingLeft: '14px', display: 'flex', alignItes: 'center' }}
            >
              {params.group === 'Преподаватели' && <GroupsIcon />}
              {params.group === 'Аудитории' && <MeetingRoomIcon />}
              {params.group === 'Группы' && <SchoolIcon />}
              <Typography
                sx={{
                  fontSize: '18px',
                  marginLeft: '11px',
                  fontWeight: 500,
                  color: '#000000',
                  textAlign: 'center',
                }}
              >
                {params.group}
              </Typography>
            </Box>
            {params.children}
          </div>
        );
      }}
      // renderOption={(option: any) => {
      //     return (
      //         <span key={option.id}>
      //             {option.key}
      //         </span>

      //     );
      // }}
      renderInput={(params) => (
        <CssTextField
          {...params}
          placeholder="Поиск"
          // InputProps={{
          //     startAdornment: (
          //         <InputAdornment position="start">
          //             <SearchIcon sx={{ color: '#A3A2BA' }} />
          //         </InputAdornment>
          //     ),
          // }}
          variant="outlined"
        />
      )}
    />
  );
}

enum groupsForSearch {
  Groups = 'Группы',
  Teachers = 'Преподаватели',
  Auditories = 'Аудитории',
}

const searchOptions = [
  { title: 'ИСТб-19-1', type: groupsForSearch.Groups },
  { title: 'АСУб-19-1', type: groupsForSearch.Groups },
  { title: 'ЭВМб-19-1', type: groupsForSearch.Groups },
  { title: 'ИСМб-19-1', type: groupsForSearch.Groups },
  { title: 'Арш', type: groupsForSearch.Teachers },
  { title: 'Маланова', type: groupsForSearch.Teachers },
  { title: 'В-100', type: groupsForSearch.Auditories },
  { title: 'В-200', type: groupsForSearch.Auditories },
  { title: 'В-300', type: groupsForSearch.Auditories },
  { title: 'Г-300', type: groupsForSearch.Auditories },
  { title: 'Д-300', type: groupsForSearch.Auditories },
];
