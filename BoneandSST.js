Object.assign(window.diseases, {
     skin_soft_tissue: {
        name: 'Bőr és lágyrész fertőzések',
        icon: '🩹',
        color: '#e11d48',
        diseases: [
          {
            id: 'necrotizing_fasciitis',
            name: 'Nekrotizáló fasciitis',
            pathogen: { type: 'Baktérium', name: 'Polimikrobiális (I. típus) vagy Monomikrobiális (II. típus)', gram: 'Vegyes', shape: 'Változó' },
            epidemiology: {
              incidence: 'Ritka (0.4-1/100,000), de magas mortalitású',
              risk_groups: ['I. típus: Diabetes, immunszuppresszió, elhízás, perifériás érbetegség', 'II. típus: Egészséges fiatalok, trauma, műtét, IV droghasználat', 'III. típus: Tengervíz expozíció, májbetegség (Vibrio)'],
              seasonality: 'Nincs',
              transmission: 'Endogén (bőrsérülés kapu) vagy direkt inokulálás'
            },
            pathomechanism: {
              steps: [
                'Behatolás: A fertőzés egy bőrsérülésen (akár minimálison) keresztül jut a subcutan szövetekbe. A baktériumok a felületes fascia mentén gyorsan terjednek, kihasználva a rossz vérellátású síkokat.',
                'Toxinhatás: A kórokozók (főleg a GAS és Clostridium) erős toxinokat termelnek, amelyek direkt szöveti nekrózist, a kiserek trombózisát és a helyi immunválasz gátlását okozzák.',
                'Szöveti nekrózis: A trombózis és a gyulladásos ödéma tovább rontja a vérellátást, ami kiterjedt szövetelhaláshoz vezet. A folyamat a bőr alatti idegeket is elpusztítja, ami a terület érzéketlenné válásához vezet (késői jel).',
                'Szisztémás toxicitás: A toxinok a keringésbe jutva szisztémás toxikus shock szindrómát és többszervi elégtelenséget okoznak.'
              ],
              virulence_factors: ['Strep: M protein, exotoxinok (SpeA/B/C)', 'Staph: PVL, TSST-1', 'Clostridium: alfa-toxin', 'Anaerobok: gázképzés']
            },
            clinical: {
              incubation: 'Órák-napok (trauma után)',
              onset: 'Hiperakut, fulmináns',
              symptoms: [
                { name: 'Korai jelek', description: 'A legfontosabb korai jel a klinikai képhez képest aránytalanul erős, kínzó fájdalom. A bőrön csak enyhe bőrpír vagy duzzanat látható, de a beteg elesett, lázas.', severity: 'severe' },
                { name: 'Késői jelek', description: 'A bőr sötétlila vagy fekete lesz, hólyagok (bullák) jelennek meg, és a bőr alatti szövetekben gáz (crepitatio) tapintható. A fájdalom megszűnhet az idegek elhalása miatt, ami rossz jel. Gyorsan szeptikus shock alakul ki.', severity: 'severe' }
              ],
              physical_exam: [
                'Fájdalom aránytalanul SÚLYOS a látottakhoz képest (korai jel!)',
                'Feszes, "fás" tapintatú ödéma, amely túlterjed a bőrpíron',
                'Bőr: erythema → livid/szürke → bullák → nekrózis',
                'Anaesthesia a területen (idegkárosodás)',
                'Crepitatio (főleg I. típusban és Clostridiumnál)',
                'Szisztémás jelek: láz, tachycardia, hypotonia, tudatzavar'
              ],
              complications: ['Szeptikus shock', 'Többszervi elégtelenség (MODS)', 'Végtag vesztés', 'Halál (20-40%, kezelés nélkül 100%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'LRINEC score', finding: '≥6: gyanú, ≥8: magas valószínűség (de alacsony szenzitivitás!)', interpretation: 'CRP, fvs, Hb, Na, kreatinin, glükóz' },
                { test: 'Vérkép', finding: 'Leukocytosis (>15 G/L), balra tolt', interpretation: 'Súlyos fertőzés' },
                { test: 'Nátrium', finding: 'Hyponatraemia (<135 mmol/L)', interpretation: 'Gyakori jelző' },
                { test: 'Lactát', finding: 'Emelkedett (>2-4 mmol/L)', interpretation: 'Szöveti hipoperfúzió/nekrózis' },
                { test: 'CK', finding: 'Emelkedett', interpretation: 'Izomérintettség (myositis/nekrózis)' }
              ],
              imaging: [
                { modality: 'CT', finding: 'Fascia megvastagodás, folyadékgyülem, gáz a lágyrészekben (specifikus!)', significance: 'Legjobb képalkotó, de NE késleltesse a műtétet!' },
                { modality: 'MRI', finding: 'Magas szenzitivitás, alacsony specificitás', significance: 'Időigényes, instabil betegnél kerülendő' }
              ],
              microbiology: [
                { test: 'Szöveti minta (műtéti)', finding: 'Gram-festés és tenyésztés', significance: 'Gold standard (aerob + anaerob)' },
                { test: 'Hemokultúra', finding: 'Pozitív (főleg II. típusban)', significance: 'Szisztémás terjedés' },
                { test: 'Finger test', finding: 'Fascia könnyen elemelhető, nincs vérzés, "mosogatólé" szerű váladék', significance: 'Bedside diagnózis' }
              ]
            },
            calculators: [
              {
                name: 'LRINEC Score - Nekrotizáló fasciitis rizikó',
                items: [
                  { label: 'CRP ≥ 150 mg/L', points: 4 },
                  { label: 'Fehérvérsejt 15-25 G/L', points: 1 },
                  { label: 'Fehérvérsejt > 25 G/L', points: 2 },
                  { label: 'Hemoglobin < 13.5 g/dL', points: 1 },
                  { label: 'Hemoglobin < 11 g/dL', points: 2 },
                  { label: 'Nátrium < 135 mmol/L', points: 2 },
                  { label: 'Kreatinin > 141 µmol/L', points: 2 },
                  { label: 'Glükóz > 10 mmol/L', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 5, text: 'Alacsony kockázat (<50%). Monitorozás.' },
                  { min: 6, max: 7, text: 'Közepes kockázat (50-75%). Szoros megfigyelés, sebészi konzílium.' },
                  { min: 8, max: 13, text: 'Magas kockázat (>75%). Azonnali sebészi exploráció!' }
                ]
              }
            ],
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Nincs aránytalan fájdalom, nincs szisztémás toxicitás, lassabb' },
              { disease: 'Pyomyositis', distinguishing: 'Izom tályog, lokalizáltabb, MRI segít' },
              { disease: 'Gázgangraena (Clostridium)', distinguishing: 'Izomnekrózis dominál, gyorsabb, krepitáció kifejezettebb' },
              { disease: 'Mélyvénás trombózis', distinguishing: 'Duzzanat, de nincs láz/toxicitás, Doppler negatív' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NINCS ambuláns kezelés!', dose: 'AZONNALI KÓRHÁZ/MŰTÉT!', duration: '', note: 'Sebészeti vészhelyzet!' }
                ],
                inpatient: [
                  { drug: 'Piperacillin/tazobactam', dose: '4x4.5g IV', duration: 'Klinikai válaszig', note: 'Széles spektrum (G+, G-, anaerob)' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg IV', duration: '', note: 'MRSA fedezet' },
                  { drug: '+ Clindamycin', dose: '3x900mg IV', duration: '', note: 'Toxintermelés gátlás (GAS/Staph)' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Alternatíva (I. típus)' },
                  { drug: '+ Vancomycin + Clindamycin', dose: '', duration: '', note: 'Standard hármas kombináció' },
                  { drug: 'IVIG', dose: '1g/kg 1. nap, majd 0.5g/kg', duration: '3 nap', note: 'Strep. toxikus shock szindrómában megfontolandó' }
                ]
              },
              targeted: 'Tenyésztés alapján. I. típus: széles spektrum. II. típus (GAS): Penicillin G + Clindamycin. III. típus (Vibrio): Doxycyclin + Ceftriaxon.',
              supportive: ['AZONNALI agresszív sebészi débridement (kulcsfontosságú!)', 'Folyadékreszuszcitáció', 'Vazopresszorok', 'Re-look műtét 24 órán belül', 'Hiperbár oxigén (vitatott, kiegészítő)'],
              prevention: ['Sebkezelés', 'Krónikus betegségek gondozása']
            },
            guidelines: {
              diagnosis: [
                'Klinikai gyanú (aránytalan fájdalom, gyors romlás) elegendő a műtéti feltáráshoz.',
                'LRINEC score segíthet, de alacsony pontszám nem zárja ki.',
                'Képalkotó csak stabil betegnél, ha a diagnózis kétséges. Gáz a szövetekben specifikus.'
              ],
              treatment_indications: [
                'Azonnali sebészi beavatkozás (necrotomia/fasciotomia) minden gyanús esetben.',
                'Empirikus széles spektrumú antibiotikum a műtét előtt/alatt.'
              ],
              first_line: [
                'Sebészi débridement + (Carbapenem vagy Pip/Tazo) + Vancomycin + Clindamycin.'
              ]
            },
            prognosis: {
              mortality: '20-40% (megfelelő kezeléssel is), kezeletlenül 100%',
              prognostic_scores: ['LRINEC', 'FGSI (Fournier\'s Gangrene Severity Index)'],
              factors: 'Késői műtét (>24h), idős kor, komorbiditások, törzs/fej-nyak lokalizáció'
            }
          },
          {
            id: 'erysipelas',
            name: 'Erysipelas',
            pathogen: { type: 'Baktérium', name: '<i>Streptococcus pyogenes</i> (A csoportú Streptococcus)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori bőrfertőzés, 10-100/100,000 fő/év',
              risk_groups: ['Idősek', 'Csecsemők', 'Diabetes mellitus', 'Krónikus vénás elégtelenség', 'Lymphoedema', 'Bőrsérülések'],
              seasonality: 'Többnyire tél-tavasz',
              transmission: 'Endogén (bőrsérülés kapu) vagy kontakt'
            },
            pathomechanism: {
              steps: [
                'Behatolás: A kórokozó (leggyakrabban Streptococcus pyogenes) egy apró bőrsérülésen keresztül jut be a dermis felső rétegébe és a felületes nyirokerekbe.',
                'Nyirokúti terjedés: A baktériumok a nyirokrendszerben gyorsan terjednek, ami a jellegzetes, éles szélű, lángnyelvszerű terjedést eredményezi.',
                'Gyulladás: A bakteriális toxinok heves lokális gyulladást és szisztémás tüneteket (láz, hidegrázás) okoznak.'
              ],
              virulence_factors: ['M protein', 'Streptolysinek (O, S)', 'Hyaluronidáz', 'Streptokináz']
            },
            clinical: {
              incubation: '2-5 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Bőrtünetek', description: 'Hirtelen kialakuló, éles szélű, lángnyelvszerűen terjedő, élénkvörös, duzzadt, meleg tapintatú, fájdalmas bőrelváltozás. Leggyakrabban az arcon vagy az alsó végtagon jelentkezik.', severity: 'severe' },
                { name: 'Szisztémás tünetek', description: 'A bőrtüneteket gyakran magas láz, hidegrázás és rossz közérzet előzi meg vagy kíséri.', severity: 'moderate' }
              ],
              physical_exam: [
                'Vörös, meleg, duzzadt terület',
                'Éles, emelkedett szélek (jellemző)',
                'Bullák vagy pustulák lehetnek',
                'Lymphadenitis (regionális nyirokcsomók duzzadtak)',
                'Szisztémás jelek: tachycardia, hypotonia'
              ],
              complications: ['Cellulitis progresszió', 'Szeptikus shock', 'Glomerulonephritis', 'Recidíva gyakori']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' },
                { test: 'CRP', finding: 'Emelkedett', interpretation: 'Akut fázis' },
                { test: 'Hemokultúra', finding: 'Ritkán pozitív', interpretation: 'Szisztémás fertőzésnél' }
              ],
              imaging: [
                { modality: 'Nincs szükség', finding: '-', significance: 'Klinikai diagnózis' }
              ],
              microbiology: [
                { test: 'Bőrkaparék tenyésztés', finding: 'Streptococcus pyogenes', significance: 'Megerősítés' },
                { test: 'ASO titer', finding: 'Emelkedett', significance: 'Retrospektív' }
              ]
            },
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Mélyebb, kevésbé éles határok, nincs emelkedett plakk' },
              { disease: 'Herpes zoster', distinguishing: 'Vesiculák, dermatoma mentén' },
              { disease: 'Erythema migrans (Lyme)', distinguishing: 'Centrifugális terjedés, anamnézis' },
              { disease: 'Kontakt dermatitis', distinguishing: 'Nem lázas, pruritus' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Penicillin V', dose: '4x500mg PO', duration: '10-14 nap', note: 'Első választás' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '10-14 nap', note: 'Alternatíva' },
                  { drug: 'Clindamycin', dose: '3x300mg PO', duration: '10-14 nap', note: 'Penicillin allergia esetén, 30%-os rezisztencia előfordulás' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4-6 millió IU IV', duration: '7-10 nap', note: 'Súlyos esetben' },
                  { drug: 'Cefazolin', dose: '3x1g IV', duration: '7-10 nap', note: 'Alternatíva' },
                  { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '7-10 nap', note: 'Penicillin allergia esetén' }
                ],
                icu: [
                  { drug: 'Széles spektrum', dose: 'IV', duration: '', note: 'Komplikált esetben' }
                ]
              },
              targeted: 'Streptococcus pyogenes: Penicillin. Allergia: Erythromycin/Clindamycin',
              supportive: ['Nyugalom', 'Emelt végtag', 'Fájdalomcsillapítás', 'Antipiretikumok'],
              prevention: ['Bőrsérülések megelőzése', 'Hygiene', 'Recidíva esetén profilaxis (Penicillin havonta)']
            },
            guidelines: {
              diagnosis: [
                'Klinikai diagnózis: Éles szélű, lángnyelvszerű, emelkedett vörös plakk.',
                'Labor: Leukocytosis, magas CRP. Tenyésztés általában nem szükséges.'
              ],
              treatment_indications: [
                'Minden eset kezelendő. Kórházi felvétel: szisztémás tünetek, súlyos lokális lelet, komorbiditások.'
              ],
              first_line: [
                'Penicillin V (PO) vagy Penicillin G (IV). Allergia esetén Clindamycin.'
              ]
            },
            prognosis: {
              mortality: 'Alacsony (<1%)',
              prognostic_scores: ['Nincs'],
              factors: 'Idős kor, immunszuppresszió, késői kezelés'
            }
          },
          {
            id: 'cellulitis',
            name: 'Cellulitis',
            pathogen: { type: 'Baktérium', name: '<i>Streptococcus pyogenes</i> vagy <i>Staphylococcus aureus</i> (leggyakoribb)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori, 200/100,000 fő/év',
              risk_groups: ['Diabetes mellitus', 'Perifériás érbetegség', 'Obesitas', 'Immunszuppresszió', 'Bőrsérülések', 'Lymphoedema'],
              seasonality: 'Többnyire nyár',
              transmission: 'Endogén (bőrsérülés) vagy exogén inokuláció'
            },
            pathomechanism: {
              steps: [
                'Behatolás: A kórokozók (S. pyogenes, S. aureus) egy bőrsérülésen keresztül a mélyebb dermisbe és a subcutan zsírszövetbe jutnak.',
                'Diffúz terjedés: A fertőzés a szövetekben diffúzan terjed, nem korlátozódik a nyirokutakra, mint az orbánc esetén. Ez egy kevésbé élesen körülhatárolt, de mélyebbre terjedő gyulladást eredményez.'
              ],
              virulence_factors: ['Streptococcus: M protein, toxinok', 'Staphylococcus: PVL, coagulase']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Bőrtünetek', description: 'Az orbánchoz képest kevésbé élesen körülhatárolt, diffúz bőrpír, duzzanat és melegség. A bőr feszül, fájdalmas.', severity: 'moderate' },
                { name: 'Általános tünetek', description: 'Láz és hidegrázás kísérheti, de nem mindig olyan kifejezett, mint orbánc esetén.', severity: 'moderate' }
              ],
              physical_exam: [
                'Vörös, meleg, duzzadt bőr',
                'Diffúz, nem éles határok',
                'Nyomásérzékenység',
                'Lymphangitis (vörös csíkok)',
                'Szisztémás: tachycardia, láz'
              ],
              complications: ['Abscessus', 'Nekrotizáló fasciitis', 'Szeptikus shock', 'Osteomyelitis', 'Lymphoedema']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' },
                { test: 'CRP', finding: 'Emelkedett', interpretation: 'Akut fázis' },
                { test: 'Hemokultúra', finding: 'Ritka pozitív', interpretation: 'Súlyos esetben' }
              ],
              imaging: [
                { modality: 'UH', finding: 'Folyadékgyülem, abscessus', significance: 'Ha gyanú van' },
                { modality: 'CT/MRI', finding: 'Mélyebb terjedés', significance: 'Komplikált esetben' }
              ],
              microbiology: [
                { test: 'Bőr aspirátum/tenyésztés', finding: 'Kórokozó azonosítás', significance: 'Ha lehetséges' },
                { test: 'Seb váladék', finding: 'Gyakran kontaminált', significance: 'Nem megbízható' }
              ]
            },
            differential: [
              { disease: 'Erysipelas', distinguishing: 'Felszínes, éles határok, emelkedett plakk' },
              { disease: 'Abscessus', distinguishing: 'Fluktuáló duzzanat, punctio' },
              { disease: 'Mélyvénás thrombosis', distinguishing: 'Nem erythema, Doppler UH' },
              { disease: 'Köszvény', distinguishing: 'Monoarthritis, hyperuricemia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x875/125mg PO', duration: '7-10 nap', note: 'Első választás' },
                  { drug: 'Cephalexin', dose: '4x500mg PO', duration: '7-10 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x500mg PO', duration: '7-10 nap', note: 'Alternatíva' },
                  { drug: 'Cefazolin', dose: '3x1g IV', duration: '7-10 nap', note: 'Alternatíva' },
                  { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '7-10 nap', note: 'Súlyos esetben' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg IV', duration: '', note: 'MRSA gyanú' }
                ],
                icu: [
                  { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g IV', duration: '', note: 'Széles spektrum' }
                ]
              },
              targeted: 'Streptococcus: Penicillin; Staphylococcus: Flucloxacillin; MRSA: Vancomycin',
              supportive: ['Nyugalom', 'Emelt végtag', 'Fájdalomcsillapítás', 'Antibiotikum lokálisan nem hatékony'],
              prevention: ['Bőrsérülések megelőzése', 'Hygiene', 'Diabetes kontroll']
            },
            guidelines: {
              diagnosis: [
                'Klinikai diagnózis: Diffúz, nem éles szélű erythema, melegség, duzzanat.',
                'Képalkotó (UH): Abscessus vagy mélyebb terjedés gyanúja esetén.'
              ],
              treatment_indications: [
                'Minden eset kezelendő. Kórházi felvétel: szisztémás tünetek, gyors progresszió, komorbiditások.'
              ],
              first_line: [
                'Streptococcus és Staphylococcus fedezet szükséges: Amoxicillin/clavulanate vagy Cephalosporin. MRSA gyanú esetén Vancomycin/Linezolid.'
              ]
            },
            prognosis: {
              mortality: 'Alacsony (<1%), de emelkedik immunszuppresszióval',
              prognostic_scores: ['Nincs'],
              factors: 'Késői kezelés, komorbiditások'
            }
          },
          {
            id: 'impetigo',
            name: 'Impetigo',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus</i> és/vagy <i>Streptococcus pyogenes</i>', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori, főként gyermekeknél',
              risk_groups: ['Gyermekek', 'Közösségi környezet', 'Bőrsérülések', 'Közeli kontakt'],
              seasonality: 'Nincs',
              transmission: 'Kontakt, direkt vagy indirekt'
            },
            pathomechanism: {
              steps: [
                'A kórokozók a bőr sérülésén vagy a felszíni bőrön behatolnak.',
                'A baktériumok lokálisan szaporodnak, és felületesen terjednek.',
                'A gyulladás és a toxinok miatt tipikus hólyagok és aranysárga, „mézes” kéreg alakul ki.'
              ],
              virulence_factors: ['Exfoliatív toxinok', 'M protein', 'Koaguláz', 'Panton-Valentine leukocidin (S. aureus)']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Pépes, gyulladt plakk', description: 'Hólyagok, amelyek felpattannak, és aranysárga, „mézes” kéreggel fedettek', severity: 'moderate' },
                { name: 'Viszketés', description: 'Kis fájdalom vagy viszketés a környéken', severity: 'mild' }
              ],
              physical_exam: [
                'Piros, felületes, gyulladt bőrfolt',
                'Hólyagok és kéregképződés',
                'Ritkán nyirokcsomó-duzzanat'
              ],
              complications: ['Kiterjedt helyi fertőzés', 'Glomerulonephritis (streptococcus)', 'Recidíva']
            },
            diagnostics: {
              laboratory: [
                { test: 'Klinikai diagnózis', finding: 'Elégséges', interpretation: 'Tipikus megjelenés' }
              ],
              microbiology: [
                { test: 'Sebváladék/tenyésztés', finding: 'Kórokozó azonosítás', significance: 'Kétséges vagy súlyos esetben' }
              ]
            },
            differential: [
              { disease: 'Herpes simplex', distinguishing: 'Vesiculák, fájdalmasabb, nincs mézes kéreg' },
              { disease: 'Kontakt dermatitis', distinguishing: 'Viszketés, nincs hólyagképződés' },
              { disease: 'Erysipelas', distinguishing: 'Mélyebb, éles határok' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Topikus mupirocin', dose: '2x/nap', duration: '5-7 nap', note: 'Helyi, nem terjedt forma' },
                  { drug: 'Retapamulin', dose: '2x/nap', duration: '5 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Cephalexin', dose: '4x500 mg PO', duration: '7-10 nap', note: 'Kiterjedt fertőzés' },
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x875/125 mg PO', duration: '7-10 nap', note: 'Alternatíva' }
                ]
              },
              targeted: 'S. aureus/GAS szerinti célzott terápia; terjedt esetben szisztémás antibiotikum.',
              supportive: ['Bőrtisztítás', 'Higiéné és kontaktmegelőzés', 'Fertőzött személyek elkülönítése'],
              prevention: ['Higiénés szabályok', 'Sérülések kezelése', 'Közösségi kontakt csökkentése']
            },
            guidelines: {
              diagnosis: [
                'Klinikai diagnózis: a tipikus mézes kéreg és a felületes hólyagok jellemzőek.'
              ],
              treatment_indications: [
                'Helyi kezelés kisebb, nem terjedt esetekben; kiterjedt vagy ismétlődő fertőzés esetén szisztémás terápia.'
              ],
              first_line: [
                'Topikus mupirocin vagy retapamulin; kiterjedt esetben cephalexin vagy amoxicillin/clavulanate.'
              ]
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Kiterjedt betegség, immunszuppresszió, ismétlődés'
            }
          },
          {
            id: 'folliculitis',
            name: 'Folliculitis',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus</i> (leggyakoribb)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori, különösen meleg, izzadó környezetben',
              risk_groups: ['Izzadással járó munka', 'Szorító ruházat', 'Bőrsérülések', 'Diabetes', 'Immunszuppresszió'],
              seasonality: 'Nincs',
              transmission: 'Közvetlen kontakt vagy auto-inokuláció'
            },
            pathomechanism: {
              steps: [
                'A hajtüsző környékén a kórokozó behatol és lokális gyulladást okoz.',
                'A gyulladás pápulákhoz és pustulákhoz vezet a hajtüsző körül.',
                'A súlyosabb formák mélyebb fertőzést eredményezhetnek (furunculus, carbunculus).'
              ],
              virulence_factors: ['Koaguláz', 'Exotoxinok', 'Biofilm']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Pápulák/pustulák', description: 'Körülírt, fájdalmas vagy viszkető pápulák/pustulák a hajtüszőnél', severity: 'mild' },
                { name: 'Bőrpír és érzékenység', description: 'A bőr körül gyulladásos reakció', severity: 'mild' }
              ],
              physical_exam: [
                'Pápulák/pustulák a hajtüsző körül',
                'Fájdalom vagy viszketés',
                'Súlyos esetben abscesszus is kialakulhat'
              ],
              complications: ['Furunculus', 'Carbunculus', 'Folliculitis abscedens', 'Kiterjedt helyi fertőzés']
            },
            diagnostics: {
              laboratory: [
                { test: 'Klinikai diagnózis', finding: 'Elégséges', interpretation: 'Jellemző megjelenés' }
              ],
              microbiology: [
                { test: 'Pus vagy szövetmintavétel', finding: 'Kórokozó azonosítás', significance: 'Súlyos vagy refrakter esetekben' }
              ]
            },
            differential: [
              { disease: 'Impetigo', distinguishing: 'Sokkal több felszíni hólyag és kéreg' },
              { disease: 'Herpes simplex', distinguishing: 'Vesikula, erős fájdalom' },
              { disease: 'Erysipelas', distinguishing: 'Felszínes gyulladás, nincs hajtüsző lokalizáció' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Topikus mupirocin', dose: '2x/nap', duration: '5-7 nap', note: 'Kisfokú fertőzés' },
                  { drug: 'Clindamycin', dose: '2x/nap', duration: '5-7 nap', note: 'Topikusan' }
                ],
                inpatient: [
                  { drug: 'Cephalexin', dose: '4x500 mg PO', duration: '7-10 nap', note: 'Súlyosabb vagy kiterjedt' }
                ]
              },
              targeted: 'S. aureus esetén célzott antistaphylococcal terápia; refrakter esetben kultúra.',
              supportive: ['Kerülni az irritáló anyagokat', 'Bőr tisztítása', 'Szoros ruházat kerülése'],
              prevention: ['Higiéné', 'Szennyezett tárgyak kerülése', 'Környezet és ruházat tisztítása']
            },
            guidelines: {
              diagnosis: [
                'Klinikai megjelenés alapján.'
              ],
              treatment_indications: [
                'Topikális terápia a kisebb formákban; szisztémás terápia kiterjedt vagy visszatérő esetekben.'
              ],
              first_line: [
                'Topikus mupirocin vagy clindamycin; szükség esetén cephalexin.'
              ]
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Súlyosabb formák, diabetes, immunszuppresszió'
            }
          },
          {
            id: 'diabetic_foot',
            name: 'Diabeteses láb (infekció/ulkus)',
            pathogen: { type: 'Polimikrobiális', name: 'Staphylococcus aureus, Streptococcus spp., Gram-negatívok, anaerobok', gram: 'Vegyes', shape: 'Változó' },
            epidemiology: {
              incidence: 'Gyakori ok a kórházi felvételeknek és az amputációknak a diabéteszes betegeknél',
              risk_groups: ['Diabetes mellitus', 'Neuropátia', 'Perifériás artériás betegség', 'Korábbi lábférgesség/ulkus', 'Lábdeformitás', 'Immunszuppresszió'],
              seasonality: 'Nincs',
              transmission: 'Nem fertőző, de a bőr sérülése, a lábdeformitás és a gyulladás útján alakul ki'
            },
            pathomechanism: {
              steps: [
                'A neuropátia miatt a védekező reflexek és az érzékelés csökken, így a kisebb sérülések észrevétlenek maradhatnak.',
                'A perifériás artériás betegség és a magas glükózszint a gyógyulást és az immunválaszt rontja.',
                'A bőr és a lágyrészek sérülése után baktériumok kolonizálják és megtelepednek a szövetekben, gyakran polimikrobiális fertőzésként.',
                'A folyamat előrehaladhat abscessushoz, osteomyelitishez és amputációhoz.'
              ],
              virulence_factors: ['Biofilm képzés', 'Adhezinek', 'Toxinok', 'Kórokozói polimikrobiális közösség']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Lassú vagy akut',
              symptoms: [
                { name: 'Lábfájdalom vagy érzészavar', description: 'Neuropátia miatt fájdalom hiánya vagy csökkent érzékelés', severity: 'severe' },
                { name: 'Lábduzzanat és bőrpír', description: 'Fertőzés jele, különösen ha a bőr sérült', severity: 'moderate' },
                { name: 'Váladékozás/odors', description: 'Gennyes szekréció vagy kellemetlen szag', severity: 'moderate' },
                { name: 'Láz', description: 'Súlyosabb fertőzésnél lehet', severity: 'moderate' }
              ],
              physical_exam: [
                'Sérülés/ulkus, sebváladék, duzzanat',
                'Lábszintű pulzusok, ABI vizsgálat',
                'Védőérzékelés és neuropátia értékelése',
                'Probe-to-bone teszt, ha osteomyelitis gyanúja van'
              ],
              complications: ['Osteomyelitis', 'Szeptikus shock', 'Amputáció', 'Krónikus sebek', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép, CRP, kreatinin', finding: 'Gyulladás, szervi érintettség', interpretation: 'Alapértékelés' },
                { test: 'Hemokultúra', finding: 'Súlyos esetben pozitív lehet', interpretation: 'Szepszis gyanú esetén' }
              ],
              imaging: [
                { modality: 'UH / CT / MRI', finding: 'Tályog, csontérintettség, érbetegség', significance: 'Mély fertőzés vagy osteomyelitis gyanúja' }
              ],
              microbiology: [
                { test: 'Sebváladék/biopszia', finding: 'Kórokozó azonosítás', significance: 'Célzott antibiotikum' }
              ],
              scores: ['IDSA/PEDIS súlyossági osztályozás']
            },
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Nincs nyílt sebfelszín vagy mélyebb struktúra' },
              { disease: 'Osteomyelitis', distinguishing: 'Csontérintettség, képalkotó/biopszia' },
              { disease: 'Perifériás artériás betegség', distinguishing: 'Pulsus hiánya, ABI; nem fertőzés' }
            ],
            therapy: {
              guidelines: ['IWGDF 2023: off-loading, sebészi debridement, jó vérkeringés, glucose control és célzott antibiotikum.'],
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO', duration: '7-14 nap', note: 'Könnyű fertőzés' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'IV/PO', duration: '7-14 nap', note: 'Közepes fertőzés' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '7-14 nap', note: 'Súlyos vagy ischaemiás fertőzés' },
                  { drug: '+ Vancomycin', dose: 'IV', duration: '', note: 'MRSA gyanú esetén' }
                ],
                icu: [
                  { drug: 'Meropenem/Vancomycin', dose: 'IV', duration: '', note: 'Súlyos sepsis, kritikus állapot' }
                ]
              },
              targeted: 'Tenyésztés alapján, abscessus/nekrotikus szövet esetén sebészi debridement és lehetőleg forráskontroll.',
              supportive: ['Terheléscsökkentés (off-loading)', 'Vérkeringés értékelése és revaszkularizáció', 'Glükózszabályozás', 'Sebkezelés, kötés', 'Fizioterápia'],
              prevention: ['Lábápolás', 'Megfelelő cipő, napi szemle', 'Diabetes kontroll', 'Korai sebek kezelése']
            },
            prognosis: {
              mortality: 'Magasabb, ha osteomyelitis vagy sepsis alakul ki',
              prognostic_scores: ['PEDIS/IDSA'],
              factors: 'Ischaemia, neuropátia, késői kezelés, amputáció előzménye'
            }
          },
          {
            id: 'chronic_ulcer',
            name: 'Krónikus ulcus (vénás/arteriális)',
            pathogen: { type: 'Közvetett', name: 'Kolonizáció, másodlagos infekció', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'A krónikus láb- és lábszárfekélyek gyakori okai a lokális vérellátási zavaroknak',
              risk_groups: ['Idősek', 'Vénás insufficiensia', 'Perifériás artériás betegség', 'Diabetes', 'Mozgáskorlátozott betegek', 'Elhízás'],
              seasonality: 'Nincs',
              transmission: 'Nem fertőző, de másodlagos infekciók kialakulhatnak'
            },
            pathomechanism: {
              steps: [
                'A krónikus ödéma, a vénás hipertónia vagy a szűkült artériák a szöveti oxigenizáció és a gyógyulás csökkenéséhez vezetnek.',
                'A keringési zavar, a chronikus gyulladás és a helyi trauma lassítja a sebfelület regenerációját.',
                'A sebfelszín kolonizációja és a másodlagos fertőzés megnehezíti a gyógyulást.',
                'A folyamat hosszan fennmarad, ha a kiváltó okot nem kezelik.'
              ],
              virulence_factors: ['Kolonizáló mikroorganizmusok', 'Biofilm', 'Kronikus gyulladás']
            },
            clinical: {
              incubation: 'Hónapokig fennálló',
              onset: 'Lassú',
              symptoms: [
                { name: 'Lábszárfekély', description: 'Nyitott, lassan gyógyuló, gyakran váladékos és fájdalmas sebe', severity: 'moderate' },
                { name: 'Fájdalom', description: 'Változó: vénás ulcusnál kevésbé, artériásnál súlyosabb', severity: 'moderate' },
                { name: 'Ödéma', description: 'Vénás eredetű fekélyeknél gyakori', severity: 'moderate' },
                { name: 'Szín- és szövetváltozás', description: 'Pigmentáció, bőratrófia, nekrózis', severity: 'moderate' }
              ],
              physical_exam: [
                'Fekély mérete, mélysége, szöveti státusza',
                'Vénás/arteriás jelek: ödéma, pigmentáció, pulzus, ABI',
                'Fertőzés jelei: erythema, purulencia, ízelt szag',
                'Láb és lábszár állapota'
              ],
              complications: ['Krónikus fertőzés', 'Bővülő sebfelszín', 'Osteomyelitis', 'Amputáció', 'Minőségromlás']
            },
            diagnostics: {
              laboratory: [
                { test: 'CRP, vérkép', finding: 'Infekció esetén emelkedett', interpretation: 'Gyulladás és fertőzés monitorozása' }
              ],
              imaging: [
                { modality: 'ABI, Doppler UH, CT angiográfia', finding: 'Véráramlási zavar', significance: 'Arteria/venák értékelése' }
              ],
              microbiology: [
                { test: 'Sebváladék', finding: 'Kolonizáció/fertőzés', significance: 'Antibiotikum döntés' }
              ]
            },
            differential: [
              { disease: 'Diabeteses láb infekció', distinguishing: 'Neuropátia és diabétesz jelenléte' },
              { disease: 'Decubitus', distinguishing: 'Nyomás és elmozdulási terhelés típusa' },
              { disease: 'Vaszkuláris fekély', distinguishing: 'Artériás/venás keringési eltérés' }
            ],
            therapy: {
              guidelines: ['EWMA/ICG irányelvek: kompresszió, terheléscsökkentés, sebkezelés, fertőzéskezelés, a kiváltó ok megszüntetése.'],
              empirical: {
                outpatient: [
                  { drug: 'Nincs rutin antibiotikum kolonizáció nélkül', dose: '-', duration: '-', note: 'Csak fertőzés esetén' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO/IV', duration: '7-14 nap', note: 'Lokalizált infekció' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '', note: 'Súlyos fertőzés' }
                ]
              },
              targeted: 'Kiváltó ok alapján: kompresszió, perfúziójavítás, sebfelszín-kezelés, debridement, szükség esetén sebészi beavatkozás.',
              supportive: ['Kompressziós kezelés', 'Sebészeti vagy enzimes debridement', 'Nedvesség egyensúly, kötésanyag', 'Folyadék- és táplálkozási támogatás'],
              prevention: ['Mozgás, kompresszió, lábápolás', 'Vérkeringés javítása', 'Korai fertőzéskezelés']
            },
            prognosis: {
              mortality: 'Nem közvetlenül magas, de a krónikus természet és a társbetegségek miatt jelentős morbiditás',
              prognostic_scores: ['Nincs egységes score'],
              factors: 'Perfúzió, komorbiditások, fertőzés, terhelés és compliance'
            }
          },
          {
            id: 'decubitus',
            name: 'Decubitus (nyomásfekély)',
            pathogen: { type: 'Másodlagos', name: 'Kolonizáció, polymikrobiális fertőzés', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Gyakori immobilizált, súlyos betegeknél és hosszú kórházi tartózkodás esetén',
              risk_groups: ['Mobilitási korlátozottak', 'Idősek', 'Súlyos betegségben lévők', 'Inkontinencia', 'Alultápláltak', 'Neurológiai betegek'],
              seasonality: 'Nincs',
              transmission: 'Nem fertőző, de a fertőzés másodlagosan jelentkezhet'
            },
            pathomechanism: {
              steps: [
                'A nyomás és a nyíróerő csökkenti a kapilláris perfúziót a bőrnél és a lágyrészeknél.',
                'Az ismétlődő ischaemia és reperfúzió károsítja a szöveteket és lassítja a gyógyulást.',
                'A nedvesség, a bőr irritációja és a tápláltsági állapot tovább rontja a reparációt.',
                'A sebfelszín kolonizációja és a fertőzés előrehaladhat a mélyebb szövetek felé.'
              ],
              virulence_factors: ['Bakteriális kolonizáció', 'Biofilm', 'Súlyos lokalizált ischaemia']
            },
            clinical: {
              incubation: 'Idővel alakul ki',
              onset: 'Lassú',
              symptoms: [
                { name: 'Bőrpír és fájdalom', description: 'Nem elhalványuló bőrpír, a terület fájdalmas', severity: 'moderate' },
                { name: 'Fekély', description: 'A bőr vagy a lágyrészek sérülése, stádiumok szerint mélyülhet', severity: 'moderate' },
                { name: 'Sérülés mélysége', description: 'Bőrtől a csontig terjedhet', severity: 'severe' }
              ],
              physical_exam: [
                'Stádiumozás: I–IV, illetve deep tissue injury',
                'Terhelés és nyíróerő alapján lokalizáció',
                'Sebváladék, szöveti nekrózis, fertőzés jelei',
                'Általános állapot és tápláltság felmérése'
              ],
              complications: ['Szeptikus shock', 'Osteomyelitis', 'Nehéz gyógyulás', 'Amputáció', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép, CRP', finding: 'Infekció esetén emelkedett', interpretation: 'Súlyos fertőzés/gyulladás' }
              ],
              imaging: [
                { modality: 'UH/CT/MRI', finding: 'Mélyebb szöveti érintettség', significance: 'Mély fekély vagy osteomyelitis gyanúja' }
              ],
              microbiology: [
                { test: 'Sebváladék', finding: 'Kolonizáció/fertőzés', significance: 'Antibiotikum terapiás döntés' }
              ],
              scores: ['NPIAP/EPUAP stádiumozás']
            },
            differential: [
              { disease: 'Vénás/arteriás fekély', distinguishing: 'Nyomás és mobilitási faktorok dominálnak' },
              { disease: 'Diabeteses láb', distinguishing: 'Neuropátia és diabétesz jelenléte' },
              { disease: 'Fertőzéses bőrelváltozás', distinguishing: 'Nincs nyomási eredet' }
            ],
            therapy: {
              guidelines: ['NPIAP/EPUAP/PPPIA irányelvek: nyomáscsökkentés, rendszeres elfordítás, táplálkozás, nedvesség kontroll, debridement és fertőzéskezelés.'],
              empirical: {
                outpatient: [
                  { drug: 'Nincs rutin antibiotikum kolonizáció nélkül', dose: '-', duration: '-', note: 'Csak fertőzés esetén' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO/IV', duration: '7-10 nap', note: 'Lokalizált, nem mély infekció' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '', note: 'Mély vagy súlyos fertőzés' }
                ]
              },
              targeted: 'Stádium és fertőzés alapján: nyomáscsökkentés, debridement, kötés, táplálkozási támogatás, szükség esetén sebészi zárás.',
              supportive: ['Rendszeres elfordítás (2-4 óránként)', 'Nyomáscsökkentő felületek', 'Higiénia és bőrápolás', 'Tápláltsági állapot javítása', 'Sebészi vagy enzimes debridement'],
              prevention: ['Mobilizáció, pozicionálás, matracok és párnák', 'Inkontinencia kezelése', 'Nutritional support']
            },
            prognosis: {
              mortality: 'Magasabb, ha mélyen terjed és fertőzött',
              prognostic_scores: ['NPIAP stádium'],
              factors: 'Mobilitás, tápláltság, szisztémás betegség, fertőzés és sebészi kezelés'
            }
          }
        ]
      },
      bone_joint: {
        name: 'Csont- és ízületi fertőzések',
        icon: '🦴',
        color: '#57534e',
        diseases: [
          {
            id: 'osteomyelitis',
            name: 'Osteomyelitis',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus</i> (leggyakoribb)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyermekeknél hematogén, felnőtteknél poszttraumás/diabeteses láb',
              risk_groups: ['Diabetes mellitus', 'Perifériás érbetegség', 'Trauma/műtét', 'IV droghasználók', 'Hemodialízis'],
              seasonality: 'Nincs',
              transmission: 'Hematogén szórás, direkt terjedés (seb), inokuláció (trauma)'
            },
            pathomechanism: {
              steps: [
                'Bejutás: A kórokozók a vérárammal (hematogén), környező lágyrészekből (per continuitatem) vagy direkt sérülés/műtét útján jutnak a csontba.',
                'Gyulladás és Ischaemia: A csontban gyulladást okoznak, ami a csontvelőben ödémához és nyomásfokozódáshoz vezet. Ez a csont vérellátását rontja, ami csontelhaláshoz (sequester) vezet.',
                'Krónikussá válás: A szervezet az elhalt csontrészt új csontképződéssel (involucrum) próbálja meg körülvenni. Krónikus esetben a baktériumok biofilmet képezve perzisztálnak.'
              ],
              virulence_factors: ['Biofilm képzés', 'Adhezinek (MSCRAMM)', 'Toxinok']
            },
            clinical: {
              incubation: 'Napok (akut) vagy hetek-hónapok (krónikus)',
              onset: 'Változó',
              symptoms: [
                { name: 'Akut osteomyelitis', description: 'Hirtelen kezdődő lokális fájdalom, duzzanat, bőrpír és láz. A beteg nem tudja terhelni az érintett végtagot.', severity: 'severe' },
                { name: 'Krónikus osteomyelitis', description: 'Alattomosabb, tompa, mély fájdalommal, és gyakran a bőrön megjelenő, váladékozó sipollyal (sinus tract) jár. A láz ritka.', severity: 'moderate' }
              ],
              physical_exam: [
                'Lokális nyomásérzékenység a csont felett',
                'Melegség, duzzanat, erythema',
                'Mozgáskorlátozottság az érintett végtagon',
                'Probe-to-bone teszt: Fekély alapjában szondával csont tapintható (magas specificitás)'
              ],
              complications: ['Krónikus osteomyelitis', 'Patológiás törés', 'Szeptikus arthritis', 'Szisztémás szepszis', 'Amputáció szükségessége']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (akut)', interpretation: 'Gyulladás (krónikusban normál lehet)' },
                { test: 'CRP/We', finding: 'Emelkedett', interpretation: 'Monitorozásra kiváló (terápiaválasz)' },
                { test: 'Hemokultúra', finding: 'Pozitív (50%)', interpretation: 'Hematogén eredetnél (csigolya OM-nél fontos)' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'Korai fázisban (10-14 napig) negatív! Később periostalis reakció, lyticus léziók', significance: 'Késői jel, de alapvizsgálat' },
                { modality: 'MRI', finding: 'Csontvelő ödéma, tályog, sequestrum', significance: 'Gold standard (szenzitivitás >90%)' },
                { modality: 'Csontszcintigráfia/PET-CT', finding: 'Fokozott dúsítás', significance: 'Ha MRI nem végezhető vagy multifokális folyamat gyanúja' }
              ],
              microbiology: [
                { test: 'Csontbiopszia tenyésztés', finding: 'Kórokozó azonosítás', significance: 'Gold standard diagnózis (antibiotikum előtt!)' },
                { test: 'Sipoly váladék', finding: 'Gyakran kontaminált', significance: 'Csak S. aureus esetén korrelál jól a csonttal' }
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
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Kórházi kivizsgálás/mintavétel szükséges' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg IV', duration: '4-6 hét', note: 'MRSA fedezet' },
                  { drug: '+ Ceftriaxon/Cefepim', dose: '2g IV', duration: '4-6 hét', note: 'Gram-negatív fedezet (pl. Pseudomonas)' }
                ],
                icu: [
                  { drug: 'Széles spektrum', dose: 'IV', duration: '', note: 'Sepszis esetén' }
                ]
              },
              targeted: 'Csontbiopszia alapján! S. aureus: Cefazolin/Flucloxacillin. MRSA: Vancomycin. Implantátum esetén: Rifampicin kiegészítés (biofilm ellen).',
              supportive: ['Sebészi debridement (nekrotikus csont eltávolítása) - KRITIKUS!', 'Implantátum eltávolítás (ha lehetséges)', 'Korai orális váltás lehetséges (OVIVA study)'],
              prevention: ['Nyílt törések azonnali ellátása', 'Műtéti sterilitás', 'Diabeteses láb gondozása']
            },
            guidelines: {
              diagnosis: [
                'Képalkotó: MRI a legérzékenyebb. Rtg 2 hétig negatív lehet.',
                'Mikrobiológia: Csontbiopszia (nyílt vagy perkután) tenyésztésre és hisztológiára kötelező az antibiotikum előtt (kivéve szepszis).'
              ],
              treatment_indications: [
                'Minden igazolt osteomyelitis kezelendő. Sebészi debridement + antibiotikum.',
                'Implantátummal asszociált fertőzésnél a biofilm miatt Rifampicin kombináció javasolt.'
              ],
              first_line: [
                'Empirikus: Vancomycin + Ceftriaxon/Cefepim.',
                'Célzott: 4-6 hét terápia. OVIVA vizsgálat alapján a korai (1 hét utáni) orális váltás (pl. kinolonok, clindamycin) nem rosszabb, mint a végig IV.'
              ]
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
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus, N. gonorrhoeae</i>', gram: 'Vegyes', shape: 'coccus' },
            epidemiology: {
              incidence: '2-10/100,000 fő/év',
              risk_groups: ['Rheumatoid arthritis', 'Ízületi protézis', 'Idősek (>80 év)', 'Diabetes', 'IV droghasználók', 'Szexuálisan aktív fiatalok (Gonococcus)'],
              seasonality: 'Nincs',
              transmission: 'Hematogén (leggyakoribb), direkt inokuláció, per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Bejutás: A kórokozók a vérárammal (hematogén) vagy direkt sérülésből jutnak az ízületi résbe.',
                'Gyulladásos válasz: A synovialis membránban megtelepedve heves gyulladásos választ váltanak ki, ami nagy mennyiségű gennyes folyadékgyülemhez vezet.',
                'Porckárosodás: A neutrofil granulocytákból felszabaduló enzimek és a gyulladásos citokinek órák-napok alatt visszafordíthatatlanul károsítják az ízületi porcot.'
              ],
              virulence_factors: ['Adhezinek', 'Toxinok', 'Porckárosító enzimek']
            },
            clinical: {
              incubation: 'Gyors (órák-napok)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Akut monarthritis', description: 'Leggyakrabban egyetlen nagy ízület (térd, csípő) hirtelen kialakuló, extrém fájdalmas duzzanata, vörössége és melegsége.', severity: 'severe' },
                { name: 'Funkcióvesztés', description: 'A beteg az ízületet a fájdalom miatt sem aktívan, sem passzívan nem tudja mozgatni. Magas láz és hidegrázás kíséri.', severity: 'severe' }
              ],
              physical_exam: [
                'Duzzadt, meleg, vörös ízület',
                'Extrém nyomásérzékenység',
                'Fájdalmas passzív és aktív mozgás',
                'Ízületi folyadékgyülem (effusio)',
                'Gonococcus: migrációs polyarthritis, tenosynovitis, dermatitis (pustulák)'
              ],
              complications: ['Ízületi destrukció (arthrosis)', 'Ankylosis', 'Sepszis', 'Osteomyelitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Szisztémás reakció' },
                { test: 'CRP/We', finding: 'Jelentősen emelkedett', interpretation: 'Gyulladás' },
                { test: 'Synovialis folyadék', finding: '>50,000 fvs/µL (>90% PMN)', interpretation: 'Szeptikus arthritisre jellemző' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'Kezdetben negatív/lágyrész duzzanat, később ízületi rés beszűkülés', significance: 'Baseline' },
                { modality: 'UH', finding: 'Ízületi folyadék, synovialis megvastagodás', significance: 'Punkció vezérlése, korai diagnózis' },
                { modality: 'MRI', finding: 'Ízületi folyadék, csontvelő ödéma, tályog', significance: 'Osteomyelitis kizárása, komplikációk' }
              ],
              microbiology: [
                { test: 'Ízületi punkció (Arthrocentesis)', finding: 'Gennyes, Gram-festés pozitív (50%)', significance: 'AZONNAL elvégzendő!' },
                { test: 'Tenyésztés (Synovia + Vér)', finding: 'Pozitív', significance: 'Gold standard' },
                { test: 'PCR (16S rRNS)', finding: 'Kórokozó DNS', significance: 'Ha a tenyésztés negatív (előkezelt beteg)' }
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
                  { drug: '+ Ceftriaxon', dose: '1x2g IV', duration: '', note: 'Gram- (Gonococcus/G- pálca) fedezet' }
                ],
                icu: [
                  { drug: 'Vancomycin + Meropenem', dose: 'IV', duration: '', note: 'Sepszis/immunszuppresszió esetén' }
                ]
              },
              targeted: 'S. aureus: Cefazolin/Flucloxacillin; MRSA: Vancomycin/Daptomycin; Gonococcus: Ceftriaxon. Időtartam: 2-6 hét (IV, majd PO váltás lehetséges - OVIVA).',
              supportive: ['Ízületi drenázs (tűaspiráció naponta, arthroscopia vagy nyílt feltárás) - KULCSFONTOSSÁGÚ!', 'Fájdalomcsillapítás', 'Korai mobilizáció a gyulladás csökkenése után'],
              prevention: ['Protézis műtétek sterilitása', 'Gonorrhoea megelőzése', 'Bőrfertőzések kezelése']
            },
            guidelines: {
              diagnosis: [
                'Ízületi punkció (arthrocentesis) az antibiotikum előtt kötelező! Sejtszám, Gram, tenyésztés, kristály.',
                'Hemokultúra levétele mindig szükséges (50% pozitív).'
              ],
              treatment_indications: [
                'Minden szeptikus arthritis azonnali antibiotikumot és drenázst igényel.'
              ],
              first_line: [
                'Azonnali ízületi drenázs (tűaspiráció vagy sebészi) + empirikus IV antibiotikum (Vancomycin + Ceftriaxon).',
                'OVIVA vizsgálat alapján a korai orális váltás biztonságos lehet stabil betegnél.'
              ]
            },
            prognosis: {
              mortality: '10-15% (polyarticularis/idős betegnél magasabb)',
              prognostic_scores: ['Nincs'],
              factors: 'Késői drenázs (>24-48 óra) irreverzibilis porckárosodást okoz!'
            }
          },
          {
            id: 'spondylodiscitis',
            name: 'Spondylodiscitis',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus</i> (leggyakoribb), <i>Streptococcus</i> spp., Gram-negatívok', gram: 'Vegyes', shape: 'coccus/bacillus' },
            epidemiology: {
              incidence: 'Ritka, 2-7/100,000 fő/év',
              risk_groups: ['Idősek (>50 év)', 'Diabetes mellitus', 'Immunszuppresszió', 'IV droghasználók', 'Gerincműtét után', 'Urogenitális fertőzések'],
              seasonality: 'Nincs',
              transmission: 'Hematogén (leggyakoribb), direkt (műtét, trauma), per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Hematogén szóródás: A kórokozók leggyakrabban a vérárammal (hematogén úton) jutnak a csontvelőben gazdag csigolyatestekbe, gyakran egy távoli fertőzésből (pl. húgyúti, bőr).',
                'Terjedés: A fertőzés a csigolyatestről ráterjed a szomszédos porckorongra (discus) és a másik csigolyára, gyulladást és szöveti destrukciót okozva.',
                'Szövődmények: A folyamat epidurális vagy paravertebrális tályog képződéséhez, gerincvelő-kompresszióhoz és neurológiai tünetekhez vezethet.'
              ],
              virulence_factors: ['Adhezinek (MSCRAMM)', 'Biofilm képzés', 'Toxinok']
            },
            clinical: {
              incubation: 'Napok-hét',
              onset: 'Lassú, alattomos',
              symptoms: [
                { name: 'Hátfájás', description: 'A vezető tünet (>90%) egy fokozatosan erősödő, nyugalomban is fennálló, lokalizált hát- vagy derékfájás, ami ütögetésre érzékeny.', severity: 'severe' },
                { name: 'Láz és neurológiai tünetek', description: 'A láz gyakran csak hőemelkedés vagy hiányozhat. Neurológiai tünetek (gyököki fájdalom, végtaggyengeség) epidurális tályogra utalnak és vészhelyzetet jelentenek.', severity: 'severe' }
              ],
              physical_exam: [
                'Lokális nyomás- vagy ütögetési érzékenység az érintett csigolya felett',
                'Paravertebralis izomspazmus',
                'Mozgáskorlátozottság a gerincben',
                'Neurológiai deficit (paresis, reflexkiesés, érzészavar)'
              ],
              complications: ['Epidurális abscessus', 'Paravertebrális abscessus', 'Szeptikus shock', 'Gerincdeformitás', 'Krónikus fájdalom']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis vagy normális', interpretation: 'Gyulladás' },
                { test: 'CRP/We', finding: 'Jelentősen emelkedett', interpretation: 'Monitorozásra kiváló' },
                { test: 'Hemokultúra', finding: 'Pozitív (50-70%)', interpretation: 'Kórokozó azonosítás' }
              ],
              imaging: [
                { modality: 'Röntgen', finding: 'Késői jel: csigolya destrukció, discus magasság csökkenés', significance: 'Nem érzékeny korai stádiumban' },
                { modality: 'MRI', finding: 'Csontvelő ödéma, discus gyulladás, abscessus', significance: 'Gold standard (érzékenység >90%)' },
                { modality: 'CT', finding: 'Csont destrukció, abscessus', significance: 'Ha MRI nem végezhető' }
              ],
              microbiology: [
                { test: 'CT-vezérelt biopszia', finding: 'Tenyésztés + hisztológia', significance: 'Gold standard diagnózis' },
                { test: 'Vértenyésztés', finding: 'Pozitív', significance: 'Gyakran elegendő' }
              ]
            },
            differential: [
              { disease: 'Degeneratív gerincbetegség', distinguishing: 'Nincs láz/CRP emelkedés, MRI különbözik' },
              { disease: 'Gerinc tumor/metasztázis', distinguishing: 'Anamnézis, biopszia' },
              { disease: 'Ankilozáló spondylitis', distinguishing: 'Fiatalabb kor, HLA-B27 pozitív' },
              { disease: 'Tuberkulózis spondylitis', distinguishing: 'Krónikus, több csigolya, tuberkulin teszt' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Kórházi kezelés szükséges' }
                ],
                inpatient: [
                  { drug: 'Vancomycin', dose: '15-20mg/kg IV', duration: '4-6 hét', note: 'MRSA fedezet' },
                  { drug: '+ Ceftriaxon/Cefepim', dose: 'IV', duration: '4-6 hét', note: 'Gram-negatív fedezet' }
                ],
                icu: [
                  { drug: 'Széles spektrum', dose: 'IV', duration: '', note: 'Sepszis/abscessus esetén' }
                ]
              },
              targeted: 'Biopszia alapján! S. aureus: Flucloxacillin/Cefazolin; MRSA: Vancomycin; Gram-negatív: Ceftriaxon. Időtartam: 6-12 hét (IV majd PO)',
              supportive: ['Sebészi debridement (abscessus esetén) - gyakran szükséges!', 'Gerincstabilizáció', 'Fájdalomcsillapítás', 'Fizioterápia'],
              prevention: ['UTI/endo prophylaxis', 'Műtéti sterilitás', 'Diabetes kontroll']
            },
            guidelines: {
              diagnosis: [
                'Klinikai gyanú: Új vagy rosszabbodó hátfájás lázzal/emelkedett gyulladásos markerekkel.',
                'Képalkotó: MRI a gold standard.',
                'Mikrobiológia: Hemokultúra. Ha negatív, CT-vezérelt biopszia szükséges.'
              ],
              treatment_indications: [
                'Minden igazolt eset kezelendő. Sebészi beavatkozás: neurológiai deficit, instabilitás, tályog.'
              ],
              first_line: [
                'Hosszú távú (6-12 hét) IV, majd PO antibiotikum terápia a tenyésztés alapján.'
              ]
            },
            prognosis: {
              mortality: '2-10%',
              prognostic_scores: ['Nincs specifikus'],
              factors: 'Késői diagnózis, neurológiai deficit, komorbiditások'
            }
          }
        ]
      }
});