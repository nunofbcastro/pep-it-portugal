import { GetCompanies } from '../../services/PorqueEUProgramoRequests';
import TableScreen from '../../components/TableScreen';

export default function Companies() {
  return <TableScreen request={GetCompanies} />;
}
