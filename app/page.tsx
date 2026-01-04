export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full">
              <span className="text-primary-400 text-sm font-medium">Infrastructure Automation Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Maruti Infrastructure Automation Platform
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              From weeks of delays to minutes with AI-powered agents and automations
            </p>

            {/* Problem Highlight */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h2 className="text-2xl font-bold text-red-400">The Problem</h2>
              </div>
              <p className="text-slate-300 text-lg mb-6">
                Teams discover infrastructure requirements incrementally during development, causing massive delays
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-green-400 mb-1">12 weeks</div>
                  <div className="text-sm text-slate-400">Planned Timeline</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-red-400 mb-1">16 weeks</div>
                  <div className="text-sm text-slate-400">Actual Timeline</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-3xl font-bold text-orange-400 mb-1">+33%</div>
                  <div className="text-sm text-slate-400">Delay Impact</div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-primary-500/10 to-emerald-500/10 border border-primary-500/30 rounded-2xl p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-2xl font-bold text-primary-300">Our Solution</h2>
              </div>
              <p className="text-slate-300 text-lg mb-6">
                AI analyzes your architecture diagram and generates ALL infrastructure requirements in 60 seconds
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-slate-200">Complete Infrastructure BOM</div>
                    <div className="text-sm text-slate-400">All resources identified upfront</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-slate-200">Network & Firewall Rules</div>
                    <div className="text-sm text-slate-400">Connections auto-configured</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-slate-200">Dependency-Aware Execution</div>
                    <div className="text-sm text-slate-400">Correct order guaranteed</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-400 text-xl mt-1">✓</span>
                  <div>
                    <div className="font-semibold text-slate-200">Tag-Based Discovery</div>
                    <div className="text-sm text-slate-400">Smart resource linking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-slate-500 text-sm mb-2">Scroll to explore</div>
          <svg className="w-6 h-6 mx-auto text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Architecture Analysis Flow */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How It Works</h2>
              <p className="text-xl text-slate-400">Upload your architecture diagram and let AI do the rest</p>
            </div>

            {/* Step-by-step flow */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Upload Architecture Diagram</h3>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <p className="text-slate-300 text-lg mb-4">
                      Upload your complete architecture diagram in any format (PNG, PDF, Draw.io, etc.)
                    </p>
                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="text-2xl">📊</span>
                      <span>Architecture diagram showing all components and their connections</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 2: VPC Allocation */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Auto VPC & Subnet Allocation</h3>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <p className="text-slate-300 text-lg mb-4">
                      Based on the environment selected, VPCs and subnets are automatically allocated from predefined network ranges
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="font-semibold text-emerald-400 mb-2">Production</div>
                        <div className="text-slate-300 font-mono text-sm">10.1-49.X.X</div>
                        <div className="text-xs text-slate-500 mt-1">High availability zones</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="font-semibold text-blue-400 mb-2">Staging</div>
                        <div className="text-slate-300 font-mono text-sm">10.50-99.X.X</div>
                        <div className="text-xs text-slate-500 mt-1">Pre-production testing</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="font-semibold text-yellow-400 mb-2">QA</div>
                        <div className="text-slate-300 font-mono text-sm">10.100-149.X.X</div>
                        <div className="text-xs text-slate-500 mt-1">Quality assurance</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="font-semibold text-purple-400 mb-2">Sandbox</div>
                        <div className="text-slate-300 font-mono text-sm">10.150-199.X.X</div>
                        <div className="text-xs text-slate-500 mt-1">Development & experiments</div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                      <p className="text-cyan-300 text-sm">
                        <span className="font-semibold">Smart Allocation:</span> Prevents IP conflicts by automatically selecting the next available VPC ID within the environment range
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 3: T-shirt Sizing */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Environment-Based T-Shirt Sizing</h3>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <p className="text-slate-300 text-lg mb-4">
                      Resource configurations are automatically selected based on the environment and workload requirements
                    </p>
                    <div className="space-y-4">
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-white">Production</span>
                          <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-bold">
                            LARGE
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div>
                            <div className="text-slate-500">EC2</div>
                            <div className="text-slate-300 font-mono">t3.large</div>
                          </div>
                          <div>
                            <div className="text-slate-500">RDS</div>
                            <div className="text-slate-300 font-mono">db.m6g.large</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Cache</div>
                            <div className="text-slate-300 font-mono">cache.m6g.large</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-white">Staging / QA</span>
                          <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold">
                            MEDIUM
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div>
                            <div className="text-slate-500">EC2</div>
                            <div className="text-slate-300 font-mono">t3.medium</div>
                          </div>
                          <div>
                            <div className="text-slate-500">RDS</div>
                            <div className="text-slate-300 font-mono">db.t4g.medium</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Cache</div>
                            <div className="text-slate-300 font-mono">cache.t4g.medium</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-semibold text-white">Sandbox</span>
                          <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-bold">
                            SMALL
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div>
                            <div className="text-slate-500">EC2</div>
                            <div className="text-slate-300 font-mono">t3.small</div>
                          </div>
                          <div>
                            <div className="text-slate-500">RDS</div>
                            <div className="text-slate-300 font-mono">db.t4g.small</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Cache</div>
                            <div className="text-slate-300 font-mono">cache.t4g.small</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                      <p className="text-amber-300 text-sm">
                        <span className="font-semibold">Cost Optimization:</span> Right-sized resources for each environment reduce unnecessary cloud spend
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">AI Analyzes & Identifies Components</h3>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <p className="text-slate-300 text-lg mb-4">
                      Our AI analyzes the entire diagram and identifies all infrastructure components
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-400 text-xl mt-1">✓</span>
                        <div>
                          <div className="font-semibold text-slate-200">Compute Resources</div>
                          <div className="text-sm text-slate-400">EC2, Lambda, ECS containers</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-400 text-xl mt-1">✓</span>
                        <div>
                          <div className="font-semibold text-slate-200">Databases</div>
                          <div className="text-sm text-slate-400">RDS, DynamoDB, ElastiCache</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-400 text-xl mt-1">✓</span>
                        <div>
                          <div className="font-semibold text-slate-200">Storage</div>
                          <div className="text-sm text-slate-400">S3 buckets, EBS volumes</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-400 text-xl mt-1">✓</span>
                        <div>
                          <div className="font-semibold text-slate-200">Networking</div>
                          <div className="text-sm text-slate-400">VPCs, subnets, load balancers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">AI Detects All Connections</h3>
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <p className="text-slate-300 text-lg mb-4">
                      Every arrow in your diagram becomes a firewall rule, API connection, or data flow
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400 text-xl">→</span>
                        <span className="text-slate-300">App Server → Database = Firewall rule (Port 5432)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400 text-xl">→</span>
                        <span className="text-slate-300">Load Balancer → App Server = Target group</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400 text-xl">→</span>
                        <span className="text-slate-300">App → S3 Bucket = IAM policy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 6 */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Complete Infrastructure Plan Generated</h3>
                  <div className="bg-gradient-to-br from-emerald-500/10 to-primary-500/10 border border-emerald-500/30 rounded-xl p-6">
                    <p className="text-slate-300 text-lg mb-4">
                      All Service Requests (SRs) created with proper dependencies and execution order
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                        <div className="text-2xl font-bold text-primary-400 mb-1">60s</div>
                        <div className="text-sm text-slate-400">Analysis Time</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                        <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
                        <div className="text-sm text-slate-400">Complete Coverage</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                        <div className="text-2xl font-bold text-orange-400 mb-1">Auto</div>
                        <div className="text-sm text-slate-400">Execution Order</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transition to example */}
            <div className="mt-16 text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/20 to-purple-500/20 border border-primary-500/30 rounded-full">
                <span className="text-primary-300 font-semibold">Let&apos;s see one of the examples ↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Example */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Real-World Example</h2>
              <p className="text-xl text-slate-400">E-Commerce Application: App Server → Database Connection</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* App Server */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🖥️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">App Server</h3>
                    <p className="text-sm text-slate-400">Component 1</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Diagram Label</span>
                    <span className="text-slate-200 font-medium">Spring Boot API Server</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Template</span>
                    <span className="text-primary-400 font-mono text-sm">maruti-ec2-instance-v1.5.0</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Environment</span>
                    <span className="text-emerald-400">Production</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400">Creates</span>
                    <span className="text-slate-200">EC2 + Security Group</span>
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💾</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Database</h3>
                    <p className="text-sm text-slate-400">Component 2</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Diagram Label</span>
                    <span className="text-slate-200 font-medium">PostgreSQL (Transactions)</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Template</span>
                    <span className="text-primary-400 font-mono text-sm">maruti-rds-postgres-v3.1.0</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="text-slate-400">Environment</span>
                    <span className="text-emerald-400">Production</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400">Creates</span>
                    <span className="text-slate-200">RDS + Security Group</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection */}
            <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Connection Detected</h3>
                  <p className="text-sm text-slate-400">Arrow in diagram: App Server → PostgreSQL</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Template</span>
                  <span className="text-primary-400 font-mono text-sm">maruti-firewall-app-to-db-v1.0.0</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Creates</span>
                  <span className="text-slate-200">Security Group Rule (Port 5432)</span>
                </div>
              </div>
            </div>

            {/* The Challenge */}
            <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎯</span>
                <h3 className="text-xl font-bold text-orange-400">The Challenge</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">
                <strong className="text-white">SR-003 (Firewall)</strong> needs to connect App → Database security groups.<br/>
                But when SR-003 runs, it doesn&apos;t know the Security Group IDs created by SR-001 and SR-002!
              </p>
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-primary-300 font-semibold">
                  Solution: Tag-based resource discovery using LLM-generated ResourceNames
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Logic Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Core Logic: How It Works</h2>
              <p className="text-xl text-slate-400">Understanding the tag-based resource discovery mechanism</p>
            </div>

            {/* Step 1: LLM Tag Generation */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white">LLM Generates Unique Tags</h3>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-6">
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  When the AI analyzes your architecture diagram, it generates a <span className="text-primary-400 font-semibold">unique ResourceName</span> for each component. This tag acts as a <span className="text-emerald-400 font-semibold">semantic identifier</span> that other resources can reference.
                </p>

                <div className="bg-slate-900 rounded-xl p-6 border border-slate-600">
                  <div className="text-xs text-slate-500 mb-2 font-mono">LLM Analysis for &quot;Spring Boot API Server&quot;</div>
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-slate-300">
{`{
  "template_id": "maruti-ec2-instance-v1.5.0",
  "confidence": 0.95,

  // AI-generated tags
  "resource_tags": {
    "Component": "app",
    "ResourceType": "ec2",
    "ResourceName": "ecommerce-app-server"  `}<span className="text-emerald-400">← Generated by LLM</span>{`
  },

  "config": {
    "instance_type": "t4g.large",
    "storage_gb": 100
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
                  <div className="text-primary-400 font-semibold mb-2">Why Unique?</div>
                  <p className="text-slate-400 text-sm">
                    LLM considers project context, component type, and purpose to generate collision-free names
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
                  <div className="text-emerald-400 font-semibold mb-2">Why Semantic?</div>
                  <p className="text-slate-400 text-sm">
                    Names are human-readable and describe the resource&apos;s role (e.g., &quot;app-server&quot;, &quot;txn-db&quot;)
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6">
                  <div className="text-purple-400 font-semibold mb-2">Why Stored?</div>
                  <p className="text-slate-400 text-sm">
                    Tags are saved in the SR database record for later reference by dependent resources
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Tags Applied to AWS Resources */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white">Tags Applied to AWS Resources</h3>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-6">
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  During Terraform execution, the <span className="text-primary-400 font-semibold">resource_tags</span> from the SR database are merged with environment tags and applied to all created AWS resources.
                </p>

                <div className="bg-slate-900 rounded-xl p-6 border border-slate-600">
                  <div className="text-xs text-slate-500 mb-2 font-mono">terraform.tfvars (Auto-generated)</div>
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-slate-300">
{`# Merged from multiple sources
tags = {
  Project      = "ecommerce"           `}<span className="text-slate-500">← Environment metadata</span>{`
  Environment  = "production"          `}<span className="text-slate-500">← Environment metadata</span>{`
  VpcId        = "100"                 `}<span className="text-slate-500">← Auto-assigned</span>{`
  Component    = "app"                 `}<span className="text-emerald-400">← From LLM (SR-001)</span>{`
  ResourceType = "ec2"                 `}<span className="text-emerald-400">← From LLM (SR-001)</span>{`
  ResourceName = "ecommerce-app-server" `}<span className="text-emerald-400">← From LLM (SR-001)</span>{`
  ManagedBy    = "SR-001"              `}<span className="text-slate-500">← System-generated</span>{`
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-6 border border-slate-600">
                <div className="text-xs text-slate-500 mb-2 font-mono">Terraform Template (Simplified)</div>
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-slate-300">
{`resource "aws_security_group" "app" {
  name   = "\${var.project_name}-\${var.environment}-app-sg"
  vpc_id = data.aws_vpc.project_vpc.id

  tags = var.tags  `}<span className="text-emerald-400">← All tags applied, including ResourceName!</span>{`
}

# Result: Security group sg-0app123456 created with tag:
# ResourceName = "ecommerce-app-server"`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Step 3: Tag-Based Discovery */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white">Dependent Resources Use Tags to Discover</h3>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-6">
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  When SR-003 (firewall rule) needs to connect the app server to the database, it uses Terraform <span className="text-primary-400 font-semibold">data sources</span> to search AWS by the <span className="text-emerald-400 font-semibold">ResourceName</span> tags stored in SR-001 and SR-002.
                </p>

                <div className="bg-slate-900 rounded-xl p-6 border border-slate-600 mb-4">
                  <div className="text-xs text-slate-500 mb-2 font-mono">terraform.tfvars for SR-003</div>
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-slate-300">
{`source_resource_name = "ecommerce-app-server"  `}<span className="text-emerald-400">← From SR-001 tags</span>{`
dest_resource_name   = "ecommerce-txn-db"      `}<span className="text-emerald-400">← From SR-002 tags</span>{`
protocol             = "tcp"
port                 = 5432`}
                    </code>
                  </pre>
                </div>

                <div className="bg-slate-900 rounded-xl p-6 border border-slate-600">
                  <div className="text-xs text-slate-500 mb-2 font-mono">Terraform Data Source (Tag-based lookup)</div>
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code className="text-slate-300">
{`# Find App Server security group by searching AWS tags
data "aws_security_group" "app" {
  filter {
    name   = "tag:ResourceName"
    values = [var.source_resource_name]  `}<span className="text-emerald-400">← Search: "ecommerce-app-server"</span>{`
  }
  filter {
    name   = "tag:Project"
    values = [var.project_name]
  }
}
# AWS returns: sg-0app123456

# Find Database security group
data "aws_security_group" "db" {
  filter {
    name   = "tag:ResourceName"
    values = [var.dest_resource_name]  `}<span className="text-emerald-400">← Search: "ecommerce-txn-db"</span>{`
  }
  filter {
    name   = "tag:Project"
    values = [var.project_name]
  }
}
# AWS returns: sg-0db987654

# Create firewall rule connecting them
resource "aws_security_group_rule" "app_to_db" {
  type                     = "ingress"
  from_port                = var.port
  to_port                  = var.port
  protocol                 = var.protocol
  source_security_group_id = data.aws_security_group.app.id
  security_group_id        = data.aws_security_group.db.id
}`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-primary-500/10 border border-emerald-500/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-2 text-lg">The Magic of Tag-Based Discovery</h4>
                    <p className="text-slate-300">
                      SR-003 never hardcoded Security Group IDs. It dynamically discovered them using semantic tags. This makes the system <span className="text-primary-400 font-semibold">resilient</span>, <span className="text-emerald-400 font-semibold">maintainable</span>, and <span className="text-purple-400 font-semibold">cloud-agnostic</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Insight: Different Tag Purposes */}
              <div className="mt-6 bg-gradient-to-br from-orange-900/20 to-yellow-900/10 border border-orange-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="text-2xl font-bold text-orange-400">Key Insight: Tags Have Different Purposes</h4>
                </div>

                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  All SRs store tags in the <code className="text-primary-300 bg-slate-800 px-2 py-1 rounded">resource_tags</code> field, but they use them differently:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* App/DB Tags */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🏷️</span>
                      <h5 className="text-lg font-bold text-blue-400">App/DB SRs (SR-001, SR-002)</h5>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-slate-400 mb-2">Purpose of tags:</div>
                      <div className="text-white font-semibold text-lg">
                        &quot;What to call me&quot;
                      </div>
                      <div className="text-emerald-400 text-sm mt-1">
                        Tags the resources they CREATE
                      </div>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                      <div className="text-slate-500 mb-2">// SR-001 creates App Server</div>
                      <div className="text-slate-300">resource_tags: &#123;</div>
                      <div className="text-slate-300 ml-4">
                        ResourceName: <span className="text-primary-400">&quot;ecommerce-app-server&quot;</span>
                      </div>
                      <div className="text-slate-300">&#125;</div>
                      <div className="text-emerald-400 mt-3 text-xs">
                        ✓ Creates sg-0app123456<br/>
                        ✓ APPLIES tag: ResourceName = &quot;ecommerce-app-server&quot;
                      </div>
                    </div>
                  </div>

                  {/* Firewall Tags */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🔗</span>
                      <h5 className="text-lg font-bold text-orange-400">Firewall SR (SR-003)</h5>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-slate-400 mb-2">Purpose of tags:</div>
                      <div className="text-white font-semibold text-lg">
                        &quot;Who to connect&quot;
                      </div>
                      <div className="text-orange-400 text-sm mt-1">
                        REFERENCES resources created by OTHER SRs
                      </div>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                      <div className="text-slate-500 mb-2">// SR-003 creates Firewall Rule</div>
                      <div className="text-slate-300">resource_tags: &#123;</div>
                      <div className="text-slate-300 ml-4">
                        SourceResourceName: <span className="text-blue-400">&quot;ecommerce-app-server&quot;</span>
                      </div>
                      <div className="text-slate-300 ml-4">
                        DestResourceName: <span className="text-purple-400">&quot;ecommerce-txn-db&quot;</span>
                      </div>
                      <div className="text-slate-300">&#125;</div>
                      <div className="text-orange-400 mt-3 text-xs">
                        ✓ SEARCHES for tag: ResourceName = &quot;ecommerce-app-server&quot;<br/>
                        ✓ SEARCHES for tag: ResourceName = &quot;ecommerce-txn-db&quot;<br/>
                        ✓ Creates rule connecting them
                      </div>
                    </div>
                  </div>
                </div>

                {/* The Flow */}
                <div className="bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/30 rounded-xl p-6">
                  <div className="font-semibold text-white mb-4 text-lg">The Complete Flow:</div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-primary-400 font-semibold mb-2">1. Storage (in database)</div>
                      <div className="space-y-1 text-slate-300">
                        <div>• SR-001: stores <code className="bg-slate-800 px-1 rounded text-xs">ResourceName</code></div>
                        <div>• SR-002: stores <code className="bg-slate-800 px-1 rounded text-xs">ResourceName</code></div>
                        <div>• SR-003: stores <code className="bg-slate-800 px-1 rounded text-xs">SourceResourceName</code> + <code className="bg-slate-800 px-1 rounded text-xs">DestResourceName</code></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-emerald-400 font-semibold mb-2">2. Execution (App/DB)</div>
                      <div className="space-y-1 text-slate-300">
                        <div>• SR-001: Uses <code className="bg-slate-800 px-1 rounded text-xs">ResourceName</code> to TAG sg-0app123456</div>
                        <div>• SR-002: Uses <code className="bg-slate-800 px-1 rounded text-xs">ResourceName</code> to TAG sg-0db987654</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-orange-400 font-semibold mb-2">3. Execution (Firewall)</div>
                      <div className="space-y-1 text-slate-300">
                        <div>• SR-003: Uses <code className="bg-slate-800 px-1 rounded text-xs">SourceResourceName</code> to SEARCH</div>
                        <div>• SR-003: Uses <code className="bg-slate-800 px-1 rounded text-xs">DestResourceName</code> to SEARCH</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-slate-900/50 border border-orange-500/20 rounded-lg">
                  <p className="text-orange-300 font-semibold text-center">
                    Both are stored in <code className="bg-slate-800 px-2 py-1 rounded text-primary-300">resource_tags</code> field, but serve different purposes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request Flow */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Service Request Execution</h2>
              <p className="text-xl text-slate-400">Step-by-step walkthrough of the complete flow</p>
            </div>

            {/* SR-001 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                  <span className="text-blue-400 font-bold">SR-001</span>
                </div>
                <h3 className="text-2xl font-bold text-white">App Server Deployment</h3>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Template</div>
                    <div className="font-mono text-primary-400">maruti-ec2-instance-v1.5.0</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Component</div>
                    <div className="text-slate-200">Spring Boot API Server</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-slate-500">LLM-GENERATED TAGS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-md text-primary-300 font-mono text-sm">
                      ResourceName: ecommerce-app-server
                    </span>
                    <span className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-md text-slate-300 font-mono text-sm">
                      Component: app
                    </span>
                    <span className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-md text-slate-300 font-mono text-sm">
                      ResourceType: ec2
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-emerald-300">Created in AWS</div>
                    <div className="text-sm text-slate-400">Security Group: sg-0app123456 (tagged with ResourceName)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SR-002 */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                  <span className="text-purple-400 font-bold">SR-002</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Database Deployment</h3>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Template</div>
                    <div className="font-mono text-primary-400">maruti-rds-postgres-v3.1.0</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Component</div>
                    <div className="text-slate-200">PostgreSQL (Transactions)</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-slate-500">LLM-GENERATED TAGS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-md text-primary-300 font-mono text-sm">
                      ResourceName: ecommerce-txn-db
                    </span>
                    <span className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-md text-slate-300 font-mono text-sm">
                      Component: database
                    </span>
                    <span className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-md text-slate-300 font-mono text-sm">
                      Engine: postgres
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-emerald-300">Created in AWS</div>
                    <div className="text-sm text-slate-400">Security Group: sg-0db987654 (tagged with ResourceName)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SR-003 */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-lg">
                  <span className="text-orange-400 font-bold">SR-003</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Firewall Rule Configuration</h3>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Template</div>
                    <div className="font-mono text-primary-400">maruti-firewall-app-to-db-v1.0.0</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Connection</div>
                    <div className="text-slate-200">App Server → Database (TCP/5432)</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-600 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-slate-500">REFERENCES TO OTHER SRs</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500">Source:</span>
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-md text-blue-300 font-mono text-sm">
                        ecommerce-app-server
                      </span>
                      <span className="text-xs text-slate-500">(from SR-001)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500">Destination:</span>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-md text-purple-300 font-mono text-sm">
                        ecommerce-txn-db
                      </span>
                      <span className="text-xs text-slate-500">(from SR-002)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-500/10 border border-primary-500/30 rounded-xl p-4 mb-4">
                  <div className="text-sm text-primary-300 mb-2 font-semibold">Tag-Based Discovery Process:</div>
                  <ol className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-0.5">1.</span>
                      <span>Query AWS for security group with tag <code className="text-primary-300 bg-slate-800 px-1 rounded">ResourceName=ecommerce-app-server</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-0.5">2.</span>
                      <span>Query AWS for security group with tag <code className="text-primary-300 bg-slate-800 px-1 rounded">ResourceName=ecommerce-txn-db</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-0.5">3.</span>
                      <span>Create security group rule allowing traffic from sg-0app123456 to sg-0db987654</span>
                    </li>
                  </ol>
                </div>

                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-emerald-300">Connection Established</div>
                    <div className="text-sm text-slate-400">App server can now connect to database on port 5432</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Order Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                <span className="text-red-400 text-sm font-medium">CRITICAL CONCEPT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Execution Order Matters</h2>
              <p className="text-xl text-slate-400">The foundation of reliable infrastructure automation</p>
            </div>

            {/* The Problem */}
            <div className="mb-12 bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-red-400">What Happens With Wrong Order?</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-400 font-bold">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-2">SR-003 runs BEFORE SR-001 and SR-002</div>
                      <div className="text-slate-400 text-sm leading-relaxed">
                        Terraform tries to find security groups with tags <code className="text-red-300 bg-slate-800 px-1 rounded">ResourceName=ecommerce-app-server</code> and <code className="text-red-300 bg-slate-800 px-1 rounded">ResourceName=ecommerce-txn-db</code>, but they don&apos;t exist yet!
                      </div>
                      <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <div className="font-mono text-sm text-red-300">Error: No security groups found matching the specified tags</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-400 font-bold">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-2">Database deploys before VPC exists</div>
                      <div className="text-slate-400 text-sm leading-relaxed">
                        RDS instance tries to attach to a VPC that hasn&apos;t been created yet, causing deployment failure.
                      </div>
                      <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <div className="font-mono text-sm text-red-300">Error: VPC vpc-123 not found</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-400 font-bold">✗</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-2">Application starts before database is ready</div>
                      <div className="text-slate-400 text-sm leading-relaxed">
                        Even if resources exist, improper sequencing can cause runtime failures when applications can&apos;t find their dependencies.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">Our AI-Powered Execution Order</h3>
              </div>

              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                The AI analyzes the entire architecture and automatically determines the correct execution order based on:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <div className="font-semibold text-white mb-2">Dependency Analysis</div>
                      <div className="text-slate-400 text-sm">
                        Detects which resources depend on others (e.g., EC2 needs VPC, Firewall needs Security Groups)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏗️</span>
                    <div>
                      <div className="font-semibold text-white mb-2">Layer Detection</div>
                      <div className="text-slate-400 text-sm">
                        Groups resources into layers (Foundation → Compute → Network → Application)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔗</span>
                    <div>
                      <div className="font-semibold text-white mb-2">Tag References</div>
                      <div className="text-slate-400 text-sm">
                        Identifies when SRs reference ResourceNames from other SRs (e.g., SR-003 needs SR-001 tags)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="font-semibold text-white mb-2">Parallel Execution</div>
                      <div className="text-slate-400 text-sm">
                        Resources at the same level with no dependencies run in parallel for speed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Execution Order */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Correct Execution Order for Our Example</h4>

              <div className="space-y-4">
                {/* Layer 1 */}
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right">
                      <span className="text-primary-400 font-semibold">Layer 1</span>
                      <div className="text-xs text-slate-500">Foundation</div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 rounded-xl p-4">
                      <div className="font-mono text-sm text-slate-300">VPC, Subnets, Route Tables</div>
                      <div className="text-xs text-slate-500 mt-1">Base network infrastructure</div>
                    </div>
                  </div>
                  <div className="ml-24 mt-2 pl-4 text-center">
                    <svg className="w-6 h-6 mx-auto text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Layer 2 */}
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right">
                      <span className="text-emerald-400 font-semibold">Layer 2</span>
                      <div className="text-xs text-slate-500">Compute</div>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-blue-500/20 rounded text-blue-400 text-xs font-bold">SR-001</span>
                            <span className="font-mono text-sm text-slate-300">App Server</span>
                          </div>
                          <div className="text-xs text-slate-500">Creates: EC2 + SG with tags</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs font-bold">SR-002</span>
                            <span className="font-mono text-sm text-slate-300">Database</span>
                          </div>
                          <div className="text-xs text-slate-500">Creates: RDS + SG with tags</div>
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 mt-2 text-center">⚡ Run in parallel (no dependency)</div>
                    </div>
                  </div>
                  <div className="ml-24 mt-2 pl-4 text-center">
                    <svg className="w-6 h-6 mx-auto text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>

                {/* Layer 3 */}
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-24 text-right">
                      <span className="text-orange-400 font-semibold">Layer 3</span>
                      <div className="text-xs text-slate-500">Network</div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-orange-500/20 rounded text-orange-400 text-xs font-bold">SR-003</span>
                        <span className="font-mono text-sm text-slate-300">Firewall Rule</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-2">
                        ⚠️ MUST run after SR-001 and SR-002 (needs their tags to discover resources)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary-500/10 to-emerald-500/10 border border-primary-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <div className="font-semibold text-white mb-2">Key Insight</div>
                    <div className="text-slate-300 leading-relaxed">
                      The execution order is not arbitrary—it&apos;s determined by <span className="text-primary-400 font-semibold">dependency relationships</span>.
                      Resources that create tags must execute before resources that search for those tags. This ensures
                      <span className="text-emerald-400 font-semibold"> 100% success rate</span> in production deployments.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <div className="font-bold text-white mb-2">Zero Failures</div>
                <div className="text-slate-400 text-sm">
                  Correct dependency order eliminates resource not found errors
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <div className="font-bold text-white mb-2">Optimal Speed</div>
                <div className="text-slate-400 text-sm">
                  Parallel execution of independent resources maximizes throughput
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl mb-3">🔄</div>
                <div className="font-bold text-white mb-2">Repeatable</div>
                <div className="text-slate-400 text-sm">
                  Same order every time ensures consistent, predictable deployments
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
