"use client"

import Link from "next/link"
import Image from "next/image"
import logoVienrLightMode from "@/public/images/logo/logo_vienr_lightMode.svg"
import logoVienrDarkMode from "@/public/images/logo/logo_vienr_darkMode.svg"
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import { Button } from "./ui/button";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react"
import { checkIsDark } from "@/redux/features/darkMode/darkModeSlice"

export default function Footer() {

	const isDark = useAppSelector(state => state.darkModeReducer.isDark);
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(checkIsDark())
	})

	return (
		<footer>
			<div className="py-1 max-w-full">
				<div className="container mx-auto py-7 border-t-2 border-slate-300">
					<div>
						<div className="flex flex-col justify-center items-center md:justify-between md:flex-row">

							{/* Left side */}
							<div className="flex flex-col items-center md:items-start mb-10 md:mb-0">

								{/* Logo */}
								{isDark
									? <Link href="/">
										<Image
											src={logoVienrDarkMode}
											alt="Logo VienrFood"
											priority
											width={90}
											height={50}
										/>
									</Link>
									: <Link href="/">
										<Image
											src={logoVienrLightMode}
											alt="Logo VienrFood"
											priority
											width={90}
											height={50}
										/>
									</Link>
								}

								<div className="mt-2 dark:text-dark-gray-text md:text-left text-center">
									Navigating Food Safety Systems Simplified
								</div>
							</div>

							{/* Right side */}
							<div className="flex mb-10 md:mb-0">
								<Link href="/">
									<Button variant="ghost">
										<Youtube size={30} />
									</Button>
								</Link>

								<Link href="/">
									<Button variant="ghost">
										<Linkedin />
									</Button>
								</Link>

								<Link href="/">
									<Button variant="ghost">
										<Facebook />
									</Button>
								</Link>
							</div>
						</div>

						<div className="flex justify-center items-center ">
							<p>© Vienr 2024. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
