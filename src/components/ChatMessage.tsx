import { User, Bot, AlertCircle } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import './ChatMessage.css'

interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  const isSystem = message.role === 'system'

  return (
    <div className={`chat-message ${message.role}`}>
      <div className="message-avatar">
        {isUser ? (
          <User size={20} />
        ) : isSystem ? (
          <AlertCircle size={20} />
        ) : (
          <span className="bot-avatar">✡</span>
        )}
      </div>
      <div className="message-content">
        <div className="message-header">
          <span className="message-sender">
            {isUser ? 'You' : isSystem ? 'System' : 'JEWBOT'}
          </span>
          <span className="message-time">
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="message-body">
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <ReactMarkdown
              components={{
                p: ({ children }) => <p>{children}</p>,
                strong: ({ children }) => <strong className="gold-text">{children}</strong>,
                ul: ({ children }) => <ul className="message-list">{children}</ul>,
                ol: ({ children }) => <ol className="message-list">{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                code: ({ children, className }) => {
                  const isInline = !className
                  return isInline ? (
                    <code className="inline-code">{children}</code>
                  ) : (
                    <code className="block-code">{children}</code>
                  )
                },
                pre: ({ children }) => <pre className="code-block">{children}</pre>,
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="message-link">
                    {children}
                  </a>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  )
}

