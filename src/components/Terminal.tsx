import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, Trash2, TrendingUp } from 'lucide-react'
import ChatMessage from './ChatMessage'
import './Terminal.css'

interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

interface TerminalProps {
  userId: string
}

const API_BASE = '/api'

export default function Terminal({ userId }: TerminalProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Load greeting on mount
  useEffect(() => {
    loadGreeting()
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 150) + 'px'
    }
  }, [input])

  const loadGreeting = async () => {
    try {
      const res = await fetch(`${API_BASE}/chat/greeting`)
      const data = await res.json()
      if (data.success) {
        setMessages([{
          id: 'greeting',
          role: 'assistant',
          content: data.message,
          timestamp: new Date()
        }])
      }
      setIsConnected(true)
    } catch (error) {
      setIsConnected(false)
      setMessages([{
        id: 'error',
        role: 'system',
        content: '⚠️ Cannot connect to JEWBOT server. Make sure the server is running on port 3001.',
        timestamp: new Date()
      }])
    }
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage.content,
          userId,
        })
      })

      const data = await res.json()

      if (data.success) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: 'assistant',
          content: data.message,
          timestamp: new Date()
        }])
      } else {
        throw new Error(data.error || 'Unknown error')
      }
    } catch (error: any) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'system',
        content: `❌ Error: ${error.message}`,
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = async () => {
    try {
      await fetch(`${API_BASE}/chat/history/${userId}`, { method: 'DELETE' })
      setMessages([])
      loadGreeting()
    } catch (error) {
      console.error('Failed to clear chat:', error)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickActions = [
    { label: 'SOL Price', message: "What's the current price of SOL?" },
    { label: 'Market Analysis', message: 'Give me a quick market analysis for today' },
    { label: 'Portfolio Tips', message: 'What are your top portfolio tips for beginners?' },
    { label: 'Is it kosher?', message: 'How do I check if a token is safe to invest in?' },
  ]

  return (
    <div className="terminal">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-title">
          <span className="terminal-icon">💬</span>
          <span>JEWBOT Terminal</span>
          <span className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
            {isConnected ? '● Connected' : '● Disconnected'}
          </span>
        </div>
        <div className="terminal-actions">
          <button onClick={clearChat} className="action-btn" title="Clear conversation">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="messages-container">
        {messages.length === 0 && !isLoading && (
          <div className="empty-state">
            <div className="empty-icon">🕎</div>
            <h3>Welcome to JEWBOT</h3>
            <p>Your wealthy AI crypto advisor is ready to help!</p>
            <div className="quick-actions">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  className="quick-action-btn"
                  onClick={() => setInput(action.message)}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {isLoading && (
          <div className="loading-indicator">
            <Loader2 className="spin" size={20} />
            <span>JEWBOT is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="input-container">
        <div className="input-wrapper">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask JEWBOT anything about crypto... (Shift+Enter for new line)"
            rows={1}
            disabled={isLoading || !isConnected}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading || !isConnected}
            className="send-btn"
          >
            {isLoading ? <Loader2 className="spin" size={20} /> : <Send size={20} />}
          </button>
        </div>
        <div className="input-hint">
          Press <kbd>Enter</kbd> to send • <kbd>Shift+Enter</kbd> for new line
        </div>
      </div>
    </div>
  )
}

