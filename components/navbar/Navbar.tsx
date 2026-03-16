import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.homeLink}>
        <Image src="/whoopLogo.png" alt="Whoop Logo" width={100} height={25} />
        &nbsp;
        <h1 className={styles.headerName}>Charts</h1>
      </Link>

      <div className={styles.linksWrapper}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/">
          Sleep
        </Link>
        <Link className={styles.link} href="/">
          Workouts
        </Link>
        <Link className={styles.link} href="/">
          Journals
        </Link>
        <Link className={styles.link} href="/">
          Cycles
        </Link>
      </div>
    </nav>
  );
}
