import Image from 'next/image'

export const blogFeatureImage = (blog: any) => {
    return (
        <Image
            src={blog.featureImage}
            alt={blog.title}
            width={1000}
            height={500}
            className='rounded-xl shadow-sm'
        />
    )
}