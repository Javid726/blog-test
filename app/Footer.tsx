import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__list}>
        <li className={styles.footer__item}>
          <a target="_blank" href="https://www.linkedin.com/in/javidgasimov">
            Linkedin
          </a>
        </li>
        <li className={styles.footer__item}>
          <a target="_blank" href="https://www.github.com/Javid726">
            Github
          </a>
        </li>
        <li className={styles.footer__item}>
          <a target="_blank" href="https://twitter.com/ignoooramus">
            Twitter
          </a>
        </li>
        <li className={`${styles.footer__item} ${styles['footer__item-rss']}`}>
          <a target="_blank" href="#">
            rss
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
