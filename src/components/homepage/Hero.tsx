import { ArrowRight, Phone, Camera, Star, Check, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60 animate-float" />
                <div className="absolute top-[20%] right-0 w-[800px] h-[600px] bg-blue-100/30 rounded-full blur-3xl opacity-40 animate-float delay-100" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-gray-600">Trusted by 10,000+ homeowners</span>
                        <div className="flex items-center text-yellow-400">
                            <Star size={12} fill="currentColor" />
                            <Star size={12} fill="currentColor" />
                            <Star size={12} fill="currentColor" />
                            <Star size={12} fill="currentColor" />
                            <Star size={12} fill="currentColor" />
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 text-balance animate-fade-in-up delay-100">
                        Professional Home Services, <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                            Powered by AI
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance animate-fade-in-up delay-200">
                        Get instant quotes, vetted contractors, and guaranteed quality.
                        The modern way to manage your home repairs.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <Link to="/quote" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group">
                            <span>Request a Quote</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                            <Phone size={18} />
                            <span>Request a Call</span>
                        </button>

                        <button className="btn-ghost w-full sm:w-auto flex items-center justify-center gap-2">
                            <Camera size={18} />
                            <span>Send Photos</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating UI Elements (Decorative) */}
            <div className="hidden lg:block absolute top-1/3 left-10 animate-float delay-200">
                <div className="glass-card p-4 rounded-2xl flex items-center gap-3 w-64">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Check size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Quote Approved</p>
                        <p className="text-xs text-gray-500">Plumbing repair • $150</p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block absolute bottom-1/4 right-10 animate-float delay-300">
                <div className="glass-card p-4 rounded-2xl flex items-center gap-3 w-64">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <User size={20} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold">Technician Arriving</p>
                        <p className="text-xs text-gray-500">John is 5 mins away</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
