import { metadataGenerator } from "@/lib/metadata-generator"

export const metadata = metadataGenerator({
    title: "VACCP",
    description: "VACCP Vienr Food"
})

export default function Vaccp() {
    return (
        <section id="vaccp">
            <div className="container">
                Vaccp


                {/* Div sau đây chỉ để margin bot, để footer không bị đẩy lên */}
                <div className='my-60' style={{ height: "300px" }}></div>
            </div>
        </section>
    )
}
