import { compareDesc } from 'date-fns'
import BlogCard from '@/components/blog-card'
import { breadcrums } from '@/components/breadcrums'
import { allVaccps } from '@/.contentlayer/generated'

export default function Vaccp() {

    const blogs = allVaccps.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <section id="vaccp" className="py-20">
            <div className="container">

                {/* Breadcrumbs */}
                {breadcrums({
                    block1: {
                        hrefName: "/fsms",
                        blockName: "FSMS"
                    },
                    block2: {
                        hrefName: "/fsms/vaccp",
                        blockName: "VACCP"
                    }
                })}

                {/* Title */}
                <h1 className="scroll-m-20 text-4xl text-center md:text-left font-bold tracking-tight lg:text-5xl mt-7 mb-20">
                    VACCP
                </h1>

                {/* Render list of blogs */}
                {blogs.map((item, index) => {
                    return <BlogCard key={index} {...item} />
                })}
            </div>
        </section>
    )
}
