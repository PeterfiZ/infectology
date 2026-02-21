Object.assign(window.diseases, {
      gastrointestinal: {
        name: 'Magen-Darm-Infektionen',
        icon: '🦠',
        color: '#ca8a04',
        tables: [
          {
            title: 'Differentialdiagnose von Magen-Darm-Infektionen',
            headers: ['Krankheit', 'Erreger', 'Betroffener Abschnitt', 'Mechanismus', 'Stuhlmenge', 'Stuhlcharakteristik', 'Fieber', 'Hauptmerkmale / Komplikationen'],
            rows: [
              ['C. difficile', 'C. difficile', 'Dickdarm', 'Toxin A/B (Entzündung)', 'Mittel/Groß', 'Wässrig, grünlich, übelriechend', '+', 'AB-assoziiert, Pseudomembranen, toxisches Megakolon'],
              ['Salmonella', 'Salmonella', 'Dünn- und Dickdarm', 'Invasion + Enterotoxin', 'Mittel', 'Wässrig (selten blutig)', '++', 'Lebensmittelvergiftung, Reptilienkontakt, extraintestinale Komplikationen'],
              ['Shigella', 'Shigella', 'Dickdarm', 'Invasion + Shiga-Toxin', 'Klein', 'Blutig-schleimig (Dysenterie)', '++', 'Tenesmen, niedrige Infektionsdosis, HUS'],
              ['Campylobacter', 'Campylobacter', 'Dünn- und Dickdarm', 'Invasion + Toxin', 'Mittel', 'Wässrig/Blutig', '+', 'Pseudoappendizitis, GBS, Geflügel'],
              ['E. coli (EHEC)', 'E. coli (STEC)', 'Dickdarm', 'Shiga-Toxin', 'Mittel', 'Blutig', '-', 'Fieberfrei, HUS, Rindfleisch'],
              ['E. coli (ETEC)', 'E. coli (ETEC)', 'Dünndarm', 'Enterotoxin (sekretorisch)', 'Groß', 'Wässrig', '-', 'Reisedurchfall'],
              ['E. coli (EPEC)', 'E. coli (EPEC)', 'Dünndarm', 'Malabsorption', 'Groß', 'Wässrig/Schleimig', '+/-', 'Säuglingsdiarrhoe'],
              ['E. coli (EIEC)', 'E. coli (EIEC)', 'Dickdarm', 'Invasion', 'Klein', 'Blutig-schleimig', '++', 'Dysenterie-artig, Fieber'],
              ['Yersinia', 'Yersinia', 'Dünn- und Dickdarm', 'Invasion', 'Mittel', 'Wässrig/Blutig', '+', 'Pseudoappendizitis, reaktive Arthritis, Schweinefleisch'],
              ['Giardia', 'Giardia', 'Dünndarm', 'Malabsorption', 'Groß/Mittel', 'Fettig, übelriechend', '-', 'Blähungen, Malabsorption, chronisch'],
              ['Amoeba', 'E. histolytica', 'Dickdarm', 'Invasion/Zytotoxin', 'Klein', 'Blutig-schleimig', '+/-', 'Leberabszess, Reisen'],
              ['Cryptosporidium', 'Cryptosporidium', 'Dünndarm', 'Sekretorisch/Malabsorption', 'Groß', 'Wässrig', '-', 'Persistierend bei Immunsupprimierten, Schwimmbäder'],
              ['Virale GE', 'Rota/Noro', 'Dünndarm', 'Malabsorption/Osmotisch', 'Groß', 'Wässrig', '-/+', 'Erbrechen dominiert (Noro), Wintersaison'],
              ['Cholera', 'Vibrio cholerae', 'Dünndarm', 'Enterotoxin (sekretorisch)', 'Sehr groß', 'Reiswasserartig', '-', 'Massiver Flüssigkeitsverlust, Dehydratation']
            ]
          }
        ],
        diseases: [
          {
            id: 'cdiff',
            name: 'Clostridioides-difficile-Infektion',
            pathogen: { type: 'Bakterium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-positiv', shape: 'sporenbildendes anaerobes Stäbchen' },
            epidemiology: {
              incidence: 'Häufigste Ursache für nosokomiale Diarrhoe, 500.000 Fälle/Jahr in den USA',
              risk_groups: ['Über 65-Jährige', 'Hospitalisierte Patienten', 'Antibiotika-Exposition', 'PPI-Einnahme', 'Entzündliche Darmerkrankungen', 'Immungeschwächte'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral (Sporen), nosokomiale Übertragung, Händehygiene!'
            },
            pathomechanism: {
              steps: [
                'Eine Antibiotikabehandlung stört das Gleichgewicht der normalen Darmflora, wodurch C. difficile-Sporen auskeimen und sich vermehren können.',
                'Das Bakterium produziert Toxine: Toxin A (Enterotoxin) verursacht Flüssigkeitssekretion und Entzündung, während Toxin B (Zytotoxin) die Darmepithelzellen direkt schädigt.',
                'Schwere Entzündungen und Zelltod führen zur Bildung charakteristischer Pseudomembranen auf der Dickdarmschleimhaut.'
              ],
              virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Binäres Toxin (CDT)', 'Sporenbildung', 'Adhärenzfaktoren']
            },
            clinical: {
              incubation: '2-10 Tage nach Antibiotika, bis zu 8 Wochen später',
              onset: 'Akut',
              symptoms: [
                { name: 'Wässrige Diarrhoe', description: 'Häufige (3-15x/Tag), charakteristisch grünliche, übelriechende, wässrige Durchfälle.', severity: 'severe' },
                { name: 'Bauchschmerzen', description: 'Diffuse, krampfartige Bauchschmerzen und Druckempfindlichkeit.', severity: 'moderate' },
                { name: 'Fieber', description: 'Wird oft von Fieber und Leukozytose begleitet.', severity: 'moderate' }
              ],
              physical_exam: [
                'Diffuse Druckempfindlichkeit des Abdomens',
                'Abdominelle Distension',
                'Fieber, Tachykardie',
                'Zeichen der Dehydratation',
                'Schwer: Zeichen von Ileus, toxischem Megakolon'
              ],
              complications: ['Fulminante Kolitis', 'Toxisches Megakolon', 'Darmperforation', 'Sepsis', 'Hypovolämischer Schock', 'Tod', 'Rezidiv (20-30%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose (bis >30 G/L)', interpretation: 'Schweregrad-Marker' },
                { test: 'Kreatinin', finding: 'Erhöht', interpretation: 'Kriterium für schwere CDI (>1.5x Baseline)' },
                { test: 'Albumin', finding: 'Erniedrigt (<2.5 g/dL)', interpretation: 'Mangelernährung, Schweregrad' },
                { test: 'Laktat', finding: 'Erhöht', interpretation: 'Fulminante Kolitis' }
              ],
              imaging: [
                { modality: 'Abdomenübersichtsaufnahme', finding: 'Megakolon (>6cm)', significance: 'Toxisches Megakolon' },
                { modality: 'Abdomen-CT', finding: 'Dickdarmwandverdickung, Akkordeon-Zeichen, Aszites', significance: 'Beurteilung des Schweregrads' }
              ],
              microbiology: [
                { test: 'Stuhltoxin (GDH + Toxin A/B EIA)', finding: 'Positiv', significance: 'Zweistufiger Algorithmus' },
                { test: 'Stuhl-PCR (NAAT)', finding: 'tcdB-Gen', significance: 'Am sensitivsten, weist aber auch Kolonisation nach' },
                { test: 'Kultur', finding: 'C. difficile Isolierung', significance: 'Typisierung, Epidemiologie' },
                { test: 'Sigmoidoskopie', finding: 'Pseudomembranen', significance: 'Nicht routinemäßig, diagnostisch' }
              ]
            },
            differential: [
              { disease: 'Andere AB-assoziierte Diarrhoe', distinguishing: 'Toxin negativ, milder' },
              { disease: 'Schub einer entzündlichen Darmerkrankung', distinguishing: 'Anamnese, Endoskopie' },
              { disease: 'Ischämische Kolitis', distinguishing: 'Risikofaktoren, CT-Angiographie' },
              { disease: 'Andere infektiöse Enterokolitis', distinguishing: 'Stuhlkultur, Epidemiologie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Fidaxomicin', dose: '200 mg zweimal täglich p.o.', duration: '10 Tage', note: 'Erste Wahl (weniger Rezidive)' },
                  { drug: 'Vancomycin', dose: '125 mg 4-mal täglich p.o.', duration: '10 Tage', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '125 mg 4-mal täglich p.o.', duration: '10-14 Tage', note: 'Wenn Fidaxomicin nicht verfügbar ist' },
                  { drug: 'Fidaxomicin', dose: '200 mg zweimal täglich p.o.', duration: '10 Tage', note: 'Bevorzugt' }
                ],
                icu: [
                  { drug: 'Vancomycin', dose: '500 mg 4-mal täglich p.o. + rektal', duration: '10-14 Tage', note: 'Fulminant: höhere Dosis' },
                  { drug: '+ Metronidazol', dose: '500 mg dreimal täglich i.v.', duration: '10-14 Tage', note: 'Bei Ileus (i.v. Penetration)' },
                  { drug: 'Chirurgie', dose: 'Kolektomie', duration: '', note: 'Toxisches Megakolon, Perforation' }
                ]
              },
              targeted: 'Nicht schwer: Vancomycin oder Fidaxomicin; Schwer: Vancomycin; Fulminant: Vancomycin + Metronidazol ± Chirurgie',
              supportive: ['Antibiotika absetzen (wenn möglich)', 'Flüssigkeitsersatz', 'Elektrolytkorrektur', 'KEINE Motilitätshemmer (Peristaltikhemmer)!', 'Kontaktisolierung'],
              prevention: ['Antibiotic Stewardship', 'Händewaschen (Alkohol tötet Sporen nicht!)', 'Kontaktisolierung', 'Bezlotoxumab (Rezidivprophylaxe)', 'FMT bei rezidivierenden Fällen']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: neu aufgetretene Diarrhoe nach Antibiotika-Exposition oder im Krankenhausumfeld',
                'Labor: Leukozytose, erhöhtes Kreatinin/ALP, Albuminabfall sind Schwerezeichen',
                'Mikro: zweistufiger Algorithmus (GDH + Toxin EIA) und/oder NAAT; positive PCR allein kann Kolonisation bedeuten',
                'Endoskopie nur in Ausnahmefällen (Pseudomembranen)'
              ],
              treatment_indications: [
                'Akute Symptome, besonders bei schweren Verläufen (Leukozytose >15 G/L, Fieber, Kreatininanstieg, Gelbsucht, Ileus oder toxisches Megakolon)',
                'Bei rezidivierender Erkrankung frühe Intervention (Bezlotoxumab, FMT erwägen)'
              ],
              first_line: [
                'Nicht schwer/schwer: Fidaxomicin 200 mg zweimal täglich für 10 Tage oder Vancomycin 125 mg 4-mal täglich für 10 Tage',
                'Fulminanter Fall: Vancomycin oral/rektal in höherer Dosis + Metronidazol i.v. (bei Ileus)',
              ],
              supportive: [
                'Absetzen des auslösenden Antibiotikums wenn möglich, Flüssigkeits- und Elektrolytersatz, Ernährung',
                'Zu vermeiden: Motilitätshemmer bei schweren Patienten'
              ],
              monitoring: [
                'Klinischer Zustand, Leukozytose und Nierenfunktion täglich bei schweren Fällen überwachen',
                'Bei Rezidiv erneute medikamentöse Behandlung (z.B. Fidaxomicin) oder FMT erwägen'
              ],
              prevention: [
                'Antibiotic Stewardship, Händehygiene, Kontaktisolierung, Umgebungsdesinfektion (sporozide Mittel)'
              ],
              special_populations: [
                'Ältere, Immungeschwächte und hospitalisierte Patienten haben ein höheres Risiko; hier niedrigere Schwelle für frühen Behandlungsbeginn'
              ],
              dosing: {
                adult: {
                  fidaxomicin: '200 mg p.o. zweimal täglich (BID) für 10 Tage',
                  vancomycin: '125 mg p.o. 4-mal täglich für 10 Tage (nicht schwer); fulminanter Fall 500 mg p.o. 4-mal täglich + rektale Gabe erwägen',
                  metronidazol_iv: '500 mg i.v. 3-mal täglich (zusätzlich bei fulminantem Verlauf/Ileus)'
                },
                pediatric: 'Kinderdosen gemäß lokalem Protokoll; gewichtsadaptierte Dosierung von Vancomycin erforderlich',
              },
              references: [
                'IDSA/SHEA 2021 C. difficile guideline: https://www.idsociety.org/practice-guideline/clostridioides-difficile/',
                'CDC C. difficile information: https://www.cdc.gov/cdiff/index.html'
              ]
            },
            prognosis: {
              mortality: 'Insgesamt 5-10%, Fulminant 30-50%',
              prognostic_scores: ['ATLAS Score'],
              factors: 'Alter, Leukozytose, Albumin, Kreatinin, hypervirulenter Stamm, späte Behandlung'
            }
          },
          {
            id: 'salmonellosis',
            name: 'Salmonellose (Nicht-Typhus)',
            pathogen: { type: 'Bakterium', name: '<i>Salmonella enterica</i> (z.B. <i>Enteritidis, Typhimurium</i>)', gram: 'Gram-negativ', shape: 'Stäbchen' },
            epidemiology: {
              incidence: 'Häufige Lebensmittelvergiftung (häufiger im Sommer)',
              risk_groups: ['Säuglinge', 'Ältere', 'Magensäuremangel (PPI)', 'Immungeschwächte'],
              seasonality: 'Sommer-Herbst',
              transmission: 'Fäkal-oral: kontaminierte Lebensmittel (Eier, Geflügel, Fleisch), Kontakt mit Reptilien'
            },
            pathomechanism: {
              steps: [
                'Nach der Aufnahme (hohe Keimzahl erforderlich) überleben die Erreger die Magensäure und gelangen in den Dünndarm.',
                'Im Dünndarm dringen sie über M-Zellen in die Peyer-Plaques und tiefere Schichten der Darmwand ein.',
                'Die bakterielle Vermehrung löst eine heftige Entzündungsreaktion aus, die zu Neutrophilen-Infiltration und Flüssigkeitssekretion führt.'
              ],
              virulence_factors: ['Typ-III-Sekretionssystem (T3SS)', 'Enterotoxin']
            },
            clinical: {
              incubation: '6-72 Stunden (durchschnittlich 12-36 Stunden)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Diarrhoe', description: 'Plötzlich einsetzender, reichlicher, wässriger, manchmal schleimiger oder blutiger Durchfall.', severity: 'moderate' },
                { name: 'Fieber', description: 'Kann von hohem Fieber, Schüttelfrost, Kopfschmerzen und Muskelschmerzen begleitet sein.', severity: 'moderate' },
                { name: 'Bauchkrämpfe', description: 'Periumbilikale oder diffuse Bauchkrämpfe.', severity: 'moderate' }
              ],
              physical_exam: ['Fieber', 'Abdominelle Druckempfindlichkeit', 'Exsikkosezeichen'],
              complications: ['Bakteriämie (5%, vor allem Ältere/Immungeschwächte)', 'Septische Arthritis', 'Osteomyelitis (Sichelzellenanämie)', 'Endovaskuläre Infektion (Aneurysma)']
            },
            diagnostics: {
              laboratory: [{ test: 'Entzündungsparameter', finding: 'CRP erhöht', interpretation: 'Bakterieller Ursprung' }],
              microbiology: [{ test: 'Stuhlkultur', finding: 'Salmonella sp.', significance: 'Diagnostisch' }]
            },
            differential: [
              { disease: 'Campylobacter-Enteritis', distinguishing: 'Kultur, ähnliches klinisches Bild' },
              { disease: 'Shigellose', distinguishing: 'Blutig-schleimiger Stuhl häufiger' },
              { disease: 'Virale Gastroenteritis', distinguishing: 'Erbrechen dominiert, wässriger Durchfall' },
              { disease: 'CED (Morbus Crohn/Colitis)', distinguishing: 'Chronisch, nicht infektiös, Endoskopie' }
            ],
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Gesunde Erwachsene benötigen KEINE Antibiotika (verlängert die Ausscheidung!)' }],
                inpatient: [{ drug: 'Ceftriaxon', dose: '1-2 g i.v.', duration: '7-14 Tage', note: 'Bei schweren/invasiven Fällen' }, { drug: 'Ciprofloxacin', dose: '500 mg zweimal täglich p.o.', duration: '7-10 Tage', note: 'Alternative (wenn empfindlich)' }]
              },
              targeted: 'Nur bei Risikogruppen (Säuglinge, Ältere, Immungeschwächte) oder schweren Fällen: Fluorchinolon oder Ceftriaxon.',
              supportive: ['Flüssigkeitsersatz (ORS)', 'Probiotika'],
              prevention: ['Lebensmittelhygiene', 'Gründliches Erhitzen von Eiern/Fleisch']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: akute Diarrhoe mit Fieber; bei Säuglingen/Älteren/Immungeschwächten höheres Risiko für schwere Komplikationen',
                'Mikrobiologie: Stuhlkultur zur Identifizierung von Salmonellen; Blutkultur bei schwerem Verlauf oder Verdacht auf Sepsis'
              ],
              treatment_indications: [
                'Gesunde Erwachsene, nicht-invasive Infektion: in der Regel keine Antibiotika',
                'Antibiotika empfohlen: Säuglinge, Ältere, Immungeschwächte, Sepsis, extraintestinale Infektion, Schwangerschaft in bestimmten Situationen'
              ],
              first_line: [
                'Schwerer/invasiver Fall: Ceftriaxon i.v. oder Fluorchinolon (abhängig von Empfindlichkeit)'
              ],
              supportive: ['Flüssigkeitsersatz, Elektrolytersatz, Ernährung'],
              prevention: ['Lebensmittelsicherheit, gründliches Erhitzen von Eiern und Geflügel'],
              dosing: {
                adult: {
                  ceftriaxone: '1–2 g i.v. einmal täglich (übliche Dauer 5–14 Tage, abhängig vom klinischen Status)',
                  ciprofloxacin: '500 mg p.o. zweimal täglich (7–10 Tage) – nur bei empfindlichen Stämmen; lokale Resistenzlage beachten'
                },
                pediatric: 'Kinderdosen für Ceftriaxon und Fluorchinolone sind alters- und gewichtsabhängig; lokales pädiatrisches Protokoll konsultieren'
              },
              references: [
                'CDC – Salmonella: https://www.cdc.gov/salmonella/index.html',
                'WHO – Non-typhoidal Salmonella overview: https://www.who.int/news-room/fact-sheets/detail/salmonella-(non-typhoidal)'
              ]
            },
            prognosis: { mortality: 'Niedrig (<1%), höher bei Sepsis', prognostic_scores: [], factors: 'Alter, Komorbidität' }
          },
          {
            id: 'shigellosis',
            name: 'Shigellose (Ruhr)',
            pathogen: { type: 'Bakterium', name: '<i>Shigella (dysenteriae, flexneri, sonnei)</i>', gram: 'Gram-negativ', shape: 'Stäbchen' },
            epidemiology: {
              incidence: 'Weltweit häufig, endemisch in Entwicklungsländern',
              risk_groups: ['Kinder (Kita, Kindergarten)', 'Reisende', 'Männer, die Sex mit Männern haben (MSM)'],
              transmission: 'Fäkal-oral (Mensch zu Mensch), sehr niedrige Infektionsdosis (10-100 Bakterien)!'
            },
            pathomechanism: {
              steps: [
                'Bakterien dringen in Dickdarmepithelzellen ein und breiten sich von Zelle zu Zelle aus, wobei sie das Immunsystem umgehen.',
                'Bakterienvermehrung und produzierte Toxine (z.B. Shiga-Toxin) verursachen Schleimhautnekrose, Ulzeration und Blutungen.',
                'Shiga-Toxin, das in den Blutkreislauf gelangt, kann Nierenendothelzellen schädigen und ein hämolytisch-urämisches Syndrom (HUS) verursachen.'
              ],
              virulence_factors: ['Shiga-Toxin (Stx)', 'Invasionsplasmid-Antigene']
            },
            clinical: {
              incubation: '1-3 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Dysenterie', description: 'Häufige, kleine Mengen blutig-schleimig-eitrigen Stuhls.', severity: 'severe' },
                { name: 'Tenesmen', description: 'Quälender, erfolgloser Stuhldrang.', severity: 'severe' },
                { name: 'Fieber', description: 'Gekennzeichnet durch hohes Fieber und einen toxischen Zustand.', severity: 'moderate' }
              ],
              complications: ['Hämolytisch-urämisches Syndrom (HUS - S. dysenteriae)', 'Toxisches Megakolon', 'Rektumprolaps', 'Reaktive Arthritis']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Leukozytose, Linksverschiebung', interpretation: 'Invasive Infektion' }],
              microbiology: [{ test: 'Stuhlkultur', finding: 'Shigella sp.', significance: 'Diagnostisch' }]
            },
            differential: [
              { disease: 'EIEC (E. coli)', distinguishing: 'Klinisch identisch, Mikrobiologie entscheidet' },
              { disease: 'Amöbiasis', distinguishing: 'E. histolytica Nachweis, weniger fieberhaft' },
              { disease: 'Campylobacter-Enteritis', distinguishing: 'Kultur' },
              { disease: 'C. difficile', distinguishing: 'Antibiotika-Anamnese, Toxintest' }
            ],
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Azithromycin', dose: '500 mg einmal täglich p.o.', duration: '3 Tage', note: 'Erste Wahl' }, { drug: 'Ciprofloxacin', dose: '500 mg zweimal täglich p.o.', duration: '3 Tage', note: 'Alternative (Resistenz nimmt zu)' }]
              },
              targeted: 'Antibiotika empfohlen zur Verkürzung der Krankheit und Reduzierung der Infektiosität. Azithromycin, Ceftriaxon, Ciprofloxacin.',
              supportive: ['Flüssigkeitsersatz', 'Motilitätshemmer (Loperamid) KONTRAINDIZIERT!'],
              prevention: ['Strenge Händehygiene', 'Patientenisolierung']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: blutiger, schleimiger Stuhl und Tenesmen; aufgrund niedriger Infektionsdosis Hinweis auf Ausbruch möglich',
                'Mikrobiologie: Stuhlkultur; bei S. dysenteriae Shiga-Toxin-Test'
              ],
              treatment_indications: [
                'Antibiotika empfohlen zur Verkürzung der Krankheit und Reduzierung der Ausbreitung (besonders bei Ausbrüchen, schweren Symptomen oder Risikogruppen)'
              ],
              first_line: [
                'Azithromycin (1 g Einzeldosis oder 500 mg für 3 Tage), Alternative: Ceftriaxon i.v. bei schweren Fällen'
              ],
              supportive: ['Flüssigkeitsersatz, symptomatische Behandlung'],
              prevention: ['Regelmäßige Händehygiene, Kontaktisolierung, seuchenhygienische Maßnahmen'],
              dosing: {
                adult: {
                  azithromycin: "1 g p.o. Einzeldosis oder 500 mg p.o. einmal täglich für 3 Tage (gemäß lokalem Protokoll)",
                  ciprofloxacin: '500 mg p.o. zweimal täglich für 3 Tage (Alternative; Resistenz nimmt zu)',
                  ceftriaxone: '1 g i.v. einmal täglich bei schweren Fällen'
                },
                pediatric: 'Kinderdosen für Azithromycin und Ceftriaxon sind alters- und gewichtsabhängig; pädiatrisches Protokoll konsultieren'
              },
              references: [
                'CDC – Shigella: https://www.cdc.gov/shigella/index.html',
                'WHO – Shigellosis factsheet: https://www.who.int/news-room/fact-sheets/detail/shigellosis'
              ]
            },
            prognosis: { mortality: 'Niedrig mit Behandlung, bei S. dysenteriae 1 in Epidemien bis zu 20%', prognostic_scores: [], factors: 'Alter, Komorbidität, Mangelernährung' }
          },
          {
            id: 'campylobacter',
            name: 'Campylobacter-Enteritis',
            pathogen: { type: 'Bakterium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negativ', shape: 'spiralförmig/möwenflügelartig' },
            epidemiology: {
              incidence: 'Häufigste bakterielle Gastroenteritis in der entwickelten Welt',
              risk_groups: ['Säuglinge', 'Junge Erwachsene', 'Ältere'],
              seasonality: 'Sommer',
              transmission: 'Kontaminiertes Geflügel (nicht durchgegart), Rohmilch, Wasser'
            },
            pathomechanism: {
              steps: [
                'Bakterien kolonisieren und invadieren die Schleimhaut von Dünn- und Dickdarm.',
                'Sie produzieren Toxine (z.B. CDT), die die Zellteilung hemmen und Entzündungen auslösen.',
                'Die Infektion kann über einen Autoimmunmechanismus ein Guillain-Barré-Syndrom auslösen.'
              ],
              virulence_factors: ['Flagellum (Motilität)', 'Adhäsine', 'Cytolethal distending toxin (CDT)']
            },
            clinical: {
              incubation: '2-5 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Diarrhoe', description: 'Reichlicher, wässriger, oft blutiger Durchfall.', severity: 'moderate' },
                { name: 'Bauchschmerzen', description: 'Ausgeprägte, krampfartige Bauchschmerzen, die eine Appendizitis imitieren können (Pseudoappendizitis).', severity: 'severe' },
                { name: 'Fieber', description: 'Dem Durchfall gehen oft Fieber, Kopfschmerzen und Muskelschmerzen voraus.', severity: 'moderate' }
              ],
              physical_exam: ['Diffuse Druckempfindlichkeit des Abdomens', 'Fieber', 'Zeichen der Dehydratation'],
              complications: ['Guillain-Barré-Syndrom (GBS) - 1/1000 Fälle', 'Reaktive Arthritis', 'Erythema nodosum']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Leukozytose', interpretation: 'Entzündung' }, { test: 'Stuhl', finding: 'Leukozyten, Erythrozyten', interpretation: 'Invasiv' }, { test: 'CRP', finding: 'Erhöht', interpretation: 'Bakterieller Ursprung' }],
              microbiology: [{ test: 'Stuhlkultur', finding: 'Campylobacter (Spezialmedium, 42°C)', significance: 'Diagnostisch' }]
            },
            differential: [
              { disease: 'Salmonellose', distinguishing: 'Kultur, Epidemiologie' },
              { disease: 'Shigellose', distinguishing: 'Schwerere Dysenterie, Kultur' },
              { disease: 'Appendizitis', distinguishing: 'US/CT, chirurgisches Konsil' }
            ],
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Azithromycin', dose: '500 mg einmal täglich p.o.', duration: '3 Tage', note: 'Erste Wahl bei schweren Fällen' }]
              },
              targeted: 'Bei milden Fällen nur Flüssigkeitsersatz. Bei schweren Fällen Makrolide (Azithromycin). Fluorchinolon-Resistenz hoch!',
              supportive: ['Flüssigkeitsersatz'],
              prevention: ['Ausreichendes Erhitzen von Geflügel', 'Vermeidung von Kreuzkontamination in der Küche']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: akute Bauchschmerzen, blutige Diarrhoe; Pseudoappendizitis-Symptome möglich',
                'Mikrobiologie: Stuhlkultur unter speziellen Bedingungen (42°C); Antigen/PCR wo verfügbar'
              ],
              treatment_indications: [
                'Milder, nicht systemischer Fall: nur supportive Behandlung',
                'Schwere oder persistierende Symptome, Immungeschwächte: Makrolid-Therapie empfohlen'
              ],
              first_line: ['Azithromycin 500 mg Einzeldosis oder 500 mg täglich für 3 Tage (bei schwereren Fällen)'],
              supportive: ['Flüssigkeitsersatz, Elektrolytersatz'],
              prevention: ['Gründliches Erhitzen von Geflügel, Küchenhygiene'],
              dosing: {
                adult: {
                  azithromycin: '500 mg p.o. Einzeldosis oder 500 mg p.o. einmal täglich für 3 Tage (alternatives Schema: 500 mg Tag 1, dann 250 mg täglich an den Tagen 2–3) ',
                  ciprofloxacin: '500 mg p.o. zweimal täglich für 3 Tage (wenn empfindlich und schwerer Fall)'
                },
                pediatric: 'Kinderdosen für Makrolide sind alters- und gewichtsabhängig; lokales Protokoll anfordern'
              },
              references: [
                'CDC – Campylobacter: https://www.cdc.gov/campylobacter/index.html',
                'ESCMID guidance on Campylobacter: https://www.escmid.org/'
              ]
            },
            prognosis: { mortality: 'Sehr niedrig (<0.1%)', prognostic_scores: [], factors: 'GBS-Komplikation kann schwerwiegend sein, reaktive Arthritis langwierig' }
          },
          {
            id: 'ecoli_enteritis',
            name: 'E.-coli-Enteritis (ETEC, EHEC, EPEC, EIEC)',
            pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (pathogene Stämme)', gram: 'Gram-negativ', shape: 'Stäbchen' },
            epidemiology: {
              incidence: 'ETEC: Reisedurchfall; EHEC: lebensmittelbedingte Ausbrüche; EPEC: Säuglingsdiarrhoe; EIEC: dysenterieartig',
              risk_groups: ['Reisende (ETEC)', 'Kinder, Ältere (EHEC)', 'Säuglinge (EPEC)'],
              seasonality: 'Sommer',
              transmission: 'Fäkal-oral, kontaminiertes Wasser/Essen (Rindfleisch, Gemüse)'
            },
            pathomechanism: {
              steps: [
                'ETEC: Bakterien haften im Dünndarm und produzieren Enterotoxine, die eine massive Flüssigkeitssekretion verursachen.',
                'EHEC: Produzieren Shiga-Toxin im Dickdarm, was blutigen Durchfall und bei systemischer Resorption Nierenversagen (HUS) verursacht.',
                'EPEC/EIEC: Haften an oder dringen in Darmepithelzellen ein und verursachen Schleimhautschäden und Entzündungen.'
              ],
              virulence_factors: ['Enterotoxine', 'Shiga-Toxin (Stx1, Stx2)', 'Adhäsine (EPEC)', 'Invasine (EIEC)']
            },
            clinical: {
              incubation: 'ETEC/EPEC: 1-3 Tage; EHEC/EIEC: 3-4 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Wässrige Diarrhoe (ETEC/EPEC)', description: 'Plötzlich einsetzender, reichlicher wässriger Durchfall ohne Fieber (Reisedurchfall).', severity: 'moderate' },
                { name: 'Blutige Diarrhoe (EHEC/EIEC)', description: 'Blutiger Stuhl mit starken Bauchkrämpfen, oft ohne Fieber (EHEC) oder mit Fieber (EIEC).', severity: 'severe' }
              ],
              physical_exam: ['Dehydratation', 'Druckempfindlichkeit des Abdomens (EHEC/EIEC: ausgeprägt)', 'Fieber (häufig bei EIEC, selten bei EHEC)'],
              complications: ['Hämolytisch-urämisches Syndrom (HUS) - 5-10% nach EHEC-Infektion (hauptsächlich Kinder)', 'TTP (Erwachsene)', 'Mangelernährung (EPEC)']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Thrombozytopenie, Anämie', interpretation: 'Verdacht auf HUS!' }, { test: 'Niere', finding: 'Kreatininanstieg', interpretation: 'HUS' }],
               microbiology: [
                { test: 'Stuhlkultur', finding: 'Sorbitol-MacConkey (EHEC)', significance: 'EHEC-Screening' },
                { test: 'Shiga-Toxin-Nachweis', finding: 'PCR oder EIA', significance: 'EHEC-Diagnose' },
                { test: 'PCR-Panel', finding: 'Virulenzgene', significance: 'Unterscheidung von EPEC/EIEC/ETEC' }
              ]
            },
            differential: [
              { disease: 'Shigellose', distinguishing: 'Ähnlich bei EIEC/EHEC, Kultur' },
              { disease: 'Cholera', distinguishing: 'Bei ETEC (Reiswasserstuhl), Reisen' },
              { disease: 'Virale Gastroenteritis', distinguishing: 'Kein Blut, Erbrechen kann dominieren' },
              { disease: 'Campylobacter-Enteritis', distinguishing: 'Kultur' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'ETEC: Rifaximin', dose: '200 mg zweimal täglich p.o.', duration: '3 Tage', note: 'Reisedurchfall' },
                  { drug: 'EHEC: ANTIBIOTIKA KONTRAINDIZIERT!', dose: '-', duration: '-', note: 'Erhöht das HUS-Risiko (Toxinfreisetzung)!' },
                  { drug: 'EIEC: Ciprofloxacin/Azithromycin', dose: 'Standarddosis', duration: '3 Tage', note: 'Schwere Fälle (wie Shigella)' }
                ]
              },
              targeted: 'ETEC/EIEC: Ciprofloxacin oder Azithromycin (bei schweren Fällen). EHEC: NUR supportiv! EPEC: Supportiv.',
              supportive: ['Flüssigkeitsersatz', 'Bei HUS Dialyse, Transfusion'],
              prevention: ['Lebensmittelhygiene', 'Rindfleisch durchbraten', 'Für Reisende: Flaschenwasser']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: blutige Diarrhoe (EHEC/EIEC) oder wässrige Diarrhoe (ETEC/EPEC); Ausschluss von HUS wichtig',
                'Mikrobiologie: EHEC-Screening, PCR-Panel zur Unterscheidung der Pathotypen'
              ],
              treatment_indications: [
                'Bei EHEC-Infektion sind Antibiotika in der Regel kontraindiziert (erhöhtes HUS-Risiko)',
                'Bei ETEC/EIEC können bei schweren Symptomen Antibiotika gegeben werden'
              ],
              supportive: ['Flüssigkeitsersatz, engmaschige Überwachung; bei HUS nephrologische Versorgung, Dialyse falls erforderlich'],
              prevention: ['Lebensmittelhygiene, gut durchgebratenes Rindfleisch, Vorsichtsmaßnahmen für Reisende'],
              dosing: {
                adult: {
                  rifaximin: '200 mg p.o. 3-mal täglich für 3 Tage (ETEC, nicht-invasiver Reisedurchfall)',
                  azithromycin: '1 g p.o. Einzeldosis oder 500 mg p.o. 1x täglich für 1–3 Tage (schwere ETEC/EIEC)'
                },
                pediatric: 'Rifaximin-Kinderdosen begrenzt; bei EHEC Antibiotika bei Kindern vermeiden'
              },
              references: [
                'CDC – E. coli (STEC): https://www.cdc.gov/ecoli/index.html',
                'CDC – Traveler\'s Diarrhea & Rifaximin: https://www.cdc.gov/antibiotic-use/community/for-hcp/common-conditions/travelers-diarrhea.html'
              ]
            },
            prognosis: { mortality: 'ETEC/EPEC: niedrig; EHEC: bei HUS 3-5% Mortalität', prognostic_scores: [], factors: 'Alter (Kind/Alt), HUS-Entwicklung, Antibiotikaeinsatz (bei EHEC verschlechternd!)' }
          },
          {
            id: 'yersiniosis',
            name: 'Yersiniose',
            pathogen: { type: 'Bakterium', name: '<i>Yersinia enterocolitica</i>', gram: 'Gram-negativ', shape: 'Kokkobazillus' },
            epidemiology: {
              incidence: 'Häufiger in gemäßigten Zonen, im Winter',
              risk_groups: ['Kinder', 'Patienten mit Eisenüberladung (Hämochromatose)'],
              seasonality: 'Winter',
              transmission: 'Rohes Schweinefleisch, Milch, kontaminiertes Wasser. Psychrophil (vermehrt sich im Kühlschrank!)'
            },
            pathomechanism: {
              steps: [
                'Bakterien dringen über M-Zellen im Ileum in Peyer-Plaques und mesenteriale Lymphknoten ein.',
                'Sie verursachen Entzündungen und Mikroabszesse in den Lymphknoten (Mesenteriallymphadenitis).',
                'Die Infektion kann über einen immunologischen Mechanismus eine reaktive Arthritis auslösen.'
              ],
              virulence_factors: ['Yersinia outer proteins (Yops)', 'T3SS', 'Invasin']
            },
            clinical: {
              incubation: '4-7 Tage',
              onset: 'Schleichend',
              symptoms: [
                { name: 'Enterokolitis', description: 'Fieber, Durchfall (evtl. blutig), Erbrechen.', severity: 'moderate' },
                { name: 'Pseudoappendizitis', description: 'Schmerzen und Druckempfindlichkeit im rechten Unterbauch, die eine Appendizitis imitieren.', severity: 'moderate' }
              ],
              physical_exam: ['Druckschmerz im rechten Unterbauch', 'Fieber', 'Erythema nodosum (spät)'],
              complications: ['Reaktive Arthritis (HLA-B27)', 'Erythema nodosum', 'Sepsis (bei Patienten mit Eisenüberladung)']
            },
            diagnostics: {
              laboratory: [{ test: 'Entzündungsparameter', finding: 'Erhöht', interpretation: 'Bakteriell' }],
              imaging: [{ modality: 'Abdomen-US', finding: 'Mesenteriale Lymphadenopathie, terminale Ileitis', significance: 'Ausschluss Appendizitis' }],
              microbiology: [{ test: 'Stuhlkultur', finding: 'CIN-Agar (Kälteanreicherung)', significance: 'Muss dem Labor gemeldet werden' }]
            },
            differential: [
              { disease: 'Appendizitis', distinguishing: 'US/CT, chirurgisches Konsil' },
              { disease: 'Morbus Crohn', distinguishing: 'Chronisch, Endoskopie, Biopsie' },
              { disease: 'Andere bakterielle Enteritis', distinguishing: 'Kultur' }
            ],
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Meist selbstlimitierend' }],
                inpatient: [{ drug: 'Ciprofloxacin', dose: '500 mg zweimal täglich p.o.', duration: '7-10 Tage', note: 'Bei schweren Fällen' }, { drug: 'Doxycyclin', dose: '100 mg zweimal täglich p.o.', duration: '7-10 Tage', note: 'Alternative' }]
              },
              targeted: 'Fluorchinolone, Doxycyclin, TMP-SMX. Sepsis: Ceftriaxon.',
              prevention: ['Vermeidung von rohem Schweinefleisch', 'Pasteurisierung von Milch']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: Schmerzen im rechten Unterbauch, Fieber, gelegentlich blutige Diarrhoe; Pseudoappendizitis-Bild möglich',
                'Mikrobiologie: Stuhlkultur auf CIN-Agar, Labor auf Notwendigkeit der Kälteanreicherung hinweisen'
              ],
              treatment_indications: [
                'Meist selbstlimitierend, Antibiotika nur bei schweren systemischen Symptomen, systemischer Ausbreitung oder Patienten mit Eisenüberladung'
              ],
              first_line: ['Schwerer Fall: Ciprofloxacin oder Doxycyclin (unter Berücksichtigung lokaler Resistenzen)'],
              supportive: ['Flüssigkeitsersatz, Fiebersenkung'],
              prevention: ['Aufklärung: Vermeidung von rohem Schweinefleisch, Konsum von pasteurisierter Milch'],
              dosing: {
                adult: {
                  ciprofloxacin: '500 mg p.o. zweimal täglich für 7–10 Tage',
                  doxycycline: '100 mg p.o. zweimal täglich für 7–10 Tage'
                },
                pediatric: 'Bei Kindern meist symptomatische Behandlung; Antibiotika nur bei schwerer, systemischer Infektion (pädiatrisches Konsil)'
              },
              references: [
                'CDC – Yersinia enterocolitica: https://www.cdc.gov/yersinia/index.html'
              ]
            },
            prognosis: { mortality: 'Niedrig, bei Sepsis hoch (50%)', prognostic_scores: [], factors: 'Eisenüberladung, Immunsuppression, späte Diagnose' }
          },
          {
            id: 'giardiasis',
            name: 'Giardiasis (Lambliasis)',
            pathogen: { type: 'Protozoon', name: '<i>Giardia duodenalis (lamblia)</i>', gram: '-', shape: 'birnenförmig (Trophozoit)' },
            epidemiology: {
              incidence: 'Weltweit verbreitet, häufigste parasitäre Darminfektion',
              risk_groups: ['Kinder', 'Camper (Bachwasser)', 'IgA-Mangel'],
              seasonality: 'Sommer-Herbst',
              transmission: 'Fäkal-oral (Zysten), Wasser (chlorresistent!), Nahrung'
            },
            pathomechanism: {
              steps: [
                'Aus verschluckten Zysten werden im Duodenum Trophozoiten freigesetzt.',
                'Die Parasiten heften sich mit ihrer Saugscheibe an die Zotten des Dünndarms, dringen aber nicht in das Gewebe ein.',
                'Die Schädigung der Darmzotten und der Mangel an Disaccharidase-Enzymen verursachen Malabsorption und osmotischen Durchfall.'
              ]
            },
            clinical: {
              incubation: '1-3 Wochen',
              onset: 'Schleichend',
              symptoms: [
                { name: 'Durchfall', description: 'Langwieriger, übelriechender, fettig glänzender, nicht blutiger Durchfall.', severity: 'moderate' },
                { name: 'Blähungen', description: 'Ausgeprägte Gasbildung, Blähbauch, schwefeliges Aufstoßen.', severity: 'moderate' },
                { name: 'Gewichtsverlust', description: 'Aufgrund der Malabsorption kann ein erheblicher Gewichtsverlust auftreten.', severity: 'moderate' }
              ],
              physical_exam: ['Meteorismus', 'Diffuse Druckempfindlichkeit des Abdomens', 'Kein Fieber'],
              complications: ['Chronischer Durchfall', 'Malabsorption (Vitaminmangel)', 'Gedeihstörung (Kinder)']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Normal, KEINE Eosinophilie', interpretation: 'Nicht-invasiver Parasit' }],
              microbiology: [
                { test: 'Stuhlparasiten', finding: 'Zysten oder Trophozoiten', significance: '3 Proben erforderlich (intermittierende Ausscheidung)' },
                { test: 'Stuhlantigen (EIA)', finding: 'Positiv', significance: 'Sensitiver als Mikroskopie' }
              ]
            },
            differential: [
              { disease: 'Laktoseintoleranz', distinguishing: 'Atemtest, Wirkung der Diät' },
              { disease: 'Reizdarmsyndrom (IBS)', distinguishing: 'Chronisch, negativer Parasitentest' },
              { disease: 'Kryptosporidiose', distinguishing: 'Säurefeste Färbung, Immunsuppression' },
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol', dose: '3x250mg p.o.', duration: '5-7 Tage', note: 'Erste Wahl' },
                  { drug: 'Tinidazol', dose: '2g p.o.', duration: 'Einzeldosis', note: 'Bequemer' }
                ]
              },
              targeted: 'Nitroimidazole (Metronidazol, Tinidazol). In der Schwangerschaft: Paromomycin.',
              prevention: ['Wasser abkochen/filtern (Chlor reicht nicht!), Händewaschen']
            },
            guidelines: {
              diagnosis: [
                'Abklärung von chronischem/akutem weichem Stuhl: 3 Stuhlproben auf Parasiten oder Antigentest (EIA) für schnelleres Ergebnis',
                'Eosinophilie meist nicht vorhanden, Atemtests zur Differentialdiagnose'
              ],
              treatment_indications: [
                'Alle symptomatischen Fälle behandeln; asymptomatische Träger nur bei spezieller epidemiologischer Indikation behandeln'
              ],
              first_line: ['Metronidazol 250–750 mg 3x täglich 5–7 Tage oder Tinidazol 2 g Einzeldosis (gemäß lokalem Protokoll)'],
              supportive: ['Flüssigkeitsersatz, Diät (Vermeidung fettreicher Speisen)'],
              prevention: ['Trinkwasser abkochen/filtern, Händehygiene; Hygienemaßnahmen in Kindergemeinschaften'],
              dosing: {
                adult: {
                  metronidazole: '250–500 mg p.o. 3x/Tag 5–7 Tage (viele Protokolle 500 mg 2–3x/Tag)',
                  tinidazole: '2 g p.o. Einzeldosis (Einzeldosis wirksame Alternative)'
                },
                pregnancy: 'In der Schwangerschaft: Paromomycin 500 mg p.o. 3x/Tag 7 Tage bevorzugt (Vermeidung von Metronidazol/Tinidazol im ersten Trimester)',
                pediatric: 'Kinderdosen alters- und gewichtsabhängig; Tinidazol/Metronidazol-Kinderdosierung gemäß lokalem Protokoll'
              },
              references: [
                'CDC – Giardiasis: https://www.cdc.gov/parasites/giardia/index.html'
              ]
            },
            prognosis: { mortality: 'Hervorragend, kann aber ohne Behandlung chronisch werden', prognostic_scores: [], factors: 'IgA-Mangel, Reinfektion' }
          },
          {
            id: 'amoebiasis',
            name: 'Amöbiasis (Amöbenruhr)',
            pathogen: { type: 'Protozoon', name: '<i>Entamoeba histolytica</i>', gram: '-', shape: 'amöboid' },
            epidemiology: {
              incidence: 'Endemisch in tropischen/subtropischen Gebieten',
              risk_groups: ['Reisende', 'Einwanderer', 'Heimbewohner', 'MSM'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral (Zysten)'
            },
            pathomechanism: {
              steps: [
                'Aus verschluckten Zysten entwickeln sich im Dickdarm Trophozoiten, die in die Schleimhaut eindringen.',
                'Die Parasiten produzieren gewebeauflösende Enzyme, die charakteristische flaschenförmige Geschwüre erzeugen.',
                'Über den Blutkreislauf können die Parasiten in die Leber gelangen und dort Abszesse bilden.'
              ]
            },
            clinical: {
              incubation: '2-4 Wochen',
              onset: 'Schleichend',
              symptoms: [
                { name: 'Amöbenruhr', description: 'Blutiger, schleimiger Durchfall mit Bauchschmerzen.', severity: 'severe' },
                { name: 'Amöbenleberabszess', description: 'Schmerzen im rechten Oberbauch, Fieber, Gewichtsverlust, auch ohne Durchfall.', severity: 'severe' }
              ],
              physical_exam: ['Druckempfindlichkeit des Abdomens (Zäkum/Kolon)', 'Hepatomegalie, Klopfschmerz der Leber (Abszess)'],
              complications: ['Darmperforation', 'Toxisches Megakolon', 'Abszessruptur (Pleura, Peritoneum, Perikard)', 'Hirnabszess']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Leukozytose (bei Abszess)', interpretation: 'Entzündung' }, { test: 'Leberenzyme', finding: 'ALP erhöht', interpretation: 'Abszess' }],
              microbiology: [
                { test: 'Stuhlparasiten', finding: 'Trophozoiten (mit Erythrozyten im Zytoplasma!)', significance: 'Muss von E. dispar unterschieden werden' },
                { test: 'Stuhlantigen/PCR', finding: 'E. histolytica spezifisch', significance: 'Goldstandard' },
                { test: 'Serologie', finding: 'Positiv', significance: 'Nützlich bei invasiver Erkrankung (Leberabszess)' }
              ],
              imaging: [{ modality: 'Abdomen-US/CT', finding: 'Solitärer Leberabszess (rechter Lappen)', significance: 'Leberabszess-Diagnose' }]
            },
            differential: [
              { disease: 'Bakterielle Dysenterie', distinguishing: 'Kultur, Fieber häufiger' },
              { disease: 'Pyogener Leberabszess', distinguishing: 'Bakterienkultur, septischer' },
              { disease: 'Echinokokkuszyste', distinguishing: 'Serologie, Bildgebung (Tochterzysten)' },
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol', dose: '3x750mg p.o.', duration: '7-10 Tage', note: 'Gewebemittel (invasiv)' },
                  { drug: '+ Paromomycin', dose: '3x500mg p.o.', duration: '7 Tage', note: 'Luminales Mittel (gegen Zystenausscheidung) - OBLIGATORISCHE Ergänzung!' }
                ]
              },
              targeted: 'Metronidazol (Gewebe) + Paromomycin/Diloxanid (Lumen). Leberabszess: Metronidazol + ggf. Drainage.',
              prevention: ['Wasser- und Lebensmittelhygiene']
            },
            guidelines: {
              diagnosis: [
                'Bei Verdacht auf Dysenterie Stuhlparasitenuntersuchung, Antigen/PCR für schnelle und spezifische Diagnose',
                'Bei Leberabszess helfen Bildgebung (US/CT) und Serologie bei der Diagnose'
              ],
              treatment_indications: [
                'Invasive Amöbenruhr oder Leberabszess: Metronidazol oder Tinidazol (Gewebebehandlung) obligatorisch, dann lumentötendes Mittel (Paromomycin/Diloxanid) zur Eliminierung der Zysten',
                'Milde luminale Infektion: Paromomycin/Diloxanid allein'
              ],
              first_line: ['Metronidazol 750 mg 3x täglich 7–10 Tage + Paromomycin 500 mg 3x täglich 7 Tage (luminale Ergänzung)'],
              supportive: ['Flüssigkeitsersatz, Schmerzlinderung, Ernährung; bei Leberabszess Drainageindikation abwägen'],
              prevention: ['Wasser- und Lebensmittelhygiene, Händewaschen, Vorsichtsmaßnahmen für Reisende'],
              dosing: {
                adult: {
                  metronidazole: '750 mg p.o. 3x/Tag 7–10 Tage (invasiv/Abszess)',
                  tinidazole: '2 g p.o. einmal täglich 3 Tage (alternative Gewebebehandlung gemäß lokalem Protokoll)',
                  paromomycin: '500 mg p.o. 3x/Tag 7 Tage (luminale Ergänzung)'
                },
                pregnancy: 'In der Schwangerschaft Tinidazol/Metronidazol im ersten Trimester vermeiden; Paromomycin bevorzugt für Lumenbehandlung',
                pediatric: 'Kinderdosis gemäß lokalem Protokoll; pädiatrisches Konsil empfohlen'
              },
              references: [
                'CDC – Amebiasis: https://www.cdc.gov/parasites/amebiasis/index.html',
                'WHO – Amebiasis: https://www.who.int/health-topics/amebiasis'
              ]
            },
            prognosis: { mortality: 'Gut mit Behandlung (<1%), höher bei kompliziertem Abszess/Perforation', prognostic_scores: [], factors: 'Späte Diagnose, Abszessruptur' }
          },
          {
            id: 'cryptosporidiosis',
            name: 'Kryptosporidiose',
            pathogen: { type: 'Protozoon', name: '<i>Cryptosporidium hominis/parvum</i>', gram: 'Säurefeste Färbung', shape: 'Oozyste' },
            epidemiology: {
              incidence: 'Häufige wasserbedingte Ausbrüche (Schwimmbäder)',
              risk_groups: ['AIDS-Patienten (definierender Opportunist)', 'Kinder', 'Tierärzte'],
              seasonality: 'Sommer-Herbst',
              transmission: 'Fäkal-oral, Wasser (chlorresistente Oozysten!)'
            },
            pathomechanism: {
              steps: [
                'Nach Aufnahme von Oozysten heften sich Sporozoiten an die Oberfläche von Dünndarmepithelzellen (intrazellulär, aber extrazytoplasmatisch).',
                'Die Infektion verursacht Zottenatrophie und Kryptenhyperplasie.',
                'Dies führt zu schwerer Malabsorption und sekretorischem Durchfall.'
              ],
              virulence_factors: ['Adhäsine', 'Proteasen']
            },
            clinical: {
              incubation: '7-10 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Wässriger Durchfall', description: 'Reichlicher, wässriger Durchfall mit Bauchkrämpfen.', severity: 'moderate' },
                { name: 'Persistierender Durchfall', description: 'Bei immunsupprimierten Patienten (z.B. AIDS) kann der Durchfall chronisch werden und schweren Flüssigkeitsverlust verursachen.', severity: 'severe' }
              ],
              physical_exam: ['Zeichen der Dehydratation', 'Kachexie (in chronischen Fällen)'],
              complications: ['Schwere Dehydratation', 'Mangelernährung', 'Beteiligung der Gallenwege (AIDS)']
            },
            diagnostics: {
              laboratory: [{ test: 'CD4-Zellzahl', finding: '<100/µL', interpretation: 'Risiko für schweren Verlauf (HIV)' }],
              microbiology: [
                { test: 'Stuhlfärbung', finding: 'Säurefeste Oozysten (modifiziert Z-N)', significance: 'Auf spezielle Anforderung' },
                { test: 'Stuhlantigen/PCR', finding: 'Positiv', significance: 'Sensitiver' }
              ]
            },
            differential: [
              { disease: 'Giardiasis', distinguishing: 'Stuhluntersuchung, Blähungen dominieren' },
              { disease: 'Isosporiasis', distinguishing: 'Größere Oozysten, TMP-SMX wirksam' },
              { disease: 'Mikrosporidiose', distinguishing: 'Kleinere Sporen, Spezialfärbung' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nitazoxanid', dose: '2x500mg p.o.', duration: '3 Tage', note: 'Für Immunkompetente' },
                  { drug: 'ART (Antiretrovirale Therapie)', dose: '-', duration: '-', note: 'Wiederherstellung des Immunsystems ist der Schlüssel bei HIV-Patienten!' }
                ]
              },
              targeted: 'Immunkompetent: Nitazoxanid. Immunsupprimiert: ART-Optimierung, supportiv, Nitazoxanid (weniger wirksam).',
              supportive: ['Flüssigkeitsersatz', 'Motilitätshemmer (mit Vorsicht)'],
              prevention: ['Wasserfiltration (<1 Mikron), Schwimmbäder bei Durchfall meiden']
            },
              guidelines: {
                diagnosis: [
                  'Verdacht: persistierender wässriger Durchfall bei immunsupprimiertem Patienten (CD4<100), bei wasserbedingten Ausbrüchen',
                  'Diagnose: Stuhlantigen oder PCR; säurefeste Färbung auf spezielle Anforderung'
                ],
                treatment_indications: [
                  'Immunkompetent: heilt oft spontan',
                  'Immundefizient: antivirale/therapeutische Intervention erforderlich; ART-Optimierung Priorität'
                ],
                first_line: ['Nitazoxanid für immunkompetente Patienten; bei Immunsupprimierten primär Wiederherstellung der Immunkompetenz (ART)'],
                supportive: ['Flüssigkeits- und Nahrungsergänzung, Elektrolytüberwachung'],
                prevention: ['Trinkwasser filtern/abkochen, persönliche Hygiene, Schwimmbad bei Durchfall meiden'],
                dosing: {
                  adult: {
                    nitazoxanide_immunocompetent: '500 mg p.o. 2x/Tag 3 Tage',
                    nitazoxanide_immunocompromised: 'Längere Kur erwägen (lokales Protokoll); ART-Optimierung primär'
                  },
                  pediatric: 'Nitazoxanid-Kinderdosis nach Alter und Gewicht; lokales Protokoll anfordern'
                },
                references: [
                  'CDC – Cryptosporidium: https://www.cdc.gov/parasites/crypto/index.html',
                  'WHO – Cryptosporidiosis: https://www.who.int/news-room/fact-sheets/detail/cryptosporidiosis'
                ]
              },
            prognosis: { mortality: 'Immunkompetent: gut; AIDS: hohe Mortalität bei CD4<100', prognostic_scores: [], factors: 'Immunstatus-Wiederherstellung (ART)' }
          },
          {
            id: 'viral_gastroenteritis',
            name: 'Virale Gastroenteritis',
            pathogen: { type: 'Virus', name: '<i>Rotavirus, Norovirus, Adenovirus, Astrovirus</i>', gram: 'RNA/DNA', shape: 'variabel' },
            epidemiology: {
              incidence: 'Norovirus: häufigste epidemische GE (alle Altersgruppen); Rotavirus: Säuglinge (vor Impfung)',
              risk_groups: ['Säuglinge (Rota)', 'Ältere (Noro)', 'Geschlossene Gemeinschaften (Schiff, Kaserne)'],
              seasonality: 'Winter (Rota, Noro)',
              transmission: 'Fäkal-oral, Aerosol (Erbrechen - Noro), Fomiten'
            },
            pathomechanism: {
              steps: [
                'Viren vermehren sich in den Epithelzellen der Dünndarmzotten und zerstören diese.',
                'Die Verkürzung der Zotten reduziert die Resorptionsfläche und die Menge an Verdauungsenzymen.',
                'Nicht resorbierte Nährstoffe ziehen Wasser in das Darmlumen (osmotischer Durchfall).'
              ],
              virulence_factors: ['Kapsidstabilität', 'NSP4 (Rota)']
            },
            clinical: {
              incubation: '12-48 Stunden (Noro), 1-3 Tage (Rota)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Erbrechen', description: 'Plötzlich einsetzendes, wiederholtes Erbrechen (besonders bei Norovirus).', severity: 'severe' },
                { name: 'Wässriger Durchfall', description: 'Große Mengen wässrigen Stuhls, begleitet von Fieber und Muskelschmerzen.', severity: 'moderate' }
              ],
              physical_exam: ['Zeichen der Dehydratation (trockene Zunge, Turgor vermindert)', 'Diffuse Druckempfindlichkeit des Abdomens'],
              complications: ['Schwere Dehydratation (Säuglinge, Ältere)', 'Elektrolytstörungen']
            },
            diagnostics: {
              laboratory: [{ test: 'Elektrolyte', finding: 'Störungen', interpretation: 'Dehydratation' }, { test: 'Blutbild', finding: 'Normal', interpretation: 'Nicht bakteriell' }],
              microbiology: [
                { test: 'Stuhlantigen (Rota/Adeno)', finding: 'Positiv', significance: 'Schnelltest bei Kindern' },
                { test: 'PCR', finding: 'Norovirus', significance: 'Für epidemiologische Zwecke' }
              ]
            },
            differential: [
              { disease: 'Bakterielle Gastroenteritis', distinguishing: 'Fieber, blutiger Stuhl, Kultur' },
              { disease: 'Lebensmittelvergiftung (Toxin)', distinguishing: 'Gemeinsame Mahlzeit, kürzere Inkubation' },
              { disease: 'Arzneimittelnebenwirkung', distinguishing: 'Anamnese' }
            ],
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Keine', dose: '-', duration: '-', note: 'Antibiotika unwirksam!' }]
              },
              targeted: 'Kein spezifisches antivirales Mittel.',
              supportive: ['Orale Rehydratation (ORS) - entscheidend!', 'Antiemetika (Ondansetron)', 'Probiotika (Lactobacillus GG, S. boulardii)'],
              prevention: ['Rotavirus-Impfstoff (Säuglinge)', 'Händewaschen (Alkoholgel weniger wirksam gegen Norovirus!)', 'Isolierung']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: Symptomkomplex mit Erbrechen und/oder wässrigem Durchfall, häufige Ausbrüche in geschlossenen Gemeinschaften',
                'Labor: primär Beurteilung des Flüssigkeits- und Elektrolytstatus; Virusnachweis mittels PCR/Antigentest für epidemiologische Zwecke'
              ],
              treatment_indications: [
                'Meist nur supportive Behandlung erforderlich; Hospitalisierung bei Dehydratation, schwerem Erbrechen oder Säuglingen/Älteren'
              ],
              first_line: ['Orale Rehydratation ORS, bei schwerem Erbrechen Antiemetikum (Ondansetron auch bei Kindern gemäß lokalem Protokoll anwendbar)'],
              supportive: ['Flüssigkeitsersatz, Elektrolytkorrektur, Ernährung'],
              prevention: ['Rotavirus-Impfung für Säuglinge, Händehygiene, Isolierung bei Ausbrüchen; bei Norovirus Desinfektion von Fomiten'],
              dosing: {
                vaccination: {
                  rotavirus: 'Rotavirus-Impfstoff: gemäß lokalem Impfplan (z.B. Rotarix 2 Dosen, RotaTeq 3 Dosen – siehe Impfprotokoll)'
                }
              },
              references: [
                'CDC – Norovirus: https://www.cdc.gov/norovirus/index.html',
                'CDC – Rotavirus: https://www.cdc.gov/rotavirus/index.html'
              ]
            },
            prognosis: { mortality: 'In entwickelten Ländern sehr niedrig, Dehydratation ist die Hauptgefahr', prognostic_scores: [], factors: 'Alter (Säugling/Alt), Komorbidität' }
          },
          {
            id: 'cholera',
            name: 'Cholera',
            pathogen: { type: 'Bakterium', name: '<i>Vibrio cholerae</i> (O1, O139)', gram: 'Gram-negativ', shape: 'gekrümmtes Stäbchen (Vibrio)' },
            epidemiology: {
              incidence: 'Endemisch (Asien, Afrika, Haiti), epidemisch',
              risk_groups: ['Menschen in extremer Armut', 'Opfer von Naturkatastrophen', 'Reisende (selten)'],
              seasonality: 'Regenzeit',
              transmission: 'Fäkal-oral (kontaminiertes Wasser/Essen)'
            },
            pathomechanism: {
              steps: [
                'Im Dünndarm haftende Bakterien produzieren Choleratoxin.',
                'Das Toxin aktiviert das Enzym Adenylatzyklase, was zu einem Anstieg des cAMP-Spiegels führt.',
                'Dies verursacht einen massiven Ausstrom von Chloridionen und Wasser in das Darmlumen, was zu schwerem, lebensbedrohlichem Durchfall führt.'
              ],
              virulence_factors: ['Choleratoxin (AB5-Toxin)', 'Toxin-coregulated pilus (TCP)']
            },
            clinical: {
              incubation: 'Einige Stunden - 5 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Reiswasserartiger Durchfall', description: 'Schmerzloser, großer, reiswasserartiger Durchfall.', severity: 'severe' },
                { name: 'Dehydratation', description: 'Schnell einsetzende schwere Dehydratation, Muskelkrämpfe, Schock.', severity: 'severe' }
              ],
              physical_exam: [
                'Schwere Dehydratation (hypovolämischer Schock)',
                'Trockene Schleimhäute, verminderter Turgor',
                'Waschfrauenhände (faltige Haut)',
                'Hypotonie, Tachykardie',
                'Fieber meist NICHT vorhanden'
              ],
              complications: ['Hypovolämischer Schock', 'Akutes Nierenversagen (ATN)', 'Schwere Hypokaliämie', 'Metabolische Azidose', 'Tod (unbehandelt 50%!)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Hämokonzentration', interpretation: 'Dehydratation' },
                { test: 'Elektrolyte', finding: 'Hypokaliämie, Azidose', interpretation: 'Verlust' },
                { test: 'Nierenfunktion', finding: 'Prärenales Nierenversagen', interpretation: 'Volumenmangel' }
              ],
              microbiology: [
                { test: 'Stuhlkultur', finding: 'TCBS-Agar (gelbe Kolonien)', significance: 'Goldstandard' },
                { test: 'Schnelltest (RDT)', finding: 'Crystal VC', significance: 'Bei Ausbrüchen' },
                { test: 'Dunkelfeldmikroskopie', finding: 'Sternschnuppen-Bewegung', significance: 'Schnell' }
              ]
            },
            differential: [
              { disease: 'ETEC', distinguishing: 'Reisen, weniger schwerwiegend' },
              { disease: 'Virale Gastroenteritis', distinguishing: 'Erbrechen kann dominieren, weniger schwere Dehydratation' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '300mg p.o.', duration: 'Einzeldosis', note: 'Für Erwachsene' },
                  { drug: 'Azithromycin', dose: '1g p.o.', duration: 'Einzeldosis', note: 'Schwangere, Kinder' }
                ]
              },
              targeted: 'Flüssigkeitsersatz ist am wichtigsten! Antibiotika nur ergänzend (verkürzen die Krankheit).',
              supportive: ['ORS (Orale Rehydratationslösung) - WHO-Formel', 'IV Ringer-Laktat (schwere Dehydratation)'],
              prevention: ['Sauberes Wasser, Hygiene', 'Oraler Cholera-Impfstoff (Dukoral, Shanchol)']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: großvolumiger, schmerzloser „Reiswasser“-Durchfall; im epidemischen Kontext hohe Wahrscheinlichkeit',
                'Labor: Flüssigkeits- und Elektrolytstatus besonders wichtig; Kultur auf TCBS-Agar zur epidemiologischen Identifizierung'
              ],
              treatment_indications: [
                'Bei jedem schweren oder großvolumigen Durchfall sofortige Rehydratation; Antibiotika zur Krankheitsverkürzung in schweren Fällen'
              ],
              first_line: [
                'Allgemein: ORS und intravenöser Volumenersatz bei schwerer Dehydratation',
                'Antibiotikum: Doxycyclin einmalig 300 mg für Erwachsene oder Azithromycin 1 g für Schwangere/Kinder (gemäß lokalen Richtlinien)'
              ],
              supportive: ['Elektrolytersatz, Monitoring (Niere, Kalium), Sauerstoff und Kreislaufunterstützung bei Bedarf'],
              prevention: ['Trinkwasser- und Lebensmittelhygiene, Massenprophylaxe mit Impfstoff bei Ausbrüchen'],
              dosing: {
                adult: {
                  doxycycline: '300 mg p.o. Einzeldosis (Erwachsene) gemäß den meisten Protokollen',
                  azithromycin: '1 g p.o. Einzeldosis (Alternative bei Schwangeren/Kindern gemäß lokalem Protokoll)'
                },
                pediatric: 'Kinderdosen gewichtsabhängig; Azithromycin-Kinderdosis gemäß lokalem Leitfaden'
              },
              references: [
                'WHO – Cholera and acute diarrhoeal disease guidance: https://www.who.int/health-topics/diarrhoeal-diseases',
                'CDC – Cholera: https://www.cdc.gov/cholera/index.html'
              ]
            },
            prognosis: { mortality: 'Mit Behandlung <1%, unbehandelt 50%', prognostic_scores: [], factors: 'Alter, Komorbidität' }
          },
          {
            id: 'travelers_diarrhea',
            name: 'Reisedurchfall (Traveler\'s Diarrhea)',
            pathogen: { type: 'Syndrom', name: '<i>ETEC</i> (am häufigsten), <i>Campylobacter, Salmonella, Shigella</i>, Viren', gram: 'Variabel', shape: '-' },
            epidemiology: {
              incidence: '20-60% der Reisenden (in Entwicklungsländer)',
              risk_groups: ['Junge Erwachsene', 'Immunsupprimierte', 'PPI-Einnahme'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral (Essen, Wasser)'
            },
            pathomechanism: {
              steps: [
                'Die Infektion wird am häufigsten durch Enterotoxin-bildende E. coli (ETEC) oder invasive Bakterien (Campylobacter, Shigella) verursacht.',
                'Die Erreger lösen bei Reisenden, die auf ein von den lokalen Hygienebedingungen abweichendes Mikrobiom treffen, Entzündungen oder Flüssigkeitssekretion aus.'
              ],
              virulence_factors: ['Variabel']
            },
            clinical: {
              incubation: 'Während der Reise oder nach Rückkehr',
              onset: 'Akut',
              symptoms: [
                { name: 'Durchfall', description: 'Wässriger Durchfall mit Bauchkrämpfen während oder nach einer Reise.', severity: 'moderate' },
                { name: 'Fieber', description: 'Fieber und blutiger Stuhl deuten auf einen invasiven Erreger hin.', severity: 'moderate' }
              ],
              physical_exam: ['Leichte Druckempfindlichkeit des Abdomens', 'Zeichen der Dehydratation'],
              complications: ['Dehydratation', 'Postinfektiöses IBS', 'Reaktive Arthritis']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: 'Meist nicht erforderlich' }],
              microbiology: [{ test: 'Stuhlkultur/PCR', finding: 'Multiplex-Panel', significance: 'Nur bei persistierenden/schweren Fällen oder Immunsupprimierten' }]
            },
            differential: [
              { disease: 'IBD-Schub', distinguishing: 'Anamnese, Endoskopie' },
              { disease: 'Giardiasis', distinguishing: 'Langwierig, fettiger Stuhl' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1000mg p.o. einmalig oder 500mg für 3 Tage', duration: '', note: 'Südostasien (Campy-Resistenz) oder Dysenterie' },
                  { drug: 'Rifaximin', dose: '2x200mg p.o.', duration: '3 Tage', note: 'Bei nicht-invasiven (fieberfreien) Fällen' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg p.o.', duration: '1-3 Tage', note: 'Andere Regionen (aber Resistenz nimmt zu)' }
                ]
              },
              targeted: '-',
              supportive: ['Flüssigkeitsersatz', 'Loperamid (nur wenn kein Fieber/blutiger Stuhl!)'],
              prevention: ['"Boil it, cook it, peel it or forget it"', 'Händewaschen', 'Rifaximin-Prophylaxe (nur bei hohem Risiko)']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: akuter Durchfall nach oder während einer Reise; meist keine mikrobiologische Untersuchung bei milden Fällen erforderlich',
                'Bei schweren, persistierenden oder fieberhaften Fällen Stuhlkultur/PCR-Multiplex-Panel empfohlen'
              ],
              treatment_indications: [
                'Milder Fall: nur Rehydratation und symptomatische Behandlung',
                'Schwerer, fieberhafter, dysenterischer Fall oder immunsupprimierter Patient: antibiotische Behandlung empfohlen'
              ],
              first_line: [
                'Nicht-invasive (fieberfreie) Fälle: Rifaximin 2x200 mg 3 Tage',
                'Bei Dysenterie oder in Südostasien: Azithromycin 1 g Einzeldosis oder 500 mg 3 Tage'
              ],
              supportive: ['ORS, Loperamid nur wenn kein Fieber/blutiger Stuhl, Elektrolytersatz'],
              prevention: ['Lebensmittel- und Wassersicherheit auf Reisen; Prophylaxe nur in Ausnahmefällen'],
              dosing: {
                adult: {
                  rifaximin: '200 mg p.o. 3x/Tag 3 Tage (nicht-invasiver Reisedurchfall)',
                  azithromycin: '1 g p.o. Einzeldosis (Alternative) oder 500 mg p.o. täglich 3 Tage'
                },
                pediatric: 'Kinderdosen gewichts- und altersabhängig; lokales pädiatrisches Protokoll anfordern'
              },
              references: [
                'CDC – Traveler\'s Health: Traveler\'s Diarrhea: https://wwwnc.cdc.gov/travel/yellowbook/2024/infectious-diseases-related-to-travel/traveler-s-diarrhea',
                'WHO – Management of diarrhoea: https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease'
              ]
            },
            prognosis: { mortality: 'Sehr niedrig', prognostic_scores: [], factors: 'Alter, Immunstatus' }
          },
          {
            id: 'dysentery_syndrome',
            name: 'Dysenterie-Syndrom (Ruhr)',
            pathogen: { type: 'Syndrom', name: '<i>Shigella, EIEC, EHEC, Campylobacter, Entamoeba, Salmonella</i>', gram: 'Variabel', shape: '-' },
            epidemiology: {
              incidence: 'Variabel',
              risk_groups: ['Kinder', 'Ältere', 'Immunsupprimierte'],
              transmission: 'Fäkal-oral'
            },
            pathomechanism: {
              steps: [
                'Die Erreger (Shigella, EIEC, EHEC, Campylobacter, Entamoeba) dringen in die Dickdarmschleimhaut ein.',
                'Die Gewebeinvasion verursacht schwere Entzündungen, Geschwürbildung, Blutungen und Schleimproduktion.'
              ],
              virulence_factors: ['Invasine', 'Zytotoxine']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Akut',
              symptoms: [
                { name: 'Blutig-schleimiger Durchfall', description: 'Häufige, kleine Mengen blutig-schleimig-eitrigen Stuhls.', severity: 'severe' },
                { name: 'Tenesmen', description: 'Quälender, erfolgloser Stuhldrang.', severity: 'severe' }
              ],
              physical_exam: ['Druckempfindlichkeit im Unterbauch', 'Fieber', 'Toxischer Zustand'],
              complications: ['HUS (EHEC/Shigella)', 'Toxisches Megakolon', 'Perforation', 'Sepsis', 'Rektumprolaps']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Leukozytose', interpretation: 'Entzündung' }],
              microbiology: [
                { test: 'Stuhlkultur', finding: 'Erregersuche', significance: 'Obligatorisch!' },
                { test: 'Parasitenuntersuchung', finding: 'E. histolytica', significance: 'Wenn Kultur negativ' },
                { test: 'Shiga-Toxin', finding: 'Positiv', significance: 'EHEC/Shigella' }
              ]
            },
            differential: [
              { disease: 'Shigellose', distinguishing: 'EIEC klinisch identisch, Kultur entscheidet' },
              { disease: 'Campylobacter-Enteritis', distinguishing: 'Kultur, GBS-Risiko' },
              { disease: 'TTP', distinguishing: 'Erwachsene, neurologische Symptome, ADAMTS13' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg p.o.', duration: '3 Tage', note: 'Erste Wahl' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg p.o.', duration: '3-5 Tage', note: 'Alternative (Resistenz?)' }
                ]
              },
              targeted: 'Basierend auf Kultur. Bei EHEC AB kontraindiziert! Amöben: Metronidazol.',
              supportive: ['Flüssigkeitsersatz', 'Motilitätshemmer (Loperamid) KONTRAINDIZIERT!'],
              prevention: ['Hygiene', 'Isolierung']
            },
            guidelines: {
              diagnosis: [
                'Verdacht: blutig-schleimiger Durchfall, Tenesmen; Differenzierung zwischen EHEC, Shigella, Entamoeba, Campylobacter erforderlich',
                'Obligatorisch: Stuhlkultur, Shiga-Toxin-Test und Parasitenuntersuchung je nach Epidemie- oder klinischer Indikation'
              ],
              treatment_indications: [
                'Antibiotika empfohlen bei schwerer invasiver Infektion, Seuchenkontrolle und Risikogruppen (Säugling, Ältere, Immunsupprimierte)',
                'Bei EHEC oder bestätigtem Shiga-Toxin-positiven Fall sind AB in der Regel kontraindiziert (Erhöhung des HUS-Risikos)'
              ],
              first_line: [
                'Shigella: Azithromycin oder Ceftriaxon; Campylobacter: Azithromycin; Salmonella invasiv: Ceftriaxon oder Ciprofloxacin (Resistenz beachten)'
              ],
              supportive: ['ORS, kontinuierliche Überwachung bei schweren Fällen; Motilitätshemmer bei Dysenterie vermeiden'],
              prevention: ['Händehygiene, Lebensmittelhygiene; bei Ausbrüchen Kontaktisolierung und gesundheitsbehördliche Maßnahmen']
            },
            prognosis: { mortality: 'Variabel, schwerer bei EHEC/S. dysenteriae 1', prognostic_scores: [], factors: 'Alter, Erregertyp' }
          }
        ]
      },
      viral_hepatitis: {
        name: 'Virushepatitis',
        icon: '🧬',
        color: '#eab308',
        tables: [
          {
            title: 'Differentialdiagnose der Virushepatitis',
            headers: ['Virus', 'Übertragung', 'Inkubation', 'Chronizität', 'Schlüsselserologie', 'Hauptmerkmale'],
            rows: [
              ['HAV', 'Fäkal-oral', '2-6 Wochen', 'Nein', 'Anti-HAV IgM', 'Akut, Ausbrüche, Reiseassoziiert'],
              ['HBV', 'Parenteral, sexuell', '2-6 Monate', 'Ja (v.a. perinatal)', 'HBsAg, Anti-HBc IgM', 'Chronische Lebererkrankung, HCC-Risiko'],
              ['HCV', 'Parenteral', '2-26 Wochen', 'Ja (>70%)', 'Anti-HCV, HCV RNA', 'Chronisch, heilbar (DAAs), extrahepatische Manifestationen'],
              ['HDV', 'Parenteral (mit HBV)', 'Variabel', 'Ja (Superinfektion)', 'Anti-HDV (bei HBsAg+ Patient)', 'Verschlimmert HBV, schnelle Progression zur Zirrhose'],
              ['HEV', 'Fäkal-oral (G1,2), Zoonotisch (G3,4)', '2-10 Wochen', 'Ja (immunsupprimiert)', 'Anti-HEV IgM, HEV RNA', 'Fulminant bei Schwangeren, Schweinefleisch-assoziiert']
            ]
          },
          {
            title: 'Interpretation der Hepatitis-B-Serologiemuster',
            headers: ['HBsAg', 'Anti-HBs', 'Anti-HBc (Gesamt)', 'Anti-HBc IgM', 'Interpretation'],
            rows: [
              ['-', '-', '-', '-', 'Empfänglich (nicht infiziert, nicht immun)'],
              ['-', '+', '-', '-', 'Immun (durch Impfung)'],
              ['-', '+', '+', '-', 'Immun (nach durchgemachter Infektion)'],
              ['+', '-', '+', '+', 'Akut infiziert'],
              ['+', '-', '+', '-', 'Chronisch infiziert'],
              ['-', '-', '+', '-', 'Möglich: 1. Ausgeheilte Infektion (niedriges Anti-HBs); 2. Falsch-positiv; 3. Okkulte HBV; 4. Fensterphase']
            ]
          },
          {
            title: 'Bedeutung der Hepatitis-Serologie-Marker',
            headers: ['Marker', 'Virus', 'Bedeutung'],
            rows: [
              ['Anti-HAV IgM', 'HAV', 'Akute Infektion'],
              ['Anti-HAV IgG', 'HAV', 'Immunität (Impfung oder durchgemacht)'],
              ['HBsAg', 'HBV', 'Vorliegen einer Infektion (akut oder chronisch)'],
              ['Anti-HBs', 'HBV', 'Immunität (Impfung oder Genesung)'],
              ['Anti-HBc IgM', 'HBV', 'Akute Infektion (auch im Fenster)'],
              ['Anti-HBc (Gesamt)', 'HBV', 'Frühere oder aktuelle Infektion'],
              ['HBeAg', 'HBV', 'Hohe Replikation, Infektiosität'],
              ['Anti-HBe', 'HBV', 'Geringere Replikation (Serokonversion)'],
              ['HBV-DNA', 'HBV', 'Virusreplikationsrate'],
              ['Anti-HCV', 'HCV', 'Exposition (nicht zwingend aktiv)'],
              ['HCV-RNA', 'HCV', 'Aktive Infektion'],
              ['Anti-HDV', 'HDV', 'HDV-Infektion (nur mit HBV)'],
              ['Anti-HEV IgM', 'HEV', 'Akute Infektion']
            ]
          }
        ],
        diseases: [
          {
            id: 'hav',
            name: 'Hepatitis A',
            pathogen: { type: 'Virus', name: '<i>Hepatitis-A-Virus</i> (HAV)', gram: 'ssRNA, Picornaviridae', shape: 'ikosaedrisch' },
            epidemiology: {
              incidence: 'Hoch in endemischen Gebieten, sporadisch/epidemisch in entwickelten Ländern',
              risk_groups: ['Reisende', 'MSM', 'Intravenöse Drogenkonsumenten', 'Obdachlose'],
              seasonality: 'Keine',
              transmission: 'Fäkal-oral (kontaminiertes Wasser, Lebensmittel), sexuell (oral-anal)'
            },
            pathomechanism: {
              steps: [
                'Orale Aufnahme: Das Virus wird aus dem Darm resorbiert und gelangt über den Pfortaderkreislauf in die Leber.',
                'Hepatozyteninfektion: Das Virus dringt über den HAVCR-1-Rezeptor in die Leberzellen ein, repliziert im Zytoplasma, verursacht aber keinen direkten Zelltod (nicht zytopathisch).',
                'Immunantwort: Die Leberschädigung wird durch die körpereigene zelluläre Immunantwort (CD8+ zytotoxische T-Zellen und NK-Zellen) verursacht, die infizierte Hepatozyten zerstört.',
                'Ausscheidung: Das Virus wird über die Galle in den Stuhl ausgeschieden, oft schon vor Auftreten der Symptome.'
              ],
              virulence_factors: ['Kapsidstabilität (säurefest)', 'Membranhülle im Blut (eHAV) - Immunumgehung']
            },
            clinical: {
              incubation: '15-50 Tage (durchschnittlich 28 Tage)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Prodrom', description: 'Grippeähnliche Symptome (Fieber, Kopfschmerzen, Myalgie), Appetitlosigkeit, Abneigung gegen Rauchen/fettige Speisen.', severity: 'moderate' },
                { name: 'Ikterische Phase', description: 'Dunkler Urin (Bilirubinurie), heller Stuhl, gefolgt von Gelbsucht (Haut, Skleren). Das Fieber klingt zu diesem Zeitpunkt oft ab.', severity: 'moderate' },
                { name: 'Abdominelle Beschwerden', description: 'Dumpfer Schmerz im rechten Oberbauch, Hepatomegalie, Übelkeit.', severity: 'mild' }
              ],
              physical_exam: [
                'Ikterus (Skleren, Haut)',
                'Hepatomegalie, druckempfindliche Leber',
                'Splenomegalie (selten)',
                'Exanthem (selten)'
              ],
              complications: ['Fulminante Hepatitis (<1%, häufiger bei Älteren)', 'Cholestatische Hepatitis (langwierig)', 'Rezidiv (3-20%)', 'KEINE chronische Trägerschaft']
            },
            diagnostics: {
              laboratory: [
                { test: 'Leberenzyme', finding: 'ALT/AST >1000 U/L', interpretation: 'Akute hepatozelluläre Nekrose' },
                { test: 'Bilirubin', finding: 'Erhöht (direkt und indirekt)', interpretation: 'Ikterus' },
                { test: 'ALP/GGT', finding: 'Mäßig erhöht', interpretation: 'Höher bei Cholestase' }
              ],
              imaging: [
                { modality: 'Abdomen-US', finding: 'Hepatomegalie, Gallenblasenwandverdickung', significance: 'Unspezifisch' }
              ],
              microbiology: [
                { test: 'Anti-HAV IgM', finding: 'Positiv', significance: 'Diagnose einer akuten Infektion (bleibt 3-6 Monate +)' },
                { test: 'Anti-HAV IgG', finding: 'Positiv', significance: 'Immunität (Impfung oder Genesung)' },
                { test: 'HAV-RNA (PCR)', finding: 'Positiv', significance: 'Virämie (selten erforderlich)' }
              ]
            },
            differential: [
              { disease: 'Andere Virushepatitiden (HBV, HCV, HEV)', distinguishing: 'Serologie (HBsAg, Anti-HCV, Anti-HEV)' },
              { disease: 'Toxische/Arzneimittelinduzierte Hepatitis', distinguishing: 'Anamnese (Paracetamol, Pilze), Toxikologie' },
              { disease: 'Gallengangsobstruktion (Choledocholithiasis)', distinguishing: 'Abdomen-US (erweiterte Gallengänge), ALP/GGT-Dominanz, Kolik' },
              { disease: 'EBV/CMV-Mononukleose', distinguishing: 'Halsschmerzen, Lymphadenopathie, Monospot/Serologie' },
              { disease: 'Autoimmunhepatitis', distinguishing: 'Autoantikörper (ANA, ASMA), erhöhtes IgG' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Supportiv', dose: '-', duration: '-', note: 'Ruhe, ausreichende Kalorien, kein Alkohol' }
                ],
                inpatient: [
                  { drug: 'Supportiv', dose: '-', duration: '-', note: 'Bei schwerem Erbrechen, Dehydratation oder Koagulopathie' }
                ],
                icu: [
                  { drug: 'Lebertransplantation', dose: 'Listung', duration: '', note: 'Bei fulminantem Leberversagen' }
                ]
              },
              targeted: 'Kein spezifisches antivirales Mittel.',
              supportive: ['Flüssigkeitsersatz', 'Antiemetika', 'Vermeidung von Alkohol und hepatotoxischen Medikamenten'],
              prevention: ['Impfung (inaktiviert, 2 Dosen)', 'Hygiene (Händewaschen)', 'Postexpositionsprophylaxe (Impfstoff oder IG innerhalb von 2 Wochen)']
            },
            guidelines: {
              diagnosis: [
                'Verdacht auf akute Hepatitis: Leberenzyme (ALT/AST), Bilirubin, ALP/GGT, INR',
                'Anti-HAV IgM positiv bestätigt akute HAV-Infektion; bei Verdacht auf frühes diagnostisches Fenster Wiederholung oder HAV-RNA (PCR) empfohlen',
                'Bei schwerer Leberfunktionsstörung Gerinnungsparameter und Transplantationskonsil'
              ],
              treatment_indications: [
                'Grundsätzlich supportive Behandlung. Hospitalisierung bei schwerer Dehydratation, Koagulopathie oder fulminantem Leberschaden',
                'Prüfung auf Lebertransplantation anhand der King\'s College Kriterien bei fulminantem Verlauf'
              ],
              post_exposure: [
                'Nach Exposition innerhalb von 2 Wochen Impfung (wenn nicht geimpft) oder Immunglobulin (IG) in bestimmten Fällen (Ältere, Immunsupprimierte, chronisch Leberkranke)'
              ],
              prevention: [
                'Impfung: 2 Dosen (0 und 6–12 Monate), Impfung 2 Wochen vor Reiseantritt optimal',
                'Hygiene, Trinkwasser- und Lebensmittelsicherheit'
              ],
              special_populations: [
                'Schwangerschaft: HAV verläuft bei Schwangeren meist nicht schwerer, aber Impfung und postexpositionelle IG erwägen',
                'Immundefiziente Patienten: Impfung kann weniger wirksam sein, engmaschige Überwachung empfohlen'
              ]
            },
            prognosis: {
              mortality: 'Niedrig (<0.1%), aber 1.8% über 50 Jahre',
              prognostic_scores: ['King\'s College Kriterien (fulminant)'],
              factors: 'Alter, zugrunde liegende Lebererkrankung'
            }
          },
          {
            id: 'hbv',
            name: 'Hepatitis B',
            pathogen: { type: 'Virus', name: '<i>Hepatitis-B-Virus</i> (HBV)', gram: 'dsDNA (RT), Hepadnaviridae', shape: 'sphärisch (Dane-Partikel)' },
            epidemiology: {
              incidence: 'Weltweit 290 Millionen chronische Träger',
              risk_groups: ['IV-Drogenkonsumenten', 'Sexualpartner', 'Gesundheitspersonal', 'Dialysepatienten', 'Perinatal (Mutter-Kind)'],
              seasonality: 'Keine',
              transmission: 'Parenteral (Blut), sexuell, perinatal'
            },
            pathomechanism: {
              steps: [
                'Eintritt und Replikation: Das Virus gelangt über den NTCP-Rezeptor in die Hepatozyten. Es bildet cccDNA (kovalent geschlossene zirkuläre DNA) im Zellkern, die Basis für die Persistenz.',
                'Immunpathogenese: Das Virus selbst ist nicht zytopathisch. Leberschäden werden durch die zytotoxische T-Zell-Immunantwort gegen infizierte Zellen verursacht.',
                'Chronifizierung: Wenn die Immunantwort unzureichend ist (z.B. bei Neugeborenen), persistiert das Virus. Virale DNA kann in das Wirtsgenom integrieren, was das Risiko für ein hepatozelluläres Karzinom (HCC) erhöht.'
              ],
              virulence_factors: ['HBsAg (Köder)', 'HBeAg (Immuntoleranz)', 'X-Protein (Transaktivator)']
            },
            clinical: {
              incubation: '45-160 Tage (durchschnittlich 90 Tage)',
              onset: 'Langsam',
              symptoms: [
                { name: 'Akute Phase', description: 'Oft asymptomatisch. Wenn symptomatisch: serumkrankheitsähnliches Prodrom (Ausschlag, Gelenkschmerzen), dann Gelbsucht, Müdigkeit, Schmerzen im rechten Oberbauch.', severity: 'moderate' },
                { name: 'Chronische Phase', description: 'Meist asymptomatisch ("stiller Killer"). Im Spätstadium dominieren Zeichen der Leberzirrhose (Aszites, Varizenblutung, Enzephalopathie).', severity: 'mild' },
                { name: 'Extrahepatische Symptome', description: 'Polyarteriitis nodosa, Glomerulonephritis.', severity: 'moderate' }
              ],
              physical_exam: [
                'Hepatomegalie',
                'Splenomegalie',
                'Spider-Naevi, Palmarerythem (chronisch/Zirrhose)',
                'Aszites, Caput medusae (dekompensierte Zirrhose)'
              ],
              complications: ['Chronische Hepatitis (90% bei Säuglingen, <5% bei Erwachsenen)', 'Zirrhose', 'Hepatozelluläres Karzinom (HCC)', 'Polyarteriitis nodosa', 'Glomerulonephritis']
            },
            diagnostics: {
              laboratory: [
                { test: 'ALT/AST', finding: 'Erhöht', interpretation: 'Entzündungsaktivität' }
              ],
              microbiology: [
                { test: 'HBsAg', finding: 'Positiv', significance: 'Vorliegen einer Infektion (akut oder chronisch)' },
                { test: 'Anti-HBs', finding: 'Positiv', significance: 'Immunität (Impfung oder Genesung)' },
                { test: 'Anti-HBc IgM', finding: 'Positiv', significance: 'Akute Infektion (wichtig im diagnostischen Fenster!)' },
                { test: 'Anti-HBc IgG', finding: 'Positiv', significance: 'Durchgemachte oder chronische Infektion' },
                { test: 'HBeAg', finding: 'Positiv', significance: 'Hohe Replikation und Infektiosität' },
                { test: 'HBV-DNA', finding: 'Positiv', significance: 'Virusreplikationsrate (Therapieüberwachung)' }
              ]
            },
            differential: [
              { disease: 'Andere Virushepatitiden (HAV, HCV, HDV)', distinguishing: 'Serologie (Anti-HAV IgM, Anti-HCV, Anti-HDV)' },
              { disease: 'Autoimmunhepatitis', distinguishing: 'Autoantikörper (ANA, ASMA, LKM-1), Hypergammaglobulinämie' },
              { disease: 'Alkoholische Lebererkrankung', distinguishing: 'Anamnese, AST > ALT (2:1 Verhältnis), erhöhtes GGT' },
              { disease: 'Arzneimittelinduzierter Leberschaden (DILI)', distinguishing: 'Medikamentenanamnese, Besserung nach Absetzen' },
              { disease: 'Morbus Wilson', distinguishing: 'Junges Alter, niedriges Coeruloplasmin, Kayser-Fleischer-Ring' }
            ],
            therapy: {
              guidelines: ['EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection'],
              empirical: {
                outpatient: [
                  { drug: 'Entecavir', dose: '0.5 mg p.o. 1x/Tag', duration: 'Langfristig', note: 'Nukleosidanalogon. 1 mg bei Lamivudin-Resistenz.' },
                  { drug: 'Tenofovirdisoproxil (TDF)', dose: '300 mg p.o. 1x/Tag', duration: 'Langfristig', note: 'Nukleotidanalogon. Überwachung von Nierenfunktion und Knochendichte erforderlich.' },
                  { drug: 'Tenofoviralafenamid (TAF)', dose: '25 mg p.o. 1x/Tag', duration: 'Langfristig', note: 'Bevorzugt bei Risiko für Knochen-/Nierenerkrankungen.' }
                ],
                inpatient: [
                  { drug: 'Tenofovir (TDF/TAF) oder Entecavir', dose: 'Standard', duration: '', note: 'Sofortiger Beginn bei schwerer akuter Hepatitis oder akutem Leberversagen.' }
                ]
              },
              targeted: 'Chronische HBV: Lebenslange NA (Entecavir, TDF, TAF) zur Unterdrückung der Virusreplikation. Zeitlich begrenzte Behandlung: Peg-IFN alpha (48 Wochen) bei ausgewählten Patienten.',
              supportive: ['HCC-Screening (US alle 6 Monate)', 'Impfung gegen HAV', 'Screening von Familienmitgliedern'],
              prevention: ['Impfung (rekombinantes HBsAg, 0-1-6 Monate)', 'Screening in der Schwangerschaft', 'HBIG + Impfung für Neugeborene (≤12 Stunden; Impfserie fortsetzen)']
            },
            guidelines: {
              definitions: [
                'Akute HBV: HBsAg positiv und Anti-HBc IgM positiv, mit oder ohne Symptome',
                'Chronische HBV: HBsAg positiv >6 Monate',
                'Behandlungsindikation: Chronische Hepatitis (ALT erhöht + HBV-DNA >2000 IE/ml + Fibrose) ODER Zirrhose (bei jedem HBV-DNA-Spiegel)'
              ],
              diagnosis: [
                'Initiale Untersuchung: HBsAg, Anti-HBs, Anti-HBc (IgM/IgG), HBeAg/Anti-HBe, HBV-DNA (quantitativ)',
                'Fibrosebeurteilung: FibroScan oder Serummarker (FIB-4)'
              ],
              treatment_indications: [
                'Alle Zirrhosepatienten müssen behandelt werden',
                'HBeAg-positive oder -negative chronische Hepatitis (ALT > ULN, DNA > 2000 IE/ml, F2+ Fibrose)',
                'Vor Immunsuppression bei HBsAg+ Patienten (Prophylaxe)'
              ],
              first_line: [
                'Entecavir, TDF, TAF (NAs mit hoher Resistenzbarriere)',
                'Peg-IFN alpha (48 Wochen) - Alternative bei leichter/mittelschwerer Fibrose'
              ],
              special_populations: [
                'Schwangerschaft: TDF ab der 24.-28. Woche, wenn HBV-DNA >200.000 IE/ml',
                'Niereninsuffizienz: TAF oder Entecavir (Dosisanpassung)',
                'HDV-Koinfektion: Peg-IFN oder Bulevirtid'
              ],
              monitoring: [
                'Unter NA-Therapie: ALT und HBV-DNA alle 3-6 Monate',
                'HCC-Screening mit Ultraschall ± AFP alle 6 Monate bei Zirrhosepatienten'
              ]
            },
            prognosis: {
              mortality: 'Akut: <1%; Chronisch: signifikant aufgrund von Zirrhose/HCC',
              prognostic_scores: ['PAGE-B (HCC-Risiko)'],
              factors: 'HBeAg-Status, Viruslast, Genotyp, Koinfektionen'
            },
            references: [
              'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398. doi:10.1016/j.jhep.2017.03.021',
              'WHO Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection. 2015.'
            ]
          },
          {
            id: 'hcv',
            name: 'Hepatitis C',
            pathogen: { type: 'Virus', name: '<i>Hepatitis-C-Virus</i> (HCV)', gram: 'ssRNA, Flaviviridae', shape: 'sphärisch, umhüllt' },
            epidemiology: {
              incidence: 'Weltweit 71 Millionen chronisch Kranke',
              risk_groups: ['IV-Drogenkonsumenten', 'Transfusion (vor 1992)', 'Tattoo/Piercing', 'Gesundheitspersonal (Nadelstich)'],
              seasonality: 'Keine',
              transmission: 'Parenteral (Blut), sexuell (selten, höher bei MSM), perinatal'
            },
            pathomechanism: {
              steps: [
                'Replikation: Das Virus repliziert im Zytoplasma der Hepatozyten (keine Zellkernphase, daher heilbar).',
                'Immunumgehung: Die virale RNA-Polymerase ist fehleranfällig, was zu ständiger Mutation (Quasispezies) und Umgehung der Immunerkennung führt.',
                'Fibrose: Chronische Entzündung aktiviert Sternzellen (Stellate Cells), die Kollagen produzieren, was zu Leberfibrose und schließlich Zirrhose führt.'
              ],
              virulence_factors: ['NS3/4A-Protease', 'NS5A/B-Polymerase', 'Lipidstoffwechsel-Modulation']
            },
            clinical: {
              incubation: '14-180 Tage',
              onset: 'Langsam/Asymptomatisch',
              symptoms: [
                { name: 'Akute Phase', description: 'Wird selten diagnostiziert (80% asymptomatisch). Leichte Müdigkeit, Appetitlosigkeit können auftreten.', severity: 'mild' },
                { name: 'Chronische Phase', description: 'Kann jahrzehntelang asymptomatisch sein. Das Leitsymptom ist chronische Müdigkeit. Oft machen erst Zirrhosekomplikationen oder Laborwerte darauf aufmerksam.', severity: 'moderate' },
                { name: 'Extrahepatische Symptome', description: 'Kryoglobulinämie (Vaskulitis), Porphyria cutanea tarda, Lichen planus, Diabetes.', severity: 'moderate' }
              ],
              physical_exam: [
                'Oft negativ',
                'Zeichen der Zirrhose im Spätstadium'
              ],
              complications: ['Chronische Hepatitis (70-80%!)', 'Zirrhose (20-30% in 20 Jahren)', 'HCC', 'Extrahepatisch: Kryoglobulinämie, Porphyria cutanea tarda, Lichen planus, Diabetes']
            },
            diagnostics: {
              laboratory: [
                { test: 'ALT', finding: 'Fluktuierend erhöht', interpretation: 'Chronische Entzündung' }
              ],
              microbiology: [
                { test: 'Anti-HCV', finding: 'Positiv', significance: 'Exposition (nicht unbedingt aktive Infektion)' },
                { test: 'HCV-RNA', finding: 'Positiv', significance: 'Aktive Infektion (Bestätigung erforderlich!)' },
                { test: 'Genotypisierung', finding: '1-6', significance: 'Therapiewahl (obwohl pangenotypische Medikamente dominieren)' }
              ]
            },
            differential: [
              { disease: 'Hepatitis B', distinguishing: 'HBsAg positiv' },
              { disease: 'Alkoholische Lebererkrankung', distinguishing: 'Anamnese, AST > ALT, Makrozytose' },
              { disease: 'Nicht-alkoholische Fettlebererkrankung (NAFLD/NASH)', distinguishing: 'Metabolisches Syndrom, US (Steatose), Biopsie' },
              { disease: 'Autoimmunhepatitis', distinguishing: 'Autoantikörper, Histologie (Plasmazellinfiltration)' },
              { disease: 'Hämochromatose', distinguishing: 'Hohes Ferritin, Transferrinsättigung, HFE-Genmutation' }
            ],
            therapy: {
              guidelines: ['EASL Recommendations on Treatment of Hepatitis C 2020'],
              empirical: {
                outpatient: [
                  { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 Tabl. (300/120mg) p.o. 1x', duration: '8 Wochen', note: 'Pangenotypisch. 8 Wochen sowohl bei Patienten ohne Zirrhose als auch bei kompensierter Zirrhose.' },
                  { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 Tabl. (400/100mg) p.o. 1x', duration: '12 Wochen', note: 'Pangenotypisch. Kann bei dekompensierter Zirrhose (mit RBV) gegeben werden.' }
                ]
              },
              targeted: 'Pangenotypische DAA-Behandlung für alle Patienten (Vereinfachte Behandlung). Genotypisierung nicht unbedingt erforderlich für den Behandlungsbeginn (außer bei Zirrhose/früherem Therapieversagen).',
              supportive: ['Wechselwirkungen prüfen (www.hep-druginteractions.org)', 'Kein Alkohol'],
              prevention: ['Kein Impfstoff', 'Screening von Blutprodukten', 'Schadensminimierung (Nadelaustausch)', 'Safe Sex']
            },
            guidelines: {
              diagnosis: [
                'Screening: Anti-HCV-Serologie (ELISA) in allen Risikogruppen und bei Blutspenden',
                'HCV-RNA positiv = Aktive Infektion -> Behandlung'
              ],
              treatment_indications: [
                'Alle chronisch HCV-Infizierten sollten behandelt werden, außer Patienten mit kurzer Lebenserwartung oder Schwangerschaft',
                'Besondere Priorität: Zirrhose, extrahepatische Manifestationen, Transplantationskandidaten'
              ],
              first_line: [
                'Glecaprevir/Pibrentasvir (8 Wochen)',
                'Sofosbuvir/Velpatasvir (12 Wochen)'
              ],
              monitoring: [
                'SVR12 (Sustained Virologic Response): HCV-RNA negativ 12 Wochen nach Behandlung = Heilung',
                'Bei Zirrhose HCC-Screening auch nach SVR fortsetzen!'
              ],
              special_populations: [
                'Dekompensierte Zirrhose: Proteaseinhibitoren (Glecaprevir, Grazoprevir) KONTRAINDIZIERT! Sof/Vel + Ribavirin kann gegeben werden.'
              ]
            },
            prognosis: {
              mortality: 'Hervorragend mit Behandlung (SVR = Heilung), schlechter bei Zirrhose',
              factors: 'Fibrosestadium, Koinfektion (HIV/HBV), Alkohol'
            }
          },
           {
            id: 'hdv',
            name: 'Hepatitis D',
            pathogen: { type: 'Virus', name: '<i>Hepatitis-D-Virus</i> (HDV)', gram: 'ssRNA (defekt)', shape: 'in HBsAg gehüllt' },
            epidemiology: {
              incidence: '5% der HBV-Infizierten (ca. 15-20 Millionen)',
              seasonality: 'Keine',
              risk_groups: ['HBV-Infizierte', 'i.v.-Drogenkonsumenten', 'Sexualpartner', 'Gesundheitspersonal'],
              transmission: 'Parenteral, sexuell (wie HBV). Infiziert nur in Anwesenheit von HBV!'
            },
            pathomechanism: {
              steps: [
                'Defektes Virus: Benötigt das Hepatitis-B-Virus-Oberflächenantigen (HBsAg) für Replikation und Verpackung infektiöser Partikel.',
                'Koinfektion: Gleichzeitige Infektion mit HBV und HDV. Verursacht meist eine schwere akute Hepatitis, wird aber selten chronisch (<5%).',
                'Superinfektion: Chronischer HBV-Träger infiziert sich mit HDV. Dies ist die schwerste Form, führt oft zu fulminantem Verlauf oder schnell fortschreitender Zirrhose.'
              ],
              virulence_factors: ['Delta-Antigen (HDAg)']
            },
            clinical: {
              incubation: '30-60 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Verschlechterung', description: 'Plötzliche Verschlechterung des Zustands eines bekannten HBV-Patienten (akuter Schub).', severity: 'severe' },
                { name: 'Dekompensation', description: 'Schnell fortschreitendes Leberversagen, Gelbsucht, Koagulopathie.', severity: 'severe' }
              ],
              complications: ['Fulminante Hepatitis', 'Schnelle Progression zur Zirrhose (aggressivste Virushepatitis)']
            },
            diagnostics: {
              laboratory: [
                { test: 'ALT/AST', finding: 'erhöht', interpretation: 'Akuter Schub' }
              ],
              microbiology: [
                { test: 'Anti-HDV', finding: 'Positiv', significance: 'Screening bei allen HBV-Patienten' },
                { test: 'HDV-RNA', finding: 'Positiv', significance: 'Aktive Replikation' }
              ]
            },
            differential: [
              { disease: 'HBV-Koinfektion', distinguishing: 'HDV-RNA positiv, Anti-HDV positiv' },
              { disease: 'Akuter HBV-Schub', distinguishing: 'HDV-RNA negativ, Anti-HDV negativ' }
            ],
            therapy: {
              guidelines: ['EASL Clinical Practice Guidelines on hepatitis delta virus 2023'],
              empirical: {
                outpatient: [
                  { drug: 'Bulevirtid', dose: '2 mg s.c. täglich', duration: 'Langfristig', note: 'Eintrittshemmer. Monotherapie oder in Kombination mit Peg-IFN. (Bedingte Zulassung)' },
                  { drug: 'Peg-IFN alfa', dose: '180 mcg s.c. wöchentlich', duration: '48 Wochen', note: 'Alternative, aber niedrige dauerhafte Ansprechrate.' }
                ]
              },
              targeted: 'Bulevirtid (langfristige Erhaltungstherapie) oder Peg-IFN (48 Wochen). Nukleosidanaloga (gegen HBV) sollten fortgesetzt werden, wirken aber nicht direkt auf HDV.',
              prevention: ['HBV-Impfung schützt auch vor HDV (da es HBsAg benötigt)']
            },
            guidelines: {
              screening: ['Alle HBsAg-positiven Patienten einmal auf Anti-HDV screenen'],
              treatment: [
                'Bulevirtid 2mg s.c. täglich: Bei kompensierter Lebererkrankung und HDV-RNA-Positivität. Behandlung solange klinischer Nutzen besteht (jahrelang).',
                'Peg-IFN alfa: 48-wöchige Kur kann versucht werden (ca. 25% dauerhaftes Ansprechen).'
              ],
              monitoring: ['HDV-RNA, ALT, HBsAg']
            },
            prognosis: {
              mortality: 'Hoch, schnelle Zirrhoseprogression',
              factors: 'Superinfektion hat schlechtere Prognose'
            }
          },
          {
            id: 'hev',
            name: 'Hepatitis E',
            pathogen: { type: 'Virus', name: '<i>Hepatitis-E-Virus</i> (HEV)', gram: 'ssRNA, Hepeviridae', shape: 'ikosaedrisch' },
            epidemiology: {
              incidence: 'Entwicklungsländer (Wasser), Industrieländer (Schwein/Wild)',
              risk_groups: ['Schwangere (schwerer Verlauf)', 'Immunsupprimierte (chronisch)', 'Leberpatienten', 'Schweinehalter'],
              seasonality: 'Regenzeit (Tropen)',
              transmission: 'Fäkal-oral (Wasser - Genotyp 1,2), Zoonose (rohes Schweine-/Wildfleisch - Genotyp 3,4)'
            },
            pathomechanism: {
              steps: [
                'Eintritt: Fäkal-oral (kontaminiertes Wasser - Genotyp 1,2) oder Zoonose (rohes Fleisch - Genotyp 3,4).',
                'Schwangerschaft: Bei Schwangeren (v.a. 3. Trimenon) kann das Virus fulminantes Leberversagen verursachen, wahrscheinlich aufgrund hormoneller und immunologischer Veränderungen (20% Mortalität).',
                'Chronifizierung: Bei immunsupprimierten Patienten (z.B. Transplantierte) wird das Virus nicht eliminiert, was zu chronischer Hepatitis und Fibrose führt.'
              ],
              virulence_factors: ['ORF3-Protein (Freisetzung)', 'Kapsidprotein']
            },
            clinical: {
              incubation: '15-60 Tage (durchschnittlich 40)',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Akute Hepatitis', description: 'Ähnlich wie HAV (Fieber, Gelbsucht, Erbrechen).', severity: 'moderate' },
                { name: 'Neurologische Symptome', description: 'Häufiger assoziiert mit neurologischen Komplikationen (Guillain-Barré-Syndrom, neuralgische Amyotrophie).', severity: 'severe' },
                { name: 'In der Schwangerschaft', description: 'Zeichen eines schweren, lebensbedrohlichen Leberversagens.', severity: 'severe' }
              ],
              physical_exam: ['Ikterus', 'Hepatomegalie'],
              complications: ['Fulminante Hepatitis bei Schwangeren (20% Mortalität! - G1,2)', 'Chronische Hepatitis bei Immunsupprimierten (G3)', 'Neurologische Symptome (Guillain-Barré, Neuralgische Amyotrophie)']
            },
            diagnostics: {
              laboratory: [
                 { test: 'Leberenzyme', finding: 'ALT/AST erhöht', interpretation: 'Hepatitis' }
              ],
              imaging: [
                 { modality: 'Abdomen-US', finding: 'Hepatomegalie', significance: 'Unspezifisch' }
              ],
              microbiology: [
                { test: 'Anti-HEV IgM', finding: 'Positiv', significance: 'Akute Infektion' },
                { test: 'HEV-RNA', finding: 'Positiv', significance: 'Bestätigung, chronischer Fall' }
              ]
            },
            differential: [
              { disease: 'Hepatitis A', distinguishing: 'Serologie (Anti-HAV IgM)' },
              { disease: 'Arzneimittelinduzierter Leberschaden (DILI)', distinguishing: 'Anamnese (z.B. Antibiotika, NSAID)' },
              { disease: 'Ischämische Hepatitis', distinguishing: 'Schock/Hypotonie-Anamnese, extreme LDH-Erhöhung' },
              { disease: 'Morbus Wilson (bei fulminanten Fällen)', distinguishing: 'Hämolyse, niedriges ALP, hohes Urinkupfer' }
            ],
            therapy: {
              guidelines: ['EASL Clinical Practice Guidelines on hepatitis E virus infection'],
              empirical: {
                outpatient: [
                  { drug: 'Supportiv', dose: '-', duration: '-', note: 'Bei immunkompetenter akuter Infektion (selbstlimitierend).' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: '600-800 mg p.o.', duration: '12 Wochen', note: 'Chronische HEV (Immunsupprimierte) oder schwere akute Fälle.' }
                ]
              },
              targeted: 'Chronische HEV (Immunsupprimierte): 1. Immunsuppression reduzieren (wenn möglich). 2. Ribavirin für 12 Wochen. Wenn erfolglos: Ribavirin für 24 Wochen oder Peg-IFN.',
              supportive: ['Flüssigkeitsersatz', 'Engmaschige Überwachung bei Schwangeren (Gefahr eines fulminanten Verlaufs!)'],
              prevention: ['Lebensmittelsicherheit (Schweine-/Wildfleisch durchbraten)']
            },
            guidelines: {
              diagnosis: ['Anti-HEV IgM und IgG', 'HEV-RNA (Blut und Stuhl) - bei Verdacht auf chronische Infektion obligatorisch'],
              treatment_indications: [
                'Akut: erfordert in der Regel keine Behandlung (außer Leberversagen)',
                'Chronisch (>3 Monate HEV-RNA+): Immunsupprimierte Patienten (Transplantierte, HIV). Behandlung: Ribavirin.'
              ]
            },
            prognosis: {
              mortality: 'Allgemein niedrig; bei Schwangeren (Genotyp 1–2) Mortalität bis zu 20%',
              prognostic_scores: ['Keine'],
              factors: 'Schwangerschaft, Immunsuppression'
            }
          },
          {
            id: 'hgv',
            name: 'Hepatitis G (GBV-C)',
            pathogen: { type: 'Virus', name: '<i>GB-Virus C</i> (HGV)', gram: 'ssRNA, Flaviviridae', shape: '-' },
            epidemiology: {
              incidence: '1-4% der Blutspender',
              risk_groups: ['IV-Drogenkonsumenten', 'Hämodialysepatienten', 'Mehrfachtransfusionen'],
              seasonality: 'Keine',
              transmission: 'Blut, sexuell, vertikal'
            },
            pathomechanism: {
              steps: ['Lymphotropes Virus', 'Replikation in Lymphozyten', 'Nicht hepatotrop (umstritten)', 'Interferenz mit HIV-Replikation'],
              virulence_factors: ['Nicht bekannt']
            },
            clinical: {
              incubation: 'Unbekannt',
              onset: 'Asymptomatisch',
              symptoms: [
                { name: 'Asymptomatisch', description: 'Verursacht keine akute oder chronische Hepatitis', severity: 'mild' }
              ],
              physical_exam: ['Negativ'],
              complications: ['Bei HIV-Koinfektion verlangsamt es die AIDS-Progression (günstiger Effekt)']
            },
            diagnostics: {
              laboratory: [{ test: 'Leberfunktion', finding: 'Normal', interpretation: 'Verursacht keine Hepatitis' }],
              imaging: [{ modality: 'Keine', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'RNA', significance: 'Forschungszweck, nicht in der klinischen Routine verwendet' }
              ]
            },
            differential: [
               { disease: 'Andere Virushepatitiden', distinguishing: 'Serologie (HBV, HCV)' },
               { disease: 'Nicht-infektiöse Lebererkrankungen', distinguishing: 'Ausschlussdiagnose' }
            ],
            therapy: {
              empirical: {},
              targeted: 'Erfordert keine Behandlung.',
              supportive: [],
              prevention: ['Screening von Blutprodukten (nicht routinemäßig)']
            },
            prognosis: {
              mortality: 'Nicht pathogen für die Leber',
              prognostic_scores: [],
              factors: '-'
            }
          },
          {
            id: 'ttv',
            name: 'Torque-Teno-Virus (TTV)',
            pathogen: { type: 'Virus', name: '<i>Torque-Teno-Virus</i>', gram: 'ssDNA, Anelloviridae', shape: '-' },
            epidemiology: {
              incidence: 'Ubiquitär (>90% der Bevölkerung sind Träger)',
              risk_groups: ['Allgemeinbevölkerung'],
              seasonality: 'Keine',
              transmission: 'Blut, Speichel, Stuhl, Muttermilch'
            },
            pathomechanism: {
              steps: ['Persistierende Virämie', 'Replikation in vielen Geweben', 'Nicht nachgewiesene Pathogenität'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '-',
              onset: 'Asymptomatisch',
              symptoms: [
                { name: 'Asymptomatisch', description: 'Kann als kommensales Virus betrachtet werden', severity: 'mild' }
              ],
              physical_exam: ['Negativ'],
              complications: ['Pathogenität nicht nachgewiesen', 'Kann Indikator für das Ausmaß der Immunsuppression sein']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: '-' }],
              imaging: [{ modality: '-', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'DNA', significance: 'Forschung' }
              ]
            },
            differential: [
               { disease: 'Andere Virushepatitiden', distinguishing: 'Serologie (HBV, HCV)' },
               { disease: 'Nicht-infektiöse Lebererkrankungen', distinguishing: 'Ausschlussdiagnose' }
            ],
            therapy: {
              empirical: {},
              targeted: 'Keine',
              supportive: [],
              prevention: ['-']
            },
            prognosis: {
              mortality: 'Gut',
              prognostic_scores: [],
              factors: '-'
            }
          },
          {
            id: 'senv',
            name: 'SEN-Virus',
            pathogen: { type: 'Virus', name: '<i>SEN-Virus</i>', gram: 'ssDNA, Anelloviridae', shape: '-' },
            epidemiology: {
              incidence: 'Unbekannt',
              risk_groups: ['Transfusionsempfänger'],
              seasonality: 'Keine',
              transmission: 'Transfusion, über Blut'
            },
            pathomechanism: {
              steps: ['Verbreitung über Blut', 'Kann in Leberzellen replizieren', 'Kann leichte Hepatitis verursachen (umstritten)'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '-',
              onset: 'Langsam',
              symptoms: [
                { name: 'Leichte Hepatitis?', description: 'Wurde mit Posttransfusionshepatitis in Verbindung gebracht, aber Kausalität nicht bewiesen', severity: 'mild' }
              ],
              physical_exam: ['-'],
              complications: ['Kein signifikanter Leberschaden nachgewiesen']
            },
            diagnostics: {
              laboratory: [{ test: 'ALT', finding: 'Leichte Erhöhung möglich', interpretation: '?' }],
              imaging: [{ modality: '-', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'DNA', significance: 'Forschung' }
              ]
            },
            differential: [
               { disease: 'Andere Virushepatitiden', distinguishing: 'Serologie (HBV, HCV)' },
               { disease: 'Nicht-infektiöse Lebererkrankungen', distinguishing: 'Ausschlussdiagnose' }
            ],
            therapy: {
              empirical: {},
              targeted: 'Keine',
              supportive: [],
              prevention: ['-']
            },
            prognosis: {
              mortality: 'Gut',
              prognostic_scores: [],
              factors: '-'
            }
          }
        ]
      },
      urinary_tract: {
        name: 'Harnwegsinfektionen',
        icon: '🚽',
        color: '#3b82f6',
        diseases: [
          {
            id: 'cystitis',
            name: 'Lokalisierte Harnwegsinfektion: Zystitis (Blasenentzündung)',
            pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negativ', shape: 'Stäbchen' },
            epidemiology: {
              incidence: '50% der Frauen mindestens einmal im Leben',
              risk_groups: ['Sexuell aktive Frauen', 'Postmenopause', 'Schwangerschaft', 'Diabetes', 'Katheterträger'],
              seasonality: 'Keine',
              transmission: 'Aufsteigende Infektion (perineale Flora)'
            },
            pathomechanism: {
              steps: [
                'Kolonisation: Darmbakterien (hauptsächlich E. coli) besiedeln den periurethralen Bereich und den Vaginaleingang.',
                'Aufstieg: Bakterien steigen durch die Harnröhre in die Blase auf (kürzere Harnröhre bei Frauen prädisponiert).',
                'Adhärenz und Invasion: Bakterien haften mit P-Fimbrien am Blasenurothel, vermeiden das Auswaschen durch Urin und dringen dann in Zellen ein.',
                'Entzündung: Bakterienvermehrung und Toxine (z.B. Hämolysin) lösen eine Entzündungsreaktion aus, die Schleimhauthyperämie, Ödeme und Symptome verursacht.'
              ],
              virulence_factors: ['P-Fimbrien (Adhärenz)', 'Hämolysin', 'Aerobactin (Eisenaufnahme)']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Dysurie', description: 'Brennendes, stechendes Gefühl beim Wasserlassen, verursacht durch Reizung der entzündeten Harnröhre und des Blasenhalses.', severity: 'moderate' },
                { name: 'Pollakisurie', description: 'Häufiges Entleeren kleiner Urinmengen aufgrund von Blasenwandreizung und reduzierter Kapazität.', severity: 'moderate' },
                { name: 'Harndrang', description: 'Plötzlicher, zwingender Harndrang, der schwer zu unterdrücken ist (Risiko der Dranginkontinenz).', severity: 'moderate' },
                { name: 'Suprapubische Schmerzen', description: 'Druck oder Schmerz im Unterbauch, über dem Schambein.', severity: 'mild' },
                { name: 'Hämaturie', description: 'Makroskopisch blutiger Urin (ca. 30%), oft am Ende des Wasserlassens (terminale Hämaturie), aufgrund von Blutungen der hyperämischen Schleimhaut.', severity: 'mild' }
              ],
              physical_exam: [
                'Suprapubische Druckempfindlichkeit',
                'Fieber meist NICHT vorhanden (wenn ja, Verdacht auf Pyelonephritis!)',
                'Nierenlager nicht klopfschmerzhaft',
                'Fehlen von vaginalem Ausfluss (erhöht Wahrscheinlichkeit für Zystitis)'
              ],
              complications: ['Aufsteigende Pyelonephritis', 'Rezidivierende Zystitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urinstreifen', finding: 'Leukozytenesterase+, Nitrit+', interpretation: 'Hoher positiver Vorhersagewert' },
                { test: 'Urinsediment', finding: 'Pyurie (>10 Leukozyten/Gesichtsfeld)', interpretation: 'Häufig, aber nicht spezifisch' }
              ],
              imaging: [
                { modality: 'Keine', finding: 'Nicht erforderlich', significance: 'Außer bei atypischen Symptomen oder Persistenz' }
              ],
              microbiology: [
                { test: 'Urinkultur', finding: '≥10^3 KBE/ml', significance: 'Nur bei komplizierten, rezidivierenden oder atypischen Fällen empfohlen (EAU 2025)' }
              ]
            },
            differential: [
              { disease: 'Vaginitis', distinguishing: 'Ausfluss, Juckreiz, externe Dysurie' },
              { disease: 'Urethritis (STD)', distinguishing: 'Neuer Partner, schleichender Beginn, Pyurie mit steriler Kultur' },
              { disease: 'Interstitielle Zystitis', distinguishing: 'Chronisch, Kultur negativ' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Fosfomycin-Trometamol', dose: '3g p.o.', duration: 'Einzeldosis', note: 'Erste Wahl (EAU 2025)' },
                  { drug: 'Nitrofurantoin', dose: '2x100mg p.o.', duration: '5 Tage', note: 'Erste Wahl (EAU 2025)' },
                  { drug: 'Pivmecillinam', dose: '3x400mg p.o.', duration: '3-5 Tage', note: 'Erste Wahl (EAU 2025)' }
                ],
                inpatient: [
                  { drug: 'Erfordert keine Krankenhausbehandlung', dose: '-', duration: '-', note: 'Außer bei Komplikationen' }
                ],
                icu: [
                  { drug: '-', dose: '-', duration: '-', note: '-' }
                ]
              },
              targeted: 'Basierend auf Kultur. Fluorchinolone (Ciprofloxacin, Levofloxacin) werden empirisch für unkomplizierte Zystitis NICHT empfohlen!',
              supportive: ['Reichlich Flüssigkeitszufuhr', 'Häufiges Wasserlassen', 'NSAID zur Schmerzlinderung'],
              prevention: ['Verhalten: Reichlich Flüssigkeitszufuhr, Miktion nach Geschlechtsverkehr', 'Nicht-antibiotisch (EAU 2025): Lokales Östrogen (Postmenopause), OM-89 Immunstimulation, D-Mannose, Blaseninstillation', 'Antibiotikaprophylaxe (letzter Schritt): Nitrofurantoin 50-100mg abends oder Fosfomycin 3g alle 10 Tage']
            },
            prognosis: {
              mortality: 'Null',
              prognostic_scores: ['Keine'],
              factors: 'Neigung zu Rezidiven'
            }
          },
          {
            id: 'pyelonephritis',
            name: 'Lokalisierte Harnwegsinfektion: Pyelonephritis (Nierenbeckenentzündung)',
            pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (80%)', gram: 'Gram-negativ', shape: 'Stäbchen' },
            epidemiology: {
              incidence: 'Häufige Komplikation einer unbehandelten Zystitis',
              risk_groups: ['Frauen', 'Schwangerschaft', 'Obstruktion (Stein, Prostata)', 'Nierenfehlbildung', 'Diabetes'],
              seasonality: 'Keine',
              transmission: 'Aufsteigende Infektion (95%), selten hämatogen'
            },
            pathomechanism: {
              steps: [
                'Aufsteigende Infektion: Bakterien steigen von der Blase über den Harnleiter ins Nierenbecken auf (oft begünstigt durch vesikoureteralen Reflux).',
                'Parenchyminvasion: Erreger dringen in das Nierenparenchym ein, primär in das Mark.',
                'Entzündungsreaktion: Eine heftige akute Entzündungsreaktion (Neutrophileninfiltration) wird gegen die Bakterien ausgelöst, was zu Gewebeödemen, Mikroabszessen und Tubulusschäden führt.',
                'Systemische Wirkung: Entzündungsmediatoren, die in den Kreislauf gelangen, verursachen Fieber und systemische Symptome.'
              ],
              virulence_factors: ['P-Fimbrien', 'Endotoxin', 'Kapsel']
            },
            clinical: {
              incubation: 'Tage nach Zystitis',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Fieber und Schüttelfrost', description: 'Plötzlich einsetzendes hohes Fieber (>38°C), oft begleitet von Schüttelfrost, was auf eine systemische Bakteriämie oder Toxämie hinweist.', severity: 'severe' },
                { name: 'Flankenschmerz', description: 'Dumpfer, anhaltender, ein- oder beidseitiger Schmerz in der Nierengegend (Flankenschmerz), verursacht durch Dehnung der Nierenkapsel.', severity: 'severe' },
                { name: 'Gastrointestinale Symptome', description: 'Übelkeit, Erbrechen und Appetitlosigkeit sind häufige Begleitsymptome aufgrund peritonealer Reizung.', severity: 'moderate' },
                { name: 'Symptome der unteren Harnwege', description: 'Dysurie und Pollakisurie gehen dem Fieber oft voraus, können aber in 30-50% der Fälle fehlen.', severity: 'mild' }
              ],
              physical_exam: [
                'Klopfschmerz im costovertebralen Winkel (Nierenlager) (Giordano-Zeichen)',
                'Fieber, Tachykardie',
                'Abdominelle Druckempfindlichkeit (weniger häufig)'
              ],
              complications: ['Nierenabszess', 'Perinephritischer Abszess', 'Urosepsis', 'Papillennekrose', 'Chronische Niereninsuffizienz (rezidivierend)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose, Linksverschiebung', interpretation: 'Systemische Entzündung' },
                { test: 'CRP/PCT', finding: 'Deutlich erhöht', interpretation: 'Bakterielle Infektion' },
                { test: 'Urin', finding: 'Leukozyturie, Bakteriurie, Leukozytenzylinder', interpretation: 'Ursprung in den oberen Harnwegen' },
                { test: 'Nierenfunktion', finding: 'Kreatinin kann erhöht sein', interpretation: 'Akute Nierenschädigung' }
              ],
              imaging: [
                { modality: 'CT Abdomen/Becken', finding: 'Nierenvergrößerung, perinephritische Flüssigkeit, keilförmige Hypodensität', significance: 'Goldstandard zum Ausschluss von Komplikationen (EAU 2025)' },
                { modality: 'Nieren-US', finding: 'Obstruktion, Abszess', significance: 'Strahlenfreie Alternative' }
              ],
              microbiology: [
                { test: 'Urinkultur', finding: '≥10^4 KBE/ml', significance: 'Immer abnehmen! (EAU 2025)' },
                { test: 'Blutkultur', finding: 'Positiv', significance: 'Bei Krankenhausaufnahme empfohlen' }
              ]
            },
            differential: [
              { disease: 'Nierenstein', distinguishing: 'Kolikartiger Schmerz, kein Fieber (wenn keine Infektion), Hämaturie dominiert' },
              { disease: 'Akutes Abdomen', distinguishing: 'Appendizitis, Cholezystitis (Abdominalstatus, US)' },
              { disease: 'Beckenentzündung (PID)', distinguishing: 'Gynäkologische Untersuchung, Ausfluss' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Cefuroxim-Axetil', dose: '2x500mg p.o.', duration: '7 Tage', note: 'keine Wirksamkeit gegen Enterokokken' },
                  { drug: 'Levofloxacin', dose: '1x750mg p.o.', duration: '5 Tage', note: 'Nur Alternative, wenn E. coli Resistenz <10% (EAU 2025)' },
                  { drug: 'Ceftibuten/Cefixim', dose: 'p.o.', duration: '10 Tage', note: 'Wenn Chinolon nicht gegeben werden kann (weniger wirksam)' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x1-2g i.v.', duration: '10-14 Tage', note: 'Erste Wahl' },
                  { drug: 'Ciprofloxacin', dose: '2x400mg i.v.', duration: '10-14 Tage', note: 'Alternative, wenn E. coli Resistenz <10% (EAU 2025)' },
                  { drug: 'Gentamicin + Ampicillin', dose: 'i.v.', duration: '', note: 'In schweren Fällen' }
                ],
                icu: [
                  { drug: 'Piperacillin/Tazobactam', dose: '4x4.5g i.v.', duration: '', note: 'Urosepsis, Obstruktion' },
                  { drug: 'Meropenem', dose: '3x1g i.v.', duration: '', note: 'Verdacht auf ESBL' }
                ]
              },
              targeted: 'Basierend auf Antibiogramm. ESBL ist häufig!',
              supportive: ['Flüssigkeitsersatz', 'Fiebersenkung', 'Beseitigung der Obstruktion (Katheter, Stent)'],
              prevention: ['Adäquate Behandlung der Zystitis', 'Korrektur anatomischer Anomalien']
            },
            prognosis: {
              mortality: 'Niedrig (<1%), aber 10-20% bei Urosepsis',
              prognostic_scores: ['qSOFA'],
              factors: 'Hohes Alter, Obstruktion, resistenter Erreger'
            }
          },
          {
            id: 'complicated_uti',
            name: 'Systemisch Harnwegsinfektion',
            pathogen: { type: 'Bakterium', name: '<i>E. coli, Enterococcus, Pseudomonas, Klebsiella, Proteus</i>', gram: 'Gemischt', shape: 'Gemischt' },
            epidemiology: {
              incidence: 'Häufig im Krankenhausumfeld und bei urologischen Patienten',
              risk_groups: ['Katheterträger', 'Männer', 'Schwangere', 'Anatomische/funktionelle Anomalie', 'Niereninsuffizienz', 'Immunsuppression'],
              seasonality: 'Keine',
              transmission: 'Aufsteigend, Katheter-assoziiert, hämatogen'
            },
            pathomechanism: {
              steps: [
                'Prädisponierender Faktor: Anatomische (z.B. Striktur, Stein) oder funktionelle (z.B. neurogene Blase) Anomalie oder Vorhandensein eines Fremdkörpers (Katheter) behindert den Urinfluss und das Auswaschen von Bakterien.',
                'Biofilmbildung: Bakterien (z.B. Proteus, Pseudomonas) bilden eine Biofilmschicht auf dem Katheter oder Stein, die sie vor Antibiotika und dem Immunsystem schützt.',
                'Persistenz: Infektion ist schwer zu eradizieren; Selektion resistenter Stämme und rezidivierende Infektionen sind häufig.'
              ],
              virulence_factors: ['Biofilm', 'Multiresistenz', 'Urease (Proteus)']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Variabel (kann oligosymptomatisch sein)',
              symptoms: [
                { name: 'Gemischte Symptome', description: 'Symptome von Zystitis und Pyelonephritis können koexistieren, aber das klinische Bild ist oft atypisch.', severity: 'moderate' },
                { name: 'Systemische Zeichen', description: 'Fieber, Schüttelfrost, Tachykardie. Bei Älteren können Verwirrtheit oder Verschlechterung des Allgemeinzustands das einzige Symptom sein.', severity: 'severe' },
                { name: 'Oligosymptomatisch', description: 'Bei katheterisierten Patienten oder solchen mit Rückenmarksverletzung können klassische Schmerzen und Miktionsbeschwerden fehlen.', severity: 'mild' },
                { name: 'Urinveränderungen', description: 'Trüber, übelriechender, sedimenthaltiger Urin, möglicherweise blutig.', severity: 'mild' }
              ],
              physical_exam: [
                'Kann unauffällig sein',
                'Suprapubische oder Flankendruckempfindlichkeit',
                'Vorhandensein eines Katheters',
                'Fieber oder Hypothermie (Urosepsis)',
                'Verwirrtheit (Ältere)'
              ],
              complications: ['Urosepsis', 'Nierenabszess', 'Nierenversagen', 'Rezidiv', 'Katheterverschluss']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urinkultur', finding: 'Frauen: ≥10^5 KBE/ml, Männer: ≥10^4 KBE/ml', interpretation: 'Diagnostische Schwellenwerte (EAU 2025)' },
                { test: 'Katheterurin', finding: '≥10^4 KBE/ml', interpretation: 'Signifikante Bakteriurie' },
                { test: 'Nierenfunktion', finding: 'Kreatinin prüfen', interpretation: 'Obstruktion/Schädigung' }
              ],
              imaging: [
                { modality: 'CT-Urographie', finding: 'Anatomische/funktionelle Anomalie', significance: 'OBLIGATORISCH zur Klärung des prädisponierenden Faktors' }
              ],
              microbiology: [
                { test: 'Kultur + Resistenz', finding: 'Essenziell', significance: 'Basis für gezielte Therapie' }
              ]
            },
            differential: [
              { disease: 'Unkomplizierte HWI', distinguishing: 'Kein Risikofaktor/anatomischer Fehler' },
              { disease: 'Prostatitis', distinguishing: 'Rektale Untersuchung' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Cefuroxim-Axetil', dose: '2x500mg p.o.', duration: '7-14 Tage', note: 'keine Wirksamkeit gegen Enterokokken' },
                  { drug: 'Ciprofloxacin', dose: '2x500-750mg p.o.', duration: '7-14 Tage', note: 'Nur wenn keine Fluorchinolon-Behandlung in den letzten 6 Monaten und E. coli Resistenz <10% (EAU 2025)' },
                  { drug: 'Levofloxacin', dose: '1x750mg p.o.', duration: '7-14 Tage', note: 'Alternative, wenn E. coli Resistenz <10% (EAU 2025)' },
                  { drug: 'Ceftibuten/Cefixim', dose: 'p.o.', duration: '10-14 Tage', note: 'Wenn Chinolon nicht gegeben werden kann' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x1-2g i.v.', duration: '10-14 Tage', note: 'In schweren Fällen' },
                  { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g i.v.', duration: '10-14 Tage', note: 'Verdacht auf Pseudomonas/vorherige AB-Behandlung' },
                  { drug: 'Carbapenem (Meropenem)', dose: '3x1g i.v.', duration: '10-14 Tage', note: 'ESBL-Risiko oder septischer Schock' },
                  { drug: 'Amikacin/Gentamicin', dose: 'i.v.', duration: 'Als Ergänzung', note: 'Synergismus' }
                ],
                icu: [
                  { drug: 'Breitspektrum (Carbapenem + Amikacin)', dose: 'i.v.', duration: '', note: 'Urosepsis' }
                ]
              },
              targeted: 'Korrektur basierend auf Kultur. Beseitigung der Obstruktion (Katheterwechsel, Stent, Nephrostomie) ist unerlässlich!',
              supportive: ['Flüssigkeitsersatz', 'Fiebersenkung'],
              prevention: ['Katheterpflege (geschlossenes System, sofortige Entfernung)', 'Beseitigung der Obstruktion', 'Vermeidung der Behandlung asymptomatischer Bakteriurie']
            },
            prognosis: {
              mortality: '10-30% bei Urosepsis',
              prognostic_scores: ['qSOFA', 'SOFA'],
              factors: 'Grunderkrankung, Resistenz, Sanierung des Herdes'
            }
          },
          {
            id: 'prostatitis',
            name: 'Bakterielle Prostatitis',
            pathogen: { type: 'Bakterium', name: '<i>E. coli, Klebsiella, Proteus, Enterococcus, Pseudomonas</i>', gram: 'Gemischt', shape: 'Gemischt' },
            epidemiology: {
              incidence: '50% der Männer erleben Symptome im Laufe ihres Lebens',
              risk_groups: ['Junge/mittelalte Männer', 'Katheterisierung', 'Urologischer Eingriff (Biopsie)', 'HIV', 'Diabetes'],
              seasonality: 'Keine',
              transmission: 'Aufsteigend (Reflux), hämatogen, lymphogen, direkt (Biopsie)'
            },
            pathomechanism: {
              steps: [
                'Infektionsweg: Am häufigsten gelangen Bakterien durch intraprostatischen Reflux von infiziertem Urin in die Prostatadrüsen.',
                'Entzündung: In akuten Fällen entwickeln sich Ödeme und Mikroabszesse in den Drüsen, was zu Schwellung und Spannung der Prostata führt.',
                'Chronifizierung: Bakterien können Biofilme auf Prostatasteinen oder in Drüsengängen bilden, was rezidivierende Infektionen aufrechterhält.'
              ],
              virulence_factors: ['Biofilm', 'Anatomische Lage (schlechte AB-Penetration)']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Akut (ABP) oder Chronisch (CBP)',
              symptoms: [
                { name: 'Akut: Systemische Symptome', description: 'Plötzlich einsetzendes hohes Fieber, Schüttelfrost, Muskelschmerzen, Unwohlsein (grippeähnlicher Beginn).', severity: 'severe' },
                { name: 'Schmerzen', description: 'Charakteristische perineale, rektale, Unterbauchschmerzen, die in Hoden und Penis ausstrahlen.', severity: 'moderate' },
                { name: 'LUTS (Symptome der unteren Harnwege)', description: 'Ausgeprägte Dysurie, Pollakisurie, dringender Harndrang.', severity: 'moderate' },
                { name: 'Obstruktion', description: 'Die geschwollene Prostata komprimiert die Harnröhre, was zu erschwertem Wasserlassen, schwachem Strahl oder vollständigem Harnverhalt führen kann.', severity: 'severe' },
                { name: 'Chronische Symptome', description: 'Mildere, wiederkehrende Beschwerden: Beckenbeschwerden, rezidivierende Harnwegsinfektionen, schmerzhafte Ejakulation.', severity: 'mild' }
              ],
              physical_exam: [
                'Digitale rektale Untersuchung (DRU):',
                'Akut: Geschwollene, warme, EXTREM druckempfindliche Prostata (Massage VERBOTEN - Bakteriämiegefahr!)',
                'Chronisch: Kann normal oder leicht druckempfindlich sein, nicht geschwollen'
              ],
              complications: ['Prostataabszess', 'Urosepsis', 'Chronifizierung', 'Epididymitis', 'Harnverhalt', 'Sexuelle Dysfunktion']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urin', finding: 'Pyurie, Bakteriurie', interpretation: 'Positiv' },
                { test: 'Blutbild/CRP', finding: 'Erhöht (Akut)', interpretation: 'Systemische Entzündung' },
                { test: 'PSA', finding: 'Erhöht', interpretation: 'Aufgrund von Entzündung (nicht zur Krebsdiagnose in der akuten Phase!)' }
              ],
              imaging: [
                { modality: 'Transrektaler US (TRUS)', finding: 'Abszess (hypoechogener Bereich)', significance: 'Nur wenn keine Besserung auf Behandlung oder Verdacht auf Abszess' }
              ],
              microbiology: [
                { test: 'Akut: Urinkultur', finding: 'Mittelstrahlurin', significance: 'Prostatamassage VERBOTEN!' },
                { test: 'Chronisch: Meares-Stamey-Test', finding: '4-Gläser-Probe oder 2-Gläser-Probe (vor/nach Massage)', significance: 'Goldstandard (EAU 2025)' }
              ]
            },
            differential: [
              { disease: 'Zystitis', distinguishing: 'Kein Fieber, keine Prostataempfindlichkeit' },
              { disease: 'BPH', distinguishing: 'Keine Infektionszeichen, langsame Progression' },
              { disease: 'Chronisches Beckenschmerzsyndrom (CPPS)', distinguishing: 'Negative Kultur, chronische Schmerzen' },
              { disease: 'Prostatakrebs', distinguishing: 'PSA, DRU (knotig), Biopsie' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Levofloxacin', dose: '1x500-750mg p.o.', duration: '2-4 Wochen (Akut), 4-6 Wochen (Chronisch)', note: 'EAU 2025: Erste Wahl (gute Penetration)' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg p.o.', duration: '2-4 Wochen (Akut), 4-6 Wochen (Chronisch)', note: 'EAU 2025: Erste Wahl' },
                  { drug: 'Cotrimoxazol', dose: '2x960mg p.o.', duration: '4-6 Wochen', note: 'Alternative' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1-2g i.v.', duration: '14 Tage', note: 'Bei schweren akuten Fällen (dann p.o. Wechsel)' },
                  { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g i.v.', duration: '', note: 'Urosepsis/Verdacht auf Pseudomonas' },
                  { drug: 'Gentamicin', dose: '5-7mg/kg i.v.', duration: '', note: 'Als Ergänzung (Synergismus)' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g i.v.', duration: '', note: 'Septischer Schock/ESBL' }
                ]
              },
              targeted: 'Fluorchinolone (erste Wahl bei chronisch). Makrolide (Verdacht auf Chlamydien). Fosfomycin (MDR - umstrittene Penetration).',
              supportive: ['NSAID zur Schmerzlinderung', 'Alpha-Blocker (Tamsulosin) zur Symptomlinderung', 'Suprapubischer Katheter (bei Retention, urethral sollte bei akuter Entzündung vermieden werden!)'],
              prevention: ['Frühzeitige Behandlung von HWI', 'Prostatabiopsie-Prophylaxe: Gezielt (basierend auf Rektalabstrich) oder Fosfomycin/Ceftriaxon (Fluorchinolone vermeiden!)']
            },
            prognosis: {
              mortality: 'Akut: niedrig (aber Sepsisrisiko); Chronisch: beeinträchtigt Lebensqualität, schwer zu heilen (Rezidiv häufig)',
              prognostic_scores: ['Keine'],
              factors: 'Biofilm, Resistenz, Anatomie, Übergang zu CPPS'
            }
          },
          {
            id: 'asymptomatic_bacteriuria',
            name: 'Asymptomatische Bakteriurie',
            pathogen: { type: 'Bakterium', name: '<i>E. coli, Enterococcus, GBS</i>, etc.', gram: 'Variabel', shape: 'Variabel' },
            epidemiology: {
              incidence: 'Häufig (Frauen 3-5%, Ältere 10-50%, Katheterträger 100%)',
              risk_groups: ['Ältere', 'Diabetes', 'Katheterträger', 'Schwangerschaft'],
              seasonality: 'Keine',
              transmission: 'Endogene Kolonisation'
            },
            pathomechanism: {
              steps: [
                'Kolonisation: Bakterien besiedeln die Harnwege, aber es fehlen ihnen Virulenzfaktoren (z.B. spezifische Fimbrien), die Gewebeinvasion oder Entzündung auslösen würden.',
                'Kommensalismus: Ein Gleichgewichtszustand entwickelt sich zwischen Bakterien und Wirt, ohne Symptome.',
                'Schutzwirkung: Kolonisierende Stämme können mit virulenteren Pathogenen konkurrieren und so möglicherweise eine schützende Wirkung haben.'
              ],
              virulence_factors: ['Reduzierte Virulenz']
            },
            clinical: {
              incubation: '-',
              onset: 'Asymptomatisch',
              symptoms: [
                { name: 'Asymptomatisch', description: 'Der Patient hat keine Harnwegsbeschwerden (keine Dysurie, kein Fieber, keine Schmerzen). Bakteriurie ist ein Zufallsbefund.', severity: 'mild' }
              ],
              physical_exam: [
                'Negativ',
                'Trüber/übelriechender Urin allein ist nicht diagnostisch und erfordert keine Behandlung!'
              ],
              complications: ['Unnötige Antibiotikabehandlung → Resistenz', 'Pyelonephritis (Risiko nur in Schwangerschaft/bei Eingriffen)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urinkultur', finding: '≥10^5 KBE/ml (gleicher Stamm)', interpretation: 'Frauen: 2 aufeinanderfolgende Proben, Männer: 1 Probe (EAU 2025)' },
                { test: 'Katheterprobe', finding: '≥10^5 KBE/ml', interpretation: 'Eine Probe ist ausreichend' },
                { test: 'Urinsediment', finding: 'Pyurie ist oft vorhanden', interpretation: 'Indiziert KEINE Behandlung ohne Symptome!' }
              ],
              microbiology: [
                { test: 'Kultur', finding: 'Positiv', significance: 'Nur wenn Screening indiziert ist (z.B. Schwangerschaft, urologischer Eingriff)' }
              ]
            },
            differential: [
              { disease: 'Zystitis', distinguishing: 'Vorhandensein von Symptomen (Dysurie, Harndrang)' },
              { disease: 'Kontamination', distinguishing: 'Niedrige Keimzahl, Mischflora' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'KEINE Behandlung', dose: '-', duration: '-', note: 'Allgemeine Regel (auch nicht bei Älteren, Diabetikern, Katheterpatienten!)' }
                ],
                inpatient: [
                  { drug: 'KEINE Behandlung', dose: '-', duration: '-', note: 'Außer bei Indikationen' }
                ]
              },
              targeted: 'Nur bei Indikation (Schwangerschaft, urologischer Eingriff mit Schleimhautverletzung). In der Schwangerschaft: Fosfomycin, Nitrofurantoin, Cephalosporin.',
              supportive: ['Aufklärung (Uringeruch/-farbe rechtfertigt kein AB)'],
              prevention: ['Vermeidung unnötigen Screenings und Behandlung', 'Katheterpflege']
            },
            prognosis: {
              mortality: 'Erhöht die Mortalität auch unbehandelt nicht',
              prognostic_scores: ['Keine'],
              factors: '-'
            }
          }
        ]
      },
});