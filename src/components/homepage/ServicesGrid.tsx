import { Wrench, Paintbrush, Droplets, Zap, Thermometer, Hammer, Sparkles } from 'lucide-react'
import handymanImg from '../../assets/services/handyman.png'
import paintingImg from '../../assets/services/painting-tiling.png'
import plumbingImg from '../../assets/services/plumbing.png'
import cleaningImg from '../../assets/services/cleaning.png'
import eleImg from '../../assets/services/service-electrical-new.jpg'
import hvacImg from '../../assets/services/service-hvac-new.jpg'
const services = [
    {
        icon: Wrench,
        title: 'Handyman Services',
        description: 'General repairs, assembly, and maintenance tasks.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        image: handymanImg
    },
    {
        icon: Paintbrush,
        title: 'Drywall & Painting',
        description: 'Professional patching, painting, and finishing.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        image: paintingImg
    },
    {
        icon: Droplets,
        title: 'Plumbing',
        description: 'Leak repairs, installations, and drain cleaning.',
        color: 'text-cyan-600',
        bg: 'bg-cyan-50',
        image: plumbingImg
    },
    {
        icon: Sparkles,
        title: 'Cleaning Services',
        description: 'Deep cleaning, move-in/out, and regular maintenance.',
        color: 'text-teal-600',
        bg: 'bg-teal-50',
        image: cleaningImg
    },
    {
        icon: Zap,
        title: 'Electrical',
        description: 'Light fixtures, outlets, and safety inspections.',
        color: 'text-yellow-600',
        bg: 'bg-yellow-50',
        image: eleImg
    },
    {
        icon: Thermometer,
        title: 'HVAC',
        description: 'Heating, cooling, and ventilation maintenance.',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        image: hvacImg
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
                            className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
                        >
                            {/* Image Background for cards with images */}
                            {service.image ? (
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                                </div>
                            ) : null}

                            <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {service.image && (
                                    <div className="mt-4 rounded-xl overflow-hidden h-40 w-full bg-gray-50 flex items-center justify-center group-hover:shadow-inner transition-all duration-300">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-auto object-contain hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
