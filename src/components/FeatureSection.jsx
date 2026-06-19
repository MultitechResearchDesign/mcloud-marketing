import {
  Monitor, Bell, GitBranch, Layers, MapPin, Workflow,
  BarChart3, Key, Webhook, BookOpen, Wrench, Smartphone,
} from 'lucide-react'

const features = [
  { icon: Monitor, title: 'NOC Dashboard', desc: 'Fleet-level network operations with LNS diagnostics and severity triage.' },
  { icon: Bell, title: 'Alert Engine', desc: 'Threshold-based alerts with escalation policies, PagerDuty, Slack, and Teams.' },
  { icon: GitBranch, title: 'Digital Twins', desc: 'Virtual representations of physical devices for simulation and monitoring.' },
  { icon: Layers, title: 'Fleet Manager', desc: 'Bulk firmware updates, scheduled commands, and fleet-wide orchestration.' },
  { icon: MapPin, title: 'Find My Devices', desc: 'GPS proximity-based device location for field technicians.' },
  { icon: Workflow, title: 'Automations', desc: 'Event-driven automations with configurable triggers and actions.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Real-time sensor charts, historical data, and exportable reports.' },
  { icon: Key, title: 'API & MCP', desc: 'Full REST API plus Model Context Protocol for AI-powered integrations.' },
  { icon: Webhook, title: 'Webhooks', desc: 'Push events to any HTTP endpoint — CRM, ERP, or your own backend.' },
  { icon: BookOpen, title: 'Sensor Library', desc: 'Pre-built decoders for 20+ sensor types with automatic payload parsing.' },
  { icon: Wrench, title: 'Zero-Touch Onboarding', desc: 'Scan a box label to auto-provision devices — no manual config needed.' },
  { icon: Smartphone, title: 'Mobile Operations', desc: 'Install, replace, and reassign devices from any smartphone browser.' },
]

export default function FeatureSection() {
  return (
    <section className="py-24 bg-deep/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-4">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Everything you need to manage IoT at scale
          </h2>
          <p className="text-lg text-text-secondary">
            From device onboarding to alert management — a complete toolkit for operators, developers, and channel partners.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group rounded-xl bg-surface border border-border/30 p-6 hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
