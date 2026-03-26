import { Banner } from "@/components/Banner"
import { Header } from "@/components/Header"
import { sanityClient } from '../sanity';
import { Posts } from "@/components/Posts";

const query = `*[_type=="post"]{
  _id,
  createdAt,
    title,
    author -> {
      name,
        image
    },
    description,
    slug,
    mainImage
}`



export default async function Page() {
  const posts = await sanityClient.fetch(query, undefined, { cache: 'no-store' })
  return (
    <div className="max-x-7xl mx-auto">
      <Header />
      <Banner />
     <div className="max-w-7xl mx-auto flex items-start justify-between space-x-20">
     <Posts posts={posts} />
     <div className="mt-10 hidden md:grid">
      <h1 className="text-xl font-bold">Discover more of what matters to you</h1>
      <div className="flex flex-wrap gap-2">
        <span className="tag-button">#javascript</span>
        <span className="tag-button">#react</span>
        <span className="tag-button">#next.js</span>
        <span className="tag-button">#tailwind</span>
        <span className="tag-button">#typescript</span>
        <span className="tag-button">#node.js</span>
        <span className="tag-button">#express</span>
        <span className="tag-button">#mongodb</span>
      </div>
     </div>
     </div>
    </div>
  )
}

