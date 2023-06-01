import { Mdx } from '@/components/mdx-components'

export const blogContent = (blog: any) => {
    return (
        <article className="prose prose-base md:prose-lg dark:prose-invert max-w-full text-justify">
            <Mdx code={blog.body.code} />
        </article>
    )
}