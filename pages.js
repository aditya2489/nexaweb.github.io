/**
 * NexaBank — Page Templates
 * Returns HTML strings for each route
 */

const Pages = {

  // ── Home Page ─────────────────────────────────────────────────────────────
  home() {
    return `
    <!-- Hero -->
    <section class="hero">
      <div class="hero-grid"></div>
      <div class="hero-glow"></div>
      <div class="container">
        <div class="hero-inner">
          <div class="hero-content">
            <div class="hero-eyebrow">
              <span class="eyebrow">Trusted by 2.4 million Indians</span>
            </div>
            <h1 class="display-xl hero-title">
              Banking built for <span>your future</span>, not the past.
            </h1>
            <p class="hero-desc">
              NexaBank combines zero-fee accounts, industry-leading interest rates, and smart money tools to help you grow, save, and invest — all from one place.
            </p>
            <div class="hero-ctas">
              <button class="btn btn-primary btn-lg"
                onclick="handleOpenAccount('Hero')"
                data-ct-event="CTA Clicked" data-ct-section="Hero" data-ct-label="Open Free Account">
                Open Free Account
              </button>
              <a href="/accounts" data-link class="btn btn-outline btn-lg"
                data-ct-event="CTA Clicked" data-ct-section="Hero" data-ct-label="Explore Accounts">
                Explore Accounts
              </a>
            </div>
            <div class="hero-stats">
              <div class="hero-stat">
                <div class="hero-stat-value">₹0</div>
                <div class="hero-stat-label">Monthly fees, forever</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-value">7.2%</div>
                <div class="hero-stat-label">Interest on savings</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-value">90s</div>
                <div class="hero-stat-label">Average transfer time</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-value">DICGC</div>
                <div class="hero-stat-label">Insured up to ₹5 Lakhs</div>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="bank-card">
              <div class="card-chip"></div>
              <div class="card-number">4532 •••• •••• 7841</div>
              <div class="card-bottom">
                <div class="card-name">
                  <span>Account Holder</span>
                  <strong>Aanya Sharma</strong>
                </div>
                <div class="card-logo">Nexa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section-pad">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Why NexaBank</p>
          <h2 class="display-lg">Everything your money needs, in one place</h2>
          <p>We built a bank we'd actually want to use — with real-time controls, transparent pricing, and tools that work for you.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card" data-ct-event="Feature Viewed" data-ct-section="Features" data-ct-label="Instant Transfers">
            <div class="feature-icon">⚡</div>
            <h3>Instant IMPS & UPI</h3>
            <p>Send money to any bank in India within seconds, 24/7, including holidays. No limits on internal transfers.</p>
          </div>
          <div class="feature-card" data-ct-event="Feature Viewed" data-ct-section="Features" data-ct-label="Zero Fee">
            <div class="feature-icon">🔒</div>
            <h3>Bank-grade Security</h3>
            <p>256-bit encryption, biometric login, real-time fraud alerts, and instant card freeze — all in the app.</p>
          </div>
          <div class="feature-card" data-ct-event="Feature Viewed" data-ct-section="Features" data-ct-label="Smart Savings">
            <div class="feature-icon">📊</div>
            <h3>Smart Spend Analytics</h3>
            <p>Automatic categorisation of every rupee spent. Set budgets, track goals, and see where your money really goes.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3>Global ATM Access</h3>
            <p>Withdraw from 1.8 million ATMs worldwide. First 5 transactions free monthly, competitive forex rates.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Mobile-First Banking</h3>
            <p>Manage everything from your phone. Open accounts, apply for loans, and invest — no branch visit needed.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Dedicated Support</h3>
            <p>Reach a real human in under 3 minutes, 24/7. No bots, no call queues — just expert help when you need it.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products -->
    <section class="section-pad" style="background: var(--off-white);">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Our Products</p>
          <h2 class="display-lg">The right product for every stage of life</h2>
        </div>
        <div class="products-grid">
          <div class="product-card" onclick="Router.navigate('/accounts')">
            <p class="eyebrow product-card-eyebrow">Savings & Current</p>
            <h3>Accounts</h3>
            <p>Earn up to 7.2% p.a. on your savings with zero minimum balance requirements and no hidden charges.</p>
            <a href="/accounts" data-link class="btn btn-outline"
              data-ct-event="Product Card Clicked" data-ct-section="Products" data-ct-label="Accounts">
              View accounts →
            </a>
            <div class="product-card-icon">🏦</div>
          </div>
          <div class="product-card" onclick="Router.navigate('/cards')">
            <p class="eyebrow product-card-eyebrow">Debit & Credit</p>
            <h3>Cards</h3>
            <p>From everyday cashback to premium travel rewards — find a card that pays you back for every purchase.</p>
            <a href="/cards" data-link class="btn btn-outline"
              data-ct-event="Product Card Clicked" data-ct-section="Products" data-ct-label="Cards">
              View cards →
            </a>
            <div class="product-card-icon">💳</div>
          </div>
          <div class="product-card" onclick="Router.navigate('/loans')">
            <p class="eyebrow product-card-eyebrow">Personal & Home</p>
            <h3>Loans</h3>
            <p>Get funds when you need them. Competitive rates starting at 8.5% p.a. with flexible repayment terms.</p>
            <a href="/loans" data-link class="btn btn-outline"
              data-ct-event="Product Card Clicked" data-ct-section="Products" data-ct-label="Loans">
              View loans →
            </a>
            <div class="product-card-icon">📝</div>
          </div>
          <div class="product-card" onclick="Router.navigate('/contact')">
            <p class="eyebrow product-card-eyebrow">Mutual Funds & FD</p>
            <h3>Investments</h3>
            <p>Start investing in minutes. SIPs from ₹100, tax-saving FDs, and curated mutual fund portfolios.</p>
            <a href="/contact" data-link class="btn btn-outline"
              data-ct-event="Product Card Clicked" data-ct-section="Products" data-ct-label="Investments">
              Learn more →
            </a>
            <div class="product-card-icon">📈</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-pad testimonials-bg">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Customer Stories</p>
          <h2 class="display-lg">Trusted by millions across India</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"Switched from my old bank 6 months ago and haven't looked back. The interest rate alone pays for my Netflix every month."</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">👤</div>
              <div>
                <div class="testimonial-name">Rohit Verma</div>
                <div class="testimonial-title">Software Engineer, Bengaluru</div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"Applied for a home loan through NexaBank. The entire process was online — got approval in 48 hours and the rate beat every other offer."</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">👤</div>
              <div>
                <div class="testimonial-name">Priya Nair</div>
                <div class="testimonial-title">Architect, Mumbai</div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"The spend analytics actually changed how I budget. I found ₹4,000/month I was wasting on subscriptions I'd forgotten about."</p>
            <div class="testimonial-author">
              <div class="testimonial-avatar">👤</div>
              <div>
                <div class="testimonial-name">Ankit Mehta</div>
                <div class="testimonial-title">Entrepreneur, Delhi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="container" style="position:relative;">
        <p class="eyebrow" style="margin-bottom:16px;">Get Started Today</p>
        <h2 class="display-lg">Open your account in under 5 minutes</h2>
        <p>No paperwork. No branch visit. Just your Aadhaar, PAN, and a selfie.</p>
        <button class="btn btn-primary btn-lg"
          onclick="handleOpenAccount('CTA Banner')"
          data-ct-event="CTA Clicked" data-ct-section="CTA Banner" data-ct-label="Open Account Now">
          Open Account Now
        </button>
        <button class="btn btn-outline btn-lg"
          onclick="Router.navigate('/contact')"
          data-ct-event="CTA Clicked" data-ct-section="CTA Banner" data-ct-label="Talk to Us">
          Talk to Us
        </button>
      </div>
    </section>

    <!-- Shared container — available on every page for dynamic injection -->
    <div id="nexa-page-slot"></div>`;
  },

  // ── Accounts Page ──────────────────────────────────────────────────────────
  accounts() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-inner">
          <div class="breadcrumb">
            <a href="/" data-link>Home</a> / <span>Accounts</span>
          </div>
          <h1 class="display-xl">Savings that actually <span class="text-gold">earn</span></h1>
          <p>Choose from accounts built for every lifestyle — from zero-balance daily banking to high-yield savings that grow your wealth on autopilot.</p>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Account Types</p>
          <h2 class="display-lg">Your perfect account, not ours</h2>
          <p>No hidden fees. No minimum balance traps. Just straightforward banking with rates that reward you.</p>
        </div>
        <div class="account-types">
          <div class="account-type">
            <p class="eyebrow">Everyday</p>
            <h3>NeXa Essential</h3>
            <p class="account-desc">For daily banking needs with zero fuss. No minimum balance, free UPI, and instant fund transfers.</p>
            <div class="account-rate">4.5% <span>p.a. interest</span></div>
            <div class="account-features">
              <div class="account-feature">Zero minimum balance</div>
              <div class="account-feature">Free UPI & IMPS transfers</div>
              <div class="account-feature">5 free ATM transactions/month</div>
              <div class="account-feature">Virtual debit card on activation</div>
              <div class="account-feature">Spend analytics dashboard</div>
            </div>
            <button class="btn btn-outline-dark" style="width:100%"
              onclick="handleOpenAccount('Essential Account')"
              data-ct-event="Account CTA" data-ct-label="Essential">
              Open Essential Account
            </button>
          </div>

          <div class="account-type popular">
            <div class="popular-badge">⭐ Most Popular</div>
            <p class="eyebrow">High Yield</p>
            <h3>NeXa Plus</h3>
            <p class="account-desc">Our most popular account. Higher interest, exclusive rewards, and a premium physical card delivered free.</p>
            <div class="account-rate">7.2% <span>p.a. interest</span></div>
            <div class="account-features">
              <div class="account-feature">Everything in Essential</div>
              <div class="account-feature">Unlimited ATM withdrawals</div>
              <div class="account-feature">1% cashback on all spends</div>
              <div class="account-feature">Free premium Visa debit card</div>
              <div class="account-feature">Priority 24/7 support</div>
            </div>
            <button class="btn btn-primary" style="width:100%"
              onclick="handleOpenAccount('Plus Account')"
              data-ct-event="Account CTA" data-ct-label="Plus">
              Open Plus Account
            </button>
          </div>

          <div class="account-type">
            <p class="eyebrow">Business</p>
            <h3>NeXa Business</h3>
            <p class="account-desc">Designed for freelancers, startups, and SMEs. GST tools, payroll, and bulk payment features built in.</p>
            <div class="account-rate">5.8% <span>p.a. interest</span></div>
            <div class="account-features">
              <div class="account-feature">GST-ready invoicing tools</div>
              <div class="account-feature">Payroll processing for teams</div>
              <div class="account-feature">Bulk NEFT up to 500 transactions</div>
              <div class="account-feature">Dedicated relationship manager</div>
              <div class="account-feature">Business debit + credit card</div>
            </div>
            <button class="btn btn-outline-dark" style="width:100%"
              onclick="handleOpenAccount('Business Account')"
              data-ct-event="Account CTA" data-ct-label="Business">
              Open Business Account
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- FD Section -->
    <section class="section-pad" style="background:var(--off-white);">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Fixed Deposits</p>
          <h2 class="display-lg">Lock in returns. Unlock peace of mind.</h2>
          <p>Our FDs offer guaranteed returns backed by DICGC insurance up to ₹5 Lakhs. Choose your tenure, watch your money grow.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📅</div>
            <h3>Short Term (7–180 days)</h3>
            <p>Park surplus cash and earn up to <strong>6.5% p.a.</strong> Keep your money accessible with premature withdrawal options.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Goal-Based (1–3 years)</h3>
            <p>Save for a specific goal — a car, vacation, or emergency fund — and earn up to <strong>8.0% p.a.</strong> guaranteed.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3>Wealth Builder (3–10 years)</h3>
            <p>Maximise compounding with our longest-tenure FDs at up to <strong>8.75% p.a.</strong> for senior citizens add 0.5%.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container" style="position:relative;">
        <h2 class="display-lg">Ready to start earning more from your savings?</h2>
        <p>Open an account today — it takes less time than making a cup of chai.</p>
        <button class="btn btn-primary btn-lg" onclick="handleOpenAccount('Accounts CTA Banner')"
          data-ct-event="CTA Clicked" data-ct-section="Accounts CTA" data-ct-label="Get Started">
          Get Started — It's Free
        </button>
      </div>
    </section>

    <!-- Shared container — available on every page for dynamic injection -->
    <div id="nexa-page-slot"></div>`;
  },

  // ── Cards Page ─────────────────────────────────────────────────────────────
  cards() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-inner">
          <div class="breadcrumb">
            <a href="/" data-link>Home</a> / <span>Cards</span>
          </div>
          <h1 class="display-xl">Cards that pay <span class="text-gold">you back</span></h1>
          <p>Every swipe earns rewards. Every statement is a treat. Find the card that turns your daily spending into points, cashback, or miles.</p>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Credit Cards</p>
          <h2 class="display-lg">Rewards built around your lifestyle</h2>
        </div>
        <div class="cards-showcase">
          <div class="card-offer">
            <div class="card-offer-visual gold-grad">
              <div class="mini-card gold">
                <div class="mini-chip"></div>
                <div class="mini-number">•••• •••• •••• 8120</div>
                <div class="mini-name">NEXABANK GOLD</div>
              </div>
            </div>
            <div class="card-offer-body">
              <h3>NexaBank Gold</h3>
              <div class="card-tagline">5% Cashback on every purchase</div>
              <div class="card-benefits">
                <div class="card-benefit">5% cashback on dining & fuel</div>
                <div class="card-benefit">1% cashback on all other spends</div>
                <div class="card-benefit">₹0 annual fee (first year)</div>
                <div class="card-benefit">EMI conversion at 0% for 3 months</div>
                <div class="card-benefit">Free lounge access — 2 visits/quarter</div>
              </div>
              <button class="btn btn-primary" style="width:100%"
                onclick="handleApplyNow('Gold Card')"
                data-ct-event="Card Apply" data-ct-label="Gold">
                Apply for Gold Card
              </button>
            </div>
          </div>

          <div class="card-offer">
            <div class="card-offer-visual silver-grad">
              <div class="mini-card silver">
                <div class="mini-chip"></div>
                <div class="mini-number">•••• •••• •••• 3456</div>
                <div class="mini-name">NEXABANK TRAVEL</div>
              </div>
            </div>
            <div class="card-offer-body">
              <h3>NexaBank Travel</h3>
              <div class="card-tagline">4x Miles on every flight booking</div>
              <div class="card-benefits">
                <div class="card-benefit">4x miles on flights & hotels</div>
                <div class="card-benefit">Complimentary travel insurance</div>
                <div class="card-benefit">Unlimited airport lounge access</div>
                <div class="card-benefit">Zero forex markup fee</div>
                <div class="card-benefit">Annual fee waived on ₹3L spend</div>
              </div>
              <button class="btn btn-primary" style="width:100%"
                onclick="handleApplyNow('Travel Card')"
                data-ct-event="Card Apply" data-ct-label="Travel">
                Apply for Travel Card
              </button>
            </div>
          </div>

          <div class="card-offer">
            <div class="card-offer-visual plat-grad">
              <div class="mini-card plat">
                <div class="mini-chip"></div>
                <div class="mini-number">•••• •••• •••• 9087</div>
                <div class="mini-name">NEXABANK PLATINUM</div>
              </div>
            </div>
            <div class="card-offer-body">
              <h3>NexaBank Platinum</h3>
              <div class="card-tagline">Premium rewards, concierge access</div>
              <div class="card-benefits">
                <div class="card-benefit">10x reward points on dining</div>
                <div class="card-benefit">Personal concierge service 24/7</div>
                <div class="card-benefit">Golf course access — 4 rounds/year</div>
                <div class="card-benefit">₹10,000 joining bonus</div>
                <div class="card-benefit">Complimentary OTT subscriptions</div>
              </div>
              <button class="btn btn-primary" style="width:100%"
                onclick="handleApplyNow('Platinum Card')"
                data-ct-event="Card Apply" data-ct-label="Platinum">
                Apply for Platinum
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Debit Cards -->
    <section class="section-pad" style="background:var(--off-white);">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Debit Cards</p>
          <h2 class="display-lg">Spend smarter, not harder</h2>
          <p>All NexaBank savings accounts come with a Visa debit card. Upgrade to Platinum debit for premium features.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">💳</div>
            <h3>Standard Visa Debit</h3>
            <p>Free with every account. Use at 1.8 million ATMs worldwide, tap-to-pay, and virtual card for online shopping.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⭐</div>
            <h3>Platinum Debit</h3>
            <p>Upgrade for ₹499/year. Get 1% cashback, higher daily limits, and priority customer support.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👶</div>
            <h3>NexaKids Card</h3>
            <p>A safe debit card for your children aged 8–18. Parent-controlled spending limits and spending notifications.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-banner">
      <div class="container" style="position:relative;">
        <h2 class="display-lg">Find your perfect card in 2 minutes</h2>
        <p>Tell us how you spend and we'll recommend the card that earns you the most.</p>
        <button class="btn btn-primary btn-lg" onclick="handleApplyNow('Card Recommender')"
          data-ct-event="CTA Clicked" data-ct-section="Cards CTA" data-ct-label="Find My Card">
          Find My Card
        </button>
      </div>
    </section>

    <!-- Shared container — available on every page for dynamic injection -->
    <div id="nexa-page-slot"></div>`;
  },

  // ── Loans Page ─────────────────────────────────────────────────────────────
  loans() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-inner">
          <div class="breadcrumb">
            <a href="/" data-link>Home</a> / <span>Loans</span>
          </div>
          <h1 class="display-xl">Funds when <span class="text-gold">life calls</span> for them</h1>
          <p>Whether it's a dream home, your child's education, or bridging a cash gap — NexaBank loans are designed to be fair, fast, and flexible.</p>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Loan Products</p>
          <h2 class="display-lg">Rates that make sense for your budget</h2>
        </div>
        <div class="loan-types">
          <div class="loan-card">
            <div class="loan-icon">🏠</div>
            <h3>Home Loan</h3>
            <div class="loan-rate-badge">From 8.5% p.a.</div>
            <p>Own your dream home with India's most competitive home loan rates. Up to ₹5 Cr, tenure up to 30 years, approval in 48 hours.</p>
            <button class="btn btn-primary" onclick="handleApplyNow('Home Loan')"
              data-ct-event="Loan Apply" data-ct-label="Home Loan">
              Apply for Home Loan
            </button>
          </div>
          <div class="loan-card">
            <div class="loan-icon">💼</div>
            <h3>Personal Loan</h3>
            <div class="loan-rate-badge">From 10.5% p.a.</div>
            <p>No collateral, no questions. Get up to ₹25 Lakhs in your account within 4 hours of approval. For any purpose.</p>
            <button class="btn btn-primary" onclick="handleApplyNow('Personal Loan')"
              data-ct-event="Loan Apply" data-ct-label="Personal Loan">
              Apply for Personal Loan
            </button>
          </div>
          <div class="loan-card">
            <div class="loan-icon">🎓</div>
            <h3>Education Loan</h3>
            <div class="loan-rate-badge">From 9.0% p.a.</div>
            <p>Invest in your future without financial stress. Up to ₹1 Cr for top Indian and international universities.</p>
            <button class="btn btn-primary" onclick="handleApplyNow('Education Loan')"
              data-ct-event="Loan Apply" data-ct-label="Education Loan">
              Apply for Education Loan
            </button>
          </div>
          <div class="loan-card">
            <div class="loan-icon">🚗</div>
            <h3>Vehicle Loan</h3>
            <div class="loan-rate-badge">From 7.9% p.a.</div>
            <p>Drive home your dream car or bike today. Finance up to 100% of on-road price with flexible EMI options.</p>
            <button class="btn btn-primary" onclick="handleApplyNow('Vehicle Loan')"
              data-ct-event="Loan Apply" data-ct-label="Vehicle Loan">
              Apply for Vehicle Loan
            </button>
          </div>
        </div>

        <!-- EMI Calculator -->
        <div class="emi-calculator">
          <h3>EMI Calculator</h3>
          <p>Estimate your monthly repayment in seconds</p>
          <div class="calc-grid">
            <div class="form-group">
              <label>Loan Amount (₹)</label>
              <input type="number" id="loanAmount" placeholder="e.g. 1000000" value="500000" min="10000" max="50000000">
            </div>
            <div class="form-group">
              <label>Interest Rate (% p.a.)</label>
              <input type="number" id="interestRate" placeholder="e.g. 10.5" value="10.5" step="0.1" min="1" max="30">
            </div>
            <div class="form-group">
              <label>Tenure (Months)</label>
              <input type="number" id="loanTenure" placeholder="e.g. 60" value="60" min="6" max="360">
            </div>
            <div class="form-group" style="justify-content:flex-end;">
              <button class="btn btn-primary" id="calcBtn"
                data-ct-event="EMI Calculator Used" data-ct-section="Loans">
                Calculate EMI
              </button>
            </div>
            <div class="calc-result">
              <div class="calc-result-item">
                <div class="label">Monthly EMI</div>
                <div class="value" id="emiResult">₹—</div>
              </div>
              <div class="calc-result-item">
                <div class="label">Total Interest</div>
                <div class="value" id="interestResult">₹—</div>
              </div>
              <div class="calc-result-item">
                <div class="label">Total Payable</div>
                <div class="value" id="totalResult">₹—</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad" style="background:var(--off-white);">
      <div class="container">
        <div class="section-header">
          <p class="eyebrow">Why Borrow from NexaBank</p>
          <h2 class="display-lg">Fair lending, not just fast lending</h2>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⏱</div>
            <h3>48-Hour Approval</h3>
            <p>Digital verification means we decide faster. Most personal loans are approved and disbursed within 4 hours.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📋</div>
            <h3>Minimal Documentation</h3>
            <p>Submit documents digitally. Aadhaar, PAN, and 3 months' bank statement — that's typically all we need.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Prepayment Friendly</h3>
            <p>No prepayment penalties after 12 months. Pay off your loan early and save on interest.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Shared container — available on every page for dynamic injection -->
    <div id="nexa-page-slot"></div>`;
  },

  // ── Contact Page ───────────────────────────────────────────────────────────
  contact() {
    return `
    <section class="page-hero">
      <div class="container">
        <div class="page-hero-inner">
          <div class="breadcrumb">
            <a href="/" data-link>Home</a> / <span>Contact</span>
          </div>
          <h1 class="display-xl">We're here <span class="text-gold">for you</span></h1>
          <p>Have a question, a complaint, or just want to learn more? Our team is available 24/7 — we promise a real human, not a bot.</p>
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <p class="eyebrow" style="margin-bottom:16px;">Get in Touch</p>
            <h2 class="display-md">We respond in under 3 minutes</h2>
            <p>Our support team is trained to resolve most queries on the first contact. No transfers, no repeating yourself.</p>
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-method-icon">📞</div>
                <div>
                  <h4>Phone Support</h4>
                  <p>1800-425-NEXA (6392) — Toll-free, 24/7</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-method-icon">💬</div>
                <div>
                  <h4>Live Chat</h4>
                  <p>Chat with us on the app or website — average wait: 45 seconds</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-method-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>support@nexabank.in — We respond within 4 hours</p>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-method-icon">🏢</div>
                <div>
                  <h4>Head Office</h4>
                  <p>NexaBank Tower, BKC, Mumbai — 400051</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-card">
            <h3>Send us a message</h3>
            <p>Fill in the form and we'll get back to you within 24 hours.</p>
            <form id="contactForm" onsubmit="return false;">
              <div class="form-row">
                <div class="form-group-light">
                  <label for="cName">Full Name</label>
                  <input type="text" id="cName" placeholder="Aanya Sharma" required>
                </div>
                <div class="form-group-light">
                  <label for="cPhone">Phone Number</label>
                  <input type="tel" id="cPhone" placeholder="+91 98765 43210">
                </div>
              </div>
              <div class="form-group-light">
                <label for="cEmail">Email Address</label>
                <input type="email" id="cEmail" placeholder="aanya@example.com" required>
              </div>
              <div class="form-group-light">
                <label for="cSubject">Query Type</label>
                <select id="cSubject">
                  <option value="">Select a topic</option>
                  <option>Account Opening</option>
                  <option>Loan Enquiry</option>
                  <option>Card Application</option>
                  <option>Technical Support</option>
                  <option>Fraud / Dispute</option>
                  <option>General Query</option>
                </select>
              </div>
              <div class="form-group-light">
                <label for="cMessage">Message</label>
                <textarea id="cMessage" rows="5" placeholder="Tell us how we can help…"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg" style="width:100%; justify-content:center;"
                data-ct-event="Contact Form Submit Attempt">
                Send Message
              </button>
              <p style="font-size:0.75rem; color:var(--gray-400); text-align:center; margin-top:12px;">
                By submitting, you agree to our Privacy Policy. Your data is protected under DPDP Act 2023.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Branch Locator hint -->
    <section class="section-pad-sm" style="background:var(--off-white);">
      <div class="container">
        <div class="section-header" style="margin-bottom:0;">
          <p class="eyebrow">Branch Network</p>
          <h2 class="display-lg">1,200+ branches across India</h2>
          <p style="margin-top:16px;">Prefer face-to-face? Find your nearest NexaBank branch or ATM using our branch locator in the mobile app.</p>
          <div style="margin-top:32px;">
            <button class="btn btn-primary btn-lg" onclick="handleApplyNow('Branch Locator')"
              data-ct-event="CTA Clicked" data-ct-section="Contact" data-ct-label="Find Branch">
              Find Nearest Branch
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Shared container — available on every page for dynamic injection -->
    <div id="nexa-page-slot"></div>`;
  }
};
