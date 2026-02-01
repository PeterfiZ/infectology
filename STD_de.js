Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Sexuell übertragbare Infektionen',
        icon: '🔬',
        color: '#7c3aed',
        diseases: [
          {
            id: 'syphilis',
            name: 'Syphilis',
            pathogen: { type: 'Spirochäte', name: 'Treponema pallidum', gram: 'Gram-negativ (schlecht anfärbbar)', shape: 'spiralförmig' },
            epidemiology: {
              incidence: 'Zunehmende Inzidenz weltweit, hoch in der MSM-Population',
              risk_groups: ['MSM (Männer, die Sex mit Männern haben)', 'HIV-positive Personen', 'Sexarbeiter', 'Mehrere Sexualpartner', 'i.v.-Drogenkonsumenten'],
              seasonality: 'Keine',
              transmission: 'Direkter Kontakt mit Schleimhäuten/Haut, vertikal (kongenital)'
            },
            pathomechanism: {
              steps: [
                'T. pallidum dringt durch Schleimhäute/Haut ein',
                'Lokale Vermehrung → Primäraffekt (Ulcus durum)',
                'Hämatogene Streuung (primäre Virämie)',
                'Sekundäre Syphilis: disseminierte Erkrankung',
                'Latenzphase: Immunantwort hält sie unter Kontrolle',
                'Tertiär: chronische granulomatöse Entzündung (Gumma) oder vaskulär/neurologisch'
              ],
              virulence_factors: ['Fibronektin-bindende Proteine', 'Hyaluronidase', 'Antigenvariation', 'Outer membrane proteins']
            },
            clinical: {
              incubation: 'Primär: 9-90 Tage (Durchschnitt 21 Tage)',
              onset: 'Phasenabhängig',
              symptoms: [
                { name: 'Primär: Ulcus durum', description: 'Schmerzloses, hartrandiges Geschwür (in 60-80% einzeln)', severity: 'moderate' },
                { name: 'Sekundär: Exanthem', description: 'Generalisiert, nicht juckend (75-100%), Beteiligung von Handflächen/Fußsohlen (60-80%)', severity: 'moderate' },
                { name: 'Sekundär: Lymphadenopathie', description: 'Generalisiert, schmerzlos (50-85%)', severity: 'mild' },
                { name: 'Sekundär: Condylomata lata', description: 'Flache, nässende Papeln (10-20%)', severity: 'moderate' },
                { name: 'Tertiär: Gumma', description: 'Granulomatöse Läsionen (15% bei Unbehandelten)', severity: 'severe' },
                { name: 'Neurosyphilis', description: 'In jedem Stadium! (Symptomatisch: 5-10%)', severity: 'severe' }
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
                'Neurosyphilis: Liquor-VDRL (spezifisch, aber nicht sensitiv), Pleozytose, erhöhtes Protein'
              ],
              treatment_indications: [
                'Alle bestätigten Syphilis-Fälle müssen je nach Stadium behandelt werden',
                'Sexualpartner müssen benachrichtigt und behandelt werden'
              ],
              first_line: [
                'Frühsyphilis (primär, sekundär, frühe Latenz): Benzathin-Penicillin G 2,4 Mio. IE i.m. als Einzeldosis',
                'Späte Latenz oder Tertiärsyphilis: Benzathin-Penicillin G 2,4 Mio. IE i.m. wöchentlich für 3 Wochen',
                'Neurosyphilis: Wässriges kristallines Penicillin G 18-24 Mio. IE/Tag i.v. (3-4 Mio. IE alle 4 Stunden) für 10-14 Tage'
              ],
              special_populations: [
                'Penicillinallergie: Doxycyclin 2x100mg p.o. für 14 Tage (früh) oder 28 Tage (spät). In der Schwangerschaft ist eine Desensibilisierung und Penicillin-Behandlung obligatorisch!',
                'Schwangerschaft: Alle schwangeren Frauen sollten gescreent werden. Die Behandlung ist die gleiche wie bei nicht-schwangeren Erwachsenen.',
                'Jarisch-Herxheimer-Reaktion: Fieberhafte Reaktion in den ersten 24 Stunden der Behandlung, keine Allergie. Symptomatische Behandlung.'
              ],
              monitoring: [
                'Der Behandlungserfolg wird durch einen Abfall der nicht-treponemalen Test-Titer (RPR/VDRL) überwacht (mindestens vierfacher Abfall innerhalb von 12 Monaten).'
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
            pathogen: { type: 'Virus', name: 'Humanes Immundefizienz-Virus (HIV-1, HIV-2)', gram: 'RNA-Retrovirus', shape: 'sphärisch' },
            epidemiology: {
              incidence: '~38 Millionen Menschen leben weltweit mit HIV',
              risk_groups: ['MSM', 'i.v.-Drogenkonsumenten', 'Sexarbeiter', 'Transfusionsempfänger (Entwicklungsländer)', 'Partner'],
              seasonality: 'Keine',
              transmission: 'Sexuell, parenteral (Blut), vertikal (Mutter-Kind)'
            },
            pathomechanism: {
              steps: [
                'Virusbindung an CD4-Rezeptor und Co-Rezeptoren (CCR5/CXCR4)',
                'Reverse Transkription (RNA -> DNA)',
                'Integration in das Wirtsgenom (Provirus)',
                'Progressive Zerstörung von CD4+ T-Zellen',
                'Erschöpfung des Immunsystems -> Opportunistische Infektionen (AIDS)'
              ],
              virulence_factors: ['gp120/gp41 (Eintritt)', 'Reverse Transkriptase (hohe Mutationsrate)', 'Nef, Tat, Rev (Regulatoren)']
            },
            clinical: {
              incubation: '2-4 Wochen (akutes retrovirales Syndrom)',
              onset: 'Akut (ARS) oder latent',
              symptoms: [
                { name: 'Akut (ARS): Fieber', description: 'Häufigstes Symptom (>80-90%)', severity: 'moderate' },
                { name: 'Akut (ARS): Müdigkeit', description: 'Ausgeprägt (>70-90%)', severity: 'mild' },
                { name: 'Akut (ARS): Hautausschlag', description: 'Makulopapulös (40-80%)', severity: 'moderate' },
                { name: 'Akut (ARS): Pharyngitis', description: 'Halsschmerzen (50-70%)', severity: 'mild' },
                { name: 'Latenzphase', description: 'Asymptomatisch oder PGL (über Jahre)', severity: 'mild' },
                { name: 'AIDS', description: 'Opportunistische Infektionen (CD4 <200)', severity: 'severe' }
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
                outpatient: [
                  { drug: 'Bictegravir / TAF / Emtricitabin', dose: '1 Tab (50/25/200mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugte Erstlinientherapie (STR). Erfordert keinen HLA-Test.' },
                  { drug: 'Dolutegravir + TDF/TAF + FTC/3TC', dose: 'Kombination', duration: 'Lebenslang', note: 'Bevorzugte Erstlinientherapie.' },
                  { drug: 'Dolutegravir / Lamivudin', dose: '1 Tab (50/300mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Zweifachtherapie (wenn VL <500.000, kein HBV, CD4 >200).' }
                ]
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
          }
        ]
}, // End of sexually_transmitted
});