#!/usr/bin/env python3
"""
Готовит портрет для сайта из мастера images/photo.jpg (это PNG без потерь).

Зачем скрипт, а не разовая правка: если понадобится заменить фотографию,
достаточно положить новый мастер и запустить `npm run photo` — размеры,
кадрирование и параметры сжатия останутся теми же.

Что делает:
  1. hero — квадратный кроп по центру, ровно как его делает CSS
     (object-fit: cover; object-position: 50% 50%);
  2. about — исходные пропорции 3:4;
  3. лёгкая коррекция: контраст и насыщенность чуть выше, затем
     уменьшение и только после него резкость — в обратном порядке
     она превращается в кашу;
  4. WebP под 1x и 2x тех размеров, в которых фото реально показывается.

Баланс белого намеренно не трогаем: в кадре смешанный свет (тёплая стена
справа, холодный дневной слева), и глобальная коррекция уводит тон кожи.

    python3 scripts/prepare-photo.py
"""
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
MASTER = ROOT / "images" / "photo.jpg"

# Реальные размеры отображения, снятые с готовой страницы:
# hero 269–326 CSS px (квадрат), about 320×438 CSS px.
TARGETS = [
    ("photo-hero", "square", [400, 600, 800]),
    ("photo-about", "portrait", [320, 640]),
]

CONTRAST = 1.05
COLOR = 1.03
UNSHARP = dict(radius=1.0, percent=55, threshold=3)
QUALITY = 82


def square_crop(im):
    """Центральный квадрат — тот же кадр, что вырезает CSS в hero."""
    side = min(im.size)
    left = (im.width - side) // 2
    top = (im.height - side) // 2
    return im.crop((left, top, left + side, top + side))


def main():
    if not MASTER.exists():
        raise SystemExit(f"Нет мастера: {MASTER}")

    master = Image.open(MASTER).convert("RGB")
    print(f"Мастер: {MASTER.name} {master.width}×{master.height} ({MASTER.stat().st_size / 1024:.0f} КБ)")

    base = ImageEnhance.Contrast(master).enhance(CONTRAST)
    base = ImageEnhance.Color(base).enhance(COLOR)

    for name, shape, widths in TARGETS:
        src = square_crop(base) if shape == "square" else base
        for w in widths:
            h = round(src.height * w / src.width)
            out = src.resize((w, h), Image.LANCZOS).filter(ImageFilter.UnsharpMask(**UNSHARP))
            path = ROOT / "images" / f"{name}-{w}.webp"
            out.save(path, "WEBP", quality=QUALITY, method=6)
            print(f"  {path.name:24s} {w}×{h}  {path.stat().st_size / 1024:5.1f} КБ")


if __name__ == "__main__":
    main()
