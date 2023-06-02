import { Badge } from '@/components/ui/badge'

interface BlogTagProps {
    blog: any,
    isAppearedOnMobile: boolean
}

export const blogTag = ({ blog, isAppearedOnMobile }: BlogTagProps) => {
    return (
        // <div className="mt-7 hidden md:flex md:gap-2 md:flex-wrap">
        <div className={`mt-7 gap-2 flex-wrap ${isAppearedOnMobile ? 'flex' : 'hidden md:flex'}`}>
            {blog.tags
                ? blog.tags.map((tag: string, index: number) => {
                    return <Badge variant="default" key={index}>{tag}</Badge>
                })
                : ""
            }
        </div>
    )
}