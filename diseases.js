   const diseases = {
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
          }
        ]
      },
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
                'Toxin A (TcdA): enterotoxin �� folyadék szekréció, gyulladás',
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
            prognosis: { mortality: 'Alacsony (<1%), szepszis esetén magasabb', factors: 'Életkor, komorbiditás' }
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
            prognosis: { mortality: 'Kezeléssel alacsony, S. dysenteriae 1 járványokban 20% lehet' }
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
            prognosis: { mortality: 'Nagyon alacsony (<0.1%)', factors: 'GBS szövődmény súlyos lehet, reaktív arthritis elhúzódó' }
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
            prognosis: { mortality: 'ETEC: alacsony; EHEC: HUS esetén 3-5% halálozás', factors: 'Életkor (gyerek/idős), HUS kialakulása, antibiotikum használat (EHEC-nél rontja!)' }
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
            prognosis: { mortality: 'Alacsony, szepszis esetén magas (50%)', factors: 'Vasterhelés, immunszuppresszió, késői diagnózis' }
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
            prognosis: { mortality: 'Kiváló, de krónikussá válhat kezelés nélkül', factors: 'IgA hiány, reinfekció' }
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
            prognosis: { mortality: 'Kezeléssel jó (<1%), szövődményes tályog/perforáció esetén magasabb', factors: 'Késői diagnózis, tályog ruptúra' }
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
            prognosis: { mortality: 'Immundompetens: jó; AIDS: CD4<100 esetén magas mortalitás', factors: 'Immunstátusz rendezése (ART)' }
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
            prognosis: { mortality: 'Fejlett országokban nagyon alacsony, dehidráció a fő veszély', factors: 'Életkor (csecsemő/idős), komorbiditás' }
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
              prevention: ['Vakcináció (rekombináns HBsAg, 0-1-6 hó)', 'Szűrés terhességben', 'HBIG + Vakcina újszülötteknek']
            },
            prognosis: {
              mortality: 'Akut: <1%; Krónikus: cirrhosis/HCC miatt jelentős',
              prognostic_scores: ['PAGE-B (HCC rizikó)'],
              factors: 'HBeAg státusz, virális load, genotípus, koinfekciók'
            }
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
            prognosis: {
              mortality: 'Általában alacsony, de terheseknél nagyon magas lehet',
              mortality: 'Általában alacsony, de terheseknél nagyon magas lehet (20%)',
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
              targeted: 'Nem igényel kezelést.',
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
              targeted: 'Nincs',
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
              targeted: 'Nincs',
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
      skin_soft_tissue: {
        name: 'Bőr és lágyrész fertőzések',
        icon: '🩹',
        color: '#e11d48',
        diseases: [
          {
            id: 'necrotizing_fasciitis',
            name: 'Nekrotizáló fasciitis',
            pathogen: { type: 'Baktérium', name: 'Polimikrobiális vagy Strep. pyogenes/S. aureus', gram: 'Vegyes', shape: 'Változó' },
            epidemiology: {
              incidence: 'Ritka (0.4/100,000), de növekvő incidencia',
              risk_groups: ['Diabetes mellitus', 'Perifériás érbetegség', 'Immunszuppresszió', 'Krónikus alkoholizmus', 'IV droghasználók', 'Trauma/sebészet után'],
              seasonality: 'Nincs',
              transmission: 'Endogén (bőrsérülés kapu) vagy direkt inokulálás'
            },
            pathomechanism: {
              steps: [
                'Baktériumok bejutása a subcutan szövetekbe (trauma, seb, varicella)',
                'Rapid terjedés a fascialis síkok mentén',
                'Bakteriális toxinok → thrombózis a mikrovaszkulatúrában',
                'Szöveti ischaemia és nekrózis',
                'Toxin-mediált shock (streptococcus)',
                'A bőr kezdetben ép, mert a felszíni vérellátás később károsodik'
              ],
              virulence_factors: ['Strep: M protein, Streptolysinek, SpeA/B/C szuperantigének', 'Staph: PVL, α-toxin', 'Anaerobok: kollagenázok, proteázok']
            },
            clinical: {
              incubation: 'Órák-napok (trauma után)',
              onset: 'Hiperakut, gyorsan progrediáló',
              symptoms: [
                { name: 'Intenzív fájdalom', description: 'ARÁNYTALAN a fizikális lelethez képest! ("Pain out of proportion")', severity: 'severe' },
                { name: 'Toxikus megjelenés', description: 'Elesett, septikus', severity: 'severe' },
                { name: 'Magas láz', description: 'Hidegrázás', severity: 'severe' },
                { name: 'Bőrelváltozások', description: 'Kezdetben erythema, majd livid, bullák, gangraena', severity: 'severe' },
                { name: 'Crepitatio', description: 'Gázképző kórokozók esetén', severity: 'severe' }
              ],
              physical_exam: [
                'Fájdalom aránytalanul SÚLYOS a látottakhoz képest (korai jel!)',
                'Feszes ödéma, gyors terjedés',
                'Bőr: erythema → livid → bullák → nekrózis',
                'Anaesthesia a területen (idegkárosodás)',
                'Crepitatio tapintásra (gáz)',
                'Szisztémás jelek: tachycardia, hypotonia, konfúzió'
              ],
              complications: ['Szeptikus shock', 'Többszervi elégtelenség', 'Végtag vesztés', 'Halál (20-40% kezeléssel is)']
            },
            diagnostics: {
              laboratory: [
                { test: 'LRINEC score', finding: '>6: magas valószínűség', interpretation: 'CRP, fehérvérsejt, hemoglobin, nátrium, kreatinin, glükóz' },
                { test: 'Vérkép', finding: 'Leukocytosis vagy leukopenia', interpretation: 'Szepszis' },
                { test: 'CRP/PCT', finding: 'Extrém emelkedett', interpretation: 'Súlyos bakteriális fertőzés' },
                { test: 'Lactát', finding: 'Emelkedett', interpretation: 'Szöveti hipoperfúzió' },
                { test: 'CK', finding: 'Emelkedett', interpretation: 'Izom érintettség' }
              ],
              imaging: [
                { modality: 'CT kontrasztos', finding: 'Fascia megvastagodás, gáz a lágyrészekben, folyadékgyülem', significance: 'Gyors, terjedés felmérése' },
                { modality: 'MRI', finding: 'Érzékenyebb fascia érintettségre', significance: 'Ha van idő és stabil a beteg' }
              ],
              microbiology: [
                { test: 'Hemokultúra', finding: 'Pozitív 20-40%', significance: 'Kórokozó azonosítás' },
                { test: 'Szöveti minta (sebészi)', finding: 'Tenyésztés + Gram', significance: 'Gold standard' },
                { test: 'Finger test', finding: 'Fascia széttolható, "dishwater" pus', significance: 'Intraoperatív diagnózis' }
              ]
            },
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Kevésbé toxikus, nincs aránytalanul nagy fájdalom, lassabb progresszió' },
              { disease: 'Mély vénás trombózis', distinguishing: 'Nem láz, nem erythema, Doppler UH' },
              { disease: 'G��zgangraena (Clostridium)', distinguishing: 'Izom nekrózis dominál, gyorsabb, bronz bőr' },
              { disease: 'Pyomyositis', distinguishing: 'Izom tályog, MRI' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NINCS ambuláns kezelés!', dose: 'AZONNALI MŰTÉT!', duration: '', note: 'Sebészeti sürgősség!' }
                ],
                inpatient: [
                  { drug: 'Piperacillin/tazobactam', dose: '4x4.5g IV', duration: 'Klinikai válasz alapján', note: 'Széles spektrum' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg IV', duration: '', note: 'MRSA fedezet' },
                  { drug: '+ Clindamycin', dose: '3x900mg IV', duration: '', note: 'Toxintermelés gátlás!' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Alternatíva' },
                  { drug: '+ Vancomycin + Clindamycin', dose: '', duration: '', note: 'Triple terápia' },
                  { drug: 'IVIG', dose: '1-2g/kg', duration: '', note: 'Streptococcus toxikus shock szindrómában' }
                ]
              },
              targeted: 'GAS: Penicillin+Clindamycin; MRSA: Vancomycin+Clindamycin; Polimikrobiális: széles spektrum',
              supportive: ['AZONNALI agresszív sebészi débridement', 'Intenzív osztály', 'Vazopresszor', 'Többszöri revízió (24-48 óránként)', 'HBO terápia (kiegészítő)'],
              prevention: ['Sebhigiéné', 'Diabétesz kontroll', 'Korai cellulitis kezelés']
            },
            prognosis: {
              mortality: '20-40% kezeléssel is, 100% kezelés nélkül',
              prognostic_scores: ['LRINEC', 'SOFA'],
              factors: 'Késői diagnózis, késői sebészet, immunszuppresszió, STSS, szervi elégtelenség'
            }
          }
        ]
      },
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
                { name: 'Primer: fájdalmatlan fekély (chancre)', description: 'Kemény szélű, tiszta alapú, egyetlen', severity: 'moderate' },
                { name: 'Szekunder: kiütés', description: 'Makulopapuláris, tenyéren/talpon is!, nem viszket', severity: 'moderate' },
                { name: 'Szekunder: condyloma latum', description: 'Lapos, nedvedző papulák anogenitálisan', severity: 'moderate' },
                { name: 'Szekunder: szisztémás', description: 'Láz, lymphadenopathia, hepatitis, uveitis', severity: 'moderate' },
                { name: 'Tercier: gumma', description: 'Granulomás nodulusok (bőr, csont, belső szervek)', severity: 'severe' },
                { name: 'Neuroszifilisz', description: 'Meningitis, tabes dorsalis, általános paresis', severity: 'severe' }
              ],
              physical_exam: [
                'Primer: fájdalmatlan genitalis/extragenitalis fekély + inguinalis lymphadenopathia',
                'Szekunder: generalizált nem viszkető kiütés (tenyér/talp!), mucous patches, alopecia',
                'Latens: tünetmentes',
                'Tercier: gumma (bőr, csont), szív- vagy idegrendszeri érintettség'
              ],
              complications: ['Neuroszifilisz', 'Kardiovaszkuláris szifilisz (aortitis)', 'Gumma', 'Congenitalis szifilisz', 'HIV koinfekció fokozott rizik��']
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
      }
      ,
      bone_joint: {
        name: 'Csont- és ízületi fertőzések',
        icon: '🦴',
        color: '#57534e',
        diseases: [
          {
            id: 'osteomyelitis',
            name: 'Osteomyelitis',
            pathogen: { type: 'Baktérium', name: 'Staphylococcus aureus (leggyakoribb)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyermekeknél hematogén, felnőtteknél poszttraumás/diabeteses láb',
              risk_groups: ['Diabetes mellitus', 'Perifériás érbetegség', 'Trauma/műtét', 'IV droghasználók', 'Hemodialízis'],
              seasonality: 'Nincs',
              transmission: 'Hematogén szórás, direkt terjedés (seb), inokuláció (trauma)'
            },
            pathomechanism: {
              steps: [
                'Baktérium megtapadása a csontszövetben/implantátumon',
                'Biofilm képzés (krónikus fertőzés alapja)',
                'Gyulladásos exsudatum növeli az intraosszeális nyomást',
                'Erek kompressziója → csont nekrózis (sequestrum)',
                'Új csontképződés a nekrózis körül (involucrum)'
              ],
              virulence_factors: ['Biofilm képzés', 'Adhezinek (MSCRAMM)', 'Toxinok']
            },
            clinical: {
              incubation: 'Napok (akut) vagy hetek-hónapok (krónikus)',
              onset: 'Változó',
              symptoms: [
                { name: 'Lokális fájdalom', description: 'Mély, feszítő, terhelésre fokozódik', severity: 'severe' },
                { name: 'Láz', description: 'Akut formában gyakori, krónikusban hiányozhat', severity: 'moderate' },
                { name: 'Duzzanat/erythema', description: 'Érintett terület felett', severity: 'moderate' },
                { name: 'Sipoly (sinus tract)', description: 'Krónikus osteomyelitis jele', severity: 'moderate' }
              ],
              physical_exam: [
                'Lokális nyomásérzékenység',
                'Melegség, duzzanat',
                'Mozgáskorlátozottság',
                'Szondázható csont (diabeteses láb fekélynél)'
              ],
              complications: ['Krónikus osteomyelitis', 'Patológiás törés', 'Szeptikus arthritis', 'Szisztémás szepszis', 'Amputáció szükségessége']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (akut)', interpretation: 'Gyulladás' },
                { test: 'CRP/We', finding: 'Emelkedett', interpretation: 'Monitorozásra is jó' },
                { test: 'Hemokultúra', finding: 'Pozitív (50%)', interpretation: 'Hematogén eredetnél' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'Korai fázisban negatív! Később periostalis reakció, lyticus léziók', significance: 'Késői jel' },
                { modality: 'MRI', finding: 'Csontvelő ödéma, tályog', significance: 'Gold standard (legérzékenyebb)' },
                { modality: 'Csontszcintigráfia', finding: 'Fokozott dúsítás', significance: 'Ha MRI nem végezhető' }
              ],
              microbiology: [
                { test: 'Csontbiopszia tenyésztés', finding: 'Kórokozó azonosítás', significance: 'Gold standard diagnózis' },
                { test: 'Sipoly váladék', finding: 'Gyakran kontaminált', significance: 'Nem megbízható' }
              ]
            },
            differential: [
              { disease: 'Charcot láb', distinguishing: 'Nincs láz/gyulladásos labor, neuropátia dominál' },
              { disease: 'Ewing sarcoma', distinguishing: 'Röntgen (hagymahéj), biopszia' },
              { disease: 'Cellulitis', distinguishing: 'Csak lágyrész érintett, MRI elkülöníti' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Általában kórházi kezelést/kivizsgálást igényel' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg IV', duration: '4-6 hét', note: 'MRSA fedezet' },
                  { drug: '+ Ceftriaxon/Cefepim', dose: 'IV', duration: '4-6 hét', note: 'Gram-negatív fedezet' }
                ],
                icu: [
                  { drug: 'Széles spektrum', dose: 'IV', duration: '', note: 'Sepszis esetén' }
                ]
              },
              targeted: 'Csontbiopszia alapján! S. aureus: Flucloxacillin/Cefazolin; MRSA: Vancomycin/Daptomycin. Időtartam: 4-6 hét (gyakran IV)',
              supportive: ['Sebészi debridement (nekrotikus csont eltávolítása) - KRITIKUS!', 'Rögzítés', 'Fájdalomcsillapítás'],
              prevention: ['Nyílt törések azonnali ellátása', 'Műtéti sterilitás', 'Diabeteses láb gondozása']
            },
            prognosis: {
              mortality: 'Alacsony, de morbiditás magas (krónikussá válás)',
              prognostic_scores: ['Cierny-Mader osztályozás'],
              factors: 'Vérellátás, implantátum jelenléte, sebészi radikalitás'
            }
          },
          {
            id: 'septic_arthritis',
            name: 'Szeptikus arthritis',
            pathogen: { type: 'Baktérium', name: 'Staphylococcus aureus, N. gonorrhoeae', gram: 'Vegyes', shape: 'coccus' },
            epidemiology: {
              incidence: '2-10/100,000 fő/év',
              risk_groups: ['Rheumatoid arthritis', 'Ízületi protézis', 'Idősek (>80 év)', 'Diabetes', 'IV droghasználók', 'Szexuálisan aktív fiatalok (Gonococcus)'],
              seasonality: 'Nincs',
              transmission: 'Hematogén (leggyakoribb), direkt inokuláció, per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Baktérium bejutása az ízületi résbe',
                'Synovialis membrán kolonizációja',
                'Akut gyulladásos válasz (neutrophilek beáramlása)',
                'Proteolytikus enzimek felszabadulása',
                'Porc és csont gyors pusztulása (napok alatt!)'
              ],
              virulence_factors: ['Adhezinek', 'Toxinok', 'Porckárosító enzimek']
            },
            clinical: {
              incubation: 'Gyors (órák-napok)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Ízületi fájdalom', description: 'Intenzív, nyugalomban is, mozgatásra fokozódik', severity: 'severe' },
                { name: 'Duzzanat', description: 'Ízületi folyadékgyülem', severity: 'moderate' },
                { name: 'Melegség/pirosság', description: 'Gyulladás jelei', severity: 'moderate' },
                { name: 'Láz', description: 'Gyakori, de nem mindig magas', severity: 'moderate' }
              ],
              physical_exam: [
                'Monarthritis (térd 50%, csípő, váll)',
                'Korlátozott mozgástartomány (antalgias tartás)',
                'Ballotálható patella (folyadék)',
                'Gonococcus: migrációs polyarthritis, bőrtünetek'
              ],
              complications: ['Ízületi destrukció (arthrosis)', 'Ankylosis', 'Sepszis', 'Osteomyelitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Szisztémás reakció' },
                { test: 'CRP/We', finding: 'Jelentősen emelkedett', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'Kezdetben negatív/lágyrész duzzanat, később ízületi rés beszűkülés', significance: 'Baseline' },
                { modality: 'UH', finding: 'Ízületi folyadék', significance: 'Punkció vezérlése' }
              ],
              microbiology: [
                { test: 'Ízületi punkció (Arthrocentesis)', finding: 'Gennyes, >50,000 WBC/µL, >90% PMN', significance: 'DIAGNOSZTIKUS!' },
                { test: 'Synovialis folyadék tenyésztés', finding: 'Pozitív', significance: 'Gold standard' },
                { test: 'Hemokultúra', finding: 'Pozitív (50%)', significance: 'Mindig levenni' },
                { test: 'PCR', finding: 'Gonococcus/Lyme', significance: 'Ha tenyésztés negatív' }
              ]
            },
            differential: [
              { disease: 'Köszvény (Gout)', distinguishing: 'Kristályok a punktátumban (negatív kettőstörés)' },
              { disease: 'Pseudoköszvény (CPPD)', distinguishing: 'Pozitív kettőstörésű kristályok' },
              { disease: 'Reaktív arthritis', distinguishing: 'Steril gyulladás, anamnézis (GI/GU fertőzés)' },
              { disease: 'Lyme arthritis', distinguishing: 'Kevésbé fájdalmas, szerológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Sürgősségi kórházi felvétel!' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg IV', duration: '', note: 'Gram+ (MRSA) fedezet' },
                  { drug: '+ Ceftriaxon', dose: '1x2g IV', duration: '', note: 'Gram- (Gonococcus) fedezet' }
                ],
                icu: [
                  { drug: 'Széles spektrum', dose: 'IV', duration: '', note: 'Sepszis esetén' }
                ]
              },
              targeted: 'S. aureus: Cefazolin/Oxacillin; MRSA: Vancomycin; Gonococcus: Ceftriaxon. Időtartam: 2-4 hét (IV majd PO)',
              supportive: ['Ízületi drenázs (tűaspiráció naponta VAGY arthroscopia) - KÖTELEZŐ!', 'Fájdalomcsillapítás', 'Korai mobilizáció gyulladás csökkenése után'],
              prevention: ['Protézis műtétek sterilitása', 'Gonorrhoea megelőzése']
            },
            prognosis: {
              mortality: '10-15% (polyarticularis/idős betegnél magasabb)',
              prognostic_scores: ['Nincs'],
              factors: 'Késői drenázs (>24-48 óra) irreverzibilis porckárosodást okoz!'
            }
          }
        ]
      }
      ,
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
      }
      ,
      sepsis_systemic: {
        name: 'Sepszis és szisztémás fertőzések',
        icon: '⚡',
        color: '#7f1d1d',
        diseases: [
          {
            id: 'sepsis',
            name: 'Sepszis (Sepsis)',
            pathogen: { type: 'Szindróma', name: 'Baktérium (G+/G-), Gomba, Vírus', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Világszerte 49 millió eset/év, 11 millió halál (20% összes halál)',
              risk_groups: ['Idősek (>65 év)', 'Csecsemők (<1 év)', 'Immunszupprimáltak', 'Krónikus betegek', 'Invazív eszközökkel rendelkezők'],
              seasonality: 'Nincs (télen gyakoribb a légúti eredet miatt)',
              transmission: 'Nem fertőző (a kiváltó infekció lehet az)'
            },
            pathomechanism: {
              steps: [
                'Infekció (PAMPs) felismerése a veleszületett immunrendszer által (TLR)',
                'Pro-inflammatorikus citokin vihar (TNF-α, IL-1, IL-6)',
                'Endothel aktiváció és károsodás (vaszkuláris permeabilitás↑)',
                'Koagulációs kaszkád aktiválódása (DIC) + fibrinolízis gátlása',
                'Mikrocirkulációs zavar, szöveti hipoxia, mitokondriális diszfunkció',
                'Többszervi elégtelenség (MODS)'
              ],
              virulence_factors: ['Endotoxin (LPS)', 'Szuperantigének', 'Exotoxinok', 'Tok']
            },
            clinical: {
              incubation: 'Az alapbetegségtől függ',
              onset: 'Órák alatt progrediálhat',
              symptoms: [
                { name: 'Láz vagy Hypothermia', description: '>38°C vagy <36°C', severity: 'severe' },
                { name: 'Tachypnoe', description: '>22/perc (qSOFA)', severity: 'moderate' },
                { name: 'Tudatzavar', description: 'GCS <15 (qSOFA)', severity: 'severe' },
                { name: 'Hypotonia', description: 'Systolés RR <100 Hgmm (qSOFA)', severity: 'severe' },
                { name: 'Oliguria', description: '<0.5 ml/kg/óra', severity: 'severe' }
              ],
              physical_exam: [
                'Meleg, kipirult bőr (korai) vagy hűvös, márványozott (késői/shock)',
                'Tachycardia',
                'Tachypnoe',
                'Zavartság',
                'Kapilláris újratelődési idő >2-3 mp'
              ],
              complications: ['Szeptikus shock (vazopresszor igény + laktát >2)', 'ARDS', 'DIC', 'Akut veseelégtelenség', 'Máj elégtelenség', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Laktát', finding: '>2 mmol/L', interpretation: 'Szöveti hipoxia/shock (Súlyos!)' },
                { test: 'Hemokultúra', finding: 'Pozitív (30-50%)', interpretation: 'AB adás ELŐTT levenni (2 szett)' },
                { test: 'PCT', finding: 'Jelentősen emelkedett', interpretation: 'Bakteriális eredet valószínű' },
                { test: 'Vérkép', finding: 'Leukocytosis vagy leukopenia', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'CT/Rtg/UH', finding: 'Fókusz keresés', significance: 'Forrás kontroll miatt kulcsfontosságú' }
              ],
              microbiology: [
                { test: 'Hemokultúra', finding: 'Kórokozó azonosítás', significance: 'Célzott terápia alapja' },
                { test: 'Egyéb tenyésztés', finding: 'Vizelet, köpet, seb, liquor', significance: 'Fókusz függő' }
              ]
            },
            differential: [
              { disease: 'Kardiogén shock', distinguishing: 'Echo (csökkent EF), emelkedett CVP/JVP' },
              { disease: 'Hypovolaemiás shock', distinguishing: 'Anamnézis (vérzés, folyadékvesztés), száraz nyálkahártyák' },
              { disease: 'Anafilaxia', distinguishing: 'Allergén expozíció, urticaria, stridor' },
              { disease: 'Mellékvesekéreg elégtelenség', distinguishing: 'Hyponatraemia, hyperkalaemia, kortizol szint' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Azonnali kórházi/intenzív felvétel!' }
                ],
                inpatient: [
                  { drug: 'Széles spektrumú AB', dose: 'IV (pl. Pip/Tazo, Meropenem)', duration: '1 órán belül!', note: 'Fókuszfüggő választás' },
                  { drug: 'Folyadékreszuszcitáció', dose: '30 ml/kg krisztalloid', duration: 'Első 3 órában', note: 'Ha hypotonia/laktát magas' }
                ],
                icu: [
                  { drug: 'Noradrenalin', dose: 'MAP >65 Hgmm tartása', duration: 'Folyamatos', note: 'Első választású vazopresszor' },
                  { drug: 'Hidrokortizon', dose: '200mg/nap', duration: '', note: 'Refrakter shock esetén' }
                ]
              },
              targeted: 'Antibiogram alapján de-eszkaláció! Forrás kontroll (tályog drenázs, nekrotikus szövet eltávolítás) elengedhetetlen.',
              supportive: ['Lélegeztetés', 'Vesepótló kezelés (CRRT)', 'Vércukor kontroll', 'Trombózis profilaxis', 'Stress fekély profilaxis'],
              prevention: ['Kórházi higiénia', 'Oltások (Pneumococcus, Influenza)', 'Katéterek korai eltávolítása', 'Megfelelő sebkezelés']
            },
            prognosis: {
              mortality: 'Sepszis: 10-20%, Szeptikus shock: 40-60%',
              prognostic_scores: ['SOFA score (≥2 pont változás)', 'qSOFA (szűrés)', 'APACHE II'],
              factors: 'Életkor, komorbiditás, laktát szint, shock időtartama, forrás kontroll sikere'
            }
          },
          {
            id: 'toxic_shock',
            name: 'Toxikus shock szindróma (TSS)',
            pathogen: { type: 'Baktérium', name: 'Staphylococcus aureus, Streptococcus pyogenes', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Ritka (Staph: 0.5/100,000, Strep: 3/100,000)',
              risk_groups: ['Menstruáló nők (tampon - ritkább ma már)', 'Sebészi betegek', 'Égési sérültek', 'Bőrfertőzések'],
              seasonality: 'Nincs',
              transmission: 'Nem közvetlenül terjed (toxin mediált)'
            },
            pathomechanism: {
              steps: [
                'Lokális fertőzés (hüvely, seb) vagy kolonizáció',
                'Exotoxin termelés (TSST-1, Enterotoxinok, SpeA/C)',
                'Szuperantigén hatás: T-sejtek nem specifikus aktiválása (akár 20%)',
                'Masszív citokin felszabadulás (Citokin vihar)',
                'Kapilláris leak, vasodilatatio, shock',
                'Többszervi elégtelenség'
              ],
              virulence_factors: ['TSST-1 (Staph)', 'Streptococcal Pyrogenic Exotoxins (Spe)', 'M-protein (Strep)']
            },
            clinical: {
              incubation: 'Gyors (órák-napok)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Magas láz', description: '>38.9°C', severity: 'severe' },
                { name: 'Diffúz erythroderma', description: 'Napégés-szerű kiütés', severity: 'moderate' },
                { name: 'Hypotonia', description: 'Shock, ájulás', severity: 'severe' },
                { name: 'Hányás, hasmenés', description: 'Gyakori prodroma', severity: 'moderate' },
                { name: 'Izomfájdalom', description: 'Súlyos myalgia', severity: 'moderate' }
              ],
              physical_exam: [
                'Diffúz vörös kiütés (később hámlik, tenyér/talp)',
                'Epernyelv (Strep)',
                'Nyálkahártya hyperaemia',
                'Hypotonia, tachycardia',
                'Tudatzavar'
              ],
              complications: ['Shock', 'ARDS', 'DIC', 'Veseelégtelenség', 'Végtag nekrózis (Strep)', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis, thrombocytopenia', interpretation: 'Szisztémás gyulladás' },
                { test: 'Vese/Máj', finding: 'Kreatinin↑, Transzaminázok↑', interpretation: 'Szervi elégtelenség' },
                { test: 'CK', finding: 'Emelkedett', interpretation: 'Rhabdomyolysis' },
                { test: 'Hemokultúra', finding: 'Staph: gyakran negatív (toxin!), Strep: gyakran pozitív', interpretation: 'Etiológia' }
              ],
              imaging: [
                { modality: 'CT/MRI', finding: 'Mély szöveti fertőzés keresése', significance: 'Strep TSS (necrotizáló fasciitis)' }
              ],
              microbiology: [
                { test: 'Tenyésztés', finding: 'Seb, hüvely, torok, vér', significance: 'Kórokozó azonosítás' },
                { test: 'Toxin kimutatás', finding: 'TSST-1', significance: 'Referencia labor' }
              ]
            },
            differential: [
              { disease: 'Sepszis (egyéb)', distinguishing: 'Nincs jellegzetes kiütés/hámlás' },
              { disease: 'Meningococcemia', distinguishing: 'Petechiae/purpura, meningitis jelek' },
              { disease: 'Gyógyszerreakció (DRESS)', distinguishing: 'Új gyógyszer, lassabb, eosinophilia' },
              { disease: 'Skarlát', distinguishing: 'Enyhébb, nincs shock' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Azonnali intenzív osztályos felvétel!' }
                ],
                inpatient: [
                  { drug: 'Clindamycin', dose: '900mg IV 8 óránként', duration: '', note: 'Toxin termelés gátlása! (Kulcsfontosságú)' },
                  { drug: '+ Vancomycin/Linezolid', dose: 'IV', duration: '', note: 'MRSA fedezet' },
                  { drug: '+ Pip/Tazo vagy Meropenem', dose: 'IV', duration: '', note: 'Polimikrobiális gyanú esetén' }
                ],
                icu: [
                  { drug: 'IVIG', dose: '1-2g/kg', duration: 'Egyszeri', note: 'Toxin semlegesítés (Strep TSS)' },
                  { drug: 'Vazopresszorok', dose: 'Noradrenalin', duration: '', note: 'Shock kezelése' }
                ]
              },
              targeted: 'Staph (MSSA): Flucloxacillin + Clindamycin; Strep: Penicillin G + Clindamycin. Forrás kontroll (tampon eltávolítás, sebészi feltárás)!',
              supportive: ['Masszív folyadékpótlás', 'Lélegeztetés', 'Dialízis', 'Sebkezelés'],
              prevention: ['Tampon higiénia (gyakori csere)', 'Sebfertőtlenítés']
            },
            prognosis: {
              mortality: 'Staph TSS: <3%, Strep TSS: 30-70%',
              prognostic_scores: ['SOFA'],
              factors: 'Kórokozó (Strep rosszabb), életkor, alapbetegség'
            }
          }
        ]
      }
      ,
      parasitic: {
        name: 'Parazitás fertőzések',
        icon: '🦟',
        color: '#854d0e',
        diseases: [
          {
            id: 'malaria',
            name: 'Malária',
            pathogen: { type: 'Protozoon', name: 'Plasmodium falciparum, vivax, ovale, malariae', gram: '-', shape: 'gyűrű/gametocyta' },
            epidemiology: {
              incidence: 'Világszerte >200 millió eset/év, >400,000 halál',
              risk_groups: ['Endémiás területre utazók', 'Gyermekek (<5 év)', 'Terhesek', 'Immunszupprimáltak'],
              seasonality: 'Esős évszak (szúnyogok)',
              transmission: 'Anopheles szúnyog csípése'
            },
            pathomechanism: {
              steps: [
                'Szúnyogcsípés → sporozoiták a vérbe',
                'Máj fázis (exoerythrocytás): schizonták képződése',
                'Vér fázis (erythrocytás): vvt invázió, szaporodás, ruptúra',
                'Ciklikus lázrohamok (vvt ruptúra)',
                'Cytoadherencia (P. falciparum): mikrocirkuláció elzáródása (agy, vese)'
              ],
              virulence_factors: ['PfEMP1 (adhézió)', 'Antigén variáció', 'Hemozoin pigment']
            },
            clinical: {
              incubation: '7-30 nap (fajtól függ)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Lázroham', description: 'Hidegrázás → Láz → Izzadás (ciklikus)', severity: 'severe' },
                { name: 'Fejfájás', description: 'Intenzív', severity: 'moderate' },
                { name: 'Hányinger, hányás', description: 'Gyakori', severity: 'moderate' },
                { name: 'Súlyos anémia', description: 'Vvt pusztulás', severity: 'severe' },
                { name: 'Cerebrális malária', description: 'Kóma, görcsök (P. falciparum)', severity: 'severe' }
              ],
              physical_exam: [
                'Láz, tachycardia',
                'Splenomegalia (gyakori)',
                'Hepatomegalia',
                'Sápadság (anémia)',
                'Icterus (hemolízis)'
              ],
              complications: ['Cerebrális malária', 'Súlyos anémia', 'ARDS', 'Veseelégtelenség (fekete víz láz)', 'Hypoglykaemia', 'Shock']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Anémia, thrombocytopenia', interpretation: 'Hemolízis/szekvesztráció' },
                { test: 'LDH, Bilirubin', finding: 'Emelkedett', interpretation: 'Hemolízis' },
                { test: 'Vércukor', finding: 'Alacsony lehet', interpretation: 'Súlyos malária' }
              ],
              imaging: [
                { modality: 'CT koponya', finding: 'Agyödéma', significance: 'Cerebrális malária kizárása' }
              ],
              microbiology: [
                { test: 'Vastagcsepp/Vékonykenet', finding: 'Plasmodium alakok', significance: 'GOLD STANDARD (Giemsa)' },
                { test: 'Gyorsteszt (RDT)', finding: 'HRP-2 vagy pLDH antigén', significance: 'Gyors, de kevésbé érzékeny alacsony csíraszámnál' },
                { test: 'PCR', finding: 'DNS', significance: 'Alacsony parazitaemianál' }
              ]
            },
            differential: [
              { disease: 'Influenza', distinguishing: 'Utazási anamnézis, periodicitás hiánya' },
              { disease: 'Dengue láz', distinguishing: 'Retrobulbaris fájdalom, kiütés, csonttörő fájdalom' },
              { disease: 'Typhus', distinguishing: 'Bratykardia, rózsahimlő, GI tünetek dominálnak' },
              { disease: 'Meningitis', distinguishing: 'Tarkókötöttség, liquor lelet' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Artemether-Lumefantrine', dose: 'PO', duration: '3 nap', note: 'Nem komplikált falciparum' },
                  { drug: 'Chloroquin', dose: 'PO', duration: '3 nap', note: 'Csak ha érzékeny (pl. vivax)' }
                ],
                inpatient: [
                  { drug: 'Artesunate', dose: '2.4 mg/kg IV', duration: 'Legalább 24 óra', note: 'Súlyos malária (első választás)' },
                  { drug: 'Kinin', dose: 'IV', duration: '', note: 'Alternatíva (mellékhatások!)' }
                ],
                icu: [
                  { drug: 'Artesunate IV', dose: 'Mint fent', duration: '', note: 'Súlyos szövődmények kezelése' }
                ]
              },
              targeted: 'Faj és súlyosság függő. P. vivax/ovale: +Primaquin (hipnozoiták ellen, G6PD hiányt kizárni!).',
              supportive: ['Lázcsillapítás', 'Folyadékpótlás (óvatosan tüdőödéma miatt)', 'Vércukor kontroll', 'Transzfúzió', 'Dialízis'],
              prevention: ['Szúnyogháló, repellens', 'Kemoprofilaxis (Mefloquin, Doxycyclin, Atovaquon-Proguanil)', 'Vakcina (RTS,S - részleges védelem)']
            },
            prognosis: {
              mortality: 'Nem komplikált: <0.1%; Súlyos: 10-20% (kezelt)',
              prognostic_scores: ['Parazitaemia mértéke (>5-10%)'],
              factors: 'Késői diagnózis, P. falciparum, életkor, terhesség'
            }
          },
          {
            id: 'toxoplasmosis',
            name: 'Toxoplasmosis',
            pathogen: { type: 'Protozoon', name: 'Toxoplasma gondii', gram: '-', shape: 'intracelluláris' },
            epidemiology: {
              incidence: 'Világnépesség 30-50%-a szeropozitív (latens)',
              risk_groups: ['Immunszupprimáltak (HIV/AIDS, transzplantált)', 'Terhesek (magzat!)', 'Macskatartók'],
              seasonality: 'Nincs',
              transmission: 'Feko-orális (macska ürülék), nyers hús (ciszta), vertikális'
            },
            pathomechanism: {
              steps: [
                'Oociszta/szöveti ciszta lenyelése',
                'Bélfal penetráció → tachyzoiták (gyors szaporodás)',
                'Haematogen szórás (akut fázis)',
                'Immunválasz → bradyzoiták (lassú) → szöveti ciszták képződése (izom, agy, szem)',
                'Latencia (élethosszig)',
                'Reaktiváció (immunszuppresszió): ciszta ruptúra → encephalitis'
              ],
              virulence_factors: ['Intracelluláris túlélés', 'Ciszta képzés', 'Immunmoduláció']
            },
            clinical: {
              incubation: '5-23 nap',
              onset: 'Lassú/tünetmentes',
              symptoms: [
                { name: 'Tünetmentes', description: 'Immundompetensek 80-90%-a', severity: 'mild' },
                { name: 'Mononukleózis-szerű', description: 'Láz, nyirokcsomó, fáradtság', severity: 'mild' },
                { name: 'Cerebrális (AIDS)', description: 'Fejfájás, zavartság, görcsök, hemiparesis', severity: 'severe' },
                { name: 'Chorioretinitis', description: 'Homályos látás, szemfájdalom', severity: 'moderate' },
                { name: 'Congenitalis', description: 'Hydrocephalus, calcificatio, chorioretinitis (Sabin-tetrád)', severity: 'severe' }
              ],
              physical_exam: [
                'Cervicalis lymphadenopathia (fájdalmatlan)',
                'Láz (ritka)',
                'Fokális neurológiai jelek (cerebrális toxo)',
                'Retina vizsgálat: sárgásfehér gócok'
              ],
              complications: ['Toxoplasma encephalitis (TE)', 'Vakság', 'Pneumonitis', 'Myocarditis', 'Magzati elhalás/károsodás']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Lymphocytosis', interpretation: 'Nem specifikus' },
                { test: 'CD4 szám', finding: '<100/µL', interpretation: 'Reaktiváció rizikó (HIV)' }
              ],
              imaging: [
                { modality: 'MRI agy', finding: 'Multiplex gyűrű alakú halmozó gócok (basalis ganglionok)', significance: 'Cerebrális toxo (AIDS)' },
                { modality: 'CT agy', finding: 'Meszesedés (congenitalis)', significance: 'Újszülött' }
              ],
              microbiology: [
                { test: 'Szerológia (IgM/IgG)', finding: 'IgM (akut), IgG (átvészeltség/latencia)', significance: 'Aviditás teszt (terhesség)' },
                { test: 'PCR', finding: 'DNS (liquor, magzatvíz, vér)', significance: 'Aktív fertőzés igazolása' },
                { test: 'Szövettan', finding: 'Tachyzoiták', significance: 'Biopszia (ritka)' }
              ]
            },
            differential: [
              { disease: 'Mononukleózis (EBV/CMV)', distinguishing: 'Szerológia, torokfájás dominál' },
              { disease: 'CNS Lymphoma', distinguishing: 'MRI (szoliter, periventricularis), EBV PCR, Thallium SPECT' },
              { disease: 'Macskakarmolási betegség', distinguishing: 'Egyoldali nyirokcsomó, inokulációs hely' },
              { disease: 'Egyéb encephalitis', distinguishing: 'Liquor lelet, képalkotó' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Immundompetens tünetmentes nem igényel kezelést' }
                ],
                inpatient: [
                  { drug: 'Pyrimethamin + Sulfadiazine', dose: 'PO', duration: '6 hét', note: 'Standard kezelés (+Folsav!)' },
                  { drug: 'Trimethoprim/Sulfamethoxazol', dose: 'PO/IV', duration: '6 hét', note: 'Alternatíva' }
                ],
                icu: [
                  { drug: 'Szteroid', dose: 'Dexamethason', duration: '', note: 'Mass effect (agyödéma) esetén' }
                ]
              },
              targeted: 'Terhesség: Spiramycin (I. trimeszter) vagy Pyrimethamin/Sulfadiazine (később). HIV profilaxis: TMP/SMX.',
              supportive: ['Folsav pótlás (Leucovorin) csontvelő védelemre', 'Görcsgátlók'],
              prevention: ['Hús alapos sütése', 'Macskaalom kerülése (terhesek)', 'Kézmosás', 'Profilaxis CD4<100 esetén (TMP/SMX)']
            },
            prognosis: {
              mortality: 'Immundompetens: kiváló; AIDS/TE: kezelés nélkül halálos, recidíva gyakori',
              prognostic_scores: ['Nincs'],
              factors: 'Immunstátusz, kezelés korai kezdése'
            }
          }
        ]
      }
      ,
      fungal: {
        name: 'Gombás fertőzések',
        icon: '🍄',
        color: '#d97706',
        diseases: [
          {
            id: 'candidiasis',
            name: 'Invasive Candidiasis',
            pathogen: { type: 'Gomba', name: 'Candida albicans (és non-albicans fajok)', gram: 'Sarjadzó gomba', shape: 'ovális' },
            epidemiology: {
              incidence: 'Nozokomiális véráramfertőzések 4. leggyakoribb oka',
              risk_groups: ['ICU betegek', 'Centrális véna (CVC)', 'Széles spektrumú AB', 'TPN', 'Hasi műtét'],
              seasonality: 'Nincs',
              transmission: 'Endogén (GI traktusból), exogén (kéz, eszközök)'
            },
            pathomechanism: {
              steps: [
                'Mucosa barrier sérülése (AB, kemo)',
                'Transzlokáció a véráramba',
                'Biofilm képzés (katéter)',
                'Haematogen szórás (szem, szív, máj, lép)'
              ],
              virulence_factors: ['Biofilm', 'Adhezinek', 'Enzimek (proteáz, foszfolipáz)']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Lassú vagy akut',
              symptoms: [
                { name: 'Perzisztáló láz', description: 'Antibiotikumra nem reagáló', severity: 'severe' },
                { name: 'Sepszis jelei', description: 'Hypotonia, tachycardia', severity: 'severe' },
                { name: 'Endophthalmitis', description: 'Látászavar, szemfájdalom', severity: 'moderate' },
                { name: 'Hepatosplenikus', description: 'Hasi fájdalom, májenzim emelkedés', severity: 'moderate' }
              ],
              physical_exam: [
                'Láz',
                'Hemodinamikai instabilitás',
                'Retina vizsgálat (fundoscopia): fehér gócok',
                'Bőrtünetek (ritka disszeminált esetben)'
              ],
              complications: ['Szeptikus shock', 'Endophthalmitis (vakság)', 'Endocarditis', 'Osteomyelitis', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Hemokultúra', finding: 'Pozitív (csak 50-70% érzékeny!)', interpretation: 'Gold standard' },
                { test: 'Beta-D-glükán', finding: 'Emelkedett (>80 pg/mL)', interpretation: 'Pan-fungális marker (kivéve Mucor/Crypto)' }
              ],
              imaging: [
                { modality: 'Has UH/CT', finding: 'Microabscessusok (máj, lép)', significance: 'Krónikus disszeminált' },
                { modality: 'Szemészet', finding: 'Chorioretinitis', significance: 'Minden fungémiás betegnél kötelező!' }
              ],
              microbiology: [
                { test: 'Tenyésztés', finding: 'Candida sp.', significance: 'Fajazonosítás és rezisztencia (fluconazol!)' },
                { test: 'T2Candida', finding: 'DNS kimutatás vérből', significance: 'Gyors, érzékeny' }
              ]
            },
            differential: [
              { disease: 'Bakteriális szepszis', distinguishing: 'Hemokultúra, PCT (bár gombánál is emelkedhet)' },
              { disease: 'Aspergillosis', distinguishing: 'Tüdő dominancia, Galactomannan' },
              { disease: 'Katéter infekció (bakt)', distinguishing: 'Tenyésztés' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Kórházi kezelés' }
                ],
                inpatient: [
                  { drug: 'Fluconazol', dose: '800mg loading, majd 400mg', duration: '14 nap', note: 'Csak stabil beteg, nem korábbi azol expozíció' }
                ],
                icu: [
                  { drug: 'Echinocandin (Caspofungin)', dose: '70mg -> 50mg', duration: '14 nap (negatív HK után)', note: 'Első választás instabil/súlyos betegnél' }
                ]
              },
              targeted: 'C. albicans: Fluconazol (ha érzékeny); C. glabrata/krusei: Echinocandin. Szemészet: szisztémás + intravitrealis.',
              supportive: ['CVC eltávolítása (erősen ajánlott!)', 'Szemészeti konzílium'],
              prevention: ['Kézmosás', 'Katéter care', 'Profilaxis (transzplantáltak)']
            },
            prognosis: {
              mortality: '30-40% (szeptikus shock esetén magasabb)',
              prognostic_scores: ['Candida score'],
              factors: 'Forrás kontroll (katéter), korai terápia'
            }
          },
          {
            id: 'aspergillosis',
            name: 'Invasive Aspergillosis',
            pathogen: { type: 'Gomba', name: 'Aspergillus fumigatus', gram: 'Penészgomba', shape: 'hifák (45° elágazás)' },
            epidemiology: {
              incidence: 'Neutropéniás betegek 5-10%-a',
              risk_groups: ['Prolongált neutropenia', 'Allogén őssejt transzplantáció', 'Szolid szerv transzplantáció', 'Nagy dózisú szteroid'],
              seasonality: 'Nincs (építkezés pora rizikó)',
              transmission: 'Konídiumok inhalációja (levegőből)'
            },
            pathomechanism: {
              steps: [
                'Konídiumok belégzése az alveolusokba',
                'Macrophagok kudarca (immunszuppresszió)',
                'Germináció hifákká',
                'Angioinvázió (erekbe törés)',
                'Thrombózis, infarktus, szöveti nekrózis',
                'Haematogen szórás (agy, bőr)'
              ],
              virulence_factors: ['Angioinvázió', 'Gliotoxin', 'Melanin']
            },
            clinical: {
              incubation: 'Napok-hetek (immunszuppresszió alatt)',
              onset: 'Szubakut/Akut',
              symptoms: [
                { name: 'Láz', description: 'Antibiotikum rezisztens', severity: 'severe' },
                { name: 'Pleurális fájdalom', description: 'Mellkasi szúró fájdalom', severity: 'moderate' },
                { name: 'Haemoptoe', description: 'Véres köpet (angioinvázió)', severity: 'severe' },
                { name: 'Dyspnoe', description: 'Nehézlégzés', severity: 'moderate' }
              ],
              physical_exam: [
                'Láz',
                'Pleurális dörzszörej',
                'Tüdő infiltrátum jelei',
                'Melléküreg érzékenység (sinusitis)',
                'Neurológiai jelek (agyi tályog)'
              ],
              complications: ['Masszív tüdővérzés', 'Agyi tályog', 'Disseminált aspergillosis', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Galactomannan (GM)', finding: 'Index >0.5', interpretation: 'Szérum vagy BAL (specifikus Aspergillusra)' },
                { test: 'Beta-D-glükán', finding: 'Pozitív', interpretation: 'Nem specifikus' }
              ],
              imaging: [
                { modality: 'CT mellkas', finding: 'Halo jel (korai), Levegő-félhold jel (késői), nodulusok', significance: 'Gold standard képalkotó' }
              ],
              microbiology: [
                { test: 'BAL tenyésztés', finding: 'Aspergillus sp.', significance: 'Bizonyított eset' },
                { test: 'Mikroszkópia', finding: 'Szeptált hifák, 45° elágazás', significance: 'Biopszia/BAL' }
              ]
            },
            differential: [
              { disease: 'Mucormycosis', distinguishing: 'Nincs szeptum, 90° elágazás, Voriconazol nem hat!' },
              { disease: 'Bakteriális pneumonia', distinguishing: 'Képalkotó (halo), GM negatív' },
              { disease: 'Tüdőembólia', distinguishing: 'Angio CT, D-dimer' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Kórházi kezelés' }
                ],
                inpatient: [
                  { drug: 'Voriconazol', dose: '6mg/kg -> 4mg/kg IV/PO', duration: '6-12 hét', note: 'GOLD STANDARD (szintmérés!)' }
                ],
                icu: [
                  { drug: 'Isavuconazol', dose: '200mg IV/PO', duration: 'Hosszú', note: 'Kevesebb mellékhatás' },
                  { drug: 'Liposomalis Amphotericin B', dose: '3-5mg/kg IV', duration: '', note: 'Alternatíva' }
                ]
              },
              targeted: 'Voriconazol vagy Isavuconazol. Salvage: L-AmB, Caspofungin (kombináció vitatott).',
              supportive: ['Immunszuppresszió csökkentése (ha lehet)', 'G-CSF (neutropenia rendezése)', 'Sebészi reszekció (masszív haemoptoe)'],
              prevention: ['Posaconazol profilaxis (neutropenia)', 'HEPA szűrős szobák', 'Maszkviselés']
            },
            prognosis: {
              mortality: 'Magas (30-80% rizikócsoporttól függően)',
              prognostic_scores: ['Nincs'],
              factors: 'Neutropenia tartama, agyi érintettség, terápia kezdete'
            }
          }
        ]
      }
    };
