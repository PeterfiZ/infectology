Object.assign(window.diseases, {
  emerging: {
    name: 'Neu auftretende Krankheitserreger',
    icon: '🚨',
    color: '#be185d',
    diseases: [
      {
        id: 'mpox',
        name: 'Mpox (Affenpocken)',
        pathogen: { type: 'Virus', name: 'Mpox-Virus (MPXV)', gram: 'dsDNA, Poxviridae', shape: 'ziegelförmig' },
        epidemiology: {
          incidence: 'Globale Epidemie (2022-), endemisch in Afrika',
          risk_groups: ['MSM (Männer, die Sex mit Männern haben)', 'Gesundheitspersonal', 'Haushaltskontakte'],
          seasonality: 'Keine',
          transmission: 'Enger Haut-zu-Haut-Kontakt, Tröpfcheninfektion, Fomiten, Zoonose (Nagetiere)'
        },
        pathomechanism: {
          steps: [
            'Eintritt durch verletzte Haut/Schleimhaut',
            'Replikation an der Eintrittspforte und in regionalen Lymphknoten',
            'Virämie',
            'Entwicklung von Haut- und Schleimhautläsionen'
          ],
          virulence_factors: ['Immunmodulatorische Proteine']
        },
        clinical: {
          incubation: '5-21 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Ausschlag', description: 'Macula → Papel → Vesikel → Pustel → Kruste (schmerzhaft!)', severity: 'moderate' },
            { name: 'Lymphadenopathie', description: 'Charakteristisch (unterscheidet von Pocken/Windpocken)', severity: 'moderate' },
            { name: 'Fieber', description: 'Prodromalsymptom', severity: 'mild' },
            { name: 'Proktitis', description: 'Rektalschmerzen (bei sexueller Übertragung)', severity: 'severe' }
          ],
          physical_exam: [
            'Zentrifugal verteilter Ausschlag (auch Handflächen/Fußsohlen)',
            'Geschwollene, schmerzhafte Lymphknoten',
            'Genitale/perianale Läsionen'
          ],
          complications: ['Bakterielle Superinfektion', 'Pneumonie', 'Sepsis', 'Enzephalitis', 'Hornhautvernarbung (Erblindung)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Unspezifisch', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'MPXV-DNA', significance: 'Goldstandard (Probe vom Grund/Dach der Läsion)' },
            { test: 'Elektronenmikroskopie', finding: 'Poxvirus-Morphologie', significance: 'Selten verfügbar' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Schmerzlinderung, Wundversorgung, Isolierung' }]
          },
          targeted: 'In schweren Fällen: Tecovirimat (antiviral).',
          supportive: ['Schmerzlinderung', 'Flüssigkeitsersatz'],
          prevention: ['Impfung (JYNNEOS - Pockenimpfstoff der 3. Generation)', 'Isolierung', 'Kontaktverfolgung']
        },
        prognosis: { mortality: 'Klade II (global): <0.1%; Klade I (Afrika): bis zu 10%', prognostic_scores: [], factors: 'Kladentyp, Behandlungszeitpunkt' }
      },
      {
        id: 'nipah',
        name: 'Nipah-Virus-Infektion',
        pathogen: { type: 'Virus', name: 'Nipah-Virus (NiV)', gram: 'RNA, Paramyxoviridae (Henipavirus)', shape: 'pleomorph' },
        epidemiology: {
          incidence: 'Sporadische Ausbrüche (Südasien, Südostasien)',
          risk_groups: ['Schweinehalter', 'Dattelpalmsaftsammler/-konsumenten'],
          seasonality: 'Winter-Frühling (Bangladesch)',
          transmission: 'Flughunde (Pteropus) Urin/Speichel (Palmsaft), Schwein, Mensch zu Mensch'
        },
        pathomechanism: {
          steps: [
            'Eintritt (oral/respiratorisch)',
            'Virämie',
            'Infektion von Endothelzellen (Ephrin-B2-Rezeptor)',
            'Vaskulitis, Thrombose, Ischämie',
            'ZNS- und Lungenbeteiligung'
          ],
          virulence_factors: ['Fusionsproteine', 'Immunantagonisten']
        },
        clinical: {
          incubation: '4-14 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Fieber', description: 'Hoch', severity: 'severe' },
            { name: 'Kopfschmerzen', description: 'Schwer', severity: 'severe' },
            { name: 'Atemwegssymptome', description: 'Husten, atypische Pneumonie', severity: 'moderate' },
            { name: 'Enzephalitis', description: 'Schwindel, Bewusstseinsstörung, Koma (innerhalb von 24-48 Stunden)', severity: 'severe' }
          ],
          physical_exam: ['Fieber', 'Nackensteifigkeit', 'Bewusstseinsstörung', 'Myoklonus', 'Areflexie/Hyporeflexie'],
          complications: ['Schwere Enzephalitis', 'ARDS', 'Rezidiv (Monate/Jahre später)', 'Tod']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Thrombozytopenie, Leukopenie', interpretation: '-' }],
          imaging: [{ modality: 'MRT Gehirn', finding: 'Multiple kleine Infarkte, Hyperintensität', significance: 'Enzephalitis' }],
          microbiology: [
            { test: 'RT-PCR', finding: 'RNA (Rachen, Urin, Liquor)', significance: 'Akutphase' },
            { test: 'ELISA (IgM/IgG)', finding: 'Positiv', significance: 'Später' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Keine', dose: '-', duration: '-', note: 'Sofortige Krankenhaus-/Intensivstationseinweisung' }]
          },
          targeted: 'Kein bewährtes Virostatikum. Monoklonaler Antikörper (m102.4) in der experimentellen Phase.',
          supportive: ['Intensivmedizin', 'Beatmung', 'Behandlung von Krampfanfällen'],
          prevention: ['Vermeidung von Kontakt mit Flughunden', 'Vermeidung von rohem Palmsaft', 'Isolierung/Keulung kranker Schweine', 'Strikte Krankenhaushygiene']
        },
        prognosis: { mortality: 'Hoch (40-75%)', prognostic_scores: [], factors: 'Entwicklung einer Enzephalitis, Verfügbarkeit der Behandlung' }
      }
    ]
  }
});