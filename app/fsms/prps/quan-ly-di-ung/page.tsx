import { breadcrums } from '@/components/breadcrums'
import { compareDesc } from 'date-fns'
import { allQuanLyDiUngs } from 'contentlayer/generated'
import BlogCard from '@/components/blog-card'

export default function QuanLyDiUng() {

    const quanLyDiUngs = allQuanLyDiUngs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <section id="quanLyDiUng" className="py-20">
            <div className="container">
                <div>

                    {/* Breadcrumbs */}
                    {breadcrums({
                        block1: {
                            hrefName: "/fsms",
                            blockName: "FSMS"
                        },
                        block2: {
                            hrefName: "/fsms/prps",
                            blockName: "PRPs"
                        },
                        block3: {
                            hrefName: "/fsms/prps/quan-ly-di-ung",
                            blockName: "Quản lý dị ứng"
                        }
                    })}

                    {/* Title */}
                    <h1 className="scroll-m-20 text-4xl text-center md:text-left font-bold tracking-tight lg:text-5xl mt-7 mb-20">
                        Quản lý dị ứng
                    </h1>

                    {/* Render list of quanLyDiUngs*/}
                    {quanLyDiUngs.map((item, index) => {
                        return <BlogCard key={index} {...item} />
                    })}
                </div>
            </div>
        </section>
    )
}
