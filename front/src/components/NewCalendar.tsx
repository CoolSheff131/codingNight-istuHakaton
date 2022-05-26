import { Datepicker, formatDate, localeRu } from "@mobiscroll/react";
import { Button, Box } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React from "react";

interface NewCalendarProps {
    value: Date;
    onChange: (ev: any) => void;
}

const NewCalendar: React.FC<NewCalendarProps> = ({ value, onChange }) => {

    const [type, setType] = React.useState<"month" | "week" | "year">('week')
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ borderRadius: '5px', width: '100%', overflow: 'hidden' }}>
                <Datepicker
                    isOpen={true}
                    display={'inline'}
                    value={value}
                    onChange={onChange}
                    renderDay={(day: any) => {
                        const date = day.date;

                        return <>
                            <Box sx={{ borderRadius: '50%' }}>
                                {formatDate('D', date)}
                            </Box>
                        </>;
                    }}
                    locale={localeRu}
                    // options={{
                    //   color: [

                    //     { background: 'green' },
                    //   ]
                    // }}
                    calendarType={type}
                    weeks={1}
                />
            </Box>

            <Button onClick={() => setType(type === "month" ? 'week' : 'month')} sx={{ color: 'white', fontSize: '12px' }}>18 мая четная{' '} {type === "week" ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</Button>
        </Box>

    )
}

export default NewCalendar