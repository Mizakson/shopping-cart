import styles from "./Nav.module.css"
import { Link } from "react-router-dom"

function Nav({ onClick }) {

    // use lifted state (page) from App.jsx
    function goHome() {
        setPage(true)
      }

    return (
        <nav data-testid="nav-bar">
            {/* <a href="" className={styles.a}>Home </a>
            <a href="" className={styles.a}>Shop </a>
            <a href="" className={styles.a}>Cart</a> */}

            <Link to="/" className={styles.a} onClick={goHome}>Home</Link>
            <Link to="shop" id="shop" onClick={onClick}>Shop</Link>
            <a href="" className={styles.a}>Cart() Do not Click!</a>
        </nav>
    )
}

export default Nav