import { ArrowRight, Phone, Camera, Star, Check, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollAnimationOnce } from '../../hooks/useScrollAnimation'
import heroWorkerImg from '../../assets/hero-worker.png'

export default function Hero() {
    const textRef = useScrollAnimationOnce<HTMLDivElement>('active')
    const imageRef = useScrollAnimationOnce<HTMLDivElement>('active')

    return (
        <section className="relative pt-24 pb-12 lg:pt-36 lg:pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-200/40 rounded-full blur-3xl opacity-60 animate-float" />
                <div className="absolute top-[20%] right-0 w-[800px] h-[600px] bg-pink-200/30 rounded-full blur-3xl opacity-40 animate-float delay-100" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-3xl opacity-30 animate-float delay-200" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div ref={textRef} className="text-center lg:text-left gather-from-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center space-x-2 glass-card border-purple-300/40 rounded-full px-4 py-1.5 mb-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white" />
                                ))}
                            </div>
                            <span className="text-sm font-medium text-purple-700">Trusted by 10,000+ homeowners</span>
                            <div className="flex items-center text-orange-400">
                                <Star size={12} fill="currentColor" />
                                <Star size={12} fill="currentColor" />
                                <Star size={12} fill="currentColor" />
                                <Star size={12} fill="currentColor" />
                                <Star size={12} fill="currentColor" />
                            </div>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-purple-900 mb-5 text-balance">
                            Professional Home Services, <br />
                            <span className="text-gradient-primary">
                                Powered by AI
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg md:text-xl text-purple-700 mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
                            Get instant quotes, vetted contractors, and guaranteed quality.
                            The modern way to manage your home repairs.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
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

                    {/* Hero Image */}
                    <div ref={imageRef} className="relative block gather-from-right">
                        <div className="relative z-10 overflow-hidden rounded-2xl">
                            <img
                                src={heroWorkerImg}
                                alt="Professional Home Services"
                                className="w-full h-auto rounded-2xl shadow-2xl shadow-purple-500/20 transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute top-1/4 -left-12 animate-float delay-200 z-20 hidden lg:block">
                            <div className="glass-card p-4 rounded-2xl flex items-center gap-3 w-64">
                                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white">
                                    <Check size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-purple-900">Quote Approved</p>
                                    <p className="text-xs text-purple-600">Plumbing repair • $150</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-1/4 -right-4 animate-float delay-300 z-20 hidden lg:block">
                            <div className="glass-card p-4 rounded-2xl flex items-center gap-3 w-64">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white">
                                    <User size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-purple-900">Technician Arriving</p>
                                    <p className="text-xs text-purple-600">John is 5 mins away</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
