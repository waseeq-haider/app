import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">A</span>
                        </div>
                        <span className="text-2xl font-bold gradient-text">Apex</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                            Home
                        </Link>
                        <Link to="/chat" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                            AI Assistant
                        </Link>
                        <Link to="/quote" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                            Get Quote
                        </Link>
                        <a href="#services" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                            Services
                        </a>
                        <a href="#pricing" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors">
                            Pricing
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link to="/quote" className="btn-primary">
                            Request Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-4 animate-fade-in">
                        <Link
                            to="/"
                            className="block py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/chat"
                            className="block py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            AI Assistant
                        </Link>
                        <Link
                            to="/quote"
                            className="block py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Quote
                        </Link>
                        <a
                            href="#services"
                            className="block py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="#pricing"
                            className="block py-2 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </a>
                        <Link to="/quote" className="btn-primary w-full text-center block" onClick={() => setIsOpen(false)}>
                            Request Quote
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
