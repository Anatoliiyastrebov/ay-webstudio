// =============================================================
// AY · Website-Dienstleistung für kleine Betriebe (DE primary)
// Zielgruppe: Inhaber kleiner Betriebe in Leverkusen, Köln und
// ganz NRW — Texte auf A2–B1-Niveau,
// ohne Fachjargon. Preise: siehe leistungen.html.
// =============================================================

const translations = {
    de: {
        meta: {
            title: 'Website für kleine Betriebe — Leverkusen, Köln, NRW | ab 600 €',
            description: 'Websites für Handwerk, Kfz-Werkstatt, Salon und Gastronomie in Leverkusen, Köln und ganz NRW. Festpreis ab 600 €, fertig in wenigen Tagen.'
        },
        nav: {
            services: 'Leistungen & Preise',
            projects: 'Beispiele',
            included: 'Was enthalten ist',
            skills: 'Kompetenzen',
            about: 'Über mich',
            blog: 'Blog',
            contact: 'Kontakt'
        },
        ui: {
            themeToggle: 'Design umschalten',
            menu: 'Menü',
            logoHome: 'Zum Seitenanfang',
            skipLink: 'Zum Inhalt springen',
            photoAlt: 'Anatolii Yastrebov, entwickelt Websites für kleine Betriebe im Rheinland',
            personName: 'Anatolii Yastrebov'
        },
        hero: {
            eyebrow: 'Websites für kleine Betriebe · Leverkusen · Köln · NRW · Deutschland',
            line1: 'Ihre Website für',
            line2: 'Ihren Betrieb',
            roleLine: 'In wenigen Tagen fertig. Zum Festpreis.',
            subtitle: 'Für Handwerk, Kfz-Werkstatt, Salon, Gastronomie, Pflegedienst, Fahrschule und andere Betriebe in der Region. Sie bekommen eine klare Website mit Kontaktformular, Impressum und Datenschutzerklärung — fertig eingerichtet mit Domain und Hosting. <strong>Ab 600 €, fertig in 1–4 Tagen.</strong>',
            ctaPrimary: 'Kostenloses Erstgespräch',
            ctaSecondary: 'Preise ansehen',
            trust: 'Impressum, Datenschutzerklärung und DSGVO-konforme Einwilligung sind in jedem Projekt enthalten.',
            langs: '🗣️ Ich spreche Deutsch, Ukrainisch und Russisch — Sie können mir in Ihrer Sprache schreiben.'
        },
        services: {
            /* promo:de:start */
            promo: {
                badge: '−20 % für die ersten 2 Kunden',
                note: 'Aktion: 20 % Rabatt auf Landingpage, Basis-Website und Erweiterte Website — für die ersten 2 Neukunden, die bis zum 31.12.2026 einen Auftrag erteilen. Aktuell sind noch 2 Plätze frei. Der Rabatt gilt im Gegenzug für eine Referenz und eine öffentliche Bewertung. Bezugspreis ist der reguläre Festpreis des jeweiligen Pakets. Danach gelten wieder die regulären Preise.',
                p1: { price: '480–640 €', was: 'statt 600–800 €' },
                p2: { price: '720–1 120 €', was: 'statt 900–1 400 €' },
                p3: { price: '1 440–2 400 €', was: 'statt 1 800–3 000 €' },
            },
            /* promo:de:end */
            pageTitle: 'Website-Preise für kleine Betriebe — Leverkusen & Köln',
            pageDescription: 'Feste Preise für Websites kleiner Betriebe in Leverkusen, Köln und ganz NRW: Landingpage ab 600 €, Basis-Website ab 900 €, Wartung 60 € im Monat.',
            title: 'Leistungen & Preise',
            intro: 'Feste Preise, feste Termine. Sie wissen vor dem Start, was die Website kostet und wann sie fertig ist. Alle Pakete enthalten Impressum, Datenschutzerklärung, Kontaktformular sowie die Einrichtung von Domain und Hosting.',
            popular: 'Am häufigsten gewählt',
            cta: 'Angebot anfordern',
            p1: {
                name: 'Landingpage',
                price: '600–800 €',
                time: 'Arbeitsaufwand: 1–2 Arbeitstage',
                for: 'Für Betriebe, die schnell online sichtbar sein wollen.',
                f1: 'Eine Seite mit allen wichtigen Angaben',
                f2: 'Passt sich an Handy, Tablet und Computer an',
                f3: 'Kontaktformular',
                f4: 'Impressum und Datenschutzerklärung',
                f5: 'Einrichtung von Domain und Hosting'
            },
            p2: {
                name: 'Basis-Website',
                price: '900–1 400 €',
                time: 'Arbeitsaufwand: 2–4 Arbeitstage',
                for: 'Für Betriebe, die ihre Leistungen ausführlich zeigen wollen.',
                f1: '3–5 Seiten, zum Beispiel Start, Leistungen, Über uns, Kontakt',
                f2: 'Passt sich an Handy, Tablet und Computer an',
                f3: 'Kontaktformular',
                f4: 'Impressum und Datenschutzerklärung',
                f5: 'Grundlegende Suchmaschinen-Optimierung',
                f6: 'Einrichtung Ihres Google Unternehmensprofils',
                f7: 'Einrichtung von Domain und Hosting'
            },
            p3: {
                name: 'Erweiterte Website',
                price: '1 800–3 000 €',
                time: 'Arbeitsaufwand: 6–10 Arbeitstage',
                for: 'Für Betriebe, die Texte und Bilder selbst pflegen möchten.',
                f1: 'Bis zu 10 Seiten',
                f2: 'Redaktionssystem: Sie ändern Texte und Bilder selbst',
                f3: 'Zwei Sprachversionen',
                f4: 'Bildergalerie',
                f5: 'Erweiterte Suchmaschinen-Optimierung',
                f6: 'Alles aus der Basis-Website'
            },
            p4: {
                name: 'Wartung',
                price: '60 € im Monat',
                time: 'Monatlich kündbar',
                for: 'Damit Ihre Website sicher und aktuell bleibt.',
                f1: 'Technische Updates und Sicherheitsprüfung',
                f2: 'Wöchentliche Backups',
                f3: 'Verfügbarkeitsüberwachung: Bei einem Ausfall kümmere ich mich noch am selben Tag (Mo–Fr)',
                f4: 'Bis zu 5 Änderungen pro Monat: Texte, Fotos, Preise, Kontaktdaten',
                f5: 'Änderungen innerhalb von 2 Werktagen',
                f6: 'Domain und Hosting inklusive – keine weiteren laufenden Kosten'
            },
            p5: {
                name: 'Hosting und Domain',
                price: '20 € im Monat',
                time: 'Monatlich kündbar',
                for: 'Für Kunden ohne Wartungsvertrag.',
                f1: 'Betrieb Ihrer Website bei Cloudflare — schnelles weltweites Servernetz',
                f2: 'SSL-Zertifikat und Schutz vor Überlastungsangriffen inklusive',
                f3: 'Verwaltung Ihrer Domain',
                f4: 'Keine Mindestlaufzeit — monatlich kündbar'
            },
            hourly: '<strong>Einzelne Arbeiten: 45 € pro Stunde.</strong> Zum Beispiel: eine bestehende Website überarbeiten, Rechtstexte ergänzen oder eine weitere Seite hinzufügen.',
            vat: 'Kein Ausweis von Umsatzsteuer gemäß § 19 UStG (Kleinunternehmerregelung). Der genaue Preis hängt vom Umfang ab und steht vor dem Start fest.',
            deliveryLink: 'Lieferzeiten ansehen',
            whatsappCta: 'Per WhatsApp fragen',
            whatsappMsg: 'Guten Tag! Ich interessiere mich für das Paket %s.',
            delivery: {
                title: 'Lieferzeiten',
                colPackage: 'Paket',
                colEffort: 'Arbeitsaufwand',
                colDone: 'Fertigstellung',
                rows: {
                    r1: { effort: '1–2 Arbeitstage', done: 'in der Regel bis 1 Woche' },
                    r2: { effort: '2–4 Arbeitstage', done: 'in der Regel bis 2 Wochen' },
                    r3: { effort: '6–10 Arbeitstage', done: 'in der Regel bis 4 Wochen' },
                    r4: { effort: 'laufend', none: 'entfällt' },
                    r5: { effort: 'laufend', none: 'entfällt' }
                },
                whyTitle: 'Warum zwei Zahlen?',
                why1: 'Der Arbeitsaufwand ist die Zeit, die ich tatsächlich an Ihrer Website arbeite. Die Fertigstellung ist der Termin, an dem sie online geht.',
                why2: 'Der Unterschied entsteht nicht in der Technik, sondern beim Warten. Texte, Fotos und Freigaben kommen aus Ihrem laufenden Betrieb — und das dauert erfahrungsgemäß ein bis zwei Wochen. Ich nenne deshalb beide Zahlen statt nur der schönen.',
                why3: 'Die Frist beginnt, sobald mir Ihre Inhalte vollständig vorliegen. Wenn Sie mir alles am ersten Tag geben, ist Ihre Website deutlich früher fertig als angegeben.',
                speed: 'Kleine Unternehmenswebsites gehen bei mir in Wochen online, nicht in Monaten. Sie haben einen direkten Ansprechpartner und keine Projektabteilung dazwischen.'
            },
            needs: {
                title: 'Was ich von Ihnen brauche',
                i1: 'Texte oder Stichpunkte zu jeder Seite',
                i2: 'Fotos in guter Qualität — oder die Freigabe, passende Bilder auszuwählen',
                i3: 'Ihr Logo, falls vorhanden',
                i4: 'Zugangsdaten zu Domain und E-Mail, falls schon vorhanden',
                i5: 'eine Ansprechperson, die Entscheidungen freigeben darf',
                pdf: 'Als PDF-Checkliste herunterladen'
            },
            fixedPrice: {
                title: 'Warum Festpreis und nicht Stundenabrechnung?',
                p1: 'Ich baue kleine Unternehmenswebsites nach einem festen Ablauf. Das macht die Arbeit planbar — und diesen Vorteil gebe ich im Preis weiter.',
                p2: 'Sie wissen vorher, was Ihre Website kostet. Rückfragen, Abstimmungen und zwei Korrekturrunden sind im Preis enthalten und werden nicht nachberechnet.',
                p3: 'Einzelne Arbeiten außerhalb eines Pakets — Überarbeitung einer bestehenden Website, zusätzliche Seiten, Rechtstexte — rechne ich mit 45 € pro Stunde ab.'
            },
            process: {
                title: 'Wie es abläuft',
                s1: { name: 'Kostenloses Gespräch', text: 'Wir sprechen kurz über Ihren Betrieb und darüber, was die Website können soll. Unverbindlich.' },
                s2: { name: 'Festes Angebot', text: 'Sie bekommen den Preis und den Termin schriftlich. Danach ändert sich der Preis nicht mehr.' },
                s3: { name: 'Umsetzung', text: 'Ich baue die Website und zeige sie Ihnen. Sie sagen, was noch geändert werden soll.' },
                s4: { name: 'Veröffentlichung', text: 'Die Website geht online. Sie erhalten alle Zugänge und alle Rechte an der Website.' }
            },
            faq: {
                title: 'Häufige Fragen',
                q1: 'Wie läuft die Bezahlung?',
                a1: 'Sie zahlen die Hälfte, wenn wir starten, und die andere Hälfte, wenn die Website fertig ist und online geht. Sie bekommen eine ordentliche Rechnung.',
                q2: 'Wie viele Änderungen sind enthalten?',
                a2: 'Zwei Korrekturrunden sind im Festpreis enthalten. Das reicht in den meisten Fällen. Wenn Sie danach noch etwas ändern möchten, rechne ich 45 € pro Stunde ab — vorher sage ich Ihnen, wie lange es ungefähr dauert.',
                q3: 'Wer bezahlt Domain und Hosting?',
                a3: 'Im Wartungspaket sind Domain und Hosting enthalten — Sie zahlen nur den monatlichen Betrag. Ohne Wartung können Sie das Hosting-Paket für 20 € im Monat nehmen. Alternativ melden Sie Domain und Hosting selbst an und zahlen direkt beim Anbieter, üblicherweise 10–15 € im Monat.',
                q4: 'Was ist, wenn mir das Ergebnis nicht gefällt?',
                a4: 'Sie sehen die Website, bevor sie online geht, und sagen mir, was geändert werden soll. Dafür sind die zwei Korrekturrunden da. Der Preis steht vorher fest und ändert sich dabei nicht.',
                q5: 'Gehört die Website wirklich mir?',
                a5: 'Ja. Nach der Bezahlung erhalten Sie alle Rechte an der Website und alle Zugänge. Sie sind an mich nicht gebunden und können jederzeit zu jemand anderem wechseln.',
                q6: 'Wie lange dauert es wirklich?',
                a6: 'Die genannten Zeiten gelten ab dem Moment, in dem Texte, Bilder und Angaben vollständig vorliegen. Das Warten auf Inhalte ist der häufigste Grund für Verzögerungen — deshalb sprechen wir am Anfang darüber, was Sie mitbringen.',
                q7: 'Ich brauche einen Online-Shop. Geht das?',
                a7: 'Nein. Online-Shops und komplexe Web-Anwendungen biete ich nicht an. Ich sage Ihnen das gleich im ersten Gespräch und empfehle Ihnen passende Kolleginnen und Kollegen.',
                q8: 'Kann ich Sie auf Russisch oder Ukrainisch erreichen?',
                a8: 'Ja. Ich spreche Deutsch, Ukrainisch und Russisch. Schreiben Sie mir in der Sprache, die Ihnen leichter fällt — das Angebot und die Rechnung sind dann auf Deutsch.'
            },
            honest: 'Online-Shops, Buchungs- und Warenwirtschaftssysteme sowie komplexe Web-Anwendungen biete ich nicht an. Wenn Sie so etwas brauchen, sage ich das offen und empfehle Ihnen passende Kolleginnen und Kollegen.',
            finalText: 'Sie wissen noch nicht, welches Paket passt? Schreiben Sie mir kurz, worum es geht — ich sage Ihnen ehrlich, was Sie brauchen.',
            finalCta: 'Kostenloses Erstgespräch'
        },
        cases: {
            title: 'Projekte & Live-Demos',
            subtitle: 'Zehn Live-Demos — kompakte Vorschau hier, vollständige Beschreibung und Tech-Stack auf der Detailseite.',
            labelSummary: 'Überblick',
            labelImplemented: 'Umgesetzt',
            labelPlanned: 'Geplant / Anbindung',
            labelStack: 'Technologie-Stack',
            labelStyles: 'Gestaltung & Oberfläche',
            demoBadge: 'Live-Demo',
            viewLive: 'Live-Demo öffnen ↗',
            viewCase: 'Details öffnen'
        },
        study: {
            title: 'So kann Ihre Website aussehen',
            subtitle: 'Drei Beispiele aus verschiedenen Branchen. Sie sehen, was gebaut wurde, wie lange es dauert und können jede Seite live öffnen.',
            disclaimerShort: 'Hinweis: Das sind Konzeptprojekte, keine echten Kundenaufträge.',
            disclaimer: 'Hinweis: Das sind <strong>Konzeptprojekte</strong>. Ich habe sie selbst gebaut, um zu zeigen, wie eine Website für die jeweilige Branche aussehen kann. Es sind keine echten Kundenaufträge und keine echten Unternehmen.',
            badge: 'Konzeptprojekt',
            labelTask: 'Die Aufgabe',
            labelDone: 'Was gemacht wurde',
            labelTime: 'Umfang und Arbeitsaufwand',
            live: 'Live-Demo öffnen ↗',
            more: 'Alle Details',
            detailsShow: 'Details anzeigen',
            detailsHide: 'Details ausblenden',
            allDemos: 'Alle zehn Beispiel-Websites ansehen →',
            c1: {
                branch: 'Handwerksbetrieb · Renovierung und Malerarbeiten',
                name: 'MeisterHaus Renovierung',
                alt: 'Startseite der Beispiel-Website für einen Renovierungsbetrieb mit Vorher-Nachher-Vergleich',
                task: 'Ein Handwerksbetrieb wird meist über Empfehlungen gefunden. Die Website soll zeigen, was der Betrieb kann, und Vertrauen aufbauen, bevor jemand anruft.',
                d1: 'Sechs Leistungsbereiche, klar getrennt und leicht zu lesen',
                d2: 'Vorher-Nachher-Regler für abgeschlossene Arbeiten',
                d3: 'Bildergalerie der Projekte mit Ortsangabe',
                d4: 'Preisrechner, damit Kunden eine erste Einschätzung bekommen',
                d5: 'Anruf- und WhatsApp-Schaltfläche, die am Handy immer sichtbar bleibt',
                time: 'Entspricht dem Paket „Erweiterte Website“ — Arbeitsaufwand 6–10 Arbeitstage'
            },
            c2: {
                branch: 'Kfz-Werkstatt · Reparatur und Wartung',
                name: 'Meisterwerkstatt Schmidt',
                alt: 'Startseite der Beispiel-Website für eine Kfz-Werkstatt mit Leistungen und Preisen',
                task: 'Wer eine Werkstatt sucht, will drei Dinge sofort wissen: Was kostet es ungefähr, wann habt ihr auf und wie erreiche ich euch. Alles andere kann warten.',
                d1: 'Leistungen mit Preisangabe „ab … €“ direkt auf der Startseite',
                d2: 'Öffnungszeiten und Telefonnummer gut sichtbar',
                d3: 'Kurze Liste der Vorteile, zum Beispiel Meisterbetrieb und Garantie',
                d4: 'Schaltfläche für die Terminanfrage',
                time: 'Entspricht dem Paket „Landingpage“ — Arbeitsaufwand 1–2 Arbeitstage'
            },
            c3: {
                branch: 'Friseur- und Beauty-Salon',
                name: 'Mira Beauty Lounge',
                alt: 'Startseite der Beispiel-Website für einen Friseursalon mit Leistungen und Terminformular',
                task: 'Ein Salon lebt von Terminen. Die Website soll die Preise zeigen, einen Eindruck vom Salon geben und die Terminanfrage so einfach wie möglich machen.',
                d1: 'Leistungen mit Preis und Dauer je Behandlung',
                d2: 'Bildergalerie und Vorstellung des Teams',
                d3: 'Formular für die Terminanfrage',
                d4: 'Häufige Fragen zum Aufklappen',
                time: 'Entspricht dem Paket „Basis-Website“ — Arbeitsaufwand 2–4 Arbeitstage'
            }
        },
        included: {
            title: 'Was in Ihrer Website enthalten ist',
            subtitle: 'In jedem Paket enthalten — ohne Aufpreis.',
            i1: { title: 'Funktioniert auf jedem Gerät', text: 'Ihre Website sieht auf dem Handy, auf dem Tablet und am Computer gut aus. Die meisten Kunden suchen unterwegs.' },
            i2: { title: 'Kontaktformular', text: 'Anfragen kommen direkt in Ihr E-Mail-Postfach. Sie brauchen dafür kein zusätzliches Programm.' },
            i3: { title: 'Rechtlich sauber', text: 'Impressum und Datenschutzerklärung gehören dazu, ebenso die DSGVO-konforme Einwilligung im Formular.' },
            i4: { title: 'Für Google vorbereitet', text: 'Ihre Website ist technisch sauber aufgebaut: Ort und Leistung stehen in Titeln, Texten und Seitenangaben — zum Beispiel „Friseur Leverkusen“. Eine bestimmte Position bei Google kann niemand garantieren.' },
            i5: { title: 'Schnelle Ladezeit', text: 'Die Seiten laden schnell, auch bei mobilem Internet. Wer lange wartet, geht wieder weg.' },
            i6: { title: 'Die Website gehört Ihnen', text: 'Sie erhalten alle Rechte und alle Zugänge. Sie sind an niemanden gebunden und können jederzeit wechseln.' }
        },
        about: {
            title: 'Über mich',
            p1: 'Mein Name ist <strong>Anatolii\u00A0Yastrebov</strong>. Ich baue Websites für kleine Betriebe in Leverkusen, Köln, in ganz NRW und deutschlandweit.',
            p2: 'Ich arbeite allein, ohne Agentur dazwischen. Sie sprechen also immer direkt mit der Person, die Ihre Website baut. Das macht die Wege kurz und die Preise überschaubar.',
            p3: 'Mir ist wichtig, dass Sie verstehen, wofür Sie bezahlen. Ich erkläre alles ohne Fachwörter und sage offen, wenn etwas nicht nötig ist oder wenn ich der Falsche für die Aufgabe bin.',
            point1: '📍 Region: Leverkusen, Köln, ganz NRW und deutschlandweit',
            point2: '💬 Sprachen: Deutsch (B2), Ukrainisch und Russisch (Muttersprache), Englisch (Grundkenntnisse)',
            point3: '⏱️ Antwort auf Anfragen in der Regel innerhalb von 24 Stunden (werktags)',
            techTitle: 'Technik — für alle, die es interessiert',
            techText: 'HTML5, CSS3, modernes JavaScript (ES2020+), responsives Layout mit CSS Grid und Flexbox, semantisches HTML und Barrierefreiheit, Git & GitHub, Vite und npm-Skripte. Beim Bauen setze ich KI-Werkzeuge ein — das beschleunigt die Arbeit und erweitert, was ich umsetzen kann. Geprüft wird danach von Hand: Formulare, Ladezeit und die Darstellung auf dem Handy teste ich selbst, bevor eine Website online geht. Gebaut wird ohne Baukasten — das hält die Seiten schnell und wartbar.',
            cta: 'Kostenloses Erstgespräch'
        },
        blog: {
            title: 'Notizen zur Web-Entwicklung',
            subtitle: 'Gedanken zur Web-Entwicklung, Notizen aus dem Lernprozess.',
            pageTitle: 'Blog: Was eine Website kostet — für kleine Betriebe',
            pageDescription: 'Verständlich erklärt: Was eine Website kostet, wann sich ein Baukasten lohnt und was kleine Websites lokaler Betriebe gut macht. Für Betriebe in Leverkusen, Köln und Umgebung.',
            projectsTitle: 'Meine Live-Projekte',
            projectsSubtitle: 'Alle zehn Demo-Websites mit Screenshot, Technologie-Stack und Umsetzungsdetails — konzeptionelle Portfolio-Arbeit, keine echten Unternehmen.',
            readTime: 'Lesezeit: ca. %n Min.',
            read: 'Weiterlesen →',
            cta: {
                title: 'Brauchen Sie eine Website für Ihren Betrieb?',
                text: 'Feste Preise, feste Termine: ab 600 € und in wenigen Tagen fertig. Impressum, Datenschutzerklärung und Kontaktformular sind immer dabei.',
                button: 'Leistungen und Preise ansehen'
            },
            cat1: 'Notiz',
            cat2: 'Strategie',
            cat3: 'Web',
            a1: { title: 'Was kostet eine Website in Deutschland?', excerpt: 'Überblick über realistische Preisrahmen für Web-Projekte – als Lese-Notiz, nicht als Angebot.' },
            a2: { title: 'Baukasten vs. eigener Code', excerpt: 'Wann lohnt sich ein Website-Baukasten, und wann ist eine eigene Lösung besser? Eine ehrliche Übersicht.' },
            a3: { title: 'Websites lokaler Betriebe', excerpt: 'Was kleine Websites gut macht: Klarheit, Schnelligkeit, Mobile-First.' }
        },
        contact: {
            title: 'Kostenloses Erstgespräch',
            subtitle: 'Erzählen Sie kurz, was Sie machen und was die Website können soll. Sie bekommen von mir eine ehrliche Einschätzung mit Preis und Termin — kostenlos und unverbindlich.',
            directHint: 'Sie schreiben nicht gern über Formulare? Schreiben Sie mir einfach direkt eine E-Mail.',
            reply: { label: 'Antwortzeit', value: 'Antwort in der Regel innerhalb von 24 Stunden (werktags)' },
            langs: { label: 'Sprachen', value: '<strong>Ich spreche Deutsch, Ukrainisch und Russisch.</strong> Schreiben Sie mir ruhig in der Sprache, die Ihnen leichter fällt.' },
            gdpr: 'Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Weitere Informationen finden Sie in unserer <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
            email: { label: 'E-Mail' },
            phone: { label: 'Telefon', hint: 'Anruf oder Nachricht — auch am Wochenende' },
            whatsapp: { label: 'WhatsApp', hint: 'Schreiben Sie mir direkt', msg: 'Guten Tag! Ich habe eine Frage zu einer Website.' },
            region: { label: 'Region', value: 'Leverkusen, Köln, ganz NRW und deutschlandweit' },
            form: {
                name: 'Ihr Name',
                email: 'E-Mail',
                messageLabel: 'Nachricht',
                message: 'Was für ein Betrieb ist es, und was soll die Website können? Ein paar Sätze reichen.',
                typeLabel: 'Um welche Art von Website geht es? (optional)',
                typeHint: 'Die Lieferzeit beginnt, sobald Ihre Inhalte vollständig vorliegen.',
                typeAny: 'Weiß ich noch nicht',
                type1: 'Landingpage (600–800 €)',
                type2: 'Basis-Website (900–1 400 €)',
                type3: 'Erweiterte Website (1 800–3 000 €)',
                type4: 'Wartung (60 € im Monat)',
                type5: 'Bestehende Website überarbeiten (45 €/Stunde)',
                type6: 'Hosting und Domain (20 € im Monat)',
                submit: 'Anfrage senden',
                submitted: 'Gesendet! ✓',
                sending: 'Wird gesendet…',
                sendingLong: 'Server wird gestartet, einen Moment…',
                error: 'Sendefehler',
                consent: 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zu.',
                consentError: 'Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.'
            }
        },
        footer: {
            name: 'Anatolii Yastrebov',
            role: 'Websites für kleine Betriebe · Leverkusen',
            rechtlicheHinweise: 'Rechtliche Hinweise',
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
        },
        project: {
            back: '← Zurück zur Übersicht',
            notFoundTitle: '—',
            notFoundText: 'Projekt nicht gefunden.',
            metaTitle: 'Projekt · Anatolii Yastrebov',
            metaDescription: 'Portfolio-Projekt im Detail: Umsetzung, Technologien und geplante Erweiterungen.'
        }
    },

    en: {
        meta: {
            title: 'Websites for small businesses — Leverkusen, Cologne, NRW | from €600',
            description: 'Websites for trades, car workshops, salons and restaurants in Leverkusen, Cologne and across NRW. Fixed price from €600, ready in a few days.'
        },
        nav: { services: 'Services & prices', projects: 'Examples', included: "What's included", skills: 'Skills', about: 'About', blog: 'Blog', contact: 'Contact' },
        ui: {
            themeToggle: 'Toggle theme',
            menu: 'Menu',
            logoHome: 'Back to top',
            skipLink: 'Skip to content',
            photoAlt: 'Anatolii Yastrebov, builds websites for small businesses in the Rhineland',
            personName: 'Anatolii Yastrebov'
        },
        hero: {
            eyebrow: 'Websites for small businesses · Leverkusen · Cologne · NRW · Germany',
            line1: 'Your website for',
            line2: 'your business',
            roleLine: 'Ready in a few days. At a fixed price.',
            subtitle: 'For trades, car workshops, salons, restaurants, care services, driving schools and other local businesses. You get a clear website with contact form, imprint and privacy policy — set up with domain and hosting. <strong>From €600, ready in 1–4 days.</strong>',
            ctaPrimary: 'Free first consultation',
            ctaSecondary: 'See prices',
            trust: 'An imprint, a privacy policy and GDPR-compliant consent are included in every project.',
            langs: '🗣️ I speak German, Ukrainian and Russian — feel free to write in your own language.'
        },
        services: {
            /* promo:en:start */
            promo: {
                badge: '−20% for the first 2 clients',
                note: 'Promotion: 20% off the Landing page, Basic website and Extended website packages — for the first 2 new clients who place an order by 2026-12-31. 2 slots are still available. The discount is granted in exchange for a reference and a public review. The reference price is the regular fixed price of each package. After that the regular prices apply again.',
                p1: { price: '€480–640', was: 'instead of €600–800' },
                p2: { price: '€720–1,120', was: 'instead of €900–1,400' },
                p3: { price: '€1,440–2,400', was: 'instead of €1,800–3,000' },
            },
            /* promo:en:end */
            pageTitle: 'Website prices for small businesses — Leverkusen & Cologne',
            pageDescription: 'Fixed prices for small business websites in Leverkusen, Cologne and across North Rhine-Westphalia (NRW): landing page from €600, basic website from €900, maintenance €60 per month.',
            title: 'Services & prices',
            intro: 'Fixed prices, fixed dates. You know what the website costs and when it will be ready before we start. Every package includes an imprint, a privacy policy, a contact form and the setup of domain and hosting.',
            popular: 'Most chosen',
            cta: 'Request a quote',
            p1: {
                name: 'Landing page',
                price: '€600–800',
                time: 'Working time: 1–2 working days',
                for: 'For businesses that want to be visible online quickly.',
                f1: 'One page with all the important information',
                f2: 'Adapts to phone, tablet and computer',
                f3: 'Contact form',
                f4: 'Imprint and privacy policy',
                f5: 'Setup of domain and hosting'
            },
            p2: {
                name: 'Basic website',
                price: '€900–1,400',
                time: 'Working time: 2–4 working days',
                for: 'For businesses that want to present their services in detail.',
                f1: '3–5 pages, for example Home, Services, About, Contact',
                f2: 'Adapts to phone, tablet and computer',
                f3: 'Contact form',
                f4: 'Imprint and privacy policy',
                f5: 'Basic search engine optimisation',
                f6: 'Setup of your Google Business Profile',
                f7: 'Setup of domain and hosting'
            },
            p3: {
                name: 'Extended website',
                price: '€1,800–3,000',
                time: 'Working time: 6–10 working days',
                for: 'For businesses that want to edit texts and images themselves.',
                f1: 'Up to 10 pages',
                f2: 'Content management system: you change texts and images yourself',
                f3: 'Two language versions',
                f4: 'Image gallery',
                f5: 'Extended search engine optimisation',
                f6: 'Everything from the basic website'
            },
            p4: {
                name: 'Maintenance',
                price: '€60 per month',
                time: 'Cancel any month',
                for: 'So your website stays secure and up to date.',
                f1: 'Technical updates and security checks',
                f2: 'Weekly backups',
                f3: 'Uptime monitoring: if something goes down, I start fixing it the same day (Mon–Fri)',
                f4: 'Up to 5 changes per month: texts, photos, prices, contact details',
                f5: 'Changes done within 2 working days',
                f6: 'Domain and hosting included – no other recurring costs'
            },
            p5: {
                name: 'Hosting and domain',
                price: '€20 per month',
                time: 'Cancel any month',
                for: 'For clients without a maintenance contract.',
                f1: 'Your website runs on Cloudflare — fast global server network',
                f2: 'SSL certificate and protection against overload attacks included',
                f3: 'I manage your domain',
                f4: 'No minimum term — cancel any month'
            },
            hourly: '<strong>Individual work: €45 per hour.</strong> For example: reworking an existing website, adding legal texts or adding another page.',
            vat: 'No VAT is charged under § 19 UStG (small business regulation). The exact price depends on the scope and is fixed before we start.',
            deliveryLink: 'See delivery times',
            whatsappCta: 'Ask via WhatsApp',
            whatsappMsg: 'Hello! I am interested in the %s package.',
            delivery: {
                title: 'Delivery times',
                colPackage: 'Package',
                colEffort: 'Working time',
                colDone: 'Go-live',
                rows: {
                    r1: { effort: '1–2 working days', done: 'usually within 1 week' },
                    r2: { effort: '2–4 working days', done: 'usually within 2 weeks' },
                    r3: { effort: '6–10 working days', done: 'usually within 4 weeks' },
                    r4: { effort: 'ongoing', none: 'not applicable' },
                    r5: { effort: 'ongoing', none: 'not applicable' }
                },
                whyTitle: 'Why two numbers?',
                why1: 'Working time is the time I actually spend on your website. Go-live is the date it goes online.',
                why2: 'The difference doesn\'t come from the technology — it comes from waiting. Texts, photos and approvals come out of your day-to-day business, and in my experience that takes one to two weeks. That\'s why I give you both numbers instead of just the nice one.',
                why3: 'The timeline starts once I have all of your content. If you give me everything on day one, your website will be ready considerably sooner than stated.',
                speed: 'With me, small business websites go online in weeks, not months. You deal with one person directly — no project department in between.'
            },
            needs: {
                title: 'What I need from you',
                i1: 'Texts or bullet points for each page',
                i2: 'Good-quality photos — or permission to choose suitable images',
                i3: 'Your logo, if you have one',
                i4: 'Login details for your domain and email, if you already have them',
                i5: 'one contact person who is allowed to approve decisions',
                pdf: 'Download as PDF checklist'
            },
            fixedPrice: {
                title: 'Why a fixed price and not hourly billing?',
                p1: 'I build small business websites following a fixed process. That makes the work predictable — and I pass that advantage on in the price.',
                p2: 'You know in advance what your website will cost. Questions, coordination and two rounds of revisions are included in the price and are not billed extra.',
                p3: 'Individual work outside a package — reworking an existing website, extra pages, legal texts — is billed at €45 per hour.'
            },
            process: {
                title: 'How it works',
                s1: { name: 'Free conversation', text: 'We talk briefly about your business and what the website should do. No obligation.' },
                s2: { name: 'Fixed quote', text: 'You get the price and the date in writing. After that the price does not change.' },
                s3: { name: 'Build', text: 'I build the website and show it to you. You tell me what should still be changed.' },
                s4: { name: 'Publication', text: 'The website goes online. You receive all access details and all rights to the website.' }
            },
            faq: {
                title: 'Frequently asked questions',
                q1: 'How does payment work?',
                a1: 'You pay half when we start and the other half when the website is finished and goes online. You receive a proper invoice.',
                q2: 'How many changes are included?',
                a2: 'Two rounds of revisions are included in the fixed price. That is enough in most cases. If you want to change something after that, I charge €45 per hour — and I tell you the estimated time beforehand.',
                q3: 'Who pays for domain and hosting?',
                a3: 'Domain and hosting are included in the maintenance package — you only pay the monthly amount. Without maintenance you can take the hosting package for €20 per month. Alternatively you register domain and hosting yourself and pay the provider directly, usually €10–15 per month.',
                q4: 'What if I do not like the result?',
                a4: 'You see the website before it goes online and tell me what should be changed. That is what the two revision rounds are for. The price is fixed beforehand and does not change.',
                q5: 'Does the website really belong to me?',
                a5: 'Yes. After payment you receive all rights to the website and all access details. You are not tied to me and can switch to someone else at any time.',
                q6: 'How long does it really take?',
                a6: 'The stated times apply from the moment texts, images and details are complete. Waiting for content is the most common reason for delays — that is why we discuss at the start what you will provide.',
                q7: 'I need an online shop. Is that possible?',
                a7: 'No. I do not offer online shops or complex web applications. I will tell you straight away in the first conversation and recommend suitable colleagues.',
                q8: 'Can I contact you in Russian or Ukrainian?',
                a8: 'Yes. I speak German, Ukrainian and Russian. Write in whichever language is easier for you — the quote and the invoice will be in German.'
            },
            honest: 'I do not offer online shops, booking or inventory systems, or complex web applications. If you need something like that, I will say so openly and recommend suitable colleagues.',
            finalText: 'Not sure which package fits? Write me a few lines about your situation — I will tell you honestly what you need.',
            finalCta: 'Free first consultation'
        },
        cases: {
            title: 'Projects & live demos',
            subtitle: 'Ten live demos — compact preview here; full description and tech stack on the detail page.',
            labelSummary: 'Overview',
            labelImplemented: 'Implemented',
            labelPlanned: 'Planned / integrations',
            labelStack: 'Tech stack',
            labelStyles: 'Styling & UI',
            demoBadge: 'Live demo',
            viewLive: 'Open live demo ↗',
            viewCase: 'Open details'
        },
        study: {
            title: 'What your website could look like',
            subtitle: 'Three examples from different industries. You can see what was built, how long it takes, and open each site live.',
            disclaimerShort: 'Please note: these are concept projects, not real client work.',
            disclaimer: 'Please note: these are <strong>concept projects</strong>. I built them myself to show what a website for each industry can look like. They are not real client work and not real companies.',
            badge: 'Concept project',
            labelTask: 'The task',
            labelDone: 'What was built',
            labelTime: 'Scope and working time',
            live: 'Open live demo ↗',
            more: 'All details',
            detailsShow: 'Show details',
            detailsHide: 'Hide details',
            allDemos: 'See all ten example websites →',
            c1: {
                branch: 'Trades business · renovation and painting',
                name: 'MeisterHaus Renovierung',
                alt: 'Home page of the example website for a renovation business with a before/after comparison',
                task: 'A trades business is usually found through recommendations. The website should show what the business can do and build trust before anyone picks up the phone.',
                d1: 'Six service areas, clearly separated and easy to read',
                d2: 'Before/after slider for completed work',
                d3: 'Project gallery with location tags',
                d4: 'Price calculator so customers get a first estimate',
                d5: 'Call and WhatsApp button that stays visible on mobile',
                time: 'Matches the "Extended website" package — 6–10 working days of work'
            },
            c2: {
                branch: 'Car workshop · repair and servicing',
                name: 'Meisterwerkstatt Schmidt',
                alt: 'Home page of the example website for a car workshop with services and prices',
                task: 'Anyone looking for a workshop wants to know three things right away: roughly what it costs, when you are open and how to reach you. Everything else can wait.',
                d1: 'Services with "from … €" pricing right on the home page',
                d2: 'Opening hours and phone number clearly visible',
                d3: 'Short list of advantages, for example master workshop and warranty',
                d4: 'Button for requesting an appointment',
                time: 'Matches the "Landing page" package — 1–2 working days of work'
            },
            c3: {
                branch: 'Hair and beauty salon',
                name: 'Mira Beauty Lounge',
                alt: 'Home page of the example website for a hair salon with services and a booking form',
                task: 'A salon lives on appointments. The website should show prices, give an impression of the salon and make requesting an appointment as easy as possible.',
                d1: 'Services with price and duration per treatment',
                d2: 'Image gallery and introduction of the team',
                d3: 'Form for requesting an appointment',
                d4: 'Frequently asked questions to expand',
                time: 'Matches the "Basic website" package — 2–4 working days of work'
            }
        },
        included: {
            title: "What's included in your website",
            subtitle: 'Included in every package — at no extra cost.',
            i1: { title: 'Works on every device', text: 'Your website looks good on a phone, on a tablet and on a computer. Most customers search while they are out.' },
            i2: { title: 'Contact form', text: 'Enquiries arrive directly in your email inbox. You do not need any extra software for it.' },
            i3: { title: 'Legally sound', text: 'An imprint and a privacy policy are part of it, as is GDPR-compliant consent in the form.' },
            i4: { title: 'Prepared for Google', text: 'Your website is built cleanly: your town and service appear in titles, texts and page data — for example "hairdresser Leverkusen". Nobody can guarantee a specific Google ranking.' },
            i5: { title: 'Fast loading', text: 'Pages load quickly, even on mobile internet. People who wait too long simply leave.' },
            i6: { title: 'The website is yours', text: 'You receive all rights and all access details. You are not tied to anyone and can switch at any time.' }
        },
        about: {
            title: 'About me',
            p1: 'My name is <strong>Anatolii\u00A0Yastrebov</strong>. I build websites for small businesses in Leverkusen, Cologne, across NRW and throughout Germany.',
            p2: 'I work on my own, with no agency in between. That means you always speak directly to the person building your website. Short paths, manageable prices.',
            p3: 'It matters to me that you understand what you are paying for. I explain everything without jargon and say openly when something is not needed, or when I am the wrong person for the job.',
            point1: '📍 Region: Leverkusen, Cologne, all of NRW and Germany-wide',
            point2: '💬 Languages: German (B2), Ukrainian and Russian (native), English (basic)',
            point3: '⏱️ Replies to enquiries usually within 24 hours (on working days)',
            techTitle: 'Tech — for those who are interested',
            techText: 'HTML5, CSS3, modern JavaScript (ES2020+), responsive layout with CSS Grid and Flexbox, semantic HTML and accessibility, Git & GitHub, Vite and npm scripts. I use AI tools while building — that speeds up the work and widens the range of tasks I can take on. Checking is done by hand afterwards: I test forms, loading time and the mobile view myself before a site goes online. Sites are built without a page builder, which keeps them fast and maintainable.',
            cta: 'Free first consultation'
        },
        blog: {
            title: 'Notes on web development',
            subtitle: 'Thoughts on web development, notes from my learning process.',
            pageTitle: 'Blog: what a website costs — for small businesses',
            pageDescription: 'Explained simply: what a website costs, when a site builder makes sense and what makes small local business websites work. For businesses in Leverkusen, Cologne and nearby.',
            projectsTitle: 'My live projects',
            projectsSubtitle: 'All ten demo sites with screenshots, tech stack and implementation notes — portfolio concepts, not real businesses.',
            readTime: 'Reading time: ~%n min',
            read: 'Read more →',
            cta: {
                title: 'Do you need a website for your business?',
                text: 'Fixed prices, fixed dates: from €600 and ready in a few days. Imprint, privacy policy and contact form are always included.',
                button: 'See services and prices'
            },
            cat1: 'Note', cat2: 'Strategy', cat3: 'Web',
            a1: { title: 'What does a website cost in Germany?', excerpt: 'An overview of realistic price ranges for web projects – as a reading note, not as a quote.' },
            a2: { title: 'Site builder vs. own code', excerpt: 'When does a website builder make sense, and when is custom code the better choice? An honest overview.' },
            a3: { title: 'Websites of small local businesses', excerpt: 'What makes small websites good: clarity, speed, mobile-first.' }
        },
        contact: {
            title: 'Free first consultation',
            subtitle: 'Tell me briefly what you do and what the website should be able to do. You get an honest assessment with price and date — free and without obligation.',
            directHint: 'Not a fan of forms? Just send me an email directly.',
            reply: { label: 'Response time', value: 'Reply usually within 24 hours (on working days)' },
            langs: { label: 'Languages', value: '<strong>I speak German, Ukrainian and Russian.</strong> Feel free to write in whichever language is easier for you.' },
            gdpr: 'Your data is used exclusively to respond to your inquiry. For more information, please see our <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
            email: { label: 'Email' },
            phone: { label: 'Phone', hint: 'Call or message — also at the weekend' },
            whatsapp: { label: 'WhatsApp', hint: 'Message me directly', msg: 'Hello! I have a question about a website.' },
            region: { label: 'Region', value: 'Leverkusen, Cologne, all of NRW and Germany-wide' },
            form: {
                name: 'Your name',
                email: 'Email',
                messageLabel: 'Message',
                message: 'What kind of business is it, and what should the website do? A few sentences are enough.',
                typeLabel: 'What kind of website is it about? (optional)',
                typeHint: 'The delivery time starts once I have all of your content.',
                typeAny: "I don't know yet",
                type1: 'Landing page (€600–800)',
                type2: 'Basic website (€900–1,400)',
                type3: 'Extended website (€1,800–3,000)',
                type4: 'Maintenance (€60 per month)',
                type5: 'Rework an existing website (€45/hour)',
                type6: 'Hosting and domain (€20 per month)',
                submit: 'Send enquiry',
                submitted: 'Sent! ✓',
                sending: 'Sending…',
                sendingLong: 'Server is starting up, one moment…',
                error: 'Sending error',
                consent: 'I agree to the processing of my personal data in accordance with the <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
                consentError: 'Please agree to the processing of your data.'
            }
        },
        footer: { name: 'Anatolii Yastrebov', role: 'Websites for small businesses · Leverkusen', rechtlicheHinweise: 'Rechtliche Hinweise', impressum: 'Impressum', datenschutz: 'Datenschutzerklärung' },
        project: {
            back: '← Back to overview',
            notFoundTitle: '—',
            notFoundText: 'Project not found.',
            metaTitle: 'Project · Anatolii Yastrebov',
            metaDescription: 'Portfolio project in detail: implementation, technologies and planned extensions.'
        }
    },

    ru: {
        meta: {
            title: 'Сайты для малого бизнеса — Леверкузен, Кёльн, NRW | от 600 €',
            description: 'Сайты для ремесленников, автосервисов, салонов и кафе в Леверкузене, Кёльне и по всей NRW. Фиксированная цена от 600 €, готово за несколько дней.'
        },
        nav: { services: 'Услуги и цены', projects: 'Примеры', included: 'Что входит', skills: 'Навыки', about: 'Обо мне', blog: 'Блог', contact: 'Контакт' },
        ui: {
            themeToggle: 'Сменить тему',
            menu: 'Меню',
            logoHome: 'Наверх',
            skipLink: 'Перейти к содержимому',
            photoAlt: 'Анатолий Ястребов, делает сайты для малого бизнеса в Рейнской области',
            personName: 'Анатолий Ястребов'
        },
        hero: {
            eyebrow: 'Сайты для малого бизнеса · Леверкузен · Кёльн · NRW · Германия',
            line1: 'Сайт для вашего',
            line2: 'предприятия',
            roleLine: 'Готово за несколько дней. По фиксированной цене.',
            subtitle: 'Для ремесленников, автосервисов, салонов, кафе, служб ухода, автошкол и других местных предприятий. Вы получаете понятный сайт с формой связи, Impressum и политикой конфиденциальности — с настроенным доменом и хостингом. <strong>От 600 €, готово за 1–4 дня.</strong>',
            ctaPrimary: 'Бесплатная консультация',
            ctaSecondary: 'Посмотреть цены',
            trust: 'Impressum, политика конфиденциальности и согласие по DSGVO входят в каждый проект.',
            langs: '🗣️ Говорю по-немецки, по-украински и по-русски — можете писать мне на родном языке.'
        },
        services: {
            /* promo:ru:start */
            promo: {
                badge: '−20 % для первых 2 клиентов',
                note: 'Акция: скидка 20 % на пакеты «Landingpage», «Basis-Website» и «Erweiterte Website» — для первых 2 новых клиентов, оформивших заказ до 31.12.2026. Сейчас свободно мест: 2. Скидка предоставляется в обмен на отзыв и публичную оценку. Базой для скидки служит обычная фиксированная цена пакета. После этого действуют обычные цены.',
                p1: { price: '480–640 €', was: 'вместо 600–800 €' },
                p2: { price: '720–1 120 €', was: 'вместо 900–1 400 €' },
                p3: { price: '1 440–2 400 €', was: 'вместо 1 800–3 000 €' },
            },
            /* promo:ru:end */
            pageTitle: 'Цены на сайты для малого бизнеса — Леверкузен и Кёльн',
            pageDescription: 'Фиксированные цены на сайты для малого бизнеса в Леверкузене, Кёльне и по всей NRW: лендинг от 600 €, базовый сайт от 900 €, обслуживание 60 € в месяц.',
            title: 'Услуги и цены',
            intro: 'Фиксированные цены и сроки. Вы знаете стоимость и дату готовности до начала работы. В каждый пакет входят Impressum, политика конфиденциальности, форма связи, а также настройка домена и хостинга.',
            popular: 'Выбирают чаще всего',
            cta: 'Запросить предложение',
            p1: {
                name: 'Лендинг',
                price: '600–800 €',
                time: 'Объём работы: 1–2 рабочих дня',
                for: 'Для тех, кому нужно быстро появиться в интернете.',
                f1: 'Одна страница со всей важной информацией',
                f2: 'Подстраивается под телефон, планшет и компьютер',
                f3: 'Форма связи',
                f4: 'Impressum и политика конфиденциальности',
                f5: 'Настройка домена и хостинга'
            },
            p2: {
                name: 'Базовый сайт',
                price: '900–1 400 €',
                time: 'Объём работы: 2–4 рабочих дня',
                for: 'Для тех, кто хочет подробно показать свои услуги.',
                f1: '3–5 страниц: например, главная, услуги, о нас, контакты',
                f2: 'Подстраивается под телефон, планшет и компьютер',
                f3: 'Форма связи',
                f4: 'Impressum и политика конфиденциальности',
                f5: 'Базовая оптимизация для поиска',
                f6: 'Настройка профиля Google Unternehmensprofil',
                f7: 'Настройка домена и хостинга'
            },
            p3: {
                name: 'Расширенный сайт',
                price: '1 800–3 000 €',
                time: 'Объём работы: 6–10 рабочих дней',
                for: 'Для тех, кто хочет сам менять тексты и фотографии.',
                f1: 'До 10 страниц',
                f2: 'Система управления контентом: тексты и фото меняете сами',
                f3: 'Две языковые версии',
                f4: 'Галерея изображений',
                f5: 'Расширенная оптимизация для поиска',
                f6: 'Всё из базового сайта'
            },
            p4: {
                name: 'Обслуживание',
                price: '60 € в месяц',
                time: 'Отказаться можно в любой месяц',
                for: 'Чтобы сайт оставался безопасным и актуальным.',
                f1: 'Технические обновления и проверка безопасности',
                f2: 'Резервные копии каждую неделю',
                f3: 'Контроль доступности: при сбое начинаю чинить в тот же день (Пн–Пт)',
                f4: 'До 5 правок в месяц: тексты, фото, цены, контакты',
                f5: 'Правки делаю в течение 2 рабочих дней',
                f6: 'Домен и хостинг включены, других регулярных расходов нет'
            },
            p5: {
                name: 'Хостинг и домен',
                price: '20 € в месяц',
                time: 'Отказаться можно в любой месяц',
                for: 'Для клиентов без договора обслуживания.',
                f1: 'Сайт работает на Cloudflare — быстрая всемирная сеть серверов',
                f2: 'SSL-сертификат и защита от атак перегрузкой включены',
                f3: 'Я веду ваш домен',
                f4: 'Без минимального срока — отказ в любой месяц'
            },
            hourly: '<strong>Отдельные работы: 45 € в час.</strong> Например: переделать существующий сайт, добавить юридические тексты или ещё одну страницу.',
            vat: 'НДС не начисляется согласно § 19 UStG (режим Kleinunternehmer). Точная цена зависит от объёма и фиксируется до начала работы.',
            deliveryLink: 'Посмотреть сроки',
            whatsappCta: 'Спросить в WhatsApp',
            whatsappMsg: 'Здравствуйте! Меня интересует пакет %s.',
            delivery: {
                title: 'Сроки',
                colPackage: 'Пакет',
                colEffort: 'Объём работы',
                colDone: 'Запуск сайта',
                rows: {
                    r1: { effort: '1–2 рабочих дня', done: 'как правило, до 1 недели' },
                    r2: { effort: '2–4 рабочих дня', done: 'как правило, до 2 недель' },
                    r3: { effort: '6–10 рабочих дней', done: 'как правило, до 4 недель' },
                    r4: { effort: 'постоянно', none: 'не применяется' },
                    r5: { effort: 'постоянно', none: 'не применяется' }
                },
                whyTitle: 'Почему два числа?',
                why1: 'Объём работы — это время, которое я действительно трачу на ваш сайт. Запуск — это дата, когда сайт появляется в интернете.',
                why2: 'Разница возникает не в технике, а в ожидании. Тексты, фотографии и согласования приходят из вашей повседневной работы — и по опыту это занимает одну-две недели. Поэтому я называю оба числа, а не только красивое.',
                why3: 'Отсчёт начинается, когда у меня есть все ваши материалы. Если вы передадите всё в первый же день, сайт будет готов заметно раньше указанного срока.',
                speed: 'Сайты для небольших фирм у меня выходят за недели, а не за месяцы. Вы общаетесь напрямую со мной — без отдела проектов посередине.'
            },
            needs: {
                title: 'Что мне нужно от вас',
                i1: 'Тексты или тезисы для каждой страницы',
                i2: 'Фотографии хорошего качества — или разрешение подобрать подходящие изображения',
                i3: 'Ваш логотип, если он есть',
                i4: 'Доступы к домену и почте, если они уже есть',
                i5: 'контактное лицо, которое может согласовывать решения',
                pdf: 'Скачать чек-лист в PDF'
            },
            fixedPrice: {
                title: 'Почему фиксированная цена, а не почасовая оплата?',
                p1: 'Я делаю сайты для небольших фирм по отработанному процессу. Это делает работу предсказуемой — и эту выгоду я передаю вам в цене.',
                p2: 'Вы заранее знаете, сколько будет стоить сайт. Вопросы, согласования и два круга правок входят в цену и отдельно не оплачиваются.',
                p3: 'Отдельные работы вне пакета — переделка существующего сайта, дополнительные страницы, юридические тексты — оплачиваются по 45 € в час.'
            },
            process: {
                title: 'Как проходит работа',
                s1: { name: 'Бесплатный разговор', text: 'Коротко обсуждаем ваше дело и что должен уметь сайт. Без обязательств.' },
                s2: { name: 'Фиксированное предложение', text: 'Вы получаете цену и срок письменно. После этого цена не меняется.' },
                s3: { name: 'Изготовление', text: 'Я делаю сайт и показываю вам. Вы говорите, что ещё поправить.' },
                s4: { name: 'Публикация и передача', text: 'Сайт выходит в интернет. Вы получаете все доступы и все права на сайт.' }
            },
            faq: {
                title: 'Частые вопросы',
                q1: 'Как происходит оплата?',
                a1: 'Половину вы платите при старте, вторую — когда сайт готов и опубликован. Вы получаете официальный счёт.',
                q2: 'Сколько правок входит в цену?',
                a2: 'В фиксированную цену входят два круга правок. В большинстве случаев этого хватает. Если после этого захотите что-то менять — 45 € в час, причём я заранее говорю, сколько примерно займёт.',
                q3: 'Кто платит за домен и хостинг?',
                a3: 'В пакет обслуживания домен и хостинг входят — вы платите только ежемесячную сумму. Без обслуживания можно взять пакет «Хостинг и домен» за 20 € в месяц. Либо вы оформляете домен и хостинг сами и платите провайдеру напрямую, обычно 10–15 € в месяц.',
                q4: 'А если результат мне не понравится?',
                a4: 'Вы видите сайт до публикации и говорите, что поправить. Для этого и есть два круга правок. Цена зафиксирована заранее и от этого не меняется.',
                q5: 'Сайт действительно будет принадлежать мне?',
                a5: 'Да. После оплаты вы получаете все права на сайт и все доступы. Вы ко мне не привязаны и можете в любой момент уйти к другому исполнителю.',
                q6: 'Сколько это занимает на самом деле?',
                a6: 'Указанные сроки считаются с момента, когда тексты, фотографии и данные готовы полностью. Ожидание материалов — самая частая причина задержек, поэтому в начале мы обсуждаем, что вы предоставите.',
                q7: 'Мне нужен интернет-магазин. Возьмётесь?',
                a7: 'Нет. Интернет-магазины и сложные веб-приложения я не делаю. Скажу об этом сразу на первом разговоре и порекомендую подходящих коллег.',
                q8: 'Можно обращаться на русском или украинском?',
                a8: 'Да. Говорю по-немецки, по-украински и по-русски. Пишите на удобном вам языке — предложение и счёт будут на немецком.'
            },
            honest: 'Интернет-магазины, системы бронирования и складского учёта, а также сложные веб-приложения я не делаю. Если вам нужно именно это, я скажу честно и посоветую подходящих коллег.',
            finalText: 'Не знаете, какой пакет подходит? Напишите коротко, в чём дело — честно скажу, что вам нужно.',
            finalCta: 'Бесплатная консультация'
        },
        cases: {
            title: 'Проекты и live-демо',
            subtitle: 'Десять live-демо — здесь краткая карточка, полное описание и стек на странице проекта.',
            labelSummary: 'Обзор',
            labelImplemented: 'Реализовано',
            labelPlanned: 'Планируется / интеграции',
            labelStack: 'Стек',
            labelStyles: 'Стили и UI',
            demoBadge: 'Live-демо',
            viewLive: 'Открыть live-демо ↗',
            viewCase: 'Открыть подробности'
        },
        study: {
            title: 'Как может выглядеть ваш сайт',
            subtitle: 'Три примера из разных отраслей. Видно, что было сделано, сколько это занимает, и каждый сайт можно открыть вживую.',
            disclaimerShort: 'Обратите внимание: это концептуальные проекты, не заказы клиентов.',
            disclaimer: 'Обратите внимание: это <strong>концептуальные проекты</strong>. Я сделал их сам, чтобы показать, как может выглядеть сайт для конкретной отрасли. Это не заказы клиентов и не настоящие компании.',
            badge: 'Концептуальный проект',
            labelTask: 'Задача',
            labelDone: 'Что сделано',
            labelTime: 'Пакет и объём работы',
            live: 'Открыть демо ↗',
            more: 'Все подробности',
            detailsShow: 'Показать подробности',
            detailsHide: 'Скрыть подробности',
            allDemos: 'Посмотреть все десять примеров →',
            c1: {
                branch: 'Ремесленная фирма · ремонт и малярные работы',
                name: 'MeisterHaus Renovierung',
                alt: 'Главная страница примера сайта ремонтной фирмы со сравнением «до и после»',
                task: 'Ремонтную фирму обычно находят по рекомендациям. Сайт должен показать, что фирма умеет, и вызвать доверие ещё до звонка.',
                d1: 'Шесть направлений услуг, разделённых и понятных',
                d2: 'Регулятор «до и после» для готовых работ',
                d3: 'Галерея проектов с указанием места',
                d4: 'Калькулятор, чтобы клиент получил первую оценку',
                d5: 'Кнопки звонка и WhatsApp, всегда видимые на телефоне',
                time: 'Соответствует пакету «Расширенный сайт» — объём работы 6–10 рабочих дней'
            },
            c2: {
                branch: 'Автосервис · ремонт и обслуживание',
                name: 'Meisterwerkstatt Schmidt',
                alt: 'Главная страница примера сайта автосервиса с услугами и ценами',
                task: 'Тот, кто ищет автосервис, хочет сразу знать три вещи: сколько примерно стоит, когда вы работаете и как с вами связаться. Остальное подождёт.',
                d1: 'Услуги с ценой «от … €» прямо на главной',
                d2: 'Часы работы и телефон на видном месте',
                d3: 'Короткий список преимуществ: например, Meisterbetrieb и гарантия',
                d4: 'Кнопка запроса на запись',
                time: 'Соответствует пакету «Лендинг» — объём работы 1–2 рабочих дня'
            },
            c3: {
                branch: 'Салон красоты и парикмахерская',
                name: 'Mira Beauty Lounge',
                alt: 'Главная страница примера сайта салона красоты с услугами и формой записи',
                task: 'Салон живёт записями. Сайт должен показать цены, дать представление о салоне и сделать запись максимально простой.',
                d1: 'Услуги с ценой и длительностью каждой процедуры',
                d2: 'Галерея и представление команды',
                d3: 'Форма запроса на запись',
                d4: 'Частые вопросы с раскрытием',
                time: 'Соответствует пакету «Базовый сайт» — объём работы 2–4 рабочих дня'
            }
        },
        included: {
            title: 'Что входит в ваш сайт',
            subtitle: 'Входит в каждый пакет — без доплат.',
            i1: { title: 'Работает на любом устройстве', text: 'Сайт хорошо выглядит на телефоне, планшете и компьютере. Большинство клиентов ищут с телефона.' },
            i2: { title: 'Форма связи', text: 'Заявки приходят прямо на вашу почту. Никаких дополнительных программ не нужно.' },
            i3: { title: 'Юридически корректно', text: 'Impressum и политика конфиденциальности входят в комплект, как и согласие по DSGVO в форме.' },
            i4: { title: 'Подготовлен для Google', text: 'Сайт сделан технически чисто: город и услуга указаны в заголовках, текстах и данных страниц — например, «Friseur Leverkusen». Конкретную позицию в Google не может гарантировать никто.' },
            i5: { title: 'Быстрая загрузка', text: 'Страницы грузятся быстро даже с мобильного интернета. Кто долго ждёт — уходит.' },
            i6: { title: 'Сайт принадлежит вам', text: 'Вы получаете все права и все доступы. Вы ни к кому не привязаны и можете уйти в любой момент.' }
        },
        about: {
            title: 'Обо мне',
            p1: 'Меня зовут <strong>Анатолий\u00A0Ястребов</strong>. Я делаю сайты для малых предприятий в Леверкузене, Кёльне, по всей NRW и по всей Германии.',
            p2: 'Я работаю один, без агентства посередине. Вы всегда общаетесь напрямую с тем, кто делает ваш сайт. Отсюда короткие сроки и понятные цены.',
            p3: 'Мне важно, чтобы вы понимали, за что платите. Объясняю всё без технических терминов и честно говорю, когда что-то не нужно или когда задача не для меня.',
            point1: '📍 Регион: Леверкузен, Кёльн, вся NRW и по всей Германии',
            point2: '💬 Языки: немецкий (B2), украинский и русский (родные), английский (начальный)',
            point3: '⏱️ Отвечаю на заявки, как правило, в течение 24 часов (в рабочие дни)',
            techTitle: 'Технологии — для тех, кому интересно',
            techText: 'HTML5, CSS3, современный JavaScript (ES2020+), адаптивная вёрстка на CSS Grid и Flexbox, семантический HTML и доступность, Git и GitHub, Vite и npm-скрипты. В работе использую инструменты искусственного интеллекта — это ускоряет разработку и расширяет круг задач, за которые я могу взяться. Проверяю потом руками: формы, скорость загрузки и вид на телефоне тестирую сам, прежде чем сайт выйдет в интернет. Сайты собираются без конструкторов — так они остаются быстрыми и удобными в поддержке.',
            cta: 'Бесплатная консультация'
        },
        blog: {
            title: 'Заметки о веб-разработке',
            subtitle: 'Мысли о веб-разработке и заметки из процесса обучения.',
            pageTitle: 'Блог: сколько стоит сайт — для малого бизнеса',
            pageDescription: 'Понятно о том, сколько стоит сайт, когда подходит конструктор и что делает сайты локальных фирм рабочими. Для предприятий в Леверкузене, Кёльне и окрестностях.',
            projectsTitle: 'Мои live-проекты',
            projectsSubtitle: 'Все десять демо-сайтов со скриншотами, стеком и деталями реализации — учебные концепты, не реальные компании.',
            readTime: 'Время чтения: ~%n мин.',
            read: 'Читать дальше →',
            cta: {
                title: 'Нужен сайт для вашего дела?',
                text: 'Фиксированные цены и сроки: от 600 € и готово за несколько дней. Impressum, политика конфиденциальности и форма связи входят всегда.',
                button: 'Посмотреть услуги и цены'
            },
            cat1: 'Заметка', cat2: 'Стратегия', cat3: 'Веб',
            a1: { title: 'Сколько стоит сайт в Германии?', excerpt: 'Обзор реалистичных ценовых диапазонов веб-проектов — как заметка к размышлению, а не как предложение.' },
            a2: { title: 'Конструктор vs собственный код', excerpt: 'Когда есть смысл в конструкторе, а когда лучше собственное решение. Честный обзор.' },
            a3: { title: 'Сайты небольших локальных бизнесов', excerpt: 'Что делает маленькие сайты хорошими: ясность, скорость, mobile-first.' }
        },
        contact: {
            title: 'Бесплатная консультация',
            subtitle: 'Расскажите коротко, чем вы занимаетесь и что должен уметь сайт. Вы получите честную оценку с ценой и сроком — бесплатно и без обязательств.',
            directHint: 'Не любите формы? Просто напишите мне на почту напрямую.',
            reply: { label: 'Время ответа', value: 'Отвечаю, как правило, в течение 24 часов (в рабочие дни)' },
            langs: { label: 'Языки', value: '<strong>Говорю по-немецки, по-украински и по-русски.</strong> Пишите на том языке, на котором вам удобнее.' },
            gdpr: 'Ваши данные используются исключительно для ответа на ваш запрос. Подробнее в <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
            email: { label: 'E-mail' },
            phone: { label: 'Телефон', hint: 'Звонок или сообщение — в том числе в выходные' },
            whatsapp: { label: 'WhatsApp', hint: 'Напишите мне напрямую', msg: 'Здравствуйте! У меня вопрос по сайту.' },
            region: { label: 'Регион', value: 'Леверкузен, Кёльн, вся NRW и по всей Германии' },
            form: {
                name: 'Ваше имя',
                email: 'E-mail',
                messageLabel: 'Сообщение',
                message: 'Что у вас за дело и что должен уметь сайт? Достаточно нескольких предложений.',
                typeLabel: 'О каком сайте идёт речь? (необязательно)',
                typeHint: 'Срок начинается, когда у меня есть все ваши материалы.',
                typeAny: 'Пока не знаю',
                type1: 'Лендинг (600–800 €)',
                type2: 'Базовый сайт (900–1 400 €)',
                type3: 'Расширенный сайт (1 800–3 000 €)',
                type4: 'Обслуживание (60 € в месяц)',
                type5: 'Переделать существующий сайт (45 €/час)',
                type6: 'Хостинг и домен (20 € в месяц)',
                submit: 'Отправить запрос',
                submitted: 'Отправлено! ✓',
                sending: 'Отправка…',
                sendingLong: 'Сервер просыпается, секунду…',
                error: 'Ошибка отправки',
                consent: 'Я согласен на обработку моих персональных данных в соответствии с <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
                consentError: 'Подтвердите согласие на обработку данных.'
            }
        },
        footer: { name: 'Анатолий Ястребов', role: 'Сайты для малого бизнеса · Леверкузен', rechtlicheHinweise: 'Rechtliche Hinweise', impressum: 'Impressum', datenschutz: 'Datenschutzerklärung' },
        project: {
            back: '← К списку проектов',
            notFoundTitle: '—',
            notFoundText: 'Проект не найден.',
            metaTitle: 'Проект · Анатолий Ястребов',
            metaDescription: 'Портфолио-проект подробно: реализация, технологии и планируемые доработки.'
        }
    }
};

// Live portfolio projects: portfolio-projects.js → window.portfolioProjects / window.casesData

window.translations = translations;

// ============================================================
// State
// ============================================================
let currentLanguage = localStorage.getItem('language') || 'de';
if (!['de', 'en', 'ru'].includes(currentLanguage)) currentLanguage = 'de';

// ============================================================
// i18n helpers
// ============================================================
function getTranslation(key, dict) {
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), dict);
}


const LEGAL_LABELS = {
    rechtlicheHinweise: 'Rechtliche Hinweise',
    impressum: 'Impressum',
    datenschutz: 'Datenschutzerklärung'
};

function pickLocalizedList(field, lang) {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    return field[lang] || field.de || [];
}

function applyLegalLabels() {
    document.querySelectorAll('[data-i18n="footer.rechtlicheHinweise"]').forEach((el) => {
        el.textContent = LEGAL_LABELS.rechtlicheHinweise;
    });
    document.querySelectorAll('[data-i18n="footer.impressum"]').forEach((el) => {
        el.textContent = LEGAL_LABELS.impressum;
    });
    document.querySelectorAll('[data-i18n="footer.datenschutz"]').forEach((el) => {
        el.textContent = LEGAL_LABELS.datenschutz;
    });
}

window.getSiteLanguage = () => currentLanguage;

window.getPersonName = (lang) => {
    const l = lang || currentLanguage;
    const name = getTranslation('ui.personName', translations[l] || translations.de);
    return name || 'Anatolii Yastrebov';
};

function applyTranslations(lang) {
    const isLegalPage = Boolean(document.body.dataset.legalPage);
    const uiLang = isLegalPage ? 'de' : lang;
    const dict = translations[uiLang];
    if (!dict) return;
    document.documentElement.lang = uiLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = getTranslation(key, dict);
        if (value === null || value === undefined) return;
        const attr = el.getAttribute('data-i18n-attr');
        if (attr) {
            attr.split(',').map((a) => a.trim()).forEach((name) => {
                if (name) el.setAttribute(name, value);
            });
        } else if (/<[a-z][\s\S]*>/i.test(value)) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    // Ссылки WhatsApp: номер уже в href, меняем только текст сообщения,
    // чтобы клиент писал на том языке, на котором читает сайт.
    document.querySelectorAll('[data-wa-msg]').forEach((el) => {
        const template = getTranslation(el.getAttribute('data-wa-msg'), dict);
        if (!template) return;
        const arg = el.getAttribute('data-wa-arg');
        const text = arg ? template.replace('%s', arg) : template;
        const [base] = el.getAttribute('href').split('?');
        el.setAttribute('href', `${base}?text=${encodeURIComponent(text)}`);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = getTranslation(key, dict);
        if (value) el.placeholder = value;
    });

    if (!document.body.dataset.legalPage) {
        // Страницы с собственным заголовком (blog, leistungen) объявляют его
        // через data-i18n на <title>/<meta> — общий meta.title их не перекрывает.
        const titleEl = document.querySelector('title');
        if (!titleEl || !titleEl.hasAttribute('data-i18n')) {
            const titleVal = getTranslation('meta.title', dict);
            if (titleVal) document.title = titleVal;
        }

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && !metaDesc.hasAttribute('data-i18n')) {
            const descVal = getTranslation('meta.description', dict);
            if (descVal) metaDesc.setAttribute('content', descVal);
        }
    }

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        const isActive = btn.getAttribute('data-lang') === uiLang;
        btn.classList.toggle('active', isActive);
        // Скринридер иначе не понимает, какой язык сейчас выбран.
        btn.setAttribute('aria-pressed', String(isActive));
    });

    applyLegalLabels();

    if (!isLegalPage && typeof renderCases === 'function') renderCases();

    if (!isLegalPage && typeof window.renderBlogArticles === 'function') {
        const readTime = getTranslation('blog.readTime', dict) || 'ca. %n Min.';
        window.renderBlogArticles(lang, readTime);
    }

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: uiLang } }));
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

// ============================================================
// Portfolio rendering
// ============================================================
// CTA под каждой статьёй блога. Живёт здесь, чтобы оба рендерера
// (blog-content.js и sanity-content.js) выводили одинаковый блок.
window.getBlogCtaHtml = function (lang) {
    const dict = translations[lang] || translations.de;
    const c = (dict.blog && dict.blog.cta) || {};
    return `<aside class="blog-cta">
        <h3 class="blog-cta-title">${c.title || ''}</h3>
        <p class="blog-cta-text">${c.text || ''}</p>
        <a href="leistungen.html" class="btn btn-primary">${c.button || ''}</a>
    </aside>`;
};

function getPortfolioProjects() {
    return Array.isArray(window.portfolioProjects) ? window.portfolioProjects : [];
}

function buildPortfolioCardsHtml(dict) {
    const c = dict.cases || {};
    const lang = currentLanguage;
    const projects = getPortfolioProjects();

    return projects.map((p) => {
        const title = p.title[lang] || p.title.de;
        const category = p.category[lang] || p.category.de;
        const summary = p.summary[lang] || p.summary.de;
        const previewAlt = `${title} — ${c.demoBadge || 'Live-Demo'}`;
        const stackPreview = pickLocalizedList(p.techStack, lang).slice(0, 4);

        const picture = typeof buildPreviewPicture === 'function'
            ? buildPreviewPicture(p.preview, previewAlt, {
                loading: 'lazy',
                width: 640,
                height: 360,
                sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px'
            })
            : `<img src="${p.preview}" alt="${previewAlt}" width="640" height="360" loading="lazy" decoding="async">`;

        return `
            <article class="case-card portfolio-card portfolio-card--compact">
                <a class="portfolio-preview" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="${c.viewLive || 'Live'} — ${title}">
                    ${picture}
                    <span class="portfolio-preview-badge">${c.demoBadge || 'Live-Demo'}</span>
                </a>
                <div class="portfolio-card-body">
                    <div class="case-industry">${category}</div>
                    <h3 class="case-client portfolio-card-title">
                        <a href="project.html?id=${p.id}">${title}</a>
                    </h3>
                    <p class="portfolio-card-excerpt">${summary}</p>
                    <div class="case-stack portfolio-card-stack">${stackPreview.map((t) => `<span class="case-stack-tag">${t}</span>`).join('')}</div>
                    <div class="portfolio-card-actions">
                        <a class="btn btn-primary btn-sm" href="project.html?id=${p.id}">${c.viewCase || 'Details öffnen'}</a>
                        <a class="btn btn-secondary btn-sm" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">${c.viewLive || 'Live-Demo ↗'}</a>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function renderCases() {
    const dict = translations[currentLanguage] || translations.de;
    const html = buildPortfolioCardsHtml(dict);
    ['cases-container', 'blog-projects-container'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    });
    window.dispatchEvent(new Event('casesrendered'));
}


// ============================================================
// Fallstudien: Details auf dem Handy einklappen
// На телефоне карточка проекта занимала больше экрана, поэтому
// подробности прячем за кнопкой. На десктопе класс не действует —
// правило живёт внутри медиазапроса, там видно всё сразу.
// ============================================================
function initCaseStudyToggles() {
    document.querySelectorAll('.case-study').forEach((card, i) => {
        const toggle = card.querySelector('.case-study-toggle');
        const details = card.querySelector('.case-study-details');
        if (!toggle || !details) return;

        if (!details.id) details.id = `case-study-details-${i + 1}`;
        toggle.setAttribute('aria-controls', details.id);
        toggle.setAttribute('aria-expanded', 'false');
        card.classList.add('is-collapsible');

        toggle.addEventListener('click', () => {
            const isOpen = !card.classList.contains('is-open');
            card.classList.toggle('is-open', isOpen);
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            const label = toggle.querySelector('.case-study-toggle-label');
            if (label) {
                const key = isOpen ? 'study.detailsHide' : 'study.detailsShow';
                label.setAttribute('data-i18n', key);
                const value = getTranslation(key, translations[currentLanguage] || translations.de);
                if (value) label.textContent = value;
            }

            // При сворачивании карточка «схлопывается» вверх и кнопка уезжает
            // за верхний край — возвращаем её в поле зрения.
            if (!isOpen && card.getBoundingClientRect().top < 0) {
                card.scrollIntoView({ block: 'start', behavior: 'smooth' });
            }

            // Высота страницы изменилась — пересчитываем триггеры скролла.
            if (window.ScrollTrigger) window.ScrollTrigger.refresh();
        });
    });
}



// ============================================================
// Пакет из ссылки «Angebot anfordern»
// Кнопки на странице услуг ведут на index.html?paket=…#kontakt.
// Подставляем выбранный пакет в форму, чтобы человеку не пришлось
// выбирать его второй раз, — и чтобы пакет попал в тему письма.
// ============================================================
const PACKAGE_SLUGS = {
    landingpage: 'Landingpage',
    basis: 'Basis-Website',
    erweitert: 'Erweiterte Website',
    wartung: 'Wartung',
    hosting: 'Hosting und Domain',
    ueberarbeitung: 'Bestehende Website überarbeiten'
};

function initPackagePreselect() {
    const select = document.querySelector('#contact-type');
    if (!select) return;

    const slug = new URLSearchParams(window.location.search).get('paket');
    if (!slug) return;

    const value = PACKAGE_SLUGS[slug.toLowerCase()];
    if (!value) return;

    const option = Array.from(select.options).find((o) => o.value === value);
    if (!option) return;

    select.value = value;
    // change нужен на случай, если к полю позже повесят обработчик.
    select.dispatchEvent(new Event('change', { bubbles: true }));

    // Подсвечиваем поле на пару секунд: иначе подстановка проходит незаметно
    // и человек не понимает, почему пакет уже выбран.
    select.classList.add('form-select--prefilled');
    setTimeout(() => select.classList.remove('form-select--prefilled'), 2500);

    // На якорь #kontakt полагаться нельзя: браузер прыгает к нему сразу,
    // а высота страницы потом меняется — шрифты, картинки, анимации
    // появления. Прокручиваем сами и повторяем, когда раскладка устоялась.
    const section = document.querySelector('#kontakt');
    if (!section) return;

    const jump = () => section.scrollIntoView({ block: 'start', behavior: 'auto' });

    jump();
    window.addEventListener('load', jump, { once: true });
    setTimeout(jump, 500);

    // Курсор в поле намеренно не ставим: поля формы появляются по анимации,
    // и в этот момент они ещё скрыты — focus() просто не срабатывает.
    // К тому же перевод фокуса без действия пользователя сбивает
    // экранный диктор с толку.
    setTimeout(jump, 900);
}

// ============================================================
// Mobile menu
// ============================================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function setMobileNavOpen(isOpen) {
    if (!navMenu || !hamburger) return;
    navMenu.classList.toggle('active', isOpen);
    hamburger.classList.toggle('active', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

if (hamburger && navMenu) {
    if (!hamburger.hasAttribute('tabindex')) {
        hamburger.setAttribute('tabindex', '0');
    }
    if (!hamburger.hasAttribute('role')) {
        hamburger.setAttribute('role', 'button');
    }
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'site-nav-menu');
    navMenu.id = 'site-nav-menu';

    const toggleNav = () => setMobileNavOpen(!navMenu.classList.contains('active'));

    hamburger.addEventListener('click', toggleNav);
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleNav();
        }
    });

    document.querySelectorAll('.nav-menu a').forEach((link) => {
        link.addEventListener('click', () => setMobileNavOpen(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMobileNavOpen(false);
    });

    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 901px)').matches) {
            setMobileNavOpen(false);
        }
    });
}

// ============================================================
// Smooth scroll & navbar effects
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.pageYOffset > 24);
}, { passive: true });

// ============================================================
// Year in footer
// ============================================================
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================================================
// Contact form
// ============================================================
/* set-domain:api-start */
const API_BASE_CONFIGURED = "";
/* set-domain:api-end */

const API_BASE_URL = (() => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3001';
    }
    // Пустая строка = запрос уходит на тот же домен: на Cloudflare форму
    // обслуживает воркер рядом со статикой, отдельный бэкенд не нужен.
    return API_BASE_CONFIGURED;
})();

// Render free tier sleeps after inactivity; first request can take 30+ s.
// Use a 35 s overall timeout and a "warming up" hint after 15 s.
const REQUEST_TIMEOUT_MS = 35000;
const COLD_START_HINT_AFTER_MS = 15000;

async function sendContactForm(payload) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
        const res = await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            return { success: false, message: data.message || `Error ${res.status}` };
        }
        return { success: !!data.success, message: data.message };
    } catch (err) {
        clearTimeout(timeoutId);
        return { success: false, message: err.name === 'AbortError' ? 'Timeout' : err.message };
    }
}

function setFormStatus(el, text, kind) {
    if (!el) return;
    el.textContent = text || '';
    el.classList.remove('is-info', 'is-success', 'is-error');
    if (kind) el.classList.add(`is-${kind}`);
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const statusEl = document.getElementById('form-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dict = translations[currentLanguage] || translations.de;
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const consent = contactForm.querySelector('#gdpr-consent');
        const button = contactForm.querySelector('button[type="submit"]');
        const btnText = button.querySelector('.btn-text');
        const btnIcon = button.querySelector('.btn-icon');

        if (!consent || !consent.checked) {
            setFormStatus(statusEl, dict.contact.form.consentError, 'error');
            return;
        }
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            return;
        }

        button.disabled = true;
        const originalText = btnText.textContent;
        btnText.textContent = dict.contact.form.sending;
        btnIcon.textContent = '⏳';
        setFormStatus(statusEl, dict.contact.form.sending, 'info');

        // After 15 s show a "server warming up" hint (Render cold-start).
        const coldStartTimer = setTimeout(() => {
            setFormStatus(statusEl, dict.contact.form.sendingLong || dict.contact.form.sending, 'info');
        }, COLD_START_HINT_AFTER_MS);

        // Выбранный пакет дописываем в текст письма: так он дойдёт даже
        // если бэкенд не знает про отдельное поле projectType.
        const typeSelect = contactForm.querySelector('select[name="projectType"]');
        const projectType = typeSelect ? typeSelect.value.trim() : '';
        const messageText = messageInput.value.trim();

        const result = await sendContactForm({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            projectType,
            message: projectType ? `[${projectType}]\n\n${messageText}` : messageText,
            // Honeypot — must remain empty. If a bot filled it, the
            // server quietly returns success without sending email.
            website: contactForm.querySelector('input[name="website"]')?.value || ''
        });

        clearTimeout(coldStartTimer);

        if (result && result.success) {
            btnText.textContent = dict.contact.form.submitted;
            btnIcon.textContent = '✓';
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            setFormStatus(statusEl, dict.contact.form.submitted, 'success');
            contactForm.reset();
        } else {
            btnText.textContent = dict.contact.form.error;
            btnIcon.textContent = '!';
            button.style.background = '';
            setFormStatus(statusEl, (result && result.message) || dict.contact.form.error, 'error');
        }

        setTimeout(() => {
            button.disabled = false;
            btnText.textContent = originalText;
            btnIcon.textContent = '→';
            button.style.background = '';
        }, 2400);
    });
}

// ============================================================
// Init
// ============================================================
applyTranslations(currentLanguage);
// Перевод применён — показываем страницу (класс ставит скрипт в <head>).
document.documentElement.classList.remove('i18n-pending');
document.documentElement.style.visibility = '';
initCaseStudyToggles();
initPackagePreselect();
