'use client'

import { useRouter } from 'next/navigation';
import { blogAvatar } from "./blog/blog-avatar";
import { blogTag } from "./blog/blog-tag";
import { blogDate } from "./blog/blog-date";
import { blogTitle } from "./blog/blog-title";
import { blogFeatureImage } from './blog/blog-featureImge';

export default function BlogCard(blog: any) {

    const router = useRouter();

    return (
        <div
            className="w-full p-6 my-10 rounded-xl border-2 border-slate-200 shadow-sm transition ease-in-out delay-150 duration-200 hover:cursor-pointer hover:-translate-y-2 hover:bg-slate-50 hover:border-black flex justify-center items-center dark:bg-slate-900 dark:border-slate-900 dark:hover:border-slate-200"
            onClick={() => { router.push(blog.slug) }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 ">

                {/* Post Information */}
                <div className="col-span-7 flex justify-center items-center ">
                    <div className="w-11/12">
                        {blogDate(blog)}
                        {blogTitle(blog)}
                        {blogAvatar(blog)}
                        {blogTag({
                            blog: blog,
                            isAppearedOnMobile: false
                        })}
                    </div>
                </div>

                {/* Post Feature Image */}
                <div className="mt-4 lg:mt-0 col-span-5 flex justify-center items-center lg:flex-none">
                    {blogFeatureImage(blog)}
                </div>
            </div>
        </div>
    )
}