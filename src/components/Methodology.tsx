import { motion } from 'framer-motion';
import { Search, Lightbulb, Users } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery & Audit',
      description:
        'Deep dive into data hygiene and workflows. We map your current processes and identify inefficiencies that AI can address.',
      image: 'left',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategy & Prototyping',
      description:
        'Selecting the right LLMs and automation tools. We build tailored prototypes that prove value before full deployment.',
      image: 'right',
    },
    {
      number: '03',
      icon: Users,
      title: 'Education & Handoff',
      description:
        'Training your internal stakeholders for autonomy. We ensure your team can maintain and evolve the AI systems independently.',
      image: 'left',
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
            The Methodology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven three-phase approach to sustainable AI transformation
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: step.image === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                step.image === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center space-x-4 mb-6">
                  <span className="text-6xl font-display font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-8 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl"></div>
                      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                      <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-cyan-400 rounded-full animate-pulse delay-700"></div>

                      <svg className="w-full h-full opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="currentColor" className="text-cyan-500" strokeWidth="2" fill="none">
                          {index === 0 && (
                            <>
                              <circle cx="100" cy="100" r="60" strokeDasharray="5,5" />
                              <circle cx="100" cy="100" r="40" strokeDasharray="5,5" />
                              <circle cx="100" cy="100" r="20" strokeDasharray="5,5" />
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <path d="M50 100 L100 50 L150 100 L100 150 Z" strokeDasharray="5,5" />
                              <circle cx="100" cy="100" r="30" strokeDasharray="5,5" />
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <circle cx="100" cy="80" r="15" />
                              <circle cx="70" cy="130" r="15" />
                              <circle cx="130" cy="130" r="15" />
                              <line x1="100" y1="95" x2="70" y2="115" strokeDasharray="5,5" />
                              <line x1="100" y1="95" x2="130" y2="115" strokeDasharray="5,5" />
                            </>
                          )}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
