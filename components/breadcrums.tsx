import Link from "next/link"
import { ChevronRight } from 'lucide-react'

interface Block {
    hrefName: string,
    blockName: string
}

interface BreadCrumsProps {
    block1: Block,
    block2?: Block,
    block3?: Block,
    block4?: Block,
    block5?: Block,
}

const blockInBreadcrums = (block: Block) => {
    return <li>
        <div className="flex items-center">
            <ChevronRight className="dark:text-gray-400" />
            <Link
                href={block.hrefName}
                className="ml-1 text-md font-medium text-gray-700 hover:font-bold md:ml-2 dark:text-gray-300 dark:hover:text-white">
                {block.blockName}
            </Link>
        </div>
    </li>
}

export const breadcrums = ({ block1, block2, block3, block4, block5 }: BreadCrumsProps) => {
    return (
        <div className="inline-block px-4 py-2 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mb-7">
            <ol className="md:inline-flex items-center space-x-1 md:space-x-3 ">

                {/* Block home */}
                <li className="">
                    <Link
                        href="/"
                        className="text-md font-medium text-gray-700 hover:font-bold md:ml-2 dark:text-gray-300 dark:hover:text-white">
                        Trang chủ
                    </Link>
                </li>

                {/* Block 1 */}
                {blockInBreadcrums(block1)}

                {/* Block 2,3,4,5 */}
                {block2 ? blockInBreadcrums(block2) : ""}
                {block3 ? blockInBreadcrums(block3) : ""}
                {block4 ? blockInBreadcrums(block4) : ""}
                {block5 ? blockInBreadcrums(block5) : ""}
            </ol>
        </div>
    )
}
