Object.assign(window.diseases, {
      sepsis_systemic: {
        name: 'Sepszis és szisztémás fertőzések',
        icon: window.diseaseMetadata.sepsis_systemic.icon,
        color: window.diseaseMetadata.sepsis_systemic.color,
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
                { name: 'Láz vagy Hypothermia', description: '>38°C vagy <36°C (betegek 10-20%-a hypothermiás)', severity: 'severe' },
                { name: 'Tudatzavar', description: 'GCS <15, agitáció, letargia (gyakori korai jel időseknél)', severity: 'severe' },
                { name: 'Hypotonia', description: 'Systolés RR <100 Hgmm vagy MAP <65 Hgmm', severity: 'severe' },
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
              guidelines: ['Surviving Sepsis Campaign 2021'],
              empirical: {
                initial_management: [
                  { drug: 'Antibiotikumok', dose: 'Széles spektrumú IV', duration: '1 órán belül!', note: 'Hemokultúra levétele után. Fókuszfüggő választás (pl. Pip/Tazo, Meropenem).' },
                  { drug: 'Folyadékreszuszcitáció', dose: '30 ml/kg krisztalloid', duration: 'Első 3 órában', note: 'Hypotonia vagy laktát ≥4 mmol/L esetén.' }
                ],
                icu: [
                  { drug: 'Noradrenalin', dose: 'MAP >65 Hgmm tartása', duration: 'Folyamatos', note: 'Első választású vazopresszor.' },
                  { drug: 'Vazopresszin', dose: 'max 0.03 U/perc', duration: 'Folyamatos', note: 'Noradrenalin mellé adható a dózis csökkentésére vagy ha a dózis magas.' },
                  { drug: 'Hidrokortizon', dose: '200mg/nap (pl. 50mg 6 óránként)', duration: 'Folyamatos', note: 'Ha a vazopresszor igény perzisztál (refrakter shock).' }
                ]
              },
              targeted: 'Antibiogram alapján de-eszkaláció (PCT segíthet a döntésben). Forrás kontroll (tályog drenázs, nekrotikus szövet eltávolítás) elengedhetetlen.',
              supportive: ['Laktát-clearance követése', 'Lélegeztetés (ARDS protokoll)', 'Vesepótló kezelés (CRRT)', 'Vércukor kontroll', 'Trombózis profilaxis', 'Stress fekély profilaxis'],
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
                { name: 'Magas láz', description: '>38.9°C (hirtelen kezdet)', severity: 'severe' },
                { name: 'Hypotonia', description: 'Systolés RR <90 Hgmm (felnőtt), orthostaticus szédülés', severity: 'severe' },
                { name: 'Diffúz erythroderma', description: 'Napégés-szerű kiütés (Staph: >90%, Strep: ritkább)', severity: 'moderate' },
                { name: 'Multiszisztémás tünetek', description: 'GI (hányás/hasmenés), Izomfájdalom (CK emelkedés), Nyálkahártya hyperaemia', severity: 'severe' },
                { name: 'Hámlás', description: '1-2 héttel a kezdet után (tenyér/talp)', severity: 'mild' }
              ],
              physical_exam: [
                'Diffúz vörös kiütés (erythroderma)',
                'Hypotonia, tachycardia',
                'Nyálkahártya hyperaemia (conjunctiva, oropharynx, vagina)',
                'Epernyelv (főleg Strep TSS)',
                'Tudatzavar (55%)',
                'Lokális lágyrész fertőzés jelei (Strep TSS: nekrotizáló fasciitis, myositis)'
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
      },
      fungal: {
        name: 'Gombás fertőzések',
        icon: window.diseaseMetadata.fungal.icon,
        color: window.diseaseMetadata.fungal.color,
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
                { name: 'Perzisztáló láz', description: 'Antibiotikumra nem reagáló láz (gyakori)', severity: 'severe' },
                { name: 'Sepszis/Szeptikus shock', description: 'Hypotonia, tachycardia, tudatzavar', severity: 'severe' },
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
      },
});
