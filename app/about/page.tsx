import { metadataGenerator } from "@/lib/metadata-generator"

export const metadata = metadataGenerator({
    title: "Giới thiệu",
    description: "Giới thiệu về Vienr Food"
})

export default function About() {
    return (
        <section id="about">
            <div className="container">
                Giới thiệu


                {/* Div sau đây chỉ để margin bot, để footer không bị đẩy lên */}
                <div className='my-60' style={{ height: "300px" }}></div>
            </div>
        </section>
    )
}
