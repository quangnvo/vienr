import { defineDocumentType, makeSource } from '@contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: import('contentlayer/source-files').ComputedFields = {
    slug: {
        type: "string",
        resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc: any) => {
            const separatedParts = doc._raw.flattenedPath.split("/");
            const desiredPart = separatedParts[separatedParts.length - 1];
            return desiredPart
        },
    },
}

interface DocumentTypeProps {
    name: string,
    filePathPattern: string
}

// ---------- Create a defineDocumentTypeCreator ----------
const defineDocumentTypeCreator = ({ name, filePathPattern }: DocumentTypeProps) => {
    return defineDocumentType(() => ({
        name: name,
        filePathPattern: filePathPattern,
        contentType: "mdx",
        fields: {
            title: { type: 'string', required: true },
            description: { type: "string", required: true },
            date: { type: "date", required: true },
            author: { type: "string", required: true },
            authorFallBack: { type: "string" },
            avatarAuthor: { type: "string", required: true },
            featureImage: { type: "string", required: true },
            tags: {
                type: 'list',
                of: { type: 'string' },
            }
        },
        computedFields,
    }))
}

// ---------- Blog ----------
export const Blog = defineDocumentTypeCreator({
    name: "Blog",
    filePathPattern: "blogs/**/*.mdx"
})

// ---------- QuanLyDiUng ----------
export const QuanLyDiUng = defineDocumentTypeCreator({
    name: "QuanLyDiUng",
    filePathPattern: "fsms/prps/quan-ly-di-ung/**/*.mdx"
})

// ---------- HACCP ----------
export const Haccp = defineDocumentTypeCreator({
    name: "Haccp",
    filePathPattern: "fsms/haccp/**/*.mdx"
})

// ---------- TACCP ----------
export const Taccp = defineDocumentTypeCreator({
    name: "Taccp",
    filePathPattern: "fsms/taccp/**/*.mdx"
})

// ---------- VACCP ----------
export const Vaccp = defineDocumentTypeCreator({
    name: "Vaccp",
    filePathPattern: "fsms/vaccp/**/*.mdx"
})

// ---------- VHATTP ----------
export const Vhattp = defineDocumentTypeCreator({
    name: "Vhattp",
    filePathPattern: "fsms/vhattp/**/*.mdx"
})

// ---------- Export source ----------
export default makeSource({
    contentDirPath: './content',
    documentTypes: [
        Blog,
        QuanLyDiUng,
        Taccp,
        Haccp,
        Vaccp,
        Vhattp
    ]
})