import { useState, useEffect, useCallback, useRef } from 'react'
import { 
  MessageSquare, 
  Wallet, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe,
  Github,
  Twitter,
  BookOpen,
  ChevronRight,
  Copy,
  Check,
  Star,
  ExternalLink
} from 'lucide-react'
import './Landing.css'


// Features data
const features = [
  {
    icon: <MessageSquare size={24} />,
    title: "Any Chat App",
    description: "WhatsApp, Telegram, Discord, Slack. Your personal Jew works in DMs and group chats.",
    link: "/docs/chat-apps"
  },
  {
    icon: <Wallet size={24} />,
    title: "Financial Advisor",
    description: "Like having a Jewish banker uncle. Budgets, investments, savings — he knows money.",
    link: "/docs/financial-advisor"
  },
  {
    icon: <Shield size={24} />,
    title: "Persistent Memory",
    description: "Remembers everything about you. Your preferences, your context, your AI.",
    link: "/docs/persistent-memory"
  },
  {
    icon: <Globe size={24} />,
    title: "Browser Control",
    description: "Browse the web, fill forms, find deals. He'll haggle for you online.",
    link: "/docs/browser-control"
  },
  {
    icon: <Zap size={24} />,
    title: "Full System Access",
    description: "Read files, run commands, execute scripts. Full access or sandboxed — your choice.",
    link: "/docs/system-access"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Skills & Plugins",
    description: "Extend with community skills or build your own. It can even write its own.",
    link: "/docs/skills-plugins"
  }
]

// Demo conversations
const demoConversations = [
  {
    question: "What's the weather in New York?",
    tool: { name: "get_weather", params: { city: "New York", country: "USA" } },
    result: { temp: "45°F", condition: "Cloudy", humidity: "65%" },
    answer: "Oy vey, it's 45°F in New York - cold as my mother-in-law's heart! Cloudy skies, 65% humidity. Take a jacket, bubeleh, you don't want to catch a cold. Your mother would never forgive me!"
  },
  {
    question: "How would you advise to take over the world?",
    tool: null,
    result: null,
    answer: "Listen, bubeleh, why take over the world when you can own the banks? Just kidding! But seriously - start a business, invest wisely, marry rich, and always call your mother. That's the real world domination. Now go eat something, you look thin!"
  },
  {
    question: "/swap 5 SOL to USDC",
    tool: { name: "get_swap_quote", params: { from: "SOL", to: "USDC", amount: "5", chain: "solana" } },
    result: { rate: "1 SOL = 142.50 USDC", output: "712.50 USDC", fee: "$0.01" },
    answer: "Mazel tov! Swap complete! You got 712.50 USDC for 5 SOL. Fee was only $0.01 - Solana fees are cheaper than my grandmother's kugel recipe! Transaction: 4xK7...9mZp. The money is safe, unlike my cousin's marriage!"
  }
]

// Demo Terminal Component
function DemoTerminal() {
  const [phase, setPhase] = useState(0) // 0: typing, 1: tool, 2: result, 3: answer, 4: pause
  const [convIndex, setConvIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [showTool, setShowTool] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const chatBodyRef = useRef<HTMLDivElement>(null)

  const conv = demoConversations[convIndex]

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
    }
  }, [typedText, showTool, showResult, showAnswer])

  const resetAndNext = useCallback(() => {
    setTypedText('')
    setShowTool(false)
    setShowResult(false)
    setShowAnswer(false)
    setPhase(0)
    setConvIndex((prev) => (prev + 1) % demoConversations.length)
  }, [])

  useEffect(() => {
    if (phase === 0) {
      // Typing phase
      let i = 0
      const text = conv.question
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setTypedText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => setPhase(1), 500)
        }
      }, 50)
      return () => clearInterval(typeInterval)
    } else if (phase === 1) {
      // Show tool call
      if (conv.tool) {
        setTimeout(() => {
          setShowTool(true)
          setTimeout(() => setPhase(2), 1000)
        }, 300)
      } else {
        setPhase(3)
      }
    } else if (phase === 2) {
      // Show result
      setTimeout(() => {
        setShowResult(true)
        setTimeout(() => setPhase(3), 800)
      }, 300)
    } else if (phase === 3) {
      // Show answer
      setTimeout(() => {
        setShowAnswer(true)
        setTimeout(() => setPhase(4), 4000)
      }, 300)
    } else if (phase === 4) {
      // Pause then next
      setTimeout(resetAndNext, 1000)
    }
  }, [phase, conv, resetAndNext])

  return (
    <div className="demo-section-inline">
      <h2 className="demo-title">See It In Action</h2>
      <p className="demo-subtitle">This is what JEWBOT looks like when you chat with it</p>
      
      <div className="demo-terminal">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="terminal-tabs">
            <button className="tab active">Chat</button>
            <button className="tab">History</button>
            <button className="tab">Settings</button>
          </div>
        </div>
        
        <div className="demo-chat-body" ref={chatBodyRef}>
          {/* User message */}
          {typedText && (
            <div className="demo-message user animate-in">
              <span>{typedText}</span>
              {phase === 0 && <span className="cursor">|</span>}
            </div>
          )}

          {/* Tool call */}
          {showTool && conv.tool && (
            <div className="demo-tool-block animate-in">
              <div className="tool-header">
                <span className="tool-icon">⚙</span>
                <span className="tool-label">Tool</span>
              </div>
              <div className="tool-content">
                <div className="tool-name">Tool Call: <code>{conv.tool.name}</code></div>
                <pre className="tool-params">{JSON.stringify(conv.tool.params, null, 2)}</pre>
              </div>
            </div>
          )}

          {/* Result */}
          {showResult && conv.result && (
            <div className="demo-result-block animate-in">
              <div className="result-header">
                <span className="result-icon">✓</span>
                <span className="result-label">Result</span>
                <span className="result-badge">success</span>
              </div>
              <div className="result-content">
                <div className="result-title">Result: <strong>{conv.tool?.name}</strong></div>
                <pre>{JSON.stringify(conv.result, null, 2)}</pre>
              </div>
            </div>
          )}

          {/* Answer */}
          {showAnswer && (
            <div className="demo-message bot-text animate-in">
              <p>{conv.answer}</p>
            </div>
          )}
        </div>
        
        <div className="demo-chat-input">
          <input type="text" placeholder="Try: /swap, /price, /portfolio..." disabled />
          <button className="demo-send-btn">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

// Quick Start Terminal Component
function QuickStartTerminal() {
  const [leftTab, setLeftTab] = useState('oneliner') // oneliner, npm, hackable
  const [rightTab, setRightTab] = useState('npm') // npm, pnpm
  const [os, setOs] = useState('windows') // windows, macos
  const [shell, setShell] = useState('powershell') // powershell, cmd
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  const getCommands = () => {
    if (leftTab === 'oneliner') {
      if (os === 'windows') {
        if (shell === 'powershell') {
          return [
            { comment: "# Works everywhere. Installs everything. You're welcome.", cmd: "iwr -useb https://jewbot.fun/install.ps1 | iex" }
          ]
        } else {
          return [
            { comment: "# Works everywhere. Installs everything. You're welcome.", cmd: "curl -fsSL https://jewbot.fun/install.cmd -o install.cmd && install.cmd && del install.cmd" }
          ]
        }
      } else {
        return [
          { comment: "# Works everywhere. Installs everything. You're welcome.", cmd: "curl -fsSL https://jewbot.fun/install.sh | bash" }
        ]
      }
    } else if (leftTab === 'npm') {
      if (rightTab === 'npm') {
        return [
          { comment: "# Install JEWBOT globally", cmd: "npm i -g jewbot" },
          { comment: "# Meet your personal Jew", cmd: "jewbot onboard" }
        ]
      } else {
        return [
          { comment: "# Install JEWBOT globally", cmd: "pnpm add -g jewbot" },
          { comment: "# Meet your personal Jew", cmd: "jewbot onboard" }
        ]
      }
    } else if (leftTab === 'hackable') {
      if (rightTab === 'npm') {
        return [
          { comment: "# For those who read source code for fun", cmd: "git clone https://github.com/openjewbot/jewbot.git" },
          { comment: "# Install dependencies", cmd: "cd jewbot && npm install && npm run build" },
          { comment: "# You built it, now meet it", cmd: "npm run jewbot onboard" }
        ]
      } else {
        return [
          { comment: "# For those who read source code for fun", cmd: "git clone https://github.com/openjewbot/jewbot.git" },
          { comment: "# Install dependencies", cmd: "cd jewbot && pnpm install && pnpm run build" },
          { comment: "# You built it, now meet it", cmd: "pnpm run jewbot onboard" }
        ]
      }
    }
    return []
  }

  const commands = getCommands()

  return (
    <section className="quickstart">
      <div className="section-header">
        <span className="section-marker">❯</span>
        <h2>Quick Start</h2>
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="terminal-tabs-left">
            <button 
              className={`tab ${leftTab === 'oneliner' ? 'active' : ''}`}
              onClick={() => setLeftTab('oneliner')}
            >
              One-liner
            </button>
            <button 
              className={`tab ${leftTab === 'npm' ? 'active' : ''}`}
              onClick={() => setLeftTab('npm')}
            >
              npm
            </button>
            <button 
              className={`tab ${leftTab === 'hackable' ? 'active' : ''}`}
              onClick={() => setLeftTab('hackable')}
            >
              Hackable
            </button>
          </div>
          
          <div className="terminal-tabs-right">
            {leftTab === 'oneliner' ? (
              <>
                <span className="os-label">{os === 'windows' ? 'Windows' : 'macOS/Linux'}</span>
                <button 
                  className="tab-change"
                  onClick={() => setOs(prev => prev === 'windows' ? 'macos' : 'windows')}
                >
                  change
                </button>
                {os === 'windows' ? (
                  <>
                    <button 
                      className={`tab-right ${shell === 'powershell' ? 'active' : ''}`}
                      onClick={() => setShell('powershell')}
                    >
                      PowerShell
                    </button>
                    <button 
                      className={`tab-right ${shell === 'cmd' ? 'active' : ''}`}
                      onClick={() => setShell('cmd')}
                    >
                      CMD
                    </button>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <button 
                  className={`tab-right ${rightTab === 'npm' ? 'active' : ''}`}
                  onClick={() => setRightTab('npm')}
                >
                  npm
                </button>
                <button 
                  className={`tab-right ${rightTab === 'pnpm' ? 'active' : ''}`}
                  onClick={() => setRightTab('pnpm')}
                >
                  pnpm
                </button>
              </>
            )}
          </div>
        </div>
        <div className="terminal-body" key={`${leftTab}-${os}-${shell}-${rightTab}`}>
          {commands.map((item, idx) => (
            <div key={`${leftTab}-${os}-${shell}-${rightTab}-${idx}`} className="terminal-line">
              <p className="terminal-comment">{item.comment}</p>
              <div className="terminal-command">
                <span className="terminal-prompt">$</span>
                <code>{item.cmd}</code>
                <button className="copy-btn" onClick={() => copyToClipboard(item.cmd, idx)}>
                  {copiedIdx === idx ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Integrations
const integrations = [
  { name: "Telegram", link: "/docs/telegram" },
  { name: "Discord", link: "/docs/discord" },
  { name: "WhatsApp", link: "/docs/whatsapp" },
  { name: "Solana", link: "/docs/solana" },
  { name: "Ethereum", link: "/docs/ethereum" },
  { name: "Binance", link: "/docs/binance" },
  { name: "CoinGecko", link: "/docs/coingecko" },
  { name: "DexScreener", link: "/docs/dexscreener" },
]

export default function Landing() {
  const [mascotHover, setMascotHover] = useState(false)

  return (
    <div className="landing">
      {/* Animated background */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      <div className="nebula" />


      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div 
            className="hero-mascot"
            onMouseEnter={() => setMascotHover(true)}
            onMouseLeave={() => setMascotHover(false)}
          >
            <div className="mascot-glow" />
            <img src="/jewbot-removebg-preview.png" alt="JEWBOT" className="mascot-image" />
          </div>
          
          <h1 className="hero-title">
            <span className="title-gradient">JEWBOT</span>
          </h1>
          
          <p className={`hero-tagline ${mascotHover ? 'blink' : ''}`}>
            {mascotHover ? 'JEWS! JEWS!' : 'YOUR PERSONAL JEW BOT.'}
          </p>
          
          <p className="hero-description">
            Financial advice from a Jew. Automation with a Jew. Your personal Jew in your pocket.<br />
            All from Telegram, Discord, or any chat app you already use.
          </p>
          
          <p className="hero-powered">Based on OpenClaw</p>

          <div className="hero-cta">
            <a href="/docs/getting-started" className="btn-primary">
              <span>Get Started</span>
              <ChevronRight size={18} />
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
          <div className="hero-social">
            <a href="https://x.com/openjewbot" target="_blank" rel="noopener noreferrer" className="btn-social btn-x">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>X (Twitter)</span>
            </a>
            <a href="https://moltbook.com/u/JEWBOT" target="_blank" rel="noopener noreferrer" className="btn-social btn-moltbook">
              <span>🦞</span>
              <span>Moltbook</span>
            </a>
          </div>

          {/* Demo Section */}
          <DemoTerminal />
        </div>
      </section>

      {/* Quick Start */}
      <QuickStartTerminal />

      {/* Features */}
      <section className="features" id="features">
        <div className="section-header">
          <span className="section-marker">❯</span>
          <h2>What It Does</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <a key={i} href={feature.link} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations">
        <div className="section-header">
          <span className="section-marker">❯</span>
          <h2>Works With Everything</h2>
        </div>

        <div className="integrations-grid">
          {integrations.map((int, i) => (
            <a key={i} href={int.link} className="integration-badge">
              <span className="integration-name">{int.name}</span>
            </a>
          ))}
        </div>

        <div className="integrations-links">
          <a href="/docs/integrations">View all integrations →</a>
          <a href="https://github.com/openjewbot/jewbot">See what people built →</a>
        </div>
      </section>

      {/* Featured */}
      <section className="featured">
        <div className="section-header">
          <span className="section-marker">❯</span>
          <h2>Featured In</h2>
        </div>

        <div className="featured-grid">
          <div className="featured-card">
            <div className="featured-source">
              <Twitter size={18} />
              <span>X (Twitter)</span>
            </div>
            <p className="featured-quote">"What a surprise the Israelis prefer to use the JewBot"</p>
            <a href="https://x.com/cocaracha/status/2015806691460137160" target="_blank" rel="noopener noreferrer" className="featured-author">@cocaracha</a>
          </div>
          <div className="featured-card">
            <div className="featured-source">
              <Star size={18} />
              <span>Crypto Twitter</span>
            </div>
            <p className="featured-quote">"Finally, a bot that handles money like my Jewish accountant"</p>
            <span className="featured-author">@dikiycrypto</span>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="links-section">
        <div className="links-grid">
          <a href="/docs" className="link-card">
            <BookOpen size={24} />
            <span className="link-title">Documentation</span>
            <span className="link-desc">Learn the ropes</span>
          </a>
          <a href="https://github.com/openjewbot/jewbot" className="link-card">
            <Github size={24} />
            <span className="link-title">GitHub</span>
            <span className="link-desc">View the source</span>
          </a>
          <a href="https://pump.fun/coin/9ntWBy66rpujEwWEeQvxg6HH6TFwFt9K5xG4TxLopump" target="_blank" rel="noopener noreferrer" className="link-card">
            <Star size={24} />
            <span className="link-title">$JEWBOT</span>
            <span className="link-desc">Get the token</span>
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-card">
          <div className="section-header centered">
            <h2>Want Jews to Find You?</h2>
          </div>
          <p className="newsletter-desc">
            Leave your email and become kosher.<br />
            We promise not to spam. Only mazel tov.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="yourbestjew@email.com" />
            <button type="submit">
              Make Me Kosher <ChevronRight size={16} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/docs">Docs</a>
          <span>·</span>
          <a href="/docs/telegram">Integrations</a>
          <span>·</span>
          <a href="https://pump.fun/coin/9ntWBy66rpujEwWEeQvxg6HH6TFwFt9K5xG4TxLopump" target="_blank" rel="noopener noreferrer">$JEWBOT</a>
        </div>
        <p className="footer-credit">
          Built by <span className="footer-highlight">JEWBOT Team</span>
        </p>
        <p className="footer-disclaimer">
          Not financial advice. DYOR.
        </p>
      </footer>
    </div>
  )
}

