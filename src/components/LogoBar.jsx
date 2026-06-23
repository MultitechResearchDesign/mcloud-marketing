const integrations = [
  { name: 'Netmore', type: 'LNS' },
  { name: 'LORIOT', type: 'LNS' },
  { name: 'Actility ThingPark', type: 'LNS' },
  { name: 'The Things Network', type: 'LNS' },
  { name: 'AWS IoT Core', type: 'Cloud' },
  { name: 'Azure IoT Hub', type: 'Cloud' },
  { name: 'Simetric', type: 'eSIM' },
  { name: 'Cumulocity IoT', type: 'Platform' },
  { name: 'Helium', type: 'LNS' },
  { name: 'ChirpStack', type: 'LNS' },
]

export default function LogoBar() {
  return (
    <section className="py-12 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-text-muted mb-8 tracking-wide uppercase">
          Integrates with the networks and clouds you already use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {integrations.map(i => (
            <div key={i.name} className="flex flex-col items-center gap-1">
              <span className="text-text-muted/70 text-sm font-semibold tracking-wider uppercase hover:text-text-secondary transition-colors">
                {i.name}
              </span>
              <span className="text-[10px] text-text-muted/40 uppercase tracking-widest">{i.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
