"use client"
import { useState, useEffect, MouseEvent } from 'react'

interface Product {
    name: string
    brand: string
    description: string
    details: string
    cost: number
    src: string
}

export default function Cart() {
    const [data, setData] = useState<String>("")

    useEffect(() => {
        setData(localStorage.getItem("cart") || "{}")
    }, [])

    return <div>{data}</div>
}