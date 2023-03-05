import { GetCourses } from '../../services/PorqueEUProgramoRequests';
import TableScreen from '../../components/TableScreen';

export default function Courses() {
  return <TableScreen request={GetCourses} />;
}
