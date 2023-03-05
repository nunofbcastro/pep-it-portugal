import { GetFrameworks } from '../../services/PorqueEUProgramoRequests';
import TableScreen from '../../components/TableScreen';

export default function Frameworks() {
  return <TableScreen request={GetFrameworks} />;
}
