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
                { name: 'Hypotonie', description: 'Systolischer RR <90 mmHg (Erwachsene), orthostatischer Schwindel', severity: 'severe' },
                { name: 'Diffuse Erythrodermie', description: 'Sonnenbrandähnlicher Ausschlag (Staph: >90%, Strep: seltener)', severity: 'moderate' },
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