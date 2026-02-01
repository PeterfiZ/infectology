Object.assign(window.diseases, {
     cns_infections: {
        name: 'Infektionen des Zentralnervensystems',
        icon: '🧠',
        color: '#0891b2',
        tables: [
          {
            title: 'Differentialdiagnose der Liquorbefunde',
            headers: ['Parameter', 'Bakteriell', 'Viral', 'Normal'],
            rows: [
              ['Eröffnungsdruck', 'Erhöht (>20 cmH2O)', 'Normal oder leicht erhöht', '6-20 cmH2O'],
              ['Aussehen', 'Trüb, eitrig', 'Klar ("wasserhell")', 'Klar, farblos'],
              ['Zellzahl (Leukozyten/µL)', '>1000 (oft 100-10000)', '10-500 (selten >1000)', '0-5'],
              ['Dominante Zelle', 'Neutrophile Granulozyten (>80%)', 'Lymphozyten (in der Frühphase PMN möglich!)', 'Lymphozyten/Monozyten'],
              ['Protein (g/L)', 'Erhöht (>1 g/L)', 'Normal oder leicht erhöht (<1 g/L)', '0.15-0.45 g/L'],
              ['Glukose (mmol/L)', 'Erniedrigt (<2.2 mmol/L)', 'Normal (>2.5 mmol/L)', '2.5-4.4 mmol/L'],
              ['Liquor/Serum-Glukose-Quotient', '< 0.4', '> 0.6', '≥ 0.6'],
              ['Laktat', 'Erhöht (>3.5 mmol/L)', 'Normal (<3.5 mmol/L)', '< 2.5 mmol/L'],
              ['Mikrobiologie', 'Gram-Färbung (+ 60-90%), Kultur (+)', 'PCR (+), Gram/Kultur negativ', 'Negativ']
            ]
          }
        ],
        diseases: [
          {
            id: 'bacterial_meningitis',
            name: 'Bakterielle Meningitis (Empirisch)',
            pathogen: { type: 'Bakterium', name: 'N. meningitidis, S. pneumoniae, L. monocytogenes', gram: 'Gemischt', shape: 'Erregerabhängig' },
            epidemiology: {
              incidence: '2-5/100.000 pro Jahr in Industrieländern',
              risk_groups: ['Neugeborene (<1 Monat)', 'Kinder', 'Über 65-Jährige', 'Splenektomierte', 'Komplementdefizienz', 'Cochlea-Implantat-Träger'],
              seasonality: 'Meningokokken: Winter-Frühling',
              transmission: 'Tröpfcheninfektion (Meningokokken), endogen (Pneumokokken), vertikal (GBS, Listerien)'
            },
            pathomechanism: {
              steps: [
                'Nasopharyngeale Kolonisation',
                'Bakteriämie (Überwindung der Blut-Hirn-Schranke)',
                'Invasion des Subarachnoidalraums',
                'Entzündungsreaktion (TNF-α, IL-1β)',
                'Erhöhte Permeabilität der Blut-Hirn-Schranke → Hirnödem',
                'Erhöhter Hirndruck, zerebrale Ischämie'
              ],
              virulence_factors: ['Kapselpolysaccharid', 'IgA-Protease', 'Lipooligosaccharid (LOS)', 'Pili/Fimbrien']
            },
            clinical: {
              incubation: '2-10 Tage (Meningokokken), kürzer (Pneumokokken)',
              onset: 'Akut, Stunden-Tage',
              symptoms: [
                { name: 'Klassische Symptome', description: 'Fieber, Kopfschmerzen, Nackensteifigkeit, Bewusstseinsstörung (die Trias ist nicht immer vorhanden!)', severity: 'severe' },
                { name: 'Frühe "Red Flag"-Zeichen (NICE)', description: 'Bein-/Muskelschmerzen, kalte Extremitäten, marmorierte Haut (frühe Sepsiszeichen!)', severity: 'severe' },
                { name: 'Ausschlag', description: 'Nicht wegdrückbare (non-blanching) Petechien/Purpura (Verdacht auf Meningokokken)', severity: 'severe' },
                { name: 'Kopfschmerzen', description: 'Schwer, generalisiert (>85%)', severity: 'severe' },
                { name: 'Fieber', description: '>38°C (95%)', severity: 'severe' },
                { name: 'Nackensteifigkeit', description: 'Nackensteifigkeit (>80%)', severity: 'severe' },
                { name: 'Bewusstseinsstörung', description: 'GCS <14 (>80%)', severity: 'severe' },
              ],
              physical_exam: [
                'Meningeale Zeichen: Kernig (+), Brudzinski (+), Nackensteifigkeit',
                'Fieber (oft >39°C)',
                'Bewusstseinsstörung (GCS vermindert)',
                'Fokale neurologische Symptome (Hirnnervenlähmung, Parese)',
                'Petechien/Purpura (Meningokokkämie)',
                'Stauungspapille (spät)'
              ],
              complications: ['Septischer Schock', 'DIC', 'ARDS', 'Hirnödem/Einklemmung', 'Subdurales Empyem', 'Hörverlust', 'Kognitives Defizit']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose (15-30 G/L), Linksverschiebung', interpretation: 'Bakterielle Infektion' },
                { test: 'CRP/PCT', finding: 'Deutlich erhöht (PCT >2)', interpretation: 'Bakterielle Sepsis' },
                { test: 'Blut-PCR', finding: 'Meningokokken/Pneumokokken-DNA', interpretation: 'NICE-Empfehlung: in allen Verdachtsfällen abnehmen!' },
                { test: 'Gerinnung', finding: 'DIC-Zeichen (↓Fibrinogen, ↑D-Dimer)', interpretation: 'Meningokokken' }
              ],
              imaging: [
                { modality: 'Schädel-CT', finding: 'Ausschluss von Kontraindikationen', significance: 'Vor LP, wenn: GCS<9, Krampfanfälle, fokale Zeichen, Stauungspapille' },
                { modality: 'MRT', finding: 'Sensitiver, Komplikationen', significance: 'Empyem, Infarkt' }
              ],
              microbiology: [
                { test: 'Liquoranalyse (NICE)', finding: 'Zellzahl >1000/µL (PMN), Protein >1 g/L, Glukose < 50% des Blutzuckers', significance: 'Typisch für bakterielle Meningitis!' },
                { test: 'Liquor-Laktat', finding: 'Erhöht', significance: 'Hilft bei der Unterscheidung von viral' },
                { test: 'Liquor-Gram-Färbung', finding: '60-90% positiv', significance: 'Schnelle Orientierung' },
                { test: 'Liquor/Blutkultur', finding: 'Erregerisolierung', significance: 'Resistenzbestimmung' },
                { test: 'Liquor-PCR (Multiplex)', finding: 'DNA-Nachweis', significance: 'Schnell, sensitiv, vorbehandelter Patient' },
                { test: 'Liquor-Latexagglutination', finding: 'Antigennachweis', significance: 'Schnell, weniger sensitiv' }
              ]
            },
            differential: [
              { disease: 'Virale Meningitis', distinguishing: 'Milder, Liquor: Lymphozyten, normale Glukose' },
              { disease: 'Tuberkulöse Meningitis', distinguishing: 'Subakut, niedrige Glukose, basilare Meningitis' },
              { disease: 'Enzephalitis', distinguishing: 'Bewusstseinsstörung dominiert, Herdzeichen, mildere Liquorbefunde' },
              { disease: 'Subarachnoidalblutung', distinguishing: 'Donnerschlagkopfschmerz, Liquor blutig/xanthochrom' },
              { disease: 'Karzinomatöse Meningitis', distinguishing: 'Maligne Erkrankung, Zytologie' }
            ],
            therapy: {
              guidelines: ['NICE NG240 (2024): Meningitis (bacterial) and meningococcal disease'],
              empirical: {
                outpatient: [
                  { drug: 'Benzylpenicillin oder Ceftriaxon', dose: 'i.m./i.v.', duration: 'Sofort', note: 'Nur wenn der Transport ins Krankenhaus erheblich verzögert ist (NICE)' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '2g i.v. alle 12 Stunden (oder 4g alle 24 Stunden)', duration: 'Erregerabhängig', note: 'Erste Wahl (NICE). Alternative: Cefotaxim.' },
                  { drug: '+ Amoxicillin', dose: '2g i.v. alle 4 Stunden', duration: 'Erregerabhängig', note: 'Bei Listerien-Risiko (>60 Jahre, Immunsuppression, Schwangerschaft).' },
                  { drug: 'Dexamethason', dose: '10mg i.v. alle 6 Stunden', duration: '4 Tage', note: 'VOR oder MIT der ersten Antibiotikagabe. Nicht geben bei septischem Schock ohne Meningitis.' }
                ],
                icu: [
                  { drug: 'Supportiv', dose: '-', duration: '-', note: 'Atemwegssicherung, Volumensubstitution, Vasopressoren' }
                ]
              },
              targeted: 'Meningokokken: 7 Tage; Pneumokokken: 14 Tage; Listerien: 21 Tage; H. influenzae: 10 Tage; GBS: 14-21 Tage.',
              supportive: ['Flüssigkeits-/Elektrolythaushalt', 'Hirndrucküberwachung', 'Krampfprophylaxe', 'Isolierung (Meningokokken, kann nach 24h AB aufgehoben werden)'],
              prevention: ['MenACWY, MenB Impfstoffe', 'PCV13/PPSV23', 'Hib-Impfung', 'Chemoprophylaxe für Kontaktpersonen: Rifampicin oder Ciprofloxacin']
            },
            prognosis: {
              mortality: 'Insgesamt 15-25%, Meningokokken 10%, Pneumokokken 20-30%, Listerien 20-30%',
              prognostic_scores: ['GCS', 'APACHE II'],
              factors: 'Alter, Erreger, späte Behandlung, Bewusstseinsstörung, Krampfanfälle, septischer Schock'
            }
          },
          {
            id: 'viral_encephalitis',
            name: 'Virale Enzephalitis',
            pathogen: { type: 'Virus', name: 'HSV-1, VZV, Enteroviren, Arboviren', gram: 'DNA/RNA-Viren', shape: 'variabel' },
            epidemiology: {
              incidence: '0.5-7/100.000 pro Jahr',
              risk_groups: ['Neugeborene (HSV-2)', 'Immunsupprimierte', 'Ältere (VZV-Reaktivierung)', 'Reisende in endemische Gebiete (Arbovirus)'],
              seasonality: 'Enterovirus: Sommer-Herbst; HSV: ganzjährig',
              transmission: 'HSV: Reaktivierung; Enterovirus: fäkal-oral; Arbovirus: Vektor (Mücke, Zecke)'
            },
            pathomechanism: {
              steps: [
                'Primärinfektion oder Reaktivierung (HSV)',
                'Neurotropismus: Virus dringt in das Nervengewebe ein',
                'HSV: Prädilektion für Temporallappen (olfaktorischer oder trigeminaler Weg)',
                'Direkte neuronale Schädigung + Immunantwort',
                'Nekrotisierende Enzephalitis (HSV) vs. perivaskuläre Entzündung',
                'Hirnödem, Hämorrhagie, Nekrose'
              ],
              virulence_factors: ['HSV: Glykoprotein B, C, D (Eintritt)', 'VZV: Latenz in Neuronen', 'Enterovirus: VP1-Kapsidprotein']
            },
            clinical: {
              incubation: 'HSV-Reaktivierung: variabel; Enterovirus: 3-7 Tage; Arbovirus: 4-14 Tage',
              onset: 'Akut-subakut',
              symptoms: [
                { name: 'Bewusstseinsstörung', description: 'Hauptmerkmal der Enzephalitis (100%): Verwirrtheit, Lethargie, Koma', severity: 'severe' },
                { name: 'Fieber', description: 'In >90% vorhanden', severity: 'moderate' },
                { name: 'Kopfschmerzen', description: 'Häufiges Begleitsymptom', severity: 'moderate' },
                { name: 'Krampfanfälle', description: 'Häufig (besonders HSV, autoimmun)', severity: 'severe' },
                { name: 'Fokale neurologische Zeichen', description: 'Hemiparese, Hirnnervenlähmung, Ataxie', severity: 'severe' },
                { name: 'Verhaltensänderungen', description: 'Psychose, Halluzinationen (HSV, limbisch)', severity: 'severe' }
              ],
              physical_exam: [
                'Bewusstseinsstörung (GCS vermindert)',
                'Fokale neurologische Symptome (Hemiparese, Hirnnervenlähmung)',
                'Krampfanfälle',
                'Meningeale Zeichen (mäßig)',
                'Stauungspapille (spät)'
              ],
              complications: ['Bleibende neurologische Schäden', 'Epilepsie', 'Motorisches/kognitives Defizit', 'Tod (unbehandeltes HSV 70%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Variabel, kann normal sein', interpretation: 'Unspezifisch' },
                { test: 'CRP', finding: 'Mäßig erhöht', interpretation: 'Niedriger als bei bakteriell' },
                { test: 'Leber-/Nierenfunktion', finding: 'Baseline', interpretation: 'Acyclovir-Toxizität' }
              ],
              imaging: [
                { modality: 'MRT Gehirn', finding: 'HSV: temporal + frontal T2/FLAIR Hyperintensität, asymmetrisch', significance: 'Am sensitivsten! Frühzeitig durchführen' },
                { modality: 'CT Gehirn', finding: 'Kann im Frühstadium negativ sein', significance: 'Ausschluss von Kontraindikationen vor LP' }
              ],
              microbiology: [
                { test: 'Liquor-PCR', finding: 'HSV-1/2, VZV, Enterovirus DNA/RNA', significance: 'Goldstandard, frühe Negativität möglich!' },
                { test: 'Liquoranalyse', finding: 'Lymphozytäre Pleozytose (10-500), normal/leicht↑ Protein, normale Glukose', significance: 'Virales Muster' },
                { test: 'Liquor-Erythrozyten', finding: 'Xanthochromie, erhöht', significance: 'Hämorrhagische Nekrose (HSV)' },
                { test: 'Serologie', finding: 'Akut-Rekonvaleszenz-Titeranstieg', significance: 'Retrospektiv' }
              ]
            },
            differential: [
              { disease: 'Bakterielle Meningitis', distinguishing: 'Schnellerer Verlauf, Liquor: PMN, ↓Glukose' },
              { disease: 'Autoimmunenzephalitis', distinguishing: 'Anti-NMDA-R, limbische Enzephalitis, Tumorsuche' },
              { disease: 'Hirnabszess', distinguishing: 'CT/MRT: Ring-Enhancement, septischer Fokus' },
              { disease: 'Toxisch-metabolische Enzephalopathie', distinguishing: 'Grunderkrankung, Laboranomalien' },
              { disease: 'Status epilepticus', distinguishing: 'EEG, Anamnese' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'KEINE ambulante Behandlung!', dose: 'Sofortige Krankenhauseinweisung', duration: '', note: 'HSV-Enzephalitis ist ohne Behandlung tödlich!' }
                ],
                inpatient: [
                  { drug: 'Acyclovir', dose: '3x10mg/kg i.v.', duration: '14-21 Tage', note: 'SOFORT bei Verdacht auf HSV beginnen!' }
                ],
                icu: [
                  { drug: 'Acyclovir', dose: '3x10mg/kg i.v.', duration: '21 Tage', note: 'Immunsupprimiert, schwer' },
                  { drug: 'Antikonvulsivum', dose: 'Levetiracetam oder andere', duration: '', note: 'Prophylaxe/Therapie' }
                ]
              },
              targeted: 'HSV/VZV: Acyclovir; CMV: Ganciclovir+Foscarnet; Enterovirus: supportiv',
              supportive: ['Hirndruckkontrolle', 'Krampfkontrolle', 'Flüssigkeitshaushalt', 'Rehabilitation'],
              prevention: ['VZV-Impfung', 'Mückenschutz (Arbovirus)', 'Neonatales HSV: Kaiserschnitt bei aktivem Genitalherpes']
            },
            prognosis: {
              mortality: 'HSV unbehandelt: 70%, behandelt: 20-30%; Enterovirus: <1%',
              prognostic_scores: ['GCS', 'Alter'],
              factors: 'Späte Behandlung, Alter, Grad der Bewusstseinsstörung, frühe HSV-Diagnose'
            }
          },
          {
            id: 'herpes_encephalitis',
            name: 'Herpes-Simplex-Enzephalitis',
            pathogen: { type: 'Virus', name: 'Herpes-Simplex-Virus 1 (HSV-1)', gram: 'dsDNA', shape: 'kugelförmig' },
            epidemiology: {
              incidence: 'Häufigste sporadische, tödliche Enzephalitis',
              risk_groups: ['Jeder (keine Saisonalität)'],
              seasonality: 'Keine',
              transmission: 'Reaktivierung (Ganglion trigeminale) oder Primärinfektion'
            },
            pathomechanism: {
              steps: ['Neurotrope Ausbreitung', 'Nekrose des Temporal- und Frontallappens', 'Hämorrhagische Entzündung', 'Hirnödem'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Akut (Tage)',
              symptoms: [
                { name: 'Fieber', description: 'In 90% vorhanden', severity: 'moderate' },
                { name: 'Kopfschmerzen', description: 'In 81%', severity: 'moderate' },
                { name: 'Psychiatrische Symptome', description: 'Persönlichkeitsveränderung, Desorientierung (71%)', severity: 'severe' },
                { name: 'Krampfanfälle', description: 'In 67% (fokal oder generalisiert)', severity: 'severe' },
                { name: 'Erbrechen', description: 'In 46%', severity: 'mild' },
                { name: 'Fokale Schwäche', description: 'In 33%', severity: 'severe' },
                { name: 'Gedächtnisstörung', description: 'In 24% (Kurzzeit)', severity: 'moderate' }
              ],
              physical_exam: ['Bewusstseinsstörung', 'Fokale neurologische Zeichen', 'Gedächtnisstörung'],
              complications: ['Unkuseinklemmung', 'Bleibende kognitive Schäden', 'Tod']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Lymphozytär, Erythrozyten erhöht (xanthochrom), Protein erhöht', interpretation: 'Hämorrhagische Nekrose' }],
              imaging: [{ modality: 'MRT', finding: 'Asymmetrische Hyperintensität im Temporallappen (T2/FLAIR)', significance: 'Pathognomonisch' }],
              microbiology: [{ test: 'Liquor-PCR', finding: 'HSV-1 DNA', significance: 'Goldstandard' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Acyclovir', dose: '3x10 mg/kg i.v.', duration: '14-21 Tage', note: 'Sofort bei Verdacht beginnen!' }] },
              targeted: 'Acyclovir i.v. Bei Rezidiv Wiederholung.',
              supportive: ['Krampfkontrolle', 'Hirnödembehandlung'],
              prevention: ['Keine']
            },
            prognosis: { mortality: 'Unbehandelt >70%, behandelt 20-30%', prognostic_scores: [], factors: 'Alter, Immunstatus, Behandlungszeitpunkt' }
          },
          {
            id: 'aseptic_meningitis',
            name: 'Aseptische (Virale) Meningitis',
            pathogen: { type: 'Virus', name: 'Enteroviren (Coxsackie, Echo), HSV-2, VZV', gram: 'RNA/DNA', shape: '-' },
            epidemiology: {
              incidence: 'Häufigste Form der Meningitis',
              risk_groups: ['Kinder', 'Junge Erwachsene'],
              seasonality: 'Sommer-Herbst (Enterovirus)',
              transmission: 'Fäkal-oral (Entero), sexuell (HSV-2)'
            },
            pathomechanism: {
              steps: ['Virämie', 'Meningeale Entzündung', 'Kein eitriges Exsudat'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '3-7 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Kopfschmerzen', description: 'Fast immer vorhanden, frontal/retroorbital', severity: 'moderate' },
                { name: 'Fieber', description: '38-40°C', severity: 'mild' },
                { name: 'Meningeale Zeichen', description: 'Nackensteifigkeit vorhanden, kann aber milder sein', severity: 'moderate' },
                { name: 'Photophobie', description: 'Lichtscheu', severity: 'mild' },
                { name: 'Bewusstsein', description: 'KLAR (Unterscheidung zur Enzephalitis!)', severity: 'mild' }
              ],
              physical_exam: ['Meningeale Reizzeichen (milder)', 'Bewusstsein klar (Unterschied zur Enzephalitis!)'],
              complications: ['Selten (Meningoenzephalitis)']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Lymphozytäre Pleozytose (zehn-hundert), normale Glukose, leicht erhöhtes Protein', interpretation: 'Virales Bild' }],
              microbiology: [{ test: 'Liquor-PCR', finding: 'Enterovirus/HSV/VZV', significance: 'Diagnostisch' }]
            },
            therapy: {
              empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Schmerzlinderung, Ruhe' }] },
              targeted: 'Bei HSV-2/VZV Acyclovir erwägen (besonders bei Immunsupprimierten). Enterovirus: symptomatisch.',
              supportive: [],
              prevention: ['Hygiene']
            },
            prognosis: { mortality: 'Hervorragend, heilt spontan', prognostic_scores: [], factors: 'Keine' }
          },
          {
            id: 'tbe',
            name: 'Frühsommer-Meningoenzephalitis (FSME)',
            pathogen: { type: 'Virus', name: 'FSME-Virus', gram: 'RNA, Flaviviridae', shape: 'kugelförmig' },
            epidemiology: {
              incidence: 'Endemisch in Mitteleuropa',
              risk_groups: ['Forstarbeiter', 'Wanderer', 'Personen mit Zeckenexposition'],
              seasonality: 'Frühling-Herbst',
              transmission: 'Zeckenstich, unpasteurisierte Milch'
            },
            pathomechanism: {
              steps: ['Zeckenstich', 'Virämie (fieberhafte Phase)', 'ZNS-Invasion (Meningoenzephalitis)'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '7-14 Tage',
              onset: 'Biphasisch',
              symptoms: [
                { name: 'Biphasischer Verlauf', description: 'In 70-90% der Fälle', severity: 'mild' },
                { name: '1. Phase (Virämie)', description: 'Fieber, Kopfschmerzen, Muskelschmerzen, Müdigkeit (2-7 Tage)', severity: 'mild' },
                { name: 'Symptomfreies Intervall', description: 'Durchschnittlich 8 Tage (1-33 Tage)', severity: 'mild' },
                { name: '2. Phase (Neurologisch)', description: 'Meningitis (50%), Meningoenzephalitis (40%), Myelitis (10%)', severity: 'severe' },
                { name: 'Myelitis-Symptome', description: 'Schlaffe Lähmung (oft obere Extremität/Schultergürtel)', severity: 'severe' }
              ],
              physical_exam: ['Ataxie', 'Tremor', 'Schlaffe Lähmung des Schultergürtels (Myelitis)', 'Bewusstseinsstörung'],
              complications: ['Bleibende Lähmung', 'Post-Enzephalitis-Syndrom']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Lymphozytäre Pleozytose', interpretation: '-' }],
              microbiology: [{ test: 'Serologie (IgM/IgG)', finding: 'Blut und Liquor', significance: 'Diagnostisch (PCR in der 2. Phase oft negativ!)' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Keine spezifische Therapie' }] },
              targeted: 'Symptomatische Behandlung (Ödemreduktion, Rehabilitation).',
              supportive: [],
              prevention: ['Impfung (FSME-Immun, Encepur)', 'Zeckenschutz']
            },
            prognosis: { mortality: '1-2% (europäischer Subtyp)', prognostic_scores: [], factors: 'Subtyp, Behandlungszeitpunkt' }
          },
          {
            id: 'meningococcal_meningitis',
            name: 'Meningokokken-Meningitis',
            pathogen: { type: 'Bakterium', name: 'Neisseria meningitidis', gram: 'Gram-negativ', shape: 'Diplokokken' },
            epidemiology: {
              incidence: 'Kann epidemisch auftreten',
              risk_groups: ['Säuglinge', 'Jugendliche', 'Geschlossene Gemeinschaften (Wohnheim)', 'Asplenie'],
              seasonality: 'Winter-Frühling',
              transmission: 'Tröpfcheninfektion (enger Kontakt)'
            },
            pathomechanism: {
              steps: ['Nasopharynx-Kolonisation', 'Invasion', 'Sepsis/Meningitis', 'LOS-Endotoxin -> DIC'],
              virulence_factors: ['Kapsel (A,B,C,W,Y)', 'LOS', 'IgA-Protease']
            },
            clinical: {
              incubation: '1-10 Tage',
              onset: 'Hyperakut',
              symptoms: [
                { name: 'Klassische Symptome', description: 'Fieber, Kopfschmerzen, Nackensteifigkeit', severity: 'severe' },
                { name: 'Ausschlag', description: 'Petechien/Purpura (in 50-80%!) - verschwinden nicht auf Druck', severity: 'severe' },
                { name: 'Septischer Zustand', description: 'Hypotonie, Tachykardie, kalte Extremitäten', severity: 'severe' },
                { name: 'Schnelle Progression', description: 'Zustandsverschlechterung innerhalb von Stunden', severity: 'severe' }
              ],
              physical_exam: ['Meningeale Zeichen', 'Purpura', 'Schockzeichen'],
              complications: ['Gliedmaßennekrose/Amputation', 'Taubheit', 'Tod (innerhalb von Stunden)']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Eitrig', interpretation: '-' }, { test: 'PCR', finding: 'Positiv', significance: 'Schnell' }],
              microbiology: [{ test: 'Gram-Färbung', finding: 'Gram-negative Diplokokken', significance: 'Schnell' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2g i.v. alle 12 Stunden', duration: '7 Tage', note: 'NICE NG240 Empfehlung' }] },
              targeted: 'Ceftriaxon für 7 Tage. Prophylaxe für Kontaktpersonen: Ciprofloxacin (einmalig 500mg p.o.) oder Rifampicin.',
              supportive: [],
              prevention: ['Impfung (MenACWY, MenB)']
            },
            prognosis: { mortality: '10-15% auch mit Behandlung', prognostic_scores: [], factors: 'Alter, Komorbidität, Behandlungszeitpunkt' }
          },
          {
            id: 'pneumococcal_meningitis',
            name: 'Pneumokokken-Meningitis',
            pathogen: { type: 'Bakterium', name: 'Streptococcus pneumoniae', gram: 'Gram-positiv', shape: 'Diplokokken' },
            epidemiology: {
              incidence: 'Häufigste Meningitis bei Erwachsenen',
              risk_groups: ['Ältere', 'Alkoholiker', 'Splenektomierte', 'Otitis/Sinusitis/Pneumonie', 'Liquorrhoe'],
              seasonality: 'Winter',
              transmission: 'Endogene Ausbreitung oder Tröpfcheninfektion'
            },
            pathomechanism: {
              steps: ['Bakteriämie oder Ausbreitung per continuitatem (Ohr/Nebenhöhle)', 'Starke Entzündungsreaktion'],
              virulence_factors: ['Kapsel', 'Pneumolysin']
            },
            clinical: {
              incubation: 'Kurz',
              onset: 'Akut',
              symptoms: [
                { name: 'Schwere Meningitis', description: 'Häufiger Koma/Krampfanfälle als bei Meningokokken', severity: 'severe' },
                { name: 'Fokussymptome', description: 'Zeichen von Pneumonie (25%), Otitis (30%), Sinusitis (15%)', severity: 'moderate' },
                { name: 'Neurologisches Defizit', description: 'Häufige Restschäden', severity: 'severe' }
              ],
              physical_exam: ['Meningeale Zeichen', 'Zeichen einer Otitis media', 'Bewusstseinsstörung'],
              complications: ['Taubheit', 'Hydrozephalus', 'Hirnabszess']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Eitrig, sehr hohes Protein, niedriger Zucker', interpretation: '-' }],
              microbiology: [{ test: 'Gram-Färbung', finding: 'Gram-positive Diplokokken', significance: '-' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2g i.v. alle 12 Stunden', duration: '14 Tage', note: 'NICE NG240 Empfehlung' }, { drug: 'Dexamethason', dose: '10mg i.v. alle 6 Stunden', duration: '4 Tage', note: 'Fortsetzen, wenn Pneumokokken nachgewiesen werden!' }] },
              targeted: 'Ceftriaxon für 14 Tage. Bei nachgewiesener Resistenz: + Vancomycin/Rifampicin.',
              supportive: [],
              prevention: ['Pneumokokken-Impfung (PCV, PPSV)']
            },
            prognosis: { mortality: '20-30%, hohe Morbidität', prognostic_scores: [], factors: 'Alter, Immunstatus' }
          },
          {
            id: 'listeria_meningitis',
            name: 'Listerien-Meningitis',
            pathogen: { type: 'Bakterium', name: 'Listeria monocytogenes', gram: 'Gram-positiv', shape: 'Stäbchen' },
            epidemiology: {
              incidence: 'Selten, aber gefährlich',
              risk_groups: ['Neugeborene', 'Ältere (>50 Jahre)', 'Schwangere', 'Immunsupprimierte (Transplantierte, Alkoholiker)'],
              seasonality: 'Keine',
              transmission: 'Lebensmittel (Weichkäse, Aufschnitt)'
            },
            pathomechanism: {
              steps: ['Invasion des Gastrointestinaltrakts', 'Bakteriämie', 'ZNS-Invasion (Rhombenzephalitis-Tropismus)'],
              virulence_factors: ['Intrazelluläres Überleben', 'Listeriolysin O']
            },
            clinical: {
              incubation: '1-4 Wochen',
              onset: 'Subakut',
              symptoms: [
                { name: 'Subakuter Beginn', description: 'Langsamere Progression', severity: 'moderate' },
                { name: 'Fieber', description: 'In 90%', severity: 'moderate' },
                { name: 'Bewusstseinsstörung', description: 'Häufig', severity: 'severe' },
                { name: 'Rhombenzephalitis', description: 'Hirnstammsymptome: Ataxie, Hirnnervenlähmung, Nystagmus', severity: 'severe' },
                { name: 'Meningeale Zeichen', description: 'Weniger ausgeprägt oder fehlend', severity: 'mild' }
              ],
              physical_exam: ['Meningeale Zeichen (können fehlen)', 'Fokale Zeichen'],
              complications: ['Hirnabszess', 'Hydrozephalus']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Kann lymphozytär sein! (nicht immer PMN)', interpretation: 'Irreführend' }],
              microbiology: [{ test: 'Gram-Färbung', finding: 'Oft negativ oder Gram+ Stäbchen (können als Diphtheroide fehlgedeutet werden)', significance: '-' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Amoxicillin / Ampicillin', dose: '2g i.v. alle 4 Stunden', duration: '21 Tage', note: 'NICE NG240 Empfehlung. Cephalosporine sind UNWIRKSAM!' }, { drug: '+ Gentamicin', dose: '5mg/kg i.v. 1x täglich', duration: 'Erste 7 Tage', note: 'Synergistische Wirkung' }] },
              targeted: 'Amoxicillin/Ampicillin (21 Tage) + Gentamicin (erste 7 Tage). Bei Penicillinallergie: Cotrimoxazol (Trimethoprim/Sulfamethoxazol).',
              supportive: [],
              prevention: ['Lebensmittelhygiene in Risikogruppen']
            },
            prognosis: { mortality: '20-30%', prognostic_scores: [], factors: 'Alter, Immunstatus' }
          },
          {
            id: 'cryptococcal_meningitis',
            name: 'Kryptokokken-Meningitis',
            pathogen: { type: 'Pilz', name: 'Cryptococcus neoformans', gram: 'Hefepilz (bekapselt)', shape: 'rund' },
            epidemiology: {
              incidence: 'Häufigste Pilzmeningitis bei HIV/AIDS-Patienten',
              risk_groups: ['HIV (CD4 <100)', 'Transplantierte', 'Steroidbehandlung'],
              seasonality: 'Keine',
              transmission: 'Inhalation (kontaminierter Staub/Taubenkot) -> Lunge -> hämatogene Streuung'
            },
            pathomechanism: {
              steps: ['Inhalation', 'Lungeninfektion (oft asymptomatisch)', 'Reaktivierung/Disseminierung bei Immunsuppression', 'Überwindung der Blut-Hirn-Schranke', 'Polysaccharidkapsel hemmt Phagozytose'],
              virulence_factors: ['Polysaccharidkapsel', 'Melaninproduktion']
            },
            clinical: {
              incubation: 'Unbekannt (Reaktivierung)',
              onset: 'Subakut/Chronisch (Wochen)',
              symptoms: [
                { name: 'Kopfschmerzen', description: 'Leitsymptom (70-90%)', severity: 'severe' },
                { name: 'Fieber', description: 'In 60-80%', severity: 'moderate' },
                { name: 'Meningeale Zeichen', description: 'NUR in 20-30%! (irreführend)', severity: 'mild' },
                { name: 'Sehstörung', description: 'Diplopie, Photophobie (wegen hohem Hirndruck)', severity: 'severe' },
                { name: 'Bewusstseinsstörung', description: 'Lethargie, Verwirrtheit', severity: 'severe' }
              ],
              physical_exam: ['Meningeale Zeichen fehlen oft!', 'Stauungspapille (hoher Hirndruck)', 'Hautsymptome (Molluscum-artig)'],
              complications: ['Hoher Hirndruck (Erblindung, Einklemmung)', 'Kryptokokkom', 'IRIS (bei Therapiestart)']
            },
            diagnostics: {
              laboratory: [{ test: 'CD4', finding: '<100/µL', interpretation: 'Risiko' }],
              imaging: [{ modality: 'CT/MRT', finding: 'Oft normal, oder erweiterte perivaskuläre Räume, Kryptokokkom', significance: 'Ausschluss' }],
              microbiology: [
                { test: 'Liquor-CrAg (Antigen)', finding: 'Positiv', significance: 'Goldstandard (auch aus Blut!)' },
                { test: 'Tusche-Färbung (India ink)', finding: 'Bekapselte Hefepilze', significance: 'Schnell, aber weniger sensitiv' },
                { test: 'Liquorkultur', finding: 'C. neoformans', significance: 'Diagnostisch' },
                { test: 'Liquordruck', finding: 'Oft extrem hoch (>25 cmH2O)', significance: 'Therapeutische Punktion erforderlich' }
              ]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Amphotericin B + Flucytosin', dose: 'i.v. + p.o.', duration: '2 Wochen (Induktion)', note: 'Goldstandard' }] },
              targeted: 'Induktion (AmB+5FC) -> Konsolidierung (Fluconazol 400mg 8 Wochen) -> Erhaltung (Fluconazol 200mg 1 Jahr/CD4>200).',
              supportive: ['Wiederholte LP zur Drucksenkung (lebenswichtig!)'],
              prevention: ['Fluconazol-Prophylaxe (wenn CrAg im Blut positiv)', 'ART-Start (aber vorsichtig wegen IRIS)']
            },
            prognosis: { mortality: 'Mit Behandlung 10-30%, unbehandelt 100%', prognostic_scores: [], factors: 'Behandlungszeitpunkt, Immunstatus' }
          },
          {
            id: 'naegleria_meningitis',
            name: 'Primäre Amöben-Meningoenzephalitis (PAM)',
            pathogen: { type: 'Protozoon', name: 'Naegleria fowleri', gram: '-', shape: 'Amöbe' },
            epidemiology: {
              incidence: 'Sehr selten, aber tödlich',
              risk_groups: ['Kinder/Jugendliche', 'Personen, die in Süßwasser schwimmen'],
              seasonality: 'Sommer (warmes Wasser)',
              transmission: 'Wasser dringt in die Nase ein -> Riechnerv -> Gehirn'
            },
            pathomechanism: {
              steps: ['Eindringen von Wasser in die Nase', 'Penetration der Lamina cribrosa', 'Wanderung entlang des Riechnervs', 'Lyse des Hirngewebes (Trophozoiten)'],
              virulence_factors: ['Gewebeabbauende Enzyme', 'Amebostome (Fressapparat)']
            },
            clinical: {
              incubation: '1-9 Tage (durchschnittlich 5)',
              onset: 'Fulminant',
              symptoms: [
                { name: 'Anfangssymptome', description: 'Schwere frontale Kopfschmerzen, Fieber, Übelkeit, Erbrechen', severity: 'severe' },
                { name: 'Spätsymptome', description: 'Nackensteifigkeit, Krampfanfälle, Bewusstseinsstörung, Halluzinationen, Koma', severity: 'severe' },
                { name: 'Geruch/Geschmack', description: 'Parosmie/Ageusie (kann frühes Zeichen sein)', severity: 'moderate' }
              ],
              physical_exam: ['Meningeale Reizung', 'Koma', 'Schnelle Verschlechterung'],
              complications: ['Einklemmung', 'Tod (innerhalb von 3-7 Tagen)']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Eitrig (PMN), Erythrozyten, niedriger Zucker', interpretation: 'Sieht bakteriell aus!' }],
              microbiology: [
                { test: 'Liquormikroskopie (nativ)', finding: 'Bewegliche Amöben', significance: 'Diagnostisch (aber Erfahrung nötig)' },
                { test: 'PCR', finding: 'Naegleria DNA', significance: 'CDC/Referenzlabor' }
              ]
            },
            therapy: {
              empirical: { icu: [{ drug: 'Miltefosin + Amphotericin B + Rifampicin + Fluconazol + Azithromycin', dose: 'Kombination', duration: '?', note: 'Experimentell, wenige Überlebende' }] },
              targeted: 'Miltefosin ist das Schlüsselmedikament. Kühlung (Hypothermie) kann helfen.',
              supportive: [],
              prevention: ['Nasenklammer in warmem Süßwasser', 'Nasenspülung nur mit sterilem Wasser']
            },
            prognosis: { mortality: '>97% (fast immer tödlich)', prognostic_scores: [], factors: 'Verfügbarkeit der Behandlung' }
          }
        ]
      },
});