Object.assign(window.diseases, {
      sepsis_systemic: {
        name: 'Szepszis és szisztémás fertőzések',
        icon: window.diseaseMetadata.sepsis_systemic.icon,
        color: window.diseaseMetadata.sepsis_systemic.color,
        diseases: [
          {
            id: 'sepsis',
            name: 'Szepszis (Sepsis)',
            pathogen: { type: 'Szindróma', name: 'Baktérium (G+/G-), Gomba, Vírus', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Világszerte 49 millió eset/év, 11 millió halál (20% összes halál)',
              risk_groups: ['Idősek (>65 év)', 'Csecsemők (<1 év)', 'Immunszupprimáltak', 'Krónikus betegek', 'Invazív eszközökkel rendelkezők'],
              seasonality: 'Nincs (télen gyakoribb a légúti eredet miatt)',
              transmission: 'Nem fertőző (a kiváltó infekció lehet az)'
            },
            pathomechanism: {
              steps: [
                'A fertőzés során a kórokozók molekuláris mintázatait (PAMPs) a veleszületett immunrendszer receptorai (pl. Toll-like receptorok) felismerik, ami masszív gyulladásos választ indít el.',
                'Proinflammatorikus citokinvihar (TNF-α, IL-1, IL-6) alakul ki, amely szisztémás endothel-aktivációhoz és -károsodáshoz vezet, növelve az erek áteresztőképességét (kapilláris szivárgás).',
                'A véralvadási kaszkád aktiválódása és a fibrinolízis gátlása disszeminált intravaszkuláris koagulációhoz (DIC) és mikrotrombusok képződéséhez vezet.',
                'A mikrocirkulációs zavar, a szöveti hipoxia és a mitokondriális diszfunkció végül többszervi elégtelenséget (MODS) és halált okozhat.'
              ],
              virulence_factors: ['Endotoxin (LPS)', 'Szuperantigének', 'Exotoxinok', 'Tok']
            },
            clinical: {
              incubation: 'Az alapbetegségtől függ',
              onset: 'Órák alatt progrediálhat',
              symptoms: [
                { name: 'Láz vagy Hypothermia', description: '>38°C vagy <36°C (betegek 10-20%-a hypothermiás)', severity: 'severe' },
                { name: 'Tudatzavar', description: 'GCS <15, agitáció, letargia (gyakori korai jel időseknél)', severity: 'severe' },
                { name: 'Hypotonia', description: 'Szisztolés RR <100 Hgmm vagy MAP <65 Hgmm', severity: 'severe' },
                { name: 'Tachypnoe', description: '>22/perc (gyakran az első jel)', severity: 'moderate' },
                { name: 'Oliguria', description: '<0.5 ml/kg/óra (veseperfúzió csökkenés)', severity: 'severe' },
                { name: 'Bőrtünetek', description: 'Márványozottság, hideg végtagok (shock jelei)', severity: 'severe' }
              ],
              physical_exam: [
                'Láz vagy hypothermia',
                'Tachycardia (>90/perc)',
                'Tachypnoe (>20/perc)',
                'Megnyúlt kapilláris újratelődési idő (>3 mp)',
                'Márványozott bőr (mottling score)',
                'Zavartság'
              ],
              complications: ['Szeptikus shock (vazopresszor igény + laktát >2)', 'ARDS', 'DIC', 'Akut veseelégtelenség', 'Májelégtelenség', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Laktát', finding: '>2 mmol/L', interpretation: 'Szöveti hipoxia/shock (Súlyos!)' },
                { test: 'Hemokultúra', finding: 'Pozitív (30-50%)', interpretation: 'AB adás ELŐTT levenni (2 szett)' },
                { test: 'PCT', finding: 'Jelentősen emelkedett', interpretation: 'Bakteriális eredet valószínű' },
                { test: 'Vérkép', finding: 'Leukocytosis vagy leukopenia', interpretation: 'Gyulladás' }
              ],
              imaging: [
                { modality: 'CT/Rtg/UH', finding: 'Góckeresés', significance: 'Forrás kontroll miatt kulcsfontosságú' }
              ],
              microbiology: [
                { test: 'Hemokultúra', finding: 'Kórokozó azonosítás', significance: 'Célzott terápia alapja' },
                { test: 'Egyéb tenyésztés', finding: 'Vizelet, köpet, seb, liquor', significance: 'Góc függő' }
              ],
              scores: [
                'SOFA score (≥2 pont változás a baseline-hoz képest a szepszis definíciója)'
              ],
              calculators: [
                {
                  name: 'qSOFA (quick SOFA) - Szepszis szűrés',
                  items: [
                    { label: 'Légzésszám ≥ 22/perc', points: 1 },
                    { label: 'Megváltozott tudatállapot (GCS < 15)', points: 1 },
                    { label: 'Szisztolés vérnyomás ≤ 100 Hgmm', points: 1 }
                  ],
                  interpretation: [
                    { min: 0, max: 1, text: 'Alacsony kockázat. Monitorozás, szükség esetén újraértékelés.' },
                    { min: 2, max: 3, text: 'Magas kockázat a rossz kimenetelre. Szepszis gyanúja megerősítendő, SOFA pontszám felmérése javasolt.' }
                  ]
                }
              ]
            },
            differential: [
              { disease: 'Kardiogén shock', distinguishing: 'Echo (csökkent EF), emelkedett CVP/JVP' },
              { disease: 'Hypovolaemiás shock', distinguishing: 'Anamnézis (vérzés, folyadékvesztés), száraz nyálkahártyák' },
              { disease: 'Anafilaxia', distinguishing: 'Allergén expozíció, urticaria, stridor' },
              { disease: 'Mellékvesekéreg elégtelenség', distinguishing: 'Hyponatraemia, hyperkalaemia, kortizol szint' }
            ],
            therapy: {
              guidelines: ['Surviving Sepsis Campaign 2021'],
              empirical: {
                sepsis_six: {
                  title: 'Sepsis Six Csomag (Az első órán belül!)',
                  drugs: [
                    { drug: '1. Oxigén adása', dose: 'Cél SpO2 >94%', duration: 'Azonnal', note: 'Magas áramlású oxigén, ha szükséges.' },
                    { drug: '2. Hemokultúra levétele', dose: '2 szett', duration: 'AB előtt', note: 'Perifériás vénából (és kanülből ha van).' },
                    { drug: '3. IV Antibiotikum', dose: 'Széles spektrum', duration: '1 órán belül', note: 'Fókuszfüggő (pl. Pip/Tazo, Meropenem).' },
                    { drug: '4. Folyadékpótlás', dose: '30 ml/kg krisztalloid', duration: 'Bólusban', note: 'Hypotonia vagy Laktát ≥4 mmol/L esetén. Kiegyensúlyozott krisztalloid (pl. Ringer) preferált. Albumin adható nagy volumen esetén. HES/zselatin kerülendő!' },
                    { drug: '5. Laktát mérése', dose: 'Vérből', duration: 'Sorozatosan', note: 'Szöveti perfúzió monitorozása.' },
                    { drug: '6. Vizeletkibocsátás', dose: 'Monitorozás', duration: 'Óránként', note: 'Vesefunkció és folyadékegyensúly követése.' }
                  ]
                },
                icu: {
                  title: 'Intenzív terápiás kezelés',
                  drugs: [
                    { drug: 'Noradrenalin', dose: 'MAP >65 Hgmm tartása', duration: 'Folyamatos', note: 'Első választású vazopresszor.' },
                    { drug: 'Vazopresszin', dose: 'max 0.03 U/perc', duration: 'Folyamatos', note: 'Noradrenalin mellé adható.' },
                    { drug: 'Hidrokortizon', dose: '200mg/nap', duration: 'Folyamatos', note: 'Refrakter shock esetén.' }
                  ]
                }
              },
              targeted: 'Antibiogram alapján de-eszkaláció (PCT segíthet a döntésben). Forráskontroll (tályogdrenázs, nekrotikus szövet eltávolítása) elengedhetetlen.',
              supportive: ['Laktát-clearance követése', 'Lélegeztetés (ARDS protokoll)', 'Vesepótló kezelés (CRRT)', 'Vércukorkontroll', 'Trombózisprofilaxis', 'Stresszfekély-profilaxis'],
              prevention: ['Kórházi higiénia', 'Oltások (Pneumococcus, Influenza)', 'Katéterek korai eltávolítása', 'Megfelelő sebkezelés']
            },
            prognosis: {
              mortality: 'Szepszis: 10-20%, Szeptikus shock: 40-60%',
              prognostic_scores: ['SOFA score (≥2 ≥2 pont változás a baseline-hoz képest)', 'qSOFA (szűrés): RR ≥22/perc, Tudatzavar (GCS<15', 'APACHE II'],
              factors: 'Életkor, komorbiditás, laktát szint, shock időtartama, forrás kontroll sikere'
            }
          },
          {
            id: 'fuo',
            name: 'Ismeretlen eredetű láz (FUO)',
            pathogen: { type: 'Szindróma', name: 'Infekció, gyulladás, malignitás, autoimmun/egyéb okok', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'A lázok kb. 5-15%-a tartozik a FUO csoportba; a kiváltó okok közül a fertőzések, a daganatok és az autoimmun/gyulladásos betegségek a leggyakoribbak.',
              risk_groups: ['Idősek', 'Immunszupprimáltak', 'Onkológiai betegek', 'Krónikus gyulladásos betegségekben szenvedők'],
              seasonality: 'Nincs',
              transmission: 'Nem fertőző'
            },
            pathomechanism: {
              steps: [
                'A FUO nem egyetlen kórokozó vagy mechanizmus miatt alakul ki, hanem különböző betegségek közös klinikai megnyilvánulása.',
                'Az okok között gyakoriak a krónikus infekciók, a neoplasztikus folyamatok, az autoimmun/gyulladásos betegségek és bizonyos gyógyszerek vagy anyagcsere-betegségek.',
                'A láz kialakulásához rendszerint a gyulladásos mediátorok (pl. IL-1, IL-6, TNF-α) és a hőszabályozás módosulása szükséges.',
                'A diagnózis kulcsa a tartós láz háttér-okának, a klinikai tünetek és a vizsgálatok kombinációjával történő felderítése.'
              ],
              virulence_factors: ['Nincs egységes kórokozó-virulencia faktor; a kórfolyamat a kiváltó betegség mechanizmusától függ']
            },
            clinical: {
              incubation: 'Nincs egységes inkubációs idő',
              onset: 'Több hétig tartó, ismétlődő vagy állandó láz',
              symptoms: [
                { name: 'Láz', description: '>38,3°C, ismétlődően vagy legalább 3 héten át fennálló', severity: 'severe' },
                { name: 'Éjszakai izzadás', description: 'Gyakori, különösen infekciók és malignitások esetén', severity: 'moderate' },
                { name: 'Testsúlycsökkenés', description: 'Kísérő tünet lehet, különösen daganatok vagy krónikus betegségek esetén', severity: 'moderate' },
                { name: 'Fáradtság', description: 'Kimerültség, gyengeség, csökkent teljesítőképesség', severity: 'moderate' },
                { name: 'Lokális tünetek', description: 'Köhögés, hasfájás, nyirokcsomó-megnagyobbodás, ízületi panaszok, vizeletprobléma', severity: 'moderate' }
              ],
              physical_exam: [
                'Ismételt lázmérés, lázprofil',
                'Testsúly, állapot, perfúzió',
                'Nyirokcsomók, máj, lép, ízületek, szív, tüdő vizsgálata',
                'Bőrtünetek és fertőzésforrások keresése'
              ],
              complications: ['Késedelmes diagnózis', 'Súlyos alapbetegség kimaradhat', 'Fokozott morbiditás és mortalitás a kiváltó ok függvényében']
            },
            diagnostics: {
              laboratory: [
                { test: 'CBC, CRP, ESR', finding: 'Inflammációs jelek', interpretation: 'Induló szűrés' },
                { test: 'Vérkémia, máj- és vesefunkció', finding: 'Szervi érintettség', interpretation: 'Alapvizsgálat' },
                { test: 'PCT', finding: 'Bakteriális infekcióra utalhat', interpretation: 'Segít a fertőzés gyanújának finomításában' },
                { test: 'Autoimmun markerek', finding: 'ANA, RF, anti-CCP, stb.', interpretation: 'Autoimmun/gyulladásos okok felderítése' }
              ],
              imaging: [
                { modality: 'CT/PET-CT, UH, RTG', finding: 'Források, daganatok, abscessusok', significance: 'Fő vizsgálati eszköz a forrás felderítésére' }
              ],
              microbiology: [
                { test: 'Hemokultúra, vizelet, köpet, széklet, minták a tünetek alapján', finding: 'Infektív források', significance: 'Fertőzéses okok bizonyítása' }
              ],
              scores: ['Nincs egységes FUO-score'],
              calculators: [
                {
                  name: 'FUO definíció',
                  items: [
                    { label: 'Fever >38.3°C', points: 1 },
                    { label: 'Legalább 3 hét', points: 1 },
                    { label: 'A kezdeti vizsgálat után semmilyen diagnózis', points: 1 }
                  ],
                  interpretation: [
                    { min: 0, max: 1, text: 'Nem teljes FUO definíció.' },
                    { min: 2, max: 3, text: 'FUO gyanúja, részletes kivizsgálás indokolt.' }
                  ]
                }
              ]
            },
            differential: [
              { disease: 'Infekció', distinguishing: 'Tenyésztés, képalkotás, PCT, klinikai fókusz' },
              { disease: 'Onkológiai betegség', distinguishing: 'Testsúlyvesztés, éjszakai izzadás, PET-CT, tumor-markerek' },
              { disease: 'Autoimmun/gyulladásos betegség', distinguishing: 'CRP/ESR, ANA/RF, ízületi/egyéb szervi tünetek' },
              { disease: 'Gyógyszerreakció / anyagcsere-betegség', distinguishing: 'Új gyógyszer, eosinophilia, metabolikus eltérések' }
            ],
            therapy: {
              guidelines: ['A terápia a kiváltó ok alapján differenciált; a FUO nem önállóan kezelendő betegség.'],
              empirical: {
                outpatient: [
                  { drug: 'Nincs rutinszerű empirikus antibiotikum', dose: '-', duration: '-', note: 'A diagnózis felállítása előtt csak szigorú indikáció esetén.' }
                ],
                inpatient: [
                  { drug: 'Empirikus antimikróbás kezelés', dose: 'Indikáció szerint', duration: 'Rövid ideig', note: 'Csak súlyos fertőzés vagy klinikai gyanú esetén.' }
                ],
                icu: [
                  { drug: 'Súlyos sepsis/shock kezelése', dose: 'Szerint az aktuális protokoll', duration: 'Azonnal', note: 'Ha a láz sepsishez kapcsolódik.' }
                ]
              },
              targeted: 'A kiváltó ok alapján célzott kezelés: infekció esetén antimikróbás terápia, malignitásnál onkológiai kezelés, autoimmun betegség esetén immunszuppresszív terápia.',
              supportive: ['Folyadékpótlás', 'Lázcsillapítás', 'Rendszeres monitorozás', 'Tüneti kezelés'],
              prevention: ['A láz okának korai felderítése', 'Fertőzésforrások kezelése', 'Immunstatus és kockázati tényezők figyelemmel kísérése']
            },
            prognosis: {
              mortality: 'Az eredmény a kiváltó októl függ; a késői diagnózis és a neoplazma/komplex infekciók rosszabb kimenetelűek lehetnek.',
              prognostic_scores: ['Nincs egységes FUO-score'],
              factors: 'Kiváltó betegség, immunstatus, életkor, a vizsgálatok korai megkezdése'
            }
          },
          {
            id: 'pyomyositis',
            name: 'Pyomyositis',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus</i> (főleg), <i>Streptococcus pyogenes</i>, Gram-negatívok', gram: 'Gram-pozitív/negatív', shape: 'coccus/bacillus' },
            epidemiology: {
              incidence: 'Ritkább a fejlett országokban, gyakoribb trópusi régiókban és immunszuppresszált betegeknél',
              risk_groups: ['HIV/AIDS', 'Diabetes mellitus', 'Immunszuppresszió', 'IV droghasználók', 'Trauma, izomkárosodás', 'Újszülöttek/gyermekek'],
              seasonality: 'Nincs',
              transmission: 'Nem közvetlenül terjed; a bőrfertőzés/kolonizációból vagy véráramú szepszisből eredhet'
            },
            pathomechanism: {
              steps: [
                'A baktériumok a szöveti sérülés, a bőrfertőzés vagy a hematogén terjedés után bejutnak az izomba.',
                'A lokális gyulladásos válasz és a baktériumok szaporodása izomfibrillák károsodását, tályogképződést és szöveti nekrózist okozhat.',
                'A folyamat abscesszussá, majd szisztémás infekcióvá is progresszálhat.',
                'A leggyakoribb kórokozó a Staphylococcus aureus, de streptococcusok és gram-negatívok is előfordulhatnak.'
              ],
              virulence_factors: ['S. aureus biofilm/adhezinek', 'Kapszula', 'Exotoxinok', 'Szöveti invázió']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Lassú vagy akut',
              symptoms: [
                { name: 'Izomfájdalom', description: 'Egyetlen ízülethez nem kötődő, mély izomfájdalom, duzzanat', severity: 'severe' },
                { name: 'Láz', description: 'Közepes vagy magas láz', severity: 'moderate' },
                { name: 'Duzzanat és érzékenység', description: 'A fertőzött izom tapinthatóan érzékeny és megduzzadt', severity: 'moderate' },
                { name: 'Fáradtság', description: 'Általános rossz közérzet', severity: 'mild' }
              ],
              physical_exam: [
                'Fertőzött izom területén nyomásérzékenység, duzzanat',
                'Láz, tachycardia',
                'Ha abscessus alakul ki: jól behatárolható, fluctuatív tömzs',
                'Ritkán a környező izomzat vagy bőr is érintett'
              ],
              complications: ['Izomabscessus', 'Szeptikus thromboembolia', 'Szepszis', 'Kismedencei/egyéb tályogok', 'Krónikus fertőzés']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép, CRP', finding: 'Gyulladásos jelek', interpretation: 'Alapvizsgálat' },
                { test: 'Hemokultúra', finding: 'Pozitív lehet', interpretation: 'Bakteriémia felderítése' },
                { test: 'Kreatinkináz', finding: 'Emelkedhet', interpretation: 'Izomérintettség' }
              ],
              imaging: [
                { modality: 'UH / CT / MRI', finding: 'Izomnedvesség, tályog, gyulladás', significance: 'Legfontosabb képalkotó módszer' }
              ],
              microbiology: [
                { test: 'Tenyésztés', finding: 'Szeptum/aspirátum, ha lehetséges', significance: 'Kórokozó és rezisztencia' }
              ]
            },
            differential: [
              { disease: 'Izomrablás / hematoma', distinguishing: 'Nem fertőző, nincs gyulladás' },
              { disease: 'Cellulitis', distinguishing: 'Felszínesebb, kevésbé lokalizált' },
              { disease: 'Osteomyelitis', distinguishing: 'Csontérintettség, pozitív csontképalkotás' },
              { disease: 'DVT', distinguishing: 'Vénás trombózis, nincs abscessus' }
            ],
            therapy: {
              guidelines: ['Súlyos vagy tályogos esetben gyors antibiotikus és sebészi kezelés szükséges.'],
              empirical: {
                outpatient: [
                  { drug: 'Nincs', dose: '-', duration: '-', note: 'Súlyos vagy abscessusos esetben kórházi kezelés.' }
                ],
                inpatient: [
                  { drug: 'Anti-staphylococcal IV therapy', dose: 'Nafcillin/Cefazolin vagy Vancomycin', duration: '7-14 nap', note: 'MRSA gyanú esetén vancomycin.' }
                ],
                icu: [
                  { drug: 'Súlyos sepsis/sokk', dose: 'Szerint protokoll', duration: 'Azonnal', note: 'Intenzív ellátás és forráskontroll.' }
                ]
              },
              targeted: 'Kultúra/aspiráció alapján célzott antibiotikum, abscessus esetén drenázs.',
              supportive: ['Fájdalomcsillapítás', 'Folyadékpótlás', 'Monitorozás', 'Sebészi drén'],
              prevention: ['Bőrfertőzések kezelése', 'Károsodott bőr védelme', 'Immunszuppresszió kezelése']
            },
            prognosis: {
              mortality: 'Általában alacsony, de immunoszuppresszált vagy későn kezelt esetekben magasabb',
              prognostic_scores: ['Nincs egységes score'],
              factors: 'Kórokozó, immunstatus, késői diagnózis, abscessus jelenléte'
            }
          },
          {
            id: 'toxic_shock',
            name: 'Toxikus shock szindróma (TSS)',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus, Streptococcus pyogenes</i>', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Ritka (Staph: 0.5/100,000, Strep: 3/100,000)',
              risk_groups: ['Menstruáló nők (tampon - ritkább ma már)', 'Sebészi betegek', 'Égési sérültek', 'Bőrfertőzések'],
              seasonality: 'Nincs',
              transmission: 'Nem közvetlenül terjed (toxin mediált)'
            },
            pathomechanism: {
              steps: [
                'A Staphylococcus aureus vagy Streptococcus pyogenes lokális fertőzése vagy kolonizációja során exotoxinokat (pl. TSST-1, SpeA) termel.',
                'Ezek a toxinok szuperantigénként viselkednek: az antigén-prezentáló sejtek MHC II molekuláihoz és a T-sejt receptorokhoz kötődve a T-sejtek akár 20%-át is nem-specifikusan aktiválják (normál esetben <0.01%).',
                'Ez a masszív T-sejt aktiváció kontrollálatlan citokinviharhoz (TNF-α, IL-1, IL-6) vezet.',
                'A citokinek hatására súlyos kapilláris szivárgás, értágulat és hipotenzió alakul ki, ami gyorsan sokkhoz és többszervi elégtelenséghez vezet.'
              ],
              virulence_factors: ['TSST-1 (Staph)', 'Streptococcal Pyrogenic Exotoxins (Spe)', 'M-protein (Strep)']
            },
            clinical: {
              incubation: 'Gyors (órák-napok)',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Magas láz', description: '>38.9°C (hirtelen kezdet)', severity: 'severe' },
                { name: 'Hypotonia', description: 'Szisztolés RR <90 Hgmm felnőttnél, orthostaticus szédülés', severity: 'severe' },
                { name: 'Diffúz erythroderma', description: 'Napégés-szerű kiütés (Staph TSS-nél >90%, Strep TSS-nél ritkább)', severity: 'moderate' },
                { name: 'Multiszisztémás tünetek', description: 'GI (hányás/hasmenés), Izomfájdalom (CK emelkedés), Nyálkahártya hyperaemia', severity: 'severe' },
                { name: 'Hámlás', description: '1-2 héttel a kezdet után (tenyér/talp)', severity: 'mild' }
              ],
              physical_exam: [
                'Diffúz vörös kiütés (erythroderma)',
                'Hypotonia, tachycardia',
                'Nyálkahártya hyperaemia (conjunctiva, oropharynx, vagina)',
                'Epernyelv (főleg Strep TSS)',
                'Tudatzavar (55%)',
                'Lokális lágyrészfertőzés jelei (Strep TSS: nekrotizáló fasciitis, myositis)'
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
              { disease: 'Szepszis (egyéb)', distinguishing: 'Nincs jellegzetes kiütés/hámlás' },
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
                  { drug: 'Clindamycin', dose: '900mg IV 8 óránként', duration: '', note: 'Toxintermelés gátlása! (Kulcsfontosságú)' },
                  { drug: '+ Vancomycin/Linezolid', dose: 'IV', duration: '', note: 'MRSA fedezet' },
                  { drug: '+ Pip/Tazo vagy Meropenem', dose: 'IV', duration: '', note: 'Polimikrobiális gyanú esetén' }
                ],
                icu: [
                  { drug: 'IVIG', dose: '1-2g/kg', duration: 'Egyszeri', note: 'Toxinsemlegesítés (Strep TSS)' },
                  { drug: 'Vazopresszorok', dose: 'Noradrenalin', duration: '', note: 'Shock kezelése' }
                ]
              },
              targeted: 'Staph (MSSA): Flucloxacillin (Cefazolin) + Clindamycin; MRSA: Vancomycin + Clindamycin. Strep: Penicillin G + Clindamycin (toxin gátlás). IVIG súlyos esetben. Forráskontroll (tamponeltávolítás, sebészi feltárás) elengedhetetlen!',
              supportive: ['Masszív volumenpótlás', 'Lélegeztetés', 'Dialízis', 'Sebkezelés'],
              prevention: ['Tamponhigiénia (gyakori csere)', 'Sebfertőtlenítés']
            },
            prognosis: {
              mortality: 'Staph TSS: <3%, Strep TSS: 30-70%',
              prognostic_scores: ['SOFA'],
              factors: 'Kórokozó (Strep rosszabb), életkor, alapbetegség'
            }
          }
        ]
      },
      fungal: {
        name: 'Gombás fertőzések',
        icon: window.diseaseMetadata.fungal.icon,
        color: window.diseaseMetadata.fungal.color,
        diseases: [
          {
            id: 'candidiasis',
            name: 'Invazív Candidiasis',
            pathogen: { type: 'Gomba', name: '<i>Candida albicans</i> (és non-albicans fajok)', gram: 'Sarjadzó gomba', shape: 'ovális' },
            epidemiology: {
              incidence: 'Nozokomiális véráramfertőzések 4. leggyakoribb oka',
              risk_groups: ['ICU betegek', 'Centrális vénás katéter (CVC)', 'Széles spektrumú AB', 'TPN', 'Hasi műtét'],
              seasonality: 'Nincs',
              transmission: 'Endogén (GI traktusból), exogén (kéz, eszközök)'
            },
            pathomechanism: {
              steps: [
                'Mucosa-barrier sérülése (AB, kemo)',
                'Transzlokáció a véráramba',
                'Biofilmképzés (katéter)',
                'Hematogén szóródás (szem, szív, máj, lép)'
              ],
              virulence_factors: ['Biofilm', 'Adhezinek', 'Enzimek (proteáz, foszfolipáz)']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Lassú vagy akut',
              symptoms: [
                { name: 'Perzisztáló láz', description: 'Antibiotikumra nem reagáló láz (gyakori)', severity: 'severe' },
                { name: 'Szepszis/Szeptikus shock', description: 'Hypotonia, tachycardia, tudatzavar', severity: 'severe' },
                { name: 'Endophthalmitis', description: 'Látászavar, szemfájdalom (10-20% candidemia esetén)', severity: 'moderate' },
                { name: 'Bőrtünetek', description: 'Erythemás papulák/pustulák (5-10%)', severity: 'mild' },
                { name: 'Hepatosplenikus candidiasis', description: 'Láz, hasi fájdalom neutropenia után', severity: 'moderate' }
              ],
              physical_exam: [
                'Láz, hemodinamikai instabilitás (sepsis/shock jelei)',
                'Szemfenéki vizsgálat (kötelező!): Fehér, vattaszerű gócok (Roth-folt), chorioretinitis',
                'Bőrtünetek: Erythemás papulák vagy pustulák',
                'Új szívzörej (endocarditis gyanú)',
                'Izomérzékenység (myositis)'
              ],
              complications: ['Szeptikus shock', 'Endophthalmitis (vakság)', 'Endocarditis', 'Osteomyelitis', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Hemokultúra', finding: 'Pozitív (csak 50-70% érzékeny!)', interpretation: 'Gold standard' },
                { test: 'Beta-D-glükán', finding: 'Emelkedett (>80 pg/mL)', interpretation: 'Pan-fungális marker (kivéve Mucor/Crypto)' }
              ],
              imaging: [
                { modality: 'Hasi UH/CT', finding: 'Microabscessusok (máj, lép)', significance: 'Krónikus disszeminált' },
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
              prevention: ['Kézmosás', 'Katétergondozás', 'Profilaxis (transzplantáltak)']
            },
            prognosis: {
              mortality: '30-40% (szeptikus shock esetén magasabb)',
              prognostic_scores: ['Candida score'],
              factors: 'Forráskontroll (katéter), korai terápia'
            }
          },
          {
            id: 'aspergillosis',
            name: 'Invasive Aspergillosis',
            pathogen: { type: 'Gomba', name: '<i>Aspergillus fumigatus</i>', gram: 'Penészgomba', shape: 'hifák (45° elágazás)' },
            epidemiology: {
              incidence: 'Neutropéniás betegek 5-10%-a',
              risk_groups: ['Prolongált neutropenia', 'Allogén őssejt-transzplantáció', 'Szolid szervtranszplantáció', 'Nagydózisú szteroid'],
              seasonality: 'Nincs (építkezés pora rizikó)',
              transmission: 'Konídiumok inhalációja (levegőből)'
            },
            pathomechanism: {
              steps: [
                'Konídiumok belégzése az alveolusokba',
                'Makrofág-funkció zavara (immunszuppresszió)',
                'Germináció hifákká',
                'Angioinvázió (erekbe törés)',
                'Thrombózis, infarktus, szöveti nekrózis',
                'Hematogén szóródás (agy, bőr)'
              ],
              virulence_factors: ['Angioinvázió', 'Gliotoxin', 'Melanin']
            },
            clinical: {
              incubation: 'Napok-hetek (immunszuppresszió alatt)',
              onset: 'Szubakut/Akut',
              symptoms: [
                { name: 'Láz', description: 'Antibiotikumra nem reagáló láz (leggyakoribb jel neutropéniában)', severity: 'severe' },
                { name: 'Köhögés', description: 'Száraz vagy produktív köhögés', severity: 'moderate' },
                { name: 'Pleurális mellkasi fájdalom', description: 'Éles, szúró fájdalom (angioinvázió jele)', severity: 'moderate' },
                { name: 'Haemoptysis', description: 'Véres köpet (késői, súlyos jel)', severity: 'severe' },
                { name: 'Sinusitis tünetek', description: 'Arcfájdalom, fekete orrváladék (rinoszinuszitisz forma)', severity: 'moderate' }
              ],
              physical_exam: [
                'Láz, tachypnoe',
                'Tüdő felett hallgatózva lehet szegényes lelet, vagy pleurális dörzszörej',
                'Orr/melléküreg vizsgálat: Fekete, nekrotikus pörk az orrkagylón (invazív sinusitis)',
                'Fokális neurológiai jelek (agyi disszemináció)',
                'Bőrtünetek (nekrotikus fekélyek disszeminált esetben)'
              ],
              complications: ['Masszív tüdővérzés', 'Agyi tályog', 'Disseminált aspergillosis', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Galaktomannán (GM)', finding: 'Index >0.5', interpretation: 'Szérum vagy BAL (specifikus Aspergillusra)' },
                { test: 'Beta-D-glükán', finding: 'Pozitív', interpretation: 'Nem specifikus' }
              ],
              imaging: [
                { modality: 'Mellkas CT', finding: 'Halo-jel (korai), Levegő-félhold jel (késői), nodulusok', significance: 'Gold standard képalkotó' }
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
                  { drug: 'Liposzómás Amphotericin B', dose: '3-5mg/kg IV', duration: '', note: 'Alternatíva' }
                ]
              },
              targeted: 'Voriconazol vagy Isavuconazol. Salvage: L-AmB, Caspofungin (kombináció vitatott).',
              supportive: ['Immunszuppresszió csökkentése (ha lehet)', 'G-CSF (neutropenia rendezése)', 'Sebészi reszekció (masszív haemoptoe)'],
              prevention: ['Posaconazol profilaxis (neutropenia)', 'HEPA-szűrős szobák', 'Maszkviselés']
            },
            prognosis: {
              mortality: 'Magas (30-80% rizikócsoporttól függően)',
              prognostic_scores: ['Nincs'],
              factors: 'Neutropenia tartama, agyi érintettség, terápia kezdete'
            }
          }
        ]
      },
});
