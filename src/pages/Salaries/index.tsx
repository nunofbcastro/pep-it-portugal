import { GetSalaries } from '../../services/PorqueEUProgramoRequests';
import TableScreen from '../../components/TableScreen';

export default function Salaries() {
  return <TableScreen request={GetSalaries} />;
}
