const tools = [
    { name: "WhatsApp", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPYlSJxriimDZku3tYDGsHAocmENvM7D1vG2MjPYGJcLtnwikqteP0f1WMbuRGkGeZFXB0-WZ-zfMVhOSuYCDYXL0rLxegwcxg5256E1rg9y0VplLWbk-Ro1SbqKKBMOdiaXFUUegkxGA-3L2vpHkxDGbGqjZjATUr_1RO7YUsrdepTCWpeATzFEA2TdJAkXTTld83NnugS-d2IUSSBHFr0EDOP7mKo91U5-4CLyZ6VwTXeocousGwiyyDQP-pA6Mnzljn6NY9zEI" },
    { name: "Stripe", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Y_K6Rp9VYqJSh6lpEDjtL9Dk_e1i3JO59blENo38-_xKnB7mDplRs6CetTWKeNXJvwvokrNqir1olFwFy3OlFBGN5kcqs_Fg4j9S4DHm3YpjJoVNCoDckswmc7m1qM4JRsnX4imw4ylGNxR7ZZW25ifXz-ZSKtGxBmZRJeID2B01PGaK53r9wgC3R2HhReJVhMhqGJ1mw5YXLIcAO0IjoXcAzHNABo3AA6eBN9-MThgXWoOSVBZHOoyh1W8mZT9atXmng7HYHeU" },
    { name: "Notion", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA--pHehbG0l-vhwXSszsvcQKprqK6oT2aKN9tcxtd7Vzkm7dbM-UPPlll-OZGzo2AkP_ZRWJUUNE3c2J6Oy0vu_VkWXMIrNrYviOCAc_Ul50x6iYRxsozwM7OOD89Z-4Sg_vA0KXcLAo76c-PHsP0wt_K9LujpdVmF5-0UXsA4th7qjbj88_nXxiWLCL5shIZkDcPDXvzglIeL7FjDtadroa7dZbX2OiG596LiNxO3R8AhtcQW8P198dIjww1NrSA1C-yJd7LtQ3o" },
    { name: "HubSpot", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5xM4mC5N5_wvHdZG51o_InHKdjxqU5Dq3VVaCAX5dseqp34A8GW0o9Ee7hNDvgeigY9BSwHyH1FDStzVl9SsnUv_qkPXbXt6WmwtxpHj3Ccy2RNg1RJDJo6sqetN0Nxy52WTqiRiv1Ln6bii4vF_31ri-haXSEBdy5WIqjAeHWR782AxjggiRHMQT9aQLuRnrRLF5Cq3lL0DG5sLQXp6JQN1kjyvttlOszsKCp9tTsNhXuJNkas5Szx54REqMxHrXpm0J0n47HQY" },
    { name: "Sheets", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaCaWPMhjgdzpGj28MfOKruQZvCSxlROneganIbK4WhC_VbCbyqQUOkOy4t_y2ragr_4gOnjvGUusmSRKDJg0C7fbxbZiTB_zphTc2ijAogWOfgWCuZC4T1Q_cNG9xXMjPNgcz6GL_hbGLwDLH0igFra73ftTuSbAsBmBEKXYDEofTTu8BiIGfNmSJ4zL7Kd9W6K1_mbGvmR4OzfKy25vMIZg_27Z-rdtSklyXI3YQc25tZBIa4eV9_EluAndDPjjgV45Dql5_OYI" },
    { name: "ManyChat", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuClrHrrWsQz9r_l-28hLaQdrN62oaaD4HafT9SuBl-4z4eO_4L-XEQCq2t3Cq90OwZfnceX-FpTb4s8Rd0kfaE-uun-9sveCEjN1OnUZssHhkhdNkyHLZ6QMLJRf9TFf_8ZBYd9-qWRBJbbtCWBuQvZs1wbkTM7Bo7mZ_s8Peik-Kk8qyCvffUlahIySwne88FsM9g2ryUddBYidrrUeXoUF1hA4FdzDickMqtBcx-xWUJJVHaPoub3SVB9p4ApUxxegym8sIQ2sEk" },
];

function ToolRow() {
    return (
        <div className="flex flex-none gap-16 items-center px-8 opacity-70">
            {tools.map((tool, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold grayscale hover:grayscale-0 transition-all cursor-pointer">
                    <img className="size-10 rounded" alt={`${tool.name} icon`} src={tool.src} />
                    <span>{tool.name}</span>
                </div>
            ))}
        </div>
    );
}

export default function TechIntegrations() {
    return (
        <section className="py-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h3 className="text-2xl font-bold text-slate-900">Works with your favorite tools</h3>
            </div>
            <div className="flex gap-8 items-center animate-marquee whitespace-nowrap">
                <ToolRow />
                {/* Duplicated for seamless loop */}
                <ToolRow />
            </div>
        </section>
    );
}
