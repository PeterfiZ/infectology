Object.assign(window.diseases, {
      sepsis_systemic: {
        name: 'Sepsis und systemische Infektionen',
        icon: '⚡',
        color: '#7f1d1d',
        diseases: [
          {
            id: 'sepsis',
            name: 'Sepsis',
            pathogen: { type: 'Syndrom', name: 'Bakterien (G+/G-), Pilze, Viren', gram: 'Variabel', shape: '-' },
            epidemiology: {
              incidence: 'Weltweit 49 Millionen Fälle/Jahr, 11 Millionen Todesfälle (20% aller Todesfälle)',
              risk_groups: ['Ältere (>65 Jahre)', 'Säuglinge (<1 Jahr)', 'Immungeschwächte', 'Chronisch Kranke', 'Patienten mit invasiven Geräten'],
              seasonality: 'Keine (im Winter häufiger wegen respiratorischem Ursprung)',
              transmission: 'Nicht ansteckend (die auslösende Infektion kann es sein)'
            },
            pathomechanism: {
              steps: [
                'Während der Infektion werden pathogen-assoziierte molekulare Muster (PAMPs) von Rezeptoren des angeborenen Immunsystems (z. B. Toll-like-Rezeptoren) erkannt, was eine massive Entzündungsreaktion auslöst.',
                'Es entwickelt sich ein proinflammatorischer Zytokinsturm (TNF-α, IL-1, IL-6), der zu einer systemischen Endothelaktivierung und -schädigung führt und die Gefäßpermeabilität erhöht (Kapillarleck).',
                'Die Aktivierung der Gerinnungskaskade und die Hemmung der Fibrinolyse führen zur disseminierten intravasalen Koagulation (DIC) und zur Bildung von Mikrothromben.',
                'Mikrozirkulationsstörungen, Gewebehypoxie und mitochondriale Dysfunktion führen letztlich zum Multiorganversagen (MODS) und zum Tod.'
              ],
              virulence_factors: ['Endotoxin (LPS)', 'Superantigene', 'Exotoxine', 'Kapsel']
            },
            clinical: {
              incubation: 'Hängt von der Grunderkrankung ab',
              onset: 'Kann innerhalb von Stunden fortschreiten',
              symptoms: [
                { name: 'Fieber oder Hypothermie', description: '>38°C oder <36°C (10-20% der Patienten sind hypotherm)', severity: 'severe' },
                { name: 'Bewusstseinsstörung', description: 'GCS <15, Agitiertheit, Lethargie (häufiges Frühzeichen bei Älteren)', severity: 'severe' },
                { name: 'Hypotonie', description: 'Systolischer RR <100 mmHg oder MAP <65 mmHg', severity: 'severe' },
                { name: 'Tachypnoe', description: '>22/min (oft das erste Zeichen)', severity: 'moderate' },
                { name: 'Oligurie', description: '<0.5 ml/kg/Stunde (verminderte Nierenperfusion)', severity: 'severe' },
                { name: 'Hautsymptome', description: 'Marmorierung, kalte Extremitäten (Schockzeichen)', severity: 'severe' }
              ],
              physical_exam: [
                'Fieber oder Hypothermie',
                'Tachykardie (>90/min)',
                'Tachypnoe (>20/min)',
                'Verlängerte Rekapillarisierungszeit (>3 Sek.)',
                'Marmorierte Haut (Mottling Score)',
                'Verwirrtheit'
              ],
              complications: ['Septischer Schock (Vasopressorenbedarf + Laktat >2)', 'ARDS', 'DIC', 'Akutes Nierenversagen', 'Leberversagen', 'Tod']
            },
            diagnostics: {
              laboratory: [
                { test: 'Laktat', finding: '>2 mmol/L', interpretation: 'Gewebehypoxie/Schock (Schwerwiegend!)' },
                { test: 'Blutkultur', finding: 'Positiv (30-50%)', interpretation: 'VOR AB-Gabe abnehmen (2 Sets)' },
                { test: 'PCT', finding: 'Deutlich erhöht', interpretation: 'Bakterieller Ursprung wahrscheinlich' },
                { test: 'Blutbild', finding: 'Leukozytose oder Leukopenie', interpretation: 'Entzündung' }
              ],
              imaging: [
                { modality: 'CT/Röntgen/US', finding: 'Fokussuche', significance: 'Entscheidend für Fokussanierung' }
              ],
              microbiology: [
                { test: 'Blutkultur', finding: 'Erregeridentifikation', significance: 'Basis für gezielte Therapie' },
                { test: 'Andere Kulturen', finding: 'Urin, Sputum, Wunde, Liquor', significance: 'Fokusabhängig' }
              ],
              scores: [
                'SOFA-Score (≥2 Punkte Änderung gegenüber dem Ausgangswert definiert Sepsis)',
                'qSOFA (Screening): Atemfrequenz ≥22/min, Bewusstseinsstörung (GCS<15), Systolischer RR ≤100 mmHg'
              ],
              calculators: [
                {
                  name: 'qSOFA (quick SOFA) - Sepsis-Screening',
                  items: [
                    { label: 'Atemfrequenz ≥ 22/min', points: 1 },
                    { label: 'Bewusstseinsstörung (GCS < 15)', points: 1 },
                    { label: 'Systolischer RR ≤ 100 mmHg', points: 1 }
                  ],
                  interpretation: [
                    { min: 0, max: 1, text: 'Niedriges Risiko. Überwachung, ggf. Neubewertung.' },
                    { min: 2, max: 3, text: 'Hohes Risiko für schlechten Ausgang. Sepsis-Verdacht, SOFA-Score erheben.' }
                  ]
                }
              ]
            },
            differential: [
              { disease: 'Kardiogener Schock', distinguishing: 'Echo (reduzierte EF), erhöhter ZVD/JVP' },
              { disease: 'Hypovolämischer Schock', distinguishing: 'Anamnese (Blutung, Flüssigkeitsverlust), trockene Schleimhäute' },
              { disease: 'Anaphylaxie', distinguishing: 'Allergenexposition, Urtikaria, Stridor' },
              { disease: 'Nebennierenrindeninsuffizienz', distinguishing: 'Hyponatriämie, Hyperkaliämie, Cortisolspiegel' }
            ],
            therapy: {
              guidelines: ['Surviving Sepsis Campaign 2021'],
              empirical: {
                sepsis_six: {
                  title: 'Sepsis Six Bündel (Innerhalb 1 Stunde!)',
                  drugs: [
                    { drug: '1. Sauerstoffgabe', dose: 'Ziel SpO2 >94%', duration: 'Sofort', note: 'High-Flow wenn nötig.' },
                    { drug: '2. Blutkulturen abnehmen', dose: '2 Sets', duration: 'Vor AB', note: 'Peripher (und aus Katheter falls vorhanden).' },
                    { drug: '3. i.v. Antibiotika', dose: 'Breitspektrum', duration: 'Innerhalb 1 Std.', note: 'Fokusabhängig (z.B. Pip/Tazo, Meropenem).' },
                    { drug: '4. Flüssigkeitsgabe', dose: '30 ml/kg Kristalloid', duration: 'Bolus', note: 'Bei Hypotonie oder Laktat ≥4 mmol/L.' },
                    { drug: '5. Laktat messen', dose: 'Blut', duration: 'Seriell', note: 'Überwachung der Gewebeperfusion.' },
                    { drug: '6. Urinausscheidung', dose: 'Überwachung', duration: 'Stündlich', note: 'Nierenfunktion und Flüssigkeitsbilanz.' }
                  ]
                },
                icu: {
                  title: 'Intensivmedizinische Behandlung',
                  drugs: [
                    { drug: 'Noradrenalin', dose: 'MAP >65 mmHg halten', duration: 'Kontinuierlich', note: 'Vasopressor der ersten Wahl.' },
                    { drug: 'Vasopressin', dose: 'max 0.03 U/min', duration: 'Kontinuierlich', note: 'Zusätzlich zu Noradrenalin.' },
                    { drug: 'Hydrocortison', dose: '200mg/Tag', duration: 'Kontinuierlich', note: 'Bei refraktärem Schock.' }
                  ]
                }
              },
              targeted: 'Deeskalation basierend auf Antibiogramm (PCT kann Entscheidung unterstützen). Fokussanierung (Abszessdrainage, Entfernung von nekrotischem Gewebe) ist unerlässlich.',
              supportive: ['Überwachung der Laktat-Clearance', 'Beatmung (ARDS-Protokoll)', 'Nierenersatztherapie (CRRT)', 'Blutzuckerkontrolle', 'Thromboseprophylaxe', 'Stressulkusprophylaxe'],
              prevention: ['Krankenhaushygiene', 'Impfungen (Pneumokokken, Influenza)', 'Frühzeitige Entfernung von Kathetern', 'Angemessene Wundversorgung']
            },
            prognosis: {
              mortality: 'Sepsis: 10-20%, Septischer Schock: 40-60%',
              prognostic_scores: ['SOFA-Score (≥2 Punkte Änderung)', 'qSOFA (Screening)', 'APACHE II'],
              factors: 'Alter, Komorbidität, Laktatspiegel, Schockdauer, Erfolg der Fokussanierung'
            }
          },
          {
            id: 'fuo',
            name: 'Fieber unklarer Genese (FUO)',
            pathogen: { type: 'Syndrom', name: 'Infektion, Entzündung, Malignität, Autoimmun-/andere Ursachen', gram: 'Variabel', shape: '-' },
            epidemiology: {
              incidence: 'Etwa 5-15% aller Fieberfälle fallen in die FUO-Gruppe; Häufige Ursachen sind Infektionen, Tumoren und autoimmun/entzündliche Erkrankungen.',
              risk_groups: ['Ältere', 'Immungeschwächte', 'Onkologische Patienten', 'Patienten mit chronisch entzündlichen Erkrankungen'],
              seasonality: 'Keine',
              transmission: 'Nicht ansteckend'
            },
            pathomechanism: {
              steps: [
                'FUO entsteht nicht durch einen einzelnen Erreger oder einen einzigen Mechanismus, sondern ist die gemeinsame klinische Manifestation verschiedener Erkrankungen.',
                'Zu den Ursachen zählen chronische Infektionen, neoplastische Prozesse, autoimmun/entzündliche Erkrankungen sowie bestimmte Medikamente oder Stoffwechselerkrankungen.',
                'Für die Fieberentstehung sind meist inflammatorische Mediatoren (z. B. IL-1, IL-6, TNF-α) und eine veränderte Thermoregulation relevant.',
                'Die Diagnose beruht auf der Identifizierung der zugrunde liegenden Ursache durch Kombination aus Klinik und gezielten Untersuchungen.'
              ],
              virulence_factors: ['Es gibt keinen einheitlichen Virulenzfaktor; der Mechanismus hängt von der zugrunde liegenden Erkrankung ab']
            },
            clinical: {
              incubation: 'Keine einheitliche Inkubationszeit',
              onset: 'Mehrwöchiges, wiederkehrendes oder anhaltendes Fieber',
              symptoms: [
                { name: 'Fieber', description: '>38,3°C, wiederkehrend oder mindestens 3 Wochen anhaltend', severity: 'severe' },
                { name: 'Nachtschweiß', description: 'Häufig, besonders bei Infektionen und Malignomen', severity: 'moderate' },
                { name: 'Gewichtsverlust', description: 'Kann begleitend auftreten, besonders bei Tumoren oder chronischen Erkrankungen', severity: 'moderate' },
                { name: 'Müdigkeit', description: 'Erschöpfung, Schwäche, reduzierte Leistungsfähigkeit', severity: 'moderate' },
                { name: 'Lokale Symptome', description: 'Husten, Bauchschmerzen, Lymphknotenschwellung, Gelenkbeschwerden, Harnwegsymptome', severity: 'moderate' }
              ],
              physical_exam: [
                'Wiederholte Fiebermessung und Fieberprofil',
                'Gewicht, Allgemeinzustand, Perfusion',
                'Untersuchung von Lymphknoten, Leber, Milz, Gelenken, Herz und Lunge',
                'Suche nach Hautbefunden und Infektionsquellen'
              ],
              complications: ['Späte Diagnose', 'Schwere Grunderkrankung kann übersehen werden', 'Erhöhte Morbidität und Mortalität je nach Ursache']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC, CRP, ESR', finding: 'Entzündungszeichen', interpretation: 'Erste Abklärung' },
                { test: 'Blutchemie, Leber- und Nierenfunktion', finding: 'Organbeteiligung', interpretation: 'Basisuntersuchung' },
                { test: 'PCT', finding: 'Kann auf bakterielle Infektion hinweisen', interpretation: 'Hilft bei der Feineinstellung des Infektionsverdachts' },
                { test: 'Autoimmunmarker', finding: 'ANA, RF, anti-CCP usw.', interpretation: 'Suche nach autoimmun/entzündlichen Ursachen' }
              ],
              imaging: [
                { modality: 'CT/PET-CT, US, Röntgen', finding: 'Quellen, Tumoren, Abszesse', significance: 'Wichtige Methode zur Quellensuche' }
              ],
              microbiology: [
                { test: 'Blutkultur, Urin, Sputum, Stuhl, Proben je nach Symptomen', finding: 'Infektive Quellen', significance: 'Nachweis infektiöser Ursachen' }
              ],
              scores: ['Es gibt keinen einheitlichen FUO-Score'],
              calculators: [
                {
                  name: 'FUO-Definition',
                  items: [
                    { label: 'Fieber >38,3°C', points: 1 },
                    { label: 'Mindestens 3 Wochen', points: 1 },
                    { label: 'Nach der initialen Abklärung keine Diagnose', points: 1 }
                  ],
                  interpretation: [
                    { min: 0, max: 1, text: 'Keine vollständige FUO-Definition.' },
                    { min: 2, max: 3, text: 'Verdacht auf FUO, detaillierte Abklärung indiziert.' }
                  ]
                }
              ]
            },
            differential: [
              { disease: 'Infektion', distinguishing: 'Kultur, Bildgebung, PCT, klinischer Fokus' },
              { disease: 'Onkologische Erkrankung', distinguishing: 'Gewichtsverlust, Nachtschweiß, PET-CT, Tumormarker' },
              { disease: 'Autoimmun/entzündliche Erkrankung', distinguishing: 'CRP/ESR, ANA/RF, Gelenk-/Organbefunde' },
              { disease: 'Medikamentenreaktion / Stoffwechselerkrankung', distinguishing: 'Neues Medikament, Eosinophilie, metabolische Auffälligkeiten' }
            ],
            therapy: {
              guidelines: ['Die Therapie ist ursachenspezifisch; FUO ist nicht als eigenständige Erkrankung zu behandeln.'],
              empirical: {
                outpatient: [
                  { drug: 'Keine Routine-Empirie mit Antibiotika', dose: '-', duration: '-', note: 'Nur bei klarer Indikation vor der Diagnosestellung.' }
                ],
                inpatient: [
                  { drug: 'Empirische antimikrobielle Therapie', dose: 'Je nach Indikation', duration: 'Kurzzeitig', note: 'Nur bei schwerer Infektion oder klinischem Verdacht.' }
                ],
                icu: [
                  { drug: 'Behandlung von schwerer Sepsis/Schock', dose: 'Nach aktuellem Protokoll', duration: 'Sofort', note: 'Wenn das Fieber mit Sepsis assoziiert ist.' }
                ]
              },
              targeted: 'Ursachengerechte Therapie: bei Infektion antimikrobielle Behandlung, bei Malignität onkologische Behandlung, bei Autoimmunerkrankungen immunsuppressive Therapie.',
              supportive: ['Flüssigkeit', 'Fiebersenkung', 'Regelmäßige Überwachung', 'Symptomatische Behandlung'],
              prevention: ['Frühe Abklärung der Ursache', 'Behandlung von Infektionsquellen', 'Beobachtung von Immunstatus und Risikofaktoren']
            },
            prognosis: {
              mortality: 'Das Ergebnis hängt von der Ursache ab; späte Diagnose und komplexe Infektionen oder Malignome können schlechtere Ergebnisse haben.',
              prognostic_scores: ['Es gibt keinen einheitlichen FUO-Score'],
              factors: 'Ursache, Immunsystemstatus, Alter, frühzeitiger Beginn der Abklärung'
            }
          },
          {
            id: 'pyomyositis',
            name: 'Pyomyositis',
            pathogen: { type: 'Bakterium', name: '<i>Staphylococcus aureus</i> (meist), <i>Streptococcus pyogenes</i>, Gram-negative Erreger', gram: 'Gram-positiv/negativ', shape: 'Kokken/Bazillen' },
            epidemiology: {
              incidence: 'In Industrieländern seltener, aber häufiger in tropischen Regionen und bei Immungeschwächten',
              risk_groups: ['HIV/AIDS', 'Diabetes mellitus', 'Immunsuppression', 'IV-Drogengebrauch', 'Trauma, Muskelverletzung', 'Neugeborene/Kinder'],
              seasonality: 'Keine',
              transmission: 'Nicht direkt übertragbar; entsteht meist aus Hautinfektion/Kolonisation oder hämatogener Ausbreitung'
            },
            pathomechanism: {
              steps: [
                'Bakterien gelangen nach Gewebeschädigung, Hautinfektion oder hämatogener Ausbreitung in den Muskel.',
                'Die lokale Entzündungsreaktion und das Bakterienwachstum führen zu Muskelfaserzerstörung, Abszessbildung und Gewebsnekrose.',
                'Der Prozess kann zu einem Abszess und später zu einer systemischen Infektion fortschreiten.',
                'Am häufigsten ist Staphylococcus aureus, aber auch Streptokokken und Gram-negative Erreger kommen vor.'
              ],
              virulence_factors: ['S. aureus Biofilm/Adhäsine', 'Kapsel', 'Exotoxine', 'Gewebeinvasion']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Langsam oder akut',
              symptoms: [
                { name: 'Muskelschmerzen', description: 'Tiefe Muskelschmerzen ohne Gelenkbeteiligung, Schwellung', severity: 'severe' },
                { name: 'Fieber', description: 'Mittelgradiges bis hohes Fieber', severity: 'moderate' },
                { name: 'Schwellung und Druckschmerz', description: 'Der betroffene Muskel ist tastbar schmerzhaft und geschwollen', severity: 'moderate' },
                { name: 'Müdigkeit', description: 'Allgemeinbefinden gestört', severity: 'mild' }
              ],
              physical_exam: [
                'Druckschmerz und Schwellung im betroffenen Muskel',
                'Fieber, Tachykardie',
                'Bei Abszessbildung: gut abgrenzbarer, fluktuierender Tastbefund',
                'Gelegentlich sind auch umliegende Muskulatur oder Haut betroffen'
              ],
              complications: ['Muskelabszess', 'Septische Thromboembolie', 'Sepsis', 'Becken-/andere Abszesse', 'Chronische Infektion']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild, CRP', finding: 'Entzündungszeichen', interpretation: 'Basisuntersuchung' },
                { test: 'Blutkultur', finding: 'Kann positiv sein', interpretation: 'Erfassung von Bakteriämie' },
                { test: 'CK', finding: 'Erhöht', interpretation: 'Muskelbeteiligung' }
              ],
              imaging: [
                { modality: 'US / CT / MRT', finding: 'Muskelödem, Abszess, Entzündung', significance: 'Wichtigste Bildgebung' }
              ],
              microbiology: [
                { test: 'Kultur', finding: 'Drainage/Aspirat, wenn möglich', significance: 'Erreger und Resistenz' }
              ]
            },
            differential: [
              { disease: 'Muskelzerrung / Hämatom', distinguishing: 'Nicht infektiös, keine Entzündung' },
              { disease: 'Cellulitis', distinguishing: 'Oberflächlicher und weniger lokalisiert' },
              { disease: 'Osteomyelitis', distinguishing: 'Knochenbeteiligung, positive Knochenbildgebung' },
              { disease: 'TVT', distinguishing: 'Venenthrombose, kein Abszess' }
            ],
            therapy: {
              guidelines: ['Bei schwerer oder abszedierter Erkrankung ist eine schnelle antibiotische und chirurgische Behandlung erforderlich.'],
              empirical: {
                outpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Bei schwerer oder abszedierter Erkrankung Krankenhausbehandlung.' }
                ],
                inpatient: [
                  { drug: 'Anti-staphylokokken IV-Therapie', dose: 'Nafcillin/Cefazolin oder Vancomycin', duration: '7-14 Tage', note: 'Bei MRSA-Verdacht Vancomycin.' }
                ],
                icu: [
                  { drug: 'Schwere Sepsis/Schock', dose: 'Nach Protokoll', duration: 'Sofort', note: 'Intensivversorgung und Fokussanierung.' }
                ]
              },
              targeted: 'Kultur-/Aspirationsbasierte gezielte Antibiotika, bei Abszess Drainage.',
              supportive: ['Schmerztherapie', 'Flüssigkeit', 'Überwachung', 'Chirurgische Drainage'],
              prevention: ['Behandlung von Hautinfektionen', 'Schutz von Hautläsionen', 'Behandlung von Immunsuppression']
            },
            prognosis: {
              mortality: 'Meist niedrig, aber bei immungeschwächten oder spät behandelten Fällen höher',
              prognostic_scores: ['Es gibt keinen einheitlichen Score'],
              factors: 'Erreger, Immunsystemstatus, späte Diagnose, Vorliegen eines Abszesses'
            }
          },
          {
            id: 'toxic_shock',
            name: 'Toxisches Schocksyndrom (TSS)',
            pathogen: { type: 'Bakterium', name: '<i>Staphylococcus aureus, Streptococcus pyogenes</i>', gram: 'Gram-positiv', shape: 'Kokken' },
            epidemiology: {
              incidence: 'Selten (Staph: 0.5/100.000, Strep: 3/100.000)',
              risk_groups: ['Menstruierende Frauen (Tampon - heute seltener)', 'Chirurgische Patienten', 'Verbrennungsopfer', 'Hautinfektionen'],
              seasonality: 'Keine',
              transmission: 'Nicht direkt übertragbar (toxinvermittelt)'
            },
            pathomechanism: {
              steps: [
                'Bei einer lokalen Infektion oder Kolonisation durch Staphylococcus aureus oder Streptococcus pyogenes werden Exotoxine (z.B. TSST-1, SpeA) produziert.',
                'Diese Toxine wirken als Superantigene: Sie binden an MHC-II-Moleküle auf antigenpräsentierenden Zellen und an T-Zell-Rezeptoren und aktivieren unspezifisch bis zu 20% der T-Zellen (normalerweise <0,01%).',
                'Diese massive T-Zell-Aktivierung führt zu einem unkontrollierten Zytokinsturm (TNF-α, IL-1, IL-6).',
                'Die Zytokine verursachen ein schweres Kapillarleck, Vasodilatation und Hypotonie, was rasch zu Schock und Multiorganversagen führt.'
              ],
              virulence_factors: ['TSST-1 (Staph)', 'Streptococcal Pyrogenic Exotoxins (Spe)', 'M-Protein (Strep)']
            },
            clinical: {
              incubation: 'Schnell (Stunden-Tage)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Hohes Fieber', description: '>38.9°C (plötzlicher Beginn)', severity: 'severe' },
                { name: 'Hypotonie', description: 'Systolischer RR <90 mmHg bei Erwachsenen, orthostatischer Schwindel', severity: 'severe' },
                { name: 'Diffuse Erythrodermie', description: 'Sonnenbrandähnlicher Ausschlag (Staph TSS >90%, Strep TSS seltener)', severity: 'moderate' },
                { name: 'Multisystemische Symptome', description: 'GI (Erbrechen/Durchfall), Muskelschmerzen (CK-Erhöhung), Schleimhauthyperämie', severity: 'severe' },
                { name: 'Desquamation', description: '1-2 Wochen nach Beginn (Handflächen/Fußsohlen)', severity: 'mild' }
              ],
              physical_exam: [
                'Diffuser roter Ausschlag (Erythrodermie)',
                'Hypotonie, Tachykardie',
                'Schleimhauthyperämie (Konjunktiva, Oropharynx, Vagina)',
                'Himbeerzunge (hauptsächlich Strep TSS)',
                'Bewusstseinsstörung (55%)',
                'Zeichen einer lokalen Weichteilinfektion (Strep TSS: nekrotisierende Fasziitis, Myositis)'
              ],
              complications: ['Schock', 'ARDS', 'DIC', 'Nierenversagen', 'Gliedmaßennekrose (Strep)', 'Tod']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose, Thrombozytopenie', interpretation: 'Systemische Entzündung' },
                { test: 'Niere/Leber', finding: 'Kreatinin↑, Transaminasen↑', interpretation: 'Organversagen' },
                { test: 'CK', finding: 'Erhöht', interpretation: 'Rhabdomyolyse' },
                { test: 'Blutkultur', finding: 'Staph: oft negativ (Toxin!), Strep: oft positiv', interpretation: 'Ätiologie' }
              ],
              imaging: [
                { modality: 'CT/MRT', finding: 'Suche nach tiefer Gewebeinfektion', significance: 'Strep TSS (nekrotisierende Fasziitis)' }
              ],
              microbiology: [
                { test: 'Kultur', finding: 'Wunde, Vagina, Rachen, Blut', significance: 'Erregeridentifikation' },
                { test: 'Toxinnachweis', finding: 'TSST-1', significance: 'Referenzlabor' }
              ]
            },
            differential: [
              { disease: 'Sepsis (andere)', distinguishing: 'Kein charakteristischer Ausschlag/Desquamation' },
              { disease: 'Meningokokkämie', distinguishing: 'Petechien/Purpura, Meningitiszeichen' },
              { disease: 'Arzneimittelreaktion (DRESS)', distinguishing: 'Neues Medikament, langsamer, Eosinophilie' },
              { disease: 'Scharlach', distinguishing: 'Milder, kein Schock' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Sofortige Aufnahme auf die Intensivstation!' }
                ],
                inpatient: [
                  { drug: 'Clindamycin', dose: '900mg i.v. alle 8 Stunden', duration: '', note: 'Hemmung der Toxinproduktion! (Entscheidend)' },
                  { drug: '+ Vancomycin/Linezolid', dose: 'i.v.', duration: '', note: 'MRSA-Abdeckung' },
                  { drug: '+ Pip/Tazo oder Meropenem', dose: 'i.v.', duration: '', note: 'Bei polymikrobiellem Verdacht' }
                ],
                icu: [
                  { drug: 'IVIG', dose: '1-2g/kg', duration: 'Einmalig', note: 'Toxinneutralisation (Strep TSS)' },
                  { drug: 'Vasopressoren', dose: 'Noradrenalin', duration: '', note: 'Schockbehandlung' }
                ]
              },
              targeted: 'Staph (MSSA): Flucloxacillin (Cefazolin) + Clindamycin; MRSA: Vancomycin + Clindamycin. Strep: Penicillin G + Clindamycin (Toxinhemmung). IVIG in schweren Fällen. Fokussanierung (Tampon entfernen, chirurgische Exploration) ist unerlässlich!',
              supportive: ['Massive Volumensubstitution', 'Beatmung', 'Dialyse', 'Wundversorgung'],
              prevention: ['Tamponhygiene (häufiger Wechsel)', 'Wunddesinfektion']
            },
            prognosis: {
              mortality: 'Staph TSS: <3%, Strep TSS: 30-70%',
              prognostic_scores: ['SOFA'],
              factors: 'Erreger (Strep schlechter), Alter, Grunderkrankung'
            }
          }
        ]
      },
      fungal: {
        name: 'Pilzinfektionen',
        icon: '🍄',
        color: '#d97706',
        diseases: [
          {
            id: 'candidiasis',
            name: 'Invasive Candidose',
            pathogen: { type: 'Pilz', name: '<i>Candida albicans</i> (und Non-albicans-Arten)', gram: 'Hefepilz', shape: 'oval' },
            epidemiology: {
              incidence: '4. häufigste Ursache für nosokomiale Blutstrominfektionen',
              risk_groups: ['Intensivpatienten', 'Zentraler Venenkatheter (ZVK)', 'Breitbandantibiotika', 'TPN', 'Bauchchirurgie'],
              seasonality: 'Keine',
              transmission: 'Endogen (aus dem GI-Trakt), exogen (Hände, Geräte)'
            },
            pathomechanism: {
              steps: [
                'Schädigung der Schleimhautbarriere (AB, Chemo)',
                'Translokation in den Blutkreislauf',
                'Biofilmbildung (Katheter)',
                'Hämatogene Disseminierung (Auge, Herz, Leber, Milz)'
              ],
              virulence_factors: ['Biofilm', 'Adhäsine', 'Enzyme (Protease, Phospholipase)']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Langsam oder akut',
              symptoms: [
                { name: 'Anhaltendes Fieber', description: 'Fieber, das nicht auf Antibiotika anspricht (häufig)', severity: 'severe' },
                { name: 'Sepsis/Septischer Schock', description: 'Hypotonie, Tachykardie, Bewusstseinsstörung', severity: 'severe' },
                { name: 'Endophthalmitis', description: 'Sehstörung, Augenschmerzen (10-20% bei Candidämie)', severity: 'moderate' },
                { name: 'Hautsymptome', description: 'Erythematöse Papeln/Pusteln (5-10%)', severity: 'mild' },
                { name: 'Hepatosplenische Candidose', description: 'Fieber, Bauchschmerzen nach Neutropenie', severity: 'moderate' }
              ],
              physical_exam: [
                'Fieber, hämodynamische Instabilität (Zeichen von Sepsis/Schock)',
                'Fundoskopie (obligatorisch!): Weiße, watteartige Flecken (Roth-Fleck), Chorioretinitis',
                'Hautsymptome: Erythematöse Papeln oder Pusteln',
                'Neues Herzgeräusch (Verdacht auf Endokarditis)',
                'Muskelempfindlichkeit (Myositis)'
              ],
              complications: ['Septischer Schock', 'Endophthalmitis (Erblindung)', 'Endokarditis', 'Osteomyelitis', 'Tod']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutkultur', finding: 'Positiv (nur 50-70% sensitiv!)', interpretation: 'Goldstandard' },
                { test: 'Beta-D-Glukan', finding: 'Erhöht (>80 pg/mL)', interpretation: 'Pan-fungaler Marker (außer Mucor/Crypto)' }
              ],
              imaging: [
                { modality: 'Abdomen-US/CT', finding: 'Mikroabszesse (Leber, Milz)', significance: 'Chronisch disseminiert' },
                { modality: 'Augenheilkunde', finding: 'Chorioretinitis', significance: 'Obligatorisch bei allen fungämischen Patienten!' }
              ],
              microbiology: [
                { test: 'Kultur', finding: 'Candida sp.', significance: 'Speziesidentifizierung und Resistenz (Fluconazol!)' },
                { test: 'T2Candida', finding: 'DNA-Nachweis aus Blut', significance: 'Schnell, sensitiv' }
              ]
            },
            differential: [
              { disease: 'Bakterielle Sepsis', distinguishing: 'Blutkultur, PCT (kann aber auch bei Pilzen erhöht sein)' },
              { disease: 'Aspergillose', distinguishing: 'Lungendominanz, Galactomannan' },
              { disease: 'Katheterinfektion (bakt)', distinguishing: 'Kultur' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Krankenhausbehandlung' }
                ],
                inpatient: [
                  { drug: 'Fluconazol', dose: '800mg Ladedosis, dann 400mg', duration: '14 Tage', note: 'Nur stabiler Patient, keine vorherige Azol-Exposition' }
                ],
                icu: [
                  { drug: 'Echinocandin (Caspofungin)', dose: '70mg -> 50mg', duration: '14 Tage (nach negativer BK)', note: 'Erste Wahl bei instabilem/schwerem Patienten' }
                ]
              },
              targeted: 'C. albicans: Fluconazol (wenn empfindlich); C. glabrata/krusei: Echinocandin. Augenheilkunde: systemisch + intravitreal.',
              supportive: ['ZVK-Entfernung (dringend empfohlen!)', 'Augenärztliches Konsil'],
              prevention: ['Händewaschen', 'Katheterpflege', 'Prophylaxe (Transplantierte)']
            },
            prognosis: {
              mortality: '30-40% (höher bei septischem Schock)',
              prognostic_scores: ['Candida-Score'],
              factors: 'Fokussanierung (Katheter), frühe Therapie'
            }
          },
          {
            id: 'aspergillosis',
            name: 'Invasive Aspergillose',
            pathogen: { type: 'Pilz', name: '<i>Aspergillus fumigatus</i>', gram: 'Schimmelpilz', shape: 'Hyphen (45° Verzweigung)' },
            epidemiology: {
              incidence: '5-10% der neutropenen Patienten',
              risk_groups: ['Verlängerte Neutropenie', 'Allogene Stammzelltransplantation', 'Solide Organtransplantation', 'Hochdosis-Steroide'],
              seasonality: 'Keine (Baustaubrisiko)',
              transmission: 'Inhalation von Konidien (aus der Luft)'
            },
            pathomechanism: {
              steps: [
                'Inhalation von Konidien in die Alveolen',
                'Makrophagendysfunktion (Immunsuppression)',
                'Keimung zu Hyphen',
                'Angioinvasion (Einbruch in Gefäße)',
                'Thrombose, Infarkt, Gewebenekrose',
                'Hämatogene Disseminierung (Gehirn, Haut)'
              ],
              virulence_factors: ['Angioinvasion', 'Gliotoxin', 'Melanin']
            },
            clinical: {
              incubation: 'Tage-Wochen (während Immunsuppression)',
              onset: 'Subakut/Akut',
              symptoms: [
                { name: 'Fieber', description: 'Antibiotika-resistentes Fieber (häufigstes Zeichen bei Neutropenie)', severity: 'severe' },
                { name: 'Husten', description: 'Trockener oder produktiver Husten', severity: 'moderate' },
                { name: 'Pleuritischer Thoraxschmerz', description: 'Scharfer, stechender Schmerz (Zeichen der Angioinvasion)', severity: 'moderate' },
                { name: 'Hämoptyse', description: 'Blutiger Auswurf (spätes, schweres Zeichen)', severity: 'severe' },
                { name: 'Sinusitis-Symptome', description: 'Gesichtsschmerz, schwarzer Nasenausfluss (Rhinosinusitis-Form)', severity: 'moderate' }
              ],
              physical_exam: [
                'Fieber, Tachypnoe',
                'Lungenauskultation kann spärlich sein, oder Pleurareiben',
                'Nasen-/Nebenhöhlenuntersuchung: Schwarzer, nekrotischer Schorf an der Nasenmuschel (invasive Sinusitis)',
                'Fokale neurologische Zeichen (Hirndissemination)',
                'Hautsymptome (nekrotische Geschwüre bei disseminiertem Fall)'
              ],
              complications: ['Massive Lungenblutung', 'Hirnabszess', 'Disseminierte Aspergillose', 'Tod']
            },
            diagnostics: {
              laboratory: [
                { test: 'Galactomannan (GM)', finding: 'Index >0.5', interpretation: 'Serum oder BAL (spezifisch für Aspergillus)' },
                { test: 'Beta-D-Glukan', finding: 'Positiv', interpretation: 'Unspezifisch' }
              ],
              imaging: [
                { modality: 'Thorax-CT', finding: 'Halo-Zeichen (früh), Luftsichelzeichen (spät), Rundherde', significance: 'Goldstandard-Bildgebung' }
              ],
              microbiology: [
                { test: 'BAL-Kultur', finding: 'Aspergillus sp.', significance: 'Bewiesener Fall' },
                { test: 'Mikroskopie', finding: 'Septierte Hyphen, 45° Verzweigung', significance: 'Biopsie/BAL' }
              ]
            },
            differential: [
              { disease: 'Mukormykose', distinguishing: 'Keine Septen, 90° Verzweigung, Voriconazol unwirksam!' },
              { disease: 'Bakterielle Pneumonie', distinguishing: 'Bildgebung (Halo), GM negativ' },
              { disease: 'Lungenembolie', distinguishing: 'Angio-CT, D-Dimer' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Krankenhausbehandlung' }
                ],
                inpatient: [
                  { drug: 'Voriconazol', dose: '6mg/kg -> 4mg/kg i.v./p.o.', duration: '6-12 Wochen', note: 'GOLDSTANDARD (Spiegelbestimmung!)' }
                ],
                icu: [
                  { drug: 'Isavuconazol', dose: '200mg i.v./p.o.', duration: 'Lang', note: 'Weniger Nebenwirkungen' },
                  { drug: 'Liposomales Amphotericin B', dose: '3-5mg/kg i.v.', duration: '', note: 'Alternative' }
                ]
              },
              targeted: 'Voriconazol oder Isavuconazol. Salvage: L-AmB, Caspofungin (Kombination umstritten).',
              supportive: ['Reduktion der Immunsuppression (wenn möglich)', 'G-CSF (Neutropenie-Erholung)', 'Chirurgische Resektion (massive Hämoptyse)'],
              prevention: ['Posaconazol-Prophylaxe (Neutropenie)', 'HEPA-gefilterte Zimmer', 'Maskentragen']
            },
            prognosis: {
              mortality: 'Hoch (30-80% je nach Risikogruppe)',
              prognostic_scores: ['Keine'],
              factors: 'Dauer der Neutropenie, Hirnbeteiligung, Therapiebeginn'
            }
          }
        ]
      },
});