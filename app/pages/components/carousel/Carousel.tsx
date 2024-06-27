'use client'
import React, { MouseEvent, useState } from 'react';

import styles from "./Carousel.module.css"
import Card from "./components/card/Card"

export default function Navbar() {
    const [k, setK] = useState(0)
    const style_list: string[] = [
        "h-[30vh] translate-x-[130%]",
        "h-[36vh] translate-x-[70%] z-10",
        "h-[40vh] z-20 hover:h-[43vh] hover:cursor-pointer",
        "h-[36vh] translate-x-[-70%] z-10",
        "h-[30vh] translate-x-[-130%]"
    ] 
    const [style0, setStyle0] = useState(style_list[0])
    const [style1, setStyle1] = useState(style_list[1])
    const [style2, setStyle2] = useState(style_list[2])
    const [style3, setStyle3] = useState(style_list[3])
    const [style4, setStyle4] = useState(style_list[4])

    const right = async (e: MouseEvent<HTMLDivElement>) => {
        let i = k + 1
        setStyle0(style_list[(i)%5])
        setStyle1(style_list[(i+1)%5])
        setStyle2(style_list[(i+2)%5])
        setStyle3(style_list[(i+3)%5])
        setStyle4(style_list[(i+4)%5])
        setK(i)
        console.log(i)
    };

    const left = async (e: MouseEvent<HTMLDivElement>) => {
        let i = k - 1
        if (k == 0) {
            i = 4
        }
        setStyle0(style_list[(i)%5])
        setStyle1(style_list[(i+1)%5])
        setStyle2(style_list[(i+2)%5])
        setStyle3(style_list[(i+3)%5])
        setStyle4(style_list[(i+4)%5])
        setK(i)
        console.log(i)
    };

    return <div className={styles.carousel}>
        <div className="select-none text-[#f1f5f9] absolute left-[20%] hover:cursor-pointer" onClick={left}>PREV</div>
        <Card style={style0} name="Product1" brand="brand1" cost={1.23} src="/images/shirt.png"/>
        <Card style={style1} name="Product2" brand="brand2" cost={1.23} src="/images/bag.png"/>
        <Card style={style2} name="Product3" brand="brand3" cost={1.23} src="/images/hat.png"/>
        <Card style={style3} name="Product4" brand="brand4" cost={1.23} src="/images/shirt.png"/>
        <Card style={style4} name="Product5" brand="brand5" cost={1.23} src="/images/bag.png"/>
        <div className="select-none text-[#f1f5f9] absolute right-[20%] hover:cursor-pointer" onClick={right}>NEXT</div>
    </div>
}