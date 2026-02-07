Object.assign(window.diseases, {
      zoonotic: {
        name: 'Zoonózisok',
        icon: '🐾',
        color: '#059669',
        diseases: [
          {
            id: 'leptospirosis',
            name: 'Leptospirosis',
            pathogen: { type: 'Spirochaeta', name: '<i>Leptospira interrogans</i>', gram: 'Gram-negatív', shape: 'spirális, horoggal' },
            epidemiology: {
              incidence: 'Trópusi/szubtrópusi: 10-100/100,000; Mérsékelt öv: 0.1-1/100,000',
              risk_groups: ['Mezőgazdasági munkások', 'Állatorvosok', 'Vágóhídi dolgozók', 'Csatornakarbantartók', 'Vízisport/extrém sport versenyzők', 'Katonák (dzsungel környezet)'],
              seasonality: 'Nyár-ősz, esős évszak',
              transmission: 'Szennyezett víz/talaj expozíció → bőr/nyálkahártya. Rágcsálók/állatok vizeletével terjed'
            },
            pathomechanism: {
              steps: [
                'A Leptospira baktériumok fertőzött állatok (főleg rágcsálók) vizeletével szennyezett vízben vagy talajban élnek túl. A kórokozó sérült bőrön vagy nyálkahártyán (szem, orr, száj) keresztül jut a szervezetbe.',
                'A behatolást követően a baktériumok gyorsan a véráramba kerülnek (haematogen szórás), és eljutnak a szervezet szinte minden szervébe, különösen a májba, vesébe, tüdőbe és központi idegrendszerbe.',
                'A kórokozó az erek endothel sejtjeit károsítja, ami fokozott vaszkuláris permeabilitáshoz, folyadékvesztéshez és vérzésekhez vezet.',
                'A súlyos forma, a Weil-betegség, a máj- és veseelégtelenség, sárgaság (icterus) és súlyos vérzéses szövődmények (pl. tüdővérzés) triászával jellemezhető.',
                'A klinikai tünetek egy részét a gazdaszervezet heves, immunmediált gyulladásos válasza okozza, nem pedig a baktérium direkt toxikus hatása.'
              ],
              virulence_factors: ['Outer membrane proteins (LipL32)', 'Flagellum (mobilitás)', 'Hemolysinek', 'Lipopoliszacharid', 'Adhezinek']
            },
            clinical: {
              incubation: '2-30 nap (átlag 7-12 nap)',
              onset: 'Bifázisos lefolyás',
              symptoms: [
                { name: 'Akut/Szeptikus fázis (első hét)', description: 'Hirtelen kezdődő magas láz hidegrázással, intenzív fejfájás, és jellegzetes, kínzó izomfájdalom, különösen a vádli és a derék területén. Gyakori a conjunctivalis suffusio (a szem bevörösödése gennyes váladék nélkül).', severity: 'severe' },
                { name: 'Immun fázis (második hét)', description: 'Az első fázis után rövid javulás következhet, majd a tünetek visszatérnek az immunválasz következtében. Itt jelenhet meg az aszeptikus meningitis, uveitis és a szervi manifesztációk.', severity: 'moderate' },
                { name: 'Weil-betegség (súlyos forma)', description: 'A betegek 5-10%-ánál alakul ki. Jellemzői a sárgaság (icterus), a veseelégtelenség (akut tubuláris nekrózis), és a vérzéses szövődmények, mint a tüdővérzés, ami magas halálozással jár.', severity: 'severe' }
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
            pathogen: { type: 'Vírus', name: '<i>Hantavírus</i> (több szerotípus)', gram: 'Negatív-szálú RNS vírus, Bunyaviridae', shape: 'szferikus' },
            epidemiology: {
              incidence: 'Európa: HFRS 10,000+ eset/év; USA: HPS <50 eset/év',
              risk_groups: ['Mezőgazdasági munkások', 'Erdészek', 'Katonák', 'Kempingezők/túrázók', 'Rágcsálókkal kontakt munka', 'Rosszul szellőzött épületek takarítása'],
              seasonality: 'Tavasz-ősz (rágcsáló populáció csúcs)',
              transmission: 'Aeroszol (rágcsáló ürülék/vizelet/nyál). NEM embertől emberig!'
            },
            pathomechanism: {
              steps: [
                'A fertőzés rágcsálók (pl. erdei pocok) beszáradt vizeletével, ürülékével vagy nyálával szennyezett por belélegzésével (aeroszol) történik. Emberről emberre nem terjed.',
                'A vírus a tüdőn keresztül bejutva a véráramba kerül, és célzottan az erek belső felszínét borító endothel sejteket fertőzi meg, anélkül, hogy direkt sejthalált okozna.',
                'A fő károsodást a szervezet túlzott immunválasza okozza. Az aktivált T-sejtek és citokinek (TNF-alfa) az endothel sejtek közötti kapcsolatokat meglazítják, ami kapilláris szivárgáshoz (capillary leak) vezet.',
                'HFRS (Hemorrhagic Fever with Renal Syndrome): A kapillárisszivárgás elsősorban a vesében jelentkezik, ami akut veseelégtelenséghez, proteinuriához és vérzésekhez vezet.',
                'HPS (Hantavirus Pulmonary Syndrome): A szivárgás a tüdőben dominál, ami gyorsan kialakuló, nem-kardiogén tüdőödémához és kardiogén shockhoz vezet. A thrombocytopenia és a hemokoncentráció a betegség kulcsfontosságú laboratóriumi jelei.'
              ],
              virulence_factors: ['Nukleokapsid protein (immunválasz)', 'Glikoprotein Gn/Gc (sejt entry)', 'Endothel tropizmus', 'Immunmoduláció']
            },
            clinical: {
              incubation: '1-8 hét (átlag 2-4 hét)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Prodromális fázis (3-5 nap)', description: 'Hirtelen kezdődő, magas láz, hidegrázás, erős fejfájás és izomfájdalom (főleg hát és comb). Gyakori az arcpír (facial flush) és a conjunctiva belövelltsége.', severity: 'severe' },
                { name: 'HFRS (Veseérintettségű forma)', description: 'A lázas fázist hypotonia, majd oliguria/anuria követi. Jellemző a súlyos vesetáji fájdalom, a masszív proteinuria és a thrombocytopenia. A felépülés fázisában polyuria jelentkezik.', severity: 'severe' },
                { name: 'HPS (Tüdőérintettségű forma)', description: 'A prodromális fázis után gyorsan progrediáló köhögés és légszomj alakul ki, ami órák alatt súlyos, nem-kardiogén tüdőödémába és kardiogén shockba torkollik. Magas mortalitású forma.', severity: 'severe' }
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
            pathogen: { type: 'Spirochaeta', name: '<i>Borrelia burgdorferi sensu lato</i>', gram: 'Gram-negatív', shape: 'spirális' },
            epidemiology: {
              incidence: 'USA: 476,000 eset/év; Európa: 232,000 eset/év; Magyarországon gyakori, endemikus',
              risk_groups: ['Erdei területek látogatói', 'Kirándulók, kempingezők', 'Erdészek, vadászok', 'Kertészek', 'Gyerekek'],
              seasonality: 'Tavasztól őszig (kullancs aktivitás)',
              transmission: 'Ixodes ricinus kullancs csípés (általában >24 óra vérszívás szükséges)'
            },
            pathomechanism: {
              steps: [
                'A fertőzött Ixodes kullancs vérszívása során a Borrelia spirochaeták a kullancs nyálmirigyeiből a gazdaszervezet bőrébe jutnak (általában >24 óra vérszívás szükséges).',
                'A baktériumok lokálisan szaporodnak a bőrben, és centrifugálisan terjednek, létrehozva a jellegzetes Erythema migrans (EM) bőrpírt.',
                'A kórokozók a véráramba (haematogen) és a nyirokrendszerbe jutva disszeminálódnak, elérve távoli szerveket (szív, idegrendszer, ízületek, bőr).',
                'A baktériumok képesek az immunrendszer elől rejtőzködni (antigén variáció, komplement gátlás), ami lehetővé teszi a perzisztenciát és a krónikus gyulladás kialakulását.',
                'A szöveti károsodást elsősorban nem toxinok, hanem a gazdaszervezet gyulladásos válasza (citokinek, immunkomplexek) okozza.'
              ],
              virulence_factors: ['Osp (Outer surface proteins)', 'VlsE (antigén variáció)', 'Motilitás']
            },
            clinical: {
              incubation: 'EM: 3-30 nap (átlag 7-14 nap)',
              onset: 'Stádiumos',
              symptoms: [
                { name: 'Korai lokalizált stádium (Erythema migrans)', description: 'A csípés helyén kialakuló, fájdalmatlan, lassan növekvő (>5 cm), gyakran céltábla-szerű (de lehet homogén is) bőrpír. Ez a leggyakoribb tünet, klinikai diagnózist tesz lehetővé. Általános influenzaszerű tünetek (láz, fejfájás, izomfájdalom) kísérhetik.', severity: 'moderate' },
                { name: 'Korai disszeminált stádium (Szervek)', description: 'A baktérium szóródása után hetekkel-hónapokkal jelentkezik. Idegrendszer: Bannwarth-szindróma (éjszakai radiculáris fájdalom, facialis paresis, meningitis). Szív: Lyme-carditis (AV-blokk, ritmuszavar). Bőr: Lymphocytoma (kékes-vörös csomó).', severity: 'severe' },
                { name: 'Késői stádium (Krónikus)', description: 'Hónapokkal-évekkel később. Lyme-arthritis: nagy ízületek (főleg térd) intermittáló duzzanata és fájdalma. Bőr: Acrodermatitis chronica atrophicans (ACA) - a végtagok feszítő felszínének livide elszíneződése és sorvadása.', severity: 'moderate' }
              ],
              physical_exam: [
                'Erythema migrans: >5 cm átmérőjű, terjedő erythema',
                'Facialis paresis (lehet kétoldali)',
                'Meningealis izgalmi jelek (enyhe)',
                'Ízületi duzzanat (térd)',
                'ACA: cigarettapapír-szerű bőr'
              ],
              complications: ['Krónikus ízületi gyulladás', 'Post-Lyme szindróma (szubjektív panaszok)', 'Krónikus neuroborreliosis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Kétlépcsős szerológia (ELISA + Western blot)', finding: 'IgM (2-4 hét), IgG (4-6 hét)', interpretation: 'Kétlépcsős! EM stádiumban NEM javasolt (klinikai dg, még negatív lehet). Disszeminált/késői stádiumban indokolt.' },
                { test: 'Liquor', finding: 'Lymphocytás pleocytosis, intrathekális antitest szintézis (AI > 1.5)', interpretation: 'Neuroborreliosis igazolása' }
              ],
              imaging: [
                { modality: 'EKG', finding: 'AV blokk', significance: 'Carditis gyanú esetén' }
              ],
              microbiology: [
                { test: 'Kullancs vizsgálata', finding: 'NEM javasolt', significance: 'Nincs klinikai relevanciája a kezelés szempontjából' },
                { test: 'PCR', finding: 'Borrelia DNS', significance: 'Ízületi folyadékból vagy bőrbiopsziából (ACA) hasznos lehet. Vérből/liquorból alacsony szenzitivitás.' }
              ]
            },
            differential: [
              { disease: 'Orbánc/Cellulitis', distinguishing: 'Láz, fájdalom, gyors terjedés, leukocytosis' },
              { disease: 'Tinea corporis', distinguishing: 'Hámló szél, viszket, KOH pozitív' },
              { disease: 'Egyéb arthritis', distinguishing: 'Szeptikus (láz, genny), RA (szimmetrikus, szerológia)' },
              { disease: 'Sclerosis multiplex', distinguishing: 'MRI, liquor oligoklonális sávok' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100 mg PO', duration: '14-21 nap (EM: 10-14 nap)', note: 'Első választás (EM, Neuroborreliosis, Carditis, Arthritis, ACA). Gyerekeknek is adható.' },
                  { drug: 'Amoxicillin', dose: '3x500-1000 mg PO', duration: '14-21 nap', note: 'Alternatíva (EM, Arthritis, ACA, terhesség)' },
                  { drug: 'Cefuroxim axetil', dose: '2x500 mg PO', duration: '14-21 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x2 g IV', duration: '14-28 nap', note: 'Súlyos neuroborreliosis (pl. encephalitis), carditis (magas fokú blokk), refrakter arthritis' }
                ]
              },
              targeted: 'Korai lokalizált (EM): Doxycyclin 10 nap. Neuroborreliosis (Bannwarth): Doxycyclin PO (ugyanolyan hatékony mint IV Ceftriaxon!) 14 nap. Arthritis: Doxycyclin 28 nap.',
              supportive: ['Tüneti kezelés', 'Fizioterápia'],
              prevention: ['Kullancs mielőbbi eltávolítása', 'Védőruházat', 'Profilaktikus antibiotikum csípés után NEM javasolt (magyar irányelv)']
            },
            prognosis: {
              mortality: 'Nagyon alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Korai felismerés és kezelés'
            }
          },
          {
            id: 'tularemia',
            name: 'Tularémia (Nyúlpestis)',
            pathogen: { type: 'Baktérium', name: '<i>Francisella tularensis</i>', gram: 'Gram-negatív', shape: 'kocko-pálca, intracelluláris' },
            epidemiology: {
              incidence: 'USA: 100-200 eset/év; Európa: sporadikus',
              risk_groups: ['Vadászok', 'Bőrfeldolgozók', 'Mezőgazdasági munkások', 'Laboránsok', 'Erdészek', 'Állatorvosok'],
              seasonality: 'Nyár (kullancs), tél (vadászat)',
              transmission: 'Kullancs/légy csípés, fertőzött állat kontakt (nyúl, rágcsáló), inhaláció, víz/táplálék'
            },
            pathomechanism: {
              steps: [
                'A Francisella tularensis egy rendkívül fertőző baktérium (<10 organizmus is elég), amely kullancscsípéssel, fertőzött állattal (pl. nyúl) való direkt kontaktussal, vagy szennyezett por inhalációjával jut a szervezetbe.',
                'A behatolás helyén a baktériumot a makrofágok bekebelezik, de a kórokozó képes kiszabadulni a fagoszómából a citoplazmába, ahol elszaporodik.',
                'A fertőzött makrofágok a regionális nyirokcsomókba vándorolnak, ahol a baktérium tovább szaporodik, ami fájdalmas, nekrotizáló granulomákat és lymphadenitist (nyirokcsomó-gyulladást) okoz.',
                'A behatolási kaputól függően különböző klinikai formák alakulnak ki (pl. ulceroglandularis, pulmonalis).',
                'A baktériumok a nyirokrendszerből a véráramba jutva szisztémás fertőzést (typhoidealis forma) és távoli szervek (tüdő, máj, lép) érintettségét okozhatják.'
              ],
              virulence_factors: ['Kapszula', 'Fagoszóma escape (iglA-D lókusz)', 'LPS (toxikus)', 'Sziderofórok', 'Intracelluláris túlélés']
            },
            clinical: {
              incubation: '3-5 nap (1-14 nap)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Ulceroglandularis forma (75-85%)', description: 'A leggyakoribb forma. A behatolási kapunál (pl. csípés helye) egy fájdalmas fekély (ulcus) alakul ki fekete pörkkel, amit a regionális nyirokcsomók fájdalmas duzzanata (bubo) kísér.', severity: 'moderate' },
                { name: 'Glandularis forma (5-10%)', description: 'Hasonló az ulceroglandularis formához, de a primer bőrfekély hiányzik, csak a fájdalmas nyirokcsomó-duzzanat észlelhető.', severity: 'moderate' },
                { name: 'Typhoidealis forma (5-15%)', description: 'Súlyos, szisztémás betegség magas lázzal, hidegrázással, fejfájással, de primer lokalizáció (fekély, nyirokcsomó) nélkül. Gyakran tüdőgyulladással társul.', severity: 'severe' },
                { name: 'Egyéb formák', description: 'Oculoglandularis (szembe jutva conjunctivitis és nyirokcsomó-duzzanat), Oropharyngealis (lenyelve tonsillitis), Pulmonalis (inhalálva atípusos pneumonia).', severity: 'moderate' }
              ],
              physical_exam: [
                'Ulceroglandularis (75%): bőrfekély (fekete eschar) + fájdalmas/érzékeny nyirokcsomó',
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
            pathogen: { type: 'Baktérium', name: '<i>Bartonella henselae</i>', gram: 'Gram-negatív', shape: 'pálca, intracelluláris' },
            epidemiology: {
              incidence: 'USA: ~12,000 eset/év (becslés), aluldiagnosztizált',
              risk_groups: ['Gyerekek <10 év', 'Macskával kontakt', 'Bolha expozíció', 'Immunszupprimáltak (HIV)', 'Állatorvosok, shelter dolgozók'],
              seasonality: 'Ősz-tél (macskakölykök)',
              transmission: 'Macska karcolás/harapás (95%), ritkán kutya, bolha'
            },
            pathomechanism: {
              steps: [
                'A Bartonella henselae baktériumot leggyakrabban fertőzött (de tünetmentes) macskák, főleg kölykök, karmolással vagy harapással juttatják az ember bőrébe. A macskák bolhák közvetítésével fertőződnek egymástól.',
                'A behatolás helyén 3-10 napon belül egy primer lézió, egy vörös papula vagy pustula alakul ki.',
                'A baktériumok a nyirokutakon keresztül a regionális nyirokcsomókba vándorolnak (pl. axillaris, nyaki).',
                'A nyirokcsomókban a kórokozó jellegzetes, csillag alakú (stellata) nekrotizáló granulomákat hoz létre, ami a nyirokcsomók fájdalmas megnagyobbodását okozza.',
                'Immunkompetens egyénekben a fertőzés általában önlimitáló. Immunszupprimáltakban (pl. HIV) a baktérium szóródhat, és szisztémás betegséget, például bacilláris angiomatózist (érburjánzás) vagy peliosis hepatist okozhat.'
              ],
              virulence_factors: ['Flagellum', 'Pili', 'Adhezinek', 'BadA autotranszporter', 'Intracelluláris túlélés (erythrocyták, endothel)']
            },
            clinical: {
              incubation: '3-10 nap (papula), 1-3 hét (lymphadenitis)',
              onset: 'Szubakut',
              symptoms: [
                { name: 'Tipikus forma', description: 'A karmolás helyén megjelenő primer papula után 1-3 héttel egyoldali, fájdalmas regionális nyirokcsomó-duzzanat alakul ki (leggyakrabban a hónaljban vagy a nyakon). Enyhe láz és rossz közérzet kísérheti. A nyirokcsomó begennyedhet.', severity: 'moderate' },
                { name: 'Parinaud oculoglandularis szindróma', description: 'A kórokozó a conjunctiván keresztül jut be, ami egyoldali kötőhártya-gyulladást és a fül előtti (preauricularis) nyirokcsomó duzzanatát okozza.', severity: 'moderate' },
                { name: 'Atípusos/Disszeminált formák', description: 'Ritkábban, főleg immunszupprimáltakban, a fertőzés szóródhat. Okozhat neuroretinitist (látásvesztés), encephalitist, hepatosplenikus betegséget (máj- és léptályogok), vagy bacilláris angiomatózist (bőrön és belső szervekben megjelenő érdaganatok).', severity: 'severe' }
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
            pathogen: { type: 'Baktérium', name: '<i>Coxiella burnetii</i>', gram: 'Gram-negatív (intracelluláris)', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'Zoonózis, foglalkozási betegség',
              risk_groups: ['Állattenyésztők', 'Vágóhídi dolgozók', 'Állatorvosok'],
              seasonality: 'Tavasz (ellési szezon)',
              transmission: 'Aeroszol (placenta, magzatvíz, tej, ürülék pora)'
            },
            pathomechanism: {
              steps: [
                'A Coxiella burnetii egy rendkívül fertőző, obligát intracelluláris baktérium. A fertőzés leggyakrabban fertőzött állatok (juh, kecske, szarvasmarha) szülés közben keletkező, spóraszerű részecskéket tartalmazó aeroszoljának belélegzésével történik.',
                'A tüdőbe jutva a kórokozót az alveoláris makrofágok fagocitálják.',
                'A baktérium a makrofágok savas fagoszómáiban nemcsak túléli, hanem ott szaporodik is, egy speciális vakuólumot létrehozva.',
                'A fertőzött sejtekből kiszabadulva a kórokozó a vérárammal (hematogén szórás) eljut a szervezet különböző részeibe, főleg a májba és a csontvelőbe.',
                'A szervezet jellegzetes, "fánk" alakú (doughnut) granulomák képzésével próbálja megfékezni a fertőzést. A betegség lehet akut vagy krónikus (endocarditis).'
              ],
              virulence_factors: ['Spóraszerű forma (ellenálló)', 'LPS fázisvariáció']
            },
            clinical: {
              incubation: '2-3 hét',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Akut Q-láz', description: 'Az esetek kb. 60%-a tünetmentes. A tünetes forma hirtelen kezdődő magas lázzal, súlyos, retrobulbáris fejfájással és influenzaszerű tünetekkel jár. Gyakori az atípusos tüdőgyulladás (enyhe köhögés) és a granulomás hepatitis (emelkedett májenzimek).', severity: 'moderate' },
                { name: 'Krónikus Q-láz', description: 'Az akut fertőzés után hónapokkal-évekkel alakul ki, főleg szívbillentyűhibával vagy immunszuppresszióval rendelkező betegeknél. Leggyakoribb manifesztációja a tenyésztés-negatív endocarditis. Egyéb formái a vaszkuláris (aneurysma) és csontfertőzések.', severity: 'severe' }
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
            pathogen: { type: 'Vírus', name: '<i>Rabies lyssavirus</i>', gram: 'RNS vírus', shape: 'lövedék' },
            epidemiology: {
              incidence: 'Világszerte 59,000 halál/év (főleg Ázsia, Afrika)',
              risk_groups: ['Állatokkal foglalkozók', 'Endémiás területre utazók', 'Barlangászok (denevér)'],
              seasonality: 'Nincs',
              transmission: 'Harapás (nyál), karmolás, nyálkahártya kontaktus'
            },
            pathomechanism: {
              steps: [
                'A veszettségvírus fertőzött állat (pl. kutya, róka, denevér) harapásával, a nyálon keresztül jut a szervezetbe, jellemzően az izomszövetbe.',
                'A vírus kezdetben az izomsejtekben szaporodik, majd a neuromuszkuláris junkción (NMJ) keresztül belép a perifériás idegekbe.',
                'Az idegsejtek axonjaiban retrográd (a központ felé irányuló) transzporttal halad a központi idegrendszer (KIR), azaz a gerincvelő és az agy felé.',
                'A KIR-ben a vírus gyorsan szaporodik, súlyos, fatális encephalitist okozva. A fertőzött idegsejtekben jellegzetes zárványok, az ún. Negri-testek jelennek meg.',
                'Az agyból a vírus centrifugálisan, az idegek mentén eljut más szervekbe, legfontosabbként a nyálmirigyekbe, ami lehetővé teszi a további terjedést.'
              ],
              virulence_factors: ['Neurotropizmus', 'Immunelkerülés']
            },
            clinical: {
              incubation: '1-3 hónap (napoktól évekig)',
              onset: 'Prodroma után akut neurológiai',
              symptoms: [
                { name: 'Prodromális stádium', description: 'A betegség első jelei nem specifikusak: láz, fejfájás, rossz közérzet. Jellegzetes lehet a harapás helyén jelentkező fájdalom, viszketés vagy paraesthesia (érzészavar).', severity: 'moderate' },
                { name: 'Akut neurológiai stádium', description: 'Két fő formája van. A "dühöngő" (encephalitises) forma (80%) nyugtalansággal, zavartsággal, hydrophobiával (víziszony, a nyelési kísérletre fellépő fájdalmas gégegörcs miatt) és aerophobiával (légáramlattól való félelem) jár. A "csendes" (paralitikus) forma (20%) a harapás helyéről kiinduló, felszálló petyhüdt bénulással jellemezhető.', severity: 'severe' },
                { name: 'Kóma és halál', description: 'Mindkét forma végül kómába és légzési/keringési elégtelenség miatti halálba torkollik, általában a tünetek megjelenésétől számított 7-10 napon belül.', severity: 'severe' }
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
            pathogen: { type: 'Baktérium', name: '<i>Bacillus anthracis</i>', gram: 'Gram-pozitív', shape: 'spóraképző pálca' },
            epidemiology: {
              incidence: 'Ritka, bioterrorizmus veszély',
              risk_groups: ['Állatbőr feldolgozók', 'Állattenyésztők', 'Laboránsok'],
              seasonality: 'Nincs',
              transmission: 'Spóra inokuláció (bőr), inhaláció, lenyelés'
            },
            pathomechanism: {
              steps: [
                'A Bacillus anthracis spórái a talajban évtizedekig életképesek. A fertőzés a spórák bejutásával történik: bőrön (cutan), belélegezve (inhalációs) vagy lenyelve (gasztrointesztinális).',
                'A szervezetben a spórákat a makrofágok felveszik, ahol azok vegetatív baktériumokká alakulnak (germináció), majd a nyirokcsomókba jutnak.',
                'A baktériumok két fő virulenciafaktorral rendelkeznek: egy antifagocita kapszulával, ami védi őket az immunrendszertől, és egy háromkomponensű exotoxinnal.',
                'Az anthrax toxin komponensei: a Protective Antigen (PA) a sejtekhez köt, az Edema Factor (EF) ödémát, a Lethal Factor (LF) pedig sejthalált és a citokinválasz zavarát okozza.',
                'A toxinok masszív szöveti nekrózist, ödémát, vérzést és szisztémás shockot idéznek elő, ami a betegség magas mortalitásáért felelős.'
              ],
              virulence_factors: ['Poly-D-glutaminsav kapszula', 'Protective Antigen (PA)', 'Edema Factor (EF)', 'Lethal Factor (LF)']
            },
            clinical: {
              incubation: 'Bőr: 1-7 nap; Inhalációs: 1-60 nap',
              onset: 'Formától függ',
              symptoms: [
                { name: 'Bőr (cutan) anthrax (95%)', description: 'A behatolás helyén viszkető papula jelenik meg, ami hólyaggá, majd fájdalmatlan, fekete közepű fekéllyé (eschar) alakul, melyet jellegzetes, nem-gyulladásos ödéma vesz körül. Kezelés nélkül a mortalitás 20%.', severity: 'moderate' },
                { name: 'Inhalációs (pulmonalis) anthrax', description: 'Kétfázisú lefolyású. Kezdetben enyhe, influenzaszerű tünetek (láz, köhögés). 1-3 nap után hirtelen romlás következik be: magas láz, légszomj, shock. A mellkas CT-n jellegzetes a mediastinalis kiszélesedés (vérzéses mediastinitis). Kezelés nélkül szinte mindig halálos.', severity: 'severe' },
                { name: 'Gasztrointesztinális anthrax', description: 'Fertőzött hús fogyasztása után alakul ki. Hányingerrel, hányással, véres hasmenéssel és súlyos hasi fájdalommal jár. Magas mortalitású forma.', severity: 'severe' }
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
          },
            {
            id: 'brucellosis',
            name: 'Brucellosis (Máltai láz)',
              pathogen: { type: 'Baktérium', name: '<i>Brucella spp. (melitensis, abortus, suis)</i>', gram: 'Gram-negatív', shape: 'coccobacillus' },
              epidemiology: {
                incidence: 'Endémiás a Mediterráneumban, Közel-Keleten',
                risk_groups: ['Állatorvosok', 'Pásztorok', 'Vágóhídi dolgozók', 'Nyers tejtermék fogyasztók'],
                seasonality: 'Tavasz-nyár',
                transmission: 'Direkt kontaktus, inhaláció, pasztőrözetlen tejtermék'
              },
              pathomechanism: {
                steps: [
                  'Behatolás: A baktérium sérült bőrön, kötőhártyán, légutakon vagy tápcsatornán keresztül jut be.',
                  'Fagocitózis: A makrofágok bekebelezik, de a baktérium túléli és szaporodik bennük (intracelluláris).',
                  'Szóródás: A fertőzött makrofágok a regionális nyirokcsomókba, majd a véráramba (bakterémia) jutnak.',
                  'Szervi érintettség: A retikuloendoteliális rendszer szerveiben (máj, lép, csontvelő, nyirokcsomók) granulómák képződnek.'
                ],
                virulence_factors: ['LPS (sima)', 'T4SS szekréciós rendszer', 'Intracelluláris túlélés']
              },
              clinical: {
                incubation: '2-4 hét (1 héttől hónapokig)',
                onset: 'Fokozatos vagy hirtelen',
                symptoms: [
                  { name: 'Unduláló láz', description: 'Hullámzó lefolyású lázmenet (reggel alacsony, délután magas), profúz, penészszagú izzadással.', severity: 'moderate' },
                  { name: 'Mozgásszervi tünetek', description: 'Ízületi fájdalom (arthralgia), hátfájás (sacroiliitis), izomfájdalom.', severity: 'moderate' },
                  { name: 'Általános tünetek', description: 'Fáradékonyság, fejfájás, depresszió, fogyás.', severity: 'mild' }
                ],
                physical_exam: ['Hepatomegalia', 'Splenomegalia', 'Lymphadenopathia', 'Gerinc ütögetési érzékenység'],
                complications: ['Osteomyelitis (csigolya)', 'Endocarditis', 'Neurobrucellosis', 'Epididymo-orchitis']
              },
              diagnostics: {
                laboratory: [{ test: 'Vérkép', finding: 'Leukopenia, relatív lymphocytosis', interpretation: '-' }, { test: 'Májenzimek', finding: 'Enyhe emelkedés', interpretation: 'Granulómás hepatitis' }],
                imaging: [{ modality: 'MRI gerinc', finding: 'Spondylodiscitis', significance: 'Hátfájás esetén' }],
                microbiology: [
                  { test: 'Hemokultúra', finding: 'Brucella spp.', significance: 'Lassú növekedés (akár 3-4 hét), jelezni kell a labornak!' },
                  { test: 'Szerológia (Wright)', finding: 'Titer ≥1:160 vagy 4x emelkedés', significance: 'Standard diagnózis' }
                ]
              },
              differential: [
                { disease: 'Tífusz', distinguishing: 'Roseolák, bradycardia' },
                { disease: 'Tuberculosis', distinguishing: 'Légúti tünetek, köpet' },
                { disease: 'Malária', distinguishing: 'Periodicitás, utazás' }
              ],
              therapy: {
                empirical: { outpatient: [{ drug: 'Doxycyclin + Rifampicin', dose: '2x100mg + 600-900mg PO', duration: '6 hét', note: 'Standard terápia' }] },
                  targeted: 'Doxycyclin + Rifampicin (6 hét). Alternatíva: Doxycyclin + Streptomycin (2-3 hét). Neurobrucellosis/Endocarditis: Doxy + Rif + Ceftriaxon/Cotrimoxazol (hónapokig).',
                  supportive: ['Tüneti kezelés'],
                  prevention: ['Tej pasztőrözése', 'Védőfelszerelés állatoknál', 'Vakcina (állatoknak)']
                },
                prognosis: { mortality: '<2% (főleg endocarditis miatt)', prognostic_scores: [], factors: 'Szövődmények, relapszus gyakori' }
              }
            ]
                   },
});