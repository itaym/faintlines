import styles from './Button.module.scss'
import React from "react";

const Button = ({onClick, children}) =>
    <div className={styles.button_holder}>
        <button className={styles.button} onClick={onClick}>{children}</button>
    </div>

export default Button
