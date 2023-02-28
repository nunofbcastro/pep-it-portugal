import { FooterCopyright } from 'flowbite-react/lib/esm/components/Footer/FooterCopyright';
import { FooterIcon } from 'flowbite-react/lib/esm/components/Footer/FooterIcon';

import {
  BsInstagram as IconInstagram,
  BsTwitter as IconTwitter,
  BsYoutube as IconYoutube,
  BsTwitch as IconTwitch,
} from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="shadow-footer px-6 py-8">
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <FooterCopyright
          by="Nuno Castro"
          year={2023}
          href="https://github.com/nunofbcastro"
          className="block text-sm text-gray-400 text-center"
        />
        <div className="mt-4 flex space-x-6 sm:mt-0 w-full sm:w-fit justify-center sm:justify-end">
          <FooterIcon
            href="https://www.instagram.com/porqueeuprogramo/"
            icon={IconInstagram}
          />
          <FooterIcon
            href="https://twitter.com/porquEUprogramo"
            icon={IconTwitter}
          />
          <FooterIcon
            href="https://www.youtube.com/porqueeuprogramo"
            icon={IconYoutube}
          />
          <FooterIcon
            href="https://www.twitch.tv/porqueeuprogramo"
            icon={IconTwitch}
          />
        </div>
      </div>
    </footer>
  );
}
