(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');

  document.querySelectorAll('.site-footer').forEach((footer) => footer.remove());
  const siteRoot = window.location.hostname.endsWith('github.io') ? '/HackWellSH.github.io/' : '/';
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-brand">
      <div class="eyebrow">Wellington College International Shanghai</div>
      <h2>HACKWELL <span>2026</span></h2>
      <p>BEYOND THE SCREEN</p>
      <strong>31 OCT — 01 NOV</strong>
    </div>
    <div class="footer-links">
      <div><strong>EXPLORE</strong><a href="${siteRoot}">Home</a><a href="${siteRoot}about/">About</a><a href="${siteRoot}schedule/">Schedule</a><a href="${siteRoot}workshops/">Workshops</a></div>
      <div><strong>CONNECT</strong><a href="mailto:wellHackteam.wcis@wellingtoncollege.cn">Email the team</a><a href="${siteRoot}location/">Find the campus</a><a href="${siteRoot}faq/">Questions</a></div>
      <div><strong>STUDENT-LED STEM EVENT</strong><p>Ideas, collaboration and real-world making from the Wellington community.</p></div>
    </div>
    <div class="footer-bottom"><span>© 2026 HACKWELL</span><span>WELLINGTON COLLEGE INTERNATIONAL SHANGHAI</span></div>`;
  document.body.append(footer);
  const footerStyle = document.createElement('style');
  footerStyle.textContent = `
    .site-footer { background: #e9f6ee; color: #164b38; background-image: linear-gradient(45deg, rgba(104, 205, 151, .14) 1px, transparent 1px), linear-gradient(-45deg, rgba(104, 205, 151, .14) 1px, transparent 1px); background-size: 80px 80px; padding: 96px 8vw 28px; margin-top: 0; }
    .site-footer .footer-brand { max-width: 1100px; margin: 0 auto; }
    .site-footer .eyebrow { color: #69e7a2; font-size: 14px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
    .site-footer h2 { margin: 22px 0 8px; color: #0d3d2c; font-size: clamp(4rem, 9vw, 9rem); line-height: .9; letter-spacing: -.08em; }
    .site-footer h2 span { color: #238d57; }
    .site-footer .footer-brand p { margin: 0 0 32px; color: #164b38; font-size: 22px; letter-spacing: .28em; }
    .site-footer .footer-brand strong { color: #164b38; font-size: 20px; }
    .site-footer .footer-links { max-width: 1100px; margin: 76px auto 0; padding-top: 56px; border-top: 1px solid rgba(22, 75, 56, .28); display: grid; grid-template-columns: 1fr 1fr 1.15fr; gap: 56px; }
    .site-footer .footer-links > div { display: flex; flex-direction: column; gap: 12px; }
    .site-footer .footer-links strong { color: #164b38; font-size: 14px; letter-spacing: .14em; }
    .site-footer .footer-links a, .site-footer .footer-links p { margin: 0; color: #2d8059; font-size: 21px; }
    .site-footer .footer-links p { margin-top: 30px; max-width: 360px; line-height: 1.55; }
    .site-footer .footer-bottom { max-width: 1100px; margin: 60px auto 0; padding-top: 28px; border-top: 1px solid rgba(22, 75, 56, .28); display: flex; justify-content: space-between; gap: 24px; color: #5b806f; font-size: 14px; letter-spacing: .1em; }
    @media (max-width: 700px) { .site-footer { padding: 64px 7vw 24px; } .site-footer .footer-links { grid-template-columns: 1fr; gap: 34px; margin-top: 54px; padding-top: 36px; } .site-footer .footer-bottom { flex-direction: column; margin-top: 40px; } }
  `;
  document.head.append(footerStyle);

  const siteRoutes = new Set(['about', 'schedule', 'workshops', 'prompts', 'faq', 'location']);
  document.querySelectorAll('.site-nav a[href], .site-footer a[href], a.card[href]').forEach((link) => {
    const href = link.getAttribute('href') ?? '';
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(href)) return;
    const route = href.split(/[?#]/, 1)[0].split('/').find((segment) => siteRoutes.has(segment));
    link.setAttribute('href', route ? `${siteRoot}${route}/` : siteRoot);
  });

  const links = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const open = links?.classList.toggle('open') ?? false;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  links?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));

  const canvas = document.createElement('canvas');
  canvas.className = 'code-rain';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);
  const context = canvas.getContext('2d');
  const snippets = ['const future = build();', '01010110', '{ impact: true }', 'while(true)', '<Hackwell />', '0x4A7F', 'quantum_state++', 'SYSTEM_READY', '/build/create/impact', 'AI_MODEL'];
  let width = 0; let height = 0; let columns = []; let pointer = { x: -1000, y: -1000 };
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = width * ratio; canvas.height = height * ratio;
    canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.max(12, Math.floor(width / (width < 600 ? 52 : 30)));
    columns = Array.from({ length: count }, (_, index) => ({ x: index * (width / count), y: Math.random() * height, speed: 0.3 + Math.random() * 1.05, length: 4 + Math.floor(Math.random() * 12), size: width < 600 ? 9 : 11, chars: Array.from({ length: 18 }, () => snippets[Math.floor(Math.random() * snippets.length)]) }));
  };
  const draw = (time = 0) => {
    context.clearRect(0, 0, width, height);
    const gradient = context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(7,17,13,0.12)'); gradient.addColorStop(0.5, 'rgba(7,17,13,0.02)'); gradient.addColorStop(1, 'rgba(7,17,13,0.65)');
    context.fillStyle = gradient; context.fillRect(0, 0, width, height);
    columns.forEach((column) => {
      column.y += column.speed;
      if (column.y - column.length * 18 > height) column.y = -Math.random() * height * 0.5;
      const distance = Math.hypot(pointer.x - column.x, pointer.y - column.y);
      const focus = Math.max(0, 1 - distance / 220);
      context.font = `${column.size}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      for (let i = 0; i < column.length; i += 1) {
        const y = column.y - i * 18;
        if (y < -20 || y > height + 20) continue;
        const flicker = Math.sin(time * 0.004 + i + column.x) > 0.94 ? 0.7 : 1;
        context.globalAlpha = (0.06 + focus * 0.15) * flicker * (1 - Math.abs(y - height / 2) / height * 0.4);
        context.fillStyle = i === 0 ? '#b6ffd0' : '#4bc77e';
        const value = column.chars[(Math.floor(time / 700) + i) % column.chars.length];
        context.fillText(value.slice(0, Math.max(2, Math.floor(10 - i * 0.35))), column.x + Math.sin(time * 0.001 + i) * focus * 5, y);
      }
    });
    context.globalAlpha = 1;
    if (!reduceMotion) requestAnimationFrame(draw);
  };
  resize(); draw();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', (event) => { pointer = { x: event.clientX, y: event.clientY }; document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`); document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`); }, { passive: true });

  const revealItems = document.querySelectorAll('.section, .section-header, .page-hero-content, .card, .event, .split > *');
  if (reduceMotion) revealItems.forEach((item) => item.classList.add('visible'));
  else new IntersectionObserver((entries, observer) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 }).observe;
  const observer = new IntersectionObserver((entries, observerInstance) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observerInstance.unobserve(entry.target); } }), { threshold: 0.12 });
  if (!reduceMotion) revealItems.forEach((item) => observer.observe(item));
  window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
})();

window.addEventListener('beforeunload', () => {});
