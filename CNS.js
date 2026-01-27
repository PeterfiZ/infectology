Object.assign(window.diseases, {
     cns_infections: {
        name: 'Központi idegrendszeri fertőzések',
        icon: '🧠',
        color: '#0891b2',
        diseases: [
          {
            id: 'bacterial_meningitis',
            name: 'Bakteriális meningitis',
            pathogen: { type: 'Baktérium', name: 'N. meningitidis, S. pneumoniae, L. monocytogenes', gram: 'Vegyes', shape: 'Kórokozó függő' },
            epidemiology: {
              incidence: '2-5/100,000 fő/év fejlett országokban',
              risk_groups: ['Újszülöttek (<1 hó)', 'Gyermekek', '65 év felettiek', 'Splenectomizáltak', 'Komplement deficiencia', 'Cochlearis implantátum'],
              seasonality: 'Meningococcus: tél-tavasz',
              transmission: 'Cseppfertőzés (meningococcus), endogén (pneumococcus), vertikális (GBS, Listeria)'
            },
            pathomechanism: {
              steps: [
                'Nasofaryngealis kolonizáció',
                'Bacteriaemia (vér-agy gát átlépése)',
                'Subarachnoidealis tér inváziója',
                'Gyulladásos válasz (TNF-α, IL-1β)',
                'Vér-agy gát permeabilitás fokozódása → agyödéma',
                'Koponyaűri nyomásfokozódás, cerebrális ischaemia'
              ],
              virulence_factors: ['Kapszula poliszacharid', 'IgA proteáz', 'Lipooligoszacharid (LOS)', 'Pili/fimbriae']
            },
            clinical: {
              incubation: '2-10 nap (meningococcus), rövidebb (pneumococcus)',
              onset: 'Akut, órák-napok',
              symptoms: [
                { name: 'Triász', description: 'Láz + meningealis izgalmi jelek + tudatzavar (44%)', severity: 'severe' },
                { name: 'Fejfájás', description: 'Intenzív, diffúz, hirtelen kezdet', severity: 'severe' },
                { name: 'Photophobia', description: 'Fénykerülés', severity: 'moderate' },
                { name: 'Hányás', description: 'Nem előzi meg hányinger', severity: 'moderate' },
                { name: 'Petechiae/purpura', description: 'Meningococcus! DIC jele', severity: 'severe' },
                { name: 'Görcsök', description: 'Főleg gyermekeknél', severity: 'severe' }
              ],
              physical_exam: [
                'Meningealis jelek: Kernig (+), Brudzinski (+), tarkókötöttség',
                'Láz (gyakran >39°C)',
                'Tudatzavar (GCS csökkent)',
                'Fokális neurológiai tünetek (agyideg bénul��s, paresis)',
                'Petechiae/purpura (meningococcaemia)',
                'Papilloedema (késői)'
              ],
              complications: ['Szeptikus shock', 'DIC', 'ARDS', 'Agyödéma/beékelődés', 'Subduralis empyema', 'Halláskárosodás', 'Kognitív deficit']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (15-30 G/L), balra tolt', interpretation: 'Bakteriális fertőzés' },
                { test: 'CRP/PCT', finding: 'Jelentősen emelkedett (PCT >2)', interpretation: 'Bakteriális szepszis' },
                { test: 'Lactát', finding: 'Emelkedett', interpretation: 'Szöveti hipoperfúzió' },
                { test: 'Koagulogram', finding: 'DIC jelek (↓fibrinogén, ↑D-dimer)', interpretation: 'Meningococcus' }
              ],
              imaging: [
                { modality: 'Koponya CT (kontrasztos)', finding: 'Meningealis enhancement, hydrocephalus', significance: 'LP előtt ha fokális jel/tudatzavar!' },
                { modality: 'MRI', finding: 'Érzékenyebb, komplikációk', significance: 'Empyema, infarktus' }
              ],
              microbiology: [
                { test: 'Liquor analízis', finding: '↑sejt (>1000, PMN), ↑fehérje (>1g/L), ↓glükóz (<2.2 vagy <40% vércukor)', significance: 'Bakteriális meningitisre jellegzetes!' },
                { test: 'Liquor Gram-festés', finding: '60-90% pozitív', significance: 'Gyors orientáció' },
                { test: 'Liquor/vér tenyésztés', finding: 'Kórokozó izolálás', significance: 'Rezisztencia' },
                { test: 'Liquor PCR (multiplex)', finding: 'DNS kimutatás', significance: 'Gyors, érzékeny, előkezelt beteg' },
                { test: 'Liquor latex agglutináció', finding: 'Antigén kimutatás', significance: 'Gyors, kevésbé érzékeny' }
              ]
            },
            differential: [
              { disease: 'Vírusos meningitis', distinguishing: 'Enyhébb, liquor: lymphocyta, normál glükóz' },
              { disease: 'TBC meningitis', distinguishing: 'Szubakut, alacsony glükóz, basilaris meningitis' },
              { disease: 'Encephalitis', distinguishing: 'Tudatzavar dominál, gócjelek, liquor enyhébb eltérés' },
              { disease: 'Subarachnoidealis vérzés', distinguishing: 'Villámcsapás fejfájás, liquor véres/xantochrom' },
              { disease: 'Carcinomás meningitis', distinguishing: 'Malignus betegség, citológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NINCS ambuláns kezelés!', dose: 'Azonnali kórházi beutalás', duration: '', note: 'Sürgősségi állapot!' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '2x2g IV', duration: '10-14 nap', note: 'Első választás' },
                  { drug: '+ Ampicillin', dose: '6x2g IV', duration: '21 nap', note: 'Ha Listeria rizikó (>50év, immunszuppresszió)' },
                  { drug: '+ Vancomycin', dose: '2x1g IV', duration: '10-14 nap', note: 'Pneumococcus rezisztencia gyanú' },
                  { drug: 'Dexamethason', dose: '4x0.15mg/kg IV', duration: '4 nap', note: 'Első AB dózis ELŐTT vagy azzal együtt!' }
                ],
                icu: [
                  { drug: 'Mint fent + intenzív monitorozás', dose: '', duration: '', note: 'Agyödéma, shock kezelése' }
                ]
              },
              targeted: 'Meningococcus: Penicillin G; Pneumococcus: MIC alapján ceftriaxon±vancomycin; Listeria: Ampicillin+gentamicin',
              supportive: ['Folyadék/elektrolit egyensúly', 'ICP monitorozás', 'Görcsprofilaxis', 'Izolálás (meningococcus, 24h AB után megszüntethető)'],
              prevention: ['MenACWY, MenB vakcinák', 'PCV13/PPSV23', 'Hib vakcina', 'Kemoprofilaxis kontaktok: Rifampicin vagy Ciprofloxacin']
            },
            prognosis: {
              mortality: 'Összesen 15-25%, Meningococcus 10%, Pneumococcus 20-30%, Listeria 20-30%',
              prognostic_scores: ['GCS', 'APACHE II'],
              factors: 'Életkor, kórokozó, késői kezelés, tudatzavar, görcsök, szeptikus shock'
            }
          },
          {
            id: 'viral_encephalitis',
            name: 'Vírusos encephalitis',
            pathogen: { type: 'Vírus', name: 'HSV-1, VZV, enterovírusok, arbovírusok', gram: 'DNS/RNS vírusok', shape: 'változó' },
            epidemiology: {
              incidence: '0.5-7/100,000 fő/év',
              risk_groups: ['Újszülöttek (HSV-2)', 'Immunszupprimáltak', 'Idősek (VZV reaktiváció)', 'Utazók endémiás területekre (arbovírus)'],
              seasonality: 'Enterovírus: nyár-ősz; HSV: egész évben',
              transmission: 'HSV: reaktiváció; Enterovírus: feko-orális; Arbovírus: vektor (szúnyog, kullancs)'
            },
            pathomechanism: {
              steps: [
                'Primer fertőzés vagy reaktiváció (HSV)',
                'Neurotropizmus: vírus bejut az idegszövetbe',
                'HSV: temporális lebeny predilekció (olfactorius vagy trigeminalis út)',
                'Direkt neuronális károsodás + immunválasz',
                'Nekrotizáló encephalitis (HSV) vs. perivascularis gyulladás',
                'Agyödéma, hemorrhagia, nekrózis'
              ],
              virulence_factors: ['HSV: glikoprotein B, C, D (belépés)', 'VZV: latencia neuronokban', 'Enterovírus: VP1 kapszid fehérje']
            },
            clinical: {
              incubation: 'HSV reaktiváció: változó; Enterovírus: 3-7 nap; Arbovírus: 4-14 nap',
              onset: 'Akut-szubakut',
              symptoms: [
                { name: 'Láz', description: 'Általában magas', severity: 'moderate' },
                { name: 'Tudatzavar', description: 'Konfúzió → kóma', severity: 'severe' },
                { name: 'Személyiségváltozás', description: 'HSV-re jellemző (temporális)', severity: 'severe' },
                { name: 'Görcsök', description: 'Fokális vagy generalizált', severity: 'severe' },
                { name: 'Afázia', description: 'HSV, temporális érintettség', severity: 'moderate' },
                { name: 'Fejfájás', description: 'Intenzív', severity: 'moderate' }
              ],
              physical_exam: [
                'Tudatzavar (GCS csökkent)',
                'Fokális neurológiai tünetek (hemiparesis, agyideg bénulás)',
                'Görcsök',
                'Meningealis jelek (mérsékelt)',
                'Papilloedema (későn)'
              ],
              complications: ['Maradandó neurológiai károsodás', 'Epilepszia', 'Motoros/kognitív deficit', 'Halál (kezeletlen HSV 70%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Változó, lehet normál', interpretation: 'Nem specifikus' },
                { test: 'CRP', finding: 'Mérsékelt emelkedés', interpretation: 'Alacsonyabb mint bakteriálisnál' },
                { test: 'Máj/vesefunkció', finding: 'Baseline', interpretation: 'Acyclovir toxicitás' }
              ],
              imaging: [
                { modality: 'MRI agy', finding: 'HSV: temporális + frontális T2/FLAIR hiperintenzitás, aszimmetrikus', significance: 'Legérzékenyebb! Korai elvégzendő' },
                { modality: 'CT agy', finding: 'Korai stádiumban negatív lehet', significance: 'LP előtt kontraindikáció kizárása' }
              ],
              microbiology: [
                { test: 'Liquor PCR', finding: 'HSV-1/2, VZV, enterovírus DNS/RNS', significance: 'Gold standard, korai negativitás lehetséges!' },
                { test: 'Liquor analízis', finding: 'Lymphocytás pleocytosis (10-500), normál/enyhén↑fehérje, normál glükóz', significance: 'Vírusos pattern' },
                { test: 'Liquor vvt', finding: 'Xanthochromia, emelkedett', significance: 'Hemorrhagiás nekrózis (HSV)' },
                { test: 'Szerológia', finding: 'Akut-konvaleszcens titeremelkedés', significance: 'Retrospektív' }
              ]
            },
            differential: [
              { disease: 'Bakteriális meningitis', distinguishing: 'Gyorsabb lefolyás, liquor: PMN, ↓glükóz' },
              { disease: 'Autoimmun encephalitis', distinguishing: 'Anti-NMDA-R, limbikus encephalitis, daganat keresés' },
              { disease: 'Agytályog', distinguishing: 'CT/MRI: gyűrű enhancement, szeptikus fókusz' },
              { disease: 'Toxikus-metabolikus encephalopathia', distinguishing: 'Alapbetegség, labor eltérések' },
              { disease: 'Status epilepticus', distinguishing: 'EEG, anamnézis' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NINCS ambuláns kezelés!', dose: 'Azonnali kórházi beutalás', duration: '', note: 'HSV encephalitis halálos kezelés nélkül!' }
                ],
                inpatient: [
                  { drug: 'Acyclovir', dose: '3x10mg/kg IV', duration: '14-21 nap', note: 'AZONNAL indítandó HSV gyanúnál!' }
                ],
                icu: [
                  { drug: 'Acyclovir', dose: '3x10mg/kg IV', duration: '21 nap', note: 'Immunszupprimált, súlyos' },
                  { drug: 'Görcsoldó', dose: 'Levetiracetam vagy más', duration: '', note: 'Profilaxis/terápia' }
                ]
              },
              targeted: 'HSV/VZV: Acyclovir; CMV: Ganciclovir+Foscarnet; Enterovírus: szupportív',
              supportive: ['ICP kontroll', 'Görcsoldás', 'Folyadékegyensúly', 'Rehabilitáció'],
              prevention: ['VZV vakcina', 'Szúnyogcsípés elleni védelem (arbovírus)', 'Neonatalis HSV: császármetszés ha aktív genitalis herpes']
            },
            prognosis: {
              mortality: 'HSV kezeletlen: 70%, kezelt: 20-30%; Enterov��rus: <1%',
              prognostic_scores: ['GCS', 'Életkor'],
              factors: 'Késői kezelés, életkor, tudatzavar mértéke, HSV korai diagnózis'
            }
          },
          {
            id: 'herpes_encephalitis',
            name: 'Herpes Simplex Encephalitis',
            pathogen: { type: 'Vírus', name: 'Herpes Simplex Virus 1 (HSV-1)', gram: 'dsDNS', shape: 'gömb' },
            epidemiology: {
              incidence: 'Leggyakoribb sporadikus, fatális encephalitis',
              risk_groups: ['Bárki (nincs szezonalitás)'],
              seasonality: 'Nincs',
              transmission: 'Reaktiváció (trigeminalis ganglion) vagy primer fertőzés'
            },
            pathomechanism: {
              steps: ['Neurotrop terjedés', 'Temporális és frontális lebeny nekrózis', 'Hemorrhagiás gyulladás', 'Agyödéma'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Akut (napok)',
              symptoms: [
                { name: 'Láz', description: 'Magas', severity: 'moderate' },
                { name: 'Magatartászavar', description: 'Személyiségváltozás, pszichózis (temporális)', severity: 'severe' },
                { name: 'Afázia', description: 'Beszédzavar', severity: 'severe' },
                { name: 'Görcsök', description: 'Fokális vagy generalizált', severity: 'severe' }
              ],
              physical_exam: ['Tudatzavar', 'Fokális neurológiai jelek', 'Memóriazavar'],
              complications: ['Uncus beékelődés', 'Maradandó kognitív károsodás', 'Halál']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Lymphocytás, vvt emelkedett (xanthochrom), fehérje emelkedett', interpretation: 'Hemorrhagiás nekrózis' }],
              imaging: [{ modality: 'MRI', finding: 'Temporális lebeny aszimmetrikus hiperintenzitás (T2/FLAIR)', significance: 'Patognomikus' }],
              microbiology: [{ test: 'Liquor PCR', finding: 'HSV-1 DNS', significance: 'Gold standard' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Acyclovir', dose: '3x10 mg/kg IV', duration: '14-21 nap', note: 'Azonnal indítandó gyanú esetén is!' }] },
              targeted: 'Acyclovir IV. Recidíva esetén ismétlés.',
              supportive: ['Görcsgátlás', 'Agyödéma kezelés'],
              prevention: ['Nincs']
            },
            prognosis: { mortality: 'Kezeletlen >70%, kezelt 20-30%', prognostic_scores: [], factors: 'Életkor, immunstátusz, kezelés ideje' }
          },
          {
            id: 'aseptic_meningitis',
            name: 'Aszeptikus (Vírusos) Meningitis',
            pathogen: { type: 'Vírus', name: 'Enterovírusok (Coxsackie, Echo), HSV-2, VZV', gram: 'RNS/DNS', shape: '-' },
            epidemiology: {
              incidence: 'Leggyakoribb meningitis forma',
              risk_groups: ['Gyermekek', 'Fiatal felnőttek'],
              seasonality: 'Nyár-ősz (Enterovírus)',
              transmission: 'Feko-orális (Entero), szexuális (HSV-2)'
            },
            pathomechanism: {
              steps: ['Viremia', 'Meningealis gyulladás', 'Nincs gennyes exsudatum'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '3-7 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Fejfájás', description: 'Frontális, retrobulbaris', severity: 'moderate' },
                { name: 'Láz', description: 'Mérsékelt', severity: 'mild' },
                { name: 'Photophobia', description: 'Fénykerülés', severity: 'mild' }
              ],
              physical_exam: ['Meningealis izgalmi jelek (enyhébbek)', 'Tudat tiszta (különbség encephalitis-től!)'],
              complications: ['Ritka (meningoencephalitis)']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Lymphocytás pleocytosis (tíz-száz), normál glükóz, enyhén emelkedett fehérje', interpretation: 'Vírusos kép' }],
              microbiology: [{ test: 'Liquor PCR', finding: 'Enterovírus/HSV/VZV', significance: 'Diagnosztikus' }]
            },
            therapy: {
              empirical: { outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Fájdalomcsillapítás, pihenés' }] },
              targeted: 'HSV-2/VZV esetén Acyclovir megfontolandó (főleg immunszupprimáltaknál). Enterovírus: tüneti.',
              prevention: ['Higiénia']
            },
            prognosis: { mortality: 'Kiváló, spontán gyógyul', prognostic_scores: [], factors: 'Nincs' }
          },
          {
            id: 'tbe',
            name: 'Kullancs-encephalitis (TBE)',
            pathogen: { type: 'Vírus', name: 'Tick-Borne Encephalitis Virus', gram: 'RNS, Flaviviridae', shape: 'gömb' },
            epidemiology: {
              incidence: 'Endémiás Közép-Európában',
              risk_groups: ['Erdőjárók', 'Kullancscsípés'],
              seasonality: 'Tavasz-ősz',
              transmission: 'Kullancscsípés, pasztőrözetlen tej'
            },
            pathomechanism: {
              steps: ['Kullancscsípés', 'Viremia (lázas szak)', 'KIR invázió (meningoencephalitis)'],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: '7-14 nap',
              onset: 'Bifázisos',
              symptoms: [
                { name: '1. fázis', description: 'Influenza-szerű tünetek (láz, izomfájdalom)', severity: 'mild' },
                { name: 'Tünetmentes szak', description: '1-20 nap', severity: 'mild' },
                { name: '2. fázis', description: 'Meningitis, Encephalitis, Myelitis', severity: 'severe' }
              ],
              physical_exam: ['Ataxia', 'Tremor', 'Vállövi petyhüdt bénulás (myelitis)', 'Tudatzavar'],
              complications: ['Maradandó bénulás', 'Post-encephalitis szindróma']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Lymphocytás pleocytosis', interpretation: '-' }],
              microbiology: [{ test: 'Szerológia (IgM/IgG)', finding: 'Vér és Liquor', significance: 'Diagnosztikus (PCR gyakran negatív a 2. fázisban!)' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Nincs specifikus terápia' }] },
              targeted: 'Tüneti kezelés (ödéma csökkentés, rehabilitáció).',
              prevention: ['Védőoltás (FSME-Immun, Encepur)', 'Kullancsriasztó']
            },
            prognosis: { mortality: '1-2% (európai altípus)', prognostic_scores: [], factors: 'Altípus, kezelés ideje' }
          },
          {
            id: 'meningococcal_meningitis',
            name: 'Meningococcus Meningitis',
            pathogen: { type: 'Baktérium', name: 'Neisseria meningitidis', gram: 'Gram-negatív', shape: 'diplococcus' },
            epidemiology: {
              incidence: 'Járványos lehet',
              risk_groups: ['Csecsemők', 'Kamaszok', 'Zárt közösségek (kollégium)', 'Asplenia'],
              seasonality: 'Tél-tavasz',
              transmission: 'Cseppfertőzés (szoros kontakt)'
            },
            pathomechanism: {
              steps: ['Nasopharynx kolonizáció', 'Invázió', 'Sepszis/Meningitis', 'LOS endotoxin -> DIC'],
              virulence_factors: ['Tok (A,B,C,W,Y)', 'LOS', 'IgA proteáz']
            },
            clinical: {
              incubation: '1-10 nap',
              onset: 'Hiperakut',
              symptoms: [
                { name: 'Láz, fejfájás, hányás', description: 'Klasszikus triász', severity: 'severe' },
                { name: 'Kiütés', description: 'Petechiae, purpura fulminans (nem tűnik el nyomásra)', severity: 'severe' },
                { name: 'Waterhouse-Friderichsen', description: 'Mellékvese bevérzés, shock', severity: 'severe' }
              ],
              physical_exam: ['Meningealis jelek', 'Purpurák', 'Shock jelei'],
              complications: ['Végtag nekrózis/amputáció', 'Süketség', 'Halál (órák alatt)']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Gennyes', interpretation: '-' }, { test: 'PCR', finding: 'Pozitív', significance: 'Gyors' }],
              microbiology: [{ test: 'Gram festés', finding: 'Gram-negatív diplococcusok', significance: 'Gyors' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2x2g IV', duration: '7 nap', note: 'Azonnal!' }, { drug: 'Penicillin G', dose: '24 millió E IV', duration: '7 nap', note: 'Ha érzékeny' }] },
              targeted: 'Kontaktoknak profilaxis: Rifampicin vagy Ciprofloxacin vagy Ceftriaxon.',
              prevention: ['Vakcináció (MenACWY, MenB)']
            },
            prognosis: { mortality: '10-15% kezeléssel is', prognostic_scores: [], factors: 'Életkor, komorbiditás, kezelés ideje' }
          },
          {
            id: 'pneumococcal_meningitis',
            name: 'Pneumococcus Meningitis',
            pathogen: { type: 'Baktérium', name: 'Streptococcus pneumoniae', gram: 'Gram-pozitív', shape: 'diplococcus' },
            epidemiology: {
              incidence: 'Leggyakoribb felnőtt meningitis',
              risk_groups: ['Idősek', 'Alkoholisták', 'Splenectomia', 'Otitis/Sinusitis/Pneumonia', 'Liquorcsorgás'],
              seasonality: 'Tél',
              transmission: 'Endogén terjedés vagy cseppfertőzés'
            },
            pathomechanism: {
              steps: ['Bakterémia vagy per continuitatem (fül/arcüreg) terjedés', 'Erős gyulladásos válasz'],
              virulence_factors: ['Tok', 'Pneumolysin']
            },
            clinical: {
              incubation: 'Rövid',
              onset: 'Akut',
              symptoms: [
                { name: 'Meningealis tünetek', description: 'Súlyosabb tudatzavar, kóma gyakori', severity: 'severe' },
                { name: 'Fókusz tünetei', description: 'Fülfájás, köhögés', severity: 'moderate' }
              ],
              physical_exam: ['Meningealis jelek', 'Otitis media jelei', 'Tudatzavar'],
              complications: ['Süketség', 'Hidrocephalus', 'Agytályog']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Gennyes, nagyon magas fehérje, alacsony cukor', interpretation: '-' }],
              microbiology: [{ test: 'Gram festés', finding: 'Gram-pozitív diplococcusok', significance: '-' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2x2g IV', duration: '10-14 nap', note: '' }, { drug: 'Vancomycin', dose: '2x1g IV', duration: '', note: 'Rezisztencia gyanú esetén' }, { drug: 'Dexamethason', dose: '4x10mg IV', duration: '4 nap', note: 'AB előtt!' }] },
              targeted: 'Penicillin érzékeny: Penicillin G. Rezisztens: Ceftriaxon + Vancomycin.',
              prevention: ['Pneumococcus oltás (PCV, PPSV)']
            },
            prognosis: { mortality: '20-30%, magas morbiditás', prognostic_scores: [], factors: 'Életkor, immunstátusz' }
          },
          {
            id: 'listeria_meningitis',
            name: 'Listeria Meningitis',
            pathogen: { type: 'Baktérium', name: 'Listeria monocytogenes', gram: 'Gram-pozitív', shape: 'pálca' },
            epidemiology: {
              incidence: 'Ritka, de veszélyes',
              risk_groups: ['Újszülöttek', 'Idősek (>50 év)', 'Terhesek', 'Immunszupprimáltak (transzplantált, alkoholista)'],
              seasonality: 'Nincs',
              transmission: 'Élelmiszer (lágy sajt, felvágott)'
            },
            pathomechanism: {
              steps: ['GI traktus invázió', 'Bakterémia', 'KIR invázió (rhombencephalitis tropizmus)'],
              virulence_factors: ['Intracelluláris túlélés', 'Listeriolysin O']
            },
            clinical: {
              incubation: '1-4 hét',
              onset: 'Szubakut',
              symptoms: [
                { name: 'Láz, fejfájás', description: 'Lehet enyhébb kezdet', severity: 'moderate' },
                { name: 'Agytörzsi tünetek', description: 'Agyideg bénulások, ataxia (rhombencephalitis)', severity: 'severe' },
                { name: 'Tudatzavar', description: 'Gyakori', severity: 'severe' }
              ],
              physical_exam: ['Meningealis jelek (lehetnek hiányosak)', 'Fokális jelek'],
              complications: ['Agytályog', 'Hydrocephalus']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Lehet lymphocytás is! (nem mindig PMN)', interpretation: 'Megtévesztő' }],
              microbiology: [{ test: 'Gram festés', finding: 'Gyakran negatív vagy Gram+ pálcák (diphtheroidnak nézhető)', significance: '-' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ampicillin', dose: '6x2g IV', duration: '21 nap', note: 'Cefalosporinok HATÁSTALANOK!' }, { drug: 'Gentamicin', dose: 'Kiegészítésként', duration: 'szinergista', note: '' }] },
              targeted: 'Ampicillin vagy Penicillin G + Gentamicin. Allergia esetén: Cotrimoxazol.',
              prevention: ['Élelmiszerhigiénia rizikócsoportban']
            },
            prognosis: { mortality: '20-30%', prognostic_scores: [], factors: 'Életkor, immunstátusz' }
          },
          {
            id: 'cryptococcal_meningitis',
            name: 'Cryptococcus Meningitis',
            pathogen: { type: 'Gomba', name: 'Cryptococcus neoformans', gram: 'Sarjadzó gomba (tokos)', shape: 'kerek' },
            epidemiology: {
              incidence: 'HIV/AIDS betegekben leggyakoribb gombás meningitis',
              risk_groups: ['HIV (CD4 <100)', 'Transzplantáltak', 'Szteroid kezelés'],
              seasonality: 'Nincs',
              transmission: 'Inhaláció (galambürülék pora) -> tüdő -> hematogén szórás'
            },
            pathomechanism: {
              steps: ['Inhaláció', 'Tüdőfertőzés (gyakran tünetmentes)', 'Reaktiváció/disszemináció immunszuppresszióban', 'Vér-agy gát átlépése', 'Poliszacharid tok gátolja a fagocitózist'],
              virulence_factors: ['Poliszacharid tok', 'Melanin termelés']
            },
            clinical: {
              incubation: 'Ismeretlen (reaktiváció)',
              onset: 'Szubakut/Krónikus (hetek)',
              symptoms: [
                { name: 'Fejfájás', description: 'Fokozódó, tartós', severity: 'severe' },
                { name: 'Láz', description: 'Lehet alacsony', severity: 'moderate' },
                { name: 'Tudatzavar', description: 'Késői jel', severity: 'severe' }
              ],
              physical_exam: ['Meningealis jelek gyakran hiányoznak!', 'Papilloedema (magas ICP)', 'Bőrtünetek (molluscum-szerű)'],
              complications: ['Magas koponyaűri nyomás (vakság, beékelődés)', 'Cryptococcoma', 'IRIS (terápia indításkor)']
            },
            diagnostics: {
              laboratory: [{ test: 'CD4', finding: '<100/µL', interpretation: 'Rizikó' }],
              imaging: [{ modality: 'CT/MRI', finding: 'Gyakran normál, vagy tágult perivascularis terek, cryptococcoma', significance: 'Kizárás' }],
              microbiology: [
                { test: 'Liquor CrAg (antigén)', finding: 'Pozitív', significance: 'Gold standard (vérből is!)' },
                { test: 'Tus (India ink) festés', finding: 'Tokos élesztőgombák', significance: 'Gyors, de kevésbé érzékeny' },
                { test: 'Liquor tenyésztés', finding: 'C. neoformans', significance: 'Diagnosztikus' },
                { test: 'Liquor nyomás', finding: 'Gyakran extrém magas (>25 vízcm)', significance: 'Terápiás csapolás kell' }
              ]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Amphotericin B + Flucytosine', dose: 'IV + PO', duration: '2 hét (indukció)', note: 'Gold standard' }] },
              targeted: 'Indukció (AmB+5FC) -> Konszolidáció (Fluconazol 400mg 8 hét) -> Fenntartó (Fluconazol 200mg 1 évig/CD4>200).',
              supportive: ['Ismételt LP a nyomás csökkentésére (létfontosságú!)'],
              prevention: ['Fluconazol profilaxis (ha CrAg pozitív vérben)', 'ART indítása (de óvatosan IRIS miatt)']
            },
            prognosis: { mortality: 'Kezeléssel 10-30%, kezeletlenül 100%', prognostic_scores: [], factors: 'Kezelés ideje, immunstátusz' }
          },
          {
            id: 'naegleria_meningitis',
            name: 'Primer Amoebás Meningoencephalitis (PAM)',
            pathogen: { type: 'Protozoon', name: 'Naegleria fowleri', gram: '-', shape: 'amőba' },
            epidemiology: {
              incidence: 'Nagyon ritka, de fatális',
              risk_groups: ['Gyermekek/fiatalok', 'Édesvízi fürdőzők'],
              seasonality: 'Nyár (meleg víz)',
              transmission: 'Orron keresztül bejutó víz -> szaglóideg -> agy'
            },
            pathomechanism: {
              steps: ['Víz bejutása az orrba', 'Cribriform lemez penetráció', 'Szaglóideg mentén vándorlás', 'Agyállomány lízise (trophozoiták)'],
              virulence_factors: ['Szövetbontó enzimek', 'Amebostome (táplálkozó apparátus)']
            },
            clinical: {
              incubation: '1-9 nap (átlag 5)',
              onset: 'Fulmináns',
              symptoms: [
                { name: 'Fejfájás', description: 'Bifrontalis, súlyos', severity: 'severe' },
                { name: 'Láz, hányás', description: 'Hirtelen', severity: 'severe' },
                { name: 'Szaglás/ízlelés zavar', description: 'Korai jel lehet', severity: 'moderate' },
                { name: 'Meningealis jelek', description: 'Kifejezett', severity: 'severe' }
              ],
              physical_exam: ['Meningealis izgalom', 'Kóma', 'Gyors romlás'],
              complications: ['Beékelődés', 'Halál (3-7 napon belül)']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Gennyes (PMN), vvt-k, alacsony cukor', interpretation: 'Bakteriálisnak tűnik!' }],
              microbiology: [
                { test: 'Liquor mikroszkópia (natív)', finding: 'Mozgó amőbák', significance: 'Diagnosztikus (de tapasztalat kell)' },
                { test: 'PCR', finding: 'Naegleria DNS', significance: 'CDC/Referencia labor' }
              ]
            },
            therapy: {
              empirical: { icu: [{ drug: 'Miltefosine + Amphotericin B + Rifampicin + Fluconazol + Azithromycin', dose: 'Kombináció', duration: '?', note: 'Kísérleti, kevés túlélő' }] },
              targeted: 'Miltefosine a kulcsgyógyszer. Hűtés (hipotermia) segíthet.',
              prevention: ['Orrcsipesz meleg édesvízben', 'Orrmosás csak steril vízzel']
            },
            prognosis: { mortality: '>97% (szinte mindig halálos)', prognostic_scores: [], factors: 'Kezelés elérhetősége' }
          }
        ]
      },
});