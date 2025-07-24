import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import OpenAccountButton from "./common/OpenAccountButton";
const Sidebar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const onSidebarOpen = (prev) => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.title} onClick={onSidebarOpen}>
        banquee.
      </div>
      {open ? (
        <>
          {" "}
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
          <div className={styles.buttons}>
            <button className={styles.login}>Login</button>
            <OpenAccountButton />
          </div>
        </>
      ) : undefined}
    </div>
  );
};
export default Sidebar;
