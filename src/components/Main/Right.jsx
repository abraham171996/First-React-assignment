import styles from "./main.module.css"

const Right = () => {
    let firstImageUrl = "https://media.wired.com/photos/5b72139a4177c301e3b9b193/master/w_1280,c_limit/Jansport_05.jpg";
    let seconrImageUrl = "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f820e398-3050-438b-91a9-e985898def17/spark-womens-shoes-w4WdlF.png"
  return (
    <div className={styles.right}>
        <div className={styles.boxes}>
            <div className={styles.box}>
                <figure>
                    <img src={firstImageUrl}alt="" />
                </figure>
                <div className={styles.content}>
                    <h2>Vintage Backbag</h2>
                    <div className={styles.price}>
                        <p className={styles.discount}>$54.99</p>
                        <span className={styles.current}>$94.99</span>
                    </div>
                    <div className={styles.boxBtn}>
                        <button className={styles.countBtn}>-</button>
                        <span>1</span>
                        <button className={styles.countBtn}>+</button>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
                <figure>
                    <img src={seconrImageUrl}alt=""/>
                </figure>
                <div className={styles.content}>
                    <h2>Levi Shoes</h2>
                    <div className={styles.price}>
                        <p className={styles.discount}>$74.99</p>
                        <span className={styles.current}>$124.99</span>
                    </div>
                    <div className={styles.boxBtn}>
                        <button className={styles.countBtn}>-</button>
                        <span>1</span>
                        <button className={styles.countBtn}>+</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.result}>
            <div className={styles.resultRow}>
                <hr />
                <div className={styles.info}>
                    <h2 className={styles.infoH2}>Shipping</h2>
                    <p className={styles.infoP}>$19</p>
                </div>
            </div>
            <div className={styles.resultRow}>
                <hr />
                <div className={styles.info}>
                    <h2 className={styles.infoH2}>Total</h2>
                    <p className={styles.infoP}>$148.98</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Right