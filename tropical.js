Object.assign(window.diseases, {
  tropical: {
    name: 'Trópusi betegségek',
    icon: '🌴',
    color: '#f97316',
    diseases: [
      {
        id: 'dengue',
        name: 'Dengue láz',
        pathogen: { type: 'Vírus', name: 'Dengue vírus (DENV 1-4)', gram: 'RNS, Flaviviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Világszerte 390 millió fertőzés/év',
          risk_groups: ['Trópusi utazók', 'Endémiás területen élők'],
          seasonality: 'Esős évszak',
          transmission: 'Aedes aegypti/albopictus szúnyog csípése'
        },
        pathomechanism: {
          steps: [
            'Szúnyogcsípés',
            'Vírus replikáció dendritikus sejtekben/monocytákban',
            'Viremia',
            'Antitest-dependens enhancement (ADE) másodlagos fertőzésnél (súlyosabb lefolyás)',
            'Citokin vihar, kapilláris szivárgás'
          ],
          virulence_factors: ['NS1 protein', 'ADE']
        },
        clinical: {
          incubation: '4-10 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Láz', description: 'Magas, hirtelen', severity: 'severe' },
            { name: 'Csonttörő láz', description: 'Súlyos izom- és ízületi fájdalom', severity: 'severe' },
            { name: 'Retrobulbaris fájdalom', description: 'Szem mögötti fájdalom', severity: 'moderate' },
            { name: 'Kiütés', description: 'Maculopapularis', severity: 'moderate' }
          ],
          physical_exam: [
            'Láz',
            'Kiütés',
            'Tourniquet teszt pozitív (kapilláris fragilitás)',
            'Hepatomegalia'
          ],
          complications: ['Dengue hemorrhagiás láz (DHF)', 'Dengue shock szindróma (DSS)', 'Súlyos vérzés']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Leukopenia, thrombocytopenia', interpretation: 'Jellegzetes' },
            { test: 'Hematokrit', finding: 'Emelkedett', interpretation: 'Hemokoncentráció (szivárgás)' }
          ],
          microbiology: [
            { test: 'NS1 antigén', finding: 'Pozitív', significance: 'Korai fázis (1-5 nap)' },
            { test: 'PCR', finding: 'RNS', significance: 'Korai fázis' },
            { test: 'IgM/IgG', finding: 'Pozitív', significance: 'Késői fázis (>5 nap)' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Folyadék, lázcsillapítás (Paracetamol). NSAID TILOS (vérzésveszély)!' }]
          },
          targeted: 'Nincs specifikus antivirális szer.',
          supportive: ['Folyadékpótlás (kritikus!)', 'Vérkészítmények (súlyos vérzésnél)'],
          prevention: ['Szúnyogriasztó', 'Vakcina (Qdenga)']
        },
        prognosis: { mortality: 'Megfelelő kezeléssel <1%, súlyos esetben 2-5%', prognostic_scores: [], factors: 'Korábbi fertőzés (ADE), életkor, komorbiditás' }
      },
      {
        id: 'zika',
        name: 'Zika vírus',
        pathogen: { type: 'Vírus', name: 'Zika vírus (ZIKV)', gram: 'RNS, Flaviviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Járványos',
          risk_groups: ['Terhesek (magzati károsodás!)', 'Utazók'],
          seasonality: 'Szúnyogszezon',
          transmission: 'Aedes szúnyog, szexuális, vertikális'
        },
        pathomechanism: {
          steps: [
            'Szúnyogcsípés/szexuális úton bejutás',
            'Replikáció',
            'Viremia',
            'Neurotropizmus (felnőtt: GBS, magzat: microcephalia)'
          ],
          virulence_factors: ['Neurotropizmus']
        },
        clinical: {
          incubation: '3-14 nap',
          onset: 'Enyhe',
          symptoms: [
            { name: 'Láz', description: 'Alacsony', severity: 'mild' },
            { name: 'Kiütés', description: 'Maculopapularis, viszkető', severity: 'moderate' },
            { name: 'Conjunctivitis', description: 'Nem gennyes', severity: 'moderate' },
            { name: 'Arthralgia', description: 'Kisízületek', severity: 'mild' }
          ],
          physical_exam: ['Kiütés', 'Conjunctivitis', 'Láz'],
          complications: ['Guillain-Barré szindróma', 'Congenitalis Zika szindróma (microcephalia)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Enyhe leukopenia/thrombocytopenia', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNS (vér, vizelet)', significance: 'Diagnosztikus (vizeletben tovább ürül)' },
            { test: 'IgM', finding: 'Pozitív', significance: 'Keresztreakció Dengue-vel lehetséges!' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Pihenés, folyadék' }]
          },
          targeted: 'Nincs.',
          supportive: ['Tüneti kezelés'],
          prevention: ['Szúnyogvédelem', 'Biztonságos szex (hónapokig ürülhet ondóval)', 'Terhesek kerüljék az endémiás területet']
        },
        prognosis: { mortality: 'Nagyon alacsony, magzati kockázat jelentős', prognostic_scores: [], factors: 'Terhesség, életkor' }
      },
      {
        id: 'chikungunya',
        name: 'Chikungunya',
        pathogen: { type: 'Vírus', name: 'Chikungunya vírus (CHIKV)', gram: 'RNS, Togaviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Járványos',
          risk_groups: ['Utazók'],
          seasonality: 'Szúnyogszezon',
          transmission: 'Aedes szúnyog'
        },
        pathomechanism: {
          steps: ['Szúnyogcsípés', 'Replikáció fibroblastokban', 'Ízületi tropizmus', 'Krónikus gyulladás'],
          virulence_factors: ['-']
        },
        clinical: {
          incubation: '3-7 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Láz', description: 'Magas', severity: 'severe' },
            { name: 'Polyarthralgia', description: 'Súlyos, bénító ízületi fájdalom ("görnyedt")', severity: 'severe' },
            { name: 'Kiütés', description: 'Maculopapularis', severity: 'moderate' }
          ],
          physical_exam: ['Ízületi duzzanat/érzékenység', 'Láz', 'Kiütés'],
          complications: ['Krónikus arthritis (hónapokig/évekig tarthat)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Lymphopenia', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'RNS', significance: 'Akut fázis (<1 hét)' },
            { test: 'IgM/IgG', finding: 'Pozitív', significance: 'Később' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'NSAID adható (ha Dengue kizárva!)' }]
          },
          targeted: 'Nincs.',
          supportive: ['Fájdalomcsillapítás (NSAID, szteroid krónikus esetben)', 'Fizioterápia'],
          prevention: ['Szúnyogvédelem', 'Vakcina (Ixchiq - FDA approved)']
        },
        prognosis: { mortality: 'Nagyon alacsony, de morbiditás (krónikus fájdalom) magas', prognostic_scores: [], factors: 'Életkor, krónikus ízületi problémák' }
      }
    ]
  }
});