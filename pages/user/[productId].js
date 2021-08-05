import React from 'react'
import { useRouter } from 'next/router'

const ProductId = () => {
    const router = useRouter()
    const {productId} = router.query    
    return (
        <div>
            Esta es la página del producto: {productId}
        </div>
    )
}

export default ProductId