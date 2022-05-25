import { Routes, Route } from 'react-router-dom';
import AuditoryTab from '../components/AuditoryTab';
import EventTab from '../components/EventTab';
import GroupTab from '../components/GroupTab';
import TeacherTab from '../components/TeacherTab';
import HomePage from '../pages/HomePage';
import ScheduleAuditoryPage from '../pages/ScheduleAuditoryPage';
import SchedulePage from '../pages/SchedulePage';
import ScheduleTeacherPage from '../pages/ScheduleTeacherPage';

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="group" element={<GroupTab />} />
      <Route path="teacher" element={<TeacherTab />} />
      <Route path="auditory" element={<AuditoryTab />} />
      <Route path="event" element={<EventTab />} />
    </Route>
    <Route path="/group/:id" element={<SchedulePage />} />
    <Route path="/teacher/:id" element={<ScheduleTeacherPage />} />
    <Route path="/auditory/:id" element={<ScheduleAuditoryPage />} />
    {/* <Route path="/event/:id" element={<SchedulePage />} /> */}
  </Routes>
);

export default Router;
