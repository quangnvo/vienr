import { Badge } from '@/components/ui/badge'

export const blogTag = (blog: any) => {
    return (
        <div className="mt-7 flex gap-2 flex-wrap">
            {blog.tags
                ? blog.tags.map((tag: string, index: number) => {
                    return <Badge variant="default" key={index}>{tag}</Badge>
                })
                : ""
            }
        </div>
    )
}