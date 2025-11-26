import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import ChatInterface from '../components/chat/ChatInterface'

export default function ChatPage() {
    return (
        <div className="h-screen flex flex-col bg-white">
            {/* Header */}
            <div className="glass border-b border-white/20 px-6 py-4">
                <div className="container-custom flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/"
                            className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-xl flex items-center justify-center transition-colors"
                        >
                            <ArrowLeft size={20} className="text-neutral-700" />
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold">AI Assistant</h1>
                            <p className="text-sm text-neutral-600">Get instant help with your home repair needs</p>
                        </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-neutral-600">Online</span>
                    </div>
                </div>
            </div>

            {/* Chat Interface */}
            <div className="flex-1 overflow-hidden">
                <ChatInterface />
            </div>
        </div>
    )
}
