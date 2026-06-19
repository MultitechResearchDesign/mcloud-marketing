const logos = [
  'Netmore', 'LORIOT', 'The Things Network', 'AWS IoT', 'Azure IoT', 'Helium',
]

export default function LogoBar() {
  return (
    <section className="py-12 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-text-muted mb-8 tracking-wide uppercase">
          Integrates with the networks and clouds you already use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map(name => (
            <span key={name} className="text-text-muted/60 text-sm font-semibold tracking-wider uppercase hover:text-text-secondary transition-colors">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
