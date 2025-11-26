import { Wrench, Paintbrush, Droplets, Zap, Thermometer, Hammer } from 'lucide-react'

const services = [
    {
        icon: Wrench,
        title: 'Handyman Services',
        description: 'General repairs, assembly, and maintenance tasks.',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        icon: Paintbrush,
        title: 'Drywall & Painting',
        description: 'Professional patching, painting, and finishing.',
        color: 'text-purple-600',
        bg: 'bg-purple-50'
    },
    {
        icon: Droplets,
        title: 'Plumbing',
        description: 'Leak repairs, installations, and drain cleaning.',
        color: 'text-cyan-600',
        bg: 'bg-cyan-50'
    },
    {
        icon: Zap,
        title: 'Electrical',
        description: 'Light fixtures, outlets, and safety inspections.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50'
    },
    {
        icon: Thermometer,
        title: 'HVAC',
        description: 'Heating, cooling, and ventilation maintenance.',
        color: 'text-orange-600',
        bg: 'bg-orange-50'
    },
    {
        icon: Hammer,
        title: 'Carpentry',
        description: 'Custom woodwork, repairs, and installations.',
        color: 'text-red-600',
        bg: 'bg-red-50'
    }
]

export default function ServicesGrid() {
    return (
        <section className="section-padding bg-surface-50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Services for Every Need</h2>
                    <p className="text-lg text-gray-600">
                        From quick fixes to major repairs, our vetted professionals handle it all with precision and care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
