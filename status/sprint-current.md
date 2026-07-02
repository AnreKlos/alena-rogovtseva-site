# Текущий статус проекта

> Обновлено: 02.07.2026
> GitHub: https://github.com/AnreKlos/alena-rogovtseva-site
> Статус: базовая версия запушена, активная разработка, этап theme-архитектуры и UI/UX-полировки

---

## Подтверждённое состояние

| Что | Статус |
|-----|--------|
| Dev-сервер | ✅ Запускается на `http://127.0.0.1:3000/` (или другом свободном порту) |
| Build | ✅ `npm run build` проходит успешно |
| Hero | ✅ Работает (новые тексты: H1, подзаголовок, бейдж 5.0, CTA) |
| Services | ✅ Работает (4 таба, 14 карточек по категориям, modal) |
| Раздел «Галерея» | ✅ Работает (табы + фильтрация, 26 фото, «Показать ещё») | `src/components/Gallery.astro` |
| Блок «До / После» | ✅ Работает (horizontal snap carousel, 7 работ, center accent, autoplay step-based, lightbox с drag/swipe, симметричная анимация) | `src/components/BeforeAfter.astro` |
| Reviews | ✅ Работает (5 карточек реальных отзывов) | `src/components/Reviews.astro` |
| Contact | ✅ Работает (форма + контакты + Яндекс.Карта через JS API с Placemark по координатам). | `src/components/Contact.astro` |
| Данные (14 услуг) | ✅ Загружаются из `src/data/services.ts` |
| Benefits | ✅ Работает (блок «Почему к нам возвращаются») |
| About | ✅ Работает (секция «Обо мне» + статистика + CTA) |

## Услуги

Реализовано 14 карточек. Источник правды — `src/data/services.ts`.
- Ресницы: 6
- Ногтевой сервис: 5
- Брови и макияж: 2
- Обучение: 1

## Структура страницы

Hero → Benefits → Services → About → Gallery → BeforeAfter → Reviews → Contact

---

## Theme-архитектура

- Source of truth: `src/styles/theme.css`
- Переключение через `data-theme` на `<html>`
- Активные палитры: `dark-elegance`, `clean-lux`, `soft-nude`
- Мигрированы: Hero, Services, ServiceCard, About, Gallery, BeforeAfter, Reviews, Contact, Footer, overlay/lightbox
- Запрещено возвращать raw hex/rgba для theme-ролей в компонентах

---

## Раздел «Услуги» — текущее наполнение

| Категория | Slug | Карточек |
|-----------|------|----------|
| Ресницы | `lashes` | 6 |
| Ногтевой сервис | `nails` | 5 |
| Брови и макияж | `brows` | 2 |
| Обучение | `training` | 1 |
| **Итого** | | **14** |

### Логика переключения табов

- Панели рендерятся в SSR с inline `style="display: none"` для неактивных
- JS listener (`#servicesTabs`) переключает видимость через `element.style.display`
- При загрузке JS init вызывает `showTab('lashes')`
- Modal: shared fullscreen overlay в `Services.astro`

## Следующий шаг

- Дизайн-полировка всего сайта (внешняя карусель, карточки, стрелки)
- Визуальная проверка согласованности темы по всем секциям

## Примечания

- Все вкладки услуг ("Ресницы", "Ногтевой сервис", "Брови", "Макияж", "Обучение") имеют заголовок и дополнительные текстовые подписи над карточками.
- Тексты для сайта создаются владельцем проекта и ассистентом вручную; Hermes не сочиняет тексты сам, а только вносит утверждённые формулировки
