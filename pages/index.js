import Link from 'next/link'

//useRouter is used for navigating programatically
import {useRouter} from 'next/router'
export default function Home() {
  const router = useRouter()
  const handler = () => {
    //the push method of router object is used 
    // router.push('/product')   //pushes into stack
    router.replace('/product')   //replaces into stack
  }
  return (
    <div >
     Home page
     <Link href="/blog">
      <a>Blog</a>
     </Link>
     <Link href="/posts">
      <a>Posts</a>
     </Link>

     {/* button to navigate to product list page */}
     <button onClick={handler}>
       View all products
     </button>
    </div>
  )
}
