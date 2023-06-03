'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAppSelector } from "@/redux/hooks";
import trangChuVienrDarkMode from "@/public/images/home/trang-chu-dark-mode.svg"
import trangChuVienrLightMode from "@/public/images/home/trang-chu-light-mode.svg"


export default function Home() {

	const isDark = useAppSelector(state => state.darkModeReducer.isDark)
	interface OrganizationCardProps {
		src: string,
		alt: string,
		width: number,
		height: number,
	}

	const renderOrganizationCard = ({ src, alt, width, height }: OrganizationCardProps) => {
		return <div
			className='col-span-4 bg-white flex justify-center items-center px-6 rounded-lg border-2 border-slate-200 shadow-sm'
			style={{ height: "170px" }}
		>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className='grayscale'
			/>
		</div>
	}

	return (
		<main>
			<div className='container py-5 duration-500'>

				{/* Section Intro 1 */}
				<section className="relative flex h-[calc(100vh-72px)] items-center justify-center">

					{/* Neon color */}
					<div className="absolute inset-0 z-0">

						{/* 1st neon */}
						<div className="absolute left-1/4 overflow-visible md:block hidden">
							<div className="animate-pulse-slower absolute h-[460px] w-[460px] -translate-x-1/4 rounded-full mix-blend-multiply blur-3xl filter bg-teal-100/50 dark:bg-teal-800/20" />
						</div>

						{/* 2nd neon */}
						<div className="absolute left-3/4 overflow-visible">
							<div className="animate-pulse-slower absolute top-20 left-3/4 h-[612px] w-[612px] -translate-x-2/3 rounded-full mix-blend-multiply blur-3xl filter bg-indigo-200/40 dark:bg-indigo-900/20" />
						</div>
					</div>

					{/* Title and intro */}
					<div className="relative z-10 flex flex-col items-center justify-between gap-8">
						<div className="flex flex-col items-center gap-2 text-center">

							<h1 className="scroll-m-20 text-5xl md:text-7xl font-bold tracking-tight animate__animated animate__fadeInLeft">
								Vienr Food
							</h1>

							<div className="text-lg md:text-2xl mt-5 animate__animated animate__fadeInLeft" style={{ lineHeight: '35px' }}>
								<p className='my-4 text-center'>
									Chào mừng các bạn đến với website <b>vienrfood.com</b>!
								</p>
								<p className='my-4 text-center'>
									Nơi chúng tôi chia sẻ kiến thức và giải pháp để thiết lập, duy trì một hệ thống an toàn thực phẩm cho các doanh nghiệp kinh doanh sản xuất thực phẩm.
								</p>
							</div>
						</div>
					</div>
				</section>


				{/* Section Intro 2 */}
				<section id='intro' className="grid grid-cols-1 xl:grid-cols-12">

					<div className="col-span-7 flex items-center justify-start">
						<div className="w-full text-center xl:text-left">
							{/* Text */}
							<div className="text-base md:text-xl mt-5 animate__animated animate__fadeInLeft lg:w-11/12" style={{ lineHeight: '35px' }}>
								<p className='my-4 text-justify'>
									Tại <b>Vienr Food</b>, bạn sẽ tìm thấy các hướng dẫn để văn bản hóa các chương trình tiên quyết, đánh giá rủi ro, phân tích mối nguy và xu hướng văn hóa an toàn thực phẩm thông qua những bài viết chuyên sâu và thực tế, cũng như cập nhật thông tin mới nhất về các yêu cầu vận hành hệ thống an toàn thực phẩm phù hợp với một số tiêu chuẩn toàn cầu như:
								</p>
								<ul className="my-4 ml-6 list-disc [&>li]:mt-2">
									<li className='ml-0 xl:ml-7'>Cục quản lý thực phẩm và dược phẩm Hoa Kỳ (<b>FDA</b>)</li>
									<li className='ml-0 xl:ml-7'>Tổ chức sáng kiến an toàn thực phẩm toàn cầu (<b>GFSI</b>)</li>
									<li className='ml-0 xl:ml-7'>Hiệp hội bán lẻ toàn cầu Anh Quốc (<b>BRC</b>)</li>
								</ul>
								<p className='my-4 text-justify'>
									Bất kể bạn là một chủ nhà hàng thực phẩm, nhà sản xuất, nhân viên quản lý hay chỉ đơn giản là người quan tâm đến an toàn thực phẩm, chúng tôi hy vọng rằng website của chúng tôi sẽ trở thành nguồn tài nguyên hữu ích và đáng tin cậy cho bạn. Cảm ơn bạn đã ghé thăm!
								</p>
							</div>

							{/* Button Blog */}
							<Link href="/fsms">
								<Button variant="vienr" className='mt-5 text-base md:text-md animate__animated animate__fadeInLeft shadow-lg font-semibold px-10 py-6 rounded-full'>
									FSMS
								</Button>
							</Link>
						</div>
					</div>

					{/* Home page image */}
					<div className="col-span-5 mt-20 md:mt-0 flex justify-center">
						{isDark
							? <Image
								src={trangChuVienrDarkMode}
								alt='Vienr Home page image'
								width={700}
							/>
							: <Image
								src={trangChuVienrLightMode}
								alt='Vienr Home page image'
								width={700}
							/>
						}
					</div>
				</section>

				{/* Section Organizations */}
				<section id="organizations" className='mt-52 mb-12'>

					<h2 className="scroll-m-20 pb-7 text-xl md:text-2xl font-semibold tracking-tight text-center lg:text-left">
						Chúng tôi luôn cập nhật tiêu chuẩn toàn cầu về an toàn thực phẩm
					</h2>

					<div className="grid grid-cols-1 xl:grid-cols-12 gap-5">

						{renderOrganizationCard({
							src: "/images/home/logo-fda.png",
							alt: 'FDA logo',
							width: 340,
							height: 100,
						})}
					</div>
				</section>
			</div>
		</main>
	)
}
