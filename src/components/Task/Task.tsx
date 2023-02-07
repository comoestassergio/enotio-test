import { Switch } from "@mui/material"

import styles from './Task.module.scss'

export default function Task () {
    return (
        <div className={styles.wrapper}>
            <span className={styles.accentColor}></span>
            <div className={styles.text}>
                <h3>Task title</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis expedita voluptatibus magni provident deserunt delectus optio ab amet consequatur eaque neque tempora vitae eligendi, laboriosam, soluta quia, corporis ducimus.</p>
            </div>
            <Switch />
        </div>
    )
}