import Link from 'next/link'
function First(){
    return(
        <>
        {/* / corresponds to root of our application */}
        <Link href="/">   
            Home
        </Link>
        <h1>First blog</h1>
        
        </>
    )
}
export default First