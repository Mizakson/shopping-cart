import styles from "./Nav.module.css"

function Nav() {
    return (
        <nav data-testid="nav-bar">
            <a href="" className={styles.a}>Home </a>
            <a href="" className={styles.a}>Shop </a>
            <a href="" className={styles.a}>Cart</a>
        </nav>
    )
}

export default Nav