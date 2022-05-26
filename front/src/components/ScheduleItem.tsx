import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Group } from 'material-ui-icons';
import { Auditory } from '../models/Auditory';
import { Discipline } from '../models/Descipline';
import { PairNumber } from '../models/PairNumber';
import { PairType } from '../models/PairType';
import { Teacher } from '../models/Teacher';
import { NavLink } from 'react-router-dom';

export enum Type {
  type1,
  type2,
}

interface ScheduleItemProps {
  id: number;
  type: PairType; //тип, 1 -- лекция, 2 -- практика, 3 -- лаба  
  pairNumber: PairNumber; //номер пары, от 1 до 8
  numberOfPairInSamePairNumber: number;
  index: number;
  groups: Group[];
  subGroupNumber: number; //номер подгруппы, если занятие имеет тип 3, то в groups будет ровно одна группа, а 1 означает, что на занятие придет только первая половина группы 2 означает, что на занятие придет только вторая половина группы
  discipline: Discipline;
  teachers: Teacher[];
  auditories: Auditory[];
}
const ScheduleItem: React.FC<ScheduleItemProps> = ({ numberOfPairInSamePairNumber, index, id, type, pairNumber, groups, subGroupNumber, discipline, teachers, auditories }) => {
  return (
    <Box
      sx={{
        paddingTop: '12px',
        paddingLeft: '10px',
        paddingBottom: '10px',
        paddingRight: '10px',
        marginLeft: '10px',
        marginRight: '10px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              backgroundColor: '#7165E3',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              textAlign: 'center',
              color: 'white',
              fontFamily: 'Mont',
            }}
          >
            {pairNumber}
          </Box>
          <Typography sx={{ marginLeft: '17px', fontSize: '16px', fontFamily: 'Mont', }}>
            Лекция
          </Typography>
        </Box>
        {/* <Typography sx={{ fontSize: '16px' }}>11.45-13.15</Typography> */}
      </Box>
      <Typography sx={{ fontSize: '16px', fontWeight: 700, marginTop: '10px' }}>
        {discipline.name}
      </Typography>
      <Box sx={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
        {teachers.map(teacher => (
          <NavLink
            key={teacher.id}
            to={`/schedule/teacher/${teacher.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Typography

              sx={{
                marginRight: '5px',
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: 'Mont',
                fontStyle: 'italic',
                marginTop: '5px',
                color: '#313131',
              }}
            >
              {teacher.surname}
            </Typography>
          </NavLink>
        )

        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          marginTop: '5px',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
          {

            auditories.map((auditory) => (
              <NavLink
                key={auditory.id}
                to={`/schedule/auditory/${auditory.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Typography

                  sx={{
                    marginTop: '5px',
                    marginRight: '5px',
                    paddingLeft: '7px',
                    paddingRight: '7px',
                    borderRadius: '5px',
                    backgroundColor: '#7165E3',
                    height: '20px',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 500,
                    fontFamily: 'Mont',
                  }}
                >
                  {auditory.name}
                </Typography>
              </NavLink>

            ))
          }

        </Box>
        <Box sx={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
          {
            groups.map(group => (
              <NavLink
                key={group.id}
                to={`/schedule/groups/${group.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Typography
                  sx={{
                    color: '#3B3D48',
                    fontSize: '14px',
                    fontWeight: 500,
                    marginRight: '5px',
                    fontFamily: 'Mont',
                  }}
                >
                  {group.name}
                </Typography>
              </NavLink>

            ))
          }
        </Box>
      </Box>
      {(
        <>
          <Typography
            sx={{
              color: '#3B3D48',
              fontSize: '14px',
              fontWeight: 500,
              marginRight: '5px',
              fontFamily: 'Mont',
            }}
          >
            {`подгруппа ${subGroupNumber}`}
          </Typography>
          {
            numberOfPairInSamePairNumber > 1 && (
              <>
                <Divider light sx={{ marginTop: '15px' }} />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ErrorOutlineOutlinedIcon sx={{ color: 'red' }} />
                    <Typography
                      sx={{
                        color: '#3B3D48',
                        fontSize: '12px',
                        fontWeight: 400,
                        marginLeft: '11px',
                        fontFamily: 'Mont',
                      }}
                    >
                      Несколько предметов в это время
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {
                      Array.from(Array(numberOfPairInSamePairNumber).keys()).map((numDot) => (
                        <Box
                          key={numDot}
                          sx={{
                            width: '6px',
                            height: '6px',
                            marginRight: '3px',
                            borderRadius: '3px',
                            backgroundColor: numDot === index ? '#7165E3' : '#C5BFFF',
                          }}
                        />
                      ))

                    }
                  </Box>
                </Box>
              </>
            )
          }

          {/* <Typography
            sx={{
              color: '#7165E3',
              fontSize: '12px',
              fontWeight: 500,
              textAlign: 'center',
              margintTop: '11px',
            }}
          >
            36 минут до конца
          </Typography> */}
        </>
      )}
    </Box>
  );
};

export default ScheduleItem;
