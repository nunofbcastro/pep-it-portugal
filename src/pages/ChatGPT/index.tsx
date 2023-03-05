import { GetChatGPT } from '../../services/PorqueEUProgramoRequests';
import TableScreen from '../../components/TableScreen';

export default function Chatgpt() {
  return <TableScreen request={GetChatGPT} />;
}
