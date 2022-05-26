import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ApiInstance } from '../api/Api';
import { Auditory } from '../models/Auditory';
import ColorButton from './ColorButton';

const AuditoryTab = () => {
  const [auditories, setAuditories] = React.useState<Auditory[]>([])

  React.useEffect(() => {
    ApiInstance.getAllAuditory().then((auditoriesApi) => {
      setAuditories(auditoriesApi)
    })
  }, [])
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}>
        Корпус
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
        }}
      >
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          A
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Б
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          В
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Г
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Д
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Е
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Ж
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          К
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          И
        </ColorButton>
        <ColorButton sx={{ marginRight: '12.5px' }} variant="contained">
          Иные
        </ColorButton>
      </Box>

      <Typography
        sx={{
          fontWeight: 500,
          color: '#000',
          fontSize: 18,
          marginTop: '32px',
        }}
      >
        Первый этаж
      </Typography>
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
              to={`${auditory.id}`}
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
