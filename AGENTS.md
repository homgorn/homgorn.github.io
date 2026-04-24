# AGENTS.md

Instructions for AI agents working on homgorn.github.io

## OWNER INFO (ALWAYS USE THESE)
- **Name**: Leinid D (NOT "Гончаров", NOT "Goncharov", NOT "М.")
- **Email**: refertur.net@gmail.com
- **WhatsApp**: +7 705 438 4888 (format: https://wa.me/77054384888)
- **Telegram**: @notview
- **Experience**: 10+ years, 100+ projects

## TECHNICAL STACK
- **Stack**: Static HTML + CSS (NOT Jekyll!)
- **Hosting**: GitHub Pages
- **Live URL**: https://homgorn.github.io

## IMPORTANT RULES

### DO NOT USE
- Jekyll collections - causes build failures
- Wrong name "Гончаров" or "Goncharov"

### SEO METADATA
```yaml
---
layout: default
title: [Page Title] | Leinid D
description: [150-160 characters]
keywords: [comma-separated]
author: Leinid D
lang: ru
---
```

### ONE H1 RULE
Only ONE `<h1>` per page - never use page.title AND manual h1 together

## FILE STRUCTURE

### Categories: `/category/[name].html`
- web-development.html
- seo-optimization.html
- ai-services.html
- business-automation.html
- marketing-advertising.html
- import-export.html
- security-protection.html
- content-creation.html

### English: `/en/category/[name].html`

## SERVICE CARD TEMPLATE

```html
<article class="service-card">
  <h3>[Service Name]</h3>
  <p>[Description 50-100 words - VERY IMPORTANT!]</p>
  <span class="price">[Price in rubles]</span>
  <a href="https://wa.me/77054384888" class="order-btn">Заказать</a>
</article>
```

## HEADER NAVIGATION (RU)
```html
<nav class="nav">
  <a href="/">Главная</a>
  <a href="/services.html">Услуги</a>
  <a href="/blog/">Блог</a>
  <a href="https://wa.me/77054384888">Контакты</a>
  <a href="/en/">EN</a>
</nav>
```

## FOOTER (PLAIN TEXT, NOT ANCHORS!)
```html
<footer class="footer">
  <p>© 2026 Leinid D. Все права защищены.</p>
  <p>WhatsApp: +7 705 438 4888</p>
  <p>Email: refertur.net@gmail.com</p>
  <p>Telegram: @notview</p>
</footer>
```

## ADDING NEW SERVICE

1. Add service-card to RU category file (50-100 words description!)
2. Add service-card to EN category file
3. Update sitemap.html (RU and EN)
4. Update sitemap.xml with new URL
5. Add related-services links

## ADDING NEW BLOG POST

1. Create /blog/[slug].html (RU)
2. Create /en/blog/[slug].html (EN)
3. Add Schema.org Article
4. Add related-posts at bottom
5. Update feed.xml
6. Update sitemap.xml

## FAQ SCHEMA TEMPLATE
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer."
      }
    }
  ]
}
</script>
```

## DEPLOYMENT
Site deploys automatically on push to main branch.

## GETTING HELP
Check PROJECT-CONTEXT.md first.