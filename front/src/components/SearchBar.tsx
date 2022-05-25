import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { Button, Divider, Popper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
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
      options={searchOptions.sort((a, b) => -b.type.localeCompare(a.type))}
      groupBy={(option) => option.type}
      getOptionLabel={(option) => option.title}
      sx={{
        width: '100%',
        '& 	.MuiAutocomplete-groupLabel': {
          backgroundColor: 'black',
        },
      }}
      noOptionsText={
        <Box sx={{ paddingLeft: '14px', display: 'flex', alignItes: 'center' }}>
          <SentimentVeryDissatisfiedIcon sx={{ color: '#979797' }} />
          <Typography
            sx={{
              fontSize: '16px',
              marginLeft: '11px',
              fontWeight: 500,
              color: '#979797',
              textAlign: 'center',
            }}
          >
            Ничего не найденно
          </Typography>
        </Box>
      }
      renderGroup={(params) => {
        return (
          <div>
            <Box
              sx={{ paddingLeft: '14px', display: 'flex', alignItes: 'center' }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  marginLeft: '11px',
                  fontWeight: 500,
                  color: '#979797',
                  textAlign: 'center',
                }}
              >
                {params.group}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {params.children}
            </Box>
            <Divider light sx={{ marginTop: '20px', marginBottom: '20px' }} />
          </div>
        );
      }}
      renderOption={(option: any) => {
        return <Button key={option.id}>{option.key}</Button>;
      }}
      PopperComponent={(PopperOptions: any) => {
        return (
          <Popper
            style={{
              ...PopperOptions.style,
            }}
            className={PopperOptions.className}
            open={PopperOptions.open}
            anchorEl={PopperOptions.anchorEl}
          >
            {/* <Scrollbars

              style={{ height: '250px' }}
            > */}
            {/* <Box sx={{ overflow: 'hidden', backgroundColor: 'white' }}> */}
            {PopperOptions.children}

            {/* </Box> */}

            {/* </Scrollbars> */}
          </Popper>
        );
      }}
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
  { title: 'Маланов1а', type: groupsForSearch.Teachers },
  { title: 'Маланов2а', type: groupsForSearch.Teachers },
  { title: 'Маланов3а', type: groupsForSearch.Teachers },
  { title: 'Маланов4а', type: groupsForSearch.Teachers },
  { title: 'Маланов5а', type: groupsForSearch.Teachers },
  { title: 'Маланов6а', type: groupsForSearch.Teachers },
  { title: 'Маланов7а', type: groupsForSearch.Teachers },
  { title: 'Маланов8а', type: groupsForSearch.Teachers },
  { title: 'В-100', type: groupsForSearch.Auditories },
  { title: 'В-200', type: groupsForSearch.Auditories },
  { title: 'В-300', type: groupsForSearch.Auditories },
  { title: 'Г-300', type: groupsForSearch.Auditories },
  { title: 'Д-300', type: groupsForSearch.Auditories },
];
