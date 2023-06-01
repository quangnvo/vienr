import { metadataGenerator } from "@/lib/metadata-generator"

export const metadata = metadataGenerator({
    title: "Văn hóa an toàn thực phẩm",
    description: "Văn hóa an toàn thực phẩm Vienr Food"
})

export default function Vhattp() {
    return (
        <section id="vhattp">
            <div className="container">
                Vhattp


                {/* Div sau đây chỉ để margin bot, để footer không bị đẩy lên */}
                <div className='my-60' style={{ height: "300px" }}></div>
            </div>
        </section>
    )
}
