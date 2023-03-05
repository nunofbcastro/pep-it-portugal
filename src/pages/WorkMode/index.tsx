import { GetWorkMode } from '../../services/PorqueEUProgramoRequests';
import TableScreen from '../../components/TableScreen';

export default function WorkMode() {
  return <TableScreen request={GetWorkMode} />;
}
