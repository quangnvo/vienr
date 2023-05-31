import { compareDesc } from 'date-fns'
import { allBlogs } from 'contentlayer/generated'
import BlogCard from '@/components/blog-card'

export default function Blogs() {

    const blogs = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <section id="blogs">
            <div className="container">

                {/* Render list of blogs */}
                {blogs.map((item, index) => {
                    return <BlogCard key={index} {...item} />
                })}

                {/* Div sau đây chỉ để margin bot, để footer không bị đẩy lên */}
                <div className='my-24' style={{ height: "200px" }}></div>
            </div>
        </section>
    )
}
