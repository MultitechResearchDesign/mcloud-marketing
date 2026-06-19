import { Check, X } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    desc: 'Get started with basic device management for small deployments.',
    cta: 'Start free',
    highlight: false,
    features: [
      { text: 'Up to 5 gateways', included: true },
      { text: 'Dashboard & monitoring', included: true },
      { text: 'Basic alerts', included: true },
      { text: 'Community support', included: true },
      { text: 'Limited API access', included: true },
      { text: 'NOC Dashboard', included: false },
      { text: 'Fleet Manager', included: false },
      { text: 'Security Monitoring', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$10',
    period: '/gateway/year',
    desc: 'For growing deployments that need full visibility and control.',
    cta: 'Start free trial',
    highlight: true,
    features: [
      { text: 'Unlimited gateways', included: true },
      { text: 'NOC Dashboard', included: true },
      { text: 'Fleet Manager & bulk commands', included: true },
      { text: 'Digital Twins', included: true },
      { text: 'Full API access', included: true },
      { text: 'Zero-Touch Onboarding', included: true },
      { text: 'Alert Engine ($49/mo add-on)', included: true },
      { text: 'Security Monitoring', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large-scale deployments with advanced security and channel needs.',
    cta: 'Contact sales',
    highlight: false,
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Security Monitoring', included: true },
      { text: 'SSO & advanced RBAC', included: true },
      { text: 'White-label branding', included: true },
      { text: 'Alert Engine included', included: true },
      { text: 'Certificate Lifecycle', included: true },
      { text: 'Channel partner tools', included: true },
      { text: 'Dedicated support', included: true },
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-deep/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Start free, scale as you grow
          </h2>
          <p className="text-lg text-text-secondary">
            No upfront commitments. Pay only for what you use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map(t => (
            <div
              key={t.name}
              className={`rounded-xl p-8 border ${
                t.highlight
                  ? 'bg-surface border-accent/40 shadow-lg shadow-accent/10 relative'
                  : 'bg-surface border-border/30'
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold bg-accent text-midnight">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold mb-1">{t.name}</h3>
              <p className="text-sm text-text-muted mb-4">{t.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.price}</span>
                {t.period && <span className="text-sm text-text-muted">{t.period}</span>}
              </div>
              <a
                href="#"
                className={`block w-full text-center py-3 rounded-lg font-semibold text-sm transition-colors mb-8 ${
                  t.highlight
                    ? 'bg-accent text-midnight hover:bg-accent-bright'
                    : 'border border-border text-text-primary hover:bg-surface-light'
                }`}
              >
                {t.cta}
              </a>
              <ul className="space-y-3">
                {t.features.map(f => (
                  <li key={f.text} className="flex items-start gap-2.5 text-sm">
                    {f.included ? (
                      <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    ) : (
                      <X size={16} className="text-text-muted/40 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={f.included ? 'text-text-secondary' : 'text-text-muted/50'}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
