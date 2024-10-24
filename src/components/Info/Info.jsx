import styles from "./Info.module.css"

function Info() {
    return (
        <div data-testid='info' id={styles.info}>
            <header>Header</header>
            <section>Body</section>
            <footer>Footer</footer>
        </div>
    )
}

export default Info