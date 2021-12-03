//useEffect hook won't allow pre-rendering
import Link from 'next/link'
function PostList({posts}){
    return(
        <>
            <h1>List of 1st 3 posts</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            {/* when child is not href passHref is used */}
                        
                        <h2>{post.title}</h2>
                       
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default PostList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props:{
            posts: data,
        }
    }
}