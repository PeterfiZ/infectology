Object.assign(window.diseases, {
  cns_infections: {
    name: 'Infektionen des Zentralnervensystems',
    icon: '🧠',
    color: '#0891b2',
    diseases: [
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
          onset: 'Akut, Stunden-Tage (hyperakut bei Meningokokkenerkrankung)',
          symptoms: [
            { name: 'Klassische Symptome (Trias & Tetrade)', description: 'Die klassische Trias (Fieber, Nackensteifigkeit, Bewusststörung) liegt bei weniger als der Hälfte der Patienten (44-50%) gleichzeitig vor. Mindestens zwei der vier Komponenten der klassischen Tetrade (Fieber, starke/berstende Kopfschmerzen, Nackensteifigkeit, Bewusststörung) sind jedoch bei fast allen Patienten (95-99%) nachweisbar.', severity: 'severe' },
            { name: 'Prodromalsymptome', description: 'Der Meningitis gehen häufig Symptome eines oberen Atemwegsinfekts oder eine Pharyngitis voraus. Bei Pneumokokken-Meningitis liegt oft eine Otitis media, Sinusitis oder Pneumonie in der Anamnese vor.', severity: 'mild' },
            { name: 'Meningeale Reizzeichen', description: '<b>Nackensteifigkeit (Meningismus):</b> Die passive Flexion des Nackens nach vorne ist eingeschränkt und schmerzhaft. <b>Kernig-Zeichen:</b> Bei um 90 Grad gebeugter Hüfte und Knie führt die Streckung des Knies zu Schmerzen und reflektorischem Widerstand. <b>Brudzinski-Zeichen:</b> Das passive Vorbeugen des Kopfes führt zu einer unwillkürlichen Beugung von Knien und Hüften.', severity: 'moderate' },
            { name: 'Jolt-Akzentuierung des Kopfschmerzes', description: 'Der Patient wird gebeten, den Kopf schnell horizontal 2-3 Mal pro Sekunde hin und her zu drehen. Positiv, wenn sich der Kopfschmerz verstärkt. Ein hochsensitiver klinischer Test (Sensitivität 97%), der hilft, eine meningeale Reizung zu erkennen, wenn die klassischen Zeichen uneindeutig sind.', severity: 'moderate' },
            { name: 'Atypische Symptome bei Säuglingen & Neugeborenen', description: 'Klassische meningeale Zeichen fehlen in dieser Altersgruppe häufig. Leitsymptome sind <b>paradoxe Reizbarkeit</b> (das Schreien verstärkt sich beim Hochnehmen oder Trösten), Trinkschwäche (Appetitlosigkeit, schwaches Saugen), Lethargie, eine gespannte oder vorgewölbte Fontanelle, schrilles Schreien, Erbrechen und Muskelhypotonie.', severity: 'severe' },
            { name: 'Atypische Symptome im Alter', description: 'Ältere Patienten präsentieren sich oft atypisch oder oligosymptomatisch: Eine Nackensteifigkeit kann fehlen oder aufgrund einer zervikalen Arthrose schwer zu beurteilen sein, Fieber ist oft mild oder fehlt ganz (Hypothermie). Neu aufgetretene, unerklärliche Verwirrtheit (Delir) und Schläfrigkeit sind oft die einzigen Symptome.', severity: 'severe' },
            { name: 'Systemische Zeichen & Frühsepsis („Red Flags“)', description: 'Insbesondere bei Meningokokken können Frühzeichen einer Sepsis den Meningitissymptomen um Stunden vorausgehen: ausgeprägte Gliederschmerzen (Myalgie), kalte Hände und Füße, marmorierte Haut (Cutis marmorata), Blässe und rasch fortschreitende Hinfälligkeit.', severity: 'severe' },
            { name: 'Hautmanifestationen (Petechien/Purpura)', description: 'Typisch für eine Meningokokken-Sepsis (Meningokokkämie) sind Petechien (punktförmige Blutungen) und Purpura (größere, zusammenfließende Ekchymosen) an Haut und Schleimhäuten, die auf Druck (Glastest) nicht verblassen. Ihr Auftreten weist auf einen hyperakuten Verlauf hin und erfordert sofortiges Handeln.', severity: 'severe' },
            { name: 'Zeichen eines erhöhten Hirndrucks (ICP)', description: 'Durch das Hirnödem bedingte Symptome eines erhöhten Hirndrucks: progrediente Bewusstseinsstörung (Somnolenz bis Koma), schwallartiges Erbrechen (Erbrechen ohne vorherige Übelkeit), die <b>Cushing-Trias</b> (Bradykardie, Hypertonie und unregelmäßige Atmung), Pupillendifferenz (Anisokorie) und Papillenödem (Stauungspapille) im Spätstadium.', severity: 'severe' },
            { name: 'Neurologische Ausfälle & Krampfanfälle', description: 'Fokale neurologische Defizite (Hemiparese, Aphasie), Hirnnervenlähmungen (am häufigsten Hirnnerven III, IV, VI, VII und VIII durch Entzündung oder Kompression an der Schädelbasis: Doppelbilder, Fazialisparese, Hörverlust) sowie generalisierte oder fokale Krampfanfälle (bei 20-30% der Patienten).', severity: 'severe' }
          ],
          physical_exam: [
            'Nackensteifigkeit (eingeschränkte passive Nackenflexion)',
            'Kernig-Zeichen: eingeschränkte Kniestreckung bei gebeugter Hüfte durch Schmerz',
            'Brudzinski-Zeichen: unwillkürliche Hüft-/Kniebeugung bei passiver Nackenflexion',
            'Positive Jolt-Akzentuierung des Kopfschmerzes',
            'Fieber (hoch, bei Neugeborenen und Älteren jedoch auch normale Temperatur oder Hypothermie möglich)',
            'Bewusstseinsstörung und verminderte Wachsamkeit (GCS < 15)',
            'Fokale neurologische Defizite (z. B. Hemiparese, Aphasie)',
            'Hirnnervenparesen (insb. III, IV, VI mit Augenbewegungsstörungen; VII, VIII)',
            'Petechien und Purpura (nicht wegdrückbarer hämorrhagischer Ausschlag)',
            'Zeichen eines Hirnödems/erhöhten Hirndrucks (Cushing-Reflex: Hypertonie mit Bradykardie; Anisokorie)',
            'Stauungspapille bei der Funduskopie (meist Spätzeichen oder bei komplizierten Verläufen)',
            'Körperliche Zeichen einer Otitis media, Sinusitis oder Mastoiditis (hinweisend auf Pneumokokken)',
            'Ikterus (bei Listerien oder komplizierter Sepsis/DIC)'
          ],
          complications: [
            'Septischer Schock (insbesondere bei Meningokokken-Meningitis)',
            'DIC (disseminierte intravasale Koagulopathie) mit Hautnekrosen und Gliedmaßengangrän',
            'ARDS (akutes Atemnotsyndrom des Erwachsenen)',
            'Hirnödem und Einklemmung (z. B. unkale oder tonsilläre Herniation)',
            'Zerebrale Infarkte (arterielle oder venöse Thrombosen infolge von Vaskulitis)',
            'Subduralerguss oder Subduralempyem',
            'Hydrozephalus (aufgrund gestörter Liquorresorption oder Liquorabflussbehinderung)',
            'Hirnabszess (Sekundärinfektion oder Pneumokokken-Komplikation)',
            'Waterhouse-Friderichsen-Syndrom (akute Nebennierenrindeninsuffizienz durch bilaterale Nebennierenblutung)',
            'Dauerhafter Hörverlust oder Taubheit (insbesondere nach Pneumokokken-Meningitis durch cochleäre Beteiligung)',
            'Kognitive Defizite, Gedächtnisstörungen und Lernschwierigkeiten',
            'Epilepsie (aufgrund verbleibender epileptogener Herde)',
            'Persistierende Hirnnervenausfälle (z. B. Strabismus, Nystagmus, Fazialisparese)'
          ]
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
          onset: 'Hyperakut (innerhalb von Stunden fortschreitend)',
          symptoms: [
            { name: 'Hyperakuter Beginn', description: 'Zustand verschlechtert sich dramatisch innerhalb von Stunden. Hohes Fieber, Schüttelfrost, heftige Kopfschmerzen und wiederholtes Erbrechen als erste Zeichen.', severity: 'severe' },
            { name: 'Hämorrhagischer Ausschlag (Petechien und Purpura)', description: 'Anfangs kleine, wegdrückbare Flecken, entwickeln sich schnell (Minuten bis Stunden) zu Petechien (punktförmige Blutungen) und Purpura (großflächige, unregelmäßige Ekchymosen), die auf Druck NICHT verblassen (non-blanching rash / Glastest). Beginnt meist am Stamm und den unteren Extremitäten.', severity: 'severe' },
            { name: 'Septischer Schock und DIC', description: 'Kalte, zyanotische Extremitäten, marmorierte Haut, Tachykardie, Tachypnoe, Hypotonie, Oligurie/Anurie und Bewusstseinsstörung. Disseminierte intravasale Koagulopathie (DIC) führt zu ausgedehnten Hautnekrosen (Gangrän) und Multiorganversagen.', severity: 'severe' },
            { name: 'Waterhouse-Friderichsen-Syndrom', description: 'Akute Nebennierenrindeninsuffizienz infolge bilateraler hämorrhagischer Nekrose der Nebennieren, was zu therapierefraktärem Schock und Tod führt.', severity: 'severe' }
          ],
          physical_exam: [
            'Meningeale Zeichen (Nackensteifigkeit, Kernig, Brudzinski)',
            'Nicht wegdrückbare Petechien und Purpura an Haut und Konjunktiven',
            'Zeichen des Kreislaufkollapses und Schocks (Tachykardie, Hypotonie, verlängerte Kapillarfüllungszeit)',
            'Rasch fortschreitende Verschlechterung des Bewusstseins'
          ],
          complications: [
            'Septischer Schock und Multiorganversagen (MODS)',
            'Waterhouse-Friderichsen-Syndrom',
            'Disseminierte intravasale Koagulopathie (DIC)',
            'Amputationen aufgrund von Gliedmaßengangrän',
            'Hautnarben und Weichteilnekrosen',
            'Taubheit / Hörverlust',
            'Einklemmung (Herniation)'
          ]
        },
        diagnostics: {
          laboratory: [{ test: 'Liquor', finding: 'Eitrig', interpretation: '-' }, { test: 'PCR', finding: 'Positiv', interpretation: 'Schnell' }],
          microbiology: [{ test: 'Gram-Färbung', finding: 'Gram-negative Diplokokken', significance: 'Schnell' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2g i.v. alle 12 Stunden', duration: '7 Tage', note: 'NICE NG240 Empfehlung' }] },
          targeted: 'Ceftriaxon für 7 Tage. Prophylaxe für Kontaktpersonen: Ciprofloxacin (einmalig 500mg p.o.) oder Rifampicin.',
          supportive: ['Flüssigkeitstherapie', 'Schockmanagement', 'Anfallsmanagement', 'angemessene Schmerztherapie', 'Antipyretika'],
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
          incubation: 'Kurz (1-3 Tage)',
          onset: 'Akut (stürmischer Verlauf)',
          symptoms: [
            { name: 'Schwere eitrige Meningitis', description: 'Rasch einsetzender, vernichtender Kopfschmerz, hohes Fieber und frühzeitige Bewusstseinsstörung. Somnolenz, Delirium oder Koma sind häufig, ebenso ein früher Beginn generalisierter Krampfanfälle.', severity: 'severe' },
            { name: 'Prädisponierende Fokuszeichen', description: 'Häufig assoziiert mit gleichzeitiger Pneumonie (Husten, Dyspnoe, Brustschmerz), Otitis media (Ohrenschmerz, Hörverlust, Otorrhö) oder Sinusitis (Gesichtsschmerz, verstopfte Nase).', severity: 'moderate' },
            { name: 'Fokale neurologische Ausfälle', description: 'Hirnnervenlähmungen (insbesondere Augenbewegungs- und Hörnerven) und Hemiparesen sind aufgrund begleitender Vaskulitis oder kortikaler Venenthrombose häufig.', severity: 'severe' }
          ],
          physical_exam: [
            'Ausgeprägte meningeale Reizzeichen',
            'Bewusstseinsstörung (niedriger GCS), Koma',
            'Fokale neurologische Defizite (Parese, Aphasie)',
            'Hirnnervenlähmungen (III, IV, VI, VII, VIII)',
            'Otoskopie: Zeichen einer Otitis media (gerötetes, vorgewölbtes Trommelfell)',
            'Lungenkrepitation oder Dämpfung (Zeichen einer Pneumonie)'
          ],
          complications: [
            'Sensorineuraler Hörverlust oder Taubheit (hohe Rate durch Labyrinthitis/cochleäre Ossifikation)',
            'Hydrozephalus (aufgrund gestörter Liquorresorption oder Abflussbehinderung)',
            'Hirnabszess oder subdurales Empyem',
            'Zerebrale Vaskulitis und Infarkt',
            'Kognitive Defizite und Lernschwierigkeiten'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Liquor', finding: ['Eitrig, trüb', 'Glucose: erniedrigt (oft <40% der Blutglucose)', 'Protein: stark erhöht (oft >100 mg/dL)', 'Zellzahl: stark erhöht (oft >1000/µL)', 'Typ: überwiegend neutrophile Granulozyten (>80%)', 'Lactat: stark erhöht (>3.5 mmol/L)'], interpretation: '-' },
            { test: 'Blutkulturen', finding: 'Positiv', interpretation: '-' },
            { test: 'CRP', finding: 'Erhöht', interpretation: '-' },
            { test: 'Lactat', finding: 'Erhöht', interpretation: '-' },
            { test: 'Blutglukose', finding: 'Erniedrigt', interpretation: '-' }],
          microbiology: [{ test: 'Gram-Färbung', finding: 'Gram-positive Diplokokken', significance: '-' },
          { test: 'Latex-Agglutinationstest', finding: 'Positiv', significance: 'Schnell' },
          { test: 'PCR', finding: 'Positiv', significance: 'Schnell' },
          { test: 'Kultur', finding: 'Positiv', significance: '-' },
          { test: 'Auspitch_Test', finding: 'Positiv', significance: 'Schnell' },
          { test: 'Quellungstest', finding: 'Positiv', significance: 'Schnell' }],
          imaging: [{ test: 'CT', finding: ['Hirnödem', 'Hydrozephalus', 'Abszess'], interpretation: '-' }],
          other: [{ test: 'EEG', finding: 'Pathologisch', interpretation: '-' }]
        },
        therapy: {
          empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2g i.v. alle 12 Stunden', duration: '14 Tage', note: 'NICE NG240 Empfehlung' }, { drug: 'Dexamethason', dose: '10mg i.v. alle 6 Stunden', duration: '4 Tage', note: 'Fortsetzen, wenn Pneumokokken nachgewiesen werden!' }] },
          targeted: 'Ceftriaxon für 14 Tage. Bei nachgewiesener Resistenz: + Vancomycin/Rifampicin.',
          supportive: ['Hydratation', 'Flüssigkeitstherapie', 'Dehydratation', 'Schockmanagement', 'Anfallsmanagement', 'Antipyretika'],
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
          incubation: '1-4 Wochen (lang und variabel)',
          onset: 'Subakut, schleichend',
          symptoms: [
            { name: 'Subakuter Verlauf', description: 'Symptome entwickeln sich langsamer über Tage bis Wochen, nicht so stürmisch wie bei anderen bakteriellen Meningitiden. Mildes Fieber, Unwohlsein und Kopfschmerzen sind anfangs typisch und ähneln viralen Infekten.', severity: 'moderate' },
            { name: 'Rhombenzephalitis (Hirnstammbeteiligung)', description: 'Listerien haben einen spezifischen Tropismus für den Hirnstamm, was eine Hirnstammentzündung verursacht. Symptome sind Hirnnervenlähmungen (z.B. Fazialisparese, Dysphagie, Dysarthrie), Ataxie, Nystagmus, Tremor und zentrale Atemstörungen.', severity: 'severe' },
            { name: 'Fehlende Meningismuszeichen', description: 'Nackensteifigkeit und andere klassische meningeale Reizzeichen fehlen bei einem signifikanten Teil der Patienten (bis zu 30-40%), was die Frühdiagnose erschwert.', severity: 'severe' },
            { name: 'Atypische Präsentation bei Risikogruppen', description: 'Tritt hauptsächlich bei Schwangeren (grippeähnliche fieberhafte Erkrankung, führt aber zu Fruchttod oder Totgeburt), Neugeborenen, Älteren und Patienten mit zellulärem Immundefekt auf.', severity: 'severe' }
          ],
          physical_exam: [
            'Milde oder fehlende meningeale Reizzeichen',
            'Hirnstamm- und Kleinhirnzeichen: Ataxie, Nystagmus, Tremor, Dysarthrie',
            'Bilaterale oder asymmetrische Hirnnervenlähmungen (insbesondere VII, IX, X)',
            'Verwirrtheit, Delirium, fluktuierende Bewusstseinslage'
          ],
          complications: [
            'Hirnstamm-Mikroabszesse und Hirnabszess',
            'Hydrozephalus',
            'Fruchttod, Abort oder Frühgeburt bei Schwangeren',
            'Persistierende Hirnnervenlähmungen und Ataxie'
          ]
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
            { name: 'Meningeales Syndrom', description: 'Frontale oder retroorbitale Kopfschmerzen (oft als intensiv und pochend beschrieben), Fieber (typischerweise 38-40°C), ausgeprägte Photophobie (Lichtscheu), Phonophobie (Geräuschempfindlichkeit) und Nackensteifigkeit. Die Kopfschmerzen verschlimmern sich typischerweise bei Kopfbewegungen und werden durch helles Licht verstärkt.', severity: 'moderate' },
            { name: 'Klares Bewusstsein (Wichtigstes Unterscheidungsmerkmal)', description: 'Das wichtigste Unterscheidungsmerkmal zur Enzephalitis und bakteriellen Meningitis: Der Patient bleibt wach, voll orientiert, mit erhaltenen kognitiven Funktionen und ohne fokale neurologische Defizite. Obwohl die Patienten unwohl und gereizt wirken können, gibt es keine Verwirrtheit, Persönlichkeitsveränderung oder Bewusstseinsstörung.', severity: 'mild' },
            { name: 'Gastrointestinale Symptome', description: 'Übelkeit, wiederholtes Erbrechen (nicht schwallartig), Appetitlosigkeit und gelegentlich Durchfall. Besonders häufig bei Enterovirus-Ätiologie.', severity: 'mild' },
            { name: 'Systemische und erregerspezifische Zeichen', description: 'Enterovirus: makulopapulöser oder petechialer Ausschlag, Herpangina, Hand-Fuß-Mund-Krankheit, Pleurodynie (Bornholm-Krankheit), Halsschmerzen, Durchfall. HSV-2: gleichzeitige oder kürzliche genitale Herpesläsionen, sakrale Radikulitis (Harnverhalt). VZV: Varizellen- oder Zoster-Exanthem (kann Tage vor oder nach der Meningitis auftreten). Mumps: Parotitis und Orchitis.', severity: 'mild' },
            { name: 'Frühe Neutrophilenphase (Diagnostische Falle)', description: 'In den ersten 24-48 Stunden einer Enterovirus-Meningitis kann der Liquor eine Neutrophilen-Dominanz zeigen, die eine bakterielle Meningitis eng imitiert. Dies wandelt sich typischerweise innerhalb von 12-24 Stunden bei erneuter LP in eine Lymphozyten-Dominanz, aber das initiale Bild kann erhebliche diagnostische Unsicherheit verursachen.', severity: 'moderate' }
          ],
          physical_exam: [
            'Meningeale Reizzeichen vorhanden, aber milder als bei bakterieller Meningitis (Nackensteifigkeit, Kernig, Brudzinski können subtil sein)',
            'Positive Jolt-Akzentuierung des Kopfschmerzes (sensitiv auch bei milden klassischen Zeichen)',
            'Bewusstsein klar, Patient orientiert und kohärent (Schlüsselunterschied zur Enzephalitis!)',
            'Fieber (mäßig, typisch 38-40°C)',
            'Keine fokalen neurologischen Defizite (Fehlen von Hemiparese, Aphasie, Hirnnervenlähmungen)',
            'Erregerspezifische Befunde: Rachenerythem, Hautausschlag (Enterovirus), genitale Bläschen (HSV-2), vesikuläres Exanthem im Dermatom (VZV), Parotisschwellung (Mumps)',
            'Milde Konjunktivalinjektion möglich',
            'Funduskopie: normal (kein Papillenödem)'
          ],
          complications: [
            'Meningoenzephalitis (selten, Übergang zu Beteiligung des Hirnparenchyms mit Bewusstseinsveränderungen)',
            'Passagere Hirnnervenlähmungen (insbesondere VII)',
            'Fieberkrämpfe bei Kleinkindern',
            'Mollaret-Meningitis (rezidivierende benigne lymphozytäre Meningitis, typischerweise HSV-2)',
            'Transverse Myelitis (selten, vorwiegend bei Enterovirus D68/A71)',
            'Myokarditis oder Perikarditis (enteroviral)',
            'Postinfektiöses Erschöpfungssyndrom'
          ]
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
          incubation: 'Erregerabhängig variabel (HSV-Reaktivierung: variabel, Zeckenenzephalitis: 7-14 Tage, Arboviren: 4-14 Tage)',
          onset: 'Akut oder subakut (über Stunden bis Tage progredient)',
          symptoms: [
            { name: 'Bewusstseinsstörung und Veränderter Mentaler Status (Leitsymptom)', description: 'Das wichtigste Unterscheidungsmerkmal zur Meningitis. Manifestiert sich als Verwirrtheit, Konfusion, Desorientierung, Delirium, Persönlichkeits- und Verhaltensänderungen, Lethargie oder Koma.', severity: 'severe' },
            { name: 'Fieber und Kopfschmerzen', description: 'Hohes Fieber und diffuse, dumpfe Kopfschmerzen sind in nahezu allen Fällen (>90%) vorhanden, häufig begleitet von Übelkeit und Erbrechen.', severity: 'moderate' },
            { name: 'Herdzeichen (Fokale Neurologische Defizite)', description: 'Ausfälle entsprechend der Lokalisation der betroffenen Hirnareale: Hemiparese, Aphasie (Sprachstörung), Ataxie, sensorisches Defizit und Hirnnervenlähmungen.', severity: 'severe' },
            { name: 'Krampfanfälle', description: 'Häufig (20-30%), können fokal oder generalisiert (tonisch-klonisch) sein, oft als schwer kontrollierbare epileptische Anfälle.', severity: 'severe' },
            { name: 'Neuropsychiatrische Symptome', description: 'Agitation, Halluzinationen, Psychose und schwere Gedächtnisstörungen (retrograde und anterograde Amnesie – insbesondere bei Viren, die den Temporallappen befallen).', severity: 'severe' }
          ],
          physical_exam: [
            'Verminderte Vigilanz (GCS < 15, Somnolenz, Sopor, Koma)',
            'Kognitive Dysfunktion, Desorientierung, verwirrte Sprache',
            'Fokale motorische und sensorische neurologische Defizite (Hemiparese, Reflexasymmetrie, Babinski-Zeichen)',
            'Zeichen von Hirnnervenlähmungen (z. B. asymmetrische Gesichtsbewegung, Augenbewegungsstörungen)',
            'Mäßige, unsichere meningeale Reizzeichen (da die Entzündung primär im Parenchym stattfindet)'
          ],
          complications: [
            'Bleibende neurologische und kognitive Schäden (z. B. Aphasie, Parese, intellektueller Abbau)',
            'Sekundäre (postenzephalitische) Epilepsie',
            'Schweres Hirnödem mit Einklemmung (Herniation)',
            'Tod (unbehandeltes HSV-1 bis 70%, aber auch bei anderen neurotropen Viren erhebliche Mortalität)'
          ]
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
          incubation: 'Variabel (bei Primärinfektion Tage, aber meistens Reaktivierung eines latenten Virus)',
          onset: 'Akut, rasch progredient (entwickelt sich über Stunden bis Tage)',
          symptoms: [
            { name: 'Prodromalphase', description: 'Fieber, Kopfschmerzen, Übelkeit, Unwohlsein und Lethargie über 1-5 Tage vor Beginn der neurologischen Symptome.', severity: 'moderate' },
            { name: 'Persönlichkeits- und Verhaltensänderungen (Charakteristisch)', description: 'Durch die hämorrhagische Nekrose der frontotemporalen Lappen und des limbischen Systems treten früh bizarres Verhalten, Halluzinationen (häufig abstoßende Geruchs- oder Geschmackshalluzinationen), halluzinatorisches Delirium, Agitation und Psychose auf. Wird anfangs häufig als psychiatrische Erkrankung fehldiagnostiziert.', severity: 'severe' },
            { name: 'Schweres Kognitives Defizit und Amnesie', description: 'Anterograde Amnesie (Unfähigkeit, neue Erinnerungen zu speichern) und Wernicke-Typ sensorische Aphasie (Sprachverständnisstörung) sind hochcharakteristisch.', severity: 'severe' },
            { name: 'Herdzeichen und Krampfanfälle', description: 'Generalisierte oder fokale Anfälle (häufig als Temporallappenepilepsie mit olfaktorischer Aura), Hemiparese und Hirnnervenlähmungen.', severity: 'severe' }
          ],
          physical_exam: [
            'Somnolenz, Verwirrtheit, Halluzinationen oder Koma',
            'Aphasie (Sprachverständnis- und Sprachproduktionsstörung)',
            'Fokale neurologische Defizite (vorwiegend kontralaterale Hemiparese)',
            'Schwere Kurzzeitgedächtnisstörung bei Bedside-Testung',
            'Anisokorie oder Zeichen von Hirnnervenlähmungen'
          ],
          complications: [
            'Hirnödem und Temporallappenherniation (Unkuseinklemmung – plötzlicher Tod)',
            'Klüver-Bucy-Syndrom (bilaterale Temporallappenschädigung: Hyperoralität, Hypersexualität, Furchtlosigkeit, visuelle Agnosie)',
            'Bleibende, schwere anterograde Amnesie (Korsakoff-ähnlicher Zustand)',
            'Persistierende Aphasie und neurologische Defizite',
            'Tod (>70% ohne Behandlung, 20-30% auch bei frühzeitigem Acyclovir)'
          ]
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
          incubation: '7-14 Tage (nach Zeckenstich, selten 4-28 Tage)',
          onset: 'Charakteristisch biphasischer Verlauf',
          symptoms: [
            { name: '1. Phase (Virämische Phase)', description: 'Plötzlicher Beginn mit grippeähnlichen Symptomen: mäßiges Fieber, Müdigkeit, Kopfschmerzen, Myalgien, Arthralgien und Appetitlosigkeit. Dauer 2-7 Tage, gefolgt von einem vollständig symptomfreien Intervall von 1-3 Wochen.', severity: 'mild' },
            { name: '2. Phase (Neuroinvasive Phase)', description: 'Bei ca. 20-30% der Patienten kehrt das Fieber zurück (oft höher als in Phase 1) und neurologische Symptome entwickeln sich. Drei klinische Formen: Meningitis (milder, Kopfschmerzen und meningeale Zeichen), Meningoenzephalitis (Verwirrtheit, Ataxie, kognitive Störungen), Meningoenzephalomyelitis (Lähmungen – schwerste Form).', severity: 'severe' },
            { name: 'Schlaffe Lähmung (Petyhüdt paresis)', description: 'Charakteristische Schädigung der Motoneurone im Vorderhorn des Rückenmarks führt zu asymmetrischer, schlaffer Lähmung, die am häufigsten den Schultergürtel und die oberen Extremitäten betrifft (ähnlich der Poliomyelitis). Proximale Muskeln sind stärker betroffen als distale.', severity: 'severe' }
          ],
          physical_exam: [
            'Ausgeprägter feinwelliger Hand- und Zungentremor',
            'Ataxie, unsicheres Stehen und Gehen (Kleinhirnbeteiligung)',
            'Asymmetrische schlaffe Lähmung (vorwiegend Schultergürtel und Arme, mit abgeschwächten oder fehlenden Muskeleigenreflexen)',
            'Meningeale Reizzeichen in der zweiten Phase',
            'Bewusstseinsstörung (bei enzephalitischer Form)'
          ],
          complications: [
            'Bleibende schlaffe Lähmung (insbesondere der oberen Extremitäten und des Schultergürtels)',
            'Postenzephalitisches Syndrom (chronische Müdigkeit, Kopfschmerzen, Konzentrations- und Gedächtnisschwierigkeiten über Monate bis Jahre)',
            'Bleibende kognitive Defizite und Persönlichkeitsveränderungen',
            'Hirnnervenlähmungen (insbesondere VII, IX, X – Fazialisparese, Dysphagie)',
            'Zentrale Ateminsuffizienz (bei schwerer Myelitis – Beatmungspflicht)',
            'Sekundäre Epilepsie'
          ]
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
      {
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
          description: "Ein Hirnabszess ist eine bakterielle oder anaerobe Infektion, die von benachbarten Strukturen oder hämatogen verbreitet wird und rasch steigenden intrakraniellen Druck sowie fokale neurologische Symptome verursacht.",
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
            { test: 'Blutkultur', finding: 'Positiv', interpretation: 'Wichtig bei hämatogenem Ursprung' }
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
      },
      {
        id: 'tbc_meningitis',
        name: 'Tuberkulöse Meningitis',
        pathogen: { type: 'Mykobakterium', name: '<i>Mycobacterium tuberculosis</i>', gram: 'Säurefest', shape: 'Stäbchen' },
        epidemiology: {
          incidence: 'Häufigste Form der extrapulmonalen TB',
          risk_groups: ['Immungeschwächte (HIV)', 'Personen aus Endemiegebieten', 'Säuglinge', 'Alkoholiker'],
          seasonality: 'Keine',
          transmission: 'Hämatogene Streuung von einem primären Lungenherd'
        },
        pathomechanism: {
          steps: [
            'Hämatogene Streuung: Bakterien gelangen über den Blutkreislauf von einem primären Lungenherd ins Gehirn/Meningen.',
            'Rich-Foci: Kleine, verkäsende Herde (Tuberkulome) bilden sich im subkortikalen oder meningealen Raum.',
            'Ruptur: Die Herde reißen und setzen Bakterien und Antigene in den Subarachnoidalraum frei.',
            'Basales Exsudat: Ein dickes, gallertartiges, entzündliches Exsudat bildet sich an der Hirnbasis und umschließt Hirnnerven und Zisternen.',
            'Folge: Kommunizierender Hydrozephalus (gestörte Liquorresorption), Hirnnervenlähmungen (III, IV, VI, VII), Vaskulitis und Hirninfarkte.'
          ],
          virulence_factors: ['Cord-Faktor', 'Intrazelluläres Überleben']
        },
        clinical: {
          incubation: 'Wochen-Monate',
          onset: 'Subakut',
          symptoms: [
            { name: 'Prodromalphase (1-2 Wochen)', description: 'Langsamer, schleichender Beginn: Apathie, Persönlichkeitsveränderungen, leichtes Fieber, Kopfschmerzen, Übelkeit.', severity: 'moderate' },
            { name: 'Meningeale Phase (2-3 Wochen)', description: 'Nackensteifigkeit, Bewusstseinsstörung, Lethargie, Hirnnervenlähmungen (besonders VI, III, IV, VII).', severity: 'severe' },
            { name: 'Paralytische Phase', description: 'Schnelles Fortschreiten zum Koma, Hemiplegie, Dezerebrationsstarre. Ohne Behandlung tödlich.', severity: 'severe' }
          ],
          physical_exam: ['Nackensteifigkeit', 'Bewusstseinsstörung', 'Hirnnervenlähmungen', 'Stauungspapille'],
          complications: ['Hydrozephalus', 'Hirninfarkt', 'Bleibende neurologische Schäden', 'SIADH']
        },
        diagnostics: {
          laboratory: [
            { test: 'Liquor', finding: 'Lymphozytäre Pleozytose, SEHR hohes Protein (>1 g/L), SEHR niedrige Glukose (<2.2 mmol/L)', interpretation: 'Charakteristische Trias!' },
            { test: 'Liquor-ADA', finding: 'Erhöht', interpretation: 'Adenosin-Desaminase, hilft bei der Diagnose' }
          ],
          imaging: [
            { modality: 'MRT/CT mit Kontrastmittel', finding: 'Basales meningeales Enhancement, Hydrozephalus, Tuberkulome', significance: 'Diagnostisch' }
          ],
          microbiology: [
            { test: 'Liquor Ziehl-Neelsen', finding: 'Säurefeste Stäbchen', significance: 'Geringe Sensitivität (<20%)' },
            { test: 'Liquor-Kultur', finding: 'M. tuberculosis', significance: 'Goldstandard, aber langsam (Wochen)' },
            { test: 'Liquor-PCR (GeneXpert)', finding: 'MTB-DNA', significance: 'Schnell, sensitiv' }
          ]
        },
        differential: [
          { disease: 'Kryptokokken-Meningitis', distinguishing: 'CrAg-Test, niedrigeres Protein' },
          { disease: 'Meningeosis carcinomatosa', distinguishing: 'Zytologie, bekannter Tumor' },
          { disease: 'Neurosyphilis', distinguishing: 'Serologie, Liquor-VDRL' }
        ],
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'RIPE (Rifampicin, Isoniazid, Pyrazinamid, Ethambutol)', dose: 'Standarddosis', duration: '9-12 Monate', note: 'Längere Behandlung erforderlich' },
              { drug: '+ Dexamethason', dose: 'i.v./p.o.', duration: '6-8 Wochen, dann ausschleichen', note: 'Senkt Mortalität! Obligatorisch!' }
            ]
          },
          targeted: 'Therapieanpassung nach Resistenztestung.',
          supportive: ['Hirndruckmanagement', 'VP-Shunt (bei Hydrozephalus)'],
          prevention: ['BCG-Impfung', 'LTBI-Behandlung']
        },
        prognosis: {
          mortality: 'Mit Behandlung 20-30%, ohne Behandlung 100%',
          prognostic_scores: ['MRC-Stadieneinteilung'],
          factors: 'Behandlungsverzögerung, Grad der Bewusstseinsstörung, Alter'
        }
      }
    ]
  }
});
