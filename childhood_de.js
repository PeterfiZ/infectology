Object.assign(window.diseases, {
  childhood: {
    name: 'Kinderkrankheiten',
    icon: '🧸',
    color: '#f472b6',
    diseases: [
      {
        id: 'measles',
        name: 'Masern (Morbilli)',
        pathogen: { type: 'Virus', name: 'Masernvirus (Measles morbillivirus)', gram: 'ssRNA, Paramyxoviridae', shape: 'pleomorph' },
        epidemiology: {
          incidence: 'Epidemisch in ungeimpften Populationen',
          risk_groups: ['Ungeimpfte', 'Immungeschwächte'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion (hoch ansteckend! R0=12-18)'
        },
        pathomechanism: {
          steps: ['Eintritt über Atemwege', 'Virämie', 'Infektion von Endothel-/Epithel-/Immunzellen', 'Immunsuppression (monatelang)'],
          virulence_factors: ['Hämagglutinin', 'Fusionsprotein']
        },
        clinical: {
          incubation: '10-14 Tage',
          onset: 'Prodromalstadium (Fieber, Katarrh)',
          symptoms: [
            { name: 'Prodrom', description: 'Fieber (>40°C), Husten, Schnupfen (Coryza), Konjunktivitis - fast 100%', severity: 'moderate' },
            { name: 'Koplik-Flecken', description: 'Pathognomonische salzkornartige Flecken an der Wangenschleimhaut (60-70% vor dem Ausschlag)', severity: 'mild' },
            { name: 'Ausschlag', description: 'Makulopapulös, beginnt hinter den Ohren → Gesicht → Rumpf (3. Tag) → Extremitäten (konfluierend)', severity: 'moderate' }
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
        pathogen: { type: 'Virus', name: 'Mumpsvirus (Mumps orthorubulavirus)', gram: 'ssRNA, Paramyxoviridae', shape: 'pleomorph' },
        epidemiology: {
          incidence: 'In Ungeimpften',
          risk_groups: ['Ungeimpfte'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion, Speichel'
        },
        pathomechanism: {
          steps: ['Eintritt über Atemwege', 'Virämie', 'Infektion von Drüsengewebe (Parotis, Hoden, Pankreas) und ZNS'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '16-18 Tage',
          onset: 'Akut',
          symptoms: [
            { name: 'Parotitis', description: 'Ohrspeicheldrüsenschwellung (95% bei symptomatischen), anfangs einseitig, dann beidseitig (90%)', severity: 'moderate' },
            { name: 'Fieber', description: 'Mäßig, prodromal', severity: 'mild' },
            { name: 'Orchitis', description: 'Hodenentzündung (20-30% der postpubertären Jungen), schmerzhaft', severity: 'severe' }
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
        pathogen: { type: 'Virus', name: 'Rötelnvirus (Rubella virus)', gram: 'ssRNA, Matonaviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Selten (wegen Impfung)',
          risk_groups: ['Ungeimpfte', 'Schwangere (Fötus!)'],
          seasonality: 'Frühling',
          transmission: 'Tröpfcheninfektion'
        },
        pathomechanism: {
          steps: ['Eintritt über Atemwege', 'Virämie', 'Haut/Lymphknoten-Beteiligung', 'Transplazentare Übertragung (teratogen!)'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '14-21 Tage',
          onset: 'Mild',
          symptoms: [
            { name: 'Ausschlag', description: 'Feinfleckig, hellrosa (50-80%), beginnt im Gesicht und breitet sich nach unten aus, verschwindet in 3 Tagen', severity: 'mild' },
            { name: 'Lymphadenopathie', description: 'Okzipital, retroaurikulär, zervikal posterior (fast 100%)', severity: 'moderate' },
            { name: 'Arthralgie/Arthritis', description: 'Häufig bei erwachsenen Frauen (bis zu 70%)', severity: 'mild' }
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
        pathogen: { type: 'Bakterium', name: 'Streptococcus pyogenes (GAS)', gram: 'Gram-positiv', shape: 'Ketten' },
        epidemiology: {
          incidence: 'Häufig im Kindesalter',
          risk_groups: ['5-15 Jährige'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion'
        },
        pathomechanism: {
          steps: ['Pharyngitis', 'Erythrogene Toxinproduktion (Superantigen)', 'Hautreaktion'],
          virulence_factors: ['Erythrogene Toxine (SpeA, B, C)']
        },
        clinical: {
          incubation: '2-5 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Halsschmerzen', description: 'Schwere Pharyngitis (>90%)', severity: 'moderate' },
            { name: 'Fieber', description: 'Hoch, plötzlicher Beginn', severity: 'moderate' },
            { name: 'Ausschlag', description: 'Diffus rot, "Sandpapier"-artig, verblasst auf Druck (Pastia-Linien in den Beugen)', severity: 'moderate' },
            { name: 'Zunge', description: 'Weiße Erdbeerzunge (1.-2. Tag) → Rote Himbeerzunge (4.-5. Tag)', severity: 'moderate' }
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
        pathogen: { type: 'Virus', name: 'Epstein-Barr-Virus (EBV)', gram: 'dsDNA, Herpesviridae (HHV-4)', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Jugendliche/junge Erwachsene (90% bis zum Erwachsenenalter durchgemacht)',
          risk_groups: ['Junge Leute'],
          seasonality: 'Keine',
          transmission: 'Speichel (Kuss), Tröpfcheninfektion'
        },
        pathomechanism: {
          steps: ['Infektion des Oropharynx-Epithels', 'Infektion von B-Lymphozyten (Immortalisierung)', 'Zytotoxische T-Zell-Antwort (atypische Lymphozyten)', 'Latenz in B-Zellen'],
          virulence_factors: ['LMP, EBNA Proteine']
        },
        clinical: {
          incubation: '4-6 Wochen',
          onset: 'Schleichend',
          symptoms: [
            { name: 'Halsschmerzen', description: 'Schwer, oft pseudomembranös (>80%)', severity: 'severe' },
            { name: 'Fieber', description: 'Anhaltend (kann 10-14 Tage dauern), >90%', severity: 'moderate' },
            { name: 'Lymphadenopathie', description: 'Generalisiert, symmetrisch, vor allem hintere zervikale Lymphknoten (>90%)', severity: 'moderate' },
            { name: 'Müdigkeit', description: 'Ausgeprägt, kann Wochen bis Monate anhalten', severity: 'moderate' }
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
        id: 'exanthema_subitum',
        name: 'Exanthema subitum (Drei-Tage-Fieber / Roseola infantum)',
        pathogen: { type: 'Virus', name: 'Humanes Herpesvirus 6 (HHV-6)', gram: 'dsDNA, Herpesviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Säuglinge/Kleinkinder (6 Monate - 2 Jahre), fast alle machen es durch',
          risk_groups: ['Säuglinge'],
          seasonality: 'Ganzjährig',
          transmission: 'Speichel (von asymptomatischen erwachsenen Trägern)'
        },
        pathomechanism: {
          steps: ['Schleimhautinfektion', 'Virämie', 'T-Zell-Tropismus', 'Latenz'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '5-15 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Hohes Fieber', description: '39-40°C, 3-5 Tage lang (100%), bei gutem Allgemeinzustand', severity: 'moderate' },
            { name: 'Ausschlag', description: 'Erscheint NACH Entfieberung (wichtiger Unterschied!), rosa makulopapulös', severity: 'mild' },
            { name: 'Nagayama-Flecken', description: 'Ulzera/Papeln am Zäpfchenansatz', severity: 'mild' }
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
        pathogen: { type: 'Virus', name: 'Varizella-Zoster-Virus (VZV)', gram: 'dsDNA, Herpesviridae (HHV-3)', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Sehr häufig im Kindesalter (Ungeimpfte)',
          risk_groups: ['Ungeimpfte Kinder', 'Immungeschwächte', 'Schwangere', 'Erwachsene (schwerer)'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion, Bläscheninhalt (aerogen!)'
        },
        pathomechanism: {
          steps: ['Eintritt über Atemwege', 'Virämie', 'Haut- und Schleimhautinfektion', 'Latenz in sensorischen Ganglien'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '10-21 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Ausschlag', description: 'Polymorph (Macula-Papel-Vesikel-Kruste gleichzeitig), juckend (100%)', severity: 'moderate' },
            { name: 'Fieber', description: 'Mäßig (bei Kindern), bei Erwachsenen höher', severity: 'mild' },
            { name: 'Enanthem', description: 'Schleimhautbläschen im Mund, schmerzhaft', severity: 'moderate' }
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
        pathogen: { type: 'Virus', name: 'Varizella-Zoster-Virus (VZV) Reaktivierung', gram: 'dsDNA', shape: '-' },
        epidemiology: {
          incidence: 'Hauptsächlich Ältere, aber auch immunsupprimierte Kinder',
          risk_groups: ['Immungeschwächte', 'Frühere Varizellen'],
          seasonality: 'Keine',
          transmission: 'Bläscheninhalt infektiös (kann Varizellen bei Seronegativen verursachen)'
        },
        pathomechanism: {
          steps: ['Reaktivierung des latenten Virus im Ganglion', 'Axonaler Transport zur Haut', 'Dermatomaler Ausschlag'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '-',
          onset: 'Beginnt mit Schmerzen',
          symptoms: [
            { name: 'Schmerz', description: 'Prodromal (70-80%), brennend, stechend im Dermatom', severity: 'severe' },
            { name: 'Ausschlag', description: 'Gruppierte Bläschen auf rotem Grund, einseitig, dermatomal', severity: 'moderate' }
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
        pathogen: { type: 'Virus', name: 'Herpes-Simplex-Virus 1 (HSV-1)', gram: 'dsDNA, Herpesviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Häufig im Kleinkindalter (1-3 Jahre)',
          risk_groups: ['Kleinkinder'],
          seasonality: 'Keine',
          transmission: 'Speichel, direkter Kontakt'
        },
        pathomechanism: {
          steps: ['Schleimhautinfektion', 'Bläschen, Ulzera', 'Latenz in Ganglien'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '2-12 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Gingivostomatitis', description: 'Fieber, schmerzhafte Zahnfleischentzündung, Ulzera (häufigste Primärform bei Kindern)', severity: 'severe' },
            { name: 'Herpes labialis', description: 'Rezidiv (Lippenherpes), prodromales Kribbeln', severity: 'mild' },
            { name: 'Eczema herpeticum', description: 'Superinfektion bei atopischer Dermatitis (schwerwiegend!)', severity: 'severe' }
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
        pathogen: { type: 'Bakterium', name: 'Bordetella pertussis', gram: 'Gram-negativ', shape: 'Stäbchen' },
        epidemiology: {
          incidence: 'Epidemisch bei ungeimpften Kindern',
          risk_groups: ['Säuglinge (<6 Monate)', 'Ungeimpfte Kinder', 'Erwachsene (milder)'],
          seasonality: 'Winter-Frühling',
          transmission: 'Tröpfcheninfektion (sehr ansteckend! R0=12-17)'
        },
        pathomechanism: {
          steps: [
            'Eintritt über Atemwege',
            'Adhäsion an Zilien (filamentöses Hämagglutinin)',
            'Toxinproduktion (Pertussistoxin → Lymphozytose, Hustenanfälle)',
            'Zerstörung der Zilien → Störung der mukoziliären Clearance'
          ],
          virulence_factors: ['Pertussistoxin (PT)', 'Filamentöses Hämagglutinin (FHA)', 'Adenylatzyklase-Toxin (ACT)']
        },
        clinical: {
          incubation: '7-10 Tage',
          onset: 'Stadium catarrhale (1-2 Wochen)',
          symptoms: [
            { name: 'Stadium catarrhale', description: 'Leichtes Fieber, Schnupfen, Husten (1-2 Wochen) - ansteckendste Phase', severity: 'mild' },
            { name: 'Stadium convulsivum', description: 'Schwere Hustenanfälle (100%), "Reprise" (inspiratorisches Ziehen 60-70%), Erbrechen (50%)', severity: 'severe' },
            { name: 'Stadium decrementi', description: 'Husten nimmt ab, kann aber wochenlang anhalten ("100-Tage-Husten")', severity: 'moderate' }
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
          prevention: ['DTP-Impfung (Pflicht, 3+1 Dosen)', 'Auffrischung im Erwachsenenalter']
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
      }
    ]
  }
});