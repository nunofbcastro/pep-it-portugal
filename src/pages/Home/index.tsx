import { useTitle } from '../../hooks/useTitle';

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
