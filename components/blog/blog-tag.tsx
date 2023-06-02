import { Badge } from '@/components/ui/badge'

export const blogTag = (blog: any) => {
    return (
        <div className="mt-7 hidden md:flex md:gap-2 md:flex-wrap">
            {blog.tags
                ? blog.tags.map((tag: string, index: number) => {
                    return <Badge variant="default" key={index}>{tag}</Badge>
                })
                : ""
            }
        </div>
    )
}