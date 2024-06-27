"use client"
import { useState, useEffect, MouseEvent } from 'react'

import Menu from "../pages/components/menu/Menu"

interface Product {
    name: string
    brand: string
    description: string
    details: string
    cost: number
    src: string
}

export default function ProductPage({name, brand, description, details, cost, src}: Product) {
    const [data, setData] = useState<Product>({
        name: "",
        brand: "",
        description: "",
        details: "",
        cost: 0.00,
        src: ""
    })
    const [productQ, setProductQ] = useState(0)

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("current") || "{}"))
    }, [])

    
    const plusOne = async (e: MouseEvent<HTMLDivElement>) => {
        let q = productQ
        setProductQ(q+1)
    }

    const minusOne = async (e: MouseEvent<HTMLDivElement>) => {
        let q = productQ
        if (q > 0) {
            setProductQ(q-1)
        }
    }

    const addToCart = async (e: MouseEvent<HTMLDivElement>) => {
        let cart = []

        if (localStorage.getItem("cart") !== null) {
            cart = JSON.parse(localStorage.getItem("cart") || "{}")
        }

        cart.push({
            item: data,
            num: productQ
        })

        localStorage.setItem("cart", JSON.stringify(cart))
    }

    return <div>
        <Menu />
        <div className="relative h-[8vh]"></div>
        <div className="absolute grid items-center w-[50%] h-[92vh] bg-white overflow-hidden">
            <img className="absolute justify-self-center w-[100%] object-fit blur-lg object-cover scale-150 scale-[1.2]" src={data.src} />
            <img className="absolute justify-self-center h-[100%] object-fit object-cover scale-150" src={data.src} />
        </div>
        <div className="absolute bg-[#1e293b] h-[92vh] w-[50%] right-0  text-white p-[4vh]">
            <div className="text-2xl my-[1vh] font-bold uppercase">{data.name}</div> 
            <div className="text-lg my-[2vh] font-bold">{data.brand}</div>
            <div className="absolute mt-[1vh] font-bold right-[5vh] top-[10vh]">{data.cost}€</div>
            <div className="mt-[3vh] mb-[1vh] font-bold text-[#bae6fd]">DESCRIPTION </div>
            <div className="overflow-y-auto max-h-[32vh] h-fit my-[2vh] p-[1vh] shadow-inner">{data.description}</div>
            <div className="mt-[3vh] mb-[1vh] font-bold text-[#bae6fd]">DETAILS </div>
            <div className="overflow-y-auto max-h-[12vh] h-[20vh] my-[2vh] p-[1vh] shadow-inner">{data.details}</div>
            <div className="flex absolute bottom-[8vh] left-[5vh]">
                <div className="select-none text-2xl text-center rounded-full text-bold w-[4vh] hover:cursor-pointer hover:bg-white hover:text-[#1e293b]"
                onClick={minusOne}>-</div>
                <div className="bg-[#1e293b] text-center w-[5vh] mx-[3vh] border rounded-[5px] place-content-center">{productQ}</div>
                <div className="select-none text-2xl text-center rounded-full text-bold w-[4vh] hover:cursor-pointer hover:bg-white hover:text-[#1e293b]"
                onClick={plusOne}>+</div>
            </div>
            <div onClick={addToCart} className="absolute bottom-[8vh] right-[5vh] hover:bg-[white] p-[1vh] hover:text-[#1e293b] hover:cursor-pointer transition-all duration-300 rounded">ADD TO CART</div>
        </div>
    </div>
}