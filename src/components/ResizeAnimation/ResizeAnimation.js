import styles from './resizeAnimation.module.scss'

const ResizeAnimation = ({children}) =>
    <div className={styles.resize_animation}>
        {children}
    </div>

export default ResizeAnimation
