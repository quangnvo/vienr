import { compareDesc } from 'date-fns'
import BlogCard from '@/components/blog-card'
import { breadcrums } from '@/components/breadcrums'
import { allHaccps } from 'contentlayer/generated'


export default function Haccp() {

  const blogs = allHaccps.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <section id="haccp" className='py-20'>
      <div className="container">

        {/* Breadcrumbs */}
        {breadcrums({
          block1: {
            hrefName: "/fsms",
            blockName: "FSMS"
          },
          block2: {
            hrefName: "/fsms/haccp",
            blockName: "HACCP"
          }
        })}

        {/* Title */}
        <h1 className="scroll-m-20 text-4xl text-center md:text-left font-bold tracking-tight lg:text-5xl mt-7 mb-20">
          HACCP
        </h1>

        {/* Render list of blogs */}
        {blogs.map((item, index) => {
          return <BlogCard key={index} {...item} />
        })}
      </div>
    </section>
  )
}
