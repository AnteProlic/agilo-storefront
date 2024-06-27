'use client'
import { redirect } from 'next/navigation'
import styles from "./Product.module.css"

interface Product {
    name: string
    brand: string
    src: string
    cost: number
    type: string
}

export default function Product({name="", brand="", src="", cost=0.00, type=""}: Product) {

    const Item = {
        name: name,
        brand: brand,
        cost: cost,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra. Convallis tellus id interdum velit laoreet id donec. Tellus rutrum tellus pellentesque eu tincidunt. Libero id faucibus nisl tincidunt eget nullam non nisi est. Magna sit amet purus gravida quis blandit turpis cursus. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Et netus et malesuada fames ac turpis egestas integer. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Nam aliquam sem et tortor consequat. Donec ac odio tempor orci dapibus ultrices. Nisl tincidunt eget nullam non nisi est sit. Dolor sed viverra ipsum nunc aliquet. Mi in nulla posuere sollicitudin aliquam. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Tortor posuere ac ut consequat. Curabitur gravida arcu ac tortor. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Tellus elementum sagittis vitae et leo duis ut diam quam. Habitant morbi tristique senectus et netus et. Leo urna molestie at elementum eu facilisis sed odio morbi. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Ultricies mi eget mauris pharetra et ultrices neque. Dignissim convallis aenean et tortor at. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Auctor neque vitae tempus quam pellentesque nec nam. Ut pharetra sit amet aliquam id diam maecenas ultricies. Ac turpis egestas integer eget aliquet nibh praesent tristique. Vulputate dignissim suspendisse in est. Dui nunc mattis enim ut tellus elementum sagittis.",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo donec enim diam vulputate ut pharetra. Convallis tellus id interdum velit laoreet id donec. Tellus rutrum tellus pellentesque eu tincidunt. Libero id faucibus nisl tincidunt eget nullam non nisi est. Magna sit amet purus gravida quis blandit turpis cursus. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Et netus et malesuada fames ac turpis egestas integer. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Nam aliquam sem et tortor consequat. Donec ac odio tempor orci dapibus ultrices. Nisl tincidunt eget nullam non nisi est sit. Dolor sed viverra ipsum nunc aliquet. Mi in nulla posuere sollicitudin aliquam. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Tortor posuere ac ut consequat. Curabitur gravida arcu ac tortor. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Tellus elementum sagittis vitae et leo duis ut diam quam. Habitant morbi tristique senectus et netus et. Leo urna molestie at elementum eu facilisis sed odio morbi. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Ultricies mi eget mauris pharetra et ultrices neque. Dignissim convallis aenean et tortor at. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Auctor neque vitae tempus quam pellentesque nec nam. Ut pharetra sit amet aliquam id diam maecenas ultricies. Ac turpis egestas integer eget aliquet nibh praesent tristique. Vulputate dignissim suspendisse in est. Dui nunc mattis enim ut tellus elementum sagittis.",
        src: src
    }

    const showProduct = () => {
        localStorage.setItem("current", JSON.stringify(Item))
    }

    return <a href="/products" className={styles.product} onClick={showProduct}>
        <img src={src} alt="image" className="absolute w-[100%] h-[100%] transition-all duration-[1s]"></img>
        <div className="absolute truncate max-w-[90%] font-bold text-[1rem] bottom-[10%] left-[5%]">{name}</div>
        <div id="brand" className="absolute truncate max-w-[70%] text-[0.8rem] bottom-[5%] left-[5%]">{brand}</div>
        <div className={styles.circle}>
            {cost}€
        </div>
    </a>
}