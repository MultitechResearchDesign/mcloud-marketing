import {
  Monitor, Bell, GitBranch, Layers, MapPin, Workflow,
  BarChart3, Key, Webhook, BookOpen, Wrench, Smartphone,
  Shield, Network, ScanLine, Users, Receipt, Gauge,
  Database, Bot, TerminalSquare, Settings,
} from 'lucide-react'

const features = [
  { icon: Monitor, title: 'NOC Dashboard', desc: 'Fleet-level network operations with LNS diagnostics and severity triage.', horizon: 'now' },
  { icon: Bell, title: 'Alert Engine', desc: 'Threshold-based alerts with escalation policies, PagerDuty, Slack, and Teams.', horizon: 'now' },
  { icon: GitBranch, title: 'Digital Twins', desc: 'Virtual representations of physical devices for simulation and monitoring.', horizon: 'now' },
  { icon: Layers, title: 'Fleet Manager', desc: 'Bulk firmware updates, scheduled commands, and fleet-wide orchestration.', horizon: 'now' },
  { icon: MapPin, title: 'Find My Devices', desc: 'GPS proximity-based device location for field technicians.', horizon: 'now' },
  { icon: Workflow, title: 'Automations', desc: 'Event-driven automations with configurable triggers and actions.', horizon: 'now' },
  { icon: Shield, title: 'Security Monitoring', desc: 'Threat detection, compliance reporting, and security alerts.', horizon: 'now' },
  { icon: Network, title: 'Network Topology', desc: 'Visual network topology map of gateways and sensors.', horizon: 'now' },
  { icon: Key, title: 'API & API Keys', desc: 'Full REST API with interactive documentation and API key management.', horizon: 'now' },
  { icon: TerminalSquare, title: 'MCP Documentation', desc: 'Model Context Protocol server for AI-powered integrations.', horizon: 'now' },
  { icon: Webhook, title: 'Webhooks', desc: 'Push events to any HTTP endpoint — CRM, ERP, or your own backend.', horizon: 'now' },
  { icon: BookOpen, title: 'Sensor Library', desc: 'Pre-built decoders for 20+ sensor types with automatic payload parsing.', horizon: 'now' },
  { icon: ScanLine, title: 'Zero-Touch Onboarding', desc: 'Scan a box label to auto-provision devices — no manual config needed.', horizon: 'now' },
  { icon: Smartphone, title: 'Mobile Operations', desc: 'Install, replace, reassign, and find devices from any smartphone.', horizon: 'now' },
  { icon: BarChart3, title: 'Audit Logs', desc: 'Comprehensive audit trail and compliance logging across all actions.', horizon: 'now' },
  { icon: Users, title: 'Roles & Permissions', desc: 'Granular RBAC with SSO support and multi-organization management.', horizon: 'now' },
  { icon: Receipt, title: 'Billing & Subscriptions', desc: 'Stripe-powered billing, invoices, and tiered subscription management.', horizon: 'now' },
  { icon: Gauge, title: 'eSIM Orchestration', desc: 'Manage eSIM profiles and carrier switching across your fleet.', horizon: 'now' },
  { icon: Database, title: 'Edge Data Resilience', desc: 'Store-and-forward on gateways with automatic cloud sync.', horizon: 'now' },
  { icon: Bot, title: 'Sensor Analytics', desc: 'AI-powered sensor analytics with alarm correlation and trend analysis.', horizon: 'now' },
  { icon: Settings, title: 'Certificate Lifecycle', desc: 'Automated certificate rotation, expiration tracking, and policy management.', horizon: 'now' },
  { icon: Wrench, title: 'Onboarding Sequences', desc: 'Custom manufacturing onboarding and provisioning sequences.', horizon: 'now' },
  { icon: Layers, title: 'Apps Platform', desc: 'Deploy, manage, and create containerized apps on gateways.', horizon: 'now' },
  { icon: BarChart3, title: 'IoT Data Lake', desc: 'Hot/warm/cold tiered storage for sensor telemetry with data export.', horizon: 'now' },
]

export default function FeatureSection() {
  return (
    <section id="docs" className="py-24 bg-deep/50">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map(f => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group rounded-xl bg-surface border border-border/30 p-5 hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{f.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
