//to access dymanic route in page useRouter hook is required

import { useRouter } from 'next/router'

function ProductDetail(){

    //useRouter returns a router object
    const router = useRouter()

    //from router object we access query parameters object
    const pid = router.query.productId  //productId corresponds to dynamic segment provided in file name
    return <h1>Details about product {pid}</h1>
}

export default ProductDetail