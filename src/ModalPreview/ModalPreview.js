import { getModalPreview, showModal } from '../FaintLinesModal'
import styles from './modalPreview.module.scss'

const ModalPreview = (modalProps) => {

    const onClick = () => showModal(modalProps)

    return (
        <div className={styles.modal_preview} onClick={onClick}>
            <div className={styles.modal_preview_shadow}>
                <div className={styles.modal_preview_banner}>Click To Open</div>
                <div className={styles.modal_preview_holder}>
                    <div className={styles.modal_preview_overlay}>EXAMPLE</div>
                    {getModalPreview(modalProps)}
                </div>
            </div>
        </div>
    )
}

export default ModalPreview