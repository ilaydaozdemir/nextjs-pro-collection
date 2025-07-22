"use client";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.container}>
        <div className={styles.navLeft}>banquee</div>
        <div className={styles.navCenter}>
          <Link href="/features">
            <span
              className={
                pathName === "/features" ? styles.active : styles.navitem
              }
            >
              Features
            </span>{" "}
          </Link>
          <Link href="/compare">
            <span
              className={
                pathName === "/compare" ? styles.active : styles.navitem
              }
            >
              Compare
              <span className={styles.icon}>
                <FaAngleDown color="#1A191E" />
              </span>
            </span>
          </Link>
          <Link href="/support">
            <span
              className={
                pathName === "/support" ? styles.active : styles.navitem
              }
            >
              Support
            </span>
          </Link>
          <Link href="/blog">
            <span
              className={pathName === "/blog" ? styles.active : styles.navitem}
            >
              Blog
              <span className={styles.icon}>
                <FaAngleDown color="#1A191E" />
              </span>
            </span>
          </Link>
        </div>
        <div className={styles.navRight}>
          <button className={styles.login}>Login</button>
          <button className={styles.openAccount}>Open Account</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
