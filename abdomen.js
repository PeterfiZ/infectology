Object.assign(window.diseases, {
      gastrointestinal: {
        name: 'Gastrointestinális fertőzések',
        icon: window.diseaseMetadata.gastrointestinal.icon,
        color: window.diseaseMetadata.gastrointestinal.color,
        tables: [
          {
            title: 'Gastrointestinális fertőzések differenciáldiagnosztikája',
            headers: ['Betegség', 'Kórokozó', 'Széklet jellege', 'Láz', 'Főbb jellemzők / Komplikációk'],
            rows: [
              ['C. difficile', 'C. difficile', 'Vizes, zöldes, bűzös', '+', 'AB-asszociált, pseudomembrán, toxikus megacolon'],
              ['Salmonella', 'Salmonella', 'Vizes (ritkán véres)', '++', 'Ételmérgezés, hüllő kontakt, extraintesztinális szövődmények'],
              ['Shigella', 'Shigella', 'Véres-nyákos (dysenteria)', '++', 'Tenesmus, alacsony fertőző dózis, HUS'],
              ['Campylobacter', 'Campylobacter', 'Vizes/Véres', '+', 'Pseudoappendicitis, GBS, baromfi'],
              ['E. coli (EHEC)', 'E. coli (STEC)', 'Véres', '-', 'Láz hiánya, HUS, marhahús'],
              ['E. coli (ETEC)', 'E. coli (ETEC)', 'Vizes', '-', 'Utazók hasmenése'],
              ['E. coli (EPEC)', 'E. coli (EPEC)', 'Vizes/Nyákos', '+/-', 'Csecsemőkori hasmenés'],
              ['E. coli (EIEC)', 'E. coli (EIEC)', 'Véres-nyákos', '++', 'Dysenteria-szerű, láz'],
              ['Yersinia', 'Yersinia', 'Vizes/Véres', '+', 'Pseudoappendicitis, reaktív arthritis, sertéshús'],
              ['Giardia', 'Giardia', 'Zsíros, bűzös', '-', 'Puffadás, malabszorpció, krónikus'],
              ['Amoeba', 'E. histolytica', 'Véres-nyákos', '+/-', 'Májtályog, utazás'],
              ['Cryptosporidium', 'Cryptosporidium', 'Vizes', '-', 'Immunszupprimáltakban perzisztáló, uszoda'],
              ['Vírusos GE', 'Rota/Noro', 'Vizes', '-/+', 'Hányás dominál (Noro), téli szezon'],
              ['Cholera', 'Vibrio cholerae', 'Rizslé szerű', '-', 'Masszív folyadékvesztés, dehidráció']
            ]
          }
        ],
        diseases: [
          {
            id: 'cdiff',
            name: 'Clostridioides difficile fertőzés',
            pathogen: { type: 'Baktérium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-pozitív', shape: 'spóraképző anaerob pálca' },
            epidemiology: {
              incidence: 'Leggyakoribb nozokomiális hasmenés oka, 500,000 eset/év USA',
              risk_groups: ['65 év felettiek', 'Hospitalizált betegek', 'Antibiotikum expozíció', 'PPI használat', 'Gyulladásos bélbetegség', 'Immunszupprimáltak'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (spórák), nozokomiális terjedés, kéz higiéné!'
            },
            pathomechanism: {
              steps: [
                'Az antibiotikum-kezelés megzavarja a normál bélflóra egyensúlyát, ami lehetővé teszi a C. difficile spórák kicsírázását és elszaporodását.',
                'A baktérium toxinokat termel: a Toxin A (enterotoxin) folyadékszekréciót és gyulladást okoz, a Toxin B (citotoxin) pedig közvetlenül károsítja a bélhámsejteket.',
                'A súlyos gyulladás és sejtpusztulás következtében a vastagbél nyálkahártyáján jellegzetes álhártyák (pseudomembránok) képződnek.'
              ],
              virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Binaris toxin (CDT)', 'Spóraképzés', 'Adherencia faktorok']
            },
            clinical: {
              incubation: 'AB után 2-10 nap, akár 8 hét múlva',
              onset: 'Akut',
              symptoms: [
                { name: 'Vizes hasmenés', description: 'Naponta többszöri (3-15x), jellegzetesen zöldes színű, bűzös, vizes hasmenés.', severity: 'severe' },
                { name: 'Hasi fájdalom', description: 'Diffúz, görcsös hasi fájdalom és érzékenység.', severity: 'moderate' },
                { name: 'Láz', description: 'Gyakran kíséri láz és leukocytosis.', severity: 'moderate' }
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
              prevention: ['Antibiotikum stewardship', 'Kézmosás (alkohol nem öli meg a spórákat!)', 'Kontakt izoláció', 'Bezlotoxumab (rekurrencia megelőzés)', 'FMT rekurrens esetben']
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
            },
            differential: [
              { disease: 'Egyéb AB-asszociált hasmenés', distinguishing: 'Toxin negatív, enyhébb' },
              { disease: 'Gyulladásos bélbetegség fellángolása', distinguishing: 'Anamnézis, endoscopia' },
              { disease: 'Ischaemiás colitis', distinguishing: 'Rizikófaktorok, CT angiográfia' },
              { disease: 'Egyéb infektív enterocolitis', distinguishing: 'Széklet tenyésztés, epidemiológia' }
            ]
          },
          {
            id: 'salmonellosis',
            name: 'Salmonellosis (Nem-typhi)',
            pathogen: { type: 'Baktérium', name: '<i>Salmonella enterica</i> (pl. <i>Enteritidis, Typhimurium</i>)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Gyakori ételmérgezés (nyáron gyakoribb)',
              risk_groups: ['Csecsemők', 'Idősek', 'Gyomorsavhiányosok (PPI)', 'Immunszupprimáltak'],
              seasonality: 'Nyár-ősz',
              transmission: 'Feko-orális: szennyezett élelmiszer (tojás, baromfi, hús), hüllők érintése'
            },
            pathomechanism: {
              steps: [
                'A baktériumok lenyelése után (magas csíraszám szükséges) a kórokozók túlélik a gyomorsavat és eljutnak a vékonybélbe.',
                'A vékonybélben az M-sejteken keresztül bejutnak a Peyer-plakkokba és a bélfal mélyebb rétegeibe.',
                'A baktériumok szaporodása heves gyulladásos választ vált ki, ami neutrofil infiltrációhoz és folyadékszekrécióhoz vezet.'
              ],
              virulence_factors: ['III-as típusú szekréciós rendszer (T3SS)', 'Enterotoxin']
            },
            clinical: {
              incubation: '6-72 óra (átlag 12-36 óra)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Hasmenés', description: 'Hirtelen kezdődő, bőséges, vizes, néha nyákos vagy véres hasmenés.', severity: 'moderate' },
                { name: 'Láz', description: 'Magas láz, hidegrázás, fejfájás és izomfájdalom kísérheti.', severity: 'moderate' },
                { name: 'Hasi görcsök', description: 'Köldök körüli vagy diffúz hasi görcsök.', severity: 'moderate' }
              ],
              physical_exam: ['Láz', 'Hasi érzékenység', 'Dehidráció jelei'],
              complications: ['Bakterémia (5%, főleg idősek/immunszupprimáltak)', 'Szeptikus arthritis', 'Osteomyelitis (sarlósejtes anémia)', 'Endovascularis fertőzés (aneurysma)']
            },
            diagnostics: {
              laboratory: [{ test: 'Gyulladásos paraméterek', finding: 'CRP emelkedett', interpretation: 'Bakteriális eredet' }],
              microbiology: [{ test: 'Széklet tenyésztés', finding: 'Salmonella sp.', significance: 'Diagnosztikus' }]
            },
            differential: [
              { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés, hasonló klinikum' },
              { disease: 'Shigellosis', distinguishing: 'Véres-nyákos széklet gyakoribb' },
              { disease: 'Vírusos gastroenteritis', distinguishing: 'Hányás dominál, vizes hasmenés' },
              { disease: 'IBD (Crohn/Colitis)', distinguishing: 'Krónikus, nem fertőző, endoszkópia' }
            ],
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
            pathogen: { type: 'Baktérium', name: '<i>Shigella (dysenteriae, flexneri, sonnei)</i>', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Világszerte gyakori, fejlődő országokban endémiás',
              seasonality: 'Nyár',
              risk_groups: ['Gyermekek (bölcsőde, óvoda)', 'Utazók', 'MSM'],
              transmission: 'Feko-orális (emberről emberre), nagyon alacsony fertőző dózis (10-100 baktérium)!'
            },
            pathomechanism: {
              steps: [
                'A baktériumok behatolnak a vastagbél hámsejtjeibe, és sejtről sejtre terjednek, elkerülve az immunrendszert.',
                'A baktériumok szaporodása és a termelt toxinok (pl. Shiga-toxin) a nyálkahártya elhalását, fekélyképződést és vérzést okoznak.',
                'A Shiga-toxin a véráramba jutva károsíthatja a vese endothel sejtjeit, hemolitikus urémiás szindrómát (HUS) okozva.'
              ],
              virulence_factors: ['Shiga toxin (Stx)', 'Inváziós plazmid antigének']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Dysenteria', description: 'Gyakori, kis mennyiségű, véres-nyákos-gennyes székletürítés.', severity: 'severe' },
                { name: 'Tenesmus', description: 'Kínzó, eredménytelen székelési inger.', severity: 'severe' },
                { name: 'Láz', description: 'Magas láz és toxikus állapot jellemzi.', severity: 'moderate' }
              ],
              complications: ['Hemolitikus urémiás szindróma (HUS - S. dysenteriae)', 'Toxikus megacolon', 'Rektális prolapsus', 'Reaktív arthritis']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis, balra tolt', interpretation: 'Invazív fertőzés' }],
              microbiology: [{ test: 'Széklet tenyésztés', finding: 'Shigella sp.', significance: 'Diagnosztikus' }]
            },
            differential: [
              { disease: 'EIEC (E. coli)', distinguishing: 'Klinikailag azonos, mikrobiológia dönt' },
              { disease: 'Amoebiasis', distinguishing: 'E. histolytica kimutatás, kevésbé lázas' },
              { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés' },
              { disease: 'C. difficile', distinguishing: 'Antibiotikum anamnézis, toxin teszt' }
            ],
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
            pathogen: { type: 'Baktérium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negatív', shape: 'spirális/sirályszárny' },
            epidemiology: {
              incidence: 'Leggyakoribb bakteriális gastroenteritis a fejlett világban',
              risk_groups: ['Csecsemők', 'Fiatal felnőttek', 'Idősek'],
              seasonality: 'Nyár',
              transmission: 'Szennyezett baromfi (nem kellően átsütve), nyers tej, víz'
            },
            pathomechanism: {
              steps: [
                'A baktériumok a vékonybél és a vastagbél nyálkahártyáját kolonizálják és invadálják.',
                'Toxinokat termelnek (pl. CDT), amelyek gátolják a sejtosztódást és gyulladást váltanak ki.',
                'A fertőzés autoimmun mechanizmuson keresztül Guillain-Barré szindrómát válthat ki.'
              ],
              virulence_factors: ['Flagellum (motilitás)', 'Adhezinek', 'Cytolethal distending toxin (CDT)']
            },
            clinical: {
              incubation: '2-5 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Hasmenés', description: 'Bőséges, vizes, gyakran véres hasmenés.', severity: 'moderate' },
                { name: 'Hasi fájdalom', description: 'Kifejezett, görcsös hasi fájdalom, amely utánozhatja a vakbélgyulladást (pseudoappendicitis).', severity: 'severe' },
                { name: 'Láz', description: 'A hasmenést gyakran láz, fejfájás és izomfájdalom előzi meg.', severity: 'moderate' }
              ],
              physical_exam: ['Diffúz hasi érzékenység', 'Láz', 'Dehidráció jelei'],
              complications: ['Guillain-Barré szindróma (GBS) - 1/1000 eset', 'Reaktív arthritis', 'Erythema nodosum']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' }, { test: 'Széklet', finding: 'Leukocyták, vvt-k', interpretation: 'Invazív' }, { test: 'CRP', finding: 'Emelkedett', interpretation: 'Bakteriális eredet' }],
              microbiology: [{ test: 'Széklet tenyésztés', finding: 'Campylobacter (speciális táptalaj, 42°C)', significance: 'Diagnosztikus' }]
            },
            differential: [
              { disease: 'Salmonellosis', distinguishing: 'Tenyésztés, epidemiológia' },
              { disease: 'Shigellosis', distinguishing: 'Súlyosabb dysenteria, tenyésztés' },
              { disease: 'Appendicitis', distinguishing: 'UH/CT, sebészi konzílium' }
            ],
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
            name: 'E. coli enteritisek (ETEC, EHEC, EPEC, EIEC)',
            pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (pathogen törzsek)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'ETEC: utazók hasmenése; EHEC: élelmiszer eredetű járványok; EPEC: csecsemőkori hasmenés; EIEC: dysenteria-szerű',
              risk_groups: ['Utazók (ETEC)', 'Gyermekek, idősek (EHEC)', 'Csecsemők (EPEC)'],
              seasonality: 'Nyár',
              transmission: 'Feko-orális, szennyezett víz/étel (marhahús, zöldség)'
            },
            pathomechanism: {
              steps: [
                'ETEC: A baktériumok a vékonybélben megtapadva enterotoxinokat termelnek, amelyek masszív folyadékszekréciót okoznak.',
                'EHEC: A vastagbélben Shiga-toxint termelnek, ami véres hasmenést és szisztémásan felszívódva veseelégtelenséget (HUS) okozhat.',
                'EPEC/EIEC: A bélhámsejtekhez tapadva vagy azokba behatolva károsítják a nyálkahártyát és gyulladást okoznak.'
              ],
              virulence_factors: ['Enterotoxinok', 'Shiga-toxin (Stx1, Stx2)', 'Adhezinek (EPEC)', 'Invazinok (EIEC)']
            },
            clinical: {
              incubation: 'ETEC/EPEC: 1-3 nap; EHEC/EIEC: 3-4 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Vizes hasmenés (ETEC/EPEC)', description: 'Hirtelen kezdődő, bőséges vizes hasmenés, láz nélkül (utazók hasmenése).', severity: 'moderate' },
                { name: 'Véres hasmenés (EHEC/EIEC)', description: 'Véres széklet, erős hasi görcsökkel, gyakran láz nélkül (EHEC) vagy lázzal (EIEC).', severity: 'severe' }
              ],
              physical_exam: ['Dehidráció', 'Hasi érzékenység (EHEC/EIEC: kifejezett)', 'Láz (EIEC-nél gyakori, EHEC-nél ritka)'],
              complications: ['Hemolitikus urémiás szindróma (HUS) - EHEC fertőzés után 5-10% (főleg gyerekek)', 'TTP (felnőttek)', 'Malnutríció (EPEC)']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Thrombocytopenia, anémia', interpretation: 'HUS gyanú (EHEC)!' }, { test: 'Vese', finding: 'Kreatinin emelkedés', interpretation: 'HUS' }],
               microbiology: [
                { test: 'Széklet tenyésztés', finding: 'Sorbitol-MacConkey (EHEC)', significance: 'EHEC szűrés' },
                { test: 'Shiga-toxin kimutatás', finding: 'PCR vagy EIA', significance: 'EHEC diagnózis' },
                { test: 'PCR panel', finding: 'Virulencia gének', significance: 'EPEC/EIEC/ETEC elkülönítése' }
              ]
            },
            differential: [
              { disease: 'Shigellosis', distinguishing: 'EIEC/EHEC esetén hasonló, tenyésztés' },
              { disease: 'Cholera', distinguishing: 'ETEC esetén (rizslé széklet), utazás' },
              { disease: 'Vírusos gastroenteritis', distinguishing: 'Nincs vér, hányás dominálhat' },
              { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'ETEC: Rifaximin', dose: '2x200mg PO', duration: '3 nap', note: 'Utazók hasmenése' },
                  { drug: 'EHEC: ANTIBIOTIKUM KONTRAINDIKÁLT!', dose: '-', duration: '-', note: 'Növeli a HUS kockázatát!' },
                  { drug: 'EIEC: Ciprofloxacin/Azithromycin', dose: 'Szokásos dózis', duration: '3 nap', note: 'Súlyos esetben (mint Shigella)' }
                ]
              },
              targeted: 'ETEC/EIEC: Ciprofloxacin vagy Azithromycin (súlyos esetben). EHEC: CSAK szupportív! EPEC: Szupportív.',
              supportive: ['Folyadékpótlás', 'HUS esetén dialízis, transzfúzió'],
              prevention: ['Élelmiszerhigiénia', 'Marhahús átsütése', 'Utazóknak: palackozott víz']
            },
            guidelines: {
              diagnosis: [
                'Gyanú: véres hasmenés (EHEC/EIEC) vagy vizes hasmenés (ETEC/EPEC); HUS kizárása fontos',
                'Mikrobiológia: EHEC szűrés, PCR panel a patotípusok elkülönítésére'
              ],
              treatment_indications: [
                'EHEC fertőzés esetén antibiotikum általában kontraindikált (növeli a HUS kockázatát)',
                'ETEC/EIEC esetén súlyos tüneteknél antibiotikum adható'
              ],
              supportive: ['Folyadékpótlás, szoros megfigyelés; HUS esetén nefrológiai ellátás'],
              prevention: ['Élelmiszerhigiénia, jól átsütött marhahús, utazóknak óvintézkedések'],
              dosing: {
                adult: {
                  rifaximin: '200 mg PO 3x/nap 3 nap (ETEC, nem invazív utazók hasmenése)',
                  azithromycin: '1 g PO egyszeri dózis vagy 500 mg PO 1x naponta 1–3 nap (súlyos ETEC/EIEC)'
                },
                pediatric: 'Rifaximin gyermek-dózisok korlátozottak; EHEC esetén kerülni kell antibiotikumot gyermekeknél'
              },
              references: [
                'CDC – E. coli (STEC): https://www.cdc.gov/ecoli/index.html',
                'CDC – Traveler\'s Diarrhea & Rifaximin: https://www.cdc.gov/antibiotic-use/community/for-hcp/common-conditions/travelers-diarrhea.html'
              ]
            },
            prognosis: { mortality: 'ETEC/EPEC: alacsony; EHEC: HUS esetén 3-5% halálozás', prognostic_scores: [], factors: 'Életkor (gyerek/idős), HUS kialakulása, antibiotikum használat (EHEC-nél rontja!)' }
          },
          {
            id: 'yersiniosis',
            name: 'Yersiniosis',
            pathogen: { type: 'Baktérium', name: '<i>Yersinia enterocolitica</i>', gram: 'Gram-negatív', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'Mérsékelt övben gyakoribb, télen',
              risk_groups: ['Gyermekek', 'Vasterheléses betegek (hemochromatosis)'],
              seasonality: 'Tél',
              transmission: 'Nyers sertéshús, tej, kontaminált víz. Psychrophil (hűtőben szaporodik!)'
            },
            pathomechanism: {
              steps: [
                'A baktériumok az ileum M-sejtjein keresztül bejutnak a Peyer-plakkokba és a mesenterialis nyirokcsomókba.',
                'A nyirokcsomókban gyulladást és mikrotályogokat okoznak (mesenterialis lymphadenitis).',
                'A fertőzés immunológiai úton reaktív arthritist válthat ki.'
              ],
              virulence_factors: ['Yersinia outer proteins (Yops)', 'T3SS', 'Invazin']
            },
            clinical: {
              incubation: '4-7 nap',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Enterocolitis', description: 'Láz, hasmenés (esetleg véres), hányás.', severity: 'moderate' },
                { name: 'Pseudoappendicitis', description: 'Jobb alhasi fájdalom és érzékenység, amely vakbélgyulladást utánoz.', severity: 'moderate' }
              ],
              physical_exam: ['Jobb alhasi nyomásérzékenység', 'Láz', 'Erythema nodosum (késői)'],
              complications: ['Reaktív arthritis (HLA-B27)', 'Erythema nodosum', 'Sepszis (vasterheléses betegekben)']
            },
            diagnostics: {
              laboratory: [{ test: 'Gyulladásos paraméterek', finding: 'Emelkedett', interpretation: 'Bakteriális' }],
              imaging: [{ modality: 'Has UH', finding: 'Mesenterialis lymphadenopathia, terminalis ileitis', significance: 'Appendicitis kizárása' }],
              microbiology: [{ test: 'Széklet tenyésztés', finding: 'CIN agar (hideg dúsítás)', significance: 'Jelezni kell a labornak' }]
            },
            differential: [
              { disease: 'Appendicitis', distinguishing: 'UH/CT, sebészi konzílium' },
              { disease: 'Crohn-betegség', distinguishing: 'Krónikus, endoszkópia, biopszia' },
              { disease: 'Egyéb bakteriális enteritis', distinguishing: 'Tenyésztés' }
            ],
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
            pathogen: { type: 'Protozoon', name: '<i>Giardia duodenalis (lamblia)</i>', gram: '-', shape: 'körte alakú (trophozoita)' },
            epidemiology: {
              incidence: 'Világszerte elterjedt, leggyakoribb parazitás bélfertőzés',
              risk_groups: ['Gyermekek', 'Kempingezők (patakvíz)', 'IgA hiányosok'],
              seasonality: 'Nyár-ősz',
              transmission: 'Feko-orális (ciszták), víz (klór-rezisztens!), étel'
            },
            pathomechanism: {
              steps: [
                'A lenyelt cisztákból a duodenumban kiszabadulnak a trophozoiták.',
                'A paraziták a tapadókorongjukkal a vékonybél bolyhaihoz rögzülnek, de nem hatolnak be a szövetekbe.',
                'A bélbolyhok károsodása és a diszacharidáz enzimek hiánya felszívódási zavart és ozmotikus hasmenést okoz.'
              ]
            },
            clinical: {
              incubation: '1-3 hét',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Hasmenés', description: 'Elhúzódó, bűzös, zsíros fényű, nem véres hasmenés.', severity: 'moderate' },
                { name: 'Puffadás', description: 'Kifejezett gázképződés, haspuffadás, kénes böfögés.', severity: 'moderate' },
                { name: 'Fogyás', description: 'A felszívódási zavar miatt jelentős súlyvesztés alakulhat ki.', severity: 'moderate' }
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
            prognosis: { mortality: 'Jó prognózis: alacsony mortalitás, de krónikussá válhat kezelés nélkül', prognostic_scores: [], factors: 'IgA hiány, reinfekció' }
          },
          {
            id: 'amoebiasis',
            name: 'Amoebiasis',
            pathogen: { type: 'Protozoon', name: '<i>Entamoeba histolytica</i>', gram: '-', shape: 'amőboid' },
            epidemiology: {
              incidence: 'Trópusi/szubtrópusi területeken endémiás',
              risk_groups: ['Utazók', 'Bevándorlók', 'Intézeti gondozottak', 'MSM'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (ciszták)'
            },
            pathomechanism: {
              steps: [
                'A lenyelt cisztákból a vastagbélben trophozoiták alakulnak ki, amelyek behatolnak a nyálkahártyába.',
                'A paraziták szövetoldó enzimeket termelnek, ami jellegzetes, lombik alakú fekélyeket hoz létre.',
                'A véráramba jutva a paraziták eljuthatnak a májba, ahol tályogot képezhetnek.'
              ]
            },
            clinical: {
              incubation: '2-4 hét',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Amőbás dysenteria', description: 'Véres, nyákos hasmenés, hasi fájdalommal.', severity: 'severe' },
                { name: 'Amőbás májtályog', description: 'Jobb bordaív alatti fájdalom, láz, fogyás, akár hasmenés nélkül is.', severity: 'severe' }
              ],
              physical_exam: ['Hasi érzékenység (coecum/colon)', 'Hepatomegalia, máj ütögetési érzékenység (tályog)'],
              complications: ['Bélperforáció', 'Toxikus megacolon', 'Tályog ruptúra (pleura, peritoneum, pericardium)', 'Agytályog']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis (tályognál)', interpretation: 'Gyulladás' }, { test: 'Májenzimek', finding: 'ALP emelkedett', interpretation: 'Tályog' }],
              microbiology: [
                { test: 'Széklet parazita', finding: 'Trophozoiták (vörösvértesttel a plazmában!)', significance: 'E. dispar-tól el kell különíteni' },
                { test: 'Széklet antigén/PCR', finding: 'E. histolytica specifikus', significance: 'Gold standard' },
                { test: 'Szerológia', finding: 'Pozitív', significance: 'Invazív betegségnél (májtályog) hasznos' }
              ],
              imaging: [{ modality: 'Has UH/CT', finding: 'Szoliter májtályog (jobb lebeny)', significance: 'Májtályog diagnózis' }]
            },
            differential: [
              { disease: 'Bakteriális dysenteria', distinguishing: 'Tenyésztés, láz gyakoribb' },
              { disease: 'Pyogen májtályog', distinguishing: 'Bakteriális tenyésztés, szeptikusabb' },
              { disease: 'Echinococcus cysta', distinguishing: 'Szerológia, képalkotó (leányhólyagok)' }
            ],
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
            pathogen: { type: 'Protozoon', name: '<i>Cryptosporidium hominis/parvum</i>', gram: 'Saválló festés', shape: 'oociszta' },
            epidemiology: {
              incidence: 'Gyakori víz eredetű járványok (uszodák)',
              risk_groups: ['AIDS betegek (meghatározó opportunista)', 'Gyermekek', 'Állatorvosok'],
              seasonality: 'Nyár-ősz',
              transmission: 'Feko-orális, víz (klór-rezisztens oociszták!)'
            },
            pathomechanism: {
              steps: [
                'Az oociszták lenyelése után a sporozoiták a vékonybél hámsejtjeinek felszínéhez tapadnak (intracelluláris, de extracytoplasmatikus).',
                'A fertőzés a bélbolyhok sorvadását és a kripták hiperpláziáját okozza.',
                'Ez súlyos felszívódási zavarhoz és szekréciós hasmenéshez vezet.'
              ],
              virulence_factors: ['Adhezinek', 'Proteázok']
            },
            clinical: {
              incubation: '7-10 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Vizes hasmenés', description: 'Bőséges, vizes hasmenés, hasi görcsökkel.', severity: 'moderate' },
                { name: 'Perzisztáló hasmenés', description: 'Immunszupprimált betegekben (pl. AIDS) a hasmenés krónikussá válhat, és súlyos folyadékvesztést okozhat.', severity: 'severe' }
              ],
              physical_exam: ['Dehidráció jelei', 'Cachexia (krónikus esetben)'],
              complications: ['Súlyos dehidráció', 'Malnutríció', 'Epeúti érintettség (AIDS)']
            },
            diagnostics: {
              laboratory: [{ test: 'CD4 szám', finding: '<100/µL', interpretation: 'Súlyos lefolyás rizikó (HIV)' }],
              microbiology: [
                { test: 'Széklet festés', finding: 'Saválló oociszták (módosított Z-N)', significance: 'Specifikus kérésre' },
                { test: 'Széklet antigén/PCR', finding: 'Pozitív', significance: 'Érzékenyebb' }
              ]
            },
            differential: [
              { disease: 'Giardiasis', distinguishing: 'Széklet vizsgálat, puffadás dominál' },
              { disease: 'Isosporiasis', distinguishing: 'Nagyobb oociszták, TMP-SMX hatékony' },
              { disease: 'Microsporidiosis', distinguishing: 'Kisebb spórák, speciális festés' }
            ],
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
            pathogen: { type: 'Vírus', name: '<i>Rotavírus, Norovírus, Adenovírus, Astrovírus</i>', gram: 'RNS/DNS', shape: 'változó' },
            epidemiology: {
              incidence: 'Norovírus: leggyakoribb járványos GE (minden korosztály); Rotavírus: csecsemők (oltás előtt)',
              risk_groups: ['Csecsemők (Rota)', 'Idősek (Noro)', 'Zárt közösségek (hajó, laktanya)'],
              seasonality: 'Tél (Rota, Noro)',
              transmission: 'Feko-orális, aeroszol (hányás - Noro), fomitok'
            },
            pathomechanism: {
              steps: [
                'A vírusok a vékonybél bolyhainak hámsejtjeiben szaporodnak, és elpusztítják azokat.',
                'A bélbolyhok megrövidülése miatt csökken a felszívó felület és az emésztőenzimek mennyisége.',
                'A fel nem szívódott tápanyagok vizet vonnak a bélüregbe (ozmotikus hasmenés).'
              ],
              virulence_factors: ['Kapszid stabilitás', 'NSP4 (Rota)']
            },
            clinical: {
              incubation: '12-48 óra (Noro), 1-3 nap (Rota)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Hányás', description: 'Hirtelen kezdődő, ismétlődő hányás (különösen Norovírusnál).', severity: 'severe' },
                { name: 'Vizes hasmenés', description: 'Nagy mennyiségű, vizes széklet, láz és izomfájdalom kíséretében.', severity: 'moderate' }
              ],
              physical_exam: ['Dehidráció jelei (száraz nyelv, turgor csökkent)', 'Diffúz hasi érzékenység'],
              complications: ['Súlyos dehidráció (csecsemők, idősek)', 'Elektrolit zavarok']
            },
            diagnostics: {
              laboratory: [{ test: 'Elektrolitok', finding: 'Zavarok', interpretation: 'Dehidráció' }, { test: 'Vérkép', finding: 'Normál', interpretation: 'Nem bakteriális' }],
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
            differential: [
              { disease: 'Bakteriális gastroenteritis', distinguishing: 'Láz, véres széklet, tenyésztés' },
              { disease: 'Ételmérgezés (toxin)', distinguishing: 'Közös étkezés, rövidebb inkubáció' },
              { disease: 'Gyógyszer mellékhatás', distinguishing: 'Anamnézis' }
            ],
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
            pathogen: { type: 'Baktérium', name: '<i>Vibrio cholerae</i> (O1, O139)', gram: 'Gram-negatív', shape: 'hajlított pálca (vibrio)' },
            epidemiology: {
              incidence: 'Endémiás (Ázsia, Afrika, Haiti), járványos',
              risk_groups: ['Mélyszegénységben élők', 'Természeti katasztrófák áldozatai', 'Utazók (ritka)'],
              seasonality: 'Esős évszak',
              transmission: 'Feko-orális (szennyezett víz/étel)'
            },
            pathomechanism: {
              steps: [
                'A baktériumok a vékonybélben megtapadva koleratoxint termelnek.',
                'A toxin aktiválja az adenilát-cikláz enzimet, ami a cAMP szint növekedéséhez vezet.',
                'Ez a kloridionok és a víz masszív kiáramlását okozza a bélüregbe, ami súlyos, életveszélyes hasmenéshez vezet.'
              ],
              virulence_factors: ['Cholera toxin (AB5 toxin)', 'Toxin-coregulated pilus (TCP)']
            },
            clinical: {
              incubation: 'Néhány óra - 5 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Rizslé szerű hasmenés', description: 'Fájdalmatlan, nagy mennyiségű, rizslére emlékeztető hasmenés.', severity: 'severe' },
                { name: 'Dehidráció', description: 'Gyorsan kialakuló súlyos kiszáradás, izomgörcsök, sokk.', severity: 'severe' }
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
            differential: [
              { disease: 'ETEC', distinguishing: 'Utazás, kevésbé súlyos' },
              { disease: 'Vírusos gastroenteritis', distinguishing: 'Hányás dominálhat, kevésbé súlyos dehidráció' }
            ],
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
            pathogen: { type: 'Szindróma', name: '<i>ETEC</i> (leggyakoribb), <i>Campylobacter, Salmonella, Shigella</i>, Vírusok', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Utazók 20-60%-a (fejlődő országokba)',
              risk_groups: ['Fiatal felnőttek', 'Immunszupprimáltak', 'PPI szedők'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (étel, víz)'
            },
            pathomechanism: {
              steps: [
                'A fertőzést leggyakrabban enterotoxin-termelő E. coli (ETEC) vagy invazív baktériumok (Campylobacter, Shigella) okozzák.',
                'A kórokozók a helyi higiénés viszonyoktól eltérő mikrobiommal találkozó utazóknál gyulladást vagy folyadékszekréciót váltanak ki.'
              ],
              virulence_factors: ['Változó']
            },
            clinical: {
              incubation: 'Utazás alatt vagy hazaérkezés után',
              onset: 'Akut',
              symptoms: [
                { name: 'Hasmenés', description: 'Utazás alatt vagy után jelentkező vizes hasmenés, hasi görcsökkel.', severity: 'moderate' },
                { name: 'Láz', description: 'Láz és véres széklet invazív kórokozóra utal.', severity: 'moderate' }
              ],
              physical_exam: ['Enyhe hasi érzékenység', 'Dehidráció jelei'],
              complications: ['Dehidráció', 'Post-infectious IBS', 'Reaktív arthritis']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: 'Általában nem szükséges' }],
              microbiology: [{ test: 'Széklet tenyésztés/PCR', finding: 'Multiplex panel', significance: 'Csak perzisztáló/súlyos esetben vagy immunszupprimáltaknál' }]
            },
            differential: [
              { disease: 'IBD fellángolás', distinguishing: 'Anamnézis, endoszkópia' },
              { disease: 'Giardiasis', distinguishing: 'Elhúzódó, zsíros széklet' }
            ],
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
            pathogen: { type: 'Szindróma', name: '<i>Shigella, EIEC, EHEC, Campylobacter, Entamoeba, Salmonella</i>', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Változó',
              risk_groups: ['Gyermekek', 'Idősek', 'Immunszupprimáltak'],
              transmission: 'Feko-orális'
            },
            pathomechanism: {
              steps: [
                'A kórokozók (Shigella, EIEC, EHEC, Campylobacter, Entamoeba) behatolnak a vastagbél nyálkahártyájába.',
                'A szöveti invázió súlyos gyulladást, fekélyképződést, vérzést és nyáktermelést okoz.'
              ],
              virulence_factors: ['Invazinok', 'Citotoxinok']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Akut',
              symptoms: [
                { name: 'Véres-nyákos hasmenés', description: 'Gyakori, kis mennyiségű, véres-nyákos székletürítés.', severity: 'severe' },
                { name: 'Tenesmus', description: 'Fájdalmas, eredménytelen székelési inger.', severity: 'severe' }
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
            differential: [
              { disease: 'Shigellosis', distinguishing: 'EIEC klinikailag azonos, tenyésztés dönt' },
              { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés, GBS rizikó' },
              { disease: 'TTP', distinguishing: 'Felnőttek, neurológiai tünetek, ADAMTS13' }
            ],
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
        icon: window.diseaseMetadata.viral_hepatitis.icon,
        color: window.diseaseMetadata.viral_hepatitis.color,
        tables: [
          {
            title: 'Vírushepatitisek differenciáldiagnosztikája',
            headers: ['Vírus', 'Terjedés', 'Inkubáció', 'Krónikussá válás', 'Kulcs szerológia', 'Főbb jellemzők'],
            rows: [
              ['HAV', 'Feko-orális', '2-6 hét', 'Nem', 'Anti-HAV IgM', 'Akut, járványos, utazáshoz köthető'],
              ['HBV', 'Parenterális, szexuális', '2-6 hónap', 'Igen (főleg perinatális)', 'HBsAg, Anti-HBc IgM', 'Krónikus májbetegség, HCC rizikó'],
              ['HCV', 'Parenterális', '2-26 hét', 'Igen (>70%)', 'Anti-HCV, HCV RNS', 'Krónikus, gyógyítható (DAA), extrahepatikus manif.'],
              ['HDV', 'Parenterális (HBV-vel)', 'Változó', 'Igen (szuperinfekció)', 'Anti-HDV (HBsAg+ betegben)', 'Súlyosbítja a HBV-t, gyors cirrhosis progresszió'],
              ['HEV', 'Feko-orális (G1,2), Zoonózis (G3,4)', '2-10 hét', 'Igen (immunszuppr.)', 'Anti-HEV IgM, HEV RNS', 'Terhesekben fulmináns, sertéshúshoz köthető']
            ]
          },
          {
            title: 'Hepatitis B szerológiai mintázatok értelmezése',
            headers: ['HBsAg', 'Anti-HBs', 'Anti-HBc (Total)', 'Anti-HBc IgM', 'Értelmezés'],
            rows: [
              ['-', '-', '-', '-', 'Fogékony (nem fertőzött, nem védett)'],
              ['-', '+', '-', '-', 'Védett (oltás miatt)'],
              ['-', '+', '+', '-', 'Gyógyult fertőzés (természetes immunitás)'],
              ['+', '-', '+', '+', 'Akut fertőzés'],
              ['+', '-', '+', '-', 'Krónikus fertőzés'],
              ['-', '-', '+', '-', 'Lehetséges: 1. Gyógyult fertőzés (alacsony Anti-HBs); 2. Álpozitív; 3. Okkult HBV; 4. Ablakperiódus']
            ]
          }
        ],
        diseases: [
          {
            id: 'hav',
            name: 'Hepatitis A',
            pathogen: { type: 'Vírus', name: '<i>Hepatitis A vírus</i> (HAV)', gram: 'ssRNS, Picornaviridae', shape: 'ikozahidrális' },
            epidemiology: {
              incidence: 'Endémiás területeken magas, fejlett országokban sporadikus/járványos',
              risk_groups: ['Utazók', 'MSM', 'Intravénás droghasználók', 'Hajléktalanok'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (szennyezett víz, élelmiszer), szexuális (orális-anális)'
            },
            pathomechanism: {
              steps: [
                'Orális bejutás: A vírus a bélrendszerből felszívódva a portális keringéssel jut a májba.',
                'Hepatocyta fertőzés: A vírus a HAVCR-1 receptoron keresztül jut be a májsejtekbe, ahol a citoplazmában replikálódik, de nem okoz direkt sejtpusztulást (nem citopatikus).',
                'Immunválasz: A májsejt-károsodást a szervezet saját celluláris immunválasza (CD8+ citotoxikus T-sejtek és NK sejtek) okozza, amelyek elpusztítják a fertőzött hepatocytákat.',
                'Ürítés: A vírus az epével a székletbe ürül, már a tünetek megjelenése előtt.'
              ],
              virulence_factors: ['Kapszid stabilitás (saválló)', 'Membránburok a vérben (eHAV) - immunelkerülés']
            },
            clinical: {
              incubation: '15-50 nap (átlag 28 nap)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Prodroma', description: 'Influenzaszerű tünetek (láz, fejfájás, izomfájdalom), étvágytalanság, undor a dohányfüsttől/zsíros ételektől.', severity: 'moderate' },
                { name: 'Icterusos fázis', description: 'Sötét vizelet (bilirubinuria), világos széklet, majd sárgaság (bőr, sclera). A láz ekkorra gyakran megszűnik.', severity: 'moderate' },
                { name: 'Hasi panaszok', description: 'Jobb bordaív alatti tompa fájdalom, hepatomegalia, hányinger.', severity: 'mild' }
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
              { disease: 'Egyéb vírushepatitisek (HBV, HCV, HEV)', distinguishing: 'Szerológia (HBsAg, Anti-HCV, Anti-HEV)' },
              { disease: 'Toxikus/Gyógyszer-indukált hepatitis', distinguishing: 'Anamnézis (paracetamol, gomba), toxikológia' },
              { disease: 'Epeúti elzáródás (Choledocholithiasis)', distinguishing: 'Hasi UH (tágult epeutak), ALP/GGT dominancia, colica' },
              { disease: 'EBV/CMV mononucleosis', distinguishing: 'Torokfájás, lymphadenopathia, monospot/szerológia' },
              { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA), IgG emelkedés' }
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
            pathogen: { type: 'Vírus', name: '<i>Hepatitis B vírus</i> (HBV)', gram: 'dsDNS (RT), Hepadnaviridae', shape: 'gömb (Dane-partikula)' },
            epidemiology: {
              incidence: 'Világszerte 290 millió krónikus hordozó',
              risk_groups: ['IV droghasználók', 'Szexuális partnerek', 'Eü. dolgozók', 'Dializáltak', 'Perinatális (anya-gyermek)'],
              seasonality: 'Nincs',
              transmission: 'Parenterális (vér), szexuális, perinatális'
            },
            pathomechanism: {
              steps: [
                'Bejutás és Replikáció: A vírus a véráramból az NTCP receptoron keresztül jut a májsejtekbe. A sejtmagban cccDNS-t (kovalensen zárt cirkuláris DNS) képez, ami a perzisztencia alapja.',
                'Immunpatogenezis: A vírus önmagában nem citopatikus. A májkárosodást a fertőzött sejtek ellen irányuló citotoxikus T-sejtes immunválasz okozza.',
                'Krónikussá válás: Ha az immunválasz nem elég erős (pl. újszülöttek), a vírus perzisztál. A vírus DNS integrálódhat a gazdasejt genomjába, növelve a hepatocelluláris carcinoma (HCC) kockázatát.'
              ],
              virulence_factors: ['HBsAg (decoy)', 'HBeAg (immuntolerancia)', 'X protein (transzaktivátor)']
            },
            clinical: {
              incubation: '45-160 nap (átlag 90 nap)',
              onset: 'Lassú',
              symptoms: [
                { name: 'Akut fázis', description: 'Gyakran tünetmentes. Ha van tünet: szérumbetegség-szerű prodroma (kiütés, ízületi fájdalom), majd sárgaság, fáradtság, jobb felhasi fájdalom.', severity: 'moderate' },
                { name: 'Krónikus fázis', description: 'Többnyire tünetmentes ("csendes gyilkos"). Késői stádiumban a májcirrhosis jelei (ascites, varixvérzés, encephalopathia) dominálnak.', severity: 'mild' },
                { name: 'Extrahepatikus tünetek', description: 'Polyarteritis nodosa, glomerulonephritis.', severity: 'moderate' }
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
              { disease: 'Egyéb vírushepatitisek (HAV, HCV, HDV)', distinguishing: 'Szerológia (Anti-HAV IgM, Anti-HCV, Anti-HDV)' },
              { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA, LKM-1), hypergammaglobulinaemia' },
              { disease: 'Alkoholos májbetegség', distinguishing: 'Anamnézis, AST > ALT (2:1 arány), GGT emelkedés' },
              { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Gyógyszer anamnézis, javulás elhagyás után' },
              { disease: 'Wilson-kór', distinguishing: 'Fiatal kor, alacsony cöruloplazmin, Kayser-Fleischer gyűrű' }
            ],
            therapy: {
              guidelines: ['EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection'],
              empirical: {
                outpatient: [
                  { drug: 'Entecavir', dose: '0.5 mg PO 1x/nap', duration: 'Hosszú távú', note: 'Nukleozid analóg. Lamivudin rezisztencia esetén 1 mg.' },
                  { drug: 'Tenofovir disoproxil (TDF)', dose: '300 mg PO 1x/nap', duration: 'Hosszú távú', note: 'Nukleotid analóg. Vesefunkció és csontsűrűség monitorozása szükséges.' },
                  { drug: 'Tenofovir alafenamide (TAF)', dose: '25 mg PO 1x/nap', duration: 'Hosszú távú', note: 'Preferált, ha csont/vese betegség kockázata áll fenn.' }
                ],
                inpatient: [
                  { drug: 'Tenofovir (TDF/TAF) vagy Entecavir', dose: 'Standard', duration: '', note: 'Súlyos akut hepatitis vagy akut májelégtelenség esetén azonnal indítandó.' }
                ]
              },
              targeted: 'Krónikus HBV: Élethosszig tartó NA (Entecavir, TDF, TAF) a vírusreplikáció gátlására. Véges idejű kezelés: Peg-IFN alfa (48 hét) válogatott betegeknél.',
              supportive: ['HCC szűrés (UH félévente)', 'Vakcináció HAV ellen', 'Családtagok szűrése'],
              prevention: ['Vakcináció (rekombináns HBsAg, 0-1-6 hó)', 'Szűrés terhességben', 'HBIG + vakcina újszülötteknek (≤12 óra; oltási sorozat folytatása)']
            },
            guidelines: {
              definitions: [
                'Akut HBV: HBsAg pozitív és Anti-HBc IgM pozitív.',
                'Krónikus HBV: HBsAg pozitív >6 hónap.',
                'Gyógyult (Past infection): HBsAg negatív, Anti-HBc (Total) pozitív, Anti-HBs pozitív.',
                'Oltott (Vaccinated): Csak Anti-HBs pozitív (minden más negatív).',
                'Inaktív hordozó: HBsAg+, HBeAg-, Anti-HBe+, normál ALT, alacsony HBV DNS.',
                'Szerokonverzió: Antigén eltűnése és antitest megjelenése (pl. HBeAg → Anti-HBe).',
                'Kezelési indikáció: Krónikus hepatitis (ALT emelkedett + HBV DNS >2000 IU/ml + fibrosis) VAGY Cirrhosis.'
              ],
              diagnosis: [
                'Kezdeti vizsgálat: HBsAg, Anti-HBs, Anti-HBc (IgM/IgG), HBeAg/Anti-HBe, HBV DNS (quantitativ)',
                'Fibrosis értékelés: FibroScan vagy szérum markerek (FIB-4)'
              ],
              treatment_indications: [
                'Minden cirrhosisos beteg kezelendő',
                'HBeAg pozitív vagy negatív krónikus hepatitis (ALT > ULN, DNS > 2000 IU/ml, F2+ fibrosis)',
                'Immunszuppresszió előtt HBsAg+ betegek (profilaxis)'
              ],
              first_line: [
                'Entecavir, TDF, TAF (magas rezisztencia barrierű NA-k)',
                'Peg-IFN alfa (48 hét) - alternatíva enyhe/közepes fibrosisnál'
              ],
              special_populations: [
                'Terhesség: TDF adása a 24-28. héttől, ha HBV DNS >200,000 IU/ml',
                'Veseelégtelenség: TAF vagy Entecavir (dóziscsökkentés)',
                'HDV koinfekció: Peg-IFN vagy Bulevirtide'
              ],
              monitoring: [
                'NA kezelés alatt: ALT és HBV DNS 3-6 havonta',
                'HCC szűrés ultrahanggal ± AFP minden 6 hónapban cirrhosisos pácienseknél'
              ]
            },
            prognosis: {
              mortality: 'Akut: <1%; Krónikus: cirrhosis/HCC miatt jelentős',
              prognostic_scores: ['PAGE-B (HCC rizikó)'],
              factors: 'HBeAg státusz, virális load, genotípus, koinfekciók'
            },
            gallery: [
              {
                url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>4 hét</text><text x='350' y='370' class='txt'>8 hét</text><text x='500' y='370' class='txt'>6 hó</text><text x='650' y='370' class='txt'>12 hó</text><text x='350' y='390' class='txt' text-anchor='middle'>Idő a fertőzés után</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q100,50 150,50 Q200,50 250,350' fill='none' stroke='red' stroke-width='3' /><text x='120' y='40' class='txt' fill='red'>HBsAg</text><path d='M60,350 Q100,100 140,100 Q180,100 220,350' fill='none' stroke='orange' stroke-width='3' stroke-dasharray='5,5' /><text x='140' y='90' class='txt' fill='orange'>HBeAg</text><path d='M80,350 Q150,80 200,80 Q300,80 350,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='70' class='txt' fill='purple'>Anti-HBc IgM</text><path d='M80,350 Q150,120 200,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HBc Total</text><path d='M280,350 Q350,150 400,150 L750,150' fill='none' stroke='green' stroke-width='3' /><text x='600' y='140' class='txt' fill='green'>Anti-HBs</text><path d='M240,350 Q300,200 350,200 L750,200' fill='none' stroke='%23b45309' stroke-width='3' stroke-dasharray='5,5' /><text x='600' y='190' class='txt' fill='%23b45309'>Anti-HBe</text><text x='265' y='300' class='txt' font-size='12' fill='gray'>Ablak periódus</text></svg>",
                caption: 'Akut HBV fertőzés szerológiai lefolyása (Gyógyulás)',
                type: 'Diagram'
              },
              {
                url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>6 hó</text><text x='350' y='370' class='txt'>1 év</text><text x='500' y='370' class='txt'>Évek...</text><text x='350' y='390' class='txt' text-anchor='middle'>Idő a fertőzés után</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q80,50 150,50 L750,50' fill='none' stroke='red' stroke-width='3' /><text x='600' y='40' class='txt' fill='red'>HBsAg (Perzisztál)</text><path d='M60,350 Q90,100 150,100 L400,100 Q450,100 500,350' fill='none' stroke='orange' stroke-width='3' stroke-dasharray='5,5' /><text x='200' y='90' class='txt' fill='orange'>HBeAg</text><path d='M80,350 Q120,80 180,80 Q250,80 300,350' fill='none' stroke='purple' stroke-width='3' /><text x='150' y='70' class='txt' fill='purple'>Anti-HBc IgM</text><path d='M80,350 Q120,120 180,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HBc Total</text><path d='M450,350 Q500,200 550,200 L750,200' fill='none' stroke='%23b45309' stroke-width='3' stroke-dasharray='5,5' /><text x='600' y='190' class='txt' fill='%23b45309'>Anti-HBe (Késői)</text><text x='400' y='300' class='txt' font-size='12' fill='gray'>Nincs Anti-HBs!</text></svg>",
                caption: 'Krónikus HBV fertőzés szerológiai lefolyása',
                type: 'Diagram'
              }
            ],
            references: [
              'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398. doi:10.1016/j.jhep.2017.03.021',
              'WHO Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection. 2015.'
            ]
          },
          {
            id: 'hcv',
            name: 'Hepatitis C',
            pathogen: { type: 'Vírus', name: '<i>Hepatitis C vírus</i> (HCV)', gram: 'ssRNS, Flaviviridae', shape: 'gömb, burokban' },
            epidemiology: {
              incidence: 'Világszerte 71 millió krónikus beteg',
              risk_groups: ['IV droghasználók', 'Transzfúzió (1992 előtt)', 'Tetoválás/piercing', 'Eü. dolgozók (tűszúrás)'],
              seasonality: 'Nincs',
              transmission: 'Parenterális (vér), szexuális (ritka, MSM magasabb), perinatális'
            },
            pathomechanism: {
              steps: [
                'Replikáció: A vírus a hepatocyták citoplazmájában replikálódik (nincs sejtmagi fázis, ezért gyógyítható).',
                'Immunelkerülés: A vírus RNS-polimeráza hibázik, így folyamatosan mutálódik (quasispecies), elkerülve az immunrendszer felismerését.',
                'Fibrózis: A krónikus gyulladás aktiválja a csillagsejteket (stellate cells), amelyek kollagént termelnek, ami májfibrózishoz, majd cirrhosisoz vezet.'
              ],
              virulence_factors: ['NS3/4A proteáz', 'NS5A/B polimeráz', 'Lipid metabolizmus moduláció']
            },
            clinical: {
              incubation: '14-180 nap',
              onset: 'Lassú/Tünetmentes',
              symptoms: [
                { name: 'Akut fázis', description: 'Ritkán diagnosztizálják (80% tünetmentes). Enyhe fáradtság, étvágytalanság előfordulhat.', severity: 'mild' },
                { name: 'Krónikus fázis', description: 'Évtizedekig tünetmentes lehet. A vezető tünet a krónikus fáradtság. Gyakran csak a cirrhosis szövődményei vagy a laborlelet hívja fel rá a figyelmet.', severity: 'moderate' },
                { name: 'Extrahepatikus tünetek', description: 'Krioglobulinémia (vasculitis), porphyria cutanea tarda, lichen planus, diabetes.', severity: 'moderate' }
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
              { disease: 'Hepatitis B', distinguishing: 'HBsAg pozitív' },
              { disease: 'Alkoholos májbetegség', distinguishing: 'Anamnézis, AST > ALT, makrocitózis' },
              { disease: 'Nem-alkoholos zsírmáj (NAFLD/NASH)', distinguishing: 'Metabolikus szindróma, UH (steatosis), biopszia' },
              { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek, szövettan (plazmasejtes infiltráció)' },
              { disease: 'Hemochromatosis', distinguishing: 'Magas ferritin, transzferrin szaturáció, HFE génmutáció' }
            ],
            therapy: {
              guidelines: ['EASL Recommendations on Treatment of Hepatitis C 2020'],
              empirical: {
                outpatient: [
                  { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 tab (300/120mg) PO 1x', duration: '8 hét', note: 'Pangenotípusos. Cirrhosis nélkül és kompenzált cirrhosisban is 8 hét.' },
                  { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 tab (400/100mg) PO 1x', duration: '12 hét', note: 'Pangenotípusos. Decompensált cirrhosisban is adható (RBV-vel).' }
                ]
              },
              targeted: 'Pangenotípusos DAA kezelés minden betegnek (Simplified treatment). Genotipizálás nem feltétlenül szükséges a kezelés indításához (kivéve cirrhosis/korábbi sikertelen kezelés).',
              supportive: ['Gyógyszerinterakciók ellenőrzése (www.hep-druginteractions.org)', 'Alkohol tilalom'],
              prevention: ['Nincs vakcina', 'Vérkészítmények szűrése', 'Ártalomcsökkentés (tűcsere)', 'Biztonságos szex']
            },
            guidelines: {
              diagnosis: [
                'Szűrés: Anti-HCV szerológia (ELISA) minden kockázati csoportban és véradásnál',
                'HCV RNS pozitív = Aktív fertőzés -> Kezelés'
              ],
              treatment_indications: [
                'Minden krónikus HCV fertőzött kezelendő, kivéve rövid élettartamú páciensek vagy terhesség',
                'Különös prioritás: cirrhosis, extrahepatikus manifesztációk, transzplantációs jelöltek'
              ],
              first_line: [
                'Glecaprevir/Pibrentasvir (8 hét)',
                'Sofosbuvir/Velpatasvir (12 hét)'
              ],
              monitoring: [
                'SVR12 (Sustained Virologic Response): HCV RNS negatív 12 héttel a kezelés után = Gyógyulás',
                'Cirrhosis esetén HCC szűrés folytatása SVR után is!'
              ],
              special_populations: [
                'Decompensált cirrhosis: Proteáz inhibitorok (Glecaprevir, Grazoprevir) KONTRAINDIKÁLTAK! Sof/Vel + Ribavirin adható.'
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
            pathogen: { type: 'Vírus', name: '<i>Hepatitis D vírus</i> (HDV)', gram: 'ssRNS (defektív)', shape: 'HBsAg burokban' },
            epidemiology: {
              incidence: 'HBV fertőzöttek 5%-a (kb. 15-20 millió)',
              seasonality: 'Nincs',
              risk_groups: ['HBV fertőzöttek', 'IV droghasználók', 'Szexuális partnerek', 'Eü. dolgozók'],
              transmission: 'Parenterális, szexuális (mint HBV). Csak HBV jelenlétében fertőz!'
            },
            pathomechanism: {
              steps: [
                'Defektív vírus: A replikációhoz és a fertőző részecskék képzéséhez a Hepatitis B vírus felszíni antigénjére (HBsAg) van szüksége.',
                'Koinfekció: HBV és HDV egyszerre fertőz. Általában súlyos akut hepatitist okoz, de a krónikussá válás ritka (<5%).',
                'Szuperinfekció: Krónikus HBV hordozó fertőződik HDV-vel. Ez a legsúlyosabb forma, gyakran fulmináns lefolyású vagy gyorsan progrediáló cirrhosisba torkollik.'
              ],
              virulence_factors: ['Delta antigén (HDAg)']
            },
            clinical: {
              incubation: '30-60 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Súlyosbodás', description: 'Ismert HBV beteg állapotának hirtelen romlása (akut fellángolás).', severity: 'severe' },
                { name: 'Dekompenzáció', description: 'Gyorsan kialakuló májelégtelenség, sárgaság, coagulopathia.', severity: 'severe' }
              ],
              complications: ['Fulmináns hepatitis', 'Gyors progresszió cirrhosisba (legagresszívebb vírushepatitis)']
            },
            diagnostics: {
              laboratory: [
                { test: 'ALT/AST', finding: 'emelkedett', interpretation: 'Akut fellángolás' }
              ],
              microbiology: [
                { test: 'Anti-HDV', finding: 'Pozitív', significance: 'Szűrés minden HBV betegnél' },
                { test: 'HDV RNS', finding: 'Pozitív', significance: 'Aktív replikáció' }
              ]
            },
            differential: [
              { disease: 'HBV koinfekció', distinguishing: 'HDV RNS pozitív, Anti-HDV pozitív' },
              { disease: 'Akut HBV fellángolás', distinguishing: 'HDV RNS negatív, Anti-HDV negatív' }
            ],
            therapy: {
              guidelines: ['EASL Clinical Practice Guidelines on hepatitis delta virus 2023'],
              empirical: {
                outpatient: [
                  { drug: 'Bulevirtide', dose: '2 mg SC naponta', duration: 'Hosszú távú', note: 'Belépés gátló. Monoterápia vagy Peg-IFN kombináció. (Feltételes engedély)' },
                  { drug: 'Peg-IFN alfa', dose: '180 mcg SC hetente', duration: '48 hét', note: 'Alternatíva, de alacsony tartós válaszarány.' }
                ]
              },
              targeted: 'Bulevirtide (hosszú távú fenntartó kezelés) vagy Peg-IFN (48 hét). Nukleozid analógok (HBV ellen) folytatandók, de HDV-re nem hatnak közvetlenül.',
              prevention: ['HBV vakcináció véd HDV ellen is (mivel HBsAg kell neki)']
            },
            guidelines: {
              screening: ['Minden HBsAg pozitív beteget egyszer szűrni kell anti-HDV-re'],
              treatment: [
                'Bulevirtide 2mg SC naponta: Kompenzált májbetegség és HDV RNS pozitivitás esetén. Kezelés addig, amíg klinikai haszon van (évekig).',
                'Peg-IFN alfa: 48 hetes kúra megkísérelhető (kb. 25% tartós válasz).'
              ],
              monitoring: ['HDV RNS, ALT, HBsAg']
            },
            prognosis: {
              mortality: 'Magas, gyors cirrhosis progresszió',
              factors: 'Szuperinfekció rosszabb prognózisú'
            }
          },
          {
            id: 'hev',
            name: 'Hepatitis E',
            pathogen: { type: 'Vírus', name: '<i>Hepatitis E vírus</i> (HEV)', gram: 'ssRNS, Hepeviridae', shape: 'ikozahidrális' },
            epidemiology: {
              incidence: 'Fejlődő országok (víz), Fejlett (sertés/vad)',
              risk_groups: ['Terhesek (súlyos lefolyás)', 'Immunszupprimáltak (krónikus)', 'Májbetegek', 'Sertésgondozók'],
              seasonality: 'Esős évszak (trópusokon)',
              transmission: 'Feko-orális (víz - Genotípus 1,2), Zoonózis (nyers sertés/vadhús - Genotípus 3,4)'
            },
            pathomechanism: {
              steps: [
                'Bejutás: Feko-orális (szennyezett víz - 1., 2. genotípus) vagy zoonózis (nyers hús - 3., 4. genotípus) útján.',
                'Terhesség: Terheseknél (főleg 3. trimeszter) a vírus fulmináns májelégtelenséget okozhat, valószínűleg hormonális és immunológiai változások miatt (20% mortalitás).',
                'Krónikussá válás: Immunszupprimált betegekben (pl. transzplantáltak) a vírus nem eliminálódik, krónikus hepatitist és fibrosist okozva.'
              ],
              virulence_factors: ['ORF3 protein (kiszabadulás)', 'Kapszid protein']
            },
            clinical: {
              incubation: '15-60 nap (átlag 40)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Akut hepatitis', description: 'Hasonló a HAV-hoz (láz, sárgaság, hányás).', severity: 'moderate' },
                { name: 'Neurológiai tünetek', description: 'Gyakrabban társul neurológiai szövődményekkel (Guillain-Barré szindróma, neuralgiás amyotrophia).', severity: 'severe' },
                { name: 'Terhességben', description: 'Súlyos, életveszélyes májelégtelenség jelei.', severity: 'severe' }
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
              { disease: 'Hepatitis A', distinguishing: 'Szerológia (Anti-HAV IgM)' },
              { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Anamnézis (pl. antibiotikumok, NSAID)' },
              { disease: 'Ischaemiás hepatitis', distinguishing: 'Shock, hypotonia anamnézis, LDH extrém emelkedés' },
              { disease: 'Wilson-kór (fulmináns esetben)', distinguishing: 'Hemolízis, alacsony ALP, magas vizelet réz' }
            ],
            therapy: {
              guidelines: ['EASL Clinical Practice Guidelines on hepatitis E virus infection'],
              empirical: {
                outpatient: [
                  { drug: 'Szupportív', dose: '-', duration: '-', note: 'Immundompetens akut fertőzés esetén (önkorlátozó).' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: '600-800 mg PO', duration: '12 hét', note: 'Krónikus HEV (immunszupprimáltak) vagy súlyos akut esetek.' }
                ]
              },
              targeted: 'Krónikus HEV (immunszupprimáltak): 1. Immunszuppresszió csökkentése (ha lehet). 2. Ribavirin 12 hétig. Ha sikertelen: Ribavirin 24 hétig vagy Peg-IFN.',
              supportive: ['Folyadékpótlás', 'Terheseknél szoros monitorozás (fulmináns veszély!)'],
              prevention: ['Élelmiszerbiztonság (sertéshús, vadhús átsütése)']
            },
            guidelines: {
              diagnosis: ['Anti-HEV IgM és IgG', 'HEV RNS (vér és széklet) - krónikus fertőzés gyanújakor kötelező'],
              treatment_indications: [
                'Akut: általában nem igényel kezelést (kivéve májelégtelenség)',
                'Krónikus (>3 hónap HEV RNS+): Immunszupprimált betegek (transzplantált, HIV). Kezelés: Ribavirin.'
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
            pathogen: { type: 'Vírus', name: '<i>GB vírus C</i> (HGV)', gram: 'ssRNS, Flaviviridae', shape: '-' },
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
            differential: [
               { disease: 'Egyéb vírushepatitisek', distinguishing: 'Szerológia (HBV, HCV)' },
               { disease: 'Nem fertőző májbetegségek', distinguishing: 'Kizárásos diagnózis' }
            ],
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
            pathogen: { type: 'Vírus', name: '<i>Torque teno virus</i>', gram: 'ssDNS, Anelloviridae', shape: '-' },
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
                { name: 'Tünetmentes', description: 'Kommenzális vírusnak tekinthető', severity: 'mild' }
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
            differential: [
               { disease: 'Egyéb vírushepatitisek', distinguishing: 'Szerológia (HBV, HCV)' },
               { disease: 'Nem fertőző májbetegségek', distinguishing: 'Kizárásos diagnózis' }
            ],
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
            pathogen: { type: 'Vírus', name: '<i>SEN vírus</i>', gram: 'ssDNS, Anelloviridae', shape: '-' },
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
            differential: [
               { disease: 'Egyéb vírushepatitisek', distinguishing: 'Szerológia (HBV, HCV)' },
               { disease: 'Nem fertőző májbetegségek', distinguishing: 'Kizárásos diagnózis' }
            ],
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
        icon: window.diseaseMetadata.urinary_tract.icon,
        color: window.diseaseMetadata.urinary_tract.color,
        diseases: [
          {
            id: 'cystitis',
            name: 'Szisztémás tünetekkel nem járó cystitis, korábbi nevén nem komplikált cystitis (Hólyaghurut)',
            pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Nők 50%-a élete során legalább egyszer',
              risk_groups: ['Szexuálisan aktív nők', 'Postmenopauza', 'Terhesség', 'Diabetes', 'Katéter viselés'],
              seasonality: 'Nincs',
              transmission: 'Felszálló fertőzés (perinealis flóra)'
            },
            pathomechanism: {
              steps: [
                'Kolonizáció: A bélbaktériumok (főleg E. coli) kolonizálják a periurethralis területet és a hüvelybemenetet.',
                'Feljutás: A baktériumok az urethrán keresztül feljutnak a húgyhólyagba (nőknél rövidebb urethra hajlamosít).',
                'Adhézió és Invázió: A baktériumok a P-fimbriák segítségével kitapadnak a hólyag urotheliumához, elkerülve a vizelettel való kimosódást, majd behatolnak a sejtekbe.',
                'Gyulladás: A baktériumok szaporodása és toxinjai (pl. hemolizin) gyulladásos választ váltanak ki, ami a nyálkahártya vérbőségét, ödémáját és a tüneteket okozza.'
              ],
              virulence_factors: ['P-fimbriae (adherencia)', 'Hemolizin', 'Aerobactin (vasfelvétel)']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Dysuria', description: 'Vizeléskor jelentkező égető, csípő érzés, amely a gyulladt urethra és hólyagnyak irritációja miatt alakul ki.', severity: 'moderate' },
                { name: 'Pollakisuria', description: 'Gyakori, kis mennyiségű vizeletürítés a hólyagfal irritációja és csökkent kapacitása miatt.', severity: 'moderate' },
                { name: 'Urgencia', description: 'Hirtelen jelentkező, parancsoló vizelési inger, amelyet nehéz visszatartani (késztetéses inkontinencia veszélye).', severity: 'moderate' },
                { name: 'Suprapubicus fájdalom', description: 'Az alhasban, a szeméremcsont felett érzett nyomás vagy fájdalom.', severity: 'mild' },
                { name: 'Haematuria', description: 'Makroszkóposan véres vizelet (kb. 30%-ban), gyakran a vizelés végén (terminalis haematuria), a vérbő nyálkahártya vérzése miatt.', severity: 'mild' }
              ],
              physical_exam: [
                'Suprapubicus nyomásérzékenység',
                'Láz általában NINCS (ha van, pyelonephritis gyanú!)',
                'Vesetájék nem érzékeny',
                'Láz hiánya (fontos differenciáldiagnosztikai jel)',
                'Vesetájék nem érzékeny (pyelonephritis kizárása)',
                'Hüvelyi folyás hiánya (növeli a cystitis valószínűségét)'
              ],
              complications: ['Ascendáló pyelonephritis', 'Recidív cystitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vizelet tesztcsík', finding: 'Leukocyta esterase+, Nitrit+', interpretation: 'Pozitív prediktív érték magas' },
                { test: 'Vizelet üledék', finding: 'Pyuria (>10 fvs/látótér)', interpretation: 'Gyakori, de nem specifikus' }
              ],
              imaging: [
                { modality: 'Nincs', finding: 'Nem szükséges', significance: 'Kivéve atípusos tünetek vagy perzisztencia' }
              ],
              microbiology: [
                { test: 'Vizelet tenyésztés', finding: '≥10^3 CFU/ml', significance: 'Csak komplikált, recidív vagy atípusos esetben javasolt (EAU 2025)' }
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
                  { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: 'Egyszeri dózis', note: 'Első választás (EAU 2025)' },
                  { drug: 'Nitrofurantoin', dose: '2x100mg PO', duration: '5 nap', note: 'Első választás (EAU 2025)' },
                  { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 nap', note: 'Első választás (EAU 2025)' }
                ],
                inpatient: [
                  { drug: 'Nem igényel kórházi kezelést', dose: '-', duration: '-', note: 'Kivéve komplikáció' }
                ],
                icu: [
                  { drug: '-', dose: '-', duration: '-', note: '-' }
                ]
              },
              targeted: 'Tenyésztés alapján. Fluorokinolonok (Ciprofloxacin, Levofloxacin) NEM ajánlottak empirikusan nem komplikált cystitisben!',
              supportive: ['Bőséges folyadékfogyasztás', 'Gyakori vizeletürítés', 'NSAID fájdalomcsillapítás'],
              prevention: ['Viselkedési: Bőséges folyadékbevitel, postcoitalis vizeletürítés', 'Nem-antibiotikus (EAU 2025): Lokális ösztrogén (postmenopauza), OM-89 immunstimuláció, D-mannóz, Hólyag instilláció', 'Antibiotikum profilaxis (utolsó lépés): Nitrofurantoin 50-100mg este vagy Fosfomycin 3g 10 naponta']
            },
            prognosis: {
              mortality: 'Nulla',
              prognostic_scores: ['Nincs'],
              factors: 'Recidíva hajlam'
            }
          },
          {
            id: 'pyelonephritis',
            name: 'Szisztémás tünetekkel nem járó (nem komplikált) pyelonephritis',
            pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (80%)', gram: 'Gram-negatív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Gyakori szövődménye a kezeletlen cystitisnek',
              risk_groups: ['Nők', 'Terhesség', 'Obstrukció (kő, prostata)', 'Vesefejlődési rendellenesség', 'Diabetes'],
              seasonality: 'Nincs',
              transmission: 'Felszálló fertőzés (95%), ritkán hematogén'
            },
            pathomechanism: {
              steps: [
                'Ascendáló fertőzés: A baktériumok a hólyagból az ureteren keresztül (gyakran vesico-ureteralis reflux segítségével) feljutnak a vesemedencébe.',
                'Parenchyma invázió: A kórokozók behatolnak a vese parenchymájába, elsősorban a velőállományba.',
                'Gyulladásos válasz: A baktériumok ellen heves akut gyulladásos reakció indul (neutrophil infiltráció), ami szöveti ödémát, mikrotályogokat és tubulus károsodást okoz.',
                'Szisztémás hatás: A gyulladásos mediátorok a keringésbe jutva lázat és szisztémás tüneteket váltanak ki.'
              ],
              virulence_factors: ['P-fimbriae', 'Endotoxin', 'Kapszula']
            },
            clinical: {
              incubation: 'Cystitis után napokkal',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Láz és hidegrázás', description: 'Hirtelen kezdődő magas láz (>38°C), gyakran rázóhideggel kísérve, ami a szisztémás bakteriémia vagy toxémia jele.', severity: 'severe' },
                { name: 'Deréktáji fájdalom', description: 'Tompa, folyamatos, egy- vagy kétoldali fájdalom a vesetájékon (flank pain), amely a vese tokjának feszülése miatt alakul ki.', severity: 'severe' },
                { name: 'Gastrointestinális tünetek', description: 'Hányinger, hányás, étvágytalanság gyakori kísérő tünetek a peritonealis izgalom miatt.', severity: 'moderate' },
                { name: 'Alsó húgyúti tünetek', description: 'Dysuria, pollakisuria gyakran megelőzi a lázat, de az esetek 30-50%-ában hiányozhatnak is.', severity: 'mild' }
              ],
              physical_exam: [
                'Costovertebralis szöglet (vesetáj) ütögetési érzékenysége (Giordano-jel)',
                'Láz, tachycardia',
                'Hasi érzékenység (ritkábban)'
              ],
              complications: ['Vese tályog', 'Perinephricus tályog', 'Urosepsis', 'Papilla necrosis', 'Krónikus veseelégtelenség (recidív)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis, balra tolt', interpretation: 'Szisztémás gyulladás' },
                { test: 'CRP/PCT', finding: 'Jelentősen emelkedett', interpretation: 'Bakteriális infekció' },
                { test: 'Vizelet', finding: 'Leukocyturia, bakteriuria, fehérvérsejt cilinderek', interpretation: 'Felső húgyúti eredet' },
                { test: 'Vesefunkció', finding: 'Kreatinin emelkedhet', interpretation: 'Akut vesekárosodás' }
              ],
              imaging: [
                { modality: 'CT has/kismedence', finding: 'Vese megnagyobbodás, perinephricus folyadék, ék alakú hypodenzitás', significance: 'Gold standard a komplikációk kizárására (EAU 2025)' },
                { modality: 'Vese UH', finding: 'Obstrukció, tályog', significance: 'Sugárterhelés mentes alternatíva' }
              ],
              microbiology: [
                { test: 'Vizelet tenyésztés', finding: '≥10^4 CFU/ml', significance: 'Mindig levenni! (EAU 2025)' },
                { test: 'Hemokultúra', finding: 'Pozitív', significance: 'Kórházi felvételkor javasolt' }
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
                  { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7 nap', note: 'nincs Enterococcus elleni hatása' },
                  { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 nap', note: 'Csa alternatíva, ha E. coli rezisztencia <10% (EAU 2025)' },
                  { drug: 'Ceftibuten/Cefixim', dose: 'PO', duration: '10 nap', note: 'Ha kinolon nem adható (kevésbé hatékony)' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'Első választás' },
                  { drug: 'Ciprofloxacin', dose: '2x400mg IV', duration: '10-14 nap', note: 'Alternatíva, ha az E. coli rezisztencia <10% (EAU 2025)' },
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
          },
          {
            id: 'complicated_uti',
            name: 'Szisztémás tünetekkel járó húgyúti fertőzés',
            pathogen: { type: 'Baktérium', name: '<i>E. coli, Enterococcus, Pseudomonas, Klebsiella, Proteus</i>', gram: 'Vegyes', shape: 'Vegyes' },
            epidemiology: {
              incidence: 'Gyakori kórházi környezetben és urológiai betegeknél',
              risk_groups: ['Katéter viselők', 'Férfiak', 'Terhesek', 'Anatómiai/funkcionális rendellenesség', 'Veseelégtelenség', 'Immunszuppresszió'],
              seasonality: 'Nincs',
              transmission: 'Felszálló, katéter-asszociált, hematogén'
            },
            pathomechanism: {
              steps: [
                'Hajlamosító tényező: Anatómiai (pl. szűkület, kő) vagy funkcionális (pl. neurogén hólyag) rendellenesség, vagy idegentest (katéter) jelenléte gátolja a vizeletáramlást és a baktériumok kimosódását.',
                'Biofilm képzés: A baktériumok (pl. Proteus, Pseudomonas) biofilm réteget képeznek a katéteren vagy kövön, ami védi őket az antibiotikumoktól és az immunrendszertől.',
                'Perzisztencia: A fertőzés nehezen eradikálható, gyakori a rezisztens törzsek szelekciója és a visszatérő fertőzés.'
              ],
              virulence_factors: ['Biofilm', 'Multidrog rezisztencia', 'Ureáz (Proteus)']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Változó (lehet tünetszegény is)',
              symptoms: [
                { name: 'Vegyes tünetek', description: 'A cystitis és pyelonephritis tünetei keveredhetnek, de a klinikai kép gyakran atípusos.', severity: 'moderate' },
                { name: 'Szisztémás jelek', description: 'Láz, hidegrázás, tachycardia. Időseknél a zavartság vagy az általános állapot romlása lehet az egyetlen tünet.', severity: 'severe' },
                { name: 'Tünetszegény', description: 'Katéteres vagy gerincvelő sérült betegeknél a klasszikus fájdalom és vizelési panaszok hiányozhatnak.', severity: 'mild' },
                { name: 'Vizelet elváltozás', description: 'Zavaros, bűzös, üledékes vizelet, esetleg véres.', severity: 'mild' }
              ],
              physical_exam: [
                'Lehet szegényes',
                'Suprapubicus vagy vesetáji érzékenység',
                'Katéter jelenléte',
                'Láz vagy hypothermia (urosepsis)',
                'Zavartság (idősek)'
              ],
              complications: ['Urosepsis', 'Vese tályog', 'Veseelégtelenség', 'Recidíva', 'Katéter elzáródás']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vizelet tenyésztés', finding: 'Nők: ≥10^5 CFU/ml, Férfiak: ≥10^4 CFU/ml', interpretation: 'Diagnosztikus küszöbértékek (EAU 2025)' },
                { test: 'Katéteres vizelet', finding: '≥10^4 CFU/ml', interpretation: 'Szignifikáns bakteriuria' },
                { test: 'Vesefunkció', finding: 'Kreatinin ellenőrzés', interpretation: 'Obstrukció/károsodás' }
              ],
              imaging: [
                { modality: 'CT urográfia', finding: 'Anatómiai/funkcionális rendellenesség', significance: 'KÖTELEZŐ a hajlamosító tényező tisztázására' }
              ],
              microbiology: [
                { test: 'Tenyésztés + Rezisztencia', finding: 'Esszenciális', significance: 'Célzott kezelés alapja' }
              ]
            },
            differential: [
              { disease: 'Nem komplikált UTI', distinguishing: 'Nincs rizikófaktor/anatómiai hiba' },
              { disease: 'Prostatitis', distinguishing: 'Rectalis vizsgálat' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7-14 nap', note: 'nincs Enterococcus elleni hatása' },
                  { drug: 'Ciprofloxacin', dose: '2x500-750mg PO', duration: '7-14 nap', note: 'Csak ha nincs fluorokinolon kezelés az elmúlt 6 hónapban és az E. coli rezisztencia <10% (EAU 2025)' },
                  { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '7-14 nap', note: 'Alternatíva, ha E. coli rezisztencia <10% (EAU 2025)' },
                  { drug: 'Ceftibuten/Cefixim', dose: 'PO', duration: '10-14 nap', note: 'Ha kinolon nem adható' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'Súlyos esetben' },
                  { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '10-14 nap', note: 'Pseudomonas gyanú/korábbi AB kezelés' },
                  { drug: 'Carbapenem (Meropenem)', dose: '3x1g IV', duration: '10-14 nap', note: 'ESBL rizikó vagy szeptikus shock' },
                  { drug: 'Amikacin/Gentamicin', dose: 'IV', duration: 'Kiegészítésként', note: 'Szinergizmus' }
                ],
                icu: [
                  { drug: 'Széles spektrum (Carbapenem + Amikacin)', dose: 'IV', duration: '', note: 'Urosepsis' }
                ]
              },
              targeted: 'Tenyésztés alapján korrekció. Obstrukció megoldása (katéter csere, stent, nefrosztóma) elengedhetetlen!',
              supportive: ['Folyadékpótlás', 'Lázcsillapítás'],
              prevention: ['Katéter care (zárt rendszer, mielőbbi eltávolítás)', 'Obstrukció megszüntetése', 'Aszimptomatikus bakteriuria kezelésének kerülése']
            },
            prognosis: {
              mortality: 'Urosepsis esetén 10-30%',
              prognostic_scores: ['qSOFA', 'SOFA'],
              factors: 'Alapbetegség, rezisztencia, forrás kontroll'
            }
          },
          {
            id: 'prostatitis',
            name: 'Bakteriális prostatitis',
            pathogen: { type: 'Baktérium', name: '<i>E. coli, Klebsiella, Proteus, Enterococcus, Pseudomonas</i>', gram: 'Vegyes', shape: 'Vegyes' },
            epidemiology: {
              incidence: 'Férfiak 50%-a tapasztal tüneteket élete során',
              risk_groups: ['Fiatal/középkorú férfiak', 'Katéterezés', 'Húgyúti beavatkozás (biopszia)', 'HIV', 'Diabetes'],
              seasonality: 'Nincs',
              transmission: 'Felszálló (reflux), hematogén, lymphogen, direkt (biopszia)'
            },
            pathomechanism: {
              steps: [
                'Fertőzés útja: Leggyakrabban a fertőzött vizelet intraprostaticus refluxa révén jutnak be a baktériumok a prosztata mirigyeibe.',
                'Gyulladás: Akut esetben a mirigyekben ödéma és mikroabscessusok alakulnak ki, ami a prosztata duzzanatát és feszülését okozza.',
                'Krónikussá válás: A baktériumok biofilmet képezhetnek a prosztataköveken vagy a mirigycsatornákban, ami fenntartja a visszatérő fertőzéseket.'
              ],
              virulence_factors: ['Biofilm', 'Anatómiai elhelyezkedés (rossz AB penetráció)']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Akut (ABP) vagy Krónikus (CBP)',
              symptoms: [
                { name: 'Akut: Szisztémás tünetek', description: 'Hirtelen kezdődő magas láz, hidegrázás, izomfájdalom, rossz közérzet (influenzaszerű kezdet).', severity: 'severe' },
                { name: 'Fájdalom', description: 'Jellegzetes gáttájéki (perinealis), végbél körüli, alhasi fájdalom, amely sugározhat a herékbe és a péniszbe.', severity: 'moderate' },
                { name: 'LUTS (Alsó húgyúti tünetek)', description: 'Kifejezett dysuria, pollakisuria, sürgető vizelési inger.', severity: 'moderate' },
                { name: 'Obstrukció', description: 'A duzzadt prosztata összenyomja a húgycsövet, ami nehezített vizelést, vékony sugarat vagy teljes vizeletretenciót okozhat.', severity: 'severe' },
                { name: 'Krónikus tünetek', description: 'Enyhébb, visszatérő panaszok: kismedencei diszkomfort, visszatérő húgyúti fertőzések, fájdalmas ejakuláció.', severity: 'mild' }
              ],
              physical_exam: [
                'Rectalis digitális vizsgálat (RDV):',
                'Akut: Duzzadt, meleg, EXTRÉM érzékeny prosztata (Masszázs TILOS - bacteremia veszély!)',
                'Krónikus: Lehet normál vagy enyhén érzékeny, nem duzzadt'
              ],
              complications: ['Prosztata tályog', 'Urosepsis', 'Krónikussá válás', 'Epididymitis', 'Vizeletretenció', 'Szexuális diszfunkció']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vizelet', finding: 'Pyuria, bakteriuria', interpretation: 'Pozitív' },
                { test: 'Vérkép/CRP', finding: 'Emelkedett (Akut)', interpretation: 'Szisztémás gyulladás' },
                { test: 'PSA', finding: 'Emelkedett', interpretation: 'Gyulladás miatt (akut fázisban nem rák diagnosztika!)' }
              ],
              imaging: [
                { modality: 'Transrectalis UH (TRUS)', finding: 'Tályog (hipoechogén terület)', significance: 'Csak ha nem javul a kezelésre vagy tályog gyanú' }
              ],
              microbiology: [
                { test: 'Akut: Vizelet tenyésztés', finding: 'Középsugár vizelet', significance: 'Prosztata masszázs TILOS!' },
                { test: 'Krónikus: Meares-Stamey teszt', finding: '4 pohár próba vagy 2 pohár próba (masszázs előtt/után)', significance: 'Gold standard (EAU 2025)' }
              ]
            },
            differential: [
              { disease: 'Cystitis', distinguishing: 'Nincs láz, nincs prosztata érzékenység' },
              { disease: 'BPH', distinguishing: 'Nincs infekciós jel, lassú progresszió' },
              { disease: 'Krónikus kismedencei fájdalom szindróma (CPPS)', distinguishing: 'Negatív tenyésztés, krónikus fájdalom' },
              { disease: 'Prosztatarák', distinguishing: 'PSA, RDV (göbös), biopszia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Levofloxacin', dose: '1x500-750mg PO', duration: '2-4 hét (Akut), 4-6 hét (Krónikus)', note: 'EAU 2025: Első választás (jó penetráció)' },
                  { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '2-4 hét (Akut), 4-6 hét (Krónikus)', note: 'EAU 2025: Első választás' },
                  { drug: 'Cotrimoxazol', dose: '2x960mg PO', duration: '4-6 hét', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1-2g IV', duration: '14 nap', note: 'Súlyos akut esetben (majd PO váltás)' },
                  { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '', note: 'Urosepsis/Pseudomonas gyanú' },
                  { drug: 'Gentamicin', dose: '5-7mg/kg IV', duration: '', note: 'Kiegészítésként (szinergizmus)' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Szeptikus shock/ESBL' }
                ]
              },
              targeted: 'Fluorokinolonok (első választás krónikusban). Makrolidok (Chlamydia gyanú). Fosfomycin (MDR - vitatott penetráció).',
              supportive: ['NSAID fájdalomcsillapítás', 'Alfa-blokkoló (Tamsulosin) a tünetek enyhítésére', 'Suprapubicus katéter (retenció esetén, urethralis kerülendő akut gyulladásban!)'],
              prevention: ['Húgyúti fertőzések korai kezelése', 'Prosztata biopszia profilaxis: Célzottan (rectalis törlet alapján) vagy Fosfomycin/Ceftriaxon (Fluorokinolon kerülendő!)']
            },
            prognosis: {
              mortality: 'Akut: alacsony (de sepsis veszély); Krónikus: életminőséget rontja, nehezen gyógyul (recidíva gyakori)',
              prognostic_scores: ['Nincs'],
              factors: 'Biofilm, rezisztencia, anatómia, CPPS átmenet'
            }
          },
          {
            id: 'asymptomatic_bacteriuria',
            name: 'Aszimptomatikus bakteriuria',
            pathogen: { type: 'Baktérium', name: '<i>E. coli, Enterococcus, GBS</i>, stb.', gram: 'Változó', shape: 'Változó' },
            epidemiology: {
              incidence: 'Gyakori (nők 3-5%, idősek 10-50%, katéteresek 100%)',
              risk_groups: ['Idősek', 'Diabetes', 'Katéter viselés', 'Terhesség'],
              seasonality: 'Nincs',
              transmission: 'Endogén kolonizáció'
            },
            pathomechanism: {
              steps: [
                'Kolonizáció: A baktériumok megtelepednek a húgyutakban, de hiányoznak belőlük azok a virulenciafaktorok (pl. specifikus fimbriák), amelyek szöveti inváziót vagy gyulladást váltanának ki.',
                'Kommensalizmus: A baktériumok és a gazdaszervezet között egyfajta egyensúlyi állapot alakul ki, tünetek nélkül.',
                'Védő hatás: A kolonizáló törzsek versenghetnek a virulensebb kórokozókkal, így akár védő hatásuk is lehet.'
              ],
              virulence_factors: ['Csökkent virulencia']
            },
            clinical: {
              incubation: '-',
              onset: 'Tünetmentes',
              symptoms: [
                { name: 'Tünetmentes', description: 'A betegnek nincsenek húgyúti panaszai (nincs dysuria, nincs láz, nincs fájdalom). A bakteriuria véletlenszerű lelet.', severity: 'mild' }
              ],
              physical_exam: [
                'Negatív',
                'Zavaros/bűzös vizelet önmagában nem diagnosztikus és nem igényel kezelést!'
              ],
              complications: ['Felesleges antibiotikum kezelés -> rezisztencia', 'Pyelonephritis (csak terhességben/beavatkozásnál rizikó)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vizelet tenyésztés', finding: '≥10^5 CFU/ml (ugyanaz a törzs)', interpretation: 'Nők: 2 konzekutív minta, Férfiak: 1 minta (EAU 2025)' },
                { test: 'Katéteres minta', finding: '≥10^5 CFU/ml', interpretation: 'Egy minta elegendő' },
                { test: 'Vizelet üledék', finding: 'Pyuria gyakran jelen van', interpretation: 'NEM indikál kezelést tünetek nélkül!' }
              ],
              imaging: [
                { modality: 'Nincs', finding: '-', significance: '-' }
              ],
              microbiology: [
                { test: 'Tenyésztés', finding: 'Pozitív', significance: 'Csak szűrési indikáció esetén (pl. terhesség, urológiai beavatkozás)' }
              ]
            },
            differential: [
              { disease: 'Cystitis', distinguishing: 'Tünetek jelenléte (dysuria, urgencia)' },
              { disease: 'Kontamináció', distinguishing: 'Alacsony csíraszám, vegyes flóra' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NINCS kezelés', dose: '-', duration: '-', note: 'Főszabály (idősek, cukorbetegek, katéteresek esetén sem!)' }
                ],
                inpatient: [
                  { drug: 'NINCS kezelés', dose: '-', duration: '-', note: 'Kivéve indikációk' }
                ]
              },
              targeted: 'Csak indikáció esetén (Terhesség, Urológiai beavatkozás nyálkahártya sérüléssel). Terhességben: Fosfomycin, Nitrofurantoin, Cephalosporin.',
              supportive: ['Felvilágosítás (vizelet szaga/színe nem indokol AB-t)'],
              prevention: ['Felesleges szűrés és kezelés kerülése', 'Katéter care']
            },
            prognosis: {
              mortality: 'Nem növeli a mortalitást kezeletlenül sem',
              prognostic_scores: ['Nincs'],
              factors: '-'
            }
          }
        ]
      },
});