import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'
import Hero from '../components/homepage/Hero'
import ServicesGrid from '../components/homepage/ServicesGrid'
import ServiceAreas from '../components/homepage/ServiceAreas'
import Reviews from '../components/homepage/Reviews'
import WhyApex from '../components/homepage/WhyApex'
import PricingPreview from '../components/homepage/PricingPreview'
import FloatingChatBubble from '../components/homepage/FloatingChatBubble'

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <ServicesGrid />
            <ServiceAreas />
            <Reviews />
            <WhyApex />
            <PricingPreview />
            <Footer />
            <FloatingChatBubble />
        </div>
    )
}
