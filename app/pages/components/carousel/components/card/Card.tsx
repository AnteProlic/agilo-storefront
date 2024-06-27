import styles from "./Card.module.css"

interface Card {
    name: string
    brand: string
    style: string
    src: string
}

export default function Card({name="", brand="", style="", src=""}: Card) {

    return <div className={`${styles.card} `+style}>
        <img src={src} alt="image" className="h-[75%] w-[100%]"></img>
        <div className="mx-auto text-[1.2em]">{name}</div>
        <div className="mx-auto text-[1em]">{brand}</div>
    </div>
}