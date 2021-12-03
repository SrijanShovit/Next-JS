function Post({post}){
    console.log(post);
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
    
    return {
        //this key tells what pages are statically generated at build time
        //it is an array of object
        paths: [
            {//each object has parameters key which is object 
                //specifying the path id
                //the id must be string
                //3 objects as we have asked for 3 pgs
                params:{ postId : '1'}
            },{
                params:{ postId : '2'}
            },{
                params:{ postId : '3'}
            }
        ] ,
        fallback:false
    }
}

export async function getStaticProps(context){
    const {params} = context;
    //we get hold of dynamic parameters insdie getStaticProps using params of context props
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()
    // console.log(data)
    return {
        props:{
            post : data
        }
    }
}