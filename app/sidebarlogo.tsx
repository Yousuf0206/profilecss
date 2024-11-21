import Image from 'next/image';
import styles from './navbar.module.css';

const SidebarLogo = () => (
  <div className={styles.logo}>
    <Image src="/profile.jpg" alt="Logo" width={50} height={50}priority />
  </div>
);

export default SidebarLogo;
