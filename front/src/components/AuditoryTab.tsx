import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ApiInstance } from '../api/Api';
import { Auditory } from '../models/Auditory';
import ColorButton from './ColorButton';
import CircularProgress from '@mui/material/CircularProgress';
const AuditoryTab = () => {
  const [auditories, setAuditories] = React.useState<Auditory[]>([])
  const [isLoadingAuditories, setIsLoadingAuditories] = React.useState(true);
  React.useEffect(() => {
    setIsLoadingAuditories(true)
    ApiInstance.getAllAuditory().then((auditoriesApi) => {
      setAuditories(auditoriesApi)
      setIsLoadingAuditories(false)
    })
  }, [])
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px', fontFamily: 'Mont' }}>
        Аудитории
      </Typography>

      {/* <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      >
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          A
        </ColorButton>        
      </Box> */}


      {/* <Typography
        sx={{
          fontWeight: 500,
          color: '#000',
          fontSize: 18,
          marginTop: '32px',
        }}
      >
        Первый этаж
      </Typography> */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {isLoadingAuditories && (
          <CircularProgress />

        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      >
        {auditories.map((auditory) => {
          return (
            <NavLink
              key={auditory.id}
              to={`/schedule/auditory/${auditory.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="text"
                sx={{
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '15px',
                  paddingRight: '15px',
                  borderRadius: '10px',
                  borderColor: '#8B80F8',
                  textTransform: 'none',
                  fontWeight: 400,
                  color: '#3C30AC',
                  fontSize: 18,
                  marginTop: '7px',
                  marginRight: '10px',
                  fontFamily: 'Mont'
                }}
              >
                {auditory.name}
              </Button>
            </NavLink>
          );
        })}
      </Box>
    </Box>
  );
};

export default AuditoryTab;
