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
                outpatient: [
                  { drug: 'Bictegravir / Tenofovir-alafenamid (TAF) / Emtricitabin (FTC)', dose: '1 tab (50/25/200mg) PO 1x', duration: 'Élethosszig', note: 'Preferált első vonal (STR). Nem igényel HLA tesztet.' },
                  { drug: 'Dolutegravir + Tenofovir (TDF/TAF) + Emtricitabin (FTC) / Lamivudin (3TC)', dose: 'Kombináció', duration: 'Élethosszig', note: 'Preferált első vonal.' },
                  { drug: 'Dolutegravir / Lamivudin (3TC)', dose: '1 tab (50/300mg) PO 1x', duration: 'Élethosszig', note: 'Kettős terápia (ha VL <500.000, nincs HBV, CD4 >200).' }
                ]
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
          }
        ]
    } // End of sexually_transmitted
});