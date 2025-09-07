import styles from "./footer.module.css"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <Image width={20} height={20} src="https://flowbite.com/docs/images/logo.svg"
                               className={styles.footer_logo} alt="Flowbite Logo"/>
                        <span
                            className={styles.logo_name}>Phoenix</span>
                    </a>
                    <ul className={styles.nav}>
                        <li>
                            <a href="#" className={styles.list_item}>Login</a>
                        </li>
                    </ul>
                </div>
                <hr className={styles.hr}/>
                <span className={styles.info}>© 2023
                    <a href="https://flowbite.com/" className="hover:underline">Phoenix</a>.
                    All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}