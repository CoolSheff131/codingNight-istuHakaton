import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const GroupTab = () => {
  const [selectedInstitute, setSelectedInstitute] = React.useState<
    number | null
  >(null);
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}>
        {selectedInstitute === null
          ? 'Институт'
          : 'Институт Информационных Технологий и Анализа Данных'}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          marginTop: '21px',
          flexDirection: 'column',
        }}
      >
        {selectedInstitute === null &&
          Array.from(Array(10).keys()).map((number) => {
            return (
              <Button
                onClick={() => setSelectedInstitute(number)}
                key={number}
                variant="contained"
                sx={{
                  '&:hover': { backgroundColor: '#7165E3', color: '#E8E6FF' },
                  marginTop: '9px',
                  textAlign: 'left',
                  width: '100%',
                  backgroundColor: '#E8E6FF',
                  color: '#7165E3',
                  fontSize: '18px',
                }}
              >
                Институт Информационных Технологий и Анализа Данных
              </Button>
            );
          })}
        {selectedInstitute !== null && (
          <>
            <Accordion sx={{ borderRadius: '5px', marginBottom: '9px' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#3B3D48', fontSize: '18px' }}>
                  1 курс
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {Array.from(Array(10).keys()).map((number) => {
                    return (
                      <NavLink
                        key={number}
                        to={`${number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
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
                          ИСТб-19-1
                        </Button>
                      </NavLink>
                    );
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: '5px', marginBottom: '9px' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#3B3D48', fontSize: '18px' }}>
                  2 курс
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {Array.from(Array(10).keys()).map((number) => {
                    return (
                      <NavLink
                        key={number}
                        to={`${number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
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
                          ИСТб-19-1
                        </Button>
                      </NavLink>
                    );
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: '5px', marginBottom: '9px' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#3B3D48', fontSize: '18px' }}>
                  3 курс
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {Array.from(Array(10).keys()).map((number) => {
                    return (
                      <NavLink
                        key={number}
                        to={`${number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
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
                          ИСТб-19-1
                        </Button>
                      </NavLink>
                    );
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ borderRadius: '5px', marginBottom: '9px' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: '#3B3D48', fontSize: '18px' }}>
                  4 курс
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {Array.from(Array(10).keys()).map((number) => {
                    return (
                      <NavLink
                        key={number}
                        to={`${number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button
                          variant="outlined"
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
                          ИСТб-19-1
                        </Button>
                      </NavLink>
                    );
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Box>
    </Box>
  );
};

export default GroupTab;
