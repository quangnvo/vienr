import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const mdxComponents = {
    Image,
    DivCenter: ({ children }: any) => {
        return (
            <div className="flex items-center justify-center">
                {children}
            </div>
        );
    },
}

interface MdxProps {
    code: string
}

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code)
    return <Component components={mdxComponents} />
}