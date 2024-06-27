"use client"
import { useState, useEffect, MouseEvent } from 'react'

import styles from "./Main.module.css"

import Product from "./components/product/Product"

interface selectValue {
    target: {
        value: string
    }
}

export default function Main() {
    const arr = [
        <Product key="id1" name="Product1" brand="brand1" cost={10.09} src="/images/shirt.png" type="shirt"/>,
        <Product key="id2" name="Product2" brand="brand2" cost={1.00} src="/images/hat.png" type="hat"/>,
        <Product key="id3" name="Product3" brand="brand3" cost={1.00} src="/images/bag.png" type="bag"/>,
        <Product key="id4" name="Product4" brand="brand4" cost={1.00} src="/images/shirt.png" type="shirt"/>,
        <Product key="id5" name="Product5" brand="brand5" cost={1.00} src="/images/bag.png" type="bag"/>,
        <Product key="id6" name="Product6" brand="brand6" cost={1.00} src="/images/bag.png" type="bag"/>,
        <Product key="id7" name="Product7" brand="brand7" cost={1.00} src="/images/hat.png" type="hat"/>
    ]
    const [products, setProducts] = useState<any>(arr)

    const filter = (e:selectValue) => {
        if (e.target.value == "all") {
            setProducts(arr)
        } else {
            let temp: React.JSX.Element[] = []
            arr.forEach(product => {
                if (product.props.type == e.target.value) {
                    temp.push(product)
                }
            })
            console.log(temp)
            setProducts(temp)
        }
    }

    return <div>
        <div className="grid w-[100%] items-end h-[10vh]">
            <div className="absolute justify-self-center text-[1.5rem]">PRODUCTS</div>
            <select onChange={filter} className="absolute justify-self-end mr-[5vw] w-[6vw] hover:cursor-pointer">
                <option className="text-[#1e293b]" value="all">ALL</option>
                <option className="text-[#1e293b]" value="shirt">SHIRTS</option>
                <option className="text-[#1e293b]" value="hat">HATS</option>
                <option className="text-[#1e293b]" value="bag">BAGS</option>
            </select>
        </div>
        <div className={styles.products}>
            {products}
        </div>
    </div>
    
    
}