import { Building2, Tractor, Package, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: Building2,
    title: 'Smart Buildings',
    desc: 'HVAC, lighting, occupancy, and energy management — reduce costs by up to 30% with intelligent automation.',
    items: ['Temperature & humidity sensors', 'Door/window contacts', 'CO2 air quality', 'Occupancy (PIR)'],
  },
  {
    icon: Tractor,
    title: 'Precision Agriculture',
    desc: 'Soil monitoring, weather stations, and irrigation control — optimize yields while conserving water.',
    items: ['Soil moisture probes', 'Outdoor temp/humidity', 'Ultrasonic level', 'GPS tracking'],
  },
  {
    icon: Package,
    title: 'Asset Tracking',
    desc: 'Real-time location, condition monitoring, and automated inventory for warehouses and logistics.',
    items: ['Accelerometer sensors', 'Magnetic proximity', 'Tilt monitoring', 'Find My Devices'],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">Solutions</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Pre-built solutions for common use cases
          </h2>
          <p className="text-lg text-text-secondary">
            Combine hardware, software, and integrations into turnkey packages
            that deploy in days, not months.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map(s => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="rounded-xl bg-surface border border-border/30 p-8 hover:border-accent/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-accent font-medium group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
