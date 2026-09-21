// Blog article bodies (DE / EN / RU). Rendered by renderBlogArticles() in script.js.
(function () {
    function article(id, meta, readMin, title, bodyHtml) {
        return `<article id="${id}" class="blog-article">
            <div class="blog-meta">
                <span>${meta}</span><span>·</span><span class="blog-read-time" data-read-min="${readMin}"></span>
            </div>
            <h2>${title}</h2>
            ${bodyHtml}
        </article>`;
    }

    window.blogArticles = {
        kosten: {
            de: article(
                'kosten',
                'Notiz · Preisrahmen',
                6,
                'Was kostet eine Website in Deutschland?',
                `<p>Eine Frage, die in vielen Diskussionen auftaucht – und auf die es selten eine einfache Antwort gibt. Diese Notiz fasst grobe Preisrahmen zusammen, wie sie in öffentlichen Quellen und Foren genannt werden. <strong>Kein Angebot</strong>, einfach ein Lese-Überblick.</p>
                <h3>Grobe Preisrahmen, wie sie häufig genannt werden</h3>
                <ul>
                    <li><strong>Baukasten (Wix, Jimdo, Squarespace):</strong> ca. 10–30 € pro Monat – Eigenleistung beim Aufbau, eingeschränktes Design.</li>
                    <li><strong>Freelancer / Einzelentwickler:</strong> häufig 600 – 3.000 € einmalig für kleine Business-Websites.</li>
                    <li><strong>Klassische Webagentur:</strong> 3.000 – 15.000 € für vergleichbare Projekte – mit mehr Overhead.</li>
                    <li><strong>Größere Agentur / komplexe Projekte:</strong> ab 20.000 € – meist bei E-Commerce, mehrsprachigen Plattformen, individuellen Tools.</li>
                </ul>
                <h3>Was den Preis typischerweise treibt</h3>
                <ul>
                    <li><strong>Umfang:</strong> 1 Seite kostet weniger als 10 Seiten – logisch, wird aber oft unterschätzt.</li>
                    <li><strong>Texte und Bilder:</strong> Wer sie nicht mitbringt, zahlt für die Erstellung.</li>
                    <li><strong>Funktionen:</strong> Online-Buchung, Shop, Mitgliederbereich – das ist eigene Software, kein „Add-on“.</li>
                    <li><strong>Design-Komplexität:</strong> Standard-Layout ist günstig; sehr individuelles Branding deutlich teurer.</li>
                </ul>
                <h3>Nicht vergessen: laufende Kosten</h3>
                <p>Eine Website ist nach dem Launch nicht „fertig“. In groben Zahlen:</p>
                <ul>
                    <li>Hosting: 5–20 € / Monat (Deutschland)</li>
                    <li>Domain: 10–20 € / Jahr</li>
                    <li>Wartung &amp; Updates: variabel, je nach Stack</li>
                </ul>`
            ),
            en: article(
                'kosten',
                'Note · price ranges',
                6,
                'What does a website cost in Germany?',
                `<p>A question that comes up often — with rarely a simple answer. This note summarizes rough price ranges as commonly mentioned in public sources and forums. <strong>Not an offer</strong>, just reading material.</p>
                <h3>Rough price ranges often quoted</h3>
                <ul>
                    <li><strong>Site builders (Wix, Jimdo, Squarespace):</strong> about €10–30 per month — you build it yourself, limited design freedom.</li>
                    <li><strong>Freelancer / solo developer:</strong> often €600–3,000 one-off for small business sites.</li>
                    <li><strong>Classic web agency:</strong> €3,000–15,000 for comparable projects — more overhead.</li>
                    <li><strong>Larger agency / complex projects:</strong> from €20,000 — e-commerce, multilingual platforms, custom tools.</li>
                </ul>
                <h3>What typically drives the price</h3>
                <ul>
                    <li><strong>Scope:</strong> one page costs less than ten — obvious, but often underestimated.</li>
                    <li><strong>Copy and images:</strong> if you don’t provide them, you pay for production.</li>
                    <li><strong>Features:</strong> online booking, shop, member area — that’s real software, not an “add-on”.</li>
                    <li><strong>Design complexity:</strong> standard layouts are cheaper; strong custom branding costs more.</li>
                </ul>
                <h3>Don’t forget running costs</h3>
                <p>A site isn’t “done” after launch. Rough figures:</p>
                <ul>
                    <li>Hosting: €5–20 / month (Germany)</li>
                    <li>Domain: €10–20 / year</li>
                    <li>Maintenance &amp; updates: varies by stack</li>
                </ul>`
            ),
            ru: article(
                'kosten',
                'Заметка · цены',
                6,
                'Сколько стоит сайт в Германии?',
                `<p>Вопрос, который часто всплывает — и редко имеет простой ответ. Здесь собраны ориентиры из открытых источников и обсуждений. <strong>Это не предложение</strong>, а заметка для чтения.</p>
                <h3>Ориентиры, которые часто называют</h3>
                <ul>
                    <li><strong>Конструкторы (Wix, Jimdo, Squarespace):</strong> примерно 10–30 € в месяц — сборка своими руками, ограниченный дизайн.</li>
                    <li><strong>Фрилансер / один разработчик:</strong> часто 600–3 000 € разово за небольшой бизнес-сайт.</li>
                    <li><strong>Классическое агентство:</strong> 3 000–15 000 € за сопоставимые проекты — больше накладных расходов.</li>
                    <li><strong>Крупное агентство / сложные проекты:</strong> от 20 000 € — интернет-магазины, мультиязычность, кастомные инструменты.</li>
                </ul>
                <h3>От чего обычно зависит цена</h3>
                <ul>
                    <li><strong>Объём:</strong> одна страница дешевле десяти — логично, но часто недооценивают.</li>
                    <li><strong>Тексты и картинки:</strong> если не свои — платите за создание.</li>
                    <li><strong>Функции:</strong> онлайн-запись, магазин, личный кабинет — это отдельная разработка, не «дополнение».</li>
                    <li><strong>Сложность дизайна:</strong> шаблон дешевле; сильный индивидуальный брендинг дороже.</li>
                </ul>
                <h3>Не забывайте о расходах после запуска</h3>
                <p>Сайт после публикации не «готов навсегда». Грубо:</p>
                <ul>
                    <li>Хостинг: 5–20 € / месяц (Германия)</li>
                    <li>Домен: 10–20 € / год</li>
                    <li>Поддержка и обновления: зависит от стека</li>
                </ul>`
            )
        },
        baukasten: {
            de: article(
                'baukasten',
                'Strategie',
                5,
                'Baukasten vs. eigener Code',
                `<p>Wix, Jimdo, Squarespace – „Website in 10 Minuten“. Klingt verlockend, ist aber nicht für jeden Fall die richtige Wahl. Diese Notiz sammelt Punkte, die man vor der Entscheidung im Hinterkopf haben sollte.</p>
                <h3>1. Miete vs. Eigentum</h3>
                <p>Ein Baukasten ist ein Abo. Endet das Abo, ist die Seite weg. Eine eigene Lösung läuft auf eigenem Hosting – die Migration und Datenhoheit liegen bei einem selbst.</p>
                <h3>2. Geschwindigkeit und SEO</h3>
                <p>Baukasten-Seiten enthalten oft viel automatisch erzeugtes Markup. Eine schlanke, individuell strukturierte Seite hat es bei Page-Speed-Themen meist leichter.</p>
                <h3>3. Datenschutz</h3>
                <p>Manche Baukästen laden externe Schriften, Tracker oder Skripte. Wer den Datenschutz selbst kontrollieren will, hat mit eigenem Code weniger Überraschungen – setzt aber natürlich auch eigenes Wissen voraus.</p>
                <h3>4. Migration und Lock-in</h3>
                <p>Beim Wechsel von einem Baukasten lassen sich Inhalte oft nicht 1:1 exportieren. Das ist kein Showstopper, aber ein Punkt, den man kennen sollte.</p>
                <h3>Wann ein Baukasten ein guter Weg ist</h3>
                <ul>
                    <li>Schnelles Ausprobieren einer Idee in 1–2 Wochen.</li>
                    <li>Reine Visitenkarte für ein temporäres Projekt.</li>
                    <li>Internes Projekt ohne hohe Performance- oder SEO-Anforderungen.</li>
                </ul>`
            ),
            en: article(
                'baukasten',
                'Strategy',
                5,
                'Site builder vs. custom code',
                `<p>Wix, Jimdo, Squarespace — “website in 10 minutes”. Tempting, but not the right fit for every case. Notes to keep in mind before you decide.</p>
                <h3>1. Rent vs. ownership</h3>
                <p>A builder is a subscription. When it ends, the site can disappear. Your own solution runs on your hosting — you control migration and data.</p>
                <h3>2. Speed and SEO</h3>
                <p>Builder pages often ship lots of auto-generated markup. A lean, hand-structured site usually wins on page speed.</p>
                <h3>3. Privacy</h3>
                <p>Some builders load external fonts, trackers or scripts. With your own code you control privacy better — but you need the know-how.</p>
                <h3>4. Migration and lock-in</h3>
                <p>Leaving a builder often means content doesn’t export 1:1. Not a deal-breaker, but worth knowing.</p>
                <h3>When a builder is a good fit</h3>
                <ul>
                    <li>Quickly testing an idea in 1–2 weeks.</li>
                    <li>A simple business card site for a temporary project.</li>
                    <li>Internal projects without strict performance or SEO needs.</li>
                </ul>`
            ),
            ru: article(
                'baukasten',
                'Стратегия',
                5,
                'Конструктор vs собственный код',
                `<p>Wix, Jimdo, Squarespace — «сайт за 10 минут». Звучит заманчиво, но подходит не всем. Заметка о том, что учесть до выбора.</p>
                <h3>1. Аренда vs владение</h3>
                <p>Конструктор — это подписка. Закончилась — сайт может пропасть. Свой код на своём хостинге — вы сами про миграцию и данные.</p>
                <h3>2. Скорость и SEO</h3>
                <p>У конструкторов часто много автоматической разметки. Лёгкий ручной сайт обычно быстрее.</p>
                <h3>3. Защита данных</h3>
                <p>Часть конструкторов тянет внешние шрифты, трекеры и скрипты. Со своим кодом проще контролировать приватность — но нужны знания.</p>
                <h3>4. Миграция и привязка</h3>
                <p>При уходе с конструктора контент редко переносится один в один. Не катастрофа, но важный нюанс.</p>
                <h3>Когда конструктор уместен</h3>
                <ul>
                    <li>Быстро проверить идею за 1–2 недели.</li>
                    <li>Визитка на время для временного проекта.</li>
                    <li>Внутренний проект без жёстких требований к скорости и SEO.</li>
                </ul>`
            )
        },
        handwerker: {
            de: article(
                'handwerker',
                'Web · kleine Websites',
                5,
                'Websites lokaler Betriebe',
                `<p>Kleine, lokale Websites sind eine eigene Disziplin: wenig Platz, hohe Erwartungen, viele Mobil-Besuche. Eine Notiz mit Beobachtungen darüber, was solche Seiten gut macht.</p>
                <h3>Was Besucher solcher Seiten typischerweise wollen</h3>
                <ul>
                    <li>Schnell verstehen, ob das Angebot passt.</li>
                    <li>Eine klare Möglichkeit, in Kontakt zu kommen.</li>
                    <li>Vertrauensanker: Adresse, Bilder, ggf. Bewertungen.</li>
                </ul>
                <h3>Bewährte Bausteine</h3>
                <ul>
                    <li>Klickbare Telefonnummer / Kontakt-Element direkt im sichtbaren Bereich auf Mobil.</li>
                    <li>Wenige, klar benannte Schwerpunkte statt langer Listen.</li>
                    <li>Ort / Region klar nennen – das hilft auch bei lokaler Suche.</li>
                    <li>Echte Bilder statt austauschbarer Stockfotos.</li>
                    <li>Sehr kurzes Kontaktformular: jedes zusätzliche Feld kostet Abschlüsse.</li>
                </ul>
                <h3>Was meist nicht hilft</h3>
                <p>Viele Animationen, schwere Slider, große Hintergrundvideos. Sieht modern aus, kostet aber Performance und lenkt von der eigentlichen Botschaft ab.</p>`
            ),
            en: article(
                'handwerker',
                'Web · small sites',
                5,
                'Websites for local businesses',
                `<p>Small local sites are their own discipline: little space, high expectations, lots of mobile traffic. Notes on what works well.</p>
                <h3>What visitors usually want</h3>
                <ul>
                    <li>Quickly see if the offer fits.</li>
                    <li>A clear way to get in touch.</li>
                    <li>Trust signals: address, photos, reviews if available.</li>
                </ul>
                <h3>Proven building blocks</h3>
                <ul>
                    <li>Tap-to-call / contact above the fold on mobile.</li>
                    <li>A few clear focus areas instead of long lists.</li>
                    <li>Name the city / region — helps local search too.</li>
                    <li>Real photos instead of generic stock.</li>
                    <li>Very short contact form — every extra field costs conversions.</li>
                </ul>
                <h3>What usually doesn’t help</h3>
                <p>Heavy animation, big sliders, background videos. Looks modern but hurts performance and distracts from the message.</p>`
            ),
            ru: article(
                'handwerker',
                'Веб · небольшие сайты',
                5,
                'Сайты локального бизнеса',
                `<p>Небольшие локальные сайты — отдельная дисциплина: мало места, высокие ожидания, много мобильного трафика. Заметка о том, что работает.</p>
                <h3>Чего обычно ждут посетители</h3>
                <ul>
                    <li>Быстро понять, подходит ли предложение.</li>
                    <li>Понятный способ связаться.</li>
                    <li>Доверие: адрес, фото, отзывы при наличии.</li>
                </ul>
                <h3>Рабочие блоки</h3>
                <ul>
                    <li>Кликабельный телефон / контакт в первом экране на мобиле.</li>
                    <li>Несколько чётких направлений вместо длинных списков.</li>
                    <li>Указать город / регион — полезно и для локального поиска.</li>
                    <li>Живые фото, а не сток.</li>
                    <li>Короткая форма — каждое лишнее поле снижает заявки.</li>
                </ul>
                <h3>Что чаще мешает</h3>
                <p>Много анимации, тяжёлые слайдеры, фоновое видео. Выглядит современно, но бьёт по скорости и отвлекает от сути.</p>`
            )
        }
    };

    window.renderBlogArticles = function (lang, readTimeLabel) {
        const container = document.getElementById('blog-articles');
        if (!container || !window.blogArticles) return;

        const order = ['kosten', 'baukasten', 'handwerker'];
        const cta = typeof window.getBlogCtaHtml === 'function' ? window.getBlogCtaHtml(lang) : '';
        container.innerHTML = order
            .map((id) => (window.blogArticles[id][lang] || window.blogArticles[id].de) + cta)
            .join('');

        container.querySelectorAll('.blog-read-time').forEach((el) => {
            const min = el.getAttribute('data-read-min') || '5';
            el.textContent = readTimeLabel.replace('%n', min);
        });

    };
})();
