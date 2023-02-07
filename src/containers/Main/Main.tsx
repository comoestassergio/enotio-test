import { ReactNode } from "react"

import styles from './Main.module.scss'

type Props = {
    children: ReactNode | ReactNode []
}

export default function Main ({ children }: Props) {
    return (
        <main className={styles.wrapper}>
            {children}
        </main>
    )
}