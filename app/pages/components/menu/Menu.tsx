'use client'
import React, { MouseEvent, useState } from 'react';

import Image from 'next/image';

import styles from "./Menu.module.css"

import Select from './components/select/Select';

import shoppingCartIcon from "../../../../public/shopping-cart-outline-svgrepo-com.svg"
import menuIcon from "../../../../public/menu.svg"

export default function Menu() {
    const [visibility, setVisibility] = useState("collapse")

    const showHideSidebar = async (e: MouseEvent<HTMLDivElement>) => {
        let current = visibility
        if (current == "collapse") {
            setVisibility("visible")
        } else {
            setVisibility("collapse")
        }
    }
    
    return <div className="w-[100%]">
        <div className={styles.menu}>
            <Image className="h-[2em] w-fit my-[1em] absolute start-[1em] hover:fill-[#d946ef] hover:cursor-pointer" 
            src={menuIcon} 
            alt={"Menu Icon"}
            onClick={showHideSidebar}/>
            <div className="absolute self-center justify-self-center align-center flex">
                <svg className="self-center mr-1" width="1em" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9323 2.99685L10.8062 0.680825C9.4562 -0.0788298 7.80195 -0.0788298 6.45193 0.680825L2.3068 2.99685C0.975792 3.7565 0.13916 5.16464 0.13916 6.66542V11.316C0.13916 12.8353 0.975792 14.2249 2.3068 14.9846L6.43292 17.3191C7.78294 18.0788 9.43719 18.0788 10.7872 17.3191L14.9133 14.9846C16.2633 14.2249 17.081 12.8353 17.081 11.316V6.66542C17.119 5.16464 16.2824 3.7565 14.9323 2.99685ZM8.61957 13.1318C6.2808 13.1318 4.37936 11.2789 4.37936 8.99997C4.37936 6.72101 6.2808 4.86819 8.61957 4.86819C10.9583 4.86819 12.8788 6.72101 12.8788 8.99997C12.8788 11.2789 10.9774 13.1318 8.61957 13.1318Z" fill="#7C3AED"/>
                </svg>
                <div className="self-center font-bold text-xl">medusa</div>
            </div>
            <a href="cart" className="w-[8vh] h-[8vh] right-0 absolute"><Image 
            className="h-[2em] w-fit my-[1em] absolute end-[1.2em] hover:fill-[#d946ef] hover:cursor-pointer" 
            src={shoppingCartIcon} 
            alt={"Shopping Cart Icon"}/></a>
        </div>
        <div className={`${styles.sidebar} `+visibility}>
            <a href="/"><Select title="home"/></a>
            <a href="/cart"><Select title="cart"/></a>
            <Select title="option3"/>
            <Select title="option4"/>
            <Select title="option5"/>
        </div>
    </div>
}