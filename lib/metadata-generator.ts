interface MetadataProps {
    title: string,
    description: string
}

export const metadataGenerator = ({ title, description }: MetadataProps) => {
    return {
        title,
        description
    }
}