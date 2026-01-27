Object.assign(window.diseases, {
      zoonotic: {
        name: 'Zoonózisok',
        icon: '🐾',
        color: '#059669',
        diseases: [
          {
            id: 'leptospirosis',
            name: 'Leptospirosis',
            pathogen: { type: 'Spirochaeta', name: 'Leptospira interrogans', gram: 'Gram-negatív', shape: 'spirális, horoggal' },
            epidemiology: {
              incidence: 'Trópusi/szubtrópusi: 10-100/100,000; Mérsékelt öv: 0.1-1/100,000',
              risk_groups: ['Mezőgazdasági munkások', 'Állatorvosok', 'Vágóhídi dolgozók', 'Csatornakarbantartók', 'Vízisport/extrém sport versenyzők', 'Katonák (dzsungel környezet)'],
              seasonality: 'Nyár-ősz, esős évszak',
              transmission: 'Szennyezett víz/talaj expozíció → bőr/nyálkahártya. Rágcsálók/állatok vizeletével terjed'
            },
            pathomechanism: {
              steps: [
                'Leptospira bejut sérült bőrön/nyálkahártyán keresztül',
                'Gyors haematogen terjedés minden szervbe',
                'Endothel károsodás → vaszkuláris permeabilitás fokozódása',
                'Máj, vese, tüdő érintettség',
                'Weil-betegség: súlyos forma - máj- és veseelégtelenség, vérzések',
                'Immunmediált gyulladás (T-sejt aktiváció)'
              ],
              virulence_factors: ['Outer membrane proteins (LipL32)', 'Flagellum (mobilitás)', 'Hemolysinek', 'Lipopoliszacharid', 'Adhezinek']
            },
            clinical: {
              incubation: '2-30 nap (átlag 7-12 nap)',
              onset: 'Bifázisos lefolyás',
              symptoms: [
                { name: 'Hirtelen láz', description: '39-40°C, hidegrázás', severity: 'severe' },
                { name: 'Súlyos fejfájás', description: 'Frontális, retrobulbaris fájdalom', severity: 'severe' },
                { name: 'Myalgia', description: 'Vádli és hát kifejezett fájdalma (jellemző!)', severity: 'severe' },
                { name: 'Conjunctivalis suffusio', description: 'Kötőhártya vérbőség, icterus NÉLKÜL (korai)', severity: 'moderate' },
                { name: 'Icterus', description: 'Weil-betegség (10-15%)', severity: 'severe' },
                { name: 'Vérzéses manifesztációk', description: 'Petechiae, epistaxis, haemoptoe', severity: 'severe' }
              ],
              physical_exam: [
                'Magas láz, tachycardia',
                'Conjunctivalis suffusio (kötőhártya-injekció)',
                'Lymphadenopathia',
                'Hepatomegalia (Weil)',
                'Vádli tapintási érzékenység',
                'Icterus (súlyos)',
                'Meningealis jelek (25%)'
              ],
              complications: ['Weil-betegség (icterus, veseelégtelenség)', 'ARDS', 'Myocarditis', 'Rhabdomyolysis', 'Uveitis (késői)', 'Asepticus meningitis', 'Halál (5-15% súlyos esetben)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis, thrombocytopenia', interpretation: 'Nem specifikus' },
                { test: 'Vese', finding: 'Kreatinin↑, proteinuria, hematuria', interpretation: 'Weil-betegség' },
                { test: 'Máj', finding: 'Bilirubin↑↑ (direkt), enyhe transzamináz↑', interpretation: 'Kolesztatikus pattern' },
                { test: 'CK', finding: 'Emelkedett', interpretation: 'Myositis' },
                { test: 'CRP/We', finding: 'Markánsan emelkedett', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Diffúz infiltrátum, alveoláris vérzés', significance: 'Pulmonalis hemorrhagia' },
                { modality: 'Has UH', finding: 'Hepatomegalia, ascites', significance: 'Súlyosság felmérés' }
              ],
              microbiology: [
                { test: 'Mikroagglutinációs teszt (MAT)', finding: '≥1:400 titer vagy 4x↑', significance: 'Gold standard, de késői (7-10 nap)' },
                { test: 'ELISA IgM', finding: 'Pozitív', significance: 'Gyorsabb, akut fázis' },
                { test: 'Vér/vizelet tenyésztés', finding: 'Leptospira izolálás (EMJH médium)', significance: 'Korai (<7 nap vér, >7 nap vizelet), lassú (hetek)' },
                { test: 'PCR', finding: 'Leptospira DNS', significance: 'Gyors, érzékeny korai fázisban' }
              ]
            },
            differential: [
              { disease: 'Dengue láz', distinguishing: 'Trombocitopénia hangsúlyosabb, tourniquet teszt+, nem vádli fájdalom' },
              { disease: 'Malária', finding: 'Plasmodium kenet, perifériás vér, hidegrázás periodicitása' },
              { disease: 'Hantavírus', distinguishing: 'Rágcsáló expozíció, proteinuria súlyosabb, thrombocytopenia' },
              { disease: 'Rickettsiózisos', distinguishing: 'Rash jellegzetes, eschar, kullancs expozíció' },
              { disease: 'Vírusos hepatitis', distinguishing: 'Transzaminázok sokkal magasabbak, szerológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '7 nap', note: 'Első választás enyhe esetben' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '7 nap', note: 'Alternatíva (várandós, gyermek)' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '6x1.5 millió NE IV', duration: '7 nap', note: 'Súlyos/Weil-betegség' },
                  { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '7 nap', note: 'Alternatíva' }
                ],
                icu: [
                  { drug: 'Penicillin G', dose: '6x1.5 millió NE IV', duration: '7 nap', note: 'Súlyos Weil-betegség' },
                  { drug: 'Dialízis', dose: 'Ha veseelégtelenség', duration: '', note: 'Szupportív' },
                  { drug: 'Lélegeztetés', dose: 'Pulmonalis hemorrhagia', duration: '', note: 'ARDS' }
                ]
              },
              targeted: 'Enyhe: Doxycyclin; Súlyos: Penicillin G vagy Ceftriaxon',
              supportive: ['Folyadékpótlás', 'Dialízis (veseelégtelenség)', 'Lélegeztetés (ARDS)', 'Transzfúzió (vérzés)'],
              prevention: ['Doxycyclin kemoprofilaxis (200mg/hét extrém sport)', 'Védőruha rizikómunkában', 'Rágcsálóirtás', 'Állatoltás (kutya)', 'Vízforrások tisztítása']
            },
            prognosis: {
              mortality: 'Enyhe: <1%; Weil-betegség: 5-15%; Pulmonalis hemorrhagia: 50%+',
              prognostic_scores: ['APACHE II', 'SOFA'],
              factors: 'Icterus, veseelégtelenség, tüdővérzés, thrombocytopenia, életkor'
            }
          },
          {
            id: 'hantavirus',
            name: 'Hantavírus fertőzés',
            pathogen: { type: 'Vírus', name: 'Hantavírus (több szerotípus)', gram: 'Negatív-szálú RNS vírus, Bunyaviridae', shape: 'szferikus' },
            epidemiology: {
              incidence: 'Európa: HFRS 10,000+ eset/év; USA: HPS <50 eset/év',
              risk_groups: ['Mezőgazdasági munkások', 'Erdészek', 'Katonák', 'Kempingezők/túrázók', 'Rágcsálókkal kontakt munka', 'Rosszul szellőzött épületek takarítása'],
              seasonality: 'Tavasz-ősz (rágcsáló populáció csúcs)',
              transmission: 'Aeroszol (rágcsáló ürülék/vizelet/nyál). NEM embertől emberig!'
            },
            pathomechanism: {
              steps: [
                'Hantavírus inhaláció (rágcsáló ürülék/vizelet por)',
                'Vírus endothel sejteket fertőz (nem citopatikus)',
                'Immunmediált vaszkuláris permeabilitás fokozódás',
                'HFRS: vese érintettség (capillary leak szindróma)',
                'HPS: pulmonalis capillary leak → tüdőödéma, kardiogén shock',
                'Trombocitopénia és koagulációs zavarok'
              ],
              virulence_factors: ['Nukleokapsid protein (immunválasz)', 'Glikoprotein Gn/Gc (sejt entry)', 'Endothel tropizmus', 'Immunmoduláció']
            },
            clinical: {
              incubation: '1-8 hét (átlag 2-4 hét)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Láz', description: '39-41°C, hirtelen kezdet', severity: 'severe' },
                { name: 'Fejfájás', description: 'Intenzív, retrobulbaris', severity: 'severe' },
                { name: 'Hasi/hát fájdalom', description: 'Vesefájdalom (HFRS)', severity: 'severe' },
                { name: 'Oliguria/anuria', description: 'Akut veseelégtelenség (HFRS)', severity: 'severe' },
                { name: 'Dyspnoe', description: 'Gyorsan progrediáló (HPS)', severity: 'severe' },
                { name: 'Myalgia', description: 'Vádli, derék', severity: 'moderate' },
                { name: 'Látászavar', description: 'Homályos látás', severity: 'moderate' }
              ],
              physical_exam: [
                'Magas láz',
                'Facialis flush (arc kipirulása)',
                'Conjunctivalis injekció',
                'Petechiae (szájpad, axilla)',
                'Proteinuria, hematuria',
                'Hypotenzió (HPS)',
                'Pulmonalis ödéma jelek (HPS)'
              ],
              complications: ['Akut veseelégtelenség (HFRS)', 'Kardiogén pulmonalis ödéma (HPS)', 'Shock', 'Intrakraniális vérzés', 'Hypofízis vérzés', 'Halál (HFRS 1-15%, HPS 30-50%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Thrombocytopenia (<100 G/L), leukocytosis, atípusos lymphocyták', interpretation: 'Jellegzetes triász!' },
                { test: 'Vese', finding: 'Kreatinin↑↑, BUN↑, proteinuria+++, hematuria', interpretation: 'HFRS' },
                { test: 'Hemokoncentráció', finding: 'Hematokrit↑', interpretation: 'Capillary leak (HPS)' },
                { test: 'Koagulogram', finding: 'DIC jelek lehetnek', interpretation: 'Súlyos eset' },
                { test: 'Májenzimek', finding: 'Enyhe AST/ALT↑', interpretation: 'Gyakori' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Bilaterális interstitialis infiltrátumok, pleura folyadék', significance: 'HPS' },
                { modality: 'Has UH', finding: 'Vese megnagyobbodás, echogenitás↑, ascites', significance: 'HFRS' }
              ],
              microbiology: [
                { test: 'ELISA IgM/IgG', finding: 'Hantavírus specifikus antitestek', significance: 'Gold standard, korai pozitív (3-7 nap)' },
                { test: 'RT-PCR', finding: 'Vírus RNS (vér, vizelet)', significance: 'Korai fázis, szerotipizálás' },
                { test: 'Immunhisztokémia', finding: 'Szöveti vírus antigén', significance: 'Kutatás, boncolás' }
              ]
            },
            differential: [
              { disease: 'Leptospirosis', distinguishing: 'Vádli fájdalom, conjunctivalis suffusio, vízexpozíció' },
              { disease: 'Rickettsiózisos', distinguishing: 'Rash, eschar, kullancs expozíció' },
              { disease: 'Akut glomerulonephritis', distinguishing: 'Ödéma, hypertonia, Streptococcus anamnézis' },
              { disease: 'Szeptikus shock', distinguishing: 'Magas PCT, pozitív tenyésztés' },
              { disease: 'Influenza súlyos pneumonia', distinguishing: 'Szezonalitás, nincs thrombocytopenia/proteinuria' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NINCS specifikus antivirális', dose: 'Szupportív kezelés', duration: '', note: 'Enyhe esetben otthoni megfigyelés' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: '33mg/kg IV loading, majd 16mg/kg 6 óránként', duration: '4 nap, majd 8mg/kg 8 óránként 3 nap', note: 'HFRS-ben hatékony, korai fázisban (<5 nap)' },
                  { drug: 'Folyadékpótlás', dose: 'Óvatos! Kapilláris leak miatt', duration: '', note: 'Monitorizálás' }
                ],
                icu: [
                  { drug: 'Dialízis', dose: 'Veseelégtelenség', duration: '', note: 'HFRS' },
                  { drug: 'Invazív lélegeztetés + ECMO', dose: 'HPS', duration: '', note: 'Kardiogén shock' },
                  { drug: 'Inotrop támogatás', dose: 'Dobutamin, noradrenalin', duration: '', note: 'HPS shock fázis' }
                ]
              },
              targeted: 'Ribavirin HFRS-ben korai fázisban; HPS-ben nem bizonyított hatékonyság',
              supportive: ['Óvatos folyadékterápia (kapilláris leak!)', 'Dialízis (veseelégtelenség)', 'Lélegeztetés/ECMO (HPS)', 'Inotrop támogatás', 'Transzfúzió (thrombocytopenia)'],
              prevention: ['Rágcsáló kontroll', 'Védőmaszk poros helyen', 'Épületek szellőztetése tisztítás előtt', 'Kesztyű használata', 'NINCS vakcina (kísérleti)']
            },
            prognosis: {
              mortality: 'HFRS: 1-15% (szerotípus függő); HPS: 30-50%',
              prognostic_scores: ['APACHE II', 'Thrombocytopenia mértéke'],
              factors: 'Szerotípus, korai diagnózis, HPS vs HFRS, shock jelenléte'
            }
          },
          {
            id: 'lyme',
            name: 'Lyme-kór (Borreliosis)',
            pathogen: { type: 'Spirochaeta', name: 'Borrelia burgdorferi sensu lato', gram: 'Gram-negatív', shape: 'spirális' },
            epidemiology: {
              incidence: 'USA: 476,000 eset/év; Európa: 232,000 eset/év',
              risk_groups: ['Erdei területek látogatói', 'Kirándulók, kempingezők', 'Erdészek, vadászok', 'Kertészek', 'Gyerekek (nyári játék)'],
              seasonality: 'Április-október (kullancs aktivitás)',
              transmission: 'Ixodes kullancs csípés (>24-36 óra attached)'
            },
            pathomechanism: {
              steps: [
                'Kullancs csípés → Borrelia inokulálása',
                'Lokális terjedés a bőrben → erythema migrans',
                'Haematogen disszeminálás (napok-hetek)',
                'Korai disszeminált: szív, idegrendszer, ízületek',
                'Késői: krónikus arthritis, neuroborreliosis',
                'Spirochaeta antigének perzisztálhatnak (immunválasz folytatódik)'
              ],
              virulence_factors: ['Outer surface proteins (OspA, OspC)', 'VlsE (antigén variáció)', 'Komplement rezisztencia', 'Extracelluláris mátrix adherencia']
            },
            clinical: {
              incubation: '3-30 nap (átlag 7 nap)',
              onset: 'Stádiumos',
              symptoms: [
                { name: 'Erythema migrans (EM)', description: 'Terjeszkedő "céltábla" kiütés (70-80%)', severity: 'moderate' },
                { name: 'Influenza-szerű tünetek', description: 'Láz, fáradtság, myalgia, fejfájás', severity: 'mild' },
                { name: 'Idegrendszeri', description: 'Facialis paresis (Bell-bénulás), meningitis, radiculopathia', severity: 'severe' },
                { name: 'Kardiális', description: 'AV blokk (ritkán)', severity: 'severe' },
                { name: 'Arthritis', description: 'Krónikus, térd dominál (60%)', severity: 'moderate' },
                { name: 'Acrodermatitis chronica atrophicans', description: 'Késői bőrtünet (Európa)', severity: 'mild' }
              ],
              physical_exam: [
                'Korai lokalizált: EM (átmérő 5-70cm, gyakran centrális clearance)',
                'Multiplex EM (disszeminált)',
                'Lymphocytoma (fülcimpa, mamma)',
                'Facialis paresis (uni/bilaterális)',
                'Meningealis jelek',
                'Monarthritis/oligoarthritis (térd)',
                'Bőr atrófia (ACA)'
              ],
              complications: ['Krónikus Lyme arthritis', 'Post-Lyme szindróma', 'Encephalomyelitis', 'Keratitis', 'Krónikus fáradtság']
            },
            diagnostics: {
              laboratory: [
                { test: 'Kétlépcsős szerológia: ELISA → Western blot', finding: 'IgM (2-4 hét), IgG (4-6 hét)', interpretation: 'Gold standard, de korai EM-ben negatív lehet!' },
                { test: 'Liquor', finding: 'Lymphocytás pleocytosis, ↑fehérje, intrathekális Ab termelés', interpretation: 'Neuroborreliosis' },
                { test: 'Ízületi folyadék', finding: 'Gyulladásos (WBC >10,000), PCR+', interpretation: 'Lyme arthritis' }
              ],
              imaging: [
                { modality: 'MRI agy', finding: 'White matter léziók (neuroborreliosis)', significance: 'Ritka, differenciáldiagnózis' },
                { modality: 'EKG', finding: 'AV blokk (1-3 fokozat)', significance: 'Lyme carditis' }
              ],
              microbiology: [
                { test: 'Szerológia (ELISA + Western blot)', finding: 'IgM/IgG pozitív', significance: 'Kétlépcsős algoritmus! Fals pozitív gyakori' },
                { test: 'PCR (ízületi folyadék, liquor)', finding: 'Borrelia DNS', significance: 'Alacsony szenzitivitás' },
                { test: 'Tenyésztés', finding: 'Nem rutin (hetekig tart)', significance: 'Csak speciális esetben' }
              ]
            },
            differential: [
              { disease: 'Tinea corporis (gyűrűsféreg)', distinguishing: 'Nem terjeszkedik, hámlik, KOH mikroszkópia' },
              { disease: 'Southern tick-associated rash illness (STARI)', distinguishing: 'Lone Star tick, szerológia negatív' },
              { disease: 'Reaktív arthritis', distinguishing: 'GI/GU fertőzés, HLA-B27' },
              { disease: 'Rheumatoid arthritis', distinguishing: 'RF/anti-CCP pozitív, szimmetrikus' },
              { disease: 'MS', distinguishing: 'MRI pattern, oligoklonális sávok' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '10-14 nap (EM), 14-21 nap (arthritis)', note: 'Első választás felnőtt/gyerek >8év' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '14-21 nap', note: 'Várandós, gyerek <8év' },
                  { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '14-21 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '14-28 nap', note: 'Neuroborreliosis, Lyme carditis (AV blokk >1°)' },
                  { drug: 'Penicillin G', dose: '4x5 millió NE IV', duration: '14-28 nap', note: 'Alternatíva neuroborreliosis' }
                ],
                icu: [
                  { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '28 nap', note: 'Súlyos neuroborreliosis' },
                  { drug: 'Pacemaker (átmeneti)', dose: 'Komplett AV blokk', duration: '', note: 'Carditis' }
                ]
              },
              targeted: 'Korai: Doxycyclin; Neuroborreliosis/Carditis: Ceftriaxon IV',
              supportive: ['Jarisch-Herxheimer reakció lehetséges', 'NSAIDs (arthritis)', 'Átmeneti pacemaker (teljes blokk)'],
              prevention: ['Védőruha erdőben', 'Repellensek (DEET)', 'Kullancs eltávolítás <24 óra', 'Egyetlen dózis doxycyclin (200mg) <72 óra csípés után (endémiás területen)', 'Nincsen hatékony vakcina']
            },
            prognosis: {
              mortality: '<0.001% (Lyme carditis ritka haláleset)',
              prognostic_scores: ['Nincs specifikus'],
              factors: 'Korai kezelés, stádium, szerv érintettség, neurológiai/kardiális komplikáció'
            }
          },
          {
            id: 'tularemia',
            name: 'Tularémia (Nyúlpestis)',
            pathogen: { type: 'Baktérium', name: 'Francisella tularensis', gram: 'Gram-negatív', shape: 'kocko-pálca, intracelluláris' },
            epidemiology: {
              incidence: 'USA: 100-200 eset/év; Európa: sporadikus',
              risk_groups: ['Vadászok', 'Bőrfeldolgozók', 'Mezőgazdasági munkások', 'Laboránsok', 'Erdészek', 'Állatorvosok'],
              seasonality: 'Nyár (kullancs), tél (vadászat)',
              transmission: 'Kullancs/légy csípés, fertőzött állat kontakt (nyúl, rágcsáló), inhaláció, víz/táplálék'
            },
            pathomechanism: {
              steps: [
                'Francisella bejut bőrön/nyálkahártyán/inhalálva',
                'Fagocitózis macrophagok/dendritikus sejtek',
                'Intracelluláris replikáció (fagoszómából kiszabadulás)',
                'Regionális nyirokcsomók → nekrotizáló granuloma',
                'Lymphadenitis, typhoidealis szórás',
                'Magas fertőzőképesség (<10 organizmus elegendő)'
              ],
              virulence_factors: ['Kapszula', 'Fagoszóma escape (iglA-D lókusz)', 'LPS (toxikus)', 'Sziderofórok', 'Intracelluláris túlélés']
            },
            clinical: {
              incubation: '3-5 nap (1-14 nap)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Láz', description: '39-41°C, hirtelen', severity: 'severe' },
                { name: 'Bőrfekély', description: 'Fájdalmas papula → pusztula → fekély (ulceroglandularis)', severity: 'moderate' },
                { name: 'Lymphadenitis', description: 'Regionális, nagyon fájdalmas, fluktualó', severity: 'severe' },
                { name: 'Tífuszszerű tünetek', description: 'Typhoidealis forma: láz, prostráció, NINCS lokális lézió', severity: 'severe' },
                { name: 'Pneumonia', description: 'Pulmonalis forma: köhögés, mellkasi fájdalom', severity: 'severe' },
                { name: 'Oculoglandularis', description: 'Conjunctivitis + preauricularis lymphadenitis', severity: 'moderate' }
              ],
              physical_exam: [
                'Ulceroglandularis (75%): bőrfekély (fekete eschar) + tender nyirokcsomó',
                'Glandularis: nyirokcsomó NINCS fekély',
                'Oculoglandularis: conjunctivitis, nodularis léziók, nyirokcsomó',
                'Oropharyngealis: tonsillitis, nyaki nyirokcsomó',
                'Typhoidealis: láz, hepatosplenomegalia, NINCS lokalizáció',
                'Pulmonalis: pneumonia jelek'
              ],
              complications: ['Tályogképződés (nyirokcsomó)', 'Sepszis', 'ARDS', 'Meningitis', 'Pericarditis', 'Osteomyelitis', 'Halál (kezeletlen 5-15%, kezelt <2%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál vagy leukopenia', interpretation: 'Nem specifikus' },
                { test: 'CRP/We', finding: 'Emelkedett', interpretation: 'Gyulladás' },
                { test: 'Májenzimek', finding: 'AST/ALT enyhe emelkedés', interpretation: 'Typhoidealis' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Infiltrátum, hiláris lymphadenopathia, pleura folyadék', significance: 'Pulmonalis/typhoidealis' },
                { modality: 'CT nyak/mellkas', finding: 'Nekrotizáló lymphadenitis', significance: 'Tályog kimutatása' }
              ],
              microbiology: [
                { test: 'Szerológia (agglutináció)', finding: 'Titer ≥1:160 vagy 4x↑', significance: 'Retrospektív diagnózis (2-3 hét)' },
                { test: 'PCR', finding: 'F. tularensis DNS (fekély, nyirokcsomó)', significance: 'Gyors, érzékeny' },
                { test: 'Tenyésztés', finding: 'Speciális médium (BSL-3!), VESZÉLYES!', significance: 'Kerülendő (lab fertőzés rizikó)' },
                { test: 'Immunhisztokémia', finding: 'Antigén kimutatás szövetből', significance: 'Biopszia esetén' }
              ]
            },
            differential: [
              { disease: 'Lyme-kór', distinguishing: 'EM kiütés, szerológia, kevésbé toxikus' },
              { disease: 'Macskakarmolás betegség', distinguishing: 'Macska kontakt, Bartonella szerológia' },
              { disease: 'Pyogen lymphadenitis (Staph/Strep)', distinguishing: 'Gyorsabb, antibiotikumra reagál, tenyésztés' },
              { disease: 'Mycobacteriosis (atípusos)', distinguishing: 'Lassabb, AFB, tenyésztés' },
              { disease: 'Pestis', distinguishing: 'Bubo még fájdalmasabb, geográfia, Yersinia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '14-21 nap', note: 'Enyhe forma első választás' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '14-21 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Streptomycin', dose: '2x7.5-10mg/kg IM', duration: '10 nap', note: 'Gold standard súlyos esetben' },
                  { drug: 'Gentamicin', dose: '1x5mg/kg IV', duration: '10 nap', note: 'Streptomycin nem elérhető' },
                  { drug: 'Doxycyclin', dose: '2x100mg IV', duration: '14-21 nap', note: 'Kombinációban' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycyclin', dose: 'Kombinációban', duration: '14-21 nap', note: 'Typhoidealis/pulmonalis súlyos' },
                  { drug: 'Ciprofloxacin', dose: '2x400mg IV', duration: '14-21 nap', note: 'Meningitis esetén jobb penetráció' }
                ]
              },
              targeted: 'Aminoglikozid (Streptomycin, Gentamicin) első választás; Doxycyclin/Ciprofloxacin alternatíva',
              supportive: ['Sebészi drenázs (fluktualó nyirokcsomó)', 'Folyadékpótlás', 'Izolálás NEM szükséges (nincs ember-ember terjedés)', 'Antipyretikumok'],
              prevention: ['Védőkesztyű állat kezelésnél', 'Repellensek (kullancs)', 'Hús megfelelő főzése', 'Vakcina (csak katonai/labor személyzet, USA)', 'Antibiotikum profilaxis magas kockázatú expozíció után (doxycyclin 14 nap)']
            },
            prognosis: {
              mortality: 'Kezeletlen: 5-15%; Kezelt: <2%',
              prognostic_scores: ['Nincs specifikus'],
              factors: 'Forma (typhoidealis/pulmonalis rosszabb), korai kezelés, életkor'
            }
          },
          {
            id: 'cat_scratch',
            name: 'Macskakarmolási betegség (Cat-Scratch Disease)',
            pathogen: { type: 'Baktérium', name: 'Bartonella henselae', gram: 'Gram-negatív', shape: 'pálca, intracelluláris' },
            epidemiology: {
              incidence: 'USA: ~12,000 eset/év (becslés), aluldiagnosztizált',
              risk_groups: ['Gyerekek <10 év', 'Macskával kontakt', 'Bolha expozíció', 'Immunszupprimáltak (HIV)', 'Állatorvosok, shelter dolgozók'],
              seasonality: 'Ősz-tél (macskakölykök)',
              transmission: 'Macska karcolás/harapás (95%), ritkán kutya, bolha'
            },
            pathomechanism: {
              steps: [
                'Bartonella inokulálása macska nyállal (karcolás/harapás)',
                'Lokális inokulációs papula/pusztula',
                'Regionális nyirokcsomók inváziója',
                'Granulomatózus lymphadenitis (stellata nekrózissal)',
                'Ritka disszeminálás (immunszupprimált): bacilláris angiomatózis, endocarditis',
                'Immunválasz általában eradikálja (hetek-hónapok)'
              ],
              virulence_factors: ['Flagellum', 'Pili', 'Adhezinek', 'BadA autotranszporter', 'Intracelluláris túlélés (erythrocyták, endothel)']
            },
            clinical: {
              incubation: '3-10 nap (papula), 1-3 hét (lymphadenitis)',
              onset: 'Szubakut',
              symptoms: [
                { name: 'Inokulációs lézió', description: 'Papula/pusztula a karcolás helyén (50%)', severity: 'mild' },
                { name: 'Regionális lymphadenitis', description: 'Fájdalmas nyirokcsomó megnagyobbodás (elsődleges jel)', severity: 'moderate' },
                { name: 'Láz', description: 'Enyhe-közepes (30%)', severity: 'mild' },
                { name: 'Fejfájás, fáradtság', description: 'Általános tünetek', severity: 'mild' },
                { name: 'Parinaud oculoglandularis szindróma', description: 'Conjunctivitis + preauricularis lymphadenitis (5%)', severity: 'moderate' },
                { name: 'Encephalopathia', description: 'Ritka (2%), gyerekeknél', severity: 'severe' }
              ],
              physical_exam: [
                'Papula/pusztula a karcolás helyén (gyógyul, hegesedik)',
                'Egyoldali regionális lymphadenomegalia (axillaris, epitrochlearis, nyaki)',
                'Nyirokcsomó: fájdalmas, 1-5cm, testhőmérséklet felett meleg',
                'Fluktualó (10-15%) → gennyes',
                'Parinaud szindróma: conjunctivitis, preauricularis nyirokcsomó',
                'Hepatosplenomegalia (disszeminált)'
              ],
              complications: ['Nyirokcsomó tályogképződés', 'Encephalitis/encephalopathia', 'Osteomyelitis', 'Endocarditis (ritka)', 'Bacilláris angiomatózis (HIV+)', 'Neuroretinitis', 'Peliosis hepatis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál vagy enyhe leukocytosis', interpretation: 'Nem specifikus' },
                { test: 'CRP/We', finding: 'Enyhe-közepes emelkedés', interpretation: 'Gyulladás' },
                { test: 'Máj/lép enzimek', finding: 'Emelkedett (disszeminált)', interpretation: 'Hepatosplenikus érintettség' }
              ],
              imaging: [
                { modality: 'UH (nyirokcsomó)', finding: 'Megnagyobbodott, hipoechogén, fluktualó (tályog)', significance: 'Drenázs szükségessége' },
                { modality: 'CT/MRI', finding: 'Splén/máj léziók (bacilláris angiomatózis)', significance: 'Disszeminált betegség' }
              ],
              microbiology: [
                { test: 'Bartonella szerológia (IgG/IgM)', finding: 'IgG ≥1:256 (akut), ≥1:512 (endocarditis)', significance: 'Gold standard, 2-6 hét pozitív' },
                { test: 'PCR (nyirokcsomó biopszia)', finding: 'Bartonella DNS', significance: 'Érzékeny, gyors' },
                { test: 'Warthin-Starry ezüst festés', finding: 'Bacillusok szöveti mintában', significance: 'Histológia' },
                { test: 'Vér tenyésztés (speciális)', finding: 'Lassú növekedés (6-8 hét), nehéz', significance: 'Endocarditis' }
              ]
            },
            differential: [
              { disease: 'Pyogen lymphadenitis (Staph/Strep)', distinguishing: 'Gyorsabb kezdet, antibiotikumra gyors válasz' },
              { disease: 'Toxoplasmosis', distinguishing: 'Bilaterális nyaki nyirokcsomó, szerológia' },
              { disease: 'Mycobacteriosis (atípusos)', distinguishing: 'AFB pozitív, lassabb, tenyésztés' },
              { disease: 'Tularémia', distinguishing: 'Vadállat expozíció, fekély súlyosabb, szerológia' },
              { disease: 'Lymphoma', distinguishing: 'Progresszív, biopszia' },
              { disease: 'Mononukleózis', distinguishing: 'Torokfájás, splenomegalia, monospot/EBV szerológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg D1, majd 250mg/nap', duration: '5 nap', note: 'Első választás, redukálja a nyirokcsomó méretet' },
                  { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '4-6 hét', note: 'Alternatíva felnőttben' },
                  { drug: 'MEGFIGYELÉS', dose: 'Önkorlátozó betegség', duration: '2-4 hónap', note: 'Enyhe esetben antibiotikum nem feltétlenül szükséges' }
                ],
                inpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg IV', duration: '5 nap, majd PO', note: 'Ha PO nem tolerált' },
                  { drug: 'Doxycyclin + Rifampicin', dose: '2x100mg + 2x300mg PO', duration: '4-6 hét', note: 'Neuroretinitis' }
                ],
                icu: [
                  { drug: 'Gentamicin + Doxycyclin', dose: '3mg/kg/nap IV + 2x100mg PO/IV', duration: '6 hét', note: 'Endocarditis' },
                  { drug: 'Sebészet', dose: 'Szívbillentyű csere', duration: '', note: 'Bartonella endocarditis' }
                ]
              },
              targeted: 'Typikus CSD: Azithromycin (opcionális); Neuroretinitis/súlyos: Doxycyclin±Rifampicin; Endocarditis: Gentamicin+Doxycyclin±sebészet',
              supportive: ['Sebészi drenázs (fluktualó nyirokcsomó)', 'Analgetikumok', 'Meleg borogatás', 'NE INCISOS BIOPSZIA (hegesedés, sinus képződés)'],
              prevention: ['Macska bolhamentesítés', 'Karmolás/harapás kerülése (játék)', 'Kézmosás macska érintés után', 'Sebfertőtlenítés', 'Immunszupprimáltak: kerüljék a macskákat']
            },
            prognosis: {
              mortality: '<1% (endocarditis ritka)',
              prognostic_scores: ['Nincs'],
              factors: 'Immunstátusz (HIV: bacilláris angiomatózis), szövődmények (endocarditis), életkor'
            }
          },
          {
            id: 'q_fever_zoo',
            name: 'Q-láz',
            pathogen: { type: 'Baktérium', name: 'Coxiella burnetii', gram: 'Gram-negatív (intracelluláris)', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'Zoonózis, foglalkozási betegség',
              risk_groups: ['Állattenyésztők', 'Vágóhídi dolgozók', 'Állatorvosok'],
              seasonality: 'Tavasz (ellési szezon)',
              transmission: 'Aeroszol (placenta, magzatvíz, tej, ürülék pora)'
            },
            pathomechanism: {
              steps: [
                'Inhaláció (egyetlen baktérium is fertőzhet!)',
                'Alveolaris macrophagok fertőzése',
                'Savas fagoszómában szaporodás',
                'Haematogen szórás',
                'Granuloma képződés (doughnut granuloma)'
              ],
              virulence_factors: ['Spóraszerű forma (ellenálló)', 'LPS fázisvariáció']
            },
            clinical: {
              incubation: '2-3 hét',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Láz', description: 'Magas, elhúzódó', severity: 'severe' },
                { name: 'Fejfájás', description: 'Retrobulbaris', severity: 'severe' },
                { name: 'Hepatitis', description: 'Jobb bordaív alatti fájdalom', severity: 'moderate' },
                { name: 'Pneumonia', description: 'Atípusos, enyhe köhögés', severity: 'moderate' }
              ],
              physical_exam: [
                'Hepatomegalia',
                'Splenomegalia',
                'Relatív bradycardia'
              ],
              complications: ['Krónikus Q-láz (Endocarditis)', 'Osteomyelitis', 'Krónikus hepatitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Májenzimek', finding: 'Emelkedett', interpretation: 'Hepatitis' },
                { test: 'Thrombocytopenia', finding: 'Enyhe', interpretation: 'Gyakori' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Kerekded opacitások, többszörös', significance: 'Pneumonia' },
                { modality: 'Echo', finding: 'Vegetáció', significance: 'Endocarditis (krónikus)' }
              ],
              microbiology: [
                { test: 'Szerológia (IF)', finding: 'Fázis II (akut), Fázis I (krónikus)', significance: 'Diagnosztikus' },
                { test: 'PCR', finding: 'Vérből', significance: 'Korai fázisban' }
              ]
            },
            differential: [
              { disease: 'Brucellosis', distinguishing: 'Hullámzó láz, tejtermék' },
              { disease: 'Influenza', distinguishing: 'Szezonalitás, légúti tünetek dominálnak' },
              { disease: 'Vírusos hepatitis', distinguishing: 'Szerológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14 nap', note: 'Akut Q-láz' }
                ],
                inpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14 nap', note: '' }
                ],
                icu: [
                  { drug: 'Doxycyclin + Hydroxychloroquin', dose: 'Hosszú távú', duration: '18-24 hónap', note: 'Krónikus Q-láz (endocarditis)' }
                ]
              },
              targeted: 'Doxycyclin',
              supportive: ['Lázcsillapítás'],
              prevention: ['Védőfelszerelés ellésnél', 'Tej pasztőrözése', 'Vakcina (Ausztrália)']
            },
            prognosis: {
              mortality: 'Akut <2%, Krónikus (endocarditis) magas kezeletlenül',
              prognostic_scores: ['Nincs'],
              factors: 'Billentyűhiba, immunszuppresszió'
            }
          },
          {
            id: 'rabies',
            name: 'Veszettség (Rabies)',
            pathogen: { type: 'Vírus', name: 'Rabies lyssavirus', gram: 'RNS vírus', shape: 'lövedék' },
            epidemiology: {
              incidence: 'Világszerte 59,000 halál/év (főleg Ázsia, Afrika)',
              risk_groups: ['Állatokkal foglalkozók', 'Endémiás területre utazók', 'Barlangászok (denevér)'],
              seasonality: 'Nincs',
              transmission: 'Harapás (nyál), karmolás, nyálkahártya kontaktus'
            },
            pathomechanism: {
              steps: [
                'Inokuláció (izomszövet)',
                'Perifériás idegekbe jutás (NMJ)',
                'Retrográd axonális transzport a KIR-be',
                'Replikáció az agyban (Negri-testek)',
                'Centrifugális terjedés (nyálmirigyek, cornea)'
              ],
              virulence_factors: ['Neurotropizmus', 'Immunelkerülés']
            },
            clinical: {
              incubation: '1-3 hónap (napoktól évekig)',
              onset: 'Prodroma után akut neurológiai',
              symptoms: [
                { name: 'Prodroma', description: 'Láz, fájdalom/zsibbadás a harapás helyén', severity: 'moderate' },
                { name: 'Hydrophobia', description: 'Gégegörcs víz látványára/iváskor', severity: 'severe' },
                { name: 'Agitáció', description: 'Dühöngő forma (80%)', severity: 'severe' },
                { name: 'Bénulás', description: 'Csendes forma (20%)', severity: 'severe' },
                { name: 'Kóma', description: 'Végstádium', severity: 'severe' }
              ],
              physical_exam: [
                'Autonóm instabilitás (hypersalivatio, piloerectio)',
                'Mentális státusz változás',
                'Fokális neurológiai jelek',
                'Láz'
              ],
              complications: ['Halál (közel 100%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Nincs korai marker', finding: '-', interpretation: 'Klinikai gyanú!' }
              ],
              imaging: [
                { modality: 'MRI', finding: 'Nem specifikus encephalitis', significance: 'Kizárás' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'Nyál, tarkóbőr biopszia (szőrtüsző)', significance: 'Diagnosztikus (ante mortem)' },
                { test: 'Antigén kimutatás', finding: 'Cornea lenyomat, bőr', significance: 'DFA' },
                { test: 'Szerológia', finding: 'Liquor/szérum', significance: 'Késői' }
              ]
            },
            differential: [
              { disease: 'Tetanus', distinguishing: 'Trismus, nincs hydrophobia/pleocytosis' },
              { disease: 'Egyéb encephalitis', distinguishing: 'Nincs harapás anamnézis, hydrophobia' },
              { disease: 'Pszichiátriai kórkép', distinguishing: 'Láz, progresszió' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Post-expozíciós profilaxis (PEP)', dose: 'AZONNAL!', duration: '', note: 'Életmentő!' }
                ],
                inpatient: [
                  { drug: 'Palliatív szedáció', dose: 'Tüneti', duration: '', note: 'Klinikai veszettség esetén' }
                ],
                icu: [
                  { drug: 'Milwaukee protokoll', dose: 'Kísérleti', duration: '', note: 'Nem ajánlott rutinszerűen (sikertelen)' }
                ]
              },
              targeted: 'Nincs hatékony terápia tünetek megjelenése után.',
              supportive: ['Szedáció', 'Fájdalomcsillapítás', 'Izolálás'],
              prevention: ['PEP: Sebtisztítás + Vakcina (0, 3, 7, 14. nap) + RIG (immunglobulin)', 'Állatok vakcinázása', 'Pre-expozíciós oltás (utazók, szakmabeliek)']
            },
            prognosis: {
              mortality: 'Tünetek megjelenése után ~100%',
              prognostic_scores: ['Nincs'],
              factors: 'Harapás helye (fej/nyak rosszabb), inokulum mérete'
            }
          },
          {
            id: 'anthrax',
            name: 'Lépfene (Anthrax)',
            pathogen: { type: 'Baktérium', name: 'Bacillus anthracis', gram: 'Gram-pozitív', shape: 'spóraképző pálca' },
            epidemiology: {
              incidence: 'Ritka, bioterrorizmus veszély',
              risk_groups: ['Állatbőr feldolgozók', 'Állattenyésztők', 'Laboránsok'],
              seasonality: 'Nincs',
              transmission: 'Spóra inokuláció (bőr), inhaláció, lenyelés'
            },
            pathomechanism: {
              steps: [
                'Spóra bejutás → germináció',
                'Toxin termelés (Edema toxin, Lethal toxin)',
                'Kapszula (fagocitózis gátlás)',
                'Szöveti nekrózis, ödéma, szisztémás toxicitás'
              ],
              virulence_factors: ['Poly-D-glutaminsav kapszula', 'Protective Antigen (PA)', 'Edema Factor (EF)', 'Lethal Factor (LF)']
            },
            clinical: {
              incubation: 'Bőr: 1-7 nap; Inhalációs: 1-60 nap',
              onset: 'Formától függ',
              symptoms: [
                { name: 'Bőr anthrax', description: 'Papula → vezikula → fekete pörk (eschar), fájdalmatlan', severity: 'moderate' },
                { name: 'Inhalációs', description: 'Influenzaszerű → súlyos dyspnoe, shock', severity: 'severe' },
                { name: 'GI anthrax', description: 'Hasi fájdalom, véres hasmenés, hányás', severity: 'severe' },
                { name: 'Meningitis', description: 'Hemorrhagiás', severity: 'severe' }
              ],
              physical_exam: [
                'Malignus pustula (fekete pörk, ödémás udvar)',
                'Masszív mediastinalis ödéma (inhalációs)',
                'Meningealis jelek'
              ],
              complications: ['Szeptikus shock', 'Meningitis', 'Mediastinitis', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' },
                { test: 'Hemokultúra', finding: 'Gram+ pálcák', interpretation: 'Szepszis' }
              ],
              imaging: [
                { modality: 'Mellkas rtg/CT', finding: 'Mediastinalis kiszélesedés (lymphadenopathia), pleura folyadék', significance: 'Inhalációs anthrax (patognomikus)' }
              ],
              microbiology: [
                { test: 'Gram-festés', finding: 'Nagy Gram+ pálcák ("bambusznád")', significance: 'Vezikula folyadékból' },
                { test: 'PCR', finding: 'Pozitív', significance: 'Gyors' },
                { test: 'DFA', finding: 'Kapszula antigén', significance: 'Megerősítés' }
              ]
            },
            differential: [
              { disease: 'Pókcsípés', distinguishing: 'Fájdalmas, nincs eschar' },
              { disease: 'Tularémia', distinguishing: 'Fájdalmas fekély' },
              { disease: 'Pneumonia', distinguishing: 'Mediastinalis kiszélesedés hiánya' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Ciprofloxacin', dose: '2x500mg', duration: '60 nap', note: 'Bőr anthrax (bioterror gyanú esetén 60 nap)' },
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '60 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Ciprofloxacin + Meropenem + Linezolid', dose: 'IV kombináció', duration: 'Hosszú', note: 'Inhalációs/szisztémás (antitoxin is adható)' }
                ],
                icu: [
                  { drug: 'Raxibacumab', dose: 'Monoklonális antitest', duration: 'Egyszeri', note: 'Toxin semlegesítés' }
                ]
              },
              targeted: 'Ciprofloxacin, Doxycyclin, Penicillin G (ha érzékeny)',
              supportive: ['Folyadékpótlás', 'Lélegeztetés', 'Pleura drainage'],
              prevention: ['Vakcina (katonák, veszélyeztetettek)', 'PEP (Ciprofloxacin 60 nap)', 'Állati tetemek égetése']
            },
            prognosis: {
              mortality: 'Bőr: <1% (kezelt), 20% (kezeletlen); Inhalációs: >85% (kezeletlen), 45% (kezelt)',
              prognostic_scores: ['Nincs'],
              factors: 'Inhalációs forma, késői kezelés, meningitis'
            }
          }
        ]
      },
});