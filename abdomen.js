Object.assign(window.diseases, {
      gastrointestinal: {
        name: 'Gastrointestinális fertőzések',
        icon: '🦠',
        color: '#ca8a04',
        diseases: [
          {
            id: 'cdiff',
            name: 'Clostridioides difficile fertőzés',
            pathogen: { type: 'Baktérium', name: 'Clostridioides difficile', gram: 'Gram-pozitív', shape: 'spóraképző anaerob pálca' },
            epidemiology: {
              incidence: 'Leggyakoribb nozokomiális hasmenés oka, 500,000 eset/év USA',
              risk_groups: ['65 év felettiek', 'Hospitalizált betegek', 'Antibiotikum expozíció', 'PPI használat', 'Gyulladásos bélbetegség', 'Immunszupprimáltak'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (spórák), nozokomiális terjedés, kéz higiéné!'
            },
            pathomechanism: {
              steps: [
                'Antibiotikum → bélflóra disrupcio',
                'C. difficile spórák germinációja, kolonizáció',
                'Toxin A (TcdA): enterotoxin – folyadék-szekréció, gyulladás',
                'Toxin B (TcdB): citotoxin → epithel károsodás',
                'Binaris toxin (CDT): hypervirulens törzsekben (027/078)',
                'Pseudomembrán képződés a vastagbélben'
              ],
              virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Binaris toxin (CDT)', 'Spóraképzés', 'Adherencia faktorok']
            },
            clinical: {
              incubation: 'AB után 2-10 nap, akár 8 hét múlva',
              onset: 'Akut',
              symptoms: [
                { name: 'Vizes hasmenés', description: '3-15x/nap, zöldes, bűzös', severity: 'severe' },
                { name: 'Hasi fájdalom/görcs', description: 'Diffúz, görcsös', severity: 'moderate' },
                { name: 'Láz', description: 'Mérsékelt-magas', severity: 'moderate' },
                { name: 'Hányinger', description: 'Változó', severity: 'mild' },
                { name: 'Anorexia', description: 'Étvágytalanság', severity: 'mild' }
              ],
              physical_exam: [
                'Diffúz hasi érzékenység',
                'Distenzió',
                'Láz, tachycardia',
                'Dehidráció jelei',
                'Súlyos: ileus, toxikus megacolon jelei'
              ],
              complications: ['Fulminans colitis', 'Toxikus megacolon', 'Bélperforáció', 'Szepszis', 'Hypovolaemiás shock', 'Halál', 'Rekurrencia (20-30%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (akár >30 G/L)', interpretation: 'Súlyosság markere' },
                { test: 'Kreatinin', finding: 'Emelkedett', interpretation: 'Súlyos CDI kritérium (>1.5x baseline)' },
                { test: 'Albumin', finding: 'Csökkent (<2.5 g/dL)', interpretation: 'Malnutríció, súlyosság' },
                { test: 'Lactát', finding: 'Emelkedett', interpretation: 'Fulminans colitis' }
              ],
              imaging: [
                { modality: 'Hasi röntgen', finding: 'Megacolon (>6cm)', significance: 'Toxikus megacolon' },
                { modality: 'CT has', finding: 'Vastagbél fal megvastagodás, accordion jel, ascites', significance: 'Súlyosság felmérése' }
              ],
              microbiology: [
                { test: 'Széklet toxin (GDH + toxin A/B EIA)', finding: 'Pozitív', significance: 'Kétlépcsős algoritmus' },
                { test: 'Széklet PCR (NAAT)', finding: 'tcdB gén', significance: 'Legérzékenyebb, de kolonizációt is kimutat' },
                { test: 'Tenyésztés', finding: 'C. difficile izolálás', significance: 'Tipizálás, epidemiológia' },
                { test: 'Sigmoidoscopia', finding: 'Pseudomembránok', significance: 'Nem rutinszerű, diagnosztikus' }
              ]
            },
            differential: [
              { disease: 'Egyéb AB-asszociált hasmenés', distinguishing: 'Toxin negatív, enyhébb' },
              { disease: 'Gyulladásos bélbetegség fellángolása', distinguishing: 'Anamnézis, endoscopia' },
              { disease: 'Ischaemiás colitis', distinguishing: 'Rizikófaktorok, CT angiográfia' },
              { disease: 'Egyéb infektív enterocolitis', distinguishing: 'Széklet tenyésztés, epidemiológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Fidaxomicin', dose: '2x200mg PO', duration: '10 nap', note: 'Első választás (kevesebb rekurrencia)' },
                  { drug: 'Vancomycin', dose: '4x125mg PO', duration: '10 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '4x125mg PO', duration: '10-14 nap', note: 'Ha fidaxomicin nem elérhető' },
                  { drug: 'Fidaxomicin', dose: '2x200mg PO', duration: '10 nap', note: 'Preferált' }
                ],
                icu: [
                  { drug: 'Vancomycin', dose: '4x500mg PO + rektális', duration: '10-14 nap', note: 'Fulminans: magasabb dózis' },
                  { drug: '+ Metronidazol', dose: '3x500mg IV', duration: '10-14 nap', note: 'Ileus esetén (IV penetráció)' },
                  { drug: 'Sebészet', dose: 'Colectomia', duration: '', note: 'Toxikus megacolon, perforáció' }
                ]
              },
              targeted: 'Nem súlyos: Vancomycin vagy Fidaxomicin; Súlyos: Vancomycin; Fulminans: Vancomycin+Metronidazol±sebészet',
              supportive: ['AB leállítása (ha lehet)', 'Folyadékpótlás', 'Elektrolit korrekció', 'NE antimotilitás szerek!', 'Kontakt izoláció'],
              prevention: ['Antibiotikum stewardship', 'Kézmosás (alkohol nem öli a spórákat!)', 'Kontakt izoláció', 'Bezlotoxumab (rekurrencia megelőzés)', 'FMT rekurrens esetben']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: újonnan jelentkező hasmenés antibiotikum-expozíció után vagy nozokomiális környezetben',
                'Labor: leukocytosis, emelkedett kreatinin/ALP/albumin csökkenés súlyosság jelei',
                'Micro: kétlépcsős algoritmus (GDH + toxin EIA) és/vagy NAAT; pozitív PCR önmagában kolonizációt is jelezhet',
                'Endoszkópia csak kivételes esetben (pseudomembránok)'
              ],
              treatment_indications: [
                'Akut tünetek, különösen súlyos felszámolás (leukocytosis >15 G/L, láz, kreatinin emelkedés, sárgaság, ileus vagy toxikus megacolon)',
                'Rekurrens beteg esetén korai intervenció (bezlotoxumab, FMT mérlegelése)'
              ],
              first_line: [
                'Nem súlyos/súlyos: Fidaxomicin 200 mg kétszer naponta 10 nap vagy Vancomycin 125 mg 4x naponta 10 nap',
                'Fulmináns eset: Orális/rektális Vancomycin nagyobb dózis + IV Metronidazol (ileus esetén)',
              ],
              supportive: [
                'Az antibakteriális szer leállítása ha lehetséges, folyadék- és elektrolitpótlás, táplálás',
                'Kerülendő: antimotilitás szerek súlyos betegeknél'
              ],
              monitoring: [
                'Klinikai állapot, leukocytosis és vesefunkció monitorozása naponta súlyos esetben',
                'Rekurrencia esetén újabb gyógyszeres kezelés (pl. fidaxomicin) vagy FMT mérlegelése'
              ],
              prevention: [
                'Antibiotikum stewardship, kézhigiéné, kontakt izoláció, környezeti fertőtlenítés (sporocid anyagok)'
              ],
              special_populations: [
                'Idősek, immunszupprimáltak és hospitalizált betegek nagyobb kockázatúak; ezeknél alacsonyabb küszöb a korai kezelésre'
              ]
              ,
              dosing: {
                adult: {
                  fidaxomicin: '200 mg PO két naponta (BID) 10 nap',
                  vancomycin: '125 mg PO 4x/nap 10 nap (nem súlyos); fulmináns esetben 500 mg PO 4x/nap + rektális adagolás mérlegelése',
                  metronidazol_iv: '500 mg IV 3x/nap (kiegészítő fulmináns/ileus esetén)'
                },
                pediatric: 'Gyermekdózisok a helyi protokoll szerint; vancomycin súlyalapú adagolása szükséges',
              },
              references: [
                'IDSA/SHEA 2021 C. difficile guideline: https://www.idsociety.org/practice-guideline/clostridioides-difficile/',
                'CDC C. difficile information: https://www.cdc.gov/cdiff/index.html'
              ]
            },
            prognosis: {
              mortality: 'Összesen 5-10%, Fulminans 30-50%',
              prognostic_scores: ['ATLAS score'],
              factors: 'Életkor, leukocytosis, albumin, kreatinin, hypervirulens törzs, késői kezelés'
            }
          },
          {
            id: 'salmonellosis',
            name: 'Salmonellosis (Nem-typhi)',
            pathogen: { type: 'Baktérium', name: 'Salmonella enterica (pl. Enteritidis, Typhimurium)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Gyakori ételmérgezés (nyáron gyakoribb)',
              risk_groups: ['Csecsemők', 'Idősek', 'Gyomorsavhiányosok (PPI)', 'Immunszupprimáltak'],
              seasonality: 'Nyár-ősz',
              transmission: 'Feko-orális: szennyezett élelmiszer (tojás, baromfi, hús), hüllők érintése'
            },
            pathomechanism: {
              steps: [
                'Lenyelés (magas csíraszám szükséges, kivéve savhiányban)',
                'Invázió a vékonybél M-sejtjein keresztül (Peyer-plakkok)',
                'Neutrophil infiltráció, gyulladás, folyadékszekréció'
              ],
              virulence_factors: ['III-as típusú szekréciós rendszer (T3SS)', 'Enterotoxin']
            },
            clinical: {
              incubation: '6-72 óra (átlag 12-36 óra)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Hasmenés', description: 'Vizes, ritkán véres, bűzös', severity: 'moderate' },
                { name: 'Láz', description: 'Gyakori (38-39°C)', severity: 'moderate' },
                { name: 'Hasi görcsök', description: 'Diffúz vagy periumbilicalis', severity: 'moderate' },
                { name: 'Hányinger, hányás', description: 'Gyakran megelőzi a hasmenést', severity: 'mild' }
              ],
              physical_exam: ['Láz', 'Hasi érzékenység', 'Dehidráció jelei'],
              complications: ['Bakterémia (5%, főleg idősek/immunszupprimáltak)', 'Szeptikus arthritis', 'Osteomyelitis (sarlósejtes anémia)', 'Endovascularis fertőzés (aneurysma)']
            },
            diagnostics: {
              laboratory: [{ test: 'Gyulladásos paraméterek', finding: 'CRP emelkedett', interpretation: 'Bakteriális eredet' }],
              microbiology: [{ test: 'Széklet tenyésztés', finding: 'Salmonella sp.', significance: 'Diagnosztikus' }]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Egészséges felnőttnek NEM kell antibiotikum (elhúzódó hordozást okoz!)' }],
                inpatient: [{ drug: 'Ceftriaxon', dose: '1-2g IV', duration: '7-14 nap', note: 'Súlyos/invazív esetben' }, { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7-10 nap', note: 'Alternatíva (ha érzékeny)' }]
              },
              targeted: 'Csak rizikócsoportban (csecsemő, idős, immunszupprimált) vagy súlyos esetben: Fluorokinolon vagy Ceftriaxon.',
              supportive: ['Folyadékpótlás (ORS)', 'Probiotikum'],
              prevention: ['Élelmiszerhigiénia', 'Tojás/hús alapos hőkezelése']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: akut hasmenés lázzal; csecsemők/idősek/immunszupprimáltakban nagyobb kockázat súlyos szövődményre',
                'Mikrobiológia: széklet tenyésztés Salmonella azonosítására; vérkultúra súlyos vagy szepszis gyanú esetén'
              ],
              treatment_indications: [
                'Egészséges felnőttekben, nem invazív fertőzés: általában nincs antibiotikum',
                'Antibiotikum javasolt: csecsemők, idősek, immunszupprimáltak, szepszis, extrabélrendszeri fertőzés, terhesség esetén egyes helyzetekben'
              ],
              first_line: [
                'Súlyos/invazív eset: Ceftriaxon IV vagy Fluorokinolon (érzékenység függvényében)'
              ],
              supportive: ['Folyadékpótlás, elektrolitpótlás, táplálás'],
              prevention: ['Élelmiszerbiztonság, tojás és baromfi alapos hőkezelése']
              ,
              dosing: {
                adult: {
                  ceftriaxone: '1–2 g IV egyszer naponta (szokásos kúra 5–14 nap, klinikai státusztól függően)',
                  ciprofloxacin: '500 mg PO 2x/nap (7–10 nap) – csak érzékeny törzsek esetén; helyi rezisztencia figyelembevétele szükséges'
                },
                pediatric: 'Ceftriaxon és fluorokinolonok gyermekdózisai korcsoport- és súlyfüggőek; kérje a helyi gyermekgyógyászati protokollt'
              },
              references: [
                'CDC – Salmonella: https://www.cdc.gov/salmonella/index.html',
                'WHO – Non-typhoidal Salmonella overview: https://www.who.int/news-room/fact-sheets/detail/salmonella-(non-typhoidal)'
              ]
            },
            prognosis: { mortality: 'Alacsony (<1%), szepszis esetén magasabb', prognostic_scores: [], factors: 'Életkor, komorbiditás' }
          },
          {
            id: 'shigellosis',
            name: 'Shigellosis (Vérhas)',
            pathogen: { type: 'Baktérium', name: 'Shigella (dysenteriae, flexneri, sonnei)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Világszerte gyakori, fejlődő országokban endémiás',
              risk_groups: ['Gyermekek (bölcsőde, óvoda)', 'Utazók', 'MSM'],
              transmission: 'Feko-orális (emberről emberre), nagyon alacsony fertőző dózis (10-100 baktérium)!'
            },
            pathomechanism: {
              steps: [
                'Vastagbél epithel invázió',
                'Intercelluláris terjedés (aktin polimerizáció)',
                'Shiga toxin (S. dysenteriae): fehérjeszintézis gátlás, HUS',
                'Nyálkahártya fekélyképződés, gyulladás'
              ],
              virulence_factors: ['Shiga toxin (Stx)', 'Inváziós plazmid antigének']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Dysenteria', description: 'Véres, nyákos, gennyes széklet', severity: 'severe' },
                { name: 'Tenesmus', description: 'Fájdalmas székelési inger ürítés nélkül', severity: 'severe' },
                { name: 'Magas láz', description: 'Gyakori, toxikus állapot', severity: 'moderate' },
                { name: 'Hasi görcsök', description: 'Bal alhasi dominancia', severity: 'moderate' }
              ],
              complications: ['Hemolitikus urémiás szindróma (HUS - S. dysenteriae)', 'Toxikus megacolon', 'Rektális prolapsus', 'Reaktív arthritis']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis, balra tolt', interpretation: 'Invazív fertőzés' }],
              microbiology: [{ test: 'Széklet tenyésztés', finding: 'Shigella sp.', significance: 'Diagnosztikus' }]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 nap', note: 'Első választás' }, { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '3 nap', note: 'Alternatíva (rezisztencia növekszik)' }]
              },
              targeted: 'Antibiotikum javasolt a betegség lerövidítésére és a fertőzőképesség csökkentésére. Azithromycin, Ceftriaxon, Ciprofloxacin.',
              supportive: ['Folyadékpótlás', 'Antimotilitás szerek (Loperamid) TILOSAK!'],
              prevention: ['Szigorú kézhigiéné', 'Beteg elkülönítése']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: véres, nyákos széklet és tenesmus; alacsony fertőző dózis miatt járványra utalhat',
                'Mikrobiológia: széklet tenyésztés; S. dysenteriae esetén Shiga-toxin vizsgálat'
              ],
              treatment_indications: [
                'Antibiotikum javasolt a betegség lerövidítésére és a terjedés csökkentésére (különösen járványban, súlyos tüneteknél vagy rizikócsoportokban)'
              ],
              first_line: [
                'Azithromycin (1 g egyszeri dózis vagy 500 mg 3 nap), alternatíva: Ceftriaxon IV súlyos esetben'
              ],
              supportive: ['Folyadékpótlás, tüneti kezelés'],
              prevention: ['Szabályos kézhigiéné, kontakt izoláció, járványügyi intézkedések']
              ,
              dosing: {
                adult: {
                  azithromycin: "1 g PO egyszeri dózis vagy 500 mg PO naponta 1x 3 nap (helyi protokoll szerint)",
                  ciprofloxacin: '500 mg PO 2x/nap 3 nap (alternatíva; rezisztencia növekszik)',
                  ceftriaxone: '1 g IV egyszer naponta súlyos esetben'
                },
                pediatric: 'Azithromycin és ceftriaxon gyermekdózisok kor- és testsúlyfüggőek; kérje a gyermekgyógyászati protokollt'
              },
              references: [
                'CDC – Shigella: https://www.cdc.gov/shigella/index.html',
                'WHO – Shigellosis factsheet: https://www.who.int/news-room/fact-sheets/detail/shigellosis'
              ]
            },
            prognosis: { mortality: 'Kezeléssel alacsony, S. dysenteriae 1 járványokban 20% lehet', prognostic_scores: [], factors: 'Életkor, komorbiditás, tápanyaghiány' }
          },
          {
            id: 'campylobacter',
            name: 'Campylobacteriosis',
            pathogen: { type: 'Baktérium', name: 'Campylobacter jejuni', gram: 'Gram-negatív', shape: 'spirális/sirályszárny' },
            epidemiology: {
              incidence: 'Leggyakoribb bakteriális gastroenteritis a fejlett világban',
              risk_groups: ['Csecsemők', 'Fiatal felnőttek', 'Idősek'],
              seasonality: 'Nyár',
              transmission: 'Szennyezett baromfi (nem kellően átsütve), nyers tej, víz'
            },
            pathomechanism: {
              steps: [
                'Lenyelés (alacsony fertőző dózis)',
                'Jejunum/ileum/colon kolonizáció',
                'Invázió az epithel sejtekbe',
                'Toxin termelés (cytolethal distending toxin)',
                'Gyulladásos válasz, véres hasmenés'
              ],
              virulence_factors: ['Flagellum (motilitás)', 'Adhezinek', 'Cytolethal distending toxin (CDT)']
            },
            clinical: {
              incubation: '2-5 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Hasmenés', description: 'Vizes, gyakran véres', severity: 'moderate' },
                { name: 'Hasi fájdalom', description: 'Kifejezett, görcsös (pseudoappendicitis)', severity: 'severe' },
                { name: 'Láz', description: 'Prodromális tünet lehet', severity: 'moderate' }
              ],
              physical_exam: ['Diffúz hasi érzékenység', 'Láz', 'Dehidráció jelei'],
              complications: ['Guillain-Barré szindróma (GBS) - 1/1000 eset', 'Reaktív arthritis', 'Erythema nodosum']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' }, { test: 'Széklet', finding: 'Leukocyták, vvt-k', interpretation: 'Invazív' }, { test: 'CRP', finding: 'Emelkedett', interpretation: 'Bakteriális eredet' }],
              differential: [
                { disease: 'Salmonellosis', distinguishing: 'Tenyésztés, epidemiológia' },
                { disease: 'Shigellosis', distinguishing: 'Súlyosabb dysenteria, tenyésztés' },
                { disease: 'Appendicitis', distinguishing: 'UH/CT, sebészi konzílium' }
              ],
              microbiology: [{ test: 'Széklet tenyésztés', finding: 'Campylobacter (speciális táptalaj, 42°C)', significance: 'Diagnosztikus' }]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 nap', note: 'Súlyos esetben első választás' }]
              },
              targeted: 'Enyhe esetben csak folyadékpótlás. Súlyos esetben makrolidok (Azithromycin). Fluorokinolon rezisztencia magas!',
              supportive: ['Folyadékpótlás'],
              prevention: ['Baromfi megfelelő hőkezelése', 'Keresztszennyeződés kerülése konyhában']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: akut hasi fájdalom, véres hasmenés; pseudoappendicitis tünetek lehetnek',
                'Mikrobiológia: széklet tenyésztés speciális körülmények között (42°C); antigén/PCR elérhető helyeken'
              ],
              treatment_indications: [
                'Enyhe, nem szisztémás eset: csak szupportív kezelés',
                'Súlyos vagy perzisztáló tünetek, immunszupprimáltak: makrolid terápia javasolt'
              ],
              first_line: ['Azithromycin 500 mg egyszeri vagy 500 mg naponta 3 napig (súlyosabb esetekben)'],
              supportive: ['Folyadékpótlás, elektrolitpótlás'],
              prevention: ['Baromfi alapos hőkezelése, konyhai higiénia']
              ,
              dosing: {
                adult: {
                  azithromycin: '500 mg PO egyszeri dózis vagy 500 mg PO naponta 1x, 3 nap (alternatív séma: 500 mg nap 1, majd 250 mg naponta 2–3) ',
                  ciprofloxacin: '500 mg PO 2x/nap 3 nap (ha érzékeny és súlyos eset)'
                },
                pediatric: 'Makrolidok gyermekdózisai kor- és súlyfüggőek; kérje a helyi protokollt'
              },
              references: [
                'CDC – Campylobacter: https://www.cdc.gov/campylobacter/index.html',
                'ESCMID guidance on Campylobacter: https://www.escmid.org/'
              ]
            },
            prognosis: { mortality: 'Nagyon alacsony (<0.1%)', prognostic_scores: [], factors: 'GBS szövődmény súlyos lehet, reaktív arthritis elhúzódó' }
          },
          {
            id: 'ecoli_enteritis',
            name: 'E. coli enteritisek (ETEC, EHEC)',
            pathogen: { type: 'Baktérium', name: 'Escherichia coli (pathogen törzsek)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'ETEC: utazók hasmenése; EHEC: élelmiszer eredetű járványok',
              risk_groups: ['Utazók (ETEC)', 'Gyermekek, idősek (EHEC)'],
              seasonality: 'Nyár',
              transmission: 'Feko-orális, szennyezett víz/étel (marhahús, zöldség)'
            },
            pathomechanism: {
              steps: [
                'ETEC: Enterotoxinok (LT/ST) → folyadékszekréció (kolera-szerű)',
                'EHEC (STEC): Shiga-toxin termelés → bélfal károsodás, szisztémás felszívódás → vese endothel károsodás (HUS)'
              ],
              virulence_factors: ['Enterotoxinok', 'Shiga-toxin (Stx1, Stx2)', 'Adhezinek']
            },
            clinical: {
              incubation: 'ETEC: 1-3 nap; EHEC: 3-4 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'ETEC: Vizes hasmenés', description: 'Nincs láz, "Utazók hasmenése"', severity: 'moderate' },
                { name: 'EHEC: Véres hasmenés', description: 'Láz hiányzik vagy alacsony, súlyos hasi görcs', severity: 'severe' }
              ],
              physical_exam: ['Dehidráció', 'Hasi érzékenység (EHEC: kifejezett)', 'Láz hiánya (EHEC)'],
              complications: ['Hemolitikus urémiás szindróma (HUS) - EHEC fertőzés után 5-10% (főleg gyerekek)', 'TTP (felnőttek)']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Thrombocytopenia, anémia', interpretation: 'HUS gyanú!' }, { test: 'Vese', finding: 'Kreatinin emelkedés', interpretation: 'HUS' }],
              differential: [
                { disease: 'Shigellosis', distinguishing: 'Láz gyakoribb, tenyésztés' },
                { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés, GBS rizikó' },
                { disease: 'TTP', distinguishing: 'Felnőttek, neurológiai tünetek, ADAMTS13' }
              ],
               microbiology: [
                { test: 'Széklet tenyésztés', finding: 'Sorbitol-MacConkey (E. coli O157:H7)', significance: 'EHEC szűrés' },
                { test: 'Shiga-toxin kimutatás', finding: 'PCR vagy EIA', significance: 'Gyors diagnózis' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'ETEC: Rifaximin', dose: '2x200mg PO', duration: '3 nap', note: 'Utazók hasmenése' },
                  { drug: 'EHEC: ANTIBIOTIKUM KONTRAINDIKÁLT!', dose: '-', duration: '-', note: 'Növeli a HUS kockázatát (toxin felszabadulás)!' }
                ]
              },
              targeted: 'ETEC: Ciprofloxacin vagy Azithromycin (súlyos esetben). EHEC: CSAK szupportív!',
              supportive: ['Folyadékpótlás', 'HUS esetén dialízis, transzfúzió'],
              prevention: ['Élelmiszerhigiénia', 'Marhahús átsütése', 'Utazóknak: palackozott víz']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: véres hasmenés HUS előfordulásával; gyermekeknél különösen óvatosan kezelni',
                'Mikrobiológia: EHEC szűrés (sorbitol-MacConkey, Shiga-toxin PCR/EIA)'
              ],
              treatment_indications: [
                'EHEC fertőzés esetén antibiotikum általában kontraindikált (növeli a HUS kockázatát)',
                'ETEC esetén súlyos tüneteknél rövid antibiotikum adható (pl. Rifaximin, Azithromycin)'
              ],
              supportive: ['Folyadékpótlás, szoros megfigyelés; HUS esetén nefrológiai ellátás, dialízis ha szükséges'],
              prevention: ['Élelmiszerhigiénia, jól átsütött marhahús, utazóknak óvintézkedések'],
              dosing: {
                adult: {
                  rifaximin: '200 mg PO 3x/nap 3 nap (ETEC, nem invazív utazók hasmenése)',
                  azithromycin: '1 g PO egyszeri dózis vagy 500 mg PO 1x naponta 1–3 nap (súlyos ETEC vagy ciprofloxacin-rezisztencia esetén)'
                },
                pediatric: 'Rifaximin gyermek-dózisok korlátozottak; EHEC esetén kerülni kell antibiotikumot gyermekeknél'
              },
              references: [
                'CDC – E. coli (STEC): https://www.cdc.gov/ecoli/index.html',
                'CDC – Traveler\'s Diarrhea & Rifaximin: https://www.cdc.gov/antibiotic-use/community/for-hcp/common-conditions/travelers-diarrhea.html'
              ]
            },
            prognosis: { mortality: 'ETEC: alacsony; EHEC: HUS esetén 3-5% halálozás', prognostic_scores: [], factors: 'Életkor (gyerek/idős), HUS kialakulása, antibiotikum használat (EHEC-nél rontja!)' }
          },
          {
            id: 'yersiniosis',
            name: 'Yersiniosis',
            pathogen: { type: 'Baktérium', name: 'Yersinia enterocolitica', gram: 'Gram-negatív', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'Mérsékelt övben gyakoribb, télen',
              risk_groups: ['Gyermekek', 'Vasterheléses betegek (hemochromatosis)'],
              seasonality: 'Tél',
              transmission: 'Nyers sertéshús, tej, kontaminált víz. Psychrophil (hűtőben szaporodik!)'
            },
            pathomechanism: {
              steps: [
                'Invázió az M-sejteken keresztül (ileum)',
                'Peyer-plakkok kolonizációja',
                'Mesenterialis nyirokcsomókba terjedés',
                'Mikrotályogok képződése',
                'Reaktív immunválasz (arthritis)'
              ],
              virulence_factors: ['Yersinia outer proteins (Yops)', 'T3SS', 'Invazin']
            },
            clinical: {
              incubation: '4-7 nap',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Enterocolitis', description: 'Láz, hasmenés (véres lehet)', severity: 'moderate' },
                { name: 'Pseudoappendicitis', description: 'Jobb alhasi fájdalom (mesenterialis lymphadenitis)', severity: 'moderate' },
                { name: 'Pharyngitis', description: 'Felnőtteknél előfordul', severity: 'mild' }
              ],
              physical_exam: ['Jobb alhasi nyomásérzékenység', 'Láz', 'Erythema nodosum (késői)'],
              complications: ['Reaktív arthritis (HLA-B27)', 'Erythema nodosum', 'Sepszis (vasterheléses betegekben)']
            },
            diagnostics: {
              laboratory: [{ test: 'Gyulladásos paraméterek', finding: 'Emelkedett', interpretation: 'Bakteriális' }],
              imaging: [{ modality: 'Has UH', finding: 'Mesenterialis lymphadenopathia, terminalis ileitis', significance: 'Appendicitis kizárása' }],
              differential: [
                { disease: 'Appendicitis', distinguishing: 'UH/CT, sebészi konzílium' },
                { disease: 'Crohn-betegség', distinguishing: 'Krónikus, endoszkópia, biopszia' },
                { disease: 'Egyéb bakteriális enteritis', distinguishing: 'Tenyésztés' }
              ],
              microbiology: [{ test: 'Széklet tenyésztés', finding: 'CIN agar (hideg dúsítás)', significance: 'Jelezni kell a labornak' }]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Általában önkorlátozó' }],
                inpatient: [{ drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7-10 nap', note: 'Súlyos esetben' }, { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '7-10 nap', note: 'Alternatíva' }]
              },
              targeted: 'Fluorokinolonok, Doxycyclin, TMP-SMX. Sepszis: Ceftriaxon.',
              prevention: ['Nyers sertéshús kerülése', 'Tej pasztőrözése']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: jobb alhasi fájdalom, láz, esetenként véres hasmenés; pseudoappendicitis kép előfordulhat',
                'Mikrobiológia: széklet tenyésztés CIN agarral, labornak jelezni hideg dúsítás szükségességét'
              ],
              treatment_indications: [
                'Általában önkorlátozó, antibiotikum csak súlyos rendszeres tüneteknél, szisztémás terjedésnél vagy vasterheléses betegeknél'
              ],
              first_line: ['Súlyos eset: Ciprofloxacin vagy Doxycyclin (helyi rezisztencia figyelembevételével)'],
              supportive: ['Folyadékpótlás, lázcsillapítás'],
              prevention: ['Rávezetés: nyers sertéshús kerülése, pasztőrözött tej fogyasztása'],
              dosing: {
                adult: {
                  ciprofloxacin: '500 mg PO 2x/nap 7–10 nap',
                  doxycycline: '100 mg PO 2x/nap 7–10 nap'
                },
                pediatric: 'Gyermekekben általában tüneti kezelés; antibiotikumot csak súlyos, szisztémás fertőzés esetén adunk (gyermekgyógyászati konzultáció)'
              },
              references: [
                'CDC – Yersinia enterocolitica: https://www.cdc.gov/yersinia/index.html'
              ]
            },
            prognosis: { mortality: 'Alacsony, szepszis esetén magas (50%)', prognostic_scores: [], factors: 'Vasterhelés, immunszuppresszió, késői diagnózis' }
          },
          {
            id: 'giardiasis',
            name: 'Giardiasis',
            pathogen: { type: 'Protozoon', name: 'Giardia duodenalis (lamblia)', gram: '-', shape: 'körte alakú (trophozoita)' },
            epidemiology: {
              incidence: 'Világszerte elterjedt, leggyakoribb parazitás bélfertőzés',
              risk_groups: ['Gyermekek', 'Kempingezők (patakvíz)', 'IgA hiányosok'],
              seasonality: 'Nyár-ősz',
              transmission: 'Feko-orális (ciszták), víz (klór-rezisztens!), étel'
            },
            pathomechanism: {
              steps: ['Ciszta lenyelése', 'Excisztáció a duodenumban', 'Trophozoiták tapadása a bélbolyhokhoz (szívókorong)', 'Malabszorpció, diszacharidáz hiány']
            },
            clinical: {
              incubation: '1-3 hét',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Hasmenés', description: 'Bűzös, zsíros (steatorrhea), nem véres', severity: 'moderate' },
                { name: 'Puffadás, gázosodás', description: 'Kifejezett meteorizmus, kénköves böfögés', severity: 'moderate' },
                { name: 'Fogyás', description: 'Malabszorpció miatt', severity: 'moderate' },
                { name: 'Laktóz intolerancia', description: 'Másodlagos, fertőzés után is fennállhat', severity: 'mild' }
              ],
              physical_exam: ['Meteorizmus', 'Diffúz hasi érzékenység', 'Nincs láz'],
              complications: ['Krónikus hasmenés', 'Malabszorpció (vitaminhiány)', 'Fejlődésbeli elmaradás (gyerekek)']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Normál, eosinophilia NINCS', interpretation: 'Nem invazív parazita' }],
              differential: [
                { disease: 'Laktóz intolerancia', distinguishing: 'Kilégzéses teszt, diéta hatása' },
                { disease: 'IBS', distinguishing: 'Krónikus, negatív parazita vizsgálat' },
                { disease: 'Cryptosporidiosis', distinguishing: 'Saválló festés, immunszuppresszió' }
              ],
              microbiology: [
                { test: 'Széklet parazita', finding: 'Ciszták vagy trophozoiták', significance: '3 minta szükséges (szakaszos ürítés)' },
                { test: 'Széklet antigén (EIA)', finding: 'Pozitív', significance: 'Érzékenyebb mint a mikroszkópia' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol', dose: '3x250mg PO', duration: '5-7 nap', note: 'Első választás' },
                  { drug: 'Tinidazol', dose: '2g PO', duration: 'Egyszeri dózis', note: 'Kényelmesebb' }
                ]
              },
              targeted: 'Nitroimidazolok (Metronidazol, Tinidazol). Terhességben: Paromomycin.',
              prevention: ['Víz forralása/szűrése (klór nem elég!)', 'Kézmosás']
            },
            guidelines: {
              diagnosis: [
                'Krónikus/akut laza széklet kivizsgálása: 3 székletminta parazita vizsgálatra vagy antigén teszt (EIA) gyorsabb eredményért',
                'Eosinophilia általában nincs, kilégzéses tesztek differenciáldiagnózishoz'
              ],
              treatment_indications: [
                'Minden tünetes eset kezelendő; tünetmentes hordozás csak speciális járványügyi indikáció esetén kezelendő'
              ],
              first_line: ['Metronidazol 250–750 mg 3x naponta 5–7 nap vagy Tinidazol 2 g egyszeri dózis (helyi protokoll szerint)'],
              supportive: ['Folyadékpótlás, diéta (zsíros ételek kerülése)'],
              prevention: ['Ivóvíz forralása/szűrése, kézhigiéné; gyermekközösségekben higiéniai intézkedések']
              ,
              dosing: {
                adult: {
                  metronidazole: '250–500 mg PO 3x/nap 5–7 nap (sok protokoll 500 mg 2–3x/nap)',
                  tinidazole: '2 g PO egyszeri dózis (egy dózis hatékony alternatíva)'
                },
                pregnancy: 'Terhességben: Paromomycin 500 mg PO 3x/nap 7 nap preferált (metronidazol/tinidazol kerülése az első trimeszterben)',
                pediatric: 'Gyermekdózisok kor- és testsúlyfüggőek; tinidazol/metronidazol gyermek-adagolás a helyi protokoll szerint'
              },
              references: [
                'CDC – Giardiasis: https://www.cdc.gov/parasites/giardia/index.html'
              ]
            },
            prognosis: { mortality: 'Kiváló, de krónikussá válhat kezelés nélkül', prognostic_scores: [], factors: 'IgA hiány, reinfekció' }
          },
          {
            id: 'amoebiasis',
            name: 'Amoebiasis',
            pathogen: { type: 'Protozoon', name: 'Entamoeba histolytica', gram: '-', shape: 'amőboid' },
            epidemiology: {
              incidence: 'Trópusi/szubtrópusi területeken endémiás',
              risk_groups: ['Utazók', 'Bevándorlók', 'Intézeti gondozottak', 'MSM'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (ciszták)'
            },
            pathomechanism: {
              steps: ['Ciszta lenyelése', 'Trophozoiták inváziója a vastagbél nyálkahártyába', 'Szöveti lízis (hisztolítikus enzimek)', 'Fekélyképződés (lombik alakú)', 'Haematogen szórás (máj)']
            },
            clinical: {
              incubation: '2-4 hét',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Amőbás dysenteria', description: 'Véres, nyákos hasmenés, hasi fájdalom', severity: 'severe' },
                { name: 'Amőbás májtályog', description: 'Jobb bordaív alatti fájdalom, láz, fogyás (hasmenés nélkül is!)', severity: 'severe' }
              ],
              physical_exam: ['Hasi érzékenység (coecum/colon)', 'Hepatomegalia, máj ütögetési érzékenység (tályog)'],
              complications: ['Bélperforáció', 'Toxikus megacolon', 'Tályog ruptúra (pleura, peritoneum, pericardium)', 'Agytályog']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis (tályognál)', interpretation: 'Gyulladás' }, { test: 'Májenzimek', finding: 'ALP emelkedett', interpretation: 'Tályog' }],
              differential: [
                { disease: 'Bakteriális dysenteria', distinguishing: 'Tenyésztés, láz gyakoribb' },
                { disease: 'Pyogen májtályog', distinguishing: 'Bakteriális tenyésztés, szeptikusabb' },
                { disease: 'Echinococcus cysta', distinguishing: 'Szerológia, képalkotó (leányhólyagok)' }
              ],
              microbiology: [
                { test: 'Széklet parazita', finding: 'Trophozoiták (vörösvértesttel a plazmában!)', significance: 'E. dispar-tól el kell különíteni' },
                { test: 'Széklet antigén/PCR', finding: 'E. histolytica specifikus', significance: 'Gold standard' },
                { test: 'Szerológia', finding: 'Pozitív', significance: 'Invazív betegségnél (májtályog) hasznos' }
              ],
              imaging: [{ modality: 'Has UH/CT', finding: 'Szoliter májtályog (jobb lebeny)', significance: 'Májtályog diagnózis' }]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol', dose: '3x750mg PO', duration: '7-10 nap', note: 'Szöveti szer (invazív)' },
                  { drug: '+ Paromomycin', dose: '3x500mg PO', duration: '7 nap', note: 'Luminális szer (cisztaürítés ellen) - KÖTELEZŐ kiegészítés!' }
                ]
              },
              targeted: 'Metronidazol (szöveti) + Paromomycin/Diloxanid (luminális). Májtályog: Metronidazol + szükség esetén drenázs.',
              prevention: ['Víz és élelmiszer higiénia']
            },
            guidelines: {
              diagnosis: [
                'Dysenteria gyanúja esetén széklet parazita vizsgálat, antigén/PCR a gyors és specifikus diagnózisért',
                'Májtályog esetén képalkotás (UH/CT) és szerológia segít a diagnózisban'
              ],
              treatment_indications: [
                'Invazív amőbás dysenteria vagy májtályog: Metronidazol vagy Tinidazol (szöveti kezelés) kötelező, majd lumen tisztító szer (Paromomycin/Diloxanid) a ciszták kiirtására',
                'Enyhe luminalis fertőzés: Paromomycin/diloxanid önmagában'
              ],
              first_line: ['Metronidazol 750 mg 3x naponta 7–10 nap + Paromomycin 500 mg 3x naponta 7 nap (luminális kiegészítés)'],
              supportive: ['Folyadékpótlás, fájdalomcsillapítás, táplálás; májtályog esetén drenázs indikációját mérlegelni'],
              prevention: ['Víz- és élelmiszerhigiénia, kézmosás, utazók számára óvintézkedések']
              ,
              dosing: {
                adult: {
                  metronidazole: '750 mg PO 3x/nap 7–10 nap (invazív/tályog)',
                  tinidazole: '2 g PO naponta egyszer 3 nap (alternatív szöveti kezelés helyi protokoll szerint)',
                  paromomycin: '500 mg PO 3x/nap 7 nap (luminális kiegészítés)'
                },
                pregnancy: 'Terhességben tinidazole/metronidazole kerülése az első trimeszterben; paromomycin preferált lumen kezelésre',
                pediatric: 'Gyermekdózis a helyi protokoll szerint; gyermekgyógyászati konzultáció javasolt'
              },
              references: [
                'CDC – Amebiasis: https://www.cdc.gov/parasites/amebiasis/index.html',
                'WHO – Amebiasis: https://www.who.int/health-topics/amebiasis'
              ]
            },
            prognosis: { mortality: 'Kezeléssel jó (<1%), szövődményes tályog/perforáció esetén magasabb', prognostic_scores: [], factors: 'Késői diagnózis, tályog ruptúra' }
          },
          {
            id: 'cryptosporidiosis',
            name: 'Cryptosporidiosis',
            pathogen: { type: 'Protozoon', name: 'Cryptosporidium hominis/parvum', gram: 'Saválló festés', shape: 'oociszta' },
            epidemiology: {
              incidence: 'Gyakori víz eredetű járványok (uszodák)',
              risk_groups: ['AIDS betegek (meghatározó opportunista)', 'Gyermekek', 'Állatorvosok'],
              seasonality: 'Nyár-ősz',
              transmission: 'Feko-orális, víz (klór-rezisztens oociszták!)'
            },
            pathomechanism: {
              steps: [
                'Oociszta lenyelése',
                'Sporozoiták kiszabadulása',
                'Epithel sejtek apikális felszínéhez tapadás (intracelluláris, de extracytoplasmaticus)',
                'Villus atrófia, kripta hiperplázia',
                'Malabszorpció, szekréciós hasmenés'
              ],
              virulence_factors: ['Adhezinek', 'Proteázok']
            },
            clinical: {
              incubation: '7-10 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Vizes hasmenés', description: 'Bőséges, kolera-szerű lehet', severity: 'moderate' },
                { name: 'Hasgörcs, hányinger', description: 'Általános tünetek', severity: 'mild' },
                { name: 'Perzisztáló hasmenés', description: 'Immunszupprimáltakban hetekig/hónapokig tarthat, életveszélyes', severity: 'severe' }
              ],
              physical_exam: ['Dehidráció jelei', 'Cachexia (krónikus esetben)'],
              complications: ['Súlyos dehidráció', 'Malnutríció', 'Epeúti érintettség (AIDS)']
            },
            diagnostics: {
              laboratory: [{ test: 'CD4 szám', finding: '<100/µL', interpretation: 'Súlyos lefolyás rizikó (HIV)' }],
              differential: [
                { disease: 'Giardiasis', distinguishing: 'Széklet vizsgálat, puffadás dominál' },
                { disease: 'Isosporiasis', distinguishing: 'Nagyobb oociszták, TMP-SMX hatékony' },
                { disease: 'Microsporidiosis', distinguishing: 'Kisebb spórák, speciális festés' }
              ],
              microbiology: [
                { test: 'Széklet festés', finding: 'Saválló oociszták (módosított Z-N)', significance: 'Specifikus kérésre' },
                { test: 'Széklet antigén/PCR', finding: 'Pozitív', significance: 'Érzékenyebb' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nitazoxanide', dose: '2x500mg PO', duration: '3 nap', note: 'Immundompetenseknek' },
                  { drug: 'ART (Antiretrovirális terápia)', dose: '-', duration: '-', note: 'HIV betegeknél az immunrendszer helyreállítása a kulcs!' }
                ]
              },
              targeted: 'Immundompetens: Nitazoxanide. Immunszupprimált: ART optimalizálás, szupportív, Nitazoxanide (kevésbé hatékony).',
              supportive: ['Folyadékpótlás', 'Antimotilitás szerek (óvatosan)'],
              prevention: ['Vízszűrés (<1 mikron), uszoda kerülés hasmenéskor']
            },
              guidelines: {
                diagnosis: [
                  'Gyanú: perzisztáló vizes hasmenés immunszupprimált betegnél (CD4<100), víz eredetű járványokban',
                  'Diagnózis: széklet antigén vagy PCR; saválló festés speciális kéréssel'
                ],
                treatment_indications: [
                  'Immunkompetens: gyakran spontán gyógyul',
                  'Immunhiányos: antivirális/terápiás beavatkozás szükséges; ART optimalizálás prioritás'
                ],
                first_line: ['Nitazoxanide immundompetens betegeknek; immunszupprimáltaknál elsősorban az immunkompetencia visszaállítása (ART)'],
                supportive: ['Folyadék- és táplálékpótlás, elektrolit monitorozás'],
                prevention: ['Ivóvíz szűrése/forralása, személyes higiénia, uszoda kerülése hasmenés esetén']
                ,
                dosing: {
                  adult: {
                    nitazoxanide_immunocompetent: '500 mg PO 2x/nap 3 nap',
                    nitazoxanide_immunocompromised: 'Hosszabb kúra mérlegelése (helyi protokoll); ART optimalizálás elsődleges'
                  },
                  pediatric: 'Nitazoxanide gyermekdózis kor és testsúly szerint; kérje a helyi protokollt'
                },
                references: [
                  'CDC – Cryptosporidium: https://www.cdc.gov/parasites/crypto/index.html',
                  'WHO – Cryptosporidiosis: https://www.who.int/news-room/fact-sheets/detail/cryptosporidiosis'
                ]
              },
            prognosis: { mortality: 'Immundompetens: jó; AIDS: CD4<100 esetén magas mortalitás', prognostic_scores: [], factors: 'Immunstátusz rendezése (ART)' }
          },
          {
            id: 'viral_gastroenteritis',
            name: 'Vírusos gastroenteritis',
            pathogen: { type: 'Vírus', name: 'Rotavírus, Norovírus, Adenovírus, Astrovírus', gram: 'RNS/DNS', shape: 'változó' },
            epidemiology: {
              incidence: 'Norovírus: leggyakoribb járványos GE (minden korosztály); Rotavírus: csecsemők (oltás előtt)',
              risk_groups: ['Csecsemők (Rota)', 'Idősek (Noro)', 'Zárt közösségek (hajó, laktanya)'],
              seasonality: 'Tél (Rota, Noro)',
              transmission: 'Feko-orális, aeroszol (hányás - Noro), fomitok'
            },
            pathomechanism: {
              steps: [
                'Vírus replikáció a vékonybél villus epithelben',
                'Villus atrófia, abszorpciós felület csökkenése',
                'Diszacharidáz hiány (laktóz intolerancia)',
                'Ozmotikus hasmenés',
                'NSP4 enterotoxin (Rotavírus)'
              ],
              virulence_factors: ['Kapszid stabilitás', 'NSP4 (Rota)']
            },
            clinical: {
              incubation: '12-48 óra (Noro), 1-3 nap (Rota)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Hányás', description: 'Norovírusnál domináns ("winter vomiting disease")', severity: 'severe' },
                { name: 'Vizes hasmenés', description: 'Nem véres', severity: 'moderate' },
                { name: 'Láz', description: 'Enyhe vagy hiányzik', severity: 'mild' },
                { name: 'Myalgia, fejfájás', description: 'Vírusos tünetek', severity: 'mild' }
              ],
              physical_exam: ['Dehidráció jelei (száraz nyelv, turgor csökkent)', 'Diffúz hasi érzékenység'],
              complications: ['Súlyos dehidráció (csecsemők, idősek)', 'Elektrolit zavarok']
            },
            diagnostics: {
              laboratory: [{ test: 'Elektrolitok', finding: 'Zavarok', interpretation: 'Dehidráció' }, { test: 'Vérkép', finding: 'Normál', interpretation: 'Nem bakteriális' }],
              differential: [
                { disease: 'Bakteriális gastroenteritis', distinguishing: 'Láz, véres széklet, tenyésztés' },
                { disease: 'Ételmérgezés (toxin)', distinguishing: 'Közös étkezés, rövidebb inkubáció' },
                { disease: 'Gyógyszer mellékhatás', distinguishing: 'Anamnézis' }
              ],
              microbiology: [
                { test: 'Széklet antigén (Rota/Adeno)', finding: 'Pozitív', significance: 'Gyors teszt gyermekeknél' },
                { test: 'PCR', finding: 'Norovírus', significance: 'Járványügyi célból' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [{ drug: 'Nincs', dose: '-', duration: '-', note: 'Antibiotikum hatástalan!' }]
              },
              targeted: 'Nincs specifikus antivirális szer.',
              supportive: ['Orális rehidrálás (ORS) - kulcsfontosságú!', 'Antiemetikumok (Ondansetron)', 'Probiotikumok (Lactobacillus GG, S. boulardii)'],
              prevention: ['Rotavírus vakcina (csecsemők)', 'Kézmosás (alkoholos gél Norovírus ellen kevésbé hatékony!)', 'Izoláció']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: hányással és/vagy vizes hasmenéssel járó tünetegyüttes, gyakori járványok zárt közösségekben',
                'Labor: elsősorban folyadék- és elektrolit státusz felmérése; vírus igazolás PCR/antigén teszttel járványügyi célból'
              ],
              treatment_indications: [
                'Többnyire csak szupportív kezelés szükséges; hospitalizáció dehidráció, súlyos hányás vagy csecsemők/öregek esetén'
              ],
              first_line: ['Orális rehidrálás ORS, súlyos hányás esetén antiemetikum (ondansetron gyermekekben is alkalmazható helyi protokoll szerint)'],
              supportive: ['Folyadékpótlás, elektrolit korrekció, táplálás'],
              prevention: ['Rotavírus vakcináció csecsemőknek, kézhigiéné, izoláció járványokban; Norovírusnál fomitok fertőtlenítése']
              ,
              dosing: {
                vaccination: {
                  rotavirus: 'Rotavírus vakcina: helyi oltási rend szerint (például Rotarix 2 dózis, RotaTeq 3 dózis – lásd oltási protokoll)'
                }
              },
              references: [
                'CDC – Norovirus: https://www.cdc.gov/norovirus/index.html',
                'CDC – Rotavirus: https://www.cdc.gov/rotavirus/index.html'
              ]
            },
            prognosis: { mortality: 'Fejlett országokban nagyon alacsony, dehidráció a fő veszély', prognostic_scores: [], factors: 'Életkor (csecsemő/idős), komorbiditás' }
          },
          {
            id: 'cholera',
            name: 'Cholera',
            pathogen: { type: 'Baktérium', name: 'Vibrio cholerae (O1, O139)', gram: 'Gram-negatív', shape: 'hajlított pálca (vibrio)' },
            epidemiology: {
              incidence: 'Endémiás (Ázsia, Afrika, Haiti), járványos',
              risk_groups: ['Mélyszegénységben élők', 'Természeti katasztrófák áldozatai', 'Utazók (ritka)'],
              seasonality: 'Esős évszak',
              transmission: 'Feko-orális (szennyezett víz/étel)'
            },
            pathomechanism: {
              steps: [
                'Lenyelés (magas csíraszám, savérzékeny)',
                'Vékonybél kolonizáció (TCP pilus)',
                'Cholera toxin (CTX) termelés',
                'Adenilát-cikláz aktiváció (cAMP növekedés)',
                'Masszív Cl- és vízszekréció (CFTR)',
                'Szekréciós hasmenés (rizslé szerű)'
              ],
              virulence_factors: ['Cholera toxin (AB5 toxin)', 'Toxin-coregulated pilus (TCP)']
            },
            clinical: {
              incubation: 'Néhány óra - 5 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Rizslé szerű hasmenés', description: 'Fájdalmatlan, nagy volumenű (akár 1L/óra!)', severity: 'severe' },
                { name: 'Hányás', description: 'Gyakori, hányinger nélkül is', severity: 'moderate' },
                { name: 'Izomgörcsök', description: 'Elektrolitvesztés miatt (K+, Ca2+, Mg2+)', severity: 'moderate' }
              ],
              physical_exam: [
                'Súlyos dehidráció (hypovolaemiás shock)',
                'Száraz nyálkahártyák, csökkent turgor',
                'Washerwoman\'s hands (ráncos bőr)',
                'Hypotonia, tachycardia',
                'Láz általában NINCS'
              ],
              complications: ['Hypovolaemiás shock', 'Akut veseelégtelenség (ATN)', 'Súlyos hypokalaemia', 'Metabolikus acidózis', 'Halál (kezeletlenül 50%!)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Hemokoncentráció', interpretation: 'Dehidráció' },
                { test: 'Elektrolitok', finding: 'Hypokalaemia, acidózis', interpretation: 'Vesztés' },
                { test: 'Vesefunkció', finding: 'Prerenalis veseelégtelenség', interpretation: 'Volumenhiány' }
              ],
              microbiology: [
                { test: 'Széklet tenyésztés', finding: 'TCBS agar (sárga telepek)', significance: 'Gold standard' },
                { test: 'Gyorsteszt (RDT)', finding: 'Crystal VC', significance: 'Járványban' },
                { test: 'Sötétlátóteres mikroszkópia', finding: 'Shooting star mozgás', significance: 'Gyors' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '300mg PO', duration: 'Egyszeri dózis', note: 'Felnőtteknek' },
                  { drug: 'Azithromycin', dose: '1g PO', duration: 'Egyszeri dózis', note: 'Terhesek, gyerekek' }
                ]
              },
              targeted: 'Folyadékpótlás a legfontosabb! Antibiotikum csak kiegészítő (rövidíti a betegséget).',
              supportive: ['ORS (Orális Rehidráló Folyadék) - WHO formula', 'IV Ringer-laktát (súlyos dehidráció)'],
              prevention: ['Tiszta víz, higiénia', 'Orális kolera vakcina (Dukoral, Shanchol)']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: nagy volumenű, fájdalmatlan „rizslé” szerű hasmenés; epidémiás kontextusban nagy a valószínűsége',
                'Labor: folyadék- és elektrolit státusz kiemelten fontos; tenyésztés TCBS agaron járványügyi azonosításhoz'
              ],
              treatment_indications: [
                'Minden súlyos vagy nagy volumenű diasztrófiás hasmenés esetén azonnali rehidrálás; antibiotikum a betegség rövidítésére súlyos esetekben'
              ],
              first_line: [
                'Általános: ORS és intravénás volumenpótlás súlyos dehidráció esetén',
                'Antibiotikum: Doxycyclin egyszeri 300 mg felnőtteknek, vagy Azithromycin 1 g terheseknek/gyermekeknek (helyi irányelvek szerint)'
              ],
              supportive: ['Elektrolitpótlás, monitoring (vese, kálium), oxigén és keringéstámogatás szükség esetén'],
              prevention: ['Ivóvíz és élelmiszer-higiénia, tömeges megelőzés vakcinával járványokban']
              ,
              dosing: {
                adult: {
                  doxycycline: '300 mg PO egyszeri dózis (felnőttek) a legtöbb protokoll szerint',
                  azithromycin: '1 g PO egyszeri dózis (alternatíva terheseknél/gyermekeknél helyi protokoll szerint)'
                },
                pediatric: 'Gyermekdózisok súlyfüggők; azithromycin gyermekdózis a helyi útmutató szerint'
              },
              references: [
                'WHO – Cholera and acute diarrhoeal disease guidance: https://www.who.int/health-topics/diarrhoeal-diseases',
                'CDC – Cholera: https://www.cdc.gov/cholera/index.html'
              ]
            },
            prognosis: { mortality: 'Kezeléssel <1%, kezeletlenül 50%', prognostic_scores: [], factors: 'Életkor, komorbiditás' }
          },
          {
            id: 'travelers_diarrhea',
            name: 'Utazók hasmenése (Traveler\'s Diarrhea)',
            pathogen: { type: 'Szindróma', name: 'ETEC (leggyakoribb), Campylobacter, Salmonella, Shigella, Vírusok', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Utazók 20-60%-a (fejlődő országokba)',
              risk_groups: ['Fiatal felnőttek', 'Immunszupprimáltak', 'PPI szedők'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (étel, víz)'
            },
            pathomechanism: {
              steps: ['Kórokozó lenyelése', 'Enterotoxin termelés (ETEC) vagy invázió (Campy/Shigella)', 'Gyulladás/szekréció'],
              virulence_factors: ['Változó']
            },
            clinical: {
              incubation: 'Utazás alatt vagy hazaérkezés után',
              onset: 'Akut',
              symptoms: [
                { name: 'Hasmenés', description: 'Általában vizes, napi 3-5x', severity: 'moderate' },
                { name: 'Hasi görcsök', description: 'Gyakori', severity: 'mild' },
                { name: 'Hányinger/hányás', description: 'Előfordul', severity: 'mild' },
                { name: 'Láz', description: 'Invazív kórokozóra utal (Campy/Shigella)', severity: 'moderate' }
              ],
              physical_exam: ['Enyhe hasi érzékenység', 'Dehidráció jelei'],
              complications: ['Dehidráció', 'Post-infectious IBS', 'Reaktív arthritis']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: 'Általában nem szükséges' }],
              microbiology: [{ test: 'Széklet tenyésztés/PCR', finding: 'Multiplex panel', significance: 'Csak perzisztáló/súlyos esetben vagy immunszupprimáltaknál' }]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1000mg PO egyszer vagy 500mg 3 napig', duration: '', note: 'Délkelet-Ázsia (Campy rezisztencia) vagy dysenteria esetén' },
                  { drug: 'Rifaximin', dose: '2x200mg PO', duration: '3 nap', note: 'Nem invazív (lázmentes) esetben' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '1-3 nap', note: 'Egyéb régiók (de rezisztencia nő)' }
                ]
              },
              targeted: '-',
              supportive: ['Folyadékpótlás', 'Loperamid (csak ha nincs láz/véres széklet!)'],
              prevention: ['"Boil it, cook it, peel it or forget it"', 'Kézmosás', 'Rifaximin profilaxis (csak magas rizikó esetén)']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: akut diarrhoea utazás után vagy utazás közben; legtöbbször nem szükséges mikrobiológiai vizsgálat enyhe esetben',
                'Súlyos, perzisztáló vagy lázas esetben széklet tenyésztés/PCR multiplex panel javasolt'
              ],
              treatment_indications: [
                'Enyhe eset: csak rehidrálás és tüneti kezelés',
                'Súlyos, lázas, dysenteriával járó vagy immunszupprimált beteg: antibiotikus kezelés javasolt'
              ],
              first_line: [
                'Nem-invazív (lázzal nem járó) esetekben Rifaximin 2x200 mg 3 nap',
                'Dysenteriával vagy Délkelet-Ázsiában: Azithromycin 1 g egyszeri vagy 500 mg 3 nap'
              ],
              supportive: ['ORS, loperamid csak ha nincs láz/véres széklet, elektrolitpótlás'],
              prevention: ['Élelmiszer- és vízbiztonság utazás alatt; profilaxis csak kivételes esetben']
              ,
              dosing: {
                adult: {
                  rifaximin: '200 mg PO 3x/nap 3 nap (nem-invazív utazók hasmenése)',
                  azithromycin: '1 g PO egyszeri dózis (alternatíva) vagy 500 mg PO naponta 3 nap'
                },
                pediatric: 'Gyermekdózisok súly- és életkorfüggőek; kérje a helyi gyermekgyógyászati protokollt'
              },
              references: [
                'CDC – Traveler\'s Health: Traveler\'s Diarrhea: https://wwwnc.cdc.gov/travel/yellowbook/2024/infectious-diseases-related-to-travel/traveler-s-diarrhea',
                'WHO – Management of diarrhoea: https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease'
              ]
            },
            prognosis: { mortality: 'Nagyon alacsony', prognostic_scores: [], factors: 'Életkor, immunstátusz' }
          },
          {
            id: 'dysentery_syndrome',
            name: 'Dysenteria szindróma (Vérhas)',
            pathogen: { type: 'Szindróma', name: 'Shigella, EIEC, EHEC, Campylobacter, Entamoeba, Salmonella', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Változó',
              risk_groups: ['Gyermekek', 'Idősek', 'Immunszupprimáltak'],
              transmission: 'Feko-orális'
            },
            pathomechanism: {
              steps: ['Vastagbél nyálkahártya invázió', 'Gyulladás, fekélyképződés', 'Mikrotályogok', 'Vérzés, nyáktermelés'],
              virulence_factors: ['Invazinok', 'Citotoxinok']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Akut',
              symptoms: [
                { name: 'Véres-nyákos hasmenés', description: 'Kis volumenű, gyakori', severity: 'severe' },
                { name: 'Tenesmus', description: 'Fájdalmas székelési inger', severity: 'severe' },
                { name: 'Láz', description: 'Gyakori (kivéve EHEC/Amoeba néha)', severity: 'moderate' },
                { name: 'Hasi fájdalom', description: 'Görcsös, alhasi', severity: 'moderate' }
              ],
              physical_exam: ['Alhasi érzékenység', 'Láz', 'Toxikus állapot'],
              complications: ['HUS (EHEC/Shigella)', 'Toxikus megacolon', 'Perforáció', 'Sepszis', 'Rectalis prolapsus']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' }],
              microbiology: [
                { test: 'Széklet tenyésztés', finding: 'Kórokozó keresés', significance: 'Kötelező!' },
                { test: 'Parazita vizsgálat', finding: 'E. histolytica', significance: 'Ha tenyésztés negatív' },
                { test: 'Shiga toxin', finding: 'Pozitív', significance: 'EHEC/Shigella' }
              ]
            },
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 nap', note: 'Első választás' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '3-5 nap', note: 'Alternatíva (rezisztencia?)' }
                ]
              },
              targeted: 'Tenyésztés alapján. EHEC esetén AB kontraindikált! Amoeba: Metronidazol.',
              supportive: ['Folyadékpótlás', 'Antimotilitás szerek (Loperamid) KONTRAINDIKÁLTAK!'],
              prevention: ['Higiénia', 'Izoláció']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: véres-nyákos hasmenés, tenesmus; differenciálni kell EHEC, Shigella, Entamoeba, Campylobacter között',
                'Kötelező: széklet tenyésztés, Shiga-toxin teszt és parazita vizsgálat járvány- illetve klinikai indikáció alapján'
              ],
              treatment_indications: [
                'Antibiotikum javasolt súlyos invazív fertőzésben, járványügyi kontroll és rizikócsoportok (csecsemő, idős, immunszupprimált)',
                'EHEC vagy confirmed Shiga-toxin pozitív esetben AB általában kontraindikált (HUS kockázat növelése)'
              ],
              first_line: [
                'Shigella: Azithromycin vagy Ceftriaxon; Campylobacter: Azithromycin; Salmonella invazív esetben Ceftriaxon vagy ciprofloxacin (rezisztencia figyelembevéve)'
              ],
              supportive: ['ORS, folyamatos monitorozás súlyos esetben; kerülendő antimotilitás szerek dysenteria esetén'],
              prevention: ['Kézhigiéné, élelmiszerhigiénia; járványban kontakt izoláció és közegészségügyi intézkedések']
            },
            prognosis: { mortality: 'Változó, EHEC/S. dysenteriae 1 esetén súlyosabb', prognostic_scores: [], factors: 'Életkor, kórokozó típus' }
          }
        ]
      },
      viral_hepatitis: {
        name: 'Vírusos hepatitisek',
        icon: '🧬',
        color: '#eab308',
        diseases: [
          {
            id: 'hav',
            name: 'Hepatitis A',
            pathogen: { type: 'Vírus', name: 'Hepatitis A vírus (HAV)', gram: 'ssRNS, Picornaviridae', shape: 'ikozahidrális' },
            epidemiology: {
              incidence: 'Endémiás területeken magas, fejlett országokban sporadikus/járványos',
              risk_groups: ['Utazók', 'MSM', 'Intravénás droghasználók', 'Hajléktalanok'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (szennyezett víz, élelmiszer), szexuális (orális-anális)'
            },
            pathomechanism: {
              steps: [
                'Orális bejutás és bélből való felszívódás',
                'Hepatocyták fertőzése (HAVCR-1 receptor)',
                'Replikáció a citoplazmában',
                'Vírusürítés az epébe és székletbe',
                'Immunmediált hepatocyta károsodás (CD8+ T-sejtek és NK sejtek)',
                'Nem citopatikus vírus'
              ],
              virulence_factors: ['Kapszid stabilitás (saválló)', 'Membránburok a vérben (eHAV) - immunelkerülés']
            },
            clinical: {
              incubation: '15-50 nap (átlag 28 nap)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Láz', description: 'Kezdeti tünet', severity: 'moderate' },
                { name: 'Icterus', description: 'Sárgaság (felnőttek 70%-a, gyerekek <10%-a)', severity: 'moderate' },
                { name: 'Sötét vizelet', description: 'Bilirubinuria', severity: 'moderate' },
                { name: 'Hányinger, hányás', description: 'Gyakori prodroma', severity: 'moderate' },
                { name: 'Jobb bordaív alatti fájdalom', description: 'Májtok feszülés', severity: 'mild' }
              ],
              physical_exam: [
                'Icterus (sclera, bőr)',
                'Hepatomegalia, érzékeny máj',
                'Splenomegalia (ritka)',
                'Exanthema (ritka)'
              ],
              complications: ['Fulmináns hepatitis (<1%, idősebbeknél gyakoribb)', 'Kolesztatikus hepatitis (elhúzódó)', 'Relapszus (3-20%)', 'NINCS krónikus hordozás']
            },
            diagnostics: {
              laboratory: [
                { test: 'Májenzimek', finding: 'ALT/AST >1000 U/L', interpretation: 'Akut hepatocelluláris nekrózis' },
                { test: 'Bilirubin', finding: 'Emelkedett (direkt és indirekt)', interpretation: 'Icterus' },
                { test: 'ALP/GGT', finding: 'Mérsékelten emelkedett', interpretation: 'Kolesztázis esetén magasabb' }
              ],
              imaging: [
                { modality: 'Has UH', finding: 'Hepatomegalia, epehólyag fal megvastagodás', significance: 'Nem specifikus' }
              ],
              microbiology: [
                { test: 'Anti-HAV IgM', finding: 'Pozitív', significance: 'Akut fertőzés diagnózisa (3-6 hónapig marad +)' },
                { test: 'Anti-HAV IgG', finding: 'Pozitív', significance: 'Védettség (oltás vagy átvészelés)' },
                { test: 'HAV RNS (PCR)', finding: 'Pozitív', significance: 'Viremia (ritkán szükséges)' }
              ]
            },
            differential: [
              { disease: 'Egyéb vírushepatitisek', distinguishing: 'Szerológia (HBV, HCV, HEV)' },
              { disease: 'Toxikus hepatitis', distinguishing: 'Gyógyszer/alkohol anamnézis' },
              { disease: 'Epeúti elzáródás', distinguishing: 'UH (tágult epeutak), ALP dominancia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Szupportív', dose: '-', duration: '-', note: 'Pihenés, megfelelő kalória, alkohol tilalom' }
                ],
                inpatient: [
                  { drug: 'Szupportív', dose: '-', duration: '-', note: 'Súlyos hányás, dehidráció vagy koagulopátia esetén' }
                ],
                icu: [
                  { drug: 'Májtranszplantáció', dose: 'Listázás', duration: '', note: 'Fulmináns májelégtelenség esetén' }
                ]
              },
              targeted: 'Nincs specifikus antivirális szer.',
              supportive: ['Folyadékpótlás', 'Antiemetikumok', 'Alkohol és hepatotoxikus szerek kerülése'],
              prevention: ['Vakcináció (inaktivált, 2 dózis)', 'Higiénia (kézmosás)', 'Post-expozíciós profilaxis (vakcina vagy IG 2 héten belül)']
            },
            guidelines: {
              diagnosis: [
                'Akut hepatitis gyanúja: májenzimek (ALT/AST), bilirubin, ALP/GGT, INR',
                'Anti-HAV IgM pozitív igazolja az akut HAV fertőzést; ha korai ablakperiódus gyanúja, ismétlés vagy HAV RNS (PCR) javasolt',
                'Súlyos májfunkciózavar esetén koagulációs paraméterek és transzplantációs konzílium'
              ],
              treatment_indications: [
                'Alapvetően szupportív kezelés. Hospitalizáció súlyos dehidratáció, koagulopátia vagy fulmináns májkárosodás esetén',
                'Májtranszplantáció vizsgálata King\'s College kritériumok alapján fulmináns esetben'
              ],
              post_exposure: [
                'Expozíció után 2 héten belül vakcina adása (ha korábban nem oltott) vagy immunglobulin (IG) adott esetben (idős, immunszupprimált, krónikus májbetegek)'
              ],
              prevention: [
                'Oltás: 2 dózis (0 és 6–12 hónap), előzetes oltás utazás előtt 2 héttel optimális',
                'Higiénia, ivóvíz és élelmiszerbiztonság'
              ],
              special_populations: [
                'Terhesség: HAV általában nem súlyosabb terhesekben, de oltás és post-expozíciós IG mérlegelendő',
                'Immunhiányos betegek: oltás kevésbé hatékony lehet, szoros követés javasolt'
              ]
            },
            prognosis: {
              mortality: 'Alacsony (<0.1%), de 50 év felett 1.8%',
              prognostic_scores: ['King\'s College kritériumok (fulmináns)'],
              factors: 'Életkor, alap májbetegség'
            }
          },
          {
            id: 'hbv',
            name: 'Hepatitis B',
            pathogen: { type: 'Vírus', name: 'Hepatitis B vírus (HBV)', gram: 'dsDNS (RT), Hepadnaviridae', shape: 'gömb (Dane-partikula)' },
            epidemiology: {
              incidence: 'Világszerte 290 millió krónikus hordozó',
              risk_groups: ['IV droghasználók', 'Szexuális partnerek', 'Eü. dolgozók', 'Dializáltak', 'Perinatális (anya-gyermek)'],
              seasonality: 'Nincs',
              transmission: 'Parenterális (vér), szexuális, perinatális'
            },
            pathomechanism: {
              steps: [
                'Hepatocyta belépés (NTCP receptor)',
                'cccDNS képződés a sejtmagban (perzisztencia alapja)',
                'Transzkripció/Transzláció',
                'Immunmediált sejtpusztulás (nem citopatikus a vírus)',
                'Integráció a gazdasejt genomjába (HCC rizikó)'
              ],
              virulence_factors: ['HBsAg (decoy)', 'HBeAg (immuntolerancia)', 'X protein (transzaktivátor)']
            },
            clinical: {
              incubation: '45-160 nap (átlag 90 nap)',
              onset: 'Lassú',
              symptoms: [
                { name: 'Fáradékonyság', description: 'Gyakori', severity: 'moderate' },
                { name: 'Ízületi fájdalom', description: 'Immunkomplex mediált (prodroma)', severity: 'mild' },
                { name: 'Icterus', description: 'Akut fázisban (30-50%)', severity: 'moderate' },
                { name: 'Tünetmentes', description: 'Krónikus hordozók többsége', severity: 'mild' }
              ],
              physical_exam: [
                'Hepatomegalia',
                'Splenomegalia',
                'Póknaevusok, palmaris erythema (krónikus/cirrhosis)',
                'Ascites, caput medusae (dekompenzált cirrhosis)'
              ],
              complications: ['Krónikus hepatitis (csecsemőknél 90%, felnőtteknél <5%)', 'Cirrhosis', 'Hepatocellularis carcinoma (HCC)', 'Polyarteritis nodosa', 'Glomerulonephritis']
            },
            diagnostics: {
              laboratory: [
                { test: 'ALT/AST', finding: 'Emelkedett', interpretation: 'Gyulladás aktivitása' }
              ],
              microbiology: [
                { test: 'HBsAg', finding: 'Pozitív', significance: 'Fertőzés jelenléte (akut vagy krónikus)' },
                { test: 'Anti-HBs', finding: 'Pozitív', significance: 'Védettség (oltás vagy gyógyulás)' },
                { test: 'Anti-HBc IgM', finding: 'Pozitív', significance: 'Akut fertőzés (ablakperiódusban fontos!)' },
                { test: 'Anti-HBc IgG', finding: 'Pozitív', significance: 'Átvészelt vagy krónikus fertőzés' },
                { test: 'HBeAg', finding: 'Pozitív', significance: 'Magas replikáció és fertőzőképesség' },
                { test: 'HBV DNS', finding: 'Pozitív', significance: 'Vírusreplikáció mértéke (terápia monitorozás)' }
              ]
            },
            differential: [
              { disease: 'Hepatitis D', distinguishing: 'Szuperinfekció esetén súlyosabb, Anti-HDV' },
              { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ASMA, ANA), IgG emelkedés' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Tenofovir / Entecavir', dose: 'PO', duration: 'Hosszú távú', note: 'Krónikus hepatitis B kezelése (Nukleozid analógok)' }
                ],
                inpatient: [
                  { drug: 'Szupportív', dose: '-', duration: '-', note: 'Akut esetben általában nem kell antivirális, kivéve ha súlyos' }
                ]
              },
              targeted: 'Krónikus: PEG-Interferon (véges ideig) vagy Nukleozid/Nukleotid analógok (Tenofovir, Entecavir - élethosszig). Cél: HBV DNS szuppresszió.',
              supportive: ['HCC szűrés (UH + AFP félévente)', 'Vakcináció HAV ellen'],
              prevention: ['Vakcináció (rekombináns HBsAg, 0-1-6 hó)', 'Szűrés terhességben', 'HBIG + vakcina újszülötteknek (≤12 óra; oltási sorozat folytatása)']
            },
            guidelines: {
              definitions: [
                'Akut HBV: HBsAg pozitív és Anti-HBc IgM pozitív, tünetekkel vagy tünetmentes',
                'Krónikus HBV: HBsAg pozitív >6 hónap'
              ],
              diagnosis: [
                'Kezdeti vizsgálat: HBsAg, Anti-HBs, Anti-HBc (IgM/IgG), HBeAg/Anti-HBe, HBV DNS (quantitativ)',
                'Májműködés: ALT/AST, bilirubin, ALP/GGT, INR, teljes vérkép',
                'Fibrosis értékelés: FibroScan vagy szérum markerek (APRI, FIB-4)'
              ],
              treatment_indications: [
                'Akut súlyos/fulmináns hepatitis: antivirális (Tenofovir) megfontolandó és transzplantációs konzílium',
                'Krónikus HBV: kezelni kell, ha jelentős májgyulladás (emelkedett ALT) és magas HBV DNS (>2000 IU/ml) vagy bármely betegnél cirrhosis esetén',
                'Minden cirrhosisos beteg kezelése indokolt, HBV-s betegek HCC szűrése félévente'
              ],
              first_line: [
                'Tenofovir disoproxil fumarate 300 mg naponta vagy Tenofovir alafenamide 25 mg naponta (preferált hosszú távú NA)',
                'Entecavir 0.5 mg naponta (vagy 1 mg ha lamivudin-rezisztens a háttér)',
                'Peg-IFN alfa 48 hétig bizonyos kiválasztott pácienseknél (finite terápia)'
              ],
              special_populations: [
                'Terhesség: ha anyai HBV-DNS >200 000 IU/ml, Tenofovir kezelést javasolnak a 28. gesztációs hét körül a perinatális átvitel csökkentésére',
                'Perinatális profilaxis: HBIG + vakcina újszülöttnek ≤12 óra',
                'Immunoszuppresszió/biológiai terápia előtt HBV státusz felmérése; szükség esetén profilaktikus NA terápia'
              ],
              monitoring: [
                'Kezelés alatt: HBV DNS és ALT 3–6 havonta, havi kezdeti ellenőrzés súlyos esetben',
                'Terápia megszüntetése csak szigorú kritériumok mellett (HBsAg veszteség ritka)',
                'HCC szűrés ultrahanggal ± AFP minden 6 hónapban cirrhosisos pácienseknél'
              ]
            },
            prognosis: {
              mortality: 'Akut: <1%; Krónikus: cirrhosis/HCC miatt jelentős',
              prognostic_scores: ['PAGE-B (HCC rizikó)'],
              factors: 'HBeAg státusz, virális load, genotípus, koinfekciók'
            },
            references: [
              'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398. doi:10.1016/j.jhep.2017.03.021',
              'WHO Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection. 2015.'
            ]
          },
          {
            id: 'hcv',
            name: 'Hepatitis C',
            pathogen: { type: 'Vírus', name: 'Hepatitis C vírus (HCV)', gram: 'ssRNS, Flaviviridae', shape: 'gömb, burokban' },
            epidemiology: {
              incidence: 'Világszerte 71 millió krónikus beteg',
              risk_groups: ['IV droghasználók', 'Transzfúzió (1992 előtt)', 'Tetoválás/piercing', 'Eü. dolgozók (tűszúrás)'],
              seasonality: 'Nincs',
              transmission: 'Parenterális (vér), szexuális (ritka, MSM magasabb), perinatális'
            },
            pathomechanism: {
              steps: [
                'Hepatocyta belépés',
                'RNS replikáció a citoplazmában (nincs sejtmag fázis - kúrálható!)',
                'Magas mutációs ráta (quasispecies) - immunelkerülés',
                'Krónikus gyulladás → fibrózis → cirrhosis'
              ],
              virulence_factors: ['NS3/4A proteáz', 'NS5A/B polimeráz', 'Lipid metabolizmus moduláció']
            },
            clinical: {
              incubation: '14-180 nap',
              onset: 'Lassú/Tünetmentes',
              symptoms: [
                { name: 'Tünetmentes', description: 'Az esetek többsége (akut és krónikus is)', severity: 'mild' },
                { name: 'Fáradtság', description: 'Nem specifikus', severity: 'moderate' },
                { name: 'Icterus', description: 'Akut fázisban ritka (20%)', severity: 'moderate' }
              ],
              physical_exam: [
                'Gyakran negatív',
                'Cirrhosis jelei késői stádiumban'
              ],
              complications: ['Krónikus hepatitis (70-80%!)', 'Cirrhosis (20-30% 20 év alatt)', 'HCC', 'Extrahepatikus: Krioglobulinémia, Porphyria cutanea tarda, Lichen planus, Diabetes']
            },
            diagnostics: {
              laboratory: [
                { test: 'ALT', finding: 'Hullámzóan emelkedett', interpretation: 'Krónikus gyulladás' }
              ],
              microbiology: [
                { test: 'Anti-HCV', finding: 'Pozitív', significance: 'Expozíció (nem feltétlenül aktív fertőzés)' },
                { test: 'HCV RNS', finding: 'Pozitív', significance: 'Aktív fertőzés (konfirmálás szükséges!)' },
                { test: 'Genotipizálás', finding: '1-6', significance: 'Terápia választás (bár pangenotípusos szerek dominálnak)' }
              ]
            },
            differential: [
              { disease: 'Alkoholos májbetegség', distinguishing: 'Anamnézis, AST>ALT' },
              { disease: 'NASH/NAFLD', distinguishing: 'Metabolikus szindróma, UH, biopszia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Pangenotípusos DAA', dose: 'Epclusa (Sof/Vel) vagy Maviret (Gle/Pib)', duration: '8-12 hét', note: 'Gyakorlatilag minden beteg kezelendő!' }
                ]
              },
              targeted: 'DAA (Direct Acting Antivirals): Sofosbuvir/Velpatasvir, Glecaprevir/Pibrentasvir. SVR (gyógyulás) >95%.',
              supportive: ['Alkohol tilalom', 'Vakcináció HAV/HBV ellen'],
              prevention: ['Nincs vakcina', 'Vérkészítmények szűrése', 'Ártalomcsökkentés (tűcsere)', 'Biztonságos szex']
            },
            guidelines: {
              diagnosis: [
                'Szűrés: Anti-HCV szerológia (ELISA) minden kockázati csoportban és véradásnál',
                'Aktív fertőzés igazolása: HCV RNS (PCR) pozitív = kezelés indikáció',
                'Fibrosis/focalás értékelés: FibroScan vagy APRI/FIB-4; HCC kockázat felmérése'
              ],
              treatment_indications: [
                'Minden krónikus HCV fertőzött kezelendő, kivéve rövid élettartamú páciensek vagy terhesség',
                'Különös prioritás: cirrhosis, extrahepatikus manifesztációk, transzplantációs jelöltek'
              ],
              first_line: [
                'Sofosbuvir/Velpatasvir (Epclusa) 1x naponta 12 hét (pangenotípusos)',
                'Glecaprevir/Pibrentasvir (Maviret) 8 hét nem-cirrhoticus betegeknek (pangenotípusos); 12 hét komp. cirrhosissal',
                'Decompensált cirrhosis esetén proteáz-inhibitor tartalmú kombinációk kerülendők; Sof/Vel preferált'
              ],
              monitoring: [
                'HCV RNS kezelés előtt, kezelési héten 4 nincs szükség rutinszerűen, terápia vége és 12 hét után (SVR12) ellenőrizni',
                'Májműködés és gyógyszerinterakciók monitorozása (inkl. gyógyszerek, antigén ellenőrzés gyógyszerinterakciók miatt)'
              ],
              special_populations: [
                'Terhesség: DAA terápia nem javasolt a terhesség alatt; terhesség után kezelni',
                'Krónikus veseelégtelenség: Glecaprevir/Pibrentasvir jól tolerált; Sofosbuvir óvatosan súlyos vesebetegségben'
              ]
            },
            prognosis: {
              mortality: 'Kezeléssel kiváló (SVR = gyógyulás), cirrhosis esetén rosszabb',
              factors: 'Fibrózis stádiuma, koinfekció (HIV/HBV), alkohol'
            }
          },
          {
            id: 'hdv',
            name: 'Hepatitis D',
            pathogen: { type: 'Vírus', name: 'Hepatitis D vírus (HDV)', gram: 'ssRNS (defektív)', shape: 'HBsAg burokban' },
            epidemiology: {
              incidence: 'HBV fertőzöttek 5%-a (kb. 15-20 millió)',
              transmission: 'Parenterális, szexuális (mint HBV). Csak HBV jelenlétében fertőz!'
            },
            pathomechanism: {
              steps: [
                'HBV HBsAg szükséges a bejutáshoz és csomagoláshoz',
                'Koinfekció: HBV+HDV egyszerre (általában gyógyul)',
                'Szuperinfekció: krónikus HBV + új HDV (súlyos, krónikussá válik)',
                'Direkt citopatikus hatás lehetséges'
              ],
              virulence_factors: ['Delta antigén (HDAg)']
            },
            clinical: {
              symptoms: [
                { name: 'Súlyos hepatitis', description: 'Súlyosabb mint a HBV önmagában', severity: 'severe' }
              ],
              complications: ['Fulmináns hepatitis', 'Gyors progresszió cirrhosisba (legagresszívebb vírushepatitis)']
            },
            diagnostics: {
              microbiology: [
                { test: 'Anti-HDV', finding: 'Pozitív', significance: 'Szűrés minden HBV betegnél' },
                { test: 'HDV RNS', finding: 'Pozitív', significance: 'Aktív replikáció' }
              ]
            },
            therapy: {
              targeted: 'PEG-Interferon alfa (hosszú távú, alacsony válaszarány), Bulevirtide (belépés gátló - új).',
              prevention: ['HBV vakcináció véd HDV ellen is (mivel HBsAg kell neki)']
            },
            guidelines: {
              screening: [
                'Minden HBsAg pozitív beteget szűrni kell anti-HDV és/vagy HDV RNS irányában (egy alkalommal)'
              ],
              diagnosis: [
                'Anti-HDV pozitív esetén HDV RNS kimutatása a replikáció igazolására',
                'Májműködés és fibrosis értékelés kötelező (ALT, INR, FibroScan)'
              ],
              treatment: [
                'Koinfekció (HBV+HDV) vagy szuperinfekció esetén PEG-IFN alfa adható (hosszú kezelés, alacsony válaszarány)',
                'Bulevirtide (ha elérhető) ajánlott krónikus HDV kezelésére kompenzált májbetegségben (regionális engedélyezés szerint)',
                'Nukleozidok (Tenofovir/Entecavir) csökkentik HBV replikációt, de önmagukban általában nem gyógyítják HDV-t'
              ],
              monitoring: [
                'HDV RNS és ALT rendszeres ellenőrzése (3–6 havonta), fibrosis monitorozása',
                'HCC szűrés cirrhosis esetén 6 havonta'
              ],
              prevention: ['HBV vakcináció megakadályozza a HDV fertőzést (mivel HDV HBsAg-hez kötött)']
            },
            prognosis: {
              mortality: 'Magas, gyors cirrhosis progresszió',
              factors: 'Szuperinfekció rosszabb prognózisú'
            }
          },
          {
            id: 'hev',
            name: 'Hepatitis E',
            pathogen: { type: 'Vírus', name: 'Hepatitis E vírus (HEV)', gram: 'ssRNS, Hepeviridae', shape: 'ikozahidrális' },
            epidemiology: {
              incidence: 'Fejlődő országok (víz), Fejlett (sertés/vad)',
              risk_groups: ['Terhesek (súlyos lefolyás)', 'Immunszupprimáltak (krónikus)', 'Májbetegek', 'Sertésgondozók'],
              seasonality: 'Esős évszak (trópusokon)',
              transmission: 'Feko-orális (víz - Genotípus 1,2), Zoonózis (nyers sertés/vadhús - Genotípus 3,4)'
            },
            pathomechanism: {
              steps: [
                'Orális bejutás',
                'Bélből felszívódás, májba jutás',
                'Hepatocyta replikáció',
                'Epeúti ürítés',
                'Immunmediált citotoxicitás'
              ],
              virulence_factors: ['ORF3 protein (kiszabadulás)', 'Kapszid protein']
            },
            clinical: {
              incubation: '15-60 nap (átlag 40)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Akut hepatitis', description: 'Hasonló a HAV-hoz', severity: 'moderate' },
                { name: 'Akut hepatitis', description: 'Hasonló a HAV-hoz, sárgaság, láz', severity: 'moderate' },
                { name: 'Hasi fájdalom', description: 'Jobb bordaív alatt', severity: 'mild' }
              ],
              physical_exam: ['Icterus', 'Hepatomegalia'],
              complications: ['Fulmináns hepatitis terheseknél (20% mortalitás! - G1,2)', 'Krónikus hepatitis immunszupprimáltakban (G3)', 'Neurológiai tünetek (Guillain-Barré, Neuralgiás amyotrophia)']
            },
            diagnostics: {
              laboratory: [
                 { test: 'Májenzimek', finding: 'ALT/AST emelkedett', interpretation: 'Hepatitis' }
              ],
              imaging: [
                 { modality: 'Has UH', finding: 'Hepatomegalia', significance: 'Nem specifikus' }
              ],
              microbiology: [
                { test: 'Anti-HEV IgM', finding: 'Pozitív', significance: 'Akut fertőzés' },
                { test: 'HEV RNS', finding: 'Pozitív', significance: 'Konfirmálás, krónikus eset' }
              ]
            },
            differential: [
               { disease: 'Hepatitis A', distinguishing: 'Szerológia' },
               { disease: 'Gyógyszer toxicitás', distinguishing: 'Anamnézis' }
            ],
            therapy: {
              empirical: {
                 outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Pihenés, folyadék' }]
              },
              targeted: 'Általában szupportív. Krónikus esetben: Ribavirin, immunszuppresszió csökkentése.',
              supportive: ['Folyadékpótlás', 'Tüneti kezelés'],
              prevention: ['Tiszta víz', 'Hús alapos sütése', 'Higiénia']
            },
            guidelines: {
              diagnosis: [
                'Akut HEV gyanú: Anti-HEV IgM és HEV RNS (PCR) – IgM pozitív akut fertőzést jelez; RNS segít konfirmálni és krónikus esetet kimutatni',
                'Krónikus infekcióra gondolni immunszupprimált betegeknél (pl. szervátültetettek): HEV RNS tartós pozitivitás >3 hónap'
              ],
              treatment_indications: [
                'Általában szupportív kezelés elegendő (G1/2 akut, önlimitáló)',
                'Krónikus HEV (genotípus 3) immunszupprimáltakban: ribavirin terápia javasolt; immunszuppresszió csökkentése, ha lehetséges',
                'Terhesség (genotípus 1–2): magas mortalitás, intenzív ellátás szükséges; ribavirin terápia terhességben kontraindikált'
              ],
              first_line: [
                'Krónikus HEV: Ribavirin (dózis: egyénre szabott, általában 600–1000 mg/nap, 3 hónap körüli kezelés) – szigorú hematológiai monitorozás szükséges'
              ],
              prevention: [
                'Endémiás területeken tiszta ivóvíz és higiénia',
                'Fejlett országokban kerüljük a nyers/kevésbé hőkezelt sertés- és vadhúst immunszupprimált és terhes betegeknél',
                'HEV vakcina (HEV239) bizonyos országokban elérhető, de globálisan nem rutinszerű'
              ],
              monitoring: [
                'Krónikus esetekben HEV RNS terápia alatt és után rendszeresen, valamint májfunkciók és hemoglobin követése ribavirin mellett'
              ]
            },
            prognosis: {
              mortality: 'Általában alacsony; terheseknél (genotípus 1–2) mortalitás akár 20%',
              prognostic_scores: ['Nincs'],
              factors: 'Terhesség, immunszuppresszió'
            }
          },
          {
            id: 'hgv',
            name: 'Hepatitis G (GBV-C)',
            pathogen: { type: 'Vírus', name: 'GB vírus C (HGV)', gram: 'ssRNS, Flaviviridae', shape: '-' },
            epidemiology: {
              incidence: 'Véradók 1-4%-a',
              risk_groups: ['IV droghasználók', 'Hemodializáltak', 'Többszörös transzfúzió'],
              seasonality: 'Nincs',
              transmission: 'Vér, szexuális, vertikális'
            },
            pathomechanism: {
              steps: ['Lymphotrop vírus', 'Replikáció lymphocytákban', 'Nem hepatotrop (vitatott)', 'Interferencia HIV replikációval'],
              virulence_factors: ['Nem ismert']
            },
            clinical: {
              incubation: 'Ismeretlen',
              onset: 'Tünetmentes',
              symptoms: [
                { name: 'Tünetmentes', description: 'Nem okoz akut vagy krónikus hepatitist', severity: 'mild' }
              ],
              physical_exam: ['Negatív'],
              complications: ['HIV koinfekcióban lassítja az AIDS progressziót (kedvező hatás)']
            },
            diagnostics: {
              laboratory: [{ test: 'Májfunkció', finding: 'Normál', interpretation: 'Nem okoz hepatitist' }],
              imaging: [{ modality: 'Nincs', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'RNS', significance: 'Kutatási cél, klinikai rutinban nem használják' }
              ]
            },
            differential: [],
            therapy: {
              empirical: {},
              targeted: 'Nem igényel kezelést.',
              supportive: [],
              prevention: ['Vérkészítmények szűrése (nem rutinszerű)']
            },
            prognosis: {
              mortality: 'Nem patogén a májra nézve',
              prognostic_scores: [],
              factors: '-'
            }
          },
          {
            id: 'ttv',
            name: 'Torque teno vírus (TTV)',
            pathogen: { type: 'Vírus', name: 'Torque teno virus', gram: 'ssDNS, Anelloviridae', shape: '-' },
            epidemiology: {
              incidence: 'Ubiquiter (népesség >90%-a hordozó)',
              risk_groups: ['Általános populáció'],
              seasonality: 'Nincs',
              transmission: 'Vér, nyál, széklet, anyatej'
            },
            pathomechanism: {
              steps: ['Perzisztens viraemia', 'Replikáció számos szövetben', 'Nem bizonyított patogenitás'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '-',
              onset: 'Tünetmentes',
              symptoms: [
                { name: 'Tünetmentes', description: 'Komkommenzális vírusnak tekinthető', severity: 'mild' }
              ],
              physical_exam: ['Negatív'],
              complications: ['Pathogenitása nem bizonyított', 'Immunszuppresszió mértékének jelzője lehet']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: '-' }],
              imaging: [{ modality: '-', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'DNS', significance: 'Kutatás' }
              ]
            },
            differential: [],
            therapy: {
              empirical: {},
              targeted: 'Nincs',
              supportive: [],
              prevention: ['-']
            },
            prognosis: {
              mortality: 'Jó',
              prognostic_scores: [],
              factors: '-'
            }
          },
          {
            id: 'senv',
            name: 'SEN vírus',
            pathogen: { type: 'Vírus', name: 'SEN vírus', gram: 'ssDNS, Anelloviridae', shape: '-' },
            epidemiology: {
              incidence: 'Ismeretlen',
              risk_groups: ['Transzfundáltak'],
              seasonality: 'Nincs',
              transmission: 'Transzfúzió, vér útján'
            },
            pathomechanism: {
              steps: ['Vér útján terjed', 'Májsejtekben replikálódhat', 'Okozhat enyhe hepatitist (vitatott)'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '-',
              onset: 'Lassú',
              symptoms: [
                { name: 'Enyhe hepatitis?', description: 'Transzfúzió utáni hepatitishez társították, de ok-okozat nem bizonyított', severity: 'mild' }
              ],
              physical_exam: ['-'],
              complications: ['Nem bizonyított jelentős májkárosodás']
            },
            diagnostics: {
              laboratory: [{ test: 'ALT', finding: 'Enyhe emelkedés lehetséges', interpretation: '?' }],
              imaging: [{ modality: '-', finding: '-', significance: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'DNS', significance: 'Kutatás' }
              ]
            },
            differential: [],
            therapy: {
              empirical: {},
              targeted: 'Nincs',
              supportive: [],
              prevention: ['-']
            },
            prognosis: {
              mortality: 'Jó',
              prognostic_scores: [],
              factors: '-'
            }
          }
        ]
      },
           urinary_tract: {
        name: 'Húgyúti fertőzések',
        icon: '🚽',
        color: '#3b82f6',
        diseases: [
          {
            id: 'cystitis',
            name: 'Akut cystitis (Hólyaghurut)',
            pathogen: { type: 'Baktérium', name: 'Escherichia coli (75-95%)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Nők 50%-a élete során legalább egyszer',
              risk_groups: ['Szexuálisan aktív nők', 'Postmenopauza', 'Terhesség', 'Diabetes', 'Katéter viselés'],
              seasonality: 'Nincs',
              transmission: 'Felszálló fertőzés (perinealis flóra)'
            },
            pathomechanism: {
              steps: [
                'Perinealis kolonizáció bélbaktériumokkal',
                'Urethrán keresztüli feljutás a hólyagba',
                'Adherencia a hólyag urotheliumához (P-fimbriae)',
                'Bakteriális szaporodás és gyulladás',
                'Hólyagnyálkahártya irritáció (dysuria, urgencia)'
              ],
              virulence_factors: ['P-fimbriae (adherencia)', 'Hemolizin', 'Aerobactin (vasfelvétel)']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Dysuria', description: 'Csípő, égető vizeletürítés', severity: 'moderate' },
                { name: 'Pollakisuria', description: 'Gyakori vizelési inger', severity: 'moderate' },
                { name: 'Urgencia', description: 'Sürgető vizelési inger', severity: 'moderate' },
                { name: 'Suprapubicus fájdalom', description: 'Alhasi diszkomfort', severity: 'mild' },
                { name: 'Haematuria', description: 'Véres vizelet (esetek 30%-a)', severity: 'mild' }
              ],
              physical_exam: [
                'Suprapubicus nyomásérzékenység',
                'Láz általában NINCS (ha van, pyelonephritis gyanú!)',
                'Vesetájék nem érzékeny'
              ],
              complications: ['Ascendáló pyelonephritis', 'Recidív cystitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vizelet tesztcsík', finding: 'Leukocyta esterase+, Nitrit+', interpretation: 'Bakteriális fertőzés' },
                { test: 'Vizelet üledék', finding: 'Pyuria (>10 fvs/látótér), bakteriuria', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'Nincs', finding: 'Nem szükséges komplikálatlan esetben', significance: '-' }
              ],
              microbiology: [
                { test: 'Vizelet tenyésztés', finding: '>10^3 CFU/ml', significance: 'Csak komplikált vagy recidív esetben rutinszerű' }
              ]
            },
            differential: [
              { disease: 'Vaginitis', distinguishing: 'Folyás, viszketés, dysuria külső jellegű' },
              { disease: 'Urethritis (STD)', distinguishing: 'Új partner, fokozatos kezdet, pyuria steril tenyésztéssel' },
              { disease: 'Interstitialis cystitis', distinguishing: 'Krónikus, tenyésztés negatív' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Fosfomycin', dose: '3g PO', duration: 'Egyszeri dózis', note: 'Első választás' },
                  { drug: 'Nitrofurantoin', dose: '2x100mg PO', duration: '5 nap', note: 'Első választás (ha GFR>30)' },
                  { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Nem igényel kórházi kezelést', dose: '-', duration: '-', note: 'Kivéve komplikáció' }
                ],
                icu: [
                  { drug: '-', dose: '-', duration: '-', note: '-' }
                ]
              },
              targeted: 'Tenyésztés alapján (pl. Ciprofloxacin, Cotrimoxazol - de rezisztencia gyakori!)',
              supportive: ['Bőséges folyadékfogyasztás', 'Gyakori vizeletürítés', 'NSAID fájdalomcsillapítás'],
              prevention: ['Postcoitalis vizeletürítés', 'Bőséges folyadék', 'Tőzegáfonya (kérdéses hatékonyság)', 'Ösztrogén krém (postmenopauza)']
            },
            prognosis: {
              mortality: 'Nulla',
              prognostic_scores: ['Nincs'],
              factors: 'Recidíva hajlam'
            }
          },
          {
            id: 'pyelonephritis',
            name: 'Akut pyelonephritis',
            pathogen: { type: 'Baktérium', name: 'Escherichia coli (80%)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Gyakori szövődménye a kezeletlen cystitisnek',
              risk_groups: ['Nők', 'Terhesség', 'Obstrukció (kő, prostata)', 'Vesefejlődési rendellenesség', 'Diabetes'],
              seasonality: 'Nincs',
              transmission: 'Felszálló fertőzés (95%), ritkán hematogén'
            },
            pathomechanism: {
              steps: [
                'Baktérium feljutása az ureteren a vesemedencébe',
                'Veseparenchyma invázió',
                'Gyulladásos reakció, ödéma, mikrotályogok',
                'Tubulus funkció károsodás'
              ],
              virulence_factors: ['P-fimbriae', 'Endotoxin', 'Kapszula']
            },
            clinical: {
              incubation: 'Cystitis után napokkal',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Láz', description: '>38°C, hidegrázás', severity: 'severe' },
                { name: 'Deréktáji fájdalom', description: 'Egy vagy kétoldali, tompa, folyamatos', severity: 'severe' },
                { name: 'Hányinger, hányás', description: 'Gyakori szisztémás tünet', severity: 'moderate' },
                { name: 'Cystitis tünetek', description: 'Dysuria, pollakisuria (megelőzheti)', severity: 'mild' }
              ],
              physical_exam: [
                'Vesetájék ütögetési érzékenysége (costovertebralis szöglet)',
                'Láz, tachycardia',
                'Hasi érzékenység'
              ],
              complications: ['Vese tályog', 'Perinephricus tályog', 'Urosepsis', 'Papilla necrosis', 'Krónikus veseelégtelenség (recidív)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis, balra tolt', interpretation: 'Szisztémás gyulladás' },
                { test: 'CRP/PCT', finding: 'Jelentősen emelkedett', interpretation: 'Bakteriális infekció' },
                { test: 'Vizelet', finding: 'Leukocyturia, bakteriuria, fehérvérsejt cilinderek!', interpretation: 'Felső húgyúti eredet' },
                { test: 'Vesefunkció', finding: 'Kreatinin emelkedhet', interpretation: 'Akut vesekárosodás' }
              ],
              imaging: [
                { modality: 'Vese UH', finding: 'Megnagyobbodott vese, echodús parenchyma', significance: 'Obstrukció/tályog kizárása (kötelező!)' },
                { modality: 'CT has', finding: 'Ék alakú hypodenzitás', significance: 'Komplikált esetben' }
              ],
              microbiology: [
                { test: 'Vizelet tenyésztés', finding: 'Pozitív', significance: 'Mindig levenni!' },
                { test: 'Hemokultúra', finding: 'Pozitív (20-30%)', significance: 'Súlyos esetben' }
              ]
            },
            differential: [
              { disease: 'Vesekő', distinguishing: 'Görcsös fájdalom, nincs láz (ha nincs fertőzés), hematuria dominál' },
              { disease: 'Akut hasi kórképek', distinguishing: 'Appendicitis, cholecystitis (hasi status, UH)' },
              { disease: 'Kismedencei gyulladás (PID)', distinguishing: 'Nőgyógyászati vizsgálat, folyás' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Ciprofloxacin', dose: '2x500-750mg PO', duration: '7 nap', note: 'Ha rezisztencia <10%' },
                  { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 nap', note: 'Alternatíva' },
                  { drug: 'Ceftibuten/Cefixim', dose: 'PO', duration: '10 nap', note: 'Ha kinolon nem adható' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'Első választás' },
                  { drug: 'Ciprofloxacin', dose: '2x400mg IV', duration: '10-14 nap', note: 'Alternatíva' },
                  { drug: 'Gentamicin + Ampicillin', dose: 'IV', duration: '', note: 'Súlyos esetben' }
                ],
                icu: [
                  { drug: 'Piperacillin/tazobactam', dose: '4x4.5g IV', duration: '', note: 'Urosepsis, obstrukció' },
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'ESBL gyanú' }
                ]
              },
              targeted: 'Antibiogram alapján. ESBL gyakori!',
              supportive: ['Folyadékpótlás', 'Lázcsillapítás', 'Obstrukció megoldása (katéter, stent)'],
              prevention: ['Cystitis megfelelő kezelése', 'Anatómiai rendellenességek korrekciója']
            },
            prognosis: {
              mortality: 'Alacsony (<1%), de urosepsis esetén 10-20%',
              prognostic_scores: ['qSOFA'],
              factors: 'Idős kor, obstrukció, rezisztens kórokozó'
            }
          }
        ]
      },
});