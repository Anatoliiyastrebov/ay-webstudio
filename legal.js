// =============================================================
// Rechtstexte (Impressum, Datenschutzerklärung, rechtliche Hinweise).
//
// Rechtsverbindlich ist die deutsche Fassung — nur sie wird gerendert
// (renderLegalPage nutzt immer legalTranslations.de).
//
// Adresse, E-Mail und Telefon NICHT hier von Hand ändern:
// sie stehen in site.config.json und werden von
// `npm run set-domain` in den CONTACT-Block unten geschrieben.
// =============================================================

/* set-domain:contact-start */
const CONTACT = {
    name: "Anatolii Yastrebov",
    street: "Memelstraße 8",
    postal: "51371 Leverkusen",
    country: 'Deutschland',
    email: "kontakt@anatolii-yastrebov.top",
    phone: "+49 151 72443444"
};
/* set-domain:contact-end */

const addressBlock = `
                        ${CONTACT.name}<br>
                        ${CONTACT.street}<br>
                        ${CONTACT.postal}<br>
                        ${CONTACT.country}`;

const phoneLine = CONTACT.phone
    ? `Telefon: <a href="tel:${CONTACT.phone.replace(/[^+\d]/g, '')}">${CONTACT.phone}</a><br>`
    : '';

const mailLink = `<a href="mailto:${CONTACT.email}">${CONTACT.email}</a>`;

const legalNoteOtherLanguages = `
    <p><strong>Please note / Обратите внимание:</strong> the legally binding version of this
    page is the German one, as required for websites operated from Germany.
    Юридически обязательной является немецкая версия этой страницы.</p>`;

const legalTranslations = {
    de: {
        ui: {
            home: 'Zurück zur Startseite',
            footerName: CONTACT.name,
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
        },
        pages: {
            impressum: {
                title: 'Impressum',
                content: `
                    <h1>Impressum</h1>

                    <h2>Angaben gemäß § 5 DDG</h2>
                    <p>${addressBlock}
                    </p>
                    <p>Geschäftsbezeichnung: AY Webstudio<br>
                    Rechtsform: Einzelunternehmen</p>

                    <h2>Kontakt</h2>
                    <p>
                        ${phoneLine}E-Mail: ${mailLink}
                    </p>

                    <h2>Umsatzsteuer</h2>
                    <p>Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer berechnet
                    und ausgewiesen. Eine Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG liegt
                    daher nicht vor.</p>

                    <h2>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
                    <p>${addressBlock}
                    </p>

                    <h2>Verbraucherstreitbeilegung</h2>
                    <p>Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
                    einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG).</p>

                    <h2>Haftungsausschluss</h2>
                    <h3>Haftung für Inhalte</h3>
                    <p>Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                    Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
                    nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>

                    <h3>Haftung für Links</h3>
                    <p>Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte
                    ich keinen Einfluss habe. Für diese fremden Inhalte kann ich keine Gewähr
                    übernehmen; verantwortlich ist stets der jeweilige Anbieter der Seite.</p>
                    <p>Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend
                    entfernt.</p>

                    <h3>Urheberrecht</h3>
                    <p>Die von mir erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Eine Verwertung außerhalb der Grenzen des Urheberrechts
                    bedarf meiner schriftlichen Zustimmung.</p>
                    <p>Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um
                    einen Hinweis. Bei Bekanntwerden werden entsprechende Inhalte unverzüglich
                    entfernt.</p>

                    <div class="legal-footer">
                        <p><a href="index.html">← Zurück zur Startseite</a></p>
                        <p><a href="datenschutz.html">Datenschutzerklärung</a></p>
                    </div>
                `
            },

            datenschutz: {
                title: 'Datenschutzerklärung',
                content: `
                    <h1>Datenschutzerklärung</h1>

                    <h2>1. Verantwortlicher</h2>
                    <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                    <p>${addressBlock}<br>
                        E-Mail: ${mailLink}
                    </p>

                    <h2>2. Hosting und Server-Logfiles</h2>
                    <p>Diese Website wird bei der Cloudflare, Inc., 101 Townsend St, San Francisco,
                    CA 94107, USA gehostet und über deren weltweites Servernetz ausgeliefert. Beim
                    Aufruf der Seite werden automatisch Daten an den Server übertragen und in
                    sogenannten Logfiles gespeichert:</p>
                    <ul>
                        <li>IP-Adresse des anfragenden Geräts</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>Name und URL der abgerufenen Datei</li>
                        <li>verwendeter Browser und Betriebssystem</li>
                        <li>gegebenenfalls die zuvor besuchte Seite (Referrer)</li>
                    </ul>
                    <p>Diese Verarbeitung ist technisch notwendig, um die Website auszuliefern und
                    ihren sicheren Betrieb zu gewährleisten. Rechtsgrundlage ist das berechtigte
                    Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO. Die Logfiles werden nach kurzer Zeit
                    automatisch gelöscht. Anfragen aus Europa werden in der Regel von Servern
                    innerhalb der EU beantwortet; eine Verarbeitung in den USA lässt sich jedoch
                    nicht ausschließen. Mit Cloudflare besteht ein Vertrag zur Auftragsverarbeitung
                    nach Art. 28 DSGVO; die Übermittlung in die USA erfolgt auf Grundlage der
                    EU-Standardvertragsklauseln.</p>

                    <h2>3. Keine Cookies, kein Tracking</h2>
                    <p>Diese Website setzt keine Cookies für Analyse, Werbung oder Reichweitenmessung
                    ein. Es findet keine Webanalyse statt. Schriftarten und Skripte werden von
                    meinem eigenen Server geladen, nicht von externen Anbietern wie Google Fonts.
                    Karten und Videos Dritter sind nicht eingebunden. Aus diesem Grund ist kein
                    Cookie-Banner erforderlich.</p>
                    <p>Ihre gewählte Sprache und die Einstellung für helles oder dunkles Design
                    werden ausschließlich lokal in Ihrem Browser gespeichert (localStorage). Diese
                    Angaben werden nicht an mich übertragen und können jederzeit über die
                    Einstellungen Ihres Browsers gelöscht werden.</p>

                    <h2>4. Kontaktformular</h2>
                    <h3>4.1 Erhobene Daten</h3>
                    <p>Wenn Sie das Kontaktformular nutzen, werden folgende Daten erhoben:</p>
                    <ul>
                        <li>Ihr Name</li>
                        <li>Ihre E-Mail-Adresse</li>
                        <li>Ihre Nachricht</li>
                        <li>optional die Angabe, um welche Art von Website es geht</li>
                    </ul>

                    <h3>4.2 Zweck und Empfänger</h3>
                    <p>Die Daten werden ausschließlich verwendet, um Ihre Anfrage zu beantworten.
                    Die Formularanfrage wird unmittelbar auf der Plattform verarbeitet, auf der
                    diese Website läuft (Cloudflare, Inc., siehe Abschnitt 2); für den Versand der
                    E-Mail an mich wird SendGrid (Twilio Inc., USA) genutzt. Beide Anbieter
                    verarbeiten die Daten
                    ausschließlich in meinem Auftrag und auf Grundlage der
                    EU-Standardvertragsklauseln. Eine Weitergabe zu anderen Zwecken oder an weitere
                    Dritte findet nicht statt.</p>

                    <h3>4.3 Rechtsgrundlage</h3>
                    <p>Die Verarbeitung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung
                    gemäß Art. 6 Abs. 1 lit. a DSGVO, die Sie beim Absenden des Formulars erteilen.
                    Betrifft Ihre Anfrage die Anbahnung eines Vertrags, stützt sich die Verarbeitung
                    zusätzlich auf Art. 6 Abs. 1 lit. b DSGVO. Sie können Ihre Einwilligung
                    jederzeit formlos per E-Mail widerrufen; die Rechtmäßigkeit der bis dahin
                    erfolgten Verarbeitung bleibt davon unberührt.</p>

                    <h3>4.4 Speicherdauer</h3>
                    <p>Ihre Anfrage und die zugehörigen Daten werden gelöscht, sobald sie zur
                    Bearbeitung nicht mehr erforderlich sind — in der Regel spätestens sechs Monate
                    nach dem Abschluss der Korrespondenz. Kommt es zu einem Auftrag, gelten die
                    gesetzlichen Aufbewahrungsfristen des Handels- und Steuerrechts von bis zu zehn
                    Jahren.</p>

                    <!-- Dieser Abschnitt beschreibt den WhatsApp-Kanal. Wird die Nummer in
                         site.config.json entfernt, verschwinden die Schaltflächen — dann muss
                         auch dieser Abschnitt gelöscht und neu nummeriert werden. -->
                    <h2>5. Kontaktaufnahme über WhatsApp</h2>
                    <h3>5.1 Freiwilliges Angebot</h3>
                    <p>Auf dieser Website finden Sie Schaltflächen, die einen Chat mit mir über
                    WhatsApp öffnen. Die Nutzung ist freiwillig. Sie erreichen mich ebenso per
                    E-Mail oder über das Kontaktformular; dafür gelten die Angaben in Abschnitt 4.</p>

                    <h3>5.2 Verarbeitete Daten</h3>
                    <p>Wenn Sie mir über WhatsApp schreiben, verarbeite ich die Daten, die Sie mir
                    dabei übermitteln:</p>
                    <ul>
                        <li>Ihre Mobilfunknummer</li>
                        <li>Ihren bei WhatsApp hinterlegten Profilnamen und gegebenenfalls Ihr Profilbild</li>
                        <li>den Inhalt Ihrer Nachrichten</li>
                        <li>Zeitpunkt und Zustellstatus der Nachrichten</li>
                    </ul>

                    <h3>5.3 Empfänger und Datenübermittlung</h3>
                    <p>Betreiber des Dienstes ist für Nutzerinnen und Nutzer in Europa die WhatsApp
                    Ireland Limited, Merrion Road, Dublin 4, Irland — ein Unternehmen der
                    Meta-Unternehmensgruppe. Die Inhalte Ihrer Nachrichten sind
                    Ende-zu-Ende-verschlüsselt und für WhatsApp nicht lesbar. Verbindungsdaten wie
                    Rufnummern sowie Zeitpunkt und Häufigkeit der Kommunikation verarbeitet
                    WhatsApp jedoch eigenverantwortlich und kann sie an Server der Meta Platforms,
                    Inc. in den USA übermitteln. Auf diese Verarbeitung habe ich keinen Einfluss.
                    Einzelheiten entnehmen Sie bitte der Datenschutzrichtlinie von WhatsApp.</p>
                    <p>Ich gleiche mein Adressbuch nicht mit WhatsApp ab. Ihre Rufnummer wird von
                    mir nicht in den Kontakten des Geräts gespeichert und dadurch auch nicht an
                    WhatsApp übertragen.</p>

                    <h3>5.4 Rechtsgrundlage</h3>
                    <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Nachricht der
                    Anbahnung oder Durchführung eines Vertrags dient, im Übrigen Art. 6 Abs. 1
                    lit. f DSGVO. Mein berechtigtes Interesse besteht darin, Ihnen einen schnellen
                    und von Ihnen selbst gewählten Kommunikationsweg anzubieten. Indem Sie mich
                    über WhatsApp anschreiben, entscheiden Sie sich bewusst für diesen Weg.</p>

                    <h3>5.5 Speicherdauer</h3>
                    <p>Chatverläufe lösche ich, sobald sie zur Bearbeitung Ihres Anliegens nicht
                    mehr erforderlich sind — in der Regel spätestens sechs Monate nach Abschluss
                    der Korrespondenz. Kommt es zu einem Auftrag, gelten die gesetzlichen
                    Aufbewahrungsfristen; vertragsrelevante Absprachen führe ich in diesem Fall
                    per E-Mail.</p>

                    <h3>5.6 Bitte beachten</h3>
                    <p>Übermitteln Sie mir über WhatsApp bitte keine besonderen Kategorien
                    personenbezogener Daten im Sinne von Art. 9 DSGVO und keine Zugangsdaten.
                    Nutzen Sie dafür bitte die E-Mail.</p>

                    <h2>6. Ihre Rechte</h2>
                    <p>Sie haben bezüglich Ihrer personenbezogenen Daten folgende Rechte:</p>
                    <ul>
                        <li><strong>Auskunft (Art. 15 DSGVO):</strong> Auskunft über die zu Ihrer Person verarbeiteten Daten.</li>
                        <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Berichtigung unrichtiger Daten.</li>
                        <li><strong>Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer Daten, soweit keine Aufbewahrungspflicht besteht.</li>
                        <li><strong>Einschränkung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung.</li>
                        <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Erhalt Ihrer Daten in einem maschinenlesbaren Format.</li>
                        <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Widerspruch gegen die Verarbeitung.</li>
                        <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> jederzeit mit Wirkung für die Zukunft.</li>
                    </ul>
                    <p>Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an ${mailLink}.</p>

                    <h2>7. Beschwerderecht bei der Aufsichtsbehörde</h2>
                    <p>Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO
                    verstößt, haben Sie gemäß Art. 77 DSGVO das Recht, sich bei einer
                    Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist die Behörde Ihres
                    Wohnorts oder die meines Sitzes. Für Nordrhein-Westfalen ist dies die
                    Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen
                    (LDI NRW).</p>

                    <h2>8. Datensicherheit</h2>
                    <p>Die Website wird ausschließlich verschlüsselt über HTTPS ausgeliefert. Damit
                    sind die Daten, die Sie über das Kontaktformular übermitteln, auf dem
                    Transportweg geschützt.</p>

                    <h2>9. Kontakt zum Datenschutz</h2>
                    <p>Bei Fragen zum Datenschutz erreichen Sie mich unter: ${mailLink}</p>

                    <div class="legal-footer">
                        <p><a href="index.html">← Zurück zur Startseite</a></p>
                        <p><a href="impressum.html">Impressum</a></p>
                    </div>
                `
            },

            'rechtliche-hinweise': {
                title: 'Rechtliche Hinweise',
                content: `
                    <h1>Rechtliche Hinweise</h1>

                    <h2>Angebot und Preise</h2>
                    <p>Die auf dieser Website genannten Preise sind Richtwerte für den jeweils
                    beschriebenen Leistungsumfang und stellen kein bindendes Angebot dar. Der
                    endgültige Festpreis wird vor Beginn der Arbeit schriftlich vereinbart und
                    ändert sich danach nicht mehr.</p>
                    <p>Als Kleinunternehmer im Sinne von § 19 UStG wird keine Umsatzsteuer berechnet
                    und ausgewiesen. Die genannten Beträge sind Endpreise.</p>

                    <h2>Angegebene Bearbeitungszeiten</h2>
                    <p>Zeitangaben wie „fertig in 1–2 Tagen“ beziehen sich auf Arbeitstage und
                    setzen voraus, dass die benötigten Texte, Bilder und Angaben zu Beginn
                    vollständig vorliegen. Verzögerungen bei der Zulieferung verlängern den Zeitraum
                    entsprechend.</p>

                    <h2>Hinweis zu den gezeigten Beispielprojekten</h2>
                    <p>Bei allen auf dieser Website gezeigten Beispiel-Websites handelt es sich um
                    <strong>Konzeptprojekte</strong>, die ich selbst erstellt habe, um verschiedene
                    Branchen zu veranschaulichen. Die dargestellten Unternehmen, Namen, Preise,
                    Bewertungen und Öffnungszeiten sind frei erfunden. Es handelt sich weder um
                    echte Unternehmen noch um Kundenaufträge, und es wird damit keine
                    Geschäftsbeziehung behauptet.</p>

                    <h2>Weitere Pflichtangaben</h2>
                    <p>Die vollständigen Anbieterangaben finden Sie im
                    <a href="impressum.html">Impressum</a>, Informationen zur Verarbeitung
                    personenbezogener Daten in der
                    <a href="datenschutz.html">Datenschutzerklärung</a>.</p>

                    <div class="legal-footer">
                        <p><a href="index.html">← Zurück zur Startseite</a></p>
                        <p><a href="impressum.html">Impressum</a></p>
                    </div>
                `
            }
        }
    }
};

function renderLegalPage() {
    const pageId = document.body.dataset.legalPage;
    if (!pageId) return;

    const pageData = legalTranslations.de.pages[pageId];
    if (!pageData) return;

    const legalContent = document.getElementById('legal-content');
    if (legalContent) {
        legalContent.innerHTML = pageData.content + legalNoteOtherLanguages;
    }

    document.documentElement.lang = 'de';
    document.title = `${pageData.title} · ${CONTACT.name}`;
}

function initLegalPage() {
    if (!document.body.dataset.legalPage) return;

    renderLegalPage();

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLegalPage);
} else {
    initLegalPage();
}
