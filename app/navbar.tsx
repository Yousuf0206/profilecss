import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>MyPortfolio</div>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/Contact" className={styles.navLink}>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
