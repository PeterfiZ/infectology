Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Sexuell übertragbare Infektionen',
        icon: '🔬',
        color: '#7c3aed',
        diseases: [
          {
            id: 'syphilis',
            name: 'Syphilis',
            pathogen: { type: 'Spirochäte', name: '<i>Treponema pallidum</i>', gram: 'Gram-negativ (schlecht anfärbbar)', shape: 'spiralförmig' },
            epidemiology: {
              incidence: 'Zunehmende Inzidenz weltweit, hoch in der MSM-Population',
              risk_groups: ['MSM (Männer, die Sex mit Männern haben)', 'HIV-positive Personen', 'Sexarbeiter', 'Mehrere Sexualpartner', 'i.v.-Drogenkonsumenten'],
              seasonality: 'Keine',
              transmission: 'Direkter Kontakt mit Schleimhäuten/Haut, vertikal (kongenital)'
            },
            pathomechanism: {
              steps: [
                'Eintritt und Ausbreitung: T. pallidum dringt durch Mikroläsionen in Haut oder Schleimhaut ein. Es gelangt innerhalb von Minuten/Stunden in Lymphbahnen und Blut und wird systemisch, noch bevor der Primäraffekt erscheint.',
                'Immunumgehung: "Stealth"-Strategie mit geringer Dichte an Außenmembranproteinen zur Vermeidung von Antikörperbindung und Komplementaktivierung.',
                'Gewebeschaden: Basiert auf obliterierender Endarteriitis (Entzündung und Verschluss kleiner Gefäße) mit perivaskulärer Plasmazellinfiltration.',
                'Folge: Ischämie durch Gefäßverschluss führt zur Ulzeration des Primäraffekts und zur Bildung von Gummen (nekrotisierende Granulome) im Tertiärstadium.'
              ],
              virulence_factors: ['Fibronektin-bindende Proteine', 'Hyaluronidase', 'Antigenvariation', 'Outer membrane proteins']
            },
            clinical: {
              incubation: 'Primär: 9-90 Tage (Durchschnitt 21 Tage)',
              onset: 'Phasenabhängig',
              symptoms: [
                { name: 'Primär: Ulcus durum', description: 'Ein schmerzloses, verhärtetes Geschwür mit sauberem Grund an der Eintrittspforte (Genitalien, Mund, Anus) ca. 3 Wochen nach Infektion. Begleitet von schmerzloser regionaler Lymphadenopathie. Es heilt spontan ab, aber die Bakterien verbleiben im Körper.', severity: 'moderate' },
                { name: 'Sekundär: Hautsymptome', description: 'Zeichen der hämatogenen Streuung (6-8 Wochen später). Generalisierter, nicht juckender, kupferfarbener Ausschlag (Handflächen/Fußsohlen!), Condylomata lata (infektiöse nässende Papeln in Falten).', severity: 'moderate' },
                { name: 'Sekundär: Allgemeinsymptome', description: 'Fieber, Unwohlsein, generalisierte Lymphknotenschwellung ("Mikropolyadenopathie"), fleckiger Haarausfall ("Mottenfraß") und Schleimhautflecken.', severity: 'mild' },
                { name: 'Tertiär: Spätkomplikationen', description: 'Entwickelt sich Jahre später. Gumma (destruktive Granulome in Haut/Knochen/Leber), kardiovaskuläre Syphilis (Aortitis, Aneurysma) und Neurosyphilis (Tabes dorsalis, progressive Paralyse/Demenz).', severity: 'severe' }
              ],
              physical_exam: [
                'Primär: schmerzloses genitales/extragenitales Geschwür + inguinale Lymphadenopathie',
                'Sekundär: generalisiertes, nicht juckendes Exanthem (Handflächen/Fußsohlen!), Schleimhautflecken, Alopezie',
                'Latenz: asymptomatisch',
                'Tertiär: Gumma (Haut, Knochen), kardiovaskuläre oder neurologische Beteiligung'
              ],
              complications: ['Neurosyphilis', 'Kardiovaskuläre Syphilis (Aortitis)', 'Gumma', 'Kongenitale Syphilis', 'Erhöhtes Risiko für HIV-Koinfektion']
            },
            diagnostics: {
              laboratory: [
                { test: 'Nicht-treponemale Tests (RPR/VDRL)', finding: 'Reaktiv (Titer)', interpretation: 'Screening, Aktivitätsüberwachung, Behandlungseffizienz' },
                { test: 'Treponema-spezifische Tests (TPHA/FTA-ABS)', finding: 'Reaktiv', interpretation: 'Bestätigung, bleibt lebenslang positiv' },
                { test: 'Reverser Algorithmus', finding: 'EIA/CIA → RPR → TPHA', interpretation: 'Automatisiertes Screening' }
              ],
              imaging: [
                { modality: 'Gehirn-MRT', finding: 'Neurosyphilis: meningeales Enhancement, Infarkte', significance: 'Bei neurologischen Symptomen' },
                { modality: 'Echo/Thorax-CT', finding: 'Aortendilatation', significance: 'Kardiovaskuläre Syphilis' }
              ],
              microbiology: [
                { test: 'Dunkelfeldmikroskopie', finding: 'Lebende Spirochäten aus Primärläsionen', significance: 'Frühdiagnose, aber selten verfügbar' },
                { test: 'PCR', finding: 'T. pallidum DNA', significance: 'Sensitiv, aber nicht routinemäßig' },
                { test: 'Liquoranalyse', finding: 'VDRL positiv, Pleozytose, Protein↑', significance: 'Neurosyphilis-Diagnose' }
              ]
            },
            differential: [
              { disease: 'Herpes genitalis', distinguishing: 'Schmerzhafte, gruppierte Bläschen' },
              { disease: 'Chancroid (H. ducreyi)', distinguishing: 'Schmerzhafte Geschwüre, eitrige Lymphknoten' },
              { disease: 'Lymphogranuloma venereum', distinguishing: 'Schmerzhafter Bubo, Chlamydia trachomatis L1-3' },
              { disease: 'Arzneimittelexanthem', distinguishing: 'Medikamentenanamnese, Beteiligung von Handflächen/Fußsohlen selten' },
              { disease: 'Pityriasis rosea', distinguishing: 'Primärmedaillon, Tannenbaummuster' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Benzylpenicillin G (Bicillin LA)', dose: '2.4 Mio. IE i.m.', duration: 'Einzeldosis', note: 'Frühsyphilis (primär, sekundär, frühe Latenz < 1 Jahr)' },
                  { drug: 'Penicillinallergie: Doxycyclin', dose: '2x100mg p.o.', duration: '14 Tage', note: 'Alternative (Compliance!)' }
                ],
                inpatient: [
                  { drug: 'Benzylpenicillin G', dose: '2.4 Mio. IE i.m.', duration: '1x wöchentlich für 3 Wochen', note: 'Späte Latenz (>1 Jahr) oder unbekannte Dauer' }
                ],
                icu: [
                  { drug: 'Wässriges Penicillin G', dose: '3-4 Mio. IE i.v. alle 4 Stunden', duration: '10-14 Tage', note: 'Neurosyphilis!' }
                ]
              },
              targeted: 'Penicillin ist immer die erste Wahl, keine Resistenz',
              supportive: ['Warnung vor Jarisch-Herxheimer-Reaktion', 'HIV-Testung', 'Partnerbenachrichtigung und -behandlung', 'Serologische Nachsorge (3, 6, 12, 24 Monate)'],
              prevention: ['Kondomgebrauch', 'Partnerbenachrichtigung', 'Regelmäßiges Screening in Risikogruppen', 'Screening von Schwangeren']
            },
            guidelines: {
              diagnosis: [
                'Screening: RPR/VDRL (nicht-treponemal) oder reverser Algorithmus (EIA/CIA)',
                'Bestätigung: TPHA/FTA-ABS (treponema-spezifische) Tests',
                'Neurosyphilis: Liquor-VDRL (spezifisch, aber nicht sensitiv), Pleozytose, Proteinerhöhung'
              ],
              treatment_indications: [
                'Alle bestätigten Syphilis-Fälle müssen stadienabhängig behandelt werden',
                'Sexualpartner müssen benachrichtigt und behandelt werden'
              ],
              first_line: [
                'Frühsyphilis (primär, sekundär, frühe Latenz): Benzathin-Penicillin G 2,4 Millionen IE i.m. als Einzeldosis',
                'Späte Latenz oder Tertiärsyphilis: Benzathin-Penicillin G 2,4 Millionen IE i.m. wöchentlich für 3 Wochen',
                'Neurosyphilis: Wässriges kristallines Penicillin G 18-24 Millionen IE/Tag i.v. (3-4 Millionen IE alle 4 Stunden) für 10-14 Tage'
              ],
              special_populations: [
                'Penicillinallergie: Doxycyclin 100mg p.o. zweimal täglich für 14 Tage (früh) oder 28 Tage (spät). In der Schwangerschaft sind Desensibilisierung und Penicillin-Behandlung obligatorisch!',
                'Schwangerschaft: Alle schwangeren Frauen sollten gescreent werden. Die Behandlung ist die gleiche wie bei nicht-schwangeren Erwachsenen.',
                'Jarisch-Herxheimer-Reaktion: Eine fieberhafte Reaktion innerhalb der ersten 24 Stunden nach Behandlungsbeginn, keine Allergie. Symptomatische Behandlung.',
                'Angeborene Syphilis: Wässriges kristallines Penicillin G 100.000-150.000 IE/kg/Tag i.v. (50.000 IE/kg/Dosis alle 12 Stunden für die ersten 7 Tage, dann alle 8 Stunden) für 10 Tage. ODER Procain-Penicillin G 50.000 IE/kg/Tag i.m. für 10 Tage.'
              ],
              monitoring: [
                'Der Behandlungserfolg wird durch einen Abfall der nicht-treponemalen Testtiter (RPR/VDRL) überwacht (mindestens vierfacher Abfall innerhalb von 12 Monaten).'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021',
                'IUSTI: 2020 European guideline on the management of syphilis'
              ]
            },
            prognosis: {
              mortality: 'Behandelte Syphilis: niedrig; Neurosyphilis: irreversible Schäden möglich',
              prognostic_scores: ['Keine'],
              factors: 'Stadium, HIV-Koinfektion, Zeitpunkt der Behandlung'
            }
          },
          {
            id: 'hiv_aids',
            name: 'HIV-Infektion und AIDS',
            pathogen: { type: 'Virus', name: '<i>Humanes Immundefizienz-Virus</i> (HIV-1, HIV-2)', gram: 'RNA-Retrovirus', shape: 'sphärisch' },
            epidemiology: {
              incidence: '~38 Millionen Menschen leben weltweit mit HIV',
              risk_groups: ['MSM', 'i.v.-Drogenkonsumenten', 'Sexarbeiter', 'Transfusionsempfänger (Entwicklungsländer)', 'Partner'],
              seasonality: 'Keine',
              transmission: 'Sexuell, parenteral (Blut), vertikal (Mutter-Kind)'
            },
            pathomechanism: {
              steps: [
                'Eintritt und Bindung: Virales gp120 bindet an CD4-Rezeptor und CCR5/CXCR4-Korezeptoren auf T-Helferzellen und Makrophagen.',
                'Replikation und Integration: Virale RNA wird durch Reverse Transkriptase in DNA umgeschrieben (fehleranfällig) und durch Integrase in das Wirtsgenom integriert (Provirus), wo es latent bleiben kann.',
                'Immunzerstörung: Infizierte CD4+ T-Zellen sterben durch Virusreplikation (Pyroptose), Angriff durch zytotoxische T-Zellen und Synzytienbildung. Früher Verlust von darmassoziiertem lymphatischem Gewebe (GALT) treibt chronische Entzündung an.',
                'Folge: Kritischer Abfall der CD4+ Zahl (<200/µL) führt zum Zusammenbruch des Immunsystems und zu opportunistischen Infektionen/Tumoren (AIDS).'
              ],
              virulence_factors: ['gp120/gp41 (Eintritt)', 'Reverse Transkriptase (hohe Mutationsrate)', 'Nef, Tat, Rev (Regulatoren)']
            },
            clinical: {
              incubation: '2-4 Wochen (akutes retrovirales Syndrom)',
              onset: 'Akut (ARS) oder latent',
              symptoms: [
                { name: 'Akutes Retrovirales Syndrom (ARS)', description: 'Mononukleose-ähnliche Erkrankung 2-4 Wochen nach Infektion: Fieber, Halsschmerzen, Lymphknotenschwellung, Muskelschmerzen und makulopapulöser Ausschlag. Hohe Viruslast und vorübergehender CD4-Abfall.', severity: 'moderate' },
                { name: 'Klinische Latenz', description: 'Asymptomatische oder milde Phase (8-10 Jahre ohne Therapie). Das Virus repliziert aktiv in Lymphknoten. Persistierende generalisierte Lymphadenopathie (PGL) kann auftreten.', severity: 'mild' },
                { name: 'AIDS-Stadium', description: 'Wenn die CD4-Zahl unter 200/µL fällt. Auftreten opportunistischer Infektionen (z.B. Pneumocystis-Pneumonie, Ösophagus-Candidose, Toxoplasma-Enzephalitis, CMV-Retinitis) und Tumoren (Kaposi-Sarkom, Lymphom).', severity: 'severe' }
              ],
              physical_exam: [
                'Generalisierte Lymphadenopathie (PGL)',
                'Orale Candidose (Soor)',
                'Seborrhoe der Kopfhaut',
                'Kaposi-Sarkom (violette Hautläsionen)'
              ],
              complications: ['Pneumocystis-jirovecii-Pneumonie (PCP)', 'Toxoplasma-Enzephalitis', 'Kryptokokken-Meningitis', 'CMV-Retinitis', 'Kaposi-Sarkom', 'Lymphom']
            },
            diagnostics: {
              laboratory: [
                { test: 'CD4-Zellzahl', finding: 'Abnehmend (<200/µL = AIDS)', interpretation: 'Immunstatus' },
                { test: 'Blutbild', finding: 'Lymphopenie, Thrombozytopenie', interpretation: 'Zytopenie' }
              ],
              microbiology: [
                { test: 'Screening-Test (ELISA der 4. Generation)', finding: 'Ag/Ak positiv', significance: 'Kurzes diagnostisches Fenster (2-3 Wochen)' },
                { test: 'Bestätigungstest (Western Blot / Immunoblot)', finding: 'Positiv', significance: 'Diagnose' },
                { test: 'HIV-RNA-PCR (Viruslast)', finding: 'Kopien/ml', significance: 'Therapieüberwachung und akute Infektion' }
              ]
            },
            differential: [
              { disease: 'Mononukleose (EBV)', distinguishing: 'Heterophile Antikörper, atypische Lymphozyten' },
              { disease: 'Influenza', distinguishing: 'Saisonalität, schnellerer Verlauf' },
              { disease: 'Sekundäre Syphilis', distinguishing: 'Serologie, Ausschlag an Handflächen/Fußsohlen' }
            ],
            therapy: {
              guidelines: ['EACS-Leitlinien Version 12.0 (2023)'],
              empirical: {
                drug_classes: {
                  title: 'Antiretrovirale Medikamentenklassen',
                  drugs: [
                    { drug: 'NRTI (Nukleosid-/Nukleotid-Reverse-Transkriptase-Inhibitoren)', dose: '-', duration: '-', note: 'z.B. Tenofovir (TDF/TAF), Emtricitabin (FTC), Lamivudin (3TC), Abacavir (ABC)' },
                    { drug: 'INSTI (Integrase-Inhibitoren)', dose: '-', duration: '-', note: 'z.B. Bictegravir (BIC), Dolutegravir (DTG), Raltegravir (RAL)' },
                    { drug: 'NNRTI (Nicht-Nukleosidische-Reverse-Transkriptase-Inhibitoren)', dose: '-', duration: '-', note: 'z.B. Doravirin (DOR), Rilpivirin (RPV), Efavirenz (EFV)' },
                    { drug: 'PI (Protease-Inhibitoren)', dose: '-', duration: '-', note: 'z.B. Darunavir (DRV), Atazanavir (ATV) - mit Booster (Ritonavir/Cobicistat)' }
                  ]
                },
                combinations: {
                  title: 'Empfohlene Kombinationen',
                  drugs: [
                    { drug: '2 NRTI + 1 INSTI', dose: '-', duration: '-', note: 'Standard-Erstlinientherapie (z.B. TAF/FTC + Bictegravir)' },
                    { drug: '1 NRTI + 1 INSTI', dose: '-', duration: '-', note: 'Zweifachtherapie (z.B. 3TC + Dolutegravir) - unter bestimmten Bedingungen' },
                    { drug: '2 NRTI + 1 NNRTI oder 1 PI', dose: '-', duration: '-', note: 'Alternativen' }
                  ]
                },
                regimens: {
                  title: 'Spezifische empfohlene Regime (EACS)',
                  drugs: [
                    { drug: 'Bictegravir / Tenofoviralafenamid (TAF) / Emtricitabin (FTC)', dose: '1 Tab (50/25/200mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugte Erstlinientherapie (STR). Erfordert keinen HLA-Test.' },
                    { drug: 'Dolutegravir + Tenofovir (TDF/TAF) + Emtricitabin (FTC) / Lamivudin (3TC)', dose: 'Kombination', duration: 'Lebenslang', note: 'Bevorzugte Erstlinientherapie.' },
                    { drug: 'Dolutegravir / Lamivudin (3TC)', dose: '1 Tab (50/300mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Zweifachtherapie (wenn VL <500.000, kein HBV, CD4 >200).' }
                  ]
                }
              },
              targeted: 'Sofortiger ART-Beginn (Rapid Initiation) empfohlen. Ziel: nicht nachweisbare Viruslast (<50 Kopien/ml).',
              supportive: ['Opportunistische Prophylaxe (PCP: TMP/SMX bei CD4<200; Toxoplasma: TMP/SMX bei CD4<100 und IgG+)', 'Impfungen (Pneumokokken, Influenza, HBV, HAV, HPV, Meningokokken, VZV - Lebendimpfstoff kontraindiziert bei CD4<200)'],
              prevention: ['PrEP (TDF/FTC oder TAF/FTC)', 'PEP (ART für 28 Tage, Beginn <48 Stunden)', 'N=N (Nicht nachweisbar = Nicht übertragbar)']
            },
            guidelines: {
              diagnosis: [
                'Screening: Ag/Ak-Kombinationstest der 4. Generation',
                'Bestätigung: Western Blot oder Immunoblot',
                'Baseline: CD4, Viruslast, HLA-B*5701 (vor ABC-Gabe), Resistenztestung (falls verfügbar)'
              ],
              treatment_indications: [
                'Treat All: ART wird für alle Menschen mit HIV empfohlen, unabhängig von der CD4-Zellzahl.',
                'Dringende ART: Schwangerschaft, akute opportunistische Infektion (außer TB-Meningitis/Kryptokokken-Meningitis - dort Aufschub), akutes HIV-Syndrom.'
              ],
              first_line: [
                '1. Bictegravir/TAF/FTC (STR)',
                '2. Dolutegravir + TAF/FTC oder TDF/FTC oder ABC/3TC (HLA-B*5701 neg)',
                '3. Dolutegravir/3TC (2-fach-Regime) - unter Bedingungen'
              ],
              monitoring: [
                'Viruslast: nach 1, 3, 6 Monaten, dann alle 6 Monate (wenn stabil)',
                'CD4: Anfänglich alle 3-6 Monate, bei stabilem Zustand seltener'
              ],
              special_populations: [
                'Schwangerschaft: DTG-basierte Regime werden bevorzugt',
                'TB-Koinfektion: ART-Beginn innerhalb von 2-8 Wochen (CD4-abhängig), Rifampicin-Interaktionen (DTG-Dosiserhöhung!)'
              ]
            },
            prognosis: {
              mortality: 'Mit Behandlung fast normale Lebenserwartung; Unbehandeltes AIDS: tödlich',
              prognostic_scores: ['CD4-Zellzahl', 'Viruslast'],
              factors: 'Adhärenz, Frühdiagnose'
            }
          },
          {
            id: 'gonorrhea',
            name: 'Gonorrhoe (Tripper)',
            pathogen: { type: 'Bakterium', name: '<i>Neisseria gonorrhoeae</i>', gram: 'Gram-negativ', shape: 'Diplokokken (intrazellulär)' },
            epidemiology: {
              incidence: 'Häufig, zunehmende Resistenz',
              risk_groups: ['Junge Erwachsene', 'MSM', 'Neuer Sexualpartner'],
              seasonality: 'Keine',
              transmission: 'Sexuell, perinatal'
            },
            pathomechanism: {
              steps: [
                'Adhäsion: Bakterien haften mit Pili an Schleimhautepithelzellen (Harnröhre, Zervix, Rektum, Pharynx).',
                'Invasion: Eindringen in Zellen und subepithelialen Raum.',
                'Entzündung: LOS (Lipooligosaccharid) und andere Virulenzfaktoren lösen eine starke Neutrophilenantwort aus (eitriger Ausfluss).'
              ],
              virulence_factors: ['Pili', 'Opa-Proteine', 'IgA-Protease', 'LOS']
            },
            clinical: {
              incubation: '2-7 Tage',
              onset: 'Akut',
              symptoms: [
                { name: 'Männer', description: 'Urethritis: reichlicher, gelb-grüner eitriger Ausfluss, Dysurie. (90% symptomatisch)', severity: 'moderate' },
                { name: 'Frauen', description: 'Zervizitis: oft asymptomatisch oder mild (50%). Vaginaler Ausfluss, Dysurie, Unterbauchschmerzen.', severity: 'mild' },
                { name: 'Extragenital', description: 'Pharyngitis (oft asymptomatisch), Proktitis (Schmerzen, Ausfluss), Konjunktivitis (Neugeborene).', severity: 'moderate' }
              ],
              physical_exam: ['Eitriger urethraler/zervikaler Ausfluss', 'Bartholin-Abszess', 'Fieber (bei DGI)'],
              complications: ['Beckenentzündung (PID)', 'Unfruchtbarkeit', 'Epididymitis', 'Disseminierte Gonokokkeninfektion (DGI): Arthritis, Dermatitis']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Normal', interpretation: 'Bei lokaler Infektion' }],
              microbiology: [
                { test: 'NAAT (PCR)', finding: 'Positiv', significance: 'Goldstandard (Urin, Abstrich)' },
                { test: 'Kultur', finding: 'N. gonorrhoeae', significance: 'OBLIGATORISCH für Resistenztestung bei Therapieversagen!' },
                { test: 'Mikroskopie', finding: 'Intrazelluläre Gram-negative Diplokokken', significance: 'Diagnostisch bei Männern, weniger sensitiv bei Frauen' }
              ]
            },
            therapy: {
              guidelines: ['IUSTI 2020 / CDC 2021'],
              empirical: {
                outpatient: [
                  { drug: 'Ceftriaxon', dose: '1g i.m. Einzeldosis', duration: 'Stat', note: 'Erste Wahl. Dosis erhöht wegen Resistenz (früher 250-500mg).' },
                  { drug: 'Alternative (Resistenz/Allergie)', dose: '-', duration: '-', note: 'Gentamicin 240mg i.m. + Azithromycin 2g p.o. Cefixim 800mg p.o. (nur wenn keine andere Option, Resistenzrisiko!).' }
                ]
              },
              targeted: 'Nach Kultur. Zunehmende Ceftriaxon-Resistenz (v.a. Asien) ist besorgniserregend. Dualtherapie (z.B. +Azithromycin) wird nicht mehr immer routinemäßig empfohlen.',
              supportive: ['Partnerbehandlung', 'Sexuelle Abstinenz für 7 Tage'],
              prevention: ['Kondome', 'Screening']
            },
            prognosis: { mortality: 'Sehr niedrig', prognostic_scores: [], factors: 'Komplikationen (PID, DGI)' }
          },
          {
            id: 'chlamydia',
            name: 'Chlamydien-Infektion',
            pathogen: { type: 'Bakterium', name: '<i>Chlamydia trachomatis</i> (Serovare D-K)', gram: 'Gram-negativ (intrazellulär)', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'Häufigste bakterielle STI weltweit',
              risk_groups: ['Junge sexuell aktive Erwachsene (<25 Jahre)', 'Neue/mehrere Partner'],
              seasonality: 'Keine',
              transmission: 'Sexuell, perinatal'
            },
            pathomechanism: {
              steps: [
                'Infektiöse Elementarkörperchen (EB) dringen in Zylinderepithelzellen ein (Zervix, Urethra, Rektum).',
                'In der Zelle wandeln sie sich in Retikularkörperchen (RB) um und vermehren sich.',
                'Nach Zelllyse werden neue EBs freigesetzt, um weitere Zellen zu infizieren.',
                'Chronische Entzündung führt zu Vernarbung, was die Grundlage für Komplikationen (z.B. Unfruchtbarkeit) ist.'
              ],
              virulence_factors: ['Intrazelluläres Überleben', 'Hitzeschockproteine (HSP)']
            },
            clinical: {
              incubation: '1-3 Wochen',
              onset: 'Langsam/Asymptomatisch',
              symptoms: [
                { name: 'Asymptomatisch ("Still")', description: '70-80% der Frauen und 50% der Männer sind asymptomatisch, was die Ausbreitung und Spätkomplikationen begünstigt.', severity: 'mild' },
                { name: 'Frauen', description: 'Zervizitis: mukopurulenter Ausfluss, Kontaktblutung, Dysurie. Unterbauchschmerzen (kann auf PID hinweisen).', severity: 'moderate' },
                { name: 'Männer', description: 'Urethritis: Brennen beim Wasserlassen, wässriger/glasiger Ausfluss (weniger eitrig als bei Gonorrhoe).', severity: 'moderate' }
              ],
              physical_exam: ['Mukopurulente Zervizitis', 'Adnex-Druckschmerz (PID)', 'Urethraler Ausfluss'],
              complications: ['Beckenentzündung (PID)', 'Unfruchtbarkeit (tubar)', 'Eileiterschwangerschaft', 'Fitz-Hugh-Curtis-Syndrom (Perihepatitis)', 'Reaktive Arthritis (Reiter-Syndrom)', 'Neugeborenen-Konjunktivitis/Pneumonie']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Normal', interpretation: 'Lokale Infektion' }],
              microbiology: [
                { test: 'NAAT (PCR)', finding: 'Positiv', significance: 'Goldstandard (Urin, Vaginal-/Zervikal-/Urethralabstrich)' },
                { test: 'Kultur', finding: 'Schwierig', significance: 'Nur in Speziallabors (Zellkultur)' }
              ]
            },
            therapy: {
              guidelines: ['CDC 2021 / IUSTI'],
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '100mg 2x/Tag p.o.', duration: '7 Tage', note: 'Erste Wahl (besser auch bei rektaler Infektion).' },
                  { drug: 'Azithromycin', dose: '1g p.o.', duration: 'Einzeldosis', note: 'Alternative (z.B. in der Schwangerschaft oder bei Compliance-Problemen).' }
                ]
              },
              targeted: 'Doxycyclin bevorzugt. Azithromycin in der Schwangerschaft. Partnerbehandlung ist obligatorisch!',
              supportive: ['Sexuelle Abstinenz für 7 Tage', 'Partnerbenachrichtigung'],
              prevention: ['Kondome', 'Jährliches Screening für Frauen <25 Jahre']
            },
            prognosis: { mortality: 'Sehr niedrig', prognostic_scores: [], factors: 'Unfruchtbarkeitsrisiko steigt mit wiederholten Infektionen' }
          },
          {
            id: 'genital_herpes',
            name: 'Herpes genitalis',
            pathogen: { type: 'Virus', name: '<i>Herpes-Simplex-Virus</i> (meist HSV-2, seltener HSV-1)', gram: 'dsDNA', shape: 'kugelförmig' },
            epidemiology: {
              incidence: 'Häufig, lebenslange Infektion',
              risk_groups: ['Sexuell aktive Erwachsene', 'Mehrere Partner'],
              seasonality: 'Keine',
              transmission: 'Sexueller Kontakt (auch asymptomatische Ausscheidung!)'
            },
            pathomechanism: {
              steps: [
                'Das Virus dringt durch Mikroläsionen in Schleimhaut oder Haut ein.',
                'Vermehrung in Epithelzellen (lytische Infektion), dann Wanderung entlang sensorischer Nerven zu den Sakralganglien.',
                'Etabliert dort eine latente Infektion. Bei Reaktivierung (Stress, Immunsuppression) wandert das Virus zurück zur Haut und verursacht Symptome.'
              ],
              virulence_factors: ['Latenz', 'Immunumgehung']
            },
            clinical: {
              incubation: '2-12 Tage',
              onset: 'Plötzlich (primär) oder Prodrom (rezidivierend)',
              symptoms: [
                { name: 'Primärinfektion', description: 'Schwere Symptome: ausgedehnte, schmerzhafte Bläschen und Geschwüre an den Genitalien. Oft begleitet von Fieber, Unwohlsein, schmerzhafter inguinaler Lymphadenopathie und Dysurie. Heilung: 2-4 Wochen.', severity: 'severe' },
                { name: 'Rezidivierende Infektion', description: 'Milder Verlauf. Oft gehen Prodromalsymptome (Brennen, Kribbeln) voraus. Weniger Läsionen, keine systemischen Symptome. Heilung: 5-10 Tage.', severity: 'mild' }
              ],
              physical_exam: ['Gruppierte Vesikel/Ulzera', 'Inguinale Lymphadenopathie (primär)', 'Zervizitis/Proktitis'],
              complications: ['Aseptische Meningitis', 'Harnverhalt (autonome Dysfunktion)', 'Neonataler Herpes (in der Schwangerschaft!)', 'Erhöhtes Risiko für HIV-Übertragung']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'HSV-DNA', significance: 'Goldstandard (am sensitivsten)' },
                { test: 'Kultur', finding: 'HSV', significance: 'Nur aus frischen Bläschen' },
                { test: 'Typspezifische Serologie', finding: 'IgG', significance: 'Unterscheidung HSV-1 vs HSV-2 (nicht für Akutdiagnose)' }
              ]
            },
            therapy: {
              guidelines: ['IUSTI / CDC'],
              empirical: {
                outpatient: [
                  { drug: 'Acyclovir', dose: '400mg 3x/Tag p.o.', duration: '7-10 Tage (primär), 5 Tage (rezidivierend)', note: 'Oder 200mg 5x/Tag.' },
                  { drug: 'Valacyclovir', dose: '500-1000mg 2x/Tag p.o.', duration: '7-10 Tage (primär), 3 Tage (rezidivierend)', note: 'Bessere Bioverfügbarkeit.' }
                ]
              },
              targeted: 'Suppressionstherapie (täglich Acyclovir/Valacyclovir) empfohlen bei häufigen Rezidiven (>6/Jahr).',
              supportive: ['Schmerzmittel', 'Sitzbäder'],
              prevention: ['Kondome (kein vollständiger Schutz)', 'Abstinenz bei Prodrom/Symptomen', 'Suppressionstherapie (reduziert Übertragung)']
            },
            prognosis: { mortality: 'Sehr niedrig', prognostic_scores: [], factors: 'Psychische Belastung durch Rezidive' }
          },
          {
            id: 'trichomoniasis',
            name: 'Trichomoniasis',
            pathogen: { type: 'Protozoon', name: '<i>Trichomonas vaginalis</i>', gram: '-', shape: 'birnenförmig, begeißelt' },
            epidemiology: {
              incidence: 'Häufigste nicht-virale STI',
              risk_groups: ['Sexuell aktive Frauen', 'Mehrere Partner'],
              seasonality: 'Keine',
              transmission: 'Sexueller Kontakt'
            },
            pathomechanism: {
              steps: [
                'Das Protozoon haftet an Plattenepithelzellen der Vagina und Harnröhre.',
                'Schädigt das Epithel durch direkte Zytotoxizität und Entzündungsreaktion.',
                'Verändert die Vaginalflora (pH-Anstieg).'
              ],
              virulence_factors: ['Adhäsine', 'Cystein-Proteasen']
            },
            clinical: {
              incubation: '4-28 Tage',
              onset: 'Schleichend',
              symptoms: [
                { name: 'Frauen', description: 'Reichlicher, schaumiger, gelb-grüner, übelriechender Ausfluss. Vulvovaginaler Juckreiz, Dysurie, Dyspareunie. "Erdbeer-Zervix" (Colpitis macularis) bei Untersuchung.', severity: 'moderate' },
                { name: 'Männer', description: 'Oft asymptomatisch. Kann Urethritis (Ausfluss, Dysurie), Prostatitis verursachen.', severity: 'mild' }
              ],
              physical_exam: ['Schaumiger Ausfluss', 'Erdbeer-Zervix (punktförmige Blutungen)', 'pH > 4.5'],
              complications: ['Frühgeburt', 'Niedriges Geburtsgewicht', 'Erhöhtes Risiko für HIV-Übertragung', 'PID']
            },
            diagnostics: {
              laboratory: [{ test: 'Vaginal-pH', finding: '> 4.5', interpretation: 'Bakterielle Vaginose oder Trichomonas' }],
              microbiology: [
                { test: 'Nativpräparat', finding: 'Bewegliche begeißelte Protozoen', significance: 'Schnell, aber geringe Sensitivität (60-70%)' },
                { test: 'NAAT (PCR)', finding: 'Positiv', significance: 'Goldstandard (am sensitivsten)' },
                { test: 'Kultur', finding: 'Positiv', significance: 'Wenn NAAT nicht verfügbar' }
              ]
            },
            therapy: {
              guidelines: ['CDC 2021 / IUSTI'],
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol', dose: '2g p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Erste Wahl. Partner mitbehandeln!' },
                  { drug: 'Tinidazol', dose: '2g p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Alternative' },
                  { drug: 'Metronidazol', dose: '500mg 2x/Tag p.o.', duration: '7 Tage', note: 'Alternative (z.B. bei HIV-Positiven)' }
                ]
              },
              targeted: 'Metronidazol oder Tinidazol. Alkoholkonsum während der Behandlung verboten (Disulfiram-Effekt)!',
              supportive: ['Sexuelle Abstinenz bis zum Abklingen der Symptome und Behandlung des Partners'],
              prevention: ['Kondome', 'Partnerbehandlung']
            },
            prognosis: { mortality: 'Null', prognostic_scores: [], factors: 'Reinfektion häufig, wenn Partner unbehandelt' }
          }
        ]
}, // End of sexually_transmitted
});