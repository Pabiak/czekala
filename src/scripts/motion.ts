// Small, dependency-free interaction layer:
// - values that depend on today's date (so a static build never goes stale)
// - mobile menu, hide-on-scroll-down nav
// - one-time section reveal and stat counters (skipped under reduced motion)

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const locale = document.documentElement.lang === 'en' ? 'en-GB' : 'pl-PL';
const fmt = new Intl.NumberFormat(locale);

/* ---------- Date-dependent values ----------
   The build writes the values for its own year; recompute them for the visitor's year.
   Runs before the counters read data-count, so they count up to the fresh number. */
const thisYear = new Date().getFullYear();
const pluralRules = new Intl.PluralRules(locale);

document.querySelectorAll<HTMLElement>('[data-since]').forEach((el) => {
	const value = thisYear - Number(el.dataset.since);
	if (!Number.isFinite(value) || value < 0) return;
	el.dataset.count = String(value);
	el.textContent = fmt.format(value);

	// Matching label with the right plural form ("17 lat", "22 lata", "1 year"…).
	const label = el.closest('li')?.querySelector<HTMLElement>('[data-plural]');
	if (label) {
		try {
			const forms = JSON.parse(label.dataset.plural ?? '{}') as Record<string, string>;
			const text = forms[pluralRules.select(value)] ?? forms.other;
			if (text) label.textContent = text;
		} catch {
			/* keep the build-time label */
		}
	}
});

document.querySelectorAll<HTMLElement>('[data-current-year]').forEach((el) => {
	el.textContent = String(thisYear);
});

/* ---------- Navigation ---------- */
const nav = document.querySelector<HTMLElement>('[data-nav]');
const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const toggleLabel = document.querySelector<HTMLElement>('[data-nav-label]');
const menu = document.querySelector<HTMLElement>('[data-nav-menu]');

function setMenu(open: boolean) {
	if (!nav || !toggle) return;
	nav.classList.toggle('is-open', open);
	toggle.setAttribute('aria-expanded', String(open));
	if (toggleLabel) toggleLabel.textContent = (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? '';
	document.documentElement.style.overflow = open ? 'hidden' : '';
	if (open) document.querySelector('[data-to-top]')?.classList.remove('is-visible');
}

toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('click', (e) => {
	if ((e.target as HTMLElement).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && nav?.classList.contains('is-open')) {
		setMenu(false);
		toggle?.focus();
	}
});
matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
	if (e.matches) setMenu(false);
});

/* ---------- Back to top ---------- */
const toTop = document.querySelector<HTMLButtonElement>('[data-to-top]');
if (toTop) {
	toTop.hidden = false; // the control only makes sense with JS, so it ships hidden
	toTop.addEventListener('click', () => {
		scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
		// keep keyboard users at the top of the page too
		document.querySelector<HTMLElement>('[data-brand]')?.focus({ preventScroll: true });
	});
}

// Sticky "with restraint": slide away while reading down, return on any scroll up.
let lastY = scrollY;
let ticking = false;
function onScroll() {
	const y = scrollY;
	toTop?.classList.toggle('is-visible', y > innerHeight && !nav?.classList.contains('is-open'));
	if (nav) {
		nav.classList.toggle('is-scrolled', y > 8);
		const goingDown = y > lastY + 4;
		const goingUp = y < lastY - 4;
		const focusInside = nav.contains(document.activeElement);
		if (goingDown && y > 240 && !focusInside) nav.classList.add('is-hidden');
		else if (goingUp || y <= 240) nav.classList.remove('is-hidden');
	}
	lastY = y;
	ticking = false;
}
addEventListener(
	'scroll',
	() => {
		if (!ticking) {
			ticking = true;
			requestAnimationFrame(onScroll);
		}
	},
	{ passive: true },
);
nav?.addEventListener('focusin', () => nav.classList.remove('is-hidden'));
onScroll();

/* ---------- Reveal + counters ---------- */
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function runCounter(el: HTMLElement) {
	const target = Number(el.dataset.count);
	if (!Number.isFinite(target)) return;
	const duration = 1400;
	const start = performance.now();
	const step = (now: number) => {
		const t = Math.min(1, (now - start) / duration);
		el.textContent = fmt.format(Math.round(target * easeOutExpo(t)));
		if (t < 1) requestAnimationFrame(step);
	};
	el.textContent = '0';
	requestAnimationFrame(step);
}

if (!reduceMotion.matches && 'IntersectionObserver' in window) {
	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target as HTMLElement;
				io.unobserve(el);
				if (el.hasAttribute('data-reveal')) el.classList.add('is-in');
				el.querySelectorAll<HTMLElement>('[data-count]').forEach(runCounter);
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0 },
	);
	document.querySelectorAll('[data-reveal], [data-counters]').forEach((el) => io.observe(el));
} else {
	document.documentElement.classList.remove('motion');
}
