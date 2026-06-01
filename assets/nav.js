(function () {
  const navItems = [
    { label: 'Home', href: '/', section: 'home' },
    { label: 'Tools', href: '/tools/', section: 'tools' },
    { label: 'Projects', href: '/projects/', section: 'projects' },
    { label: 'Articles', href: '/articles/', section: 'articles' },
    { label: 'Contact', href: '/contact/', section: 'contact' },
  ];

  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  const isHome = path === '/';
  const isActivePath = (href) => {
    if (href === '/') return path === '/';
    return path.startsWith(href);
  };

  const links = navItems
    .map((item) => {
      const href = isHome && item.section !== 'home' ? `#${item.section}` : item.href;
      const active = isActivePath(item.href) ? ' aria-current="page" class="nav-link is-active"' : ' class="nav-link"';
      return `<a${active} data-section="${item.section}" href="${href}">${item.label}</a>`;
    })
    .join('');

  const header = `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div class="stripe" aria-hidden="true"></div>
    <header class="top" data-site-header>
      <div class="wrap nav">
        <a class="brand" href="/" aria-label="Ryan Clark home">
          <small>// Ryan Clark</small>
          <strong>Pavement Decisions</strong>
        </a>
        <nav class="links" aria-label="Primary navigation">${links}</nav>
        <a class="btn nav-cta" href="/contact/">Email Ryan</a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
        ${links}
        <a class="btn" href="/contact/">Email Ryan</a>
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
            <div class="eyebrow">// Free tools + field notes</div>
            <h2 class="display">Ryan Clark</h2>
            <p>Pavement, ADA, and bid strategy education for property managers, HOA boards, facility teams, and commercial owners. Free tools and weekly field notes to help you make better decisions before capital dollars are committed.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h3>Explore</h3>
            <a href="/tools/">Free Tools</a>
            <a href="/articles/">Articles</a>
            <a href="/projects/">Projects</a>
            <a href="/contact/">Contact</a>
          </nav>
          <nav aria-label="Tool navigation">
            <h3>Tools</h3>
            <a href="/tools/material-picker/">Material Picker</a>
            <a href="/tools/three-bid-decoder/">Three-Bid Decoder</a>
            <a href="/tools/contractor-vetting-scorecard/">Contractor Vetting Scorecard</a>
            <a href="/tools/ada-risk-scorecard/">ADA Risk Scorecard</a>
            <a href="/tools/pavement-insurance-claim-estimator/">Insurance Claim Estimator</a>
            <a href="/tools/tenant-notification-letter-generator/">Tenant Letter Generator</a>
            <a href="/tools/hoa-reserve-estimator/">HOA Reserve Estimator</a>
            <a href="/tools/noi-impact-calculator/">NOI Impact Calculator</a>
            <a href="/tools/board-meeting-language-generator/">Board Language Generator</a>
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

    if (isHome && 'IntersectionObserver' in window) {
      const observed = ['home', 'tools', 'projects', 'articles', 'contact']
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      const setActive = (id) => {
        document.querySelectorAll('[data-section]').forEach((link) => {
          link.classList.toggle('is-active', link.dataset.section === id);
          if (link.dataset.section === id) link.setAttribute('aria-current', 'location');
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
