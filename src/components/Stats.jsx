const stats = [
  { value: '240K+', label: 'Devices managed globally' },
  { value: '99.97%', label: 'Platform uptime SLA' },
  { value: '50+', label: 'Countries deployed' },
  { value: '20+', label: 'Sensor types supported' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-deep/50 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent to-electric-bright bg-clip-text text-transparent mb-2">
                {s.value}
              </p>
              <p className="text-sm text-text-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
