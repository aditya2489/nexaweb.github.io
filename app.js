/**
 * NexaBank — Main Application Script
 * Handles client-side routing, navigation state, and shared UI utilities
 */

// ── Router ────────────────────────────────────────────────────────────────────
const ROUTES = {
  '/':         'home',
  '/accounts': 'accounts',
  '/cards':    'cards',
  '/loans':    'loans',
  '/contact':  'contact'
};

const Router = {
  init() {
    window.addEventListener('popstate', () => this.resolve());
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        this.navigate(link.getAttribute('href'));
      }
    });
    this.resolve();
  },

  navigate(path) {
    if (window.location.pathname !== path) {
      history.pushState({}, '', path);
    }
    this.resolve();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  resolve() {
    const path   = window.location.pathname;
    const pageId = ROUTES[path] || 'home';
    App.renderPage(pageId);
    Nav.setActive(path);
    // Track page view in CleverTap
    if (typeof trackPageView === 'function') {
      trackPageView(pageId.charAt(0).toUpperCase() + pageId.slice(1));
    }
  }
};

// ── Navigation ────────────────────────────────────────────────────────────────
const Nav = {
  init() {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
    });

    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileClose = document.getElementById('mobileNavClose');

    if (hamburger) hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileClose) mobileClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });

    // Close mobile nav on link click
    document.addEventListener('click', (e) => {
      const mobileLink = e.target.closest('.mobile-nav [data-link]');
      if (mobileLink && mobileNav) {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  },

  setActive(path) {
    document.querySelectorAll('.nav-link, .mobile-nav a').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === path || (path === '/' && href === '/'));
    });
  }
};

// ── Toast ─────────────────────────────────────────────────────────────────────
const Toast = {
  show(title, msg, duration = 3500) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<div class="toast-title">${title}</div><div class="toast-msg">${msg}</div>`;
    requestAnimationFrame(() => {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), duration);
    });
  }
};

// ── EMI Calculator Logic ──────────────────────────────────────────────────────
function calculateEMI() {
  const P = parseFloat(document.getElementById('loanAmount')?.value) || 0;
  const rAnnual = parseFloat(document.getElementById('interestRate')?.value) || 0;
  const n = parseFloat(document.getElementById('loanTenure')?.value) || 0;
  const r = rAnnual / 12 / 100;

  if (!P || !n) return;

  const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const totalPayable = emi * n;
  const totalInterest = totalPayable - P;

  const fmt = (v) => '₹' + Math.round(v).toLocaleString('en-IN');

  const emiEl = document.getElementById('emiResult');
  const intEl = document.getElementById('interestResult');
  const totEl = document.getElementById('totalResult');

  if (emiEl) emiEl.textContent = fmt(emi);
  if (intEl) intEl.textContent = fmt(totalInterest);
  if (totEl) totEl.textContent = fmt(totalPayable);

  if (typeof clevertap !== 'undefined') {
    clevertap.event.push("EMI Calculated", {
      "Loan Amount": P,
      "Interest Rate": rAnnual,
      "Tenure Months": n,
      "Monthly EMI": Math.round(emi)
    });
  }
}

// ── Contact Form ──────────────────────────────────────────────────────────────
function handleContactSubmit(e) {
  e.preventDefault();
  const name    = document.getElementById('cName')?.value || '';
  const email   = document.getElementById('cEmail')?.value || '';
  const subject = document.getElementById('cSubject')?.value || '';

  if (typeof trackFormSubmit === 'function') {
    trackFormSubmit("Contact Form", { "Name": name, "Email": email, "Subject": subject });
  }
  if (typeof identifyUser === 'function') {
    identifyUser(email, name);
  }

  Toast.show('Message Sent!', 'Our team will get back to you within 24 hours.');
  e.target.reset();
}

// ── Open Account CTA ──────────────────────────────────────────────────────────
function handleOpenAccount(productName) {
  if (typeof trackCTAClick === 'function') {
    trackCTAClick('Open Account', productName || 'General');
  }
  Toast.show('Application Started', 'Redirecting you to our secure portal...');
}

// ── Apply Now CTA ─────────────────────────────────────────────────────────────
function handleApplyNow(productName) {
  if (typeof trackCTAClick === 'function') {
    trackCTAClick('Apply Now', productName || 'Product');
  }
  Toast.show('Application Started', 'Complete your application in 3 minutes.');
}

// ── Page Renderer ─────────────────────────────────────────────────────────────
const App = {
  renderPage(pageId) {
    const main = document.getElementById('app');
    if (!main) return;

    const pages = {
      home:     Pages.home,
      accounts: Pages.accounts,
      cards:    Pages.cards,
      loans:    Pages.loans,
      contact:  Pages.contact
    };

    const render = pages[pageId] || pages.home;
    main.innerHTML = render();
    document.title = {
      home:     'NexaBank — Banking Reimagined',
      accounts: 'Accounts — NexaBank',
      cards:    'Credit & Debit Cards — NexaBank',
      loans:    'Loans & Credit — NexaBank',
      contact:  'Contact Us — NexaBank'
    }[pageId] || 'NexaBank';

    // Re-attach event listeners for dynamic content
    this.attachHandlers(pageId);
  },

  attachHandlers(pageId) {
    // EMI Calculator
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) calcBtn.addEventListener('click', calculateEMI);

    // Auto-calculate on input change
    ['loanAmount', 'interestRate', 'loanTenure'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', calculateEMI);
    });
    // Initial calculation if on loans page
    if (pageId === 'loans') setTimeout(calculateEMI, 100);

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

    // Feature card tracking
    document.querySelectorAll('.feature-card, .product-card, .account-type, .loan-card, .card-offer')
      .forEach(card => {
        card.addEventListener('click', () => {
          const name = card.querySelector('h3')?.textContent || 'Product';
          if (typeof trackProductInterest === 'function') {
            trackProductInterest(name, 'Card Click');
          }
        });
      });
  }
};

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  Nav.init();
  Router.init();
});
