import Image from "next/image"
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks"

const mdxComponents = {
    Image,
    Link,
    DivCenter: ({ children }: any) => {
        return (
            <div className="flex items-center justify-center">
                {children}
            </div>
        );
    },
    DivRight: ({ children }: any) => {
        return (
            <div className="flex items-center justify-end">
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