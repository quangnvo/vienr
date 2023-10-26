"use client"

import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { Collapse } from "@material-tailwind/react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import logoVienrLightMode from "@/public/images/logo/logo_vienr_lightMode.svg"
import logoVienrDarkMode from "@/public/images/logo/logo_vienr_darkMode.svg"


export default function NavBar() {

    const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false)
    const isDark = useAppSelector(state => state.darkModeReducer.isDark)
    const pathName = usePathname()
    const indexSecondSlashInPathName = pathName.indexOf("/", 1)
    if (indexSecondSlashInPathName > -1) {
        var pathNameNew = pathName.substring(0, indexSecondSlashInPathName)
    } else {
        var pathNameNew = pathName
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavbarMobileOpen(false)
        );
    }, []);

    interface NavBarButtonType {
        name: string,
        path: string
    }

    const renderNavbarButton = ({ name, path }: NavBarButtonType) => {
        return <li>
            <Link href={path}>
                <Button
                    variant="ghost"
                    className={` ${pathNameNew === path ? "font-bold text-lg" : "text-base"}   `}
                >
                    {name}
                </Button>
            </Link>
        </li>
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
            {renderNavbarButton({ name: "Trang chủ", path: "/" })}
            {/* {renderNavbarButton({ name: "Giới thiệu", path: "/about" })} */}
            {renderNavbarButton({ name: "Blogs", path: "/blogs" })}
            {renderNavbarButton({ name: "FSMS", path: "/fsms" })}
            {/* {renderNavbarButton({ name: "Đăng nhập", path: "/login" })} */}
        </ul>
    );

    return (
        <>
            <nav className="sticky inset-0 z-50 h-max rounded-none max-w-full shadow-md bg-opacity-80 backdrop-saturate-200 backdrop-blur-2xl bg-white border border-white/80 dark:bg-gray-900 dark:border-none">
                <div className="container py-3 flex items-center justify-between">
                    {/* Left side */}
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

                    {/* Right side */}
                    <div className="flex items-center gap-4">

                        {/* Render navlist */}
                        <div className="mr-4 hidden lg:block">
                            {navList}
                        </div>

                        {/* Dark mode */}
                        {/* <ModeToggle /> */}

                        {/* Icon Hamburger */}
                        <button
                            className="h-6 w-6 text-inherit lg:hidden dark:text-white"
                            onClick={() => { setIsNavbarMobileOpen(!isNavbarMobileOpen) }}
                        >
                            {isNavbarMobileOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Navbar on mobile */}
                <Collapse open={isNavbarMobileOpen}>
                    <div className="flex justify-center items-center text-center">
                        {navList}
                    </div>
                </Collapse>
            </nav>
        </>
    )
}