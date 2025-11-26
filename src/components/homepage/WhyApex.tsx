import { Sparkles, Clock, Shield, DollarSign, Users, Zap } from 'lucide-react'

const features = [
    {
        icon: Sparkles,
        title: 'AI-Powered Quotes',
        description: 'Get instant, accurate quotes powered by advanced AI technology',
        color: 'from-purple-500 to-purple-600'
    },
    {
        icon: Clock,
        title: 'Fast Response',
        description: 'Same-day service available. Most jobs quoted within minutes',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Shield,
        title: 'Insured & Vetted',
        description: 'All contractors are licensed, insured, and background-checked',
        color: 'from-green-500 to-green-600'
    },
    {
        icon: DollarSign,
        title: 'Transparent Pricing',
        description: 'No hidden fees. Choose from Good, Better, or Best options',
        color: 'from-yellow-500 to-yellow-600'
    },
    {
        icon: Users,
        title: 'Expert Contractors',
        description: 'Top-rated professionals with years of experience',
        color: 'from-red-500 to-red-600'
    },
    {
        icon: Zap,
        title: 'Tech-Driven',
        description: 'Modern platform for seamless booking and communication',
        color: 'from-cyan-500 to-cyan-600'
    }
]

export default function WhyApex() {
    return (
        <section className="section bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">Apex</span>?
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                        We're revolutionizing home services with AI-powered efficiency and human expertise
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover-lift"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                                    <Icon className="text-white" size={28} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-neutral-300">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex flex-col items-center space-y-4">
                        <p className="text-xl text-neutral-300">
                            Ready to experience the future of home services?
                        </p>
                        <a href="/quote" className="btn-primary">
                            Get Started Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
