Object.assign(window.diseases, {
  emerging: {
    name: 'Neu auftretende Krankheitserreger',
    icon: '🚨',
    color: '#be185d',
    diseases: [
      {
        id: 'mpox',
        name: 'Mpox (Affenpocken)',
        pathogen: { type: 'Virus', name: '<i>Mpox-Virus</i> (MPXV)', gram: 'dsDNA, Poxviridae', shape: 'ziegelförmig' },
        epidemiology: {
          incidence: 'Globale Epidemie (2022-), endemisch in Afrika',
          risk_groups: ['MSM (Männer, die Sex mit Männern haben)', 'Gesundheitspersonal', 'Haushaltskontakte'],
          seasonality: 'Keine',
          transmission: 'Enger Haut-zu-Haut-Kontakt, Tröpfcheninfektion, Fomiten, Zoonose (Nagetiere)'
        },
        pathomechanism: {
          steps: [
            'Eintritt: Virus dringt durch verletzte Haut, Schleimhäute oder Atemwege ein.',
            'Replikation: Vermehrung an der Eintrittspforte und in regionalen Lymphknoten (Inkubationszeit).',
            'Virämie: Ausbreitung über das Blut in Haut und innere Organe.',
            'Läsionsbildung: Virusreplikation in der Haut verursacht Entzündung, Nekrose und charakteristische pockenartige Läsionen (Makula-Papel-Vesikel-Pustel-Kruste).'
          ],
          virulence_factors: ['Immunmodulatorische Proteine']
        },
        clinical: {
          incubation: '5-21 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Prodrom', description: 'Fieber, starke Kopfschmerzen, Lymphadenopathie, Rückenschmerzen, Myalgie und ausgeprägte Asthenie.', severity: 'mild' },
            { name: 'Lymphadenopathie', description: 'Charakteristisches Merkmal (zervikal, inguinal), das Mpox von Pocken und Windpocken unterscheidet.', severity: 'moderate' },
            { name: 'Ausschlag', description: 'Erscheint 1-3 Tage nach Fieber. Beginnt im Gesicht, breitet sich zentrifugal aus (Handflächen/Fußsohlen betroffen). Stadien: Makula → Papel → Vesikel → Pustel (genabelt) → Kruste. Läsionen sind oft schmerzhaft, später juckend.', severity: 'moderate' },
            { name: 'Schleimhautsymptome', description: 'Orale, genitale und perianale Läsionen. Proktitis (Rektalschmerzen) ist bei sexueller Übertragung häufig.', severity: 'severe' }
          ],
          physical_exam: [
            'Zentrifugal verteilter Ausschlag (auch Handflächen/Fußsohlen)',
            'Geschwollene, schmerzhafte Lymphknoten',
            'Genitale/perianale Läsionen',
            'Fieber'
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
        pathogen: { type: 'Virus', name: '<i>Nipah-Virus</i> (NiV)', gram: 'RNA, Paramyxoviridae (Henipavirus)', shape: 'pleomorph' },
        epidemiology: {
          incidence: 'Sporadische Ausbrüche (Südasien, Südostasien)',
          risk_groups: ['Schweinehalter', 'Dattelpalmsaftsammler/-konsumenten'],
          seasonality: 'Winter-Frühling (Bangladesch)',
          transmission: 'Flughunde (Pteropus) Urin/Speichel (Palmsaft), Schwein, Mensch zu Mensch'
        },
        pathomechanism: {
          steps: [
            'Eintritt: Verzehr kontaminierter Nahrung (z.B. Dattelpalmsaft) oder direkter Kontakt mit infizierten Tieren (Schweine, Fledermäuse).',
            'Disseminierung: Das Virus gelangt in den Blutkreislauf (Virämie).',
            'Vaskulitis: Infiziert Endothelzellen (über Ephrin-B2-Rezeptor), verursacht systemische Vaskulitis, Thrombose und Gewebeischämie.',
            'Tropismus: Hohe Affinität zum ZNS (überwindet die Blut-Hirn-Schranke) und zur Lunge, verursacht schwere Entzündungen und Nekrosen.'
          ],
          virulence_factors: ['Fusionsproteine', 'Immunantagonisten']
        },
        clinical: {
          incubation: '4-14 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Prodrom', description: 'Fieber, Kopfschmerzen, Muskelschmerzen, Halsschmerzen und Erbrechen.', severity: 'moderate' },
            { name: 'Atemwegssymptome', description: 'Husten, Atemnot, fortschreitend zu atypischer Pneumonie und akutem Atemnotsyndrom (ARDS).', severity: 'severe' },
            { name: 'Enzephalitis', description: 'Schwindel, Bewusstseinsstörung, schnelles Fortschreiten zum Koma (innerhalb von 24-48 Stunden). Hirnstammzeichen (Areflexie, Hypotonie) sind häufig.', severity: 'severe' }
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
