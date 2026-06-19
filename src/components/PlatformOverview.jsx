import { Cpu, Radio, Cloud, Shield } from 'lucide-react'

const pillars = [
  {
    icon: Cpu,
    eyebrow: 'Edge infrastructure',
    title: 'Intelligent gateways',
    description:
      'Deploy and manage MultiTech Conduit gateways with over-the-air firmware updates, edge computing via mPower, and fleet-wide command orchestration.',
    features: ['OTA firmware updates', 'mPower edge computing', 'Fleet Manager', 'Device Simulator'],
    gradient: 'from-accent to-accent-dim',
  },
  {
    icon: Radio,
    eyebrow: 'Network & connectivity',
    title: 'Wireless connectivity that just works',
    description:
      'Unified connectivity across LoRaWAN, LTE, Wi-Fi, and Bluetooth — with built-in eSIM orchestration for dynamic carrier switching across regions.',
    features: ['eSIM Orchestration', 'LoRaWAN multi-region', 'LTE Cat 4 backhaul', 'Network Topology'],
    gradient: 'from-electric to-electric-bright',
  },
  {
    icon: Cloud,
    eyebrow: 'Cloud infrastructure',
    title: 'Turning data into actions',
    description:
      'Real-time sensor telemetry, threshold-based alert engine, webhook integrations, and a REST API that makes every data point actionable.',
    features: ['Alert Engine', 'Webhooks & API', 'Automations', 'Digital Twins'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    eyebrow: 'Management & security',
    title: 'Complete control of your fleet',
    description:
      'Role-based access, SSO, certificate lifecycle management, security monitoring, and a full audit trail — from a single console.',
    features: ['RBAC & SSO', 'Certificate Lifecycle', 'Security Monitoring', 'Audit Logs'],
    gradient: 'from-amber-500 to-orange-500',
  },
]

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">The platform</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ship connected products faster.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Built for developer productivity, operational observability, and enterprise reliability.
            mCloud gives you everything you need to go from prototype to production.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {pillars.map((p, i) => {
            const Icon = p.icon
            const reverse = i % 2 === 1
            return (
              <div
                key={p.title}
                className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}
              >
                <div className="flex-1 space-y-5">
                  <div className="inline-flex items-center gap-2">
                    <Icon size={18} className="text-accent" />
                    <span className="text-sm font-semibold text-accent tracking-wide uppercase">{p.eyebrow}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{p.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-lg">{p.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.features.map(f => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-lg bg-surface border border-border/40 text-sm text-text-secondary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${p.gradient} p-px`}>
                    <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center">
                      <Icon size={64} className="text-text-muted/30" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
