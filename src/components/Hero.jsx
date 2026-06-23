import { ArrowRight, Play } from 'lucide-react'

const APP_URL = 'https://gentle-river-07aea5210.3.azurestaticapps.net'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-electric/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now with eSIM Orchestration & Alert Engine
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Device management{' '}
            <span className="bg-gradient-to-r from-accent via-accent-bright to-electric-bright bg-clip-text text-transparent">
              infrastructure
            </span>{' '}
            for IoT at scale
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Monitor, manage, and orchestrate your entire fleet of LoRaWAN gateways and sensors
            from a single cloud platform. Built for developer productivity, operational
            reliability, and enterprise security.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-midnight font-semibold text-base hover:bg-accent-bright transition-all hover:shadow-[0_0_30px_rgba(5,113,186,0.4)]"
            >
              Start for free
              <ArrowRight size={18} />
            </a>
            <a
              href={`${APP_URL}/dashboard`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border text-text-primary font-medium text-base hover:bg-surface transition-colors"
            >
              <Play size={16} className="text-accent" />
              Watch demo
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-accent/10 via-electric/5 to-transparent rounded-2xl blur-xl" />
          <div className="relative rounded-2xl border border-border/60 bg-surface overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 bg-deep border-b border-border/40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 text-center text-xs text-text-muted">mcloud.multitech.com</div>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Gateways Online', value: '1,247', change: '+12', color: 'text-green-400' },
                  { label: 'Sensors Active', value: '8,432', change: '+89', color: 'text-green-400' },
                  { label: 'Alerts Today', value: '3', change: '-5', color: 'text-accent' },
                  { label: 'Uptime', value: '99.97%', change: '', color: 'text-accent' },
                ].map(s => (
                  <div key={s.label} className="bg-deep rounded-xl p-4 border border-border/30">
                    <p className="text-xs text-text-muted mb-1">{s.label}</p>
                    <p className="text-2xl font-bold">{s.value}</p>
                    {s.change && <p className={`text-xs ${s.color} mt-1`}>{s.change} today</p>}
                  </div>
                ))}
              </div>
              <div className="bg-deep rounded-xl p-6 border border-border/30">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium">Network Telemetry</p>
                  <div className="flex gap-4 text-xs text-text-muted">
                    <span>24h</span><span className="text-accent">7d</span><span>30d</span>
                  </div>
                </div>
                <div className="h-32 flex items-end gap-1">
                  {Array.from({ length: 48 }, (_, i) => {
                    const h = 20 + Math.sin(i * 0.3) * 30 + Math.random() * 40
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-accent/40 to-accent/80"
                        style={{ height: `${h}%` }}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="bg-deep rounded-xl border border-border/30 overflow-hidden">
                <div className="px-4 py-3 border-b border-border/30 flex items-center justify-between">
                  <p className="text-sm font-medium">Recent Activity</p>
                  <span className="text-xs text-accent">View all</span>
                </div>
                {[
                  { device: 'MTCAP3-L4G2D-0047', event: 'Gateway check-in', time: '2m ago', status: 'online' },
                  { device: 'RBS301-TH-1293', event: 'Temperature: 72.4\u00b0F', time: '3m ago', status: 'online' },
                  { device: 'MTCDT3AC-0012', event: 'Firmware updated to v6.0.2', time: '8m ago', status: 'online' },
                ].map((r, i) => (
                  <div key={i} className="px-4 py-3 flex items-center justify-between border-b border-border/20 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${r.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'}`} />
                      <div>
                        <p className="text-sm font-medium">{r.device}</p>
                        <p className="text-xs text-text-muted">{r.event}</p>
                      </div>
                    </div>
                    <span className="text-xs text-text-muted">{r.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
