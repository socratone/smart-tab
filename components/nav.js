import React from 'react';
import Link from 'next/link';
import styles from './nav.module.scss';

const Nav = () => {
  return (  
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <li className={styles.nav__li}>
          <Link href="/">
            <a>홈</a>
          </Link>
        </li>
        <li className={styles.nav__li}>
          <Link href="/tab/list">
            <a>악보</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default Nav;