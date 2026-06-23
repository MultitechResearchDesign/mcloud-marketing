import { ArrowRight, CheckCircle2, Clock, Shield, Zap, Users, Database, RefreshCw } from 'lucide-react'

const APP_URL = 'https://gentle-river-07aea5210.3.azurestaticapps.net'

const benefits = [
  {
    icon: Zap,
    title: 'Zero downtime migration',
    desc: 'Your gateways, sensors, users, and historical data are migrated before you even log in. Just reset your password and everything is ready.',
  },
  {
    icon: Database,
    title: 'Full data transfer',
    desc: 'All device configurations, telemetry history, firmware versions, and network settings carry over automatically.',
  },
  {
    icon: Users,
    title: 'Users & roles preserved',
    desc: 'Your team members, roles, and permissions are migrated intact. No re-inviting or re-configuring access.',
  },
  {
    icon: Shield,
    title: 'Enhanced security',
    desc: 'Move from basic auth to enterprise SSO with Microsoft Entra ID, certificate lifecycle management, and security monitoring.',
  },
  {
    icon: RefreshCw,
    title: 'Modern fleet management',
    desc: 'Gain access to Fleet Manager, NOC Dashboard, Digital Twins, Alert Engine, and 20+ features DeviceHQ never had.',
  },
  {
    icon: Clock,
    title: 'Free for 6 months',
    desc: 'Migrate your entire fleet at no cost. Full platform access for 6 months — no credit card required to start.',
  },
]

const steps = [
  { num: '1', title: 'We migrate your fleet', desc: 'Your devices, users, and data are pre-loaded into mCloud.' },
  { num: '2', title: 'Reset your password', desc: 'Use your existing DeviceHQ email to set a new password via Microsoft Entra.' },
  { num: '3', title: 'Log in and go', desc: 'Your dashboard is waiting with all your gateways and sensors, ready to manage.' },
]

export default function Migration() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Promo banner */}
        <div className="rounded-xl bg-gradient-to-r from-accent/20 via-accent/10 to-electric/10 border border-accent/30 p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-accent text-white uppercase tracking-wide">Limited offer</span>
            </div>
            <p className="text-lg md:text-xl font-bold mb-1">
              Migrate your gateways from DeviceHQ FREE for 6 months.
            </p>
            <p className="text-sm text-text-muted">
              Terms and conditions apply. Offer valid for existing DeviceHQ customers only.
            </p>
          </div>
          <a
            href={`${APP_URL}/reset-password`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-bright transition-all hover:shadow-[0_0_30px_rgba(5,113,186,0.4)] whitespace-nowrap"
          >
            Migrate from DeviceHQ
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">DeviceHQ Migration</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Upgrade from DeviceHQ to mCloud
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            DeviceHQ got your fleet started. mCloud takes it further — with modern fleet management,
            enterprise security, and a platform built for scale. We handle the migration for you.
          </p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {steps.map(s => (
            <div key={s.num} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-accent">{s.num}</span>
              </div>
              <h3 className="text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(b => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="rounded-xl bg-surface border border-border/30 p-6 hover:border-accent/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Comparison highlights */}
        <div className="mt-16 rounded-xl bg-surface border border-border/30 overflow-hidden">
          <div className="grid grid-cols-3 border-b border-border/30">
            <div className="p-4 md:p-6" />
            <div className="p-4 md:p-6 text-center border-x border-border/30">
              <p className="text-sm text-text-muted font-medium">DeviceHQ</p>
            </div>
            <div className="p-4 md:p-6 text-center bg-accent/5">
              <p className="text-sm font-semibold text-accent">mCloud</p>
            </div>
          </div>
          {[
            { feature: 'Fleet management', dhq: false, mcloud: true },
            { feature: 'NOC Dashboard', dhq: false, mcloud: true },
            { feature: 'Digital Twins', dhq: false, mcloud: true },
            { feature: 'Alert Engine', dhq: false, mcloud: true },
            { feature: 'eSIM Orchestration', dhq: false, mcloud: true },
            { feature: 'REST API & MCP', dhq: false, mcloud: true },
            { feature: 'SSO & RBAC', dhq: false, mcloud: true },
            { feature: 'Security Monitoring', dhq: false, mcloud: true },
            { feature: 'OTA firmware updates', dhq: true, mcloud: true },
            { feature: 'Device monitoring', dhq: true, mcloud: true },
          ].map((r, i) => (
            <div key={r.feature} className={`grid grid-cols-3 ${i % 2 === 0 ? '' : 'bg-deep/30'} border-b border-border/20 last:border-0`}>
              <div className="p-3 md:p-4 text-sm text-text-secondary">{r.feature}</div>
              <div className="p-3 md:p-4 text-center border-x border-border/20">
                {r.dhq ? (
                  <CheckCircle2 size={16} className="text-text-muted/50 mx-auto" />
                ) : (
                  <span className="text-text-muted/30 text-sm">\u2014</span>
                )}
              </div>
              <div className="p-3 md:p-4 text-center bg-accent/5">
                <CheckCircle2 size={16} className="text-accent mx-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href={`${APP_URL}/reset-password`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-white font-semibold hover:bg-accent-bright transition-all hover:shadow-[0_0_30px_rgba(5,113,186,0.4)]"
          >
            Start your free migration
            <ArrowRight size={18} />
          </a>
          <p className="text-sm text-text-muted mt-3">
            Use your existing DeviceHQ email to get started
          </p>
        </div>
      </div>
    </section>
  )
}
