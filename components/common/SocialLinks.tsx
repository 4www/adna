import {
  SpotifyIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  AppleMusicIcon,
  TidalIcon,
  SoundCloudIcon,
  YouTubeIcon,
} from '@/components/icons/SocialIcons';
import styles from './SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a
        href="https://spotify.com/artist/yourartist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
      >
        <SpotifyIcon size={28} />
      </a>
      <a
        href="https://facebook.com/yourartist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FacebookIcon size={28} />
      </a>
      <a
        href="https://instagram.com/yourartist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <InstagramIcon size={28} />
      </a>
      <a
        href="https://tiktok.com/@yourartist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
      >
        <TikTokIcon size={28} />
      </a>
      <a
        href="https://music.apple.com/artist/yourartist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Apple Music"
      >
        <AppleMusicIcon size={28} />
      </a>
      <a
        href="https://tidal.com/artist/yourartist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TIDAL"
      >
        <TidalIcon size={28} />
      </a>
      <a
        href="https://soundcloud.com/yourartist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="SoundCloud"
      >
        <SoundCloudIcon size={28} />
      </a>
      <a
        href="https://youtube.com/@yourartist"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <YouTubeIcon size={28} />
      </a>
    </div>
  );
};

export default SocialLinks;
