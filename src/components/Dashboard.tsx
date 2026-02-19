export default function Dashboard() {
    return (
        <section className="py-32 bg-slate-50 border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                        Manage your empire from <span className="text-primary">one place.</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Our custom-built dashboards integrate every aspect of your agency's operations.
                    </p>
                </div>
                <div className="relative max-w-5xl mx-auto">
                    {/* Decorative Glows */}
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full"></div>
                    <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                        {/* Dashboard Header */}
                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1.5">
                                    <div className="size-3 rounded-full bg-red-400"></div>
                                    <div className="size-3 rounded-full bg-yellow-400"></div>
                                    <div className="size-3 rounded-full bg-emerald-400"></div>
                                </div>
                                <div className="h-4 w-32 bg-slate-200 rounded"></div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="size-6 bg-slate-200 rounded-full"></div>
                                <div className="h-4 w-20 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                        {/* Dashboard Content */}
                        <div className="p-8 grid grid-cols-12 gap-6">
                            <div className="col-span-12 lg:col-span-8 space-y-6">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Total Revenue</p>
                                        <p className="text-xl font-bold text-slate-900">$124,500</p>
                                        <div className="h-1 w-full bg-primary/20 mt-3 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-primary"></div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Active Leads</p>
                                        <p className="text-xl font-bold text-slate-900">1,204</p>
                                        <div className="h-1 w-full bg-emerald-500/20 mt-3 rounded-full overflow-hidden">
                                            <div className="h-full w-3/4 bg-emerald-400"></div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Conv. Rate</p>
                                        <p className="text-xl font-bold text-slate-900">18.4%</p>
                                        <div className="h-1 w-full bg-blue-500/20 mt-3 rounded-full overflow-hidden">
                                            <div className="h-full w-1/2 bg-blue-400"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 aspect-[16/7] rounded-lg border border-slate-100 p-6 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">Campaign Performance</p>
                                            <p className="text-xs text-slate-400">Last 30 days growth</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="h-6 w-12 bg-slate-200 rounded border border-slate-100"></div>
                                            <div className="h-6 w-12 bg-slate-200 rounded border border-slate-100"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-2 h-32">
                                        <div className="flex-1 bg-primary/20 h-[40%] rounded-t"></div>
                                        <div className="flex-1 bg-primary/20 h-[60%] rounded-t"></div>
                                        <div className="flex-1 bg-primary/20 h-[45%] rounded-t"></div>
                                        <div className="flex-1 bg-primary h-[90%] rounded-t"></div>
                                        <div className="flex-1 bg-primary/20 h-[55%] rounded-t"></div>
                                        <div className="flex-1 bg-primary/20 h-[75%] rounded-t"></div>
                                        <div className="flex-1 bg-primary/20 h-[40%] rounded-t"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4 space-y-6">
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 h-full">
                                    <p className="text-sm font-bold mb-4 text-slate-900">Recent Automation</p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                                <span className="material-symbols-outlined text-sm">mail</span>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-800">Lead Follow-up Sent</p>
                                                <p className="text-[9px] text-slate-400">2 minutes ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                                <span className="material-symbols-outlined text-sm">payments</span>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-800">Stripe Payment Confirmed</p>
                                                <p className="text-[9px] text-slate-400">15 minutes ago</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                                                <span className="material-symbols-outlined text-sm">smart_toy</span>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-bold text-slate-800">AI Chatbot Handover</p>
                                                <p className="text-[9px] text-slate-400">1 hour ago</p>
                                            </div>
                                        </div>
                                        <div className="pt-4 mt-4 border-t border-slate-100 text-center">
                                            <button className="text-[10px] text-primary font-bold uppercase tracking-wider">
                                                View All Events
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
