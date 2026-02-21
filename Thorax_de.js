// c:\Users\Peterfi\OneDrive - Pécsi Tudományegyetem\A folyó ügyek\a gyorsan elintézendő\a leadandó, határidős dolgok\Cikkek, előadások\programok\Infectologia\thorax_de.js

Object.assign(window.diseases, {
      bacterial_respiratory: {
        name: 'Bakterielle Atemwegsinfektionen',
        icon: window.diseaseMetadata.bacterial_respiratory.icon,
        color: window.diseaseMetadata.bacterial_respiratory.color,
                tables: [
          {
            title: 'Differentialdiagnose der typischen vs. atypischen Pneumonie',
            headers: ['Merkmal', 'Typische Pneumonie', 'Atypische Pneumonie'],
            rows: [
              ['Beginn', 'Plötzlich, dramatisch (Schüttelfrost)', 'Langsam, schleichend (Prodrom)'],
              ['Fieber', 'Hoch (>39°C)', 'Leichtes oder mäßiges Fieber'],
              ['Brustschmerzen', 'Pleuritisch, stechend (häufig)', 'Retrosternal, brennend (seltener)'],
              ['Husten', 'Produktiv', 'Trocken, unproduktiv, quälend'],
              ['Auswurf', 'Eitrig, rostbraun', 'Wenig, schleimig oder fehlend'],
              ['Pleuraerguss', 'Häufig (parapneumonisch)', 'Selten'],
              ['Radiologie', 'Lobär-/Segmentkonsolidierung, Aerogramm', 'Interstitiell, Milchglas, diffus, fleckig'],
              ['Extrapulmonale Symptome', 'Selten (außer septische Streuung)', 'Häufig (Kopfschmerzen, Myalgie, Ohr/Hals, GI, Ausschlag)'],
              ['Labor (Leukozyten)', 'Leukozytose, Linksverschiebung', 'Normal oder leichte Leukozytose'],
              ['Labor (CRP/PCT)', 'Deutlich erhöht (PCT >0.5)', 'Mäßig erhöht (PCT <0.25)'],
              ['Labor (Leberenzyme)', 'Meist normal', 'Oft erhöht (AST, ALT)'],
              ['Erreger', '<i>S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus, Klebsiella</i>', '<i>Mycoplasma, Chlamydia, Legionella, Coxiella</i>, Viren']
            ]
          }
        ],
        diseases: [
          {
            id: 'bacterial_pneumonia',
            name: 'Bakterielle Pneumonie',
            pathogen: { type: 'Bakterium', name: '<i>Streptococcus pneumoniae</i>', gram: 'Gram-positiv', shape: 'Diplokokken' },
            epidemiology: {
              incidence: 'Häufigster Erreger der ambulant erworbenen Pneumonie (CAP) (30-40%)',
              risk_groups: ['Personen über 65 Jahre', 'Patienten mit chronischen Erkrankungen (COPD, Herzinsuffizienz, Diabetes)', 'Immungeschwächte', 'Splenektomierte Patienten', 'Alkoholkranke', 'Raucher'],
              seasonality: 'Winter-Frühling-Gipfel, oft Influenza-Superinfektion',
              transmission: 'Tröpfcheninfektion, endogene Aktivierung'
            },
            pathomechanism: {
              steps: [
                'Die Infektion beginnt in der Regel mit der Mikroaspiration von Bakterien, die die oberen Atemwege besiedeln. Die Virulenzfaktoren des Erregers (z.B. Kapsel) helfen, die Abwehrmechanismen des Wirts (z.B. Phagozytose) zu umgehen.',
                'Die Bakterien vermehren sich in den Alveolen und lösen eine heftige Entzündungsreaktion aus. Freigesetzte Toxine (z.B. Pneumolysin) schädigen die Epithelzellen.',
                'Entzündungszellen (Neutrophile), rote Blutkörperchen und Fibrin füllen die Alveolen, was zur Konsolidierung des Lungengewebes führt. Dieser Prozess ist für das charakteristische Bild der Lobärpneumonie verantwortlich.'
              ],
              virulence_factors: ['Kapselpolysaccharid (93 Serotypen)', 'Pneumolysin', 'Autolysin (LytA)', 'Neuraminidase', 'IgA1-Protease']
            },
            clinical: {
              incubation: '1-3 Tage',
              onset: 'Plötzlich, dramatischer Beginn',
              symptoms: [
                { name: 'Plötzlicher Beginn', description: 'Gekennzeichnet durch hohes Fieber, Schüttelfrost und Krankheitsgefühl.', severity: 'severe' },
                { name: 'Respiratorische Symptome', description: 'Anfänglich trockener Husten, der später produktiv wird, klassischerweise mit rostbraunem Auswurf. Pleuritische, stechende Brustschmerzen und Atemnot sind häufig.', severity: 'moderate' },
                { name: 'Atypische Präsentation', description: 'Bei älteren Menschen kann Fieber fehlen, und eine Bewusstseinsstörung kann das führende Symptom sein.', severity: 'severe' }
              ],
              physical_exam: [
                'Tachypnoe, Tachykardie',
                'Dämpfung bei Perkussion über dem betroffenen Lappen',
                'Bronchialatmen, Rasselgeräusche (Crepitatio)',
                'Erhöhte Bronchophonie und Stimmfremitus',
                'Zyanose in schweren Fällen'
              ],
              complications: ['Empyem', 'Lungenabszess', 'Meningitis', 'Sepsis/septischer Schock', 'ARDS', 'Perikarditis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose (15-30 G/L), Linksverschiebung', interpretation: 'Typisch für bakterielle Infektion' },
                { test: 'CRP', finding: 'Deutlich erhöht (>100 mg/L)', interpretation: 'Marker für aktive Entzündung' },
                { test: 'PCT', finding: '>0.5 ng/mL', interpretation: 'Verdacht auf bakterielle Sepsis' },
                { test: 'Arterielle BGA', finding: 'Hypoxämie, evtl. Hypokapnie', interpretation: 'Respiratorische Insuffizienz' },
                { test: 'Blutkultur', finding: 'In 20-30% positiv', interpretation: 'Erregeridentifikation' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen (PA+seitlich)', finding: 'Lobär-/Segmentkonsolidierung, Aerogramm', significance: 'Typisches Erscheinungsbild' },
                { modality: 'Thorax-CT', finding: 'Detaillierte Parenchymbeurteilung', significance: 'Ausschluss von Komplikationen' }
              ],
              microbiology: [
                { test: 'Sputum Gram-Färbung', finding: 'Gram+ lanzettförmige Diplokokken, >25 Neutrophile/Gesichtsfeld', significance: 'Schnelle Orientierung' },
                { test: 'Sputumkultur', finding: 'S. pneumoniae Isolierung', significance: 'Antibiotika-Empfindlichkeit' },
                { test: 'Urin-Antigentest', finding: 'Pneumokokken-Polysaccharid-Nachweis', significance: 'Schnell, spezifisch (>90%)' },
                { test: 'PCR', finding: 'lytA-Gen-Nachweis', significance: 'Empfindlichste Methode' }
              ]
            },
            calculators: [
              {
                name: 'CURB-65 Score - Pneumonie-Schweregrad',
                items: [
                  { label: 'Verwirrtheit (Confusion)', points: 1 },
                  { label: 'Harnstoff > 7 mmol/l', points: 1 },
                  { label: 'Atemfrequenz ≥ 30/min', points: 1 },
                  { label: 'Blutdruck (Syst < 90 oder Diast ≤ 60 mmHg)', points: 1 },
                  { label: 'Alter ≥ 65 Jahre', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 1, text: 'Niedriges Risiko (Mortalität <3%). Ambulante Behandlung erwägen.' },
                  { min: 2, max: 2, text: 'Mittleres Risiko (Mortalität 9%). Krankenhausaufnahme empfohlen.' },
                  { min: 3, max: 5, text: 'Hohes Risiko (Mortalität 15-40%). Dringende Krankenhaus-/Intensivbehandlung.' }
                ]
              }
            ],
            differential: [
              { disease: 'Legionellen-Pneumonie', distinguishing: 'Hyponatriämie, GI-Symptome, atypisches Röntgenbild' },
              { disease: 'Klebsiella-Pneumonie', distinguishing: 'Alkoholkranke, Johannisbeergelee-Sputum, Oberlappen' },
              { disease: 'Mykoplasmen-Pneumonie', distinguishing: 'Junge Leute, langsamer Beginn, atypische Symptome' },
              { disease: 'Lungenembolie', distinguishing: 'Risikofaktoren, D-Dimer, CTPA' },
              { disease: 'Herzinsuffizienz', distinguishing: 'Kardiale Anamnese, BNP, beidseitige Infiltrate' }
            ],
            therapy: {
              guidelines: ['NICE NG138 (Pneumonia in adults) 2024/2025', 'ATS/IDSA 2019 CAP Guidelines', 'Ungarische Gesellschaft für Infektiologie'],
              empirical: {
                cap_outpatient: {
                    title: 'CAP - Ambulant (Mild - CURB-65 0-1)',
                    drugs: [
                        { drug: 'Amoxicillin', dose: '3x500mg-1g p.o.', duration: '5 Tage', note: 'Erste Wahl (NICE). 5-Tage-Kurs meist ausreichend.' },
                        { drug: 'Doxycyclin', dose: '200mg stat, dann 1x100mg p.o.', duration: '5 Tage', note: 'Bei Penicillinallergie.' },
                        { drug: 'Clarithromycin', dose: '2x500mg p.o.', duration: '5 Tage', note: 'Alternative.' }
                    ]
                },
                cap_inpatient: {
                    title: 'CAP - Stationär (Mittelschwer - CURB-65 2)',
                    drugs: [
                        { drug: 'Amoxicillin + Clarithromycin', dose: '3x500mg-1g p.o./i.v. + 2x500mg p.o./i.v.', duration: '5 Tage', note: 'Atypische Abdeckung kann erforderlich sein. (NICE)' },
                        { drug: 'Doxycyclin', dose: '200mg stat, dann 1x100mg p.o.', duration: '5 Tage', note: 'Monotherapie bei Penicillinallergie.' },
                        { drug: 'Levofloxacin', dose: '1x500mg p.o./i.v.', duration: '5 Tage', note: 'Alternative (NICE: respiratorisches Fluorchinolon).' }
                    ]
                },
                cap_icu: {
                    title: 'CAP - Intensivstation (Schwer - CURB-65 3-5)',
                    drugs: [
                        { drug: 'Co-Amoxiclav + Clarithromycin', dose: '1.2g i.v. alle 8h + 500mg i.v. alle 12h', duration: '7-10 Tage', note: 'NICE-Empfehlung für schwere CAP.' },
                        { drug: 'Ceftriaxon + Clarithromycin', dose: '1x2g i.v. + 2x500mg i.v.', duration: '7-10 Tage', note: 'Häufige Alternative (nicht NICE erste Wahl, aber verbreitet).' },
                        { drug: 'Levofloxacin', dose: '1x500mg i.v.', duration: '7-10 Tage', note: 'Bei Beta-Laktam-Allergie.' }
                    ]
                },
                hap_early: {
                    title: 'HAP - Nicht schwer / Früh',
                    drugs: [
                        { drug: 'Co-Amoxiclav', dose: '625mg p.o. 3x1 oder 1.2g i.v. 3x1', duration: '5 Tage', note: 'Erste Wahl (NICE NG191).' },
                        { drug: 'Doxycyclin', dose: '100mg p.o.', duration: '5 Tage', note: 'Alternative.' }
                    ]
                },
                hap_late_vap: {
                    title: 'HAP - Schwer / VAP / Hohes Risiko',
                    drugs: [
                        { drug: 'Antipseudomonas Beta-Laktam', dose: 'z.B. Piperacillin/Tazobactam, Cefepim, Meropenem', duration: '7 Tage', note: '1. Komponente (Gram-negative Abdeckung).' },
                        { drug: '+ Antipseudomonas Fluorchinolon oder Aminoglykosid', dose: 'z.B. Ciprofloxacin, Amikacin', duration: '7 Tage', note: '2. Komponente (doppelte G- Abdeckung, falls erforderlich).' },
                        { drug: '+ MRSA-Abdeckung', dose: 'Vancomycin oder Linezolid', duration: '7 Tage', note: '3. Komponente (wenn MRSA-Risiko >10-20%).' }
                    ]
                },
                vap_stenotrophomonas: {
                    title: 'VAP - Stenotrophomonas maltophilia (Gezielt)',
                    drugs: [
                        { drug: 'Trimethoprim/Sulfamethoxazol (TMP-SMX)', dose: '15-20 mg/kg/Tag (TMP) i.v. in 3-4 Dosen', duration: '14 Tage', note: 'Erste Wahl. Hohe Dosis erforderlich!' },
                        { drug: 'Levofloxacin', dose: '750 mg i.v. 1x/Tag', duration: '14 Tage', note: 'Alternative.' },
                        { drug: 'Cefiderocol', dose: '2g i.v. alle 8h', duration: '14 Tage', note: 'Reserveantibiotikum.' }
                    ]
                }
              },
              targeted: 'Penicillin-empfindlich: Penicillin G 4x4 Mio. IE i.v.; Resistent: Ceftriaxon oder Vancomycin',
              supportive: ['O2-Therapie (SpO2 >92%)', 'Flüssigkeitssubstitution', 'Fiebersenkung', 'Thoraxdrainage bei Empyem'],
              prevention: ['PPSV23 (23-valentes Polysaccharid)', 'PCV13/15/20 (Konjugat)', 'Influenza-Impfung']
            },
            prognosis: {
              mortality: 'CAP: 5-15%, ITS: 20-50%',
              prognostic_scores: ['CURB-65', 'PSI/PORT Score'],
              factors: 'Alter, Komorbidität, Bakteriämie, multilobäre Beteiligung'
            },
            gallery: [
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=RTG',
                caption: 'Konsolidierung des rechten Unterlappens im Thorax-Röntgen.',
                type: 'Röntgen'
              },
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=Gram',
                caption: 'Gram-positive, lanzettförmige Diplokokken im Sputumausstrich.',
                type: 'Mikroskopie'
              }
            ]
          },
          {
            id: 'tuberculosis',
            name: 'Lungentuberkulose',
            pathogen: { type: 'Mykobakterium', name: '<i>Mycobacterium tuberculosis</i>', gram: 'Säurefest (Ziehl-Neelsen+)', shape: 'Stäbchen' },
            epidemiology: {
              incidence: 'Weltweit ~10 Millionen neue Fälle/Jahr, in Ungarn ~500 Fälle/Jahr',
              risk_groups: ['HIV-Infizierte (20-30x Risiko)', 'Diabetiker', 'Immungeschwächte', 'Sozial benachteiligte Personen', 'Gesundheitspersonal', 'Einwanderer aus endemischen Gebieten'],
              seasonality: 'Keine Saisonalität',
              transmission: 'Tröpfcheninfektion (< 5 μm Aerosol), 8+ Stunden Exposition in geschlossenem Raum'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch Inhalation von Aerosoltröpfchen, die den Erreger enthalten. Die Bakterien werden von Alveolarmakrophagen phagozytiert, überleben und vermehren sich aber in ihnen.',
                'An der Infektionsstelle entwickelt sich ein Primärherd (Ghon-Herd), und die Bakterien breiten sich auf die regionalen Lymphknoten aus, wodurch der Primärkomplex entsteht.',
                'Die zelluläre Immunantwort (T-Zellen) wird aktiviert, was zur Bildung von Granulomen führt. Diese Granulome kapseln die Bakterien ein und führen in 90% der Fälle zu einer latenten Infektion (LTBI).',
                'Bei Immunsuppression können die Bakterien reaktivieren. Das Zentrum des Granuloms unterliegt einer käsigen Nekrose, die verflüssigen und eine Kaverne bilden kann, was zu einer offenen, infektiösen Form der Krankheit führt.'
              ],
              virulence_factors: ['Cord-Faktor (Trehalose-Dimycolat)', 'Mykolsäure (Zellwand)', 'Lipoarabinomannan', 'ESAT-6 und CFP-10 sezernierte Antigene']
            },
            clinical: {
              incubation: 'Primär: 2-12 Wochen; Reaktivierung: Jahre-Jahrzehnte',
              onset: 'Langsam, schleichend',
              symptoms: [
                { name: 'Respiratorische Symptome', description: 'Chronischer Husten, der länger als 3 Wochen andauert und anfangs trocken, später produktiv sein kann. Später kann blutiger Auswurf (Hämoptyse) auftreten.', severity: 'severe' },
                { name: 'Allgemeine (B-)Symptome', description: 'Schleichender Beginn mit langwierigen Symptomen: subfebriles Fieber (besonders nachmittags), starker Nachtschweiß und signifikanter, unbeabsichtigter Gewichtsverlust.', severity: 'moderate' },
                { name: 'Sonstige', description: 'Müdigkeit, Appetitlosigkeit, Brustschmerzen.', severity: 'mild' }
              ],
              physical_exam: [
                'Kachexie',
                'Rasselgeräusche/Bronchialatmen über den Oberlappen',
                'Vermindertes Atemgeräusch über Kaverne',
                'Pleurareiben',
                'Lymphadenopathie (miliar/extrapulmonal)'
              ],
              complications: ['Miliartuberkulose', 'TB-Meningitis', 'Pleuritis', 'Perikarditis', 'Spontanpneumothorax', 'Hämoptoe', 'Amyloidose']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Normozytäre Anämie, Lymphopenie', interpretation: 'Zeichen chronischer Krankheit' },
                { test: 'CRP/BSG', finding: 'Mäßig erhöht', interpretation: 'Unspezifisch' },
                { test: 'Leber-/Nierenfunktion', finding: 'Baseline vor Behandlung', interpretation: 'Überwachung der Arzneimitteltoxizität' },
                { test: 'HIV-Serologie', finding: 'Obligatorisch', interpretation: 'Ausschluss einer Koinfektion' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Oberlappeninfiltrat, Kaverne, fibrotische Vernarbung, Verkalkung', significance: 'Screening und Nachsorge' },
                { modality: 'Thorax-CT', finding: 'Tree-in-bud-Zeichen, Kavernen, miliares Muster', significance: 'Empfindlicher, extrapulmonal' }
              ],
              microbiology: [
                { test: 'Ziehl-Neelsen-Färbung des Sputums', finding: 'Säurefeste Stäbchen (AFB)', significance: 'Schnell, aber nur >10^4/mL positiv' },
                { test: 'Sputum/BAL-Kultur', finding: 'Löwenstein-Jensen/MGIT', significance: 'Goldstandard, 2-8 Wochen' },
                { test: 'GeneXpert MTB/RIF', finding: 'MTB-DNA + Rifampicin-Resistenz', significance: 'Schnell (<2 Stunden), empfindlich' },
                { test: 'Tuberkulin-Hauttest (Mantoux)', finding: '>10mm Induration', significance: 'Exposition, keine aktive Krankheit' },
                { test: 'IGRA (QuantiFERON/T-SPOT)', finding: 'IFN-γ-Produktion auf ESAT-6/CFP-10', significance: 'Nicht durch BCG beeinflusst' }
              ]
            },
            differential: [
              { disease: 'Lungenkarzinom', distinguishing: 'Rauchen, Röntgen/CT, Bronchoskopie, Biopsie' },
              { disease: 'Nicht-tuberkulöse Mykobakteriose (NTM)', distinguishing: 'Bronchiektasen, Kultur, MAC am häufigsten' },
              { disease: 'Sarkoidose', distinguishing: 'Bilaterale hiläre Lymphadenopathie, Biopsie (nicht verkäsend)' },
              { disease: 'Pilzpneumonie', distinguishing: 'Immunsuppression, Kultur/Antigen' },
              { disease: 'Aktinomykose', distinguishing: 'Schwefelgranula, Brustwandpenetration' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Isoniazid (INH)', dose: '5 mg/kg (max 300mg) p.o.', duration: '6 Monate', note: 'Hepatotoxizität, periphere Neuropathie (B6!)' },
                  { drug: 'Rifampicin (RIF)', dose: '10 mg/kg (max 600mg) p.o.', duration: '6 Monate', note: 'Arzneimittelwechselwirkungen (CYP450)' },
                  { drug: 'Pyrazinamid (PZA)', dose: '25 mg/kg p.o.', duration: '2 Monate', note: 'Hyperurikämie, Hepatotoxizität' },
                  { drug: 'Ethambutol (EMB)', dose: '15 mg/kg p.o.', duration: '2 Monate', note: 'Optikusneuritis' }
                ],
                inpatient: [
                  { drug: 'Gleiches + Isolierung', dose: 'Aerogene Isolierung', duration: '2 Wochen oder 3 negative Sputa', note: 'Unterdruckzimmer' }
                ],
                icu: [
                  { drug: 'IV-Formulierungen', dose: 'Wenn p.o. nicht toleriert', duration: 'Individuell', note: 'MDR-TB: individualisiert' }
                ]
              },
              targeted: 'MDR-TB: Bedaquilin, Linezolid, Fluorchinolone, Aminoglykoside - Expertenzentrum',
              supportive: ['Vitamin B6 (Neuropathie-Prävention)', 'Ernährung', 'Kontaktverfolgung'],
              prevention: ['BCG-Impfung (Neugeborene)', 'LTBI-Behandlung (INH 9 Mo oder RIF 4 Mo)', 'Kontaktscreening']
            },
            prognosis: {
              mortality: 'Behandelt: <5%; Unbehandelt: 50%; MDR/XDR: 30-50%',
              prognostic_scores: ['Keine Standard-Scores'],
              factors: 'HIV-Status, MDR, Adhärenz, späte Diagnose'
            },
            gallery: [
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=RTG',
                caption: 'Kaverne im rechten Oberlappen bei post-primärer Tuberkulose.',
                type: 'Röntgen'
              },
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=CT',
                caption: 'Thorax-CT mit "Tree-in-Bud"-Muster, das auf eine aktive endobronchiale Ausbreitung hinweist.',
                type: 'CT'
              }
            ]
          },
          {
            id: 'legionella',
            name: 'Legionellen-Pneumonie (Legionärskrankheit)',
            pathogen: { type: 'Bakterium', name: '<i>Legionella pneumophila</i>', gram: 'Gram-negativ (schlecht anfärbbar)', shape: 'Stäbchen, intrazellulär' },
            epidemiology: {
              incidence: '2-9% der CAP, nosokomiale Pneumonie bis zu 30%',
              risk_groups: ['Personen über 50 Jahre', 'Raucher', 'COPD-Patienten', 'Immungeschwächte', 'Chronische Niereninsuffizienz', 'Diabetes'],
              seasonality: 'Sommer-Herbst (Klimaanlagen)',
              transmission: 'Inhalation (Aerosol aus kontaminiertem Wasser: Kühltürme, Duschen, Whirlpools). NICHT von Mensch zu Mensch!'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch Inhalation von Aerosolen (z.B. aus Duschen, Kühltürmen, Klimaanlagen), die die Bakterien enthalten.',
                'In der Lunge gelangen Legionellen in die Alveolarmakrophagen, wo ein spezielles Sekretionssystem (Dot/Icm) die Fusion von Phagosomen und Lysosomen verhindert.',
                'Die Bakterien vermehren sich in einer geschützten Vakuole innerhalb der Makrophagen und lysieren dann die Zelle, um neue Zellen zu infizieren.',
                'Dieser Prozess löst eine schwere, nekrotisierende Pneumonie und eine starke Entzündungsreaktion aus.'
              ],
              virulence_factors: ['Dot/Icm-Sekretionssystem', 'Mip (macrophage infectivity potentiator)', 'Flagellum', 'Über 300 Effektorproteine']
            },
            clinical: {
              incubation: '2-10 Tage (durchschnittlich 5-6 Tage)',
              onset: 'Prodrom 1-2 Tage, dann rasche Progression',
              symptoms: [
                { name: 'Atypische Pneumonie', description: 'Hohes Fieber, Schüttelfrost und ein anfangs trockener, unproduktiver Husten.', severity: 'severe' },
                { name: 'Extrapulmonale Symptome', description: 'Eine Multisystembeteiligung ist charakteristisch: gastrointestinal (Durchfall, Übelkeit) und neurologisch (Kopfschmerzen, Verwirrtheit, Delirium).', severity: 'moderate' },
                { name: 'Charakteristische Zeichen', description: 'Relative Bradykardie (niedriger Puls trotz hohem Fieber) und Hyponatriämie im Labor sind häufig.', severity: 'moderate' }
              ],
              physical_exam: [
                'Hohes Fieber mit relativer Bradykardie (Faget-Zeichen)',
                'Konsolidierungszeichen bei Auskultation',
                'Leichte Hepatomegalie',
                'Zerebelläre Zeichen möglich'
              ],
              complications: ['Respiratorische Insuffizienz/ARDS', 'Akutes Nierenversagen', 'Rhabdomyolyse', 'Sepsis', 'Endokarditis', 'Enzephalopathie']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose (Linksverschiebung)', interpretation: 'Unspezifisch' },
                { test: 'Natrium', finding: 'Hyponatriämie (<130 mmol/L)', interpretation: 'SIADH - charakteristisch!' },
                { test: 'Leberenzyme', finding: 'Erhöhte AST, ALT, LDH', interpretation: 'Häufige Assoziation' },
                { test: 'CK', finding: 'Erhöht', interpretation: 'Myositis/Rhabdomyolyse' },
                { test: 'CRP/PCT', finding: 'Deutlich erhöht', interpretation: 'Schwere bakterielle Infektion' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Rasche progrediente Infiltrate, oft einseitig, lobär', significance: 'Schlechter als das klinische Bild' },
                { modality: 'Thorax-CT', finding: 'Milchglas und Konsolidierung, Pleuraerguss', significance: 'Empfindlicher' }
              ],
              microbiology: [
                { test: 'Legionellen-Antigen im Urin', finding: 'L. pneumophila Serogruppe 1 (70%)', significance: 'Schnell (<15 Min), spezifisch >95%' },
                { test: 'Kultur (BCYE-Agar)', finding: 'Legionellen-Isolierung', significance: 'Goldstandard, 3-5 Tage' },
                { test: 'PCR', finding: 'Legionellen-DNA', significance: 'Schnell, weist alle Serotypen nach' },
                { test: 'Serologie', finding: '4-facher Titeranstieg', significance: 'Retrospektive Diagnose' }
              ]
            },
            calculators: [
              {
                name: 'CURB-65 Score - Pneumonie-Schweregrad',
                items: [
                  { label: 'Verwirrtheit (Confusion)', points: 1 },
                  { label: 'Harnstoff > 7 mmol/l', points: 1 },
                  { label: 'Atemfrequenz ≥ 30/min', points: 1 },
                  { label: 'Blutdruck (Syst < 90 oder Diast ≤ 60 mmHg)', points: 1 },
                  { label: 'Alter ≥ 65 Jahre', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 1, text: 'Niedriges Risiko (Mortalität <3%). Ambulante Behandlung erwägen.' },
                  { min: 2, max: 2, text: 'Mittleres Risiko (Mortalität 9%). Krankenhausaufnahme empfohlen.' },
                  { min: 3, max: 5, text: 'Hohes Risiko (Mortalität 15-40%). Dringende Krankenhaus-/Intensivbehandlung.' }
                ]
              }
            ],
            differential: [
              { disease: 'Pneumokokken-Pneumonie', distinguishing: 'Produktiver Husten, keine GI/Neuro-Symptome, normales Na' },
              { disease: 'Mykoplasmen-Pneumonie', distinguishing: 'Jüngere, langsamere Progression, Kälteagglutinine' },
              { disease: 'Q-Fieber', distinguishing: 'Tierexposition, Hepatitis dominiert' },
              { disease: 'Psittakose', distinguishing: 'Vogelkontakt, Hepatosplenomegalie' },
              { disease: 'Influenza-Pneumonie', distinguishing: 'Saisonalität, Schnelltest, Epidemiologie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg p.o.', duration: '5-7 Tage', note: 'Erste Wahl' },
                  { drug: 'Levofloxacin', dose: '1x750mg p.o.', duration: '7-10 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x750mg i.v.', duration: '10-14 Tage', note: 'Bessere Penetration' },
                  { drug: 'Azithromycin', dose: '1x500mg i.v.', duration: '10-14 Tage', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Levofloxacin + Azithromycin', dose: 'In Kombination', duration: '14-21 Tage', note: 'In schweren Fällen' },
                  { drug: 'Rifampicin kann hinzugefügt werden', dose: '2x300mg i.v./p.o.', duration: '', note: 'Bei Immungeschwächten' }
                ]
              },
              targeted: 'Fluorchinolone oder Makrolide (Beta-Laktame sind unwirksam!)',
              supportive: ['Flüssigkeitssubstitution', 'Elektrolytkorrektur', 'Beatmung bei ARDS'],
              prevention: ['Wartung von Wassersystemen (>60°C)', 'Desinfektion von Kühltürmen', 'Nosokomiale Überwachung']
            },
            prognosis: {
              mortality: 'Insgesamt 10-15%, Immungeschwächte 40%',
              prognostic_scores: ['CURB-65', 'PSI'],
              factors: 'Späte Diagnose, ungeeignetes Antibiotikum, Immunsuppression'
            }
          },
          {
            id: 'mycoplasma',
            name: 'Mykoplasmen-Pneumonie',
            pathogen: { type: 'Bakterium', name: '<i>Mycoplasma pneumoniae</i>', gram: 'Keine Zellwand', shape: 'pleomorph' },
            epidemiology: {
              incidence: '15-20% der CAP, in Epidemien bis zu 50%',
              risk_groups: ['Schulkinder', 'Junge Erwachsene', 'Geschlossene Gemeinschaften (Wohnheime, Kasernen)'],
              seasonality: 'Herbst-Winter, kommt aber ganzjährig vor',
              transmission: 'Tröpfcheninfektion (enger Kontakt)'
            },
            pathomechanism: {
              steps: [
                'Der Erreger haftet mit seinem P1-Adhäsin fest an den Zilien der respiratorischen Epithelzellen.',
                'Das vom Bakterium produzierte Wasserstoffperoxid und das CARDS-Toxin schädigen die Zilien (Ziliostase), was zu einer gestörten mukoziliären Clearance führt.',
                'Die Entzündungsreaktion und die Zellschädigung verursachen den langwierigen Husten und die Lungenentzündung.'
              ],
              virulence_factors: ['P1-Adhäsin', 'CARDS-Toxin', 'Wasserstoffperoxid']
            },
            clinical: {
              incubation: '2-3 Wochen',
              onset: 'Langsam, schleichend',
              symptoms: [
                { name: 'Atypische Pneumonie', description: 'Allmählicher Beginn mit leichtem Fieber, Kopfschmerzen und Unwohlsein. Das Leitsymptom ist ein trockener, quälender, anfallsartiger Husten, der wochenlang anhält.', severity: 'moderate' },
                { name: '"Walking Pneumonia"', description: 'Der körperliche Befund (spärlicher Auskultationsbefund) ist oft viel milder als die ausgedehnte Entzündung im Röntgenbild.', severity: 'mild' },
                { name: 'Extrapulmonale Symptome', description: 'Hautausschläge (z.B. Erythema multiforme), hämolytische Anämie (Kälteagglutinin-Krankheit) oder neurologische Komplikationen können auftreten.', severity: 'moderate' }
              ],
              physical_exam: [
                'Oft spärlicher Auskultationsbefund',
                'Möglicherweise Rasselgeräusche, Giemen',
                'Bullöse Myringitis (Trommelfellbläschen - selten aber spezifisch)',
                'Zervikale Lymphadenopathie'
              ],
              complications: ['Stevens-Johnson-Syndrom', 'Hämolytische Anämie (Kälteagglutinine)', 'Enzephalitis', 'Myokarditis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Normale Leukozyten, evtl. leichte Leukozytose', interpretation: 'Unspezifisch' },
                { test: 'CRP', finding: 'Mäßig erhöht', interpretation: 'Atypischer Charakter' },
                { test: 'Kälteagglutinine', finding: 'Positiv (50%)', interpretation: 'Unspezifisch, aber charakteristisch' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Interstitielle Zeichnungsvermehrung, fleckige Infiltrate', significance: 'Schlechter als das klinische Bild ("Walking pneumonia")' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'DNA-Nachweis (Rachen/Sputum)', significance: 'Goldstandard, schnell' },
                { test: 'Serologie (IgM/IgG)', finding: 'Titeranstieg', significance: 'Retrospektiv, in der Akutphase oft negativ' }
              ]
            },
            differential: [
              { disease: 'Chlamydia pneumoniae', distinguishing: 'Klinisch schwer zu unterscheiden, PCR' },
              { disease: 'Virale Pneumonie', distinguishing: 'Epidemiologie, PCR' },
              { disease: 'Legionella', distinguishing: 'Schwerer, ältere Patienten, Hyponatriämie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '500mg T1, dann 250mg T2-5', duration: '5 Tage', note: 'Erste Wahl' },
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '7-10 Tage', note: 'Alternative (>8 Jahre)' },
                  { drug: 'Clarithromycin', dose: '2x500mg', duration: '7 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x500-750mg i.v./p.o.', duration: '10-14 Tage', note: 'In schweren Fällen' },
                  { drug: 'Moxifloxacin', dose: '1x400mg i.v./p.o.', duration: '10-14 Tage', note: 'Alternative' }
                ],
                icu: [
                  { drug: 'Makrolid + Beta-Laktam', dose: 'Kombination', duration: '', note: 'Zur Abdeckung von Mischinfektionen' }
                ]
              },
              targeted: 'Makrolide (Resistenz nimmt zu!), Tetracycline, Fluorchinolone',
              supportive: ['Hustenstiller', 'Fiebersenkung'],
              prevention: ['Schutz vor Tröpfcheninfektion', 'Kein Impfstoff']
            },
            prognosis: {
              mortality: 'Sehr niedrig, heilt meist von selbst',
              prognostic_scores: ['PSI (selten erforderlich)'],
              factors: 'Extrapulmonale Komplikationen'
            }
          },
          {
            id: 'chlamydia_pneumoniae',
            name: 'Chlamydia pneumoniae',
            pathogen: { type: 'Bakterium', name: '<i>Chlamydia pneumoniae</i>', gram: 'Gram-negativ (intrazellulär)', shape: 'kokkoid' },
            epidemiology: {
              incidence: '5-10% der CAP',
              risk_groups: ['Ältere', 'Patienten mit chronischen Erkrankungen', 'Geschlossene Gemeinschaften'],
              seasonality: 'Ganzjährig',
            },
            pathomechanism: {
              steps: [
                'Inhalation des Elementarkörperchens (EB)',
                'Intrazelluläre Umwandlung zum Retikularkörperchen (RB)',
                'Replikation, Einschlussbildung',
                'Zelllyse, EB-Freisetzung',
                'Ziliostase'
              ],
              virulence_factors: ['Intrazelluläre Lebensweise', 'Endotoxin-ähnliche Substanzen']
            },
            clinical: {
              incubation: '3-4 Wochen',
              onset: 'Schleichend',
              symptoms: [
                { name: 'Biphasischer Verlauf', description: 'Verläuft oft in zwei Phasen: anfänglich Pharyngitis und Laryngitis (Heiserkeit ist charakteristisch), gefolgt von der Entwicklung einer atypischen Pneumonie 1-3 Wochen später.', severity: 'moderate' },
                { name: 'Langwieriger Husten', description: 'Das charakteristischste Merkmal der Pneumonie ist ein trockener, reizender Husten, der wochen- bis monatelang anhält.', severity: 'moderate' }
              ],
              physical_exam: [
                'Pharyngitis',
                'Rasselgeräusche',
                'Zeichen einer Sinusitis'
              ],
              complications: ['Reaktive Arthritis', 'Myokarditis', 'Atherosklerose (Assoziation)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Normal', interpretation: 'Unspezifisch' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Kleine Infiltrate', significance: 'Unspezifisch' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'DNA-Nachweis', significance: 'Am empfindlichsten' },
                { test: 'Serologie', finding: 'MIF (Mikroimmunfluoreszenz)', significance: 'Goldstandard-Serologie' }
              ]
            },
            differential: [
              { disease: 'Mykoplasmen', distinguishing: 'Praktisch identisches klinisches Bild' },
              { disease: 'Viren', distinguishing: 'PCR' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '10-14 Tage', note: 'Erste Wahl' },
                  { drug: 'Azithromycin', dose: '500mg T1, 250mg T2-5', duration: '5 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x750mg', duration: '10-14 Tage', note: 'In schwereren Fällen' }
                ],
                icu: [
                  { drug: 'Levofloxacin', dose: 'i.v.', duration: '14 Tage', note: '' }
                ]
              },
              targeted: 'Tetracycline, Makrolide, Chinolone',
              supportive: ['Symptomatische Behandlung'],
              prevention: ['Kein Impfstoff']
            },
            prognosis: {
              mortality: 'Niedrig',
              prognostic_scores: ['PSI'],
              factors: 'Hohes Alter, Komorbidität'
            }
          },
          {
            id: 'psittacosis',
            name: 'Ornithose (Psittakose)',
            pathogen: { type: 'Bakterium', name: '<i>Chlamydia psittaci</i>', gram: 'Intrazellulär', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'Selten, Berufskrankheit',
              risk_groups: ['Vogelhalter (Papageien, Tauben)', 'Tierärzte', 'Geflügelarbeiter'],
              seasonality: 'Keine',
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch Inhalation von Staub, der mit getrocknetem Kot von Vögeln (insbesondere Papageien, Tauben) kontaminiert ist.',
                'Der Erreger gelangt von der Lunge in das retikuloendotheliale System (Leber, Milz), wo er sich vermehrt.',
                'Während einer sekundären Virämie kehren die Bakterien in die Lunge zurück und verursachen eine atypische, interstitielle Pneumonie.'
              ],
              virulence_factors: ['Intrazelluläres Überleben']
            },
            clinical: {
              incubation: '5-14 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Typhus-ähnliche Symptome', description: 'Plötzlich einsetzendes hohes Fieber, Schüttelfrost und quälende, starke Kopfschmerzen.', severity: 'severe' },
                { name: 'Respiratorische Symptome', description: 'Trockener, unproduktiver Husten. Der körperliche Befund ist oft spärlicher als das Röntgenbild.', severity: 'moderate' },
                { name: 'Systemische Zeichen', description: 'Häufig sind Hepatosplenomegalie und relative Bradykardie (Faget-Zeichen).', severity: 'moderate' }
              ],
              physical_exam: [
                'Relative Bradykardie (Faget-Zeichen)',
                'Splenomegalie (10-70%)',
                'Horder-Flecken (rosa Ausschlag - selten)',
                'Spärlicher Lungenbefund'
              ],
              complications: ['Endokarditis', 'Hepatitis', 'Neurologische Symptome', 'ARDS']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Normal oder Leukopenie', interpretation: 'Nicht-bakterieller Charakter' },
                { test: 'Leberenzyme', finding: 'Erhöht', interpretation: 'Häufig' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Atypische Pneumonie, fächerförmiges hiläres Infiltrat', significance: 'Charakteristisch' }
              ],
              microbiology: [
                { test: 'Serologie', finding: 'MIF, Komplementbindung', significance: '4-facher Titeranstieg' },
                { test: 'PCR', finding: 'Atemwegsprobe', significance: 'Spezifisch' }
              ]
            },
            differential: [
              { disease: 'Q-Fieber', distinguishing: 'Ähnlich, aber kein Vogelkontakt' },
              { disease: 'Legionella', distinguishing: 'Wasserexposition' },
              { disease: 'Typhus', distinguishing: 'Reise, Ausschlag' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14-21 Tage', note: 'Erste Wahl' }
                ],
                inpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg i.v.', duration: '14-21 Tage', note: 'In schweren Fällen' }
                ],
                icu: [
                  { drug: 'Doxycyclin', dose: 'i.v.', duration: '', note: '' }
                ]
              },
              targeted: 'Tetracycline (Doxycyclin), Makrolide (weniger wirksam)',
              supportive: ['Fiebersenkung'],
              prevention: ['Quarantäne von Vögeln', 'Schutzausrüstung', 'Nassreinigung']
            },
            prognosis: {
              mortality: 'Behandelt <1%, unbehandelt 10-20%',
              prognostic_scores: ['Keine'],
              factors: 'Späte Diagnose'
            }
          },
          {
            id: 'q_fever_resp',
            name: 'Q-Fieber',
            pathogen: { type: 'Bakterium', name: '<i>Coxiella burnetii</i>', gram: 'Gram-negativ (intrazellulär)', shape: 'Kokkobazillus' },
            epidemiology: {
              incidence: 'Zoonose, Berufskrankheit',
              risk_groups: ['Viehzüchter', 'Schlachthofarbeiter', 'Tierärzte'],
              seasonality: 'Frühling (Ablammsaison)',
              transmission: 'Aerosol (Plazenta, Fruchtwasser, Milch, Kotstaub)'
            },
            pathomechanism: {
              steps: [
                'Die Infektion erfolgt durch Inhalation hochinfektiöser Aerosole von tierischen Geburtsprodukten (Plazenta, Fruchtwasser).',
                'Der Erreger gelangt in die Alveolarmakrophagen, wo er nicht nur überlebt, sondern sich auch in den sauren Phagosomen vermehrt.',
                'Er streut über den Blutkreislauf in Leber und Knochenmark.',
                'Der Körper versucht, die Infektion durch die Bildung charakteristischer "Doughnut"-förmiger Granulome einzudämmen.',
                'Die Krankheit kann akut oder chronisch (hauptsächlich als Endokarditis) verlaufen.'
              ],
              virulence_factors: ['Sporenähnliche Form (resistent)', 'LPS-Phasenvariation']
            },
            clinical: {
              incubation: '2-3 Wochen',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Akutes Q-Fieber', description: 'Präsentiert sich mit einem plötzlichen Beginn von hohem Fieber, starken retroorbitalen Kopfschmerzen und grippeähnlichen Symptomen. Eine atypische Pneumonie (milder Husten) und eine granulomatöse Hepatitis (erhöhte Leberenzyme) sind häufig.', severity: 'moderate' },
                { name: 'Chronisches Q-Fieber', description: 'Entwickelt sich Monate bis Jahre später, hauptsächlich bei Patienten mit vorbestehenden Herzklappenfehlern oder Immunsuppression. Die häufigste Manifestation ist eine kultur-negative Endokarditis.', severity: 'severe' }
              ],
              physical_exam: [
                'Hepatomegalie',
                'Splenomegalie',
                'Relative Bradykardie'
              ],
              complications: ['Chronisches Q-Fieber (Endokarditis)', 'Osteomyelitis', 'Chronische Hepatitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Leberenzyme', finding: 'Erhöht', interpretation: 'Hepatitis' },
                { test: 'Thrombozytopenie', finding: 'Leicht', interpretation: 'Häufig' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Runde Opazitäten, multipel', significance: 'Pneumonie' },
                { modality: 'Echo', finding: 'Vegetation', significance: 'Endokarditis (chronisch)' }
              ],
              microbiology: [
                { test: 'Serologie (IF)', finding: 'Phase II (akut), Phase I (chronisch)', significance: 'Diagnostisch' },
                { test: 'PCR', finding: 'Aus Blut', significance: 'In der Frühphase' }
              ]
            },
            differential: [
              { disease: 'Brucellose', distinguishing: 'Undulierendes Fieber, Milchprodukte' },
              { disease: 'Influenza', distinguishing: 'Saisonalität, Atemwegssymptome dominieren' },
              { disease: 'Virushepatitis', distinguishing: 'Serologie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14 Tage', note: 'Akutes Q-Fieber' }
                ],
                inpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14 Tage', note: '' }
                ],
                icu: [
                  { drug: 'Doxycyclin + Hydroxychloroquin', dose: 'Langfristig', duration: '18-24 Monate', note: 'Chronisches Q-Fieber (Endokarditis)' }
                ]
              },
              targeted: 'Doxycyclin',
              supportive: ['Fiebersenkung'],
              prevention: ['Schutzausrüstung beim Ablammen', 'Pasteurisierung von Milch', 'Impfstoff (Australien)']
            },
            prognosis: {
              mortality: 'Akut <2%, Chronisch (Endokarditis) hoch bei Nichtbehandlung',
              prognostic_scores: ['Keine'],
              factors: 'Klappenfehler, Immunsuppression'
            }
          }
        ]
      },
      viral_respiratory: {
        name: 'Virale Atemwegsinfektionen',
        icon: window.diseaseMetadata.viral_respiratory.icon,
        color: window.diseaseMetadata.viral_respiratory.color,
        diseases: [
          {
            id: 'influenza',
            name: 'Influenza',
            pathogen: { type: 'Virus', name: '<i>Influenza A/B/C Virus</i>', gram: 'RNA-Virus, Orthomyxoviridae', shape: 'helikal' },
            epidemiology: {
              incidence: 'Saisonale Epidemie: 5-20% der Bevölkerung/Jahr, Pandemien: bis zu 50%',
              risk_groups: ['Personen über 65 Jahre', 'Kinder unter 5 Jahren', 'Schwangere', 'Patienten mit chronischen Erkrankungen', 'Gesundheitspersonal', 'Immungeschwächte'],
              seasonality: 'November-März (Nordhalbkugel)',
              transmission: 'Tröpfcheninfektion, Kontakt (1-2 Meter), Fomiten'
            },
            pathomechanism: {
              steps: [
                'Das Virus bindet mit seinem Hämagglutinin (HA) an die respiratorischen Epithelzellen und dringt in sie ein.',
                'Es repliziert sich in der Zelle und wird dann mit Hilfe der Neuraminidase (NA) freigesetzt, um neue Zellen zu infizieren.',
                'Die Virusinfektion führt zur Zerstörung der respiratorischen Epithelzellen und zur Schädigung der Zilien, was die Reinigung der Atemwege beeinträchtigt.',
                'Die starke Immunantwort des Körpers (Zytokinsturm) verursacht systemische Symptome wie Fieber und Muskelschmerzen.'
              ],
              virulence_factors: ['Hämagglutinin (H1-18)', 'Neuraminidase (N1-11)', 'NS1-Protein (IFN-Antagonist)', 'PB1-F2 (pro-apoptotisch)']
            },
            clinical: {
              incubation: '1-4 Tage (durchschnittlich 2 Tage)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Plötzlicher Beginn', description: 'Beginnt mit hohem Fieber (>38°C), Schüttelfrost, starken Kopfschmerzen und Muskelschmerzen (Myalgie).', severity: 'severe' },
                { name: 'Respiratorische Symptome', description: 'Ein trockener, quälender Husten und Halsschmerzen sind charakteristisch.', severity: 'moderate' },
                { name: 'Allgemeine Symptome', description: 'Ausgeprägte Schwäche, Krankheitsgefühl (Prostration) und Appetitlosigkeit.', severity: 'moderate' }
              ],
              physical_exam: [
                'Fieberhaft, krankes Aussehen',
                'Konjunktivitis',
                'Pharynxhyperämie',
                'Reiner Auskultationsbefund (unkompliziert)',
                'Tachykardie'
              ],
              complications: ['Primäre Influenza-Pneumonie', 'Sekundäre bakterielle Pneumonie', 'Myokarditis', 'Enzephalitis', 'Reye-Syndrom (Aspirin!)', 'Myositis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose oder normal, Lymphopenie', interpretation: 'Typisch für Virusinfektion' },
                { test: 'CRP', finding: 'Mäßig erhöht', interpretation: 'Niedriger als bei bakteriell' },
                { test: 'PCT', finding: 'Normal (<0.25)', interpretation: 'Ausschluss einer bakteriellen Superinfektion' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Normales oder interstitielles Muster', significance: 'Ausschluss einer Pneumonie' },
                { modality: 'CT', finding: 'Milchglas-Opazitäten', significance: 'Virale Pneumonie' }
              ],
              microbiology: [
                { test: 'Schnell-Antigentest (RAT)', finding: 'Influenza A/B', significance: 'Schnell (15 Min), geringe Sensitivität (50-70%)' },
                { test: 'RT-PCR', finding: 'Viraler RNA-Nachweis', significance: 'Goldstandard, Subtypisierung' },
                { test: 'Viruskultur', finding: 'Isolierung', significance: 'Epidemiologisch/Surveillance' }
              ]
            },
            differential: [
              { disease: 'COVID-19', distinguishing: 'Geruchs-/Geschmacksverlust, PCR' },
              { disease: 'RSV-Infektion', distinguishing: 'Kinder, Ältere, Bronchiolitis' },
              { disease: 'Adenovirus-Infektion', distinguishing: 'Konjunktivitis, Pharyngitis, längere Fieberperiode' },
              { disease: 'Bakterielle Pneumonie', distinguishing: 'Produktiver Auswurf, lokalisierte Befunde, hohes PCT' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Oseltamivir', dose: '2x75mg p.o.', duration: '5 Tage', note: 'Innerhalb von 48 Stunden nach Symptombeginn!' },
                  { drug: 'Baloxavir', dose: '1x40-80mg p.o.', duration: 'Einzeldosis', note: '>80kg: 80mg' }
                ],
                inpatient: [
                  { drug: 'Oseltamivir', dose: '2x75mg p.o./NG', duration: '5-10 Tage', note: 'Länger in schweren Fällen' },
                  { drug: 'Peramivir', dose: '1x600mg i.v.', duration: 'Einmalig oder wiederholt', note: 'Wenn p.o. nicht toleriert' }
                ],
                icu: [
                  { drug: 'Oseltamivir', dose: '2x150mg p.o./NG', duration: '10 Tage', note: 'Höhere Dosis kann erwogen werden' },
                  { drug: '+ Empirische AB', dose: 'CAP-Abdeckung', duration: '', note: 'Bakterielle Superinfektion' }
                ]
              },
              targeted: 'Neuraminidase-Hemmer (Oseltamivir, Zanamivir, Peramivir) oder Cap-abhängiger Endonuklease-Hemmer (Baloxavir)',
              supportive: ['Fiebersenkung (Paracetamol!)', 'Flüssigkeitssubstitution', 'Sauerstoff', 'Beatmung bei ARDS'],
              prevention: ['Jährliche Influenza-Impfung', 'Händehygiene', 'Patientenisolierung', 'Chemoprophylaxe (Oseltamivir 1x75mg)']
            },
            prognosis: {
              mortality: 'Insgesamt 0.1%, >65 Jahre 1-2%, Pandemiestamm höher',
              prognostic_scores: ['Keine spezifischen'],
              factors: 'Alter, Komorbidität, Virussubtyp, Impfstatus'
            }
          },
          {
            id: 'covid19',
            name: 'COVID-19',
            pathogen: { type: 'Virus', name: '<i>SARS-CoV-2</i>', gram: 'RNA-Virus, Coronaviridae', shape: 'sphärisch, Spike-Proteine' },
            epidemiology: {
              incidence: 'Pandemie ab 2020, wird endemisch',
              risk_groups: ['Personen über 65 Jahre', 'Adipöse Patienten (BMI>30)', 'Diabetes', 'Herz-Kreislauf-Erkrankungen', 'Immungeschwächte', 'Chronische Lungenkrankheit'],
              seasonality: 'Wintergipfel, aber ganzjährig',
              transmission: 'Respiratorisch (Aerosol + Tröpfchen), Kontakt, fäkal-oral selten'
            },
            pathomechanism: {
              steps: [
                'Das Virus bindet mit seinem Spike (S)-Protein an den ACE2-Rezeptor auf der Zelloberfläche, der in vielen Organen (Lunge, Herz, Gefäße, Darm) vorkommt.',
                'Nach dem Eintritt repliziert sich das Virus in der Zelle (virale Phase).',
                'In schweren Fällen kann in der zweiten Krankheitswoche eine übermäßige Immunantwort, der sogenannte Zytokinsturm, auftreten.',
                'Diese Hyperinflammation führt zu systemischer Endothelschädigung, Mikrothrombosen und in der Lunge zum akuten Atemnotsyndrom (ARDS), was die Grundlage des schweren Verlaufs ist.'
              ],
              virulence_factors: ['Spike-Protein', 'NSP1 (Host-Shutdown)', 'ORF8 (Immunmodulation)', 'Nukleokapsid']
            },
            clinical: {
              incubation: '2-14 Tage (Median 5 Tage, Omikron 3 Tage)',
              onset: 'Variabel',
              symptoms: [
                { name: 'Häufige Symptome', description: 'Fieber, trockener Husten, Müdigkeit und Muskelschmerzen (Myalgie).', severity: 'moderate' },
                { name: 'Charakteristische Symptome', description: 'Der Verlust des Geruchs- und Geschmackssinns (Anosmie, Dysgeusie) kann ein frühes, spezifisches Zeichen sein.', severity: 'mild' },
                { name: 'Schwere Symptome', description: 'Atemnot (Dyspnoe), Brustschmerzen und Hypoxämie (niedriger Blutsauerstoff), die zu ARDS führen können.', severity: 'severe' }
              ],
              physical_exam: [
                'Fieber, Tachypnoe',
                'SpO2 vermindert (stille Hypoxie!)',
                'Bilaterale Rasselgeräusche',
                'Tachykardie',
                'Kein spezifisches physikalisches Zeichen'
              ],
              complications: ['ARDS', 'Lungenembolie', 'Myokarditis', 'Akutes Nierenversagen', 'Schlaganfall', 'MIS (Kinder)', 'Long COVID']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Lymphopenie, normale/verminderte Thrombozyten', interpretation: 'Schweregrad-Marker' },
                { test: 'D-Dimer', finding: 'Erhöht', interpretation: 'Thrombotisches Risiko, schlechte Prognose' },
                { test: 'Ferritin', finding: 'Erhöht', interpretation: 'Marker für Zytokinsturm' },
                { test: 'CRP/IL-6', finding: 'Erhöht', interpretation: 'Ausmaß der Entzündung' },
                { test: 'LDH, Troponin', finding: 'Erhöht in schweren Fällen', interpretation: 'Gewebeschaden' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Bilaterale periphere Infiltrate', significance: 'Weniger empfindlich' },
                { modality: 'Thorax-CT', finding: 'Milchglas-Opazitäten, Crazy Paving, Konsolidierung', significance: 'Charakteristisches Muster' }
              ],
              microbiology: [
                { test: 'RT-PCR (Nasopharynx/Oropharynx)', finding: 'SARS-CoV-2 RNA', significance: 'Goldstandard, Ct-Wert' },
                { test: 'Schnell-Antigentest', finding: 'Nukleokapsid-Protein', significance: 'Schnell, zeigt Infektiosität an' },
                { test: 'Serologie', finding: 'Anti-S, Anti-N IgG/IgM', significance: 'Durchgemachte Infektion, Impfwirksamkeit' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Schnellerer Verlauf, Myalgie dominiert, PCR' },
              { disease: 'Bakterielle Pneumonie', distinguishing: 'Hohes PCT, lobäres Infiltrat' },
              { disease: 'Herzinsuffizienz', distinguishing: 'Kardiale Anamnese, BNP, beidseitig' },
              { disease: 'Lungenembolie', distinguishing: 'D-Dimer, CTPA' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Paxlovid (Nirmatrelvir/Ritonavir)', dose: '2x300/100mg p.o.', duration: '5 Tage', note: 'Früh, Hochrisiko, Wechselwirkungen!' },
                  { drug: 'Molnupiravir', dose: '2x800mg p.o.', duration: '5 Tage', note: 'Alternative, wenn Paxlovid kontraindiziert ist' }
                ],
                inpatient: [
                  { drug: 'Remdesivir', dose: '200mg i.v. T1, dann 100mg/Tag', duration: '5 Tage (max 10)', note: 'Wenn O2 benötigt wird' },
                  { drug: 'Dexamethason', dose: '6mg/Tag i.v./p.o.', duration: '10 Tage', note: 'Nur bei O2-Bedarf/Beatmung!' }
                ],
                icu: [
                  { drug: 'Dexamethason', dose: '6-20mg/Tag', duration: '10 Tage', note: 'Zytokinsturm' },
                  { drug: 'Tocilizumab', dose: '8mg/kg i.v. Einzeldosis', duration: '', note: 'IL-6-Inhibitor, rasche Verschlechterung' },
                  { drug: 'LMWH', dose: 'Therapeutische Dosis', duration: '', note: 'Thromboseprophylaxe/-therapie' }
                ]
              },
              targeted: 'Antiviral (Paxlovid, Remdesivir) früh; Immunmodulatorisch (Steroid, Tocilizumab) in hypoxischer Phase',
              supportive: ['Sauerstoff (Bauchlage!)', 'HFNC/NIV', 'Invasive Beatmung', 'ECMO'],
              prevention: ['mRNA-Impfstoffe (Pfizer, Moderna)', 'Händehygiene', 'Maskentragen', 'Isolierung']
            },
            prognosis: {
              mortality: 'Omikron <1%, früher 2-5%, ITS 20-40%',
              prognostic_scores: ['4C Mortality Score', 'NEWS2'],
              factors: 'Alter, Komorbidität, Lymphopenie, D-Dimer, Ferritin, Impfstatus'
            }
          }
        ]
      },
      cardiovascular: {
        name: 'Kardiovaskuläre Infektionen',
        icon: window.diseaseMetadata.cardiovascular.icon,
        color: window.diseaseMetadata.cardiovascular.color,
        diseases: [
          {
            id: 'endocarditis',
            name: 'Infektiöse Endokarditis',
            pathogen: { type: 'Bakterium', name: '<i>Staphylococcus aureus, Viridans-Streptokokken</i>', gram: 'Gram-positiv', shape: 'Kokken' },
            epidemiology: {
              incidence: '3-10/100.000 pro Jahr',
              risk_groups: ['Klappenfehler', 'Herzklappenprothese', 'i.v.-Drogenkonsumenten', 'Angeborene Herzfehler', 'Frühere Endokarditis'],
              seasonality: 'Keine',
              transmission: 'Bakteriämie (zahnärztlicher Eingriff, Hautinfektion, Katheter)'
            },
            pathomechanism: {
              steps: [
                'Der Prozess beginnt mit einer Schädigung des Herzklappenendothels, an der ein steriler Thrombus (nichtbakterielle thrombotische Endokarditis, NBTE) haftet.',
                'Während einer vorübergehenden Bakteriämie (z.B. zahnärztlicher Eingriff) haften zirkulierende Erreger an dieser geschädigten Oberfläche.',
                'Die Bakterien vermehren sich, bilden einen Biofilm und eine Vegetation aus Bakterien, Fibrin und Thrombozyten.',
                'Diese Vegetation schädigt die Klappe (verursacht Insuffizienz), und Fragmente können abreißen und septische Embolien in verschiedene Körperteile (z.B. Gehirn, Milz) verursachen.'
              ],
              virulence_factors: ['Adhäsine (MSCRAMM)', 'Biofilmbildung', 'Toxine']
            },
            clinical: {
              incubation: 'Tage (akut) oder Wochen (subakut)',
              onset: 'Variabel',
              symptoms: [
                { name: 'Allgemeine Symptome', description: 'Die häufigsten sind Fieber, Schüttelfrost, Nachtschweiß und Gewichtsverlust. Das Bild ist oft das eines Fiebers unklarer Genese (FUO).', severity: 'moderate' },
                { name: 'Kardiale Symptome', description: 'Auftreten eines neuen oder veränderten Herzgeräuschs oder Symptome einer Herzinsuffizienz (Atemnot, Ödeme) aufgrund von Klappenschäden.', severity: 'severe' },
                { name: 'Embolische Phänomene', description: 'Von der Vegetation abbrechende Fragmente können septische Embolien verursachen: Schlaganfall, Milz- oder Niereninfarkt, Hautmanifestationen (Janeway-Läsionen, Splitterblutungen).', severity: 'severe' }
              ],
              physical_exam: [
                'Fieber',
                'Neues Herzgeräusch (besonders Regurgitation)',
                'Zeichen der Herzinsuffizienz (S3, Stauung)',
                'Splenomegalie (15-30%)',
                'Periphere Zeichen (Splitterblutungen, Osler, Janeway, Roth - selten)'
              ],
              complications: ['Herzinsuffizienz (Klappeninsuffizienz)', 'Septische Embolie (Gehirn, Milz, Niere)', 'Abszess (Ring)', 'Glomerulonephritis']
            },
            diagnostics: {
              criteria: [
                { name: 'Hauptkriterien (ESC 2023)', items: ['Positive Blutkultur (typischer Erreger: S. aureus, Enterococcus, Viridans-Streptokokken, S. gallolyticus, HACEK) aus 2 separaten Proben', 'Positiver Bildgebungsbefund (Echo/CT/PET-CT): Vegetation, Abszess, Pseudoaneurysma, Fistel, Perforation, neue Dehiszenz', 'Paravalvuläre Läsion im CT', 'Abnormale Aktivität um Klappenprothese (PET/CT oder SPECT/CT)', 'Positive Coxiella burnetii Serologie (Phase I IgG Titer >1:800)'] },
                { name: 'Nebenkriterien', items: ['Prädisposition (Herzfehler, Klappenprothese, frühere IE)', 'Fieber >38°C', 'Vaskuläre Phänomene (Embolie, septischer Infarkt, mykotisches Aneurysma, Janeway, bildgebend bestätigte Läsionen)', 'Immunologische Phänomene (Osler-Knötchen, Roth-Flecken, RF+, Glomerulonephritis)', 'Mikrobiologischer Nachweis (positive Kultur, die kein Hauptkriterium erfüllt)'] },
                { name: 'Diagnose (Definitiv)', items: ['2 Haupt', '1 Haupt + 3 Neben', '5 Neben'] }
              ],
              laboratory: [
                { test: 'Blutkultur', finding: 'Positiv (kontinuierliche Bakteriämie)', interpretation: 'DUKE-Hauptkriterium (3 Sets!)' },
                { test: 'Blutbild', finding: 'Anämie, Leukozytose', interpretation: 'Chronische Entzündung' },
                { test: 'CRP/BSG', finding: 'Erhöht', interpretation: 'Entzündung' }
              ],
              imaging: [
                { modality: 'Echokardiographie (TTE/TEE)', finding: 'Vegetation, Abszess, Dehiszenz', significance: 'Primäre Bildgebung' },
                { modality: 'Herz-CT / PET-CT', finding: 'Paravalvuläre Ausbreitung, Embolie', significance: 'Ergänzend (ESC 2023)' }
              ],
              microbiology: [
                { test: 'Blutkultur', finding: 'Erregeridentifikation', significance: 'Basis der Therapie' },
                { test: 'Serologie', finding: 'Coxiella, Bartonella', significance: 'Wenn Blutkultur negativ ist' }
              ]
            },
            differential: [
              { disease: 'Rheumatisches Fieber', distinguishing: 'Jones-Kriterien, Strep.-Anamnese' },
              { disease: 'SLE (Libman-Sacks)', distinguishing: 'Autoantikörper, sterile Vegetation' },
              { disease: 'Antiphospholipid-Syndrom', distinguishing: 'Thrombosen, Labor' }
            ],
            therapy: {
              guidelines: ['ESC 2023 Guidelines for the management of endocarditis'],
              empirical: {
                native_community: {
                  title: 'Empirisch: Nativklappe oder späte Klappenprothese (>12 Mo)',
                  drugs: [
                    { drug: 'Ampicillin + (Flu)cloxacillin + Gentamicin', dose: '12g + 12g + 3mg/kg i.v.', duration: '4-6 Wochen', note: 'IB-Empfehlung. Gentamicin nur in den ersten Tagen/bis Erreger bekannt ist.' },
                    { drug: 'Vancomycin + Gentamicin', dose: '30-60mg/kg + 3mg/kg i.v.', duration: '4-6 Wochen', note: 'IB-Empfehlung. Bei Penicillinallergie.' },
                    { drug: 'Daptomycin + Gentamicin', dose: '10mg/kg + 3mg/kg i.v.', duration: '4-6 Wochen', note: 'IB-Empfehlung. Alternative.' }
                  ]
                },
                prosthetic_early: {
                  title: 'Empirisch: Frühe Klappenprothese (<12 Mo) oder nosokomial',
                  drugs: [
                    { drug: 'Vancomycin + Gentamicin + Rifampicin', dose: '30-60mg/kg + 3mg/kg + 900-1200mg i.v./p.o.', duration: '6 Wochen', note: 'IB-Empfehlung. Rifampicin erst, wenn Bakteriämie beseitigt ist (Resistenzvermeidung).' }
                  ]
                },
                targeted_staph: {
                  title: 'Gezielt: Staphylococcus spp.',
                  drugs: [
                    { drug: 'MSSA: (Flu)cloxacillin', dose: '12g/Tag i.v.', duration: '4-6 Wochen', note: 'IB-Empfehlung. Penicillinallergie (nicht anaphylaktisch): Cefazolin 6g/Tag (IB).' },
                    { drug: 'MRSA: Vancomycin', dose: '30-60mg/kg/Tag i.v.', duration: '4-6 Wochen', note: 'IB-Empfehlung. Alternative: Daptomycin 10mg/kg (IB).' },
                    { drug: 'Klappenprothese (PVE): + Rifampicin + Gentamicin', dose: 'Zusatz', duration: 'Rif: 6 Wochen, Gent: 2 Wochen', note: 'IB-Empfehlung. Rifampicin 900-1200mg, Gentamicin 3mg/kg.' }
                  ]
                },
                targeted_strep: {
                  title: 'Gezielt: Streptococcus spp. (Oral/Darm)',
                  drugs: [
                    { drug: 'Penicillin G oder Amoxicillin oder Ceftriaxon', dose: 'Standard-Hochdosis', duration: '4 Wochen', note: 'IB-Empfehlung. Penicillin-empfindliche Stämme.' },
                    { drug: 'Kombination mit Gentamicin', dose: 'Beta-Laktam + 3mg/kg Gentamicin', duration: '2 Wochen', note: 'IB-Empfehlung. Kann Kurs nur bei unkomplizierter Nativklappe verkürzen.' },
                    { drug: 'Penicillinallergie: Vancomycin', dose: '30mg/kg/Tag i.v.', duration: '4 Wochen', note: 'IB-Empfehlung.' }
                  ]
                },
                targeted_entero: {
                  title: 'Gezielt: Enterococcus spp.',
                  drugs: [
                    { drug: 'Amoxicillin + Ceftriaxon', dose: '200mg/kg + 4g/Tag i.v.', duration: '6 Wochen', note: 'IB-Empfehlung. Bevorzugt für E. faecalis (weniger Nephrotoxizität als mit Gentamicin).' },
                    { drug: 'Ampicillin + Gentamicin', dose: '12g + 3mg/kg i.v.', duration: '4-6 Wochen', note: 'IB-Empfehlung. Traditionelle Therapie.' },
                    { drug: 'Vancomycin + Gentamicin', dose: '30mg/kg + 3mg/kg i.v.', duration: '6 Wochen', note: 'IB-Empfehlung. Bei Beta-Laktam-Resistenz/Allergie.' }
                  ]
                },
                culture_neg: {
                  title: 'Kultur-negative IE',
                  drugs: [
                    { drug: 'Coxiella burnetii', dose: 'Doxycyclin + Hydroxychloroquin', duration: '>18 Monate', note: 'IB-Empfehlung. Q-Fieber-Endokarditis.' },
                    { drug: 'Bartonella spp.', dose: 'Doxycyclin + Gentamicin (2 Wochen)', duration: '6 Wochen', note: 'IB-Empfehlung.' },
                    { drug: 'Brucella spp.', dose: 'Doxycyclin + Streptomycin + Rifampicin', duration: '3-6 Monate', note: 'IB-Empfehlung.' }
                  ]
                }
              },
              targeted: 'Siehe detaillierte Protokolle oben. Bei stabilen Patienten (Linksherz-IE) ist eine orale Umstellung nach 10-14 Tagen i.v.-Therapie möglich (POET-Studie, IB-Empfehlung), wenn TEE Abszess ausgeschlossen hat und der Patient kooperativ ist.',
              supportive: ['Herzinsuffizienz-Management (IB)', 'Embolieprophylaxe (Antikoagulation kann wegen Blutungsrisiko kontraindiziert sein!)', 'Fokussuche (Ganzkörper-CT/PET-CT)'],
              prevention: ['Antibiotikaprophylaxe (Amoxicillin 2g oder Clindamycin 600mg) NUR bei Hochrisikopatienten (Klappenprothese, frühere IE, zyanotisches angeborenes Vitium) vor zahnärztlichen Eingriffen (IIa)', 'Mundhygiene (IB)']
            },
            prognosis: {
              mortality: 'Im Krankenhaus: 15-20%, 1-Jahres: 30-40%',
              prognostic_scores: ['Keine spezifischen'],
              factors: 'S. aureus, Herzinsuffizienz, hohes Alter, Klappenprothese'
            }
          },
          {
            id: 'myocarditis',
            name: 'Myokarditis',
            pathogen: { type: 'Virus', name: '<i>Coxsackie B, Adenovirus, Parvovirus B19</i>', gram: 'RNA/DNA-Viren', shape: 'variabel' },
            epidemiology: {
              incidence: 'Schwer abzuschätzen (viele milde Fälle), 10-20% des plötzlichen Herztods bei jungen Menschen',
              risk_groups: ['Junge Erwachsene', 'Männer', 'Immungeschwächte'],
              seasonality: 'Virusabhängig (z.B. Enterovirus Sommer-Herbst)',
              transmission: 'Fäkal-oral, Tröpfchen (erregerabhängig)'
            },
            pathomechanism: {
              steps: [
                'Die Infektion beginnt mit einer Virusinfektion, bei der das Virus die Herzmuskelzellen direkt schädigen kann.',
                'Die spätere, schwerere Phase der Krankheit wird durch die übermäßige Immunantwort des Körpers verursacht. T-Zellen und Autoantikörper greifen die Herzmuskelzellen an (molekulare Mimikry), was zu ausgedehnten Entzündungen, Nekrosen und einer myokardialen Dysfunktion führt.',
                'Während der Heilung kann es zu Vernarbungen (Fibrose) kommen, die zu einer dilatativen Kardiomyopathie (DCM) und chronischer Herzinsuffizienz führen können.'
              ],
              virulence_factors: ['Protease 2A (Dystrophin-Spaltung)', 'Rezeptorbindung (CAR)']
            },
            clinical: {
              incubation: '1-2 Wochen nach Virusinfektion',
              onset: 'Variabel (von asymptomatisch bis fulminant)',
              symptoms: [
                { name: 'Virales Prodrom', description: 'Den kardialen Symptomen geht oft eine fieberhafte, respiratorische oder gastrointestinale Infektion einige Tage voraus.', severity: 'mild' },
                { name: 'Herzinsuffizienzsymptome', description: 'Müdigkeit, Belastungsdyspnoe, dann Ruhedyspnoe, Ödeme.', severity: 'severe' },
                { name: 'Brustschmerzen und Arrhythmie', description: 'Atypische, stechende Brustschmerzen (Myoperikarditis) und Herzklopfen (Palpitationen) aufgrund von Arrhythmien sind häufig.', severity: 'moderate' }
              ],
              physical_exam: [
                'Tachykardie (unverhältnismäßig zum Fieber)',
                'Zeichen der Herzinsuffizienz (S3, gestaute Halsvenen, Ödeme)',
                'Perikardreiben (bei Myoperikarditis)',
                'Arrhythmie (Extrasystolen)'
              ],
              complications: ['Dilatative Kardiomyopathie (DCM)', 'Herzinsuffizienz', 'Tödliche Arrhythmien', 'Plötzlicher Herztod']
            },
            diagnostics: {
              laboratory: [
                { test: 'Troponin (hs-cTn)', finding: 'Erhöht', interpretation: 'Myokardnekrose (hohe Sensitivität)' },
                { test: 'NT-proBNP', finding: 'Erhöht', interpretation: 'Herzinsuffizienz / prognostischer Marker' },
                { test: 'CRP/BSG', finding: 'Erhöht', interpretation: 'Entzündung' },
              ],
              imaging: [
                { modality: 'EKG', finding: 'ST-T-Veränderungen, AV-Block, QRS-Verbreiterung', significance: 'Prognostischer Wert' },
                { modality: 'Echokardiographie', finding: 'Globale/regionale Wandbewegungsstörungen, verminderte EF, Perikarderguss', significance: 'Basisuntersuchung' },
                { modality: 'Herz-MRT (CMR)', finding: 'Lake-Louise-Kriterien (T1/T2-Signale, LGE)', significance: 'Goldstandard nicht-invasive Diagnose (ESC 2023)' }
              ],
              microbiology: [
                { test: 'Endomyokardbiopsie (EMB)', finding: 'Entzündung + Virus-PCR', significance: 'Goldstandard. Indiziert bei: fulminantem Verlauf, nicht ansprechender HI, spezifischem Verdacht (Riesenzell) (ESC 2023)' },
                { test: 'Virusserologie', finding: 'Nicht routinemäßig empfohlen', significance: 'Geringer diagnostischer Wert (außer Hepatitis, HIV, Borrelien)' }
              ]
            },
            differential: [
              { disease: 'Akutes Koronarsyndrom (ACS)', distinguishing: 'Koronarangiographie negativ, junger Patient' },
              { disease: 'Perikarditis', distinguishing: 'Troponin weniger erhöht, keine Wandbewegungsstörungen' },
              { disease: 'Angst/Panik', distinguishing: 'EKG/Troponin negativ' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Körperliche Schonung', dose: 'Kein Sport', duration: '3-6 Monate', note: 'Entscheidend! (ESC 2023)' },
                  { drug: 'NSAID (z.B. Ibuprofen)', dose: 'Symptomatisch', duration: 'Kurzzeitig', note: 'Nur bei Brustschmerzen, wenn EF erhalten ist!' }
                ],
                inpatient: [
                  { drug: 'Herzinsuffizienztherapie (GDMT)', dose: 'ACEi/ARB/ARNI + BB + MRA + SGLT2i', duration: 'Chronisch', note: 'Wenn LVEF reduziert ist (ESC 2023)' },
                  { drug: 'Antiarrhythmika', dose: 'Amiodaron', duration: '', note: 'Bei schweren Arrhythmien' }
                ],
                icu: [
                  { drug: 'Mechanische Kreislaufunterstützung (MCS)', dose: 'VA-ECMO, Impella', duration: '', note: 'Bei fulminanter Myokarditis / kardiogenem Schock' },
                  { drug: 'Hochdosis-Steroide', dose: 'Methylprednisolon', duration: '', note: 'Nur bei nachgewiesenen autoimmunen/Riesenzell-Formen (Virus negativ!)' }
                ]
              },
              targeted: 'Immunsuppression (Prednisolon + Azathioprin) NUR bei bioptisch nachgewiesener virusnegativer (PCR-) lymphozytärer, Riesenzell- oder Sarkoidose-bedingter Myokarditis (ESC 2023). Kontraindiziert bei aktiver Virusinfektion!',
              supportive: ['Strenge körperliche Schonung (3-6 Monate) bis zum Abklingen der Entzündung', 'Herzinsuffizienz-Management', 'ICD-Implantation (wenn Entzündung abgeklungen und EF weiterhin niedrig)'],
              prevention: ['Impfungen (Influenza, COVID, Masern)', 'Hygiene']
            },
            prognosis: {
              mortality: 'Variabel: oft spontane Erholung, hoch in fulminanten Fällen. 50% entwickeln DCM.',
              prognostic_scores: ['Keine'],
              factors: 'Initiale EF, QRS-Breite, Troponin-Spiegel'
            }
          },
          {
            id: 'pericarditis',
            name: 'Akute Perikarditis',
            pathogen: { type: 'Virus/Idiopathisch', name: '<i>Coxsackie, Echovirus, Adenovirus, CMV, EBV</i>', gram: 'Variabel', shape: '-' },
            epidemiology: {
              incidence: 'Häufig (0.1% der Hospitalisierten)',
              risk_groups: ['Männer (20-50 Jahre)', 'Post-Kardiotomie', 'Autoimmunpatienten'],
              seasonality: 'Virusabhängig',
              transmission: 'Tröpfchen (viral)'
            },
            pathomechanism: {
              steps: [
                'Entzündung der Herzbeutelblätter (Perikard), meist infolge einer Virusinfektion.',
                'Aufgrund der Entzündung lagert sich Fibrin zwischen den Blättern ab, was das charakteristische Reibegeräusch (trockene Perikarditis) verursacht.',
                'Es kann sich auch Flüssigkeit ansammeln (Perikarderguss), die bei schneller oder großer Ansammlung das Herz komprimieren und eine Herzbeuteltamponade verursachen kann.'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Charakteristischer Brustschmerz', description: 'Scharfer, stechender Brustschmerz, der sich beim Einatmen und im Liegen verschlimmert und beim Vorbeugen bessert.', severity: 'severe' },
                { name: 'Andere Symptome', description: 'Wird oft von leichtem Fieber, Unwohlsein und Atemnot begleitet.', severity: 'mild' }
              ],
              physical_exam: [
                'Perikardreiben (systolische und diastolische Komponenten)',
                'Gedämpfte Herztöne (Erguss)',
                'Beck-Trias (bei Tamponade): Hypotonie, gedämpfte Herztöne, gestaute Halsvenen'
              ],
              complications: ['Perikardtamponade', 'Konstriktive Perikarditis', 'Rezidivierende Perikarditis (15-30%)']
            },
            diagnostics: {
              criteria: [
                { name: 'Diagnose (2 von 4)', items: ['Brustschmerzen (typisch)', 'Perikardreiben', 'EKG-Veränderungen (ST-Hebung, PR-Senkung)', 'Perikarderguss (Echo)'] }
              ],
              laboratory: [
                { test: 'CRP/BSG', finding: 'Erhöht', interpretation: 'Entzündungsaktivität (auch zur Verlaufskontrolle!)' },
                { test: 'Troponin', finding: 'Normal oder leicht erhöht', interpretation: 'Ausschluss einer Myokarditis (wenn hoch: Myoperikarditis)' },
                { test: 'Blutbild', finding: 'Leukozytose', interpretation: 'Entzündung' }
              ],
              imaging: [
                { modality: 'EKG', finding: 'Diffuse konkave ST-Hebung, PR-Senkung (Hebung in aVR)', significance: 'Diagnostisch' },
                { modality: 'Echokardiographie', finding: 'Perikarderguss', significance: 'Ausschluss einer Tamponade, Diagnose' },
                { modality: 'Thorax-Röntgen', finding: 'Normal oder "Bocksbeutelherz" (großer Erguss)', significance: 'Ausschluss anderer Ursachen' }
              ],
              microbiology: [
                { test: 'Virusserologie', finding: 'Nicht routinemäßig', significance: 'Nur in speziellen Fällen' },
                { test: 'Perikardiozentese', finding: 'Kultur/PCR', significance: 'Nur bei Tamponade oder Verdacht auf eitrige/neoplastische Ursache' }
              ]
            },
            differential: [
              { disease: 'Akute Myokarditis', distinguishing: 'Troponin-Erhöhung dominiert, Wandbewegungsstörungen' },
              { disease: 'STEMI', distinguishing: 'Konvexe ST-Hebung, reziproke Senkung, regional' },
              { disease: 'Lungenembolie', distinguishing: 'Dyspnoe dominiert, D-Dimer, CT' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Aspirin', dose: '750-1000mg alle 8 Stunden', duration: '1-2 Wochen, dann ausschleichen', note: 'Erste Wahl (ESC 2015)' },
                  { drug: 'Ibuprofen', dose: '600mg alle 8 Stunden', duration: '1-2 Wochen, dann ausschleichen', note: 'Alternative' },
                  { drug: '+ Colchicin', dose: '0.5mg einmal täglich (<70kg) oder zweimal (>70kg)', duration: '3 Monate', note: 'Zur Rezidivprophylaxe (ESC 2015)!' },
                  { drug: 'PPI', dose: 'Standard', duration: 'Mit NSAID', note: 'Magenschutz' }
                ],
                inpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Nur für Hochrisikofälle (Fieber >38, subakut, großer Erguss, Tamponade, antikoagulierter Patient)' }
                ],
                icu: [
                  { drug: 'Perikardiozentese', dose: 'Drainage', duration: '', note: 'Lebensrettend bei Tamponade' }
                ]
              },
              targeted: 'Steroide (Prednisolon 0.2-0.5 mg/kg) NUR wenn NSAID/Colchicin kontraindiziert, erfolglos oder bei spezifischen Indikationen (autoimmun).',
              supportive: ['Körperliche Schonung (kein Sport) bis CRP normalisiert ist (min. 3 Monate für Sportler)'],
              prevention: ['Colchicin für die erste Episode']
            },
            prognosis: {
              mortality: 'Niedrig, lebensbedrohlich bei Tamponade',
              prognostic_scores: ['Keine'],
              factors: 'Rezidiv ist häufig, konstriktive Perikarditis ist selten (<1% bei idiopathischer)'
            }
          }
        ]
      },
      upper_respiratory: {
        name: 'Infektionen der oberen Atemwege',
        icon: window.diseaseMetadata.upper_respiratory.icon,
        color: window.diseaseMetadata.upper_respiratory.color,
        diseases: [
          {
            id: 'upper_respiratory_infections',
            name: 'Infektionen der oberen Atemwege (Erkältung)',
            pathogen: { type: 'Virus', name: '<i>Rhinovirus</i> (am häufigsten), <i>Coronavirus, Adenovirus, Influenza</i>', gram: 'RNA-Viren', shape: 'variabel' },
            epidemiology: {
              incidence: 'Häufigste Infektion, Erwachsene 2-3x/Jahr, Kinder 6-8x/Jahr',
              risk_groups: ['Kinder', 'Ältere', 'Immungeschwächte'],
              seasonality: 'Ganzjährig, Gipfel Herbst-Winter',
              transmission: 'Tröpfcheninfektion, Kontakt, Fomiten'
            },
            pathomechanism: {
              steps: [
                'Viren dringen über die Schleimhäute der oberen Atemwege ein, wo sie sich in den Epithelzellen vermehren.',
                'Die Infektion löst eine lokale Entzündung, Ödeme und eine erhöhte Schleimproduktion aus.',
                'Dies verursacht die charakteristischen Symptome: Rhinorrhoe, verstopfte Nase und Halsschmerzen.'
              ],
              virulence_factors: ['Rezeptorbindung (ICAM-1 bei Rhinovirus)', 'Immunmodulation']
            },
            clinical: {
              incubation: '1-3 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Typische Symptome', description: 'Typischerweise präsentiert es sich mit Rhinorrhoe, verstopfter Nase, Niesen, Halsschmerzen und trockenem Husten. Das Fieber ist in der Regel leicht oder fehlt. Die Symptome klingen normalerweise innerhalb von 7-10 Tagen von selbst ab.', severity: 'mild' }
              ],
              physical_exam: [
                'Nasenschleimhauthyperämie, Ödem',
                'Leichte Pharynxrötung',
                'Zervikale Lymphadenopathie',
                'Normale Lungenkultation'
              ],
              complications: ['Sinusitis', 'Otitis media', 'Bronchitis', 'Pneumonie (selten)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Nicht erforderlich', finding: '-', interpretation: 'Klinische Diagnose' }
              ],
              imaging: [
                { test: 'Nicht erforderlich', finding: '-', interpretation: 'Klinische Diagnose' }
              ],
              microbiology: [
                { test: 'Virus-PCR', finding: 'Ätiologie', significance: 'Falls erforderlich (z.B. Epidemie)' }
              ]
            },
            differential: [
              { disease: 'Allergische Rhinitis', distinguishing: 'Pruritus, Saisonalität, Eosinophilie' },
              { disease: 'Bakterielle Sinusitis', distinguishing: 'Anhaltende Symptome, Fieber, Schmerzen' },
              { disease: 'Influenza', distinguishing: 'Hohes Fieber, Myalgie, Prostration' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Supportiv', dose: '-', duration: '7-10 Tage', note: 'Ruhe, Flüssigkeit, symptomatische Behandlung' },
                  { drug: 'Abschwellendes Mittel', dose: 'Oxymetazolin nasal', duration: '3-5 Tage', note: 'Nicht länger!' },
                  { drug: 'Antihistaminikum', dose: 'Loratadin', duration: '', note: 'Bei Verdacht auf Allergie' }
                ],
                inpatient: [
                  { drug: 'Nicht erforderlich', dose: '-', duration: '-', note: 'Selten' }
                ],
                icu: [
                  { drug: 'Nicht erforderlich', dose: '-', duration: '-', note: 'Selten' }
                ]
              },
              targeted: 'Kein spezifisches antivirales Mittel',
              supportive: ['Ruhe', 'Flüssigkeitszufuhr', 'Fiebersenkung'],
              prevention: ['Händehygiene', 'Maskentragen bei Epidemien']
            },
            prognosis: {
              mortality: 'Sehr niedrig',
              prognostic_scores: ['Keine'],
              factors: 'Immunstatus'
            }
          },
          {
            id: 'rsv_infection',
            name: 'RSV-Infektion (Respiratorisches Synzytial-Virus)',
            pathogen: { type: 'Virus', name: '<i>Humanes Respiratorisches Synzytial-Virus</i> (HRSV)', gram: 'RNA-Virus, Pneumoviridae', shape: 'helikal' },
            epidemiology: {
              incidence: 'Alle Kinder bis zum 2. Lebensjahr infiziert, Erwachsene Reinfektion',
              risk_groups: ['Säuglinge (<6 Monate)', 'Ältere (>65)', 'Chronisch Lungenkranke', 'Immungeschwächte'],
              seasonality: 'Winter-Frühling',
              transmission: 'Tröpfcheninfektion, Kontakt (sehr ansteckend!)'
            },
            pathomechanism: {
              steps: [
                'Das Virus infiziert die respiratorischen Epithelzellen und bewirkt mit seinem Fusionsprotein (F) die Verschmelzung der Zellen zu sogenannten Synzytien.',
                'Dieser Prozess führt zur Zerstörung der Epithelzellen, zur Schädigung der Zilien und zu einer erhöhten Schleimproduktion.',
                'Bei Säuglingen verengen sich die kleinen Atemwege (Bronchiolen) durch Schleim und Ödeme, was das charakteristische Bild der Bronchiolitis (Giemen, Atemnot) hervorruft.'
              ],
              virulence_factors: ['Fusionsprotein (F)', 'G-Glykoprotein (Adhärenz)']
            },
            clinical: {
              incubation: '4-6 Tage',
              onset: 'Schleichend',
              symptoms: [
                { name: 'Anfangssymptome', description: 'Beginnt mit milden, oberen Atemwegssymptomen (Rhinorrhoe, leichtes Fieber).', severity: 'mild' },
                { name: 'Bronchiolitis (Säuglinge)', description: 'Die schwerste Form bei Säuglingen. Gekennzeichnet durch Atemnot, pfeifendes Atmen (Giemen), Tachypnoe und interkostale Einziehungen. In schweren Fällen können Apnoe und Atemversagen auftreten.', severity: 'severe' }
              ],
              physical_exam: [
                'Tachypnoe, Einziehungen',
                'Giemen, Rasselgeräusche',
                'Apnoe bei Säuglingen',
                'Hypoxie'
              ],
              complications: ['Bronchiolitis obliterans', 'Pneumonie', 'Apnoe', 'Tod (selten bei Säuglingen, aber möglich)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Normal oder leichte Leukozytose', interpretation: 'Unspezifisch' }
              ],
              imaging: [
                { modality: 'Thorax-Röntgen', finding: 'Überblähung, Atelektasen', significance: 'Bronchiolitis' }
              ],
              microbiology: [
                { test: 'Nasopharyngeal-Aspirat-PCR', finding: 'RSV-RNA', significance: 'Goldstandard' },
                { test: 'Immunfluoreszenz', finding: 'Antigennachweis', significance: 'Schnell' }
              ]
            },
            differential: [
              { disease: 'Bronchiolitis andere Ursachen', distinguishing: 'Virus-PCR' },
              { disease: 'Asthma', distinguishing: 'Anamnese, Atopie' },
              { disease: 'Pertussis', distinguishing: 'Keuchen, Lymphozytose' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Supportiv', dose: '-', duration: '-', note: 'Sauerstoff, Hydratation' },
                  { drug: 'Bronchodilatator', dose: 'Salbutamol', duration: '', note: 'Bei Giemen' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: 'Aerosol', duration: '3-5 Tage', note: 'In schweren Fällen, Immungeschwächte' }
                ],
                icu: [
                  { drug: 'Beatmung', dose: 'NIV oder Intubation', duration: '', note: 'Bei Apnoe' }
                ]
              },
              targeted: 'Palivizumab-Prophylaxe für Hochrisiko-Säuglinge',
              supportive: ['Sauerstoff', 'Hydratation', 'Physiotherapie'],
              prevention: ['Händehygiene', 'Isolierung', 'Passive Immunisierung: Nirsevimab, Clesrovimab (langwirksam), Palivizumab', 'Impfung: Ältere (>60 Jahre) und Schwangere (maternale Impfung)']
            },
            prognosis: {
              mortality: 'Niedrig, aber höheres Risiko bei Säuglingen',
              prognostic_scores: ['Keine'],
              factors: 'Alter, Komorbidität'
            }
          },
          {
            id: 'tonsillitis',
            name: 'Tonsillitis (Mandelentzündung)',
            pathogen: { type: 'Bakterium', name: '<i>Streptococcus pyogenes</i> (GAS, am häufigsten)', gram: 'Gram-positiv', shape: 'Kette' },
            epidemiology: {
              incidence: 'Häufig im Kindesalter, 5-15 Jahre',
              risk_groups: ['Kinder', 'Junge Erwachsene'],
              seasonality: 'Winter-Frühling',
              transmission: 'Tröpfcheninfektion, Kontakt'
            },
            pathomechanism: {
              steps: [
                'Bakterielle Kolonisation der Mandeln',
                'Lokale Entzündung, Ödem',
                'Toxinproduktion (Streptolysin O)',
                'Systemische Reaktion (Fieber, Allgemeinsymptome)'
              ],
              virulence_factors: ['M-Protein', 'Kapsel', 'Streptolysin O/S', 'Pyrogene Exotoxine']
            },
            clinical: {
              incubation: '2-5 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Lokale Symptome', description: 'Plötzlicher Beginn mit starken Halsschmerzen und Schluckbeschwerden. Die Mandeln sind geschwollen, gerötet und oft mit einem weißen, eitrigen Belag (Stippchen) bedeckt.', severity: 'severe' },
                { name: 'Allgemeine Symptome', description: 'Begleitet von hohem Fieber, Schüttelfrost, Kopfschmerzen und schmerzhafter Schwellung der zervikalen Lymphknoten.', severity: 'moderate' }
              ],
              physical_exam: [
                'Tonsillenhyperämie, Schwellung',
                'Exsudat',
                'Zervikale Lymphadenitis',
                'Scharlach-Symptome (selten)'
              ],
              complications: ['Peritonsillarabszess', 'Rheumatisches Fieber', 'Glomerulonephritis', 'Lemierre-Syndrom']
            },
            diagnostics: {
              microbiology: [
                { test: 'Strep-Test', finding: 'Positiv', interpretation: 'Schnelldiagnose' },
                { test: 'Rachenabstrichkultur', finding: 'GAS', significance: 'Bestätigung' }
              ]
            },
            differential: [
              { disease: 'Virale Pharyngitis', distinguishing: 'Milde Symptome, kein Exsudat' },
              { disease: 'Mononukleose', distinguishing: 'Lymphozytose, Hepatosplenomegalie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Penicillin V', dose: '4x500mg p.o.', duration: '10 Tage', note: 'Erste Wahl' },
                  { drug: 'Amoxicillin', dose: '3x500mg p.o.', duration: '10 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4 Mio. IE i.v.', duration: '7-10 Tage', note: 'In schweren Fällen' }
                ],
                icu: [
                  { drug: 'Chirurgische Drainage', dose: 'Bei Abszess', duration: '', note: '' }
                ]
              },
              targeted: 'Penicillin',
              supportive: ['Schmerzmittel', 'Flüssigkeit'],
              prevention: ['Hygiene']
            },
            prognosis: {
              mortality: 'Niedrig',
              prognostic_scores: ['Centor-Score (McIsaac)'],
              factors: 'Späte Behandlung'
            }
          },
          {
            id: 'sinusitis',
            name: 'Sinusitis (Nasennebenhöhlenentzündung)',
            pathogen: { type: 'Virus/Bakterium', name: 'Viren (erste 7-10 Tage), dann <i>Streptococcus pneumoniae, Haemophilus influenzae</i>', gram: 'Gemischt', shape: 'variabel' },
            epidemiology: {
              incidence: 'Häufig, Erwachsene 1-2x/Jahr',
              risk_groups: ['Allergiker', 'Raucher', 'Immungeschwächte'],
              seasonality: 'Winter',
              transmission: 'Endogen, Komplikation einer Infektion der oberen Atemwege'
            },
            pathomechanism: {
              steps: [
                'Nach einer viralen Infektion der oberen Atemwege (Erkältung) schwillt die Nasen- und Nebenhöhlenschleimhaut an.',
                'Das Ödem blockiert die Ausführungsgänge der Nebenhöhlen (Ostien), was zu einem Sekretstau führt.',
                'Das gestaute Sekret bietet einen idealen Nährboden für eine bakterielle Superinfektion, die zu einer eitrigen Entzündung führt.'
              ],
              virulence_factors: ['Biofilmbildung']
            },
            clinical: {
              incubation: 'Nach Infektion der oberen Atemwege',
              onset: 'Schleichend',
              symptoms: [
                { name: 'Charakteristische Symptome', description: 'Gesichtsschmerzen oder Druckgefühl, die sich beim Vorbeugen verschlimmern. Begleitet wird dies von einer verstopften Nase, eitrigem Nasenausfluss und oft Kopfschmerzen.', severity: 'moderate' },
                { name: 'Zeichen einer bakteriellen Superinfektion', description: 'Symptome, die länger als 10 Tage andauern, sich verschlimmern ("doppelte Verschlechterung") oder hohes Fieber (>38°C) und einseitige Gesichtsschmerzen deuten auf einen bakteriellen Ursprung hin.', severity: 'moderate' }
              ],
              physical_exam: [
                'Gesichtsdruckempfindlichkeit',
                'Mukopurulenter Nasenausfluss',
                'Postnasal-Drip-Syndrom'
              ],
              complications: ['Orbitale Zellulitis', 'Meningitis', 'Osteomyelitis']
            },
            diagnostics: {
              imaging: [
                { modality: 'CT Nebenhöhlen', finding: 'Flüssigkeitsspiegel, Schleimhautverdickung', significance: 'Falls erforderlich' }
              ]
            },
            differential: [
              { disease: 'Migräne', distinguishing: 'Einseitiger Kopfschmerz, Aura' },
              { disease: 'Zahnschmerzen', distinguishing: 'Zahnärztliche Untersuchung' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/Clavulansäure', dose: '2x875/125mg p.o.', duration: '7-10 Tage', note: 'Bei Verdacht auf bakteriell' },
                  { drug: 'Abschwellendes Mittel', dose: 'Pseudoephedrin', duration: '3-5 Tage', note: 'Symptomatisch' }
                ],
                inpatient: [
                  { drug: 'i.v. Antibiotika', dose: 'Wenn kompliziert', duration: '', note: '' }
                ],
                icu: [
                  { drug: 'Chirurgische Drainage', dose: 'Bei Abszess', duration: '', note: '' }
                ]
              },
              targeted: 'Antibiotika wenn bakteriell',
              supportive: ['Abschwellende Mittel', 'Dampfinhalation'],
              prevention: ['Allergiebehandlung']
            },
            prognosis: {
              mortality: 'Niedrig',
              prognostic_scores: ['Keine'],
              factors: 'Immunstatus'
            }
          },
          {
            id: 'otitis_media',
            name: 'Otitis media (Mittelohrentzündung)',
            pathogen: { type: 'Bakterium', name: '<i>Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis</i>', gram: 'Gemischt', shape: 'Kokken/Bazillen' },
            epidemiology: {
              incidence: 'Häufig im Kindesalter, 80% erleben es bis zum 3. Lebensjahr',
              risk_groups: ['Säuglinge', 'Kinder', 'Passivrauchen'],
              seasonality: 'Winter',
              transmission: 'Komplikation einer Infektion der oberen Atemwege'
            },
            pathomechanism: {
              steps: [
                'Nach einer Infektion der oberen Atemwege ist die Funktion der Eustachischen Röhre gestört, die Schleimhaut schwillt an.',
                'Im Mittelohr entsteht ein Unterdruck, der zu einer Flüssigkeitsansammlung führt (seröse Otitis media).',
                'Diese Flüssigkeit kann sich mit Bakterien aus dem Nasopharynx superinfizieren, was zu einer eitrigen Entzündung führt, die zu einer Vorwölbung des Trommelfells und Schmerzen führt.'
              ],
              virulence_factors: ['Biofilm', 'Toxine']
            },
            clinical: {
              incubation: 'Nach Infektion der oberen Atemwege',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Hauptsymptome', description: 'Plötzlich einsetzende, starke, pochende Ohrenschmerzen, Fieber und Hörverlust.', severity: 'severe' },
                { name: 'Zeichen bei Säuglingen', description: 'Bei Säuglingen sind Reizbarkeit, untröstliches Weinen, Appetitlosigkeit und das Greifen ans Ohr charakteristisch.', severity: 'moderate' }
              ],
              physical_exam: [
                'Trommelfellhyperämie, Vorwölbung',
                'Ausfluss bei Perforation',
                'Tympanozentese falls erforderlich'
              ],
              complications: ['Mastoiditis', 'Meningitis', 'Labyrinthitis']
            },
            diagnostics: {
              imaging: [
                { modality: 'Otoskopie', finding: 'Trommelfelluntersuchung', significance: 'Diagnostisch' }
              ]
            },
            differential: [
              { disease: 'Otitis externa', distinguishing: 'Ohrmuschel ist betroffen' },
              { disease: 'Pharyngitis', distinguishing: 'Keine Ohrenschmerzen' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin', dose: '3x40mg/kg p.o.', duration: '7-10 Tage', note: 'Erste Wahl' },
                  { drug: 'Cefuroxim', dose: '2x250mg p.o.', duration: '7 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'i.v. Antibiotika', dose: 'Wenn kompliziert', duration: '', note: '' }
                ],
                icu: [
                  { drug: 'Chirurgische Drainage', dose: 'Bei Abszess', duration: '', note: '' }
                ]
              },
              targeted: 'Antibiotika',
              supportive: ['Schmerzmittel', 'Abschwellende Mittel'],
              prevention: ['Impfstoffe (Pneumokokken, Hib)']
            },
            prognosis: {
              mortality: 'Niedrig',
              prognostic_scores: ['Keine'],
              factors: 'Alter, Rezidiv'
            }
          }
        ]
      }
});
