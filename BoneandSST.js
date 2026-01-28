Object.assign(window.diseases, {
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
                { name: 'Intenzív fájdalom', description: 'ARÁNYTALAN a fizikális lelethez képest (75-100%), korai jel', severity: 'severe' },
                { name: 'Duzzanat/Ödéma', description: 'Feszes, terjedő ödéma (75-100%)', severity: 'severe' },
                { name: 'Bőrelváltozások', description: 'Erythema (70-100%), később livid elszíneződés, bullák, nekrózis (késői jelek!)', severity: 'severe' },
                { name: 'Láz', description: 'Gyakori, de hiányozhat is', severity: 'moderate' },
                { name: 'Crepitatio', description: 'Gázképződés (13-30% - nem mindig van!)', severity: 'severe' },
                { name: 'Toxikus állapot', description: 'Hypotonia, tachycardia, tudatzavar', severity: 'severe' }
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
              { disease: 'Gázgangraena (Clostridium)', distinguishing: 'Izom nekrózis dominál, gyorsabb, bronz bőr' },
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
          },
          {
            id: 'erysipelas',
            name: 'Erysipelas',
            pathogen: { type: 'Baktérium', name: 'Streptococcus pyogenes (A csoportú Streptococcus)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori bőrfertőzés, 10-100/100,000 fő/év',
              risk_groups: ['Idősek', 'Csecsemők', 'Diabetes mellitus', 'Krónikus vénás elégtelenség', 'Lymphoedema', 'Bőrsérülések'],
              seasonality: 'Többnyire tél-tavasz',
              transmission: 'Endogén (bőrsérülés kapu) vagy kontakt'
            },
            pathomechanism: {
              steps: [
                'Baktérium bejutása a bőrbe (sérülés, ekcéma, seb)',
                'Terjedés a lymphatikus rendszerben',
                'Lokális gyulladásos válasz',
                'Toxintermelés (streptolysinek, pyrogén toxinok)',
                'Szisztémás tünetek (láz, toxémia)'
              ],
              virulence_factors: ['M protein', 'Streptolysinek (O, S)', 'Hyaluronidáz', 'Streptokináz']
            },
            clinical: {
              incubation: '2-5 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Prodroma', description: 'Láz, hidegrázás gyakran megelőzi a bőrtüneteket (4-48 órával)', severity: 'moderate' },
                { name: 'Bőrtünetek', description: 'Éles szélű, emelkedett, élénkvörös plakk ("lángnyelv")', severity: 'severe' },
                { name: 'Lokalizáció', description: 'Alsó végtag (70-80%), Arc (5-20%)', severity: 'mild' },
                { name: 'Fájdalom', description: 'Égő, feszítő jellegű', severity: 'moderate' },
                { name: 'Nyirokcsomó', description: 'Regionális lymphadenitis gyakori', severity: 'moderate' }
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
                { test: 'Hemokultúra', finding: 'Ritka pozitív', interpretation: 'Szisztémás fertőzésnél' }
              ],
              imaging: [
                { modality: 'Nincs szükség', finding: '-', significance: 'Klinikai diagnózis' }
              ],
              microbiology: [
                { test: 'Bőrkaparék tenyésztés', finding: 'Streptococcus pyogenes', significance: 'Megerősítés' },
                { test: 'ASO titer', finding: 'Emelkedett', interpretation: 'Retrospektív' }
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
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '10-14 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4-6 millió IU IV', duration: '7-10 nap', note: 'Súlyos esetben' },
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
            prognosis: {
              mortality: 'Alacsony (<1%)',
              prognostic_scores: ['Nincs'],
              factors: 'Idős kor, immunszuppresszió, késői kezelés'
            }
          },
          {
            id: 'cellulitis',
            name: 'Cellulitis',
            pathogen: { type: 'Baktérium', name: 'Streptococcus pyogenes vagy Staphylococcus aureus (leggyakoribb)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori, 200/100,000 fő/év',
              risk_groups: ['Diabetes mellitus', 'Perifériás érbetegség', 'Obesitas', 'Immunszuppresszió', 'Bőrsérülések', 'Lymphoedema'],
              seasonality: 'Többnyire nyár',
              transmission: 'Endogén (bőrsérülés) vagy exogén inokuláció'
            },
            pathomechanism: {
              steps: [
                'Baktérium bejutása a dermisbe és subcutan szövetekbe',
                'Lokális gyulladás (neutrophilek, ödéma)',
                'Terjedés a subcutan síkokban',
                'Lymphatikus obstrukció → ödéma fokozódás',
                'Szisztémás válasz (láz, leukocytosis)'
              ],
              virulence_factors: ['Streptococcus: M protein, toxinok', 'Staphylococcus: PVL, coagulase']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Bőrtünetek', description: 'Diffúz, nem éles szélű erythema, melegség, duzzanat', severity: 'moderate' },
                { name: 'Fájdalom', description: 'Nyomásérzékenység, feszülés', severity: 'moderate' },
                { name: 'Szisztémás tünetek', description: 'Láz, hidegrázás, rossz közérzet (gyakori)', severity: 'moderate' },
                { name: 'Lymphangitis', description: 'Vörös csíkok a nyirokerek mentén', severity: 'mild' },
                { name: 'Lokalizáció', description: 'Leggyakrabban alsó végtag (egyoldali)', severity: 'mild' }
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
              { disease: 'DVT', distinguishing: 'Nem erythema, Doppler UH' },
              { disease: 'Gout', distinguishing: 'Monoarthritis, hyperuricemia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x875/125mg PO', duration: '7-10 nap', note: 'Első választás' },
                  { drug: 'Cephalexin', dose: '4x500mg PO', duration: '7-10 nap', note: 'Alternatíva' }
                ],
                inpatient: [
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
            prognosis: {
              mortality: 'Alacsony (<1%), de emelkedik immunszuppresszióval',
              prognostic_scores: ['Nincs'],
              factors: 'Késői kezelés, komorbiditások'
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
                { name: 'Lokális fájdalom', description: 'Mély, feszítő fájdalom (>90%), terhelésre fokozódik', severity: 'severe' },
                { name: 'Láz', description: 'Akut hematogén formában gyakori (50-70%), krónikusban ritka', severity: 'moderate' },
                { name: 'Duzzanat/Erythema', description: 'Érintett terület feletti lágyrészduzzanat és bőrpír', severity: 'moderate' },
                { name: 'Sipoly (Sinus tract)', description: 'Gennyes váladékozás a bőrfelszínre (krónikus osteomyelitis jele)', severity: 'moderate' }
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
                { name: 'Akut monarthritis', description: 'Egyetlen ízület fájdalma, duzzanata (80-90%)', severity: 'severe' },
                { name: 'Fájdalom', description: 'Intenzív, nyugalomban is, mozgatásra extrém', severity: 'severe' },
                { name: 'Láz', description: 'Gyakori (60-80%), de hiányozhat (idősek, immunszupprimáltak)', severity: 'moderate' },
                { name: 'Mozgáskorlátozottság', description: 'Az érintett ízület használatának képtelensége', severity: 'severe' }
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
          },
          {
            id: 'spondylodiscitis',
            name: 'Spondylodiscitis',
            pathogen: { type: 'Baktérium', name: 'Staphylococcus aureus (leggyakoribb), Streptococcus spp., Gram-negatívok', gram: 'Vegyes', shape: 'coccus/bacillus' },
            epidemiology: {
              incidence: 'Ritka, 2-7/100,000 fő/év',
              risk_groups: ['Idősek (>50 év)', 'Diabetes mellitus', 'Immunszuppresszió', 'IV droghasználók', 'Gerincműtét után', 'Urogenitális fertőzések'],
              seasonality: 'Nincs',
              transmission: 'Hematogén (leggyakoribb), direkt (műtét, trauma), per continuitatem'
            },
            pathomechanism: {
              steps: [
                'Baktérium szóródása a véráramba (pl. UTI, endocarditis)',
                'Megtapadás a gerinc ereiben (végartériák)',
                'Intervertebrális lemez és csigolyák kolonizációja',
                'Gyulladásos válasz → ödéma, nekrózis',
                'Biofilm képzés → krónikus fertőzés'
              ],
              virulence_factors: ['Adhezinek (MSCRAMM)', 'Biofilm képzés', 'Toxinok']
            },
            clinical: {
              incubation: 'Napok-hét',
              onset: 'Lassú, alattomos',
              symptoms: [
                { name: 'Hátfájás', description: 'Vezető tünet (>90%), fokozatosan erősödő, nyugalomban is fennáll', severity: 'severe' },
                { name: 'Láz', description: 'Csak az esetek ~50%-ában van jelen, gyakran alacsony', severity: 'moderate' },
                { name: 'Neurológiai tünetek', description: 'Radicularis fájdalom, gyengeség, paresis (30-50%)', severity: 'severe' },
                { name: 'Általános tünetek', description: 'Fáradtság, fogyás, éjszakai izzadás', severity: 'mild' }
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
            prognosis: {
              mortality: '2-10%',
              prognostic_scores: ['Nincs specifikus'],
              factors: 'Késői diagnózis, neurológiai deficit, komorbiditások'
            }
          }
        ]
      }
});