import React from 'react';

const AgentPayLanding = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-[#020617] rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">AgentPay</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition">Protocol</a>
          <a href="#" className="hover:text-white transition">About</a>
          <button className="p-2 hover:bg-slate-800 rounded-full transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          </button>
          <button className="bg-emerald-500 text-slate-950 px-5 py-2.5 rounded-md font-semibold hover:bg-emerald-400 transition">
            Book Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center pt-20 pb-16 px-6">
        <p className="text-emerald-500 font-mono text-sm tracking-widest mb-6 uppercase">AI Agent Payment Protocol</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Payment Protocol for AI Agents.
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          Trust scoring, transaction settlement, and authority delegation primitives for autonomous agents.
          Ships as an MCP server. Compatible with Claude, OpenAI Agents SDK, and any framework.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto bg-emerald-500 text-slate-950 px-8 py-4 rounded-md font-bold text-lg hover:bg-emerald-400 transition">
            Book a Demo
          </button>
          <button className="w-full sm:w-auto border border-slate-700 bg-slate-900/50 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-800 transition">
            Read the Protocol →
          </button>
        </div>

        {/* Terminal UI */}
        <div className="relative group max-w-3xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#0b1120] rounded-xl border border-slate-800 overflow-hidden text-left shadow-2xl">
            <div className="flex gap-2 px-4 py-3 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
              <span className="ml-2 text-xs text-slate-500 font-mono uppercase tracking-tighter">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto">
              <div className="flex gap-4">
                <span className="text-emerald-500">curl</span>
                <span className="text-slate-300">-X POST https://api.agentpay.network/v1/settle \</span>
              </div>
              <div className="pl-4 text-slate-400">
                -H "Authorization: Bearer agent_sk_..." \<br />
                -H "Content-Type: application/json" \<br />
                -d '{'{'}<br />
                <span className="pl-4 text-emerald-400">"from_agent"</span>: "agt_claude_35",<br />
                <span className="pl-4 text-emerald-400">"to_agent"</span>: "agt_stripe_proc",<br />
                <span className="pl-4 text-emerald-400">"amount"</span>: 1500,<br />
                <span className="pl-4 text-emerald-400">"currency"</span>: "USD"<br />
                {'}'}'
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Primitives Section */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Three primitives. One protocol.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "verify_agent_authority",
              desc: "Validate that an agent has permission to act on behalf of a principal.",
              code: "await agentpay.verify_agent_authority({ agent_id, scope })"
            },
            {
              title: "settle_transaction",
              desc: "Atomic settlement of value transfer between agents.",
              code: "await agentpay.settle_transaction({ from, to, amount })"
            },
            {
              title: "flag_anomaly",
              desc: "Real-time behavioral anomaly detection and dispute initiation.",
              code: "await agentpay.flag_anomaly({ agent_id, event_type })"
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-slate-800 bg-slate-900/20 hover:border-emerald-500/50 transition duration-500">
              <h3 className="text-xl font-bold mb-4 font-mono text-emerald-400">{item.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
              <div className="bg-black/40 p-4 rounded-lg font-mono text-xs text-slate-500">
                {item.code}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 mt-20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold tracking-tight">AgentPay</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8">
              Trust scoring, transaction settlement, and authority delegation primitives for autonomous agents.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 cursor-pointer transition">𝕏</div>
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 cursor-pointer transition">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">Protocol Docs</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Book Demo</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">MCP Server</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition">About</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-900 flex justify-between items-center text-xs text-slate-600">
          <p>© 2026 AgentPay Made in Seoul · For the agent economy</p>
        </div>
      </footer>
    </div>
  );
};

export default AgentPayLanding;
