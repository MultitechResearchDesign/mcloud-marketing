import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-electric/10 to-transparent" />
          <div className="absolute inset-0 bg-surface" />
          <div className="relative border border-border/30 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to manage your fleet?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
              Start with a free Starter account. No credit card required.
              Deploy your first gateway in minutes and see the platform in action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-midnight font-semibold hover:bg-accent-bright transition-all hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
              >
                Create free account
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border text-text-primary font-medium hover:bg-surface-light transition-colors"
              >
                Talk to sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
