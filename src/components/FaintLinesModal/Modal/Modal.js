import Button from "../../Button";
import React from 'react'
import styles from './modal.module.scss'

const Modal = ({ onCancel, onOK, button, title, text, preview = false }) =>
    <div className={preview ? styles.modal_preview : styles.modal}>
        <div className={preview ? styles.layout_for_preview : styles.layout}>
            <div className={styles.modal_box}>
                <div className={styles.content_area}>
                    <div className={styles.cancel_button} onClick={onCancel}>+</div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.text}>{text}</div>
                    <Button onClick={onOK}>{button}</Button>
                </div>
            </div>
        </div>
    </div>

export default React.memo(Modal)
