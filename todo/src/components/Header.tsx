import logo from "../assets/Logo.svg";
import styles from "./Header.module.scss";

export function Header() {
    
    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} />
        </header>
    )

}