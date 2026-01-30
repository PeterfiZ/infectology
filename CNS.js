Object.assign(window.diseases, {
     cns_infections: {
        name: 'Központi idegrendszeri fertőzések',
        icon: window.diseaseMetadata.cns_infections.icon,
        color: window.diseaseMetadata.cns_infections.color,
        tables: [
          {
            title: 'Liquor leletek differenciáldiagnosztikája',
            headers: ['Paraméter', 'Bakteriális', 'Vírusos', 'Normál'],
            rows: [
              ['Nyitási nyomás', 'Emelkedett (>20 vízcm)', 'Normál vagy enyhén emelkedett', '6-20 vízcm'],
              ['Megjelenés', 'Zavaros, gennyes', 'Tiszta ("víztiszta")', 'Tiszta, színtelen'],
              ['Sejtszám (fvs/µL)', '>1000 (gyakran 100-10000)', '10-500 (ritkán >1000)', '0-5'],
              ['Domináns sejt', 'Neutrophil granulocyta (>80%)', 'Lymphocyta (korai fázisban PMN lehet!)', 'Lymphocyta/Monocyta'],
              ['Fehérje (g/L)', 'Emelkedett (>1 g/L)', 'Normál vagy enyhén emelkedett (<1 g/L)', '0.15-0.45 g/L'],
              ['Glükóz (mmol/L)', 'Csökkent (<2.2 mmol/L)', 'Normál (>2.5 mmol/L)', '2.5-4.4 mmol/L'],
              ['Liquor/Vér glükóz arány', '< 0.4', '> 0.6', '≥ 0.6'],
              ['Laktát', 'Emelkedett (>3.5 mmol/L)', 'Normál (<3.5 mmol/L)', '< 2.5 mmol/L'],
              ['Mikrobiológia', 'Gram-festés (+ 60-90%), Tenyésztés (+)', 'PCR (+), Gram/Tenyésztés negatív', 'Negatív']
            ]
          }
        ],
        diseases: [
          {
            id: 'bacterial_meningitis',
            name: 'Bakteriális meningitis (Empirikus)',
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
                { name: 'Klasszikus tünetek', description: 'Láz, fejfájás, tarkókötöttség, tudatzavar (a triász nem mindig van jelen!)', severity: 'severe' },
                { name: 'Korai "Red Flag" jelek (NICE)', description: 'Láb/izomfájdalom, hideg végtagok, márványozott bőr (korai szepszis jelek!)', severity: 'severe' },
                { name: 'Kiütés', description: 'Nem halványuló (non-blanching) petechiae/purpura (Meningococcus gyanú)', severity: 'severe' },
                { name: 'Fejfájás', description: 'Súlyos, generalizált (>85%)', severity: 'severe' },
                { name: 'Láz', description: '>38°C (95%)', severity: 'severe' },
                { name: 'Tarkókötöttség', description: 'Nuchalis rigiditás (>80%)', severity: 'severe' },
                { name: 'Tudatzavar', description: 'GCS <14 (>80%)', severity: 'severe' },
              ],
              physical_exam: [
                'Meningealis jelek: Kernig (+), Brudzinski (+), tarkókötöttség',
                'Láz (gyakran >39°C)',
                'Tudatzavar (GCS csökkent)',
                'Fokális neurológiai tünetek (agyideg bénulás, paresis)',
                'Petechiae/purpura (meningococcaemia)',
                'Papilloedema (késői)'
              ],
              complications: ['Szeptikus shock', 'DIC', 'ARDS', 'Agyödéma/beékelődés', 'Subduralis empyema', 'Halláskárosodás', 'Kognitív deficit']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (15-30 G/L), balra tolt', interpretation: 'Bakteriális fertőzés' },
                { test: 'CRP/PCT', finding: 'Jelentősen emelkedett (PCT >2)', interpretation: 'Bakteriális szepszis' },
                { test: 'Vér PCR', finding: 'Meningococcus/Pneumococcus DNS', interpretation: 'NICE ajánlás: minden gyanús esetben levenni!' },
                { test: 'Koagulogram', finding: 'DIC jelek (↓fibrinogén, ↑D-dimer)', interpretation: 'Meningococcus' }
              ],
              imaging: [
                { modality: 'Koponya CT', finding: 'Kontraindikációk kizárása', significance: 'LP előtt, ha: GCS<9, görcsök, fokális jelek, papillaödéma' },
                { modality: 'MRI', finding: 'Érzékenyebb, komplikációk', significance: 'Empyema, infarktus' }
              ],
              microbiology: [
                { test: 'Liquor analízis (NICE)', finding: 'Sejtszám >1000/µL (PMN), Fehérje >1 g/L, Glükóz < a vércukor 50%-a', significance: 'Bakteriális meningitisre jellegzetes!' },
                { test: 'Liquor Laktát', finding: 'Emelkedett', significance: 'Segít elkülöníteni a vírusostól' },
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
              guidelines: ['NICE NG240 (2024): Meningitis (bacterial) and meningococcal disease'],
              empirical: {
                outpatient: [
                  { drug: 'Benzylpenicillin vagy Ceftriaxon', dose: 'IM/IV', duration: 'Stat', note: 'Csak ha a kórházba szállítás jelentősen késik (NICE)' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '2g IV 12 óránként (vagy 4g 24 óránként)', duration: 'Kórokozó függő', note: 'Első választás (NICE). Alternatíva: Cefotaxim.' },
                  { drug: '+ Amoxicillin', dose: '2g IV 4 óránként', duration: 'Kórokozó függő', note: 'Ha Listeria rizikó (>60 év, immunszuppresszió, terhesség).' },
                  { drug: 'Dexamethason', dose: '10mg IV 6 óránként', duration: '4 nap', note: 'Az első antibiotikum adag ELŐTT vagy azzal EGYÜTT. Ne adjuk, ha szeptikus shock van meningitis nélkül.' }
                ],
                icu: [
                  { drug: 'Szupportív', dose: '-', duration: '-', note: 'Légútbiztosítás, folyadékreszuszcitáció, vazopresszorok' }
                ]
              },
              targeted: 'Meningococcus: 7 nap; Pneumococcus: 14 nap; Listeria: 21 nap; H. influenzae: 10 nap; GBS: 14-21 nap.',
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
                { name: 'Tudatzavar', description: 'Encephalitis hallmark jele (100%): konfúzió, letargia, kóma', severity: 'severe' },
                { name: 'Láz', description: '>90%-ban jelen van', severity: 'moderate' },
                { name: 'Fejfájás', description: 'Gyakori kísérő tünet', severity: 'moderate' },
                { name: 'Görcsök', description: 'Gyakori (főleg HSV, autoimmun)', severity: 'severe' },
                { name: 'Fokális neurológiai jelek', description: 'Hemiparesis, agyideg bénulás, ataxia', severity: 'severe' },
                { name: 'Magatartászavar', description: 'Pszichózis, hallucináció (HSV, limbikus)', severity: 'severe' }
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
              mortality: 'HSV kezeletlen: 70%, kezelt: 20-30%; Enterovírus: <1%',
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
                { name: 'Láz', description: '90%-ban jelen van', severity: 'moderate' },
                { name: 'Fejfájás', description: '81%-ban', severity: 'moderate' },
                { name: 'Pszichiátriai tünetek', description: 'Személyiségváltozás, diszorientáció (71%)', severity: 'severe' },
                { name: 'Görcsök', description: '67%-ban (fokális vagy generalizált)', severity: 'severe' },
                { name: 'Hányás', description: '46%-ban', severity: 'mild' },
                { name: 'Fokális gyengeség', description: '33%-ban', severity: 'severe' },
                { name: 'Memóriazavar', description: '24%-ban (rövidtávú)', severity: 'moderate' }
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
                { name: 'Fejfájás', description: 'Majdnem mindig jelen van, frontális/retroorbitális', severity: 'moderate' },
                { name: 'Láz', description: '38-40°C', severity: 'mild' },
                { name: 'Meningealis jelek', description: 'Tarkókötöttség jelen van, de enyhébb lehet', severity: 'moderate' },
                { name: 'Photophobia', description: 'Fénykerülés', severity: 'mild' },
                { name: 'Tudat', description: 'TISZTA (ez különbözteti meg az encephalitistől!)', severity: 'mild' }
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
              supportive: [],
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
                { name: 'Bifázisos lefolyás', description: 'Az esetek 70-90%-ában', severity: 'mild' },
                { name: '1. fázis (Viremia)', description: 'Láz, fejfájás, izomfájdalom, fáradtság (2-7 nap)', severity: 'mild' },
                { name: 'Tünetmentes szak', description: 'Átlag 8 nap (1-33 nap)', severity: 'mild' },
                { name: '2. fázis (Neurológiai)', description: 'Meningitis (50%), Meningoencephalitis (40%), Myelitis (10%)', severity: 'severe' },
                { name: 'Myelitis tünetek', description: 'Petyhüdt bénulás (gyakran felső végtag/vállöv)', severity: 'severe' }
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
              supportive: [],
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
                { name: 'Klasszikus tünetek', description: 'Láz, fejfájás, tarkókötöttség', severity: 'severe' },
                { name: 'Kiütés', description: 'Petechiae/Purpura (50-80%-ban!) - nyomásra nem tűnik el', severity: 'severe' },
                { name: 'Szeptikus állapot', description: 'Hypotonia, tachycardia, hideg végtagok', severity: 'severe' },
                { name: 'Gyors progresszió', description: 'Órák alatt romló állapot', severity: 'severe' }
              ],
              physical_exam: ['Meningealis jelek', 'Purpurák', 'Shock jelei'],
              complications: ['Végtag nekrózis/amputáció', 'Süketség', 'Halál (órák alatt)']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Gennyes', interpretation: '-' }, { test: 'PCR', finding: 'Pozitív', significance: 'Gyors' }],
              microbiology: [{ test: 'Gram festés', finding: 'Gram-negatív diplococcusok', significance: 'Gyors' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2g IV 12 óránként', duration: '7 nap', note: 'NICE NG240 ajánlás' }] },
              targeted: 'Ceftriaxon 7 napig. Kontaktoknak profilaxis: Ciprofloxacin (egyszeri 500mg PO) vagy Rifampicin.',
              supportive: [],
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
                { name: 'Súlyos meningitis', description: 'Gyakrabban jár kómával/görcsökkel mint a meningococcus', severity: 'severe' },
                { name: 'Fókusz tünetek', description: 'Pneumonia (25%), Otitis (30%), Sinusitis (15%) jelei', severity: 'moderate' },
                { name: 'Neurológiai deficit', description: 'Gyakori maradványtünetek', severity: 'severe' }
              ],
              physical_exam: ['Meningealis jelek', 'Otitis media jelei', 'Tudatzavar'],
              complications: ['Süketség', 'Hidrocephalus', 'Agytályog']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Gennyes, nagyon magas fehérje, alacsony cukor', interpretation: '-' }],
              microbiology: [{ test: 'Gram festés', finding: 'Gram-pozitív diplococcusok', significance: '-' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Ceftriaxon', dose: '2g IV 12 óránként', duration: '14 nap', note: 'NICE NG240 ajánlás' }, { drug: 'Dexamethason', dose: '10mg IV 6 óránként', duration: '4 nap', note: 'Folytatandó, ha Pneumococcus igazolódik!' }] },
              targeted: 'Ceftriaxon 14 napig. Ha rezisztencia igazolt: + Vancomycin/Rifampicin.',
              supportive: [],
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
                { name: 'Szubakut kezdet', description: 'Lassabb progresszió', severity: 'moderate' },
                { name: 'Láz', description: '90%-ban', severity: 'moderate' },
                { name: 'Tudatzavar', description: 'Gyakori', severity: 'severe' },
                { name: 'Rhombencephalitis', description: 'Agytörzsi tünetek: ataxia, agyideg bénulás, nystagmus', severity: 'severe' },
                { name: 'Meningealis jelek', description: 'Kevésbé kifejezettek vagy hiányozhatnak', severity: 'mild' }
              ],
              physical_exam: ['Meningealis jelek (lehetnek hiányosak)', 'Fokális jelek'],
              complications: ['Agytályog', 'Hydrocephalus']
            },
            diagnostics: {
              laboratory: [{ test: 'Liquor', finding: 'Lehet lymphocytás is! (nem mindig PMN)', interpretation: 'Megtévesztő' }],
              microbiology: [{ test: 'Gram festés', finding: 'Gyakran negatív vagy Gram+ pálcák (diphtheroidnak nézhető)', significance: '-' }]
            },
            therapy: {
              empirical: { inpatient: [{ drug: 'Amoxicillin / Ampicillin', dose: '2g IV 4 óránként', duration: '21 nap', note: 'NICE NG240 ajánlás. Cefalosporinok HATÁSTALANOK!' }, { drug: '+ Gentamicin', dose: '5mg/kg IV naponta 1x', duration: 'Első 7 nap', note: 'Szinergista hatás' }] },
              targeted: 'Amoxicillin/Ampicillin (21 nap) + Gentamicin (első 7 nap). Penicillin allergia esetén: Cotrimoxazol (Trimethoprim/Sulfamethoxazol).',
              supportive: [],
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
                { name: 'Fejfájás', description: 'Vezető tünet (70-90%)', severity: 'severe' },
                { name: 'Láz', description: '60-80%-ban', severity: 'moderate' },
                { name: 'Meningealis jelek', description: 'CSAK 20-30%-ban! (megtévesztő)', severity: 'mild' },
                { name: 'Látászavar', description: 'Diplopia, photophobia (magas ICP miatt)', severity: 'severe' },
                { name: 'Tudatzavar', description: 'Letargia, konfúzió', severity: 'severe' }
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
                { name: 'Kezdeti tünetek', description: 'Súlyos frontális fejfájás, láz, hányinger, hányás', severity: 'severe' },
                { name: 'Késői tünetek', description: 'Tarkókötöttség, görcsök, tudatzavar, hallucinációk, kóma', severity: 'severe' },
                { name: 'Szaglás/ízlelés', description: 'Parosmia/Ageusia (korai jel lehet)', severity: 'moderate' }
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
              supportive: [],
              prevention: ['Orrcsipesz meleg édesvízben', 'Orrmosás csak steril vízzel']
            },
            prognosis: { mortality: '>97% (szinte mindig halálos)', prognostic_scores: [], factors: 'Kezelés elérhetősége' }
          }
        ]
      },
});