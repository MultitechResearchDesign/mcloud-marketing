const APP_URL = 'https://gentle-river-07aea5210.3.azurestaticapps.net'

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Fleet Manager', href: `${APP_URL}/fleet-manager` },
      { label: 'NOC Dashboard', href: `${APP_URL}/noc` },
      { label: 'Alert Engine', href: `${APP_URL}/alert-engine` },
      { label: 'Digital Twins', href: `${APP_URL}/digital-twins` },
      { label: 'Automations', href: `${APP_URL}/automations` },
      { label: 'API', href: `${APP_URL}/api` },
    ],
  },
  {
    title: 'Hardware',
    links: [
      { label: 'Conduit AP 300', href: `${APP_URL}/store` },
      { label: 'Conduit 300', href: `${APP_URL}/store` },
      { label: 'Conduit IP67', href: `${APP_URL}/store` },
      { label: 'Palantiri Gateway', href: `${APP_URL}/store` },
      { label: 'Sensors', href: `${APP_URL}/store` },
      { label: 'Accessories', href: `${APP_URL}/store` },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Smart Buildings', href: `${APP_URL}/store/solutions/solution-connected-building` },
      { label: 'Agriculture', href: `${APP_URL}/store/solutions/solution-smart-agriculture` },
      { label: 'Asset Tracking', href: `${APP_URL}/store/solutions/solution-asset-tracking` },
      { label: 'Building Automation', href: `${APP_URL}/store/solutions/building-automation` },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'API Documentation', href: `${APP_URL}/api` },
      { label: 'MCP Docs', href: `${APP_URL}/mcp` },
      { label: 'Training', href: `${APP_URL}/training` },
      { label: 'Support', href: `${APP_URL}/support` },
      { label: 'Status', href: `${APP_URL}/status` },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About MultiTech', href: 'https://www.multitech.com/about' },
      { label: 'Careers', href: 'https://www.multitech.com/careers' },
      { label: 'Blog', href: 'https://www.multitech.com/blog' },
      { label: 'Contact', href: 'https://www.multitech.com/contact' },
      { label: 'Partners', href: `${APP_URL}/store` },
    ],
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
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-text-muted hover:text-text-secondary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/MultiTech_Logo_Reverse.svg" alt="MultiTech" className="h-6" />
          </a>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} MultiTech Systems, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
