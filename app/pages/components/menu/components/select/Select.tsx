import styles from "./Select.module.css"

interface Select {
    title: string
}

export default function Select({title="None"}: Select) {

    return <div className={styles.select}>
        {title}
    </div>
}