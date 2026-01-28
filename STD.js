Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Szexuálisan terjedő fertőzések',
        icon: '🔬',
        color: '#7c3aed',
        diseases: [
          {
            id: 'syphilis',
            name: 'Szifilisz',
            pathogen: { type: 'Spirochaeta', name: 'Treponema pallidum', gram: 'Gram-negatív (nem festődik)', shape: 'spirális' },
            epidemiology: {
              incidence: 'Növekvő incidencia világszerte, MSM populációban magas',
              risk_groups: ['MSM (men who have sex with men)', 'HIV pozitívak', 'Szexmunkások', 'Több szexuális partner', 'Droghasználók'],
              seasonality: 'Nincs',
              transmission: 'Direkt kontakt nyálkahártyával/bőrrel, vertikális (congenitalis)'
            },
            pathomechanism: {
              steps: [
                'T. pallidum bejut a nyálkahártyán/bőrön keresztül',
                'Lokális szaporodás → primer affekció (chancre)',
                'Haematogen szórás (primer viraemia)',
                'Másodlagos szifilisz: disszeminált betegség',
                'Latens fázis: immunválasz kontroll alatt tartja',
                'Tercier: krónikus granulomás gyulladás (gumma) vagy vaszkuláris/neurológiai'
              ],
              virulence_factors: ['Fibronektin-kötő fehérjék', 'Hyalurionidáz', 'Antigén variáció', 'Outer membrane proteins']
            },
            clinical: {
              incubation: 'Primer: 9-90 nap (átlag 21 nap)',
              onset: 'Fázis-függő',
              symptoms: [
                { name: 'Primer: Chancre', description: 'Fájdalmatlan, kemény szélű fekély (60-80%-ban egyetlen)', severity: 'moderate' },
                { name: 'Szekunder: Kiütés', description: 'Generalizált, nem viszkető (75-100%), tenyér/talp érintettség (60-80%)', severity: 'moderate' },
                { name: 'Szekunder: Lymphadenopathia', description: 'Generalizált, fájdalmatlan (50-85%)', severity: 'mild' },
                { name: 'Szekunder: Condyloma lata', description: 'Lapos, nedvedző papulák (10-20%)', severity: 'moderate' },
                { name: 'Tercier: Gumma', description: 'Granulomás léziók (15% kezeletleneknél)', severity: 'severe' },
                { name: 'Neuroszifilisz', description: 'Bármely stádiumban! (Tünetes: 5-10%)', severity: 'severe' }
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
                  { drug: 'Aqueous Penicillin G', dose: '3-4 millió NE IV 4 óránként', duration: '10-14 nap', note: 'Neuroszifilisz!' }
                ]
              },
              targeted: 'Penicillin mindig első választás, nincs rezisztencia',
              supportive: ['Jarisch-Herxheimer reakció figyelmeztetés', 'HIV tesztelés', 'Partner értesítés és kezelés', 'Szerológiai követés (3, 6, 12, 24 hónap)'],
              prevention: ['Óvszerhasználat', 'Partner értesítés', 'Rendszeres szűrés rizikócsoportokban', 'Várandós nők szűrése']
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
            pathogen: { type: 'Vírus', name: 'Humán Immundeficiencia Vírus (HIV-1, HIV-2)', gram: 'RNS retrovírus', shape: 'gömb' },
            epidemiology: {
              incidence: 'Világszerte ~38 millió élő fertőzött',
              risk_groups: ['MSM', 'IV droghasználók', 'Szexmunkások', 'Transzfúzió (fejlődő országok)', 'Partnerek'],
              seasonality: 'Nincs',
              transmission: 'Szexuális, parenterális (vér), vertikális (anya-gyermek)'
            },
            pathomechanism: {
              steps: [
                'Vírus kötődése CD4 receptorhoz és koreceptorokhoz (CCR5/CXCR4)',
                'Reverz transzkripció (RNS -> DNS)',
                'Integráció a gazdasejt genomjába (provírus)',
                'CD4+ T-sejtek progresszív pusztulása',
                'Immunrendszer kimerülése -> Opportunista fertőzések (AIDS)'
              ],
              virulence_factors: ['gp120/gp41 (belépés)', 'Reverz transzkriptáz (magas mutációs ráta)', 'Nef, Tat, Rev (regulátorok)']
            },
            clinical: {
              incubation: '2-4 hét (akut retrovirális szindróma)',
              onset: 'Akut (ARS) vagy lappangó',
              symptoms: [
                { name: 'Akut (ARS): Láz', description: 'Leggyakoribb tünet (>80-90%)', severity: 'moderate' },
                { name: 'Akut (ARS): Fáradtság', description: 'Kifejezett (>70-90%)', severity: 'mild' },
                { name: 'Akut (ARS): Kiütés', description: 'Maculopapularis (40-80%)', severity: 'moderate' },
                { name: 'Akut (ARS): Pharyngitis', description: 'Torokfájás (50-70%)', severity: 'mild' },
                { name: 'Latens fázis', description: 'Tünetmentes vagy PGL (évekig)', severity: 'mild' },
                { name: 'AIDS', description: 'Opportunista fertőzések (CD4 <200)', severity: 'severe' }
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
                  { drug: 'Bictegravir / TAF / Emtricitabine', dose: '1 tab (50/25/200mg) PO 1x', duration: 'Élethosszig', note: 'Preferált első vonal (STR). Nem igényel HLA tesztet.' },
                  { drug: 'Dolutegravir + TDF/TAF + FTC/3TC', dose: 'Kombináció', duration: 'Élethosszig', note: 'Preferált első vonal.' },
                  { drug: 'Dolutegravir / Lamivudine', dose: '1 tab (50/300mg) PO 1x', duration: 'Élethosszig', note: 'Kettős terápia (ha VL <500.000, nincs HBV, CD4 >200).' }
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
}, // End of sexually_transmitted
});