Object.assign(window.diseases, {
  tropical: {
    name: 'Tropenkrankheiten',
    icon: '🌴',
    color: '#f97316',
    diseases: [
      {
        id: 'dengue',
        name: 'Dengue-Fieber',
        pathogen: { type: 'Virus', name: 'Dengue-Virus (DENV 1-4)', gram: 'RNA, Flaviviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Weltweit 390 Millionen Infektionen/Jahr',
          risk_groups: ['Tropenreisende', 'Bewohner endemischer Gebiete'],
          seasonality: 'Regenzeit',
          transmission: 'Stich der Aedes aegypti/albopictus Mücke'
        },
        pathomechanism: {
          steps: [
            'Mückenstich',
            'Virusreplikation in dendritischen Zellen/Monozyten',
            'Virämie',
            'Antikörper-abhängige Verstärkung (ADE) bei Sekundärinfektion (schwererer Verlauf)',
            'Zytokinsturm, Kapillarleck'
          ],
          virulence_factors: ['NS1-Protein', 'ADE']
        },
        clinical: {
          incubation: '4-10 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Fieber', description: 'Hoch, plötzlich (>99% bei symptomatischen)', severity: 'severe' },
            { name: 'Knochenbrecherfieber', description: 'Schwere Muskel- und Gelenkschmerzen (>90%)', severity: 'severe' },
            { name: 'Kopfschmerzen/Retrobulbärer Schmerz', description: 'Schmerz hinter den Augen (>90%)', severity: 'moderate' },
            { name: 'Ausschlag', description: 'Makulopapulös (50-80%), tritt nach Fieber auf', severity: 'moderate' },
            { name: 'Übelkeit/Erbrechen', description: 'Kann häufiges Warnzeichen sein', severity: 'moderate' }
          ],
          physical_exam: [
            'Fieber',
            'Ausschlag ("weiße Inseln im roten Meer")',
            'Tourniquet-Test positiv (Kapillarfragilität)',
            'Hepatomegalie',
            'Warnzeichen: Bauchschmerzen, anhaltendes Erbrechen, Flüssigkeitsansammlung'
          ],
          complications: ['Dengue-hämorrhagisches Fieber (DHF)', 'Dengue-Schock-Syndrom (DSS)', 'Schwere Blutung']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blutbild', finding: 'Leukopenie, Thrombozytopenie', interpretation: 'Charakteristisch' },
            { test: 'Hämatokrit', finding: 'Erhöht', interpretation: 'Hämokonzentration (Leckage)' }
          ],
          microbiology: [
            { test: 'NS1-Antigen', finding: 'Positiv', significance: 'Frühphase (1-5 Tage)' },
            { test: 'PCR', finding: 'RNA', significance: 'Frühphase' },
            { test: 'IgM/IgG', finding: 'Positiv', significance: 'Spätphase (>5 Tage)' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Flüssigkeit, Fiebersenkung (Paracetamol). NSAID VERBOTEN (Blutungsgefahr)!' }]
          },
          targeted: 'Kein spezifisches antivirales Mittel.',
          supportive: ['Flüssigkeitssubstitution (kritisch!)', 'Blutprodukte (bei schwerer Blutung)'],
          prevention: ['Mückenschutz', 'Impfstoff (Qdenga)']
        },
        prognosis: { mortality: 'Mit adäquater Behandlung <1%, schwere Fälle 2-5%', prognostic_scores: [], factors: 'Vorherige Infektion (ADE), Alter, Komorbidität' }
      },
      {
        id: 'zika',
        name: 'Zika-Virus',
        pathogen: { type: 'Virus', name: 'Zika-Virus (ZIKV)', gram: 'RNA, Flaviviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Epidemisch',
          risk_groups: ['Schwangere (fötale Schädigung!)', 'Reisende'],
          seasonality: 'Mückensaison',
          transmission: 'Aedes-Mücke, sexuell, vertikal'
        },
        pathomechanism: {
          steps: [
            'Eintritt durch Mückenstich/sexuell',
            'Replikation',
            'Virämie',
            'Neurotropismus (Erwachsene: GBS, Fötus: Mikrozephalie)'
          ],
          virulence_factors: ['Neurotropismus']
        },
        clinical: {
          incubation: '3-14 Tage',
          onset: 'Mild',
          symptoms: [
            { name: 'Asymptomatisch', description: '80% der Fälle sind asymptomatisch', severity: 'mild' },
            { name: 'Ausschlag', description: 'Makulopapulös, juckend (>90% bei symptomatischen)', severity: 'moderate' },
            { name: 'Fieber', description: 'Niedrig (65%), fehlt oft', severity: 'mild' },
            { name: 'Arthralgie', description: 'Kleine Gelenke (65%), mit Ödem', severity: 'mild' },
            { name: 'Konjunktivitis', description: 'Nicht eitrig (55%)', severity: 'moderate' }
          ],
          physical_exam: ['Ausschlag', 'Konjunktivitis', 'Fieber'],
          complications: ['Guillain-Barré-Syndrom', 'Kongenitales Zika-Syndrom (Mikrozephalie)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Leichte Leukopenie/Thrombozytopenie', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNA (Blut, Urin)', significance: 'Diagnostisch (im Urin länger ausgeschieden)' },
            { test: 'IgM', finding: 'Positiv', significance: 'Kreuzreaktion mit Dengue möglich!' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Ruhe, Flüssigkeit' }]
          },
          targeted: 'Keine.',
          supportive: ['Symptomatische Behandlung'],
          prevention: ['Mückenschutz', 'Safer Sex (kann monatelang im Sperma ausgeschieden werden)', 'Schwangere sollten endemische Gebiete meiden']
        },
        prognosis: { mortality: 'Sehr niedrig, fötales Risiko signifikant', prognostic_scores: [], factors: 'Schwangerschaft, Alter' }
      },
      {
        id: 'chikungunya',
        name: 'Chikungunya',
        pathogen: { type: 'Virus', name: 'Chikungunya-Virus (CHIKV)', gram: 'RNA, Togaviridae', shape: 'kugelförmig' },
        epidemiology: {
          incidence: 'Epidemisch',
          risk_groups: ['Reisende'],
          seasonality: 'Mückensaison',
          transmission: 'Aedes-Mücke'
        },
        pathomechanism: {
          steps: ['Mückenstich', 'Replikation in Fibroblasten', 'Gelenktropismus', 'Chronische Entzündung'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '3-7 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Fieber und Gelenkschmerzen', description: 'Plötzliches hohes Fieber und schwere, symmetrische Polyarthralgie (>95%)', severity: 'severe' },
            { name: 'Ausschlag', description: 'Makulopapulöser Ausschlag (50-75%)', severity: 'moderate' },
            { name: 'Andere Symptome', description: 'Kopfschmerzen, Myalgie, Übelkeit', severity: 'mild' }
          ],
          physical_exam: ['Symmetrische Polyarthritis/Tenosynovitis (Hand, Handgelenk, Knöchel)', 'Fieber', 'Makulopapulöser Ausschlag'],
          complications: ['Chronische, persistierende Arthritis (30-60%, besonders bei Älteren)', 'Selten: Myokarditis, Enzephalitis']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Lymphopenie', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNA', significance: 'Akute Phase (<1 Woche)' },
            { test: 'IgM/IgG', finding: 'Positiv', significance: 'Später' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'NSAID möglich (wenn Dengue ausgeschlossen!)' }]
          },
          targeted: 'Keine.',
          supportive: ['Schmerzlinderung (NSAID, Steroide in chronischen Fällen)', 'Physiotherapie'],
          prevention: ['Mückenschutz', 'Impfstoff (Ixchiq - FDA zugelassen)']
        },
        prognosis: { mortality: 'Sehr niedrig, aber Morbidität (chronische Schmerzen) hoch', prognostic_scores: [], factors: 'Alter, chronische Gelenkprobleme' }
      }
    ]
  }
});