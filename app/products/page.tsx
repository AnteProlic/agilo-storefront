import React, { MouseEvent, useState } from 'react';

import ProductPage from '../pages/productPage';

interface Product {
    name: string
    brand: string
    description: string
    details: string
    cost: number
    src: string
}

export default function Product() {
    return <ProductPage />
}