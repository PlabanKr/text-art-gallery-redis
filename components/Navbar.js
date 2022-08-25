import Link from 'next/link';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navBody}>
            <div>
                <Link href="/">
                    <a>
                        TEXT ART GALLERY
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/">
                    <a className={`${styles.navLink} ${styles.home}`}>Home</a>
                </Link>
                <Link href="/create">
                    <a className={`${styles.navLink} ${styles.profile}`}>Create New Art</a>
                </Link>
            </div>
        </nav>
    );
}

export default  Navbar;