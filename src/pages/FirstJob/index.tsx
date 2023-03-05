import { GetFirstJob } from '../../services/PorqueEUProgramoRequests';
import TableScreen from '../../components/TableScreen';

export default function FirstJob() {
  return <TableScreen request={GetFirstJob} />;
}
