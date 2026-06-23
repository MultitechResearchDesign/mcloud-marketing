import { Check, X } from 'lucide-react'

const APP_URL = 'https://gentle-river-07aea5210.3.azurestaticapps.net'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    desc: 'Get started with basic device management for small deployments.',
    cta: 'Start free',
    ctaLink: APP_URL,
    highlight: false,
    limits: '10 gateways \u00b7 2 users \u00b7 4hr check-in \u00b7 7-day retention',
    features: [
      { text: 'Zero-touch onboarding (first shipment)', included: true },
      { text: 'Device Manager', included: true },
      { text: 'Basic alerts', included: true },
      { text: 'Limited API access', included: true },
      { text: 'Community support', included: true },
      { text: 'NOC Dashboard', included: false },
      { text: 'Fleet Manager', included: false },
      { text: 'Digital Twins', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$10',
    period: '/gateway/year',
    desc: 'For growing deployments that need full visibility and control.',
    cta: 'Start free trial',
    ctaLink: `${APP_URL}/billing`,
    highlight: false,
    limits: 'Unlimited gateways \u00b7 3 users \u00b7 1hr check-in \u00b7 44-day retention',
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Pro services, software & integrations', included: true },
      { text: 'Full API access (rate limited)', included: true },
      { text: 'Zero-touch onboarding (all shipments)', included: true },
      { text: 'NOC Dashboard', included: true },
      { text: 'Fleet Manager & bulk commands', included: true },
      { text: 'Digital Twins', included: true },
      { text: 'Regular support', included: true },
    ],
  },
  {
    name: 'Scale',
    price: '$15',
    period: '/gateway/year',
    desc: 'For teams that need advanced operations and longer data retention.',
    cta: 'Start free trial',
    ctaLink: `${APP_URL}/billing`,
    highlight: true,
    limits: 'Unlimited gateways \u00b7 5 users \u00b7 30min check-in \u00b7 1yr+ retention',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Scale pricing discounts (10%)', included: true },
      { text: 'Scale services, software & integrations', included: true },
      { text: 'Scale operations (install, replace, find)', included: true },
      { text: 'Unlimited API access (no rate limit)', included: true },
      { text: 'Alert Engine ($49/mo add-on)', included: true },
      { text: '1+ year data retention', included: true },
      { text: 'Premium support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: '$20',
    period: '/gateway/year',
    desc: 'For large-scale deployments with advanced security and channel needs.',
    cta: 'Contact sales',
    ctaLink: `${APP_URL}/billing`,
    highlight: false,
    limits: 'Unlimited gateways \u00b7 10 users \u00b7 15min check-in \u00b7 Unlimited retention',
    features: [
      { text: 'Everything in Scale', included: true },
      { text: 'Enterprise pricing discounts (15%)', included: true },
      { text: 'Enterprise services, software & integrations', included: true },
      { text: 'Enterprise operations', included: true },
      { text: 'Security Monitoring', included: true },
      { text: 'SSO & advanced RBAC', included: true },
      { text: 'White-label branding', included: true },
      { text: 'Alert Engine included', included: true },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiers.map(t => (
            <div
              key={t.name}
              className={`rounded-xl p-6 border flex flex-col ${
                t.highlight
                  ? 'bg-surface border-accent/40 shadow-lg shadow-accent/15 relative'
                  : 'bg-surface border-border/30'
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold bg-accent text-midnight">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-bold mb-1">{t.name}</h3>
              <p className="text-xs text-text-muted mb-4 min-h-[2.5rem]">{t.desc}</p>
              <div className="mb-2">
                <span className="text-3xl font-bold">{t.price}</span>
                {t.period && <span className="text-sm text-text-muted">{t.period}</span>}
              </div>
              <p className="text-[11px] text-text-muted mb-5 leading-snug">{t.limits}</p>
              <a
                href={t.ctaLink}
                className={`block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition-colors mb-6 ${
                  t.highlight
                    ? 'bg-accent text-midnight hover:bg-accent-bright'
                    : 'border border-border text-text-primary hover:bg-surface-light'
                }`}
              >
                {t.cta}
              </a>
              <ul className="space-y-2.5 flex-1">
                {t.features.map(f => (
                  <li key={f.text} className="flex items-start gap-2 text-sm">
                    {f.included ? (
                      <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    ) : (
                      <X size={14} className="text-text-muted/40 mt-0.5 flex-shrink-0" />
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
