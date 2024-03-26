import Image from "next/image"
import styles from "./header.module.css"

export default function Header() {
    return (
        <nav className={styles.navDiv}>
            <div className={styles.headerDiv}>
                <a href="https://flowbite.com/" className={styles.headerLink}>
                    <Image width={30} height={30} src="https://flowbite.com/docs/images/logo.svg" className={styles.header_logo} alt="Flowbite Logo"/>
                    <span className={styles.headerLinkText}>Pheonix</span>
                </a>
                <button data-collapse-toggle="navbar-default" type={"button"} className={styles.menuButton} aria-controls="navbar-default" aria-expanded="false">
                    <span className={styles.menuIcon}>Open main menu</span>
                    <svg className={styles.menuIconSvg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div  className={styles.menu_items} id={"navbar-default"}>
                    <ul className={styles.menu_item_list}>
                        <li>
                            <a href="/dashboard" className={styles.menu_item} aria-current="page">Dashboard</a>
                        </li>
                        <li>
                            <a href="/Settings" className={styles.menu_item}>Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}