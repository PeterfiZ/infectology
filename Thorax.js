Object.assign(window.diseases, {
      bacterial_respiratory: {
        name: 'Bakteriális légúti fertőzések',
        icon: '🫁',
        color: '#dc2626',
        diseases: [
          {
            id: 'bacterial_pneumonia',
            name: 'Bakteriális pneumonia',
            pathogen: { type: 'Baktérium', name: 'Streptococcus pneumoniae', gram: 'Gram-pozitív', shape: 'diplococcus' },
            epidemiology: {
              incidence: 'Leggyakoribb közösségben szerzett pneumonia (CAP) kórokozó (30-40%)',
              risk_groups: ['65 év felettiek', 'Krónikus betegek (COPD, szívelégtelenség, diabetes)', 'Immunszupprimáltak', 'Splenectomizáltak', 'Alkoholisták', 'Dohányosok'],
              seasonality: 'Téli-tavaszi csúcs, gyakran influenza szuperinfekció',
              transmission: 'Cseppfertőzés, endogén aktiváció'
            },
            pathomechanism: {
              steps: [
                'Kolonizáció: A nasofarynxban élő S. pneumoniae aspirációval jut az alsó légutakba',
                'Adherencia: Pneumococcus surface protein A (PspA) és choline-binding proteins kötődnek az epithelsejtekhez',
                'Tok poliszacharid: A kapszula gátolja a fagocitózist és komplement aktivációt',
                'Pneumolysin: Porin formáló toxin → sejtkárosodás, gyulladáskeltés',
                'Konszolodáció: Alveolusok megtelnek gyulladásos exudátummal (vörösvérsejtek, fibrin, neutrophilek)'
              ],
              virulence_factors: ['Kapszula poliszacharid (93 szerotípus)', 'Pneumolysin', 'Autolysin (LytA)', 'Neuraminidáz', 'IgA1 proteáz']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Hirtelen, drámai kezdet',
              symptoms: [
                { name: 'Magas láz', description: '39-41°C, hidegrázással', severity: 'severe' },
                { name: 'Produktív köhögés', description: 'Rozsdabarna ("kávéaljszerű") köpet', severity: 'severe' },
                { name: 'Pleuralis mellkasi fájdalom', description: 'Éles, belégzésre fokozódó', severity: 'moderate' },
                { name: 'Dyspnoe', description: 'Légzésszám > 20/perc', severity: 'moderate' },
                { name: 'Herpes labialis', description: 'Jellegzetes k��sérő tünet', severity: 'mild' }
              ],
              physical_exam: [
                'Tachypnoe, tachycardia',
                'Rekesz feletti tompa kopogtatási hang',
                'Bronchialis légzés, crepitatio',
                'Fokozott bronchophonia és pectoralfremitus',
                'Cyanosis súlyos esetben'
              ],
              complications: ['Empyema', 'Tüdőtályog', 'Meningitis', 'Szepszis/septicus shock', 'ARDS', 'Pericarditis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (15-30 G/L), balra tolt', interpretation: 'Bakteriális fertőzésre jellemző' },
                { test: 'CRP', finding: 'Jelentősen emelkedett (>100 mg/L)', interpretation: 'Aktív gyulladás markere' },
                { test: 'PCT', finding: '>0.5 ng/mL', interpretation: 'Bakteriális szepszis gyanúja' },
                { test: 'Artériás vérgáz', finding: 'Hypoxaemia, esetleg hypocapnia', interpretation: 'Légzési elégtelenség' },
                { test: 'Hemokultúra', finding: '20-30%-ban pozitív', interpretation: 'Kórokozó azonosítás' }
              ],
              imaging: [
                { modality: 'Mellkas rtg PA+oldalfelvétel', finding: 'Lobaris/szegmentális konszolidáció, légtölcsér (air bronchogram)', significance: 'Típusos megjelenés' },
                { modality: 'CT mellkas', finding: 'Részletes parenchyma értékelés', significance: 'Komplikációk kizárása' }
              ],
              microbiology: [
                { test: 'Köpet Gram-festés', finding: 'Gram+ lándzsa alakú diplococcusok, >25 neutrofil/látótér', significance: 'Gyors orientáló vizsgálat' },
                { test: 'Köpet tenyésztés', finding: 'S. pneumoniae izolálás', significance: 'Antibiotikum érzékenység' },
                { test: 'Vizelet antigén teszt', finding: 'Pneumococcus poliszacharid kimutatás', significance: 'Gyors, specifikus (>90%)' },
                { test: 'PCR', finding: 'lytA gén kimutatás', significance: 'Legérzékenyebb módszer' }
              ]
            },
            differential: [
              { disease: 'Legionella pneumonia', distinguishing: 'Hiponatrémia, GI tünetek, atípusos rtg kép' },
              { disease: 'Klebsiella pneumonia', distinguishing: 'Alkoholisták, currant jelly köpet, felső lebeny' },
              { disease: 'Mycoplasma pneumonia', distinguishing: 'Fiatalok, lassú kezdet, atípusos tünetek' },
              { disease: 'Tüdőembólia', distinguishing: 'Rizikófaktorok, D-dimer, CTPA' },
              { disease: 'Szívelégtelenség', distinguishing: 'Kardiális anamnézis, BNP, kétoldali infiltrátum' }
            ],
            therapy: {
              guidelines: ['ATS/IDSA 2019 CAP Guidelines', 'ERS/ESICM/ESCMID/ALAT 2017 HAP/VAP Guidelines', 'Magyar Infektológiai és Klinikai Mikrobiológiai Társaság Irányelvei'],
              empirical: {
                cap_outpatient: {
                    title: 'CAP - Otthon kezelhető',
                    drugs: [
                        { drug: 'Amoxicillin', dose: '3x1g PO', duration: '5-7 nap', note: 'Első választás, ha nincs komorbiditás.' },
                        { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '5-7 nap', note: 'Alternatíva, vagy Amoxicillin-allergia esetén.' },
                        { drug: 'Amoxicillin/klavulánsav', dose: '2x1g PO', duration: '5-7 nap', note: 'Komorbiditás (krónikus szív-, tüdő-, máj-, vesebetegség, diabetes, alkoholizmus, malignitás, asplenia) esetén.' }
                    ]
                },
                cap_inpatient: {
                    title: 'CAP - Hospitalizációt igénylő (nem ITO)',
                    drugs: [
                        { drug: 'Ceftriaxon IV + Azithromycin IV/PO', dose: '1x2g + 1x500mg', duration: '7-10 nap', note: 'Standard kombináció.' },
                        { drug: 'Levofloxacin vagy Moxifloxacin IV', dose: '1x750mg / 1x400mg', duration: '7-10 nap', note: 'Monoterápia, ha béta-laktám allergia van.' }
                    ]
                },
                cap_icu: {
                    title: 'CAP - Intenzív osztályos kezelést igénylő',
                    drugs: [
                        { drug: 'Ceftriaxon IV + Azithromycin IV', dose: '1x2g + 1x500mg', duration: '10-14 nap', note: 'Standard.' },
                        { drug: 'MRSA gyanú esetén', dose: '+ Vancomycin vagy Linezolid', duration: '', note: 'Pl. influenza utáni pneumonia, kavitáció, nozokomiális anamnézis.' },
                        { drug: 'Pseudomonas gyanú esetén', dose: 'Piperacillin/tazobactam vagy Cefepim vagy Meropenem', duration: '', note: 'Pl. bronchiectasia, korábbi Pseudomonas izolátum.' }
                    ]
                },
                hap_early: {
                    title: 'Nozokomiális pneumonia - Korai (<5 nap)',
                    drugs: [
                        { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '7 nap', note: 'Ha nincs MDR rizikó.' },
                        { drug: 'Levofloxacin vagy Moxifloxacin', dose: 'IV', duration: '7 nap', note: 'Alternatíva.' }
                    ]
                },
                hap_late_vap: {
                    title: 'Nozokomiális (késői, >5 nap) / Lélegeztetési (VAP) pneumonia',
                    drugs: [
                        { drug: 'Antipseudomonas béta-laktám', dose: 'pl. Piperacillin/tazobactam, Cefepim, Meropenem', duration: '7 nap', note: '1. komponens (Gram-negatív fedezet).' },
                        { drug: '+ Antipseudomonas fluorokinolon vagy aminoglikozid', dose: 'pl. Ciprofloxacin, Amikacin', duration: '7 nap', note: '2. komponens (dupla G- fedezet, ha szükséges).' },
                        { drug: '+ MRSA fedezet', dose: 'Vancomycin vagy Linezolid', duration: '7 nap', note: '3. komponens (ha MRSA rizikó >10-20%).' }
                    ]
                }
              },
              targeted: 'Penicillin érzékeny: Penicillin G 4x4 millió NE IV; Rezisztens: Ceftriaxon vagy Vancomycin',
              supportive: ['O2 terápia (SpO2 >92%)', 'Folyadékpótlás', 'Lázcsillapítás', 'Mellkasdrainage empyema esetén'],
              prevention: ['PPSV23 (23-valens poliszacharid)', 'PCV13/15/20 (konjugált)', 'Influenza oltás']
            },
            prognosis: {
              mortality: 'CAP: 5-15%, ICU: 20-50%',
              prognostic_scores: ['CURB-65', 'PSI/PORT score'],
              factors: 'Életkor, komorbiditás, bakteremia, multilobaris érintettség'
            },
            gallery: [
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=RTG',
                caption: 'Jobb alsó lebeny konszolidációja mellkas röntgenen.',
                type: 'Röntgen'
              },
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=Gram',
                caption: 'Gram-pozitív, lándzsa alakú diplococcusok köpetkenetben.',
                type: 'Mikroszkópia'
              }
            ]
          },
          {
            id: 'tuberculosis',
            name: 'Tüdő tuberkulózis',
            pathogen: { type: 'Mycobacterium', name: 'Mycobacterium tuberculosis', gram: 'Saválló (Ziehl-Neelsen+)', shape: 'pálca' },
            epidemiology: {
              incidence: 'Világszerte ~10 millió új eset/év, Magyarországon ~500 eset/év',
              risk_groups: ['HIV pozitívak (20-30x rizikó)', 'Diabeteszes betegek', 'Immunszupprimáltak', 'Szociálisan hátrányos helyzetűek', 'Egészségügyi dolgozók', 'Bevándorlók endémiás területekről'],
              seasonality: 'Nincs szezonalitás',
              transmission: 'Cseppfertőzés (< 5 μm aeroszol), zárt térben 8+ óra expozíció'
            },
            pathomechanism: {
              steps: [
                'Inhaláció: Bacillus eléri az alveolusokat',
                'Fagocitózis: Alveolaris macrophagok felveszik, de nem képesek elpusztítani',
                'Intracelluláris szaporodás: 2-12 hét alatt primer komplex (Ghon-góc + hilusi nyirokcsomó)',
                'Granuloma képződés: T-sejt mediált immunválasz → epiteloid sejtek, Langhans óriássejtek',
                'Latens fertőzés: Granulomák betokolják a bacillusokat (90%)',
                'Reaktiváció: Immunszuppresszió → kazifikáló nekrózis → caverna → köhögéssel terjed'
              ],
              virulence_factors: ['Cord factor (trehalóz-dimikolát)', 'Mycolic acid (sejtfal)', 'Lipoarabinomannan', 'ESAT-6 és CFP-10 szekretált antigének']
            },
            clinical: {
              incubation: 'Primer: 2-12 hét; Reaktiváció: évek-évtizedek',
              onset: 'Lassú, alattomos',
              symptoms: [
                { name: 'Krónikus köhögés', description: '>3 hét, kezdetben száraz, később produktív', severity: 'severe' },
                { name: 'Haemoptysis', description: 'Véres köpet cavernából', severity: 'severe' },
                { name: 'Éjszakai izzadás', description: 'Profúz, ágynemű átnedvesedik', severity: 'moderate' },
                { name: 'Fogyás', description: '>10% testsúly 6 hónap alatt', severity: 'moderate' },
                { name: 'Subfebrilitás', description: 'Délutáni-esti láz', severity: 'mild' },
                { name: 'Fáradékonyság, étvágytalanság', description: 'Általános tünetek', severity: 'mild' }
              ],
              physical_exam: [
                'Cachexia',
                'Felső lebenyek felett crepitatio/bronchialis légzés',
                'Csökkent légzési hang caverna felett',
                'Pleuralis dörzszörej',
                'Lymphadenopathia (miliaris/extrapulmonalis)'
              ],
              complications: ['Miliaris TB', 'TB meningitis', 'Pleuritis', 'Pericarditis', 'Spontán pneumothorax', 'Haemoptoe', 'Amyloidosis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normocytás anémia, lymphopenia', interpretation: 'Krónikus betegség jelei' },
                { test: 'CRP/We', finding: 'Mérsékelten emelkedett', interpretation: 'Nem specifikus' },
                { test: 'Máj/vesefunkció', finding: 'Baseline kezelés előtt', interpretation: 'Gyógyszertoxicitás monitorozás' },
                { test: 'HIV szerológia', finding: 'Kötelező', interpretation: 'Koinfekció kizárása' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Felső lebeny infiltrátum, caverna, fibrotikus hegesedés, meszesedés', significance: 'Screening és követés' },
                { modality: 'CT mellkas', finding: 'Tree-in-bud jel, cavernák, miliaris pattern', significance: 'Érzékenyebb, extrapulmonalis' }
              ],
              microbiology: [
                { test: 'Köpet Ziehl-Neelsen festés', finding: 'Saválló pálcák (AFB)', significance: 'Gyors, de csak >10^4/mL felett pozitív' },
                { test: 'Köpet/BAL tenyésztés', finding: 'Löwenstein-Jensen/MGIT', significance: 'Gold standard, 2-8 hét' },
                { test: 'GeneXpert MTB/RIF', finding: 'MTB DNS + rifampicin rezisztencia', significance: 'Gyors (<2 óra), érzékeny' },
                { test: 'Tuberculin bőrpróba (Mantoux)', finding: '>10mm induratio', significance: 'Expozíció, nem aktív betegség' },
                { test: 'IGRA (QuantiFERON/T-SPOT)', finding: 'IFN-γ termelés ESAT-6/CFP-10-re', significance: 'BCG nem befolyásolja' }
              ]
            },
            differential: [
              { disease: 'Tüdőcarcinoma', distinguishing: 'Dohányzás, rtg/CT, bronchoscopia, biopszia' },
              { disease: 'Nem-tuberkulotikus mycobacteriosis (NTM)', distinguishing: 'Bronchiectasia, tenyésztés, MAC leggyakoribb' },
              { disease: 'Sarcoidosis', distinguishing: 'Bilateralis hilusi lymphadenopathia, biopszia (nem kazifikáló)' },
              { disease: 'Gombás pneumonia', distinguishing: 'Immunszuppresszió, tenyésztés/antigén' },
              { disease: 'Aktinomikózis', distinguishing: 'Sulfur granulumok, mellkasfal penetráció' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Izoniazid (INH)', dose: '5 mg/kg (max 300mg) PO', duration: '6 hónap', note: 'Hepatotoxicitás, perifériás neuropathia (B6!)' },
                  { drug: 'Rifampicin (RIF)', dose: '10 mg/kg (max 600mg) PO', duration: '6 hónap', note: 'Gyógyszer interakciók (CYP450)' },
                  { drug: 'Pyrazinamid (PZA)', dose: '25 mg/kg PO', duration: '2 hónap', note: 'Hyperuricaemia, hepatotoxicitás' },
                  { drug: 'Ethambutol (EMB)', dose: '15 mg/kg PO', duration: '2 hónap', note: 'Opticus neuritis' }
                ],
                inpatient: [
                  { drug: 'Ugyanaz + izolálás', dose: 'Légúti izoláció', duration: '2 h����t vagy 3 negatív köpet', note: 'Negatív nyomású szoba' }
                ],
                icu: [
                  { drug: 'IV formulációk', dose: 'Ha per os nem tolerálja', duration: 'Egyéni', note: 'MDR-TB: individualizált' }
                ]
              },
              targeted: 'MDR-TB: Bedaquilin, Linezolid, Fluorokinolonok, Aminoglikozidok - szakértői centrum',
              supportive: ['B6-vitamin (neuropathia megelőzés)', 'Táplálás', 'Kontaktkutatás'],
              prevention: ['BCG oltás (újszülöttek)', 'LTBI kezelés (INH 9 hó vagy RIF 4 hó)', 'Kontakt szűrés']
            },
            prognosis: {
              mortality: 'Kezelt: <5%; Kezeletlen: 50%; MDR/XDR: 30-50%',
              prognostic_scores: ['Nincsenek standard score-ok'],
              factors: 'HIV státusz, MDR, adherencia, késői diagnózis'
            },
            gallery: [
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=RTG',
                caption: 'Jobb felső lebenyi caverna poszt-primer tuberkulózisban.',
                type: 'Röntgen'
              },
              {
                url: 'https://via.placeholder.com/400x300.png/E2E8F0/64748B?text=CT',
                caption: 'Mellkas CT "tree-in-bud" mintázattal, ami aktív endobronchialis terjedésre utal.',
                type: 'CT'
              }
            ]
          },
          {
            id: 'legionella',
            name: 'Legionella pneumonia (Legionáriusbetegség)',
            pathogen: { type: 'Baktérium', name: 'Legionella pneumophila', gram: 'Gram-negatív (rosszul festődik)', shape: 'pálca, intracelluláris' },
            epidemiology: {
              incidence: 'CAP 2-9%-a, nozokomiális pneumonia akár 30%',
              risk_groups: ['50 év felettiek', 'Dohányosok', 'COPD betegek', 'Immunszupprimáltak', 'Krónikus veseelégtelenség', 'Diabetes'],
              seasonality: 'Nyár-ősz (légkondicionálás)',
              transmission: 'Inhaláció (aeroszol kontaminált vízből: hűtőtornyok, zuhanyok, buborékoztató medencék). NEM terjed emberről emberre!'
            },
            pathomechanism: {
              steps: [
                'Aeroszol belélegzése kontaminált vízforrásból',
                'Legionella bejut az alveolaris macrophagokba',
                'Dot/Icm T4SS rendszer: Fagoszóma-lizoszóma fúzió gátlása',
                'Intracelluláris replikáció speciális vakuólában',
                'Sejt lízis → szomszédos sejtek fertőzése',
                'Súlyos nekrotizáló alveolitis, gyulladásos infiltráció'
              ],
              virulence_factors: ['Dot/Icm szekréciós rendszer', 'Mip (macrophage infectivity potentiator)', 'Flagellum', 'Több mint 300 effektor fehérje']
            },
            clinical: {
              incubation: '2-10 nap (átlag 5-6 nap)',
              onset: 'Prodroma 1-2 nap, majd rapid progresszió',
              symptoms: [
                { name: 'Magas láz', description: '39-41°C, relatív bradycardia!', severity: 'severe' },
                { name: 'Száraz köhögés', description: 'Kezdetben nem produktív', severity: 'moderate' },
                { name: 'GI tünetek', description: 'Hasmenés, hányinger, hasi fájdalom (30-50%)', severity: 'moderate' },
                { name: 'Neurológiai tünetek', description: 'Fejfájás, konfúzió, ataxia', severity: 'moderate' },
                { name: 'Myalgia', description: 'Súlyos izomfájdalom', severity: 'mild' }
              ],
              physical_exam: [
                'Magas láz relatív bradycardiával (Faget-jel)',
                'Konszolidációs jelek auscultatiónál',
                'Enyhe hepatomegalia',
                'Cerebelláris jelek lehetségesek'
              ],
              complications: ['Légzési elégtelenség/ARDS', 'Akut veseelégtelenség', 'Rhabdomyolysis', 'Szepszis', 'Endocarditis', 'Encephalopathia']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (balra tolt)', interpretation: 'Nem specifikus' },
                { test: 'Nátrium', finding: 'Hyponatraemia (<130 mmol/L)', interpretation: 'SIADH - jellegzetes!' },
                { test: 'Máj enzimek', finding: 'Emelkedett AST, ALT, LDH', interpretation: 'Gyakori társulás' },
                { test: 'CK', finding: 'Emelkedett', interpretation: 'Myositis/rhabdomyolysis' },
                { test: 'CRP/PCT', finding: 'Jelentősen emelkedett', interpretation: 'Súlyos bakteriális fertőzés' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Gyorsan progrediáló infiltrátum, gyakran egyoldali, lobaris', significance: 'Rosszabb mint a klinikai kép' },
                { modality: 'CT mellkas', finding: 'Ground-glass és konszolidáció, pleura folyadék', significance: 'Érzékenyebb' }
              ],
              microbiology: [
                { test: 'Vizelet Legionella antigén', finding: 'L. pneumophila serogroup 1 (70%)', significance: 'Gyors (<15 perc), specifikus >95%' },
                { test: 'Tenyésztés (BCYE agar)', finding: 'Legionella izolálás', significance: 'Gold standard, 3-5 nap' },
                { test: 'PCR', finding: 'Legionella DNS', significance: 'Gyors, minden szerotípust kimutat' },
                { test: 'Szerológia', finding: '4x titeremelkedés', significance: 'Retrospektív diagnózis' }
              ]
            },
            differential: [
              { disease: 'Pneumococcus pneumonia', distinguishing: 'Produktív köpet, nincs GI/neurológiai tünet, normál Na' },
              { disease: 'Mycoplasma pneumonia', distinguishing: 'Fiatalabbak, lassabb progresszió, hideg agglutinin' },
              { disease: 'Q-láz', distinguishing: 'Állat expozíció, hepatitis dominál' },
              { disease: 'Psittacosis', distinguishing: 'Madár kontaktus, hepatosplenomegalia' },
              { disease: 'Influenza pneumonia', distinguishing: 'Szezonalitás, gyorsteszt, epidemológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg PO', duration: '5-7 nap', note: 'Első választás' },
                  { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '7-10 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x750mg IV', duration: '10-14 nap', note: 'Jobb penetráció' },
                  { drug: 'Azithromycin', dose: '1x500mg IV', duration: '10-14 nap', note: 'Alternatíva' }
                ],
                icu: [
                  { drug: 'Levofloxacin + Azithromycin', dose: 'Kombinációban', duration: '14-21 nap', note: 'Súlyos esetben' },
                  { drug: 'Rifampicin hozzáadható', dose: '2x300mg IV/PO', duration: '', note: 'Immunszupprimáltakban' }
                ]
              },
              targeted: 'Fluorokinolonok vagy makrolidok (béta-laktámok hatástalanok!)',
              supportive: ['Folyadékpótlás', 'Elektrolit korrekció', 'Lélegeztetés ARDS esetén'],
              prevention: ['Vízrendszerek karbantartása (>60°C)', 'Hűtőtornyok fertőtlenítése', 'Nozokomiális surveillance']
            },
            prognosis: {
              mortality: 'Összességében 10-15%, immunszupprimáltak 40%',
              prognostic_scores: ['CURB-65', 'PSI'],
              factors: 'Késői diagnózis, nem megfelelő antibiotikum, immunszuppresszió'
            }
          },
          {
            id: 'mycoplasma',
            name: 'Mycoplasma pneumonia',
            pathogen: { type: 'Baktérium', name: 'Mycoplasma pneumoniae', gram: 'Nincs sejtfal', shape: 'pleomorf' },
            epidemiology: {
              incidence: 'CAP 15-20%-a, járványokban 50%',
              risk_groups: ['Iskoláskorú gyermekek', 'Fiatal felnőttek', 'Zárt közösségek (kollégium, laktanya)'],
              seasonality: 'Ősz-tél, de egész évben előfordul',
              transmission: 'Cseppfertőzés (szoros kontaktus)'
            },
            pathomechanism: {
              steps: [
                'Adherencia a légúti hámsejtekhez (P1 adhezin)',
                'Ciliostasis és cilia pusztulás (hidrogén-peroxid)',
                'CARDS toxin termelés (gyulladás, vakuolizáció)',
                'Immunmediált tüdőkárosodás'
              ],
              virulence_factors: ['P1 adhezin', 'CARDS toxin', 'Hidrogén-peroxid']
            },
            clinical: {
              incubation: '2-3 hét',
              onset: 'Lassú, fokozatos',
              symptoms: [
                { name: 'Száraz köhögés', description: 'Kínzó, rohamszerű, hetekig tart', severity: 'moderate' },
                { name: 'Hőemelkedés/Láz', description: 'Általában nem magas', severity: 'mild' },
                { name: 'Fejfájás', description: 'Gyakori kísérő tünet', severity: 'mild' },
                { name: 'Torokfájás', description: 'Nem exsudativ pharyngitis', severity: 'mild' },
                { name: 'Extrapulmonalis', description: 'Kiütés (erythema multiforme), hemolysis', severity: 'moderate' }
              ],
              physical_exam: [
                'Gyakran szegényes hallgatózási lelet',
                'Esetleg szörtyzörejek, sípolás',
                'Bullosus myringitis (dobhártya hólyagok - ritka de specifikus)',
                'Cervicalis lymphadenopathia'
              ],
              complications: ['Stevens-Johnson szindróma', 'Hemolitikus anémia (hideg agglutinin)', 'Encephalitis', 'Myocarditis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál fvs, esetleg enyhe leukocytosis', interpretation: 'Nem specifikus' },
                { test: 'CRP', finding: 'Mérsékelten emelkedett', interpretation: 'Atípusos jelleg' },
                { test: 'Hideg agglutinin', finding: 'Pozitív (50%)', interpretation: 'Nem specifikus, de jellemző' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Interstitialis rajzolat fokozódás, foltos infiltrátumok', significance: 'Rosszabb mint a klinikum ("Walking pneumonia")' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'DNS kimutatás (torok/köpet)', significance: 'Gold standard, gyors' },
                { test: 'Szerológia (IgM/IgG)', finding: 'Titeremelkedés', significance: 'Retrospektív, akut fázisban gyakran negatív' }
              ]
            },
            differential: [
              { disease: 'Chlamydia pneumoniae', distinguishing: 'Klinikailag nehéz elkülöníteni, PCR' },
              { disease: 'Vírusos pneumonia', distinguishing: 'Járványtan, PCR' },
              { disease: 'Legionella', distinguishing: 'Súlyosabb, idősebbek, hyponatraemia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '500mg D1, majd 250mg D2-5', duration: '5 nap', note: 'Első választás' },
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '7-10 nap', note: 'Alternatíva (>8 év)' },
                  { drug: 'Clarithromycin', dose: '2x500mg', duration: '7 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x500-750mg IV/PO', duration: '10-14 nap', note: 'Súlyos esetben' },
                  { drug: 'Moxifloxacin', dose: '1x400mg IV/PO', duration: '10-14 nap', note: 'Alternatíva' }
                ],
                icu: [
                  { drug: 'Makrolid + Béta-laktám', dose: 'Kombináció', duration: '', note: 'Kevert infekció fedezésére' }
                ]
              },
              targeted: 'Makrolidok (rezisztencia növekszik!), Tetraciklinek, Fluorokinolonok',
              supportive: ['Köhögéscsillapítás', 'Lázcsillapítás'],
              prevention: ['Cseppfertőzés elleni védekezés', 'Nincs vakcina']
            },
            prognosis: {
              mortality: 'Nagyon alacsony, általában magától gyógyul',
              prognostic_scores: ['PSI (ritkán szükséges)'],
              factors: 'Extrapulmonalis szövődmények'
            }
          },
          {
            id: 'chlamydia_pneumoniae',
            name: 'Chlamydia pneumoniae',
            pathogen: { type: 'Baktérium', name: 'Chlamydophila pneumoniae', gram: 'Gram-negatív (intracelluláris)', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'CAP 5-10%-a',
              risk_groups: ['Idősek', 'Krónikus betegek', 'Zárt közösségek'],
              seasonality: 'Egész évben',
              transmission: 'Cseppfertőzés'
            },
            pathomechanism: {
              steps: [
                'Elemi test (EB) belégzése',
                'Intracelluláris átalakulás retikuláris testté (RB)',
                'Replikáció, zárványképzés',
                'Sejt lízis, EB kiszabadulás',
                'Ciliostasis'
              ],
              virulence_factors: ['Intracelluláris életmód', 'Endotoxin-szerű anyagok']
            },
            clinical: {
              incubation: '3-4 hét',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Torokfájás', description: 'Kezdeti tünet, rekedtség', severity: 'mild' },
                { name: 'Köhögés', description: 'Tartós, improduktív', severity: 'moderate' },
                { name: 'Láz', description: 'Enyhe vagy hiányzik', severity: 'mild' }
              ],
              physical_exam: [
                'Pharyngitis',
                'Szörtyzörejek',
                'Sinusitis jelei'
              ],
              complications: ['Reaktív arthritis', 'Myocarditis', 'Atherosclerosis (asszociáció)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál', interpretation: 'Nem specifikus' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Kisméretű infiltrátumok', significance: 'Nem specifikus' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'DNS kimutatás', significance: 'Legérzékenyebb' },
                { test: 'Szerológia', finding: 'MIF (microimmunofluorescence)', significance: 'Gold standard szerológia' }
              ]
            },
            differential: [
              { disease: 'Mycoplasma', distinguishing: 'Gyakorlatilag azonos klinikum' },
              { disease: 'Vírusok', distinguishing: 'PCR' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '10-14 nap', note: 'Első választás' },
                  { drug: 'Azithromycin', dose: '500mg D1, 250mg D2-5', duration: '5 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x750mg', duration: '10-14 nap', note: 'Súlyosabb esetben' }
                ],
                icu: [
                  { drug: 'Levofloxacin', dose: 'IV', duration: '14 nap', note: '' }
                ]
              },
              targeted: 'Tetraciklinek, Makrolidok, Kinolonok',
              supportive: ['Tüneti kezelés'],
              prevention: ['Nincs vakcina']
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['PSI'],
              factors: 'Idős kor, komorbiditás'
            }
          },
          {
            id: 'psittacosis',
            name: 'Ornithosis (Psittacosis)',
            pathogen: { type: 'Baktérium', name: 'Chlamydia psittaci', gram: 'Intracelluláris', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'Ritka, foglalkozási betegség',
              risk_groups: ['Madártartók (papagáj, galamb)', 'Állatorvosok', 'Baromfifeldolgozók'],
              seasonality: 'Nincs',
              transmission: 'Madár ürülék porának belégzése'
            },
            pathomechanism: {
              steps: [
                'Inhaláció',
                'Reticuloendothelialis rendszer fertőzése (máj, lép)',
                'Haematogen szórás tüdőbe',
                'Interstitialis pneumonia'
              ],
              virulence_factors: ['Intracelluláris túlélés']
            },
            clinical: {
              incubation: '5-14 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Magas láz', description: '39-40°C', severity: 'severe' },
                { name: 'Fejfájás', description: 'Kínzó, abroncsszerű', severity: 'severe' },
                { name: 'Száraz köhögés', description: 'Később jelentkezik', severity: 'moderate' },
                { name: 'Myalgia', description: 'Nyak, hát', severity: 'moderate' }
              ],
              physical_exam: [
                'Relatív bradycardia (Faget-jel)',
                'Splenomegalia (10-70%)',
                'Horder-foltok (rózsaszín kiütés - ritka)',
                'Szegényes tüdőlelet'
              ],
              complications: ['Endocarditis', 'Hepatitis', 'Neurológiai tünetek', 'ARDS']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál vagy leukopenia', interpretation: 'Nem bakteriális jellegű' },
                { test: 'Májenzimek', finding: 'Emelkedett', interpretation: 'Gyakori' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Atípusos pneumonia, legyezőszerű hilusi infiltrátum', significance: 'Jellegzetes' }
              ],
              microbiology: [
                { test: 'Szerológia', finding: 'MIF, komplementkötés', significance: '4x titeremelkedés' },
                { test: 'PCR', finding: 'Légúti minta', significance: 'Specifikus' }
              ]
            },
            differential: [
              { disease: 'Q-láz', distinguishing: 'Hasonló, de nincs madárkontaktus' },
              { disease: 'Legionella', distinguishing: 'Vízexpozíció' },
              { disease: 'Typhus', distinguishing: 'Utazás, kiütés' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14-21 nap', note: 'Első választás' }
                ],
                inpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg IV', duration: '14-21 nap', note: 'Súlyos esetben' }
                ],
                icu: [
                  { drug: 'Doxycyclin', dose: 'IV', duration: '', note: '' }
                ]
              },
              targeted: 'Tetraciklinek (Doxycyclin), Makrolidok (kevésbé hatékonyak)',
              supportive: ['Lázcsillapítás'],
              prevention: ['Madarak karanténozása', 'Védőfelszerelés', 'Nedves takarítás']
            },
            prognosis: {
              mortality: 'Kezelt <1%, kezeletlen 10-20%',
              prognostic_scores: ['Nincs'],
              factors: 'Késői diagnózis'
            }
          },
          {
            id: 'q_fever_resp',
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
          }
        ]
      },
      viral_respiratory: {
        name: 'Vírusos légúti fertőzések',
        icon: '🦠',
        color: '#7c3aed',
        diseases: [
          {
            id: 'influenza',
            name: 'Influenza',
            pathogen: { type: 'Vírus', name: 'Influenza A/B/C vírus', gram: 'RNS vírus, Orthomyxoviridae', shape: 'helikális' },
            epidemiology: {
              incidence: 'Szezonális járvány: 5-20% populáció/év, pandémiák: akár 50%',
              risk_groups: ['65 év felettiek', '5 év alattiak', 'Várandósok', 'Krónikus betegek', 'Egészségügyi dolgozók', 'Immunszupprimáltak'],
              seasonality: 'November-március (északi félteke)',
              transmission: 'Cseppfertőzés, kontakt (1-2 méter), fomit'
            },
            pathomechanism: {
              steps: [
                'Hemagglutinin (HA) kötődik sziálsav receptorokhoz a légúti epitelen',
                'Receptor-mediált endocitózis',
                'Virális RNS replikáció a sejtmagban',
                'Neuraminidáz (NA) segíti az új vírusok felszabadulását',
                'Epitelsejt apoptózis, cilia károsodás',
                'Citokin vihar súlyos esetben (IL-6, TNF-α, IFN-γ)'
              ],
              virulence_factors: ['Hemagglutinin (H1-18)', 'Neuraminidáz (N1-11)', 'NS1 protein (IFN antagonista)', 'PB1-F2 (pro-apoptotikus)']
            },
            clinical: {
              incubation: '1-4 nap (átlag 2 nap)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Magas láz', description: '38-41°C, 3-4 napig', severity: 'severe' },
                { name: 'Myalgia', description: 'Súlyos, diffúz izomfájdalom', severity: 'severe' },
                { name: 'Fejfájás', description: 'Frontális, intenzív', severity: 'moderate' },
                { name: 'Száraz köhögés', description: 'Fáj, nem produktív', severity: 'moderate' },
                { name: 'Torokfájás, orrfolyás', description: 'Catarralis tünetek', severity: 'mild' },
                { name: 'Prostráció', description: 'Ágyhoz kötő gyengeség', severity: 'moderate' }
              ],
              physical_exam: [
                'Lázas, elesett ��llapot',
                'Conjunctivitis',
                'Pharynx hyperaemia',
                'Tiszta hallgatózási lelet (komplikálatlan)',
                'Tachycardia'
              ],
              complications: ['Primer influenza pneumonia', 'Szekunder bakteriális pneumonia', 'Myocarditis', 'Encephalitis', 'Reye-szindróma (aspirin!)', 'Myositis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukopenia vagy normál, lymphopenia', interpretation: 'Vírusinfekció jellegzetes' },
                { test: 'CRP', finding: 'Mérsékelten emelkedett', interpretation: 'Alacsonyabb mint bakteriálisnál' },
                { test: 'PCT', finding: 'Normális (<0.25)', interpretation: 'Bakteriális szuperinfekció kizárása' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Normális vagy interstitialis rajzolat', significance: 'Pneumonia kizárása' },
                { modality: 'CT', finding: 'Ground-glass opacitások', significance: 'Vírus pneumonia' }
              ],
              microbiology: [
                { test: 'Rapid antigén teszt (RAT)', finding: 'Influenza A/B', significance: 'Gyors (15 perc), alacsony szenzitivitás (50-70%)' },
                { test: 'RT-PCR', finding: 'Vírus RNS kimutatás', significance: 'Gold standard, szubtipizálás' },
                { test: 'Vírus tenyésztés', finding: 'Izolálás', significance: 'Epidemiológiai/surveillance' }
              ]
            },
            differential: [
              { disease: 'COVID-19', distinguishing: 'Szaglás/ízlelés vesztés, PCR' },
              { disease: 'RSV fertőzés', distinguishing: 'Gyermekek, idősek, bronchiolitis' },
              { disease: 'Adenovírus fertőzés', distinguishing: 'Conjunctivitis, pharyngitis, hosszabb lázas periódus' },
              { disease: 'Bakteriális pneumonia', distinguishing: 'Produktív köpet, lokalizált lelet, magas PCT' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Oseltamivir', dose: '2x75mg PO', duration: '5 nap', note: 'Tünetek kezdetétől 48 órán belül!' },
                  { drug: 'Baloxavir', dose: '1x40-80mg PO', duration: 'Egyszeri dózis', note: '>80kg: 80mg' }
                ],
                inpatient: [
                  { drug: 'Oseltamivir', dose: '2x75mg PO/NG', duration: '5-10 nap', note: 'Súlyos esetben hosszabban' },
                  { drug: 'Peramivir', dose: '1x600mg IV', duration: 'Egyszeri vagy ismételt', note: 'Ha PO nem tolerált' }
                ],
                icu: [
                  { drug: 'Oseltamivir', dose: '2x150mg PO/NG', duration: '10 nap', note: 'Magasabb dózis megfontolandó' },
                  { drug: '+ Empirikus AB', dose: 'CAP fedezet', duration: '', note: 'Bakteriális szuperinfekció' }
                ]
              },
              targeted: 'Neuraminidáz inhibitorok (oseltamivir, zanamivir, peramivir) vagy cap-dependent endonukleáz inhibitor (baloxavir)',
              supportive: ['Lázcsillapítás (paracetamol!)', 'Folyadékpótlás', 'Oxigén', 'Lélegeztetés ARDS esetén'],
              prevention: ['Éves influenza oltás', 'Kézhigiéné', 'Beteg izolálás', 'Kemoprofilaxis (oseltamivir 1x75mg)']
            },
            prognosis: {
              mortality: 'Összességében 0.1%, 65+ éveseknél 1-2%, pandémiás törzs magasabb',
              prognostic_scores: ['Nincs specifikus'],
              factors: 'Életkor, komorbiditás, vírus szubtípus, oltási státusz'
            }
          },
          {
            id: 'covid19',
            name: 'COVID-19',
            pathogen: { type: 'Vírus', name: 'SARS-CoV-2', gram: 'RNS vírus, Coronaviridae', shape: 'gömb, spike fehérjék' },
            epidemiology: {
              incidence: 'Pandémia 2020-tól, endémiássá válás',
              risk_groups: ['65 év felettiek', 'Elhízottak (BMI>30)', 'Diabetes', 'Kardiovaszkuláris betegség', 'Immunszupprimáltak', 'Krónikus tüdőbetegek'],
              seasonality: 'Téli csúcs, de egész évben',
              transmission: 'Légúti (aeroszol + cseppfertőzés), kontakt, feko-orális ritka'
            },
            pathomechanism: {
              steps: [
                'Spike protein kötődik ACE2 receptorhoz (tüdő, szív, erek, bél)',
                'TMPRSS2 proteáz hasítja a spike proteint → fúzió',
                'Vírus replikáció és terjedés',
                'Endothel diszfunkció, mikrothrombózisok',
                'Citokin vihar (IL-6, IL-1β, TNF-α) súlyos esetben',
                'ARDS, többszervi elégtelenség'
              ],
              virulence_factors: ['Spike protein', 'NSP1 (host shutdown)', 'ORF8 (immunmoduláció)', 'Nucleocapsid']
            },
            clinical: {
              incubation: '2-14 nap (medián 5 nap, Omikron 3 nap)',
              onset: 'Változó',
              symptoms: [
                { name: 'Láz', description: '>38°C', severity: 'moderate' },
                { name: 'Száraz köhögés', description: 'Tartós, irritatív', severity: 'moderate' },
                { name: 'Fáradékonyság', description: 'Kifejezett, elhúzódó', severity: 'moderate' },
                { name: 'Anosmia/dysgeusia', description: 'Szaglás/ízlelés elvesztése (korai variánsok)', severity: 'mild' },
                { name: 'Dyspnoe', description: 'Terhelésre vagy nyugalomban', severity: 'severe' },
                { name: 'Myalgia, fejfájás', description: 'Gyakori társuló tünet', severity: 'mild' }
              ],
              physical_exam: [
                'Láz, tachypnoe',
                'SpO2 csökkent (silent hypoxia!)',
                'Bilaterális crepitatio',
                'Tachycardia',
                'Nincs specifikus fizikális jel'
              ],
              complications: ['ARDS', 'Pulmonalis embólia', 'Myocarditis', 'Akut veseelégtelenség', 'Stroke', 'MIS (gyermekek)', 'Long COVID']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Lymphopenia, normál/csökkent thrombocyta', interpretation: 'Súlyosság jelzője' },
                { test: 'D-dimer', finding: 'Emelkedett', interpretation: 'Thrombotikus rizikó, rossz prognózis' },
                { test: 'Ferritin', finding: 'Emelkedett', interpretation: 'Citokin vihar markere' },
                { test: 'CRP/IL-6', finding: 'Emelkedett', interpretation: 'Gyulladás mértéke' },
                { test: 'LDH, troponin', finding: 'Emelkedett súlyos esetben', interpretation: 'Szöveti károsodás' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Bilaterális periférás infiltrátumok', significance: 'Kevésbé érzékeny' },
                { modality: 'CT mellkas', finding: 'Ground-glass opacitások, crazy paving, konszolidáció', significance: 'Jellegzetes pattern' }
              ],
              microbiology: [
                { test: 'RT-PCR (nasopharynx/oropharynx)', finding: 'SARS-CoV-2 RNS', significance: 'Gold standard, Ct érték' },
                { test: 'Rapid antigén teszt', finding: 'Nucleocapsid fehérje', significance: 'Gyors, fertőzőképesség' },
                { test: 'Szerológia', finding: 'Anti-S, Anti-N IgG/IgM', significance: 'Átvészeltség, oltás hatékonysága' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Gyorsabb lefolyás, myalgia dominál, PCR' },
              { disease: 'Bakteriális pneumonia', distinguishing: 'Magas PCT, lobaris infiltrátum' },
              { disease: 'Szívelégtelenség', distinguishing: 'Kardiális anamnézis, BNP, kétoldali' },
              { disease: 'Pulmonalis embólia', distinguishing: 'D-dimer, CTPA' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Paxlovid (nirmatrelvir/ritonavir)', dose: '2x300/100mg PO', duration: '5 nap', note: 'Korai, rizikócsoport, interakciók!' },
                  { drug: 'Molnupiravir', dose: '2x800mg PO', duration: '5 nap', note: 'Alternatíva ha Paxlovid kontraindikált' }
                ],
                inpatient: [
                  { drug: 'Remdesivir', dose: '200mg IV D1, majd 100mg/nap', duration: '5 nap (max 10)', note: 'O2 igény esetén' },
                  { drug: 'Dexamethason', dose: '6mg/nap IV/PO', duration: '10 nap', note: 'Csak O2 igény/lélegeztetés mellett!' }
                ],
                icu: [
                  { drug: 'Dexamethason', dose: '6-20mg/nap', duration: '10 nap', note: 'Citokin vihar' },
                  { drug: 'Tocilizumab', dose: '8mg/kg IV egyszeri', duration: '', note: 'IL-6 gátló, gyorsan romló' },
                  { drug: 'LMWH', dose: 'Terápiás dózis', duration: '', note: 'Thromboprofilaxis/terápia' }
                ]
              },
              targeted: 'Antivirális (Paxlovid, Remdesivir) korai; Immunmoduláns (steroid, tocilizumab) hipoxiás fázisban',
              supportive: ['Oxigén (prone pozíció!)', 'HFNC/NIV', 'Invazív lélegeztetés', 'ECMO'],
              prevention: ['mRNS vakcinák (Pfizer, Moderna)', 'Kézhigiéné', 'Maszkviselés', 'Izoláció']
            },
            prognosis: {
              mortality: 'Omikron <1%, korábban 2-5%, ICU 20-40%',
              prognostic_scores: ['4C Mortality Score', 'NEWS2'],
              factors: 'Életkor, komorbiditás, lymphopenia, D-dimer, ferritin, oltási státusz'
            }
          }
        ]
      },
           cardiovascular: {
        name: 'Szív- és érrendszeri fertőzések',
        icon: '❤️',
        color: '#be123c',
        diseases: [
          {
            id: 'endocarditis',
            name: 'Infectiv endocarditis',
            pathogen: { type: 'Baktérium', name: 'Staphylococcus aureus, Streptococcus viridans', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: '3-10/100,000 fő/év',
              risk_groups: ['Billentyűhibák', 'Műbillentyű', 'IV droghasználók', 'Congenitalis szívbetegség', 'Korábbi endocarditis'],
              seasonality: 'Nincs',
              transmission: 'Bakterémia (fogászati beavatkozás, bőrfertőzés, katéter)'
            },
            pathomechanism: {
              steps: [
                'Endothel sérülés (turbulens áramlás)',
                'Steril thrombocyta-fibrin trombus képződés (NBTE)',
                'Bakterémia (kórokozó megtapadása)',
                'Vegetáció képződés (baktérium + fibrin + thrombocyta)',
                'Szöveti destrukció, embólizáció'
              ],
              virulence_factors: ['Adhezinek (MSCRAMM)', 'Biofilm képzés', 'Toxinok']
            },
            clinical: {
              incubation: 'Napok (akut) vagy hetek (szubakut)',
              onset: 'Változó',
              symptoms: [
                { name: 'Láz', description: 'Leggyakoribb tünet (90%)', severity: 'moderate' },
                { name: 'Szívzörej', description: 'Új vagy megváltozott (85%)', severity: 'severe' },
                { name: 'Petechiae', description: 'Bőrön, nyálkahártyán', severity: 'mild' },
                { name: 'Splenomegalia', description: 'Szubakut esetben', severity: 'moderate' },
                { name: 'Embóliás tünetek', description: 'Stroke, tüdőembólia, végtagi ischaemia', severity: 'severe' }
              ],
              physical_exam: [
                'Új szívzörej',
                'Splinter haemorrhagia (köröm alatt)',
                'Janeway léziók (fájdalmatlan tenyér/talp)',
                'Osler csomók (fájdalmas ujjbegy)',
                'Roth foltok (retina vérzés)'
              ],
              complications: ['Szívelégtelenség (billentyű elégtelenség)', 'Szeptikus embólia (agy, lép, vese)', 'Tályog (gyűrű)', 'Glomerulonephritis']
            },
            diagnostics: {
              criteria: [
                { name: 'Major kritériumok', items: ['Pozitív hemokultúra (típusos kórokozó: S. aureus, Viridans strep, HACEK, Enterococcus)', 'Endocardium érintettség jelei (echo: vegetáció, tályog, új billentyű regurgitáció)'] },
                { name: 'Minor kritériumok', items: ['Prediszpozíció (szívhiba, IV drog)', 'Láz >38°C', 'Vaszkuláris jelenségek (embólia, szeptikus infarctus, mycoticus aneurysma, Janeway)', 'Immunológiai jelenségek (Osler csomó, Roth folt, RF+, Glomerulonephritis)', 'Mikrobiológiai jel (nem major)'] },
                { name: 'Diagnózis (Definitív)', items: ['2 Major', '1 Major + 3 Minor', '5 Minor'] }
              ],
              laboratory: [
                { test: 'Hemokultúra', finding: 'Pozitív (folyamatos bakterémia)', interpretation: 'DUKE major kritérium (3 szett!)' },
                { test: 'Vérkép', finding: 'Anémia, leukocytosis', interpretation: 'Krónikus gyulladás' },
                { test: 'CRP/We', finding: 'Emelkedett', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'Echocardiographia (TTE/TEE)', finding: 'Vegetáció, tályog, dehiszcencia', significance: 'DUKE major kritérium' },
                { modality: 'CT', finding: 'Embóliás szórás', significance: 'Szövődmények' }
              ],
              microbiology: [
                { test: 'Hemokultúra', finding: 'Kórokozó azonosítás', significance: 'Terápia alapja' },
                { test: 'Szerológia', finding: 'Coxiella, Bartonella', significance: 'Ha hemokultúra negatív' }
              ]
            },
            differential: [
              { disease: 'Reumás láz', distinguishing: 'Jones kritériumok, Strep. anamnézis' },
              { disease: 'SLE (Libman-Sacks)', distinguishing: 'Autoantitestek, steril vegetáció' },
              { disease: 'Antifoszfolipid szindróma', distinguishing: 'Trombózisok, labor' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Kórházi kezelés szükséges!' }
                ],
                inpatient: [
                  { drug: 'Ampicillin + Flucloxacillin + Gentamicin', dose: 'IV kombináció', duration: '4-6 hét', note: 'Saját billentyű (akut)' },
                  { drug: 'Vancomycin + Gentamicin + Rifampicin', dose: 'IV kombináció', duration: '6 hét', note: 'Műbillentyű' }
                ],
                icu: [
                  { drug: 'Sürgős műtét', dose: 'Billentyűcsere', duration: '', note: 'Szívelégtelenség, kontrollálhatatlan fertőzés' }
                ]
              },
              targeted: 'S. aureus: Flucloxacillin/Cefazolin; Strep: Penicillin G/Ceftriaxon; Enterococcus: Ampicillin+Gentamicin. Időtartam: 4-6 hét IV.',
              supportive: ['Szívelégtelenség kezelése', 'Embólia profilaxis (antikoagulálás kontraindikált lehet vérzésveszély miatt!)'],
              prevention: ['Antibiotikum profilaxis (Amoxicillin 2g) magas rizikójú betegeknél fogászati beavatkozás előtt', 'Szájhigiéné']
            },
            prognosis: {
              mortality: 'Kórházi: 15-20%, 1 éves: 30-40%',
              prognostic_scores: ['Nincs specifikus'],
              factors: 'S. aureus, szívelégtelenség, idős kor, műbillentyű'
            }
          },
          {
            id: 'myocarditis',
            name: 'Myocarditis',
            pathogen: { type: 'Vírus', name: 'Coxsackie B, Adenovírus, Parvovírus B19', gram: 'RNS/DNS vírusok', shape: 'változó' },
            epidemiology: {
              incidence: 'Nehéz becsülni (sok enyhe eset), hirtelen szívhalál 10-20%-a fiatalokban',
              risk_groups: ['Fiatal felnőttek', 'Férfiak', 'Immunszupprimáltak'],
              seasonality: 'Vírusfüggő (pl. enterovírus nyár-ősz)',
              transmission: 'Feko-orális, cseppfertőzés (kórokozó függő)'
            },
            pathomechanism: {
              steps: [
                'Vírus bejutása a kardiomiocitákba (receptor mediált)',
                'Direkt citopatikus hatás (replikáció)',
                'Immunválasz aktiválódása (T-sejtek, citokinek)',
                'Autoimmun reakció (molekuláris mimikri)',
                'Szívizom nekrózis, fibrózis, dilatáció'
              ],
              virulence_factors: ['Proteáz 2A (dystrophin hasítás)', 'Receptor kötés (CAR)']
            },
            clinical: {
              incubation: 'Vírusfertőzés után 1-2 hét',
              onset: 'Változó (tünetmentestől a fulminánsig)',
              symptoms: [
                { name: 'Mellkasi fájdalom', description: 'Szúró, perikardiális jellegű', severity: 'moderate' },
                { name: 'Dyspnoe', description: 'Szívelégtelenség jele', severity: 'severe' },
                { name: 'Palpitáció', description: 'Ritmuszavarok', severity: 'moderate' },
                { name: 'Fáradékonyság', description: 'Nem specifikus', severity: 'mild' },
                { name: 'Prodromális tünetek', description: 'Láz, myalgia, GI tünetek (megelőzően)', severity: 'mild' }
              ],
              physical_exam: [
                'Tachycardia (lázhoz képest aránytalan)',
                'Szívelégtelenség jelei (S3, pangás)',
                'Pericardialis dörzszörej (myopericarditis)',
                'Arrhythmia'
              ],
              complications: ['Dilatatív cardiomyopathia (DCM)', 'Szívelégtelenség', 'Halálos ritmuszavar', 'Hirtelen szívhalál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Troponin', finding: 'Emelkedett', interpretation: 'Szívizom nekrózis (szenzitív)' },
                { test: 'CK-MB', finding: 'Emelkedett', interpretation: 'Izomkárosodás' },
                { test: 'CRP/We', finding: 'Emelkedett', interpretation: 'Gyulladás' },
                { test: 'BNP', finding: 'Emelkedett', interpretation: 'Szívelégtelenség' }
              ],
              imaging: [
                { modality: 'EKG', finding: 'ST-eleváció (diffúz), T-inverzió, AV-blokk, kamrai arrhythmia', significance: 'Nem specifikus' },
                { modality: 'Echocardiographia', finding: 'Falmozgászavar, csökkent EF, folyadék', significance: 'Funkció megítélés' },
                { modality: 'Szív MRI', finding: 'Lake Louise kritériumok (ödéma, hyperaemia, nekrózis/heg)', significance: 'Gold standard non-invazív' }
              ],
              microbiology: [
                { test: 'Endomyocardialis biopszia (EMB)', finding: 'Gyulladásos infiltrátum + nekrózis (Dallas kritériumok)', significance: 'Gold standard (de invazív, ritkán végzik)' },
                { test: 'PCR (biopszia/vér)', finding: 'Vírus genom', significance: 'Etiológia' }
              ]
            },
            differential: [
              { disease: 'Akut koronária szindróma (ACS)', distinguishing: 'Koronarográfia negatív, fiatal beteg' },
              { disease: 'Pericarditis', distinguishing: 'Troponin kevésbé emelkedett, nincs falmozgászavar' },
              { disease: 'Szorongás/pánik', distinguishing: 'EKG/Troponin negatív' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Pihenés', dose: 'Fizikai kímélet', duration: '3-6 hónap', note: 'Versgénysport tilos!' },
                  { drug: 'NSAID', dose: 'Tüneti', duration: 'Rövid ideig', note: 'Mellkasi fájdalomra (óvatosan)' }
                ],
                inpatient: [
                  { drug: 'Szívelégtelenség kezelés', dose: 'ACE-gátló, Béta-blokkoló, Diuretikum', duration: 'Krónikus', note: 'Ha EF csökkent' },
                  { drug: 'Antiarrhythmiás szerek', dose: 'Amiodaron', duration: '', note: 'Ritmuszavar esetén' }
                ],
                icu: [
                  { drug: 'Keringéstámogatás', dose: 'Inotrop, IABP, ECMO', duration: '', note: 'Fulmináns esetben' },
                  { drug: 'Immunszuppresszió', dose: 'Steroid, Azathioprin', duration: '', note: 'Csak bizonyos típusoknál (pl. óriássejtes, sarcoidosis)' }
                ]
              },
              targeted: 'Specifikus antivirális terápia általában nincs. Bakteriális eredetnél antibiotikum.',
              supportive: ['Szigorú fizikai kímélet (3-6 hónap)!', 'Szívelégtelenség kezelése'],
              prevention: ['Védőoltások (Influenza, COVID, Kanyaró)', 'Higiénia']
            },
            prognosis: {
              mortality: 'Változó: sokszor spontán gyógyul, fulmináns esetben magas. 50% DCM-be megy át.',
              prognostic_scores: ['Nincs'],
              factors: 'Kezdeti EF, QRS szélesség, troponin szint'
            }
          }
        ]
      },
      upper_respiratory: {
        name: 'Felsőlégúti fertőzések',
        icon: '👃',
        color: '#059669',
        diseases: [
          {
            id: 'upper_respiratory_infections',
            name: 'Felsőlégúti fertőzések (közönséges nátha)',
            pathogen: { type: 'Vírus', name: 'Rhinovirus (leggyakoribb), Coronavirus, Adenovirus, Influenza', gram: 'RNS vírusok', shape: 'változó' },
            epidemiology: {
              incidence: 'Leggyakoribb fertőzés, felnőttek 2-3x/év, gyermekek 6-8x/év',
              risk_groups: ['Gyermekek', 'Idősek', 'Immunszupprimáltak'],
              seasonality: 'Egész évben, csúcs ősz-tél',
              transmission: 'Cseppfertőzés, kontakt, fomit'
            },
            pathomechanism: {
              steps: [
                'Vírus bejutása az orr/nyelő nyálkahártyájába',
                'Epithelsejtek fertőzése',
                'Lokális gyulladás (neutrophilek, ödéma)',
                'Ciliostasis, mukusz fokozott termelés',
                'Szisztémás válasz (láz, általános tünetek)'
              ],
              virulence_factors: ['Receptor kötés (ICAM-1 rhinovirusnál)', 'Immunmoduláció']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Orrfolyás', description: 'Víztiszta → mukopurulens', severity: 'mild' },
                { name: 'Tüsszögés', description: 'Paroxysmalis', severity: 'mild' },
                { name: 'Torokfájás', description: 'Enyhe', severity: 'mild' },
                { name: 'Köhögés', description: 'Száraz, irritatív', severity: 'mild' },
                { name: 'Láz', description: 'Enyhe vagy hiányzik', severity: 'mild' }
              ],
              physical_exam: [
                'Orrnyálkahártya hyperaemia, ödéma',
                'Pharynx enyhe vörösség',
                'Cervicalis lymphadenopathia',
                'Normál hallgatózási lelet'
              ],
              complications: ['Sinusitis', 'Otitis media', 'Bronchitis', 'Pneumonia (ritka)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Nincs szükség', finding: '-', interpretation: 'Klinikai diagnózis' }
              ],
              imaging: [
                { test: 'Nincs szükség', finding: '-', interpretation: 'Klinikai diagnózis' }
              ],
              microbiology: [
                { test: 'Vírus PCR', finding: 'Etiológia', significance: 'Ha szükséges (pl. járvány)' }
              ]
            },
            differential: [
              { disease: 'Allergiás rhinitis', distinguishing: 'Pruritus, szezonalitás, eosinophilia' },
              { disease: 'Bakteriális sinusitis', distinguishing: 'Tartós tünetek, láz, fájdalom' },
              { disease: 'Influenza', distinguishing: 'Magas láz, myalgia, prostráció' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Szupportív', dose: '-', duration: '7-10 nap', note: 'Pihenés, folyadék, tüneti kezelés' },
                  { drug: 'Dekongesztáns', dose: 'Oxymetazolin orr', duration: '3-5 nap', note: 'Ne hosszabb ideig!' },
                  { drug: 'Antihisztamin', dose: 'Loratadin', duration: '', note: 'Ha allergia gyanú' }
                ],
                inpatient: [
                  { drug: 'Nincs szükség', dose: '-', duration: '-', note: 'Ritka' }
                ],
                icu: [
                  { drug: 'Nincs szükség', dose: '-', duration: '-', note: 'Ritka' }
                ]
              },
              targeted: 'Nincs specifikus antivirális',
              supportive: ['Pihenés', 'Folyadékpótlás', 'Lázcsillapítás'],
              prevention: ['Kézhigiéné', 'Maszkviselés járvány idején']
            },
            prognosis: {
              mortality: 'Nagyon alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Immunstátusz'
            }
          },
          {
            id: 'rsv_infection',
            name: 'RSV fertőzés (Respiratory Syncytial Virus)',
            pathogen: { type: 'Vírus', name: 'Human Respiratory Syncytial Virus (HRSV)', gram: 'RNS vírus, Pneumoviridae', shape: 'helikális' },
            epidemiology: {
              incidence: 'Minden gyermek átesik 2 éves koráig, felnőttek reinfekció',
              risk_groups: ['Csecsemők (<6 hó)', 'Idősek (>65 év)', 'Krónikus tüdőbetegek', 'Immunszupprimáltak'],
              seasonality: 'Tél-tavasz',
              transmission: 'Cseppfertőzés, kontakt (nagyon fertőző!)'
            },
            pathomechanism: {
              steps: [
                'Vírus bejutása a légutakba',
                'Fúzió a ciliált epithelsejtekkel',
                'Syncytium képzés',
                'Cilia pusztulás, mukociliáris clearance zavara',
                'Bronchiolitis vagy pneumonia kialakulása'
              ],
              virulence_factors: ['Fúziós fehérje (F)', 'G glikoprotein (adherencia)']
            },
            clinical: {
              incubation: '4-6 nap',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Orrfolyás', description: 'Víztiszta', severity: 'mild' },
                { name: 'Köhögés', description: 'Száraz, majd produktív', severity: 'moderate' },
                { name: 'Láz', description: 'Enyhe-mérsékelt', severity: 'mild' },
                { name: 'Dyspnoe', description: 'Csecsemőkön súlyos', severity: 'severe' },
                { name: 'Wheezing', description: 'Bronchiolitis jele', severity: 'moderate' }
              ],
              physical_exam: [
                'Tachypnoe, retractions',
                'Wheezing, crepitatio',
                'Apnoe csecsemőkön',
                'Hypoxia'
              ],
              complications: ['Bronchiolitis obliterans', 'Pneumonia', 'Apnoe', 'Halál (csecsemőkön ritka, de lehetséges)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál vagy enyhe leukocytosis', interpretation: 'Nem specifikus' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Hyperinfláció, atelectasia', significance: 'Bronchiolitis' }
              ],
              microbiology: [
                { test: 'Nasopharyngealis aspirátum PCR', finding: 'RSV RNS', significance: 'Gold standard' },
                { test: 'Immunfluoreszcencia', finding: 'Antigén kimutatás', significance: 'Gyors' }
              ]
            },
            differential: [
              { disease: 'Bronchiolitis egyéb okok', distinguishing: 'Vírus PCR' },
              { disease: 'Asthma', distinguishing: 'Anamnézis, atopia' },
              { disease: 'Pertussis', distinguishing: 'Whoop, lymphocytosis' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Szupportív', dose: '-', duration: '-', note: 'Oxigén, hidratáció' },
                  { drug: 'Bronchodilatátor', dose: 'Salbutamol', duration: '', note: 'Ha wheezing' }
                ],
                inpatient: [
                  { drug: 'Ribavirin', dose: 'Aeroszol', duration: '3-5 nap', note: 'Súlyos esetben, immunszupprimáltak' }
                ],
                icu: [
                  { drug: 'Lélegeztetés', dose: 'NIV vagy intubáció', duration: '', note: 'Apnoe esetén' }
                ]
              },
              targeted: 'Palivizumab profilaxis magas rizikójú csecsemőknek',
              supportive: ['Oxigén', 'Hydratáció', 'Fizioterápia'],
              prevention: ['Kézhigiéné', 'Izoláció', 'Palivizumab (monoklonális Ab)']
            },
            prognosis: {
              mortality: 'Alacsony, de csecsemőkön magasabb rizikó',
              prognostic_scores: ['Nincs'],
              factors: 'Kor, komorbiditás'
            }
          },
          {
            id: 'tonsillitis',
            name: 'Tonsillitis (mandulagyulladás)',
            pathogen: { type: 'Baktérium', name: 'Streptococcus pyogenes (GAS, leggyakoribb)', gram: 'Gram-pozitív', shape: 'lánc' },
            epidemiology: {
              incidence: 'Gyakori gyermekkorban, 5-15 év',
              risk_groups: ['Gyermekek', 'Fiatal felnőttek'],
              seasonality: 'Tél-tavasz',
              transmission: 'Cseppfertőzés, kontakt'
            },
            pathomechanism: {
              steps: [
                'Baktérium kolonizációja a tonsillákon',
                'Lokális gyulladás, ödéma',
                'Toxintermelés (streptolysin O)',
                'Szisztémás válasz (láz, általános tünetek)'
              ],
              virulence_factors: ['M protein', 'Streptolysinek', 'Hyaluronidáz']
            },
            clinical: {
              incubation: '2-5 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Torokfájás', description: 'Súlyos, nyelési nehézség', severity: 'severe' },
                { name: 'Láz', description: 'Magas', severity: 'moderate' },
                { name: 'Dysphagia', description: 'Nyelési fájdalom', severity: 'moderate' },
                { name: 'Tonsilla lepedék', description: 'Fehér, gennyes', severity: 'moderate' }
              ],
              physical_exam: [
                'Tonsilla hyperaemia, duzzanat',
                'Exsudátum',
                'Cervicalis lymphadenitis',
                'Scarlet fever tünetek (ritka)'
              ],
              complications: ['Peritonsillaris abscessus', 'Reumás láz', 'Glomerulonephritis', 'Lemierre-szindróma']
            },
            diagnostics: {
              laboratory: [
                { test: 'Strep teszt', finding: 'Pozitív', interpretation: 'Gyors diagnózis' }
              ],
              microbiology: [
                { test: 'Torokváladék tenyésztés', finding: 'GAS', significance: 'Konfirmálás' }
              ]
            },
            differential: [
              { disease: 'Vírusos pharyngitis', distinguishing: 'Enyhe tünetek, nincs exsudátum' },
              { disease: 'Mononucleosis', distinguishing: 'Lymphocytosis, hepatosplenomegalia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Penicillin V', dose: '4x500mg PO', duration: '10 nap', note: 'Első választás' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '10 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4 millió IU IV', duration: '7-10 nap', note: 'Súlyos esetben' }
                ],
                icu: [
                  { drug: 'Sebészi drenázs', dose: 'Abscessus esetén', duration: '', note: '' }
                ]
              },
              targeted: 'Penicillin',
              supportive: ['Fájdalomcsillapítás', 'Folyadék'],
              prevention: ['Higiénia']
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Késői kezelés'
            }
          },
          {
            id: 'sinusitis',
            name: 'Sinusitis (arcüreggyulladás)',
            pathogen: { type: 'Vírus/Baktérium', name: 'Vírusok (első 7-10 nap), majd Streptococcus pneumoniae, Haemophilus influenzae', gram: 'Vegyes', shape: 'változó' },
            epidemiology: {
              incidence: 'Gyakori, felnőttek 1-2x/év',
              risk_groups: ['Allergiások', 'Dohányosok', 'Immunszupprimáltak'],
              seasonality: 'Tél',
              transmission: 'Endogén, felsőlégúti fertőzés szövődménye'
            },
            pathomechanism: {
              steps: [
                'Orrnyálkahártya gyulladás (vírus)',
                'Ostium obstrukció',
                'Bakteriális felülfertőződés',
                'Gennyes gyulladás'
              ],
              virulence_factors: ['Biofilm képzés']
            },
            clinical: {
              incubation: 'Felsőlégúti fertőzés után',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Facialis fájdalom', description: 'Homlok, arcüreg felett', severity: 'moderate' },
                { name: 'Orrdugulás', description: 'Mukopurulens váladék', severity: 'moderate' },
                { name: 'Fejfájás', description: 'Frontális', severity: 'moderate' },
                { name: 'Láz', description: 'Akut esetben', severity: 'mild' }
              ],
              physical_exam: [
                'Facialis nyomásérzékenység',
                'Mukopurulens orrváladék',
                'Pharynx hátsó falán váladék'
              ],
              complications: ['Orbitalis cellulitis', 'Meningitis', 'Osteomyelitis']
            },
            diagnostics: {
              imaging: [
                { modality: 'CT arcüregek', finding: 'Folyadék szint, mucosa megvastagodás', significance: 'Ha szükséges' }
              ]
            },
            differential: [
              { disease: 'Migraine', distinguishing: 'Egyoldali fejfájás, aura' },
              { disease: 'Dentalis fájdalom', distinguishing: 'Fogászati vizsgálat' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '2x875/125mg PO', duration: '7-10 nap', note: 'Bakteriális gyanú' },
                  { drug: 'Dekongesztáns', dose: 'Pseudoephedrin', duration: '3-5 nap', note: 'Tüneti' }
                ],
                inpatient: [
                  { drug: 'IV antibiotikum', dose: 'Ha szövődmény', duration: '', note: '' }
                ],
                icu: [
                  { drug: 'Sebészi drenázs', dose: 'Ha abscessus', duration: '', note: '' }
                ]
              },
              targeted: 'Antibiotikum ha bakteriális',
              supportive: ['Dekongesztáns', 'Nedves inhaláció'],
              prevention: ['Allergia kezelés']
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Immunstátusz'
            }
          },
          {
            id: 'otitis_media',
            name: 'Otitis media (középfülgyulladás)',
            pathogen: { type: 'Baktérium', name: 'Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis', gram: 'Vegyes', shape: 'coccus/bacillus' },
            epidemiology: {
              incidence: 'Gyakori gyermekkorban, 80% átesik 3 éves koráig',
              risk_groups: ['Csecsemők', 'Gyermekek', 'Passzív dohányzás'],
              seasonality: 'Tél',
              transmission: 'Felsőlégúti fertőzés szövődménye'
            },
            pathomechanism: {
              steps: [
                'Eustach-kürt obstrukció (adenoid hyperplasia, rhinitis)',
                'Baktérium ascent',
                'Gennyes gyulladás a középfülben',
                'Dobhártya perforáció lehetséges'
              ],
              virulence_factors: ['Biofilm', 'Toxinok']
            },
            clinical: {
              incubation: 'Felsőlégúti fertőzés után',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Fülfájás', description: 'Súlyos, gyermekek sírnak', severity: 'severe' },
                { name: 'Láz', description: 'Gyakori', severity: 'moderate' },
                { name: 'Hallásvesztés', description: 'Ideiglenes', severity: 'moderate' },
                { name: 'Orrfolyás', description: 'Társuló', severity: 'mild' }
              ],
              physical_exam: [
                'Dobhártya hyperaemia, duzzanat',
                'Perforáció esetén váladék',
                'Tympano puncture ha szükséges'
              ],
              complications: ['Mastoiditis', 'Meningitis', 'Labyrinthitis']
            },
            diagnostics: {
              imaging: [
                { modality: 'Otoszkópia', finding: 'Dobhártya vizsgálat', significance: 'Diagnosztikus' }
              ]
            },
            differential: [
              { disease: 'Külső fülgyulladás', distinguishing: 'Fülkagyló érintett' },
              { disease: 'Pharyngitis', distinguishing: 'Nincs fülfájás' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin', dose: '3x40mg/kg PO', duration: '7-10 nap', note: 'Első választás' },
                  { drug: 'Cefuroxim', dose: '2x250mg PO', duration: '7 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'IV antibiotikum', dose: 'Ha szövődmény', duration: '', note: '' }
                ],
                icu: [
                  { drug: 'Sebészi drenázs', dose: 'Ha abscessus', duration: '', note: '' }
                ]
              },
              targeted: 'Antibiotikum',
              supportive: ['Fájdalomcsillapítás', 'Dekongesztáns'],
              prevention: ['Vakcinák (Pneumococcus, Hib)']
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Kor, ismétlődés'
            }
          }
        ]
      }
});