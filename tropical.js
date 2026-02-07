Object.assign(window.diseases, {
  tropical: {
    name: 'Trópusi betegségek',
    icon: window.diseaseMetadata.tropical.icon,
    color: window.diseaseMetadata.tropical.color,
    diseases: [
      {
        id: 'dengue',
        name: 'Dengue láz',
        pathogen: { type: 'Vírus', name: '<i>Dengue vírus</i> (DENV 1-4)', gram: 'RNS, Flaviviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Világszerte 390 millió fertőzés/év',
          risk_groups: ['Trópusi utazók', 'Endémiás területen élők'],
          seasonality: 'Esős évszak',
          transmission: 'Aedes aegypti/albopictus szúnyog csípése'
        },
        pathomechanism: {
          steps: [
            'Behatolás: A fertőzött szúnyog csípése után a vírus a bőrben lévő dendritikus sejteket és monocytákat fertőzi meg, majd a nyirokcsomókba vándorol.',
            'Virémia: A vírus elszaporodik és a véráramba jut (viremia), ami magas lázat és szisztémás tüneteket okoz.',
            'ADE jelenség: Másodlagos fertőzés esetén, ha a beteg korábban már találkozott egy másik szerotípussal, az antitest-dependens enhancement (ADE) jelenség lép fel: a nem-neutralizáló antitestek segítik a vírus bejutását a sejtekbe, ami fokozott replikációhoz vezet.',
            'Következmény: Ez súlyos citokinvihart és vaszkuláris permeabilitás növekedést (kapilláris szivárgás) vált ki, ami plazmavesztéshez, hemokoncentrációhoz és shockhoz vezethet.'
          ],
          virulence_factors: ['NS1 protein', 'ADE (Antibody-Dependent Enhancement)']
        },
        clinical: {
          incubation: '4-10 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Lázas fázis', description: 'Hirtelen kezdődő magas láz (40°C), amelyet súlyos fejfájás és retrobulbáris (szem mögötti) fájdalom kísér.', severity: 'severe' },
            { name: '"Csonttörő láz"', description: 'Extrém erős izom- és ízületi fájdalmak (myalgia, arthralgia), amelyek miatt a beteg alig tud mozogni.', severity: 'severe' },
            { name: 'Kritikus fázis', description: 'A láz csökkenésekor (3-7. nap) jelentkezhet. Figyelmeztető jelek: intenzív hasi fájdalom, perzisztáló hányás, folyadékfelhalmozódás (ascites, pleurális effúzió), nyálkahártya-vérzések, letargia vagy nyugtalanság.', severity: 'severe' },
            { name: 'Kiütés', description: 'A láz után megjelenő maculopapularis kiütés, gyakran "fehér szigetek a vörös tengerben" mintázattal.', severity: 'moderate' }
          ],
          physical_exam: [
            'Láz',
            'Arcpír',
            'Tourniquet teszt pozitív (kapilláris fragilitás)',
            'Hepatomegalia',
            'Vérzéses jelek (petechiák, ecchymosis)',
            'Shock jelei (hideg végtagok, gyenge pulzus) a kritikus fázisban'
          ],
          complications: ['Dengue hemorrhagiás láz (DHF)', 'Dengue shock szindróma (DSS)', 'Súlyos szervi károsodás (máj, vese, szív)']
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
        pathogen: { type: 'Vírus', name: '<i>Zika vírus</i> (ZIKV)', gram: 'RNS, Flaviviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Járványos',
          risk_groups: ['Terhesek (magzati károsodás!)', 'Utazók'],
          seasonality: 'Szúnyogszezon',
          transmission: 'Aedes szúnyog, szexuális, vertikális'
        },
        pathomechanism: {
          steps: [
            'Behatolás: A vírus szúnyogcsípéssel, szexuális úton vagy vertikálisan jut a szervezetbe. A bőrben lévő sejtek (keratinocyták, dendritikus sejtek) fertőződnek meg először.',
            'Terjedés: A vírus terjed a nyirokcsomókba és a véráramba (viremia). Képes átjutni a vér-agy gáton és a placenta-barrieren.',
            'Neurotropizmus: Erős neurotropizmussal rendelkezik: a magzati fejlődés során célzottan a neurális progenitor sejteket fertőzi meg és pusztítja el, ami agyi fejlődési rendellenességekhez (microcephalia) vezet.',
            'Szövődmény: Felnőttekben autoimmun mechanizmuson keresztül Guillain-Barré szindrómát válthat ki.'
          ],
          virulence_factors: ['Neurotropizmus', 'Placenta átjárhatóság']
        },
        clinical: {
          incubation: '3-14 nap',
          onset: 'Enyhe',
          symptoms: [
            { name: 'Tünetmentes lefolyás', description: 'A fertőzöttek kb. 80%-a nem mutat tüneteket.', severity: 'mild' },
            { name: 'Kiütés és viszketés', description: 'A leggyakoribb tünet a makulopapulózus kiütés, amely gyakran viszket, és az arcról terjed a törzsre.', severity: 'moderate' },
            { name: 'Láz és fájdalom', description: 'Alacsony láz, ízületi fájdalom (főleg a kéz és láb kisízületei), izomfájdalom és fejfájás.', severity: 'mild' },
            { name: 'Conjunctivitis', description: 'Nem gennyes kötőhártya-gyulladás (vörös szem).', severity: 'moderate' }
          ],
          physical_exam: [
            'Diffúz makulopapulózus kiütés',
            'Nem purulens conjunctivitis',
            'Ízületi duzzanat (kéz/láb)',
            'Hőemelkedés'
          ],
          complications: ['Guillain-Barré szindróma (felnőttek)', 'Congenitalis Zika szindróma (magzati microcephalia, agyi meszesedések, látás/halláskárosodás)']
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
        pathogen: { type: 'Vírus', name: '<i>Chikungunya vírus</i> (CHIKV)', gram: 'RNS, Togaviridae', shape: 'gömb' },
        epidemiology: {
          incidence: 'Járványos',
          risk_groups: ['Utazók'],
          seasonality: 'Szúnyogszezon',
          transmission: 'Aedes szúnyog'
        },
        pathomechanism: {
          steps: [
            'Behatolás: A szúnyogcsípés után a vírus a bőrben replikálódik, majd a véráramba jut.',
            'Tropizmus: Széles körben fertőzi a szöveteket, de különös tropizmust mutat az ízületi tok, az izmok és a bőr fibroblastjai iránt.',
            'Gyulladás: Az ízületekben intenzív gyulladásos választ (monocyták, makrofágok infiltrációja) vált ki, ami akut arthritist okoz.',
            'Krónikussá válás: A vírus vagy antigénjei hónapokig perzisztálhatnak az ízületi szövetekben, krónikus, reumatoid arthritis-szerű panaszokat fenntartva.'
          ],
          virulence_factors: ['Ízületi tropizmus']
        },
        clinical: {
          incubation: '3-7 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Akut fázis', description: 'Hirtelen kezdődő magas láz (>39°C) és kínzó, súlyos ízületi fájdalom (polyarthralgia), amely gyakran mozgásképtelenséget okoz. Az ízületi fájdalom általában szimmetrikus és a végtagok disztális ízületeit érinti.', severity: 'severe' },
            { name: 'Bőrtünetek', description: 'Maculopapularis kiütés a törzsön és a végtagokon (kb. 50%-ban).', severity: 'moderate' },
            { name: 'Krónikus fázis', description: 'A betegek jelentős részénél (30-60%) az ízületi fájdalom és merevség hónapokig vagy évekig visszatérhet vagy fennmaradhat, jelentősen rontva az életminőséget.', severity: 'moderate' }
          ],
          physical_exam: [
            'Magas láz',
            'Szimmetrikus ízületi duzzanat és érzékenység (kéz, csukló, boka)',
            'Tenosynovitis',
            'Maculopapularis kiütés'
          ],
          complications: ['Krónikus, rokkantságot okozó arthritis', 'Ritkán: myocarditis, encephalitis, hepatitis']
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