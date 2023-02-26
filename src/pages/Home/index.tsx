import { useEffect } from 'react';
import { useTitle } from '../../utils/PageTitle';

import Twitch from '../../components/Twitch';

export default function Home() {
  useTitle('');

  return (
    <Twitch
      channel={import.meta.env.VITE_TWITCH_CHANNEL}
      className="h-full w-full"
    />
  );
}
