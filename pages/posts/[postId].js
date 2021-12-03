// import {useRouter} from 'next/router'

function Post({post}){
    // const router = useRouter()

    //for pages not generated at build time this fallback version is shown then the page is  statically generated if fallback is true
    // if (router.isFallback){
    //     return <h1>Loading...</h1>
    // }
    // console.log(post);

    //this is returned when fallback becomes false again
    return(
        <>
            <h2>{post.title}</h2>
            <h2>{post.id}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post


//here we need to specify what value of postId to take during build time as itis dynamic
//we use getStaticPaths for that
export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    // const paths = data.map(post => {
    //     return {
    //         params:{
    //             postId : `${post.id}`
    //         }
    //     }
    // })
    return {
        //this key tells what pages are statically generated at build time
        //it is an array of object
        paths: [
            {//each object has parameters key which is object 
                //specifying the path id
                //the id must be string
                //3 objects as we have asked for 3 pgs

                //if all pages are pre-fetched and only three build statically then also loading won't appear ; rather on scroll or click pages will be statically generated
                params:{ postId : '1'}
            },{
                params:{ postId : '2'}
            },{
                params:{ postId : '3'}
            }
        ] ,
        // paths: paths,
        fallback:'blocking'   //UI is blocked till new page is build and returned
    }
}

export async function getStaticProps(context){
    const {params} = context;
    //we get hold of dynamic parameters insdie getStaticProps using params of context props
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()

    //if requets for id>100 made return notfound object = true
    if (!data.id) {
        return {
            notFound: true
        }
    }
    console.log(`Generating page for /posts/${params.postId}`)
    
    return {
        props:{
            post : data
        }
    }
}