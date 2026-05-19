// =============================================================
// Legal pages translations (Impressum + Datenschutz, RU/EN/DE).
// Strategy: honest personal portfolio (no Gewerbe yet).
//
// TODO before going live: replace the address and phone
// placeholders below with the real postal address and a real
// (or omitted) phone number. Same placeholders appear in all
// three languages — keep them in sync.
//
// Replace EVERYWHERE:
//   [STRASSE HAUSNUMMER]   → real street + number
//   [PLZ ORT]              → real ZIP + city
//   [+49 ...]              → real phone OR remove the whole "Telefon" line
// =============================================================
const legalTranslations = {
    ru: {
        ui: {
            home: 'Назад на главную',
            footerName: 'Anatolii Yastrebov',
            footerRights: 'Все права защищены.',
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
        },
        pages: {
            datenschutz: {
                title: 'Datenschutzerklärung',
                content: `
                    <h1>Datenschutzerklärung</h1>
                    <h2>1. Ответственное лицо</h2>
                    <p>Ответственным за обработку данных на этом сайте является:</p>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Германия<br>
                        E-mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a>
                    </p>
                    <h2>2. Контактная форма</h2>
                    <h3>2.1 Какие данные собираются</h3>
                    <p>При использовании контактной формы собираются следующие персональные данные:</p>
                    <ul>
                        <li>Ваше имя</li>
                        <li>Ваш e-mail</li>
                        <li>Ваше сообщение</li>
                    </ul>
                    <h3>2.2 Цель обработки</h3>
                    <p>Введённые вами данные используются исключительно для ответа на ваш запрос. Данные не передаются третьим лицам и не используются в иных целях. Для отправки писем используется сторонний сервис SendGrid (Twilio Inc., США) — данные обрабатываются строго в рамках доставки сообщения.</p>
                    <h3>2.3 Правовое основание</h3>
                    <p>Обработка персональных данных осуществляется на основании вашего добровольного согласия в соответствии со ст. 6 абз. 1 п. a GDPR. Вы можете отозвать согласие в любой момент.</p>
                    <h3>2.4 Срок хранения</h3>
                    <p>Данные удаляются, как только цель их обработки достигнута и отсутствуют законодательные основания для дальнейшего хранения.</p>
                    <h2>3. Ваши права</h2>
                    <p>В отношении ваших персональных данных у вас есть следующие права:</p>
                    <ul>
                        <li><strong>Право на доступ (ст. 15 GDPR):</strong> получить информацию об обрабатываемых данных.</li>
                        <li><strong>Право на исправление (ст. 16 GDPR):</strong> требовать исправления неточных данных.</li>
                        <li><strong>Право на удаление (ст. 17 GDPR):</strong> требовать удаления персональных данных.</li>
                        <li><strong>Право на возражение (ст. 21 GDPR):</strong> возражать против обработки данных.</li>
                        <li><strong>Право на переносимость данных (ст. 20 GDPR):</strong> получить данные в машиночитаемом формате.</li>
                        <li><strong>Отзыв согласия (ст. 7 абз. 3 GDPR):</strong> отозвать согласие в любой момент.</li>
                    </ul>
                    <h2>4. Право на жалобу</h2>
                    <p>Вы имеете право подать жалобу в надзорный орган, если считаете, что обработка ваших данных нарушает требования GDPR.</p>
                    <h2>5. Контакт</h2>
                    <p>По вопросам защиты данных вы можете связаться со мной:</p>
                    <p>E-mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a></p>
                    <div class="legal-footer">
                        <p><a href="index.html">← Назад на главную</a></p>
                        <p><a href="impressum.html">Impressum</a></p>
                    </div>
                `
            },
            impressum: {
                title: 'Impressum',
                content: `
                    <h1>Impressum</h1>
                    <h2>Сведения согласно § 5 TMG</h2>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Германия
                    </p>
                    <h2>Контакт</h2>
                    <p>
                        <!-- TODO: подставить настоящий телефон перед деплоем (или удалить эту строку, если телефон не публикуем) -->
                        Телефон: [+49 ...]<br>
                        E-mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a>
                    </p>
                    <h2>Ответственный за содержание согласно § 18 абз. 2 MStV</h2>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Германия
                    </p>
                    <h2>Отказ от ответственности</h2>
                    <h3>Ответственность за контент</h3>
                    <p>Как поставщик услуг, я несу ответственность за собственный контент на этих страницах в соответствии с общим законодательством. Однако я не обязан контролировать переданную или сохранённую стороннюю информацию.</p>
                    <p>Обязательства по удалению или блокировке использования информации остаются в силе в рамках действующего законодательства.</p>
                    <h3>Ответственность за ссылки</h3>
                    <p>Сайт содержит ссылки на внешние ресурсы третьих лиц. Я не влияю на их содержание и не могу нести за него ответственность.</p>
                    <p>При выявлении нарушений такие ссылки будут незамедлительно удалены.</p>
                    <h3>Авторское право</h3>
                    <p>Контент и материалы на этом сайте защищены немецким авторским правом. Любое использование вне его рамок требует письменного согласия автора.</p>
                    <p>Если вы заметили нарушение авторских прав, пожалуйста, сообщите об этом. При подтверждении нарушения соответствующий контент будет удалён.</p>
                    <div class="legal-footer">
                        <p><a href="index.html">← Назад на главную</a></p>
                        <p><a href="datenschutz.html">Datenschutzerklärung</a></p>
                    </div>
                `
            }
        }
    },
    en: {
        ui: {
            home: 'Back to Home',
            footerName: 'Anatolii Yastrebov',
            footerRights: 'All rights reserved.',
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
        },
        pages: {
            datenschutz: {
                title: 'Datenschutzerklärung',
                content: `
                    <h1>Datenschutzerklärung</h1>
                    <h2>1. Controller</h2>
                    <p>The controller responsible for data processing on this website is:</p>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Germany<br>
                        E-mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a>
                    </p>
                    <h2>2. Contact Form</h2>
                    <h3>2.1 Data Collected</h3>
                    <p>When you use the contact form, the following personal data is collected:</p>
                    <ul>
                        <li>Your name</li>
                        <li>Your email address</li>
                        <li>Your message</li>
                    </ul>
                    <h3>2.2 Purpose of Processing</h3>
                    <p>Your data is used exclusively to respond to your request. It is not used for any other purpose and is not shared with third parties. Email delivery is handled via SendGrid (Twilio Inc., USA) — data is processed strictly to deliver the message.</p>
                    <h3>2.3 Legal Basis</h3>
                    <p>Your data is processed based on your voluntary consent according to Art. 6(1)(a) GDPR. You can withdraw your consent at any time.</p>
                    <h3>2.4 Storage Period</h3>
                    <p>Your data is deleted once it is no longer required for the purpose for which it was collected, unless legal retention obligations apply.</p>
                    <h2>3. Your Rights</h2>
                    <p>You have the following rights regarding your personal data:</p>
                    <ul>
                        <li><strong>Right of access (Art. 15 GDPR):</strong> obtain information about your processed data.</li>
                        <li><strong>Right to rectification (Art. 16 GDPR):</strong> request correction of inaccurate data.</li>
                        <li><strong>Right to erasure (Art. 17 GDPR):</strong> request deletion of your personal data.</li>
                        <li><strong>Right to object (Art. 21 GDPR):</strong> object to data processing.</li>
                        <li><strong>Right to data portability (Art. 20 GDPR):</strong> receive your data in a structured format.</li>
                        <li><strong>Right to withdraw consent (Art. 7(3) GDPR):</strong> withdraw consent at any time.</li>
                    </ul>
                    <h2>4. Right to Lodge a Complaint</h2>
                    <p>You have the right to lodge a complaint with a supervisory authority if you believe that processing of your personal data violates GDPR.</p>
                    <h2>5. Contact</h2>
                    <p>If you have any privacy-related questions, you can contact me at:</p>
                    <p>E-mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a></p>
                    <div class="legal-footer">
                        <p><a href="index.html">← Back to Home</a></p>
                        <p><a href="impressum.html">Impressum</a></p>
                    </div>
                `
            },
            impressum: {
                title: 'Impressum',
                content: `
                    <h1>Impressum</h1>
                    <h2>Information according to § 5 TMG</h2>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Germany
                    </p>
                    <h2>Contact</h2>
                    <p>
                        <!-- TODO: подставить настоящий телефон перед деплоем (или удалить эту строку) -->
                        Phone: [+49 ...]<br>
                        E-mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a>
                    </p>
                    <h2>Person responsible for content according to § 18 (2) MStV</h2>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Germany
                    </p>
                    <h2>Disclaimer</h2>
                    <h3>Liability for Content</h3>
                    <p>As a service provider, I am responsible for my own content on these pages under general laws. However, I am not obliged to monitor transmitted or stored third-party information.</p>
                    <p>Obligations to remove or block the use of information remain unaffected under applicable law.</p>
                    <h3>Liability for Links</h3>
                    <p>This website contains links to external third-party websites. I have no influence over their content and therefore cannot accept liability for it.</p>
                    <p>If legal violations become known, such links will be removed immediately.</p>
                    <h3>Copyright</h3>
                    <p>The content and works on these pages are subject to German copyright law. Any use beyond copyright limits requires written consent of the author.</p>
                    <p>If you become aware of any copyright infringement, please inform me. Upon notification of violations, the relevant content will be removed immediately.</p>
                    <div class="legal-footer">
                        <p><a href="index.html">← Back to Home</a></p>
                        <p><a href="datenschutz.html">Datenschutzerklärung</a></p>
                    </div>
                `
            }
        }
    },
    de: {
        ui: {
            home: 'Zurück zur Startseite',
            footerName: 'Anatolii Yastrebov',
            footerRights: 'Alle Rechte vorbehalten.',
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
        },
        pages: {
            datenschutz: {
                title: 'Datenschutzerklärung',
                content: `
                    <h1>Datenschutzerklärung</h1>
                    <h2>1. Verantwortlicher</h2>
                    <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Deutschland<br>
                        E-Mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a>
                    </p>
                    <h2>2. Kontaktformular</h2>
                    <h3>2.1 Erhobene Daten</h3>
                    <p>Wenn Sie das Kontaktformular nutzen, werden folgende personenbezogene Daten erhoben:</p>
                    <ul>
                        <li>Ihr Name</li>
                        <li>Ihre E-Mail-Adresse</li>
                        <li>Ihre Nachricht</li>
                    </ul>
                    <h3>2.2 Zweck der Datenverarbeitung</h3>
                    <p>Die eingegebenen Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben. Für den E-Mail-Versand wird SendGrid (Twilio Inc., USA) eingesetzt; die Daten werden dabei ausschließlich zur Zustellung der Nachricht verarbeitet.</p>
                    <h3>2.3 Rechtsgrundlage</h3>
                    <p>Die Verarbeitung erfolgt auf Grundlage Ihrer freiwilligen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung kann jederzeit widerrufen werden.</p>
                    <h3>2.4 Speicherdauer</h3>
                    <p>Ihre Daten werden gelöscht, sobald sie für den Zweck der Erhebung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
                    <h2>3. Ihre Rechte</h2>
                    <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                    <ul>
                        <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Auskunft über verarbeitete Daten.</li>
                        <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Berichtigung unrichtiger Daten.</li>
                        <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Löschung personenbezogener Daten.</li>
                        <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen die Verarbeitung.</li>
                        <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt der Daten in maschinenlesbarer Form.</li>
                        <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Widerruf jederzeit möglich.</li>
                    </ul>
                    <h2>4. Beschwerderecht</h2>
                    <p>Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.</p>
                    <h2>5. Kontakt</h2>
                    <p>Bei Fragen zum Datenschutz können Sie mich jederzeit kontaktieren:</p>
                    <p>E-Mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a></p>
                    <div class="legal-footer">
                        <p><a href="index.html">← Zurück zur Startseite</a></p>
                        <p><a href="impressum.html">Impressum</a></p>
                    </div>
                `
            },
            impressum: {
                title: 'Impressum',
                content: `
                    <h1>Impressum</h1>
                    <h2>Angaben gemäß § 5 TMG</h2>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Deutschland
                    </p>
                    <h2>Kontakt</h2>
                    <p>
                        <!-- TODO: подставить настоящий телефон перед деплоем (oder Zeile entfernen, falls keine Telefonnummer veröffentlicht wird) -->
                        Telefon: [+49 ...]<br>
                        E-Mail: <a href="mailto:kontakt@anatolii-yastrebov.top">kontakt@anatolii-yastrebov.top</a>
                    </p>
                    <h2>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
                    <p>
                        Anatolii Yastrebov<br>
                        <!-- TODO: подставить настоящий адрес перед деплоем -->
                        [STRASSE HAUSNUMMER]<br>
                        [PLZ ORT]<br>
                        Deutschland
                    </p>
                    <h2>Haftungsausschluss</h2>
                    <h3>Haftung für Inhalte</h3>
                    <p>Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Überwachung übermittelter oder gespeicherter fremder Informationen ist jedoch nicht verpflichtend.</p>
                    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.</p>
                    <h3>Haftung für Links</h3>
                    <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe und daher keine Gewähr übernehmen kann.</p>
                    <p>Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.</p>
                    <h3>Urheberrecht</h3>
                    <p>Die Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Eine Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung des jeweiligen Autors.</p>
                    <p>Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen Hinweis. Bei Bekanntwerden werden entsprechende Inhalte unverzüglich entfernt.</p>
                    <div class="legal-footer">
                        <p><a href="index.html">← Zurück zur Startseite</a></p>
                        <p><a href="datenschutz.html">Datenschutzerklärung</a></p>
                    </div>
                `
            }
        }
    }
};

function getLegalLanguage() {
    const stored = localStorage.getItem('language');
    if (stored && legalTranslations[stored]) {
        return stored;
    }
    return 'de';
}

function updateActiveLanguageButton(language) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === language);
    });
}

function renderLegalPage(language) {
    const pageId = document.body.dataset.legalPage;
    const selectedLanguage = legalTranslations[language] ? language : 'de';
    const pageData = legalTranslations[selectedLanguage].pages[pageId];
    if (!pageData) return;

    const ui = legalTranslations[selectedLanguage].ui;
    const legalContent = document.getElementById('legal-content');
    if (legalContent) {
        legalContent.innerHTML = pageData.content;
    }

    const homeLink = document.getElementById('legal-home-link');
    if (homeLink) {
        homeLink.textContent = ui.home;
    }

    const footerName = document.getElementById('footer-name');
    const footerRights = document.getElementById('footer-rights');
    const footerImpressum = document.getElementById('footer-impressum');
    const footerDatenschutz = document.getElementById('footer-datenschutz');

    if (footerName) footerName.textContent = ui.footerName;
    if (footerRights) footerRights.textContent = ui.footerRights;
    if (footerImpressum) footerImpressum.textContent = ui.impressum;
    if (footerDatenschutz) footerDatenschutz.textContent = ui.datenschutz;

    document.documentElement.lang = selectedLanguage;
    document.title = `${pageData.title} - ${ui.footerName}`;
    updateActiveLanguageButton(selectedLanguage);
}

function initLegalLanguageSwitcher() {
    let currentLanguage = getLegalLanguage();
    renderLegalPage(currentLanguage);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            currentLanguage = btn.getAttribute('data-lang') || 'de';
            localStorage.setItem('language', currentLanguage);
            renderLegalPage(currentLanguage);
        });
    });

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLegalLanguageSwitcher);
} else {
    initLegalLanguageSwitcher();
}
