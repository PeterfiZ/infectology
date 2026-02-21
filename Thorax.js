Object.assign(window.diseases, {
      bacterial_respiratory: {
        name: 'Bakteriális légúti fertőzések',
        icon: window.diseaseMetadata.bacterial_respiratory.icon,
        color: window.diseaseMetadata.bacterial_respiratory.color,
              tables: [
               {
                   title: 'Típusos vs. Atípusos Pneumonia Differenciáldiagnosztika',
                   headers: ['Jellemző', 'Típusos Pneumonia', 'Atípusos Pneumonia'],
                   rows: [
                     ['Kezdet', 'Hirtelen, drámai (hidegrázás)', 'Lassú, fokozatos (prodroma)'],
                     ['Láz', 'Magas (>39°C)', 'Hőemelkedés vagy mérsékelt láz'],
                     ['Mellkasi fájdalom', 'Pleurális, szúró (gyakori)', 'Retrosternális, égő (ritkább)'],
                     ['Köhögés', 'Produktív', 'Száraz, improduktív, kínzó'],
                     ['Köpet', 'Gennyes, rozsdabarna', 'Kevés, nyákos vagy hiányzik'],
                     ['Mellkasi folyadék', 'Gyakori (parapneumoniás)', 'Ritka'],
                     ['Radiológia', 'Lobaris/szegmentális konszolidáció, légtölcsér', 'Interstitialis, tejüvegszerű, diffúz, foltos'],
                     ['Extrapulmonális tünetek', 'Ritkák (kivéve szeptikus szóródás)', 'Gyakoriak (fejfájás, myalgia, fül/torok, GI, kiütés)'],
                     ['Labor (Fvs)', 'Leukocytosis, balra tolt', 'Normál vagy enyhe leukocytosis'],
                     ['Labor (CRP/PCT)', 'Jelentősen emelkedett (PCT >0.5)', 'Mérsékelten emelkedett (PCT <0.25)'],
                     ['Labor (Májenzimek)', 'Általában normál', 'Gyakran emelkedett (GOT, GPT)'],
                     ['Kórokozók', '<i>S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus, Klebsiella</i>', '<i>Mycoplasma, Chlamydia, Legionella, Coxiella</i>, Vírusok']
                   ]
                 }
               ],
        diseases: [
          {
            id: 'bacterial_pneumonia',
            name: 'Bakteriális pneumonia',
            pathogen: { type: 'Baktérium', name: '<i>Streptococcus pneumoniae</i>', gram: 'Gram-pozitív', shape: 'diplococcus' },
            epidemiology: {
              incidence: 'Leggyakoribb közösségben szerzett pneumonia (CAP) kórokozó (30-40%)',
              risk_groups: ['65 év felettiek', 'Krónikus betegek (COPD, szívelégtelenség, diabetes)', 'Immunszupprimáltak', 'Splenectomizáltak', 'Alkoholisták', 'Dohányosok'],
              seasonality: 'Téli-tavaszi csúcs, gyakran influenza szuperinfekció',
              transmission: 'Cseppfertőzés, endogén aktiváció'
            },
            pathomechanism: {
              steps: [
                'A fertőzés általában a felső légutakban kolonizáló baktériumok mikroaspirációjával kezdődik. A kórokozó virulenciafaktorai (pl. tok) segítenek elkerülni a gazdaszervezet védekező mechanizmusait (pl. fagocitózis).',
                'A baktériumok az alveolusokban elszaporodnak, ami heves gyulladásos választ vált ki. A felszabaduló toxinok (pl. pneumolysin) károsítják a hámsejteket.',
                'A gyulladásos sejtek (neutrophilek), vörösvértestek és fibrin kitöltik az alveolusokat, ami a tüdőszövet tömörödéséhez (konszolidáció) vezet. Ez a folyamat felelős a jellegzetes lobaris pneumonia képéért.'
              ],
              virulence_factors: ['Kapszula poliszacharid (93 szerotípus)', 'Pneumolysin', 'Autolysin (LytA)', 'Neuraminidáz', 'IgA1 proteáz']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Hirtelen, drámai kezdet',
              symptoms: [
                { name: 'Hirtelen kezdet', description: 'Magas láz, hidegrázás, elesettség jellemzi.', severity: 'severe' },
                { name: 'Légúti tünetek', description: 'Kezdetben száraz, majd produktív köhögés, klasszikusan rozsdabarna köpettel. Gyakori a pleurális, szúró mellkasi fájdalom és a nehézlégzés.', severity: 'moderate' },
                { name: 'Atípusos prezentáció', description: 'Időseknél a láz hiányozhat, és a tudatzavar lehet a vezető tünet.', severity: 'severe' }
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
            calculators: [
              {
                name: 'CURB-65 Score - Pneumonia súlyosság',
                items: [
                  { label: 'Zavartság (Confusion)', points: 1 },
                  { label: 'Urea > 7 mmol/L', points: 1 },
                  { label: 'Légzésszám ≥ 30/perc', points: 1 },
                  { label: 'Vérnyomás (Szisztolés < 90 vagy Diasztolés ≤ 60 Hgmm)', points: 1 },
                  { label: 'Életkor ≥ 65 év', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 1, text: 'Alacsony rizikó (halálozás <3%). Otthoni kezelés megfontolható.' },
                  { min: 2, max: 2, text: 'Közepes rizikó (halálozás 9%). Kórházi felvétel javasolt.' },
                  { min: 3, max: 5, text: 'Magas rizikó (halálozás 15-40%). Sürgős kórházi/intenzív osztályos kezelés.' }
                ]
              }
            ],
            differential: [
              { disease: 'Legionella pneumonia', distinguishing: 'Hiponatrémia, GI tünetek, atípusos rtg kép' },
              { disease: 'Klebsiella pneumonia', distinguishing: 'Alkoholisták, currant jelly köpet, felső lebeny' },
              { disease: 'Mycoplasma pneumonia', distinguishing: 'Fiatalok, lassú kezdet, atípusos tünetek' },
              { disease: 'Tüdőembólia', distinguishing: 'Rizikófaktorok, D-dimer, CTPA' },
              { disease: 'Szívelégtelenség', distinguishing: 'Kardiális anamnézis, BNP, kétoldali infiltrátum' }
            ],
            therapy: {
              guidelines: ['NICE NG138 (Pneumonia in adults) 2024/2025', 'ATS/IDSA 2019 CAP Guidelines', 'Magyar Infektológiai Társaság'],
              empirical: {
                cap_outpatient: {
                    title: 'CAP - Otthon kezelhető (Enyhe - CURB-65 0-1)',
                    drugs: [
                        { drug: 'Amoxicillin', dose: '3x500mg-1g PO', duration: '5 nap', note: 'Első választás (NICE). 5 napos kúra általában elegendő.' },
                        { drug: 'Doxycyclin', dose: '200mg stat, majd 1x100mg PO', duration: '5 nap', note: 'Penicillin allergia esetén.' },
                        { drug: 'Clarithromycin', dose: '2x500mg PO', duration: '5 nap', note: 'Alternatíva.' }
                    ]
                },
                cap_inpatient: {
                    title: 'CAP - Kórházi kezelés (Középsúlyos - CURB-65 2)',
                    drugs: [
                        { drug: 'Amoxicillin + Clarithromycin', dose: '3x500mg-1g PO/IV + 2x500mg PO/IV', duration: '5 nap', note: 'Atípusos fedezet szükséges lehet. (NICE)' },
                        { drug: 'Doxycyclin', dose: '200mg stat, majd 1x100mg PO', duration: '5 nap', note: 'Monoterápia penicillin allergia esetén.' },
                        { drug: 'Levofloxacin', dose: '1x500mg PO/IV', duration: '5 nap', note: 'Alternatíva (NICE: légúti fluorokinolon).' }
                    ]
                },
                cap_icu: {
                    title: 'CAP - Súlyos (CURB-65 3-5) / ITO',
                    drugs: [
                        { drug: 'Co-amoxiclav + Clarithromycin', dose: '1.2g IV 8ó + 500mg IV 12ó', duration: '7-10 nap', note: 'NICE ajánlás súlyos CAP-ra.' },
                        { drug: 'Ceftriaxon + Clarithromycin', dose: '1x2g IV + 2x500mg IV', duration: '7-10 nap', note: 'Gyakori alternatíva (nem NICE első vonal, de elterjedt).' },
                        { drug: 'Levofloxacin', dose: '1x500mg IV', duration: '7-10 nap', note: 'Béta-laktám allergia esetén.' }
                    ]
                },
                hap_early: {
                    title: 'HAP - Nem súlyos / Korai',
                    drugs: [
                        { drug: 'Co-amoxiclav', dose: '625mg PO 3x1 vagy 1.2g IV 3x1', duration: '5 nap', note: 'Első választás (NICE NG191).' },
                        { drug: 'Doxycyclin', dose: '100mg PO', duration: '5 nap', note: 'Alternatíva.' }
                    ]
                },
                hap_late_vap: {
                    title: 'HAP - Súlyos / VAP / Magas rizikó',
                    drugs: [
                        { drug: 'Antipseudomonas béta-laktám', dose: 'pl. Piperacillin/tazobactam, Cefepim, Meropenem', duration: '7 nap', note: '1. komponens (Gram-negatív fedezet).' },
                        { drug: '+ Antipseudomonas fluorokinolon vagy aminoglikozid', dose: 'pl. Ciprofloxacin, Amikacin', duration: '7 nap', note: '2. komponens (dupla G- fedezet, ha szükséges).' },
                        { drug: '+ MRSA fedezet', dose: 'Vancomycin vagy Linezolid', duration: '7 nap', note: '3. komponens (ha MRSA rizikó >10-20%).' }
                    ]
                },
                vap_stenotrophomonas: {
                    title: 'VAP - Stenotrophomonas maltophilia (Célzott)',
                    drugs: [
                        { drug: 'Trimethoprim/Sulfamethoxazol (TMP-SMX)', dose: '15-20 mg/kg/nap (TMP) IV 3-4 részben', duration: '14 nap', note: 'Első választás. Magas dózis szükséges!' },
                        { drug: 'Levofloxacin', dose: '750 mg IV 1x', duration: '14 nap', note: 'Alternatíva.' },
                        { drug: 'Cefiderocol', dose: '2g IV 8 óránként', duration: '14 nap', note: 'Rezerv antibiotikum.' }
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
            pathogen: { type: 'Mycobacterium', name: '<i>Mycobacterium tuberculosis</i>', gram: 'Saválló (Ziehl-Neelsen+)', shape: 'pálca' },
            epidemiology: {
              incidence: 'Világszerte ~10 millió új eset/év, Magyarországon ~500 eset/év',
              risk_groups: ['HIV pozitívak (20-30x rizikó)', 'Diabeteszes betegek', 'Immunszupprimáltak', 'Szociálisan hátrányos helyzetűek', 'Egészségügyi dolgozók', 'Bevándorlók endémiás területekről'],
              seasonality: 'Nincs szezonalitás',
              transmission: 'Cseppfertőzés (< 5 μm aeroszol), zárt térben 8+ óra expozíció'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a kórokozót tartalmazó aeroszol cseppek belélegzésével történik. A baktériumokat az alveoláris makrofágok fagocitálják, de azok túlélik és szaporodnak bennük.',
                'A fertőzés helyén kialakul a primer góc (Ghon-góc), és a baktériumok a regionális nyirokcsomókba jutnak, létrehozva a primer komplexust.',
                'A celluláris immunválasz (T-sejtek) aktiválódik, ami granulómaképződéshez vezet. Ezek a granulómák betokolják a baktériumokat, latens fertőzést (LTBI) hozva létre (az esetek 90%-a).',
                'Immunszuppresszió esetén a baktériumok reaktiválódhatnak. A granulóma közepe elsajtosodik (kazifikáló nekrózis), beolvadhat és üreget (caverna) képezhet, ami a fertőzés nyílt, fertőző formájához vezet.'
              ],
              virulence_factors: ['Cord factor (trehalóz-dimikolát)', 'Mycolic acid (sejtfal)', 'Lipoarabinomannan', 'ESAT-6 és CFP-10 szekretált antigének']
            },
            clinical: {
              incubation: 'Primer: 2-12 hét; Reaktiváció: évek-évtizedek',
              onset: 'Lassú, alattomos',
              symptoms: [
                { name: 'Légúti tünetek', description: 'Krónikus, 3 hétnél tovább tartó köhögés, amely kezdetben száraz, majd produktívvá válhat. Később véres köpet (haemoptysis) is megjelenhet.', severity: 'severe' },
                { name: 'Általános (B) tünetek', description: 'Alattomosan kezdődő, elhúzódó tünetek: hőemelkedés vagy láz (főleg délután), profúz éjszakai izzadás, és jelentős, nem szándékos fogyás.', severity: 'moderate' },
                { name: 'Egyéb', description: 'Fáradékonyság, étvágytalanság, mellkasi fájdalom.', severity: 'mild' }
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
                  { drug: 'Ugyanaz + izolálás', dose: 'Légúti izoláció', duration: '2 hét vagy 3 negatív köpet', note: 'Negatív nyomású szoba' }
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
            pathogen: { type: 'Baktérium', name: '<i>Legionella pneumophila</i>', gram: 'Gram-negatív (rosszul festődik)', shape: 'pálca, intracelluláris' },
            epidemiology: {
              incidence: 'CAP 2-9%-a, nozokomiális pneumonia akár 30%',
              risk_groups: ['50 év felettiek', 'Dohányosok', 'COPD betegek', 'Immunszupprimáltak', 'Krónikus veseelégtelenség', 'Diabetes'],
              seasonality: 'Nyár-ősz (légkondicionálás)',
              transmission: 'Inhaláció (aeroszol kontaminált vízből: hűtőtornyok, zuhanyok, buborékoztató medencék). NEM terjed emberről emberre!'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a baktériumot tartalmazó aeroszol (pl. zuhany, hűtőtorony, légkondicionáló) belélegzésével történik.',
                'A tüdőbe jutva a Legionellák az alveoláris makrofágokba kerülnek, ahol egy speciális szekréciós rendszer (Dot/Icm) segítségével megakadályozzák a fagoszóma-lizoszóma fúziót.',
                'A baktériumok a makrofágokon belül, egy védett vakuólumban szaporodnak, majd a sejtet elpusztítva újabb sejteket fertőznek meg.',
                'Ez a folyamat súlyos, nekrotizáló tüdőgyulladást és heves gyulladásos választ vált ki.'
              ],
              virulence_factors: ['Dot/Icm szekréciós rendszer', 'Mip (macrophage infectivity potentiator)', 'Flagellum', 'Több mint 300 effektor fehérje']
            },
            clinical: {
              incubation: '2-10 nap (átlag 5-6 nap)',
              onset: 'Prodroma 1-2 nap, majd rapid progresszió',
              symptoms: [
                { name: 'Atípusos pneumonia', description: 'Magas láz, hidegrázás, kezdetben száraz, improduktív köhögés.', severity: 'severe' },
                { name: 'Extrapulmonalis tünetek', description: 'Jellegzetes a multisystemás érintettség: gastrointestinalis (hasmenés, hányinger), neurológiai (fejfájás, zavartság, delírium).', severity: 'moderate' },
                { name: 'Jellegzetes jelek', description: 'Gyakori a relatív bradycardia (magas lázhoz képest alacsony pulzus) és a laborban a hyponatraemia.', severity: 'moderate' }
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
            calculators: [
              {
                name: 'CURB-65 Score - Pneumonia súlyosság',
                items: [
                  { label: 'Zavartság (Confusion)', points: 1 },
                  { label: 'Urea > 7 mmol/L', points: 1 },
                  { label: 'Légzésszám ≥ 30/perc', points: 1 },
                  { label: 'Vérnyomás (Szisztolés < 90 vagy Diasztolés ≤ 60 Hgmm)', points: 1 },
                  { label: 'Életkor ≥ 65 év', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 1, text: 'Alacsony rizikó (halálozás <3%). Otthoni kezelés megfontolható.' },
                  { min: 2, max: 2, text: 'Közepes rizikó (halálozás 9%). Kórházi felvétel javasolt.' },
                  { min: 3, max: 5, text: 'Magas rizikó (halálozás 15-40%). Sürgős kórházi/intenzív osztályos kezelés.' }
                ]
              }
            ],
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
            pathogen: { type: 'Baktérium', name: '<i>Mycoplasma pneumoniae</i>', gram: 'Nincs sejtfal', shape: 'pleomorf' },
            epidemiology: {
              incidence: 'CAP 15-20%-a, járványokban 50%',
              risk_groups: ['Iskoláskorú gyermekek', 'Fiatal felnőttek', 'Zárt közösségek (kollégium, laktanya)'],
              seasonality: 'Ősz-tél, de egész évben előfordul',
              transmission: 'Cseppfertőzés (szoros kontaktus)'
            },
            pathomechanism: {
              steps: [
                'A kórokozó a P1 adhezin segítségével szorosan a légúti hámsejtek csillóihoz tapad.',
                'A baktérium által termelt hidrogén-peroxid és a CARDS toxin károsítja a csillókat (ciliostasis), ami a mukociliáris clearance zavarához vezet.',
                'A gyulladásos válasz és a sejtkárosodás okozza az elhúzódó köhögést és a tüdőgyulladást.'
              ],
              virulence_factors: ['P1 adhezin', 'CARDS toxin', 'Hidrogén-peroxid']
            },
            clinical: {
              incubation: '2-3 hét',
              onset: 'Lassú, fokozatos',
              symptoms: [
                { name: 'Atípusos pneumonia', description: 'Fokozatos kezdet, hőemelkedés, fejfájás, rossz közérzet. A vezető tünet a hetekig tartó, száraz, rohamszerű, kínzó köhögés.', severity: 'moderate' },
                { name: '"Walking pneumonia"', description: 'A fizikális lelet (szegényes hallgatózási lelet) gyakran sokkal enyhébb, mint a mellkasröntgenen látható kiterjedt gyulladás.', severity: 'mild' },
                { name: 'Extrapulmonalis tünetek', description: 'Előfordulhatnak kiütések (pl. erythema multiforme), hemolitikus anémia (hideg agglutinin betegség), vagy neurológiai szövődmények.', severity: 'moderate' }
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
            pathogen: { type: 'Baktérium', name: '<i>Chlamydophila pneumoniae</i>', gram: 'Gram-negatív (intracelluláris)', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'CAP 5-10%-a',
              risk_groups: ['Idősek', 'Krónikus betegek', 'Zárt közösségek'],
              seasonality: 'Egész évben',
              transmission: 'Cseppfertőzés'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a fertőző elemi testek (EB) belélegzésével kezdődik. A sejten belül az EB-k retikuláris testekké (RB) alakulnak, amelyek a szaporodó formák.',
                'A szaporodás után az RB-k visszaalakulnak EB-ké, a sejt szétesik, és az új elemi testek további sejteket fertőznek meg.',
                'Ez a ciklus a légúti hámsejtek károsodásához és gyulladáshoz vezet.'
              ],
              virulence_factors: ['Intracelluláris életmód', 'Endotoxin-szerű anyagok']
            },
            clinical: {
              incubation: '3-4 hét',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Bifázisos lefolyás', description: 'Gyakran két fázisban zajlik: kezdetben pharyngitis és laryngitis (a rekedtség jellegzetes), majd 1-3 hét múlva alakul ki az atípusos pneumonia.', severity: 'moderate' },
                { name: 'Elhúzódó köhögés', description: 'A tüdőgyulladásra a hetekig, akár hónapokig tartó, száraz, irritatív köhögés a legjellemzőbb.', severity: 'moderate' }
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
            pathogen: { type: 'Baktérium', name: '<i>Chlamydia psittaci</i>', gram: 'Intracelluláris', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'Ritka, foglalkozási betegség',
              risk_groups: ['Madártartók (papagáj, galamb)', 'Állatorvosok', 'Baromfifeldolgozók'],
              seasonality: 'Nincs',
              transmission: 'Madár ürülék porának belégzése'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a madár (főleg papagáj, galamb) kiszáradt ürülékével szennyezett por belélegzésével történik.',
                'A kórokozó a tüdőből a retikuloendoteliális rendszerbe (máj, lép) jut, ahol szaporodik.',
                'A másodlagos virémia során a baktériumok visszajutnak a tüdőbe, ahol atípusos, interstitialis pneumoniát okoznak.'
              ],
              virulence_factors: ['Intracelluláris túlélés']
            },
            clinical: {
              incubation: '5-14 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Tífusz-szerű tünetek', description: 'Hirtelen kezdődő magas láz, hidegrázás, és kínzó, súlyos fejfájás.', severity: 'severe' },
                { name: 'Légúti tünetek', description: 'Száraz, improduktív köhögés. A fizikális lelet gyakran szegényes a röntgenképhez képest.', severity: 'moderate' },
                { name: 'Szisztémás jelek', description: 'Gyakori a hepatosplenomegalia és a relatív bradycardia (Faget-jel).', severity: 'moderate' }
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
            pathogen: { type: 'Baktérium', name: '<i>Coxiella burnetii</i>', gram: 'Gram-negatív (intracelluláris)', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'Zoonózis, foglalkozási betegség',
              risk_groups: ['Állattenyésztők', 'Vágóhídi dolgozók', 'Állatorvosok'],
              seasonality: 'Tavasz (ellési szezon)',
              transmission: 'Aeroszol (placenta, magzatvíz, tej, ürülék pora)'
            },
            pathomechanism: {
              steps: [
                'A fertőzés rendkívül fertőző állati termékek (placenta, magzatvíz) aeroszoljának belélegzésével történik.',
                'A kórokozó az alveoláris makrofágokba jut, ahol a savas fagoszómákban nemcsak túléli, hanem ott is szaporodik.',
                'A vérárammal szóródva eljut a májba és a csontvelőbe.',
                'A szervezet jellegzetes, "fánk" alakú (doughnut) granulómák képzésével próbálja megfékezni a fertőzést.',
                'A betegség lehet akut vagy krónikus (főleg endocarditis formájában).'
              ],
              virulence_factors: ['Spóraszerű forma (ellenálló)', 'LPS fázisvariáció']
            },
            clinical: {
              incubation: '2-3 hét',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Akut Q-láz', description: 'Hirtelen kezdődő, magas lázzal, súlyos, retrobulbáris fejfájással és influenzaszerű tünetekkel jár. Gyakori az atípusos tüdőgyulladás (enyhe köhögés) és a granulomás hepatitis (emelkedett májenzimek).', severity: 'moderate' },
                { name: 'Krónikus Q-láz', description: 'Hónapokkal-évekkel később alakul ki, főleg szívbillentyűhibával vagy immunszuppresszióval rendelkező betegeknél. Leggyakoribb manifesztációja a tenyésztés-negatív endocarditis.', severity: 'severe' }
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
        icon: window.diseaseMetadata.viral_respiratory.icon,
        color: window.diseaseMetadata.viral_respiratory.color,
        diseases: [
          {
            id: 'influenza',
            name: 'Influenza',
            pathogen: { type: 'Vírus', name: '<i>Influenza A/B/C vírus</i>', gram: 'RNS vírus, Orthomyxoviridae', shape: 'helikális' },
            epidemiology: {
              incidence: 'Szezonális járvány: 5-20% populáció/év, pandémiák: akár 50%',
              risk_groups: ['65 év felettiek', '5 év alattiak', 'Várandósok', 'Krónikus betegek', 'Egészségügyi dolgozók', 'Immunszupprimáltak'],
              seasonality: 'November-március (északi félteke)',
              transmission: 'Cseppfertőzés, kontakt (1-2 méter), fomit'
            },
            pathomechanism: {
              steps: [
                'A vírus a hemagglutinin (HA) segítségével kötődik a légúti hámsejtekhez, majd bejut a sejtbe.',
                'A sejten belül replikálódik, majd a neuraminidáz (NA) segítségével kiszabadul, hogy új sejteket fertőzzön meg.',
                'A vírusfertőzés a légúti hámsejtek pusztulásához és a csillószőrök károsodásához vezet, ami rontja a légutak tisztulását.',
                'A szervezet heves immunválasza (citokinvihar) okozza a szisztémás tüneteket, mint a láz és az izomfájdalom.'
              ],
              virulence_factors: ['Hemagglutinin (H1-18)', 'Neuraminidáz (N1-11)', 'NS1 protein (IFN antagonista)', 'PB1-F2 (pro-apoptotikus)']
            },
            clinical: {
              incubation: '1-4 nap (átlag 2 nap)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Hirtelen kezdet', description: 'Magas láz (>38°C), hidegrázás, súlyos fejfájás és izomfájdalom (myalgia).', severity: 'severe' },
                { name: 'Légúti tünetek', description: 'Jellemző a száraz, kínzó köhögés és a torokfájás.', severity: 'moderate' },
                { name: 'Általános tünetek', description: 'Kifejezett gyengeség, elesettség (prostráció) és étvágytalanság.', severity: 'moderate' }
              ],
              physical_exam: [
                'Lázas, elesett állapot',
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
            pathogen: { type: 'Vírus', name: '<i>SARS-CoV-2</i>', gram: 'RNS vírus, Coronaviridae', shape: 'gömb, spike fehérjék' },
            epidemiology: {
              incidence: 'Pandémia 2020-tól, endémiássá válás',
              risk_groups: ['65 év felettiek', 'Elhízottak (BMI>30)', 'Diabetes', 'Kardiovaszkuláris betegség', 'Immunszupprimáltak', 'Krónikus tüdőbetegek'],
              seasonality: 'Téli csúcs, de egész évben',
              transmission: 'Légúti (aeroszol + cseppfertőzés), kontakt, feko-orális ritka'
            },
            pathomechanism: {
              steps: [
                'A vírus a Spike (S) fehérjével kötődik a sejtek felszínén lévő ACE2 receptorhoz, ami számos szervben (tüdő, szív, erek, bél) megtalálható.',
                'A bejutás után a vírus a sejtben replikálódik (virális fázis).',
                'Súlyos esetekben a betegség második hetében egy túlzott immunválasz, az ún. citokinvihar alakulhat ki.',
                'Ez a hiperinflammáció szisztémás endothelkárosodáshoz, mikrotrombózisokhoz, és a tüdőben akut légzési distressz szindrómához (ARDS) vezet, ami a súlyos lefolyás alapja.'
              ],
              virulence_factors: ['Spike protein', 'NSP1 (host shutdown)', 'ORF8 (immunmoduláció)', 'Nucleocapsid']
            },
            clinical: {
              incubation: '2-14 nap (medián 5 nap, Omikron 3 nap)',
              onset: 'Változó',
              symptoms: [
                { name: 'Gyakori tünetek', description: 'Láz, száraz köhögés, fáradékonyság, izomfájdalom (myalgia).', severity: 'moderate' },
                { name: 'Jellegzetes tünetek', description: 'A szaglás és ízlelés elvesztése (anosmia, dysgeusia) korai, specifikus jel lehet.', severity: 'mild' },
                { name: 'Súlyos tünetek', description: 'Nehézlégzés (dyspnoe), mellkasi fájdalom és hypoxaemia (csökkent véroxigénszint), ami ARDS-hez vezethet.', severity: 'severe' }
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
        icon: window.diseaseMetadata.cardiovascular.icon,
        color: window.diseaseMetadata.cardiovascular.color,
        diseases: [
          {
            id: 'endocarditis',
            name: 'Infectiv endocarditis',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus, Streptococcus viridans</i>', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: '3-10/100,000 fő/év',
              risk_groups: ['Billentyűhibák', 'Műbillentyű', 'IV droghasználók', 'Congenitalis szívbetegség', 'Korábbi endocarditis'],
              seasonality: 'Nincs',
              transmission: 'Bakterémia (fogászati beavatkozás, bőrfertőzés, katéter)'
            },
            pathomechanism: {
              steps: [
                'A folyamat a szívbillentyű endotheljének sérülésével kezdődik, amihez steril trombus (nem-bakteriális trombotikus endocarditis, NBTE) tapad.',
                'Egy átmeneti bakterémia során (pl. fogászati beavatkozás) a keringő kórokozók megtapadnak ezen a sérült felszínen.',
                'A baktériumok szaporodnak, biofilmet képeznek, és egy baktériumokból, fibrinből és vérlemezkékből álló vegetációt hoznak létre.',
                'Ez a vegetáció károsítja a billentyűt (elégtelenséget okozva), és darabjai leszakadva szeptikus embóliát okozhatnak a test különböző részein (pl. agy, lép).'
              ],
              virulence_factors: ['Adhezinek (MSCRAMM)', 'Biofilm képzés', 'Toxinok']
            },
            clinical: {
              incubation: 'Napok (akut) vagy hetek (szubakut)',
              onset: 'Változó',
              symptoms: [
                { name: 'Általános tünetek', description: 'A leggyakoribb a láz, hidegrázás, éjszakai izzadás és a fogyás. A kép gyakran egy ismeretlen eredetű láz (FUO).', severity: 'moderate' },
                { name: 'Kardiális tünetek', description: 'Új vagy megváltozott szívzörej megjelenése, vagy a szívelégtelenség tünetei (nehézlégzés, ödéma) a billentyűkárosodás miatt.', severity: 'severe' },
                { name: 'Embóliás tünetek', description: 'A vegetációból leszakadó darabok szeptikus embóliát okozhatnak: stroke, lép- vagy veseinfarktus, bőrtünetek (Janeway-léziók, splinter haemorrhagiák).', severity: 'severe' }
              ],
              physical_exam: [
                'Láz',
                'Új szívzörej (főleg regurgitációs)',
                'Szívelégtelenség jelei (S3, pangás)',
                'Splenomegalia (15-30%)',
                'Perifériás jelek (Splinter, Osler, Janeway, Roth - ritkák)'
              ],
              complications: ['Szívelégtelenség (billentyű elégtelenség)', 'Szeptikus embólia (agy, lép, vese)', 'Tályog (gyűrű)', 'Glomerulonephritis']
            },
            diagnostics: {
              criteria: [
                { name: 'Major kritériumok (ESC 2023)', items: ['Pozitív hemokultúra (típusos kórokozó: S. aureus, Enterococcus, Viridans strep, S. gallolyticus, HACEK) 2 külön mintából', 'Képalkotó pozitív lelet (Echo/CT/PET-CT): Vegetáció, tályog, pseudoaneurysma, fistula, perforáció, új dehiszcencia', 'Paravalvularis lézió CT-vel', 'Abnormális aktivitás műbillentyű körül (PET/CT vagy SPECT/CT)', 'Pozitív Coxiella burnetii szerológia (Fázis I IgG titer >1:800)'] },
                { name: 'Minor kritériumok', items: ['Prediszpozíció (szívhiba, műbillentyű, korábbi IE)', 'Láz >38°C', 'Vaszkuláris jelenségek (embólia, szeptikus infarktus, mycotikus aneurysma, Janeway, képalkotóval igazolt léziók)', 'Immunológiai jelenségek (Osler-csomó, Roth-folt, RF+, Glomerulonephritis)', 'Mikrobiológiai igazolás (pozitív tenyésztés, ami nem felel meg a major kritériumnak)'] },
                { name: 'Diagnózis (Definitív)', items: ['2 Major', '1 Major + 3 Minor', '5 Minor'] }
              ],
              laboratory: [
                { test: 'Hemokultúra', finding: 'Pozitív (folyamatos bakterémia)', interpretation: 'DUKE major kritérium (3 szett!)' },
                { test: 'Vérkép', finding: 'Anémia, leukocytosis', interpretation: 'Krónikus gyulladás' },
                { test: 'CRP/We', finding: 'Emelkedett', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'Echocardiographia (TTE/TEE)', finding: 'Vegetáció, tályog, dehiszcencia', significance: 'Elsődleges képalkotó' },
                { modality: 'Szív CT / PET-CT'  , finding: 'Paravalvularis terjedés, embólia', significance: 'Kiegészítő (ESC 2023)' }
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
              guidelines: ['ESC 2023 Guidelines for the management of endocarditis'],
              empirical: {
                native_community: {
                  title: 'Empirikus: Natív billentyű vagy Késői műbillentyű (>12 hó)',
                  drugs: [
                    { drug: 'Ampicillin + (Flu)cloxacillin + Gentamicin', dose: '12g + 12g + 3mg/kg IV', duration: '4-6 hét', note: 'IB ajánlás. Gentamicin csak az első napokban/amíg a kórokozó nem ismert.' },
                    { drug: 'Vancomycin + Gentamicin', dose: '30-60mg/kg + 3mg/kg IV', duration: '4-6 hét', note: 'IB ajánlás. Penicillin allergia esetén.' },
                    { drug: 'Daptomycin + Gentamicin', dose: '10mg/kg + 3mg/kg IV', duration: '4-6 hét', note: 'IB ajánlás. Alternatíva.' }
                  ]
                },
                prosthetic_early: {
                  title: 'Empirikus: Korai műbillentyű (<12 hó) vagy Nozokomiális',
                  drugs: [
                    { drug: 'Vancomycin + Gentamicin + Rifampicin', dose: '30-60mg/kg + 3mg/kg + 900-1200mg IV/PO', duration: '6 hét', note: 'IB ajánlás. Rifampicin csak ha a bakterémia megszűnt (rezisztencia megelőzés).' }
                  ]
                },
                targeted_staph: {
                  title: 'Célzott: Staphylococcus spp.',
                  drugs: [
                    { drug: 'MSSA: (Flu)cloxacillin', dose: '12g/nap IV', duration: '4-6 hét', note: 'IB ajánlás. Penicillin allergia (nem anafilaxiás): Cefazolin 6g/nap (IB).' },
                    { drug: 'MRSA: Vancomycin', dose: '30-60mg/kg/nap IV', duration: '4-6 hét', note: 'IB ajánlás. Alternatíva: Daptomycin 10mg/kg (IB).' },
                    { drug: 'Műbillentyű (PVE): + Rifampicin + Gentamicin', dose: 'Kiegészítés', duration: 'Rif: 6 hét, Gent: 2 hét', note: 'IB ajánlás. Rifampicin 900-1200mg, Gentamicin 3mg/kg.' }
                  ]
                },
                targeted_strep: {
                  title: 'Célzott: Streptococcus spp. (Oral/Bowel)',
                  drugs: [
                    { drug: 'Penicillin G vagy Amoxicillin vagy Ceftriaxon', dose: 'Standard nagy dózis', duration: '4 hét', note: 'IB ajánlás. Penicillin érzékeny törzsek.' },
                    { drug: 'Kombináció Gentamicinnel', dose: 'Béta-laktám + 3mg/kg Gentamicin', duration: '2 hét', note: 'IB ajánlás. Csak natív billentyű, nem komplikált esetben rövidíthető.' },
                    { drug: 'Penicillin allergia: Vancomycin', dose: '30mg/kg/nap IV', duration: '4 hét', note: 'IB ajánlás.' }
                  ]
                },
                targeted_entero: {
                  title: 'Célzott: Enterococcus spp.',
                  drugs: [
                    { drug: 'Amoxicillin + Ceftriaxon', dose: '200mg/kg + 4g/nap IV', duration: '6 hét', note: 'IB ajánlás. E. faecalis ellen preferált (kisebb nephrotoxicitás mint gentamicinnel).' },
                    { drug: 'Ampicillin + Gentamicin', dose: '12g + 3mg/kg IV', duration: '4-6 hét', note: 'IB ajánlás. Hagyományos terápia.' },
                    { drug: 'Vancomycin + Gentamicin', dose: '30mg/kg + 3mg/kg IV', duration: '6 hét', note: 'IB ajánlás. Béta-laktám rezisztencia/allergia esetén.' }
                  ]
                },
                culture_neg: {
                  title: 'Haemocultura negatív IE',
                  drugs: [
                    { drug: 'Coxiella burnetii', dose: 'Doxycyclin + Hydroxychloroquin', duration: '>18 hónap', note: 'IB ajánlás. Q-láz endocarditis.' },
                    { drug: 'Bartonella spp.', dose: 'Doxycyclin + Gentamicin (2 hét)', duration: '6 hét', note: 'IB ajánlás.' },
                    { drug: 'Brucella spp.', dose: 'Doxycyclin + Streptomycin + Rifampicin', duration: '3-6 hónap', note: 'IB ajánlás.' }
                  ]
                }
              },
              targeted: 'Lásd a fenti részletes protokollokat. Stabil állapotú betegeknél (bal szívfél IE) 10-14 nap IV kezelés után orális váltás lehetséges (POET trial, IB ajánlás), ha a TEE kizárta a tályogot és a beteg kooperábilis.',
              supportive: ['Szívelégtelenség kezelése (IB)', 'Embólia profilaxis (antikoagulálás kontraindikált lehet vérzésveszély miatt!)', 'Fókusz kutatás (teljes test CT/PET-CT)'],
              prevention: ['Antibiotikum profilaxis (Amoxicillin 2g vagy Clindamycin 600mg) CSAK magas rizikójú betegeknél (műbillentyű, korábbi IE, cyanoticus congenitalis vitium) fogászati beavatkozás előtt (IIa)', 'Szájhigiéné (IB)']
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
            pathogen: { type: 'Vírus', name: '<i>Coxsackie B, Adenovírus, Parvovírus B19</i>', gram: 'RNS/DNS vírusok', shape: 'változó' },
            epidemiology: {
              incidence: 'Nehéz becsülni (sok enyhe eset), hirtelen szívhalál 10-20%-a fiatalokban',
              risk_groups: ['Fiatal felnőttek', 'Férfiak', 'Immunszupprimáltak'],
              seasonality: 'Vírusfüggő (pl. enterovírus nyár-ősz)',
              transmission: 'Feko-orális, cseppfertőzés (kórokozó függő)'
            },
            pathomechanism: {
              steps: [
                'A fertőzés egy vírusfertőzéssel kezdődik, amely során a vírus direkt módon károsíthatja a szívizomsejteket.',
                'A betegség későbbi, súlyosabb fázisát a szervezet túlzott immunválasza okozza. A T-sejtek és autoantitestek megtámadják a szívizomsejteket (molekuláris mimikri), ami kiterjedt gyulladást, nekrózist és szívizom-diszfunkciót eredményez.',
                'A gyógyulás során hegesedés (fibrózis) alakulhat ki, ami dilatatív cardiomyopathiához (DCM) és krónikus szívelégtelenséghez vezethet.'
              ],
              virulence_factors: ['Proteáz 2A (dystrophin hasítás)', 'Receptor kötés (CAR)']
            },
            clinical: {
              incubation: 'Vírusfertőzés után 1-2 hét',
              onset: 'Változó (tünetmentestől a fulminánsig)',
              symptoms: [
                { name: 'Vírusos prodroma', description: 'A szívtüneteket gyakran megelőzi egy néhány nappal korábbi lázas, légúti vagy gyomor-bélrendszeri fertőzés.', severity: 'mild' },
                { name: 'Szívelégtelenség tünetei', description: 'Fáradékonyság, terhelésre jelentkező nehézlégzés, majd nyugalmi nehézlégzés, ödéma.', severity: 'severe' },
                { name: 'Mellkasi fájdalom és ritmuszavar', description: 'Gyakori az atípusos, szúró mellkasi fájdalom (myopericarditis) és a szívdobogásérzés (palpitáció) a ritmuszavarok miatt.', severity: 'moderate' }
              ],
              physical_exam: [
                'Tachycardia (lázhoz képest aránytalan)',
                'Szívelégtelenség jelei (S3, tágult nyaki vénák, ödéma)',
                'Pericardialis dörzszörej (myopericarditis esetén)',
                'Arrhythmia (extrasystolék)'
              ],
              complications: ['Dilatatív cardiomyopathia (DCM)', 'Szívelégtelenség', 'Halálos ritmuszavar', 'Hirtelen szívhalál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Troponin (hs-cTn)', finding: 'Emelkedett', interpretation: 'Szívizom nekrózis (nagy szenzitivitás)' },
                { test: 'NT-proBNP', finding: 'Emelkedett', interpretation: 'Szívelégtelenség / prognosztikus marker' },
                { test: 'CRP/We', finding: 'Emelkedett', interpretation: 'Gyulladás' },
              ],
              imaging: [
                { modality: 'EKG', finding: 'ST-T eltérések, AV-blokk, QRS szélesedés', significance: 'Prognosztikus érték' },
                { modality: 'Echocardiographia', finding: 'Globális/regionális falmozgászavar, EF csökkenés, pericardialis folyadék', significance: 'Alapvizsgálat' },
                { modality: 'Szív MRI (CMR)', finding: 'Lake Louise kritériumok (T1/T2 jelek, LGE)', significance: 'Gold standard non-invazív diagnózis (ESC 2023)' }
              ],
              microbiology: [
                { test: 'Endomyocardialis biopszia (EMB)', finding: 'Gyulladás + Vírus PCR', significance: 'Gold standard. Indikált: fulmináns lefolyás, kezelésre nem reagáló HF, speciális gyanú (óriássejtes) (ESC 2023)' },
                { test: 'Vírus szerológia', finding: 'Nem javasolt rutinszerűen', significance: 'Alacsony diagnosztikus érték (kivéve hepatitis, HIV, Borrelia)' }
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
                  { drug: 'Fizikai kímélet', dose: 'Sporttilalom', duration: '3-6 hónap', note: 'Kulcsfontosságú! (ESC 2023)' },
                  { drug: 'NSAID (pl. Ibuprofen)', dose: 'Tüneti', duration: 'Rövid ideig', note: 'Csak mellkasi fájdalomra, ha EF megtartott!' }
                ],
                inpatient: [
                  { drug: 'Szívelégtelenség terápia (GDMT)', dose: 'ACEi/ARB/ARNI + BB + MRA + SGLT2i', duration: 'Krónikus', note: 'Ha LVEF csökkent (ESC 2023)' },
                  { drug: 'Antiarrhythmiás szerek', dose: 'Amiodaron', duration: '', note: 'Súlyos ritmuszavar esetén' }
                ],
                icu: [
                  { drug: 'Mechanikus keringéstámogatás (MCS)', dose: 'VA-ECMO, Impella', duration: '', note: 'Fulmináns myocarditis / kardiogén shock esetén' },
                  { drug: 'Nagy dózisú szteroid', dose: 'Methylprednisolon', duration: '', note: 'Csak bizonyított autoimmun/óriássejtes formában (vírus negatív!)' }
                ]
              },
              targeted: 'Immunszuppresszió (Prednisolon + Azathioprin) CSAK biopsziával igazolt vírus-negatív (PCR-) limfocitás, óriássejtes vagy szarkoidózis eredetű myocarditisben (ESC 2023). Aktív vírusfertőzésnél kontraindikált!',
              supportive: ['Szigorú fizikai kímélet (3-6 hónap) a gyulladás megszűnéséig', 'Szívelégtelenség kezelése', 'ICD implantáció (ha a gyulladás lezajlott és EF tartósan alacsony)'],
              prevention: ['Védőoltások (Influenza, COVID, Kanyaró)', 'Higiénia']
            },
            prognosis: {
              mortality: 'Változó: sokszor spontán gyógyul, fulmináns esetben magas. 50% DCM-be megy át.',
              prognostic_scores: ['Nincs'],
              factors: 'Kezdeti EF, QRS szélesség, troponin szint'
            }
          },
          {
            id: 'pericarditis',
            name: 'Akut pericarditis',
            pathogen: { type: 'Vírus/Idiopathiás', name: '<i>Coxsackie, Echovírus, Adenovírus, CMV, EBV</i>', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Gyakori (0.1% hospitalizáltak)',
              risk_groups: ['Férfiak (20-50 év)', 'Post-cardiotomia', 'Autoimmun betegek'],
              seasonality: 'Vírusfüggő',
              transmission: 'Cseppfertőzés (vírusos)'
            },
            pathomechanism: {
              steps: [
                'A szívburok (pericardium) lemezeinek gyulladása, leggyakrabban vírusfertőzés következtében.',
                'A gyulladás miatt a lemezek között fibrin rakódik le, ami a jellegzetes dörzszörejt okozza (száraz pericarditis).',
                'Folyadék is termelődhet (pericardialis effúzió), ami ha gyorsan vagy nagy mennyiségben halmozódik fel, összenyomhatja a szívet és szívtamponádot okozhat.'
              ],
              virulence_factors: ['-']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Jellegzetes mellkasi fájdalom', description: 'Éles, szúró, belégzésre és fekvő helyzetben fokozódó fájdalom, amely előre dőlve enyhül.', severity: 'severe' },
                { name: 'Egyéb tünetek', description: 'Gyakran kíséri alacsony láz, rossz közérzet és nehézlégzés.', severity: 'mild' }
              ],
              physical_exam: [
                'Pericardialis dörzszörej (systolés és diastolés komponens)',
                'Halk szívhangok (effusion)',
                'Beck-triász (tamponádnál): hypotonia, halk szívhangok, tágult nyaki vénák'
              ],
              complications: ['Pericardialis tamponád', 'Konstriktív pericarditis', 'Recidív pericarditis (15-30%)']
            },
            diagnostics: {
              criteria: [
                { name: 'Diagnózis (2 a 4-ből)', items: ['Mellkasi fájdalom (típusos)', 'Pericardialis dörzszörej', 'EKG eltérések (ST-eleváció, PR-depresszió)', 'Pericardialis folyadék (Echo)'] }
              ],
              laboratory: [
                { test: 'CRP/We', finding: 'Emelkedett', interpretation: 'Gyulladás aktivitása (követésre is!)' },
                { test: 'Troponin', finding: 'Normál vagy enyhén emelkedett', interpretation: 'Myocarditis kizárása (ha magas: myopericarditis)' },
                { test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'EKG', finding: 'Diffúz konkáv ST-eleváció, PR-depresszió (aVR-ben eleváció)', significance: 'Diagnosztikus' },
                { modality: 'Echocardiographia', finding: 'Pericardialis folyadék', significance: 'Tamponád kizárása, diagnózis' },
                { modality: 'Mellkas rtg', finding: 'Normál vagy "kulacs szív" (nagy folyadék)', significance: 'Egyéb okok kizárása' }
              ],
              microbiology: [
                { test: 'Vírus szerológia', finding: 'Nem rutinszerű', significance: 'Csak speciális esetben' },
                { test: 'Pericardiocentesis', finding: 'Tenyésztés/PCR', significance: 'Csak tamponád vagy purulens/neoplasiás gyanú esetén' }
              ]
            },
            differential: [
              { disease: 'Akut myocarditis', distinguishing: 'Troponin emelkedés dominál, falmozgászavar' },
              { disease: 'STEMI', distinguishing: 'Konvex ST-eleváció, reciprok depresszió, regionális' },
              { disease: 'Tüdőembólia', distinguishing: 'Dyspnoe dominál, D-dimer, CT' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Aspirin', dose: '750-1000mg 8 óránként', duration: '1-2 hét, majd leépítés', note: 'Első választás (ESC 2015)' },
                  { drug: 'Ibuprofen', dose: '600mg 8 óránként', duration: '1-2 hét, majd leépítés', note: 'Alternatíva' },
                  { drug: '+ Colchicin', dose: '0.5mg naponta 1x (<70kg) vagy 2x (>70kg)', duration: '3 hónap', note: 'Recidíva megelőzésére (ESC 2015)!' },
                  { drug: 'PPI', dose: 'Standard', duration: 'NSAID mellé', note: 'Gyomorvédelem' }
                ],
                inpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Csak magas rizikó esetén (láz >38, szubakut, nagy folyadék, tamponád, antikoagulált beteg)' }
                ],
                icu: [
                  { drug: 'Pericardiocentesis', dose: 'Drenázs', duration: '', note: 'Tamponád esetén életmentő' }
                ]
              },
              targeted: 'Szteroid (Prednisolon 0.2-0.5 mg/kg) CSAK ha NSAID/Colchicin kontraindikált, sikertelen, vagy specifikus indikáció (autoimmun).',
              supportive: ['Fizikai kímélet (sporttilalom) a CRP normalizálódásáig (min. 3 hónap sportolóknál)'],
              prevention: ['Colchicin adása az első epizódnál']
            },
            prognosis: {
              mortality: 'Alacsony, tamponád esetén életveszélyes',
              prognostic_scores: ['Nincs'],
              factors: 'Recidíva gyakori, konstriktív pericarditis ritka (<1% idiopathiásnál)'
            }
          }
        ]
      },
      upper_respiratory: {
        name: 'Felsőlégúti fertőzések',
        icon: window.diseaseMetadata.upper_respiratory.icon,
        color: window.diseaseMetadata.upper_respiratory.color,
        diseases: [
          {
            id: 'upper_respiratory_infections',
            name: 'Felsőlégúti fertőzések (közönséges nátha)',
            pathogen: { type: 'Vírus', name: '<i>Rhinovirus</i> (leggyakoribb), <i>Coronavirus, Adenovirus, Influenza</i>', gram: 'RNS vírusok', shape: 'változó' },
            epidemiology: {
              incidence: 'Leggyakoribb fertőzés, felnőttek 2-3x/év, gyermekek 6-8x/év',
              risk_groups: ['Gyermekek', 'Idősek', 'Immunszupprimáltak'],
              seasonality: 'Egész évben, csúcs ősz-tél',
              transmission: 'Cseppfertőzés, kontakt, fomit'
            },
            pathomechanism: {
              steps: [
                'A vírusok a felső légutak nyálkahártyáján keresztül jutnak be, ahol a hámsejtekben szaporodnak.',
                'A fertőzés lokális gyulladást, ödémát és fokozott váladéktermelést vált ki.',
                'Ez okozza a jellegzetes tüneteket: orrfolyás, orrdugulás, torokfájás.'
              ],
              virulence_factors: ['Receptor kötés (ICAM-1 rhinovirusnál)', 'Immunmoduláció']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Tipikus tünetek', description: 'Jellemzően orrfolyás, orrdugulás, tüsszögés, torokfájás és száraz köhögés. A láz általában enyhe vagy hiányzik. A tünetek általában 7-10 nap alatt maguktól gyógyulnak.', severity: 'mild' }
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
            pathogen: { type: 'Vírus', name: '<i>Human Respiratory Syncytial Virus</i> (HRSV)', gram: 'RNS vírus, Pneumoviridae', shape: 'helikális' },
            epidemiology: {
              incidence: 'Minden gyermek átesik 2 éves koráig, felnőttek reinfekció',
              risk_groups: ['Csecsemők (<6 hó)', 'Idősek (>65 év)', 'Krónikus tüdőbetegek', 'Immunszupprimáltak'],
              seasonality: 'Tél-tavasz',
              transmission: 'Cseppfertőzés, kontakt (nagyon fertőző!)'
            },
            pathomechanism: {
              steps: [
                'A vírus a légúti hámsejteket fertőzi, és a fúziós (F) fehérjéje segítségével a sejtek összeolvadását, ún. syncytiumok képződését idézi elő.',
                'Ez a folyamat a hámsejtek pusztulásához, a csillók károsodásához és fokozott váladéktermeléshez vezet.',
                'Csecsemőkben a kis légutak (bronchiolusok) a váladék és az ödéma miatt beszűkülnek, ami a jellegzetes bronchiolitis képét hozza létre (sípolás, nehézlégzés).'
              ],
              virulence_factors: ['Fúziós fehérje (F)', 'G glikoprotein (adherencia)']
            },
            clinical: {
              incubation: '4-6 nap',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Kezdeti tünetek', description: 'Enyhe, felső légúti tünetekkel (orrfolyás, hőemelkedés) kezdődik.', severity: 'mild' },
                { name: 'Bronchiolitis (csecsemők)', description: 'A legsúlyosabb forma csecsemőkben. Nehézlégzés, sípoló légzés (wheezing), tachypnoe és bordaközi behúzódások jellemzik. Súlyos esetben apnoe (légzéskimaradás) és légzési elégtelenség is kialakulhat.', severity: 'severe' }
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
               prevention: ['Kézhigiéné', 'Izoláció', 'Passzív immunizáció: Nirsevimab, Clesrovimab (hosszú hatásúak), Palivizumab', 'Vakcináció: Idősek (>60 év) és terhesek (anyai oltás)']
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
            pathogen: { type: 'Baktérium', name: '<i>Streptococcus pyogenes</i> (GAS, leggyakoribb)', gram: 'Gram-pozitív', shape: 'lánc' },
            epidemiology: {
              incidence: 'Gyakori gyermekkorban, 5-15 év',
              risk_groups: ['Gyermekek', 'Fiatal felnőttek'],
              seasonality: 'Tél-tavasz',
              transmission: 'Cseppfertőzés, kontakt'
            },
            pathomechanism: {
              steps: [
                'A baktériumok a garat nyálkahártyáján megtapadva heves lokális gyulladást váltanak ki.',
                'Ez a mandulák duzzanatát, vörösségét és gennyes lepedék (tüszők) képződését okozza.',
                'A bakteriális toxinok (pl. streptolysin) felelősek a szisztémás tünetekért, mint a láz, és az eritrogén toxin a skarlát kiütéseiért.'
              ],
              virulence_factors: ['M protein', 'Streptolysinek', 'Hyaluronidáz']
            },
            clinical: {
              incubation: '2-5 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Helyi tünetek', description: 'Hirtelen kezdődő, erős torokfájás és nyelési nehézség. A mandulák duzzadtak, vörösek, és gyakran fehér, gennyes lepedék (tüszők) borítja őket.', severity: 'severe' },
                { name: 'Általános tünetek', description: 'Magas láz, hidegrázás, fejfájás és a nyaki nyirokcsomók fájdalmas duzzanata kíséri.', severity: 'moderate' }
              ],
              physical_exam: [
                'Tonsilla hyperaemia, duzzanat',
                'Exsudátum',
                'Cervicalis lymphadenitis',
                'Skarlát tünetek (ritka)'
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
            calculators: [
              {
                name: 'Centor Score (McIsaac) - Strep A valószínűség',
                items: [
                  { label: 'Láz > 38°C', points: 1 },
                  { label: 'Köhögés hiánya', points: 1 },
                  { label: 'Érzékeny elülső nyaki nyirokcsomók', points: 1 },
                  { label: 'Tonsilla duzzanat vagy exsudatum', points: 1 },
                  { label: 'Életkor 3-14 év', points: 1 },
                  { label: 'Életkor ≥ 45 év', points: -1 }
                ],
                interpretation: [
                  { min: -1, max: 1, text: 'Alacsony kockázat (<10%). Antibiotikum nem javasolt.' },
                  { min: 2, max: 3, text: 'Közepes kockázat (15-30%). Tenyésztés vagy gyorsteszt javasolt. Pozitív esetben AB.' },
                  { min: 4, max: 5, text: 'Magas kockázat (>50%). Empirikus antibiotikum adható vagy tesztelés.' }
                ]
              }
            ],
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
              prognostic_scores: ['Centor Score (McIsaac)'],
              factors: 'Késői kezelés'
            }
          },
          {
            id: 'sinusitis',
            name: 'Sinusitis (arcüreggyulladás)',
            pathogen: { type: 'Vírus/Baktérium', name: 'Vírusok (első 7-10 nap), majd <i>Streptococcus pneumoniae, Haemophilus influenzae</i>', gram: 'Vegyes', shape: 'változó' },
            epidemiology: {
              incidence: 'Gyakori, felnőttek 1-2x/év',
              risk_groups: ['Allergiások', 'Dohányosok', 'Immunszupprimáltak'],
              seasonality: 'Tél',
              transmission: 'Endogén, felsőlégúti fertőzés szövődménye'
            },
            pathomechanism: {
              steps: [
                'Egy felső légúti vírusfertőzés (nátha) következtében az orr- és melléküreg-nyálkahártya megduzzad.',
                'Az ödéma elzárja a melléküregek kivezető nyílásait (ostiumokat), ami a váladék pangásához vezet.',
                'A pangó váladék ideális táptalajt biztosít a bakteriális felülfertőződés számára, ami gennyes gyulladást eredményez.'
              ],
              virulence_factors: ['Biofilm képzés']
            },
            clinical: {
              incubation: 'Felsőlégúti fertőzés után',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Jellegzetes tünetek', description: 'Arcfájdalom vagy nyomásérzés, amely előrehajlásra fokozódik. Orrdugulás, gennyes orrfolyás és gyakran fejfájás kíséri.', severity: 'moderate' },
                { name: 'Bakteriális felülfertőződés jelei', description: 'A 10 napnál tovább tartó vagy rosszabbodó tünetek ("kettős rosszabbodás"), illetve a magas láz (>38°C) és az egyoldali arcfájdalom utal bakteriális eredetre.', severity: 'moderate' }
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
            pathogen: { type: 'Baktérium', name: '<i>Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis</i>', gram: 'Vegyes', shape: 'coccus/bacillus' },
            epidemiology: {
              incidence: 'Gyakori gyermekkorban, 80% átesik 3 éves koráig',
              risk_groups: ['Csecsemők', 'Gyermekek', 'Passzív dohányzás'],
              seasonality: 'Tél',
              transmission: 'Felsőlégúti fertőzés szövődménye'
            },
            pathomechanism: {
              steps: [
                'Felső légúti fertőzés következtében a fülkürt (Eustach-kürt) funkciója károsodik, a nyálkahártya megduzzad.',
                'A középfülben negatív nyomás alakul ki, ami folyadék felhalmozódásához vezet (savós középfülgyulladás).',
                'Ez a folyadék felülfertőződhet a nasopharynxból származó baktériumokkal, gennyes gyulladást okozva, ami a dobhártya elődomborodásához és fájdalomhoz vezet.'
              ],
              virulence_factors: ['Biofilm', 'Toxinok']
            },
            clinical: {
              incubation: 'Felsőlégúti fertőzés után',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Főbb tünetek', description: 'Hirtelen kezdődő, erős, lüktető fülfájás, láz és halláscsökkenés.', severity: 'severe' },
                { name: 'Csecsemőkori jelek', description: 'Csecsemőkben ingerlékenység, vigasztalhatatlan sírás, étvágytalanság és a fülhöz kapkodás a jellemző.', severity: 'moderate' }
              ],
              physical_exam: [
                'Dobhártya hyperaemia, duzzanat',
                'Perforáció esetén váladék',
                'Dobhártya punctio ha szükséges'
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