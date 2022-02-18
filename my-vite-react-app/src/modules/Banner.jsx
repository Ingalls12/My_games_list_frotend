
import styles from "../styles/Banner.module.css"
import {useState} from "react"
function Banner(){
    const [logged, setLogged] = useState(false);
    return(
        <section className={styles.banner}>
            <h1>Pending games</h1>
            {logged?
                <div className={styles.buttons_login}>
                    <button>Sign Out</button>
                </div>:
                <div className={styles.buttons_login}>
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            }
        </section>
    )
}
export default Banner