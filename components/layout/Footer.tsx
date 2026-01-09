import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 Adna. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="Spotify">
            Spotify
          </a>
          <a href="#" aria-label="YouTube">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
