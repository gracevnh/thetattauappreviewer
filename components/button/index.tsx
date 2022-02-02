import styles from './button.module.css'

type Props = {
    children: React.ReactNode,
    onClick?: () => void,
}

const Button = ({ onClick, children }: Props) => {
    if (onClick) {
        return (
            <button
                className={styles.button}
                onClick={onClick}
            >
                {children}
            </button>
        )
    } else {
        return (
            <button
                className={styles.button}
            >
                {children}
            </button>
        )
    }
}

export default Button