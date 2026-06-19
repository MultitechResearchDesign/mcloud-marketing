import { ArrowRight } from 'lucide-react'

const devices = [
  {
    name: 'Conduit AP 300 Global',
    sku: 'MTCAP3-L4G2D',
    desc: 'Global eSIM gateway — one SKU for worldwide deployments.',
    tags: ['LTE Cat 4', 'LoRaWAN', 'eSIM'],
    price: '$949',
    badge: 'NEW',
  },
  {
    name: 'Conduit 300 Series',
    sku: 'MTCDT3AC',
    desc: 'Enterprise-grade gateway with edge computing and advanced security.',
    tags: ['LTE Cat 4', 'LoRaWAN', 'Edge Computing'],
    price: '$1,299',
    badge: null,
  },
  {
    name: 'Conduit IP67 Series',
    sku: 'MTCDTIP2',
    desc: 'Ruggedized outdoor gateway for harsh environments.',
    tags: ['IP67', 'LTE Cat 4', 'GPS'],
    price: '$1,499',
    badge: null,
  },
  {
    name: 'Palantiri 64-Channel',
    sku: 'PALANTIRI-64CH',
    desc: 'High-capacity gateway for dense sensor deployments.',
    tags: ['64 Channels', 'LoRaWAN', 'Cellular'],
    price: '$1,299',
    badge: 'NEW',
  },
  {
    name: 'rCell 100 Series',
    sku: 'MTR-LNA7-B07',
    desc: 'Compact LoRaWAN router for small deployments.',
    tags: ['LoRaWAN', 'Compact', 'Easy Setup'],
    price: '$399',
    badge: null,
  },
  {
    name: 'Temperature & Humidity',
    sku: 'RBS301-TH',
    desc: 'Indoor environmental sensor with 5+ year battery life.',
    tags: ['LoRaWAN', 'Battery', 'Indoor'],
    price: '$89',
    badge: null,
  },
]

export default function Hardware() {
  return (
    <section id="hardware" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">Supported hardware</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Hardware abstraction, not hardware ignorance
          </h2>
          <p className="text-lg text-text-secondary">
            mCloud is purpose-built for MultiTech gateways and sensors — deeply integrated
            from firmware to cloud. One platform, total visibility.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map(d => (
            <div
              key={d.sku}
              className="group rounded-xl bg-surface border border-border/30 p-6 hover:border-accent/30 transition-all relative overflow-hidden"
            >
              {d.badge && (
                <span className="absolute top-4 right-4 px-2 py-0.5 rounded text-xs font-bold bg-accent/20 text-accent">
                  {d.badge}
                </span>
              )}
              <div className="w-full aspect-[3/2] rounded-lg bg-deep mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-electric/20" />
              </div>
              <h3 className="text-base font-semibold mb-1">{d.name}</h3>
              <p className="text-xs text-text-muted mb-2">{d.sku}</p>
              <p className="text-sm text-text-secondary mb-3">{d.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {d.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded text-xs bg-deep border border-border/30 text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{d.price}</span>
                <span className="text-sm text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                  View <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-bright transition-colors font-medium"
          >
            Browse full product catalog
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
