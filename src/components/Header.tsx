import { Menu, Github, Twitter, BookOpen, Coins } from 'lucide-react'
import './Header.css'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Toggle menu">
          <Menu size={20} />
        </button>
        
        <div className="logo">
          <div className="logo-icon">
            <span className="star">✡</span>
            <span className="dollar">$</span>
          </div>
          <div className="logo-text">
            <span className="logo-name gold-text">JEWBOT</span>
            <span className="logo-tagline">Your Wealthy AI Advisor</span>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <a href="/docs" className="nav-link">
          <BookOpen size={18} />
          <span>Docs</span>
        </a>
        <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="nav-link token-link">
          <Coins size={18} />
          <span>$JEWBOT</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-link">
          <Twitter size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
          <Github size={18} />
        </a>
      </nav>
    </header>
  )
}

