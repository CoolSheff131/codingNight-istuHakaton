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
  const [dayDate, setDayDate] = React.useState(new Date());
  const [isPairListEmpty, setIsPairListEmpty] = React.useState(true);
  const [isLoadingPairList, setIsLoadingPairList] = React.useState(true);
  const [isLoadingTitle, setIsLoadingTitle] = React.useState(true);
  const [title, setTitle] = React.useState('');
  let { type, id } = useParams();
  const onChooseDy = (ev: any) => {
    setDayDate(ev.value);
  }

  React.useEffect(() => {
    setIsLoadingTitle(true)
    switch (type) {
      case 'groups': ApiInstance.getGroup(id!).then(group => { setTitle(group.name); setIsLoadingTitle(false) }); break;
      case 'teacher': ApiInstance.getTeacher(id!).then(teacher => { setTitle(teacher.surname); setIsLoadingTitle(false) }); break;
      default: ApiInstance.getAuditory(id!).then(auditory => { setTitle(auditory.name); setIsLoadingTitle(false) });
    }
  }, [])

  React.useEffect(() => {
    setIsLoadingPairList(true)

    let promise: Promise<PairList>
    switch (type) {
      case 'groups': promise = ApiInstance.getGroupPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`); break;
      case 'teacher': promise = ApiInstance.getTeacherPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`); break;
      default: promise = ApiInstance.getAuditoryPairsListInDay(id!, `${dayDate.getFullYear()}-${dayDate.getMonth() + 1}-${dayDate.getDate()}`);
    }
    promise.then((pairListApi) => {//'2022-05-26'
      setPairList(pairListApi)
      setIsLoadingPairList(false)
      let isEmpty = true
      for (const [key, value] of Object.entries(pairListApi)) {
        const pairCount = (value as any[]).length
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
          <NewCalendar value={dayDate} onChange={onChooseDy} />
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
            !isLoadingTitle && (
              <>
                <Typography sx={{ color: '#7165E3', fontSize: 15, marginTop: '14px', fontFamily: 'Mont' }}>
                  {type === 'groups' && 'Группа'}
                  {type === 'teacher' && 'Преподаватель'}
                  {type === 'auditory' && 'Аудитория'}
                </Typography>
                <Typography sx={{ color: '#7165E3', fontSize: 28, fontFamily: 'Mont' }}>
                  {title}
                </Typography>
              </>
            )
          }
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {
              !isLoadingPairList && isPairListEmpty && (
                <Typography sx={{ color: '#7165E3', marginTop: '25px', fontSize: '28px', fontFamily: 'Mont' }}>
                  Пар нет!
                </Typography>
              )
            }
            {isLoadingPairList && (
              <CircularProgress />

            )}
          </Box>
          {
            pairList !== null && !isLoadingPairList &&
            Object.entries(pairList).map(([key, value]) => {
              const pairCount = (value as any[]).length
              if (pairCount > 0)
                return (
                  <Box key={key} sx={{ marginTop: '15px' }}>
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
