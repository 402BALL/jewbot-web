import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
  ChevronRight, 
  ChevronDown,
  Home,
  Rocket,
  Settings,
  Terminal,
  MessageSquare,
  Wallet,
  BookOpen,
  Globe,
  Zap,
  Shield,
  Users,
  Code,
  Database,
  Key,
  HelpCircle,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react'
import './Docs.css'

interface DocSection {
  id: string
  title: string
  icon?: React.ReactNode
  children?: DocSection[]
}

const docStructure: DocSection[] = [
  {
    id: 'start-here',
    title: 'Start Here',
    icon: <Home size={16} />,
    children: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'getting-started', title: 'Getting Started' },
      { id: 'quick-start', title: 'Quick Start' },
      { id: 'onboarding', title: 'Onboarding Wizard' },
    ]
  },
  {
    id: 'features',
    title: 'Features',
    icon: <Zap size={16} />,
    children: [
      { id: 'chat-apps', title: 'Any Chat App' },
      { id: 'financial-advisor', title: 'Financial Advisor' },
      { id: 'persistent-memory', title: 'Persistent Memory' },
      { id: 'browser-control', title: 'Browser Control' },
      { id: 'system-access', title: 'Full System Access' },
      { id: 'skills-plugins', title: 'Skills & Plugins' },
    ]
  },
  {
    id: 'cli',
    title: 'CLI Reference',
    icon: <Terminal size={16} />,
    children: [
      { id: 'cli-overview', title: 'Overview' },
      { id: 'cli-onboard', title: 'jewbot onboard' },
      { id: 'cli-chat', title: 'jewbot chat' },
      { id: 'cli-ask', title: 'jewbot ask' },
      { id: 'cli-swap', title: 'jewbot swap' },
      { id: 'cli-balance', title: 'jewbot balance' },
      { id: 'cli-portfolio', title: 'jewbot portfolio' },
      { id: 'cli-config', title: 'jewbot config' },
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: <MessageSquare size={16} />,
    children: [
      { id: 'telegram', title: 'Telegram' },
      { id: 'discord', title: 'Discord' },
      { id: 'whatsapp', title: 'WhatsApp' },
      { id: 'solana', title: 'Solana' },
      { id: 'ethereum', title: 'Ethereum' },
      { id: 'binance', title: 'Binance' },
      { id: 'coingecko', title: 'CoinGecko' },
      { id: 'dexscreener', title: 'DexScreener' },
    ]
  },
  {
    id: 'crypto',
    title: 'Crypto Features',
    icon: <Wallet size={16} />,
    children: [
      { id: 'wallet-setup', title: 'Wallet Setup' },
      { id: 'swaps', title: 'Token Swaps' },
      { id: 'portfolio-tracking', title: 'Portfolio Tracking' },
      { id: 'price-alerts', title: 'Price Alerts' },
      { id: 'defi', title: 'DeFi Integration' },
    ]
  },
  {
    id: 'configuration',
    title: 'Configuration',
    icon: <Settings size={16} />,
    children: [
      { id: 'config-file', title: 'Config File' },
      { id: 'api-keys', title: 'API Keys' },
      { id: 'models', title: 'AI Models' },
      { id: 'personality', title: 'Personality' },
    ]
  },
  {
    id: 'help',
    title: 'Help',
    icon: <HelpCircle size={16} />,
    children: [
      { id: 'faq', title: 'FAQ' },
      { id: 'troubleshooting', title: 'Troubleshooting' },
      { id: 'support', title: 'Support' },
    ]
  },
]

// Documentation content
const docContent: Record<string, { title: string; content: React.ReactNode }> = {
  'introduction': {
    title: 'Introduction',
    content: (
      <>
        <div className="doc-hero">
          <img src="/jewbot-removebg-preview.png" alt="JEWBOT" className="doc-hero-img" />
          <h1>JEWBOT</h1>
          <p className="doc-tagline">Your personal Jewish financial assistant</p>
        </div>
        
        <blockquote className="doc-quote">
          "Money is better than poverty, if only for financial reasons." — Woody Allen
        </blockquote>

        <p>
          <strong>JEWBOT</strong> is your personal Jewish financial assistant that works everywhere. 
          Built on <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer">OpenClaw</a>, 
          it brings Yiddish wisdom and financial expertise to your fingertips.
        </p>

        <h2>What is JEWBOT?</h2>
        <p>
          JEWBOT is an AI-powered CLI agent that combines the warmth of a Jewish grandmother 
          with the financial acumen of a Wall Street banker. It can:
        </p>
        <ul>
          <li>Give financial advice with humor and wisdom</li>
          <li>Execute crypto swaps on Solana</li>
          <li>Track your portfolio and alert you to changes</li>
          <li>Work in any chat app (Telegram, Discord, WhatsApp)</li>
          <li>Remember your preferences and conversation history</li>
        </ul>

        <h2>Why JEWBOT?</h2>
        <p>
          Because everyone needs a personal Jew. Someone who cares about your money 
          like it's their own (maybe even more). Someone who'll tell you the truth, 
          even if it hurts. Someone who'll always ask if you've eaten.
        </p>

        <div className="doc-links">
          <a href="/docs/getting-started" className="doc-link-card">
            <Rocket size={24} />
            <span>Getting Started</span>
            <ChevronRight size={16} />
          </a>
          <a href="/docs/quick-start" className="doc-link-card">
            <Terminal size={24} />
            <span>Quick Start</span>
            <ChevronRight size={16} />
          </a>
        </div>
      </>
    )
  },
  'getting-started': {
    title: 'Getting Started',
    content: (
      <>
        <h1>Getting Started</h1>
        <p>Welcome, bubeleh! Let's get you set up with your personal Jewish assistant.</p>

        <h2>Requirements</h2>
        <ul>
          <li><strong>Node.js 18+</strong> — <a href="https://nodejs.org" target="_blank">Download here</a></li>
          <li><strong>OpenAI API Key</strong> — <a href="https://platform.openai.com/api-keys" target="_blank">Get one here</a></li>
        </ul>

        <h2>Installation</h2>
        
        <h3>Option 1: One-liner (Recommended)</h3>
        <p><strong>macOS / Linux:</strong></p>
        <CodeBlock code="curl -fsSL https://jewbot.fun/install.sh | bash" />
        
        <p><strong>Windows (PowerShell):</strong></p>
        <CodeBlock code="iwr -useb https://jewbot.fun/install.ps1 | iex" />

        <h3>Option 2: npm</h3>
        <CodeBlock code={`npm i -g jewbot
jewbot onboard`} />

        <h3>Option 3: From Source</h3>
        <CodeBlock code={`git clone https://github.com/openjewbot/jewbot.git
cd jewbot/cli && npm install && npm run build
npm link
jewbot onboard`} />

        <h2>First Run</h2>
        <p>After installation, run the onboarding wizard:</p>
        <CodeBlock code="jewbot onboard" />
        <p>
          The wizard will ask for your OpenAI API key and preferences. 
          Don't worry, your key is stored locally and never shared.
        </p>

        <h2>Start Chatting</h2>
        <p>Once set up, just run:</p>
        <CodeBlock code="jewbot" />
        <p>And your personal Jew is ready to help!</p>
      </>
    )
  },
  'quick-start': {
    title: 'Quick Start',
    content: (
      <>
        <h1>Quick Start</h1>
        <p>For those who don't have time to read (we understand, you're busy making money).</p>

        <h2>30-Second Setup</h2>
        <CodeBlock code={`# Install
npm i -g jewbot

# Setup (need OpenAI API key)
jewbot onboard

# Chat
jewbot`} />

        <h2>Common Commands</h2>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Command</th>
              <th>What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><code>jewbot</code></td><td>Start interactive chat</td></tr>
            <tr><td><code>jewbot ask "question"</code></td><td>Quick question</td></tr>
            <tr><td><code>jewbot swap 5 SOL USDC</code></td><td>Swap tokens</td></tr>
            <tr><td><code>jewbot balance</code></td><td>Check wallet</td></tr>
            <tr><td><code>jewbot portfolio</code></td><td>Analyze portfolio</td></tr>
            <tr><td><code>jewbot config --list</code></td><td>View settings</td></tr>
          </tbody>
        </table>

        <h2>Example Conversation</h2>
        <div className="doc-terminal">
          <div className="terminal-line user">You: Should I buy Bitcoin?</div>
          <div className="terminal-line bot">
            JEWBOT: Oy, Bitcoin! Listen bubeleh, it's like my Aunt Rivka's 
            matzo ball soup - sometimes it's perfect, sometimes it burns. 
            Only invest what you can afford to lose. Maybe 5-10% of your portfolio? 
            And please, don't tell your mother I said to gamble.
          </div>
        </div>
      </>
    )
  },
  'chat-apps': {
    title: 'Any Chat App',
    content: (
      <>
        <h1>Any Chat App</h1>
        <p>
          Your personal Jew works in DMs and group chats. He's always there, 
          like a good neighbor, but for your finances.
        </p>

        <h2>Supported Platforms</h2>
        <ul>
          <li><strong>Telegram</strong> — DMs and group chats</li>
          <li><strong>Discord</strong> — Servers and DMs</li>
          <li><strong>WhatsApp</strong> — Personal and business</li>
          <li><strong>CLI</strong> — Terminal interface</li>
        </ul>

        <h2>How It Works</h2>
        <p>
          JEWBOT uses the OpenClaw gateway to bridge multiple chat platforms. 
          This means you can talk to the same assistant from any app, 
          and it remembers your conversation across all of them.
        </p>

        <div className="doc-diagram">
          <pre>{`
  Telegram ─┐
            │
  Discord ──┼──▶ JEWBOT Gateway ──▶ AI Brain
            │
  WhatsApp ─┘
          `}</pre>
        </div>

        <h2>Setting Up Integrations</h2>
        <p>See the specific integration guides:</p>
        <ul>
          <li><a href="/docs/telegram">Telegram Setup</a></li>
          <li><a href="/docs/discord">Discord Setup</a></li>
          <li><a href="/docs/whatsapp">WhatsApp Setup</a></li>
        </ul>
      </>
    )
  },
  'financial-advisor': {
    title: 'Financial Advisor',
    content: (
      <>
        <h1>Financial Advisor</h1>
        <p>
          Like having a Jewish banker uncle. He knows money, he knows markets, 
          and he'll tell you what to do. For a small fee, of course.
        </p>

        <h2>What JEWBOT Can Do</h2>
        
        <h3>Portfolio Analysis</h3>
        <p>Get a comprehensive view of your holdings:</p>
        <CodeBlock code="jewbot portfolio" />
        <p>JEWBOT will analyze your portfolio and give you advice like:</p>
        <div className="doc-terminal">
          <div className="terminal-line bot">
            "Oy vey, bubeleh! 80% in memecoins? What are you, meshuggeneh? 
            Let's diversify - some SOL, some stables. Your mother would plotz 
            if she saw this portfolio!"
          </div>
        </div>

        <h3>Market Insights</h3>
        <p>Ask about any token or market condition:</p>
        <CodeBlock code='jewbot ask "What do you think about SOL?"' />

        <h3>Risk Assessment</h3>
        <p>JEWBOT will always warn you about risks (like a good Jewish mother):</p>
        <ul>
          <li>Volatility warnings</li>
          <li>Liquidity analysis</li>
          <li>Rug pull detection</li>
          <li>Smart contract risks</li>
        </ul>

        <h2>Financial Wisdom</h2>
        <blockquote className="doc-quote">
          "A fool and his money are soon parted. Don't be a fool, bubeleh."
        </blockquote>
      </>
    )
  },
  'persistent-memory': {
    title: 'Persistent Memory',
    content: (
      <>
        <h1>Persistent Memory</h1>
        <p>
          Remembers everything about you, your portfolio, your preferences. 
          No need to repeat yourself, he's not getting younger.
        </p>

        <h2>What JEWBOT Remembers</h2>
        <ul>
          <li><strong>Your name</strong> — So he can call you bubeleh properly</li>
          <li><strong>Portfolio history</strong> — Tracks your gains and losses</li>
          <li><strong>Preferences</strong> — Risk tolerance, favorite tokens</li>
          <li><strong>Conversation context</strong> — No need to repeat yourself</li>
        </ul>

        <h2>Memory Storage</h2>
        <p>All memory is stored locally on your machine:</p>
        <ul>
          <li><strong>macOS/Linux:</strong> <code>~/.config/jewbot-nodejs/</code></li>
          <li><strong>Windows:</strong> <code>%APPDATA%\jewbot-nodejs\</code></li>
        </ul>

        <h2>Clearing Memory</h2>
        <p>To start fresh (like after a bad trade you want to forget):</p>
        <CodeBlock code="jewbot config --set memory=clear" />

        <h2>Privacy</h2>
        <p>
          Your data never leaves your machine. JEWBOT is like a good Jewish doctor - 
          confidentiality is sacred.
        </p>
      </>
    )
  },
  'browser-control': {
    title: 'Browser Control',
    content: (
      <>
        <h1>Browser Control</h1>
        <p>
          He'll haggle for you online, fill out forms, find the best deals. 
          Just tell him what you need, and he'll make it happen.
        </p>

        <h2>What JEWBOT Can Do</h2>
        <ul>
          <li>Navigate websites</li>
          <li>Fill out forms</li>
          <li>Extract data from pages</li>
          <li>Compare prices (he loves a good deal)</li>
          <li>Monitor changes</li>
        </ul>

        <h2>Example Commands</h2>
        <CodeBlock code='jewbot ask "Find me the cheapest flight to Tel Aviv"' />
        <CodeBlock code='jewbot ask "Check the current gas fees on Ethereum"' />

        <h2>Security</h2>
        <p>
          Browser control runs in a sandboxed environment. JEWBOT can see 
          but not touch your passwords or sensitive data. He's trustworthy, 
          but we're not meshuggeneh.
        </p>
      </>
    )
  },
  'system-access': {
    title: 'Full System Access',
    content: (
      <>
        <h1>Full System Access</h1>
        <p>
          Read files, run commands, execute scripts. He's got the keys to 
          the kingdom, but don't worry, he's trustworthy. Mostly.
        </p>

        <h2>Capabilities</h2>
        <ul>
          <li><strong>File Operations</strong> — Read, write, organize files</li>
          <li><strong>Command Execution</strong> — Run shell commands</li>
          <li><strong>Script Execution</strong> — Python, Node.js, Bash</li>
          <li><strong>System Information</strong> — CPU, memory, disk usage</li>
        </ul>

        <h2>Safety Features</h2>
        <p>JEWBOT asks for confirmation before:</p>
        <ul>
          <li>Deleting files</li>
          <li>Running potentially dangerous commands</li>
          <li>Modifying system settings</li>
          <li>Spending your money (always asks twice)</li>
        </ul>

        <h2>Permission Levels</h2>
        <CodeBlock code={`jewbot config --set systemAccess=full    # Full access
jewbot config --set systemAccess=limited # Read-only
jewbot config --set systemAccess=none    # Disabled`} />
      </>
    )
  },
  'skills-plugins': {
    title: 'Skills & Plugins',
    content: (
      <>
        <h1>Skills & Plugins</h1>
        <p>
          Extend with community skills or build your own. 
          The more skills, the more money. It's a simple equation, bubeleh.
        </p>

        <h2>Available Skills</h2>
        <ul>
          <li><strong>DeFi Skill</strong> — Yield farming, liquidity pools</li>
          <li><strong>NFT Skill</strong> — Collection tracking, floor prices</li>
          <li><strong>News Skill</strong> — Crypto news aggregation</li>
          <li><strong>Calendar Skill</strong> — Token unlocks, events</li>
        </ul>

        <h2>Installing Skills</h2>
        <CodeBlock code="jewbot skills install defi" />

        <h2>Creating Your Own</h2>
        <p>Skills are just JavaScript/TypeScript modules:</p>
        <CodeBlock code={`// my-skill.ts
export default {
  name: 'my-skill',
  commands: {
    'do-something': async (args) => {
      // Your logic here
      return 'Done!'
    }
  }
}`} />

        <h2>Sharing Skills</h2>
        <p>
          Publish to npm and share with the community. 
          Who knows, maybe you'll make some gelt!
        </p>
      </>
    )
  },
  'telegram': {
    title: 'Telegram Integration',
    content: (
      <>
        <h1>Telegram Integration</h1>
        <p>Connect JEWBOT to Telegram for on-the-go financial wisdom.</p>

        <h2>Setup Steps</h2>
        
        <h3>1. Create a Telegram Bot</h3>
        <ol>
          <li>Open Telegram and search for <code>@BotFather</code></li>
          <li>Send <code>/newbot</code></li>
          <li>Follow the prompts to name your bot</li>
          <li>Copy the API token (looks like <code>123456789:ABC...</code>)</li>
        </ol>

        <h3>2. Configure JEWBOT</h3>
        <CodeBlock code="jewbot config --set telegram.token=YOUR_BOT_TOKEN" />

        <h3>3. Start the Gateway</h3>
        <CodeBlock code="jewbot gateway --telegram" />

        <h2>Features</h2>
        <ul>
          <li>Direct messages</li>
          <li>Group chats (mention-based)</li>
          <li>Inline commands</li>
          <li>Media support (images, documents)</li>
        </ul>

        <h2>Commands</h2>
        <table className="doc-table">
          <thead>
            <tr><th>Command</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>/start</code></td><td>Initialize bot</td></tr>
            <tr><td><code>/help</code></td><td>Show help</td></tr>
            <tr><td><code>/balance</code></td><td>Check balance</td></tr>
            <tr><td><code>/swap</code></td><td>Swap tokens</td></tr>
          </tbody>
        </table>
      </>
    )
  },
  'discord': {
    title: 'Discord Integration',
    content: (
      <>
        <h1>Discord Integration</h1>
        <p>Add JEWBOT to your Discord server for community financial advice.</p>

        <h2>Setup Steps</h2>
        
        <h3>1. Create a Discord Application</h3>
        <ol>
          <li>Go to <a href="https://discord.com/developers/applications" target="_blank">Discord Developer Portal</a></li>
          <li>Click "New Application"</li>
          <li>Name it "JEWBOT" (or whatever you like)</li>
          <li>Go to "Bot" section and click "Add Bot"</li>
          <li>Copy the token</li>
        </ol>

        <h3>2. Set Permissions</h3>
        <p>Enable these intents:</p>
        <ul>
          <li>Message Content Intent</li>
          <li>Server Members Intent</li>
        </ul>

        <h3>3. Invite to Server</h3>
        <p>Go to OAuth2 → URL Generator:</p>
        <ul>
          <li>Scopes: <code>bot</code>, <code>applications.commands</code></li>
          <li>Permissions: <code>Send Messages</code>, <code>Read Message History</code></li>
        </ul>

        <h3>4. Configure JEWBOT</h3>
        <CodeBlock code="jewbot config --set discord.token=YOUR_BOT_TOKEN" />

        <h3>5. Start the Gateway</h3>
        <CodeBlock code="jewbot gateway --discord" />

        <h2>Slash Commands</h2>
        <ul>
          <li><code>/ask [question]</code> — Ask JEWBOT anything</li>
          <li><code>/balance</code> — Check wallet balance</li>
          <li><code>/swap [amount] [from] [to]</code> — Swap tokens</li>
          <li><code>/portfolio</code> — View portfolio</li>
        </ul>
      </>
    )
  },
  'whatsapp': {
    title: 'WhatsApp Integration',
    content: (
      <>
        <h1>WhatsApp Integration</h1>
        <p>Connect JEWBOT to WhatsApp using the OpenClaw bridge.</p>

        <h2>Requirements</h2>
        <ul>
          <li>WhatsApp account</li>
          <li>Phone with WhatsApp installed</li>
          <li>Computer running JEWBOT gateway</li>
        </ul>

        <h2>Setup Steps</h2>
        
        <h3>1. Start Gateway with WhatsApp</h3>
        <CodeBlock code="jewbot gateway --whatsapp" />

        <h3>2. Scan QR Code</h3>
        <p>A QR code will appear in your terminal. Scan it with WhatsApp:</p>
        <ol>
          <li>Open WhatsApp on your phone</li>
          <li>Go to Settings → Linked Devices</li>
          <li>Tap "Link a Device"</li>
          <li>Scan the QR code</li>
        </ol>

        <h3>3. Start Chatting</h3>
        <p>
          Send a message to yourself or have someone message your number. 
          JEWBOT will respond!
        </p>

        <h2>Security Note</h2>
        <p>
          WhatsApp integration uses WhatsApp Web protocol. Your messages 
          are end-to-end encrypted. JEWBOT only sees the messages you send to it.
        </p>
      </>
    )
  },
  'solana': {
    title: 'Solana Integration',
    content: (
      <>
        <h1>Solana Integration</h1>
        <p>JEWBOT's native blockchain. Fast, cheap, and efficient — like a good deal.</p>

        <h2>Features</h2>
        <ul>
          <li>Token swaps via Jupiter</li>
          <li>Balance checking</li>
          <li>Transaction history</li>
          <li>NFT support</li>
          <li>DeFi protocols</li>
        </ul>

        <h2>Wallet Setup</h2>
        <p>JEWBOT can use your existing wallet or create a new one:</p>
        <CodeBlock code="jewbot wallet setup" />

        <h2>Swapping Tokens</h2>
        <CodeBlock code="jewbot swap 5 SOL USDC" />
        <p>JEWBOT will:</p>
        <ol>
          <li>Find the best rate across DEXes</li>
          <li>Show you the quote</li>
          <li>Ask for confirmation</li>
          <li>Execute the swap</li>
        </ol>

        <h2>Supported DEXes</h2>
        <ul>
          <li>Jupiter (aggregator)</li>
          <li>Raydium</li>
          <li>Orca</li>
          <li>Serum</li>
        </ul>

        <h2>RPC Configuration</h2>
        <CodeBlock code="jewbot config --set solanaRpc=YOUR_RPC_URL" />
        <p>Default: <code>https://api.mainnet-beta.solana.com</code></p>
      </>
    )
  },
  'cli-overview': {
    title: 'CLI Overview',
    content: (
      <>
        <h1>CLI Reference</h1>
        <p>Complete reference for all JEWBOT commands.</p>

        <h2>Global Options</h2>
        <table className="doc-table">
          <thead>
            <tr><th>Option</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--help, -h</code></td><td>Show help</td></tr>
            <tr><td><code>--version, -v</code></td><td>Show version</td></tr>
            <tr><td><code>--verbose</code></td><td>Verbose output</td></tr>
          </tbody>
        </table>

        <h2>Commands</h2>
        <ul>
          <li><a href="/docs/cli-onboard">jewbot onboard</a> — Initial setup</li>
          <li><a href="/docs/cli-chat">jewbot chat</a> — Interactive chat</li>
          <li><a href="/docs/cli-ask">jewbot ask</a> — Quick question</li>
          <li><a href="/docs/cli-swap">jewbot swap</a> — Token swaps</li>
          <li><a href="/docs/cli-balance">jewbot balance</a> — Check balance</li>
          <li><a href="/docs/cli-portfolio">jewbot portfolio</a> — Portfolio analysis</li>
          <li><a href="/docs/cli-config">jewbot config</a> — Configuration</li>
        </ul>
      </>
    )
  },
  'cli-onboard': {
    title: 'jewbot onboard',
    content: (
      <>
        <h1>jewbot onboard</h1>
        <p>Set up JEWBOT with your API keys and preferences.</p>

        <h2>Usage</h2>
        <CodeBlock code="jewbot onboard" />

        <h2>What It Does</h2>
        <ol>
          <li>Asks for your OpenAI API key</li>
          <li>Lets you choose the AI model</li>
          <li>Sets your preferred name</li>
          <li>Optionally enables crypto features</li>
          <li>Validates everything works</li>
        </ol>

        <h2>Re-running Onboard</h2>
        <p>You can run onboard again anytime to change settings:</p>
        <CodeBlock code="jewbot onboard" />
      </>
    )
  },
  'faq': {
    title: 'FAQ',
    content: (
      <>
        <h1>Frequently Asked Questions</h1>

        <h2>General</h2>
        
        <h3>Is JEWBOT free?</h3>
        <p>
          JEWBOT itself is free and open source. However, you need an OpenAI API key, 
          which has its own costs (usually a few cents per conversation).
        </p>

        <h3>Is my data safe?</h3>
        <p>
          Yes! All data is stored locally on your machine. JEWBOT never sends 
          your private keys or sensitive data anywhere except to the AI provider 
          for processing your requests.
        </p>

        <h3>Why Jewish?</h3>
        <p>
          Because Jewish culture has thousands of years of financial wisdom, 
          and because humor makes everything better. Even losses.
        </p>

        <h2>Technical</h2>

        <h3>Which AI models are supported?</h3>
        <ul>
          <li>GPT-4o (recommended)</li>
          <li>GPT-4o Mini</li>
          <li>GPT-4 Turbo</li>
        </ul>

        <h3>Can I use Claude or other models?</h3>
        <p>
          Coming soon! We're working on support for Anthropic Claude 
          and local models.
        </p>

        <h3>How do I update JEWBOT?</h3>
        <CodeBlock code="npm update -g jewbot" />
      </>
    )
  },
  'onboarding': {
    title: 'Onboarding Wizard',
    content: (
      <>
        <h1>Onboarding Wizard</h1>
        <p>The onboarding wizard guides you through JEWBOT setup step by step.</p>

        <h2>Starting the Wizard</h2>
        <CodeBlock code="jewbot onboard" />

        <h2>What You'll Configure</h2>
        
        <h3>Step 1: API Key</h3>
        <p>Enter your OpenAI API key. Get one at <a href="https://platform.openai.com/api-keys" target="_blank">platform.openai.com</a></p>
        
        <h3>Step 2: Choose Model</h3>
        <ul>
          <li><strong>GPT-4o</strong> — Best quality, recommended</li>
          <li><strong>GPT-4o Mini</strong> — Faster and cheaper</li>
          <li><strong>GPT-4 Turbo</strong> — Good balance</li>
        </ul>

        <h3>Step 3: Your Name</h3>
        <p>Tell JEWBOT what to call you (default: "bubeleh")</p>

        <h3>Step 4: Crypto Features</h3>
        <p>Enable Solana swaps, balance checks, and portfolio tracking</p>

        <h2>Re-running Onboarding</h2>
        <p>You can run the wizard again anytime to change settings:</p>
        <CodeBlock code="jewbot onboard" />
      </>
    )
  },
  'cli-chat': {
    title: 'jewbot chat',
    content: (
      <>
        <h1>jewbot chat</h1>
        <p>Start an interactive conversation with your personal Jewish assistant.</p>

        <h2>Usage</h2>
        <CodeBlock code="jewbot chat" />

        <h2>Options</h2>
        <table className="doc-table">
          <thead>
            <tr><th>Option</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>-m, --message</code></td><td>Send a single message</td></tr>
          </tbody>
        </table>

        <h2>Interactive Commands</h2>
        <ul>
          <li><code>exit</code> — Leave the chat</li>
          <li><code>clear</code> — Clear conversation history</li>
        </ul>

        <h2>Example</h2>
        <div className="doc-terminal">
          <div className="terminal-line user">You: What's a good investment strategy?</div>
          <div className="terminal-line bot">
            JEWBOT: Oy, bubeleh! First rule - never invest money you can't afford to lose.
            Diversify like a Seder plate - a little of everything. Index funds for stability,
            maybe 10% in crypto if you're feeling adventurous. And always keep 6 months
            expenses in savings. Your grandmother would be proud!
          </div>
        </div>
      </>
    )
  },
  'cli-ask': {
    title: 'jewbot ask',
    content: (
      <>
        <h1>jewbot ask</h1>
        <p>Ask JEWBOT a quick question without starting interactive mode.</p>

        <h2>Usage</h2>
        <CodeBlock code='jewbot ask "your question here"' />

        <h2>Examples</h2>
        <CodeBlock code={`jewbot ask "Should I buy Bitcoin?"
jewbot ask "What's the current SOL price?"
jewbot ask "Explain DeFi to me like I'm 5"`} />

        <h2>Tips</h2>
        <ul>
          <li>Use quotes around your question</li>
          <li>Great for quick lookups</li>
          <li>Doesn't save conversation history</li>
        </ul>
      </>
    )
  },
  'cli-swap': {
    title: 'jewbot swap',
    content: (
      <>
        <h1>jewbot swap</h1>
        <p>Swap tokens on Solana directly from your terminal.</p>

        <h2>Usage</h2>
        <CodeBlock code="jewbot swap <amount> <from> <to>" />

        <h2>Examples</h2>
        <CodeBlock code={`jewbot swap 5 SOL USDC
jewbot swap 100 USDC SOL
jewbot swap 1000 BONK SOL`} />

        <h2>How It Works</h2>
        <ol>
          <li>JEWBOT finds the best rate across DEXes (Jupiter aggregator)</li>
          <li>Shows you the quote with fees</li>
          <li>Asks for confirmation</li>
          <li>Executes the swap</li>
          <li>Reports the transaction</li>
        </ol>

        <h2>Supported Tokens</h2>
        <p>Any SPL token on Solana! Popular ones:</p>
        <ul>
          <li>SOL, USDC, USDT</li>
          <li>BONK, WIF, JUP</li>
          <li>RAY, ORCA, MNGO</li>
        </ul>
      </>
    )
  },
  'cli-balance': {
    title: 'jewbot balance',
    content: (
      <>
        <h1>jewbot balance</h1>
        <p>Check your wallet balance on Solana.</p>

        <h2>Usage</h2>
        <CodeBlock code="jewbot balance" />

        <h2>Output</h2>
        <div className="doc-terminal">
          <div className="terminal-line bot">
            Shalom! Here's your balance, bubeleh:<br/><br/>
            SOL: 12.5 (~$1,875)<br/>
            USDC: 500.00<br/>
            BONK: 1,000,000 (~$25)<br/><br/>
            Total: ~$2,400<br/>
            Not bad! Your mother would be proud.
          </div>
        </div>

        <h2>Options</h2>
        <table className="doc-table">
          <thead>
            <tr><th>Option</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td><code>--detailed</code></td><td>Show all tokens including dust</td></tr>
            <tr><td><code>--usd</code></td><td>Show USD values only</td></tr>
          </tbody>
        </table>
      </>
    )
  },
  'cli-portfolio': {
    title: 'jewbot portfolio',
    content: (
      <>
        <h1>jewbot portfolio</h1>
        <p>Get a comprehensive analysis of your crypto holdings.</p>

        <h2>Usage</h2>
        <CodeBlock code="jewbot portfolio" />

        <h2>What You Get</h2>
        <ul>
          <li>Asset allocation breakdown</li>
          <li>Performance over time</li>
          <li>Risk assessment</li>
          <li>Diversification score</li>
          <li>Personalized recommendations</li>
        </ul>

        <h2>Example Output</h2>
        <div className="doc-terminal">
          <div className="terminal-line bot">
            Portfolio Analysis for bubeleh:<br/><br/>
            📊 Allocation:<br/>
            - SOL: 60% (oy, that's a lot of eggs in one basket!)<br/>
            - Stables: 25% (smart, very smart)<br/>
            - Memecoins: 15% (gambling gelt, I see)<br/><br/>
            📈 30-Day Performance: +12%<br/>
            ⚠️ Risk Level: Medium-High<br/><br/>
            My advice? Maybe move some SOL to stables.
            The market is meshuggeneh right now!
          </div>
        </div>
      </>
    )
  },
  'cli-config': {
    title: 'jewbot config',
    content: (
      <>
        <h1>jewbot config</h1>
        <p>View and modify JEWBOT configuration.</p>

        <h2>Usage</h2>
        <CodeBlock code={`jewbot config --list          # Show all settings
jewbot config --get <key>     # Get specific setting
jewbot config --set key=value # Set a value`} />

        <h2>Available Settings</h2>
        <table className="doc-table">
          <thead>
            <tr><th>Key</th><th>Description</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td><code>model</code></td><td>AI model to use</td><td>gpt-4o</td></tr>
            <tr><td><code>userName</code></td><td>What JEWBOT calls you</td><td>bubeleh</td></tr>
            <tr><td><code>enableCrypto</code></td><td>Enable crypto features</td><td>true</td></tr>
            <tr><td><code>solanaRpc</code></td><td>Solana RPC endpoint</td><td>mainnet</td></tr>
          </tbody>
        </table>

        <h2>Examples</h2>
        <CodeBlock code={`jewbot config --set model=gpt-4o-mini
jewbot config --set userName=David
jewbot config --get model`} />
      </>
    )
  },
  'ethereum': {
    title: 'Ethereum Integration',
    content: (
      <>
        <h1>Ethereum Integration</h1>
        <p>Connect JEWBOT to the Ethereum network.</p>

        <h2>Features</h2>
        <ul>
          <li>ETH balance checking</li>
          <li>ERC-20 token tracking</li>
          <li>Gas price monitoring</li>
          <li>Transaction history</li>
        </ul>

        <h2>Setup</h2>
        <CodeBlock code="jewbot config --set ethereumRpc=YOUR_RPC_URL" />

        <h2>Recommended RPCs</h2>
        <ul>
          <li><strong>Alchemy</strong> — <a href="https://alchemy.com" target="_blank">alchemy.com</a></li>
          <li><strong>Infura</strong> — <a href="https://infura.io" target="_blank">infura.io</a></li>
          <li><strong>QuickNode</strong> — <a href="https://quicknode.com" target="_blank">quicknode.com</a></li>
        </ul>

        <h2>Commands</h2>
        <CodeBlock code={`jewbot ask "What's my ETH balance?"
jewbot ask "Check gas prices"
jewbot ask "Show my ERC-20 tokens"`} />
      </>
    )
  },
  'binance': {
    title: 'Binance Integration',
    content: (
      <>
        <h1>Binance Integration</h1>
        <p>Connect your Binance account for CEX trading features.</p>

        <h2>Setup</h2>
        <ol>
          <li>Go to <a href="https://www.binance.com/en/my/settings/api-management" target="_blank">Binance API Management</a></li>
          <li>Create a new API key</li>
          <li>Enable "Spot Trading" permission</li>
          <li>Copy API Key and Secret</li>
        </ol>

        <h2>Configure JEWBOT</h2>
        <CodeBlock code={`jewbot config --set binance.apiKey=YOUR_API_KEY
jewbot config --set binance.secret=YOUR_SECRET`} />

        <h2>Features</h2>
        <ul>
          <li>Check spot balances</li>
          <li>View open orders</li>
          <li>Price alerts</li>
          <li>Trading history</li>
        </ul>

        <h2>Security Note</h2>
        <p>
          Never enable withdrawal permissions on your API key!
          JEWBOT only needs read access for most features.
        </p>
      </>
    )
  },
  'coingecko': {
    title: 'CoinGecko Integration',
    content: (
      <>
        <h1>CoinGecko Integration</h1>
        <p>Get real-time crypto prices and market data from CoinGecko.</p>

        <h2>Features</h2>
        <ul>
          <li>Real-time prices for 10,000+ coins</li>
          <li>Market cap rankings</li>
          <li>24h volume data</li>
          <li>Historical price charts</li>
          <li>Trending coins</li>
        </ul>

        <h2>No Setup Required!</h2>
        <p>CoinGecko integration works out of the box. Just ask:</p>

        <h2>Example Commands</h2>
        <CodeBlock code={`jewbot ask "What's the price of Bitcoin?"
jewbot ask "Show me top 10 coins by market cap"
jewbot ask "What's trending in crypto today?"
jewbot ask "Compare SOL vs ETH price this week"`} />

        <h2>Pro API (Optional)</h2>
        <p>For higher rate limits:</p>
        <CodeBlock code="jewbot config --set coingecko.apiKey=YOUR_PRO_KEY" />
      </>
    )
  },
  'dexscreener': {
    title: 'DexScreener Integration',
    content: (
      <>
        <h1>DexScreener Integration</h1>
        <p>Track DEX pairs and find new token opportunities.</p>

        <h2>Features</h2>
        <ul>
          <li>Real-time DEX pair data</li>
          <li>New pair alerts</li>
          <li>Liquidity tracking</li>
          <li>Volume analysis</li>
          <li>Multi-chain support</li>
        </ul>

        <h2>No Setup Required!</h2>
        <p>DexScreener works automatically. Just ask:</p>

        <h2>Example Commands</h2>
        <CodeBlock code={`jewbot ask "Find new Solana pairs in last hour"
jewbot ask "Show BONK/SOL pair info"
jewbot ask "What's the liquidity on this token?"
jewbot ask "Is this token safe? [address]"`} />

        <h2>Token Analysis</h2>
        <p>JEWBOT can analyze tokens for potential risks:</p>
        <ul>
          <li>Liquidity locked?</li>
          <li>Honeypot detection</li>
          <li>Top holders analysis</li>
          <li>Contract verification</li>
        </ul>
      </>
    )
  },
  'wallet-setup': {
    title: 'Wallet Setup',
    content: (
      <>
        <h1>Wallet Setup</h1>
        <p>Configure your wallet for crypto features.</p>

        <h2>Option 1: Import Existing Wallet</h2>
        <CodeBlock code="jewbot wallet import" />
        <p>You'll be asked for your private key or seed phrase.</p>

        <h2>Option 2: Create New Wallet</h2>
        <CodeBlock code="jewbot wallet create" />
        <p>JEWBOT will generate a new wallet and show you the seed phrase.</p>

        <h2>Security Best Practices</h2>
        <ul>
          <li>Never share your seed phrase</li>
          <li>Use a dedicated wallet for JEWBOT</li>
          <li>Start with small amounts</li>
          <li>Keep backups in a safe place</li>
        </ul>

        <h2>Supported Networks</h2>
        <ul>
          <li><strong>Solana</strong> — Full support (swaps, DeFi)</li>
          <li><strong>Ethereum</strong> — Read-only (coming soon)</li>
        </ul>
      </>
    )
  },
  'swaps': {
    title: 'Token Swaps',
    content: (
      <>
        <h1>Token Swaps</h1>
        <p>Swap tokens on Solana with the best rates.</p>

        <h2>How It Works</h2>
        <p>JEWBOT uses Jupiter aggregator to find the best swap route across all Solana DEXes.</p>

        <h2>Basic Swap</h2>
        <CodeBlock code="jewbot swap 5 SOL USDC" />

        <h2>Swap Flow</h2>
        <ol>
          <li>You request a swap</li>
          <li>JEWBOT fetches quotes from Jupiter</li>
          <li>Shows you the best rate and fees</li>
          <li>You confirm or cancel</li>
          <li>Transaction is executed</li>
          <li>JEWBOT reports the result</li>
        </ol>

        <h2>Slippage Settings</h2>
        <CodeBlock code="jewbot config --set slippage=0.5" />
        <p>Default slippage is 0.5%. Increase for volatile tokens.</p>

        <h2>Supported DEXes</h2>
        <p>Via Jupiter aggregator:</p>
        <ul>
          <li>Raydium, Orca, Serum</li>
          <li>Meteora, Phoenix, Lifinity</li>
          <li>And 20+ more!</li>
        </ul>
      </>
    )
  },
  'portfolio-tracking': {
    title: 'Portfolio Tracking',
    content: (
      <>
        <h1>Portfolio Tracking</h1>
        <p>Monitor your crypto portfolio with Jewish precision.</p>

        <h2>Features</h2>
        <ul>
          <li>Real-time portfolio value</li>
          <li>Asset allocation charts</li>
          <li>P&L tracking</li>
          <li>Historical performance</li>
          <li>Tax reporting helpers</li>
        </ul>

        <h2>View Portfolio</h2>
        <CodeBlock code="jewbot portfolio" />

        <h2>Track Specific Metrics</h2>
        <CodeBlock code={`jewbot ask "What's my portfolio worth?"
jewbot ask "Show my 7-day performance"
jewbot ask "What's my biggest winner this month?"`} />

        <h2>Alerts</h2>
        <p>Set alerts for portfolio changes:</p>
        <CodeBlock code={`jewbot ask "Alert me if portfolio drops 10%"
jewbot ask "Notify when SOL hits $200"`} />
      </>
    )
  },
  'price-alerts': {
    title: 'Price Alerts',
    content: (
      <>
        <h1>Price Alerts</h1>
        <p>Never miss a price movement again!</p>

        <h2>Setting Alerts</h2>
        <CodeBlock code={`jewbot ask "Alert me when BTC hits 100k"
jewbot ask "Notify if SOL drops below 100"
jewbot ask "Tell me when ETH moves 5% in an hour"`} />

        <h2>Alert Types</h2>
        <ul>
          <li><strong>Price Target</strong> — Specific price level</li>
          <li><strong>Percentage Change</strong> — % move in timeframe</li>
          <li><strong>Volume Spike</strong> — Unusual trading volume</li>
        </ul>

        <h2>Managing Alerts</h2>
        <CodeBlock code={`jewbot ask "Show my active alerts"
jewbot ask "Cancel all BTC alerts"
jewbot ask "Pause alerts for 24 hours"`} />

        <h2>Delivery</h2>
        <p>Alerts are delivered via your configured chat app (Telegram, Discord, etc.)</p>
      </>
    )
  },
  'defi': {
    title: 'DeFi Integration',
    content: (
      <>
        <h1>DeFi Integration</h1>
        <p>Access DeFi protocols through natural language.</p>

        <h2>Supported Protocols</h2>
        <ul>
          <li><strong>Lending</strong> — Solend, MarginFi</li>
          <li><strong>DEXes</strong> — Raydium, Orca</li>
          <li><strong>Yield</strong> — Marinade, Jito</li>
          <li><strong>NFTs</strong> — Magic Eden, Tensor</li>
        </ul>

        <h2>Example Commands</h2>
        <CodeBlock code={`jewbot ask "What's the best SOL staking yield?"
jewbot ask "Show me lending rates on Solend"
jewbot ask "Find arbitrage opportunities"
jewbot ask "What's the floor price of Mad Lads?"`} />

        <h2>Safety Features</h2>
        <p>JEWBOT always warns you about:</p>
        <ul>
          <li>Smart contract risks</li>
          <li>Impermanent loss potential</li>
          <li>Protocol TVL changes</li>
          <li>Audit status</li>
        </ul>
      </>
    )
  },
  'config-file': {
    title: 'Config File',
    content: (
      <>
        <h1>Configuration File</h1>
        <p>JEWBOT stores configuration in a JSON file.</p>

        <h2>Location</h2>
        <ul>
          <li><strong>macOS/Linux:</strong> <code>~/.config/jewbot-nodejs/config.json</code></li>
          <li><strong>Windows:</strong> <code>%APPDATA%\jewbot-nodejs\Config\config.json</code></li>
        </ul>

        <h2>Example Config</h2>
        <CodeBlock code={`{
  "openaiKey": "sk-...",
  "model": "gpt-4o",
  "userName": "bubeleh",
  "enableCrypto": true,
  "solanaRpc": "https://api.mainnet-beta.solana.com",
  "slippage": 0.5
}`} />

        <h2>Editing</h2>
        <p>Use the CLI commands or edit the file directly:</p>
        <CodeBlock code="jewbot config --list" />
      </>
    )
  },
  'api-keys': {
    title: 'API Keys',
    content: (
      <>
        <h1>API Keys</h1>
        <p>Configure the API keys JEWBOT needs.</p>

        <h2>Required</h2>
        <table className="doc-table">
          <thead>
            <tr><th>Service</th><th>Purpose</th><th>Get It</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenAI</td>
              <td>AI responses</td>
              <td><a href="https://platform.openai.com/api-keys" target="_blank">platform.openai.com</a></td>
            </tr>
          </tbody>
        </table>

        <h2>Optional</h2>
        <table className="doc-table">
          <thead>
            <tr><th>Service</th><th>Purpose</th><th>Get It</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Helius</td>
              <td>Better Solana RPC</td>
              <td><a href="https://helius.dev" target="_blank">helius.dev</a></td>
            </tr>
            <tr>
              <td>CoinGecko Pro</td>
              <td>Higher rate limits</td>
              <td><a href="https://coingecko.com/api" target="_blank">coingecko.com</a></td>
            </tr>
            <tr>
              <td>Telegram Bot</td>
              <td>Telegram integration</td>
              <td>@BotFather on Telegram</td>
            </tr>
          </tbody>
        </table>

        <h2>Security</h2>
        <p>API keys are stored locally and never transmitted except to their respective services.</p>
      </>
    )
  },
  'models': {
    title: 'AI Models',
    content: (
      <>
        <h1>AI Models</h1>
        <p>Choose the AI model that powers JEWBOT.</p>

        <h2>Available Models</h2>
        <table className="doc-table">
          <thead>
            <tr><th>Model</th><th>Speed</th><th>Quality</th><th>Cost</th></tr>
          </thead>
          <tbody>
            <tr><td>GPT-4o</td><td>Fast</td><td>Best</td><td>$$</td></tr>
            <tr><td>GPT-4o Mini</td><td>Fastest</td><td>Good</td><td>$</td></tr>
            <tr><td>GPT-4 Turbo</td><td>Medium</td><td>Great</td><td>$$$</td></tr>
          </tbody>
        </table>

        <h2>Changing Models</h2>
        <CodeBlock code="jewbot config --set model=gpt-4o-mini" />

        <h2>Recommendations</h2>
        <ul>
          <li><strong>Daily use:</strong> GPT-4o (best balance)</li>
          <li><strong>Budget:</strong> GPT-4o Mini (80% cheaper)</li>
          <li><strong>Complex tasks:</strong> GPT-4 Turbo</li>
        </ul>

        <h2>Coming Soon</h2>
        <ul>
          <li>Anthropic Claude</li>
          <li>Local models (Ollama)</li>
          <li>Custom fine-tuned models</li>
        </ul>
      </>
    )
  },
  'personality': {
    title: 'Personality',
    content: (
      <>
        <h1>Personality Settings</h1>
        <p>Customize how JEWBOT talks to you.</p>

        <h2>Default Personality</h2>
        <p>JEWBOT is a warm Jewish grandmother meets Wall Street banker:</p>
        <ul>
          <li>Uses Yiddish expressions (oy vey, bubeleh, mazel tov)</li>
          <li>Gives financial advice with humor</li>
          <li>Always worries about you (like a Jewish mother)</li>
          <li>Makes self-deprecating jokes</li>
        </ul>

        <h2>Adjusting Tone</h2>
        <CodeBlock code={`jewbot config --set personality.humor=high
jewbot config --set personality.formality=casual
jewbot config --set personality.yiddish=lots`} />

        <h2>Custom Prompts</h2>
        <p>Advanced users can modify the system prompt:</p>
        <CodeBlock code="jewbot config --set customPrompt='...'" />
      </>
    )
  },
  'troubleshooting': {
    title: 'Troubleshooting',
    content: (
      <>
        <h1>Troubleshooting</h1>
        <p>Common issues and how to fix them.</p>

        <h2>API Key Issues</h2>
        <h3>"Invalid API key"</h3>
        <p>Re-run onboarding with a valid key:</p>
        <CodeBlock code="jewbot onboard" />

        <h3>"Insufficient quota"</h3>
        <p>Add credits at <a href="https://platform.openai.com/account/billing" target="_blank">OpenAI billing</a></p>

        <h2>Connection Issues</h2>
        <h3>"Network error"</h3>
        <ul>
          <li>Check your internet connection</li>
          <li>Try a different RPC endpoint</li>
          <li>Check if OpenAI is down</li>
        </ul>

        <h2>Swap Issues</h2>
        <h3>"Swap failed"</h3>
        <ul>
          <li>Increase slippage: <code>jewbot config --set slippage=1</code></li>
          <li>Check you have enough SOL for fees</li>
          <li>Try a smaller amount</li>
        </ul>

        <h2>Reset Everything</h2>
        <CodeBlock code="jewbot config --set reset=true" />

        <h2>Get Help</h2>
        <ul>
          <li>GitHub Issues: <a href="https://github.com/openjewbot/jewbot/issues">Report a bug</a></li>
          <li>Telegram: Coming soon</li>
        </ul>
      </>
    )
  },
  'support': {
    title: 'Support',
    content: (
      <>
        <h1>Support</h1>
        <p>Need help? We're here for you, bubeleh!</p>

        <h2>Community</h2>
        <ul>
          <li><strong>GitHub:</strong> <a href="https://github.com/openjewbot/jewbot" target="_blank">github.com/openjewbot/jewbot</a></li>
          <li><strong>Issues:</strong> <a href="https://github.com/openjewbot/jewbot/issues" target="_blank">Report bugs</a></li>
        </ul>

        <h2>Documentation</h2>
        <p>You're reading it! Browse the sidebar for all topics.</p>

        <h2>Contributing</h2>
        <p>Want to help improve JEWBOT?</p>
        <ol>
          <li>Fork the repo</li>
          <li>Make your changes</li>
          <li>Submit a pull request</li>
        </ol>

        <h2>Donations</h2>
        <p>If JEWBOT saved you money (or made you some), consider supporting:</p>
        <CodeBlock code="SOL: [coming soon]" />
      </>
    )
  }
}

// Code block component
function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block">
      <pre><code>{code}</code></pre>
      <button className="copy-btn" onClick={copy}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  )
}

export default function Docs() {
  const location = useLocation()
  const navigate = useNavigate()
  const [expandedSections, setExpandedSections] = useState<string[]>(['start-here', 'features', 'cli', 'integrations'])
  const [currentDoc, setCurrentDoc] = useState('introduction')

  useEffect(() => {
    // Parse URL to get current doc
    const path = location.pathname.replace('/docs/', '').replace('/docs', '')
    if (path && docContent[path]) {
      setCurrentDoc(path)
    } else if (!path || path === '') {
      setCurrentDoc('introduction')
    }
  }, [location])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const navigateToDoc = (docId: string) => {
    setCurrentDoc(docId)
    navigate(`/docs/${docId}`)
  }

  const content = docContent[currentDoc] || docContent['introduction']

  return (
    <div className="docs-container">
      {/* Sidebar */}
      <aside className="docs-sidebar">
        <div className="docs-sidebar-header">
          <a href="/" className="docs-logo">
            <img src="/jewbot-removebg-preview.png" alt="JEWBOT" />
            <span>JEWBOT</span>
          </a>
        </div>

        <nav className="docs-nav">
          {docStructure.map(section => (
            <div key={section.id} className="docs-nav-section">
              <button 
                className="docs-nav-section-header"
                onClick={() => toggleSection(section.id)}
              >
                {section.icon}
                <span>{section.title}</span>
                {expandedSections.includes(section.id) 
                  ? <ChevronDown size={14} /> 
                  : <ChevronRight size={14} />
                }
              </button>
              
              {expandedSections.includes(section.id) && section.children && (
                <ul className="docs-nav-items">
                  {section.children.map(child => (
                    <li key={child.id}>
                      <button
                        className={`docs-nav-item ${currentDoc === child.id ? 'active' : ''}`}
                        onClick={() => navigateToDoc(child.id)}
                      >
                        {child.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="docs-main">
        <div className="docs-content">
          {content.content}
        </div>
      </main>

      {/* Table of contents (right sidebar) */}
      <aside className="docs-toc">
        <div className="docs-toc-header">On this page</div>
        <nav className="docs-toc-nav">
          {/* Auto-generated from content headings */}
        </nav>
      </aside>
    </div>
  )
}

