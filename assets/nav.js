(function () {
  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  const isHome = path === '/';

  const navGroups = [
    {
      label: 'Tools',
      href: '/tools/',
      section: 'tools',
      items: [
        { label: 'All tools', href: '/tools/' },
        { label: 'Start here', href: '/start/' },
        { label: 'Budget & planning', href: '/tools/#budget-planning' },
        { label: 'Bids & contractors', href: '/tools/#bid-contractor' },
        { label: 'ADA & risk', href: '/tools/#risk-compliance' },
        { label: 'Communication tools', href: '/tools/#communication-reporting' },
      ],
    },
    {
      label: 'Resources',
      href: '/resources/',
      section: 'resources',
      items: [
        { label: 'Resource library', href: '/resources/' },
        { label: 'Articles', href: '/articles/' },
        { label: 'Glossary', href: '/glossary/' },
        { label: 'Start here', href: '/start/' },
      ],
    },
    {
      label: 'Contact',
      href: '/contact/',
      section: 'contact',
      items: [
        { label: 'Contact Ryan', href: '/contact/' },
        { label: 'About Ryan', href: '/about/' },
        { label: 'Forticon', href: 'https://www.forticon.com', external: true },
      ],
    },
  ];

  const isActivePath = (href) => {
    if (href.startsWith('http')) return false;
    const cleanHref = href.split('#')[0];
    if (cleanHref === '/') return path === '/';
    return path.startsWith(cleanHref);
  };

  const topLink = (item) => {
    const active = isActivePath(item.href) ? ' is-active' : '';
    const current = isActivePath(item.href) ? ' aria-current="page"' : '';
    return `<a class="nav-link${active}"${current} data-section="${item.section}" href="${item.href}">${item.label}</a>`;
  };

  const dropdown = (group) => {
    const active = group.items.some((item) => isActivePath(item.href)) ? ' is-active' : '';
    const items = group.items
      .map((item) => {
        const target = item.external ? ' target="_blank" rel="noopener"' : '';
        return `<a href="${item.href}"${target}>${item.label}</a>`;
      })
      .join('');
    return `<div class="nav-dropdown"><a class="nav-link nav-parent${active}" data-section="${group.section}" href="${group.href}">${group.label}<span aria-hidden="true">▾</span></a><div class="dropdown-menu">${items}</div></div>`;
  };

  const desktopLinks = navGroups.map(dropdown).join('');
  const mobileLinks = navGroups
    .map((group) => {
      const items = group.items
        .map((item) => {
          const target = item.external ? ' target="_blank" rel="noopener"' : '';
          return `<a href="${item.href}"${target}>${item.label}</a>`;
        })
        .join('');
      return `<details class="mobile-nav-group" ${group.items.some((item) => isActivePath(item.href)) ? 'open' : ''}><summary>${group.label}</summary><div>${items}</div></details>`;
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
        <nav class="links" aria-label="Primary navigation">${desktopLinks}</nav>
        <a class="btn nav-cta" href="/contact/">Get Free Condition Report</a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
        ${mobileLinks}
        <a class="btn" href="/contact/">Get Free Condition Report</a>
      </nav>
    </header>`;

  const hasStaticHeader = document.querySelector('[data-site-header]');
  if (!hasStaticHeader) {
    document.body.insertAdjacentHTML('afterbegin', header);
  }

  const onReady = () => {
    const main = document.querySelector('main');
    if (main && !main.id) main.id = 'main-content';

    const footer = `
      <footer class="footer">
        <div class="wrap footer-grid">
          <div>
            <div class="eyebrow">// Free tools + weekly insights</div>
            <h2 class="display">Ryan Clark</h2>
            <p>Pavement, ADA, and bid strategy education for property managers, HOA boards, facility teams, and commercial owners.</p>
            <p style="margin-top:12px; font-size:13px;">Pavement &amp; Concrete Specialist · <a href="https://www.forticon.com" target="_blank" rel="noopener" style="color:var(--yellow);">Forticon</a></p>
            <p style="margin-top:12px"><a href="/start/" style="color:var(--yellow); font-weight:700">→ Not sure where to start?</a></p>
          </div>
          <nav aria-label="Footer tool navigation">
            <h3>Tools</h3>
            <a href="/tools/">All Tools</a>
            <a href="/start/">Tool Finder</a>
            <a href="/tools/#budget-planning">Budget &amp; Planning</a>
            <a href="/tools/#bid-contractor">Bids &amp; Contractors</a>
            <a href="/tools/#risk-compliance">ADA &amp; Risk</a>
            <a href="/tools/#communication-reporting">Communication</a>
          </nav>
          <nav aria-label="Footer resource navigation">
            <h3>Resources</h3>
            <a href="/resources/">Resource Library</a>
            <a href="/articles/">Articles</a>
            <a href="/glossary/">Glossary</a>
            <a href="/california-pavement-contractors/">California Contractors</a>
            <a href="/about/">About Ryan</a>
            <a href="/contact/">Contact</a>
          </nav>
        </div>
      </footer>`;

    if (!document.querySelector('.footer')) {
      document.body.insertAdjacentHTML('beforeend', footer);
    }

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
      img.addEventListener(
        'error',
        () => {
          const fallback = img.dataset.fallback;
          if (fallback && img.src !== fallback) img.src = fallback;
        },
        { once: true }
      );
    });

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
