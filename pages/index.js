import Link from 'next/link'

export default function Home() {
  return (
    <div >
     Home page
     <Link href="/blog">
      <a>Blog</a>
     </Link>
    </div>
  )
}
