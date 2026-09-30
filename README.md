# GACHAPON — магазин гачапон-автоматов

Интернет-магазин гачапон-автоматов: аниме-мерч, иркутские сувениры, изготовление под заказ.

## Запуск локально

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Деплой на GitHub Pages

1. Соберите сайт: `npm run build` (результат в папке `dist`)
2. Опубликуйте содержимое `dist` в ветку `gh-pages`:
   ```bash
   npm run deploy
   ```
   или через GitHub Actions (см. `.github/workflows/deploy.yml`).
3. В настройках репозитория: Settings → Pages → Source: ветка `gh-pages`, папка `/ (root)`.

Сайт будет доступен по адресу: https://danmarkov.github.io/gachapon/
