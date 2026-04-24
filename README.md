# homgorn.github.io

Персональный сайт-визитка с каталогом услуг веб-разработчика.

## Структура

- `_services/` - карточки услуг (Markdown)
- `category/` - страницы категорий
- `_layouts/` - макеты Jekyll
- `assets/css/` - стили

## Разработка

```bash
# Установить зависимости
bundle install

# Запустить локально
bundle exec jekyll serve

# Билд для прода
JEKYLL_ENV=production jekyll build
```

## Технологии

- Jekyll 4.x
- GitHub Pages
- Pages CMS для админки

## Деплой

1. Создать репозиторий `homgorn.github.io`
2. Запушить код
3. Включить GitHub Pages в настройках

## Редактирование

Через Pages CMS: https://app.pagescms.org

Или вручную через файлы в `_services/`