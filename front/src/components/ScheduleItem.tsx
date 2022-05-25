import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

export enum Type {
  type1,
  type2,
}

interface ScheduleItemProps {
  type: Type;
}
const ScheduleItem: React.FC<ScheduleItemProps> = ({ type }) => {
  return (
    <Box
      sx={{
        paddingTop: '12px',
        paddingLeft: '10px',
        paddingBottom: '10px',
        paddingRight: '10px',
        marginLeft: '10px',
        marginRight: '10px',
        backgroundColor: type === Type.type1 ? '#E8E6FF' : '#FFFFFF',
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
            }}
          >
            3
          </Box>
          <Typography sx={{ marginLeft: '17px', fontSize: '16px' }}>
            Лекция
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '16px' }}>11.45-13.15</Typography>
      </Box>
      <Typography sx={{ fontSize: '16px', fontWeight: 700, marginTop: '10px' }}>
        Название предмета средней длины средней длины
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 400,
          fontStyle: 'italic',
          marginTop: '5px',
        }}
      >
        Анатольев A.В.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          marginTop: '5px',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
          <Typography
            sx={{
              paddingLeft: '7px',
              paddingRight: '7px',
              borderRadius: '5px',
              backgroundColor: '#7165E3',
              height: '20px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            К-302
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
          <Typography
            sx={{
              color: '#3B3D48',
              fontSize: '14px',
              fontWeight: 500,
              marginRight: '5px',
            }}
          >
            ИСТб-19-1
          </Typography>
          <Typography
            sx={{
              color: '#3B3D48',
              fontSize: '14px',
              fontWeight: 500,
              marginRight: '5px',
            }}
          >
            ИСТб-19-1
          </Typography>
          <Typography
            sx={{
              color: '#3B3D48',
              fontSize: '14px',
              fontWeight: 500,
              marginRight: '5px',
            }}
          >
            ИСТб-19-1
          </Typography>
          <Typography
            sx={{
              color: '#3B3D48',
              fontSize: '14px',
              fontWeight: 500,
              marginRight: '5px',
            }}
          >
            ИСТб-19-1
          </Typography>
        </Box>
      </Box>
      {type === Type.type1 && (
        <>
          <Typography
            sx={{
              color: '#3B3D48',
              fontSize: '14px',
              fontWeight: 500,
              marginRight: '5px',
            }}
          >
            Примечание: подгруппа 1
          </Typography>
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
                }}
              >
                Несколько предметов в это время
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box
                sx={{
                  width: '6px',
                  height: '6px',
                  marginRight: '3px',
                  borderRadius: '3px',
                  backgroundColor: '#7165E3',
                }}
              />
              <Box
                sx={{
                  width: '6px',
                  height: '6px',
                  marginRight: '3px',
                  borderRadius: '3px',
                  backgroundColor: '#C5BFFF',
                }}
              />
            </Box>
          </Box>
          <Typography
            sx={{
              color: '#7165E3',
              fontSize: '12px',
              fontWeight: 500,
              textAlign: 'center',
              margintTop: '11px',
            }}
          >
            36 минут до конца
          </Typography>
        </>
      )}
    </Box>
  );
};

export default ScheduleItem;
