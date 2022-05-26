import { Box, Container } from '@mui/material';
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

const SchedulePage = () => {
  const [pairList, setPairList] = React.useState<PairList | null>(null)
  const [dayDate, setValue] = React.useState(new Date());
  let { type, id } = useParams();
  const myChange = (ev: any) => {
    console.log(ev);
    setValue(ev.value); // ev.value is a Moment object
  }
  React.useEffect(() => {
    console.log(type);

    let promise: Promise<PairList>
    switch (type) {
      case 'group': promise = ApiInstance.getGroupPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`); break;
      case 'teacher': promise = ApiInstance.getTeacherPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`); break;
      default: promise = ApiInstance.getAuditoryPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`);
    }
    promise.then((pairListApi) => {//'2022-05-26'
      setPairList(pairListApi)
      console.log('====================================');
      console.log(pairListApi);
      console.log('====================================');
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
          {
            pairList !== null &&
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
