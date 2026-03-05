# Antigravity Prompt — Sales Page Conversion Improvements
**Model: claude-opus-4-6 | Project: React Sales Page (accelera.top/services)**

---

## CONTEXT

You are editing a React sales page for an Arabic-market service offer (RTL, font: Cairo). The page is already built and functional. Your job is to make targeted, surgical improvements to maximize conversion based on a professional CRO (Conversion Rate Optimization) audit. Do NOT rewrite the entire page — only modify what is specified below.

The page direction is `rtl`. All text is Arabic. Respect all existing component names, file structure, and Tailwind classes unless a change is explicitly required.

---

## CHANGES REQUIRED

### 1. HERO SECTION — Add outcome + credibility signal above the fold

**Find:** The hero headline component (likely `HeroSection` or similar).

**Do:**
- Below the main headline and above the CTA button, add a single line of social proof text styled as a small badge or stat row. Example: `+600 وكالة ومستقل طبّقوا النظام` — use a small pill badge with a checkmark icon and muted background.
- Wrap 2–3 key words in the headline with a `<span>` that applies the primary brand color (the blue/teal already used on the page) to make the transformation promise pop visually.
- Add a `fadeInUp` CSS animation (opacity 0→1, translateY 20px→0, 0.6s ease-out) to the hero headline and subheadline, staggered by 0.15s.

---

### 2. VIDEO THUMBNAIL — Make it more compelling

**Find:** The video embed or thumbnail component in the hero/video section.

**Do:**
- Add a styled text overlay on the thumbnail background div: a short title like `"شاهد كيف يشتغل النظام"` in bold white text at the bottom of the thumbnail, with a semi-transparent dark gradient overlay behind it.
- Make the play button larger: minimum `64px × 64px`, red background (`#E53E3E`), white triangle icon, with a subtle `pulse` CSS animation (scale 1→1.05→1, 2s infinite).
- Add `box-shadow: 0 8px 40px rgba(0,0,0,0.2)` to the video container.

---

### 3. STATS BAR — Move up and make numbers bigger

**Find:** The stats row showing numbers like `6k`, `24/7`, `46%`, `80%` (currently below the video).

**Do:**
- Move this component to render **directly below the hero headline/CTA and above the video** — it should be the first thing after the CTA button.
- Increase the number font size to `clamp(1.8rem, 3vw, 2.8rem)` with `font-weight: 900`.
- Add a thin bottom border or background strip (`#F0F4FF` or similar light blue) to visually separate it from the rest.
- Add a `countUp` animation: on scroll into view (use `IntersectionObserver`), animate each number from `0` to its final value over `1.5s` using `requestAnimationFrame`.

---

### 4. COMPARISON TABLE — Move higher on the page

**Find:** The section titled `"الفرق في الأرقام الحقيقية"` (the before/after comparison table).

**Do:**
- Move this section to render **right after the problem/pain section** (`"هذا العرض لكم إذا كنتو..."`) and **before** the "كيفاش يخدم السيستام" section.
- Add a section label badge above the headline: small pill with text `"مقارنة حقيقية"` in the primary accent color.

---

### 5. OFFER SECTION — Fix price anchoring

**Find:** The `"واش يشمل العرض؟"` section with the pricing card showing `80%`.

**Do:**
- In the price display area, add the original price with a strikethrough **above** the current price. Example structure:
  ```jsx
  <p className="line-through text-gray-400 text-lg">5,000 DA</p>
  <p className="text-3xl font-black text-primary">800 DA</p>
  <p className="text-sm text-green-600 font-semibold">وفّرت 4,200 DA</p>
  ```
- Add a red urgency badge above the card: `"العرض ينتهي قريباً 🔥"` — red background, white text, `border-radius: 4px`, centered.
- Make the CTA button inside this card full-width with `padding: 16px` and a subtle `pulse` animation.

---

### 6. ADD — Instructor credibility section

**Find:** A logical place between the "واش تكسب من هذا السيستام" section and the comparison table.

**Create a new component** `InstructorSection` and insert it there:

```jsx
// InstructorSection.jsx
// Layout: image on the right (RTL), text on the left
// Contains:
//   - Section badge: "من أنا؟"
//   - Headline: name + title
//   - 4 bullet points with checkmark icons showing achievements (placeholder text, to be filled by user)
//   - A row of 2–3 stat numbers (clients served, years experience, etc.)
// Style: light grey background (#F8F9FF), rounded card, padding 48px, max-width 900px centered
```

Use placeholder content with a comment `{/* TODO: Replace with real photo and achievements */}`.

---

### 7. ADD — Testimonials section (placeholder structure)

**Find:** After the instructor section.

**Create a new component** `TestimonialsSection`:

```jsx
// TestimonialsSection.jsx
// Layout: 2-column grid on desktop, 1-column on mobile
// Contains 3 placeholder testimonial cards, each with:
//   - Avatar circle (placeholder grey circle)
//   - 5 gold stars (★★★★★)
//   - Quote text (placeholder)
//   - Name + role
//   - A "نتيجة:" badge showing a specific result (e.g. "+3 عملاء في أسبوع")
// Section headline: "شنو قالو اللي جرّبوا"
// Add comment: {/* TODO: Replace placeholder cards with real video testimonials */}
```

---

### 8. FINAL CTA SECTION — Make it high contrast and urgent

**Find:** The last section at the bottom (`"نفس التزاليف، نفس الـ Budget"`).

**Do:**
- Change the section background to a dark color: `#0F172A` (dark navy), white text.
- Make the headline font-size `clamp(1.6rem, 3vw, 2.4rem)`, font-weight 900.
- Add the price display (same as #5 above — strikethrough original + real price).
- Make the CTA button: full width on mobile, `min-width: 320px` on desktop, `padding: 18px 48px`, with `pulse` animation.
- Below the button, add a guarantee line with a shield emoji: `"🛡️ ضمان استرجاع كامل خلال 7 أيام"` — small text, muted color.
- Add scarcity text below that: `"⚠️ الأماكن محدودة — لا تفوّت الفرصة"` in orange/amber color.

---

### 9. ADD — Mobile sticky CTA bar

**Find:** The root layout component or `App.jsx`.

**Create a new component** `StickyMobileCTA` and render it at the root level:

```jsx
// StickyMobileCTA.jsx
// Only visible on mobile (hidden on md: and above using Tailwind: className="fixed bottom-0 ... md:hidden")
// Contains: full-width CTA button with the main offer action
// Background: white with top border shadow
// Only appears after user scrolls past 400px (use useScrollPosition hook or simple useEffect + window.scrollY)
// Z-index: 50
```

---

### 10. ADD — Floating WhatsApp button

**Find:** Root layout or `App.jsx`.

**Add** a fixed floating button, bottom-right corner (for RTL: bottom-left is also acceptable):

```jsx
// Fixed position: bottom: 24px, left: 24px (RTL convention)
// WhatsApp green: #25D366
// Circle button, 56px diameter, WhatsApp SVG icon in white
// On click: opens `https://wa.me/YOUR_NUMBER` (leave as placeholder)
// Add tooltip on hover: "تواصل معنا على واتساب"
// z-index: 49 (below sticky bar)
```

---

## CONSTRAINTS

- Do NOT change any existing routing, API calls, or business logic.
- Do NOT remove any existing sections — only reorder or enhance them.
- Keep all Tailwind class conventions consistent with the existing codebase.
- All new components should be created in the same directory as existing page components.
- All animations should respect `prefers-reduced-motion` media query — wrap in `@media (prefers-reduced-motion: no-preference)`.
- Keep RTL (`dir="rtl"`) on all new elements. Use `text-right` as default text alignment.
- Do not install new npm packages — use only what's already in the project (React, Tailwind, and any existing libraries).

---

## DELIVERABLE

After making all changes, provide:
1. A list of every file you modified or created.
2. A brief note on any placeholder content the user needs to replace (photos, real numbers, testimonial text).
3. Flag any section where you needed to make an assumption about the existing component structure.
