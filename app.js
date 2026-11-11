// @ts-nocheck
/* eslint-disable */
function initPortfolio() {
  if (typeof window === 'undefined' || window.__pfInit) return;
  window.__pfInit = true;
  document.documentElement.classList.add('js');

;{

        // Modal Data for Work Samples extracted directly from PDF
        const SOCIAL_SAMPLES = [
            {caption: 'Pickleball Paddle Pre-Order Poster', src: 'assets/work/social-01.webp'},
            {caption: 'Badminton Shoe Promo Ad', src: 'assets/work/social-02.webp'},
            {caption: 'T-Shirt Mockup Design (Front & Back)', src: 'assets/work/social-03.webp'},
            {caption: 'Mango Graham Shake Promo', src: 'assets/work/social-04.webp'},
            {caption: 'Cookies ’N Cream Shake Promo', src: 'assets/work/social-05.webp'},
            {caption: 'Chocolate Heaven Shake Promo', src: 'assets/work/social-06.webp'},
            {caption: 'Blueberry Cheesecake Shake Promo', src: 'assets/work/social-07.webp'},
            {caption: 'Strawberry Shake Promo', src: 'assets/work/social-08.webp'},
            {caption: 'Fashion Big Sale Collage Layout', src: 'assets/work/social-09.webp'},
            {caption: 'Podcast Network Banner', src: 'assets/work/social-10.webp'},
            {caption: 'Pickleboys Apparel Design Sheet', src: 'assets/work/social-11.webp'}
        ];

        const SOLAR_SAMPLES = [
            {caption: 'Desktop Welcome Email: Hero Banner, Welcome Copy & Social Footer', src: 'assets/work/solar-01.webp'},
            {caption: 'Mobile Responsive Email Preview', src: 'assets/work/solar-02.webp'}
        ];

        const LANDING_SAMPLES = [
            {caption: 'Smasher’s Lounge: Precision Gear for Every Player (Hero Section)', src: 'assets/work/landing-01.webp'},
            {caption: 'Torque District: Throttle Into Greatness (Promotional Hero Banner)', src: 'assets/work/landing-02.webp'}
        ];

        const PIPELINE_SAMPLES = [
            {caption: 'Network Intelligence Dashboard: Outreach Stage, Function, Seniority & Top Industries', src: 'assets/work/pipeline-01.webp'},
            {caption: 'Contacts Database: Priority Score, Relevance & Outreach Stage Tracking', src: 'assets/work/pipeline-02.webp'},
            {caption: 'Outreach Pipeline Board: Contacts by Stage with Filters', src: 'assets/work/pipeline-03.webp'}
        ];

        const NETWORK_SAMPLES = [
            {caption: 'Lead Generation Dashboard, Charts & Prospect List', src: 'assets/work/network-01.webp'},
            {caption: 'Network Search: Filterable Executive Database', src: 'assets/work/network-02.webp'},
            {caption: 'Network Intelligence Dashboard, Top Industries, Top Countries & Charts', src: 'assets/work/network-03.webp'}
        ];

        const EXPENSE_SAMPLES = [
            {caption: 'Expense & Reimbursement Report', src: 'assets/work/expense-01.webp'}
        ];

        const EA_SAMPLES = [
            {caption: 'Trip Itinerary & Travel Planner', src: 'assets/work/ea-01.webp'},
            {caption: 'Key Metrics & Status Breakdown Dashboard', src: 'assets/work/ea-02.webp'},
            {caption: 'Expense Log, Bookings & Wallet, Exchange Rate Reference, Hotel Comparison Matrix', src: 'assets/work/ea-03.webp'},
            {caption: 'Hotel Comparison Executive Summary, Meeting Agenda, Packing List, Action Items', src: 'assets/work/ea-04.webp'}
        ];

        const modalData = {
            'service-ea': {
                category: 'Executive Assistance & Travel',
                title: 'Executive Assistance & Travel Support',
                description: 'Real templates and trackers I build for executives: trip itineraries, hotel scoring, expense reporting, meeting agendas and more.',
                deliverables: [
                    'Trip Itinerary & Travel Planner with day-by-day costs and countdown',
                    'Hotel Comparison Matrix & Executive Summary with recommended pick',
                    'Expense Log, Reimbursement Report & live Exchange Rate Reference',
                    'Meeting Agenda (multi-timezone), Action Items & Packing List'
                ],
                tools: 'Google Sheets, Google Docs, Microsoft 365',
                value: 'Removes travel and scheduling friction so executives can focus on decisions.'
            },
            'project-1': {
                category: 'Executive Assistance & Logistics',
                title: 'Executive Travel & Hotel Scoring Comparison Matrix',
                description: 'A comprehensive travel logistics system built in Google Sheets to evaluate hotels based on executive parameters including rating score, night rates, Wi-Fi speed, distance to meeting venue, and cancellation policies.',
                deliverables: [
                    'Hotel Comparison Matrix scoring (Marriott Downtown rated 8.3/10 at $740 total)',
                    'Multi-Timezone Agenda Sync (Client TZ vs Philippines GMT)',
                    'Categorized Packing List (Clothing, Toiletries, Tech & Docs)',
                    'Flight Confirmation & Airport Transfer Tracking'
                ],
                tools: 'Google Sheets, Microsoft Excel, Google Maps API',
                value: 'Eliminates travel friction, ensures executive safety, and saves 6+ hours of manual research per trip.',
                images: EA_SAMPLES
            },
            'project-2': {
                category: 'Financial Administration',
                title: 'Expense & Multi-Currency Reimbursement Tracker',
                description: 'An automated expense logging spreadsheet featuring live exchange rates from Google Finance to track global travel costs and employee reimbursements accurately.',
                deliverables: [
                    'Live Exchange Rate Integration (USD, PHP, EUR, GBP, AUD)',
                    'Categorized Expense Breakdown ($946.88 Pending Reimbursement)',
                    'Approval Status Tracking Workflow',
                    'Digital Nomad Connectivity & Wi-Fi Budget Logs'
                ],
                tools: 'Google Finance Formulas, QuickBooks Online Basic, Excel',
                value: 'Maintains 100% financial auditing precision across multi-currency operations.',
                images: EXPENSE_SAMPLES
            },
            'project-3': {
                category: 'Lead Generation & Data Mining',
                title: 'B2B Network Intelligence & Executive Prospecting',
                description: 'Targeted market research and executive profiling dashboard tracking high-level decision makers across Fortune 500 and global corporations.',
                deliverables: [
                    '93 High-Level Executive Matches ( Hayco, Oriflame, VF Corp, Cartier, J&J)',
                    'Custom Search Filtering by Seniority (VP / Director / Manager)',
                    'Global Distribution Breakdown (Switzerland, US, Netherlands, Germany)',
                    'Function Classification (Supply Chain, Procurement, Operations)'
                ],
                tools: 'LinkedIn Sales Navigator, B2B Research, Excel Filters',
                value: 'Accelerates targeted B2B sales campaigns with verified decision-maker contacts.',
                images: NETWORK_SAMPLES
            },
            'project-4': {
                category: 'CRM Analytics',
                title: 'CRM Lead Generation & Activity Dashboard',
                description: 'Sales pipeline monitoring system tracking lead sources, application metrics, response rates, and follow-up schedules.',
                deliverables: [
                    '31 Total Active B2B Leads Tracked',
                    '2.7% Response Rate Monitoring & Active Interview Schedules',
                    'Multi-Platform Lead Sourcing Breakdown (Alignable, LinkedIn, Direct Email)',
                    'Weekly Outreach Activity Status Log'
                ],
                tools: 'CRM Tools, Google Sheets, Lead Tracker',
                value: 'Provides leadership with clear visibility into outreach efficiency and pipeline health.',
                images: PIPELINE_SAMPLES
            },
            'project-5': {
                category: 'Web & Landing Page Design',
                title: 'E-Commerce Landing Page Designs ("Smasher\'s Lounge" & "Torque District")',
                description: 'Custom web UI mockups for sports equipment and automotive apparel brands focusing on sleek typography and clear CTA placement.',
                deliverables: [
                    'Smasher\'s Lounge: Precision Sports Gear Showcase',
                    'Torque District: Automotive Apparel & Promotional Sale Banners',
                    'Hero Section Layout & Product Grid System',
                    'Mobile Responsive UI Navigation Concepts'
                ],
                tools: 'Canva, Web UI Design, Landing Page Builders',
                value: 'Boosts online visitor engagement and brand authority.',
                images: LANDING_SAMPLES
            },
            'project-7': {
                category: 'Social Media & Graphic Design',
                title: 'Social Media Posts & Marketing Graphics',
                description: 'A collection of promotional graphics created for sports retail, food and beverage, apparel and content brands: product ads, social media posts, apparel mockups and banners. Click any graphic to enlarge it.',
                deliverables: [
                    'Product promo posters (Pickleball paddle pre-order, Badminton shoe ad)',
                    'Branded social media post series (BALSA sa Tejiro shake flavors)',
                    'Apparel and T-shirt mockups (Pickleboys / Balayan Smasher\'s Hub)',
                    'Marketing banners and layouts (Podcast Network, Fashion Big Sale)'
                ],
                tools: 'Canva, Graphic Design, Social Media Content Creation',
                value: 'Delivers consistent, eye-catching branded content that keeps social feeds active and drives inquiries.',
                imageGrid: true,
                images: SOCIAL_SAMPLES
            },
            'project-6': {
                category: 'Email Marketing',
                title: 'Solar Energy Onboarding Email Campaign',
                description: 'Automated welcome email newsletter design for "Alex & Co. Solar" engineered for high deliverability and customer onboarding.',
                deliverables: [
                    'Desktop & Mobile Screen Responsive HTML Email Layouts',
                    'Value-driven Welcome Copy & Energy Saving Mission Statement',
                    'Integrated Contact CTA & Social Media Links',
                    'Clean Editorial Formatting'
                ],
                tools: 'HTML Email Design, Canva, Email Automation Tools',
                value: 'Drives subscriber engagement immediately after signup.',
                images: SOLAR_SAMPLES
            }
        };

        // Fill card thumbnails from the embedded sample arrays
        document.querySelectorAll('img[data-sample]').forEach(el => {
            const arr = window[el.dataset.sample] || (el.dataset.sample === 'SOCIAL_SAMPLES' ? SOCIAL_SAMPLES : null);
            if (arr && arr[el.dataset.idx]) el.src = arr[el.dataset.idx].src;
        });

        // Modal Functions
        function openModal(projectId) {
            const data = modalData[projectId];
            if (!data) return;

            document.getElementById('modal-category').innerText = data.category;
            document.getElementById('modal-title').innerText = data.title;
            
            let deliverablesList = data.deliverables.map(item => `<li class="flex items-center gap-2 text-xs text-ivory-300"><i class="fa-solid fa-check text-mineral-400"></i> ${item}</li>`).join('');

            let gallery = '';
            if (data.images && data.images.length) {
                const wrapCls = data.imageGrid ? 'grid grid-cols-2 sm:grid-cols-3 gap-3 items-start' : 'space-y-3';
                gallery = '<div class="space-y-3 pt-2"><h4 class="text-xs font-bold text-white uppercase tracking-wider">Sample Work:</h4><div class="' + wrapCls + '">' +
                    data.images.map((img, i) => `<figure class="space-y-1.5"><img loading="lazy" decoding="async" src="${img.src}" alt="${img.caption}" data-act="openLightbox" class="w-full rounded-xl border border-white/15 cursor-zoom-in hover:border-mineral-400 transition-colors"><figcaption class="text-[11px] text-ivory-300">${img.caption}</figcaption></figure>`).join('') + '</div></div>';
            }

            document.getElementById('modal-body').innerHTML = `
                <p class="text-sm text-ivory-200 leading-relaxed">${data.description}</p>
                ${gallery}
                <div class="space-y-2 pt-2">
                    <h4 class="text-xs font-bold text-white uppercase tracking-wider">Key Deliverables Included:</h4>
                    <ul class="space-y-1.5">${deliverablesList}</ul>
                </div>
                <div class="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                        <span class="text-[10px] text-ivory-300 font-semibold uppercase block">Software Used:</span>
                        <span class="text-xs font-bold text-mineral-400">${data.tools}</span>
                    </div>
                    <div>
                        <span class="text-[10px] text-ivory-300 font-semibold uppercase block">Business Value:</span>
                        <span class="text-xs font-bold text-mineral-400">${data.value}</span>
                    </div>
                </div>
            `;

            document.getElementById('project-modal').classList.remove('hidden');
            document.getElementById('modal-body').scrollTop = 0;
        }

        function openLightbox(src) {
            document.getElementById('lightbox-img').src = src;
            document.getElementById('lightbox').classList.remove('hidden');
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.add('hidden');
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (!document.getElementById('lightbox').classList.contains('hidden')) closeLightbox();
                else closeModal();
            }
        });

        function closeModal() {
            document.getElementById('project-modal').classList.add('hidden');
        }

        // Mobile Menu Toggle Logic
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Portfolio Filtering Logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'bg-mineral-500', 'text-navy-950');
                    b.classList.add('bg-navy-800', 'text-ivory-300');
                });
                btn.classList.add('active', 'bg-mineral-500', 'text-navy-950');
                btn.classList.remove('bg-navy-800', 'text-ivory-300');

                const cat = btn.getAttribute('data-category');
                portfolioItems.forEach(item => {
                    if (cat === 'all' || item.getAttribute('data-category') === cat) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });

        // Interactive Currency Widget Logic
        const usdInput = document.getElementById('usd-amount');
        const currSelect = document.getElementById('target-currency');
        const convertedResult = document.getElementById('converted-total');
        const rateNote = document.getElementById('rate-note');

        // Approximate backup rates (per 1 USD), used only if live rates cannot be loaded
        const FALLBACK_RATES = {
            AED: 3.67, AUD: 1.52, BDT: 121, BGN: 1.80, BRL: 5.40, CAD: 1.38, CHF: 0.80, CLP: 940, CNY: 7.10,
            COP: 4000, CZK: 23, DKK: 6.90, EGP: 48, EUR: 0.92, GBP: 0.79, HKD: 7.80, HUF: 360, IDR: 16000,
            ILS: 3.70, INR: 84, JPY: 150, KRW: 1380, KWD: 0.31, MXN: 19.5, MYR: 4.30, NOK: 10.8, NZD: 1.67,
            PEN: 3.70, PHP: 58.25, PKR: 280, PLN: 4.00, QAR: 3.64, RON: 4.60, SAR: 3.75, SEK: 10.5, SGD: 1.33,
            THB: 34, TRY: 34, TWD: 32, UAH: 41, USD: 1, VND: 25000, ZAR: 18
        };

        let currencyNames = null;
        try { currencyNames = new Intl.DisplayNames(['en'], { type: 'currency' }); } catch (e) {}

        function currencyLabel(code) {
            let name = '';
            try { name = currencyNames ? currencyNames.of(code) : ''; } catch (e) {}
            return name && name !== code ? `${code} (${name})` : code;
        }

        function populateCurrencies(rates) {
            const previous = currSelect.options[currSelect.selectedIndex]?.dataset.code || 'PHP';
            currSelect.innerHTML = '';
            Object.keys(rates).sort().forEach(code => {
                const opt = document.createElement('option');
                opt.value = rates[code];
                opt.dataset.code = code;
                opt.textContent = currencyLabel(code);
                if (code === previous) opt.selected = true;
                currSelect.appendChild(opt);
            });
            updateConversion();
        }

        function updateConversion() {
            const val = parseFloat(usdInput.value) || 0;
            const rate = parseFloat(currSelect.value);
            const opt = currSelect.options[currSelect.selectedIndex];
            const symbol = opt.dataset.code || opt.text.split(' ')[0];
            const total = (val * rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            convertedResult.innerText = `${total} ${symbol}`;
        }

        async function loadLiveRates() {
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 8000);
            try {
                const res = await fetch('https://open.er-api.com/v6/latest/USD', { signal: controller.signal });
                const data = await res.json();
                if (data.result !== 'success' || !data.rates) throw new Error('bad response');
                populateCurrencies(data.rates);
                const when = new Date(data.time_last_update_unix * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
                rateNote.innerHTML = `Live rates for ${Object.keys(data.rates).length} currencies &middot; updated ${when} &middot; <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener" class="underline hover:text-mineral-400">Rates by ExchangeRate-API</a>`;
            } catch (err) {
                populateCurrencies(FALLBACK_RATES);
                rateNote.textContent = 'Live rates unavailable right now. Showing approximate rates.';
            } finally {
                clearTimeout(timer);
            }
        }

        usdInput.addEventListener('input', updateConversion);
        currSelect.addEventListener('change', updateConversion);
        populateCurrencies(FALLBACK_RATES);
        loadLiveRates();

        // Contact form: sends the message to the owner's inbox via Formspree
        const FORM_ENDPOINT = 'https://formspree.io/f/mqpppnqd';
        const FALLBACK_EMAIL = 'markalexishernandez.va@gmail.com';

        document.getElementById('contact-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = this;
            const name = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const message = form.querySelector('textarea').value.trim();
            const status = document.getElementById('form-status');
            const btn = document.getElementById('contact-submit');
            const btnLabel = btn.querySelector('span');
            const originalLabel = btnLabel.textContent;

            function show(text, ok) {
                status.textContent = text;
                status.className = 'max-w-xl mx-auto text-sm font-semibold pt-2 ' + (ok ? 'text-mineral-400' : 'text-mineral-400');
            }

            btn.disabled = true;
            btnLabel.textContent = 'Sending...';
            status.className = 'hidden';

            try {
                const res = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        _subject: 'New portfolio inquiry from ' + name,
                        name: name,
                        email: email,
                        message: message,
                        _gotcha: form.querySelector('input[name="botcheck"]').checked ? 'bot' : ''
                    })
                });
                if (res.ok) {
                    show('Thank you! Your message has been sent. I will get back to you shortly.', true);
                    form.reset();
                } else {
                    throw new Error('Request failed');
                }
            } catch (err) {
                show('Sorry, your message could not be sent. Please email ' + FALLBACK_EMAIL + ' directly.', false);
            } finally {
                btn.disabled = false;
                btnLabel.textContent = originalLabel;
            }
        });
    
;(function(){
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('[data-act]') : null;
    if (!t) return;
    var a = t.getAttribute('data-act'), g = t.getAttribute('data-arg');
    if (a === 'openModal') openModal(g);
    else if (a === 'closeModal') closeModal();
    else if (a === 'closeLightbox') closeLightbox();
    else if (a === 'openLightbox') openLightbox(t.src);
  });
  requestAnimationFrame(function(){ document.documentElement.classList.remove('pf-preload'); });
})();

}

;{

        (function () {
            // Scroll progress bar
            var bar = document.getElementById('scroll-progress');
            var ticking = false;
            function updateBar() {
                var h = document.documentElement.scrollHeight - window.innerHeight;
                bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ')';
                ticking = false;
            }
            window.addEventListener('scroll', function () {
                if (!ticking) { ticking = true; requestAnimationFrame(updateBar); }
            }, { passive: true });
            updateBar();

            // Reveal-on-scroll (skipped for reduced-motion / unsupported browsers)
            if (!document.documentElement.classList.contains('js')) return;

            function add(selector, opts) {
                opts = opts || {};
                var step = opts.step || 0, base = opts.base || 0;
                document.querySelectorAll(selector).forEach(function (el, i) {
                    el.classList.add('reveal');
                    if (opts.variant) el.setAttribute('data-reveal', opts.variant);
                    el.style.setProperty('--reveal-delay', (base + Math.min(i * step, 480)) + 'ms');
                    el.setAttribute('data-rv', String(base + Math.min(i * step, 480)));
                });
            }

            // Every section enters the same way: fade and rise, staggered, after the curtain opens
            add('#home .lg\\:col-span-7 > *', { step: 110 });
            add('#home .hero-right', { variant: 'right', base: 250 });
            add('.proof li', { step: 90 });
            add('#about .about-fig', { variant: 'left' });
            add('#about .lg\\:col-span-8 > *', { step: 110, base: 120 });
            add('#services > .text-center, #services > div:first-child');
            add('#services .svc', { step: 90 });
            add('#portfolio .max-w-7xl > div:first-child');
            add('#portfolio-grid > .portfolio-item', { step: 90 });
            add('#tools > .text-center, #tools > div:first-child');
            add('#tools .grid > *', { step: 70 });
            add('.process h3');
            add('.steps > li', { step: 110 });
            add('#credibility .lg\\:col-span-6:first-child', { variant: 'left' });
            add('#credibility .lg\\:col-span-6:last-child', { variant: 'right', base: 150 });
            add('#faq h2');
            add('#faq details', { step: 80 });
            add('#contact > .glass-card');

            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    var el = entry.target;
                    io.unobserve(el);
                    // Hand control back to the original hover styles once the entrance has finished
                    var delay = parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0;
                    var hold = Math.max(0, (window.__cxUntil || 0) - Date.now());
                    setTimeout(function () { el.classList.add('is-visible'); }, hold);
                    setTimeout(function () {
                        el.classList.remove('reveal', 'is-visible');
                        el.removeAttribute('data-reveal');
                        el.style.removeProperty('--reveal-delay');
                    }, hold + 900 + delay);
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

            document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
        })();
    
}

;(function () {
  var wipe = document.createElement('div');
  wipe.id = 'cx-wipe'; wipe.className = 'on closed notrans'; wipe.setAttribute('aria-hidden', 'true');
  wipe.innerHTML = '<i class="cx-a"></i><i class="cx-b"></i><span class="cx-mark">MH</span>';
  document.body.appendChild(wipe);
  var introT = [];
  function playIntro() {
    introT.forEach(clearTimeout); introT = [];
    window.__cxUntil = Date.now() + 900;
    wipe.className = 'on closed notrans';
    void wipe.offsetWidth;
    wipe.classList.remove('notrans');
    introT.push(setTimeout(function () { wipe.classList.remove('closed'); }, 750));
    introT.push(setTimeout(function () { wipe.classList.remove('on'); }, 1700));
  }
  playIntro();
  // Replay the opening curtain when the page is restored from the back/forward cache
  window.addEventListener('pageshow', function (e) { if (e.persisted) { window.scrollTo(0, 0); playIntro(); } });

  // Cinematic wipe between sections when using in-page links
  var busy = false;
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a || a.classList.contains('skip-link') || busy || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
    var id = a.getAttribute('href');
    if (!id || id.length < 2) return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    busy = true;
    wipe.classList.add('on');
    void wipe.offsetWidth;
    wipe.classList.add('closed');
    setTimeout(function () {
      window.__cxUntil = Date.now() + 420;
      replaySection(target);
      var y = target.getBoundingClientRect().top + window.scrollY - (id === '#home' ? 0 : 64);
      root_scroll(Math.max(y, 0));
      try { history.replaceState(null, '', id); } catch (err) {}
      setTimeout(function () {
        wipe.classList.remove('closed');
        setTimeout(function () { wipe.classList.remove('on'); busy = false; }, 800);
      }, 180);
    }, 760);
  });
  // Re-arm a section's entrance animations so they play again behind the opening curtain
  function replaySection(sec) {
    var els = [].slice.call(sec.querySelectorAll('[data-rv]'));
    els.forEach(function (el) {
      var d = parseInt(el.getAttribute('data-rv'), 10) || 0;
      el.classList.remove('is-visible'); el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', d + 'ms');
    });
    [].slice.call(sec.querySelectorAll('.cx-h.cx-in, .cx-rule.cx-in')).forEach(function (el) { el.classList.remove('cx-in'); });
    void sec.offsetWidth;
    setTimeout(function () {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      [].slice.call(sec.querySelectorAll('.cx-h, .cx-rule')).forEach(function (el) { el.classList.add('cx-in'); });
      setTimeout(function () {
        els.forEach(function (el) { el.classList.remove('reveal', 'is-visible'); el.style.removeProperty('--reveal-delay'); });
      }, 1500);
    }, 420);
  }
  function root_scroll(y) {
    var h = document.documentElement, prev = h.style.scrollBehavior;
    h.style.scrollBehavior = 'auto'; window.scrollTo(0, y); h.style.scrollBehavior = prev;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Section rules, headline wipes, image push-ins
  var secs = [].slice.call(document.querySelectorAll('section'));
  secs.forEach(function (s) {
    if (s.id === 'home') return;
    var r = document.createElement('i'); r.className = 'cx-rule'; r.setAttribute('aria-hidden', 'true'); s.insertBefore(r, s.firstChild);
  });
  var items = [].slice.call(document.querySelectorAll('.cx-rule'));
  [].slice.call(document.querySelectorAll('section:not(#home) h2')).forEach(function (h) { h.classList.add('cx-h'); var w = h.parentElement || h; w.__cxH = h; if (items.indexOf(w) < 0) items.push(w); });
  [].slice.call(document.querySelectorAll('#portfolio-grid img, #credibility img, #about img')).forEach(function (im) { im.classList.add('cx-img'); items.push(im); });
  if (!('IntersectionObserver' in window)) { items.forEach(function (el) { el.classList.add('cx-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target; io.unobserve(el);
      var hold = Math.max(0, (window.__cxUntil || 0) - Date.now());
      setTimeout(function () {
        el.classList.add('cx-in');
        if (el.__cxH) el.__cxH.classList.add('cx-in');
        if (el.classList.contains('cx-img')) setTimeout(function () { el.classList.remove('cx-img', 'cx-in'); }, 1800);
      }, hold);
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -8% 0px' });
  items.forEach(function (el) { io.observe(el); });
})();

;(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Project cards: reachable and operable by keyboard
  $$('[data-act="openModal"]').forEach(function (c) {
    c.setAttribute('role', 'button'); c.setAttribute('tabindex', '0');
    var h = c.querySelector('h3'); if (h) c.setAttribute('aria-label', 'Open project: ' + h.textContent.trim());
  });
  // Filter buttons expose their state
  var fbs = $$('.filter-btn');
  function syncFilters() { fbs.forEach(function (b) { b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false'); }); }
  syncFilters();
  fbs.forEach(function (b) { b.addEventListener('click', function () { setTimeout(syncFilters, 0); }); });

  // Mobile menu: announce open/closed
  var mb = $('#mobile-menu-btn'), mm = $('#mobile-menu');
  if (mb && mm) {
    var syncMenu = function () { var open = !mm.classList.contains('hidden'); mb.setAttribute('aria-expanded', open ? 'true' : 'false'); mb.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
    syncMenu(); new MutationObserver(syncMenu).observe(mm, { attributes: true, attributeFilter: ['class'] });
  }

  // Dialog behaviour: focus in, trap, return, Escape
  var pm = $('#project-modal'), lb = $('#lightbox'), lastFocus = null;
  document.addEventListener('click', function (e) { var c = e.target.closest && e.target.closest('[data-act="openModal"]'); if (c) lastFocus = c; }, true);
  function focusables(root) { return $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', root).filter(function (el) { return el.offsetParent !== null; }); }
  if (pm) {
    new MutationObserver(function () {
      if (!pm.classList.contains('hidden')) { var c = $('[data-act="closeModal"]', pm); if (c) c.focus(); }
      else if (lastFocus) { lastFocus.focus(); }
    }).observe(pm, { attributes: true, attributeFilter: ['class'] });
  }
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if ((e.key === 'Enter' || e.key === ' ') && t && t.getAttribute && t.getAttribute('role') === 'button' && t.hasAttribute('data-act')) { e.preventDefault(); t.click(); return; }
    if (e.key === 'Escape') {
      if (lb && !lb.classList.contains('hidden')) lb.click();
      else if (pm && !pm.classList.contains('hidden')) { var c = $('[data-act="closeModal"]', pm); if (c) c.click(); }
    }
    if (e.key === 'Tab' && pm && !pm.classList.contains('hidden')) {
      var f = focusables(pm); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Nav shows where you are
  var links = $$('#navbar nav a[href^="#"]');
  if ('IntersectionObserver' in window && links.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { var on = a.getAttribute('href') === '#' + en.target.id; a.classList.toggle('is-active', on); if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['about', 'services', 'portfolio', 'tools', 'credibility'].forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  // Back to top
  var tt = document.createElement('button');
  tt.id = 'to-top'; tt.type = 'button'; tt.setAttribute('aria-label', 'Back to top'); tt.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
  document.body.appendChild(tt);
  tt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }); });
  var tick = false;
  window.addEventListener('scroll', function () {
    if (tick) return; tick = true;
    requestAnimationFrame(function () { tt.classList.toggle('show', window.scrollY > window.innerHeight * 0.9); tick = false; });
  }, { passive: true });
})();

;(function () {
  var cal = document.getElementById('cal'), btn = document.getElementById('cal-btn');
  if (!cal || !btn) return;
  var touched = false;
  function set(state) {
    cal.setAttribute('data-state', state);
    btn.textContent = state === 'messy' ? 'Resolve conflicts' : 'Undo';
    btn.setAttribute('aria-pressed', state === 'resolved' ? 'true' : 'false');
  }
  btn.addEventListener('click', function () { touched = true; set(cal.getAttribute('data-state') === 'messy' ? 'resolved' : 'messy'); });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return;
      io.disconnect();
      setTimeout(function () { if (!touched) set('resolved'); }, 2200);
    }, { threshold: 0.6 });
    io.observe(cal);
  }
})();

;(function () {
  var a = document.createElement('a');
  a.id = 'm-cta'; a.href = '#contact'; a.innerHTML = '<span>Start a conversation</span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
  document.body.appendChild(a);
  var seen = { home: true, contact: false };
  function sync() { a.classList.toggle('show', !seen.home && !seen.contact); }
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { seen[e.target.id] = e.isIntersecting; }); sync(); }, { threshold: 0.15 });
  ['home', 'contact'].forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
})();
}

;(function () {
  // Work cards show a real sample from each project instead of a text mock-up
  var THUMBS = { 'project-1': 'ea-03', 'project-2': 'expense-01', 'project-3': 'network-01', 'project-4': 'pipeline-01', 'project-5': 'landing-01', 'project-6': 'solar-01', 'project-7': 'social-04' };
  var ALT = { 'project-1': 'Travel planning and hotel matrix sample', 'project-2': 'Expense and multi-currency tracker sample', 'project-3': 'Executive network intelligence sample', 'project-4': 'Lead pipeline dashboard sample', 'project-5': 'Landing page design sample', 'project-6': 'Solar energy welcome email sample', 'project-7': 'Social media promo poster sample' };
  function src(n) { return (window.__IMG && window.__IMG[n]) || 'assets/work/' + n + '.webp'; }
  [].slice.call(document.querySelectorAll('.portfolio-item')).forEach(function (card) {
    var k = card.getAttribute('data-arg'), box = card.querySelector('.h-52');
    if (!box || !THUMBS[k] || box.querySelector('img.work-thumb')) return;
    var mock = box.firstElementChild;
    var im = document.createElement('img');
    im.className = 'work-thumb'; im.src = src(THUMBS[k]); im.alt = ALT[k]; im.decoding = 'async'; im.loading = 'lazy';
    if (mock && !mock.classList.contains('absolute')) box.replaceChild(im, mock); else box.insertBefore(im, box.firstChild);
    box.classList.add('has-photo');
  });
})();

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initPortfolio)}else{initPortfolio()}

;(function () {
  // Custom 3D scroll: cards tilt and recede like a drum as they leave the focus line; glass slabs turn with scroll progress.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var root = document.documentElement;
  var stage = document.createElement('div');
  stage.id = 'd3-stage'; stage.setAttribute('aria-hidden', 'true');
  stage.innerHTML = '<i class="slab slab-a"></i><i class="slab slab-b"></i><i class="slab slab-c"></i>';
  document.body.appendChild(stage);
  var sel = ['.hero-right', '.proof li', '#about .about-fig', '.svc', '.steps > li', '#tools .grid > *', '.faq details', '.portfolio-item', '#credibility .glass-card', '#contact > .glass-card'];
  var els = [];
  sel.forEach(function (s) { [].slice.call(document.querySelectorAll(s)).forEach(function (el) { if (els.indexOf(el) < 0) els.push(el); }); });
  var vis = new Set(), fine = window.matchMedia('(hover: hover)').matches;
  els.forEach(function (el) { el.classList.add('d3'); });
  root.classList.add('d3-on');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) vis.add(e.target); else vis.delete(e.target); }); request(); }, { rootMargin: '25% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else { els.forEach(function (el) { vis.add(el); }); }
  var ticking = false;
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  function frame() {
    ticking = false;
    var vh = window.innerHeight, vw = window.innerWidth, small = vw < 768, A = small ? 4 : 9, B = small ? 2 : 7, Z = small ? 30 : 70;
    var max = root.scrollHeight - vh;
    root.style.setProperty('--sp', max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)).toFixed(4) : '0');
    vis.forEach(function (el) {
      var r = el.getBoundingClientRect(), k = Math.min(1, 520 / Math.max(r.height, 1));
      var t = Math.max(-1, Math.min(1, ((r.top + r.height / 2) - vh / 2) / (vh / 2)));
      var cx = ((r.left + r.width / 2) - vw / 2) / (vw / 2), a = Math.abs(t);
      var st = el.style;
      st.setProperty('--rx', (t * A * k).toFixed(2) + 'deg');
      st.setProperty('--ry', (cx * a * B).toFixed(2) + 'deg');
      st.setProperty('--tz', (-a * Z).toFixed(1) + 'px');
      st.setProperty('--s', (1 - a * 0.035).toFixed(4));
    });
  }
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  if (fine) {
    document.addEventListener('pointermove', function (e) {
      var c = e.target.closest && e.target.closest('.d3'); if (!c) return;
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (((e.clientX - r.left) / r.width) - 0.5).toFixed(3));
      c.style.setProperty('--my', (((e.clientY - r.top) / r.height) - 0.5).toFixed(3));
    }, { passive: true });
  }
  request();
})();
