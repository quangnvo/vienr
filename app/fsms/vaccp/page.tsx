import { metadataGenerator } from "@/lib/metadata-generator"

export default function Vaccp() {
    return (
        <section id="vaccp">

            <div className="container">
                {/* Div sau đây chỉ để margin bot, để footer không bị đẩy lên */}
                <div className='my-60 flex justify-center items-center' style={{ height: "300px" }}>
                    <div className="border-2 border-black px-12 py-6 rounded-lg dark:border-slate-200">
                        <h1 className="text-center scroll-m-20 text-xl lg:text-4xl font-semibold tracking-tight">
                            Coming soon... 🖊️
                        </h1>
                    </div>
                </div>
            </div>

        </section>
    )
}
