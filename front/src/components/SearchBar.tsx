import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import { Button, Divider, Popper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { ApiInstance, SearchOption } from '../api/Api';
import { NavLink } from 'react-router-dom';

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

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<SearchOption[]>([]);
  const [loading, setLoading] = React.useState(false)

  const [inputValue, setInputValue] = React.useState('');
  let delayTimer: NodeJS.Timeout;
  React.useEffect(() => {
    let active = true;
    if (!open || inputValue.length === 0) {
      setOptions([]);
      return undefined;
    }



    setLoading(true)
    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      ApiInstance.search(inputValue).then((data) => {
        if (active) {
          setOptions(data);
          setLoading(false)
        }
      })
    }, 100);




    return () => {
      active = false;
    };
  }, [inputValue]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete

      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}

      loading={loading}
      options={options}
      groupBy={(option) => option.type
      }
      getOptionLabel={(option) => option.name}
      sx={{
        width: '100%',
        '& 	.MuiAutocomplete-groupLabel': {
          backgroundColor: 'black',
        },
      }}
      noOptionsText={
        < Box sx={{ paddingLeft: '14px', display: 'flex', alignItes: 'center' }}>
          <SentimentVeryDissatisfiedIcon sx={{ color: '#979797' }} />
          <Typography
            sx={{
              fontSize: '16px',
              marginLeft: '11px',
              fontWeight: 500,
              color: '#979797',
              textAlign: 'center',
              fontFamily: 'Mont',
            }}
          >
            Ничего не найденно
          </Typography>
        </Box >
      }
      isOptionEqualToValue={(option, value) => option.name === value.name}
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
                  fontFamily: 'Mont',
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
        const opt = options.find(opt => {
          return opt.name === option.key
        })

        return (
          <NavLink to={`${opt!.url}`} key={option.id} style={{ textDecoration: 'none' }}>
            <Button {...option} onClick={() => {
            }} sx={{ fontFamily: 'Mont', textTransform: 'none' }}>{option.key}</Button>
          </NavLink>
        )
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


//const searchOptions = [
  // { title: 'Муми-тролли', type: groupsForSearch.Groups },
  // { title: 'Снорки', type: groupsForSearch.Groups },
  // { title: 'Мумрики', type: groupsForSearch.Groups },
  // { title: 'Шуссель', type: groupsForSearch.Teachers },
  // { title: 'Муми-мама', type: groupsForSearch.Teachers },
  // { title: 'Тюлиппа', type: groupsForSearch.Teachers },
  // { title: 'Морра', type: groupsForSearch.Teachers },
  // { title: 'Тофсла', type: groupsForSearch.Teachers },
  // { title: 'Юксаре', type: groupsForSearch.Teachers },
  // { title: 'Туу-тикки', type: groupsForSearch.Teachers },
  // { title: 'Ти-ти-у-у', type: groupsForSearch.Teachers },
  // { title: 'Обсерватория', type: groupsForSearch.Auditories },
  // { title: 'Зимний сад', type: groupsForSearch.Auditories },
  // { title: 'Грот', type: groupsForSearch.Auditories },
  // { title: 'Танцплощадка', type: groupsForSearch.Auditories },
  // { title: 'У кустов сирени', type: groupsForSearch.Auditories },
//];
