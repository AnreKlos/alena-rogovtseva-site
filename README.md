# Алёна Роговцева — Студия красоты

Одностраничный лендинг студии красоты Алёны Роговцевой (Брянск).

## Стек

- **Astro v7** — фреймворк
- **Vanilla JS** — клиентская логика
- **CSS custom properties** — theme-архитектура (3 темы: dark-elegance, clean-lux, soft-nude)
- **TypeScript** — данные услуг

## Структура страницы

Hero → Benefits → Services → About → Gallery → BeforeAfter → Reviews → Contact

## Команды

```bash
npm run dev        # dev-сервер (localhost:4321)
npm run build      # сборка
npm run preview    # предпросмотр собранного
```

## Разделы

| Раздел | Компонент |
|--------|-----------|
| Hero | `src/components/Hero.astro` |
| Услуги | `src/components/Services.astro` |
| Обо мне | `src/components/About.astro` |
| Галерея | `src/components/Gallery.astro` (Luxury Contact Sheet) |
| До/После | `src/components/BeforeAfter.astro` |
| Отзывы | `src/components/Reviews.astro` |
| Запись | `src/components/Contact.astro` |

## Репозиторий

https://github.com/AnreKlos/alena-rogovtseva-site
