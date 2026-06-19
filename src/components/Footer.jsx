const columns = [
  {
    title: 'Platform',
    links: ['Fleet Manager', 'NOC Dashboard', 'Alert Engine', 'Digital Twins', 'Automations', 'API'],
  },
  {
    title: 'Hardware',
    links: ['Conduit AP 300', 'Conduit 300', 'Conduit IP67', 'Palantiri Gateway', 'Sensors', 'Accessories'],
  },
  {
    title: 'Solutions',
    links: ['Smart Buildings', 'Agriculture', 'Asset Tracking', 'Pest Control', 'Building Automation'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'API Reference', 'MCP Docs', 'Training', 'Support', 'Status'],
  },
  {
    title: 'Company',
    links: ['About MultiTech', 'Careers', 'Blog', 'Contact', 'Partners'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border/30 bg-deep/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-electric flex items-center justify-center">
              <span className="text-midnight font-bold text-xs">m</span>
            </div>
            <span className="text-sm font-semibold">mCloud by MultiTech</span>
          </div>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} MultiTech Systems, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
