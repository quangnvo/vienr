'use client'

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
import moment from 'moment';
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation';


export default function BlogCard(blog: any) {

    const router = useRouter();

    return (
        <div
            className="w-full px-6 py-8 my-10 rounded-xl border-2 border-slate-200 shadow-sm transition ease-in-out delay-150 duration-200 hover:cursor-pointer hover:scale-105 hover:bg-slate-50 hover:border-black dark:hover:bg-black dark:hover:border-white"
            onClick={() => { router.push(blog.slug) }}
        >
            <div className="grid grid-cols-1 md:grid-cols-12 ">

                {/* Thông tin bài viết */}
                <div className="col-span-7 flex justify-center items-center ">
                    <div className="w-11/12">

                        {/* Date */}
                        <div className="my-4 flex gap-2">
                            <CalendarDays />
                            {moment(blog.date).format("DD-MM-YYYY")}
                        </div>

                        {/* Blog title */}
                        <h2 className="text-2xl font-semibold">
                            <Link href={blog.slug}>
                                {blog.title}
                            </Link>
                        </h2>

                        {/* Avatar */}
                        <div className='flex gap-3 items-center my-4 font-semibold'>
                            <Avatar>
                                <AvatarImage src={blog.avatarAuthor} alt={blog.author} />
                                <AvatarFallback className='font-semibold'>
                                    VN
                                </AvatarFallback>
                            </Avatar>
                            {blog.author}
                        </div>

                        {/* Tags */}
                        <div className="mt-7 flex gap-2 flex-wrap">
                            {blog.tags
                                ? blog.tags.map((tag: string, index: number) => {
                                    return <Badge variant="default" key={index}>{tag}</Badge>
                                })
                                : ""
                            }
                        </div>
                    </div>
                </div>

                {/* Hình đại diện của bài viết */}
                <div className="mt-10 md:mt-0 col-span-5 px-4 py-5 rounded-xl min-h-[20rem] bg-slate-800"></div>
            </div>
        </div>
    )
}