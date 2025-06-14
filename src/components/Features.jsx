import React from 'react'

export const FeaturesSec = () => {
  const fes = [
    {
      heading: 'Why choose PAINT PRO TECH ?',
      description:
        'Competitive Prices, Consistent Stock & Fast Delivery, Installation Support, Trusted Brand – 100% Made in India',
    },
    {
      heading: 'Why should you choose Paint Pro Tech Paint Protection Film?',
      description:
        'Paint Pro Tech PPF protects your car’s surface from scratches, stone chips, and other damage. It keeps your vehicle looking shiny and new for a long time. Our film is made using advanced technology and tested carefully to give strong and long-lasting protection.',
    },
    {
      heading: 'Is Paint Pro Tech PPF a good investment?',
      description:
        'Yes! Paint Pro Tech PPF, also called a clear bra, helps protect your car’s paint and keeps it looking like new. It saves money on repainting or repairs and keeps your car looking great for years',
    },
  ]

  return (
    <div>
      <section className="bg-black text-white text-center">
        <h1 className="pt-15 text-[clamp(1.2rem,2.5vw,2rem)] font-bold">
          Why choose PAINT PRO TECH ?
        </h1>
        <div className="p-5 flex flex-wrap">
          {fes.map((fes, index) => (
            <div
              key={index}
              className="m-5 border-1 rounded-b-sm flex-1 min-w-[250px] transition-transform duration-300 transform hover:scale-105 hover:bg-neutral-800 hover:text-white shadow-md"
            >
              <h1 className="m-5 text-3xl font-semibold">{fes.heading}</h1>
              <p className="m-5 text-neutral-600 text-[clamp(0.9rem,2.5vw,1.2rem)] transition-transform duration-300 hover:text-white shadow-md group-hover:text-white">
                {fes.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
