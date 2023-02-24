function extractHostName(url: string): string | null {
  const match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^:/\n?=]+)/i);
  if (match) {
    // Remove o "www." do início do nome do host, se houver
    const hostName = match[1].replace(/^www\./, '');
    return hostName;
  }
  return null;
}

export interface TwitchProps {
  className?: string;
  channel: string;
}

export default function Twitch(props: TwitchProps) {
  const src = `https://player.twitch.tv/?channel=${
    props.channel
  }&parent=${extractHostName(window.location.origin)}`;

  return (
    <iframe
      src={src}
      frameBorder="0"
      allowFullScreen={true}
      scrolling="no"
      className={props.className}
    />
  );
}
