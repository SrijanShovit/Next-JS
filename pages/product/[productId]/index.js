
import Link from 'next/link';

function ProductDetail({productId=100}){

    return (
        <>
        {/* navigating to dynamic routes */}
        <Link href="/product/1" replace>
            {/* replace prop will replace the product history stack instead of adding a new url */}
        <a>Product 1</a>
        </Link>

        {/* suppose product id recieved from props then we can't hardcode the id */}
        <Link href={`/product/{productId}`}>
        <a>Product {productId}</a>
        </Link>
        </>
    )
}

export default ProductDetail