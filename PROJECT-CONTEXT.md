# PROJECT-CONTEXT.md

## Project Overview
- **Project name**: homgorn.github.io
- **Type**: Static service catalog website
- **Stack**: Static HTML + CSS (NO Jekyll!)
- **Hosting**: GitHub Pages
- **Live URL**: https://homgorn.github.io

## Owner Info (ПРИНЦИПИАЛЬНО!)
- **Name**: Leinid D (NOT "Гончаров", NOT "Goncharov", NOT "М.") 
- **Email**: refertur.net@gmail.com
- **WhatsApp**: +7 705 438 4888 (формат +7 XXX XXX XXXX)
- **Telegram**: @notview
- **Experience**: 10+ years, 100+ projects

## Technical Stack
- **Stack**: Static HTML + CSS (NOT Jekyll collections!)
- **Hosting**: GitHub Pages
- **Live URL**: https://homgorn.github.io

## DO NOT USE!
- ❌ Jekyll collections - causes build failures
- ❌ Pages CMS with Jekyll
- ❌ Wrong name "Гончаров" or "Goncharov"

---

## FILE STRUCTURE

```
/homgorn.github.io
├── index.html                    # Главная (RU)
├── services.html                 # Каталог услуг (RU)
├── about.html                     # Обо мне (RU)
├── contacts.html                  # Контакты (RU)
├── sitemap.html                  # HTML карта сайта (RU)
├── robots.txt                    # Robot.txt
├── feed.xml                      # RSS feed
├── sitemap.xml                   # XML sitemap с hreflang
│
├── en/                           # English version
│   ├── index.html
│   ├── services.html
│   ├── about.html
│   ├── contacts.html
│   ├── sitemap.html
│   └── category/                 # 8 категорий EN
│
├── category/                     # RU категории (8)
│   ├── web-development.html
│   ├── seo-optimization.html
│   ├── ai-services.html
│   ├── business-automation.html
│   ├── marketing-advertising.html
│   ├── import-export.html
│   ├── security-protection.html
│   └── content-creation.html
│
├── blog/                         # Блог (RU)
│   ├── index.html
│   └── *.html                    # 7 постов
│
├── en/blog/                      # Блог (EN)
│   └── *.html                    # 5 постов
│
├── _layouts/                     # Layouts (не используются без Jekyll)
│   ├── default.html
│   └── english.html
│
├── assets/
│   ├── css/
│   │   ├── style.css            # Основные стили
│   │   └── responsive.css        # Адаптивность
│   └── js/
│       └── hreflang-auto.js     # JS fallback для hreflang
│
├── AGENTS.md                     # Инструкции для AI
└── PROJECT-CONTEXT.md           # Этот файл
```

---

## SEO METADATA RULES

### Frontmatter Template (ОБЯЗАТЕЛЬНО!)
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

### IMPORTANT RULES:
- **ONLY ONE `<h1>` per page** - never use page.title AND manual h1 together
- Set `page.title` for browser tab only
- Add manual `<h1>...</h1>` for content
- Use `lang: ru` (NOT en-US)
- Include canonical URL in layout
- Include Schema.org Person in layout

---

## MENU STRUCTURE

### Header Navigation (RU)
```html
<nav class="nav">
  <a href="/">Главная</a>
  <a href="/services.html">Услуги</a>
  <a href="/blog/">Блог</a>
  <a href="https://wa.me/77054384888">Контакты</a>
  <a href="/en/">EN</a>
</nav>
```

### Header Navigation (EN)
```html
<nav class="nav">
  <a href="/en/">Home</a>
  <a href="/en/services.html">Services</a>
  <a href="/en/blog/">Blog</a>
  <a href="https://wa.me/77054384888">Contacts</a>
  <a href="/">RU</a>
</nav>
```

### Footer (plain text, NOT anchors!)
```html
<footer class="footer">
  <div class="container">
    <p>© 2026 Leinid D. Все права защищены.</p>
    <p>WhatsApp: +7 705 438 4888</p>
    <p>Email: refertur.net@gmail.com</p>
    <p>Telegram: @notview</p>
  </div>
</footer>
```

---

## SERVICE CARD TEMPLATE

### Description: 50-100 words minimum!
```html
<article class="service-card">
  <h3>[Service Name - 3-5 words]</h3>
  <p>[Detailed description 50-100 words. Include: what is done, benefits, experience.]</p>
  <span class="price">[Price in rubles]</span>
  <a href="https://wa.me/77054384888" class="order-btn">Заказать</a>
</article>
```

---

## RELATED SERVICES (ПЕРЕЛИНКОВКА)

Add to end of each category page:

```html
<section class="related-services">
  <h3>Сопутствующие услуги</h3>
  <div class="services-grid">
    <article class="service-card">
      <h3>[Related Service 1]</h3>
      <p>[Short description]</p>
      <a href="/category/[name].html" class="order-btn">Подробнее</a>
    </article>
    <!-- More cards -->
  </div>
</section>
```

---

## FAQ SCHEMA (for Q&A pages)

```html
<!-- FAQPage Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text."
      }
    }
  ]
}
</script>
```

---

## BLOG POST TEMPLATE

```html
<article class="blog-post">
  <header class="article-header">
    <h1>[Title]</h1>
    <div class="blog-meta">
      <time>[Date]</time>
      <span>•</span>
      <span>[Reading time]</span>
      <span>•</span>
      <span>[Category]</span>
    </div>
  </header>
  
  <div class="article-content">
    <p class="lead">[Lead paragraph - key point]</p>
    
    <h2>[Section 1]</h2>
    <p>[Content]</p>
    
    <h2>[Section 2]</h2>
    <p>[Content]</p>
    
    <blockquote>
      <p>[Important quote/fact]</p>
    </blockquote>
    
    <div class="related-posts">
      <h3>Похожие статьи</h3>
      <ul>
        <li><a href="[link]">Related post 1</a></li>
        <li><a href="[link]">Related post 2</a></li>
      </ul>
    </div>
  </div>
</article>
```

---

## ADDING NEW SERVICE

### Files to update:
1. **RU category**: `/category/[name].html`
2. **EN category**: `/en/category/[name].html`
3. **HTML sitemap**: `sitemap.html`, `en/sitemap.html`
4. **XML sitemap**: `sitemap.xml`

### Checklist:
- [ ] Add service-card with full description (50-100 words)
- [ ] Add to EN version
- [ ] Update sitemap.html (both languages)
- [ ] Update sitemap.xml with new URL + hreflang
- [ ] Add related-services links

---

## ADDING NEW BLOG POST

### Files to create:
1. **RU**: `/blog/[slug].html`
2. **EN**: `/en/blog/[slug].html`
3. **Update**: `feed.xml` (add new item)
4. **Update**: `sitemap.xml` (add new URL)

### Checklist:
- [ ] Schema.org Article with full data
- [ ] Lead paragraph
- [ ] H2 sections with content
- [ ] Blockquote
- [ ] Related posts at bottom
- [ ] English version

---

## METRICS TO CHECK

### On-page SEO
- Title: 50-60 симв��лов
- Description: 150-160 символов
- H1: only ONE per page
- Keywords: comma-separated

### Technical
- PageSpeed: 90+ (mobile)
- Mobile-first responsive
- HTTPS only

### Schema
- Person: for author pages
- Article: for blog posts
- FAQPage: for Q&A pages
- Product/Service: for service cards

---

## TROUBLESHOOTING

### CSS not loading
- Check GitHub Pages theme settings
- May be overridden by GitHub theme

### Jekyll build fails
- Don't use Jekyll collections
- Use static HTML approach

### hreflang not working
- Add manual hreflang in head HTML
- Or use sitemap.xml annotations

---

## CONTACT RULES

- **WhatsApp**: +7 705 438 4888 (link format: https://wa.me/77054384888)
- **Telegram**: @notview
- **Email**: refertur.net@gmail.com

All contact methods MUST be in footer as plain text, NOT as anchor links!