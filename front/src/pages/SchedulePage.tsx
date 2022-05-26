import { Box, Container, Typography } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import React from 'react';
import Calendar from '../components/Calendar';
import SearchBar from '../components/SearchBar';
import ScheduleItem, { Type } from '../components/ScheduleItem';
import Break from '../components/Break';
import { PairList } from '../models/PairList';
import { Pair } from '../models/Pair';
import { ApiInstance } from '../api/Api';
import NewCalendar from '../components/NewCalendar';
import { useNavigate, useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const SchedulePage = () => {
  const [pairList, setPairList] = React.useState<PairList | null>(null)
  const [dayDate, setValue] = React.useState(new Date());
  const [isPairListEmpty, setIsPairListEmpty] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  let { type, id } = useParams();
  const myChange = (ev: any) => {
    setValue(ev.value); // ev.value is a Moment object
  }
  React.useEffect(() => {
    setIsLoading(true)

    let promise: Promise<PairList>
    switch (type) {
      case 'group': promise = ApiInstance.getGroupPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`); break;
      case 'teacher': promise = ApiInstance.getTeacherPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`); break;
      default: promise = ApiInstance.getAuditoryPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`);
    }
    promise.then((pairListApi) => {//'2022-05-26'
      setPairList(pairListApi)
      setIsLoading(false)
      let isEmpty = true
      for (const [key, value] of Object.entries(pairListApi)) {
        const pairCount = (value as any[]).length
        console.log(pairCount);

        if (pairCount > 0) {
          isEmpty = false
          break
        }
      }

      setIsPairListEmpty(isEmpty)
    })
  }, [dayDate])

  return (
    <>
      <Container maxWidth="sm">
        <SearchBar />
        <Box sx={{ marginTop: '25px' }}>
          <NewCalendar value={dayDate} onChange={myChange} />
        </Box>
      </Container>
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#F4F5FA',
          marginTop: '21px',
          borderRadius: '20px 20px 0 0',
        }}
      >
        <Container
          maxWidth="sm"
          sx={{ paddingTop: '25px', paddingBottom: '25px' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {
              !isLoading && isPairListEmpty && (
                <Typography sx={{ color: '#313131', fontSize: '28px' }}>
                  Пар нет!
                </Typography>
              )
            }
            {isLoading && (
              <CircularProgress />

            )}
          </Box>
          {
            pairList !== null && !isLoading &&
            Object.entries(pairList).map(([key, value]) => {
              const pairCount = (value as any[]).length
              if (pairCount > 0)
                return (
                  <Box sx={{ marginTop: '15px' }}>
                    <SwipeableViews enableMouseEvents resistance>
                      {
                        value.map((pair: Pair, index: number) => <ScheduleItem numberOfPairInSamePairNumber={value.length} index={index} auditories={pair.auditories} discipline={pair.discipline} groups={pair.groups} pairNumber={pair.pairNumber} subGroupNumber={pair.subGroupNumber} teachers={pair.teachers} type={pair.type} id={pair.id} key={pair.id} />)
                      }
                    </SwipeableViews>
                  </Box>
                )
            })
          }
        </Container>
      </Box>
    </>
  );
};

export default SchedulePage;
