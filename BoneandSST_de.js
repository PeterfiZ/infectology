Object.assign(window.diseases, {
     skin_soft_tissue: {
        name: 'Haut- und Weichteilinfektionen',
        icon: '🩹',
        color: '#e11d48',
        diseases: [
          {
            id: 'necrotizing_fasciitis',
            name: 'Nekrotisierende Fasziitis',
            pathogen: { type: 'Bakterium', name: 'Polymikrobiell oder Strep. pyogenes/S. aureus', gram: 'Gemischt', shape: 'Variabel' },
            epidemiology: {
              incidence: 'Selten (0.4/100.000), aber zunehmende Inzidenz',
              risk_groups: ['Diabetes mellitus', 'Periphere arterielle Verschlusskrankheit', 'Immunsuppression', 'Chronischer Alkoholismus', 'IV-Drogenkonsumenten', 'Post-Trauma/Operation'],
              seasonality: 'Keine',
              transmission: 'Endogen (Hautläsion als Eintrittspforte) oder direkte Inokulation'
            },
            pathomechanism: {
              steps: [
                'Eindringen von Bakterien in das subkutane Gewebe (Trauma, Wunde, Varizellen)',
                'Schnelle Ausbreitung entlang der Faszienebenen',
                'Bakterielle Toxine → Thrombose in der Mikrovaskulatur',
                'Gewebsischämie und Nekrose',
                'Toxin-vermittelter Schock (Streptokokken)',
                'Haut anfangs intakt, da die oberflächliche Blutversorgung später beeinträchtigt wird'
              ],
              virulence_factors: ['Strep: M-Protein, Streptolysine, SpeA/B/C Superantigene', 'Staph: PVL, α-Toxin', 'Anaerobier: Kollagenasen, Proteasen']
            },
            clinical: {
              incubation: 'Stunden-Tage (nach Trauma)',
              onset: 'Hyperakut, schnell fortschreitend',
              symptoms: [
                { name: 'Intensive Schmerzen', description: 'UNVERHÄLTNISMÄSSIG zum körperlichen Befund (75-100%), Frühzeichen', severity: 'severe' },
                { name: 'Schwellung/Ödem', description: 'Spannendes, sich ausbreitendes Ödem (75-100%)', severity: 'severe' },
                { name: 'Hautveränderungen', description: 'Erythem (70-100%), später livide Verfärbung, Bullae, Nekrose (Spätzeichen!)', severity: 'severe' },
                { name: 'Fieber', description: 'Häufig, kann aber fehlen', severity: 'moderate' },
                { name: 'Krepitation', description: 'Gasbildung (13-30% - nicht immer vorhanden!)', severity: 'severe' },
                { name: 'Toxischer Zustand', description: 'Hypotonie, Tachykardie, Bewusstseinsstörung', severity: 'severe' }
              ],
              physical_exam: [
                'Schmerz ist unverhältnismäßig STARK im Vergleich zum sichtbaren Befund (Frühzeichen!)',
                'Spannendes Ödem, schnelle Ausbreitung',
                'Haut: Erythem → livide → Bullae → Nekrose',
                'Anästhesie im Bereich (Nervenschädigung)',
                'Krepitation bei Palpation (Gas)',
                'Systemische Zeichen: Tachykardie, Hypotonie, Verwirrtheit'
              ],
              complications: ['Septischer Schock', 'Multiorganversagen', 'Gliedmaßenverlust', 'Tod (20-40% auch mit Behandlung)']
            },
            diagnostics: {
              laboratory: [
                { test: 'LRINEC-Score', finding: '>6: hohe Wahrscheinlichkeit', interpretation: 'CRP, Leukozyten, Hämoglobin, Natrium, Kreatinin, Glukose' },
                { test: 'Blutbild', finding: 'Leukozytose oder Leukopenie', interpretation: 'Sepsis' },
                { test: 'CRP/PCT', finding: 'Extrem erhöht', interpretation: 'Schwere bakterielle Infektion' },
                { test: 'Laktat', finding: 'Erhöht', interpretation: 'Gewebehypoperfusion' },
                { test: 'CK', finding: 'Erhöht', interpretation: 'Muskelbeteiligung' }
              ],
              imaging: [
                { modality: 'Kontrast-CT', finding: 'Faszienverdickung, Gas in Weichteilen, Flüssigkeitsansammlung', significance: 'Schnell, beurteilt Ausdehnung' },
                { modality: 'MRT', finding: 'Sensitiver für Faszienbeteiligung', significance: 'Wenn Zeit und Patient stabil' }
              ],
              microbiology: [
                { test: 'Blutkultur', finding: 'Positiv in 20-40%', significance: 'Erregeridentifikation' },
                { test: 'Chirurgische Gewebeprobe', finding: 'Kultur + Gram', significance: 'Goldstandard' },
                { test: 'Finger-Test', finding: 'Faszie lässt sich verschieben, "Spülwasser"-Eiter', significance: 'Intraoperative Diagnose' }
              ]
            },
            differential: [
              { disease: 'Zellulitis', distinguishing: 'Weniger toxisch, keine unverhältnismäßigen Schmerzen, langsamere Progression' },
              { disease: 'Tiefe Venenthrombose', distinguishing: 'Kein Fieber, kein Erythem, Doppler-US' },
              { disease: 'Gasbrand (Clostridium)', distinguishing: 'Muskelnekrose dominiert, schneller, bronzefarbene Haut' },
              { disease: 'Pyomyositis', distinguishing: 'Muskelabszess, MRT' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'KEINE ambulante Behandlung!', dose: 'SOFORTIGE OPERATION!', duration: '', note: 'Chirurgischer Notfall!' }
                ],
                inpatient: [
                  { drug: 'Piperacillin/Tazobactam', dose: '4x4.5g i.v.', duration: 'Je nach klinischem Ansprechen', note: 'Breitspektrum' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg i.v.', duration: '', note: 'MRSA-Abdeckung' },
                  { drug: '+ Clindamycin', dose: '3x900mg i.v.', duration: '', note: 'Hemmung der Toxinproduktion!' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g i.v.', duration: '', note: 'Alternative' },
                  { drug: '+ Vancomycin + Clindamycin', dose: '', duration: '', note: 'Dreifachtherapie' },
                  { drug: 'IVIG', dose: '1-2g/kg', duration: '', note: 'Bei Streptokokken-Toxischem-Schock-Syndrom' }
                ]
              },
              targeted: 'GAS: Penicillin+Clindamycin; MRSA: Vancomycin+Clindamycin; Polymikrobiell: Breitspektrum',
              supportive: ['SOFORTIGES aggressives chirurgisches Débridement', 'Intensivstation', 'Vasopressoren', 'Mehrfache Revisionen (alle 24-48 Stunden)', 'HBO-Therapie (adjuvant)'],
              prevention: ['Wundhygiene', 'Diabeteskontrolle', 'Frühzeitige Zellulitis-Behandlung']
            },
            guidelines: {
              diagnosis: [
                'Klinischer Verdacht: Schmerz unverhältnismäßig zum Befund, schnelle Progression, toxischer Zustand.',
                'LRINEC-Score >6 erhöht den Verdacht, schließt ihn aber nicht aus.',
                'Bildgebung (CT/MRT): Gas, Faszienverdickung, darf aber die Operation nicht verzögern!',
                'Definitive Diagnose: Chirurgische Exploration ("Finger-Test").'
              ],
              treatment_indications: [
                'Alle Verdachtsfälle erfordern einen sofortigen chirurgischen Eingriff.'
              ],
              first_line: [
                'Sofortiges und radikales chirurgisches Débridement + Breitbandantibiotika (z.B. Piperacillin/Tazobactam ODER Carbapenem + Clindamycin + Vancomycin).'
              ]
            },
            prognosis: {
              mortality: '20-40% auch mit Behandlung, 100% ohne Behandlung',
              prognostic_scores: ['LRINEC', 'SOFA'],
              factors: 'Späte Diagnose, späte Operation, Immunsuppression, STSS, Organversagen'
            }
          },
          {
            id: 'erysipelas',
            name: 'Erysipel (Wundrose)',
            pathogen: { type: 'Bakterium', name: 'Streptococcus pyogenes (Gruppe-A-Streptokokken)', gram: 'Gram-positiv', shape: 'Kokken' },
            epidemiology: {
              incidence: 'Häufige Hautinfektion, 10-100/100.000 pro Jahr',
              risk_groups: ['Ältere Menschen', 'Säuglinge', 'Diabetes mellitus', 'Chronische Veneninsuffizienz', 'Lymphödem', 'Hautläsionen'],
              seasonality: 'Meist Winter-Frühling',
              transmission: 'Endogen (Hautläsion) oder Kontakt'
            },
            pathomechanism: {
              steps: [
                'Eindringen von Bakterien in die Haut (Verletzung, Ekzem, Wunde)',
                'Ausbreitung im Lymphsystem',
                'Lokale Entzündungsreaktion',
                'Toxinproduktion (Streptolysine, pyrogene Toxine)',
                'Systemische Symptome (Fieber, Toxämie)'
              ],
              virulence_factors: ['M-Protein', 'Streptolysine (O, S)', 'Hyaluronidase', 'Streptokinase']
            },
            clinical: {
              incubation: '2-5 Tage',
              onset: 'Akut',
              symptoms: [
                { name: 'Prodrom', description: 'Fieber, Schüttelfrost gehen oft den Hautsymptomen voraus (4-48 Stunden)', severity: 'moderate' },
                { name: 'Hautsymptome', description: 'Scharf begrenzte, erhabene, leuchtend rote Plaque ("flammenartig")', severity: 'severe' },
                { name: 'Lokalisation', description: 'Unterschenkel (70-80%), Gesicht (5-20%)', severity: 'mild' },
                { name: 'Schmerz', description: 'Brennend, spannend', severity: 'moderate' },
                { name: 'Lymphknoten', description: 'Regionale Lymphadenitis ist häufig', severity: 'moderate' }
              ],
              physical_exam: [
                'Roter, warmer, geschwollener Bereich',
                'Scharfe, erhabene Ränder (charakteristisch)',
                'Blasen oder Pusteln können vorhanden sein',
                'Lymphadenitis (regionale Lymphknoten geschwollen)',
                'Systemische Zeichen: Tachykardie, Hypotonie'
              ],
              complications: ['Fortschreiten zur Zellulitis', 'Septischer Schock', 'Glomerulonephritis', 'Rezidiv ist häufig']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose', interpretation: 'Entzündung' },
                { test: 'CRP', finding: 'Erhöht', interpretation: 'Akute Phase' },
                { test: 'Blutkultur', finding: 'Selten positiv', interpretation: 'Bei systemischer Infektion' }
              ],
              imaging: [
                { modality: 'Nicht erforderlich', finding: '-', significance: 'Klinische Diagnose' }
              ],
              microbiology: [
                { test: 'Hautabstrichkultur', finding: 'Streptococcus pyogenes', significance: 'Bestätigung' },
                { test: 'ASO-Titer', finding: 'Erhöht', interpretation: 'Retrospektiv' }
              ]
            },
            differential: [
              { disease: 'Zellulitis', distinguishing: 'Tiefer, weniger scharfe Grenzen, keine erhabene Plaque' },
              { disease: 'Herpes zoster', distinguishing: 'Vesikel, entlang eines Dermatoms' },
              { disease: 'Erythema migrans (Lyme)', distinguishing: 'Zentrifugale Ausbreitung, Anamnese' },
              { disease: 'Kontaktdermatitis', distinguishing: 'Kein Fieber, Pruritus' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Penicillin V', dose: '4x500mg p.o.', duration: '10-14 Tage', note: 'Erste Wahl' },
                  { drug: 'Amoxicillin', dose: '3x500mg p.o.', duration: '10-14 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4-6 Mio. IE i.v.', duration: '7-10 Tage', note: 'In schweren Fällen' },
                  { drug: 'Ceftriaxon', dose: '1x2g i.v.', duration: '7-10 Tage', note: 'Bei Penicillinallergie' }
                ],
                icu: [
                  { drug: 'Breitspektrum', dose: 'i.v.', duration: '', note: 'In komplizierten Fällen' }
                ]
              },
              targeted: 'Streptococcus pyogenes: Penicillin. Allergie: Erythromycin/Clindamycin',
              supportive: ['Ruhe', 'Hochlagerung der Extremität', 'Schmerzmittel', 'Fiebersenker'],
              prevention: ['Vermeidung von Hautverletzungen', 'Hygiene', 'Rezidivprophylaxe (Penicillin monatlich)']
            },
            guidelines: {
              diagnosis: [
                'Klinische Diagnose: Scharf begrenzte, flammenartige, erhabene rote Plaque.',
                'Labor: Leukozytose, hohes CRP. Eine Kultur ist in der Regel nicht erforderlich.'
              ],
              treatment_indications: [
                'Alle Fälle sollten behandelt werden. Krankenhausaufnahme bei systemischen Symptomen, schwerem Lokalbefund, Komorbiditäten.'
              ],
              first_line: [
                'Penicillin V (p.o.) oder Penicillin G (i.v.). Bei Allergie Clindamycin.'
              ]
            },
            prognosis: {
              mortality: 'Niedrig (<1%)',
              prognostic_scores: ['Keine'],
              factors: 'Hohes Alter, Immunsuppression, späte Behandlung'
            }
          },
          {
            id: 'cellulitis',
            name: 'Zellulitis (Phlegmone)',
            pathogen: { type: 'Bakterium', name: 'Streptococcus pyogenes oder Staphylococcus aureus (am häufigsten)', gram: 'Gram-positiv', shape: 'Kokken' },
            epidemiology: {
              incidence: 'Häufig, 200/100.000 pro Jahr',
              risk_groups: ['Diabetes mellitus', 'Periphere arterielle Verschlusskrankheit', 'Adipositas', 'Immunsuppression', 'Hautverletzungen', 'Lymphödem'],
              seasonality: 'Meist Sommer',
              transmission: 'Endogen (Hautläsion) oder exogene Inokulation'
            },
            pathomechanism: {
              steps: [
                'Eindringen von Bakterien in Dermis und subkutanes Gewebe',
                'Lokale Entzündung (Neutrophile, Ödem)',
                'Ausbreitung in subkutanen Ebenen',
                'Lymphatische Obstruktion → Ödemzunahme',
                'Systemische Reaktion (Fieber, Leukozytose)'
              ],
              virulence_factors: ['Streptococcus: M-Protein, Toxine', 'Staphylococcus: PVL, Koagulase']
            },
            clinical: {
              incubation: '1-3 Tage',
              onset: 'Akut',
              symptoms: [
                { name: 'Hautsymptome', description: 'Diffuses, unscharf begrenztes Erythem, Wärme, Schwellung', severity: 'moderate' },
                { name: 'Schmerz', description: 'Druckempfindlichkeit, Spannung', severity: 'moderate' },
                { name: 'Systemische Symptome', description: 'Fieber, Schüttelfrost, Unwohlsein (häufig)', severity: 'moderate' },
                { name: 'Lymphangitis', description: 'Rote Streifen entlang der Lymphgefäße', severity: 'mild' },
                { name: 'Lokalisation', description: 'Am häufigsten Unterschenkel (einseitig)', severity: 'mild' }
              ],
              physical_exam: [
                'Rote, warme, geschwollene Haut',
                'Diffuse, unscharfe Grenzen',
                'Druckempfindlichkeit',
                'Lymphangitis (rote Streifen)',
                'Systemisch: Tachykardie, Fieber'
              ],
              complications: ['Abszess', 'Nekrotisierende Fasziitis', 'Septischer Schock', 'Osteomyelitis', 'Lymphödem']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose', interpretation: 'Entzündung' },
                { test: 'CRP', finding: 'Erhöht', interpretation: 'Akute Phase' },
                { test: 'Blutkultur', finding: 'Selten positiv', interpretation: 'In schweren Fällen' }
              ],
              imaging: [
                { modality: 'Ultraschall', finding: 'Flüssigkeitsansammlung, Abszess', significance: 'Bei Verdacht' },
                { modality: 'CT/MRT', finding: 'Tiefere Ausbreitung', significance: 'In komplizierten Fällen' }
              ],
              microbiology: [
                { test: 'Hautaspiration/Kultur', finding: 'Erregeridentifikation', significance: 'Wenn möglich' },
                { test: 'Wundexsudat', finding: 'Oft kontaminiert', significance: 'Nicht zuverlässig' }
              ]
            },
            differential: [
              { disease: 'Erysipel', distinguishing: 'Oberflächlich, scharfe Grenzen, erhabene Plaque' },
              { disease: 'Abszess', distinguishing: 'Fluktuierende Schwellung, Punktion' },
              { disease: 'TVT', distinguishing: 'Kein Erythem, Doppler-US' },
              { disease: 'Gicht', distinguishing: 'Monoarthritis, Hyperurikämie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/Clavulansäure', dose: '3x875/125mg p.o.', duration: '7-10 Tage', note: 'Erste Wahl' },
                  { drug: 'Cephalexin', dose: '4x500mg p.o.', duration: '7-10 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x2g i.v.', duration: '7-10 Tage', note: 'In schweren Fällen' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg i.v.', duration: '', note: 'Bei MRSA-Verdacht' }
                ],
                icu: [
                  { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g i.v.', duration: '', note: 'Breitspektrum' }
                ]
              },
              targeted: 'Streptococcus: Penicillin; Staphylococcus: Flucloxacillin; MRSA: Vancomycin',
              supportive: ['Ruhe', 'Hochlagerung der Extremität', 'Schmerzmittel', 'Topische Antibiotika sind nicht wirksam'],
              prevention: ['Vermeidung von Hautverletzungen', 'Hygiene', 'Diabeteskontrolle']
            },
            guidelines: {
              diagnosis: [
                'Klinische Diagnose: Diffuses, unscharf begrenztes Erythem, Wärme, Schwellung.',
                'Bildgebung (Ultraschall): Bei Verdacht auf Abszess oder tiefere Ausbreitung.'
              ],
              treatment_indications: [
                'Alle Fälle sollten behandelt werden. Krankenhausaufnahme bei systemischen Symptomen, schneller Progression, Komorbiditäten.'
              ],
              first_line: [
                'Abdeckung von Streptokokken und Staphylokokken ist notwendig: Amoxicillin/Clavulansäure oder ein Cephalosporin. Bei MRSA-Verdacht Vancomycin/Linezolid.'
              ]
            },
            prognosis: {
              mortality: 'Niedrig (<1%), aber bei Immunsuppression erhöht',
              prognostic_scores: ['Keine'],
              factors: 'Späte Behandlung, Komorbiditäten'
            }
          }
        ]
      },
      bone_joint: {
        name: 'Knochen- und Gelenkinfektionen',
        icon: '🦴',
        color: '#57534e',
        diseases: [
          {
            id: 'osteomyelitis',
            name: 'Osteomyelitis',
            pathogen: { type: 'Bakterium', name: 'Staphylococcus aureus (am häufigsten)', gram: 'Gram-positiv', shape: 'Kokken' },
            epidemiology: {
              incidence: 'Hämatogen bei Kindern, posttraumatisch/diabetischer Fuß bei Erwachsenen',
              risk_groups: ['Diabetes mellitus', 'Periphere arterielle Verschlusskrankheit', 'Trauma/Operation', 'IV-Drogenkonsumenten', 'Hämodialyse'],
              seasonality: 'Keine',
              transmission: 'Hämatogene Streuung, direkte Ausbreitung (Wunde), Inokulation (Trauma)'
            },
            pathomechanism: {
              steps: [
                'Bakterien haften an Knochengewebe/Implantat',
                'Biofilmbildung (Grundlage der chronischen Infektion)',
                'Entzündliches Exsudat erhöht den intraossären Druck',
                'Kompression von Gefäßen → Knochennekrose (Sequester)',
                'Neubildung von Knochen um die Nekrose (Involucrum)'
              ],
              virulence_factors: ['Biofilmbildung', 'Adhäsine (MSCRAMM)', 'Toxine']
            },
            clinical: {
              incubation: 'Tage (akut) oder Wochen-Monate (chronisch)',
              onset: 'Variabel',
              symptoms: [
                { name: 'Lokaler Schmerz', description: 'Tiefer, pochender Schmerz (>90%), verschlimmert sich bei Belastung', severity: 'severe' },
                { name: 'Fieber', description: 'Häufig bei akuter hämatogener Form (50-70%), selten bei chronischer', severity: 'moderate' },
                { name: 'Schwellung/Erythem', description: 'Weichteilschwellung und Rötung über dem betroffenen Bereich', severity: 'moderate' },
                { name: 'Fistel (Sinus tract)', description: 'Eitriger Ausfluss zur Hautoberfläche (Zeichen chronischer Osteomyelitis)', severity: 'moderate' }
              ],
              physical_exam: [
                'Lokale Druckempfindlichkeit über dem Knochen',
                'Wärme, Schwellung, Erythem',
                'Bewegungseinschränkung der betroffenen Extremität',
                'Probe-to-bone-Test: Knochen kann mit einer Sonde am Grund eines Geschwürs palpiert werden (hohe Spezifität)'
              ],
              complications: ['Chronische Osteomyelitis', 'Pathologische Fraktur', 'Septische Arthritis', 'Systemische Sepsis', 'Notwendigkeit der Amputation']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose (akut)', interpretation: 'Entzündung' },
                { test: 'CRP/BSG', finding: 'Erhöht', interpretation: 'Gut zur Überwachung' },
                { test: 'Blutkultur', finding: 'Positiv (50%)', interpretation: 'Bei hämatogenem Ursprung' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'In der Frühphase negativ! Später periostale Reaktion, lytische Läsionen', significance: 'Spätzeichen' },
                { modality: 'MRT', finding: 'Knochenmarködem, Abszess', significance: 'Goldstandard (sensitivste Methode)' },
                { modality: 'Knochenszintigraphie', finding: 'Erhöhte Anreicherung', significance: 'Wenn MRT nicht möglich' }
              ],
              microbiology: [
                { test: 'Knochenbiopsie-Kultur', finding: 'Erregeridentifikation', significance: 'Goldstandard-Diagnose' },
                { test: 'Fistelsekret', finding: 'Oft kontaminiert', significance: 'Nicht zuverlässig' }
              ]
            },
            differential: [
              { disease: 'Charcot-Fuß', distinguishing: 'Kein Fieber/Entzündungslabor, Neuropathie dominiert' },
              { disease: 'Ewing-Sarkom', distinguishing: 'Röntgen (Zwiebelschale), Biopsie' },
              { disease: 'Zellulitis', distinguishing: 'Nur Weichteilbeteiligung, MRT differenziert' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Erfordert normalerweise Krankenhausbehandlung/Untersuchung' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg i.v.', duration: '4-6 Wochen', note: 'MRSA-Abdeckung' },
                  { drug: '+ Ceftriaxon/Cefepim', dose: 'i.v.', duration: '4-6 Wochen', note: 'Gram-negative Abdeckung' }
                ],
                icu: [
                  { drug: 'Breitspektrum', dose: 'i.v.', duration: '', note: 'Bei Sepsis' }
                ]
              },
              targeted: 'Basierend auf Knochenbiopsie! S. aureus: Flucloxacillin/Cefazolin; MRSA: Vancomycin/Daptomycin. Dauer: 4-6 Wochen (oft i.v.)',
              supportive: ['Chirurgisches Débridement (Entfernung von nekrotischem Knochen) - KRITISCH!', 'Ruhigstellung', 'Schmerzmittel'],
              prevention: ['Sofortige Versorgung offener Frakturen', 'Chirurgische Sterilität', 'Pflege des diabetischen Fußes']
            },
            guidelines: {
              diagnosis: [
                'Bildgebung: MRT ist der Goldstandard für die Frühdiagnose.',
                'Mikrobiologie: Knochenbiopsie zur Kultur ist für eine gezielte Therapie unerlässlich. Fistelsekret ist nicht zuverlässig.'
              ],
              treatment_indications: [
                'Alle bestätigten Fälle von Osteomyelitis müssen behandelt werden.'
              ],
              first_line: [
                'Langzeit (4-6 Wochen) i.v. Antibiotikatherapie basierend auf den Biopsieergebnissen + chirurgisches Débridement.'
              ]
            },
            prognosis: {
              mortality: 'Niedrig, aber Morbidität hoch (Chronifizierung)',
              prognostic_scores: ['Cierny-Mader-Klassifikation'],
              factors: 'Blutversorgung, Vorhandensein von Implantaten, chirurgische Radikalität'
            },
          },
          {
            id: 'septic_arthritis',
            name: 'Septische Arthritis',
            pathogen: { type: 'Bakterium', name: 'Staphylococcus aureus, N. gonorrhoeae', gram: 'Gemischt', shape: 'Kokken' },
            epidemiology: {
              incidence: '2-10/100.000 pro Jahr',
              risk_groups: ['Rheumatoide Arthritis', 'Gelenkprothese', 'Ältere (>80 Jahre)', 'Diabetes', 'IV-Drogenkonsumenten', 'Sexuell aktive junge Menschen (Gonokokken)'],
              seasonality: 'Keine',
              transmission: 'Hämatogen (am häufigsten), direkte Inokulation, per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Eindringen von Bakterien in den Gelenkspalt',
                'Kolonisation der Synovialmembran',
                'Akute Entzündungsreaktion (Neutrophilen-Influx)',
                'Freisetzung proteolytischer Enzyme',
                'Schnelle Zerstörung von Knorpel und Knochen (innerhalb von Tagen!)'
              ],
              virulence_factors: ['Adhäsine', 'Toxine', 'Knorpelschädigende Enzyme']
            },
            clinical: {
              incubation: 'Schnell (Stunden-Tage)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Akute Monoarthritis', description: 'Schmerz und Schwellung eines einzelnen Gelenks (80-90%)', severity: 'severe' },
                { name: 'Schmerz', description: 'Intensiv, auch in Ruhe, extrem bei Bewegung', severity: 'severe' },
                { name: 'Fieber', description: 'Häufig (60-80%), kann aber fehlen (Ältere, Immunsupprimierte)', severity: 'moderate' },
                { name: 'Bewegungsunfähigkeit', description: 'Unfähigkeit, das betroffene Gelenk zu benutzen', severity: 'severe' }
              ],
              physical_exam: [
                'Geschwollenes, warmes, rotes Gelenk',
                'Extreme Druckempfindlichkeit',
                'Schmerzhafte passive und aktive Bewegung',
                'Gelenkerguss',
                'Gonokokken: wandernde Polyarthritis, Tenosynovitis, Dermatitis (Pusteln)'
              ],
              complications: ['Gelenkzerstörung (Arthrose)', 'Ankylose', 'Sepsis', 'Osteomyelitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose', interpretation: 'Systemische Reaktion' },
                { test: 'CRP/BSG', finding: 'Deutlich erhöht', interpretation: 'Entzündung' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'Anfangs negativ/Weichteilschwellung, später Gelenkspaltverschmälerung', significance: 'Ausgangsbefund' },
                { modality: 'Ultraschall', finding: 'Gelenkflüssigkeit', significance: 'Zur Steuerung der Punktion' }
              ],
              microbiology: [
                { test: 'Gelenkpunktion (Arthrozentese)', finding: 'Eitrig, >50.000 Leuko/µL, >90% PMN', significance: 'DIAGNOSTISCH!' },
                { test: 'Synovialflüssigkeitskultur', finding: 'Positiv', significance: 'Goldstandard' },
                { test: 'Blutkultur', finding: 'Positiv (50%)', significance: 'Immer abnehmen' },
                { test: 'PCR', finding: 'Gonokokken/Lyme', significance: 'Wenn Kultur negativ' }
              ]
            },
            differential: [
              { disease: 'Gicht', distinguishing: 'Kristalle im Punktat (negative Doppelbrechung)' },
              { disease: 'Pseudogicht (CPPD)', distinguishing: 'Positiv doppelbrechende Kristalle' },
              { disease: 'Reaktive Arthritis', distinguishing: 'Sterile Entzündung, Anamnese (GI/GU-Infektion)' },
              { disease: 'Lyme-Arthritis', distinguishing: 'Weniger schmerzhaft, Serologie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Notfallmäßige Krankenhauseinweisung!' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg i.v.', duration: '', note: 'Gram+ (MRSA)-Abdeckung' },
                  { drug: '+ Ceftriaxon', dose: '1x2g i.v.', duration: '', note: 'Gram- (Gonokokken)-Abdeckung' }
                ],
                icu: [
                  { drug: 'Breitspektrum', dose: 'i.v.', duration: '', note: 'Bei Sepsis' }
                ]
              },
              targeted: 'S. aureus: Cefazolin/Oxacillin; MRSA: Vancomycin; Gonokokken: Ceftriaxon. Dauer: 2-4 Wochen (i.v. dann p.o.)',
              supportive: ['Gelenkdrainage (tägliche Nadelaspiration ODER Arthroskopie) - OBLIGATORISCH!', 'Schmerzmittel', 'Frühe Mobilisierung nach Abklingen der Entzündung'],
              prevention: ['Sterilität bei Prothesenoperationen', 'Prävention von Gonorrhoe']
            },
            guidelines: {
              diagnosis: [
                'Gelenkpunktion (Arthrozentese) ist obligatorisch: eitrige Flüssigkeit, >50.000 Leuko/µL, >90% PMN.',
                'Synovialflüssigkeits-Gram-Färbung und -Kultur sowie Blutkulturen sollten abgenommen werden.'
              ],
              treatment_indications: [
                'Alle Verdachtsfälle erfordern eine Notfallbehandlung.'
              ],
              first_line: [
                'Sofortige Gelenkdrainage + empirische i.v. Antibiotika (z.B. Vancomycin + Ceftriaxon), gefolgt von gezielter Therapie.'
              ]
            },
            prognosis: {
              mortality: '10-15% (höher bei polyartikulären/älteren Patienten)',
              prognostic_scores: ['Keine'],
              factors: 'Späte Drainage (>24-48 Stunden) verursacht irreversible Knorpelschäden!'
            }
          },
          {
            id: 'spondylodiscitis',
            name: 'Spondylodiszitis',
            pathogen: { type: 'Bakterium', name: 'Staphylococcus aureus (am häufigsten), Streptococcus spp., Gram-negative', gram: 'Gemischt', shape: 'Kokken/Bazillen' },
            epidemiology: {
              incidence: 'Selten, 2-7/100.000 pro Jahr',
              risk_groups: ['Ältere (>50 Jahre)', 'Diabetes mellitus', 'Immunsuppression', 'IV-Drogenkonsumenten', 'Nach Wirbelsäulen-OP', 'Urogenitale Infektionen'],
              seasonality: 'Keine',
              transmission: 'Hämatogen (am häufigsten), direkt (OP, Trauma), per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Bakterielle Streuung in den Blutkreislauf (z.B. HWI, Endokarditis)',
                'Anheftung in Wirbelsäulengefäßen (Endarterien)',
                'Kolonisation von Bandscheibe und Wirbelkörpern',
                'Entzündungsreaktion → Ödem, Nekrose',
                'Biofilmbildung → chronische Infektion'
              ],
              virulence_factors: ['Adhäsine (MSCRAMM)', 'Biofilmbildung', 'Toxine']
            },
            clinical: {
              incubation: 'Tage-Wochen',
              onset: 'Langsam, schleichend',
              symptoms: [
                { name: 'Rückenschmerzen', description: 'Leitsymptom (>90%), allmählich schlimmer werdend, auch in Ruhe', severity: 'severe' },
                { name: 'Fieber', description: 'Nur in ~50% der Fälle vorhanden, oft subfebril', severity: 'moderate' },
                { name: 'Neurologische Symptome', description: 'Radikulärer Schmerz, Schwäche, Parese (30-50%)', severity: 'severe' },
                { name: 'Allgemeinsymptome', description: 'Müdigkeit, Gewichtsverlust, Nachtschweiß', severity: 'mild' }
              ],
              physical_exam: [
                'Lokaler Druck- oder Klopfschmerz über dem betroffenen Wirbel',
                'Paravertebraler Muskelspasmus',
                'Bewegungseinschränkung der Wirbelsäule',
                'Neurologisches Defizit (Parese, Reflexausfall, Sensibilitätsstörung)'
              ],
              complications: ['Epiduralabszess', 'Paravertebraler Abszess', 'Septischer Schock', 'Wirbelsäulendeformität', 'Chronische Schmerzen']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose oder normal', interpretation: 'Entzündung' },
                { test: 'CRP/BSG', finding: 'Deutlich erhöht', interpretation: 'Hervorragend zur Überwachung' },
                { test: 'Blutkultur', finding: 'Positiv (50-70%)', interpretation: 'Erregeridentifikation' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'Spätzeichen: Wirbelkörperdestruktion, Bandscheibenhöhenminderung', significance: 'Im Frühstadium nicht sensitiv' },
                { modality: 'MRT', finding: 'Knochenmarködem, Bandscheibenentzündung, Abszess', significance: 'Goldstandard (Sensitivität >90%)' },
                { modality: 'CT', finding: 'Knochendestruktion, Abszess', significance: 'Wenn MRT nicht möglich' }
              ],
              microbiology: [
                { test: 'CT-gesteuerte Biopsie', finding: 'Kultur + Histologie', significance: 'Goldstandard-Diagnose' },
                { test: 'Blutkultur', finding: 'Positiv', significance: 'Oft ausreichend' }
              ]
            },
            differential: [
              { disease: 'Degenerative Wirbelsäulenerkrankung', distinguishing: 'Kein Fieber/CRP-Erhöhung, anderes MRT-Bild' },
              { disease: 'Wirbelsäulentumor/Metastase', distinguishing: 'Anamnese, Biopsie' },
              { disease: 'Spondylitis ankylosans', distinguishing: 'Jüngeres Alter, HLA-B27 positiv' },
              { disease: 'Tuberkulöse Spondylitis', distinguishing: 'Chronisch, mehrere Wirbel, Tuberkulintest' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Krankenhausbehandlung erforderlich' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg i.v.', duration: '4-6 Wochen', note: 'MRSA-Abdeckung' },
                  { drug: '+ Ceftriaxon/Cefepim', dose: 'i.v.', duration: '4-6 Wochen', note: 'Gram-negative Abdeckung' }
                ],
                icu: [
                  { drug: 'Breitspektrum', dose: 'i.v.', duration: '', note: 'Bei Sepsis/Abszess' }
                ]
              },
              targeted: 'Basierend auf Biopsie! S. aureus: Flucloxacillin/Cefazolin; MRSA: Vancomycin; Gram-negativ: Ceftriaxon. Dauer: 6-12 Wochen (i.v. dann p.o.)',
              supportive: ['Chirurgisches Débridement (bei Abszess) - oft notwendig!', 'Wirbelsäulenstabilisierung', 'Schmerzmittel', 'Physiotherapie'],
              prevention: ['HWI/Endo-Prophylaxe', 'Chirurgische Sterilität', 'Diabeteskontrolle']
            },
            guidelines: {
              diagnosis: [
                'Klinischer Verdacht: Neue oder sich verschlimmernde Rückenschmerzen mit Fieber/erhöhten Entzündungsmarkern.',
                'Bildgebung: MRT ist der Goldstandard.',
                'Mikrobiologie: Blutkulturen. Wenn negativ, ist eine CT-gesteuerte Biopsie erforderlich.'
              ],
              treatment_indications: [
                'Alle bestätigten Fälle müssen behandelt werden. Chirurgischer Eingriff bei neurologischem Defizit, Instabilität oder Abszess.'
              ],
              first_line: [
                'Langzeit (6-12 Wochen) i.v., dann p.o. Antibiotikatherapie basierend auf den Kulturergebnissen.'
              ]
            },
            prognosis: {
              mortality: '2-10%',
              prognostic_scores: ['Keine spezifischen'],
              factors: 'Späte Diagnose, neurologisches Defizit, Komorbiditäten'
            }
          }
        ]
      }
});