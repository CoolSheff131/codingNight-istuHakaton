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
import { Institute } from '../models/Institute';
import { ApiInstance } from '../api/Api';
import { GroupList } from '../models/GroupList';
import { Group } from '../models/Group';
import CircularProgress from '@mui/material/CircularProgress';

const GroupTab = () => {
  const [selectedInstitute, setSelectedInstitute] = React.useState<Institute | null>(null);
  const [institutes, setInstitutes] = React.useState<Institute[]>([]);
  const [groupList, setGroupList] = React.useState<GroupList | null>(null);
  const [isLoadingInstitutes, setIsLoadingInstitutes] = React.useState(true);
  const [isLoadingGroups, setIsLoadingGroups] = React.useState(true);

  React.useEffect(() => {
    if (selectedInstitute) {
      return
    }
    setIsLoadingInstitutes(true)
    ApiInstance.getAllInstitutes().then((data) => {
      setInstitutes(data)
      setIsLoadingInstitutes(false)
    })
  }, [])
  React.useEffect(() => {
    if (!selectedInstitute) {
      return
    }
    setIsLoadingGroups(true)
    ApiInstance.getGroupsInInstitute(selectedInstitute.id).then((groups) => {
      setGroupList(groups)
      setIsLoadingGroups(false)
    })
  }, [selectedInstitute])

  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px', fontFamily: 'Mont' }}>
        {selectedInstitute === null
          ? 'Институт'
          : selectedInstitute.name}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          marginTop: '21px',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {isLoadingInstitutes && (
            <CircularProgress />
          )}
        </Box>

        {selectedInstitute === null &&
          institutes.map((institute) => {
            return (
              <Button
                onClick={() => setSelectedInstitute(institute)}
                key={institute.id}
                variant="contained"
                sx={{
                  '&:hover': { backgroundColor: '#7165E3', color: '#E8E6FF' },
                  marginTop: '9px',
                  textAlign: 'left',
                  width: '100%',
                  backgroundColor: '#E8E6FF',
                  color: '#7165E3',
                  fontSize: '18px',
                  fontFamily: 'Mont'
                }}
              >
                {institute.name}
              </Button>
            );
          })}
        {selectedInstitute !== null && isLoadingGroups && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {isLoadingGroups && (
              <CircularProgress />

            )}
          </Box>
        )
        }
        {selectedInstitute !== null && groupList !== null && (
          <>

            {
              Object.entries(groupList).map(([key, value]) => {
                const groupsCount = (value as any[]).length
                if (groupsCount > 0)
                  return <Accordion key={key} sx={{ borderRadius: '5px', marginBottom: '9px' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{ color: '#3B3D48', fontSize: '18px' }}>
                        {`${key} курс`}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {value.map((groupsInCourse: Group) => (
                          <NavLink
                            key={groupsInCourse.id}
                            to={`/schedule/groups/${groupsInCourse.id}`}
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
                                fontFamily: 'Mont'
                              }}
                            >
                              {groupsInCourse.name}
                            </Button>
                          </NavLink>
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
              })
            }
          </>
        )}
      </Box>
    </Box>
  );
};

export default GroupTab;
