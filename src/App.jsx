import React, { useState } from 'react';
import './App.css';
import { TrendingUp, Shield, Zap, Database, DollarSign, Smartphone, Lock, Activity, Clock, ChevronDown, ChevronRight, X, Mail, Wallet } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showMarketDetail, setShowMarketDetail] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);

  const trendingMarkets = [
    {
      category: 'POLITICS',
      title: '2024 Presidential Election',
      volume: '$45.2M',
      yes: 58,
      no: 42,
      change: '+12%'
    },
    {
      category: 'CRYPTO',
      title: 'Bitcoin to $100K by EOY',
      volume: '$28.8M',
      yes: 52,
      no: 48,
      change: '+8%'
    },
    {
      category: 'FINANCE',
      title: 'Fed Rate Cut in March',
      volume: '$18.4M',
      yes: 71,
      no: 29,
      change: '+4%'
    },
    {
      category: 'SPORTS',
      title: 'Lakers Win NBA Championship',
      volume: '$12.1M',
      yes: 34,
      no: 66,
      change: '-3%'
    },
    {
      category: 'CRYPTO',
      title: 'Ethereum ETF Approval 2025',
      volume: '$22.3M',
      yes: 67,
      no: 33,
      change: '+15%'
    },
    {
      category: 'POLITICS',
      title: 'Supreme Court Ruling',
      volume: '$16.7M',
      yes: 45,
      no: 55,
      change: '+2%'
    },
    {
      category: 'FINANCE',
      title: 'Tech Stock Rally Continues',
      volume: '$25.9M',
      yes: 62,
      no: 38,
      change: '+9%'
    },
    {
      category: 'SCIENCE',
      title: 'AI Breakthrough by EOY',
      volume: '$14.2M',
      yes: 73,
      no: 27,
      change: '+11%'
    },
    {
      category: 'ENTERTAINMENT',
      title: 'Oscar Best Picture Winner',
      volume: '$8.5M',
      yes: 41,
      no: 59,
      change: '+6%'
    }
  ];

  const features = [
    {
      icon: <Zap className="feature-icon" />,
      label: 'INSTANT',
      title: 'Instant Settlement',
      description: 'Get paid immediately when markets resolve. Automatic payouts to your wallet the moment outcomes are confirmed.'
    },
    {
      icon: <Activity className="feature-icon" />,
      label: 'LIQUIDITY',
      title: 'Deep Liquidity',
      description: 'Trade with minimal slippage on our order book system. Market makers provide consistent liquidity across all major events.'
    },
    {
      icon: <Database className="feature-icon" />,
      label: 'DATA',
      title: 'Real-Time Analytics',
      description: 'Advanced charting, historical data, and probability tracking. Make informed decisions with comprehensive market intelligence.'
    },
    {
      icon: <Shield className="feature-icon" />,
      label: 'SECURE',
      title: 'CFTC Regulated',
      description: 'Fully compliant with US regulations. Your funds held in segregated accounts with bank-grade security protocols.'
    },
    {
      icon: <Lock className="feature-icon" />,
      label: 'API',
      title: 'Trading API',
      description: 'Build automated trading strategies with our REST and WebSocket APIs. Full market access for algorithmic traders.'
    },
    {
      icon: <Smartphone className="feature-icon" />,
      label: 'MOBILE',
      title: 'Cross-Platform',
      description: 'Trade seamlessly across web, iOS, and Android. Real-time notifications keep you updated on market movements.'
    }
  ];

  const categories = [
    { name: 'Politics', count: 1247 },
    { name: 'Crypto', count: 856 },
    { name: 'Sports', count: 623 },
    { name: 'Business', count: 412 },
    { name: 'Science', count: 289 },
    { name: 'Entertainment', count: 534 }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Professional Trader',
      image: 'SC',
      rating: 5,
      text: 'Poly Governance has the best liquidity and fastest execution I\'ve seen. Made over $50K in my first 6 months trading political events.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Crypto Analyst',
      image: 'MR',
      rating: 5,
      text: 'The real-time data and analytics tools are incredible. I use the API to run my automated trading strategies with great success.'
    },
    {
      name: 'Emily Thompson',
      role: 'Sports Enthusiast',
      image: 'ET',
      rating: 5,
      text: 'Finally, a platform that combines my love for sports with smart trading. The mobile app makes it easy to trade anywhere.'
    }
  ];

  const topTraders = [
    { name: 'AlphaWolf', profit: '+$127,450', accuracy: '76%', trades: 1243 },
    { name: 'MarketMaven', profit: '+$98,320', accuracy: '72%', trades: 892 },
    { name: 'PredictorPro', profit: '+$85,670', accuracy: '69%', trades: 1567 },
    { name: 'CryptoKing', profit: '+$76,890', accuracy: '74%', trades: 734 },
    { name: 'QuantumQuant', profit: '+$65,430', accuracy: '68%', trades: 956 }
  ];

  const recentActivity = [
    { user: 'trader_xyz', action: 'bought', amount: '$5,000', market: '2024 Presidential Election', outcome: 'YES', time: '2m ago' },
    { user: 'market_pro', action: 'sold', amount: '$3,200', market: 'Bitcoin to $100K', outcome: 'NO', time: '5m ago' },
    { user: 'alpha_beta', action: 'bought', amount: '$8,500', market: 'Fed Rate Cut in March', outcome: 'YES', time: '8m ago' },
    { user: 'crypto_fan', action: 'bought', amount: '$2,100', market: 'Ethereum ETF Approval', outcome: 'YES', time: '12m ago' },
    { user: 'sports_trader', action: 'sold', amount: '$4,750', market: 'Lakers Win Championship', outcome: 'NO', time: '15m ago' }
  ];

  const tradingStrategies = [
    {
      title: 'Information Arbitrage',
      description: 'Capitalize on price discrepancies by staying informed about breaking news and events before the market fully reacts.',
      difficulty: 'Advanced',
      potential: 'High'
    },
    {
      title: 'Long-Term Holdings',
      description: 'Buy undervalued positions early and hold until resolution. Great for events with clear outcomes months away.',
      difficulty: 'Beginner',
      potential: 'Medium'
    },
    {
      title: 'Market Making',
      description: 'Provide liquidity by placing limit orders on both sides. Earn from the spread while helping market efficiency.',
      difficulty: 'Advanced',
      potential: 'Steady'
    },
    {
      title: 'Event-Driven Trading',
      description: 'Trade around scheduled announcements, debates, or data releases. Timing is everything with this strategy.',
      difficulty: 'Intermediate',
      potential: 'High'
    }
  ];

  const marketStats = [
    { label: 'Total Markets Created', value: '12,547', change: '+15%' },
    { label: 'Resolved Accurately', value: '11,892', change: '94.8%' },
    { label: 'Average Resolution Time', value: '2.3 hours', change: '-12%' },
    { label: 'Total Traders', value: '156,892', change: '+23%' },
    { label: 'Daily Trading Volume', value: '$8.2M', change: '+18%' },
    { label: 'Markets Open Now', value: '5,247', change: '+8%' },
    { label: 'Total Liquidity', value: '$45.6M', change: '+27%' },
    { label: 'Active Countries', value: '127', change: '+19%' }
  ];

  const securityFeatures = [
    {
      icon: <Shield className="security-icon" />,
      title: 'CFTC Licensed',
      description: 'Designated Contract Market (DCM) license ensures regulatory compliance and oversight.'
    },
    {
      icon: <Lock className="security-icon" />,
      title: 'Cold Storage',
      description: '95% of funds stored offline in multi-signature cold wallets with institutional-grade security.'
    },
    {
      icon: <Activity className="security-icon" />,
      title: '2FA Required',
      description: 'Two-factor authentication mandatory for all accounts. Biometric options available on mobile.'
    },
    {
      icon: <Database className="security-icon" />,
      title: 'Segregated Accounts',
      description: 'Customer funds held separately from operating capital in FDIC-insured bank accounts.'
    }
  ];

  const faqs = [
    {
      question: 'What is Poly Governance?',
      answer: 'Poly Governance is an advanced prediction market platform where you can trade on the outcomes of real-world events using real money. Our markets aggregate information from diverse traders to forecast future events across politics, crypto, sports, and more.'
    },
    {
      question: 'How does trading work?',
      answer: 'Trading on Poly Governance is simple. Each market has YES and NO shares that represent the probability of an outcome. Buy low and sell high, or hold until resolution. When the market resolves, winning shares are worth $1.00 each.'
    },
    {
      question: 'Is Poly Governance legal?',
      answer: 'Yes! Poly Governance is fully licensed and regulated by the CFTC as a Designated Contract Market. We operate in compliance with all US regulations and maintain segregated customer accounts with bank-grade security.'
    },
    {
      question: 'How do I withdraw funds?',
      answer: 'Withdrawals are instant and automated. Once a market resolves, winnings are automatically credited to your account. You can withdraw via bank transfer, card, or crypto at any time with no fees.'
    },
    {
      question: 'What markets can I trade?',
      answer: 'We offer over 5,000 live markets across six main categories: Politics, Crypto, Sports, Business, Science, and Entertainment. Markets range from major elections and crypto prices to championship outcomes and scientific breakthroughs.'
    },
    {
      question: 'How are markets resolved?',
      answer: 'Markets are resolved based on objective, publicly verifiable sources. Our resolution team uses multiple trusted sources and follows strict protocols. Disputed resolutions can be appealed through our governance process.'
    },
    {
      question: 'What are the fees?',
      answer: 'Trading fees are just 2% on winning positions. No deposit fees, no withdrawal fees, and no monthly fees. You only pay when you profit.'
    },
    {
      question: 'Can I create my own markets?',
      answer: 'Yes! Users with a trading history can propose new markets. Each proposal goes through a review process to ensure it meets our quality and verification standards.'
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.png" alt="Poly Governance" className="logo-image" />
          </div>
          <div className="nav-links">
            <a href="#markets">Markets</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-buttons">
            <button className="btn-secondary" onClick={() => setShowSignIn(true)}>Sign In</button>
            <button className="btn-primary" onClick={() => setShowSignUp(true)}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="live-badge">
                <div className="pulse-dot"></div>
                <span>LIVE NOW: 5,247 Active Markets</span>
              </div>
              
              <h1 className="hero-title">
                Trade on What <br />
                <span className="highlight">You Believe</span>
              </h1>
              
              <p className="hero-description">
                The world's most advanced prediction market. Real money. Real predictions. 
                From elections to crypto, sports to science - profit from being right.
              </p>
              
              <div className="hero-buttons">
                <button className="btn-primary btn-large" onClick={() => setShowSignUp(true)}>
                  Start Trading Free
                  <ChevronRight className="btn-icon" />
                </button>
                <button className="btn-secondary btn-large" onClick={() => {
                  document.getElementById('markets').scrollIntoView({ behavior: 'smooth' });
                }}>View Markets</button>
              </div>
              
              <div className="stats-grid">
                <div className="stat">
                  <div className="stat-value">$2.5B+</div>
                  <div className="stat-label">TRADING VOLUME</div>
                </div>
                <div className="stat">
                  <div className="stat-value">150K+</div>
                  <div className="stat-label">ACTIVE TRADERS</div>
                </div>
                <div className="stat">
                  <div className="stat-value">5,000+</div>
                  <div className="stat-label">LIVE MARKETS</div>
                </div>
              </div>
            </div>
            
            <div className="hero-card">
              <div className="card-header">
                <span className="category-badge">Politics</span>
                <span className="volume">$45.2M</span>
              </div>
              
              <h3 className="card-title">2024 Presidential Election</h3>
              
              <div className="card-odds">
                <div className="odd-item">
                  <div className="odd-header">
                    <span className="odd-label">YES</span>
                    <span className="odd-value yes">58¢</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill yes" style={{ width: '58%' }}></div>
                  </div>
                </div>
                
                <div className="odd-item">
                  <div className="odd-header">
                    <span className="odd-label">NO</span>
                    <span className="odd-value no">42¢</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill no" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mini-chart">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="chart-bar"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Markets */}
      <section id="markets" className="trending-section">
        <div className="container">
          <div className="section-header">
            <h2>Trending Markets</h2>
            <a href="#markets" className="view-all" onClick={(e) => {
              e.preventDefault();
              document.getElementById('markets').scrollIntoView({ behavior: 'smooth' });
            }}>
              View All Markets
              <ChevronRight className="link-icon" />
            </a>
          </div>
          
          <div className="markets-grid">
            {trendingMarkets.map((market, index) => (
              <div key={index} className="market-card">
                <div className="market-header">
                  <span className="category-badge">{market.category}</span>
                  <span className={`change ${market.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {market.change}
                  </span>
                </div>
                
                <h3 className="market-title">{market.title}</h3>
                <p className="market-volume">Volume: {market.volume}</p>
                
                <div className="progress-bar">
                  <div className="progress-fill yes" style={{ width: `${market.yes}%` }}></div>
                </div>
                
                <div className="market-odds">
                  <div>
                    <div className="odd-label">YES</div>
                    <div className="odd-value yes">{market.yes}¢</div>
                  </div>
                  <div className="text-right">
                    <div className="odd-label">NO</div>
                    <div className="odd-value no">{market.no}¢</div>
                  </div>
                </div>
                
                <button className="btn-primary btn-full" onClick={() => {
                  setSelectedMarket(market);
                  setShowMarketDetail(true);
                }}>Trade Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="stats-section">
        <div className="container">
          <div className="section-intro">
            <h2>Platform Statistics</h2>
            <p>Real-time metrics from the world's most active prediction market</p>
          </div>
          
          <div className="market-stats-grid">
            {marketStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-label">{stat.label}</div>
                <div className={`stat-card-change ${stat.change.startsWith('+') ? 'positive' : stat.change.startsWith('-') ? 'negative' : 'neutral'}`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Activity & Top Traders */}
      <section className="activity-section">
        <div className="container">
          <div className="activity-grid">
            <div className="activity-card">
              <div className="activity-header">
                <h3>Live Activity</h3>
                <div className="live-indicator">
                  <div className="pulse-dot"></div>
                  <span>LIVE</span>
                </div>
              </div>
              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-main">
                      <span className="activity-user">{activity.user}</span>
                      <span className={`activity-action ${activity.action === 'bought' ? 'buy' : 'sell'}`}>
                        {activity.action}
                      </span>
                      <span className="activity-amount">{activity.amount}</span>
                    </div>
                    <div className="activity-details">
                      <span className="activity-market">{activity.market}</span>
                      <span className={`activity-outcome ${activity.outcome === 'YES' ? 'yes' : 'no'}`}>
                        {activity.outcome}
                      </span>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-header">
                <h3>Top Traders</h3>
                <span className="leaderboard-period">Last 30 Days</span>
              </div>
              <div className="leaderboard-list">
                {topTraders.map((trader, index) => (
                  <div key={index} className="leaderboard-item">
                    <div className="trader-rank">{index + 1}</div>
                    <div className="trader-info">
                      <div className="trader-name">{trader.name}</div>
                      <div className="trader-stats">
                        <span>{trader.accuracy} accuracy</span>
                        <span>•</span>
                        <span>{trader.trades} trades</span>
                      </div>
                    </div>
                    <div className="trader-profit">{trader.profit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Strategies */}
      <section className="strategies-section">
        <div className="container">
          <div className="section-intro">
            <h2>Trading Strategies</h2>
            <p>Learn proven approaches to maximize your profits on prediction markets</p>
          </div>
          
          <div className="strategies-grid">
            {tradingStrategies.map((strategy, index) => (
              <div key={index} className="strategy-card">
                <div className="strategy-header">
                  <h3>{strategy.title}</h3>
                  <div className="strategy-badges">
                    <span className={`difficulty-badge ${strategy.difficulty.toLowerCase()}`}>
                      {strategy.difficulty}
                    </span>
                    <span className="potential-badge">{strategy.potential} Return</span>
                  </div>
                </div>
                <p className="strategy-description">{strategy.description}</p>
                <button className="btn-outline btn-small" onClick={() => {
                  alert(`Learn more about ${strategy.title}\n\nThis feature will provide detailed guides on implementing this trading strategy. Coming soon!`);
                }}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-intro">
            <h2>What Our Traders Say</h2>
            <p>Join thousands of successful traders on Poly Governance</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Security Section */}
      <section className="security-section">
        <div className="container">
          <div className="section-intro">
            <h2>Bank-Grade Security</h2>
            <p>Your funds and data are protected by industry-leading security measures</p>
          </div>
          
          <div className="security-grid">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="security-card">
                <div className="security-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="security-badges">
            <div className="security-badge">
              <div className="badge-icon-text">SOC 2</div>
              <div>
                <div className="badge-title">SOC 2 Type II</div>
                <div className="badge-subtitle">Certified</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon-text">CFTC</div>
              <div>
                <div className="badge-title">CFTC</div>
                <div className="badge-subtitle">Regulated</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon-text">FDIC</div>
              <div>
                <div className="badge-title">FDIC</div>
                <div className="badge-subtitle">Insured</div>
              </div>
            </div>
            <div className="security-badge">
              <div className="badge-icon-text">256</div>
              <div>
                <div className="badge-title">256-bit</div>
                <div className="badge-subtitle">Encryption</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="features-section">
        <div className="container">
          <div className="section-intro">
            <h2>Why Choose Poly Governance</h2>
            <p>The most advanced platform for prediction markets</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <div className="feature-label">{feature.label}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-intro">
            <h2>How It Works</h2>
            <p>Start trading in minutes</p>
          </div>
          
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Account</h3>
              <p>Sign up with email or wallet. Verify your identity in minutes.</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Fund Your Account</h3>
              <p>Deposit via bank transfer, card, or crypto. Start with as little as $10.</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Start Trading</h3>
              <p>Browse markets, analyze odds, and place your trades. Cash out anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Performance */}
      <section className="performance-section">
        <div className="container-small">
          <div className="performance-card">
            <h2>Market Performance</h2>
            
            <div className="performance-grid">
              <div className="performance-item">
                <div className="performance-label">REG</div>
                <h3>CFTC Regulated</h3>
                <p>Licensed Event Contracts</p>
              </div>
              
              <div className="performance-item">
                <div className="performance-label">SEC</div>
                <h3>Bank-Level Security</h3>
                <p>SOC 2 Type II Certified</p>
              </div>
              
              <div className="performance-item">
                <div className="performance-label">PAY</div>
                <h3>Instant Withdrawals</h3>
                <p>24/7 Automated Payouts</p>
              </div>
              
              <div className="performance-item">
                <div className="performance-label">DATA</div>
                <h3>99.9% Uptime</h3>
                <p>Enterprise Infrastructure</p>
              </div>
            </div>
            
            <button className="btn-primary" onClick={() => {
              alert('Security Details\n\nPoly Governance is:\n\n✓ CFTC Licensed (DCM)\n✓ SOC 2 Type II Certified\n✓ FDIC Insured (up to $250,000)\n✓ 256-bit Encryption\n✓ 95% Cold Storage\n✓ Multi-signature Wallets\n✓ Regular Security Audits\n\nFor detailed security documentation, please visit our Help Center.');
            }}>View Security Details</button>
          </div>
        </div>
      </section>

      {/* Prediction Markets Info */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h2>How Prediction Markets Work</h2>
              
              <p className="info-intro">
                Prediction markets aggregate information from diverse traders to forecast future events. 
                Each share represents the probability of an outcome occurring.
              </p>
              
              <div className="info-steps">
                <div className="info-step">
                  <div className="info-step-number">1</div>
                  <div>
                    <h3>Binary Outcomes</h3>
                    <p>Markets resolve to YES (100¢) or NO (0¢)</p>
                  </div>
                </div>
                
                <div className="info-step">
                  <div className="info-step-number">2</div>
                  <div>
                    <h3>Price = Probability</h3>
                    <p>A 65¢ price means 65% chance of occurring</p>
                  </div>
                </div>
                
                <div className="info-step">
                  <div className="info-step-number">3</div>
                  <div>
                    <h3>Profit from Being Right</h3>
                    <p>Buy low, sell high, or hold until resolution</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-outline">Learn More</button>
            </div>
            
            <div className="info-card">
              <h2>Market Categories</h2>
              
              <div className="categories-list">
                {categories.map((category, index) => (
                  <div key={index} className="category-item">
                    <div>
                      <h3>{category.name}</h3>
                      <p>{category.count} markets</p>
                    </div>
                    <button className="btn-outline btn-small" onClick={() => {
                      document.getElementById('markets').scrollIntoView({ behavior: 'smooth' });
                    }}>Browse</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container-medium">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="faq-question"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`faq-icon ${openFaq === index ? 'open' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container-medium">
          <div className="cta-card">
            <h2>Ready to Start Trading?</h2>
            <p>Join 150,000+ traders already profiting from their predictions</p>
            
            <button className="btn-primary btn-large" onClick={() => setShowSignUp(true)}>
              Create Free Account
              <ChevronRight className="btn-icon" />
            </button>
            
            <div className="platform-badges">
              <div className="platform-badge">
                <Smartphone className="platform-icon" />
                <div>
                  <div className="platform-label">Download on the</div>
                  <div className="platform-name">App Store</div>
                </div>
              </div>
              
              <div className="platform-badge">
                <Smartphone className="platform-icon" />
                <div>
                  <div className="platform-label">Get it on</div>
                  <div className="platform-name">Google Play</div>
                </div>
              </div>
              
              <div className="platform-badge">
                <Database className="platform-icon" />
                <div>
                  <div className="platform-label">Trade on</div>
                  <div className="platform-name">Browser</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <img src="/logo.png" alt="Poly Governance" className="logo-image" />
              </div>
              <p>The world's most advanced prediction market platform. Trade on what you believe.</p>
              <div className="social-links">
                {['X', 'DC', 'TG', 'YT', 'IN', 'GH'].map((social, i) => (
                  <div key={i} className="social-icon">{social}</div>
                ))}
              </div>
            </div>
            
            <div className="footer-links">
              <h3>Markets</h3>
              <a href="#">Politics</a>
              <a href="#">Crypto</a>
              <a href="#">Sports</a>
              <a href="#">Business</a>
            </div>
            
            <div className="footer-links">
              <h3>Company</h3>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
            
            <div className="footer-links">
              <h3>Resources</h3>
              <a href="#">Documentation</a>
              <a href="#">API</a>
              <a href="#">Blog</a>
              <a href="#">Support</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div>© 2026 Poly Governance. All rights reserved.</div>
            <div className="footer-legal">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Compliance</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSignIn(false)}>
              <X className="icon" />
            </button>
            
            <h2 className="modal-title">Sign In to Poly Governance</h2>
            <p className="modal-subtitle">Welcome back! Choose your sign in method</p>
            
            <div className="modal-form">
              <div className="wallet-options">
                <button className="wallet-btn">
                  <Wallet className="wallet-icon" />
                  <div>
                    <div className="wallet-name">Phantom Wallet</div>
                    <div className="wallet-desc">Connect with Phantom</div>
                  </div>
                </button>
                
                <button className="wallet-btn">
                  <Wallet className="wallet-icon" />
                  <div>
                    <div className="wallet-name">MetaMask</div>
                    <div className="wallet-desc">Connect with MetaMask</div>
                  </div>
                </button>
                
                <button className="wallet-btn">
                  <Wallet className="wallet-icon" />
                  <div>
                    <div className="wallet-name">WalletConnect</div>
                    <div className="wallet-desc">Scan QR with mobile</div>
                  </div>
                </button>
              </div>
              
              <div className="divider">
                <span>or</span>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Enter your password"
                  className="form-input"
                />
              </div>
              
              <button className="btn-primary btn-full btn-large">Sign In</button>
              
              <div className="modal-footer">
                Don't have an account? <button className="link-btn" onClick={() => {
                  setShowSignIn(false);
                  setShowSignUp(true);
                }}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="modal-overlay" onClick={() => setShowSignUp(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSignUp(false)}>
              <X className="icon" />
            </button>
            
            <h2 className="modal-title">Create Your Account</h2>
            <p className="modal-subtitle">Join 150,000+ traders on Poly Governance</p>
            
            <div className="modal-form">
              <div className="wallet-options">
                <button className="wallet-btn">
                  <Wallet className="wallet-icon" />
                  <div>
                    <div className="wallet-name">Phantom Wallet</div>
                    <div className="wallet-desc">Sign up with Phantom</div>
                  </div>
                </button>
                
                <button className="wallet-btn">
                  <Wallet className="wallet-icon" />
                  <div>
                    <div className="wallet-name">MetaMask</div>
                    <div className="wallet-desc">Sign up with MetaMask</div>
                  </div>
                </button>
                
                <button className="wallet-btn">
                  <Wallet className="wallet-icon" />
                  <div>
                    <div className="wallet-name">WalletConnect</div>
                    <div className="wallet-desc">Scan QR with mobile</div>
                  </div>
                </button>
              </div>
              
              <div className="divider">
                <span>or</span>
              </div>
              
              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input 
                  type="email" 
                  id="signup-email" 
                  placeholder="Enter your email"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input 
                  type="password" 
                  id="signup-password" 
                  placeholder="Create a password (min. 8 characters)"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirm-password" 
                  placeholder="Confirm your password"
                  className="form-input"
                />
              </div>
              
              <div className="form-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree to the <a href="#" className="link">Terms of Service</a> and <a href="#" className="link">Privacy Policy</a>
                </label>
              </div>
              
              <button className="btn-primary btn-full btn-large">Create Account</button>
              
              <div className="modal-footer">
                Already have an account? <button className="link-btn" onClick={() => {
                  setShowSignUp(false);
                  setShowSignIn(true);
                }}>Sign In</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Market Detail Modal */}
      {showMarketDetail && selectedMarket && (
        <div className="modal-overlay" onClick={() => setShowMarketDetail(false)}>
          <div className="modal-content modal-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowMarketDetail(false)}>
              <X className="icon" />
            </button>
            
            <div className="market-detail-header">
              <span className="category-badge">{selectedMarket.category}</span>
              <h2 className="modal-title">{selectedMarket.title}</h2>
              <p className="market-volume">Volume: {selectedMarket.volume}</p>
            </div>
            
            <div className="market-detail-body">
              <div className="market-odds-large">
                <div className="odd-column">
                  <div className="odd-label">YES</div>
                  <div className="odd-value-large yes">{selectedMarket.yes}¢</div>
                  <div className="progress-bar">
                    <div className="progress-fill yes" style={{ width: `${selectedMarket.yes}%` }}></div>
                  </div>
                </div>
                
                <div className="odd-column">
                  <div className="odd-label">NO</div>
                  <div className="odd-value-large no">{selectedMarket.no}¢</div>
                  <div className="progress-bar">
                    <div className="progress-fill no" style={{ width: `${selectedMarket.no}%` }}></div>
                  </div>
                </div>
              </div>
              
              <div className="trade-form">
                <div className="trade-tabs">
                  <button className="trade-tab active">Buy</button>
                  <button className="trade-tab">Sell</button>
                </div>
                
                <div className="form-group">
                  <label>Outcome</label>
                  <select className="form-input">
                    <option>YES</option>
                    <option>NO</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Amount (USD)</label>
                  <input 
                    type="number" 
                    placeholder="Enter amount"
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label>Shares</label>
                  <input 
                    type="number" 
                    placeholder="Number of shares"
                    className="form-input"
                  />
                </div>
                
                <div className="trade-summary">
                  <div className="summary-row">
                    <span>Avg. Price</span>
                    <span className="value">{selectedMarket.yes}¢</span>
                  </div>
                  <div className="summary-row">
                    <span>Est. Return</span>
                    <span className="value positive">+${((100 - selectedMarket.yes) * 0.95).toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Fees (2%)</span>
                    <span className="value">$0.00</span>
                  </div>
                </div>
                
                <button className="btn-primary btn-full btn-large" onClick={() => {
                  setShowMarketDetail(false);
                  setShowSignIn(true);
                }}>
                  Sign In to Trade
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;