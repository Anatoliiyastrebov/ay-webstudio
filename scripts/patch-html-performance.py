#!/usr/bin/env python3
"""Patch HTML for performance: min CSS, site-boot, data-page, LCP preload."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

PAGE_MAP = {
    'index.html': ('home', True, True),
    'blog.html': ('blog', False, True),
    'project.html': ('project', False, True),
    'impressum.html': ('legal', False, False),
    'datenschutz.html': ('legal', False, False),
    'rechtliche-hinweise.html': ('legal', False, False),
}

OG_WEBP = 'https://anatolii-yastrebov.top/images/photo-og.webp'

for name, (page, lcp_preload, dns_prefetch) in PAGE_MAP.items():
    path = ROOT / name
    if not path.exists():
        continue
    html = path.read_text(encoding='utf-8')

    html = re.sub(
        r'<link rel="stylesheet" href="styles\.css">\s*'
        r'<link rel="stylesheet" href="premium\.css">\s*'
        r'<link rel="stylesheet" href="responsive\.css">',
        '<link rel="stylesheet" href="styles.min.css">\n'
        '    <link rel="stylesheet" href="premium.min.css">\n'
        '    <link rel="stylesheet" href="responsive.min.css">',
        html,
        count=1,
    )

    html = re.sub(
        r'<link rel="preload" href="/fonts/inter-600\.woff2"[^>]*>\s*',
        '',
        html,
        count=1,
    )

    if dns_prefetch and 'dns-prefetch' not in html:
        html = html.replace(
            '<link rel="preload" href="/fonts/inter-400.woff2"',
            '<link rel="dns-prefetch" href="https://cdn.jsdelivr.net">\n'
            '    <link rel="preload" href="/fonts/inter-400.woff2"',
            1,
        )

    if lcp_preload and 'images/photo.webp' not in html.split('</head>')[0]:
        html = html.replace('</head>', '    <link rel="preload" href="/images/photo.webp" as="image" type="image/webp" fetchpriority="high">\n</head>', 1)

    html = re.sub(
        r'content="https://anatolii-yastrebov\.top/images/photo\.jpg"',
        f'content="{OG_WEBP}"',
        html,
    )

    html = re.sub(
        r'<img src="images/photo\.jpg"',
        '<img src="images/photo.webp"',
        html,
    )

    if 'data-page=' not in html:
        html = re.sub(r'<body([^>]*)>', rf'<body\1 data-page="{page}">', html, count=1)

    html = re.sub(
        r'    <script src="https://cdn\.jsdelivr\.net/npm/gsap[^<]+</script>\s*'
        r'(?:    <script src="[^"]+"></script>\s*)+'
        r'(?:    <script>[\s\S]*?</script>\s*)?',
        '    <script src="site-boot.js" defer></script>\n',
        html,
        count=1,
    )

    path.write_text(html, encoding='utf-8')
    print('patched', name)
