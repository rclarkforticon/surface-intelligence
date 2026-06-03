(function () {
  const navItems = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'Tools', href: '/tools/', section: 'tools' },
    { label: 'Resources', href: '/resources/', section: 'resources' },
    { label: 'Start Here', href: '/start/', section: 'start' },
    { label: 'Insights', href: '/articles/', section: 'articles' },
    { label: 'About', href: '/about/', section: 'about' },
    { label: 'Contact', href: '/contact/', section: 'contact' },
  ];

  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  const isHome = path === '/';
  const isActivePath = (href) => {
    if (href === '/') return path === '/';
    return path.startsWith(href);
  };

  // Always use full page URLs — no anchor-link behavior that breaks navigation
  const links = navItems
    .map((item) => {
      const active = isActivePath(item.href) ? ' aria-current="page" class="nav-link is-active"' : ' class="nav-link"';
      return `<a${active} data-section="${item.section}" href="${item.href}">${item.label}</a>`;
    })
    .join('');

  const header = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div class="stripe" aria-hidden="true"></div>
    <header class="top" data-site-header>
      <div class="wrap nav">
        <a class="brand" href="/" aria-label="Ryan Clark home">
          <small>// Ryan Clark · Forticon</small>
          <strong>Pavement &amp; ADA Specialist</strong>
        </a>
        <nav class="links" aria-label="Primary navigation">${links}</nav>
        <a class="btn nav-cta" href="/contact/">Get Free Condition Report</a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
        ${links}
        <a class="btn" href="/contact/">Get Free Condition Report</a>
      </nav>
    </header>`;

  document.body.insertAdjacentHTML('afterbegin', header);

  const onReady = () => {
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';

    const footer = `
      <footer class="footer">
        <div class="wrap footer-grid">
          <div>
            <div class="eyebrow">// Free tools + weekly insights</div>
            <h2 class="display">Ryan Clark</h2>
            <p>Pavement, ADA, and bid strategy education for property managers, HOA boards, facility teams, and commercial owners. Free tools and weekly insights to help you make better decisions before capital dollars are committed.</p>
            <p style="margin-top:12px; font-size:13px;">Pavement &amp; Concrete Specialist · <a href="https://www.forticon.com" target="_blank" rel="noopener" style="color:var(--yellow);">Forticon</a></p>
            <p style="margin-top:12px"><a href="/start/" style="color:var(--yellow); font-weight:700">→ Not sure where to start?</a></p>
          </div>
          <nav aria-label="Footer navigation">
            <h3>Explore</h3>
            <a href="/tools/">Free Tools</a>
            <a href="/resources/">Free Resources</a>
            <a href="/start/">Start Here</a>
            <a href="/articles/">Insights</a>
            <a href="/about/">About Ryan</a>
            <a href="/contact/">Contact</a>
          </nav>
          <nav aria-label="Tool navigation">
            <h3>Tools</h3>
            <a href="/tools/material-picker/">Material Picker</a>
            <a href="/tools/bid-decoder/">Three-Bid Decoder</a>
            <a href="/tools/paving-budget-estimator/">Paving Budget Estimator</a>
            <a href="/tools/repair-vs-replace/">Repair vs. Replace ROI</a>
            <a href="/tools/maintenance-planner/">Maintenance Planner</a>
            <a href="/tools/contractor-vetting-scorecard/">Contractor Vetting Scorecard</a>
            <a href="/tools/ada-risk-scorecard/">ADA Risk Scorecard</a>
            <a href="/tools/pavement-condition-rating/">Pavement Condition Rating</a>
            <a href="/tools/pavement-insurance-claim-estimator/">Insurance Claim Estimator</a>
            <a href="/tools/tenant-notification-letter-generator/">Tenant Letter Generator</a>
            <a href="/tools/hoa-reserve-estimator/">HOA Reserve Estimator</a>
            <a href="/tools/noi-impact-calculator/">NOI Impact Calculator</a>
            <a href="/tools/board-meeting-language-generator/">Board Language Generator</a>
            <a href="/tools/sealcoat-timing-calculator/">Sealcoat Timing Calculator</a>
          </nav>
        </div>
      </footer>`;
    document.body.insertAdjacentHTML('beforeend', footer);

    const toggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (toggle && mobileMenu) {
      toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        document.body.classList.toggle('menu-open', !open);
      });
      mobileMenu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
          toggle.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      });
    }

    document.querySelectorAll('img[data-fallback]').forEach((img) => {
      img.addEventListener('error', () => {
        const fallback = img.dataset.fallback;
        if (fallback && img.src !== fallback) {
          img.src = fallback;
        }
      }, { once: true });
    });

    // Highlight active nav item as user scrolls through homepage sections
    if (isHome && 'IntersectionObserver' in window) {
      const observed = ['home', 'tools', 'articles', 'contact']
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      const setActive = (id) => {
        document.querySelectorAll('[data-section]').forEach((link) => {
          const matches = link.dataset.section === id;
          link.classList.toggle('is-active', matches);
          if (matches) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      };
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setActive(visible.target.id);
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: [0.2, 0.45, 0.7] }
      );
      observed.forEach((section) => observer.observe(section));
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
