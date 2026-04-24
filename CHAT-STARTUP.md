# homgorn.github.io — полный контекст для нового чата

## 🚨 ГЛАВНОЕ — ЧТОБЫ НЕ ГАЛЛЮЦИНИРОВАТЬ

1. **Всегда проверяй live сайт** перед ответом: https://homgorn.github.io
2. **Всегда читай локальные файлы** перед редактированием
3. **НЕ придумывай данные** — только то, что есть в файлах
4. **С начала каждого чата читай этот файл**

---

## ТЕКУЩИЙ СТАТУС ПРОЕКТА

### ✅ Сделано (готово к продакшену)
- Главная страница (RU + EN) с 8 категориями
- 8 категорий услуг (RU) × ~35 услуг
- 8 категорий услуг (EN) — перевод RU версии
- Блог: 7 постов (RU) + 5 постов (EN)
- sitemap.xml + robots.txt + feed.xml
- HTML sitemap страницы
- CSS: style.css + responsive.css
- _layouts/ для подвала/меню
- FAQ Schema на категориях
- **SOLITE**: https://homgorn.github.io/

### ❌ Нужно проверить/доделать
- Описания услуг: проверить все ли 50-100 слов (некоторые могут быть короткие)
- Blog posts: проверить все ли имеют related-posts
- SEO: проверить meta description на всех страницах

---

## OWNER INFO — ВСЕГДА ИСПОЛЬЗУЙ

- **Имя**: Leinid D (НИКОГДА не "Гончаров", не "Goncharov", не "М.")
- **Email**: refertur.net@gmail.com
- **WhatsApp**: +7 705 438 4888 (формат ссылки: https://wa.me/77054384888)
- **Telegram**: @notview
- **Опыт**: 10+ лет, 100+ проектов

---

## ТЕХНИЧЕСКИЙ СТЕК

- **Стек**: Static HTML + CSS (НЕ Jekyll! НЕ Jekyll collections!)
- **Хостинг**: GitHub Pages
- **URL**: https://homgorn.github.io
- **Деплой**: Автоматически на push в main

---

## ФАЙЛОВАЯ СТРУКТУРА

```
/homgorn.github.io
├── index.html                      # Главная RU
├── services.html                  # Каталог услуг RU
├── about.html                     # Обо мне RU
├── contacts.html                   # Контакты RU
├── sitemap.html                   # HTML карта сайта RU
├── robots.txt
├── feed.xml
├── sitemap.xml
│
├── en/                           # English version
│   ├── index.html
│   ├── services.html
│   ├── about.html
│   ├── contacts.html
│   ├── sitemap.html
│   └── category/
│       ├── web-development.html
│       ├── seo-optimization.html
│       ├── ai-services.html
│       ├── business-automation.html
│       ├── marketing-advertising.html
│       ├── import-export.html
│       ├── security-protection.html
│       └── content-creation.html
│
├── category/                     # RU категории
│   ├── web-development.html
│   ├── seo-optimization.html
│   ├── ai-services.html
│   ├── business-automation.html
│   ├── marketing-advertising.html
│   ├── import-export.html
│   ├── security-protection.html
│   └── content-creation.html
│
├── blog/
│   └── *.html                   # 7 постов RU
│
├── en/blog/
│   └── *.html                   # 5 постов EN
│
├── _layouts/
│   ├── default.html
│   ���── english.html
│
├── assets/css/
│   ├── style.css
│   └── responsive.css
│
├── AGENTS.md                    # Инструкции для AI (кратко)
└── PROJECT-CONTEXT.md          # Полный контекст (этот файл)
```

---

## ПРАВИЛА (ВСЕГДА СЛЕДУЙ)

### ❌ ЗАПРЕЩЕНО
- Использовать Jekyll collections — ломает билд
- Использовать имя "Гончаров" или "Goncharov"
- Использовать email как anchor link `<a href="mailto:...">`
- Использовать Telegram как anchor link `<a href="tg://...">`

### ✅ ОБЯЗАТЕЛЬНО
- **Footer**:plain text, НЕ anchor links
- **Описание услуги**: 50-100 слов
- **H1**: только ОДИН на странице
- **hreflang**: для EN версий

---

## ШАБЛОНЫ

### Frontmatter
```yaml
---
layout: default
title: [Title] | Leinid D
description: [150-160 characters]
keywords: [comma-separated]
author: Leinid D
lang: ru
---
```

### Service Card (50-100 слов!)
```html
<article class="service-card">
  <h3>[Название]</h3>
  <p>[Описание 50-100 слов. Что делаем, польза, опыт.]</p>
  <span class="price">[Цена]</span>
  <a href="https://wa.me/77054384888" class="order-btn">Заказать</a>
</article>
```

### Footer (plain text!)
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

### Menu RU
```html
<nav class="nav">
  <a href="/">Главная</a>
  <a href="/services.html">Услуги</a>
  <a href="/blog/">Блог</a>
  <a href="https://wa.me/77054384888">Контакты</a>
  <a href="/en/">EN</a>
</nav>
```

---

## TODO ЛИСТ

### Приоритет 1 — Проверить
- [ ] Описания всех услуг: каждое 50-100 слов?
- [ ] Blog posts: все имеют related-posts?
- [ ] Meta description: все страницы 150-160 символов?

### Приоритет 2 — Исправить
- [ ] Если короткое описание — расширить до 50-100 слов
- [ ] Если нет related-posts — добавить
- [ ] Если нет FAQ Schema — добавить

### Приоритет 3 — Добавить
- [ ] Новые услуги (если нужно)
- [ ] Новые посты в блог (если нужно)
- [ ] Новые категории (если нужно)

---

## КАК НАЧАТЬ НОВЫЙ ЧАТ

1. Скопируй этот файл в новый чат
2. Прочитай актуальный статус TODO
3. Открой https://homgorn.github.io и проверь текущее состояние
4. Начни работу с TODO списка сверху

---

## КОНТАКТЫ ВЛАДЕЛЬЦА

- WhatsApp: https://wa.me/77054384888
- Telegram: @notview  
- Email: refertur.net@gmail.com