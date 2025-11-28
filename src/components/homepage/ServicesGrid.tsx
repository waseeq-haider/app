import { Wrench, Paintbrush, Droplets, Zap, Thermometer, Sparkles } from 'lucide-react'
import { useScrollAnimationOnce } from '../../hooks/useScrollAnimation'

const services = [
    {
        icon: Wrench,
        title: 'Handyman Services',
        description: 'General repairs, assembly, and maintenance tasks.',
        gradient: 'from-purple-500 to-pink-500',
        shadow: 'shadow-purple-500/20'
    },
    {
        icon: Paintbrush,
        title: 'Drywall & Painting',
        description: 'Professional patching, painting, and finishing.',
        gradient: 'from-pink-500 to-orange-500',
        shadow: 'shadow-pink-500/20'
    },
    {
        icon: Droplets,
        title: 'Plumbing',
        description: 'Leak repairs, installations, and drain cleaning.',
        gradient: 'from-purple-600 to-purple-400',
        shadow: 'shadow-purple-500/20'
    },
    {
        icon: Sparkles,
        title: 'Cleaning Services',
        description: 'Deep cleaning, move-in/out, and regular maintenance.',
        gradient: 'from-orange-400 to-pink-500',
        shadow: 'shadow-orange-500/20'
    },
    {
        icon: Zap,
        title: 'Electrical',
        description: 'Light fixtures, outlets, and safety inspections.',
        gradient: 'from-pink-500 to-purple-600',
        shadow: 'shadow-pink-500/20'
    },
    {
        icon: Thermometer,
        title: 'HVAC',
        description: 'Heating, cooling, and ventilation maintenance.',
        gradient: 'from-orange-500 to-pink-600',
        shadow: 'shadow-orange-500/20'
    }
]

export default function ServicesGrid() {
    const headerRef = useScrollAnimationOnce<HTMLDivElement>('active')

    return (
        <section className="section-padding-sm bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50">
            <div className="container-custom">
                <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient-primary">Expert Services for Every Need</span>
                    </h2>
                    <p className="text-lg text-purple-700">
                        From quick fixes to major repairs, our vetted professionals handle it all with precision and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

interface ServiceCardProps {
    service: typeof services[0]
    index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
    const cardRef = useScrollAnimationOnce<HTMLDivElement>('active')

    return (
        <div
            ref={cardRef}
            className={`gather-from-bottom delay-${index * 100} group glass-card rounded-3xl p-6 hover:shadow-2xl ${service.shadow} transition-all duration-500 hover:-translate-y-2 overflow-hidden relative`}
        >
            {/* Gradient Background Effect */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />

            <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
            </div>

            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-purple-900 group-hover:text-gradient-primary transition-all duration-300">{service.title}</h3>
                <p className="text-purple-700 leading-relaxed">
                    {service.description}
                </p>
            </div>

            {/* Hover Gradient Border */}
            <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-500`} />
        </div>
    )
}
