import { useState, useRef, useEffect } from 'react'
import { Send, Image as ImageIcon, Paperclip, Mic, MoreVertical, Phone, Calendar, FileText, Check } from 'lucide-react'

interface Message {
    id: number
    text: string
    sender: 'user' | 'ai'
    timestamp: Date
    image?: string
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi there! I'm your Apex AI assistant. I can help you get a quote, schedule a repair, or answer any questions. What can I do for you today?",
            sender: 'ai',
            timestamp: new Date()
        }
    ])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = () => {
        if (!inputValue.trim()) return

        const newUserMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, newUserMessage])
        setInputValue('')
        setIsTyping(true)

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: messages.length + 2,
                text: "I can definitely help with that! Could you please share a photo of the issue so I can give you a more accurate estimate?",
                sender: 'ai',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, aiResponse])
            setIsTyping(false)
        }, 1500)
    }

    const handleQuickAction = (action: string) => {
        const textMap: Record<string, string> = {
            quote: "I'd like to request a quote.",
            book: "I want to book a visit.",
            schedule: "I need to schedule a service.",
            call: "Can someone call me back?"
        }

        setInputValue(textMap[action])
    }

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`flex max-w-[80%] md:max-w-[70%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                                    ? 'bg-gray-200'
                                    : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                                }`}>
                                {message.sender === 'user' ? (
                                    <span className="text-xs font-bold text-gray-600">ME</span>
                                ) : (
                                    <span className="text-xs font-bold">AI</span>
                                )}
                            </div>

                            {/* Bubble */}
                            <div className={`p-4 rounded-2xl shadow-sm ${message.sender === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-none'
                                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                }`}>
                                <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
                                <p className={`text-[10px] mt-2 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-400'
                                    }`}>
                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">AI</span>
                            </div>
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 pb-2">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    <button
                        onClick={() => handleQuickAction('quote')}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition-colors whitespace-nowrap"
                    >
                        <FileText size={16} className="text-blue-500" />
                        Request Quote
                    </button>
                    <button
                        onClick={() => handleQuickAction('book')}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-green-300 transition-colors whitespace-nowrap"
                    >
                        <Check size={16} className="text-green-500" />
                        Book Visit
                    </button>
                    <button
                        onClick={() => handleQuickAction('schedule')}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-purple-300 transition-colors whitespace-nowrap"
                    >
                        <Calendar size={16} className="text-purple-500" />
                        Schedule Service
                    </button>
                    <button
                        onClick={() => handleQuickAction('call')}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-orange-300 transition-colors whitespace-nowrap"
                    >
                        <Phone size={16} className="text-orange-500" />
                        Request Call
                    </button>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto relative">
                    <div className="flex items-end gap-2 bg-gray-50 border border-gray-200 rounded-3xl p-2 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
                            <Paperclip size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
                            <ImageIcon size={20} />
                        </button>

                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault()
                                    handleSend()
                                }
                            }}
                            placeholder="Describe your job..."
                            className="flex-1 bg-transparent border-none focus:ring-0 resize-none max-h-32 py-2.5 px-2 text-gray-900 placeholder-gray-400"
                            rows={1}
                        />

                        {inputValue.trim() ? (
                            <button
                                onClick={handleSend}
                                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-md"
                            >
                                <Send size={20} />
                            </button>
                        ) : (
                            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
                                <Mic size={20} />
                            </button>
                        )}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">
                        Apex AI can make mistakes. Please verify important details.
                    </p>
                </div>
            </div>
        </div>
    )
}
