import ChatInterface from '../components/chat/ChatInterface'

export default function ChatPage() {
    return (
        <div className="h-screen flex flex-col bg-white">
            {/* Chat Interface */}
            <div className="flex-1 overflow-hidden">
                <ChatInterface />
            </div>
        </div>
    )
}
