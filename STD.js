Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Szexuálisan terjedő fertőzések',
        icon: window.diseaseMetadata.sexually_transmitted.icon,
        color: window.diseaseMetadata.sexually_transmitted.color,
        diseases: [
          {
            id: 'syphilis',
            name: 'Szifilisz',
            pathogen: { type: 'Spirochaeta', name: '<i>Treponema pallidum</i>', gram: 'Gram-negatív (nem festődik)', shape: 'spirális' },
            epidemiology: {
              incidence: 'Növekvő incidencia világszerte, MSM populációban magas',
              risk_groups: ['MSM (men who have sex with men)', 'HIV pozitívak', 'Szexmunkások', 'Több szexuális partner', 'Droghasználók'],
              seasonality: 'Nincs',
              transmission: 'Direkt kontakt nyálkahártyával/bőrrel, vertikális (congenitalis)'
            },
            pathomechanism: {
              steps: [
                'Behatolás és Szóródás: A Treponema pallidum mikrosérüléseken keresztül hatol be a bőrbe vagy nyálkahártyába. Percek alatt bejut a nyirokerekbe és a véráramba, így a fertőzés már a primer fekély megjelenése előtt szisztémássá válik.',
                'Immunelkerülés: A baktérium "lopakodó" (stealth) stratégiát alkalmaz: külső membránja kevés antigént tartalmaz, így elkerüli az antitestek kötődését és a komplement aktiválást, lehetővé téve a perzisztenciát.',
                'Szöveti károsodás: A patológia alapja az obliteratív endarteritis (a kis erek gyulladása és elzáródása), amelyet perivaszkuláris plazmasejtes infiltráció kísér.',
                'Következmény: Az érelzáródás miatti ischaemia okozza a primer sánker fekélyesedését és a tercier stádiumban a gummák (nekrotikus granulómák) kialakulását.'
              ],
              virulence_factors: ['Fibronektin-kötő fehérjék', 'Hyalurionidáz', 'Antigén variáció', 'Outer membrane proteins']
            },
            clinical: {
              incubation: 'Primer: 9-90 nap (átlag 21 nap)',
              onset: 'Fázis-függő',
              symptoms: [
                { name: 'Primer: Chancre (Sánker)', description: 'A behatolás helyén (genitáliák, száj, végbél) kb. 3 héttel a fertőzés után kialakuló fájdalmatlan, kemény alapú, tiszta aljú fekély (ulcus durum). Regionális, fájdalmatlan nyirokcsomó-duzzanat kíséri. Kezelés nélkül is gyógyul, de a baktérium a szervezetben marad.', severity: 'moderate' },
                { name: 'Szekunder: Bőr- és Nyálkahártya tünetek', description: 'A hematogén szóródás jele (6-8 héttel a sánker után). Generalizált, nem viszkető, rézvörös kiütések (roseola syphilitica), amelyek jellegzetesen a tenyereket és talpakat is érintik. A hajlatokban lapos, nedvedző, erősen fertőző papulák (condyloma lata) jelenhetnek meg.', severity: 'moderate' },
                { name: 'Szekunder: Szisztémás tünetek', description: 'Láz, rossz közérzet, generalizált nyirokcsomó-duzzanat ("micropolyadenopathia"), foltos hajhullás ("moly-rágta" alopecia) és nyálkahártya fekélyek (mucous patches).', severity: 'mild' },
                { name: 'Tercier: Késői szövődmények', description: 'Évekkel-évtizedekkel később alakul ki. Gumma (bőr, csont, máj destruktív granulómái), kardiovaszkuláris szifilisz (aortitis, aorta aneurysma) és neuroszifilisz (tabes dorsalis, progresszív paralízis/demencia).', severity: 'severe' }
              ],
              physical_exam: [
                'Primer: fájdalmatlan genitalis/extragenitalis fekély + inguinalis lymphadenopathia',
                'Szekunder: generalizált nem viszkető kiütés (tenyér/talp!), mucous patches, alopecia',
                'Latens: tünetmentes',
                'Tercier: gumma (bőr, csont), szív- vagy idegrendszeri érintettség'
              ],
              complications: ['Neuroszifilisz', 'Kardiovaszkuláris szifilisz (aortitis)', 'Gumma', 'Congenitalis szifilisz', 'HIV koinfekció fokozott rizikó']
            },
            diagnostics: {
              laboratory: [
                { test: 'Non-treponema teszt (RPR/VDRL)', finding: 'Reaktív (titer)', interpretation: 'Szűrés, aktivitás követése, kezelés hatékonyság' },
                { test: 'Treponema-specifikus teszt (TPHA/FTA-ABS)', finding: 'Reaktív', interpretation: 'Megerősítés, életreszólóan pozitív marad' },
                { test: 'Reverz algoritmus', finding: 'EIA/CIA → RPR → TPHA', interpretation: 'Automatizált szűrés' }
              ],
              imaging: [
                { modality: 'MRI agy', finding: 'Neuroszifilisz: meningealis enhancement, infarktusok', significance: 'Neurológiai tünetek esetén' },
                { modality: 'Echo/CT mellkas', finding: 'Aorta dilatáció', significance: 'Kardiovaszkuláris szifilisz' }
              ],
              microbiology: [
                { test: 'Sötét látóteres mikroszkópia', finding: 'Élő spirochaeták primer léziókból', significance: 'Korai diagnózis, de ritkán elérhető' },
                { test: 'PCR', finding: 'T. pallidum DNS', significance: 'Érzékeny, de nem rutinszerű' },
                { test: 'Liquor analízis', finding: 'VDRL pozitív, pleocytosis, fehérje↑', significance: 'Neuroszifilisz diagnózis' }
              ]
            },
            differential: [
              { disease: 'Herpes genitalis', distinguishing: 'Fájdalmas, csoportos hólyagok' },
              { disease: 'Chancroid (H. ducreyi)', distinguishing: 'Fájdalmas fekélyek, gennyező nyirokcsomók' },
              { disease: 'Lymphogranuloma venereum', distinguishing: 'Fájdalmas bubó, Chlamydia trachomatis L1-3' },
              { disease: 'Gyógyszerkiütés', distinguishing: 'Gyógyszeranamnézis, tenyér/talp érintettség ritka' },
              { disease: 'Pityriasis rosea', distinguishing: 'Herald patch, karácsonyfa mintázat' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Benzylpenicillin G (Bicillin LA)', dose: '2.4 millió NE IM', duration: 'Egyszeri dózis', note: 'Korai szifilisz (primer, szekunder, korai latens <1év)' },
                  { drug: 'Penicillin allergia: Doxycyclin', dose: '2x100mg PO', duration: '14 nap', note: 'Alternatíva (compliance!)' }
                ],
                inpatient: [
                  { drug: 'Benzylpenicillin G', dose: '2.4 millió NE IM', duration: 'Heti 1x, 3 hét', note: 'Késői latens (>1év) vagy ismeretlen időtartamú' }
                ],
                icu: [
                  { drug: 'Kristályos Penicillin G', dose: '3-4 millió NE IV 4 óránként', duration: '10-14 nap', note: 'Neuroszifilisz!' }
                ]
              },
              targeted: 'Penicillin mindig első választás, nincs rezisztencia',
              supportive: ['Jarisch-Herxheimer reakció figyelmeztetés', 'HIV tesztelés', 'Partner értesítés és kezelés', 'Szerológiai követés (3, 6, 12, 24 hónap)'],
              prevention: ['Óvszerhasználat', 'Partner értesítés', 'Rendszeres szűrés rizikócsoportokban', 'Várandós nők szűrése']
            },
            guidelines: {
              diagnosis: [
                'Szűrés: RPR/VDRL (nem-treponema) vagy reverz algoritmus (EIA/CIA)',
                'Megerősítés: TPHA/FTA-ABS (treponema-specifikus) tesztekkel',
                'Neuroszifilisz: Liquor VDRL (specifikus, de nem érzékeny), pleocytosis, fehérje emelkedés'
              ],
              treatment_indications: [
                'Minden igazolt szifiliszes esetet kezelni kell a stádiumnak megfelelően',
                'Szexuális partnereket értesíteni és kezelni kell'
              ],
              first_line: [
                'Korai szifilisz (primer, szekunder, korai latens): Benzathin Penicillin G 2.4 millió NE IM egyszeri adag',
                'Késői latens vagy tercier szifilisz: Benzathin Penicillin G 2.4 millió NE IM heti 1x, 3 héten át',
                'Neuroszifilisz: Kristályos Penicillin G 18-24 millió NE/nap IV (3-4 millió NE 4 óránként) 10-14 napig'
              ],
              special_populations: [
                'Penicillin allergia: Doxycyclin 2x100mg PO 14 nap (korai) vagy 28 nap (késői). Terhességben deszenzitizálás és Penicillin adása kötelező!',
                'Terhesség: Minden terhest szűrni kell. A kezelés megegyezik a nem terhes felnőttekével.',
                'Jarisch-Herxheimer reakció: Lázas reakció a kezelés első 24 órájában, nem allergia. Tüneti kezelés.',
+               'Congenitalis szifilisz: Kristályos Penicillin G 100,000-150,000 NE/kg/nap IV (50,000 NE/kg/dózis 12 óránként az első 7 napban, majd 8 óránként) 10 napig. VAGY Procain Penicillin G 50,000 NE/kg/nap IM 10 napig.'
              ],
              monitoring: [
                'A kezelés sikerességét a nem-treponema tesztek (RPR/VDRL) titerének csökkenésével követjük (legalább négyszeres csökkenés 12 hónapon belül).'
              ]
            },
            prognosis: {
              mortality: 'Kezelt szifilisz: alacsony; Neuroszifilisz: irreverzibilis károsodás lehetséges',
              prognostic_scores: ['Nincs'],
              factors: 'Stádium, HIV koinfekció, kezelés időzítése'
            }
          },
          {
            id: 'hiv_aids',
            name: 'HIV fertőzés és AIDS',
            pathogen: { type: 'Vírus', name: '<i>Humán Immundeficiencia Vírus</i> (HIV-1, HIV-2)', gram: 'RNS retrovírus', shape: 'gömb' },
            epidemiology: {
              incidence: 'Világszerte ~38 millió élő fertőzött',
              risk_groups: ['MSM', 'IV droghasználók', 'Szexmunkások', 'Transzfúzió (fejlődő országok)', 'Partnerek'],
              seasonality: 'Nincs',
              transmission: 'Szexuális, parenterális (vér), vertikális (anya-gyermek)'
            },
            pathomechanism: {
              steps: [
                'Bejutás és Kötődés: A vírus gp120 felszíni fehérjéje kötődik a T-helper sejtek és makrofágok CD4 receptorához, valamint a CCR5 vagy CXCR4 koreceptorokhoz.',
                'Replikáció és Integráció: A sejtbe jutva a virális RNS a reverz transzkriptáz segítségével DNS-sé íródik át (ez a lépés hibás, ami rezisztenciához vezethet), majd az integráz enzim beépíti a gazdasejt DNS-ébe (provírus), ahol látens maradhat.',
                'Immunrendszer pusztulása: A fertőzött CD4+ T-sejtek elpusztulnak a vírusreplikáció (pirotózis), a citotoxikus T-sejtek támadása és a syncytium képződés miatt. A bél-asszociált limfoid szövet (GALT) korai károsodása krónikus szisztémás gyulladást tart fenn.',
                'Következmény: A CD4+ sejtek számának kritikus csökkenése (<200/µL) az immunrendszer összeomlásához és opportunista fertőzések/daganatok megjelenéséhez vezet (AIDS).'
              ],
              virulence_factors: ['gp120/gp41 (belépés)', 'Reverz transzkriptáz (magas mutációs ráta)', 'Nef, Tat, Rev (regulátorok)']
            },
            clinical: {
              incubation: '2-4 hét (akut retrovirális szindróma)',
              onset: 'Akut (ARS) vagy lappangó',
              symptoms: [
                { name: 'Akut retrovirális szindróma (ARS)', description: 'A fertőzés után 2-4 héttel jelentkező, mononukleózis-szerű tünetegyüttes: magas láz, torokfájás, nyirokcsomó-duzzanat, izomfájdalom és makulopapulózus kiütés. Magas vírusszám és átmeneti CD4 csökkenés jellemzi.', severity: 'moderate' },
                { name: 'Klinikai latencia', description: 'Tünetmentes vagy tünetszegény időszak, amely kezelés nélkül 8-10 évig tarthat. A vírus aktívan replikálódik a nyirokcsomókban. Perzisztáló generalizált lymphadenopathia (PGL) előfordulhat.', severity: 'mild' },
                { name: 'AIDS stádium', description: 'Amikor a CD4 szám 200/µL alá esik. Megjelennek az opportunista fertőzések (pl. Pneumocystis pneumonia, nyelőcső candidiasis, Toxoplasma encephalitis, CMV retinitis) és daganatok (Kaposi sarcoma, lymphoma).', severity: 'severe' }
              ],
              physical_exam: [
                'Generalizált lymphadenopathia (PGL)',
                'Oralis candidiasis (thrush)',
                'Hajas fejbőr seborrhoea',
                'Kaposi sarcoma (lila bőrelváltozások)'
              ],
              complications: ['Pneumocystis jirovecii pneumonia (PCP)', 'Toxoplasma encephalitis', 'Cryptococcus meningitis', 'CMV retinitis', 'Kaposi sarcoma', 'Lymphoma']
            },
            diagnostics: {
              laboratory: [
                { test: 'CD4 szám', finding: 'Csökkenő (<200/µL = AIDS)', interpretation: 'Immunstátusz' },
                { test: 'Vérkép', finding: 'Lymphopenia, thrombocytopenia', interpretation: 'Cytopenia' }
              ],
              microbiology: [
                { test: 'Szűrőteszt (4. generációs ELISA)', finding: 'Ag/Ab pozitív', significance: 'Ablakperiódus rövid (2-3 hét)' },
                { test: 'Megerősítő teszt (Western Blot / Immunoblot)', finding: 'Pozitív', significance: 'Diagnózis' },
                { test: 'HIV RNS PCR (Viral Load)', finding: 'Kópiaszám/ml', significance: 'Terápia monitorozás és akut fertőzés' }
              ]
            },
            differential: [
              { disease: 'Mononukleózis (EBV)', distinguishing: 'Heterofil antitest, atípusos lymphocyták' },
              { disease: 'Influenza', distinguishing: 'Szezonalitás, gyorsabb lefolyás' },
              { disease: 'Másodlagos szifilisz', distinguishing: 'Szerológia, tenyér/talp kiütés' }
            ],
            therapy: {
              guidelines: ['EACS Guidelines Version 12.0 (2023)'],
              empirical: {
                drug_classes: {
                  title: 'Antiretrovirális gyógyszercsoportok',
                  drugs: [
                    { drug: 'NRTI (Nukleozid/Nukleotid RT inhibitorok)', dose: '-', duration: '-', note: 'Pl. Tenofovir (TDF/TAF), Emtricitabin (FTC), Lamivudin (3TC), Abacavir (ABC)' },
                    { drug: 'INSTI (Integráz inhibitorok)', dose: '-', duration: '-', note: 'Pl. Bictegravir (BIC), Dolutegravir (DTG), Raltegravir (RAL)' },
                    { drug: 'NNRTI (Nem-nukleozid RT inhibitorok)', dose: '-', duration: '-', note: 'Pl. Doravirin (DOR), Rilpivirin (RPV), Efavirenz (EFV)' },
                    { drug: 'PI (Proteáz inhibitorok)', dose: '-', duration: '-', note: 'Pl. Darunavir (DRV), Atazanavir (ATV) - boosterrel (ritonavir/cobicistat)' }
                  ]
                },
                combinations: {
                  title: 'Javasolt kombinációk',
                  drugs: [
                    { drug: '2 NRTI + 1 INSTI', dose: '-', duration: '-', note: 'Standard első vonal (pl. TAF/FTC + Bictegravir)' },
                    { drug: '1 NRTI + 1 INSTI', dose: '-', duration: '-', note: 'Kettős terápia (pl. 3TC + Dolutegravir) - bizonyos feltételekkel' },
                    { drug: '2 NRTI + 1 NNRTI vagy 1 PI', dose: '-', duration: '-', note: 'Alternatívák' }
                  ]
                },
                regimens: {
                  title: 'Konkrét ajánlott rezsimek (EACS)',
                  drugs: [
                    { drug: 'Bictegravir / Tenofovir-alafenamid (TAF) / Emtricitabin (FTC)', dose: '1 tab (50/25/200mg) PO 1x', duration: 'Élethosszig', note: 'Preferált első vonal (STR). Nem igényel HLA tesztet.' },
                    { drug: 'Dolutegravir + Tenofovir (TDF/TAF) + Emtricitabin (FTC) / Lamivudin (3TC)', dose: 'Kombináció', duration: 'Élethosszig', note: 'Preferált első vonal.' },
                    { drug: 'Dolutegravir / Lamivudin (3TC)', dose: '1 tab (50/300mg) PO 1x', duration: 'Élethosszig', note: 'Kettős terápia (ha VL <500.000, nincs HBV, CD4 >200).' }
                  ]
                }
              },
              targeted: 'Azonnali ART indítás (Rapid initiation) javasolt. Cél: undetectable viral load (<50 cp/mL).',
              supportive: ['Opportunista profilaxis (PCP: TMP/SMX ha CD4<200; Toxoplasma: TMP/SMX ha CD4<100 és IgG+)', 'Védőoltások (Pneumococcus, Influenza, HBV, HAV, HPV, Meningococcus, VZV - élő oltás kontraindikált ha CD4<200)'],
              prevention: ['PrEP (TDF/FTC vagy TAF/FTC)', 'PEP (ART 28 napig, <48 órán belül kezdve)', 'U=U (Undetectable = Untransmittable)']
            },
            guidelines: {
              diagnosis: [
                'Szűrés: 4. generációs Ag/Ab kombinált teszt',
                'Megerősítés: Western Blot vagy Immunoblot',
                'Baseline: CD4, Viral Load, HLA-B*5701 (ABC adása előtt), rezisztencia vizsgálat (ha elérhető)'
              ],
              treatment_indications: [
                'Treat All: Minden HIV pozitív személynek javasolt az ART, függetlenül a CD4 számtól.',
                'Sürgősségi ART: Terhesség, akut opportunista fertőzés (kivéve TB meningitis/Cryptococcus meningitis - ott halasztás), akut HIV szindróma.'
              ],
              first_line: [
                '1. Bictegravir/TAF/FTC (STR)',
                '2. Dolutegravir + TAF/FTC vagy TDF/FTC vagy ABC/3TC (HLA-B*5701 neg)',
                '3. Dolutegravir/3TC (2-drug regimen) - feltételekkel'
              ],
              monitoring: [
                'Viral Load: 1, 3, 6 hónapnál, majd 6 havonta (ha stabil)',
                'CD4: Kezdetben 3-6 havonta, stabil esetben ritkábban'
              ],
              special_populations: [
                'Terhesség: DTG alapú rezsimek preferáltak',
                'TB koinfekció: ART indítása 2-8 héten belül (CD4 függő), Rifampicin interakciók (DTG dózis emelés!)'
              ]
            },
            prognosis: {
              mortality: 'Kezeléssel közel normál élettartam; Kezeletlen AIDS: halálos',
              prognostic_scores: ['CD4 szám', 'Viral load'],
              factors: 'Adherencia, korai diagnózis'
            }
          },
          {
            id: 'gonorrhea',
            name: 'Gonorrhea (Kankó)',
            pathogen: { type: 'Baktérium', name: '<i>Neisseria gonorrhoeae</i>', gram: 'Gram-negatív', shape: 'diplococcus (intracelluláris)' },
            epidemiology: {
              incidence: 'Gyakori, növekvő rezisztencia',
              risk_groups: ['Fiatal felnőttek', 'MSM', 'Új szexuális partner'],
              seasonality: 'Nincs',
              transmission: 'Szexuális, perinatális'
            },
            pathomechanism: {
              steps: [
                'Adhézió: A baktériumok a pili segítségével tapadnak a nyálkahártya hámsejtjeihez (urethra, cervix, rectum, pharynx).',
                'Invázió: Behatolnak a sejtekbe és a subepithelialis térbe.',
                'Gyulladás: A LOS (lipooligoszacharid) és más virulenciafaktorok erős neutrofil választ váltanak ki (gennyes váladék).'
              ],
              virulence_factors: ['Pili', 'Opa proteinek', 'IgA proteáz', 'LOS']
            },
            clinical: {
              incubation: '2-7 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Férfiak', description: 'Urethritis: bőséges, sárgás-zöldes gennyes folyás, dysuria. (90% tünetes)', severity: 'moderate' },
                { name: 'Nők', description: 'Cervicitis: gyakran tünetszegény vagy tünetmentes (50%). Hüvelyi folyás, dysuria, alhasi fájdalom.', severity: 'mild' },
                { name: 'Extragenitális', description: 'Pharyngitis (gyakran tünetmentes), Proctitis (fájdalom, folyás), Conjunctivitis (újszülöttek).', severity: 'moderate' }
              ],
              physical_exam: ['Gennyes urethralis/cervicalis váladék', 'Bartholin mirigy tályog', 'Láz (DGI esetén)'],
              complications: ['Kismedencei gyulladás (PID)', 'Meddőség', 'Epididymitis', 'Disszeminált Gonococcus Infekció (DGI): arthritis, dermatitis']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Normál', interpretation: 'Lokális fertőzésnél' }],
              microbiology: [
                { test: 'NAAT (PCR)', finding: 'Pozitív', significance: 'Gold standard (vizelet, törlet)' },
                { test: 'Tenyésztés', finding: 'N. gonorrhoeae', significance: 'Rezisztencia vizsgálathoz KÖTELEZŐ terápia kudarc esetén!' },
                { test: 'Mikroszkópia', finding: 'Intracelluláris Gram-negatív diplococcusok', significance: 'Férfiaknál diagnosztikus, nőknél nem elég érzékeny' }
              ]
            },
            therapy: {
              guidelines: ['IUSTI 2020 / CDC 2021'],
              empirical: {
                outpatient: [
                  { drug: 'Ceftriaxon', dose: '1g IM egyszeri', duration: 'Stat', note: 'Első választás. Dózis emelve a rezisztencia miatt (korábban 250-500mg volt).' },
                  { drug: 'Alternatíva (Rezisztencia/Allergia)', dose: '-', duration: '-', note: 'Gentamicin 240mg IM + Azithromycin 2g PO. Cefixim 800mg PO (csak ha nincs más, rezisztencia veszély!).' }
                ]
              },
              targeted: 'Tenyésztés alapján. Növekvő Ceftriaxon rezisztencia (főleg Ázsiában) aggodalomra ad okot. Kettős terápia (pl. +Azithromycin) rutinszerűen már nem mindig ajánlott, csak indokolt esetben.',
              supportive: ['Partner kezelése (ping-pong effektus)', 'Szexuális absztinencia 7 napig'],
              prevention: ['Óvszer', 'Szűrés']
            },
            prognosis: { mortality: 'Nagyon alacsony', prognostic_scores: [], factors: 'Szövődmények (PID, DGI)' }
          },
          {
            id: 'chlamydia',
            name: 'Chlamydia fertőzés',
            pathogen: { type: 'Baktérium', name: '<i>Chlamydia trachomatis</i> (D-K szerotípusok)', gram: 'Gram-negatív (intracelluláris)', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'Leggyakoribb bakteriális STD világszerte',
              risk_groups: ['Fiatal szexuálisan aktív felnőttek (<25 év)', 'Új/több partner'],
              seasonality: 'Nincs',
              transmission: 'Szexuális, perinatális'
            },
            pathomechanism: {
              steps: [
                'A fertőző elemi testek (EB) bejutnak a hengerhámsejtekbe (cervix, urethra, rectum).',
                'A sejten belül retikuláris testekké (RB) alakulnak és szaporodnak.',
                'A sejtek lízise után az új EB-k kiszabadulnak és további sejteket fertőznek.',
                'A krónikus gyulladás hegesedést okoz, ami a szövődmények (pl. meddőség) alapja.'
              ],
              virulence_factors: ['Intracelluláris túlélés', 'Hősokk proteinek (HSP)']
            },
            clinical: {
              incubation: '1-3 hét',
              onset: 'Lassú/Tünetmentes',
              symptoms: [
                { name: 'Tünetmentes ("Csendes")', description: 'A nők 70-80%-a és a férfiak 50%-a tünetmentes, ami elősegíti a terjedést és a késői szövődményeket.', severity: 'mild' },
                { name: 'Nők', description: 'Cervicitis: mucopurulens folyás, kontakt vérzés, dysuria. Alhasi fájdalom (PID jele lehet).', severity: 'moderate' },
                { name: 'Férfiak', description: 'Urethritis: vizelési csípés, híg/üveges folyás (kevésbé gennyes mint a gonorrhoea).', severity: 'moderate' }
              ],
              physical_exam: ['Mucopurulens cervicitis', 'Adnexalis érzékenység (PID)', 'Urethralis folyás'],
              complications: ['Kismedencei gyulladás (PID)', 'Meddőség (tubaris eredetű)', 'Méhen kívüli terhesség', 'Fitz-Hugh-Curtis szindróma (perihepatitis)', 'Reaktív arthritis (Reiter-kór)', 'Újszülöttkori conjunctivitis/pneumonia']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Normál', interpretation: 'Lokális fertőzés' }],
              microbiology: [
                { test: 'NAAT (PCR)', finding: 'Pozitív', significance: 'Gold standard (vizelet, hüvely/cervix/urethra törlet)' },
                { test: 'Tenyésztés', finding: 'Nehéz', significance: 'Csak speciális laborban (sejttenyészet)' }
              ]
            },
            therapy: {
              guidelines: ['CDC 2021 / IUSTI'],
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '7 nap', note: 'Első választás (jobb a rectalis fertőzésre is).' },
                  { drug: 'Azithromycin', dose: '1g PO', duration: 'Egyszeri', note: 'Alternatíva (pl. terhességben, vagy ha a compliance kérdéses).' }
                ]
              },
              targeted: 'Doxycyclin preferált. Terhességben Azithromycin. Partner kezelése kötelező!',
              supportive: ['Szexuális absztinencia 7 napig', 'Partner értesítése'],
              prevention: ['Óvszer', 'Éves szűrés <25 éves nőknek']
            },
            prognosis: { mortality: 'Nagyon alacsony', prognostic_scores: [], factors: 'Meddőség kockázata ismétlődő fertőzéseknél nő' }
          },
          {
            id: 'genital_herpes',
            name: 'Herpes genitalis',
            pathogen: { type: 'Vírus', name: '<i>Herpes Simplex Vírus</i> (főleg HSV-2, ritkábban HSV-1)', gram: 'dsDNS', shape: 'gömb' },
            epidemiology: {
              incidence: 'Gyakori, élethosszig tartó fertőzés',
              risk_groups: ['Szexuálisan aktív felnőttek', 'Több partner'],
              seasonality: 'Nincs',
              transmission: 'Szexuális kontaktus (tünetmentes ürítés is!)'
            },
            pathomechanism: {
              steps: [
                'A vírus a nyálkahártya vagy bőr mikrosérülésein keresztül jut be.',
                'A hámsejtekben szaporodik (lítikus fertőzés), majd az érzőidegek mentén a szakrális ganglionokba vándorol.',
                'Itt látens fertőzést alakít ki. Reaktivációkor (stressz, immunszuppresszió) a vírus visszavándorol a bőrre és tüneteket okoz.'
              ],
              virulence_factors: ['Latencia', 'Immunelkerülés']
            },
            clinical: {
              incubation: '2-12 nap',
              onset: 'Hirtelen (primer) vagy prodroma (rekurrens)',
              symptoms: [
                { name: 'Primer fertőzés', description: 'Súlyos tünetek: kiterjedt, fájdalmas hólyagok és fekélyek a genitáliákon. Gyakran kíséri láz, rossz közérzet, fájdalmas inguinalis nyirokcsomó-duzzanat és dysuria. Gyógyulás: 2-4 hét.', severity: 'severe' },
                { name: 'Rekurrens fertőzés', description: 'Enyhébb lefolyás. Gyakran prodromális tünetek (égő, bizsergő érzés) előzik meg. Kevesebb lézió, nincs szisztémás tünet. Gyógyulás: 5-10 nap.', severity: 'mild' }
              ],
              physical_exam: ['Csoportos vezikulák/fekélyek', 'Inguinalis lymphadenopathia (primer)', 'Cervicitis/Proctitis'],
              complications: ['Asepticus meningitis', 'Vizeletretenció (autonóm diszfunkció)', 'Neonatalis herpes (terhességben!)', 'HIV transzmisszió fokozott kockázata']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'HSV DNS', significance: 'Gold standard (legérzékenyebb)' },
                { test: 'Tenyésztés', finding: 'HSV', significance: 'Csak friss hólyagból' },
                { test: 'Típus-specifikus szerológia', finding: 'IgG', significance: 'HSV-1 vs HSV-2 elkülönítés (nem akut diagnózisra)' }
              ]
            },
            therapy: {
              guidelines: ['IUSTI / CDC'],
              empirical: {
                outpatient: [
                  { drug: 'Acyclovir', dose: '3x400mg PO', duration: '7-10 nap (primer), 5 nap (rekurrens)', note: 'Vagy 5x200mg.' },
                  { drug: 'Valacyclovir', dose: '2x500-1000mg PO', duration: '7-10 nap (primer), 3 nap (rekurrens)', note: 'Jobb biohasznosulás.' }
                ]
              },
              targeted: 'Szuppresszív terápia (napi Acyclovir/Valacyclovir) javasolt gyakori kiújulás (>6/év) esetén.',
              supportive: ['Fájdalomcsillapítás', 'Sós ülőfürdő'],
              prevention: ['Óvszer (nem nyújt teljes védelmet)', 'Absztinencia prodroma/tünetek alatt', 'Szuppresszív terápia (csökkenti az átvitelt)']
            },
            prognosis: { mortality: 'Nagyon alacsony', prognostic_scores: [], factors: 'Gyakori kiújulás pszichés teher' }
          },
          {
            id: 'trichomoniasis',
            name: 'Trichomoniasis',
            pathogen: { type: 'Protozoon', name: '<i>Trichomonas vaginalis</i>', gram: '-', shape: 'körte alakú, ostoros' },
            epidemiology: {
              incidence: 'Leggyakoribb nem virális STD',
              risk_groups: ['Szexuálisan aktív nők', 'Több partner'],
              seasonality: 'Nincs',
              transmission: 'Szexuális kontaktus'
            },
            pathomechanism: {
              steps: [
                'A protozoon a hüvely és a húgycső laphámsejtjeihez tapad.',
                'Direkt citotoxikus hatással és gyulladásos válasz kiváltásával károsítja a hámot.',
                'Megváltoztatja a hüvelyflórát (pH emelkedés).'
              ],
              virulence_factors: ['Adhezinek', 'Cisztein-proteázok']
            },
            clinical: {
              incubation: '4-28 nap',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Nők', description: 'Bőséges, habos, zöldes-sárgás, bűzös folyás. Vulvovaginalis viszketés, dysuria, dyspareunia. "Eper-cervix" (colpitis macularis) a vizsgálatkor.', severity: 'moderate' },
                { name: 'Férfiak', description: 'Gyakran tünetmentes. Okozhat urethritist (folyás, dysuria), prostatitist.', severity: 'mild' }
              ],
              physical_exam: ['Habos folyás', 'Eper-cervix (pontszerű bevérzések)', 'pH > 4.5'],
              complications: ['Koraszülés', 'Alacsony születési súly', 'HIV transzmisszió fokozott kockázata', 'PID']
            },
            diagnostics: {
              laboratory: [{ test: 'Hüvely pH', finding: '> 4.5', interpretation: 'Bakteriális vaginosis vagy Trichomonas' }],
              microbiology: [
                { test: 'Nedves kenet (Wet mount)', finding: 'Mozgó ostoros protozoonok', significance: 'Gyors, de alacsony szenzitivitás (60-70%)' },
                { test: 'NAAT (PCR)', finding: 'Pozitív', significance: 'Gold standard (legérzékenyebb)' },
                { test: 'Tenyésztés', finding: 'Pozitív', significance: 'Ha NAAT nem elérhető' }
              ]
            },
            therapy: {
              guidelines: ['CDC 2021 / IUSTI'],
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol', dose: '2g PO egyszeri', duration: 'Egyszeri', note: 'Első választás. Partner kezelése is!' },
                  { drug: 'Tinidazol', dose: '2g PO egyszeri', duration: 'Egyszeri', note: 'Alternatíva' },
                  { drug: 'Metronidazol', dose: '2x500mg PO', duration: '7 nap', note: 'Alternatíva (pl. HIV pozitívaknál)' }
                ]
              },
              targeted: 'Metronidazol vagy Tinidazol. Alkohol fogyasztása tilos a kezelés alatt (diszulfirám hatás)!',
              supportive: ['Szexuális absztinencia a tünetek megszűnéséig és a partner kezeléséig'],
              prevention: ['Óvszer', 'Partner kezelése']
            },
            prognosis: { mortality: 'Nulla', prognostic_scores: [], factors: 'Reinfekció gyakori ha a partner kezeletlen' }
          }
        ]
    } // End of sexually_transmitted
});