import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <Link href="/" className="logo">
          JaVidiSius
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles['list-item']}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles['list-item']}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
