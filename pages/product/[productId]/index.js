
import { useRouter } from 'next/router'

function ProductDetail(){

    
    const router = useRouter()

   
    const pid = router.query.productId 
    return <h1>Details about product {pid}</h1>
}

export default ProductDetail