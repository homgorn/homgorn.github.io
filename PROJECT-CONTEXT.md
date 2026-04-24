# PROJECT-CONTEXT.md

## Project Overview
- **Project name**: homgorn.github.io
- **Type**: Static service catalog website
- **Stack**: Static HTML + CSS (simplified from Jekyll due to build issues)
- **Hosting**: GitHub Pages
- **Live URL**: https://homgorn.github.io

## Owner Info
- **Name**: Leinid D (not "Гончаров")
- **Email**: refertur.net@gmail.com
- **WhatsApp**: +7 705 438 4888
- **Telegram**: @notview
- **Experience**: 10+ years, 100+ projects

## Technical Notes

### DO NOT USE Jekyll Collections!
- Original plan: use Jekyll collections for services
- **Problem**: Jekyll build failed repeatedly on GitHub Pages due to pre-existing static files
- **Solution**: Use static HTML with category folders
- **Lesson**: Pages CMS doesn't work well with Jekyll collections

### URL Structure
- Keep `.html` extension in URLs for GitHub Pages compatibility
- Categories: `/category/*.html`
- Services: `/services.html`
- Pages: `/about.html`, `/contacts.html`

### Layout Issues
- GitHub theme overrides custom CSS
- Need to ensure custom styles load properly
- Test live site after deployment

## SEO Requirements

### Metadata
```yaml
title: [Service Name] | Leinid D
description: max 160 chars
keywords: comma-separated
author: Leinid D
lang: ru
```

### Important Rules
- Only ONE `<h1>` per page (not two!)
- Lang must be `ru` (not en-US)
- Use Schema.orgPerson in layout
- Include canonical URL
- Include robots meta tag

### Schema.org Structure
```json
{
  "@type": "Person",
  "name": "Leinid D",
  "email": "refertur.net@gmail.com",
  "url": "https://homgorn.github.io",
  "jobTitle": "Веб-разработчик"
}
```

## Service Categories Structure

1. **web-development.html** - WordPress, магазины, лендинги
2. **seo-optimization.html** - SEO, аудит, линкбилдинг
3. **ai-services.html** - AI, нейросети, боты
4. **business-automation.html** - n8n, Make, интеграции
5. **marketing-advertising.html** - Директ, Google Ads, SMM
6. **import-export.html** - Парсинг, маркетплейсы
7. **security-protection.html** - SSL, защита, бэкапы
8. **content-creation.html** - Копирайтинг, дизайн

## File Structure
```
/homgorn.github.io
├── index.html              # Главная
├── services.html          # Все услуги
├── about.html          # Обо мне
├── contacts.html       # Контакты
├── category/
│   ├── web-development.html
│   ├── seo-optimization.html
│   ├── ai-services.html
│   ├── business-automation.html
│   ├── marketing-advertising.html
│   ├── import-export.html
│   ├── security-protection.html
│   └── content-creation.html
├── _layouts/
│   └── default.html   # Основной layout с SEO
└── assets/
    └── css/
        └── style.css
```

## Common Issues & Solutions

### Issue: Jekyll build fails
- **Cause**: Pages CMS conflicts with Jekyll collections
- **Fix**: Use static HTML approach

### Issue: Custom CSS not loading
- **Cause**: GitHub theme overrides
- **Fix**: Check live site, ensure CSS is properly linked

### Issue: Duplicate H1
- **Cause**: Using page.title AND manual h1
- **Fix**: Only use manual h1, set page.title for browser tab only

### Issue: Wrong name used
- **Cause**: Confusing "Гончаров" from URL with user name
- **Fix**: Use "Leinid D" as author name

## Future Improvements

### Phase 1: Working Static Site
- [x] Create all category pages
- [x] Create About/Contacts pages
- [ ] Fix CSS loading issues
- [ ] Test responsive design

### Phase 2: Optional Enhancements (if Jekyll needed)
- Add Jekyll properly with no Pages CMS
- Use GitHub Actions for build
- Or migrate to another SSG (Astro, Hugo)

### Phase 3: Admin Interface
- Consider Pages CMS only after static build works
- Or use Decap CMS (not Pages)