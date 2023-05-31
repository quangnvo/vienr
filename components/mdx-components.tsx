import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const mdxComponents = {
    Image,
    TheCuaQuang: () => <div className="px-3 py-2 border border-black rounded-lg shadow-lg my-5">The cua Quang</div>,
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return <Component components={mdxComponents} />
}