import clsx from 'clsx'
import styles from'./Button.module.scss'

function Button({ primary, secondary, success, danger, warning, light, link, disabled }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning,
        [styles.light]: light,
        [styles.link]: link,
        [styles.disabled]: disabled
    })

    return (
        <button className={classes}>
            Click me!
        </button>
    )
}
export default Button