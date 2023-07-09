import Left from "./Left"
import Right from "./Right"
import styles from "./main.module.css"
const Main = () => {
    return (
        <main>
            <section className={styles.first}>
                <Left/>
                <Right/>
            </section>
        </main>
    )
}

export default Main