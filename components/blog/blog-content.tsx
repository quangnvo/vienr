import { Mdx } from '@/components/mdx-components'

export const blogContent = (blog: any) => {
    return (
        <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-full text-justify">
            <Mdx code={blog.body.code} />
        </article>
    )
}