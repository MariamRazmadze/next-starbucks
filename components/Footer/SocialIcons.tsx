import { StyledIcons } from "@/styles/StyledFooter";
import Image from "next/image";

export default function SocialIcons() {
  return (
    <StyledIcons>
      <a href="https://spotify.com">
        <Image
          src="/socials/spotify.svg"
          alt="spotify"
          width={32}
          height={32}
        />
      </a>
      <a href="https://facebook.com">
        <Image
          src="/socials/facebook.svg"
          alt="facebook"
          width={32}
          height={32}
        />
      </a>
      <a href="https://pinterest.com">
        <Image
          src="/socials/pinterest.svg"
          alt="pinterest"
          width={32}
          height={32}
        />
      </a>
      <a href="https://instagram.com">
        <Image
          src="/socials/instagram.svg"
          alt="instagram"
          width={32}
          height={32}
        />
      </a>
      <a href="https://youtube.com">
        <Image
          src="/socials/youtube.svg"
          alt="youtube"
          width={32}
          height={32}
        />
      </a>
      <a href="https://twitter.com">
        <Image
          src="/socials/twitter.svg"
          alt="twitter"
          width={32}
          height={32}
        />
      </a>
    </StyledIcons>
  );
}
