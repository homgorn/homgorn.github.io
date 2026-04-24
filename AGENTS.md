# AGENTS.md

Instructions for AI agents working on homgorn.github.io

## IMPORTANT CONTEXT

### Owner Details (ALWAYS use these)
- **Name**: Leinid D (NOT "Гончаров", NOT "Goncharov")
- **Email**: refertur.net@gmail.com
- **WhatsApp**: +7 705 438 4888 (format +7 XXX XXX XXXX)
- **Telegram**: @notview
- **Experience**: 10+ years, 100+ projects

### Technical Stack
- **Stack**: Static HTML + CSS (NOT Jekyll collections!)
- **Hosting**: GitHub Pages
- **Live URL**: https://homgorn.github.io

### Key Technical Notes
1. DO NOT use Jekyll collections - causes build failures on GitHub Pages
2. Keep `.html` extension in URLs
3. Custom CSS may be overridden by GitHub theme - test on live site

---

## SEO METADATA RULES

### Frontmatter Template
```yaml
---
layout: default
title: [Page Title] | Leinid D
description: [150-160 characters. What the page offers.]
keywords: [comma-separated keywords]
author: Leinid D
lang: ru
---
```

### IMPORTANT
- **ONLY ONE `<h1>` per page** - never use page.title AND manual h1 together
- Set `page.title` for browser tab only
- Add manual `<h1>...</h1>` for content
- Use `lang: ru` (NOT en-US)
- Include canonical URL in layout
- Include Schema.org Person in layout

### Example Correct Page
```html
---
layout: default
title: Веб-разработка | Leinid D
description: Услуги веб-разработки на WordPress. Опыт 10+ лет.
keywords: WordPress, сайт, магазин
author: Leinid D
---

<div class="container">
  <section class="page-title">
    <h1>Веб-разработка</h1>  <!-- only ONE h1 -->
    <p>Сайты на WordPress</p>
  </section>
  ...
</div>
```

---

## FILE NAMING

- Categories: `/category/[name].html`
- Service pages: `/services.html`
- Static pages: `/about.html`, `/contacts.html`
- Layouts: `/_layouts/default.html`
- Styles: `/assets/css/style.css`

---

## WORKING WITH THIS PROJECT

### Creating New Category Page
1. Create `/category/[name].html`
2. Include frontmatter with SEO metadata
3. Use layout: default
4. Add ONE h1 heading
5. Include service cards with prices in rubles (₽)
6. Link to WhatsApp: `https://wa.me/77054384888`

### Creating Service Card
```html
<article class="service-card">
  <h3>[Service Name]</h3>
  <p>[Description 50-100 words]</p>
  <span class="price">[Price in rubles]</span>
  <a href="https://wa.me/77054384888" class="order-btn">Заказать</a>
</article>
```

### Updating Existing Page
1. Read the file first
2. Make changes
3. Keep all SEO frontmatter
4. Maintain single h1 rule

---

## COMMON MISTAKES TO AVOID

1. **Using Jekyll collections** - will break build
2. **Adding extra h1** - SEO penalty
3. **Using wrong name** - "Goncharov" or "Гончаров" instead of "Leinid D"
4. **Missing lang** - must be "ru"
5. **Missing canonical** - required for SEO
6. **Using Pages CMS with Jekyll** - causes conflicts

---

## DEPLOYMENT

Site deploys automatically on push to main branch. Check live site after commit.

---

## ADDING NEW SERVICES

### When adding new service to category:
1. Add service-card to RU category file
2. Add service-card to EN category file  
3. Update sitemap.html (RU and EN)
4. Update sitemap.xml with new URL
5. Update category list in index.html (if new category)

### Service card template:
```html
<article class="service-card">
  <h3>[Service Name]</h3>
  <p>[Description 50-100 words]</p>
  <span class="price">[Price in rubles]</span>
  <a href="https://wa.me/77054384888" class="order-btn">Заказать</a>
</article>
```

### Files to update:
- category/[name].html (RU)
- en/category/[name].html (EN)
- sitemap.html
- en/sitemap.html
- sitemap.xml

---

## GETTING HELP

If something is unclear, check PROJECT-CONTEXT.md first.