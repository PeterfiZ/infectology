Object.assign(window.diseases, {
  childhood: {
    name: 'Kinderkrankheiten',
    icon: '🧸',
    color: '#f472b6',
    diseases: [
      {
        id: 'measles',
        name: 'Masern (Morbilli)',
        pathogen: { type: 'Virus', name: '<i>Masernvirus (Measles morbillivirus)</i>', gram: 'ssRNA, Paramyxoviridae', shape: 'pleomorph' },
        epidemiology: {
          incidence: 'Epidemisch in ungeimpften Populationen',
          risk_groups: ['Ungeimpfte', 'Immungeschwächte'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion (hoch ansteckend! R0=12-18)'
        },
        pathomechanism: {
          steps: [
            'Eintritt und Replikation: Das Virus dringt über das respiratorische Epithel und Immunzellen (CD150-Rezeptor) ein und vermehrt sich in regionalen Lymphknoten.',
            'Virämie: Nach einer primären Virämie vermehrt sich das Virus im retikuloendothelialen System (Leber, Milz, Knochenmark), was zu einer massiven sekundären Virämie führt, die Haut, Bindehaut und Atemwege erreicht.',
            'Gewebeschaden: Die Fusion infizierter Zellen führt zur Bildung von Warthin-Finkeldey-Riesenzellen. Der Ausschlag ist das Ergebnis einer T-Zell-Immunantwort gegen virusinfizierte Endothelzellen.',
            'Immunsuppression: Das Virus verursacht eine vorübergehende, aber schwere Immunsuppression (Anergie), die Wochen bis Monate andauern kann und für sekundäre bakterielle Infektionen (z.B. Pneumonie, Otitis) prädisponiert.'
          ],
          virulence_factors: ['Hämagglutinin', 'Fusionsprotein']
        },
        clinical: {
          incubation: '10-14 Tage',
          onset: 'Prodromalstadium (Fieber, Katarrh)',
          symptoms: [
            { name: 'Prodrom (3K: Katarrh, Konjunktivitis, Husten)', description: 'Hohes Fieber (>40°C), Husten, Schnupfen und Konjunktivitis sind bei fast 100% der Fälle vor dem Ausschlag vorhanden.', severity: 'moderate' },
            { name: 'Koplik-Flecken', description: 'Pathognomonische, salzkornartige weiße Flecken an der Wangenschleimhaut (60-70%), die vor dem Ausschlag erscheinen und innerhalb von 1-2 Tagen verblassen.', severity: 'mild' },
            { name: 'Ausschlag (Exanthem)', description: 'Makulopapulöser Ausschlag, der hinter den Ohren beginnt und sich auf Gesicht, Rumpf und Gliedmaßen ausbreitet (kraniokaudal). Die Läsionen konfluieren oft und verblassen in der Reihenfolge ihres Auftretens, wobei sie eine bräunliche Pigmentierung und feine Schuppung hinterlassen.', severity: 'moderate' }
          ],
          physical_exam: ['Koplik-Flecken', 'Exanthem', 'Fieber', 'Konjunktivitis'],
          complications: ['Otitis media', 'Riesenzellpneumonie', 'Enzephalitis', 'SSPE (Jahre später)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Leukopenie', interpretation: '-' }],
          microbiology: [
            { test: 'IgM-Serologie', finding: 'Positiv (nach Ausschlag)', significance: 'Diagnostisch' },
            { test: 'PCR', finding: 'RNA (Rachen, Urin)', significance: 'Frühphase' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Fiebersenkung, Flüssigkeit' }] },
          targeted: 'Vitamin-A-Gabe senkt Morbidität/Mortalität (WHO-Empfehlung).',
          prevention: ['MMR-Impfung (15 Monate, 11 Jahre)']
        },
        guidelines: {
          diagnosis: [
            'Klinischer Verdacht: Fieber + Husten/Schnupfen/Konjunktivitis + Koplik-Flecken.',
            'Bestätigung: Anti-Masern-IgM-Serologie.'
          ],
          treatment_indications: [
            'In allen Fällen supportive Therapie. Vitamin-A-Gabe zur Reduktion von Komplikationen empfohlen.'
          ]
        },
        prognosis: { mortality: 'Niedrig in Industrieländern, hoch in Entwicklungsländern (Pneumonie)', prognostic_scores: [], factors: 'Alter, Impfstatus' }
      },
      {
        id: 'mumps',
        name: 'Mumps (Parotitis epidemica)',
        pathogen: { type: 'Virus', name: '<i>Mumpsvirus (Mumps orthorubulavirus)</i>', gram: 'ssRNA, Paramyxoviridae', shape: 'pleomorph' },
        epidemiology: {
          incidence: 'In Ungeimpften',
          risk_groups: ['Ungeimpfte'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion, Speichel'
        },
        pathomechanism: {
          steps: [
            'Das Virus gelangt per Tröpfcheninfektion in die oberen Atemwege und vermehrt sich in den Epithelzellen.',
            'Eine Virämie verbreitet das Virus zu den Zielorganen: Speicheldrüsen (hauptsächlich Parotis), ZNS, Hoden, Pankreas und Ovarien.',
            'Es verursacht Schwellungen, interstitielle Ödeme und lymphozytäre Infiltration in den betroffenen Drüsen.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '16-18 Tage',
          onset: 'Akut',
          symptoms: [
            { name: 'Parotitis', description: 'Schmerzhafte Schwellung der Ohrspeicheldrüse (95% der symptomatischen Fälle), anfangs einseitig, oft beidseitig werdend. Das Ohrläppchen wird angehoben, Kauen ist schmerzhaft.', severity: 'moderate' },
            { name: 'Fieber', description: 'Mäßiges Fieber, Kopfschmerzen und Myalgie während der Prodromalphase.', severity: 'mild' },
            { name: 'Orchitis', description: 'Hodenentzündung (20-30% der postpubertären Männer), gekennzeichnet durch schmerzhafte Schwellung, führt selten zu Sterilität.', severity: 'severe' }
          ],
          physical_exam: ['Parotisschwellung (Ohrläppchen steht ab)', 'Hodenschwellung/-schmerz'],
          complications: ['Meningitis (aseptisch)', 'Orchitis (Sterilität selten)', 'Pankreatitis', 'Taubheit']
        },
        diagnostics: {
          laboratory: [{ test: 'Amylase', finding: 'Erhöht (Speichel/Pankreas-Ursprung)', interpretation: '-' }],
          microbiology: [{ test: 'IgM-Serologie', finding: 'Positiv', significance: 'Diagnostisch' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Schmerzlinderung, Umschläge' }] },
          targeted: 'Keine.',
          prevention: ['MMR-Impfung']
        },
        guidelines: {
          diagnosis: [
            'Klinischer Verdacht: Akute, schmerzhafte Ohrspeicheldrüsenschwellung.',
            'Bestätigung: Anti-Mumps-IgM-Serologie.'
          ],
          treatment_indications: [
            'Supportive Therapie. Bei Orchitis Bettruhe, Hodenkühlung, NSAID.'
          ]
        },
        prognosis: { mortality: 'Sehr niedrig', prognostic_scores: [], factors: 'Alter, Impfung' }
      },
      {
        id: 'rubella',
        name: 'Röteln (Rubella)',
        pathogen: { type: 'Virus', name: '<i>Rötelnvirus (Rubella virus)</i>', gram: 'ssRNA, Matonaviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Selten (wegen Impfung)',
          risk_groups: ['Ungeimpfte', 'Schwangere (Fötus!)'],
          seasonality: 'Frühling',
          transmission: 'Tröpfcheninfektion'
        },
        pathomechanism: {
          steps: [
            'Eintritt: Das Virus dringt durch die Nasopharynxschleimhaut ein, wandert zu den regionalen Lymphknoten und vermehrt sich dort.',
            'Virämie: Das Virus gelangt über den Blutkreislauf zu Haut und Gelenken. Der Ausschlag und die Gelenksymptome sind Immunkomplex-vermittelt.',
            'Teratogenität: Während der Schwangerschaft durchdringt das Virus die Plazenta, hemmt die Mitose in fötalen Zellen und induziert Apoptose, was zu schweren angeborenen Defekten führt (Kongenitales Röteln-Syndrom).'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '14-21 Tage',
          onset: 'Mild',
          symptoms: [
            { name: 'Ausschlag (Exanthem)', description: 'Feinfleckiger, hellrosa makulopapulöser Ausschlag, der im Gesicht beginnt, sich schnell nach unten ausbreitet und innerhalb von 3 Tagen spurlos verschwindet.', severity: 'mild' },
            { name: 'Lymphadenopathie', description: 'Charakteristisch ist eine schmerzhafte Schwellung der okzipitalen und retroaurikulären Lymphknoten.', severity: 'moderate' },
            { name: 'Arthralgie/Arthritis', description: 'Gelenkschmerzen oder -entzündung, häufig bei erwachsenen Frauen (bis zu 70%).', severity: 'mild' },
            { name: 'Forchheimer-Flecken', description: 'Petechien am weichen Gaumen (unspezifisch, können aber vorkommen).', severity: 'mild' }
          ],
          physical_exam: ['Lymphknotenschwellung (Nacken)', 'Ausschlag'],
          complications: ['Kongenitales Röteln-Syndrom (CRS): Herzfehler, Katarakt, Taubheit', 'Arthritis', 'Enzephalitis (selten)']
        },
        diagnostics: {
          microbiology: [{ test: 'IgM-Serologie', finding: 'Positiv', significance: 'Diagnostisch' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: '-' }] },
          targeted: 'Keine.',
          prevention: ['MMR-Impfung', 'Screening von Schwangeren']
        },
        guidelines: {
          diagnosis: [
            'Klinischer Verdacht: Leichter Ausschlag + charakteristische retroaurikuläre/okzipitale Lymphknotenschwellung.',
            'Bestätigung: Anti-Röteln-IgM-Serologie. In der Schwangerschaft ist die Diagnose kritisch!'
          ],
          treatment_indications: [
            'Supportive Therapie. Hauptziel ist die Prävention des Kongenitalen Röteln-Syndroms.'
          ]
        },
        prognosis: { mortality: 'Gut, außer CRS' }
      },
      {
        id: 'scarlatina',
        name: 'Scharlach',
        pathogen: { type: 'Bakterium', name: '<i>Streptococcus pyogenes</i> (GAS)', gram: 'Gram-positiv', shape: 'Ketten' },
        epidemiology: {
          incidence: 'Häufig im Kindesalter',
          risk_groups: ['5-15 Jährige'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion'
        },
        pathomechanism: {
          steps: [
            'Kolonisation: Streptococcus pyogenes (GAS) besiedelt den Rachen durch Tröpfcheninfektion und verursacht eine Pharyngitis.',
            'Toxinproduktion: Das Bakterium produziert erythrogenes Toxin (Superantigen), wenn es von einem Bakteriophagen infiziert ist.',
            'Systemische Wirkung: Das Toxin gelangt in den Blutkreislauf und verursacht eine generalisierte Kapillarerweiterung und eine entzündliche Hautreaktion bei Personen ohne Antitoxin-Immunität.'
          ],
          virulence_factors: ['Erythrogene Toxine (SpeA, B, C)']
        },
        clinical: {
          incubation: '2-5 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Halsschmerzen', description: 'Plötzlich einsetzende starke Halsschmerzen, Schluckbeschwerden, oft begleitet von Erbrechen.', severity: 'moderate' },
            { name: 'Fieber', description: 'Hohes Fieber und Schüttelfrost.', severity: 'moderate' },
            { name: 'Ausschlag (Exanthem)', description: 'Diffuser roter Ausschlag mit "Sandpapier"-Textur, der auf Druck verblasst. In den Hautfalten erscheinen dunklere Linien (Pastia-Linien). Charakteristisch ist eine Abschuppung (Desquamation) an Handflächen und Fußsohlen während der Genesung.', severity: 'moderate' },
            { name: 'Zunge', description: 'Anfangs weiß belegt ("weiße Erdbeerzunge"), nach Ablösen des Belags rot und papilliert ("Himbeerzunge").', severity: 'moderate' }
          ],
          physical_exam: ['Pharynxhyperämie', 'Himbeerzunge', 'Periorale Blässe (Filatow-Dreieck)', 'Pastia-Linien (in den Beugen)', 'Schuppung (später)'],
          complications: ['Rheumatisches Fieber', 'Glomerulonephritis', 'Peritonsillarabszess']
        },
        diagnostics: {
          microbiology: [
            { test: 'Rachenabstrich-Kultur', finding: 'Strep. pyogenes', significance: 'Goldstandard' },
            { test: 'Schnelltest (Strep A)', finding: 'Positiv', significance: 'Schnell' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Penicillin V', dose: 'p.o.', duration: '10 Tage', note: 'Erste Wahl' },
              { drug: 'Amoxicillin', dose: 'p.o.', duration: '10 Tage', note: 'Alternative' },
              { drug: 'Makrolid (z.B. Azithromycin)', dose: 'p.o.', duration: '5 Tage', note: 'Bei Penicillinallergie' }
            ]
          },
          targeted: 'Penicillin.',
          prevention: ['Hygiene', 'Kein Impfstoff']
        },
        guidelines: {
          diagnosis: [
            'Klinischer Verdacht (Centor/FeverPAIN Score) + Strep-A-Schnelltest oder Rachenabstrich-Kultur.'
          ],
          treatment_indications: [
            'Jede bestätigte GAS-Pharyngitis/Tonsillitis sollte behandelt werden, um rheumatisches Fieber zu verhindern.'
          ],
          first_line: ['Penicillin V für 10 Tage. Bei Allergie Makrolid.']
        },
        prognosis: { mortality: 'Mit Behandlung ausgezeichnet' }
      },
      {
        id: 'mononucleosis',
        name: 'Infektiöse Mononukleose (Pfeiffer-Drüsenfieber)',
        pathogen: { type: 'Virus', name: '<i>Epstein-Barr-Virus</i> (EBV)', gram: 'dsDNA, Herpesviridae (HHV-4)', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Jugendliche/junge Erwachsene (90% bis zum Erwachsenenalter durchgemacht)',
          risk_groups: ['Junge Leute'],
          seasonality: 'Keine',
          transmission: 'Speichel (Kuss), Tröpfcheninfektion'
        },
        pathomechanism: {
          steps: [
            'Das EBV verbreitet sich über den Speichel und infiziert die Epithelzellen des Oropharynx.',
            'Anschließend infiziert es B-Lymphozyten, etabliert eine latente Infektion und immortalisiert sie.',
            'Der Körper entwickelt eine starke zelluläre Immunantwort (CD8+ T-Zellen), was zu atypischen Lymphozyten ("Virozyten") im Blut und einer Vergrößerung der lymphatischen Organe führt.'
          ],
          virulence_factors: ['LMP, EBNA Proteine']
        },
        clinical: {
          incubation: '4-6 Wochen',
          onset: 'Schleichend',
          symptoms: [
            { name: 'Halsschmerzen', description: 'Schwere Pharyngitis, oft mit pseudomembranösen Belägen auf den Mandeln.', severity: 'severe' },
            { name: 'Fieber', description: 'Anhaltendes Fieber, das bis zu 10-14 Tage dauern kann.', severity: 'moderate' },
            { name: 'Lymphadenopathie', description: 'Generalisierte, symmetrische Lymphknotenschwellung, die besonders die hintere zervikale Kette betrifft.', severity: 'moderate' },
            { name: 'Müdigkeit (Fatigue)', description: 'Ausgeprägte Schwäche und Müdigkeit, die Wochen bis Monate anhalten kann.', severity: 'moderate' }
          ],
          physical_exam: ['Generalisierte Lymphadenopathie (zervikale Dominanz)', 'Hepatosplenomegalie', 'Tonsillenbeläge', 'Ampicillin-Exanthem (wenn AB gegeben wurde)'],
          complications: ['Milzruptur (selten, aber gefährlich)', 'Atemwegsobstruktion (Tonsillen)', 'Hepatitis', 'Burkitt-Lymphom (spät, endemisch)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blutbild', finding: 'Lymphozytose, atypische mononukleäre Zellen (>10%)', interpretation: 'Charakteristisch' },
            { test: 'Leberenzyme', finding: 'Leichte Erhöhung', interpretation: 'Häufig' }
          ],
          microbiology: [
            { test: 'Monospot-Test', finding: 'Heterophile Antikörper positiv', significance: 'Schnell (bei Kindern oft negativ!)' },
            { test: 'EBV-Serologie', finding: 'VCA IgM+, EBNA- (akut)', significance: 'Bestätigung' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Ruhe, Flüssigkeit' }] },
          targeted: 'Keine. Steroide nur bei Atemwegsobstruktion.',
          supportive: ['Körperliche Schonung (Sportverbot für 3-4 Wochen wegen Milzrupturgefahr!)'],
          prevention: ['Hygiene']
        },
        guidelines: {
          diagnosis: [
            'Klinische Trias (Fieber, Halsschmerzen, LK-Schwellung) + Blutbild (atypische Lymphozyten) + Serologie (Monospot oder EBV-spezifisches IgM/IgG).'
          ],
          treatment_indications: [
            'Supportiv. Amoxicillin/Ampicillin vermeiden (Ausschlag).',
            'Körperliche Schonung zur Vermeidung einer Milzruptur.'
          ]
        },
        prognosis: { mortality: 'Sehr niedrig' }
      },
       {
        id: 'mononucleosis_syndrome',
        name: 'Mononukleose-Syndrom (CMV, Toxoplasma, HIV)',
        pathogen: { type: 'Gemischt', name: '<i>Zytomegalievirus (CMV), Toxoplasma gondii, HIV</i>', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Häufig, heterophil-negative Mononukleose-Fälle',
          risk_groups: ['Sexuell aktive junge Erwachsene (CMV, HIV)', 'Katzenhalter/Rohfleischkonsumenten (Toxo)'],
          seasonality: 'Keine',
          transmission: 'Körperflüssigkeiten (CMV, HIV), fäkal-oral/Fleisch (Toxo)'
        },
        pathomechanism: {
          steps: [
            'Die Erreger (CMV, Toxoplasma, HIV) verursachen eine systemische Infektion, die eine Immunantwort auslöst.',
            'Ähnlich wie EBV aktivieren sie T-Lymphozyten (atypische Lymphozyten), immortalisieren aber keine B-Zellen (im Gegensatz zu EBV).',
            'Die Symptome resultieren aus der Immunantwort des Wirts.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: 'Variabel (CMV 20-60 Tage, HIV 2-4 Wochen, Toxo 5-23 Tage)',
          onset: 'Schleichend',
            symptoms: [
            { name: 'Fieber', description: 'Anhaltendes Fieber (kann Wochen dauern), oft das Leitsymptom.', severity: 'moderate' },
            { name: 'Lymphadenopathie', description: 'Generalisierte Lymphknotenschwellung, aber weniger ausgeprägt als bei EBV.', severity: 'mild' },
            { name: 'Fehlende/Milde Pharyngitis', description: 'Im Gegensatz zu EBV fehlen Halsschmerzen und Tonsillitis oft oder sind sehr mild (außer bei akutem HIV, wo Ulzera auftreten können).', severity: 'moderate' },
            { name: 'Hepatomegalie/Splenomegalie', description: 'Kann vorkommen, aber seltener und milder als bei EBV.', severity: 'mild' }
          ],
          physical_exam: ['Fieber', 'Milde Lymphadenopathie', 'Exanthem (häufig bei HIV)', 'Fehlende Pharyngitis (CMV/Toxo)'],
          complications: ['Hepatitis', 'Pneumonie', 'Guillain-Barré-Syndrom', 'Kongenitale Infektion (in der Schwangerschaft!)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blutbild', finding: 'Lymphozytose, atypische mononukleäre Zellen', interpretation: 'Ähnlich wie EBV' },
            { test: 'Leberenzyme', finding: 'Leichte Erhöhung', interpretation: 'Häufig' }
          ],
          microbiology: [
            { test: 'Monospot-Test', finding: 'NEGATIV', significance: 'Hauptunterschied zu EBV!' },
            { test: 'CMV-Serologie', finding: 'IgM positiv', significance: 'CMV-Bestätigung' },
            { test: 'Toxoplasma-Serologie', finding: 'IgM positiv', significance: 'Toxoplasma-Bestätigung' },
            { test: 'HIV-Test', finding: 'Ag/Ak positiv / PCR', significance: 'Ausschluss einer akuten HIV-Infektion obligatorisch!' }
          ]
        },
        differential: [
          { disease: 'EBV-Mononukleose', distinguishing: 'Schwere Pharyngitis, Monospot positiv' },
          { disease: 'Streptokokken-Pharyngitis', distinguishing: 'Eitrige Mandeln, Leukozytose (keine Lymphozytose)' },
          { disease: 'Lymphom', distinguishing: 'Fieber, Gewichtsverlust, Nachtschweiß, fixierte Lymphknoten' }
        ],
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Symptomatische Behandlung' }] },
          targeted: 'CMV/Toxo: bei Immunkompetenten meist keine Behandlung. HIV: ART-Beginn. Spezielle Behandlung in der Schwangerschaft!',
          prevention: ['Hygiene', 'Safer Sex', 'Fleisch durchbraten']
        },
        guidelines: {
          diagnosis: [
            'Mononukleose-Syndrom (Fieber, Lymphozytose) mit negativem Monospot-Test ("Heterophil-negative Mononukleose").',
            'Differenzierung: CMV (älter, Fieber dominiert), Toxoplasma (zervikale LK), Akutes HIV (Ausschlag, Risikoverhalten).'
          ],
          treatment_indications: [
            'Supportiv. Spezifische Therapie (Ganciclovir, Pyrimethamin/Sulfadiazin) bei Immunsupprimierten oder schwerer Organbeteiligung.'
          ]
        },
        prognosis: { mortality: 'Ausgezeichnet bei Immunkompetenten' }
      },
      {
        id: 'exanthema_subitum',
        name: 'Exanthema subitum (Drei-Tage-Fieber / Roseola infantum)',
        pathogen: { type: 'Virus', name: '<i>Humanes Herpesvirus 6</i> (HHV-6)', gram: 'dsDNA, Herpesviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Säuglinge/Kleinkinder (6 Monate - 2 Jahre), fast alle machen es durch',
          risk_groups: ['Säuglinge'],
          seasonality: 'Ganzjährig',
          transmission: 'Speichel (von asymptomatischen erwachsenen Trägern)'
        },
        pathomechanism: {
          steps: [
            'Das HHV-6-Virus verbreitet sich durch Tröpfchen und etabliert eine lebenslange latente Infektion.',
            'Während der Primärinfektion vermehrt sich das Virus in den Speicheldrüsen und Lymphozyten.',
            'Eine Virämie verursacht hohes Fieber, und der Ausschlag erscheint durch einen immunvermittelten Mechanismus, wenn das Fieber abrupt abklingt.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '5-15 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Hohes Fieber', description: 'Plötzlich einsetzendes, 3-5 Tage andauerndes hohes Fieber (39-40°C), während der Allgemeinzustand des Kindes überraschend gut ist.', severity: 'moderate' },
            { name: 'Ausschlag (Exanthem)', description: 'Gleichzeitig mit oder unmittelbar nach dem kritischen Fieberabfall erscheinen rosafarbene, makulopapulöse Ausschläge am Rumpf und dann am Hals.', severity: 'mild' },
            { name: 'Nagayama-Flecken', description: 'Ulzerationen oder Papeln am weichen Gaumen und am Zäpfchenansatz.', severity: 'mild' }
          ],
          physical_exam: ['Fieber', 'Nagayama-Flecken (am Zäpfchenansatz)', 'Zervikale/okzipitale Lymphadenopathie', 'Ausschlag (später)'],
          complications: ['Fieberkrampf (häufige Ursache!)', 'Enzephalitis (selten)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Leukopenie', interpretation: '-' }],
          microbiology: [{ test: 'Klinisches Bild', finding: 'Ausschlag nach Fieber', significance: 'Diagnostisch' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Fiebersenkung' }] },
          targeted: 'Keine.',
          prevention: ['-']
        },
        guidelines: {
          diagnosis: [
            'Charakteristisches klinisches Bild: 3-5 Tage hohes Fieber, dann Ausschlag nach Entfieberung.'
          ],
          treatment_indications: [
            'Supportiv. Vorbereitung/Behandlung von Fieberkrämpfen wichtig.'
          ]
        },
        prognosis: { mortality: 'Ausgezeichnet' }
      },
      {
        id: 'varicella',
        name: 'Windpocken (Varizellen)',
        pathogen: { type: 'Virus', name: '<i>Varizella-Zoster-Virus</i> (VZV)', gram: 'dsDNA, Herpesviridae (HHV-3)', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Sehr häufig im Kindesalter (Ungeimpfte)',
          risk_groups: ['Ungeimpfte Kinder', 'Immungeschwächte', 'Schwangere', 'Erwachsene (schwerer)'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion, Bläscheninhalt (aerogen!)'
        },
        pathomechanism: {
          steps: [
            'Eintritt: Das VZV dringt über die Atemwege ein und vermehrt sich in den regionalen Lymphknoten.',
            'Virämie: Nach einer primären Virämie vermehrt sich das Virus in Leber und Milz, dann verbreitet eine sekundäre T-Zell-assoziierte Virämie es auf Haut und Schleimhäute.',
            'Hautläsionen: Das Virus infiziert Epithelzellen in der Haut und verursacht intraepidermale Bläschen und Nekrosen.',
            'Latenz: Nach der Infektion zieht sich das Virus entlang der sensorischen Nerven in die Spinalganglien zurück, wo es latent verbleibt.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '10-21 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Ausschlag (Exanthem)', description: 'Juckender, polymorpher Ausschlag (Makeln, Papeln, Vesikel, Krusten), der in Wellen auftritt, sodass alle Stadien gleichzeitig sichtbar sind ("Sternenhimmel"). Frische Bläschen ähneln einem "Tautropfen auf einem Rosenblatt".', severity: 'moderate' },
            { name: 'Fieber', description: 'Mäßiges Fieber, das mit dem Auftreten des Ausschlags einhergeht.', severity: 'mild' },
            { name: 'Enanthem', description: 'Schmerzhafte Bläschen auf der Mundschleimhaut.', severity: 'moderate' }
          ],
          physical_exam: ['Polymorphe Exantheme (auch auf der Kopfhaut!)', 'Fieber', 'Lymphadenopathie'],
          complications: ['Bakterielle Superinfektion (Impetiginisierung)', 'Zerebellitis (Ataxie)', 'Pneumonie (Erwachsene)', 'Enzephalitis', 'Reye-Syndrom (Aspirin!)']
        },
        diagnostics: {
          microbiology: [{ test: 'Klinisches Bild', finding: 'Charakteristisch', significance: 'Diagnostisch' }, { test: 'PCR', finding: 'VZV-DNA', significance: 'In unsicheren Fällen' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Kühlende Lotionen NICHT empfohlen (Superinfektion), eher Puder oder nichts. Juckreizstillung.' }] },
          targeted: 'Acyclovir (für Risikogruppen, Erwachsene, Immunsupprimierte).',
          prevention: ['Varizellen-Impfung (empfohlen/Pflicht)']
        },
        guidelines: {
          diagnosis: [
            'Klinisches Bild: Polymorphe, juckende Ausschläge, die gleichzeitig in mehreren Stadien vorhanden sind.'
          ],
          treatment_indications: [
            'Bei gesunden Kindern supportiv. Acyclovir empfohlen: >12 Jahre, chronische Haut-/Lungenkrankheit, Steroideinnahme, Erwachsene, Schwangere.'
          ],
          prevention: ['Impfung. Postexpositionsprophylaxe (Impfung oder VZIG).']
        },
        prognosis: { mortality: 'Niedrig, aber Komplikationen kommen vor' }
      },
      {
        id: 'herpes_zoster',
        name: 'Gürtelrose (Herpes Zoster)',
        pathogen: { type: 'Virus', name: '<i>Varizella-Zoster-Virus</i> (VZV) Reaktivierung', gram: 'dsDNA', shape: '-' },
        epidemiology: {
          incidence: 'Hauptsächlich Ältere, aber auch immunsupprimierte Kinder',
          risk_groups: ['Immungeschwächte', 'Frühere Varizellen'],
          seasonality: 'Keine',
          transmission: 'Bläscheninhalt infektiös (kann Varizellen bei Seronegativen verursachen)'
        },
        pathomechanism: {
          steps: [
            'Latentes VZV reaktiviert sich in den sensorischen Ganglien (z.B. aufgrund von Immunsuppression oder Alterung).',
            'Das Virus wandert entlang der Axone der sensorischen Nerven zur Haut.',
            'Es verursacht Entzündungen, Schmerzen und einen vesikulären Ausschlag im entsprechenden Dermatom.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '-',
          onset: 'Beginnt mit Schmerzen',
          symptoms: [
            { name: 'Schmerz', description: 'Prodromaler brennender, stechender Schmerz im betroffenen Dermatom, der dem Ausschlag um Tage vorausgehen kann.', severity: 'severe' },
            { name: 'Ausschlag (Exanthem)', description: 'Gruppierte, schmerzhafte Bläschen auf erythematösem Grund, streng einseitig und die Mittellinie nicht überschreitend.', severity: 'moderate' }
          ],
          physical_exam: ['Dermatomale Verteilung der Bläschen (überschreitet nicht die Mittellinie)'],
          complications: ['Postherpetische Neuralgie (PHN)', 'Zoster ophthalmicus (Auge)', 'Ramsay-Hunt-Syndrom (Ohr/Gesichtsnerv)']
        },
        diagnostics: {
          microbiology: [{ test: 'Klinisches Bild', finding: 'Charakteristisch', significance: 'Diagnostisch' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Acyclovir', dose: '5x800mg p.o.', duration: '7 Tage', note: 'Innerhalb von 72 Stunden beginnend' }, { drug: 'Valacyclovir', dose: '3x1000mg p.o.', duration: '7 Tage', note: 'Bessere Bioverfügbarkeit' }] },
          targeted: 'Virostatikum + Schmerztherapie.',
          prevention: ['Zoster-Impfstoff (für Ältere)']
        },
        guidelines: {
          diagnosis: [
            'Klinisches Bild: Einseitiger, dem Dermatom entsprechender vesikulärer Ausschlag, oft mit prodromalen Schmerzen.'
          ],
          treatment_indications: [
            'Antivirale Behandlung (Acyclovir, Valacyclovir) innerhalb von 72 Stunden reduziert die Schwere der Symptome und das Risiko einer postherpetischen Neuralgie (PHN).',
            'Bei Zoster ophthalmicus ist ein dringendes augenärztliches Konsil erforderlich.'
          ]
        },
        prognosis: { mortality: 'Niedrig, PHN beeinträchtigt Lebensqualität' }
      },
      {
        id: 'hsv_infection',
        name: 'Herpes-Simplex-Infektionen (Gingivostomatitis)',
        pathogen: { type: 'Virus', name: '<i>Herpes-Simplex-Virus 1</i> (HSV-1)', gram: 'dsDNA, Herpesviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Häufig im Kleinkindalter (1-3 Jahre)',
          risk_groups: ['Kleinkinder'],
          seasonality: 'Keine',
          transmission: 'Speichel, direkter Kontakt'
        },
        pathomechanism: {
          steps: [
            'HSV-1 infiziert Schleimhäute oder verletzte Haut durch direkten Kontakt.',
            'Die Replikation in Epithelzellen verursacht Zelltod, Bläschenbildung und Ulzera.',
            'Das Virus dringt in die Endigungen sensorischer Nerven ein und wandert retrograd zu den Ganglien, wo es latent wird.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '2-12 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Gingivostomatitis herpetica', description: 'Primärinfektion bei Kleinkindern. Hohes Fieber, schmerzhaftes, geschwollenes, blutendes Zahnfleisch und zahlreiche Ulzera in der Mundschleimhaut. Essen/Trinken ist schmerzhaft.', severity: 'severe' },
            { name: 'Herpes labialis', description: 'Rezidivierende Infektion (Lippenherpes), der ein prodromales Kribbeln vorausgeht.', severity: 'mild' },
            { name: 'Eczema herpeticum', description: 'Superinfektion einer atopischen Dermatitis, ein schwerwiegender Zustand mit ausgedehntem vesikulärem Ausschlag und Fieber.', severity: 'severe' }
          ],
          physical_exam: ['Geschwollenes, blutendes Zahnfleisch', 'Ulzera auf Zunge/Gaumen', 'Zervikale Lymphadenopathie', 'Fieber'],
          complications: ['Dehydratation (trinkt nicht wegen Schmerzen)', 'Eczema herpeticum', 'Herpes-Panaritium (Herpetic Whitlow)', 'Enzephalitis']
        },
        diagnostics: {
          microbiology: [{ test: 'Klinisches Bild', finding: 'Charakteristisch', significance: 'Diagnostisch' }, { test: 'PCR', finding: 'HSV-DNA', significance: 'Bei schweren/atypischen Fällen' }]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Schmerzlinderung, Flüssigkeit, Lokaltherapie' }, { drug: 'Acyclovir', dose: 'p.o./i.v.', duration: '5-7 Tage', note: 'Bei schweren Fällen oder Immunsuppression' }] },
          targeted: 'Acyclovir.',
          prevention: ['Kontaktvermeidung mit aktiven Läsionen']
        },
        guidelines: {
          diagnosis: [
            'Klinisches Bild: Schmerzhaftes, geschwollenes, blutendes Zahnfleisch und Ulzera im Mund, begleitet von Fieber im Kleinkindalter.'
          ],
          treatment_indications: [
            'Primär supportiv (Schmerzlinderung, Flüssigkeitsersatz zur Vermeidung von Dehydratation).',
            'Acyclovir bei schweren Fällen, Immunkompromittierten oder Eczema herpeticum empfohlen.'
          ]
        },
        prognosis: { mortality: 'Niedrig, Gefahr der Dehydratation' }
      },
      {
        id: 'pertussis',
        name: 'Pertussis (Keuchhusten)',
        pathogen: { type: 'Bakterium', name: '<i>Bordetella pertussis</i>', gram: 'Gram-negativ', shape: 'Stäbchen' },
        epidemiology: {
          incidence: 'Epidemisch bei ungeimpften Kindern',
          risk_groups: ['Säuglinge (<6 Monate)', 'Ungeimpfte Kinder', 'Erwachsene (milder)'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion (sehr ansteckend! R0=12-17)'
        },
        pathomechanism: {
          steps: [
            'Adhäsion: Bordetella pertussis haftet an den zilientragenden Epithelzellen der Atemwege (filamentöses Hämagglutinin).',
            'Toxinwirkung: Es produziert Toxine (Pertussistoxin, Tracheal-Zytotoxin), die die Zilien lähmen, die mukoziliäre Clearance hemmen und lokale Entzündungen sowie Nekrosen verursachen.',
            'Systemische Wirkung: Pertussistoxin hemmt die Auswanderung von Lymphozyten in die Lymphknoten, was zu einer extremen Lymphozytose im Blut führt.'
          ],
          virulence_factors: ['Pertussistoxin (PT)', 'Filamentöses Hämagglutinin (FHA)', 'Adenylatzyklase-Toxin (ACT)']
        },
        clinical: {
          incubation: '7-10 Tage',
          onset: 'Stadium catarrhale (1-2 Wochen)',
          symptoms: [
            { name: 'Stadium catarrhale', description: 'Leichtes Fieber, Schnupfen, Husten (1-2 Wochen). Dies ist die ansteckendste Phase, aber schwer von einer Erkältung zu unterscheiden.', severity: 'mild' },
            { name: 'Stadium convulsivum', description: 'Anfallsartige, krampfartige Hustenanfälle, gefolgt von einer tiefen, ziehenden Einatmung ("Reprise"). Erbrechen tritt oft nach dem Anfall auf. Bei Säuglingen kann Apnoe das Leitsymptom sein.', severity: 'severe' },
            { name: 'Stadium decrementi', description: 'Der Husten lässt langsam nach, kann aber monatelang wiederkehren ("100-Tage-Husten").', severity: 'moderate' }
          ],
          physical_exam: [
            'Hustenanfälle (Reprise typisch bei Kindern)',
            'Apnoe (Säuglinge)',
            'Lymphozytose (>20.000/µL)',
            'Petechien (durch Anstrengung)'
          ],
          complications: ['Pneumonie (bakteriell/viral)', 'Enzephalopathie', 'Apnoe/Tod (Säuglinge)', 'Atelektase', 'Hernie (durch Husten)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blutbild', finding: 'Lymphozytose (>20.000/µL)', interpretation: 'Charakteristisch' },
            { test: 'CRP', finding: 'Normal oder leicht erhöht', interpretation: 'Nicht entzündlich' }
          ],
          microbiology: [
            { test: 'Nasopharyngeal-Aspirat-Kultur', finding: 'Bordetella pertussis', significance: 'Goldstandard (in Frühphase)' },
            { test: 'PCR', finding: 'DNA-Nachweis', significance: 'Schnell, sensitiv' },
            { test: 'Serologie', finding: 'IgG/IgA-Anstieg', significance: 'Spätdiagnose' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '10mg/kg/Tag p.o.', duration: '5 Tage', note: 'Erste Wahl' },
              { drug: 'Clarithromycin', dose: '15mg/kg/Tag p.o.', duration: '7 Tage', note: 'Alternative' }
            ]
          },
          targeted: 'Makrolid-Antibiotikum (Erythromycin, Azithromycin).',
          supportive: ['Supportiv (Sauerstoff, Rehydratation)', 'Isolierung (5 Tage nach Antibiotikum)', 'Hustenstiller NEIN (Schleimretention!)'],
          prevention: ['DTP-Impfung (Pflicht, 3+1 Dosen)', 'Auffrischung im Erwachsenenalter', 'Impfung von Schwangeren im 3. Trimester']
        },
        guidelines: {
          diagnosis: [
            'Klinischer Verdacht (langwieriger, anfallsartiger Husten) + Labor (ausgeprägte Lymphozytose).',
            'Bestätigung: Nasopharyngeale PCR (Goldstandard).'
          ],
          treatment_indications: [
            'Jeder verdächtige/bestätigte Fall sollte behandelt werden, um die Ansteckungsfähigkeit zu verringern und Symptome zu lindern (wenn früh begonnen).',
            'Säuglinge benötigen Krankenhausbehandlung (Apnoegefahr).',
            'Prophylaxe für Kontaktpersonen erforderlich.'
          ],
          first_line: ['Makrolide (z.B. Azithromycin 5 Tage).']
        },
        prognosis: {
          mortality: 'Niedrig in Industrieländern, aber bei Säuglingen hoch (1-2%)',
          factors: 'Frühe Behandlung, Impfung'
        }
      },
      {
        id: 'hand_foot_mouth',
        name: 'Hand-Fuß-Mund-Krankheit (HFMK)',
        pathogen: { type: 'Virus', name: '<i>Coxsackie A16, Enterovirus 71</i>', gram: 'ssRNA, Picornaviridae', shape: 'ikosaedrisch' },
        epidemiology: {
          incidence: 'Häufig im Kindesalter (<5-10 Jahre)',
          risk_groups: ['Kleinkinder', 'Gemeinschaftseinrichtungen'],
          seasonality: 'Sommer-Herbst',
          transmission: 'Fäkal-oral, Tröpfcheninfektion, Bläscheninhalt'
        },
        pathomechanism: {
          steps: [
            'Das Virus gelangt in die Mundhöhle und vermehrt sich im lymphatischen Gewebe des Rachens und des Darms.',
            'Eine Virämie verbreitet das Virus auf Haut und Schleimhäute.',
            'Es verursacht Entzündungen und Bläschenbildung auf der Haut und der Mundschleimhaut.'
          ],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '3-7 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Prodrom', description: 'Fieber, Halsschmerzen, Appetitlosigkeit, Unwohlsein.', severity: 'mild' },
            { name: 'Enanthem', description: 'Schmerzhafte Bläschen und Ulzera auf der Zunge, Wangenschleimhaut (Herpangina-ähnlich).', severity: 'moderate' },
            { name: 'Exanthem', description: 'Nicht juckende Bläschen oder Papeln mit rotem Hof an Handflächen, Fußsohlen und möglicherweise im Windelbereich.', severity: 'moderate' }
          ],
          physical_exam: ['Bläschen an Handflächen/Fußsohlen', 'Ulzera im Mund', 'Fieber'],
          complications: ['Dehydratation (schmerzhaftes Schlucken)', 'Nagelablösung (Onychomadesis - Wochen später)', 'Aseptische Meningitis (selten, EV71)', 'Enzephalitis (EV71)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Normal', interpretation: '-' }],
          microbiology: [
            { test: 'Klinisches Bild', finding: 'Charakteristisch', significance: 'Diagnostisch' },
            { test: 'PCR', finding: 'Enterovirus-RNA (Rachen, Stuhl)', significance: 'In schweren Fällen' }
          ]
        },
        therapy: {
          empirical: { outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Schmerzlinderung, Flüssigkeit' }] },
          targeted: 'Keine.',
          prevention: ['Hygiene', 'Händewaschen']
        },
        guidelines: {
          diagnosis: [
            'Klinisches Bild: Fieber, Mundulzera und Ausschlag an Handflächen/Fußsohlen.'
          ],
          treatment_indications: [
            'Supportiv. Prävention von Dehydratation.'
          ]
        },
        prognosis: { mortality: 'Ausgezeichnet, außer bei EV71-Enzephalitis', prognostic_scores: [], factors: 'Erregertyp' }
      }
    ]
  }
});