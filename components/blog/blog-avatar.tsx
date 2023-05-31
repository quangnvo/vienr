import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const blogAvatar = (blog: any) => {
    return (
        <div className='flex gap-3 items-center my-4 font-semibold'>
            <Avatar>
                <AvatarImage src={blog.avatarAuthor} alt={blog.author} />
                <AvatarFallback className='font-semibold'>
                    {blog.authorFallBack}
                </AvatarFallback>
            </Avatar>
            {blog.author}
        </div>
    )
}
