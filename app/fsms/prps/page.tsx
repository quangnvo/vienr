'use client'

import { breadcrums } from '@/components/breadcrums'
import { useRouter } from 'next/navigation';

export default function Prps() {

    const router = useRouter();

    interface PrpCard {
        cardName: string,
        hrefName: string,
        content?: string
    }

    const prpCard = ({ cardName, hrefName, content }: PrpCard) => {
        return <div
            className='py-8 px-6 border-2 border-slate-200 flex justify-center rounded-lg shadow-sm transition ease-in-out delay-150 duration-150 hover:cursor-pointer hover:-translate-y-2 hover:bg-slate-50 hover:border-black dark:hover:bg-black dark:hover:border-white'
            onClick={() => router.push(hrefName)}
        >
            <div>
                <h2 className='scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0'>
                    {cardName}
                </h2>
                <p className="leading-7 text-justify">
                    {content}
                </p>
            </div>
        </div>
    }

    return (
        <section id="prps" className="py-20">
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
                        }
                    })}

                    {/* Title */}
                    <h1 className="scroll-m-20 text-4xl text-center md:text-left font-bold tracking-tight lg:text-5xl my-7">
                        PRPs - Các chương trình tiên quyết
                    </h1>

                    {/* List all PRPs programmes*/}
                    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-5'>

                        {prpCard({
                            cardName: "Quản lý dị ứng",
                            hrefName: "/fsms/prps/quan-ly-di-ung",
                            content: "Quản lý dị ứng chú trọng đến việc phát hiện và kiểm soát các chất gây dị ứng trong thực phẩm. Điều này bao gồm đảm bảo rằng  nguyên liệu, quy trình sản xuất và môi trường chế biến không là nguyên nhân gây nhiễm chéo các chất gây dị ứng."
                        })}
                    </div>

                    {/* Div sau đây chỉ để margin bot, để footer không bị đẩy lên */}
                    <div className='my-24' style={{ height: "50px" }}></div>
                </div>
            </div>
        </section>
    )
}
