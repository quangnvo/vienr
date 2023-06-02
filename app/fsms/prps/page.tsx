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
                <h3 className="text-center md:text-left scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight transition-colors mb-3">
                    {cardName}
                </h3>
                <p className="leading-7 text-justify">
                    {content}
                </p>
            </div>
        </div>
    }

    return (
        <section id="prps" className="py-12">
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
                    <h1 className="text-center md:text-left scroll-m-20 text-3xl lg:text-4xl font-bold tracking-tight my-5">
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
