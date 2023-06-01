import { metadataGenerator } from "@/lib/metadata-generator"

export const metadata = metadataGenerator({
  title: "HACCP",
  description: "HACCP Vienr Food"
})

export default function Haccp() {
  return (
    <section id="haccp">
      <div className="container">
        Haccp


        {/* Div sau đây chỉ để margin bot, để footer không bị đẩy lên */}
        <div className='my-60' style={{ height: "300px" }}></div>
      </div>
    </section>
  )
}
