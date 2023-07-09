import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <p className={styles.footerContent}>created by
                <a
                    target="_blank"
                    href="https://github.com/abraham171996"
                    rel="noreferrer"
                    
                >
                    Abraham
                </a>
            </p>
        </footer>
    )
}

export default Footer