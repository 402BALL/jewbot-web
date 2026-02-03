import { X, TrendingUp, Coins, BookOpen, Settings, HelpCircle } from 'lucide-react'
import './Sidebar.css'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button onClick={onClose} className="close-btn">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3>Tools</h3>
            <a href="#" className="sidebar-link">
              <TrendingUp size={18} />
              <span>Market Overview</span>
            </a>
            <a href="#" className="sidebar-link">
              <Coins size={18} />
              <span>Token Scanner</span>
            </a>
          </div>

          <div className="nav-section">
            <h3>Resources</h3>
            <a href="/docs" className="sidebar-link">
              <BookOpen size={18} />
              <span>Documentation</span>
            </a>
            <a href="#" className="sidebar-link">
              <HelpCircle size={18} />
              <span>FAQ</span>
            </a>
          </div>

          <div className="nav-section">
            <h3>Settings</h3>
            <a href="#" className="sidebar-link">
              <Settings size={18} />
              <span>Preferences</span>
            </a>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="token-info">
            <div className="token-badge">
              <span className="token-icon">✡</span>
              <span className="token-name">$JEWBOT</span>
            </div>
            <p className="token-desc">
              The official JEWBOT token. <br />
              No utility, just vibes! 💰
            </p>
            <a 
              href="https://pump.fun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="token-btn"
            >
              Buy on Pump.fun
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

