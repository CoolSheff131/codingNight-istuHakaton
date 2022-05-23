import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Button, Typography } from '@mui/material';

type CustomPickerDayProps = PickersDayProps<Date> & {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
  isSelected: boolean;
  isToday: boolean;
  isOneWeek: boolean;
  outsideCurrentMonth: boolean;
};

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' &&
    prop !== 'isFirstDay' &&
    prop !== 'isLastDay' &&
    prop !== 'isSelected' &&
    prop !== 'isToday' &&
    prop !== 'isOneWeek' &&
    prop !== 'outsideCurrentMonth',
})<CustomPickerDayProps>(
  ({
    theme,
    dayIsBetween,
    isFirstDay,
    isLastDay,
    isSelected,
    isToday,
    isOneWeek,
    outsideCurrentMonth,
  }) => {
    return {
      ...{ backgroundColor: 'transparent', color: 'white' },
      ...(dayIsBetween &&
        {
          // borderRadius: 0,
          // backgroundColor: theme.palette.primary.main,
          // '&:hover, &:focus': {
          //     backgroundColor: theme.palette.primary.dark,
          // },
        }),
      ...(isFirstDay && {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
      }),
      ...(isLastDay && {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
      }),
      ...(isSelected && {
        backgroundColor: 'white !important',
        color: '#7165E3',
        transformStyle: 'preserve-3d',
        // '&:after': {
        //     content: "''",
        //     position: 'absolute',
        //     transform: 'translateZ(-1px)',
        //     backgroundColor: '#7165E3',
        //     width: '43px',
        //     height: '63px',
        //     bottom: 0,
        //     borderRadius: '20px'
        // }
      }),
      ...(isOneWeek &&
        !dayIsBetween && {
          display: 'none',
        }),

      ...(outsideCurrentMonth && {
        opacity: 0.5,
      }),
      ...(isToday && {
        border: 'none',
        position: 'relative',
        '&:after': {
          content: "''",
          position: 'absolute',
          backgroundColor: 'white',
          width: '4px',
          height: '4px',
          bottom: 0,
          borderRadius: '50%',
        },
      }),
    };
  },
) as React.ComponentType<CustomPickerDayProps>;

export default function CustomDay() {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [isOneWeek, setIsOneWeek] = React.useState(true);

  React.useEffect(() => {
    const a = document.getElementsByClassName(
      'MuiPickerStaticWrapper-root css-1snvurg-MuiPickerStaticWrapper-root',
    )[0] as HTMLDivElement;
    const b = document.getElementsByClassName(
      'MuiTypography-root MuiTypography-caption css-1w13o7u-MuiTypography-root',
    );
    const c = document.getElementsByClassName(
      'css-1dozdou',
    )[0] as HTMLDivElement;
    c.style.display = 'none';

    for (let i = 0; i < b.length; i++) {
      const element = b[i] as HTMLSpanElement;
      element.style.color = 'white';
      element.style.display = 'none';
      element.style.transformStyle = 'preserve-3d';
    }
    a.style.backgroundColor = 'transparent';
    const el = document.getElementsByClassName(
      'PrivatePickersSlideTransition-root css-dhopo2',
    )[0] as HTMLDivElement;
    el.style.overflow = 'visible';

    const as = el.children[0] as HTMLDivElement;
    as.style.overflow = 'visible';
  }, []);

  React.useEffect(() => {
    const a = document.getElementsByClassName(
      'PrivatePickersFadeTransitionGroup-root MuiCalendarPicker-viewTransitionContainer css-1wvgxus-MuiCalendarPicker-viewTransitionContainer',
    )[0] as HTMLDivElement;
    if (isOneWeek) {
      a.style.maxHeight = '50px';
    } else {
      a.style.maxHeight = '190px';
    }
    a.style.overflow = 'hidden';
    a.style.transition = 'max-height 0.15s ease-out';
  }, [isOneWeek]);

  const renderWeekPickerDay = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>,
  ) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek(value);
    const end = endOfWeek(value);
    const isToday = pickersDayProps['today'] ?? false;
    const dayIsBetween = isWithinInterval(date, { start, end });

    const outsideCurrentMonth = pickersDayProps['outsideCurrentMonth'] || false;
    pickersDayProps['today'] = false;
    pickersDayProps['selected'] = false;
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);
    const isSelected = isSameDay(date, value);
    return (
      <CustomPickersDay
        sx={{
          '&:active': {},
        }}
        {...pickersDayProps}
        disableMargin
        disableRipple
        disableTouchRipple
        isSelected={isSelected}
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
        isToday={isToday}
        isOneWeek={isOneWeek}
        outsideCurrentMonth={outsideCurrentMonth}
      />
    );
  };

  return (
    <Box sx={{ backgroundColor: '#8B80F8', marginTop: '18px' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography
            sx={{ width: '36px', color: 'white', textAlign: 'center' }}
          >
            Пн
          </Typography>
          <Typography
            sx={{ width: '36px', color: 'white', textAlign: 'center' }}
          >
            Вт
          </Typography>
          <Typography
            sx={{ width: '36px', color: 'white', textAlign: 'center' }}
          >
            Ср
          </Typography>
          <Typography
            sx={{ width: '36px', color: 'white', textAlign: 'center' }}
          >
            Чт
          </Typography>
          <Typography
            sx={{ width: '36px', color: 'white', textAlign: 'center' }}
          >
            Пт
          </Typography>
          <Typography
            sx={{ width: '36px', color: 'white', textAlign: 'center' }}
          >
            Сб
          </Typography>
          <Typography
            sx={{ width: '36px', color: 'white', textAlign: 'center' }}
          >
            Вс
          </Typography>
        </Box>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          showDaysOutsideCurrentMonth
          value={value}
          onMonthChange={(a) => {
            console.log(a);
          }}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderDay={renderWeekPickerDay}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="'Week of' MMM d"
        />
      </LocalizationProvider>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{ color: 'white', fontSize: '12px' }}
          onClick={() => setIsOneWeek(!isOneWeek)}
        >
          18 мая четная{' '}
          {isOneWeek ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </Button>
      </Box>
    </Box>
  );
}
