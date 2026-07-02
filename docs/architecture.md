# Архитектура проекта

> Обновлено: 02.07.2026

---

## Обзор

Astro 7 + Tailwind v4 + Alpine.js. Статическая генерация (output: static). Данные по услугам хранятся в TypeScript-модуле, не в CMS.

---

## Структура блока «Услуги»

```
src/data/services.ts          ← Данные (14 услуг)
        ↓
src/components/Services.astro  ← Сервер: группировка. Клиент: табы (vanilla JS)
        ↓
src/components/ServiceCard.astro ← Рендер одной карточки
```

### Поток данных

1. `services.ts` → экспортирует `services: Service[]`
2. `Services.astro` (серверная часть `---`) → `categories` + `servicesByCategory`
3. `Services.astro` (HTML) → vanilla JS управляет переключением табов
4. `ServiceCard.astro` → получает `service: Service`, рендерит карточку

### Тип Service

```typescript
interface Service {
  slug: string;
  name: string;
  price: string;
  description: string;
  category: 'lashes' | 'nails' | 'brows' | 'training';
  image: string;
}
```

### Категории

| Slug | Название | Услуг |
|------|----------|-------|
| `lashes` | Ресницы | 6 |
| `nails` | Ногтевой сервис | 5 |
| `brows` | Брови и макияж | 2 |
| `training` | Обучение | 1 |

---

## Компоненты

| Компонент | Файл | Статус |
|-----------|------|--------|
| Layout | `src/layouts/Layout.astro` | ✅ Работает |
| Hero | `src/components/Hero.astro` | ✅ Работает |
| Services | `src/components/Services.astro` | ✅ Работает |
| ServiceCard | `src/components/ServiceCard.astro` | ✅ Работает |
| Benefits | `src/components/Benefits.astro` | ✅ Работает |
| About | `src/components/About.astro` | ✅ Работает |
| Gallery | `src/components/Gallery.astro` | ✅ Работает (табы фильтрации, 26 фото) |
| BeforeAfter | `src/components/BeforeAfter.astro` | ✅ Работает (carousel, lightbox, drag/swipe) |
| Reviews | `src/components/Reviews.astro` | ✅ Работает |
| Contact | `src/components/Contact.astro` | ✅ Работает (форма + Яндекс.Карта) |

---

## Стили

Глобальные стили живут в `src/styles/global.css` и `src/styles/theme.css`:

**global.css:**
- `@import "tailwindcss"`
- Базовые стили body, h1-h4
- `.container`, `.section-title`, `.section-subtitle`
- `.services-tabs`, `.tab-btn`, `.tab-btn.active`
- `.tab-panel`, `@keyframes fadeIn`
- `.services-grid`

**theme.css:**
- Theme-токены: `--color-bg`, `--color-surface`, `--color-text-main`, `--color-accent`, и др.
- 3 темы: `dark-elegance`, `clean-lux`, `soft-nude`
- Переключение через `data-theme` на `<html>`
- Применён во всех компонентах (Hero, Services, Gallery, BeforeAfter, etc.)

---

## Сборка и запуск

```bash
npm run dev      # localhost:4321 (--host)
npm run build    # output: dist/
npm run preview  # просмотр сборки
```
