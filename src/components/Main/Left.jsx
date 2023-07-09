import styles from "./main.module.css"

const Left = () => {
    return (
        <div className={styles.left}>
            <form >
                <div className={styles.top}>
                    <h3 className={styles.topTitle}>Contact infomation</h3>
                    <div className={styles.mail}>
                        <label htmlFor="topInpt">E-mail</label>
                        <input type="email" className={styles.topInpt} placeholder="Enter your email..." />
                    </div>
                    <div className={styles.phone}>
                        <label htmlFor="topInpt">Phone</label>
                        <input type="number" className={styles.topInpt} placeholder="Enter your phone..." />
                    </div>

                </div>
                <div className={styles.middle}>
                    <h3 className={styles.topTitle}>Shipping address</h3>
                    <div className={styles.fullName}>
                        <label htmlFor="middleInpt">Full name</label>
                        <input type="text" className={styles.midInpt} placeholder="Rodney Cotton"/>
                    </div>
                    <div className={styles.address}>
                        <label htmlFor="middleInpt">Address</label>
                        <input type="text" className={styles.midInpt} placeholder="Your address.." />
                    </div>
                    <div className={styles.city }>
                        <label htmlFor="middleInpt">City</label>
                        <input type="text" className={styles.midInpt} placeholder="Your city.." />
                    </div>
                    <div className={styles.country}>
                        <div className={styles.countryLeft}>
                            <label htmlFor="middleInpt">Country</label>
                            <input type="text" className={styles.postInpt}  placeholder="Your country.."/>
                        </div>
                        <div className={styles.countryRight}>
                            <label htmlFor="middleInpt">Postal code</label>
                            <input type="text" className={styles.postInpt} placeholder="Your postal code.."/>
                        </div>
                    </div>
                    <div className={styles.check}>
                        <input type="checkbox" className={styles.checkBox} />
                        <label htmlFor="middleInpt">Save this information for next time</label>

                    </div>
                    <div className={styles.bottom}>
                    <button className={styles.addBtn}>Continue</button>
                </div>
                </div>
                
            </form>
        </div>
    )
}

export default Left