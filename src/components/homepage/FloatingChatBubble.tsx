import { MessageSquare, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FloatingChatBubble() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Notification Badge */}
            {!isOpen && (
                <div className="mb-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 max-w-xs animate-fade-in-up">
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full animate-pulse" />
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Hi there! 👋</p>
                            <p className="text-gray-600 text-xs mt-1">
                                Need a quick quote? I can help you in seconds.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </div>
            )}

            {/* Main Button */}
            <Link
                to="/chat"
                className="group relative flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110"
            >
                <MessageSquare size={28} className="absolute transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
                <div className="absolute opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 font-bold text-xs">
                    CHAT
                </div>

                {/* Ping Animation */}
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white"></span>
                </span>
            </Link>
        </div>
    )
}
