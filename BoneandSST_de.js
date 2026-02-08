Object.assign(window.diseases, {
     skin_soft_tissue: {
        name: 'Haut- und Weichteilinfektionen',
        icon: '🩹',
        color: '#e11d48',
        diseases: [
          {
            id: 'necrotizing_fasciitis',
            name: 'Nekrotisierende Fasziitis',
            pathogen: { type: 'Bakterium', name: 'Polymikrobiell (Typ I) oder Monomikrobiell (Typ II)', gram: 'Gemischt', shape: 'Variabel' },
            epidemiology: {
              incidence: 'Selten (0.4-1/100.000), aber hohe Mortalität',
              risk_groups: ['Typ I: Diabetes, Immunsuppression, Adipositas, pAVK', 'Typ II: Gesunde Junge, Trauma, OP, i.v. Drogen', 'Typ III: Meerwasserexposition, Lebererkrankung (Vibrio)'],
              seasonality: 'Keine',
              transmission: 'Endogen (Hautläsion als Eintrittspforte) oder direkte Inokulation'
            },
            pathomechanism: {
              steps: [
                'Eintritt: Die Infektion dringt durch eine Hautverletzung (auch minimal) in das subkutane Gewebe ein. Die Bakterien breiten sich schnell entlang der oberflächlichen Faszienebenen aus, die schlecht durchblutet sind.',
                'Toxinwirkung: Die Erreger (insbesondere GAS und Clostridium) produzieren starke Toxine, die direkte Gewebenekrose, Thrombosen kleiner Blutgefäße und die Hemmung der lokalen Immunantwort verursachen.',
                'Gewebenekrose: Thrombose und entzündliches Ödem beeinträchtigen die Blutversorgung weiter, was zu ausgedehntem Gewebstod führt. Der Prozess zerstört auch subkutane Nerven, was zur Anästhesie des Bereichs führt (ein Spätzeichen).',
                'Systemische Toxizität: In den Kreislauf gelangende Toxine verursachen ein systemisches toxisches Schocksyndrom und Multiorganversagen.'
              ],
              virulence_factors: ['Strep: M-Protein, Exotoxine (SpeA/B/C)', 'Staph: PVL, TSST-1', 'Clostridium: Alpha-Toxin', 'Anaerobier: Gasbildung']
            },
            clinical: {
              incubation: 'Stunden-Tage (nach Trauma)',
              onset: 'Hyperakut, fulminant',
              symptoms: [
                { name: 'Frühzeichen', description: 'Das wichtigste Frühzeichen ist ein quälender Schmerz, der in keinem Verhältnis zum klinischen Befund steht. Die Haut zeigt möglicherweise nur eine leichte Rötung oder Schwellung, aber der Patient ist systemisch krank und fiebrig.', severity: 'severe' },
                { name: 'Spätzeichen', description: 'Die Haut wird dunkelviolett oder schwarz, es bilden sich Blasen (Bullae), und im subkutanen Gewebe ist Gas (Krepitation) zu tasten. Der Schmerz kann aufgrund des Absterbens der Nerven nachlassen, was ein schlechtes prognostisches Zeichen ist. Es entwickelt sich schnell ein septischer Schock.', severity: 'severe' }
              ],
              physical_exam: [
                'Schmerz unverhältnismäßig SCHWER zum Befund (Frühzeichen!)',
                'Spannendes, "holzartiges" Ödem, das über das Erythem hinausgeht',
                'Haut: Erythem → livide/grau → Bullae → Nekrose',
                'Anästhesie im Bereich (Nervenschädigung)',
                'Krepitation (vor allem Typ I und Clostridium)',
                'Systemische Zeichen: Fieber, Tachykardie, Hypotonie, Verwirrtheit'
              ],
              complications: ['Septischer Schock', 'Multiorganversagen (MODS)', 'Gliedmaßenverlust', 'Tod (20-40%, 100% ohne Behandlung)']
            },
            diagnostics: {
              laboratory: [
                { test: 'LRINEC-Score', finding: '≥6: Verdacht, ≥8: hohe Wahrscheinlichkeit (aber niedrige Sensitivität!)', interpretation: 'CRP, Leukozyten, Hb, Na, Kreatinin, Glukose' },
                { test: 'Blutbild', finding: 'Leukozytose (>15 G/L), Linksverschiebung', interpretation: 'Schwere Infektion' },
                { test: 'Natrium', finding: 'Hyponatriämie (<135 mmol/L)', interpretation: 'Häufiger Indikator' },
                { test: 'Laktat', finding: 'Erhöht (>2-4 mmol/L)', interpretation: 'Gewebehypoperfusion/Nekrose' },
                { test: 'CK', finding: 'Erhöht', interpretation: 'Muskelbeteiligung (Myositis/Nekrose)' }
              ],
              imaging: [
                { modality: 'CT', finding: 'Faszienverdickung, Flüssigkeit, Gas in Weichteilen (spezifisch!)', significance: 'Beste Bildgebung, darf aber OP NICHT verzögern!' },
                { modality: 'MRT', finding: 'Hohe Sensitivität, niedrige Spezifität', significance: 'Zeitaufwendig, bei instabilen Patienten vermeiden' }
              ],
              microbiology: [
                { test: 'Chirurgische Gewebeprobe', finding: 'Gram-Färbung und Kultur', significance: 'Goldstandard (Aerobier + Anaerobier)' },
                { test: 'Blutkultur', finding: 'Positiv (vor allem Typ II)', significance: 'Systemische Ausbreitung' },
                { test: 'Finger-Test', finding: 'Faszie leicht lösbar, keine Blutung, "Spülwasser"-Eiter', significance: 'Bedside-Diagnose' }
              ]
            },
            differential: [
              { disease: 'Zellulitis', distinguishing: 'Kein unverhältnismäßiger Schmerz, keine systemische Toxizität, langsamer' },
              { disease: 'Pyomyositis', distinguishing: 'Muskelabszess, lokalisierter, MRT hilft' },
              { disease: 'Gasbrand (Clostridium)', distinguishing: 'Muskelnekrose dominiert, schneller, Krepitation ausgeprägter' },
              { disease: 'Tiefe Venenthrombose', distinguishing: 'Schwellung, aber kein Fieber/Toxizität, Doppler negativ' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Keine ambulante Behandlung!', dose: 'SOFORTIGE KRANKENHAUS/OP!', duration: '', note: 'Chirurgischer Notfall!' }
                ],
                inpatient: [
                  { drug: 'Piperacillin/Tazobactam', dose: '4x4.5g i.v.', duration: 'Bis klinisches Ansprechen', note: 'Breitspektrum (G+, G-, Anaerobier)' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg i.v.', duration: '', note: 'MRSA-Abdeckung' },
                  { drug: '+ Clindamycin', dose: '3x900mg i.v.', duration: '', note: 'Toxinhemmung (GAS/Staph)' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g i.v.', duration: '', note: 'Alternative (Typ I)' },
                  { drug: '+ Vancomycin + Clindamycin', dose: '', duration: '', note: 'Standard-Dreifachtherapie' },
                  { drug: 'IVIG', dose: '1g/kg Tag 1, dann 0.5g/kg', duration: '3 Tage', note: 'Erwägen bei Strep. toxischem Schocksyndrom' }
                ]
              },
              targeted: 'Nach Kultur. Typ I: Breitspektrum. Typ II (GAS): Penicillin G + Clindamycin. Typ III (Vibrio): Doxycyclin + Ceftriaxon.',
              supportive: ['SOFORTIGES aggressives chirurgisches Débridement (entscheidend!)', 'Flüssigkeitssubstitution', 'Vasopressoren', 'Second-Look-OP innerhalb 24h', 'Hyperbare Oxygenierung (umstritten, adjuvant)'],
              prevention: ['Wundversorgung', 'Management chronischer Krankheiten']
            },
            guidelines: {
              diagnosis: [
                'Klinischer Verdacht (unverhältnismäßiger Schmerz, rasche Verschlechterung) reicht für chirurgische Exploration.',
                'LRINEC-Score kann helfen, niedriger Score schließt aber nicht aus.',
                'Bildgebung nur bei stabilen Patienten, wenn Diagnose zweifelhaft. Gas im Gewebe ist spezifisch.'
              ],
              treatment_indications: [
                'Sofortige chirurgische Intervention (Nekrotomie/Fasziotomie) in allen Verdachtsfällen.',
                'Empirische Breitbandantibiotika vor/während der OP.'
              ],
              first_line: [
                'Chirurgisches Débridement + (Carbapenem oder Pip/Tazo) + Vancomycin + Clindamycin.'
              ]
            },
            prognosis: {
              mortality: '20-40% (auch mit adäquater Behandlung), 100% unbehandelt',
              prognostic_scores: ['LRINEC', 'FGSI (Fournier\'s Gangrene Severity Index)'],
              factors: 'Verzögerte OP (>24h), hohes Alter, Komorbiditäten, Lokalisation Rumpf/Kopf-Hals'
            }
          },
          {
            id: 'erysipelas',
            name: 'Erysipel (Wundrose)',
            pathogen: { type: 'Bakterium', name: '<i>Streptococcus pyogenes</i> (Gruppe-A-Streptokokken)', gram: 'Gram-positiv', shape: 'Kokken' },
            epidemiology: {
              incidence: 'Häufige Hautinfektion, 10-100/100.000 pro Jahr',
              risk_groups: ['Ältere', 'Säuglinge', 'Diabetes mellitus', 'Chronische Veneninsuffizienz', 'Lymphödem', 'Hautläsionen'],
              seasonality: 'Meist Winter-Frühling',
              transmission: 'Endogen (Hautläsion als Eintrittspforte) oder Kontakt'
            },
            pathomechanism: {
              steps: [
                'Eintritt: Der Erreger (am häufigsten Streptococcus pyogenes) dringt durch eine kleine Hautverletzung in die obere Dermis und die oberflächlichen Lymphgefäße ein.',
                'Lymphatische Ausbreitung: Die Bakterien breiten sich schnell im Lymphsystem aus, was zu der charakteristischen, scharf begrenzten, flammenartigen Ausbreitung führt.',
                'Entzündung: Bakterielle Toxine verursachen eine heftige lokale Entzündung und systemische Symptome (Fieber, Schüttelfrost).'
              ],
              virulence_factors: ['M-Protein', 'Streptolysine (O, S)', 'Hyaluronidase', 'Streptokinase']
            },
            clinical: {
              incubation: '2-5 Tage',
              onset: 'Akut',
              symptoms: [
                { name: 'Hautmanifestationen', description: 'Plötzlich auftretende, scharf begrenzte, flammenartig ausbreitende, leuchtend rote, geschwollene, warme und schmerzhafte Hautläsion. Am häufigsten im Gesicht oder an den Unterschenkeln.', severity: 'severe' },
                { name: 'Systemische Symptome', description: 'Die Hautmanifestationen werden oft von hohem Fieber, Schüttelfrost und Unwohlsein begleitet oder gehen diesen voraus.', severity: 'moderate' }
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
                { test: 'ASO-Titer', finding: 'Erhöht', significance: 'Retrospektiv' }
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
                  { drug: 'Amoxicillin', dose: '3x500mg p.o.', duration: '10-14 Tage', note: 'Alternative' },
                  { drug: 'Clindamycin', dose: '3x300mg p.o.', duration: '10-14 Tage', note: 'Bei Penicillinallergie, 30% Resistenzrate' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4-6 Mio. IE i.v.', duration: '7-10 Tage', note: 'In schweren Fällen' },
                  { drug: 'Cefazolin', dose: '3x1g i.v.', duration: '7-10 Tage', note: 'Alternative' },
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
            pathogen: { type: 'Bakterium', name: '<i>Streptococcus pyogenes</i> oder <i>Staphylococcus aureus</i> (am häufigsten)', gram: 'Gram-positiv', shape: 'Kokken' },
            epidemiology: {
              incidence: 'Häufig, 200/100.000 pro Jahr',
              risk_groups: ['Diabetes mellitus', 'Periphere arterielle Verschlusskrankheit', 'Adipositas', 'Immungeschwächte', 'Hautverletzungen', 'Lymphödem'],
              seasonality: 'Meist Sommer',
              transmission: 'Endogen (Hautläsion) oder exogene Inokulation'
            },
            pathomechanism: {
              steps: [
                'Eintritt: Erreger (S. pyogenes, S. aureus) dringen durch eine Hautverletzung in die tiefere Dermis und das subkutane Fettgewebe ein.',
                'Diffuse Ausbreitung: Die Infektion breitet sich diffus im Gewebe aus und ist nicht wie beim Erysipel auf die Lymphbahnen beschränkt. Dies führt zu einer weniger scharf begrenzten, aber tiefer reichenden Entzündung.'
              ],
              virulence_factors: ['Streptococcus: M-Protein, Toxine', 'Staphylococcus: PVL, Koagulase']
            },
            clinical: {
              incubation: '1-3 Tage',
              onset: 'Akut',
              symptoms: [
                { name: 'Hautmanifestationen', description: 'Im Vergleich zum Erysipel ein weniger scharf begrenztes, diffuses Erythem, Schwellung und Wärme. Die Haut ist gespannt und schmerzhaft.', severity: 'moderate' },
                { name: 'Allgemeine Symptome', description: 'Kann von Fieber und Schüttelfrost begleitet sein, ist aber nicht immer so ausgeprägt wie beim Erysipel.', severity: 'moderate' }
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
                  { drug: 'Amoxicillin/Clavulansäure', dose: '3x500mg p.o.', duration: '7-10 Tage', note: 'Alternative' },
                  { drug: 'Cefazolin', dose: '3x1g i.v.', duration: '7-10 Tage', note: 'Alternative' },
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
            pathogen: { type: 'Bakterium', name: '<i>Staphylococcus aureus</i> (am häufigsten)', gram: 'Gram-positiv', shape: 'Kokken' },
            epidemiology: {
              incidence: 'Hämatogen bei Kindern, posttraumatisch/diabetischer Fuß bei Erwachsenen',
              risk_groups: ['Diabetes mellitus', 'Periphere arterielle Verschlusskrankheit', 'Trauma/Operation', 'i.v.-Drogenkonsumenten', 'Hämodialysepatienten'],
              seasonality: 'Keine',
              transmission: 'Hämatogene Streuung, direkte Ausbreitung (Wunde), Inokulation (Trauma)'
            },
            pathomechanism: {
              steps: [
                'Eintritt: Erreger gelangen über den Blutkreislauf (hämatogen), von angrenzenden Weichteilen (per continuitatem) oder durch direkte Inokulation bei Trauma/Operation in den Knochen.',
                'Entzündung und Ischämie: Im Knochen verursachen sie eine Entzündung, die zu Ödemen und Druckerhöhung im Knochenmark führt. Dies beeinträchtigt die Blutversorgung des Knochens und führt zum Absterben von Knochengewebe (Sequester).',
                'Chronifizierung: Der Körper versucht, den toten Knochen durch Neubildung von Knochen (Involucrum) abzukapseln. Bei chronischen Fällen persistieren die Bakterien durch Biofilmbildung.'
              ],
              virulence_factors: ['Biofilmbildung', 'Adhäsine (MSCRAMM)', 'Toxine']
            },
            clinical: {
              incubation: 'Tage (akut) oder Wochen-Monate (chronisch)',
              onset: 'Variabel',
              symptoms: [
                { name: 'Akute Osteomyelitis', description: 'Plötzlich einsetzende lokale Schmerzen, Schwellung, Rötung und Fieber. Der Patient kann die betroffene Extremität oft nicht belasten.', severity: 'severe' },
                { name: 'Chronische Osteomyelitis', description: 'Schleichender, mit einem dumpfen, tiefen Schmerz und oft einer drainierenden Fistel zur Haut. Fieber ist selten.', severity: 'moderate' }
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
                { test: 'Blutbild', finding: 'Leukozytose (akut)', interpretation: 'Entzündung (kann bei chronisch normal sein)' },
                { test: 'CRP/BSG', finding: 'Erhöht', interpretation: 'Hervorragend zur Überwachung (Therapieansprechen)' },
                { test: 'Blutkultur', finding: 'Positiv (50%)', interpretation: 'Bei hämatogenem Ursprung (wichtig bei Wirbel-OM)' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'In der Frühphase (10-14 Tage) negativ! Später periostale Reaktion, lytische Läsionen', significance: 'Spätzeichen, aber Basis' },
                { modality: 'MRT', finding: 'Knochenmarködem, Abszess, Sequester', significance: 'Goldstandard (Sensitivität >90%)' },
                { modality: 'Knochenszintigraphie/PET-CT', finding: 'Erhöhte Anreicherung', significance: 'Wenn MRT nicht möglich oder multifokaler Verdacht' }
              ],
              microbiology: [
                { test: 'Knochenbiopsie-Kultur', finding: 'Erregeridentifikation', significance: 'Goldstandard-Diagnose (vor Antibiotika!)' },
                { test: 'Fistelsekret', finding: 'Oft kontaminiert', significance: 'Korreliert nur bei S. aureus gut mit Knochen' }
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
                  { drug: 'Keine', dose: '-', duration: '-', note: 'Krankenhausuntersuchung/-probenahme erforderlich' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg i.v.', duration: '4-6 Wochen', note: 'MRSA-Abdeckung' },
                  { drug: '+ Ceftriaxon/Cefepim', dose: '2g i.v.', duration: '4-6 Wochen', note: 'Gram-negative Abdeckung (z.B. Pseudomonas)' }
                ],
                icu: [
                  { drug: 'Breitspektrum', dose: 'i.v.', duration: '', note: 'Bei Sepsis' }
                ]
              },
              targeted: 'Basierend auf Knochenbiopsie! S. aureus: Cefazolin/Flucloxacillin. MRSA: Vancomycin. Implantat-assoziiert: Rifampicin-Zusatz (Biofilm).',
              supportive: ['Chirurgisches Débridement (Entfernung von nekrotischem Knochen) - KRITISCH!', 'Implantatentfernung (wenn möglich)', 'Frühe orale Umstellung möglich (OVIVA-Studie)'],
              prevention: ['Sofortige Versorgung offener Frakturen', 'Chirurgische Sterilität', 'Pflege des diabetischen Fußes']
            },
            guidelines: {
              diagnosis: [
                'Bildgebung: MRT ist am sensitivsten. Röntgen kann 2 Wochen negativ sein.',
                'Mikrobiologie: Knochenbiopsie (offen oder perkutan) für Kultur und Histologie ist vor Antibiotika obligatorisch (außer Sepsis).'
              ],
              treatment_indications: [
                'Alle bestätigten Fälle von Osteomyelitis müssen behandelt werden. Chirurgisches Débridement + Antibiotika.',
                'Bei implantatassoziierter Infektion wird Rifampicin-Kombination wegen Biofilm empfohlen.'
              ],
              first_line: [
                'Empirisch: Vancomycin + Ceftriaxon/Cefepim.',
                'Gezielt: 4-6 Wochen Therapie. Laut OVIVA-Studie ist eine frühe (nach 1 Woche) orale Umstellung (z.B. Chinolone, Clindamycin) nicht schlechter als i.v.'
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
            pathogen: { type: 'Bakterium', name: '<i>Staphylococcus aureus, N. gonorrhoeae</i>', gram: 'Gemischt', shape: 'Kokken' },
            epidemiology: {
              incidence: '2-10/100.000 pro Jahr',
              risk_groups: ['Rheumatoide Arthritis', 'Gelenkprothese', 'Ältere (>80 Jahre)', 'Diabetes', 'i.v.-Drogenkonsumenten', 'Sexuell aktive junge Menschen (Gonokokken)'],
              seasonality: 'Keine',
              transmission: 'Hämatogen (am häufigsten), direkt Inokulation, per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Eintritt: Erreger gelangen über den Blutkreislauf (hämatogen) oder durch direkte Verletzung in den Gelenkspalt.',
                'Entzündungsreaktion: Sie besiedeln die Synovialmembran und lösen eine massive Entzündungsreaktion aus, die zu einem großen eitrigen Erguss führt.',
                'Knorpelschaden: Von Neutrophilen freigesetzte Enzyme und Entzündungszytokine verursachen innerhalb von Stunden bis Tagen irreversible Schäden am Gelenkknorpel.'
              ],
              virulence_factors: ['Adhäsine', 'Toxine', 'Knorpelschädigende Enzyme']
            },
            clinical: {
              incubation: 'Schnell (Stunden-Tage)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Akute Monoarthritis', description: 'Plötzlich einsetzende, extrem schmerzhafte Schwellung, Rötung und Überwärmung eines einzelnen großen Gelenks (am häufigsten Knie, Hüfte).', severity: 'severe' },
                { name: 'Funktionsverlust', description: 'Der Patient kann das Gelenk aufgrund der Schmerzen weder aktiv noch passiv bewegen. Hohes Fieber und Schüttelfrost sind häufig.', severity: 'severe' }
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
                { test: 'CRP/BSG', finding: 'Deutlich erhöht', interpretation: 'Entzündung' },
                { test: 'Synovialflüssigkeit', finding: '>50.000 Leuko/µL (>90% PMN)', interpretation: 'Typisch für septische Arthritis' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'Anfangs negativ/Weichteilschwellung, später Gelenkspaltverschmälerung', significance: 'Ausgangsbefund' },
                { modality: 'Ultraschall', finding: 'Gelenkflüssigkeit, Synovialisverdickung', significance: 'Zur Steuerung der Punktion, Frühdiagnose' },
                { modality: 'MRT', finding: 'Gelenkerguss, Knochenmarködem, Abszess', significance: 'Ausschluss Osteomyelitis, Komplikationen' }
              ],
              microbiology: [
                { test: 'Gelenkpunktion (Arthrozentese)', finding: 'Eitrig, Gram-Färbung positiv (50%)', significance: 'SOFORT durchführen!' },
                { test: 'Kultur (Synovia + Blut)', finding: 'Positiv', significance: 'Goldstandard' },
                { test: 'PCR (16S rRNA)', finding: 'Erreger-DNA', significance: 'Wenn Kultur negativ (vorbehandelter Patient)' }
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
                  { drug: '+ Ceftriaxon', dose: '1x2g i.v.', duration: '', note: 'Gram- (Gonokokken/G- Stäbchen)-Abdeckung' }
                ],
                icu: [
                  { drug: 'Vancomycin + Meropenem', dose: 'i.v.', duration: '', note: 'Bei Sepsis/Immunsuppression' }
                ]
              },
              targeted: 'S. aureus: Cefazolin/Flucloxacillin; MRSA: Vancomycin/Daptomycin; Gonokokken: Ceftriaxon. Dauer: 2-6 Wochen (i.v., dann p.o. Umstellung möglich - OVIVA).',
              supportive: ['Gelenkdrainage (tägliche Nadelaspiration, Arthroskopie oder offene Spülung) - ENTSCHEIDEND!', 'Schmerzmittel', 'Frühe Mobilisierung nach Abklingen der Entzündung'],
              prevention: ['Sterilität bei Prothesenoperationen', 'Prävention von Gonorrhoe', 'Behandlung von Hautinfektionen']
            },
            guidelines: {
              diagnosis: [
                'Gelenkpunktion (Arthrozentese) vor Antibiotika ist obligatorisch! Zellzahl, Gram, Kultur, Kristalle.',
                'Blutkulturen sollten immer abgenommen werden (50% positiv).'
              ],
              treatment_indications: [
                'Alle Fälle von septischer Arthritis erfordern sofortige Antibiotika und Drainage.'
              ],
              first_line: [
                'Sofortige Gelenkdrainage (Nadel oder chirurgisch) + empirische i.v. Antibiotika (Vancomycin + Ceftriaxon).',
                'Basierend auf der OVIVA-Studie kann eine frühe orale Umstellung bei stabilen Patienten sicher sein.'
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
            pathogen: { type: 'Bakterium', name: '<i>Staphylococcus aureus</i> (am häufigsten), <i>Streptococcus</i> spp., Gram-negative', gram: 'Gemischt', shape: 'Kokken/Bazillen' },
            epidemiology: {
              incidence: 'Selten, 2-7/100.000 pro Jahr',
              risk_groups: ['Ältere (>50 Jahre)', 'Diabetes mellitus', 'Immungeschwächte', 'i.v.-Drogenkonsumenten', 'Zustand nach Wirbelsäulen-OP', 'Urogenitale Infektionen'],
              seasonality: 'Keine',
              transmission: 'Hämatogen (am häufigsten), direkt (OP, Trauma), per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Hämatogene Streuung: Die Erreger gelangen am häufigsten über den Blutkreislauf (hämatogen) in die stark durchbluteten Wirbelkörper, oft von einer entfernten Infektion (z.B. Harnwege, Haut).',
                'Ausbreitung: Die Infektion breitet sich vom Wirbelkörper auf die benachbarte Bandscheibe und den nächsten Wirbel aus und verursacht Entzündung und Gewebezerstörung.',
                'Komplikationen: Der Prozess kann zur Bildung eines epiduralen oder paravertebralen Abszesses führen, der eine Rückenmarkskompression und neurologische Symptome verursacht.'
              ],
              virulence_factors: ['Adhäsine (MSCRAMM)', 'Biofilmbildung', 'Toxine']
            },
            clinical: {
              incubation: 'Tage-Wochen',
              onset: 'Langsam, schleichend',
              symptoms: [
                { name: 'Rückenschmerzen', description: 'Das Leitsymptom (>90%) ist ein allmählich zunehmender, lokalisierter Rückenschmerz, der auch in Ruhe besteht und klopfempfindlich ist.', severity: 'severe' },
                { name: 'Fieber und neurologische Symptome', description: 'Fieber ist oft nur subfebril oder fehlt. Neurologische Symptome (radikuläre Schmerzen, Gliederschwäche) deuten auf einen Epiduralabszess hin und stellen einen Notfall dar.', severity: 'severe' }
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
