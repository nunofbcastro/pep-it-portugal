import Twitch from '../../components/Twitch';

export default function Home() {
  return (
    <Twitch
      channel={import.meta.env.VITE_TWITCH_CHANNEL}
      className="h-full w-full"
    />
  );
}
