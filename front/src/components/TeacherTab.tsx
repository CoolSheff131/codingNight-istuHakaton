import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Teacher } from '../models/Teacher';
import { ApiInstance } from '../api/Api';
import CircularProgress from '@mui/material/CircularProgress';

const TeacherTab = () => {
  const [teachers, setTeachers] = React.useState<Teacher[]>([])
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(true)
    ApiInstance.getAllTeachers().then((teachersApi) => {
      setTeachers(teachersApi)
      setIsLoading(false)
    })
  }, [])
  return (
    <Box>
      <Typography sx={{ color: '#7165E3', fontSize: 18, marginTop: '14px' }}>
        Фамилия
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {isLoading && (
          <CircularProgress />

        )}
      </Box>
      {/* <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {Array.from(Array(10).keys()).map((number) => {
          return (
            <ColorButton key={number} variant="contained">
              A
            </ColorButton>
          );
        })}
      </Box> */}

      {teachers.map((teacher) => {
        return (
          <NavLink
            key={teacher.id}
            to={`/schedule/teacher/${teacher.id}`}
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
              {teacher.surname}
            </Button>
          </NavLink>
        );
      })}
    </Box>
  );
};

export default TeacherTab;
