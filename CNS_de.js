Object.assign(window.diseases, {
     cns_infections: {
        name: 'Infektionen des Zentralnervensystems',
        icon: '🧠',
        color: '#0891b2',
        diseases: [
          { isHeader: true, title: 'Diagnostische Tabellen', color: '#6b7280' },
          {
            id: 'csf_differential',
            name: 'Differentialdiagnose der Liquorbefunde',
            table: {
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
          },
          { isHeader: true, title: 'Eitrige Meningitiden', color: '#ef4444' },
          {
            id: 'bacterial_meningitis',
            name: 'Bakterielle Meningitis (Empirisch)',
            pathogen: { type: 'Bakterium', name: '<i>N. meningitidis, S. pneumoniae, L. monocytogenes</i>', gram: 'Gemischt', shape: 'Erregerabhängig' },
            epidemiology: {
              incidence: '2-5/100.000 pro Jahr in Industrieländern',
              risk_groups: ['Neugeborene (<1 Monat)', 'Kinder', 'Über 65-Jährige', 'Splenektomierte', 'Komplementdefizienz', 'Cochlea-Implantat-Träger'],
              seasonality: 'Meningokokken: Winter-Frühling',
              transmission: 'Tröpfcheninfektion (Meningokokken), endogen (Pneumokokken), vertikal (GBS, Listerien)'
            },
            pathomechanism: {
              steps: [
                'Kolonisation und Invasion: Erreger (z.B. Meningokokken, Pneumokokken) besiedeln die Nasopharynxschleimhaut und dringen in den Blutkreislauf ein (Bakteriämie).',
                'Überwindung der Blut-Hirn-Schranke: Bakterien gelangen über das Endothel des Plexus choroideus oder der Hirnkapillaren in den Subarachnoidalraum.',
                'Vermehrung und Entzündung: Im Liquor (wo humorale Immunität fehlt) vermehren sich Bakterien rasch. Zellwandbestandteile (LPS, Teichonsäure) lösen über PRRs eine massive Entzündungsreaktion aus (Zytokine: TNF-α, IL-1β).',
                'Hirnödem und ICP-Anstieg: Entzündung erhöht die BHS-Permeabilität (vasogenes Ödem), verringert Liquorresorption (interstitielles Ödem) und verursacht Zellschwellung (zytotoxisches Ödem).',
                'Folge: Das resultierende Hirnödem erhöht den intrakraniellen Druck (ICP), senkt den zerebralen Perfusionsdruck (CPP) und führt zu Ischämie und neuronalen Schäden.'
              ],
              virulence_factors: ['Kapselpolysaccharid', 'IgA-Protease', 'Lipooligosaccharid (LOS)', 'Pili/Fimbrien']
            },
            clinical: {
              incubation: '2-10 Tage (Meningokokken), kürzer (Pneumokokken)',
              onset: 'Akut, Stunden-Tage',
              symptoms: [
                { name: 'Klassische Trias', description: 'Die klassische Trias (Fieber, Nackensteifigkeit, Bewusstseinsstörung) liegt bei <50% der Patienten vor. Kopfschmerzen (schwer, diffus) und Fieber sind am häufigsten (95%).', severity: 'severe' },
                { name: 'Meningeale Zeichen', description: 'Nackensteifigkeit (Kinn berührt Brust nicht), Kernig-Zeichen (Schmerz bei Beinstreckung mit gebeugter Hüfte) und Brudzinski-Zeichen (Beine ziehen an bei Kopfheben).', severity: 'moderate' },
                { name: 'Systemische "Red Flags"', description: 'Besonders bei Meningokokken: Beinschmerzen, kalte Hände/Füße, marmorierte Haut - frühe Sepsiszeichen, die Meningitissymptomen vorausgehen können.', severity: 'severe' },
                { name: 'Ausschlag', description: 'Bei Meningokokkämie: Petechien (kleine Blutungen) oder Purpura (größere), die auf Druck NICHT verblassen (non-blanching rash).', severity: 'severe' },
                { name: 'Neurologische Symptome', description: 'Bewusstseinsstörung (Verwirrtheit bis Koma), Krampfanfälle (20-30%), Hirnnervenlähmungen (III, IV, VI, VII, VIII) und Herdzeichen.', severity: 'severe' }
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
                  { drug: '+ Ampicillin', dose: '2g i.v. alle 4 Stunden', duration: 'Erregerabhängig', note: 'Bei Listerien-Risiko (>60 Jahre, Immunsuppression, Schwangerschaft).' },
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
            id: 'meningococcal_meningitis',
            name: 'Meningokokken-Meningitis',
            pathogen: { type: 'Bakterium', name: '<i>Neisseria meningitidis</i>', gram: 'Gram-negativ', shape: 'Diplokokken' },
            epidemiology: {
              incidence: 'Kann epidemisch auftreten',
              risk_groups: ['Säuglinge', 'Jugendliche', 'Geschlossene Gemeinschaften (Wohnheim)', 'Asplenie'],
              seasonality: 'Winter-Frühling',
              transmission: 'Tröpfcheninfektion (enger Kontakt)'
            },
            pathomechanism: {
              steps: [
                'Bakterium kolonisiert Nasopharynx und gelangt in den Blutkreislauf.',
                'Schnelle Vermehrung im Blut setzt massive Mengen Endotoxin (LOS) frei (Meningokokkämie).',
                'Endotoxin löst systemische Entzündung, Vaskulitis und disseminierte intravasale Koagulopathie (DIC) aus.',
                'Dies führt zu Gefäßverschlüssen (Hautnekrosen, Nebennierenblutung - Waterhouse-Friderichsen-Syndrom) und septischem Schock, oft noch vor Meningitis.'
              ],
              virulence_factors: ['Kapsel (A,B,C,W,Y)', 'LOS (Lipooligosaccharid)', 'IgA-Protease']
            },
            clinical: {
              incubation: '1-10 Tage',
              onset: 'Hyperakut',
              symptoms: [
                { name: 'Hyperakuter Beginn', description: 'Zustand verschlechtert sich dramatisch innerhalb von Stunden. Fieber, Erbrechen, Kopfschmerzen als erste Zeichen.', severity: 'severe' },
                { name: 'Hämorrhagischer Ausschlag', description: 'Anfangs wegdrückbare Makeln, entwickeln sich schnell zu Petechien und Purpura, die auf Druck NICHT verblassen (non-blanching rash). Zeichen der Meningokokkämie.', severity: 'severe' },
                { name: 'Septischer Schock', description: 'Kalte Extremitäten, Zyanose, niedriger Blutdruck, schneller Puls, Anurie.', severity: 'severe' }
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
            pathogen: { type: 'Bakterium', name: '<i>Streptococcus pneumoniae</i>', gram: 'Gram-positiv', shape: 'Diplokokken' },
            epidemiology: {
              incidence: 'Häufigste Meningitis bei Erwachsenen',
              risk_groups: ['Ältere', 'Alkoholiker', 'Splenektomierte', 'Otitis/Sinusitis/Pneumonie', 'Liquorrhoe'],
              seasonality: 'Winter',
              transmission: 'Endogene Ausbreitung oder Tröpfcheninfektion'
            },
            pathomechanism: {
              steps: [
                'Infektion breitet sich oft von benachbartem Fokus (Otitis media, Sinusitis, Mastoiditis) auf Meningen aus oder via Bakteriämie bei Pneumonie.',
                'Pneumokokken-Kapsel hemmt Phagozytose, Pneumolysin-Toxin schädigt Zellen direkt und fördert Entzündung.',
                'Dieser Erreger verursacht die schwerste eitrige Meningitis mit häufigem Koma und bleibenden Schäden.'
              ],
              virulence_factors: ['Kapsel', 'Pneumolysin']
            },
            clinical: {
              incubation: 'Kurz',
              onset: 'Akut',
              symptoms: [
                { name: 'Schwere Meningitis', description: 'Gekennzeichnet durch rasch einsetzende Bewusstseinsstörung, Koma und Krampfanfälle. Mortalität und Folgeschäden sind bei diesem Typ am höchsten.', severity: 'severe' },
                { name: 'Prädisponierende Zeichen', description: 'Gleichzeitige Pneumonie, Mittelohrentzündung oder Sinusitis häufig vorhanden.', severity: 'moderate' }
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
            pathogen: { type: 'Bakterium', name: '<i>Listeria monocytogenes</i>', gram: 'Gram-positiv', shape: 'Stäbchen' },
            epidemiology: {
              incidence: 'Selten, aber gefährlich',
              risk_groups: ['Neugeborene', 'Ältere (>50 Jahre)', 'Schwangere', 'Immunsupprimierte (Transplantierte, Alkoholiker)'],
              seasonality: 'Keine',
              transmission: 'Lebensmittel (Weichkäse, Aufschnitt)'
            },
            pathomechanism: {
              steps: [
                'Bakterium gelangt über kontaminierte Nahrung hinein, durchdringt Darmwand, gelangt ins Blut.',
                'Besonderer Tropismus für Hirnstamm (Rhombenzephalon) und Meningen.',
                'Als intrazellulärer Erreger breitet es sich von Zelle zu Zelle aus, umgeht Antikörper. Zelluläre Immunität entscheidend (schwächer bei Säuglingen, Alten, Schwangeren).',
                'Bildet Mikroabszesse und Granulome im Hirnstamm.'
              ],
              virulence_factors: ['Intrazelluläres Überleben', 'Listeriolysin O']
            },
            clinical: {
              incubation: '1-4 Wochen',
              onset: 'Subakut',
              symptoms: [
                { name: 'Subakuter Verlauf', description: 'Symptome können sich langsamer über Tage bis Wochen entwickeln, nicht so stürmisch wie andere bakterielle Meningitiden.', severity: 'moderate' },
                { name: 'Rhombenzephalitis', description: 'Zeichen der Hirnstammbeteiligung: Hirnnervenlähmungen (z.B. Gesichtsschwäche, Schluckstörung), Ataxie, Nystagmus und Atemstörungen.', severity: 'severe' },
                { name: 'Fehlende Zeichen', description: 'Nackensteifigkeit fehlt oft, nur Fieber und Verwirrtheit bemerkbar.', severity: 'severe' }
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
          { isHeader: true, title: 'Aseptische Meningitiden', color: '#3b82f6' },
          {
            id: 'aseptic_meningitis',
            name: 'Aseptische (Virale) Meningitis',
            pathogen: { type: 'Virus', name: 'Enteroviren (<i>Coxsackie, Echo</i>), <i>HSV-2, VZV</i>', gram: 'RNA/DNA', shape: '-' },
            epidemiology: {
              incidence: 'Häufigste Form der Meningitis',
              risk_groups: ['Kinder', 'Junge Erwachsene'],
              seasonality: 'Sommer-Herbst (Enterovirus)',
              transmission: 'Fäkal-oral (Entero), sexuell (HSV-2)'
            },
            pathomechanism: {
              steps: [
                'Das Virus (z.B. Enterovirus) gelangt aus Darm oder Atemwegen ins Blut (Virämie).',
                'Es überwindet die Blut-Hirn-Schranke und infiziert Meningen und Plexus choroideus.',
                'Löst Entzündungsreaktion aus (meist lymphozytär), aber im Gegensatz zu Bakterien bildet sich kein eitriges Exsudat, und das Hirnparenchym bleibt meist verschont (daher klares Bewusstsein).',
                'Der Prozess ist meist selbstlimitierend, das Immunsystem eliminiert die Infektion.'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '3-7 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Meningeales Syndrom', description: 'Kopfschmerzen (frontal/retroorbital), Fieber, Lichtscheu (Photophobie) und Nackensteifigkeit.', severity: 'moderate' },
                { name: 'Klares Bewusstsein', description: 'Wichtigstes Unterscheidungsmerkmal: Patient ist wach, orientiert, keine fokalen neurologischen Ausfälle (im Gegensatz zu Enzephalitis oder bakterieller Meningitis).', severity: 'mild' },
                { name: 'Systemische Symptome', description: 'Bei Enterovirus Ausschlag, Halsschmerzen, Durchfall; bei HSV-2 genitale Läsionen möglich.', severity: 'mild' }
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
          { isHeader: true, title: 'Enzephalitiden', color: '#8b5cf6' },
          {
            id: 'viral_encephalitis',
            name: 'Virale Enzephalitis',
            pathogen: { type: 'Virus', name: '<i>HSV-1, VZV</i>, Enteroviren, Arboviren', gram: 'DNA/RNA-Viren', shape: 'variabel' },
            epidemiology: {
              incidence: '0.5-7/100.000 pro Jahr',
              risk_groups: ['Neugeborene (HSV-2)', 'Immunsupprimierte', 'Ältere (VZV-Reaktivierung)', 'Reisende in endemische Gebiete (Arbovirus)'],
              seasonality: 'Enterovirus: Sommer-Herbst; HSV: ganzjährig',
              transmission: 'HSV: Reaktivierung; Enterovirus: fäkal-oral; Arbovirus: Vektor (Mücke, Zecke)'
            },
            pathomechanism: {
              steps: [
                'Eintritt: Viren erreichen das ZNS hämatogen (z.B. Arboviren) oder über Nervenbahnen (z.B. HSV, Tollwut).',
                'Neurotropismus: Viren infizieren direkt Neuronen und Gliazellen. HSV-1 zielt spezifisch auf Temporal- und Frontallappen (olfaktorischer oder trigeminaler Weg).',
                'Schädigungsmechanismus: Neuronentod durch direkten zytopathischen Effekt der Virusreplikation und zytotoxische T-Zell-Immunantwort.',
                'Histologie: Perivaskuläre lymphozytäre Infiltration, Neuronophagie und Mikroglia-Knötchen. Bei HSV hämorrhagische Nekrose.',
                'Folge: Hirnödem, Entzündung, Blutung und ausgedehnter Neuronentod führen zu fokalen Ausfällen und Bewusstseinsstörung.'
              ],
              virulence_factors: ['HSV: Glykoprotein B, C, D (Eintritt)', 'VZV: Latenz in Neuronen', 'Enterovirus: VP1-Kapsidprotein']
            },
            clinical: {
              incubation: 'HSV-Reaktivierung: variabel; Enterovirus: 3-7 Tage; Arbovirus: 4-14 Tage',
              onset: 'Akut-subakut',
              symptoms: [
                { name: 'Bewusstseinsstörung (Leitsymptom)', description: 'Wichtigstes Unterscheidungsmerkmal zur Meningitis: Das Bewusstsein ist nicht klar. Zeigt sich als Verwirrtheit, Lethargie, Persönlichkeitsveränderung oder Koma.', severity: 'severe' },
                { name: 'Fieber und Kopfschmerzen', description: 'Fast immer vorhanden (>90%), oft begleitet von Übelkeit und Erbrechen.', severity: 'moderate' },
                { name: 'Fokale neurologische Defizite', description: 'Je nach betroffenem Areal: Hemiparese, Aphasie, Ataxie, Hirnnervenlähmungen.', severity: 'severe' },
                { name: 'Krampfanfälle', description: 'Häufig (besonders bei HSV und autoimmunen Ursachen), können fokal oder generalisiert sein.', severity: 'severe' },
                { name: 'Psychiatrische Symptome', description: 'Halluzinationen, Agitation, Psychose, Gedächtnisverlust - besonders bei Befall des limbischen Systems (z.B. HSV).', severity: 'severe' }
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
            pathogen: { type: 'Virus', name: '<i>Herpes-Simplex-Virus 1</i> (HSV-1)', gram: 'dsDNA', shape: 'kugelförmig' },
            epidemiology: {
              incidence: 'Häufigste sporadische, tödliche Enzephalitis',
              risk_groups: ['Jeder (keine Saisonalität)'],
              seasonality: 'Keine',
              transmission: 'Reaktivierung (Ganglion trigeminale) oder Primärinfektion'
            },
            pathomechanism: {
              steps: [
                'Das latente Virus reaktiviert im Ganglion trigeminale und wandert retrograd über Nervenfasern zurück ins Gehirn.',
                'Es greift selektiv Temporal- und Frontallappen sowie das limbische System an.',
                'Virusreplikation und Immunantwort verursachen schwere, asymmetrische, nekrotisierende, hämorrhagische Entzündung in diesen Bereichen.',
                'Resultierendes Hirnödem und Temporallappenschwellung können zur Unkuseinklemmung führen.'
              ],
              virulence_factors: ['Neurovirulenz-Gene']
            },
            clinical: {
              incubation: 'Variabel',
              onset: 'Akut (Tage)',
              symptoms: [
                { name: 'Prodrom', description: 'Fieber, Kopfschmerzen, Unwohlsein für einige Tage.', severity: 'moderate' },
                { name: 'Verhaltensänderungen', description: 'Plötzlich auftretendes bizarres Verhalten, Persönlichkeitsveränderung, Psychose, Halluzinationen (olfaktorisch/gustatorisch). Oft anfangs als psychiatrisch fehldiagnostiziert.', severity: 'severe' },
                { name: 'Neurologische Defizite', description: 'Aphasie (Sprachstörung), Hemiparese, Gedächtnisverlust (v.a. Kurzzeit).', severity: 'severe' },
                { name: 'Krampfanfälle', description: 'Häufig, oft mit fokalem Beginn.', severity: 'severe' }
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
            pathogen: { type: 'Virus', name: 'Enteroviren (<i>Coxsackie, Echo</i>), <i>HSV-2, VZV</i>', gram: 'RNA/DNA', shape: '-' },
            epidemiology: {
              incidence: 'Häufigste Form der Meningitis',
              risk_groups: ['Kinder', 'Junge Erwachsene'],
              seasonality: 'Sommer-Herbst (Enterovirus)',
              transmission: 'Fäkal-oral (Entero), sexuell (HSV-2)'
            },
            pathomechanism: {
              steps: [
                'Das Virus (z.B. Enterovirus) gelangt aus Darm oder Atemwegen ins Blut (Virämie).',
                'Es überwindet die Blut-Hirn-Schranke und infiziert Meningen und Plexus choroideus.',
                'Löst Entzündungsreaktion aus (meist lymphozytär), aber im Gegensatz zu Bakterien bildet sich kein eitriges Exsudat, und das Hirnparenchym bleibt meist verschont (daher klares Bewusstsein).',
                'Der Prozess ist meist selbstlimitierend, das Immunsystem eliminiert die Infektion.'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '3-7 Tage',
              onset: 'Plötzlich',
              symptoms: [
                { name: 'Meningeales Syndrom', description: 'Kopfschmerzen (frontal/retroorbital), Fieber, Lichtscheu (Photophobie) und Nackensteifigkeit.', severity: 'moderate' },
                { name: 'Klares Bewusstsein', description: 'Wichtigstes Unterscheidungsmerkmal: Patient ist wach, orientiert, keine fokalen neurologischen Ausfälle (im Gegensatz zu Enzephalitis oder bakterieller Meningitis).', severity: 'mild' },
                { name: 'Systemische Symptome', description: 'Bei Enterovirus Ausschlag, Halsschmerzen, Durchfall; bei HSV-2 genitale Läsionen möglich.', severity: 'mild' }
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
            pathogen: { type: 'Virus', name: '<i>FSME-Virus</i>', gram: 'RNA, Flaviviridae', shape: 'kugelförmig' },
            epidemiology: {
              incidence: 'Endemisch in Mitteleuropa',
              risk_groups: ['Forstarbeiter', 'Wanderer', 'Personen mit Zeckenexposition'],
              seasonality: 'Frühling-Herbst',
              transmission: 'Zeckenstich, unpasteurisierte Milch'
            },
            pathomechanism: {
              steps: [
                'Das Virus gelangt über den Speichel einer infizierten Zecke in den Körper.',
                'Phase 1 (Virämie): Virus vermehrt sich in Lymphknoten und Milz, verursacht grippeähnliche Symptome.',
                'Phase 2 (Neuroinvasion): Bei einem Teil der Patienten überwindet das Virus die Blut-Hirn-Schranke und befällt Meningen (Meningitis), Hirnparenchym (Enzephalitis) oder Rückenmark (Myelitis).',
                'Rückenmarksbefall zerstört typischerweise Motoneurone im Vorderhorn, was zu schlaffen Lähmungen führt.'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '7-14 Tage',
              onset: 'Biphasisch',
              symptoms: [
                { name: '1. Phase (Grippeähnlich)', description: 'Fieber, Kopfschmerzen, Muskelschmerzen, Müdigkeit für 2-7 Tage. Gefolgt von 1-3 Wochen symptomfreiem Intervall.', severity: 'mild' },
                { name: '2. Phase (Neurologisch)', description: 'Bei 20-30% kehrt Fieber zurück, neurologische Symptome treten auf. Formen: Meningitis (milder), Meningoenzephalitis (Verwirrtheit, Ataxie), Meningoenzephalomyelitis (Lähmungen).', severity: 'severe' },
                { name: 'Lähmung', description: 'Charakteristisch ist eine asymmetrische schlaffe Lähmung des Schultergürtels und der Arme (Schädigung der Vorderhornzellen).', severity: 'severe' }
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
            pathogen: { type: 'Bakterium', name: '<i>Neisseria meningitidis</i>', gram: 'Gram-negativ', shape: 'Diplokokken' },
            epidemiology: {
              incidence: 'Kann epidemisch auftreten',
              risk_groups: ['Säuglinge', 'Jugendliche', 'Geschlossene Gemeinschaften (Wohnheim)', 'Asplenie'],
              seasonality: 'Winter-Frühling',
              transmission: 'Tröpfcheninfektion (enger Kontakt)'
            },
            pathomechanism: {
              steps: [
                'Bakterium kolonisiert Nasopharynx und gelangt in den Blutkreislauf.',
                'Schnelle Vermehrung im Blut setzt massive Mengen Endotoxin (LOS) frei (Meningokokkämie).',
                'Endotoxin löst systemische Entzündung, Vaskulitis und disseminierte intravasale Koagulopathie (DIC) aus.',
                'Dies führt zu Gefäßverschlüssen (Hautnekrosen, Nebennierenblutung - Waterhouse-Friderichsen-Syndrom) und septischem Schock, oft noch vor Meningitis.'
              ],
              virulence_factors: ['Kapsel (A,B,C,W,Y)', 'LOS (Lipooligosaccharid)', 'IgA-Protease']
            },
            clinical: {
              incubation: '1-10 Tage',
              onset: 'Hyperakut',
              symptoms: [
                { name: 'Hyperakuter Beginn', description: 'Zustand verschlechtert sich dramatisch innerhalb von Stunden. Fieber, Erbrechen, Kopfschmerzen als erste Zeichen.', severity: 'severe' },
                { name: 'Hämorrhagischer Ausschlag', description: 'Anfangs wegdrückbare Makeln, entwickeln sich schnell zu Petechien und Purpura, die auf Druck NICHT verblassen (non-blanching rash). Zeichen der Meningokokkämie.', severity: 'severe' },
                { name: 'Septischer Schock', description: 'Kalte Extremitäten, Zyanose, niedriger Blutdruck, schneller Puls, Anurie.', severity: 'severe' }
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
            pathogen: { type: 'Bakterium', name: '<i>Streptococcus pneumoniae</i>', gram: 'Gram-positiv', shape: 'Diplokokken' },
            epidemiology: {
              incidence: 'Häufigste Meningitis bei Erwachsenen',
              risk_groups: ['Ältere', 'Alkoholiker', 'Splenektomierte', 'Otitis/Sinusitis/Pneumonie', 'Liquorrhoe'],
              seasonality: 'Winter',
              transmission: 'Endogene Ausbreitung oder Tröpfcheninfektion'
            },
            pathomechanism: {
              steps: [
                'Infektion breitet sich oft von benachbartem Fokus (Otitis media, Sinusitis, Mastoiditis) auf Meningen aus oder via Bakteriämie bei Pneumonie.',
                'Pneumokokken-Kapsel hemmt Phagozytose, Pneumolysin-Toxin schädigt Zellen direkt und fördert Entzündung.',
                'Dieser Erreger verursacht die schwerste eitrige Meningitis mit häufigem Koma und bleibenden Schäden.'
              ],
              virulence_factors: ['Kapsel', 'Pneumolysin']
            },
            clinical: {
              incubation: 'Kurz',
              onset: 'Akut',
              symptoms: [
                { name: 'Schwere Meningitis', description: 'Gekennzeichnet durch rasch einsetzende Bewusstseinsstörung, Koma und Krampfanfälle. Mortalität und Folgeschäden sind bei diesem Typ am höchsten.', severity: 'severe' },
                { name: 'Prädisponierende Zeichen', description: 'Gleichzeitige Pneumonie, Mittelohrentzündung oder Sinusitis häufig vorhanden.', severity: 'moderate' }
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
            pathogen: { type: 'Bakterium', name: '<i>Listeria monocytogenes</i>', gram: 'Gram-positiv', shape: 'Stäbchen' },
            epidemiology: {
              incidence: 'Selten, aber gefährlich',
              risk_groups: ['Neugeborene', 'Ältere (>50 Jahre)', 'Schwangere', 'Immunsupprimierte (Transplantierte, Alkoholiker)'],
              seasonality: 'Keine',
              transmission: 'Lebensmittel (Weichkäse, Aufschnitt)'
            },
            pathomechanism: {
              steps: [
                'Bakterium gelangt über kontaminierte Nahrung hinein, durchdringt Darmwand, gelangt ins Blut.',
                'Besonderer Tropismus für Hirnstamm (Rhombenzephalon) und Meningen.',
                'Als intrazellulärer Erreger breitet es sich von Zelle zu Zelle aus, umgeht Antikörper. Zelluläre Immunität entscheidend (schwächer bei Säuglingen, Alten, Schwangeren).',
                'Bildet Mikroabszesse und Granulome im Hirnstamm.'
              ],
              virulence_factors: ['Intrazelluläres Überleben', 'Listeriolysin O']
            },
            clinical: {
              incubation: '1-4 Wochen',
              onset: 'Subakut',
              symptoms: [
                { name: 'Subakuter Verlauf', description: 'Symptome können sich langsamer über Tage bis Wochen entwickeln, nicht so stürmisch wie andere bakterielle Meningitiden.', severity: 'moderate' },
                { name: 'Rhombenzephalitis', description: 'Zeichen der Hirnstammbeteiligung: Hirnnervenlähmungen (z.B. Gesichtsschwäche, Schluckstörung), Ataxie, Nystagmus und Atemstörungen.', severity: 'severe' },
                { name: 'Fehlende Zeichen', description: 'Nackensteifigkeit fehlt oft, nur Fieber und Verwirrtheit bemerkbar.', severity: 'severe' }
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
            pathogen: { type: 'Pilz', name: '<i>Cryptococcus neoformans</i>', gram: 'Hefepilz (bekapselt)', shape: 'rund' },
            epidemiology: {
              incidence: 'Häufigste Pilzmeningitis bei HIV/AIDS-Patienten',
              risk_groups: ['HIV (CD4 <100)', 'Transplantierte', 'Steroidbehandlung'],
              seasonality: 'Keine',
              transmission: 'Inhalation (kontaminierter Staub/Taubenkot) -> Lunge -> hämatogene Streuung'
            },
            pathomechanism: {
              steps: [
                'Pilz gelangt durch Inhalation in die Lunge, verursacht Primärinfektion (oft asymptomatisch).',
                'Bei Immunsuppression (z.B. AIDS) streut er hämatogen ins Gehirn.',
                'Dicke Polysaccharidkapsel schützt vor Phagozytose.',
                'Ansammlung in Arachnoidalzotten blockiert Liquorresorption, führt zu extrem hohem Hirndruck ohne eitrige Entzündung.'
              ],
              virulence_factors: ['Polysaccharidkapsel', 'Melaninproduktion']
            },
            clinical: {
              incubation: 'Unbekannt (Reaktivierung)',
              onset: 'Subakut/Chronisch (Wochen)',
              symptoms: [
                { name: 'Langsame Progression', description: 'Symptome entwickeln sich über Wochen. Leitsymptome sind zunehmende Kopfschmerzen und Fieber.', severity: 'moderate' },
                { name: 'Hirndrucksymptome', description: 'Durch blockierte Liquorresorption: Sehstörungen (Doppelbilder, Verschwommen), Übelkeit, Bewusstseinsstörung.', severity: 'severe' },
                { name: 'Fehlende Meningismuszeichen', description: 'Da Entzündungsreaktion schwach ist (wenig Leukozyten), fehlt Nackensteifigkeit oft!', severity: 'severe' }
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
            pathogen: { type: 'Protozoon', name: '<i>Naegleria fowleri</i>', gram: '-', shape: 'Amöbe' },
            epidemiology: {
              incidence: 'Sehr selten, aber tödlich',
              risk_groups: ['Kinder/Jugendliche', 'Personen, die in Süßwasser schwimmen'],
              seasonality: 'Sommer (warmes Wasser)',
              transmission: 'Wasser dringt in die Nase ein -> Riechnerv -> Gehirn'
            },
            pathomechanism: {
              steps: [
                'Wasser gelangt beim Schwimmen in warmem Süßwasser in die Nase.',
                'Amöbe durchdringt Nasenschleimhaut und Lamina cribrosa.',
                'Wandert entlang des Riechnervs (N. olfactorius) direkt in die Frontallappen des Gehirns.',
                'Vermehrung im Hirngewebe, enzymatische Auflösung und "Fressen" des Hirngewebes, verursacht massive hämorrhagische Nekrose und Ödem.'
              ],
              virulence_factors: ['Gewebeabbauende Enzyme', 'Amebostome (Fressapparat)']
            },
            clinical: {
              incubation: '1-9 Tage (durchschnittlich 5)',
              onset: 'Fulminant',
              symptoms: [
                { name: 'Anfangssymptome', description: 'Plötzlich einsetzende, unerträgliche frontale Kopfschmerzen, Fieber, Übelkeit. Oft gehen Geruchs-/Geschmacksstörungen (Parosmie/Ageusie) voraus.', severity: 'severe' },
                { name: 'Progression', description: 'Schnelle Entwicklung von Nackensteifigkeit, Halluzinationen, Krampfanfällen und Koma. Tod durch Hirnödem und Einklemmung innerhalb von 3-7 Tagen.', severity: 'severe' }
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
          },
         { isHeader: true, title: 'Fokale und spezielle Formen', color: '#d97706' }, {
            id: 'brain_abscess',
            name: 'Hirnabszess',
            pathogen: { type: 'Bakterium', name: '<i>Streptococcus</i> spp., <i>Staphylococcus aureus</i>, Anaerobier', gram: 'Gemischt', shape: 'Gemischt' },
            epidemiology: {
              incidence: 'Selten, aber schwerwiegend (0.4-1.3/100.000/Jahr)',
              risk_groups: ['Immunsupprimierte', 'Chronische Otitis/Sinusitis', 'Zahninfektion', 'Endokarditis', 'Schädel-Hirn-Trauma/OP'],
              seasonality: 'Keine',
              transmission: 'Endogene Ausbreitung (per continuitatem oder hämatogen)'
            },
            pathomechanism: {
              steps: [
                'Direkte Ausbreitung: Infektion breitet sich von benachbarten Strukturen (z.B. Mittelohr, Nebenhöhlen, Zähne) auf das Hirnparenchym aus (40-50%).',
                'Hämatogene Streuung: Bakterien gelangen über den Blutkreislauf von einem entfernten Fokus (z.B. Lunge, Herz - Endokarditis) ins Gehirn (25-35%).',
                'Trauma/Operation: Direkter Eintritt nach offenem Schädelbruch oder neurochirurgischem Eingriff.',
                'Abszessbildung: Bakterienvermehrung verursacht lokale Entzündung (Zerebritis), dann Nekrose. Der Körper versucht, den Prozess durch Kapselbildung zu isolieren.'
              ],
              virulence_factors: ['Synergismus der Mischflora', 'Kapselbildung']
            },
            clinical: {
              incubation: 'Variabel (Tage-Wochen)',
              onset: 'Subakut',
              symptoms: [
                { name: 'Kopfschmerzen', description: 'Häufigstes Symptom (>70%), oft lokalisiert, dumpf, konstant und progredient.', severity: 'moderate' },
                { name: 'Fokale neurologische Defizite', description: 'Abhängig von der Abszesslokalisation (z.B. Hemiparese, Aphasie, Gesichtsfeldausfall).', severity: 'severe' },
                { name: 'Fieber', description: 'Nur in 50% der Fälle vorhanden! Fehlen schließt es nicht aus.', severity: 'mild' },
                { name: 'Bewusstseinsstörung', description: 'Schläfrigkeit, Verwirrtheit, dann Koma können sich aufgrund des erhöhten Hirndrucks entwickeln.', severity: 'severe' }
              ],
              physical_exam: ['Stauungspapille (hoher Hirndruck)', 'Fokale neurologische Zeichen', 'Fieber (kann fehlen)'],
              complications: ['Einklemmung (Herniation)', 'Abszessruptur in das Ventrikelsystem (Ventrikulitis - hohe Mortalität)', 'Epilepsie']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild', finding: 'Leukozytose (in 60%)', interpretation: 'Unzuverlässig' },
                { test: 'CRP', finding: 'Erhöht', interpretation: 'Entzündung' },
                { test: 'Blutkultur', finding: 'Positiv', significance: 'Wichtig bei hämatogenem Ursprung' }
              ],
              imaging: [
                { modality: 'Schädel-CT/MRT', finding: 'Ringförmige Anreicherung (Ring-Enhancement), perifokales Ödem', significance: 'Goldstandard (MRT ist sensitiver)' }
              ],
              microbiology: [
                { test: 'Stereotaktische Aspiration', finding: 'Eiterkultur', significance: 'Basis für ätiologische Diagnose und Therapie' },
                { test: 'Lumbalpunktion', finding: 'KONTRAINDIZIERT!', significance: 'Wegen Einklemmungsgefahr bei Raumforderung verboten!' }
              ]
            },
            differential: [
              { disease: 'Hirntumor (Glioblastom, Metastase)', distinguishing: 'Bildgebung (DWI-Sequenz hilft), Biopsie' },
              { disease: 'Schlaganfall', distinguishing: 'Plötzlicher Beginn, vaskuläre Risikofaktoren' },
              { disease: 'Enzephalitis', distinguishing: 'Diffuser, kein abgekapselter Abszess' }
            ],
            therapy: {
              empirical: {
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '2g i.v. alle 12 Stunden', duration: '4-8 Wochen', note: 'Basistherapie' },
                  { drug: '+ Metronidazol', dose: '500mg i.v. alle 8 Stunden', duration: '4-8 Wochen', note: 'Anaerobier-Abdeckung' },
                  { drug: '+ Vancomycin', dose: '15-20mg/kg i.v.', duration: '', note: 'Bei S. aureus-Verdacht (z.B. Trauma, Endokarditis)' }
                ]
              },
              targeted: 'Nach Kultur. Langfristige (6-8 Wochen) i.v., dann p.o. Therapie.',
              supportive: ['Neurochirurgische Aspiration/Drainage (wenn >2.5 cm)', 'Steroide (Dexamethason) nur bei signifikantem Ödem/Einklemmungsgefahr', 'Antikonvulsiva'],
              prevention: ['Behandlung von HNO-Infektionen', 'Endokarditis-Prophylaxe']
            },
            prognosis: {
              mortality: '10-20% (besser bei früher Diagnose)',
              prognostic_scores: [],
              factors: 'Bewusstseinszustand bei Aufnahme, Ventrikelruptur'
            }
          }
                   ]
                 }
           });
 