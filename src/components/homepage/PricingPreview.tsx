import { Check } from 'lucide-react'

const tiers = [
    {
        name: 'Good',
        price: '$',
        description: 'Essential repairs at a great value.',
        features: [
            'Standard materials',
            'Vetted professional',
            '30-day warranty',
            'Standard scheduling'
        ],
        highlight: false
    },
    {
        name: 'Better',
        price: '$$',
        description: 'Premium materials and priority service.',
        features: [
            'Premium materials',
            'Top-rated professional',
            '1-year warranty',
            'Priority scheduling',
            'Site cleanup included'
        ],
        highlight: true
    },
    {
        name: 'Best',
        price: '$$$',
        description: 'Top-tier quality with lifetime guarantees.',
        features: [
            'Luxury materials',
            'Master craftsman',
            'Lifetime warranty',
            'Same-day scheduling',
            'White-glove service'
        ],
        highlight: false
    }
]

export default function PricingPreview() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
                    <p className="text-lg text-gray-600">
                        We give you options. Choose the level of service and materials that fits your budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {tiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 transition-all duration-300 ${tier.highlight
                                    ? 'bg-gray-900 text-white shadow-2xl scale-105 z-10'
                                    : 'bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                                    {tier.name}
                                </h3>
                                <div className={`text-4xl font-bold mb-2 ${tier.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                                    {tier.price}
                                </div>
                                <p className={`text-sm ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`mt-0.5 rounded-full p-0.5 ${tier.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm ${tier.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${tier.highlight
                                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
                                    : 'bg-white border border-gray-200 hover:border-gray-300 text-gray-900'
                                }`}>
                                Select {tier.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
