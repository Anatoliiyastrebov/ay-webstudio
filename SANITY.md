# Sanity CMS — подключение

Сайт умеет тянуть **проекты** и **статьи блога** из Sanity. Пока `projectId`
не заполнен, всё работает как раньше — на встроенных данных
(`portfolio-projects.js`, `blog-content.js`). Если Sanity недоступен,
сайт автоматически откатывается на встроенный контент.

## 1. Создать проект Sanity

1. Зарегистрируйтесь / войдите: https://www.sanity.io
2. Создайте проект на https://sanity.io/manage (dataset: `production`, public).
3. Скопируйте **Project ID** (вид: `ab12cd34`).

## 2. Вписать Project ID (3 места)

- [sanity-config.js](sanity-config.js) — `projectId: 'ab12cd34'`
- [studio/sanity.config.js](studio/sanity.config.js) — `projectId: 'ab12cd34'`
- [studio/sanity.cli.js](studio/sanity.cli.js) — `projectId: 'ab12cd34'`

## 3. Разрешить домены (CORS)

На https://sanity.io/manage → ваш проект → **API → CORS origins** добавьте:

- `http://localhost:4321` (локальный просмотр)
- домен сайта на Vercel (например `https://ваш-сайт.vercel.app`)

Credentials не нужны (контент читается публично).

## 4. Запустить админку и перенести контент

```bash
cd studio
npm install
npx sanity login          # вход в аккаунт Sanity

# перенос текущего контента сайта в CMS:
node ../scripts/sanity-seed.mjs
npx sanity dataset import ../scripts/sanity-seed.ndjson production --replace

npm run dev               # админка на http://localhost:3333
```

Опубликовать админку в облаке (по желанию): `npx sanity deploy` —
получите URL вида `https://ваше-имя.sanity.studio`.

## Как это работает

- [sanity-content.js](sanity-content.js) после загрузки страницы запрашивает
  контент с CDN Sanity (`apicdn.sanity.io`), преобразует его в тот же формат,
  что и статические файлы, и перерисовывает секции.
- CSP в [vercel.json](vercel.json) уже разрешает запросы к Sanity.
- Картинки проектов: можно загрузить прямо в Studio (поле «Превью»)
  или указать локальный путь (`images/projects/….jpg`) — как сейчас.
