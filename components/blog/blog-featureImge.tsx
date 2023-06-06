import Image from 'next/image'

export const blogFeatureImage = (blog: any) => {
    return (
        <Image
            src={blog.featureImage}
            alt={blog.title}
            width={500}
            height={300}
            className='rounded-xl'
        />
    )
}