"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from "./ui/icons"
import { useAppDispatch } from "@/redux/hooks"
import { checkIsDark } from "@/redux/features/darkMode/darkModeSlice"

export function ModeToggle() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	const dispatch = useAppDispatch()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		// return null
		return (
			<button className="border rounded-md w-10 h-10 flex items-center justify-center bg-white dark:bg-white dark:text-black">
				...
			</button>
		)
	}

	return (
		<button
			onClick={() => {
				setTheme(theme === "light" ? "dark" : "light")
				dispatch(checkIsDark())
			}}
			className="w-10 h-10 flex items-center justify-center">

			<span className="sr-only">Toggle mode</span>

			{theme !== "dark" ? (
				<SunIcon className="" />
			) : (
				<MoonIcon className="" />
			)}
		</button>
	)
}
